import { EventDispatcher } from './events';
import util from './util';
import Point from './geom/point';
import Vector from './geom/vector';
import Circle from './geom/circle';

class Paper extends EventDispatcher {
  constructor(params={}) {
    super();

    this.points = [];
    this.paths = [];

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

  drawPath(points, color) {
    let ctx = this.canvas.getContext('2d');
    ctx.strokeStyle = color || 'black';
    ctx.beginPath();
    for (var i = 0; i < points.length; i++) {
      let p = points[i];
      if (i == 0)
        ctx.moveTo(p.x, p.y);
      else
        ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.paths.length; i++) {
      let path = this.paths[i];
      this.drawPath(path.points);
    }

    if (this.points.length) {
      this.drawPath(this.points, 'red');

      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      let p = this.points[this.points.length - 1];
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(this.cursorX, this.cursorY);
      ctx.stroke();
    }

    // let cursor = new Point(this.cursorX, this.cursorY);
    // let radius = 10;
    // let line = { x1: 150, y1: 200, x2: 200, y2: 300 };
    //
    // let vec1 = new Vector(line.x2 - line.x1, line.y2 - line.y1);
    // let vec2 = new Vector(cursor.x - line.x1, cursor.y - line.y1);
    // let vec3 = vec2.project(vec1);
    //
    // this.drawLine(line.x1, line.y1, line.x2, line.y2);
    // this.drawLine(line.x1, line.y1, cursor.x, cursor.y);
    // if (vec3) {
    //   let p = new Point(line.x1 + vec3.x, line.y1 + vec3.y);
    //   if (cursor.distance(p) < radius) {
    //     ctx.strokeStyle = 'green';
    //     ctx.beginPath();
    //     ctx.arc(p.x, p.y, 2, 0, Math.PI * 2, false);
    //     ctx.stroke();
    //   }
    // }
  }

  clear() {
    this.points = [];
    this.paths = [];
    this.render();
  }

  closePath() {
    this.paths.push({ points: this.points });
    this.points = [];
    this.render();
  }

  onMouseDown(event) {
    if (event.button == 0) {
      this.points.push({ x: event.offsetX, y: event.offsetY });
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
      this.emit('paths', this.paths);
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
