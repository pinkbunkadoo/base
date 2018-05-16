
class Frame {
  constructor() {
    this.shapes = [];
  }

  add(shape) {
    this.shapes.push(shape);
  }

  remove(shape) {
    let index = this.shapes.indexOf(shape);
    if (index !== -1) {
      this.shapes.splice(index, 1);
    }
  }

  clear() {
    this.shapes = [];
  }

  copy() {
    let frame = new Frame();
    for (var i = 0; i < this.shapes.length; i++) {
      frame.add(this.shapes[i].copy());
    }
    return frame;
  }
}

export default Frame;
