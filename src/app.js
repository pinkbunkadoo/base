import svg from './svg';
import Stage from './stage';
import Shape from './display/shape';
import Text from './display/text';
import Paper from './paper';

class App {
  constructor() {
    this.dom = [];
  }

  startup() {
    console.log('startup');

    let label = new Text({ value: 'hello', x: 50, y: 100 });

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

    this.paper.on('paths', (paths) => {
      this.createShape(paths);
      this.hidePaper();
    });
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
      this.paper.setVisible(false);
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

  createShape(paths) {
    let shape = new Shape(paths);
    this.stage.add(shape);
    // return shape.dom();
  }

  // createShape(points) {
  //   let ps = '';
  //   for (var i = 0; i < points.length; i++) {
  //     ps += points[i].x + ' ' + points[i].y + ' ';
  //   }
  //   ps += 'Z';
  //   return svg.element('polygon', { points: ps });
  // }
  //
  // createShapes(shapes) {
  //   // document.body.appendChild(div);
  // }

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
