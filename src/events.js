
class Event {
  constructor(type, params) {
    this.type = type;
    this.params = params;
  }
}

class EventDispatcher {
  constructor() {
    this.listeners = [];
  }
  emit(type, ...args) {
    for (let i = 0; i < this.listeners.length; i++) {
      let listener = this.listeners[i];
      if (listener.type == type) {
        listener.callback(...args);
      }
    }
  }
  on(type, callback) {
    this.listeners.push({ type: type, callback: callback });
  }
}

module.exports = { EventDispatcher, Event };
