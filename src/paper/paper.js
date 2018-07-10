import Util from '../util';
import Point from '../geom/point';
import Vector from '../geom/vector';
import Circle from '../geom/circle';

import Shape from '../display/shape';
import Frame from '../display/frame';
import Sequence from '../display/sequence';

import Editor from '../editor';
import PathTool from './tools/path_tool';
import PointTool from './tools/point_tool';
import PencilTool from './tools/pencil_tool';
import TriangleTool from './tools/triangle_tool';
import Player from './player';
import UndoStack from './undo_stack';

class Paper extends Editor {
  constructor() {
    super();

    this.palette = [
      '#000000',
      '#333333',
      '#666666',
      '#999999',
      '#cccccc',
      '#ffffff'
    ];

    this.points = [];
    this.shapes = [];
    this.fill = this.palette[2];
    this.stroke = null; //this.palette[0];

    this.selection = [];
    this.clipboard = [];
    this.sequence = new Sequence();

    this.el.classList.add('paper');

    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.setSize(window.innerWidth, window.innerHeight);

    this.el.appendChild(this.canvas);

    this.el.addEventListener('pointerleave', this);
    this.el.addEventListener('pointerenter', this);

    this.cursorX = 0;
    this.cursorY = 0;

    this.addFrame();
    this.goFrame(0);

    this.initialised = true;
  }

  show() {
    super.show();
    this.setTool('path');
  }

  hide() {
    super.hide();
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;

    if (this.initialised) this.render();


  }

  setSequence(sequence) {
    this.sequence = sequence;
    this.goFrame(0);
  }

  renderShape(shape) {
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
      let y = (p.y*-1 + sp.y);

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

  renderOutline(shape, stroke) {
    let ctx = this.canvas.getContext('2d');
    ctx.save();

    ctx.strokeStyle = stroke || 'black';
    ctx.beginPath();

    let sp = this.worldToScreen(shape.x, shape.y);
    let points = shape.getPoints();

    for (var j = 0; j < points.length; j++) {
      let p = points[j];
      let x = (p.x + sp.x);
      let y = (p.y*-1 + sp.y);

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
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - size);
    ctx.stroke();
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
        this.renderOutline(shape, 'rgb(192, 240, 192)');
      }
    }

    for (let i = 0; i < this.frame.shapes.length; i++) {
      let shape = this.frame.shapes[i];
      this.renderShape(shape);
    }

    if (this.tool) {
      ctx.save();
      this.tool.render(ctx);
      ctx.restore();
    }

    ctx.textBaseline = 'top';
    ctx.font = '18px sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText((this.frameNo + 1) + ':' + this.sequence.length, 20, 20);

    ctx.textBaseline = 'top';
    ctx.font = '18px sans-serif';
    ctx.fillStyle = 'black';
    ctx.fillText(this.toolName, 20, this.canvas.height - 32);

    ctx.fillStyle = this.fill || 'red';
    ctx.fillRect(100, 20, 20, 20);

