import { Event, EventDispatcher } from '../events';

class Transform extends EventDispatcher {
  constructor() {
    super();
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
    this.emit('valuechange');
  }

  set y(value) {
    this._y = value;
    this.emit('valuechange');
  }

  addedToStage() {
  }

  hitTest(x, y) {
    return false;
  }

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }

  getBounds() {
    return null;
  }

}

export default Transform;
