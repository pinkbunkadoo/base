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

var _svg = __webpack_require__(/*! ./svg */ "./src/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _stage = __webpack_require__(/*! ./stage */ "./src/stage.js");

var _stage2 = _interopRequireDefault(_stage);

var _shape = __webpack_require__(/*! ./display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

var _text = __webpack_require__(/*! ./display/text */ "./src/display/text.js");

var _text2 = _interopRequireDefault(_text);

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

      var label = new _text2.default({ value: 'hello', x: 50, y: 100 });

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

      this.paper.on('paths', function (paths) {
        _this.createShape(paths);
        _this.hidePaper();
      });
    }
  }, {
    key: 'showPaper',
    value: function showPaper() {
      if (this.mode !== 'paper') {
        this.paper.setVisible(true);
        this.paper.clear();
        this.mode = 'paper';
      }
    }
  }, {
    key: 'hidePaper',
    value: function hidePaper() {
      if (this.mode == 'paper') {
        this.paper.setVisible(false);
        this.mode = null;
      }
    }
  }, {
    key: 'togglePaper',
    value: function togglePaper() {
      if (this.mode !== 'paper') {
        this.showPaper();
      } else {
        this.hidePaper();
      }
    }
  }, {
    key: 'createShape',
    value: function createShape(paths) {
      var shape = new _shape2.default(paths);
      this.stage.add(shape);
      // return shape.dom();
    }

    // createShape(points) {
    //   let ps = '';
    //   for (var i = 0; i < points.length; i++) {
    //     ps += points[i].x + ' ' + points[i].y + ' ';
    //   }
    //   ps += 'Z';
    //   return svg.element('polygon', { points: ps });
    // }
    //
    // createShapes(shapes) {
    //   // document.body.appendChild(div);
    // }

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key == 'p' && !event.repeat) {
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

/***/ "./src/display/shape.js":
/*!******************************!*\
  !*** ./src/display/shape.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _svg = __webpack_require__(/*! ../svg */ "./src/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _point = __webpack_require__(/*! ../geom/point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

var _rectangle = __webpack_require__(/*! ../geom/rectangle */ "./src/geom/rectangle.js");

var _rectangle2 = _interopRequireDefault(_rectangle);

var _stage_object = __webpack_require__(/*! ./stage_object */ "./src/display/stage_object.js");

var _stage_object2 = _interopRequireDefault(_stage_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = function (_StageObject) {
  _inherits(Shape, _StageObject);

  function Shape(paths) {
    _classCallCheck(this, Shape);

    var _this = _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this));

    _this.paths = [];

    for (var i = 0; i < paths.length; i++) {
      var path = paths[i];
      var points = [];
      for (var j = 0; j < path.points.length; j++) {
        var p = path.points[j];
        points.push(new _point2.default(p.x, p.y));
      }
      _this.paths.push({ points: points });
    }
    return _this;
  }

  _createClass(Shape, [{
    key: 'getBounds',
    value: function getBounds() {
      var xmax = Number.NEGATIVE_INFINITY;
      var xmin = Number.POSITIVE_INFINITY;
      var ymax = Number.NEGATIVE_INFINITY;
      var ymin = Number.POSITIVE_INFINITY;
      for (var i = 0; i < this.paths.length; i++) {
        var path = this.paths[i];
        for (var j = 0; j < path.points.length; j++) {
          var p = path.points[j];
          xmax = p.x > xmax ? p.x : xmax;
          xmin = p.x < xmin ? p.x : xmin;
          ymax = p.y > ymax ? p.y : ymax;
          ymin = p.y < ymin ? p.y : ymin;
        }
      }
      return new _rectangle2.default(xmin, ymin, xmax - xmin, ymax - ymin);
    }
  }, {
    key: 'createPolygonElement',
    value: function createPolygonElement(points) {}
  }, {
    key: 'dom',
    value: function dom() {
      var bounds = this.getBounds();

      // let div = document.createElement('div');
      // div.style.position = 'absolute';

      // this.el.style.left = bounds.x + 'px';
      // this.el.style.top = bounds.y + 'px';

      this.setPosition(bounds.x, bounds.y);

      this.el.style.width = bounds.width + 'px';
      this.el.style.height = bounds.height + 'px';

      var svgEl = _svg2.default.svg();
      svgEl.setAttribute('width', bounds.width);
      svgEl.setAttribute('height', bounds.height);
      svgEl.setAttribute('viewBox', '0 0 ' + bounds.width + ' ' + bounds.height);

      for (var i = 0; i < this.paths.length; i++) {
        var path = this.paths[i];
        var ps = '';
        for (var j = 0; j < path.points.length; j++) {
          var p = path.points[j];
          ps += p.x - bounds.x + ' ' + (p.y - bounds.y) + ' ';
        }
        ps += 'Z';
        var el = _svg2.default.element('polygon', { points: ps });

        svgEl.appendChild(el);
      }
      this.el.appendChild(svgEl);

      return this.el;
    }
  }]);

  return Shape;
}(_stage_object2.default);

