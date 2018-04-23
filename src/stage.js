import Util from './util';
import Shape from './display/shape';
import Group from './display/group';

class Stage {
  constructor(params={}) {
    this.children = [];
    this.selection = [];

    this.el = document.createElement('div');
    this.el.classList.add('stage');

    this.canvas = document.createElement('canvas');
    this.canvas.width = params.width || 320;
    this.canvas.height = params.height || 200;

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

  add(stageObject) {
    this.children.push(stageObject);
    stageObject.addedToStage();
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

  renderShape(shape, highlight) {
    let points = shape.getPoints();

    let ctx = this.canvas.getContext('2d');
    ctx.save();

    // ctx.translate(0.5, 0.5);

    ctx.beginPath();

    for (var j = 0; j < points.length; j++) {
      let p = points[j];
      if (j == 0)
        ctx.moveTo(p.x + shape.x, p.y + shape.y);
      else
        ctx.lineTo(p.x + shape.x, p.y + shape.y);
    }

    if (shape.closed) ctx.closePath();

    if (highlight) {
      // ctx.strokeStyle = 'cyan';
      // ctx.lineWidth = 4;
      // ctx.stroke();
    }

    ctx.lineWidth = 1;
    ctx.strokeStyle = shape.stroke || 'transparent';
    ctx.fillStyle = shape.fill || 'transparent';

    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  renderHints(stageObject) {
    let ctx = this.canvas.getContext('2d');
    ctx.strokeStyle = stageObject.selected ? 'red' : 'blue';
    ctx.beginPath();
    ctx.arc(stageObject.x >> 0, stageObject.y >> 0, 3, 0, Math.PI * 2, false);
    ctx.stroke();
    let bounds = stageObject.getBounds();
    if (bounds) {
      ctx.strokeStyle = stageObject.selected ? 'red' : 'blue';
      ctx.beginPath();
      ctx.rect((stageObject.x) + bounds.x + 0.5, (stageObject.y) + bounds.y + 0.5, bounds.width, bounds.height);
      ctx.stroke();
    }
  }

  renderObject(stageObject, highlight) {
    if (stageObject instanceof Group) {
      for (var i = 0; i < stageObject.children.length; i++) {
        let child = stageObject.children[i];
        this.renderObject(child, highlight);
      }
    }
    else if (stageObject instanceof Shape) {
      this.renderShape(stageObject, highlight);
    }
    if (stageObject.selected) this.renderHints(stageObject);
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (var i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      this.renderObject(child, this.target == child);
    }

    if (this.mode == 'marquee') {
      ctx.save();
      ctx.translate(0.5, 0.5);
      ctx.strokeStyle = 'gray';
      ctx.globalCompositeOperation = 'exclusion';
      ctx.beginPath();
      // ctx.moveTo(this.marquee[0], this.marquee[1]);
      // ctx.lineTo(this.marquee[2], this.marquee[1]);
      // ctx.lineTo(this.marquee[2], this.marquee[3]);
      // ctx.lineTo(this.marquee[0], this.marquee[3]);
      ctx.moveTo(this.downX, this.downY);
      ctx.lineTo(this.cursorX, this.downY);
      ctx.lineTo(this.cursorX, this.cursorY);
      ctx.lineTo(this.downX, this.cursorY);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
  }

  toggleStroke() {
    if (this.target instanceof Shape) {
      this.target.stroke = this.target.stroke ? null : 'black';
      this.render();
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
      let hit = this.hitTest(this.cursorX, this.cursorY);
      if (hit) {
        this.target = hit;
      } else {
        if (this.target) {
          this.target = null;
        }
      }
    }

    this.lastX = this.cursorX;
    this.lastY = this.cursorY;

  }

  onKeyDown(event) {
    if (event.key == 's' && !event.repeat) {
      this.toggleStroke();
    }
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
