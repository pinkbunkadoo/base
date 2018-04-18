
class Stage {
  constructor(params={}) {
    this.el = document.createElement('div');
    this.el.classList.add('stage');

    this.children = [];
    this.selection = [];

    this.el.addEventListener('mousedown', this);
    this.el.addEventListener('mouseup', this);
    this.el.addEventListener('mousemove', this);
  }

  add(stageObject) {
    this.children.push(stageObject);
    this.el.appendChild(stageObject.dom());
    stageObject.addedToStage();
    stageObject.on('mousedown', (obj) => {
      // if (this.selection.includes(obj)) {
      //   this.selection = this.selection.filter(element => element !== obj);
      //   obj.deselect();
      // }
      this.deselect();
      this.selection = [ obj ];
      obj.select();
    });
  }

  deselect() {
    if (this.selection.length) {
      for (var i = 0; i < this.selection.length; i++) {
        this.selection[i].deselect();
      }
      this.selection = [];
    }
  }

  onMouseDown(event) {
    if (event.target == this.el) {
      this.deselect();
    }
  }

  onMouseUp(event) {
  }

  onMouseMove(event) {
    this.cursorx = event.offsetX;
    this.cursory = event.offsetY;
  }

  handleEvent(event) {
    if (event.type == 'mousedown') {
      this.onMouseDown(event);
    }
    else if (event.type == 'mouseup') {
      this.onMouseUp(event);
    }
    else if (event.type == 'mousemove') {
      this.onMouseMove(event);
    }
  }
}

export default Stage;
