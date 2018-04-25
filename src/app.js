import svg from './svg';
import Stage from './stage';
import Paper from './paper';
import Shape from './display/shape';
import Group from './display/group';
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

    this.stage = new Stage({ width: 480, height: 480 });
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

    let group = new Group();

    let shape = new Shape({
      points: [ { x: 0, y: 0 }, { x: 60, y: 0 }, { x: 40, y: 40 }, { x: 20, y: 10 } ],
      fill: '#cccccc',
      stroke: 'black',
      closed: true
    });
    shape.x = -60;
    shape.y = 80;
    group.add(shape);

    shape = new Shape({
      points: [ { x: 0, y: 0 }, { x: 60, y: 20 }, { x: 100, y: 20 }, { x: 100, y: 70 } ],
      fill: '#cccccc',
      stroke: null,
      closed: true
    });
    shape.x = 150;
    shape.y = 100;
    group.add(shape);

    this.stage.add(group);

    group.x = 75;
    group.y = 50;
  }

  grabPaperShapes() {
    let stageEl = this.stage.dom();
    let shapes = this.paper.getShapes();

    if (shapes.length) {
      let group = new Group();
      let x = 0;
      let y = 0;
      for (var i = 0; i < shapes.length; i++) {
        let shape = shapes[i];
        // shape.x -= stageEl.offsetLeft;
        // shape.y -= stageEl.offsetTop;
        let bounds = shape.getBounds();
        x += bounds.x + bounds.width / 2;
        y += bounds.y + bounds.height / 2;
      }
      x /= shapes.length;
      y /= shapes.length;

      group.x = x;
      group.y = y;

      for (var i = 0; i < shapes.length; i++) {
        let shape = shapes[i];
        shape.x += group.x;
        shape.y += group.y;
      }

      group.add(shapes);
      this.stage.add(group);
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
      this.grabPaperShapes();
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
    }
    else if (event.key == 's' && !event.repeat) {

    }
    else {
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