exports.default = Shape;

/***/ }),

/***/ "./src/display/stage_object.js":
/*!*************************************!*\
  !*** ./src/display/stage_object.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! ../events */ "./src/events.js");

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
    key: 'dom',
    value: function dom() {
      return this.el;
    }
  }, {
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

/***/ "./src/display/text.js":
/*!*****************************!*\
  !*** ./src/display/text.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _stage_object = __webpack_require__(/*! ./stage_object */ "./src/display/stage_object.js");

var _stage_object2 = _interopRequireDefault(_stage_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_StageObject) {
  _inherits(Text, _StageObject);

  function Text() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, params));

    _this.setSize(params.size || 48);
    _this.setText(params.value);
    return _this;
  }

  _createClass(Text, [{
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
      _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'addedToStage', this).call(this);
    }
  }]);

  return Text;
}(_stage_object2.default);

exports.default = Text;

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

/***/ "./src/geom/point.js":
/*!***************************!*\
  !*** ./src/geom/point.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "distance",
    value: function distance(point) {
      var dx = this.x - point.x;
      var dy = this.y - point.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),

/***/ "./src/geom/rectangle.js":
/*!*******************************!*\
  !*** ./src/geom/rectangle.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function Rectangle(x, y, width, height) {
  _classCallCheck(this, Rectangle);

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

exports.default = Rectangle;

/***/ }),

/***/ "./src/geom/vector.js":
/*!****************************!*\
  !*** ./src/geom/vector.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "dot",
    value: function dot(vector) {
      return this.x * vector.x + this.y * vector.y;
    }
  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "project",
    value: function project(vector) {
      var d = vector.dot(vector);
      if (d > 0) {
        var ratio = this.dot(vector) / d;
        // return new Vector(vector.x * ratio, vector.y * ratio);
        if (ratio >= 0 && ratio <= 1) {
          return new Vector(vector.x * ratio, vector.y * ratio);
        }
      }
      return null;
    }
  }]);

  return Vector;
}();

exports.default = Vector;

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

var _point = __webpack_require__(/*! ./geom/point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

var _vector = __webpack_require__(/*! ./geom/vector */ "./src/geom/vector.js");

