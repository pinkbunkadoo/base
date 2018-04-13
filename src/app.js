
import Stage from './stage';
import TextObject from './text_object';

class App {
  constructor() {
    this.dom = [];
  }

  startup() {
    console.log('startup');

    let label = new TextObject({ value: 'hello', x: 50, y: 100 });

    label.on('hey', (event) => {
    });

    this.stage.add(label);
  }

  init() {
    this.initElements();
    this.initEventListeners();
    this.startup();
  }

  initEventListeners() {
    window.addEventListener('keydown', this);
  }

  initElements() {
    this.dom.app = document.getElementById('app');
    document.body.appendChild(this.dom.app);

    this.stage = new Stage();
    this.dom.app.appendChild(this.stage.el);

  }

  onKeyDown(event) {
    // console.log(event.key);
  }

  handleEvent(event) {
    if (event.type == 'keydown') {
      this.onKeyDown(event);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  let app = new App();
  app.init();
});
