
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  dot(vector) {
    return (this.x * vector.x + this.y * vector.y);
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  project(vector) {
    let d = vector.dot(vector);
    if (d > 0) {
      let ratio = this.dot(vector) / d;
      if (ratio >= 0 && ratio <= 1) {
        return new Vector(vector.x * ratio, vector.y * ratio);
      }
    }
    return null;
  }
}

export default Vector;
