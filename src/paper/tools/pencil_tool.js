import Point from '../../geom/point';
import PointList from '../../geom/point_list';
import Shape from '../../display/shape';
import Tool from './tool';

class PencilTool extends Tool {
  constructor(params={}) {
    super();
    this.points = [];
    this.stroke = 'gray';
    this.fill = 'lightgray';

    this.cursor = document.createElement('div');
    this.cursor.classList.add('pencil-cursor');
  }

  closePath(closed=false) {
    if (this.points.length > 1) {
      let pointList = new PointList(this.points);
      let bounds = pointList.getBounds();
      let x = bounds.x + bounds.width / 2;
      let y = bounds.y + bounds.height / 2;
      for (var i = 0; i < pointList.points.length; i++) {
        let p = pointList.points[i];
        p.x -= x;
        p.y -= y;
      }
      let shape = new Shape({ points: pointList.points, closed: closed, fill: this.fill, stroke: this.stroke });
      let p = paper.screenToWorld(x, y);
      shape.x = p.x;
      shape.y = p.y;
      // console.log(shape.x, shape.y);
      this.emit('shape', shape);
      this.points = [];
    }
    // this.points = [];
    // this.render();
  }

  drawPath(ctx, points, stroke, fill, closed=false) {
    // let points = params.points || [];
    // let ctx = this.canvas.getContext('2d');
    // ctx.save();

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

    // ctx.restore();
  }

  render(ctx) {
    if (this.points.length) {
      // ctx.translate(0.5, 0.5);

      this.drawPath(ctx, this.points, this.stroke, this.fill);

      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      let p = this.points[this.points.length - 1];
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(this.cursorX, this.cursorY);
      ctx.stroke();

      let cp = new Point(this.cursorX, this.cursorY);
      let p0 = this.points[0];
      if (cp.distance(p0) < 5) {
        ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  onMouseDown(event) {
    if (event.button == 0) {
      let p = new Point(event.offsetX, event.offsetY);
      if (this.points.length) {
        if (p.distance(this.points[0]) < 5) {
          this.closePath(true);
        }
        else {
          this.points.push(p);
        }
      }
      else {
        this.points.push(p);
      }
      this.emit('update');
    }
  }

  onMouseUp(event) {}

  onMouseMove(event) {
    this.cursorX = event.offsetX;
    this.cursorY = event.offsetY;
    this.emit('update');
  }

  onDblClick(event) {
    this.closePath();
  }

  onKeyDown(event) {}

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
  }
}

export default PencilTool;
