import Util from './util';
import Shape from './display/shape';
import Group from './display/group';

class Stage {
  constructor(params={}) {
    this.children = [];
    this.selection = [];
    this.context = null;

    this.el = document.createElement('div');
    this.el.classList.add('stage');

    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth; //params.width || 320;
    this.canvas.height = window.innerHeight; //params.height || 200;

    this.el.appendChild(this.canvas);

    this.cursor = document.createElement('div');
    this.cursor.classList.add('stage-cursor');

    window.addEventListener('mousedown', this);
    window.addEventListener('mouseup', this);
    window.addEventListener('mousemove', this);
  }

  dom() {
    return this.el;
  }

  add(transform) {
    this.children.push(transform);
    transform.addedToStage();
    transform.on('valuechange', () => {
      this.render();
    });
    this.render();
  }

  edit() {
    if (this.context) {
    }
    else {
      if (this.selection.length) {
        this.context = this.selection[0];
      }
      else {
        let group = new Group();
        group.x = (this.canvas.width / 2) >> 0;
        group.y = (this.canvas.height / 2) >> 0;
        this.context = group;
      }
    }
    this.render();
  }

  selectMarquee(xmin, ymin, xmax, ymax) {
    if (xmin > xmax) [xmin, xmax] = [ xmax, xmin ];
    if (ymin > ymax) [ymin, ymax] = [ ymax, ymin ];
    let selection = [];
    for (var i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      if (child instanceof Shape) {
        if (child.intersectsRectangle(xmin, ymin, xmax, ymax)) {
          selection.push(child);
          child.select();
        }
      }
    }
    this.selection = selection;
  }

  deselect() {
    if (this.selection.length) {
      for (var i = 0; i < this.selection.length; i++) {
        this.selection[i].deselect();
      }
      this.selection = [];
    }
    this.render();
  }

