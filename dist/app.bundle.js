/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stage = __webpack_require__(/*! ./stage */ "./src/stage.js");

var _stage2 = _interopRequireDefault(_stage);

var _text_object = __webpack_require__(/*! ./text_object */ "./src/text_object.js");

var _text_object2 = _interopRequireDefault(_text_object);

var _paper = __webpack_require__(/*! ./paper */ "./src/paper.js");

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.dom = [];
  }

  _createClass(App, [{
    key: 'startup',
    value: function startup() {
      console.log('startup');

      var label = new _text_object2.default({ value: 'hello', x: 50, y: 100 });

      label.on('hey', function (event) {});

      this.stage.add(label);
    }
  }, {
    key: 'init',
    value: function init() {
      this.initElements();
      this.initEventListeners();
      this.startup();
    }
  }, {
    key: 'initEventListeners',
    value: function initEventListeners() {
      window.addEventListener('keydown', this);
    }
  }, {
    key: 'initElements',
    value: function initElements() {
      var _this = this;

      this.dom.app = document.getElementById('app');
      document.body.appendChild(this.dom.app);

      this.stage = new _stage2.default();
      this.dom.app.appendChild(this.stage.el);

      this.paper = new _paper2.default({ visible: false });
      this.dom.app.appendChild(this.paper.el);

      this.paper.on('shape', function (points) {
        // console.log('shape', points);
        _this.createShape(points);
        _this.togglePaper();
      });
    }
  }, {
    key: 'togglePaper',
    value: function togglePaper() {
      if (this.mode !== 'paper') {
        this.paper.setVisible(true);
        this.paper.clear();
        this.mode = 'paper';
      } else {
        this.paper.setVisible(false);
        this.mode = null;
      }
    }
  }, {
    key: 'createShape',
    value: function createShape(points) {}
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key == 'd' && !event.repeat) {
        this.togglePaper();
      } else {
        if (this.mode == 'paper') {
          this.paper.handleEvent(event);
        }
      }
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'keydown') {
        this.onKeyDown(event);
      }
    }
  }]);

  return App;
}();

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  var app = new App();
  app.init();
});

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function Event(type, params) {
  _classCallCheck(this, Event);

  this.type = type;
  this.params = params;
};

var EventDispatcher = function () {
  function EventDispatcher() {
    _classCallCheck(this, EventDispatcher);

    this.listeners = [];
  }

  _createClass(EventDispatcher, [{
    key: "emit",
    value: function emit(type) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      for (var i = 0; i < this.listeners.length; i++) {
        var listener = this.listeners[i];
        if (listener.type == type) {
          listener.callback.apply(listener, args);
        }
      }
    }
  }, {
    key: "on",
    value: function on(type, callback) {
      this.listeners.push({ type: type, callback: callback });
    }
  }]);

  return EventDispatcher;
}();

module.exports = { EventDispatcher: EventDispatcher, Event: Event };

/***/ }),

/***/ "./src/geom/circle.js":
/*!****************************!*\
  !*** ./src/geom/circle.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
  function Circle(x, y, r) {
    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.r = r;
  }

  _createClass(Circle, [{
    key: "intersectsLineSegment",
    value: function intersectsLineSegment(x1, y1, x2, y2) {}
  }, {
    key: "containsPoint",
    value: function containsPoint(x, y) {
      var dx = x - this.x;
      var dy = y - this.y;
      var d = Math.sqrt(dx * dx + dy * dy);
      return d < this.r;
    }
  }]);

  return Circle;
}();

exports.default = Circle;

/***/ }),

/***/ "./src/paper.js":
/*!**********************!*\
  !*** ./src/paper.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! ./events */ "./src/events.js");

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var _util2 = _interopRequireDefault(_util);

