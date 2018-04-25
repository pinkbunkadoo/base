import Rectangle from '../geom/rectangle';
import Transform from './transform';
import Shape from './shape';

class Group extends Transform {
  constructor(params={}) {
    super();
    this.children = [];
  }

  add(content) {
    if (content instanceof Array) {
      for (var i = 0; i < content.length; i++) {
        let shape = content[i];
        if (shape instanceof Shape) this.add(shape);
      }
    }
    else if (content instanceof Shape) {
      this.children.push(content);
    }
  }

  hitTest(x, y) {
    for (var i = 0; i < this.children.length; i++) {
      let shape = this.children[i];
      if (shape.hitTest(x - this.x, y - this.y)) {
        return true;
      }
    }
    return false;
  }

  getBounds() {
    let rects = [];

    for (var i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      let bounds = child.getBounds();
      rects.push(bounds);
    }

    if (rects.length) {
      let xmin = 0; //Number.POSITIVE_INFINITY;
      let ymin = 0; //Number.POSITIVE_INFINITY;
      let xmax = 0; //Number.NEGATIVE_INFINITY;
      let ymax = 0; //Number.NEGATIVE_INFINITY;

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
