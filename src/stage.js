
class Stage {
  constructor(params={}) {
    this.el = document.createElement('div');
    this.el.classList.add('stage');
    this.children = [];

    this.el.addEventListener('mousedown', this);
    this.el.addEventListener('mouseup', this);
    this.el.addEventListener('mousemove', this);
  }

  add(stageObject) {
    this.children.push(stageObject);
    this.el.appendChild(stageObject.el);
    stageObject.addedToStage();
  }

  onMouseMove(event) {
    this.cursorx = event.offsetX;
    this.cursory = event.offsetY;
  }

  handleEvent(event) {
    if (event.type == 'mousedown') {

    }
    else if (event.type == 'mouseup') {

    }
    else if (event.type == 'mousemove') {
      this.onMouseMove(event);
    }
  }
}

export default Stage;