var _circle = __webpack_require__(/*! ./geom/circle */ "./src/geom/circle.js");

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paper = function (_EventDispatcher) {
  _inherits(Paper, _EventDispatcher);

  function Paper() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Paper);

    var _this = _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).call(this));

    _this.points = [];

    _this.el = document.createElement('div');
    _this.el.classList.add('paper');

    _this.canvas = document.createElement('canvas');
    _this.adjustCanvas();

    _this.el.appendChild(_this.canvas);

    _this.el.addEventListener('mousedown', _this);
    _this.el.addEventListener('mousemove', _this);
    _this.el.addEventListener('mouseup', _this);
    _this.el.addEventListener('dblclick', _this);
    _this.el.addEventListener('contextmenu', _this);

    _this.setVisible(params.visible !== undefined ? params.visible : true);

    // this.circle = { x: 0, y: 0, r: 80 };
    // this.line = { x1: 10, y1: 50, x2: 100, y2: 50 };
    //
    // util.circleLineIntersection(
    //   this.circle.x, this.circle.y, this.circle.r,
    //   this.line.x1, this.line.y1, this.line.x2, this.line.y2
    // );
    return _this;
  }

  _createClass(Paper, [{
    key: 'adjustCanvas',
    value: function adjustCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }, {
    key: 'setVisible',
    value: function setVisible(visible) {
      this.visible = visible;
      if (this.visible) this.el.style.display = 'block';else this.el.style.display = 'none';
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.strokeStyle = 'red';
      ctx.beginPath();
      for (var i = 0; i < this.points.length; i++) {
        var p = this.points[i];
        if (i == 0) ctx.moveTo(p.x, p.y);else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(this.cursorX, this.cursorY, 25, 0, Math.PI * 2, false);
      ctx.stroke();

      // ctx.beginPath();
      // ctx.moveTo(this.line.x1, this.line.y1);
      // ctx.lineTo(this.line.x2, this.line.y2);
      // ctx.stroke();

      if (this.points.length) {
        ctx.strokeStyle = 'blue';
        ctx.beginPath();
        var _p = this.points[this.points.length - 1];
        ctx.moveTo(_p.x, _p.y);
        ctx.lineTo(this.cursorX, this.cursorY);
        ctx.stroke();
      }

      var line = { x1: 100, y1: 60, x2: 150, y2: 120 };

      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();

      var line2 = { x1: 100, y1: 60, x2: this.cursorX, y2: this.cursorY };
      ctx.beginPath();
      ctx.moveTo(line2.x1, line2.y1);
      ctx.lineTo(line2.x2, line2.y2);
      ctx.stroke();
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.points = [];
      this.render();
    }
  }, {
    key: 'closeShape',
    value: function closeShape() {
      this.emit('shape', this.points);
      this.render();
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      // console.log(event.button);
      if (event.button == 0) {
        this.points.push({ x: event.offsetX, y: event.offsetY });
        // this.render();
      }
      // else if (event.button == 2) {
      //   this.closeShape();
      // }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {}
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorX = event.offsetX;
      this.cursorY = event.offsetY;
      this.render();
    }
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {
      this.closeShape();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key == 'Escape') {
        this.closeShape();
      }
      // console.log(event.key);
    }
  }, {
    key: 'onContextMenu',
    value: function onContextMenu(event) {
      event.preventDefault();
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'mousedown') {
        this.onMouseDown(event);
      } else if (event.type == 'mouseup') {
        this.onMouseUp(event);
      } else if (event.type == 'mousemove') {
        this.onMouseMove(event);
      } else if (event.type == 'dblclick') {
        this.onDblClick(event);
      } else if (event.type == 'keydown') {
        this.onKeyDown(event);
      } else if (event.type == 'contextmenu') {
        this.onContextMenu(event);
      }
    }
  }]);

  return Paper;
}(_events.EventDispatcher);

exports.default = Paper;

/***/ }),

/***/ "./src/stage.js":
/*!**********************!*\
  !*** ./src/stage.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = function () {
  function Stage() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Stage);

    this.el = document.createElement('div');
    this.el.classList.add('stage');
    this.children = [];

    this.el.addEventListener('mousedown', this);
    this.el.addEventListener('mouseup', this);
    this.el.addEventListener('mousemove', this);
  }

  _createClass(Stage, [{
    key: 'add',
    value: function add(stageObject) {
      this.children.push(stageObject);
      this.el.appendChild(stageObject.el);
      stageObject.addedToStage();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorx = event.offsetX;
      this.cursory = event.offsetY;
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'mousedown') {} else if (event.type == 'mouseup') {} else if (event.type == 'mousemove') {
        this.onMouseMove(event);
      }
    }
  }]);

  return Stage;
}();

exports.default = Stage;

/***/ }),

