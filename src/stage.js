
class Stage {
  constructor(params={}) {
    this.el = document.createElement('div');
    this.el.classList.add('stage');
    this.children = [];
  }

  add(stageObject) {
    this.children.push(stageObject);
    this.el.appendChild(stageObject.el);
    stageObject.addedToStage();
  }
}

export default Stage;
