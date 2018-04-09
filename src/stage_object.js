
class StageObject {
  constructor(params={}) {
    this.el = document.createElement('div');
    this.el.classList.add('stage-object');
    this.setPosition(params.x||0, params.y||0);
    // this.el.classList.add('fragment');
    // this.el.appendChild(document.createTextNode(this.text));
    //
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    this.el.style.left = this.x + 'px';
    this.el.style.top = this.y + 'px';
  }

  addedToStage() {
    console.log('added');
  }
}

export default StageObject;
