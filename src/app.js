import svg from './svg';
import Stage from './stage';
import Paper from './paper/paper';
import Shape from './display/shape';
import Group from './display/group';
import Text from './display/text';

class App {
  constructor() {
    this.dom = [];
  }

  init() {
    this.startup();
    this.initEventListeners();
  }

  initEventListeners() {
    window.addEventListener('keydown', this);
    window.addEventListener('keyup', this);
    window.addEventListener('mousedown', this);
    window.addEventListener('mouseup', this);
    window.addEventListener('mousemove', this);
    window.addEventListener('dblclick', this);
    window.addEventListener('contextmenu', this);
    window.addEventListener('focus', this);
    window.addEventListener('blur', this);
  }

  startup() {
    // console.log('startup');

    // let group = new Group();
    //
    // let shape = new Shape({
    //   points: [ { x: 0, y: 0 }, { x: 60, y: 0 }, { x: 40, y: 40 }, { x: 20, y: 10 } ],
    //   fill: '#cccccc',
    //   stroke: 'black',
    //   closed: true
    // });
    // shape.x = -60;
    // shape.y = 80;
    // group.add(shape);
    //
    // shape = new Shape({
    //   points: [ { x: 0, y: 0 }, { x: 60, y: 20 }, { x: 100, y: 20 }, { x: 100, y: 70 } ],
    //   fill: '#cccccc',
    //   stroke: null,
    //   closed: true
    // });
    // shape.x = 150;
    // shape.y = 100;
    // group.add(shape);
    //
    // this.stage.add(group);
    //
    // group.x = 75;
    // group.y = 50;

    this.dom.app = document.getElementById('app');

    this.paper = new Paper();
    this.setEditor(this.paper);

    global.paper = this.paper;

    // this.paper.show();
    // this.editor = this.paper;
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

  setEditor(editor) {
    if (editor !== this.editor) {
      if (this.editor) {
        this.editor.hide();
        this.dom.app.removeChild(this.dom.app.firstChild);
      }
      this.editor = editor;
      this.dom.app.appendChild(this.editor.dom());
      this.editor.show();
    }
  }

  // hideArea() {
  //   if (this.area == 'paper') {
  //     this.hidePaper();
  //   }
  // }
  //
  // showArea(area) {
  //   if (area !== this.area) {
  //     this.hideArea();
  //     if (area == 'paper') {
  //       this.showPaper();
  //     }
  //     else if (area == 'stage') {
  //
  //     }
  //   }
  // }
  //
  // showPaper() {
  //   this.dom.app.appendChild(this.paper.dom());
  //   this.area = 'paper';
  // }
  //
  // hidePaper() {
  //   this.dom.app.removeChild(this.dom.app.firstChild);
  //   this.area = null;
  // }

  onKeyDown(event) {
    // if (event.key == 'p' && !event.repeat) {
    //   this.showArea('paper');
    // }
    // else {
    //
    // }
    // else if (event.key == 'e' && !event.repeat) {
    //   this.stage.edit();
    // }
    // else {
    //   if (this.mode == 'paper') {
    //     this.paper.handleEvent(event);
    //   }
    // }
  }

  onMouseDown(event) {
  }

  onContextMenu(event) {
    event.preventDefault();
  }

  handleEvent(event) {
    if (event.type == 'contextmenu') {
      this.onContextMenu(event);
    }
    else {
      if (this.editor) {
        this.editor.handleEvent(event);
      }
      else {
        if (event.type == 'keydown') {
          this.onKeyDown(event);
        }
        else if (event.type == 'mousedown') {
          this.onMouseDown(event);
        }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  let app = new App();
  app.init();
});
