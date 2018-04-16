
class Svg {
  static element(type, attributes) {
    let el = document.createElementNS('http://www.w3.org/2000/svg', type);
    for (let name in attributes) {
      el.setAttribute(name, attributes[name]);
    }
    return el;
  }

  static svg(attributes) {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink');
    for (let name in attributes) {
      svg.setAttribute(name, attributes[name]);
    }
    return svg;
  }
}

export default Svg;
