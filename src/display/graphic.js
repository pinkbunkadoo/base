import svg from '../svg';
import Point from '../geom/point';
import Rectangle from '../geom/rectangle';
import Transform from './transform';

class Graphic extends Transform {
  constructor(params={}) {
    super();
    this.shapes = params.shapes || [];
    this.canvas = document.createElement('canvas');
    let bounds = this.getBounds();
    if (bounds) {
      bounds.grow(1);
      this.width = bounds.width;
      this.height = bounds.height;
      this.x = bounds.x;
      this.y = bounds.y;
    }
    this.render();
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
    this.canvas.width = value;
  }

  set height(value) {
    this._height = value;
    this.canvas.height = value;
  }

  hitTest(x, y) {
    for (var i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];
      if (shape.hitTest(x - this.x, y - this.y)) {
        return true;
      }
    }
    return false;
  }

  getBounds() {
    let rect;

    if (this.shapes.length) {
      let xmin = Number.POSITIVE_INFINITY;
      let ymin = Number.POSITIVE_INFINITY;
      let xmax = Number.NEGATIVE_INFINITY;
      let ymax = Number.NEGATIVE_INFINITY;

      let empty = true;

      for (var i = 0; i < this.shapes.length; i++) {
        let shape = this.shapes[i];
        let bounds = shape.getBounds();
        if (bounds) {
          bounds.x += shape.x;
          bounds.y += shape.y;
          // console.log(bounds);
          xmin = (bounds.x < xmin ? bounds.x : xmin);
          ymin = (bounds.y < ymin ? bounds.y : ymin);
          xmax = (bounds.x + bounds.width > xmax ? bounds.x + bounds.width : xmax);
          ymax = (bounds.y + bounds.height > ymax ? bounds.y + bounds.height : ymax);
          // console.log(xmin, ymin, xmax, ymax);
          empty = false;
        }
      }

      if (!empty) rect = new Rectangle(xmin, ymin, xmax - xmin, ymax - ymin);
    }

    return rect;
  }

  render() {
    // console.log('Graphic.render');
    let ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // ctx.fillStyle = 'green';
    // ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.save();

    ctx.translate(1, 1);

    for (var i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];

      // let ps = 'M';
      ctx.strokeStyle = shape.stroke || 'transparent';
      ctx.fillStyle = shape.fill || 'transparent';

      ctx.beginPath();

      for (var j = 0; j < shape.points.length; j++) {
        let p = shape.points[j];
        if (j == 0)
          ctx.moveTo(p.x, p.y);
        else
          ctx.lineTo(p.x, p.y);
        // let p = shape.points[j];
        // if (j > 0) ps += 'L';
        // ps += (p.x - bounds.x) + ' ' + (p.y - bounds.y) + ' ';
      }
      if (shape.closed) {
        // ps += 'Z';
        ctx.closePath();
      }
      ctx.fill();
      ctx.stroke();
    }

    ctx.restore();
  }

  update() {
    // while (this.el.firstChild) this.el.removeChild(this.el.firstChild);
    //
    // let bounds = this.getBounds();
    // if (bounds) {
    //   this.x = bounds.x;
    //   this.y = bounds.y;
    //
    //   this.el.style.width = bounds.width + 'px';
    //   this.el.style.height = bounds.height + 'px';
    //
    //   let svgEl = svg.svg();
    //   svgEl.setAttribute('width', bounds.width);
    //   svgEl.setAttribute('height', bounds.height);
    //   svgEl.setAttribute('viewBox', '0 0 ' + bounds.width + ' ' + bounds.height);
    //   svgEl.setAttribute('pointer-events', 'none');
    //
    //   for (var i = 0; i < this.shapes.length; i++) {
    //     let shape = this.shapes[i];
    //
    //     let ps = 'M';
    //
    //     for (var j = 0; j < shape.points.length; j++) {
    //       let p = shape.points[j];
    //       if (j > 0) ps += 'L';
    //       ps += (p.x - bounds.x) + ' ' + (p.y - bounds.y) + ' ';
    //     }
    //     if (shape.closed) {
    //       ps += 'Z';
    //     }
    //
    //     console.log('fill', shape.fill);
    //
    //     let g = svg.element('g');
    //     // g.setAttribute('pointer-events', shape.fill ? 'visiblePainted' : 'visibleStroke');
    //     g.setAttribute('pointer-events', 'painted');
    //     let path = svg.element('path', { d: ps, fill: (shape.fill ? shape.fill : 'none'), stroke: shape.stroke });
    //     path.setAttribute('stroke-width', 3);
    //     g.appendChild(path);
    //
    //     svgEl.appendChild(g);
    //   }
    //   this.el.appendChild(svgEl);
    // }
  }
}

export default Graphic;