/***/ "./src/stage_object.js":
/*!*****************************!*\
  !*** ./src/stage_object.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! ./events */ "./src/events.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StageObject = function (_EventDispatcher) {
  _inherits(StageObject, _EventDispatcher);

  function StageObject() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, StageObject);

    var _this = _possibleConstructorReturn(this, (StageObject.__proto__ || Object.getPrototypeOf(StageObject)).call(this));

    _this.el = document.createElement('div');
    _this.el.classList.add('stage-object');
    _this.setPosition(params.x || 0, params.y || 0);

    _this.el.addEventListener('mousedown', _this);
    return _this;
  }

  _createClass(StageObject, [{
    key: 'setPosition',
    value: function setPosition(x, y) {
      this.x = x;
      this.y = y;
      this.el.style.left = this.x + 'px';
      this.el.style.top = this.y + 'px';
    }
  }, {
    key: 'addedToStage',
    value: function addedToStage() {
      this.emit('hey', new _events.Event('hey', { num: 1 }));
    }
  }, {
    key: 'beginDrag',
    value: function beginDrag() {
      window.addEventListener('mouseup', this);
      window.addEventListener('mousemove', this);
      window.addEventListener('blur', this);
      this.drag = true;
    }
  }, {
    key: 'endDrag',
    value: function endDrag() {
      window.removeEventListener('mouseup', this);
      window.removeEventListener('mousemove', this);
      window.removeEventListener('blur', this);
      this.drag = false;
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      this.beginDrag();
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      this.endDrag();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      if (this.drag) {
        this.setPosition(this.x + event.movementX, this.y + event.movementY);
      } else {
        // if (event.button == 0) {
        //   console.log('left');
        // }
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      this.endDrag();
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'mousedown') {
        this.onMouseDown(event);
      } else if (event.type == 'mouseup') {
        this.onMouseUp(event);
      } else if (event.type == 'mousemove') {
        this.onMouseMove(event);
      } else if (event.type == 'blur') {
        this.onBlur(event);
      }
    }
  }]);

  return StageObject;
}(_events.EventDispatcher);

exports.default = StageObject;

/***/ }),

/***/ "./src/text_object.js":
/*!****************************!*\
  !*** ./src/text_object.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _stage_object = __webpack_require__(/*! ./stage_object */ "./src/stage_object.js");

var _stage_object2 = _interopRequireDefault(_stage_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextObject = function (_StageObject) {
  _inherits(TextObject, _StageObject);

  function TextObject() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TextObject);

    var _this = _possibleConstructorReturn(this, (TextObject.__proto__ || Object.getPrototypeOf(TextObject)).call(this, params));

    _this.setSize(params.size || 48);
    _this.setText(params.value);
    return _this;
  }

  _createClass(TextObject, [{
    key: 'setSize',
    value: function setSize(value) {
      this.size = value;
      this.el.style.fontSize = this.size + 'px';
    }
  }, {
    key: 'setText',
    value: function setText(value) {
      this.value = value;
      this.el.innerHTML = this.value;
    }
  }, {
    key: 'addedToStage',
    value: function addedToStage() {
      _get(TextObject.prototype.__proto__ || Object.getPrototypeOf(TextObject.prototype), 'addedToStage', this).call(this);
    }
  }]);

  return TextObject;
}(_stage_object2.default);

exports.default = TextObject;

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// circle: { x, y, r }
// line: { x1, y1, x2, y2 }

function circleLineIntersection(x, y, r, x1, y1, x2, y2) {
  // x1 = x1 - x;
  // y1 = (y1 - y) * -1;
  // x2 = x2 - x;
  // y2 = (y2 - y) * -1;
  y1 *= -1;
  y2 *= -1;

  var dx = x2 - x1;
  var dy = y2 - y1;
  var dr = Math.sqrt(dx * dx + dy * dy);
  var d = x1 * y2 - x2 * y1;
  var dc = r * r * (dr * dr) - d * d;

  console.log(dx, dy, dr, d);

  if (dc < 0) {
    console.log('no intersect', dc);
  } else if (dc == 0) {
    console.log('tangent', dc);
  } else if (dc > 0) {
    console.log('intersect', dc);
  }
}

function lineIntersectsCircle(x, y, r, x1, y1, x2, y2) {}

