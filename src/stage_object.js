import { Event, EventDispatcher } from './events';

class StageObject extends EventDispatcher {
  constructor(params={}) {
    super();
    this.el = document.createElement('div');
    this.el.classList.add('stage-object');
    this.setPosition(params.x || 0, params.y || 0);

    this.el.addEventListener('mousedown', this);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.el.style.left = this.x + 'px';
    this.el.style.top = this.y + 'px';
  }

  addedToStage() {
    this.emit('hey', new Event('hey', { num: 1 }));
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
    this.beginDrag();
  }

  onMouseUp(event) {
    this.endDrag();
  }

  onMouseMove(event) {
    if (this.drag) {
      this.setPosition(this.x + event.movementX, this.y + event.movementY);
    } else {
      // if (event.button == 0) {
      //   console.log('left');
      // }
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
