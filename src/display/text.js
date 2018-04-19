import StageObject from './stage_object';

class Text extends StageObject {
  constructor(params={}) {
    super();
    this.setSize(params.size || 48);
    this.setText(params.value);
  }

  setSize(value) {
    this.size = value;
    // this.el.style.fontSize = this.size + 'px';
  }

  setText(value) {
    this.value = value;
    // this.el.innerHTML = this.value;
  }

  hitTest(x, y) {
    return false;
  }
}

export default Text;
