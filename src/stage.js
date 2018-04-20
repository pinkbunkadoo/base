import Shape from './display/shape';
import Group from './display/group';

class Stage {
  constructor(params={}) {
    this.children = [];
    this.selection = [];

    this.el = document.createElement('div');
    this.el.classList.add('stage');

    this.canvas = document.createElement('canvas');
    this.canvas.width = 320;
    this.canvas.height = 200;

    this.el.appendChild(this.canvas);

    this.cursor = document.createElement('div');
    this.cursor.classList.add('stage-cursor');
    // this.el.appendChild(this.cursor);

    window.addEventListener('mousedown', this);
    window.addEventListener('mouseup', this);
    window.addEventListener('mousemove', this);

  }

  dom() {
    return this.el;
  }

  add(stageObject) {
    // console.log('add', stageObject);
    this.children.push(stageObject);
    stageObject.addedToStage();
    // stageObject.on('mousedown', (obj) => {
    //   // if (this.selection.includes(obj)) {
    //   //   this.selection = this.selection.filter(element => element !== obj);
    //   //   obj.deselect();
    //   // }
    //   this.deselect();
    //   this.selection = [ obj ];
    //   obj.select();
    // });
    this.render();
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

  renderShape(shape) {
    let ctx = this.canvas.getContext('2d');
    ctx.strokeStyle = shape.stroke || 'transparent';
    ctx.fillStyle = shape.fill || 'transparent';

    ctx.beginPath();

    for (var j = 0; j < shape.points.length; j++) {
      let p = shape.points[j];
      if (j == 0)
        ctx.moveTo(p.x, p.y);
      else
        ctx.lineTo(p.x, p.y);
    }
    if (shape.closed) ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  renderObject(stageObject) {
    if (stageObject instanceof Group) {
      for (var i = 0; i < stageObject.children.length; i++) {
        let child = stageObject.children[i];
        this.renderObject(child);
      }
    }
    else if (stageObject instanceof Shape) {
      this.renderShape(stageObject);
    }
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (var i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      this.renderObject(child);
      if (child.selected) {
        ctx.strokeStyle = 'cyan';
        ctx.beginPath();
        ctx.rect(child.x-4+0.5, child.y-4+0.5, 8, 8);
        ctx.stroke();
      }
    }
  }

  onMouseDown(event) {
    let x = event.offsetX;
    let y = event.offsetY;

    let hit = false;

    for (var i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      if (child.hitTest(x, y)) {
        // console.log('hit', child);
        child.select();
        this.selection = [ child ];
        hit = true;
      }
    }

    if (!hit) {
      this.deselect();
    }

    this.render();
    // if (event.target == this.el) {
    //   this.deselect();
    // }
  }

  onMouseUp(event) {
  }

  onMouseMove(event) {
    this.cursorx = event.pageX - this.el.offsetLeft;
    this.cursory = event.pageY - this.el.offsetTop;

    this.cursor.style.left = this.cursorx + 'px';
    this.cursor.style.top = this.cursory + 'px';
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
  }
}

export default Stage;
