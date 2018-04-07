
const Engine = require('./engine');
// const Fragment = require('./fragment');
// const Stage = require('./stage');

class App {
  constructor() {
    console.log('App');

    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded');
      this.init();
    });
  }

  startup() {
    console.log('startup');

    // this.engine = new Engine({ stage: this.stage });
    //
    // let fragment = new Fragment({ text: 'Hello', x: 50, y: 100 });
    // this.stage.add(fragment);
  }

  init() {
    this.initElements();
    this.initEventListeners();
    this.startup();
  }

  initEventListeners() {

  }

  initElements() {
    this.dom.app = document.getElementById('app');
    // this.stage = new Stage();
    // this.dom.app.appendChild(this.stage.el);
  }
}

module.exports = App;
// global.App = App;
