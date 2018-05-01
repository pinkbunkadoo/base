
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
}

export default Frame;