exports.default = {
  lineIntersectsCircle: lineIntersectsCircle,
  circleLineIntersection: circleLineIntersection
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZV9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHRfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsInZhbHVlIiwieCIsInkiLCJvbiIsImV2ZW50Iiwic3RhZ2UiLCJhZGQiLCJpbml0RWxlbWVudHMiLCJpbml0RXZlbnRMaXN0ZW5lcnMiLCJzdGFydHVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbCIsInBhcGVyIiwidmlzaWJsZSIsInBvaW50cyIsImNyZWF0ZVNoYXBlIiwidG9nZ2xlUGFwZXIiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwia2V5IiwicmVwZWF0IiwiaGFuZGxlRXZlbnQiLCJ0eXBlIiwib25LZXlEb3duIiwiaW5pdCIsIkV2ZW50IiwicGFyYW1zIiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImkiLCJsZW5ndGgiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJDaXJjbGUiLCJyIiwieDEiLCJ5MSIsIngyIiwieTIiLCJkeCIsImR5IiwiZCIsIk1hdGgiLCJzcXJ0IiwiUGFwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiY2FudmFzIiwiYWRqdXN0Q2FudmFzIiwidW5kZWZpbmVkIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsImRpc3BsYXkiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJwIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiYXJjIiwiY3Vyc29yWCIsImN1cnNvclkiLCJQSSIsImxpbmUiLCJsaW5lMiIsInJlbmRlciIsImVtaXQiLCJidXR0b24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsb3NlU2hhcGUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25Nb3VzZU1vdmUiLCJvbkRibENsaWNrIiwib25Db250ZXh0TWVudSIsIlN0YWdlIiwiY2hpbGRyZW4iLCJzdGFnZU9iamVjdCIsImFkZGVkVG9TdGFnZSIsImN1cnNvcngiLCJjdXJzb3J5IiwiU3RhZ2VPYmplY3QiLCJzZXRQb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJudW0iLCJkcmFnIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJlZ2luRHJhZyIsImVuZERyYWciLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJvbkJsdXIiLCJUZXh0T2JqZWN0Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRUZXh0IiwiZm9udFNpemUiLCJpbm5lckhUTUwiLCJjaXJjbGVMaW5lSW50ZXJzZWN0aW9uIiwiZHIiLCJkYyIsImxpbmVJbnRlcnNlY3RzQ2lyY2xlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMv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QUFZLGNBQVosRUFBNEIwSCxFQUE1QjtBQUNELEdBRkQsTUFHSyxJQUFJQSxNQUFNLENBQVYsRUFBYTtBQUNoQjNILFlBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCMEgsRUFBdkI7QUFDRCxHQUZJLE1BR0EsSUFBSUEsS0FBSyxDQUFULEVBQVk7QUFDZjNILFlBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCMEgsRUFBekI7QUFDRDtBQUNGOztBQUVELFNBQVNDLG9CQUFULENBQThCeEgsQ0FBOUIsRUFBaUNDLENBQWpDLEVBQW9DMkMsQ0FBcEMsRUFBdUNDLEVBQXZDLEVBQTJDQyxFQUEzQyxFQUErQ0MsRUFBL0MsRUFBbURDLEVBQW5ELEVBQXVELENBRXREOztrQkFFYztBQUNid0Usd0JBQXNCQSxvQkFEVDtBQUViSCwwQkFBd0JBO0FBRlgsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsIlxuaW1wb3J0IFN0YWdlIGZyb20gJy4vc3RhZ2UnO1xuaW1wb3J0IFRleHRPYmplY3QgZnJvbSAnLi90ZXh0X29iamVjdCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlcic7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0gW107XG4gIH1cblxuICBzdGFydHVwKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydHVwJyk7XG5cbiAgICBsZXQgbGFiZWwgPSBuZXcgVGV4dE9iamVjdCh7IHZhbHVlOiAnaGVsbG8nLCB4OiA1MCwgeTogMTAwIH0pO1xuXG4gICAgbGFiZWwub24oJ2hleScsIChldmVudCkgPT4ge1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGFnZS5hZGQobGFiZWwpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIGluaXRFbGVtZW50cygpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbS5hcHApO1xuXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSgpO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnN0YWdlLmVsKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5lbCk7XG5cbiAgICB0aGlzLnBhcGVyLm9uKCdzaGFwZScsIChwb2ludHMpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGFwZScsIHBvaW50cyk7XG4gICAgICB0aGlzLmNyZWF0ZVNoYXBlKHBvaW50cyk7XG4gICAgICB0aGlzLnRvZ2dsZVBhcGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSAncGFwZXInO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucGFwZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVNoYXBlKHBvaW50cykge1xuXG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdkJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnRvZ2dsZVBhcGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgICAgICB0aGlzLnBhcGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpO1xuICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuICBhcHAuaW5pdCgpO1xufSk7XG4iLCJcbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFyYW1zKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgdHlwZTogdHlwZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFdmVudERpc3BhdGNoZXIsIEV2ZW50IH07XG4iLCJcbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yID0gcjtcbiAgfVxuXG4gIGludGVyc2VjdHNMaW5lU2VnbWVudCh4MSwgeTEsIHgyLCB5Mikge1xuXG4gIH1cblxuICBjb250YWluc1BvaW50KHgsIHkpIHtcbiAgICBsZXQgZHggPSB4IC0gdGhpcy54O1xuICAgIGxldCBkeSA9IHkgLSB0aGlzLnk7XG4gICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIHJldHVybiBkIDwgdGhpcy5yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vZ2VvbS9jaXJjbGUnO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5hZGp1c3RDYW52YXMoKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpcyk7XG5cbiAgICB0aGlzLnNldFZpc2libGUocGFyYW1zLnZpc2libGUgIT09IHVuZGVmaW5lZCA/IHBhcmFtcy52aXNpYmxlIDogdHJ1ZSk7XG5cbiAgICAvLyB0aGlzLmNpcmNsZSA9IHsgeDogMCwgeTogMCwgcjogODAgfTtcbiAgICAvLyB0aGlzLmxpbmUgPSB7IHgxOiAxMCwgeTE6IDUwLCB4MjogMTAwLCB5MjogNTAgfTtcbiAgICAvL1xuICAgIC8vIHV0aWwuY2lyY2xlTGluZUludGVyc2VjdGlvbihcbiAgICAvLyAgIHRoaXMuY2lyY2xlLngsIHRoaXMuY2lyY2xlLnksIHRoaXMuY2lyY2xlLnIsXG4gICAgLy8gICB0aGlzLmxpbmUueDEsIHRoaXMubGluZS55MSwgdGhpcy5saW5lLngyLCB0aGlzLmxpbmUueTJcbiAgICAvLyApO1xuICB9XG5cbiAgYWRqdXN0Q2FudmFzKCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgc2V0VmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICBpZiAodGhpcy52aXNpYmxlKVxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBlbHNlXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclksIDI1LCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMubGluZS54MSwgdGhpcy5saW5lLnkxKTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMubGluZS54MiwgdGhpcy5saW5lLnkyKTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBsZXQgbGluZSA9IHsgeDE6IDEwMCwgeTE6IDYwLCB4MjogMTUwLCB5MjogMTIwIH07XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyhsaW5lLngxLCBsaW5lLnkxKTtcbiAgICBjdHgubGluZVRvKGxpbmUueDIsIGxpbmUueTIpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGxldCBsaW5lMiA9IHsgeDE6IDEwMCwgeTE6IDYwLCB4MjogdGhpcy5jdXJzb3JYLCB5MjogdGhpcy5jdXJzb3JZIH07XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8obGluZTIueDEsIGxpbmUyLnkxKTtcbiAgICBjdHgubGluZVRvKGxpbmUyLngyLCBsaW5lMi55Mik7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjbG9zZVNoYXBlKCkge1xuICAgIHRoaXMuZW1pdCgnc2hhcGUnLCB0aGlzLnBvaW50cyk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQuYnV0dG9uKTtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIHRoaXMucG9pbnRzLnB1c2goeyB4OiBldmVudC5vZmZzZXRYLCB5OiBldmVudC5vZmZzZXRZIH0pO1xuICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgLy8gZWxzZSBpZiAoZXZlbnQuYnV0dG9uID09IDIpIHtcbiAgICAvLyAgIHRoaXMuY2xvc2VTaGFwZSgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlU2hhcGUoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuY2xvc2VTaGFwZSgpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC5rZXkpO1xuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsIlxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgfVxuXG4gIGFkZChzdGFnZU9iamVjdCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChzdGFnZU9iamVjdCk7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChzdGFnZU9iamVjdC5lbCk7XG4gICAgc3RhZ2VPYmplY3QuYWRkZWRUb1N0YWdlKCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3J5ID0gZXZlbnQub2Zmc2V0WTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcblxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuXG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZTtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5cbmNsYXNzIFN0YWdlT2JqZWN0IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZS1vYmplY3QnKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHBhcmFtcy54IHx8IDAsIHBhcmFtcy55IHx8IDApO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5lbC5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcbiAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gICAgdGhpcy5lbWl0KCdoZXknLCBuZXcgRXZlbnQoJ2hleScsIHsgbnVtOiAxIH0pKTtcbiAgfVxuXG4gIGJlZ2luRHJhZygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICAgIHRoaXMuZHJhZyA9IHRydWU7XG4gIH1cblxuICBlbmREcmFnKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gICAgdGhpcy5kcmFnID0gZmFsc2U7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMuYmVnaW5EcmFnKCk7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICB0aGlzLmVuZERyYWcoKTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZHJhZykge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLnggKyBldmVudC5tb3ZlbWVudFgsIHRoaXMueSArIGV2ZW50Lm1vdmVtZW50WSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnbGVmdCcpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuZW5kRHJhZygpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdibHVyJykge1xuICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZU9iamVjdDtcbiIsImltcG9ydCBTdGFnZU9iamVjdCBmcm9tICcuL3N0YWdlX29iamVjdCc7XG5cbmNsYXNzIFRleHRPYmplY3QgZXh0ZW5kcyBTdGFnZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLnZhbHVlKTtcbiAgfVxuXG4gIHNldFNpemUodmFsdWUpIHtcbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLmVsLnN0eWxlLmZvbnRTaXplID0gdGhpcy5zaXplICsgJ3B4JztcbiAgfVxuXG4gIHNldFRleHQodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICAgIHN1cGVyLmFkZGVkVG9TdGFnZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRPYmplY3Q7XG4iLCJcbi8vIGNpcmNsZTogeyB4LCB5LCByIH1cbi8vIGxpbmU6IHsgeDEsIHkxLCB4MiwgeTIgfVxuXG5mdW5jdGlvbiBjaXJjbGVMaW5lSW50ZXJzZWN0aW9uKHgsIHksIHIsIHgxLCB5MSwgeDIsIHkyKSB7XG4gIC8vIHgxID0geDEgLSB4O1xuICAvLyB5MSA9ICh5MSAtIHkpICogLTE7XG4gIC8vIHgyID0geDIgLSB4O1xuICAvLyB5MiA9ICh5MiAtIHkpICogLTE7XG4gIHkxICo9IC0xO1xuICB5MiAqPSAtMTtcblxuICBsZXQgZHggPSB4MiAtIHgxO1xuICBsZXQgZHkgPSB5MiAtIHkxO1xuICBsZXQgZHIgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICBsZXQgZCA9IHgxICogeTIgLSB4MiAqIHkxO1xuICBsZXQgZGMgPSAociAqIHIpICogKGRyICogZHIpIC0gZCAqIGQ7XG5cbiAgY29uc29sZS5sb2coZHgsIGR5LCBkciwgZCk7XG5cbiAgaWYgKGRjIDwgMCkge1xuICAgIGNvbnNvbGUubG9nKCdubyBpbnRlcnNlY3QnLCBkYyk7XG4gIH1cbiAgZWxzZSBpZiAoZGMgPT0gMCkge1xuICAgIGNvbnNvbGUubG9nKCd0YW5nZW50JywgZGMpO1xuICB9XG4gIGVsc2UgaWYgKGRjID4gMCkge1xuICAgIGNvbnNvbGUubG9nKCdpbnRlcnNlY3QnLCBkYyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGluZUludGVyc2VjdHNDaXJjbGUoeCwgeSwgciwgeDEsIHkxLCB4MiwgeTIpIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmVJbnRlcnNlY3RzQ2lyY2xlOiBsaW5lSW50ZXJzZWN0c0NpcmNsZSxcbiAgY2lyY2xlTGluZUludGVyc2VjdGlvbjogY2lyY2xlTGluZUludGVyc2VjdGlvblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==