import { Event, EventDispatcher } from '../events';
import Point from '../geom/point';

class Transform extends EventDispatcher {
  constructor() {
    super();
    this.position = new Point();
  }

  get x() {
    return this.position.x;
  }

  get y() {
    return this.position.y;
  }

  set x(value) {
    this.position.x = value;
    this.emit('valuechange');
  }

  set y(value) {
    this.position.y = value;
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
