import { EventDispatcher } from './events';

class Editor extends EventDispatcher {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  dom() {
    return this.el;
  }

  show() {

  }

  hide() {

  }

  handleEvent(event) {

  }
}

export default Editor;
