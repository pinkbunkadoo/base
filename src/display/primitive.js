import svg from '../svg';
import StageObject from './stage_object';

class Primitive extends StageObject {
  constructor(params={}) {
    super(params);
    this.type = params.type || 'rectangle';
    this.fill = params.fill;
    this.stroke = params.stroke;
    this.strokeWidth = params.strokeWidth;
    if (this.type == 'rectangle') {
      this.width = params.width || 50;
      this.height = params.height || 50;
    }
  }

  createRectangle() {
    let x = (this.x - this.width / 2);
    let y = (this.y - this.height / 2);
    let svgEl = svg.svg({ width: this.width, height: this.height });
    let el = svg.element('rect', {
      x: 0, y: 0,
      width: this.width, height: this.height,
      fill: this.fill, stroke: this.stroke,
      strokeWidth: this.strokeWidth
    });
    svgEl.appendChild(el);
    return svgEl;
  }

  dom() {
    if (this.type == 'rectangle') {
      return this.createRectangle();
    }
  }
}

export default Primitive;
