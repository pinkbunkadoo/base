
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  intersectsLineSegment(x1, y1, x2, y2) {

  }

  containsPoint(x, y) {
    let dx = x - this.x;
    let dy = y - this.y;
    let d = Math.sqrt(dx * dx + dy * dy);
    return d < this.r;
  }
}

export default Circle;
