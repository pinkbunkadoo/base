import { EventDispatcher } from '../../events.js';

class Tool extends EventDispatcher {
  constructor() {
    super();
    this.cursor = document.createElement('canvas');
    this.cursor.width = 16;
    this.cursor.height = 16;
  }

  getCursor() {
    return this.cursor;
  }

  render(ctx) {

  }

  handleEvent(event) {

  }
}

export default Tool;
