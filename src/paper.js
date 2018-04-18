import { EventDispatcher } from './events';
import Point from './geom/point';
import Vector from './geom/vector';
import Circle from './geom/circle';
import Shape from './display/shape';

let SNAP_RADIUS = 3;

class Paper extends EventDispatcher {
  constructor(params={}) {
    super();

    this.points = [];
    this.shapes = [];
    this.fill = 'cyan';
    this.stroke = 'green';

    this.el = document.createElement('div');
    this.el.classList.add('paper');

    this.canvas = document.createElement('canvas');
    this.adjustCanvas();

    this.el.appendChild(this.canvas);

    this.setVisible(params.visible !== undefined ? params.visible : true);

    this.listeners = [ 'mousedown', 'mousemove', 'mouseup', 'dblclick', 'contextmenu' ];

    this.cursor = document.createElement('div');
    this.cursor.classList.add('paper-cursor');

    this.el.appendChild(this.cursor);
  }

  addListeners() {
    for (var i = 0; i < this.listeners.length; i++) {
      window.addEventListener(this.listeners[i], this);
    }
  }

  removeListeners() {
    for (var i = 0; i < this.listeners.length; i++) {
      window.removeEventListener(this.listeners[i], this);
    }
  }

  setVisible(visible) {
    if (this.visible !== visible) {
      this.visible = visible;
      if (this.visible) {
        this.el.style.display = 'block';
        this.addListeners();
      } else {
        this.el.style.display = 'none';
        this.removeListeners();
      }
    }
  }

  adjustCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  drawLine(x1, y1, x2, y2, color) {
    let ctx = this.canvas.getContext('2d');
    ctx.strokeStyle = color || 'black';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  drawPath(points, closed=false) {
    let ctx = this.canvas.getContext('2d');
    ctx.strokeStyle = this.stroke;
    ctx.fillStyle = this.fill;
    ctx.beginPath();
    for (var i = 0; i < points.length; i++) {
      let p = points[i];
      if (i == 0)
        ctx.moveTo(p.x, p.y);
      else
        ctx.lineTo(p.x, p.y);
    }
    if (closed) ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];
      this.drawPath(shape.points, shape.closed);
    }

    if (this.points.length) {
      this.drawPath(this.points);

      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      let p = this.points[this.points.length - 1];
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(this.cursorX, this.cursorY);
      ctx.stroke();

      let cp = new Point(this.cursorX, this.cursorY);
      let p0 = this.points[0];
      if (cp.distance(p0) < SNAP_RADIUS) {
        ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

  }

  getShapes() {
    return this.shapes;
  }

  clear() {
    this.points = [];
    this.shapes = [];
    this.render();
  }

  cancelPath() {
    this.points = [];
    this.render();
  }

  closePath(closed=false) {
    if (this.points.length > 1) {
      let shape = new Shape({ points: this.points, closed: closed });
      this.shapes.push(shape);
    }
    this.points = [];
    this.render();
  }

  onMouseDown(event) {
    if (event.button == 0) {
      let p = new Point(event.offsetX, event.offsetY);
      if (this.points.length) {
        if (p.distance(this.points[0]) < SNAP_RADIUS) {
          this.closePath(true);
        }
        else {
          this.points.push(p);
        }
      }
      else {
        this.points.push(p);
      }
      this.render();
    }
  }

  onMouseUp(event) {
  }

  onMouseMove(event) {
    this.cursorX = event.offsetX;
    this.cursorY = event.offsetY;
    this.render();
    this.cursor.style.left = this.cursorX + 'px';
    this.cursor.style.top = this.cursorY + 'px';
  }

  onDblClick(event) {
    this.closePath();
  }

  onKeyDown(event) {
    if (event.key == 'Escape' && !event.repeat) {
      // this.emit('paths', this.shapes);
      this.cancelPath();
    }
    else if (event.key == 'Enter' && !event.repeat) {
      this.closePath();
    }
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
