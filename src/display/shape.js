import svg from '../svg';
import Point from '../geom/point';
import Rectangle from '../geom/rectangle';
import StageObject from './stage_object';

class Shape extends StageObject {
  constructor(params={}) {
    super(params);

    this.paths = [];

    for (var i = 0; i < paths.length; i++) {
      let path = paths[i];
      let points = [];
      for (var j = 0; j < path.points.length; j++) {
        let p = path.points[j];
        points.push(new Point(p.x, p.y));
      }
      this.paths.push({ points: points });
    }
  }

  getBounds() {
    let xmax = Number.NEGATIVE_INFINITY;
    let xmin = Number.POSITIVE_INFINITY;
    let ymax = Number.NEGATIVE_INFINITY;
    let ymin = Number.POSITIVE_INFINITY;
    for (var i = 0; i < this.paths.length; i++) {
      let path = this.paths[i];
      for (var j = 0; j < path.points.length; j++) {
        let p = path.points[j];
        xmax = p.x > xmax ? p.x : xmax;
        xmin = p.x < xmin ? p.x : xmin;
        ymax = p.y > ymax ? p.y : ymax;
        ymin = p.y < ymin ? p.y : ymin;
      }
    }

    if (xmax == Number.NEGATIVE_INFINITY ||
      xmin == Number.POSITIVE_INFINITY ||
      ymax == Number.NEGATIVE_INFINITY ||
      ymin == Number.POSITIVE_INFINITY)
      return null;

    return new Rectangle(xmin, ymin, xmax - xmin, ymax - ymin);
  }

  dom() {
    let el = super.dom();

    let bounds = this.getBounds();

    if (bounds) {
      this.setPosition(bounds.x, bounds.y);

      el.style.width = bounds.width + 'px';
      el.style.height = bounds.height + 'px';

      let svgEl = svg.svg();
      svgEl.setAttribute('width', bounds.width);
      svgEl.setAttribute('height', bounds.height);
      svgEl.setAttribute('viewBox', '0 0 ' + bounds.width + ' ' + bounds.height);

      for (var i = 0; i < this.paths.length; i++) {
        let path = this.paths[i];
        let ps = '';
        for (var j = 0; j < path.points.length; j++) {
          let p = path.points[j];
          ps += (p.x - bounds.x) + ' ' + (p.y - bounds.y) + ' ';
        }
        ps += 'Z';

        let svgChildEl = svg.element('polygon', { points: ps, fill: 'transparent', stroke: 'black' });
        svgEl.appendChild(svgChildEl);
      }
      el.appendChild(svgEl);
    }

    this.el = el;
    return el;
  }
}

export default Shape;