var _vector2 = _interopRequireDefault(_vector);

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
    _this.paths = [];

    _this.el = document.createElement('div');
    _this.el.classList.add('paper');

    _this.canvas = document.createElement('canvas');
    _this.adjustCanvas();

    _this.el.appendChild(_this.canvas);

    _this.setVisible(params.visible !== undefined ? params.visible : true);

    _this.listeners = ['mousedown', 'mousemove', 'mouseup', 'dblclick', 'contextmenu'];
    return _this;
  }

  _createClass(Paper, [{
    key: 'addListeners',
    value: function addListeners() {
      for (var i = 0; i < this.listeners.length; i++) {
        window.addEventListener(this.listeners[i], this);
      }
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      for (var i = 0; i < this.listeners.length; i++) {
        window.removeEventListener(this.listeners[i], this);
      }
    }
  }, {
    key: 'setVisible',
    value: function setVisible(visible) {
      if (this.visible !== visible) {
        this.visible = visible;
        if (this.visible) {
          this.el.style.display = 'block';
          this.addListeners();
        } else {
          this.el.style.display = 'none';
          this.removeListeners();
        }
      }
    }
  }, {
    key: 'adjustCanvas',
    value: function adjustCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }, {
    key: 'drawLine',
    value: function drawLine(x1, y1, x2, y2, color) {
      var ctx = this.canvas.getContext('2d');
      ctx.strokeStyle = color || 'black';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }, {
    key: 'drawPath',
    value: function drawPath(points, color) {
      var ctx = this.canvas.getContext('2d');
      ctx.strokeStyle = color || 'black';
      ctx.beginPath();
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        if (i == 0) ctx.moveTo(p.x, p.y);else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.paths.length; i++) {
        var path = this.paths[i];
        this.drawPath(path.points);
      }

      if (this.points.length) {
        this.drawPath(this.points, 'red');

        ctx.strokeStyle = 'blue';
        ctx.beginPath();
        var p = this.points[this.points.length - 1];
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(this.cursorX, this.cursorY);
        ctx.stroke();
      }

      // let cursor = new Point(this.cursorX, this.cursorY);
      // let radius = 10;
      // let line = { x1: 150, y1: 200, x2: 200, y2: 300 };
      //
      // let vec1 = new Vector(line.x2 - line.x1, line.y2 - line.y1);
      // let vec2 = new Vector(cursor.x - line.x1, cursor.y - line.y1);
      // let vec3 = vec2.project(vec1);
      //
      // this.drawLine(line.x1, line.y1, line.x2, line.y2);
      // this.drawLine(line.x1, line.y1, cursor.x, cursor.y);
      // if (vec3) {
      //   let p = new Point(line.x1 + vec3.x, line.y1 + vec3.y);
      //   if (cursor.distance(p) < radius) {
      //     ctx.strokeStyle = 'green';
      //     ctx.beginPath();
      //     ctx.arc(p.x, p.y, 2, 0, Math.PI * 2, false);
      //     ctx.stroke();
      //   }
      // }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.points = [];
      this.paths = [];
      this.render();
    }
  }, {
    key: 'closePath',
    value: function closePath() {
      this.paths.push({ points: this.points });
      this.points = [];
      this.render();
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      if (event.button == 0) {
        this.points.push({ x: event.offsetX, y: event.offsetY });
      }
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
      this.closePath();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key == 'Escape' && !event.repeat) {
        this.emit('paths', this.paths);
      } else if (event.key == 'Enter' && !event.repeat) {
        this.closePath();
      }
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
      this.el.appendChild(stageObject.dom());
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

/***/ "./src/svg.js":
/*!********************!*\
  !*** ./src/svg.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Svg = function () {
  function Svg() {
    _classCallCheck(this, Svg);
  }

  _createClass(Svg, null, [{
    key: 'element',
    value: function element(type, attributes) {
      var el = document.createElementNS('http://www.w3.org/2000/svg', type);
      for (var name in attributes) {
        el.setAttribute(name, attributes[name]);
      }
      return el;
    }
  }, {
    key: 'svg',
    value: function svg(attributes) {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
      for (var name in attributes) {
        svg.setAttribute(name, attributes[name]);
      }
      return svg;
    }
  }]);

  return Svg;
}();

exports.default = Svg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9zaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9zdGFnZV9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ2YWx1ZSIsIngiLCJ5Iiwib24iLCJldmVudCIsInN0YWdlIiwiYWRkIiwiaW5pdEVsZW1lbnRzIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwic3RhcnR1cCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZWwiLCJwYXBlciIsInZpc2libGUiLCJwYXRocyIsImNyZWF0ZVNoYXBlIiwiaGlkZVBhcGVyIiwibW9kZSIsInNldFZpc2libGUiLCJjbGVhciIsInNob3dQYXBlciIsInNoYXBlIiwia2V5IiwicmVwZWF0IiwidG9nZ2xlUGFwZXIiLCJoYW5kbGVFdmVudCIsInR5cGUiLCJvbktleURvd24iLCJpbml0IiwiU2hhcGUiLCJpIiwibGVuZ3RoIiwicGF0aCIsInBvaW50cyIsImoiLCJwIiwicHVzaCIsInhtYXgiLCJOdW1iZXIiLCJORUdBVElWRV9JTkZJTklUWSIsInhtaW4iLCJQT1NJVElWRV9JTkZJTklUWSIsInltYXgiLCJ5bWluIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwic2V0UG9zaXRpb24iLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnRWwiLCJzdmciLCJzZXRBdHRyaWJ1dGUiLCJwcyIsImVsZW1lbnQiLCJTdGFnZU9iamVjdCIsInBhcmFtcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJsZWZ0IiwidG9wIiwiZW1pdCIsIm51bSIsImRyYWciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmVnaW5EcmFnIiwiZW5kRHJhZyIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25Nb3VzZU1vdmUiLCJvbkJsdXIiLCJUZXh0Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRUZXh0IiwiZm9udFNpemUiLCJpbm5lckhUTUwiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUmVjdGFuZ2xlIiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJQYXBlciIsImNhbnZhcyIsImFkanVzdENhbnZhcyIsInVuZGVmaW5lZCIsImRpc3BsYXkiLCJhZGRMaXN0ZW5lcnMiLCJyZW1vdmVMaXN0ZW5lcnMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjb2xvciIsImN0eCIsImdldENvbnRleHQiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImNsZWFyUmVjdCIsImRyYXdQYXRoIiwiY3Vyc29yWCIsImN1cnNvclkiLCJyZW5kZXIiLCJidXR0b24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNsb3NlUGF0aCIsInByZXZlbnREZWZhdWx0Iiwib25EYmxDbGljayIsIm9uQ29udGV4dE1lbnUiLCJTdGFnZSIsImNoaWxkcmVuIiwic3RhZ2VPYmplY3QiLCJhZGRlZFRvU3RhZ2UiLCJjdXJzb3J4IiwiY3Vyc29yeSIsIlN2ZyIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lIiwiY2lyY2xlTGluZUludGVyc2VjdGlvbiIsImRyIiwiZGMiLCJsaW5lSW50ZXJzZWN0c0NpcmNsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRU1BLEc7QUFDSixpQkFBYztBQUFBOztBQUNaLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBQ0Q7Ozs7OEJBRVM7QUFDUkMsY0FBUUMsR0FBUixDQUFZLFNBQVo7O0FBRUEsVUFBSUMsUUFBUSxtQkFBUyxFQUFFQyxPQUFPLE9BQVQsRUFBa0JDLEdBQUcsRUFBckIsRUFBeUJDLEdBQUcsR0FBNUIsRUFBVCxDQUFaOztBQUVBSCxZQUFNSSxFQUFOLENBQVMsS0FBVCxFQUFnQixVQUFD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Qm1ELEVBQXBCLEVBQXdCbEQsQ0FBeEI7O0FBRUEsTUFBSW1ELEtBQUssQ0FBVCxFQUFZO0FBQ1YzSixZQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QjBKLEVBQTVCO0FBQ0QsR0FGRCxNQUdLLElBQUlBLE1BQU0sQ0FBVixFQUFhO0FBQ2hCM0osWUFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUIwSixFQUF2QjtBQUNELEdBRkksTUFHQSxJQUFJQSxLQUFLLENBQVQsRUFBWTtBQUNmM0osWUFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUIwSixFQUF6QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0Msb0JBQVQsQ0FBOEJ4SixDQUE5QixFQUFpQ0MsQ0FBakMsRUFBb0M0RixDQUFwQyxFQUF1Q0MsRUFBdkMsRUFBMkNDLEVBQTNDLEVBQStDQyxFQUEvQyxFQUFtREMsRUFBbkQsRUFBdUQsQ0FFdEQ7O2tCQUVjO0FBQ2J1RCx3QkFBc0JBLG9CQURUO0FBRWJILDBCQUF3QkE7QUFGWCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBUZXh0IGZyb20gJy4vZGlzcGxheS90ZXh0JztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyJztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSBbXTtcbiAgfVxuXG4gIHN0YXJ0dXAoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0dXAnKTtcblxuICAgIGxldCBsYWJlbCA9IG5ldyBUZXh0KHsgdmFsdWU6ICdoZWxsbycsIHg6IDUwLCB5OiAxMDAgfSk7XG5cbiAgICBsYWJlbC5vbignaGV5JywgKGV2ZW50KSA9PiB7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YWdlLmFkZChsYWJlbCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnN0YXJ0dXAoKTtcbiAgfVxuXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMpO1xuICB9XG5cbiAgaW5pdEVsZW1lbnRzKCkge1xuICAgIHRoaXMuZG9tLmFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZG9tLmFwcCk7XG5cbiAgICB0aGlzLnN0YWdlID0gbmV3IFN0YWdlKCk7XG4gICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMuc3RhZ2UuZWwpO1xuXG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcih7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnBhcGVyLmVsKTtcblxuICAgIHRoaXMucGFwZXIub24oJ3BhdGhzJywgKHBhdGhzKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZVNoYXBlKHBhdGhzKTtcbiAgICAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93UGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5wYXBlci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gJ3BhcGVyJztcbiAgICB9XG4gIH1cblxuICBoaWRlUGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnNob3dQYXBlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlU2hhcGUocGF0aHMpIHtcbiAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUocGF0aHMpO1xuICAgIHRoaXMuc3RhZ2UuYWRkKHNoYXBlKTtcbiAgICAvLyByZXR1cm4gc2hhcGUuZG9tKCk7XG4gIH1cblxuICAvLyBjcmVhdGVTaGFwZShwb2ludHMpIHtcbiAgLy8gICBsZXQgcHMgPSAnJztcbiAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgcHMgKz0gcG9pbnRzW2ldLnggKyAnICcgKyBwb2ludHNbaV0ueSArICcgJztcbiAgLy8gICB9XG4gIC8vICAgcHMgKz0gJ1onO1xuICAvLyAgIHJldHVybiBzdmcuZWxlbWVudCgncG9seWdvbicsIHsgcG9pbnRzOiBwcyB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVTaGFwZXMoc2hhcGVzKSB7XG4gIC8vICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAvLyB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy50b2dnbGVQYXBlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgICAgdGhpcy5wYXBlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuLi9zdmcnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgU3RhZ2VPYmplY3QgZnJvbSAnLi9zdGFnZV9vYmplY3QnO1xuXG5jbGFzcyBTaGFwZSBleHRlbmRzIFN0YWdlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocGF0aHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGF0aHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwYXRoID0gcGF0aHNbaV07XG4gICAgICBsZXQgcG9pbnRzID0gW107XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhdGgucG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBwID0gcGF0aC5wb2ludHNbal07XG4gICAgICAgIHBvaW50cy5wdXNoKG5ldyBQb2ludChwLngsIHAueSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXRocy5wdXNoKHsgcG9pbnRzOiBwb2ludHMgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCB4bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBhdGggPSB0aGlzLnBhdGhzW2ldO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXRoLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgcCA9IHBhdGgucG9pbnRzW2pdO1xuICAgICAgICB4bWF4ID0gcC54ID4geG1heCA/IHAueCA6IHhtYXg7XG4gICAgICAgIHhtaW4gPSBwLnggPCB4bWluID8gcC54IDogeG1pbjtcbiAgICAgICAgeW1heCA9IHAueSA+IHltYXggPyBwLnkgOiB5bWF4O1xuICAgICAgICB5bWluID0gcC55IDwgeW1pbiA/IHAueSA6IHltaW47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gIH1cblxuICBjcmVhdGVQb2x5Z29uRWxlbWVudChwb2ludHMpIHtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICBsZXQgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblxuICAgIC8vIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gICAgLy8gdGhpcy5lbC5zdHlsZS5sZWZ0ID0gYm91bmRzLnggKyAncHgnO1xuICAgIC8vIHRoaXMuZWwuc3R5bGUudG9wID0gYm91bmRzLnkgKyAncHgnO1xuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihib3VuZHMueCwgYm91bmRzLnkpO1xuXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IGJvdW5kcy53aWR0aCArICdweCc7XG4gICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBib3VuZHMuaGVpZ2h0ICsgJ3B4JztcblxuICAgIGxldCBzdmdFbCA9IHN2Zy5zdmcoKTtcbiAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYm91bmRzLndpZHRoKTtcbiAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGJvdW5kcy5oZWlnaHQpO1xuICAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIGJvdW5kcy53aWR0aCArICcgJyArIGJvdW5kcy5oZWlnaHQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGF0aCA9IHRoaXMucGF0aHNbaV07XG4gICAgICBsZXQgcHMgPSAnJztcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGF0aC5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHAgPSBwYXRoLnBvaW50c1tqXTtcbiAgICAgICAgcHMgKz0gKHAueCAtIGJvdW5kcy54KSArICcgJyArIChwLnkgLSBib3VuZHMueSkgKyAnICc7XG4gICAgICB9XG4gICAgICBwcyArPSAnWic7XG4gICAgICBsZXQgZWwgPSBzdmcuZWxlbWVudCgncG9seWdvbicsIHsgcG9pbnRzOiBwcyB9KTtcblxuICAgICAgc3ZnRWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHN2Z0VsKTtcblxuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IHsgRXZlbnQsIEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmNsYXNzIFN0YWdlT2JqZWN0IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZS1vYmplY3QnKTtcbiAgICBcbiAgICB0aGlzLnNldFBvc2l0aW9uKHBhcmFtcy54IHx8IDAsIHBhcmFtcy55IHx8IDApO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5lbC5zdHlsZS5sZWZ0ID0gdGhpcy54ICsgJ3B4JztcbiAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gICAgdGhpcy5lbWl0KCdoZXknLCBuZXcgRXZlbnQoJ2hleScsIHsgbnVtOiAxIH0pKTtcbiAgfVxuXG4gIGJlZ2luRHJhZygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICAgIHRoaXMuZHJhZyA9IHRydWU7XG4gIH1cblxuICBlbmREcmFnKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gICAgdGhpcy5kcmFnID0gZmFsc2U7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMuYmVnaW5EcmFnKCk7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICB0aGlzLmVuZERyYWcoKTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZHJhZykge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLnggKyBldmVudC5tb3ZlbWVudFgsIHRoaXMueSArIGV2ZW50Lm1vdmVtZW50WSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnbGVmdCcpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuZW5kRHJhZygpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdibHVyJykge1xuICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZU9iamVjdDtcbiIsImltcG9ydCBTdGFnZU9iamVjdCBmcm9tICcuL3N0YWdlX29iamVjdCc7XG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBTdGFnZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLnZhbHVlKTtcbiAgfVxuXG4gIHNldFNpemUodmFsdWUpIHtcbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLmVsLnN0eWxlLmZvbnRTaXplID0gdGhpcy5zaXplICsgJ3B4JztcbiAgfVxuXG4gIHNldFRleHQodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICAgIHN1cGVyLmFkZGVkVG9TdGFnZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJcbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFyYW1zKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgdHlwZTogdHlwZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFdmVudERpc3BhdGNoZXIsIEV2ZW50IH07XG4iLCJcbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yID0gcjtcbiAgfVxuXG4gIGludGVyc2VjdHNMaW5lU2VnbWVudCh4MSwgeTEsIHgyLCB5Mikge1xuXG4gIH1cblxuICBjb250YWluc1BvaW50KHgsIHkpIHtcbiAgICBsZXQgZHggPSB4IC0gdGhpcy54O1xuICAgIGxldCBkeSA9IHkgLSB0aGlzLnk7XG4gICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIHJldHVybiBkIDwgdGhpcy5yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcbiIsIlxuY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIHBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJcbmNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL2dlb20vdmVjdG9yJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9nZW9tL2NpcmNsZSc7XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5wYXRocyA9IFtdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5hZGp1c3RDYW52YXMoKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5zZXRWaXNpYmxlKHBhcmFtcy52aXNpYmxlICE9PSB1bmRlZmluZWQgPyBwYXJhbXMudmlzaWJsZSA6IHRydWUpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLCAnZGJsY2xpY2snLCAnY29udGV4dG1lbnUnIF07XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGp1c3RDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBkcmF3TGluZSh4MSwgeTEsIHgyLCB5MiwgY29sb3IpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdQYXRoKHBvaW50cywgY29sb3IpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGF0aCA9IHRoaXMucGF0aHNbaV07XG4gICAgICB0aGlzLmRyYXdQYXRoKHBhdGgucG9pbnRzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRyYXdQYXRoKHRoaXMucG9pbnRzLCAncmVkJyk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8vIGxldCBjdXJzb3IgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIC8vIGxldCByYWRpdXMgPSAxMDtcbiAgICAvLyBsZXQgbGluZSA9IHsgeDE6IDE1MCwgeTE6IDIwMCwgeDI6IDIwMCwgeTI6IDMwMCB9O1xuICAgIC8vXG4gICAgLy8gbGV0IHZlYzEgPSBuZXcgVmVjdG9yKGxpbmUueDIgLSBsaW5lLngxLCBsaW5lLnkyIC0gbGluZS55MSk7XG4gICAgLy8gbGV0IHZlYzIgPSBuZXcgVmVjdG9yKGN1cnNvci54IC0gbGluZS54MSwgY3Vyc29yLnkgLSBsaW5lLnkxKTtcbiAgICAvLyBsZXQgdmVjMyA9IHZlYzIucHJvamVjdCh2ZWMxKTtcbiAgICAvL1xuICAgIC8vIHRoaXMuZHJhd0xpbmUobGluZS54MSwgbGluZS55MSwgbGluZS54MiwgbGluZS55Mik7XG4gICAgLy8gdGhpcy5kcmF3TGluZShsaW5lLngxLCBsaW5lLnkxLCBjdXJzb3IueCwgY3Vyc29yLnkpO1xuICAgIC8vIGlmICh2ZWMzKSB7XG4gICAgLy8gICBsZXQgcCA9IG5ldyBQb2ludChsaW5lLngxICsgdmVjMy54LCBsaW5lLnkxICsgdmVjMy55KTtcbiAgICAvLyAgIGlmIChjdXJzb3IuZGlzdGFuY2UocCkgPCByYWRpdXMpIHtcbiAgICAvLyAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyZWVuJztcbiAgICAvLyAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vICAgICBjdHguYXJjKHAueCwgcC55LCAyLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIC8vICAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnBhdGhzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNsb3NlUGF0aCgpIHtcbiAgICB0aGlzLnBhdGhzLnB1c2goeyBwb2ludHM6IHRoaXMucG9pbnRzIH0pO1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICB0aGlzLnBvaW50cy5wdXNoKHsgeDogZXZlbnQub2Zmc2V0WCwgeTogZXZlbnQub2Zmc2V0WSB9KTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5lbWl0KCdwYXRocycsIHRoaXMucGF0aHMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2NvbnRleHRtZW51Jykge1xuICAgICAgdGhpcy5vbkNvbnRleHRNZW51KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFwZXI7XG4iLCJcbmNsYXNzIFN0YWdlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2UnKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gIH1cblxuICBhZGQoc3RhZ2VPYmplY3QpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goc3RhZ2VPYmplY3QpO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3RhZ2VPYmplY3QuZG9tKCkpO1xuICAgIHN0YWdlT2JqZWN0LmFkZGVkVG9TdGFnZSgpO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvcnggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yeSA9IGV2ZW50Lm9mZnNldFk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG5cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcblxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJcbmNsYXNzIFN2ZyB7XG4gIHN0YXRpYyBlbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdHlwZSk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHN0YXRpYyBzdmcoYXR0cmlidXRlcykge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJywnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG4iLCJcbi8vIGNpcmNsZTogeyB4LCB5LCByIH1cbi8vIGxpbmU6IHsgeDEsIHkxLCB4MiwgeTIgfVxuXG5mdW5jdGlvbiBjaXJjbGVMaW5lSW50ZXJzZWN0aW9uKHgsIHksIHIsIHgxLCB5MSwgeDIsIHkyKSB7XG4gIC8vIHgxID0geDEgLSB4O1xuICAvLyB5MSA9ICh5MSAtIHkpICogLTE7XG4gIC8vIHgyID0geDIgLSB4O1xuICAvLyB5MiA9ICh5MiAtIHkpICogLTE7XG4gIHkxICo9IC0xO1xuICB5MiAqPSAtMTtcblxuICBsZXQgZHggPSB4MiAtIHgxO1xuICBsZXQgZHkgPSB5MiAtIHkxO1xuICBsZXQgZHIgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICBsZXQgZCA9IHgxICogeTIgLSB4MiAqIHkxO1xuICBsZXQgZGMgPSAociAqIHIpICogKGRyICogZHIpIC0gZCAqIGQ7XG5cbiAgY29uc29sZS5sb2coZHgsIGR5LCBkciwgZCk7XG5cbiAgaWYgKGRjIDwgMCkge1xuICAgIGNvbnNvbGUubG9nKCdubyBpbnRlcnNlY3QnLCBkYyk7XG4gIH1cbiAgZWxzZSBpZiAoZGMgPT0gMCkge1xuICAgIGNvbnNvbGUubG9nKCd0YW5nZW50JywgZGMpO1xuICB9XG4gIGVsc2UgaWYgKGRjID4gMCkge1xuICAgIGNvbnNvbGUubG9nKCdpbnRlcnNlY3QnLCBkYyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGluZUludGVyc2VjdHNDaXJjbGUoeCwgeSwgciwgeDEsIHkxLCB4MiwgeTIpIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmVJbnRlcnNlY3RzQ2lyY2xlOiBsaW5lSW50ZXJzZWN0c0NpcmNsZSxcbiAgY2lyY2xlTGluZUludGVyc2VjdGlvbjogY2lyY2xlTGluZUludGVyc2VjdGlvblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==