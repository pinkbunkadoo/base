import svg from '../svg';
import Shape from './shape';

class Primitive {

  static rectangle(params={}) {
    let fill = params.fill || 'transparent';
    let stroke = params.stroke || 'black';
    let strokeWidth = params.strokeWidth || 1;
    let width = params.width || 50;
    let height = params.height || 50;
    let x = params.x || 0;
    let y = params.y || 0;

    let svgEl = svg.svg({ width: this.width, height: this.height });
    let el = svg.element('rect', {
      x: 0, y: 0,
      width: this.width, height: this.height,
      fill: this.fill, stroke: this.stroke,
      strokeWidth: this.strokeWidth
    });
    svgEl.appendChild(el);

    // let shape = new StageObject();
    // let shape = new Shape()
    // let

    return svgEl;
  }

}

export default Primitive;
