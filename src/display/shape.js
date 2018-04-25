import Util from '../util';
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

    // let center = this.pointList.center();
    // this.x = center.x;
    // this.y = center.y;
    //
    // for (var i = 0; i < this.pointsList.points.length; i++) {
    //   let p = this.pointsList.points[i];
    //   p.x -= this.x;
    //   p.y -= this.y;
    // }
  }

  getPoints() {
    return this.pointList.points;
  }

  getBounds() {
    let bounds = this.pointList.getBounds();
    bounds.x += this.x;
    bounds.y += this.y;
    return bounds;
  }

  intersectsRectangle(xmin, ymin, xmax, ymax) {
    if (xmin > xmax) [xmin, xmax] = [ xmax, xmin ];
    if (ymin > ymax) [ymin, ymax] = [ ymax, ymin ];
    let points = this.pointList.points;
    for (var i = 1; i < points.length; i++) {
      let p0 = points[i - 1];
      let p1 = points[i];
      if (Util.lineIntersectsRectangle(p0.x, p0.y, p1.x, p1.y, xmin - this.x, ymin - this.y, xmax - this.x, ymax - this.y)) {
        return true;
      }
    }
    return false;
  }

  hitTest(x, y) {
    let points = this.pointList.points;
    if (this.fill) {
      return Util.pointInPolygon(points, x - this.x, y - this.y);
    }
    else {

    }
  }
}

export default Shape;
