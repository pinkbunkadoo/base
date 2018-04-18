import { EventDispatcher } from './events';
import Point from './geom/point';
import Vector from './geom/vector';
import Circle from './geom/circle';
import Shape from './display/shape';

let SNAP_RADIUS = 3;
let COLORS = [
  'white',
  // '#e6e6e6',
  '#cccccc',
  // '#b3b3b3',
  '#999999',
  // '#808080',
  '#666666',
  // '#4d4d4d',
  '#333333',
  // '#1a1a1a',
  'black'
];

class Paper extends EventDispatcher {
  constructor(params={}) {
    super();

    this.points = [];
    this.shapes = [];
    this.fill = null;
    this.stroke = COLORS[5];

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

  drawPath(params={}) {
    let points = params.points || [];
    let ctx = this.canvas.getContext('2d');

    ctx.save();

    ctx.strokeStyle = params.stroke !== undefined ? (params.stroke ? params.stroke : 'transparent') : 'transparent';
    ctx.fillStyle = params.fill !== undefined ? (params.fill ? params.fill : 'transparent') : 'transparent';

    ctx.beginPath();
    for (var i = 0; i < points.length; i++) {
      let p = points[i];
      if (i == 0)
        ctx.moveTo(p.x, p.y);
      else
        ctx.lineTo(p.x, p.y);
    }
    if (params.closed) ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];
      this.drawPath({ points: shape.points, fill: shape.fill, stroke: shape.stroke, closed: shape.closed });
    }

    if (this.points.length) {
      this.drawPath({ points: this.points, fill: this.fill, stroke: this.stroke });

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

    // if (this.command) {
    //   // console.log(this.command);
    //   let size = 24;
    //   ctx.font = size + 'px sans-serif';
    //   ctx.fillText(this.command, this.canvas.width / 2, this.canvas.height - size*2);
    // }

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
      let shape = new Shape({ points: this.points, closed: closed, fill: this.fill, stroke: this.stroke });
      this.shapes.push(shape);
      // console.log(shape.fill);
    }
    this.points = [];
    this.render();
  }

  setFill(fill) {
    this.fill = fill;
    this.render();
  }

  setStroke(stroke) {
    this.stroke = stroke;
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
    if (this.command) {
      this.onParameter(event.key);
    }
    else {
      if (event.key == 'Escape' && !event.repeat) {
        this.cancelPath();
      }
      else if (event.key == 'Enter' && !event.repeat) {
        this.closePath();
      }
      else if (event.key == 's' && !event.repeat) {
        this.setStroke(this.stroke ? null : 'black')
      }
      else if (event.key == '0' && !event.repeat) {
        this.setFill(null);
      }
      else if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(event.key) && !event.repeat) {
        let color = COLORS[parseInt(event.key) - 1];
        if (color !== undefined)
          this.setFill(color);
      }
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
