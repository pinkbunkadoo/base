import { Event, EventDispatcher } from '../events';

class StageObject extends EventDispatcher {
  constructor() {
    super();

    this.el = document.createElement('div');
    this.el.classList.add('stage-object');
    this.el.addEventListener('mousedown', this);

    this.x = 0;
    this.y = 0;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set x(value) {
    this._x = value;
    this.el.style.left = this._x + 'px';
  }

  set y(value) {
    this._y = value;
    this.el.style.top = this._y + 'px';
  }

  dom() {
    return this.el;
  }

  addedToStage() {
  }

  select() {
    this.el.classList.add('selected');
  }

  deselect() {
    this.el.classList.remove('selected');
  }

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
  }

  onMouseUp(event) {
    this.endDrag();
  }

  onMouseMove(event) {
    if (this.drag) {
      this.x += event.movementX;
      this.y += event.movementY;
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
