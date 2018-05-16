import Util from '../../util';
import Point from '../../geom/point';
import Vector from '../../geom/vector';
import Tool from './tool';
import Shape from '../../display/shape';

class PathTool extends Tool {
  constructor() {
    super();
    this.cursor = document.createElement('div');
    this.cursor.classList.add('pointer-cursor');
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

  moveSelectionBy(dx, dy) {
    for (var i = 0; i < paper.selection.length; i++) {
      let shape = paper.selection[i];
      shape.x += dx;
      shape.y += dy *-1;
    }
    this.changed = true;
  }

  dragOn() {
    this.mode = 'drag';
  }

  dragOff() {
    if (this.changed) this.emit('change');
    this.mode = null;
  }

  render(ctx) {
    ctx.font = '10px sans-serif';
    ctx.textBaseline = 'top';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'blue';

    ctx.translate(0.5, 0.5);

    if (paper.selection.length) {
      ctx.strokeStyle = 'red';
      for (var i = 0; i < paper.selection.length; i++) {
        let shape = paper.selection[i];
        let p = paper.worldToScreen(shape.x, shape.y);
        let x = p.x >> 0, y = p.y >> 0;

        ctx.globalCompositeOperation = 'exclusion';
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.moveTo(x, y);
        ctx.lineTo(x + 5, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - 5);
        ctx.stroke();
      }
    }

    if (this.mode == 'marquee') {
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

    // let p0 = new Point(paper.downX, paper.downY);
    // let p1 = new Point(150, 150);
    // let p2 = new Point(250, 300);
    //
    // ctx.beginPath();
    // ctx.moveTo(p1.x, p1.y);
    // ctx.lineTo(p2.x, p2.y);
    // ctx.strokeStyle = 'blue';
    // ctx.stroke();
    //
    // let hit = this.pointOnEdge(p0, p1, p2);
    // if (hit) {
    //   ctx.fillStyle = 'red';
    //   ctx.fillRect(hit.x-2, hit.y-2, 4, 4);
    // }

  }

  onMouseDown(event) {
    if (event.button == 0) {
      let modifier = event.shiftKey || event.metaKey;

      let hit = this.hitTest(paper.downX, paper.downY);
      if (hit) {
        if (modifier) {
          if (paper.selection.includes(hit)) {
            paper.selection.splice(paper.selection.indexOf(hit), 1);
          }
          else {
            paper.selection.push(hit);
          }
        }
        else {
          if (!paper.selection.includes(hit)) {
            paper.selection = [hit];
          }
        }
        this.target = hit;
      }
      else {
        this.target = null;
        paper.selection = [];
      }
      this.update();
    }
  }

  onMouseUp(event) {
    let modifier = event.shiftKey || event.metaKey;
    if (this.mode == 'drag') {
      this.dragOff();
    }
    else if (this.mode == 'marquee') {
      let xmin = paper.downX, ymin = paper.downY;
      let xmax = paper.cursorX, ymax = paper.cursorY;
      if (xmin > xmax) [xmin, xmax] = [ xmax, xmin ];
      if (ymin > ymax) [ymin, ymax] = [ ymax, ymin ];
      paper.selectMarquee(xmin, ymin, xmax, ymax);
      this.mode = null;
    }
    else {
      // if (event.button == 0) {
      //   let hit = this.hitTest(paper.cursorX, paper.cursorY);
      //   if (hit && this.target == hit) {
      //     if (modifier) {
      //     }
      //     else {
      //       paper.selection = [hit];
      //     }
      //   }
      // }
    }

    this.update();
  }

  onDblClick(event) {
  }

  onMouseMove(event) {
    if (this.mode == 'drag') {
      this.moveSelectionBy(paper.deltaX, paper.deltaY);
      this.update();
    }
    else if (this.mode == 'marquee') {
      this.update();
    }
    else {
      if (paper.down) {
        let dx = paper.cursorX - paper.downX;
        let dy = paper.cursorY - paper.downY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
          if (this.target) {
            this.moveSelectionBy(dx, dy);
            this.dragOn();
          }
          else {
            this.mode = 'marquee';
          }
        }
      }
    }
  }

  onKeyDown(event) {

  }

  onBlur(event) {
    if (this.mode == 'drag')
      this.dragOff();
    else
      this.mode = null;
    this.update();
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

export default PathTool;
