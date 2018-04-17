import { Event, EventDispatcher } from '../events';

class StageObject extends EventDispatcher {
  constructor(params={}) {
    super();
    // this.el = this.dom();
    this.setPosition(params.x || 0, params.y || 0);
  }

  dom() {
    let el = document.createElement('div');
    el.classList.add('stage-object');
    el.style.left = this.x + 'px';
    el.style.top = this.y + 'px';
    el.addEventListener('mousedown', this);
    return el;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    // this.el.style.left = this.x + 'px';
    // this.el.style.top = this.y + 'px';
  }

  addedToStage() {
    // this.emit('hey', new Event('hey', { num: 1 }));
  }

  // select() {
  //   this.el.classList.add('selected');
  // }
  //
  // deselect() {
  //   this.el.classList.remove('selected');
  // }
  //
  beginDrag() {
    window.addEventListener('mouseup', this);
    window.addEventListener('mousemove', this);
    window.addEventListener('blur', this);
    this.drag = true;
  }

  endDrag() {
    window.removeEventListener('mouseup', this);
    window.removeEventListener('mousemove', this);
    window.removeEventListener('blur', this);
    this.drag = false;
  }

  onMouseDown(event) {
    this.emit('mousedown', this);
    this.beginDrag();
    // console.log(event.target);
  }

  onMouseUp(event) {
    this.endDrag();
  }

  onMouseMove(event) {
    let el = event.target;
    if (this.drag) {
      this.setPosition(this.x + event.movementX, this.y + event.movementY);
      el.style.left = this.x + 'px';
      el.style.top = this.y + 'px';
    }
  }

  onBlur(event) {
    this.endDrag();
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
    else if (event.type == 'blur') {
      this.onBlur(event);
    }
  }
}

export default StageObject;
