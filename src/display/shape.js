import Point from '../geom/point';
import PointList from '../geom/point_list';
import Rectangle from '../geom/rectangle';
import Transform from './transform';

class Shape extends Transform {
  constructor(params={}) {
    super();

    this.fill = params.fill || null;
    this.stroke = params.stroke || null;
    this.strokeWidth = params.strokeWidth || 1;
    this.closed = params.closed || false;

    this.pointList = new PointList(params.points);
    let bounds = this.pointList.getBounds();
    this.x = bounds.x + bounds.width / 2;
    this.y = bounds.y + bounds.height / 2;
    // console.log(bounds);

    let points = this.pointList.points;

    for (var i = 0; i < points.length; i++) {
      let p = points[i];
      p.x -= this.x;
      p.y -= this.y;
    }

    // console.log(points);
  }

  getPoints() {
    return this.pointList.points;
  }

  getBounds() {
    return this.pointList.getBounds();
  }

  // Copyright (c) 1970-2003, Wm. Randolph Franklin
  // https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html

  static pointInside(points, testx, testy) {
    let i, j, c = 0;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      if (((points[i].y > testy) != (points[j].y > testy)) &&
        (testx < (points[j].x - points[i].x) * (testy - points[i].y) / (points[j].y - points[i].y) + points[i].x))
        c = !c;
    }
    return c;
  }

  hitTest(x, y) {
    return Shape.pointInside(this.pointList.points, x - this.x, y - this.y);
  }
}

export default Shape;
