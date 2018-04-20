import Transform from './transform';

class Group extends Transform {
  constructor(params={}) {
    super();
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  getBounds() {
    let rects = [];

    for (var i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      let bounds = child.getBounds();
      rects.push(bounds);
    }

    if (rects.length) {
      let xmin = Number.POSITIVE_INFINITY;
      let ymin = Number.POSITIVE_INFINITY;
      let xmax = Number.NEGATIVE_INFINITY;
      let ymax = Number.NEGATIVE_INFINITY;

      for (var i = 0; i < rects.length; i++) {
        let rect = rects[i];
        xmin = rect.x < xmin ? rect.x : xmin;
        ymin = rect.y < ymin ? rect.y : ymin;
        xmax = rect.x + rect.width > xmax ? rect.x + rect.width : xmax;
        ymax = rect.y + rect.height > ymax ? rect.y + rect.height : ymax;
      }
      return new Rectangle(xmin + this.x, ymin + this.y, xmax - xmin, ymax - ymin);
    }

    return null;
  }
}

export default Group;
