import Point from '../../geom/point';
import PointList from '../../geom/point_list';
import Shape from '../../display/shape';
import Tool from './tool';

class TriangleTool extends Tool {
  constructor(params={}) {
    super();
    this.points = [];
    this.stroke = 0;
    this.fill = 0;

    this.cursor = document.createElement('div');
    this.cursor.classList.add('pencil-cursor');
  }

  closePath(closed=false) {
    if (this.points.length == 3) {
      let pointList = new PointList(this.points);
      let bounds = pointList.getBounds();
      let wp = paper.screenToWorld(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
      let points = pointList.points;

      for (var i = 0; i < points.length; i++) {
        let p = points[i];
        let pp = paper.screenToWorld(p.x, p.y);
        p.x = pp.x - wp.x;
        p.y = pp.y - wp.y;
      }

      let shape = new Shape({ x: wp.x, y: wp.y, pointList: pointList,
        fill: paper.fill, stroke: paper.stroke, closed: closed });

      this.emit('shape', shape);
    }
    this.points = [];
  }

  cancelPath() {
    this.points = [];
    this.emit('update');
  }

  renderPath(ctx, points, stroke, fill, closed=false) {
    ctx.strokeStyle = stroke !== undefined ? (stroke ? stroke : 'transparent') : 'transparent';
    ctx.fillStyle = fill !== undefined ? (fill ? fill : 'transparent') : 'transparent';

    if (stroke == null) {
      ctx.strokeStyle = 'cyan';
    }

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

  render(ctx) {
    if (this.points.length) {
      this.renderPath(ctx, this.points, paper.stroke, paper.fill);

      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      let p = this.points[this.points.length - 1];
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(this.cursorX, this.cursorY);
      ctx.stroke();

      let cp = new Point(this.cursorX, this.cursorY);
      let p0 = this.points[0];

      if (cp.distance(p0) < 5) {
        ctx.beginPath();
        ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  onMouseDown(event) {
    if (event.button == 0) {
      let p = new Point(event.offsetX, event.offsetY);
      this.points.push(p);
      // console.log(this.points.length);
      if (this.points.length == 3) {
        this.closePath(true);
      }
      // console.log('down', p);
    }
    this.emit('update');
  }

  onMouseUp(event) {
    if (event.button == 0) {
      if (this.points.length == 1) {
        let p = new Point(event.offsetX, event.offsetY);
        this.points.push(p);
      }
      // console.log('up');
    }
  }

  onMouseMove(event) {
    this.cursorX = event.offsetX;
    this.cursorY = event.offsetY;
    this.emit('update');
  }

  onDblClick(event) {
    this.closePath();
  }

  onKeyDown(event) {
    if (!event.repeat) {
      if (event.key == 'Escape') {
        this.cancelPath();
      }
      else if (event.key == 'Enter') {
        this.closePath();
      }
    }
  }

  onBlur(event) {
    this.cancelPath();
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
    else if (event.type == 'blur') {
      this.onBlur(event);
    }
  }
}

export default TriangleTool;
