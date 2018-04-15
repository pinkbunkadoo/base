
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
}

export default Vector;
