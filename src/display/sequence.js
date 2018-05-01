
class Sequence {
  constructor() {
    this.frames = [];
  }

  add(frame, index) {
    console.log('sequence.add', index);
    if (index !== undefined)
      this.frames.splice(index, 0, frame);
    else
      this.frames.push(frame);
  }

  remove(index) {
    if (index >= 0 && index < this.frames.length) {
      this.frames.splice(index, 1);
    }
  }

  getFrame(frameNo) {
    return this.frames[frameNo];
  }

  get length() {
    return this.frames.length;
  }
}

export default Sequence;
