import Point from '../geom/point';
import Rectangle from '../geom/rectangle';

class Shape {
  constructor(params={}) {
    this.points = [];

    let points = params.points;
    if (points) {
      for (var i = 0; i < points.length; i++) {
        let p = points[i];
        this.points.push(new Point(p.x, p.y));
      }
    }

    this.fill = params.fill || null;
    this.stroke = params.stroke || null;
    this.strokeWidth = params.strokeWidth || 1;
    this.closed = params.closed || false;

    this.x = 0;
    this.y = 0;
  }

  getBounds() {
    let rect = null;

    let xmax = Number.NEGATIVE_INFINITY;
    let xmin = Number.POSITIVE_INFINITY;
    let ymax = Number.NEGATIVE_INFINITY;
    let ymin = Number.POSITIVE_INFINITY;

    if (this.points.length) {
      for (var i = 0; i < this.points.length; i++) {
        let p = this.points[i];
        xmax = p.x > xmax ? p.x : xmax;
        xmin = p.x < xmin ? p.x : xmin;
        ymax = p.y > ymax ? p.y : ymax;
        ymin = p.y < ymin ? p.y : ymin;
      }
      rect = new Rectangle(xmin, ymin, xmax - xmin, ymax - ymin);
    }

    return rect;
  }
}

export default Shape;
