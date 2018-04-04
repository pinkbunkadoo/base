class App {
  constructor() {
    console.log('App');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
});

module.exports = App;
global.App = App;
