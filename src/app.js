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
    window.addEventListener('mousedown', this);
  }

  initElements() {
    this.dom.app = document.getElementById('app');

    this.stage = new Stage();
    this.dom.app.appendChild(this.stage.dom());

    this.paper = new Paper({ visible: false });
    this.dom.app.appendChild(this.paper.dom());

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

    this.stage.add(label);
  }

  createGraphic(shapes) {
    let stageEl = this.stage.dom();

    // localise shape coordinates
    for (var i = 0; i < shapes.length; i++) {
      let shape = shapes[i];
      let bounds = shape.getBounds();
      if (bounds) {
        for (var j = 0; j < shape.points.length; j++) {
          let p = shape.points[j];
          p.x -= bounds.x;
          p.y -= bounds.y;
        }
        shape.x = bounds.x - stageEl.offsetLeft;
        shape.y = bounds.y - stageEl.offsetTop;
      }
    }
    let graphic = new Graphic({ shapes: shapes });
    this.stage.add(graphic);
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

  onMouseDown(event) {
    // let x = event.offsetX;
    // let y = event.offsetY;
    // console.log(x, y);
  }

  handleEvent(event) {
    if (event.type == 'keydown') {
      this.onKeyDown(event);
    }
    else if (event.type == 'mousedown') {
      this.onMouseDown(event);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  let app = new App();
  app.init();
});
