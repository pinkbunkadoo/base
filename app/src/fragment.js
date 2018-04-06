
class Fragment {
  constructor(params) {
    this.x = params.x;
    this.y = params.y;
    this.text = params.text;

    this.el = document.createElement('div');
    this.el.classList.add('fragment');
    this.el.appendChild(document.createTextNode(this.text));
    this.el.style.left = this.x + 'px';
    this.el.style.top = thix.y + 'px';
  }
}

module.exports = Fragment;
