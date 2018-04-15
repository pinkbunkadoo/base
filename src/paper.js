import { EventDispatcher } from './events';
import util from './util';
import Circle from './geom/circle';

class Paper extends EventDispatcher {
  constructor(params={}) {
    super();

    this.points = [];

    this.el = document.createElement('div');
    this.el.classList.add('paper');

    this.canvas = document.createElement('canvas');
    this.adjustCanvas();

    this.el.appendChild(this.canvas);

    this.el.addEventListener('mousedown', this);
    this.el.addEventListener('mousemove', this);
    this.el.addEventListener('mouseup', this);
    this.el.addEventListener('dblclick', this);
    this.el.addEventListener('contextmenu', this);

    this.setVisible(params.visible !== undefined ? params.visible : true);

    // this.circle = { x: 0, y: 0, r: 80 };
    // this.line = { x1: 10, y1: 50, x2: 100, y2: 50 };
    //
    // util.circleLineIntersection(
    //   this.circle.x, this.circle.y, this.circle.r,
    //   this.line.x1, this.line.y1, this.line.x2, this.line.y2
    // );
  }

  adjustCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setVisible(visible) {
    this.visible = visible;
    if (this.visible)
      this.el.style.display = 'block';
    else
      this.el.style.display = 'none';
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    for (var i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      if (i == 0)
        ctx.moveTo(p.x, p.y);
      else
        ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.cursorX, this.cursorY, 25, 0, Math.PI * 2, false);
    ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(this.line.x1, this.line.y1);
    // ctx.lineTo(this.line.x2, this.line.y2);
    // ctx.stroke();

    if (this.points.length) {
      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      let p = this.points[this.points.length - 1];
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(this.cursorX, this.cursorY);
      ctx.stroke();
    }

    let line = { x1: 100, y1: 60, x2: 150, y2: 120 };

    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.stroke();

    let line2 = { x1: 100, y1: 60, x2: this.cursorX, y2: this.cursorY };
    ctx.beginPath();
    ctx.moveTo(line2.x1, line2.y1);
    ctx.lineTo(line2.x2, line2.y2);
    ctx.stroke();

  }

  clear() {
    this.points = [];
    this.render();
  }

  closeShape() {
    this.emit('shape', this.points);
    this.render();
  }

  onMouseDown(event) {
    // console.log(event.button);
    if (event.button == 0) {
      this.points.push({ x: event.offsetX, y: event.offsetY });
      // this.render();
    }
    // else if (event.button == 2) {
    //   this.closeShape();
    // }
  }

  onMouseUp(event) {
  }

  onMouseMove(event) {
    this.cursorX = event.offsetX;
    this.cursorY = event.offsetY;
    this.render();
  }

  onDblClick(event) {
    this.closeShape();
  }

  onKeyDown(event) {
    if (event.key == 'Escape') {
      this.closeShape();
    }
    // console.log(event.key);
  }

  onContextMenu(event) {
    event.preventDefault();
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
    else if (event.type == 'dblclick') {
      this.onDblClick(event);
    }
    else if (event.type == 'keydown') {
      this.onKeyDown(event);
    }
    else if (event.type == 'contextmenu') {
      this.onContextMenu(event);
    }
  }
}

export default Paper;
