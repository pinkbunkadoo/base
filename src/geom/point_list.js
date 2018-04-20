import Point from './point';
import Rectangle from './rectangle';

class PointList {
  constructor(points) {
    this.points = points || [];
  }

  getBounds() {
    if (this.points.length) {
      let xmin = Number.POSITIVE_INFINITY;
      let ymin = Number.POSITIVE_INFINITY;
      let xmax = Number.NEGATIVE_INFINITY;
      let ymax = Number.NEGATIVE_INFINITY;

      for (var i = 0; i < this.points.length; i++) {
        let p = this.points[i];
        xmin = p.x < xmin ? p.x : xmin;
        ymin = p.y < ymin ? p.y : ymin;
        xmax = p.x > xmax ? p.x : xmax;
        ymax = p.y > ymax ? p.y : ymax;
      }
      return new Rectangle(xmin, ymin, xmax - xmin, ymax - ymin);
    }

    return null;
  }
}

export default PointList;
