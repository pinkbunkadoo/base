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

      var path = [{ points: [] }];
      var shape = new _shape2.default({ paths: paths });

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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

  function Shape() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Shape);

    var _this = _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this, params));

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

      if (xmax == Number.NEGATIVE_INFINITY || xmin == Number.POSITIVE_INFINITY || ymax == Number.NEGATIVE_INFINITY || ymin == Number.POSITIVE_INFINITY) return null;

      return new _rectangle2.default(xmin, ymin, xmax - xmin, ymax - ymin);
    }
  }, {
    key: 'dom',
    value: function dom() {
      var el = _get(Shape.prototype.__proto__ || Object.getPrototypeOf(Shape.prototype), 'dom', this).call(this);

      var bounds = this.getBounds();

      if (bounds) {
        this.setPosition(bounds.x, bounds.y);

        el.style.width = bounds.width + 'px';
        el.style.height = bounds.height + 'px';

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

          var svgChildEl = _svg2.default.element('polygon', { points: ps, fill: 'transparent', stroke: 'black' });
          svgEl.appendChild(svgChildEl);
        }
        el.appendChild(svgEl);
      }

      this.el = el;
      return el;
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

    // this.el = this.dom();
    var _this = _possibleConstructorReturn(this, (StageObject.__proto__ || Object.getPrototypeOf(StageObject)).call(this));

    _this.setPosition(params.x || 0, params.y || 0);
    return _this;
  }

  _createClass(StageObject, [{
    key: 'dom',
    value: function dom() {
      var el = document.createElement('div');
      el.classList.add('stage-object');
      el.style.left = this.x + 'px';
      el.style.top = this.y + 'px';
      el.addEventListener('mousedown', this);
      return el;
    }
  }, {
    key: 'setPosition',
    value: function setPosition(x, y) {
      this.x = x;
      this.y = y;
      // this.el.style.left = this.x + 'px';
      // this.el.style.top = this.y + 'px';
    }
  }, {
    key: 'addedToStage',
    value: function addedToStage() {}
    // this.emit('hey', new Event('hey', { num: 1 }));


    // select() {
    //   this.el.classList.add('selected');
    // }
    //
    // deselect() {
    //   this.el.classList.remove('selected');
    // }
    //

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
      this.emit('mousedown', this);
      this.beginDrag();
      // console.log(event.target);
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      this.endDrag();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var el = event.target;
      if (this.drag) {
        this.setPosition(this.x + event.movementX, this.y + event.movementY);
        el.style.left = this.x + 'px';
        el.style.top = this.y + 'px';
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

    _this.cursor = document.createElement('div');
    _this.cursor.classList.add('paper-cursor');

    _this.el.appendChild(_this.cursor);
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
      this.cursor.style.left = this.cursorX + 'px';
      this.cursor.style.top = this.cursorY + 'px';
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
    this.selection = [];

    this.el.addEventListener('mousedown', this);
    this.el.addEventListener('mouseup', this);
    this.el.addEventListener('mousemove', this);
  }

  _createClass(Stage, [{
    key: 'add',
    value: function add(stageObject) {
      var _this = this;

      this.children.push(stageObject);
      this.el.appendChild(stageObject.dom());
      stageObject.addedToStage();
      stageObject.on('mousedown', function (obj) {
        if (_this.selection.includes(obj)) {
          _this.selection = _this.selection.filter(function (element) {
            return element !== obj;
          });
          obj.deselect();
        }
        // this.deselect();
        // this.selection = [ obj ];
        // obj.select();
      });
    }
  }, {
    key: 'deselect',
    value: function deselect() {
      if (this.selection.length) {
        for (var i = 0; i < this.selection.length; i++) {
          this.selection[i].deselect();
        }
        this.selection = [];
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      if (event.target == this.el) {
        this.deselect();
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {}
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorx = event.offsetX;
      this.cursory = event.offsetY;
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
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/sleeper/github/base/src/util.js'");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9zaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9zdGFnZV9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ2YWx1ZSIsIngiLCJ5Iiwib24iLCJldmVudCIsInBhdGgiLCJwb2ludHMiLCJzaGFwZSIsInBhdGhzIiwic3RhZ2UiLCJhZGQiLCJpbml0RWxlbWVudHMiLCJpbml0RXZlbnRMaXN0ZW5lcnMiLCJzdGFydHVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbCIsInBhcGVyIiwidmlzaWJsZSIsImNyZWF0ZVNoYXBlIiwiaGlkZVBhcGVyIiwibW9kZSIsInNldFZpc2libGUiLCJjbGVhciIsInNob3dQYXBlciIsImtleSIsInJlcGVhdCIsInRvZ2dsZVBhcGVyIiwiaGFuZGxlRXZlbnQiLCJ0eXBlIiwib25LZXlEb3duIiwiaW5pdCIsIlNoYXBlIiwicGFyYW1zIiwiaSIsImxlbmd0aCIsImoiLCJwIiwicHVzaCIsInhtYXgiLCJOdW1iZXIiLCJORUdBVElWRV9JTkZJTklUWSIsInhtaW4iLCJQT1NJVElWRV9JTkZJTklUWSIsInltYXgiLCJ5bWluIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwic2V0UG9zaXRpb24iLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3ZnRWwiLCJzdmciLCJzZXRBdHRyaWJ1dGUiLCJwcyIsInN2Z0NoaWxkRWwiLCJlbGVtZW50IiwiZmlsbCIsInN0cm9rZSIsIlN0YWdlT2JqZWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImxlZnQiLCJ0b3AiLCJkcmFnIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVtaXQiLCJiZWdpbkRyYWciLCJlbmREcmFnIiwidGFyZ2V0IiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlTW92ZSIsIm9uQmx1ciIsIlRleHQiLCJzZXRTaXplIiwic2l6ZSIsInNldFRleHQiLCJmb250U2l6ZSIsImlubmVySFRNTCIsIkV2ZW50IiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2lyY2xlIiwiciIsIngxIiwieTEiLCJ4MiIsInkyIiwiZHgiLCJkeSIsImQiLCJNYXRoIiwic3FydCIsIlBvaW50IiwicG9pbnQiLCJSZWN0YW5nbGUiLCJWZWN0b3IiLCJ2ZWN0b3IiLCJkb3QiLCJyYXRpbyIsIlBhcGVyIiwiY2FudmFzIiwiYWRqdXN0Q2FudmFzIiwidW5kZWZpbmVkIiwiY3Vyc29yIiwiZGlzcGxheSIsImFkZExpc3RlbmVycyIsInJlbW92ZUxpc3RlbmVycyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNvbG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xlYXJSZWN0IiwiZHJhd1BhdGgiLCJjdXJzb3JYIiwiY3Vyc29yWSIsInJlbmRlciIsImJ1dHRvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY2xvc2VQYXRoIiwicHJldmVudERlZmF1bHQiLCJvbkRibENsaWNrIiwib25Db250ZXh0TWVudSIsIlN0YWdlIiwiY2hpbGRyZW4iLCJzZWxlY3Rpb24iLCJzdGFnZU9iamVjdCIsImFkZGVkVG9TdGFnZSIsIm9iaiIsImluY2x1ZGVzIiwiZmlsdGVyIiwiZGVzZWxlY3QiLCJjdXJzb3J4IiwiY3Vyc29yeSIsIlN2ZyIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsRztBQUNKLGlCQUFjO0FBQUE7O0FBQ1osU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFDRDs7Ozs4QkFFUztBQUNSQyxjQUFRQyxHQUFSLENBQVksU0FBWjs7QUFFQSxVQUFJQyxRQUFRLG1CQUFTLEVBQUVDLE9BQU8sT0FBVCxFQUFrQkMsR0FBRyxFQUFyQixFQUF5QkMsR0FBRyxHQUE1QixFQUFULENBQVo7QUFDQUgsWUFBTUksRUFBTixDQUFTLEtBQVQsRUFBZ0IsVUFBQ0MsS0FB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IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJztcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9kaXNwbGF5L3RleHQnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXInO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IFtdO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgbGV0IGxhYmVsID0gbmV3IFRleHQoeyB2YWx1ZTogJ2hlbGxvJywgeDogNTAsIHk6IDEwMCB9KTtcbiAgICBsYWJlbC5vbignaGV5JywgKGV2ZW50KSA9PiB7fSk7XG5cbiAgICBsZXQgcGF0aCA9IFsgeyBwb2ludHM6IFsgXSB9IF07XG4gICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHsgcGF0aHM6IHBhdGhzIH0pO1xuXG4gICAgdGhpcy5zdGFnZS5hZGQobGFiZWwpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIGluaXRFbGVtZW50cygpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbS5hcHApO1xuXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSgpO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnN0YWdlLmVsKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5lbCk7XG5cbiAgICB0aGlzLnBhcGVyLm9uKCdwYXRocycsIChwYXRocykgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVTaGFwZShwYXRocyk7XG4gICAgICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1BhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMucGFwZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgIHRoaXMucGFwZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMubW9kZSA9ICdwYXBlcic7XG4gICAgfVxuICB9XG5cbiAgaGlkZVBhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5wYXBlci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5zaG93UGFwZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVNoYXBlKHBhdGhzKSB7XG4gICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHBhdGhzKTtcbiAgICB0aGlzLnN0YWdlLmFkZChzaGFwZSk7XG4gICAgLy8gcmV0dXJuIHNoYXBlLmRvbSgpO1xuICB9XG5cbiAgLy8gY3JlYXRlU2hhcGUocG9pbnRzKSB7XG4gIC8vICAgbGV0IHBzID0gJyc7XG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgIHBzICs9IHBvaW50c1tpXS54ICsgJyAnICsgcG9pbnRzW2ldLnkgKyAnICc7XG4gIC8vICAgfVxuICAvLyAgIHBzICs9ICdaJztcbiAgLy8gICByZXR1cm4gc3ZnLmVsZW1lbnQoJ3BvbHlnb24nLCB7IHBvaW50czogcHMgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY3JlYXRlU2hhcGVzKHNoYXBlcykge1xuICAvLyAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgLy8gfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ3AnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUGFwZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgICAgIHRoaXMucGFwZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJyk7XG4gIGxldCBhcHAgPSBuZXcgQXBwKCk7XG4gIGFwcC5pbml0KCk7XG59KTtcbiIsImltcG9ydCBzdmcgZnJvbSAnLi4vc3ZnJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFN0YWdlT2JqZWN0IGZyb20gJy4vc3RhZ2Vfb2JqZWN0JztcblxuY2xhc3MgU2hhcGUgZXh0ZW5kcyBTdGFnZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG5cbiAgICB0aGlzLnBhdGhzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGF0aCA9IHBhdGhzW2ldO1xuICAgICAgbGV0IHBvaW50cyA9IFtdO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXRoLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgcCA9IHBhdGgucG9pbnRzW2pdO1xuICAgICAgICBwb2ludHMucHVzaChuZXcgUG9pbnQocC54LCBwLnkpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGF0aHMucHVzaCh7IHBvaW50czogcG9pbnRzIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwYXRoID0gdGhpcy5wYXRoc1tpXTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGF0aC5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHAgPSBwYXRoLnBvaW50c1tqXTtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4bWF4ID09IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB8fFxuICAgICAgeG1pbiA9PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgfHxcbiAgICAgIHltYXggPT0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIHx8XG4gICAgICB5bWluID09IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSlcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICBsZXQgZWwgPSBzdXBlci5kb20oKTtcblxuICAgIGxldCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuXG4gICAgaWYgKGJvdW5kcykge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbihib3VuZHMueCwgYm91bmRzLnkpO1xuXG4gICAgICBlbC5zdHlsZS53aWR0aCA9IGJvdW5kcy53aWR0aCArICdweCc7XG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBib3VuZHMuaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgbGV0IHN2Z0VsID0gc3ZnLnN2ZygpO1xuICAgICAgc3ZnRWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGJvdW5kcy53aWR0aCk7XG4gICAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgc3ZnRWwuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgYm91bmRzLndpZHRoICsgJyAnICsgYm91bmRzLmhlaWdodCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcGF0aCA9IHRoaXMucGF0aHNbaV07XG4gICAgICAgIGxldCBwcyA9ICcnO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhdGgucG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IHAgPSBwYXRoLnBvaW50c1tqXTtcbiAgICAgICAgICBwcyArPSAocC54IC0gYm91bmRzLngpICsgJyAnICsgKHAueSAtIGJvdW5kcy55KSArICcgJztcbiAgICAgICAgfVxuICAgICAgICBwcyArPSAnWic7XG5cbiAgICAgICAgbGV0IHN2Z0NoaWxkRWwgPSBzdmcuZWxlbWVudCgncG9seWdvbicsIHsgcG9pbnRzOiBwcywgZmlsbDogJ3RyYW5zcGFyZW50Jywgc3Ryb2tlOiAnYmxhY2snIH0pO1xuICAgICAgICBzdmdFbC5hcHBlbmRDaGlsZChzdmdDaGlsZEVsKTtcbiAgICAgIH1cbiAgICAgIGVsLmFwcGVuZENoaWxkKHN2Z0VsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsID0gZWw7XG4gICAgcmV0dXJuIGVsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IHsgRXZlbnQsIEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmNsYXNzIFN0YWdlT2JqZWN0IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyB0aGlzLmVsID0gdGhpcy5kb20oKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHBhcmFtcy54IHx8IDAsIHBhcmFtcy55IHx8IDApO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3N0YWdlLW9iamVjdCcpO1xuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMueSArICdweCc7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgc2V0UG9zaXRpb24oeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICAvLyB0aGlzLmVsLnN0eWxlLmxlZnQgPSB0aGlzLnggKyAncHgnO1xuICAgIC8vIHRoaXMuZWwuc3R5bGUudG9wID0gdGhpcy55ICsgJ3B4JztcbiAgfVxuXG4gIGFkZGVkVG9TdGFnZSgpIHtcbiAgICAvLyB0aGlzLmVtaXQoJ2hleScsIG5ldyBFdmVudCgnaGV5JywgeyBudW06IDEgfSkpO1xuICB9XG5cbiAgLy8gc2VsZWN0KCkge1xuICAvLyAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgLy8gfVxuICAvL1xuICAvLyBkZXNlbGVjdCgpIHtcbiAgLy8gICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIC8vIH1cbiAgLy9cbiAgYmVnaW5EcmFnKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gICAgdGhpcy5kcmFnID0gdHJ1ZTtcbiAgfVxuXG4gIGVuZERyYWcoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzKTtcbiAgICB0aGlzLmRyYWcgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5lbWl0KCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB0aGlzLmJlZ2luRHJhZygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICB0aGlzLmVuZERyYWcoKTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IGVsID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0aGlzLmRyYWcpIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy54ICsgZXZlbnQubW92ZW1lbnRYLCB0aGlzLnkgKyBldmVudC5tb3ZlbWVudFkpO1xuICAgICAgZWwuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XG4gICAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuZW5kRHJhZygpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdibHVyJykge1xuICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZU9iamVjdDtcbiIsImltcG9ydCBTdGFnZU9iamVjdCBmcm9tICcuL3N0YWdlX29iamVjdCc7XG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBTdGFnZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLnZhbHVlKTtcbiAgfVxuXG4gIHNldFNpemUodmFsdWUpIHtcbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLmVsLnN0eWxlLmZvbnRTaXplID0gdGhpcy5zaXplICsgJ3B4JztcbiAgfVxuXG4gIHNldFRleHQodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJcbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFyYW1zKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgdHlwZTogdHlwZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFdmVudERpc3BhdGNoZXIsIEV2ZW50IH07XG4iLCJcbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yID0gcjtcbiAgfVxuXG4gIGludGVyc2VjdHNMaW5lU2VnbWVudCh4MSwgeTEsIHgyLCB5Mikge1xuXG4gIH1cblxuICBjb250YWluc1BvaW50KHgsIHkpIHtcbiAgICBsZXQgZHggPSB4IC0gdGhpcy54O1xuICAgIGxldCBkeSA9IHkgLSB0aGlzLnk7XG4gICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIHJldHVybiBkIDwgdGhpcy5yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcbiIsIlxuY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIHBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJcbmNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL2dlb20vdmVjdG9yJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9nZW9tL2NpcmNsZSc7XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5wYXRocyA9IFtdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5hZGp1c3RDYW52YXMoKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5zZXRWaXNpYmxlKHBhcmFtcy52aXNpYmxlICE9PSB1bmRlZmluZWQgPyBwYXJhbXMudmlzaWJsZSA6IHRydWUpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLCAnZGJsY2xpY2snLCAnY29udGV4dG1lbnUnIF07XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BhcGVyLWN1cnNvcicpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGp1c3RDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBkcmF3TGluZSh4MSwgeTEsIHgyLCB5MiwgY29sb3IpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdQYXRoKHBvaW50cywgY29sb3IpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGF0aCA9IHRoaXMucGF0aHNbaV07XG4gICAgICB0aGlzLmRyYXdQYXRoKHBhdGgucG9pbnRzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRyYXdQYXRoKHRoaXMucG9pbnRzLCAncmVkJyk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8vIGxldCBjdXJzb3IgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIC8vIGxldCByYWRpdXMgPSAxMDtcbiAgICAvLyBsZXQgbGluZSA9IHsgeDE6IDE1MCwgeTE6IDIwMCwgeDI6IDIwMCwgeTI6IDMwMCB9O1xuICAgIC8vXG4gICAgLy8gbGV0IHZlYzEgPSBuZXcgVmVjdG9yKGxpbmUueDIgLSBsaW5lLngxLCBsaW5lLnkyIC0gbGluZS55MSk7XG4gICAgLy8gbGV0IHZlYzIgPSBuZXcgVmVjdG9yKGN1cnNvci54IC0gbGluZS54MSwgY3Vyc29yLnkgLSBsaW5lLnkxKTtcbiAgICAvLyBsZXQgdmVjMyA9IHZlYzIucHJvamVjdCh2ZWMxKTtcbiAgICAvL1xuICAgIC8vIHRoaXMuZHJhd0xpbmUobGluZS54MSwgbGluZS55MSwgbGluZS54MiwgbGluZS55Mik7XG4gICAgLy8gdGhpcy5kcmF3TGluZShsaW5lLngxLCBsaW5lLnkxLCBjdXJzb3IueCwgY3Vyc29yLnkpO1xuICAgIC8vIGlmICh2ZWMzKSB7XG4gICAgLy8gICBsZXQgcCA9IG5ldyBQb2ludChsaW5lLngxICsgdmVjMy54LCBsaW5lLnkxICsgdmVjMy55KTtcbiAgICAvLyAgIGlmIChjdXJzb3IuZGlzdGFuY2UocCkgPCByYWRpdXMpIHtcbiAgICAvLyAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyZWVuJztcbiAgICAvLyAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vICAgICBjdHguYXJjKHAueCwgcC55LCAyLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIC8vICAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnBhdGhzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNsb3NlUGF0aCgpIHtcbiAgICB0aGlzLnBhdGhzLnB1c2goeyBwb2ludHM6IHRoaXMucG9pbnRzIH0pO1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICB0aGlzLnBvaW50cy5wdXNoKHsgeDogZXZlbnQub2Zmc2V0WCwgeTogZXZlbnQub2Zmc2V0WSB9KTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yWCArICdweCc7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3JZICsgJ3B4JztcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAnRXNjYXBlJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLmVtaXQoJ3BhdGhzJywgdGhpcy5wYXRocyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsIlxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gIH1cblxuICBhZGQoc3RhZ2VPYmplY3QpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goc3RhZ2VPYmplY3QpO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3RhZ2VPYmplY3QuZG9tKCkpO1xuICAgIHN0YWdlT2JqZWN0LmFkZGVkVG9TdGFnZSgpO1xuICAgIHN0YWdlT2JqZWN0Lm9uKCdtb3VzZWRvd24nLCAob2JqKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMob2JqKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IG9iaik7XG4gICAgICAgIG9iai5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5kZXNlbGVjdCgpO1xuICAgICAgLy8gdGhpcy5zZWxlY3Rpb24gPSBbIG9iaiBdO1xuICAgICAgLy8gb2JqLnNlbGVjdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gdGhpcy5lbCkge1xuICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvcnggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yeSA9IGV2ZW50Lm9mZnNldFk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==