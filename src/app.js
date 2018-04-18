import svg from './svg';
import Stage from './stage';
import Paper from './paper';
import Shape from './display/shape';
import Graphic from './display/graphic';
import Text from './display/text';

class App {
  constructor() {
    this.dom = [];
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

    // this.paper.on('paths', (paths) => {
    //   this.createShape(paths);
    //   this.hidePaper();
    // });
  }

  startup() {
    console.log('startup');

    let label = new Text({ value: 'hello' });
    label.x = 50;
    label.y = 100;
    label.on('hey', (event) => {});

    this.stage.add(label);
  }

  createGraphic(shapes) {
    if (shapes.length) {
      let graphic = new Graphic({ shapes: shapes });
      this.stage.add(graphic);
    }
  }

  showPaper() {
    if (this.mode !== 'paper') {
      this.paper.setVisible(true);
      this.paper.clear();
      this.mode = 'paper';
    }
  }

  hidePaper() {
    if (this.mode == 'paper') {
      let shapes = this.paper.getShapes();
      this.createGraphic(shapes);

      this.paper.setVisible(false);
      this.paper.clear();
      this.mode = null;
    }
  }

  togglePaper() {
    if (this.mode !== 'paper') {
      this.showPaper();
    }
    else {
      this.hidePaper();
    }
  }

  onKeyDown(event) {
    if (event.key == 'p' && !event.repeat) {
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
