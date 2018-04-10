import { Event, EventDispatcher } from './events';

class StageObject extends EventDispatcher {
  constructor(params={}) {
    super();
    this.el = document.createElement('div');
    this.el.classList.add('stage-object');
    this.setPosition(params.x || 0, params.y || 0);
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
}

export default StageObject;
