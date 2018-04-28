import Tool from './tool';

class PointerTool extends Tool {
  constructor() {
    super();
    this.cursor = document.createElement('div');
    this.cursor.classList.add('pointer-cursor');

    // this.selection = [];
    // console.log('Paper tool:', paper.toolName);
  }

  hitTest(x, y) {
    let sp = paper.screenToWorld(x, y);
    for (var i = paper.shapes.length - 1; i >= 0; i--) {
      let shape = paper.shapes[i];
      // let p = paper.worldToScreen(shape.x, shape.y);
      if (shape.hitTest(sp.x, sp.y)) {
        return shape;
      }
    }
    return null;
  }

  selectMarquee(xmin, ymin, xmax, ymax) {
    if (xmin > xmax) [xmin, xmax] = [ xmax, xmin ];
    if (ymin > ymax) [ymin, ymax] = [ ymax, ymin ];
    let selection = [];
    for (var i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      if (child instanceof Shape) {
        if (child.intersectsRectangle(xmin, ymin, xmax, ymax)) {
          selection.push(child);
          child.select();
        }
      }
    }
    paper.selection = selection;
  }

  moveSelectionBy(dx, dy) {
    // console.log('moveby', dx, dy);
    for (var i = 0; i < paper.selection.length; i++) {
      let shape = paper.selection[i];
      shape.x += dx;
      shape.y += dy;
    }
    this.emit('update');
  }

  dragOn() {
    this.mode = 'drag';
    // console.log('drag');
  }

  dragOff() {
    this.mode = null;
    // console.log('dragoff');
  }

  render(ctx) {
    // console.log('render', this.selection);

    // ctx.translate(0.5, 0.5);
    // ctx.strokeStyle = 'gray';
    // ctx.globalCompositeOperation = 'exclusion';
    // ctx.beginPath();
    // ctx.moveTo(this.downX, this.downY);
    // ctx.lineTo(this.cursorX, this.downY);
    // ctx.lineTo(this.cursorX, this.cursorY);
    // ctx.lineTo(this.downX, this.cursorY);
    // ctx.closePath();
    // ctx.stroke();

    // ctx.strokeStyle = 'red';
    //
    // for (var i = 0; i < paper.selection.length; i++) {
    //   let shape = paper.selection[i];
    //   ctx.beginPath();
    //   ctx.arc(shape.x >> 0, shape.y >> 0, 3, 0, Math.PI * 2);
    //   ctx.stroke();
    // }
  }

  onMouseDown(event) {
    this.cursorX = event.offsetX;
    this.cursorY = event.offsetY;
    this.downX = this.cursorX;
    this.downY = this.cursorY;

    let hit = this.hitTest(this.cursorX, this.cursorY);
    if (hit) {
      paper.selection = [ hit ];
      this.emit('update');
    } else {
      paper.selection = [];
      this.emit('update');
    }
  }

  onMouseUp(event) {
    if (this.mode == 'drag') {
      this.dragOff();
    }
  }

  onMouseMove(event) {
    this.cursorX = event.offsetX;
    this.cursorY = event.offsetY;

    this.deltaX = this.lastX ? this.cursorX - this.lastX : 0;
    this.deltaY = this.lastY ? this.cursorY - this.lastY : 0;

    if (this.mode == 'drag') {
      this.moveSelectionBy(this.deltaX, this.deltaY);
    }
    else {
      if (event.buttons & 1) {
        let dx = this.cursorX - this.downX;
        let dy = this.cursorY - this.downY;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
          this.moveSelectionBy(dx, dy);
          this.dragOn();
        }
      }
    }

    this.lastX = this.cursorX;
    this.lastY = this.cursorY;
    // this.emit('update');
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
