
class UndoStack {
  constructor() {
    this.stack = [];
    this.marker = 0;
  }

  push(item) {
    this.stack.splice(this.marker + 1);
    this.stack.push(item);
    this.marker = this.stack.length - 1;
  }

  current() {
    if (this.stack.length) {
      return this.stack[this.marker];
    }
    return null;
  }

  undo() {
    if (this.marker > 0) {
      this.marker--;
      return true;
    }
    return false;
  }

  redo() {
    if (this.marker < this.stack.length - 1) {
      this.marker++;
      return true;
    }
    return false;
  }
}

export default UndoStack;
