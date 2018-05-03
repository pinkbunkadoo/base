import svg from './svg';
import Stage from './stage';
import Paper from './paper/paper';
import Shape from './display/shape';
import Group from './display/group';
import Text from './display/text';

class App {
  constructor() {
    this.dom = [];
    this.paper = new Paper();
  }

  init() {
    this.dom.app = document.getElementById('app');

    this.setEditor(this.paper);

    global.paper = this.paper;
    global.app = this;

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
    window.addEventListener('resize', this);
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

  onKeyDown(event) {
    if (!event.repeat) {
      if (event.key == ']') {

      }
      else if (event.key == ']') {

      }
    }
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

  onResize(event) {
    if (!this.resizeTimerId) {
      this.resizeTimerId = setTimeout(() => {
        this.paper.setSize(window.innerWidth, window.innerHeight);
        this.resizeTimerId = null;
      }, 100);
    }
  }

  handleEvent(event) {
    if (event.type == 'contextmenu') {
      this.onContextMenu(event);
    }
    else if (event.type == 'resize') {
      this.onResize(event);
    }
    else if (event.type == 'keydown') {
      this.onKeyDown(event);
    }
    else if (event.type == 'mousedown') {
      this.onMouseDown(event);
    }

    if (this.editor) {
      this.editor.handleEvent(event);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  let app = new App();
  app.init();
});
