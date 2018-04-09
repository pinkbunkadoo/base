
import Engine from './engine';
import Stage from './stage';
import Text from './text';

// const Fragment = require('./fragment');
// const Stage = require('./stage');

class App {
  constructor() {
    console.log('App');

  }

  startup() {
    console.log('startup');

    this.stage = new Stage();
    // this.engine = new Engine({ stage: this.stage });

    let label = new Text({ value: 'hello', x: 50, y: 100 });
    this.stage.add(label);

    // let fragment = new Fragment({ text: 'Hello', x: 50, y: 100 });
    // this.stage.add(fragment);

    document.body.appendChild(this.stage.el);

    // label.el.style.fontSize = '36px';
  }

  init() {
    console.log('init');
    this.initElements();
    this.initEventListeners();
    this.startup();
  }

  initEventListeners() {

  }

  initElements() {
    // this.dom.app = document.getElementById('app');
    // this.stage = new Stage();
    // this.dom.app.appendChild(this.stage.el);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  let app = new App();
  app.init();
});


// module.exports = App;
// global.App = App;
