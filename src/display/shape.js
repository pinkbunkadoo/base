import Util from '../util';
import Point from '../geom/point';
import PointList from '../geom/point_list';
import Rectangle from '../geom/rectangle';
import Transform from './transform';

class Shape extends Transform {
  constructor(params={}) {
    super();

    this.x = params.x || 0;
    this.y = params.y || 0;
    this.fill = params.fill || null;
    this.stroke = params.stroke || null;
    this.closed = params.closed || false;

    if (params.pointList)
      this.pointList = params.pointList.copy();
    else
      this.pointList = new PointList();
  }

  copy() {
    return new Shape({
      x: this.x, y: this.y, pointList: this.pointList, stroke: this.stroke,
      fill: this.fill, closed: this.closed
    });
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

}

export default Shape;
