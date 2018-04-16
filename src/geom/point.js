
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(point) {
    let dx = this.x - point.x;
    let dy = this.y - point.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

export default Point;
