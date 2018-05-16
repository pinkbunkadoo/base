import { EventDispatcher } from '../events';

class Player extends EventDispatcher {
  constructor(canvas, sequence) {
    super();
    this.canvas = canvas;
    this.sequence = sequence;
    this.frameNo = 0;
    this.fps = 6;
  }

  render() {
    let ctx = this.canvas.getContext('2d');
    ctx.save();

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.fillStyle = 'black';

    ctx.font = '16px sans-serif';
    ctx.fillText(this.playing ? 'Play' : 'Pause', 20, 20);

    ctx.font = '16px sans-serif';
    ctx.fillText(this.frameNo + 1, 100, 20);

    let frame = this.sequence.frames[this.frameNo];

    for (var i = 0; i < frame.shapes.length; i++) {
      let shape = frame.shapes[i];

      ctx.strokeStyle = shape.stroke || 'transparent';
      ctx.fillStyle = shape.fill || 'transparent';

      ctx.beginPath();

      let sp = paper.worldToScreen(shape.x, shape.y);
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

      ctx.fill();
      ctx.stroke();
    }

    ctx.restore();
  }

  step() {
    this.frameId = requestAnimationFrame(this.step.bind(this));

    this.time = performance.now();
    this.timeDelta = this.timeDelta + (this.time - this.previousTime);

    if (this.timeDelta >= 1000 / this.fps) {
      this.timeDelta = this.timeDelta - (1000 / this.fps);
      this.frameNo++;
      if (this.frameNo == this.sequence.length) this.frameNo = 0;
      this.render();
    }

    this.previousTime = this.time;
  }

  play() {
    this.timeDelta = 0;
    this.time = this.previousTime = performance.now();
    this.playing = true;
    this.frameId = requestAnimationFrame(this.step.bind(this));
    this.render();
  }

  pause() {
    cancelAnimationFrame(this.frameId);
    this.playing = false;
    this.render();
  }

  done() {
    this.pause();
    this.emit('done');
  }

  toggle() {
    if (this.playing) {
      this.pause();
    }
    else {
      this.play();
    }
  }

  onKeyDown(event) {
    if (!event.repeat) {
      if (event.key == ' ' || event.key == 'Escape' || event.key == 'Enter') {
        this.done();
      }
    }
  }

  onMouseDown(event) {
    this.done();
  }

  onBlur(event) {
    this.done();
  }

  handleEvent(event) {
    if (event.type == 'keydown') {
      this.onKeyDown(event);
    }
    else if (event.type == 'mousedown') {
      this.onMouseDown(event);
    }
    else if (event.type == 'blur') {
      this.onBlur(event);
    }
  }
}

export default Player;
