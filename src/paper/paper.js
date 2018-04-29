import Point from '../geom/point';
import Vector from '../geom/vector';
import Circle from '../geom/circle';
import Shape from '../display/shape';
import Editor from '../editor';
import PointerTool from './tools/pointer_tool';
import PencilTool from './tools/pencil_tool';

// let SNAP_RADIUS = 3;
// let COLORS = [
//   'white',
//   'lightgray',
//   'gray',
//   'black'
// ];

class Paper extends Editor {
  constructor() {
    super();

    this.points = [];
    this.shapes = [];
    this.fill = null;
    this.stroke = null;

    this.selection = [];

    this.el = document.createElement('div');
    this.el.classList.add('paper');

    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.el.appendChild(this.canvas);

    this.cursor = document.createElement('div');
    // this.cursor.classList.add('pointer-cursor');

    this.cursorX = 0;
    this.cursorY = 0;

    // this.cursor.classList.add('paper-cursor');
    // this.el.appendChild(this.cursor);

    // console.log('Paper');
    this.setTool('pencil');
  }

  dom() {
    return this.el;
  }

  drawShape(shape) {
    let points = shape.getPoints();

    let ctx = this.canvas.getContext('2d');
    ctx.save();

    // let tx = this.canvas.width / 2;
    // let ty = this.canvas.height / 2;

    // ctx.translate(0.5, 0.5);

    ctx.strokeStyle = shape.stroke || 'transparent';
    ctx.fillStyle = shape.fill || 'transparent';

    ctx.beginPath();

    let sp = this.worldToScreen(shape.x, shape.y);

    for (var j = 0; j < points.length; j++) {
      let p = points[j];
      // let x = (p.x + sp.x) >> 0;
      // let y = (p.y + sp.y) >> 0;
      let x = (p.x + sp.x);
      let y = (p.y + sp.y);

      if (j == 0)
        ctx.moveTo(x, y);
      else
        ctx.lineTo(x, y);
    }

    if (shape.closed) ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  renderAxis(x, y) {
    let size = 20;
    let ctx = this.canvas.getContext('2d');
    ctx.save();
    ctx.translate(0.5, 0.5);
    ctx.beginPath();
    ctx.strokeStyle = 'lightgray';
    ctx.moveTo(x - size, y);
    ctx.lineTo(x + size, y);
    ctx.moveTo(x, y - size);
    ctx.lineTo(x, y + size);
    ctx.stroke();
    ctx.restore();
  }

  renderHints() {
    let ctx = this.canvas.getContext('2d');
    ctx.save();
    if (this.selection.length) {
      ctx.strokeStyle = 'red';
      // ctx.translate(0.5, 0.5);
      for (var i = 0; i < this.selection.length; i++) {
        let shape = this.selection[i];
        let p = this.worldToScreen(shape.x, shape.y);
        ctx.beginPath();
        ctx.arc(p.x>>0, p.y>>0, 3, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.renderAxis((this.canvas.width / 2) >> 0, (this.canvas.height / 2) >> 0);

    for (let i = 0; i < this.shapes.length; i++) {
      let shape = this.shapes[i];
      this.drawShape(shape);
    }

    this.renderHints();

    if (this.tool) {
      ctx.save();
      this.tool.render(ctx);
      ctx.restore();
    }

    // if (this.points.length) {
    //   this.drawPath({ points: this.points, fill: this.fill, stroke: this.stroke });
    //
    //   ctx.strokeStyle = 'blue';
    //   ctx.beginPath();
    //   let p = this.points[this.points.length - 1];
    //   ctx.moveTo(p.x, p.y);
    //   ctx.lineTo(this.cursorX, this.cursorY);
    //   ctx.stroke();
    //
    //   let cp = new Point(this.cursorX, this.cursorY);
    //   let p0 = this.points[0];
    //   if (cp.distance(p0) < SNAP_RADIUS) {
    //     ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2);
    //     ctx.stroke();
    //   }
    // }

  }

  screenToWorld(x, y) {
    let tx = this.canvas.width / 2;
    let ty = this.canvas.height / 2;
    return new Point(x - tx, y - ty);
  }

  worldToScreen(x, y) {
    let tx = this.canvas.width / 2;
    let ty = this.canvas.height / 2;
    return new Point(x + tx, y + ty);
  }

  getShapes() {
    return this.shapes;
  }

  clear() {
    // this.points = [];
    // this.shapes = [];
    // this.render();
  }

  // setFill(fill) {
  //   this.fill = fill;
  //   this.render();
  // }
  //
  // setStroke(stroke) {
  //   this.stroke = stroke;
  //   this.render();
  // }

  setCursor(cursor) {
    // console.log('setCuror', cursor);
    if (this.el.contains(this.cursor)) {
      this.el.removeChild(this.cursor);
    }
    this.cursor = cursor;
    this.el.appendChild(this.cursor);
  }

  setTool(toolName) {
    if (toolName !== this.toolName) {
      if (toolName == 'pointer') {
        this.tool = new PointerTool();
        this.tool.on('update', () => {
          this.render();
        });
        // this.tool.on('select', (selection) => {
          // console.log(point);
          // this.selection = selection;
          // this.render();
        // });
        // this.tool.on('marquee', (rect) => {
        //   console.log(rect);
        // });
      }
      else if (toolName == 'pencil') {
        this.tool = new PencilTool();
        this.tool.on('update', () => {
          this.render();
        });
        this.tool.on('shape', (shape) => {
          this.shapes.push(shape);
        });
      }
      else {
        return;
      }
      this.toolName = toolName;
      this.setCursor(this.tool.cursor);
      this.render();
    }
  }

  select(shape) {
    // this.selection = [ shape ];
    // this.render();
    // console.log('select', shape);
  }

  // selectMarquee(xmin, ymin, xmax, ymax) {
  //   if (xmin > xmax) [xmin, xmax] = [ xmax, xmin ];
  //   if (ymin > ymax) [ymin, ymax] = [ ymax, ymin ];
  //   let selection = [];
  //   for (var i = 0; i < this.children.length; i++) {
  //     let child = this.children[i];
  //     if (child instanceof Shape) {
  //       if (child.intersectsRectangle(xmin, ymin, xmax, ymax)) {
  //         selection.push(child);
  //         child.select();
  //       }
  //     }
  //   }
  //   this.selection = selection;
  // }

  // hitTest(x, y) {
  //   for (var i = this.shapes.length - 1; i >= 0; i--) {
  //     let child = this.shapes[i];
  //     if (child.hitTest(x, y)) {
  //       return child;
  //     }
  //   }
  //   return null;
  // }

  onMouseDown(event) {
    // this.downX = event.offsetX;
    // this.downY = event.offsetY;
    //
    // let hit = this.hitTest(this.cursorX, this.cursorY);
    // if (hit) {
    //   if (this.selection.includes(hit)) {
    //
    //   } else {
    //     this.deselect();
    //     this.selection = [ hit ];
    //     hit.select();
    //   }
    // }
    // else {
    //   this.deselect();
    // }
    //
    // this.render();
  }

  onMouseUp(event) {
  }

  onMouseMove(event) {
    this.cursorX = event.offsetX;
    this.cursorY = event.offsetY;
    this.cursor.style.left = this.cursorX + 'px';
    this.cursor.style.top = this.cursorY + 'px';
  }

  onDblClick(event) {
  }

  onKeyDown(event) {
    if (event.key == 'q' && !event.repeat) {
      this.setTool('pointer');
    }
    else if (event.key == 'b' && !event.repeat) {
      this.setTool('pencil');
    }
    // if (event.key == 's' && !event.repeat) {
    //   this.setStroke(this.stroke ? null : 'black')
    // }
    // else if (event.key == '0' && !event.repeat) {
    //   this.setFill(null);
    // }
    // else if (['1', '2', '3', '4'].includes(event.key) && !event.repeat) {
    //   let color = COLORS[parseInt(event.key) - 1];
    //   if (color !== undefined)
    //     this.setFill(color);
    // }
    // else {
    //   if (this.mode == 'draw') {
    //     if (event.key == 'Escape' && !event.repeat) {
    //       this.cancelPath();
    //     }
    //     else if (event.key == 'Enter' && !event.repeat) {
    //       this.closePath();
    //     }
    //   }
    //   else {
    //   }
    // }
  }

  handleEvent(event) {
    if (event.type == 'mousemove') {
      this.onMouseMove(event);
    }
    else if (event.type == 'mousedown') {
      this.onMouseDown(event);
    }
    else if (event.type == 'mouseup') {
      this.onMouseUp(event);
    }
    else if (event.type == 'dblclick') {
      this.onDblClick(event);
    }
    else if (event.type == 'keydown') {
      this.onKeyDown(event);
    }

    if (this.tool) {
      this.tool.handleEvent(event);
    }
  }
}

export default Paper;
