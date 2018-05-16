
class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  grow(amount) {
    this.x -= amount;
    this.y -= amount;
    this.width += amount * 2;
    this.height += amount * 2;
  }

  pointInside(x, y) {
    return (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height);
  }
}

export default Rectangle;
