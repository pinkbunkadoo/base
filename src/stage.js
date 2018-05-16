import Util from './util';
import Shape from './display/shape';
import Group from './display/group';
import Paper from './paper/paper';
import Editor from './editor';

class Stage extends Editor {
  constructor(params={}) {
    super();
    this.el.classList.add('stage');
    this.canvas = document.createElement('canvas');
    this.canvas.width = params.width == undefined ? 320 : params.width;
    this.canvas.height = params.height == undefined ? 200 : params.height;
    this.el.appendChild(this.canvas);
  }

  show() {
    super.show();
  }

  hide() {
    super.hide();
  }

  add(transform) {
    this.children.push(transform);
    transform.addedToStage();
    transform.on('valuechange', () => {
      this.render();
    });
    this.render();
  }

  edit() {
  }

  selectMarquee(xmin, ymin, xmax, ymax) {
  }

  deselect() {
  }

  renderShape(shape, x, y) {
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  }

  moveSelectionBy(dx, dy) {
  }

  beginDrag() {
  }

  cancelDrag() {
  }

  beginMarquee(xmin, ymin, xmax, ymax) {
    this.mode = 'marquee';
  }

  cancelMarquee() {
    this.mode = null;
    this.render();
  }

  hitTest(x, y) {
    // for (var i = this.children.length - 1; i >= 0; i--) {
    //   let child = this.children[i];
    //   if (child.hitTest(x, y)) {
    //     return child;
    //   }
    // }
    // return null;
  }

  showPaper() {

  }

  onMouseDown(event) {
    // this.cursorX = event.pageX - this.el.offsetLeft;
    // this.cursorY = event.pageY - this.el.offsetTop;
    //
    // this.downX = this.cursorX;
    // this.downY = this.cursorY;
    //
    // let hit = this.hitTest(this.cursorX, this.cursorY);
    // if (hit) {
    //   if (this.selection.includes(hit)) {
    //
    //   } else {
    //     this.deselect();
    //     this.selection = [ hit ];
    //     hit.select();
    //   }
    // }
    // else {
    //   this.deselect();
    // }
    //
    // this.render();
  }

  onMouseUp(event) {
    // if (this.mode == 'drag')
    //   this.cancelDrag();
    // else if (this.mode == 'marquee') {
    //   this.selectMarquee(this.downX, this.downY, this.cursorX, this.cursorY);
    //   this.cancelMarquee();
    // }
  }

  onMouseMove(event) {
    // this.cursorX = event.pageX - this.el.offsetLeft;
    // this.cursorY = event.pageY - this.el.offsetTop;
    //
    // this.deltaX = this.lastX ? this.cursorX - this.lastX : 0;
    // this.deltaY = this.lastY ? this.cursorY - this.lastY : 0;
    //
    // if (event.buttons & 1) {
    //   if (this.mode == 'drag') {
    //     if (this.selection.length) {
    //       this.moveSelectionBy(this.deltaX, this.deltaY);
    //     }
    //   }
    //   else if (this.mode == 'marquee') {
    //     this.render();
    //   }
    //   else {
    //     let dx = this.cursorX - this.downX;
    //     let dy = this.cursorY - this.downY;
    //     if (this.selection.length) {
    //       if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) {
    //         this.beginDrag();
    //         this.moveSelectionBy(dx, dy);
    //       }
    //     }
    //     else {
    //       this.beginMarquee(this.downX, this.downY, this.downX + dx, this.downY + dy);
    //     }
    //   }
    // }
    // else {
    // }
    //
    // this.lastX = this.cursorX;
    // this.lastY = this.cursorY;
  }

  onKeyDown(event) {
  }

  onDblClick(event) {
    // this.edit();
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

export default Stage;
