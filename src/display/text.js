import Transform from './transform';

class Text extends Transform {
  constructor(params={}) {
    super();
    this.setSize(params.size || 48);
    this.setText(params.content);
  }

  setSize(value) {
    this.size = value;
  }

  setText(value) {
    this.content = value;
  }

  hitTest(x, y) {
    return false;
  }
}

export default Text;