  renderShape(shape, x, y) {
    // console.log('renderShape', shape);
    let points = shape.getPoints();

    let ctx = this.canvas.getContext('2d');
    ctx.save();

    ctx.translate(x, y);

    ctx.beginPath();

    for (var j = 0; j < points.length; j++) {
      let p = points[j];
      // console.log(p);
      if (j == 0)
        ctx.moveTo(p.x + shape.x, p.y + shape.y);
      else
        ctx.lineTo(p.x + shape.x, p.y + shape.y);
    }

    if (shape.closed) ctx.closePath();

    // if (highlight) {
      // ctx.strokeStyle = 'cyan';
      // ctx.lineWidth = 4;
      // ctx.stroke();
    // }

    ctx.lineWidth = 1;
    ctx.strokeStyle = shape.stroke || 'transparent';
    ctx.fillStyle = shape.fill || 'transparent';

    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  // renderHints(transform) {
  //   let ctx = this.canvas.getContext('2d');
  //   ctx.save();
  //   ctx.translate(0.5, 0.5);
  //   ctx.strokeStyle = transform.selected ? 'red' : 'blue';
  //   ctx.beginPath();
  //   ctx.arc(transform.x, transform.y, 3, 0, Math.PI * 2, false);
  //   ctx.stroke();
  //   let bounds = transform.getBounds();
  //   if (bounds) {
  //     ctx.strokeStyle = transform.selected ? 'red' : 'blue';
  //     ctx.beginPath();
  //     ctx.rect(bounds.x, bounds.y, bounds.width, bounds.height);
  //     ctx.stroke();
  //   }
  //   ctx.restore();
  // }

  renderObject(transform) {
    if (transform instanceof Group) {
      for (var i = 0; i < transform.children.length; i++) {
        let child = transform.children[i];
        this.renderShape(child, transform.x, transform.y);
      }
    }
    // if (transform.selected) this.renderHints(transform);
  }

  renderHints(x, y) {
    let size = 10;
    let ctx = this.canvas.getContext('2d');
    // let x = (this.canvas.width / 2) >> 0;
    // let y = (this.canvas.height / 2) >> 0;
    ctx.save();
    ctx.translate(0.5, 0.5);
    ctx.beginPath();
    ctx.strokeStyle = 'lightgray';
    ctx.moveTo(x - size, y);
    ctx.lineTo(x + size, y);
    ctx.moveTo(x, y - size);
    ctx.lineTo(x, y + size);
    ctx.stroke();
    ctx.restore();
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (var i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      this.renderObject(child);
    }

    if (this.context) {
      ctx.fillStyle = 'white';
      ctx.globalAlpha = 0.5;
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.globalAlpha = 1;
      this.renderAxis(this.context.x, this.context.y);
    }

    if (this.mode == 'marquee') {
      ctx.save();
      ctx.translate(0.5, 0.5);
      ctx.strokeStyle = 'gray';
      ctx.globalCompositeOperation = 'exclusion';
      ctx.beginPath();
      ctx.moveTo(this.downX, this.downY);
      ctx.lineTo(this.cursorX, this.downY);
      ctx.lineTo(this.cursorX, this.cursorY);
      ctx.lineTo(this.downX, this.cursorY);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

  }

  moveSelectionBy(dx, dy) {
    for (var i = 0; i < this.selection.length; i++) {
      let item = this.selection[i];
      item.x += dx;
      item.y += dy;
    }
    this.render();
  }

  beginDrag() {
    this.mode = 'drag';
  }

  cancelDrag() {
    this.mode = null;
  }

  beginMarquee(xmin, ymin, xmax, ymax) {
    this.mode = 'marquee';
  }

  cancelMarquee() {
    this.mode = null;
    this.render();
  }

  hitTest(x, y) {
    for (var i = this.children.length - 1; i >= 0; i--) {
      let child = this.children[i];
      if (child.hitTest(x, y)) {
        return child;
      }
    }
    return null;
  }

  onMouseDown(event) {
    this.cursorX = event.pageX - this.el.offsetLeft;
    this.cursorY = event.pageY - this.el.offsetTop;

    this.downX = this.cursorX;
    this.downY = this.cursorY;

    let hit = this.hitTest(this.cursorX, this.cursorY);
    if (hit) {
      if (this.selection.includes(hit)) {

      } else {
        this.deselect();
        this.selection = [ hit ];
        hit.select();
      }
    }
    else {
      this.deselect();
    }

    this.render();
  }

  onMouseUp(event) {
    if (this.mode == 'drag')
      this.cancelDrag();
    else if (this.mode == 'marquee') {
      this.selectMarquee(this.downX, this.downY, this.cursorX, this.cursorY);
      this.cancelMarquee();
    }
  }

  onMouseMove(event) {
    this.cursorX = event.pageX - this.el.offsetLeft;
    this.cursorY = event.pageY - this.el.offsetTop;

    this.deltaX = this.lastX ? this.cursorX - this.lastX : 0;
    this.deltaY = this.lastY ? this.cursorY - this.lastY : 0;

    if (event.buttons & 1) {
      if (this.mode == 'drag') {
        if (this.selection.length) {
          this.moveSelectionBy(this.deltaX, this.deltaY);
        }
      }
      else if (this.mode == 'marquee') {
        this.render();
      }
      else {
        let dx = this.cursorX - this.downX;
        let dy = this.cursorY - this.downY;
        if (this.selection.length) {
          if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) {
            this.beginDrag();
            this.moveSelectionBy(dx, dy);
          }
        }
        else {
          this.beginMarquee(this.downX, this.downY, this.downX + dx, this.downY + dy);
        }
      }
    }
    else {
      // let hit = this.hitTest(this.cursorX, this.cursorY);
      // if (hit) {
      //   this.target = hit;
      // } else {
      //   if (this.target) {
      //     this.target = null;
      //   }
      // }
    }

    this.lastX = this.cursorX;
    this.lastY = this.cursorY;

  }

  onKeyDown(event) {
    // if (event.key == 's' && !event.repeat) {
    //   this.toggleStroke();
    // }
  }

  handleEvent(event) {
    if (event.type == 'mousedown') {
      this.onMouseDown(event);
    }
    else if (event.type == 'mouseup') {
      this.onMouseUp(event);
    }
    else if (event.type == 'mousemove') {
      this.onMouseMove(event);
    }
    else if (event.type == 'keydown') {
      this.onKeyDown(event);
    }
  }
}

export default Stage;
