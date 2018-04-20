import Point from '../geom/point';
import Rectangle from '../geom/rectangle';
import Transform from './transform';

class Shape extends Transform {
  constructor(params={}) {
    super();

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

    // this.x = 0;
    // this.y = 0;
  }

  getBounds() {
    let xmax = Number.NEGATIVE_INFINITY;
    let xmin = Number.POSITIVE_INFINITY;
    let ymax = Number.NEGATIVE_INFINITY;
    let ymin = Number.POSITIVE_INFINITY;

    if (this.points.length) {
      for (var i = 0; i < this.points.length; i++) {
        let p = this.points[i];
        let x = p.x;
        let y = p.y;
        xmax = x > xmax ? x : xmax;
        xmin = x < xmin ? x : xmin;
        ymax = y > ymax ? y : ymax;
        ymin = y < ymin ? y : ymin;
      }
      return new Rectangle(xmin + this.x, ymin + this.y, xmax - xmin, ymax - ymin);
    }

    return null;
  }

  // Copyright (c) 1970-2003, Wm. Randolph Franklin
  // https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html

  static pointInPolygon(points, testx, testy) {
    let i, j, c = 0;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      if (((points[i].y > testy) != (points[j].y > testy)) &&
        (testx < (points[j].x - points[i].x) * (testy - points[i].y) / (points[j].y - points[i].y) + points[i].x))
        c = !c;
    }
    return c;
  }

  hitTest(x, y) {
    return Shape.pointInPolygon(this.points, x, y);
  }
}

export default Shape;
