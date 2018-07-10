import Stage from './stage';
import Paper from './paper/paper';
import Library from './library';
import Text from './display/text';
import Sequence from './display/sequence';
import Frame from './display/frame';

class App {
  constructor() {
    this.dom = [];
    this.editors = [];
    this.sequences = [];
  }

  init() {
    this.editors.paper = new Paper();
    this.editors.library = new Library();
    this.editors.stage = new Stage();

    global.paper = this.editors.paper;

    this.dom.app = document.getElementById('app');

    let buttons = document.createElement('div');
    buttons.classList.add('editor-buttons');

    let button;

    button = document.createElement('div');
    button.classList.add('button');
    button.innerHTML = 'save';
    button.onclick = () => {
      this.save();
    }
    buttons.appendChild(button);

    button = document.createElement('div');
    button.classList.add('button');
    button.innerHTML = 'library';
    button.onclick = () => {
      this.setEditor(this.editors.library);
    }
    buttons.appendChild(button);

    button = document.createElement('div');
    button.classList.add('button');
    button.innerHTML = 'stage';
    button.onclick = () => {
      this.setEditor(this.editors.stage);
    }
    buttons.appendChild(button);

    button = document.createElement('div');
    button.classList.add('button');
    button.innerHTML = 'paper';
    button.onclick = () => {
      this.setEditor(this.editors.paper);
    }
    buttons.appendChild(button);

    this.dom.app.appendChild(buttons);
    this.dom.buttons = buttons;

    this.load();

    this.setEditor(this.editors.paper);

    let sequence = new Sequence();
    sequence.add(new Frame());
    this.sequences.push(sequence);
    this.editors.paper.setSequence(sequence);

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

  save() {
    let magic = { title: 'hey' };
    localStorage['magic'] = JSON.stringify(magic);
    console.log('saved!');
  }

  load() {
    let magic = localStorage['magic'];
    if (magic) {
      console.log(JSON.parse(magic));
      console.log('loaded!');
    }
  }

  setEditor(editor) {
    if (editor !== this.editor) {
      if (this.editor) {
        this.editor.hide();
        this.dom.app.removeChild(this.editor.dom());
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
  }

  onMouseDown(event) {
  }

  onContextMenu(event) {
    event.preventDefault();
  }

  onResize(event) {
    if (!this.resizeTimerId) {
      this.resizeTimerId = setTimeout(() => {
        this.editors.paper.setSize(window.innerWidth, window.innerHeight);
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
  global.app = app;
  app.init();
});
