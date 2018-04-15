
import Stage from './stage';
import TextObject from './text_object';
import Paper from './paper';

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

    this.paper = new Paper({ visible: false });
    this.dom.app.appendChild(this.paper.el);

    this.paper.on('shape', (points) => {
      // console.log('shape', points);
      this.createShape(points);
      this.togglePaper();
    });
  }

  togglePaper() {
    if (this.mode !== 'paper') {
      this.paper.setVisible(true);
      this.paper.clear();
      this.mode = 'paper';
    }
    else {
      this.paper.setVisible(false);
      this.mode = null;
    }
  }

  createShape(points) {

  }

  onKeyDown(event) {
    if (event.key == 'd' && !event.repeat) {
      this.togglePaper();
    } else {
      if (this.mode == 'paper') {
        this.paper.handleEvent(event);
      }
    }
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
