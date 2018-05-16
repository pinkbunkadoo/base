
class Point {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  distance(point) {
    let dx = this.x - point.x;
    let dy = this.y - point.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  add(p) {
    this.x += p.x;
    this.y += p.y;
  }

  subtract(p) {
    this.x -= p.x;
    this.y -= p.y;
  }
}

export default Point;