    ctx.fillStyle = this.stroke || 'red';
    ctx.fillRect(140, 20, 20, 20);
  }

  selectAll() {
    this.selection = [];
    for (var i = 0; i < this.frame.shapes.length; i++) {
      this.selection.push(this.frame.shapes[i]);
    }
    this.render();
  }

  selectMarquee(xmin, ymin, xmax, ymax) {
    let selection = [];
    for (var i = 0; i < this.frame.shapes.length; i++) {
      let shape = this.frame.shapes[i];
      let points = shape.pointList.points;
      let count = (shape.closed ? points.length + 1 : points.length);
      for (var j = 1; j < count; j++) {
        let p0 = points[j - 1];
        let p1 = (j == points.length ? points[0] : points[j]);
        let sp0 = paper.worldToScreen(p0.x + shape.x, p0.y + shape.y);
        let sp1 = paper.worldToScreen(p1.x + shape.x, p1.y + shape.y);
        if (Util.lineIntersectsRectangle(sp0.x, sp0.y, sp1.x, sp1.y, xmin, ymin, xmax, ymax)) {
          selection.push(shape);
          break;
        }
      }
    }
    this.selection = selection;
  }

  screenToWorld(x, y) {
    let tx = this.canvas.width / 2;
    let ty = this.canvas.height / 2;
    return new Point(x - tx, (y - ty) * -1);
  }

  worldToScreen(x, y) {
    let tx = this.canvas.width / 2;
    let ty = this.canvas.height / 2;
    return new Point(x + tx, (y*-1 + ty));
  }

  pointInShape(shape, x, y) {
    let points = shape.getPoints();
    let sp = this.screenToWorld(x, y);
    return Util.pointInPolygon(points, sp.x - shape.x, sp.y - shape.y);
  }

  pointOnShapeLimit(shape, x, y) {
    let margin = 5;
    let temp = new Point();
    let point = this.screenToWorld(x, y);
    point.subtract(shape.position);

    let points = shape.getPoints();
    let count = (shape.closed ? points.length + 1 : points.length);

    if (points[0].distance(point) < margin) return points[0];

    for (var i = 1; i < count; i++) {
      let p1 = points[i-1];
      let p2 = (i == points.length ? points[0] : points[i]);

      if (p2.distance(point) < margin) return p2;

      let x1 = p2.x - p1.x;
      let y1 = p2.y - p1.y;
      let x2 = point.x - p1.x;
      let y2 = point.y - p1.y;

      let dot = x1 * x1 + y1 * y1;
      if (dot > 0) {
        let ratio = (x2 * x1 + y2 * y1) / dot;
        if (ratio >= 0 && ratio <= 1) {
          temp.x = (x1 * ratio) + p1.x;
          temp.y = (y1 * ratio) + p1.y;
          if (temp.distance(point) < margin) {
            return { point: temp, index: i };
          }
        }
      }
    }
    return null;
  }

  setCursor(cursor) {
    if (this.el.contains(this.cursor)) {
      this.el.removeChild(this.cursor);
    }
    this.cursor = cursor;
    this.el.appendChild(this.cursor);
    this.cursor.style.left = this.cursorX + 'px';
    this.cursor.style.top = this.cursorY + 'px';
  }

  setTool(toolName) {
    if (toolName !== this.toolName) {
      if (toolName == 'path') {
        this.tool = new PathTool();
        this.tool.on('update', () => {
          this.render();
        });
        this.tool.on('change', () => {
          this.saveUndo();
        });
      }
      else if (toolName == 'point') {
        this.tool = new PointTool();
        this.tool.on('update', () => {
          this.render();
        });
      }
      else if (toolName == 'pencil') {
        this.selection = [];
        this.tool = new PencilTool();
        this.tool.on('update', () => {
          this.render();
        });
        this.tool.on('shape', (shape) => {
          this.addShape(shape);
        });
      }
      else if (toolName == 'triangle') {
        this.tool = new TriangleTool();
        this.tool.on('update', () => {
          this.render();
        });
        this.tool.on('shape', (shape) => {
          this.addShape(shape);
        });
      }
      else {
        return;
      }
      this.toolName = toolName;
      // console.log(this.toolName);
      this.setCursor(this.tool.getCursor());
      this.render();
    }
  }

  undo() {
    if (this.undoStack.undo()) {
      let frame = this.undoStack.current();
      if (frame) {
        this.frame.shapes = frame.shapes;
        this.selection = [];
        this.render();
      }
    }
  }

  redo() {
    if (this.undoStack.redo()) {
      let frame = this.undoStack.current();
      if (frame) {
        this.frame.shapes = frame.shapes;
        this.selection = [];
        this.render();
      }
    }
  }

  saveUndo() {
    let frame = this.frame.copy();
    this.undoStack.push(frame);
  }

  addShape(shape) {
    this.frame.add(shape);
    this.saveUndo();
  }

  addFrame(index) {
    let frame = new Frame();

    if (index !== undefined)
      this.sequence.add(frame, index);
    else
      this.sequence.add(frame);

    if (this.selection.length) {
      for (var i = 0; i < this.selection.length; i++) {
        let shape = this.selection[i].copy();
        frame.add(shape);
      }
    }
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

  clearFrame() {
    this.saveUndo();
    this.frame.clear();
    this.render();
  }

  goFrame(frameNo) {
    if (frameNo < 0)
      frameNo = 0;
    else if (frameNo > this.sequence.length - 1)
      frameNo = this.sequence.length - 1;
    let frame = this.sequence.getFrame(frameNo);
    if (frame) {
      this.frame = frame;
      this.frameNo = frameNo;
      this.selection = [];
      this.undoStack = new UndoStack();
      this.saveUndo();
      this.render();
    }
  }

  deleteSelected() {
    if (this.selection.length) {
      for (var i = 0; i < this.selection.length; i++) {
        let shape = this.selection[i];
        this.frame.remove(shape);
      }
      this.selection = [];
      this.saveUndo();
      this.render();
    }
  }

  copySelected() {
    if (this.selection.length) {
      let clipboard = [];
      for (var i = 0; i < this.selection.length; i++) {
        let shape = this.selection[i].copy();
        clipboard.push(shape);
      }
      this.clipboard = clipboard;
    }
  }

  paste() {
    if (this.clipboard.length)  {
      this.selection = [];
      for (var i = 0; i < this.clipboard.length; i++) {
        let shape = this.clipboard[i].copy();
        this.frame.add(shape);
        this.selection.push(shape);
      }
      this.saveUndo();
      this.render();
    }
  }

  setFill(fill) {
    this.fill = fill;
    for (var i = 0; i < this.selection.length; i++) {
      let shape = this.selection[i];
      shape.fill = this.fill;
    }
    this.render();
  }

  setStroke(stroke) {
    this.stroke = stroke;
    for (var i = 0; i < this.selection.length; i++) {
      let shape = this.selection[i];
      shape.stroke = this.stroke;
    }
    this.render();
  }

  bringToFront() {
    if (this.selection.length) {
      let shapes = this.frame.shapes.filter(shape => !this.selection.includes(shape));
      let set = this.frame.shapes.filter(shape => this.selection.includes(shape));
      this.frame.shapes = shapes.concat(set);
      this.saveUndo();
      this.render();
    }
  }

  sendToBack() {
    if (this.selection.length) {
      let shapes = this.frame.shapes.filter(shape => !this.selection.includes(shape));
      let set = this.frame.shapes.filter(shape => this.selection.includes(shape));
      this.frame.shapes = set.concat(shapes);
      this.saveUndo();
      this.render();
    }
  }

  play() {
    this.player = new Player(this.canvas, this.sequence);
    this.player.on('done', () => {
      this.player = null;
      this.render();
    });
    this.player.play();
  }

  onMouseDown(event) {
    this.downX = event.pageX;
    this.downY = event.pageY;
    this.down = true;
  }

  onMouseUp(event) {
    this.down = false;
  }

  onMouseMove(event) {
    this.cursorX = event.pageX;
    this.cursorY = event.pageY;

    this.deltaX = (this.lastX !== undefined ? this.cursorX - this.lastX : 0);
    this.deltaY = (this.lastY !== undefined ? this.cursorY - this.lastY : 0);

    if (this.cursor) {
      this.cursor.style.left = this.cursorX + 'px';
      this.cursor.style.top = this.cursorY + 'px';
    }

    this.lastX = this.cursorX;
    this.lastY = this.cursorY;

    if (this.initialised) {
      // let ctx = this.canvas.getContext('2d');
      // let imageData = ctx.getImageData(0, 0, this.width, this.height);
      // let pixels = imageData.data;
      // let offset = this.cursorY * this.width + this.cursorX;
      // if (pixels[offset*4] <= 16) {
      //   this.cursor.style.filter = 'invert(100%)';
      // }
      // else {
      //   this.cursor.style.filter = 'none';
      // }
    }
  }

  onDblClick(event) {
  }

  onKeyDown(event) {
    let key = event.key;
    if (!event.repeat) {
      if (key == 'q') {
        this.setTool('path');
      }
      else if (key == 'e') {
        this.setTool('point');
      }
      else if (key == 'b') {
        this.setTool('pencil');
      }
      else if (key == 't') {
        this.setTool('triangle');
      }
      else if ((key == '.' || key == '>')) {
        if (event.shiftKey) {
          this.addFrame(this.frameNo + 1);
        }
        this.goFrame(this.frameNo + 1);
      }
      else if ((key == ',' || key == '<')) {
        if (event.shiftKey) {
          this.addFrame(this.frameNo);
          this.goFrame(this.frameNo);
        } else {
          this.goFrame(this.frameNo - 1);
        }
      }
      else if (key == 'c') {
        if (event.metaKey || event.ctrlKey) {
          this.copySelected();
        }
      }
      else if (key == 'v') {
        if (event.metaKey || event.ctrlKey) {
          this.paste();
        }
      }
      else if (key == 'a') {
        this.selectAll();
      }
      else if (key == 'x') {
        this.deleteSelected();
      }
      else if (key == 'X') {
        this.deleteFrame(this.frameNo);
      }
      else if (key == 'z' && event.metaKey) {
        if (event.shiftKey)
          this.redo();
        else
          this.undo();
      }
      else if (key == 'ArrowUp') {
        if (event.metaKey || event.ctrlKey) this.bringToFront();
      }
      else if (key == 'ArrowDown') {
        if (event.metaKey || event.ctrlKey) this.sendToBack();
      }
      else if (key == ' ') {
        this.play();
      }
      else if (key == ')') {
        this.setStroke(null);
      }
      else if (key == '0') {
        this.setFill(null);
      }
      else {
        let set = ['1', '2', '3', '4', '5', '6', '!', '@', '£', '$', '%', '^'];
        let index = set.indexOf(key);
        if (index !== -1) {
          if (index > 5) {
            this.setStroke(this.palette[index - 6] || null);
          }
          else {
            this.setFill(this.palette[index] || null);
          }
          this.render();
        }
      }
    }
  }

  onBlur(event) {

  }

  onPointerEnter(event) {
    this.cursor.style.display = 'block';
  }

  onPointerLeave(event) {
    this.cursor.style.display = 'none';
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
    else if (event.type == 'blur') {
      this.onBlur(event);
    }
    else if (event.type == 'pointerenter') {
      this.onPointerEnter(event);
    }
    else if (event.type == 'pointerleave') {
      this.onPointerLeave(event);
    }

    if (this.player) {
      this.player.handleEvent(event);
    }
    else {
      if (event.type == 'keydown') {
        this.onKeyDown(event);
      }
      if (this.tool) {
        this.tool.handleEvent(event);
      }
    }
  }
}

export default Paper;
