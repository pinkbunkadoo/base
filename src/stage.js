
class Stage {
  constructor(params) {
    this.el = document.createElement('div');
    this.el.classList.add('stage');
    this.children = [];
  }

  add(fragment) {
    this.children.push(fragment);
    this.el.appendChild(fragment.el);
  }
}

module.exports = Stage;
