import Point from '../geom/point';
import Vector from '../geom/vector';
import Circle from '../geom/circle';

import Shape from '../display/shape';
import Frame from '../display/frame';
import Sequence from '../display/sequence';

import Editor from '../editor';
import PointerTool from './tools/pointer_tool';
import PencilTool from './tools/pencil_tool';

class Paper extends Editor {
  constructor() {
    super();

    this.points = [];
    this.shapes = [];
    this.fill = null;
    this.stroke = null;

    this.selection = [];
    this.sequence = new Sequence();

    this.el = document.createElement('div');
    this.el.classList.add('paper');

    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.el.appendChild(this.canvas);

    this.cursorX = 0;
    this.cursorY = 0;

    this.addFrame();
    this.goFrame(0);

    this.setTool('pointer');
  }

  dom() {
    return this.el;
  }

  setSize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.render();
  }

  drawShape(shape) {
    let points = shape.getPoints();

    let ctx = this.canvas.getContext('2d');
    ctx.save();

    ctx.strokeStyle = shape.stroke || 'transparent';
    ctx.fillStyle = shape.fill || 'transparent';

    ctx.beginPath();

    let sp = this.worldToScreen(shape.x, shape.y);

    for (var j = 0; j < points.length; j++) {
      let p = points[j];
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

  drawOutline(shape, stroke) {
    let ctx = this.canvas.getContext('2d');
    ctx.save();

    ctx.strokeStyle = stroke || 'black';

    ctx.beginPath();

    let sp = this.worldToScreen(shape.x, shape.y);
    let points = shape.getPoints();

    for (var j = 0; j < points.length; j++) {
      let p = points[j];
      let x = (p.x + sp.x);
      let y = (p.y + sp.y);

      if (j == 0)
        ctx.moveTo(x, y);
      else
        ctx.lineTo(x, y);
    }

    if (shape.closed) ctx.closePath();

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
      for (var i = 0; i < this.selection.length; i++) {
        let shape = this.selection[i];
        let p = this.worldToScreen(shape.x, shape.y);
        ctx.beginPath();
        ctx.arc(p.x >> 0, p.y >> 0, 3, 0, Math.PI * 2);
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

    if (this.frameNo > 0) {
      let frame = this.sequence.getFrame(this.frameNo - 1);
      for (let i = 0; i < frame.shapes.length; i++) {
        let shape = frame.shapes[i];
        this.drawOutline(shape, 'rgb(192, 240, 192)');
      }
    }

    for (let i = 0; i < this.frame.shapes.length; i++) {
      let shape = this.frame.shapes[i];
      this.drawShape(shape);
    }

    this.renderHints();

    if (this.tool) {
      ctx.save();
      this.tool.render(ctx);
      ctx.restore();
    }

    ctx.textBaseline = 'top';
    ctx.font = '18px sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText((this.frameNo + 1) + ':' + this.sequence.length, 20, 20);
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

  addShape(shape) {
    this.frame.add(shape);
  }

  getShapes() {
    return this.shapes;
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
          // this.shapes.push(shape);
          this.addShape(shape);
        });
      }
      else {
        return;
      }
      this.toolName = toolName;
      if (this.tool.cursor) this.setCursor(this.tool.cursor);
      this.render();
    }
  }

  addFrame(index) {
    let frame = new Frame();
    if (index !== undefined)
      this.sequence.add(frame, index);
    else
      this.sequence.add(frame);
  }

  clearFrame() {
    this.frame.clear();
    this.render();
  }

  deleteFrame(index) {
    if (this.sequence.length == 1) {
      this.clearFrame();
    }
    else {
      this.sequence.remove(index);
      this.goFrame(index);
    }
  }

  goFrame(frameNo) {
    if (frameNo < 0) frameNo = 0;
    if (frameNo > this.sequence.length - 1) frameNo = this.sequence.length - 1;
    let frame = this.sequence.getFrame(frameNo);
    if (frame) {
      this.frame = frame;
      this.frameNo = frameNo;
      this.selection = [];
      this.render();
    }
  }

  deleteSelected() {
    for (var i = 0; i < this.selection.length; i++) {
      let shape = this.selection[i];
      this.frame.remove(shape);
    }
    this.selection = [];
    this.render();
  }

  onMouseDown(event) {
  }

  onMouseUp(event) {
  }

  onMouseMove(event) {
    this.cursorX = event.pageX;
    this.cursorY = event.pageY;
    if (this.cursor) {
      this.cursor.style.left = this.cursorX + 'px';
      this.cursor.style.top = this.cursorY + 'px';
    }
  }

  onDblClick(event) {
  }

  onKeyDown(event) {
    // console.log(event.key, event.shiftKey);
    if (event.key == 'q' && !event.repeat) {
      this.setTool('pointer');
    }
    else if (event.key == 'b' && !event.repeat) {
      this.setTool('pencil');
    }
    else if ((event.key == '.' || event.key == '>') && !event.repeat) {
      if (event.shiftKey) {
        this.addFrame(this.frameNo + 1);
      }
      this.goFrame(this.frameNo + 1);
    }
    else if ((event.key == ',' || event.key == '<') && !event.repeat) {
      if (event.shiftKey) {
        this.addFrame(this.frameNo);
        this.goFrame(this.frameNo);
      } else {
        this.goFrame(this.frameNo - 1);
      }
    }
    else if (event.key == 'x' && !event.repeat) {
      this.deleteSelected();
    }
    else if (event.key == 'X' && !event.repeat) {
      this.deleteFrame(this.frameNo);
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
