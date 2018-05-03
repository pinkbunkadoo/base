import Tool from './tool';
import Shape from '../../display/shape';

class PointerTool extends Tool {
  constructor() {
    super();
    this.cursor = document.createElement('div');
    this.cursor.classList.add('pointer-cursor');
  }

  hitTest(x, y) {
    let sp = paper.screenToWorld(x, y);
    for (var i = paper.frame.shapes.length - 1; i >= 0; i--) {
      let shape = paper.frame.shapes[i];
      if (shape.hitTest(sp.x, sp.y)) {
        return shape;
      }
    }
    return null;
  }

  marqueeSelect(xmin, ymin, xmax, ymax) {
    let p1 = paper.screenToWorld(xmin, ymin);
    let p2 = paper.screenToWorld(xmax, ymax);
    let selection = [];
    for (var i = 0; i < paper.frame.shapes.length; i++) {
      let shape = paper.frame.shapes[i];
      if (shape instanceof Shape) {
        if (shape.intersectsRectangle(p1.x, p1.y, p2.x, p2.y)) {
          selection.push(shape);
        }
      }
    }
    paper.selection = selection;
    // console.log(paper.selection);
  }

  moveSelectionBy(dx, dy) {
    for (var i = 0; i < paper.selection.length; i++) {
      let shape = paper.selection[i];
      shape.x += dx;
      shape.y += dy;
    }
    this.emit('update');
  }

  dragOn() {
    this.mode = 'drag';
    // console.log('dragOn');
  }

  dragOff() {
    this.mode = null;
    // console.log('dragOff');
  }

  render(ctx) {
    if (this.mode == 'marquee') {
      ctx.translate(0.5, 0.5);
      ctx.strokeStyle = 'gray';
      ctx.globalCompositeOperation = 'exclusion';
      ctx.beginPath();
      ctx.moveTo(this.downX, this.downY);
      ctx.lineTo(this.cursorX, this.downY);
      ctx.lineTo(this.cursorX, this.cursorY);
      ctx.lineTo(this.downX, this.cursorY);
      ctx.closePath();
      ctx.stroke();
    }
  }

  onMouseDown(event) {
    if (event.button == 0) {
      let modifier = event.shiftKey || event.metaKey;
      this.downX = event.pageX;
      this.downY = event.pageY;

      this.left = true;

      let hit = this.hitTest(this.downX, this.downY);
      if (hit) {
        if (paper.selection.includes(hit)) {
          if (modifier)
            paper.selection.splice(paper.selection.indexOf(hit), 1);
          // else
            // paper.selection = [hit];
        }
        else {
          if (modifier)
            paper.selection.push(hit);
          else
            paper.selection = [ hit ];
        }
        this.target = hit;
      } else {
        paper.selection = [];
        this.target = null;
        this.mode = 'marquee';
      }
      this.emit('update');
    }
  }

  onMouseUp(event) {
    if (event.button == 0) {
      if (this.mode == 'drag') {
        this.dragOff();
      }
      else if (this.mode == 'marquee') {
        this.marqueeSelect(this.downX, this.downY, this.cursorX, this.cursorY);
        this.mode = null;
      }
      this.left = false;

      this.emit('update');
    }
  }

  onMouseMove(event) {
    this.cursorX = event.pageX;
    this.cursorY = event.pageY;

    this.deltaX = (this.lastX !== undefined ? this.cursorX - this.lastX : 0);
    this.deltaY = (this.lastY !== undefined ? this.cursorY - this.lastY : 0);

    if (this.mode == 'drag') {
      this.moveSelectionBy(this.deltaX, this.deltaY);
    }
    else if (this.mode == 'marquee') {
      this.emit('update');
    }
    else {
      if (this.left) {
        if (this.target) {
          let dx = this.cursorX - this.downX;
          let dy = this.cursorY - this.downY;
          if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
            this.moveSelectionBy(dx, dy);
            this.dragOn();
          }
        }
      }
    }

    this.lastX = this.cursorX;
    this.lastY = this.cursorY;
  }

  onDblClick(event) {

  }

  onKeyDown(event) {

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

  }
}

export default PointerTool;
