import Util from '../../util';
import Point from '../../geom/point';
import Rectangle from '../../geom/rectangle';
import Tool from './tool';

class PointTool extends Tool {
  constructor() {
    super();
    this.cursor = document.createElement('div');
    this.cursor.classList.add('point-cursor');
    this.points = [];
  }

  render(ctx) {
    if (paper.selection.length) {
      for (var i = 0; i < paper.selection.length; i++) {
        let shape = paper.selection[i];
        let points = shape.getPoints();
        let sp = paper.worldToScreen(shape.x, shape.y);

        ctx.globalCompositeOperation = 'exclusion';
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';

        for (var j = 0; j < points.length; j++) {
          let p = points[j];
          let pp = paper.worldToScreen(p.x + shape.x, p.y + shape.y);
          let selected = this.points.includes(p);
          let x = pp.x >> 0;
          let y = pp.y >> 0;
          if (selected) {
            ctx.beginPath();
            ctx.rect((x) - 3, (y) - 3, 5, 5);
            ctx.fill();
          }
          else {
            ctx.beginPath();
            ctx.rect((x + 0.5) - 3, (y + 0.5) - 3, 4, 4);
            ctx.stroke();
          }
        }

        let x = (sp.x >> 0) + 0.5;
        let y = (sp.y >> 0) + 0.5;
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.moveTo(x, y);
        ctx.lineTo(x + 5, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 5);
        ctx.stroke();

        ctx.globalCompositeOperation = 'source-over';
      }
    }
    if (this.mode == 'marquee') {
      ctx.translate(0.5, 0.5);
      ctx.strokeStyle = 'gray';
      ctx.globalCompositeOperation = 'exclusion';
      ctx.beginPath();
      ctx.moveTo(paper.downX, paper.downY);
      ctx.lineTo(paper.cursorX, paper.downY);
      ctx.lineTo(paper.cursorX, paper.cursorY);
      ctx.lineTo(paper.downX, paper.cursorY);
      ctx.closePath();
      ctx.stroke();
    }
  }

  update() {
    this.emit('update');
  }

  hitTest(x, y) {
    let sp = paper.screenToWorld(x, y);
    for (var i = paper.frame.shapes.length - 1; i >= 0; i--) {
      let shape = paper.frame.shapes[i];
      let points = shape.getPoints();
      if (paper.pointOnShapeLimit(shape, x, y)) {
        return shape;
      } else {
        if (shape.fill) {
          if (paper.pointInShape(shape, x, y)) {
            return shape;
          }
        }
      }
    }
    return null;
  }

  pointHitTest(x, y) {
    for (var i = 0; i < paper.selection.length; i++) {
      let shape = paper.selection[i];
      let points = shape.getPoints();

      let wp = paper.screenToWorld(x, y);
      wp.subtract(shape.position);

      for (var j = 0; j < points.length; j++) {
        let p = points[j];
        let d = p.distance(wp);
        if (d < 7) {
          return p;
        }
      }
    }
    return null;
  }

  movePointsBy(dx, dy) {
    for (var i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      p.x += dx;
      p.y += dy;
    }
    this.changed = true;
  }

  insertPoint(x, y) {
    for (var i = 0; i < paper.selection.length; i++) {
      let shape = paper.selection[i];
      let hit = paper.pointOnShapeLimit(shape, x, y);
      if (hit) {
        let points = shape.getPoints();
        points.splice(hit.index, 0, hit.point);
        break;
      }
    }
  }

  onMouseDown(event) {
    if (event.button == 0) {
      let modifier = event.shiftKey || event.metaKey;
      if (event.altKey) {
        this.insertPoint(paper.downX, paper.downY);
      }
      else {
        let hit = this.pointHitTest(paper.downX, paper.downY);
        if (hit) {
          if (!this.points.includes(hit)) {
            this.points = [ hit ];
          }
        }
        else {
          this.points = [];
          let hit = this.hitTest(paper.downX, paper.downY);
          if (hit) {
            this.target = hit;
          }
          else {
            this.target = null;
          }
        }
      }
      this.update();
    }
  }

  onMouseUp(event) {
    let modifier = event.shiftKey || event.metaKey;

    if (this.mode == 'drag') {
      this.mode = null;
    }
    else if (this.mode == 'marquee') {
      this.points = [];

      let xmin = paper.downX, ymin = paper.downY;
      let xmax = paper.cursorX, ymax = paper.cursorY;

      if (xmin > xmax) [xmin, xmax] = [ xmax, xmin ];
      if (ymin > ymax) [ymin, ymax] = [ ymax, ymin ];

      let p1 = paper.screenToWorld(xmin, ymin);
      let p2 = paper.screenToWorld(xmax, ymax);

      for (var i = 0; i < paper.selection.length; i++) {
        let shape = paper.selection[i];
        let points = shape.getPoints();
        for (var j = 0; j < points.length; j++) {
          let p = points[j];
          let x = p.x + shape.x;
          let y = p.y + shape.y;
          if (x > p1.x && y < p1.y && x < p2.x && y > p2.y) {
            this.points.push(p);
          }
        }
      }
      this.mode = null;
    }
    else {
      if (event.button == 0) {
        let hit = this.hitTest(paper.cursorX, paper.cursorY);
        if (hit && hit == this.target) {
          if (modifier) {
            if (paper.selection.includes(hit)) {
              paper.selection.splice(paper.selection.indexOf(hit), 1);
            }
            else {
              paper.selection.push(hit);
            }
          }
          else {
            paper.selection = [hit];
          }
        }
        else {
          paper.selection = [];
          this.points = [];
        }
      }
    }
    this.update();
  }

  onMouseMove(event) {
    if (this.mode == 'drag') {
      this.movePointsBy(paper.deltaX, -paper.deltaY);
    }
    else if (this.mode == 'marquee') {
    }
    else {
        if (paper.down) {
          if (this.points.length) {
            let dx = paper.cursorX - paper.downX;
            let dy = paper.cursorY - paper.downY;
            if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
              this.mode = 'drag';
              this.movePointsBy(dx, -dy);
            }
          }
          else {
            this.mode = 'marquee';
          }
        }
    }
    this.update();

  }

  onDblClick(event) {
    this.insertPoint(paper.downX, paper.downY);
    this.update();
  }

  onKeyDown(event) {

  }

  onBlur(event) {

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

export default PointTool;
