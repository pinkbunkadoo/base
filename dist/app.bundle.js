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
// import Graphic from './display/graphic';


var _svg = __webpack_require__(/*! ./svg */ "./src/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _stage = __webpack_require__(/*! ./stage */ "./src/stage.js");

var _stage2 = _interopRequireDefault(_stage);

var _paper = __webpack_require__(/*! ./paper */ "./src/paper.js");

var _paper2 = _interopRequireDefault(_paper);

var _shape = __webpack_require__(/*! ./display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

var _text = __webpack_require__(/*! ./display/text */ "./src/display/text.js");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.dom = [];
  }

  _createClass(App, [{
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
      window.addEventListener('mousedown', this);
    }
  }, {
    key: 'initElements',
    value: function initElements() {
      this.dom.app = document.getElementById('app');

      this.stage = new _stage2.default({ width: 480, height: 480 });
      this.dom.app.appendChild(this.stage.dom());

      this.paper = new _paper2.default({ visible: false });
      this.dom.app.appendChild(this.paper.dom());

      // this.paper.on('paths', (paths) => {
      //   this.createShape(paths);
      //   this.hidePaper();
      // });
    }
  }, {
    key: 'startup',
    value: function startup() {
      console.log('startup');

      // let label = new Text({ title: 'hello' });
      // label.x = 250;
      // label.y = 100;
      // this.stage.add(label);

      var shape = new _shape2.default({
        points: [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 40, y: 40 }, { x: 20, y: 10 }],
        fill: '#cccccc',
        stroke: 'black',
        closed: true
      });
      shape.x = 60;
      shape.y = 80;
      this.stage.add(shape);

      shape = new _shape2.default({
        points: [{ x: 0, y: 0 }, { x: 60, y: 20 }, { x: 100, y: 20 }, { x: 100, y: 70 }],
        fill: '#cccccc',
        stroke: null,
        closed: true
      });
      shape.x = 150;
      shape.y = 100;
      this.stage.add(shape);
    }
  }, {
    key: 'grabPaperShapes',
    value: function grabPaperShapes() {
      var stageEl = this.stage.dom();
      var shapes = this.paper.getShapes();
      for (var i = 0; i < shapes.length; i++) {
        var shape = shapes[i];
        shape.x -= stageEl.offsetLeft;
        shape.y -= stageEl.offsetTop;
        this.stage.add(shape);
      }
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
        this.grabPaperShapes();
        this.paper.setVisible(false);
        this.paper.clear();
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
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key == 'p' && !event.repeat) {
        this.togglePaper();
      } else {
        if (this.mode == 'paper') {
          this.paper.handleEvent(event);
        } else {
          this.stage.handleEvent(event);
        }
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      // let x = event.offsetX;
      // let y = event.offsetY;
      // console.log(x, y);
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'keydown') {
        this.onKeyDown(event);
      } else if (event.type == 'mousedown') {
        this.onMouseDown(event);
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

/***/ "./src/display/group.js":
/*!******************************!*\
  !*** ./src/display/group.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transform = __webpack_require__(/*! ./transform */ "./src/display/transform.js");

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_Transform) {
  _inherits(Group, _Transform);

  function Group() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));

    _this.children = [];
    return _this;
  }

  _createClass(Group, [{
    key: 'add',
    value: function add(child) {
      this.children.push(child);
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var rects = [];

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        var bounds = child.getBounds();
        rects.push(bounds);
      }

      if (rects.length) {
        var xmin = Number.POSITIVE_INFINITY;
        var ymin = Number.POSITIVE_INFINITY;
        var xmax = Number.NEGATIVE_INFINITY;
        var ymax = Number.NEGATIVE_INFINITY;

        for (var i = 0; i < rects.length; i++) {
          var rect = rects[i];
          xmin = rect.x < xmin ? rect.x : xmin;
          ymin = rect.y < ymin ? rect.y : ymin;
          xmax = rect.x + rect.width > xmax ? rect.x + rect.width : xmax;
          ymax = rect.y + rect.height > ymax ? rect.y + rect.height : ymax;
        }
        return new Rectangle(xmin + this.x, ymin + this.y, xmax - xmin, ymax - ymin);
      }

      return null;
    }
  }]);

  return Group;
}(_transform2.default);

exports.default = Group;

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

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

var _util2 = _interopRequireDefault(_util);

var _point = __webpack_require__(/*! ../geom/point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

var _point_list = __webpack_require__(/*! ../geom/point_list */ "./src/geom/point_list.js");

var _point_list2 = _interopRequireDefault(_point_list);

var _rectangle = __webpack_require__(/*! ../geom/rectangle */ "./src/geom/rectangle.js");

var _rectangle2 = _interopRequireDefault(_rectangle);

var _transform = __webpack_require__(/*! ./transform */ "./src/display/transform.js");

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = function (_Transform) {
  _inherits(Shape, _Transform);

  function Shape() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Shape);

    var _this = _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this));

    _this.fill = params.fill || null;
    _this.stroke = params.stroke || null;
    _this.strokeWidth = params.strokeWidth || 1;
    _this.closed = params.closed || false;

    _this.pointList = new _point_list2.default(params.points);
    // let bounds = this.pointList.getBounds();
    // this.x = bounds.x + bounds.width / 2;
    // this.y = bounds.y + bounds.height / 2;
    //
    // let points = this.pointList.points;
    //
    // for (var i = 0; i < points.length; i++) {
    //   let p = points[i];
    //   p.x -= this.x;
    //   p.y -= this.y;
    // }
    return _this;
  }

  _createClass(Shape, [{
    key: 'getPoints',
    value: function getPoints() {
      return this.pointList.points;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      return this.pointList.getBounds();
    }
  }, {
    key: 'intersectsRectangle',
    value: function intersectsRectangle(xmin, ymin, xmax, ymax) {
      if (xmin > xmax) {
        ;
        var _ref = [xmax, xmin];
        xmin = _ref[0];
        xmax = _ref[1];
      }if (ymin > ymax) {
        ;
        var _ref2 = [ymax, ymin];
        ymin = _ref2[0];
        ymax = _ref2[1];
      }var points = this.pointList.points;
      for (var i = 1; i < points.length; i++) {
        var p0 = points[i - 1];
        var p1 = points[i];
        if (_util2.default.lineIntersectsRectangle(p0.x, p0.y, p1.x, p1.y, xmin - this.x, ymin - this.y, xmax - this.x, ymax - this.y)) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      var points = this.pointList.points;
      if (this.fill) {
        return _util2.default.pointInPolygon(points, x - this.x, y - this.y);
      } else {}
    }
  }]);

  return Shape;
}(_transform2.default);

exports.default = Shape;

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

var _transform = __webpack_require__(/*! ./transform */ "./src/display/transform.js");

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Transform) {
  _inherits(Text, _Transform);

  function Text() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

    _this.setSize(params.size || 48);
    _this.setText(params.content);
    return _this;
  }

  _createClass(Text, [{
    key: 'setSize',
    value: function setSize(value) {
      this.size = value;
    }
  }, {
    key: 'setText',
    value: function setText(value) {
      this.content = value;
    }
  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      return false;
    }
  }]);

  return Text;
}(_transform2.default);

exports.default = Text;

/***/ }),

/***/ "./src/display/transform.js":
/*!**********************************!*\
  !*** ./src/display/transform.js ***!
  \**********************************/
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

var Transform = function (_EventDispatcher) {
  _inherits(Transform, _EventDispatcher);

  function Transform() {
    _classCallCheck(this, Transform);

    var _this = _possibleConstructorReturn(this, (Transform.__proto__ || Object.getPrototypeOf(Transform)).call(this));

    _this.x = 0;
    _this.y = 0;
    return _this;
  }

  _createClass(Transform, [{
    key: 'addedToStage',
    value: function addedToStage() {}
  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      return false;
    }
  }, {
    key: 'select',
    value: function select() {
      this.selected = true;
    }
  }, {
    key: 'deselect',
    value: function deselect() {
      this.selected = false;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      return null;
    }
  }, {
    key: 'x',
    get: function get() {
      return this._x;
    },
    set: function set(value) {
      this._x = value;
    }
  }, {
    key: 'y',
    get: function get() {
      return this._y;
    },
    set: function set(value) {
      this._y = value;
    }
  }]);

  return Transform;
}(_events.EventDispatcher);

exports.default = Transform;

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

/***/ "./src/geom/point_list.js":
/*!********************************!*\
  !*** ./src/geom/point_list.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _point = __webpack_require__(/*! ./point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

var _rectangle = __webpack_require__(/*! ./rectangle */ "./src/geom/rectangle.js");

var _rectangle2 = _interopRequireDefault(_rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PointList = function () {
  function PointList(points) {
    _classCallCheck(this, PointList);

    this.points = points || [];
  }

  _createClass(PointList, [{
    key: 'getBounds',
    value: function getBounds() {
      if (this.points.length) {
        var xmin = Number.POSITIVE_INFINITY;
        var ymin = Number.POSITIVE_INFINITY;
        var xmax = Number.NEGATIVE_INFINITY;
        var ymax = Number.NEGATIVE_INFINITY;

        for (var i = 0; i < this.points.length; i++) {
          var p = this.points[i];
          xmin = p.x < xmin ? p.x : xmin;
          ymin = p.y < ymin ? p.y : ymin;
          xmax = p.x > xmax ? p.x : xmax;
          ymax = p.y > ymax ? p.y : ymax;
        }
        return new _rectangle2.default(xmin, ymin, xmax - xmin, ymax - ymin);
      }

      return null;
    }
  }]);

  return PointList;
}();

exports.default = PointList;

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
  function Rectangle(x, y, width, height) {
    _classCallCheck(this, Rectangle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Rectangle, [{
    key: "grow",
    value: function grow(amount) {
      this.x -= amount;
      this.y -= amount;
      this.width += amount * 2;
      this.height += amount * 2;
    }
  }]);

  return Rectangle;
}();

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

var _point = __webpack_require__(/*! ./geom/point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

var _vector = __webpack_require__(/*! ./geom/vector */ "./src/geom/vector.js");

var _vector2 = _interopRequireDefault(_vector);

var _circle = __webpack_require__(/*! ./geom/circle */ "./src/geom/circle.js");

var _circle2 = _interopRequireDefault(_circle);

var _shape = __webpack_require__(/*! ./display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SNAP_RADIUS = 3;
var COLORS = ['white', '#cccccc', '#999999', '#666666', '#333333', 'black'];

var Paper = function (_EventDispatcher) {
  _inherits(Paper, _EventDispatcher);

  function Paper() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Paper);

    var _this = _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).call(this));

    _this.points = [];
    _this.shapes = [];
    _this.fill = null;
    _this.stroke = COLORS[5];

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
    key: 'dom',
    value: function dom() {
      return this.el;
    }
  }, {
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
    value: function drawPath() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var points = params.points || [];
      var ctx = this.canvas.getContext('2d');

      ctx.save();

      ctx.strokeStyle = params.stroke !== undefined ? params.stroke ? params.stroke : 'transparent' : 'transparent';
      ctx.fillStyle = params.fill !== undefined ? params.fill ? params.fill : 'transparent' : 'transparent';

      ctx.beginPath();
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        if (i == 0) ctx.moveTo(p.x, p.y);else ctx.lineTo(p.x, p.y);
      }
      if (params.closed) ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }
  }, {
    key: 'drawShape',
    value: function drawShape(shape) {
      var points = shape.getPoints();

      var ctx = this.canvas.getContext('2d');
      ctx.save();

      ctx.translate(0.5, 0.5);

      ctx.strokeStyle = shape.stroke || 'transparent';
      ctx.fillStyle = shape.fill || 'transparent';

      ctx.beginPath();

      for (var j = 0; j < points.length; j++) {
        var p = points[j];
        if (j == 0) ctx.moveTo(p.x + shape.x, p.y + shape.y);else ctx.lineTo(p.x + shape.x, p.y + shape.y);
      }

      if (shape.closed) ctx.closePath();

      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.shapes.length; i++) {
        var shape = this.shapes[i];
        // this.drawPath({ points: shape.points, fill: shape.fill, stroke: shape.stroke, closed: shape.closed });
        this.drawShape(shape);
      }

      if (this.points.length) {
        this.drawPath({ points: this.points, fill: this.fill, stroke: this.stroke });

        ctx.strokeStyle = 'blue';
        ctx.beginPath();
        var p = this.points[this.points.length - 1];
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(this.cursorx, this.cursory);
        ctx.stroke();

        var cp = new _point2.default(this.cursorx, this.cursory);
        var p0 = this.points[0];
        if (cp.distance(p0) < SNAP_RADIUS) {
          ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
  }, {
    key: 'getShapes',
    value: function getShapes() {
      return this.shapes;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.points = [];
      this.shapes = [];
      this.render();
    }
  }, {
    key: 'cancelPath',
    value: function cancelPath() {
      this.points = [];
      this.render();
    }
  }, {
    key: 'closePath',
    value: function closePath() {
      var closed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.points.length > 1) {
        var shape = new _shape2.default({ points: this.points, closed: closed, fill: this.fill, stroke: this.stroke });
        this.shapes.push(shape);
      }
      this.points = [];
      this.render();
    }
  }, {
    key: 'setFill',
    value: function setFill(fill) {
      this.fill = fill;
      this.render();
    }
  }, {
    key: 'setStroke',
    value: function setStroke(stroke) {
      this.stroke = stroke;
      this.render();
    }
  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      for (var i = this.shapes.length - 1; i >= 0; i--) {
        var child = this.shapes[i];
        if (child.hitTest(x, y)) {
          return child;
        }
      }
      return null;
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      if (event.button == 0) {
        var p = new _point2.default(event.offsetX, event.offsetY);
        if (this.points.length) {
          if (p.distance(this.points[0]) < SNAP_RADIUS) {
            this.closePath(true);
          } else {
            this.points.push(p);
          }
        } else {
          this.points.push(p);
        }
        this.render();
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
      this.render();
      this.cursor.style.left = this.cursorx + 'px';
      this.cursor.style.top = this.cursory + 'px';

      if (this.mode !== 'draw') {}
    }
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {
      this.closePath();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key == 's' && !event.repeat) {
        this.setStroke(this.stroke ? null : 'black');
      } else if (event.key == '0' && !event.repeat) {
        this.setFill(null);
      } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(event.key) && !event.repeat) {
        var color = COLORS[parseInt(event.key) - 1];
        if (color !== undefined) this.setFill(color);
      } else {
        if (this.mode == 'draw') {
          if (event.key == 'Escape' && !event.repeat) {
            this.cancelPath();
          } else if (event.key == 'Enter' && !event.repeat) {
            this.closePath();
          }
        } else {}
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

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var _util2 = _interopRequireDefault(_util);

var _shape = __webpack_require__(/*! ./display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

var _group = __webpack_require__(/*! ./display/group */ "./src/display/group.js");

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = function () {
  function Stage() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Stage);

    this.children = [];
    this.selection = [];

    this.el = document.createElement('div');
    this.el.classList.add('stage');

    this.canvas = document.createElement('canvas');
    this.canvas.width = params.width || 320;
    this.canvas.height = params.height || 200;

    this.el.appendChild(this.canvas);

    this.cursor = document.createElement('div');
    this.cursor.classList.add('stage-cursor');

    window.addEventListener('mousedown', this);
    window.addEventListener('mouseup', this);
    window.addEventListener('mousemove', this);
  }

  _createClass(Stage, [{
    key: 'dom',
    value: function dom() {
      return this.el;
    }
  }, {
    key: 'add',
    value: function add(stageObject) {
      this.children.push(stageObject);
      stageObject.addedToStage();
      this.render();
    }
  }, {
    key: 'selectMarquee',
    value: function selectMarquee(xmin, ymin, xmax, ymax) {
      if (xmin > xmax) {
        ;
        var _ref = [xmax, xmin];
        xmin = _ref[0];
        xmax = _ref[1];
      }if (ymin > ymax) {
        ;
        var _ref2 = [ymax, ymin];
        ymin = _ref2[0];
        ymax = _ref2[1];
      }var selection = [];
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child instanceof _shape2.default) {
          if (child.intersectsRectangle(xmin, ymin, xmax, ymax)) {
            selection.push(child);
            child.select();
          }
        }
      }
      this.selection = selection;
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
      this.render();
    }
  }, {
    key: 'renderShape',
    value: function renderShape(shape, highlight) {
      var points = shape.getPoints();

      var ctx = this.canvas.getContext('2d');
      ctx.save();

      // ctx.translate(0.5, 0.5);

      ctx.beginPath();

      for (var j = 0; j < points.length; j++) {
        var p = points[j];
        if (j == 0) ctx.moveTo(p.x + shape.x, p.y + shape.y);else ctx.lineTo(p.x + shape.x, p.y + shape.y);
      }

      if (shape.closed) ctx.closePath();

      if (highlight) {
        // ctx.strokeStyle = 'cyan';
        // ctx.lineWidth = 4;
        // ctx.stroke();
      }

      ctx.lineWidth = 1;
      ctx.strokeStyle = shape.stroke || 'transparent';
      ctx.fillStyle = shape.fill || 'transparent';

      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }
  }, {
    key: 'renderHints',
    value: function renderHints(stageObject) {
      var ctx = this.canvas.getContext('2d');
      ctx.strokeStyle = stageObject.selected ? 'red' : 'blue';
      ctx.beginPath();
      ctx.arc(stageObject.x >> 0, stageObject.y >> 0, 3, 0, Math.PI * 2, false);
      ctx.stroke();
      var bounds = stageObject.getBounds();
      if (bounds) {
        ctx.strokeStyle = stageObject.selected ? 'red' : 'blue';
        ctx.beginPath();
        ctx.rect(stageObject.x + bounds.x + 0.5, stageObject.y + bounds.y + 0.5, bounds.width, bounds.height);
        ctx.stroke();
      }
    }
  }, {
    key: 'renderObject',
    value: function renderObject(stageObject, highlight) {
      if (stageObject instanceof _group2.default) {
        for (var i = 0; i < stageObject.children.length; i++) {
          var child = stageObject.children[i];
          this.renderObject(child, highlight);
        }
      } else if (stageObject instanceof _shape2.default) {
        this.renderShape(stageObject, highlight);
      }
      if (stageObject.selected) this.renderHints(stageObject);
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        this.renderObject(child, this.target == child);
      }

      if (this.mode == 'marquee') {
        ctx.save();
        ctx.translate(0.5, 0.5);
        ctx.strokeStyle = 'gray';
        ctx.globalCompositeOperation = 'exclusion';
        ctx.beginPath();
        // ctx.moveTo(this.marquee[0], this.marquee[1]);
        // ctx.lineTo(this.marquee[2], this.marquee[1]);
        // ctx.lineTo(this.marquee[2], this.marquee[3]);
        // ctx.lineTo(this.marquee[0], this.marquee[3]);
        ctx.moveTo(this.downX, this.downY);
        ctx.lineTo(this.cursorX, this.downY);
        ctx.lineTo(this.cursorX, this.cursorY);
        ctx.lineTo(this.downX, this.cursorY);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
    }
  }, {
    key: 'toggleStroke',
    value: function toggleStroke() {
      if (this.target instanceof _shape2.default) {
        this.target.stroke = this.target.stroke ? null : 'black';
        this.render();
      }
    }
  }, {
    key: 'moveSelectionBy',
    value: function moveSelectionBy(dx, dy) {
      for (var i = 0; i < this.selection.length; i++) {
        var item = this.selection[i];
        item.x += dx;
        item.y += dy;
      }
      this.render();
    }
  }, {
    key: 'beginDrag',
    value: function beginDrag() {
      this.mode = 'drag';
    }
  }, {
    key: 'cancelDrag',
    value: function cancelDrag() {
      this.mode = null;
    }
  }, {
    key: 'beginMarquee',
    value: function beginMarquee(xmin, ymin, xmax, ymax) {
      this.mode = 'marquee';
    }
  }, {
    key: 'cancelMarquee',
    value: function cancelMarquee() {
      this.mode = null;
      this.render();
    }
  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      for (var i = this.children.length - 1; i >= 0; i--) {
        var child = this.children[i];
        if (child.hitTest(x, y)) {
          return child;
        }
      }
      return null;
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      this.cursorX = event.pageX - this.el.offsetLeft;
      this.cursorY = event.pageY - this.el.offsetTop;

      this.downX = this.cursorX;
      this.downY = this.cursorY;

      var hit = this.hitTest(this.cursorX, this.cursorY);
      if (hit) {
        if (this.selection.includes(hit)) {} else {
          this.deselect();
          this.selection = [hit];
          hit.select();
        }
      } else {
        this.deselect();
      }

      this.render();
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      if (this.mode == 'drag') this.cancelDrag();else if (this.mode == 'marquee') {
        this.selectMarquee(this.downX, this.downY, this.cursorX, this.cursorY);
        this.cancelMarquee();
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorX = event.pageX - this.el.offsetLeft;
      this.cursorY = event.pageY - this.el.offsetTop;

      this.deltaX = this.lastX ? this.cursorX - this.lastX : 0;
      this.deltaY = this.lastY ? this.cursorY - this.lastY : 0;

      if (event.buttons & 1) {
        if (this.mode == 'drag') {
          if (this.selection.length) {
            this.moveSelectionBy(this.deltaX, this.deltaY);
          }
        } else if (this.mode == 'marquee') {
          this.render();
        } else {
          var dx = this.cursorX - this.downX;
          var dy = this.cursorY - this.downY;
          if (this.selection.length) {
            if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) {
              this.beginDrag();
              this.moveSelectionBy(dx, dy);
            }
          } else {
            this.beginMarquee(this.downX, this.downY, this.downX + dx, this.downY + dy);
          }
        }
      } else {
        var hit = this.hitTest(this.cursorX, this.cursorY);
        if (hit) {
          this.target = hit;
        } else {
          if (this.target) {
            this.target = null;
          }
        }
      }

      this.lastX = this.cursorX;
      this.lastY = this.cursorY;
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key == 's' && !event.repeat) {
        this.toggleStroke();
      }
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
      } else if (event.type == 'keydown') {
        this.onKeyDown(event);
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

// Copyright (c) 1970-2003, Wm. Randolph Franklin
// https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html

function pointInPolygon(points, testx, testy) {
  var i = void 0,
      j = void 0,
      c = 0;
  for (var _i = 0, _j = points.length - 1; _i < points.length; _j = _i++) {
    if (points[_i].y > testy != points[_j].y > testy && testx < (points[_j].x - points[_i].x) * (testy - points[_i].y) / (points[_j].y - points[_i].y) + points[_i].x) c = !c;
  }
  return c;
}

function lineIntersectsRectangle(x1, y1, x2, y2, xmin, ymin, xmax, ymax) {
  // Completely outside.
  if (x1 <= xmin && x2 <= xmin || y1 <= ymin && y2 <= ymin || x1 >= xmax && x2 >= xmax || y1 >= ymax && y2 >= ymax) return false;

  var m = (y2 - y1) / (x2 - x1);

  var y = m * (xmin - x1) + y1;
  if (y > ymin && y < ymax) return true;

  y = m * (xmax - x1) + y1;
  if (y > ymin && y < ymax) return true;

  var x = (ymin - y1) / m + x1;
  if (x > xmin && x < xmax) return true;

  x = (ymax - y1) / m + x1;
  if (x > xmin && x < xmax) return true;

  return false;
}

exports.default = {
  lineIntersectsRectangle: lineIntersectsRectangle,
  pointInPolygon: pointInPolygon
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9zaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9wb2ludF9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImluaXRFbGVtZW50cyIsImluaXRFdmVudExpc3RlbmVycyIsInN0YXJ0dXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsInBhcGVyIiwidmlzaWJsZSIsImNvbnNvbGUiLCJsb2ciLCJzaGFwZSIsInBvaW50cyIsIngiLCJ5IiwiZmlsbCIsInN0cm9rZSIsImNsb3NlZCIsImFkZCIsInN0YWdlRWwiLCJzaGFwZXMiLCJnZXRTaGFwZXMiLCJpIiwibGVuZ3RoIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIm1vZGUiLCJzZXRWaXNpYmxlIiwiY2xlYXIiLCJncmFiUGFwZXJTaGFwZXMiLCJzaG93UGFwZXIiLCJoaWRlUGFwZXIiLCJldmVudCIsImtleSIsInJlcGVhdCIsInRvZ2dsZVBhcGVyIiwiaGFuZGxlRXZlbnQiLCJ0eXBlIiwib25LZXlEb3duIiwib25Nb3VzZURvd24iLCJpbml0IiwiR3JvdXAiLCJwYXJhbXMiLCJjaGlsZHJlbiIsImNoaWxkIiwicHVzaCIsInJlY3RzIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwieG1pbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwieW1pbiIsInhtYXgiLCJORUdBVElWRV9JTkZJTklUWSIsInltYXgiLCJyZWN0IiwiUmVjdGFuZ2xlIiwiU2hhcGUiLCJzdHJva2VXaWR0aCIsInBvaW50TGlzdCIsInAwIiwicDEiLCJsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSIsInBvaW50SW5Qb2x5Z29uIiwiVGV4dCIsInNldFNpemUiLCJzaXplIiwic2V0VGV4dCIsImNvbnRlbnQiLCJ2YWx1ZSIsIlRyYW5zZm9ybSIsInNlbGVjdGVkIiwiX3giLCJfeSIsIkV2ZW50IiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2lyY2xlIiwiciIsIngxIiwieTEiLCJ4MiIsInkyIiwiZHgiLCJkeSIsImQiLCJNYXRoIiwic3FydCIsIlBvaW50IiwicG9pbnQiLCJQb2ludExpc3QiLCJwIiwiYW1vdW50IiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJTTkFQX1JBRElVUyIsIkNPTE9SUyIsIlBhcGVyIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiY2FudmFzIiwiYWRqdXN0Q2FudmFzIiwidW5kZWZpbmVkIiwiY3Vyc29yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImFkZExpc3RlbmVycyIsInJlbW92ZUxpc3RlbmVycyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNvbG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic2F2ZSIsImZpbGxTdHlsZSIsImNsb3NlUGF0aCIsInJlc3RvcmUiLCJnZXRQb2ludHMiLCJ0cmFuc2xhdGUiLCJqIiwiY2xlYXJSZWN0IiwiZHJhd1NoYXBlIiwiZHJhd1BhdGgiLCJjdXJzb3J4IiwiY3Vyc29yeSIsImNwIiwiZGlzdGFuY2UiLCJhcmMiLCJQSSIsInJlbmRlciIsImhpdFRlc3QiLCJidXR0b24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImxlZnQiLCJ0b3AiLCJzZXRTdHJva2UiLCJzZXRGaWxsIiwiaW5jbHVkZXMiLCJwYXJzZUludCIsImNhbmNlbFBhdGgiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIiwib25EYmxDbGljayIsIm9uQ29udGV4dE1lbnUiLCJTdGFnZSIsInNlbGVjdGlvbiIsInN0YWdlT2JqZWN0IiwiYWRkZWRUb1N0YWdlIiwiaW50ZXJzZWN0c1JlY3RhbmdsZSIsInNlbGVjdCIsImRlc2VsZWN0IiwiaGlnaGxpZ2h0IiwibGluZVdpZHRoIiwicmVuZGVyT2JqZWN0IiwicmVuZGVyU2hhcGUiLCJyZW5kZXJIaW50cyIsInRhcmdldCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImRvd25YIiwiZG93blkiLCJjdXJzb3JYIiwiY3Vyc29yWSIsIml0ZW0iLCJwYWdlWCIsInBhZ2VZIiwiaGl0IiwiY2FuY2VsRHJhZyIsInNlbGVjdE1hcnF1ZWUiLCJjYW5jZWxNYXJxdWVlIiwiZGVsdGFYIiwibGFzdFgiLCJkZWx0YVkiLCJsYXN0WSIsImJ1dHRvbnMiLCJtb3ZlU2VsZWN0aW9uQnkiLCJhYnMiLCJiZWdpbkRyYWciLCJiZWdpbk1hcnF1ZWUiLCJ0b2dnbGVTdHJva2UiLCJTdmciLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsInN2ZyIsInRlc3R4IiwidGVzdHkiLCJjIiwibSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7OztBQUpBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7O0lBRU1BLEc7QUFDSixpQkFBYztBQUFBOztBQUNaLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLQyxZQUFMO0FBQ0EsV0FBS0Msa0JBQUw7QUFDQSxXQUFLQyxPQUFMO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkJDLGFBQU9DLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLElBQW5DO0FBQ0FELGFBQU9DLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLElBQXJDO0FBQ0Q7OzttQ0FFYztBQUNiLFdBQUtMLEdBQUwsQ0FBU00sR0FBVCxHQUFlQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQWY7O0FBRUEsV0FBS0MsS0FBTCxHQUFhLG9CQUFVLEVBQUVDLE9BQU8sR0FBVCxFQUFjQyxRQUFRLEdBQXRCLEVBQVYsQ0FBYjtBQUNBLFdBQUtYLEdBQUwsQ0FBU00sR0FBVCxDQUFhTSxXQUFiLENBQXlCLEtBQUtILEtBQUwsQ0FBV1QsR0FBWCxFQUF6Qjs7QUFFQSxXQUFLYSxLQUFMLEdBQWEsb0JBQVUsRUFBRUMsU0FBUyxLQUFYLEVBQVYsQ0FBYjtBQUNBLFdBQUtkLEdBQUwsQ0FBU00sR0FBVCxDQUFhTSxXQUFiLENBQXlCLEtBQUtDLEtBQUwsQ0FBV2IsR0FBWCxFQUF6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7OEJBRVM7QUFDUmUsY0FBUUMsR0FBUixDQUFZLFNBQVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBSUMsUUFBUSxvQkFBVTtBQUNwQkMsZ0JBQVEsQ0FBRSxFQUFFQyxHQUFHLENBQUwsRUFBUUMsR0FBRyxDQUFYLEVBQUYsRUFBa0IsRUFBRUQsR0FBRyxFQUFMLEVBQVNDLEdBQUcsQ0FBWixFQUFsQixFQUFtQyxFQUFFRCxHQUFHLEVBQUwsRUFBU0MsR0FBRyxFQUFaLEVBQW5DLEVBQXFELEVBQUVELEdBQUcsRUFBTCxFQUFTQyxHQUFHLEVBQVosRUFBckQsQ0FEWTtBQUVwQkMsY0FBTSxTQUZjO0FBR3BCQyxnQkFBUSxPQUhZO0FBSXBCQyxnQkFBUTtBQUpZLE9BQVYsQ0FBWjtBQU1BTixZQUFNRSxDQUFOLEdBQVUsRUFBVjtBQUNBRixZQUFNRyxDQUFOLEdBQVUsRUFBVjtBQUNBLFdBQUtYLEtBQUwsQ0FBV2UsR0FBWCxDQUFlUCxLQUFmOztBQUVBQSxjQUFRLG9CQUFVO0FBQ2hCQyxnQkFBUSxDQUFFLEVBQUVDLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQVgsRUFBRixFQUFrQixFQUFFRCxHQUFHLEVBQUwsRUFBU0MsR0FBRyxFQUFaLEVBQWxCLEVBQW9DLEVBQUVELEdBQUcsR0FBTCxFQUFVQyxHQUFHLEVBQWIsRUFBcEMsRUFBdUQsRUFBRUQsR0FBRyxHQUFMLEVBQVVDLEdBQUcsRUFBYixFQUF2RCxDQURRO0FBRWhCQyxjQUFNLFNBRlU7QUFHaEJDLGdCQUFRLElBSFE7QUFJaEJDLGdCQUFRO0FBSlEsT0FBVixDQUFSO0FBTUFOLFlBQU1FLENBQU4sR0FBVSxHQUFWO0FBQ0FGLFlBQU1HLENBQU4sR0FBVSxHQUFWO0FBQ0EsV0FBS1gsS0FBTCxDQUFXZSxHQUFYLENBQWVQLEtBQWY7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFJUSxVQUFVLEtBQUtoQixLQUFMLENBQVdULEdBQVgsRUFBZDtBQUNBLFVBQUkwQixTQUFTLEtBQUtiLEtBQUwsQ0FBV2MsU0FBWCxFQUFiO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE9BQU9HLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUN0QyxZQUFJWCxRQUFRUyxPQUFPRSxDQUFQLENBQVo7QUFDQVgsY0FBTUUsQ0FBTixJQUFXTSxRQUFRSyxVQUFuQjtBQUNBYixjQUFNRyxDQUFOLElBQVdLLFFBQVFNLFNBQW5CO0FBQ0EsYUFBS3RCLEtBQUwsQ0FBV2UsR0FBWCxDQUFlUCxLQUFmO0FBQ0Q7QUFDRjs7O2dDQUVXO0FBQ1YsVUFBSSxLQUFLZSxJQUFMLEtBQWMsT0FBbEIsRUFBMkI7QUFDekIsYUFBS25CLEtBQUwsQ0FBV29CLFVBQVgsQ0FBc0IsSUFBdEI7QUFDQSxhQUFLcEIsS0FBTCxDQUFXcUIsS0FBWDtBQUNBLGFBQUtGLElBQUwsR0FBWSxPQUFaO0FBQ0Q7QUFDRjs7O2dDQUVXO0FBQ1YsVUFBSSxLQUFLQSxJQUFMLElBQWEsT0FBakIsRUFBMEI7QUFDeEIsYUFBS0csZUFBTDtBQUNBLGFBQUt0QixLQUFMLENBQVdvQixVQUFYLENBQXNCLEtBQXRCO0FBQ0EsYUFBS3BCLEtBQUwsQ0FBV3FCLEtBQVg7QUFDQSxhQUFLRixJQUFMLEdBQVksSUFBWjtBQUNEO0FBQ0Y7OztrQ0FFYTtBQUNaLFVBQUksS0FBS0EsSUFBTCxLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCLGFBQUtJLFNBQUw7QUFDRCxPQUZELE1BR0s7QUFDSCxhQUFLQyxTQUFMO0FBQ0Q7QUFDRjs7OzhCQUVTQyxLLEVBQU87QUFDZixVQUFJQSxNQUFNQyxHQUFOLElBQWEsR0FBYixJQUFvQixDQUFDRCxNQUFNRSxNQUEvQixFQUF1QztBQUNyQyxhQUFLQyxXQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSSxLQUFLVCxJQUFMLElBQWEsT0FBakIsRUFBMEI7QUFDeEIsZUFBS25CLEtBQUwsQ0FBVzZCLFdBQVgsQ0FBdUJKLEtBQXZCO0FBQ0QsU0FGRCxNQUdLO0FBQ0gsZUFBSzdCLEtBQUwsQ0FBV2lDLFdBQVgsQ0FBdUJKLEtBQXZCO0FBQ0Q7QUFDRjtBQUNGOzs7Z0NBRVdBLEssRUFBTztBQUNqQjtBQUNBO0FBQ0E7QUFDRDs7O2dDQUVXQSxLLEVBQU87QUFDakIsVUFBSUEsTUFBTUssSUFBTixJQUFjLFNBQWxCLEVBQTZCO0FBQzNCLGFBQUtDLFNBQUwsQ0FBZU4sS0FBZjtBQUNELE9BRkQsTUFHSyxJQUFJQSxNQUFNSyxJQUFOLElBQWMsV0FBbEIsRUFBK0I7QUFDbEMsYUFBS0UsV0FBTCxDQUFpQlAsS0FBakI7QUFDRDtBQUNGOzs7Ozs7QUFHSC9CLFNBQVNGLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEVSxVQUFRQyxHQUFSLENBQVksa0JBQVo7QUFDQSxNQUFJVixNQUFNLElBQUlQLEdBQUosRUFBVjtBQUNBTyxNQUFJd0MsSUFBSjtBQUNELENBSkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUE7Ozs7Ozs7Ozs7OztJQUVNQyxLOzs7QUFDSixtQkFBdUI7QUFBQSxRQUFYQyxNQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBRXJCLFVBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFGcUI7QUFHdEI7Ozs7d0JBRUdDLEssRUFBTztBQUNULFdBQUtELFFBQUwsQ0FBY0UsSUFBZCxDQUFtQkQsS0FBbkI7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBSUUsUUFBUSxFQUFaOztBQUVBLFdBQUssSUFBSXhCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLcUIsUUFBTCxDQUFjcEIsTUFBbEMsRUFBMENELEdBQTFDLEVBQStDO0FBQzdDLFlBQUlzQixRQUFRLEtBQUtELFFBQUwsQ0FBY3JCLENBQWQsQ0FBWjtBQUNBLFlBQUl5QixTQUFTSCxNQUFNSSxTQUFOLEVBQWI7QUFDQUYsY0FBTUQsSUFBTixDQUFXRSxNQUFYO0FBQ0Q7O0FBRUQsVUFBSUQsTUFBTXZCLE1BQVYsRUFBa0I7QUFDaEIsWUFBSTBCLE9BQU9DLE9BQU9DLGlCQUFsQjtBQUNBLFlBQUlDLE9BQU9GLE9BQU9DLGlCQUFsQjtBQUNBLFlBQUlFLE9BQU9ILE9BQU9JLGlCQUFsQjtBQUNBLFlBQUlDLE9BQU9MLE9BQU9JLGlCQUFsQjs7QUFFQSxhQUFLLElBQUloQyxJQUFJLENBQWIsRUFBZ0JBLElBQUl3QixNQUFNdkIsTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ3JDLGNBQUlrQyxPQUFPVixNQUFNeEIsQ0FBTixDQUFYO0FBQ0EyQixpQkFBT08sS0FBSzNDLENBQUwsR0FBU29DLElBQVQsR0FBZ0JPLEtBQUszQyxDQUFyQixHQUF5Qm9DLElBQWhDO0FBQ0FHLGlCQUFPSSxLQUFLMUMsQ0FBTCxHQUFTc0MsSUFBVCxHQUFnQkksS0FBSzFDLENBQXJCLEdBQXlCc0MsSUFBaEM7QUFDQUMsaUJBQU9HLEtBQUszQyxDQUFMLEdBQVMyQyxLQUFLcEQsS0FBZCxHQUFzQmlELElBQXRCLEdBQTZCRyxLQUFLM0MsQ0FBTCxHQUFTMkMsS0FBS3BELEtBQTNDLEdBQW1EaUQsSUFBMUQ7QUFDQUUsaUJBQU9DLEtBQUsxQyxDQUFMLEdBQVMwQyxLQUFLbkQsTUFBZCxHQUF1QmtELElBQXZCLEdBQThCQyxLQUFLMUMsQ0FBTCxHQUFTMEMsS0FBS25ELE1BQTVDLEdBQXFEa0QsSUFBNUQ7QUFDRDtBQUNELGVBQU8sSUFBSUUsU0FBSixDQUFjUixPQUFPLEtBQUtwQyxDQUExQixFQUE2QnVDLE9BQU8sS0FBS3RDLENBQXpDLEVBQTRDdUMsT0FBT0osSUFBbkQsRUFBeURNLE9BQU9ILElBQWhFLENBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7Ozs7O2tCQUdZWCxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTWlCLEs7OztBQUNKLG1CQUF1QjtBQUFBLFFBQVhoQixNQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBR3JCLFVBQUszQixJQUFMLEdBQVkyQixPQUFPM0IsSUFBUCxJQUFlLElBQTNCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjMEIsT0FBTzFCLE1BQVAsSUFBaUIsSUFBL0I7QUFDQSxVQUFLMkMsV0FBTCxHQUFtQmpCLE9BQU9pQixXQUFQLElBQXNCLENBQXpDO0FBQ0EsVUFBSzFDLE1BQUwsR0FBY3lCLE9BQU96QixNQUFQLElBQWlCLEtBQS9COztBQUVBLFVBQUsyQyxTQUFMLEdBQWlCLHlCQUFjbEIsT0FBTzlCLE1BQXJCLENBQWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CcUI7QUFvQnRCOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLZ0QsU0FBTCxDQUFlaEQsTUFBdEI7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLZ0QsU0FBTCxDQUFlWixTQUFmLEVBQVA7QUFDRDs7O3dDQUVtQkMsSSxFQUFNRyxJLEVBQU1DLEksRUFBTUUsSSxFQUFNO0FBQzFDLFVBQUlOLE9BQU9JLElBQVg7QUFBaUI7QUFBakIsbUJBQWdDLENBQUVBLElBQUYsRUFBUUosSUFBUixDQUFoQztBQUFrQkEsWUFBbEI7QUFBd0JJLFlBQXhCO0FBQUEsT0FDQSxJQUFJRCxPQUFPRyxJQUFYO0FBQWlCO0FBQWpCLG9CQUFnQyxDQUFFQSxJQUFGLEVBQVFILElBQVIsQ0FBaEM7QUFBa0JBLFlBQWxCO0FBQXdCRyxZQUF4QjtBQUFBLE9BQ0EsSUFBSTNDLFNBQVMsS0FBS2dELFNBQUwsQ0FBZWhELE1BQTVCO0FBQ0EsV0FBSyxJQUFJVSxJQUFJLENBQWIsRUFBZ0JBLElBQUlWLE9BQU9XLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUN0QyxZQUFJdUMsS0FBS2pELE9BQU9VLElBQUksQ0FBWCxDQUFUO0FBQ0EsWUFBSXdDLEtBQUtsRCxPQUFPVSxDQUFQLENBQVQ7QUFDQSxZQUFJLGVBQUt5Qyx1QkFBTCxDQUE2QkYsR0FBR2hELENBQWhDLEVBQW1DZ0QsR0FBRy9DLENBQXRDLEVBQXlDZ0QsR0FBR2pELENBQTVDLEVBQStDaUQsR0FBR2hELENBQWxELEVBQXFEbUMsT0FBTyxLQUFLcEMsQ0FBakUsRUFBb0V1QyxPQUFPLEtBQUt0QyxDQUFoRixFQUFtRnVDLE9BQU8sS0FBS3hDLENBQS9GLEVBQWtHMEMsT0FBTyxLQUFLekMsQ0FBOUcsQ0FBSixFQUFzSDtBQUNwSCxpQkFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNELGFBQU8sS0FBUDtBQUNEOzs7NEJBRU9ELEMsRUFBR0MsQyxFQUFHO0FBQ1osVUFBSUYsU0FBUyxLQUFLZ0QsU0FBTCxDQUFlaEQsTUFBNUI7QUFDQSxVQUFJLEtBQUtHLElBQVQsRUFBZTtBQUNiLGVBQU8sZUFBS2lELGNBQUwsQ0FBb0JwRCxNQUFwQixFQUE0QkMsSUFBSSxLQUFLQSxDQUFyQyxFQUF3Q0MsSUFBSSxLQUFLQSxDQUFqRCxDQUFQO0FBQ0QsT0FGRCxNQUdLLENBRUo7QUFDRjs7Ozs7O2tCQUdZNEMsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGY7Ozs7Ozs7Ozs7OztJQUVNTyxJOzs7QUFDSixrQkFBdUI7QUFBQSxRQUFYdkIsTUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUVyQixVQUFLd0IsT0FBTCxDQUFheEIsT0FBT3lCLElBQVAsSUFBZSxFQUE1QjtBQUNBLFVBQUtDLE9BQUwsQ0FBYTFCLE9BQU8yQixPQUFwQjtBQUhxQjtBQUl0Qjs7Ozs0QkFFT0MsSyxFQUFPO0FBQ2IsV0FBS0gsSUFBTCxHQUFZRyxLQUFaO0FBQ0Q7Ozs0QkFFT0EsSyxFQUFPO0FBQ2IsV0FBS0QsT0FBTCxHQUFlQyxLQUFmO0FBQ0Q7Ozs0QkFFT3pELEMsRUFBR0MsQyxFQUFHO0FBQ1osYUFBTyxLQUFQO0FBQ0Q7Ozs7OztrQkFHWW1ELEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJmOzs7Ozs7OztJQUVNTSxTOzs7QUFDSix1QkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUsxRCxDQUFMLEdBQVMsQ0FBVDtBQUNBLFVBQUtDLENBQUwsR0FBUyxDQUFUO0FBSFk7QUFJYjs7OzttQ0FrQmMsQ0FDZDs7OzRCQUVPRCxDLEVBQUdDLEMsRUFBRztBQUNaLGFBQU8sS0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLMEQsUUFBTCxHQUFnQixJQUFoQjtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLQSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sSUFBUDtBQUNEOzs7d0JBakNPO0FBQ04sYUFBTyxLQUFLQyxFQUFaO0FBQ0QsSztzQkFNS0gsSyxFQUFPO0FBQ1gsV0FBS0csRUFBTCxHQUFVSCxLQUFWO0FBQ0Q7Ozt3QkFOTztBQUNOLGFBQU8sS0FBS0ksRUFBWjtBQUNELEs7c0JBTUtKLEssRUFBTztBQUNYLFdBQUtJLEVBQUwsR0FBVUosS0FBVjtBQUNEOzs7Ozs7a0JBdUJZQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3Q1RJLEssR0FDSixlQUFZdEMsSUFBWixFQUFrQkssTUFBbEIsRUFBMEI7QUFBQTs7QUFDeEIsT0FBS0wsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0ssTUFBTCxHQUFjQSxNQUFkO0FBQ0QsQzs7SUFHR2tDLGU7QUFDSiw2QkFBYztBQUFBOztBQUNaLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDRDs7Ozt5QkFDSXhDLEksRUFBZTtBQUFBLHdDQUFOeUMsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ2xCLFdBQUssSUFBSXhELElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLdUQsU0FBTCxDQUFldEQsTUFBbkMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFlBQUl5RCxXQUFXLEtBQUtGLFNBQUwsQ0FBZXZELENBQWYsQ0FBZjtBQUNBLFlBQUl5RCxTQUFTMUMsSUFBVCxJQUFpQkEsSUFBckIsRUFBMkI7QUFDekIwQyxtQkFBU0MsUUFBVCxpQkFBcUJGLElBQXJCO0FBQ0Q7QUFDRjtBQUNGOzs7dUJBQ0V6QyxJLEVBQU0yQyxRLEVBQVU7QUFDakIsV0FBS0gsU0FBTCxDQUFlaEMsSUFBZixDQUFvQixFQUFFUixNQUFNQSxJQUFSLEVBQWMyQyxVQUFVQSxRQUF4QixFQUFwQjtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQixFQUFFTixnQ0FBRixFQUFtQkQsWUFBbkIsRUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3hCTVEsTTtBQUNKLGtCQUFZdEUsQ0FBWixFQUFlQyxDQUFmLEVBQWtCc0UsQ0FBbEIsRUFBcUI7QUFBQTs7QUFDbkIsU0FBS3ZFLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtzRSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7OzswQ0FFcUJDLEUsRUFBSUMsRSxFQUFJQyxFLEVBQUlDLEUsRUFBSSxDQUVyQzs7O2tDQUVhM0UsQyxFQUFHQyxDLEVBQUc7QUFDbEIsVUFBSTJFLEtBQUs1RSxJQUFJLEtBQUtBLENBQWxCO0FBQ0EsVUFBSTZFLEtBQUs1RSxJQUFJLEtBQUtBLENBQWxCO0FBQ0EsVUFBSTZFLElBQUlDLEtBQUtDLElBQUwsQ0FBVUosS0FBS0EsRUFBTCxHQUFVQyxLQUFLQSxFQUF6QixDQUFSO0FBQ0EsYUFBT0MsSUFBSSxLQUFLUCxDQUFoQjtBQUNEOzs7Ozs7a0JBR1lELE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuQlRXLEs7QUFDSixpQkFBWWpGLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUFBOztBQUNoQixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7Ozs2QkFFUWlGLEssRUFBTztBQUNkLFVBQUlOLEtBQUssS0FBSzVFLENBQUwsR0FBU2tGLE1BQU1sRixDQUF4QjtBQUNBLFVBQUk2RSxLQUFLLEtBQUs1RSxDQUFMLEdBQVNpRixNQUFNakYsQ0FBeEI7QUFDQSxhQUFPOEUsS0FBS0MsSUFBTCxDQUFVSixLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQXpCLENBQVA7QUFDRDs7Ozs7O2tCQUdZSSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RmOzs7O0FBQ0E7Ozs7Ozs7O0lBRU1FLFM7QUFDSixxQkFBWXBGLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxVQUFVLEVBQXhCO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixVQUFJLEtBQUtBLE1BQUwsQ0FBWVcsTUFBaEIsRUFBd0I7QUFDdEIsWUFBSTBCLE9BQU9DLE9BQU9DLGlCQUFsQjtBQUNBLFlBQUlDLE9BQU9GLE9BQU9DLGlCQUFsQjtBQUNBLFlBQUlFLE9BQU9ILE9BQU9JLGlCQUFsQjtBQUNBLFlBQUlDLE9BQU9MLE9BQU9JLGlCQUFsQjs7QUFFQSxhQUFLLElBQUloQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS1YsTUFBTCxDQUFZVyxNQUFoQyxFQUF3Q0QsR0FBeEMsRUFBNkM7QUFDM0MsY0FBSTJFLElBQUksS0FBS3JGLE1BQUwsQ0FBWVUsQ0FBWixDQUFSO0FBQ0EyQixpQkFBT2dELEVBQUVwRixDQUFGLEdBQU1vQyxJQUFOLEdBQWFnRCxFQUFFcEYsQ0FBZixHQUFtQm9DLElBQTFCO0FBQ0FHLGlCQUFPNkMsRUFBRW5GLENBQUYsR0FBTXNDLElBQU4sR0FBYTZDLEVBQUVuRixDQUFmLEdBQW1Cc0MsSUFBMUI7QUFDQUMsaUJBQU80QyxFQUFFcEYsQ0FBRixHQUFNd0MsSUFBTixHQUFhNEMsRUFBRXBGLENBQWYsR0FBbUJ3QyxJQUExQjtBQUNBRSxpQkFBTzBDLEVBQUVuRixDQUFGLEdBQU15QyxJQUFOLEdBQWEwQyxFQUFFbkYsQ0FBZixHQUFtQnlDLElBQTFCO0FBQ0Q7QUFDRCxlQUFPLHdCQUFjTixJQUFkLEVBQW9CRyxJQUFwQixFQUEwQkMsT0FBT0osSUFBakMsRUFBdUNNLE9BQU9ILElBQTlDLENBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7Ozs7O2tCQUdZNEMsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzVCVHZDLFM7QUFDSixxQkFBWTVDLENBQVosRUFBZUMsQ0FBZixFQUFrQlYsS0FBbEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQUE7O0FBQy9CLFNBQUtRLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtWLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O3lCQUVJNkYsTSxFQUFRO0FBQ1gsV0FBS3JGLENBQUwsSUFBVXFGLE1BQVY7QUFDQSxXQUFLcEYsQ0FBTCxJQUFVb0YsTUFBVjtBQUNBLFdBQUs5RixLQUFMLElBQWM4RixTQUFTLENBQXZCO0FBQ0EsV0FBSzdGLE1BQUwsSUFBZTZGLFNBQVMsQ0FBeEI7QUFDRDs7Ozs7O2tCQUdZekMsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hCVDBDLE07QUFDSixrQkFBWXRGLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUFBOztBQUNoQixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7Ozt3QkFFR3NGLE0sRUFBUTtBQUNWLGFBQVEsS0FBS3ZGLENBQUwsR0FBU3VGLE9BQU92RixDQUFoQixHQUFvQixLQUFLQyxDQUFMLEdBQVNzRixPQUFPdEYsQ0FBNUM7QUFDRDs7OzBCQUVLO0FBQ0osYUFBTzhFLEtBQUtDLElBQUwsQ0FBVSxLQUFLaEYsQ0FBTCxHQUFTLEtBQUtBLENBQWQsR0FBa0IsS0FBS0MsQ0FBTCxHQUFTLEtBQUtBLENBQTFDLENBQVA7QUFDRDs7OzRCQUVPc0YsTSxFQUFRO0FBQ2QsVUFBSVQsSUFBSVMsT0FBT0MsR0FBUCxDQUFXRCxNQUFYLENBQVI7QUFDQSxVQUFJVCxJQUFJLENBQVIsRUFBVztBQUNULFlBQUlXLFFBQVEsS0FBS0QsR0FBTCxDQUFTRCxNQUFULElBQW1CVCxDQUEvQjtBQUNBO0FBQ0EsWUFBSVcsU0FBUyxDQUFULElBQWNBLFNBQVMsQ0FBM0IsRUFBOEI7QUFDNUIsaUJBQU8sSUFBSUgsTUFBSixDQUFXQyxPQUFPdkYsQ0FBUCxHQUFXeUYsS0FBdEIsRUFBNkJGLE9BQU90RixDQUFQLEdBQVd3RixLQUF4QyxDQUFQO0FBQ0Q7QUFDRjtBQUNELGFBQU8sSUFBUDtBQUdEOzs7Ozs7a0JBR1lILE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJSSxjQUFjLENBQWxCO0FBQ0EsSUFBSUMsU0FBUyxDQUNYLE9BRFcsRUFFWCxTQUZXLEVBR1gsU0FIVyxFQUlYLFNBSlcsRUFLWCxTQUxXLEVBTVgsT0FOVyxDQUFiOztJQVNNQyxLOzs7QUFDSixtQkFBdUI7QUFBQSxRQUFYL0QsTUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUFBOztBQUdyQixVQUFLOUIsTUFBTCxHQUFjLEVBQWQ7QUFDQSxVQUFLUSxNQUFMLEdBQWMsRUFBZDtBQUNBLFVBQUtMLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBS0MsTUFBTCxHQUFjd0YsT0FBTyxDQUFQLENBQWQ7O0FBRUEsVUFBS0UsRUFBTCxHQUFVekcsU0FBUzBHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLFVBQUtELEVBQUwsQ0FBUUUsU0FBUixDQUFrQjFGLEdBQWxCLENBQXNCLE9BQXRCOztBQUVBLFVBQUsyRixNQUFMLEdBQWM1RyxTQUFTMEcsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsVUFBS0csWUFBTDs7QUFFQSxVQUFLSixFQUFMLENBQVFwRyxXQUFSLENBQW9CLE1BQUt1RyxNQUF6Qjs7QUFFQSxVQUFLbEYsVUFBTCxDQUFnQmUsT0FBT2xDLE9BQVAsS0FBbUJ1RyxTQUFuQixHQUErQnJFLE9BQU9sQyxPQUF0QyxHQUFnRCxJQUFoRTs7QUFFQSxVQUFLcUUsU0FBTCxHQUFpQixDQUFFLFdBQUYsRUFBZSxXQUFmLEVBQTRCLFNBQTVCLEVBQXVDLFVBQXZDLEVBQW1ELGFBQW5ELENBQWpCOztBQUVBLFVBQUttQyxNQUFMLEdBQWMvRyxTQUFTMEcsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsVUFBS0ssTUFBTCxDQUFZSixTQUFaLENBQXNCMUYsR0FBdEIsQ0FBMEIsY0FBMUI7O0FBRUEsVUFBS3dGLEVBQUwsQ0FBUXBHLFdBQVIsQ0FBb0IsTUFBSzBHLE1BQXpCO0FBdkJxQjtBQXdCdEI7Ozs7MEJBRUs7QUFDSixhQUFPLEtBQUtOLEVBQVo7QUFDRDs7O21DQUVjO0FBQ2IsV0FBSyxJQUFJcEYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUt1RCxTQUFMLENBQWV0RCxNQUFuQyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUN4QixlQUFPQyxnQkFBUCxDQUF3QixLQUFLOEUsU0FBTCxDQUFldkQsQ0FBZixDQUF4QixFQUEyQyxJQUEzQztBQUNEO0FBQ0Y7OztzQ0FFaUI7QUFDaEIsV0FBSyxJQUFJQSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3VELFNBQUwsQ0FBZXRELE1BQW5DLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5Q3hCLGVBQU9tSCxtQkFBUCxDQUEyQixLQUFLcEMsU0FBTCxDQUFldkQsQ0FBZixDQUEzQixFQUE4QyxJQUE5QztBQUNEO0FBQ0Y7OzsrQkFFVWQsTyxFQUFTO0FBQ2xCLFVBQUksS0FBS0EsT0FBTCxLQUFpQkEsT0FBckIsRUFBOEI7QUFDNUIsYUFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsWUFBSSxLQUFLQSxPQUFULEVBQWtCO0FBQ2hCLGVBQUtrRyxFQUFMLENBQVFRLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUNBLGVBQUtDLFlBQUw7QUFDRCxTQUhELE1BR087QUFDTCxlQUFLVixFQUFMLENBQVFRLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUF4QjtBQUNBLGVBQUtFLGVBQUw7QUFDRDtBQUNGO0FBQ0Y7OzttQ0FFYztBQUNiLFdBQUtSLE1BQUwsQ0FBWXpHLEtBQVosR0FBb0JOLE9BQU93SCxVQUEzQjtBQUNBLFdBQUtULE1BQUwsQ0FBWXhHLE1BQVosR0FBcUJQLE9BQU95SCxXQUE1QjtBQUNEOzs7NkJBRVFsQyxFLEVBQUlDLEUsRUFBSUMsRSxFQUFJQyxFLEVBQUlnQyxLLEVBQU87QUFDOUIsVUFBSUMsTUFBTSxLQUFLWixNQUFMLENBQVlhLFVBQVosQ0FBdUIsSUFBdkIsQ0FBVjtBQUNBRCxVQUFJRSxXQUFKLEdBQWtCSCxTQUFTLE9BQTNCO0FBQ0FDLFVBQUlHLFNBQUo7QUFDQUgsVUFBSUksTUFBSixDQUFXeEMsRUFBWCxFQUFlQyxFQUFmO0FBQ0FtQyxVQUFJSyxNQUFKLENBQVd2QyxFQUFYLEVBQWVDLEVBQWY7QUFDQWlDLFVBQUl6RyxNQUFKO0FBQ0Q7OzsrQkFFbUI7QUFBQSxVQUFYMEIsTUFBVyx1RUFBSixFQUFJOztBQUNsQixVQUFJOUIsU0FBUzhCLE9BQU85QixNQUFQLElBQWlCLEVBQTlCO0FBQ0EsVUFBSTZHLE1BQU0sS0FBS1osTUFBTCxDQUFZYSxVQUFaLENBQXVCLElBQXZCLENBQVY7O0FBRUFELFVBQUlNLElBQUo7O0FBRUFOLFVBQUlFLFdBQUosR0FBa0JqRixPQUFPMUIsTUFBUCxLQUFrQitGLFNBQWxCLEdBQStCckUsT0FBTzFCLE1BQVAsR0FBZ0IwQixPQUFPMUIsTUFBdkIsR0FBZ0MsYUFBL0QsR0FBZ0YsYUFBbEc7QUFDQXlHLFVBQUlPLFNBQUosR0FBZ0J0RixPQUFPM0IsSUFBUCxLQUFnQmdHLFNBQWhCLEdBQTZCckUsT0FBTzNCLElBQVAsR0FBYzJCLE9BQU8zQixJQUFyQixHQUE0QixhQUF6RCxHQUEwRSxhQUExRjs7QUFFQTBHLFVBQUlHLFNBQUo7QUFDQSxXQUFLLElBQUl0RyxJQUFJLENBQWIsRUFBZ0JBLElBQUlWLE9BQU9XLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUN0QyxZQUFJMkUsSUFBSXJGLE9BQU9VLENBQVAsQ0FBUjtBQUNBLFlBQUlBLEtBQUssQ0FBVCxFQUNFbUcsSUFBSUksTUFBSixDQUFXNUIsRUFBRXBGLENBQWIsRUFBZ0JvRixFQUFFbkYsQ0FBbEIsRUFERixLQUdFMkcsSUFBSUssTUFBSixDQUFXN0IsRUFBRXBGLENBQWIsRUFBZ0JvRixFQUFFbkYsQ0FBbEI7QUFDSDtBQUNELFVBQUk0QixPQUFPekIsTUFBWCxFQUFtQndHLElBQUlRLFNBQUo7QUFDbkJSLFVBQUkxRyxJQUFKO0FBQ0EwRyxVQUFJekcsTUFBSjs7QUFFQXlHLFVBQUlTLE9BQUo7QUFDRDs7OzhCQUVTdkgsSyxFQUFPO0FBQ2YsVUFBSUMsU0FBU0QsTUFBTXdILFNBQU4sRUFBYjs7QUFFQSxVQUFJVixNQUFNLEtBQUtaLE1BQUwsQ0FBWWEsVUFBWixDQUF1QixJQUF2QixDQUFWO0FBQ0FELFVBQUlNLElBQUo7O0FBRUFOLFVBQUlXLFNBQUosQ0FBYyxHQUFkLEVBQW1CLEdBQW5COztBQUVBWCxVQUFJRSxXQUFKLEdBQWtCaEgsTUFBTUssTUFBTixJQUFnQixhQUFsQztBQUNBeUcsVUFBSU8sU0FBSixHQUFnQnJILE1BQU1JLElBQU4sSUFBYyxhQUE5Qjs7QUFFQTBHLFVBQUlHLFNBQUo7O0FBRUEsV0FBSyxJQUFJUyxJQUFJLENBQWIsRUFBZ0JBLElBQUl6SCxPQUFPVyxNQUEzQixFQUFtQzhHLEdBQW5DLEVBQXdDO0FBQ3RDLFlBQUlwQyxJQUFJckYsT0FBT3lILENBQVAsQ0FBUjtBQUNBLFlBQUlBLEtBQUssQ0FBVCxFQUNFWixJQUFJSSxNQUFKLENBQVc1QixFQUFFcEYsQ0FBRixHQUFNRixNQUFNRSxDQUF2QixFQUEwQm9GLEVBQUVuRixDQUFGLEdBQU1ILE1BQU1HLENBQXRDLEVBREYsS0FHRTJHLElBQUlLLE1BQUosQ0FBVzdCLEVBQUVwRixDQUFGLEdBQU1GLE1BQU1FLENBQXZCLEVBQTBCb0YsRUFBRW5GLENBQUYsR0FBTUgsTUFBTUcsQ0FBdEM7QUFDSDs7QUFFRCxVQUFJSCxNQUFNTSxNQUFWLEVBQWtCd0csSUFBSVEsU0FBSjs7QUFFbEJSLFVBQUkxRyxJQUFKO0FBQ0EwRyxVQUFJekcsTUFBSjs7QUFFQXlHLFVBQUlTLE9BQUo7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSVQsTUFBTSxLQUFLWixNQUFMLENBQVlhLFVBQVosQ0FBdUIsSUFBdkIsQ0FBVjtBQUNBRCxVQUFJYSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLekIsTUFBTCxDQUFZekcsS0FBaEMsRUFBdUMsS0FBS3lHLE1BQUwsQ0FBWXhHLE1BQW5EOztBQUVBLFdBQUssSUFBSWlCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLRixNQUFMLENBQVlHLE1BQWhDLEVBQXdDRCxHQUF4QyxFQUE2QztBQUMzQyxZQUFJWCxRQUFRLEtBQUtTLE1BQUwsQ0FBWUUsQ0FBWixDQUFaO0FBQ0E7QUFDQSxhQUFLaUgsU0FBTCxDQUFlNUgsS0FBZjtBQUNEOztBQUVELFVBQUksS0FBS0MsTUFBTCxDQUFZVyxNQUFoQixFQUF3QjtBQUN0QixhQUFLaUgsUUFBTCxDQUFjLEVBQUU1SCxRQUFRLEtBQUtBLE1BQWYsRUFBdUJHLE1BQU0sS0FBS0EsSUFBbEMsRUFBd0NDLFFBQVEsS0FBS0EsTUFBckQsRUFBZDs7QUFFQXlHLFlBQUlFLFdBQUosR0FBa0IsTUFBbEI7QUFDQUYsWUFBSUcsU0FBSjtBQUNBLFlBQUkzQixJQUFJLEtBQUtyRixNQUFMLENBQVksS0FBS0EsTUFBTCxDQUFZVyxNQUFaLEdBQXFCLENBQWpDLENBQVI7QUFDQWtHLFlBQUlJLE1BQUosQ0FBVzVCLEVBQUVwRixDQUFiLEVBQWdCb0YsRUFBRW5GLENBQWxCO0FBQ0EyRyxZQUFJSyxNQUFKLENBQVcsS0FBS1csT0FBaEIsRUFBeUIsS0FBS0MsT0FBOUI7QUFDQWpCLFlBQUl6RyxNQUFKOztBQUVBLFlBQUkySCxLQUFLLG9CQUFVLEtBQUtGLE9BQWYsRUFBd0IsS0FBS0MsT0FBN0IsQ0FBVDtBQUNBLFlBQUk3RSxLQUFLLEtBQUtqRCxNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsWUFBSStILEdBQUdDLFFBQUgsQ0FBWS9FLEVBQVosSUFBa0IwQyxXQUF0QixFQUFtQztBQUNqQ2tCLGNBQUlvQixHQUFKLENBQVFoRixHQUFHaEQsQ0FBWCxFQUFjZ0QsR0FBRy9DLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCOEUsS0FBS2tELEVBQUwsR0FBVSxDQUFwQztBQUNBckIsY0FBSXpHLE1BQUo7QUFDRDtBQUNGO0FBRUY7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0ksTUFBWjtBQUNEOzs7NEJBRU87QUFDTixXQUFLUixNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUtRLE1BQUwsR0FBYyxFQUFkO0FBQ0EsV0FBSzJILE1BQUw7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS25JLE1BQUwsR0FBYyxFQUFkO0FBQ0EsV0FBS21JLE1BQUw7QUFDRDs7O2dDQUV1QjtBQUFBLFVBQWQ5SCxNQUFjLHVFQUFQLEtBQU87O0FBQ3RCLFVBQUksS0FBS0wsTUFBTCxDQUFZVyxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFlBQUlaLFFBQVEsb0JBQVUsRUFBRUMsUUFBUSxLQUFLQSxNQUFmLEVBQXVCSyxRQUFRQSxNQUEvQixFQUF1Q0YsTUFBTSxLQUFLQSxJQUFsRCxFQUF3REMsUUFBUSxLQUFLQSxNQUFyRSxFQUFWLENBQVo7QUFDQSxhQUFLSSxNQUFMLENBQVl5QixJQUFaLENBQWlCbEMsS0FBakI7QUFDRDtBQUNELFdBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsV0FBS21JLE1BQUw7QUFDRDs7OzRCQUVPaEksSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS2dJLE1BQUw7QUFDRDs7OzhCQUVTL0gsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFdBQUsrSCxNQUFMO0FBQ0Q7Ozs0QkFFT2xJLEMsRUFBR0MsQyxFQUFHO0FBQ1osV0FBSyxJQUFJUSxJQUFJLEtBQUtGLE1BQUwsQ0FBWUcsTUFBWixHQUFxQixDQUFsQyxFQUFxQ0QsS0FBSyxDQUExQyxFQUE2Q0EsR0FBN0MsRUFBa0Q7QUFDaEQsWUFBSXNCLFFBQVEsS0FBS3hCLE1BQUwsQ0FBWUUsQ0FBWixDQUFaO0FBQ0EsWUFBSXNCLE1BQU1vRyxPQUFOLENBQWNuSSxDQUFkLEVBQWlCQyxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCLGlCQUFPOEIsS0FBUDtBQUNEO0FBQ0Y7QUFDRCxhQUFPLElBQVA7QUFDRDs7O2dDQUVXWixLLEVBQU87QUFDakIsVUFBSUEsTUFBTWlILE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsWUFBSWhELElBQUksb0JBQVVqRSxNQUFNa0gsT0FBaEIsRUFBeUJsSCxNQUFNbUgsT0FBL0IsQ0FBUjtBQUNBLFlBQUksS0FBS3ZJLE1BQUwsQ0FBWVcsTUFBaEIsRUFBd0I7QUFDdEIsY0FBSTBFLEVBQUUyQyxRQUFGLENBQVcsS0FBS2hJLE1BQUwsQ0FBWSxDQUFaLENBQVgsSUFBNkIyRixXQUFqQyxFQUE4QztBQUM1QyxpQkFBSzBCLFNBQUwsQ0FBZSxJQUFmO0FBQ0QsV0FGRCxNQUdLO0FBQ0gsaUJBQUtySCxNQUFMLENBQVlpQyxJQUFaLENBQWlCb0QsQ0FBakI7QUFDRDtBQUNGLFNBUEQsTUFRSztBQUNILGVBQUtyRixNQUFMLENBQVlpQyxJQUFaLENBQWlCb0QsQ0FBakI7QUFDRDtBQUNELGFBQUs4QyxNQUFMO0FBQ0Q7QUFDRjs7OzhCQUVTL0csSyxFQUFPLENBQ2hCOzs7Z0NBRVdBLEssRUFBTztBQUNqQixXQUFLeUcsT0FBTCxHQUFlekcsTUFBTWtILE9BQXJCO0FBQ0EsV0FBS1IsT0FBTCxHQUFlMUcsTUFBTW1ILE9BQXJCO0FBQ0EsV0FBS0osTUFBTDtBQUNBLFdBQUsvQixNQUFMLENBQVlFLEtBQVosQ0FBa0JrQyxJQUFsQixHQUF5QixLQUFLWCxPQUFMLEdBQWUsSUFBeEM7QUFDQSxXQUFLekIsTUFBTCxDQUFZRSxLQUFaLENBQWtCbUMsR0FBbEIsR0FBd0IsS0FBS1gsT0FBTCxHQUFlLElBQXZDOztBQUVBLFVBQUksS0FBS2hILElBQUwsS0FBYyxNQUFsQixFQUEwQixDQUV6QjtBQUNGOzs7K0JBRVVNLEssRUFBTztBQUNoQixXQUFLaUcsU0FBTDtBQUNEOzs7OEJBRVNqRyxLLEVBQU87QUFDZixVQUFJQSxNQUFNQyxHQUFOLElBQWEsR0FBYixJQUFvQixDQUFDRCxNQUFNRSxNQUEvQixFQUF1QztBQUNyQyxhQUFLb0gsU0FBTCxDQUFlLEtBQUt0SSxNQUFMLEdBQWMsSUFBZCxHQUFxQixPQUFwQztBQUNELE9BRkQsTUFHSyxJQUFJZ0IsTUFBTUMsR0FBTixJQUFhLEdBQWIsSUFBb0IsQ0FBQ0QsTUFBTUUsTUFBL0IsRUFBdUM7QUFDMUMsYUFBS3FILE9BQUwsQ0FBYSxJQUFiO0FBQ0QsT0FGSSxNQUdBLElBQUksQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOENDLFFBQTlDLENBQXVEeEgsTUFBTUMsR0FBN0QsS0FBcUUsQ0FBQ0QsTUFBTUUsTUFBaEYsRUFBd0Y7QUFDM0YsWUFBSXNGLFFBQVFoQixPQUFPaUQsU0FBU3pILE1BQU1DLEdBQWYsSUFBc0IsQ0FBN0IsQ0FBWjtBQUNBLFlBQUl1RixVQUFVVCxTQUFkLEVBQ0UsS0FBS3dDLE9BQUwsQ0FBYS9CLEtBQWI7QUFDSCxPQUpJLE1BS0E7QUFDSCxZQUFJLEtBQUs5RixJQUFMLElBQWEsTUFBakIsRUFBeUI7QUFDdkIsY0FBSU0sTUFBTUMsR0FBTixJQUFhLFFBQWIsSUFBeUIsQ0FBQ0QsTUFBTUUsTUFBcEMsRUFBNEM7QUFDMUMsaUJBQUt3SCxVQUFMO0FBQ0QsV0FGRCxNQUdLLElBQUkxSCxNQUFNQyxHQUFOLElBQWEsT0FBYixJQUF3QixDQUFDRCxNQUFNRSxNQUFuQyxFQUEyQztBQUM5QyxpQkFBSytGLFNBQUw7QUFDRDtBQUNGLFNBUEQsTUFRSyxDQUNKO0FBQ0Y7QUFDRjs7O2tDQUVhakcsSyxFQUFPO0FBQ25CQSxZQUFNMkgsY0FBTjtBQUNEOzs7Z0NBRVczSCxLLEVBQU87QUFDakIsVUFBSUEsTUFBTUssSUFBTixJQUFjLFdBQWxCLEVBQStCO0FBQzdCLGFBQUtFLFdBQUwsQ0FBaUJQLEtBQWpCO0FBQ0QsT0FGRCxNQUdLLElBQUlBLE1BQU1LLElBQU4sSUFBYyxTQUFsQixFQUE2QjtBQUNoQyxhQUFLdUgsU0FBTCxDQUFlNUgsS0FBZjtBQUNELE9BRkksTUFHQSxJQUFJQSxNQUFNSyxJQUFOLElBQWMsV0FBbEIsRUFBK0I7QUFDbEMsYUFBS3dILFdBQUwsQ0FBaUI3SCxLQUFqQjtBQUNELE9BRkksTUFHQSxJQUFJQSxNQUFNSyxJQUFOLElBQWMsVUFBbEIsRUFBOEI7QUFDakMsYUFBS3lILFVBQUwsQ0FBZ0I5SCxLQUFoQjtBQUNELE9BRkksTUFHQSxJQUFJQSxNQUFNSyxJQUFOLElBQWMsU0FBbEIsRUFBNkI7QUFDaEMsYUFBS0MsU0FBTCxDQUFlTixLQUFmO0FBQ0QsT0FGSSxNQUdBLElBQUlBLE1BQU1LLElBQU4sSUFBYyxhQUFsQixFQUFpQztBQUNwQyxhQUFLMEgsYUFBTCxDQUFtQi9ILEtBQW5CO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZeUUsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5U2Y7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVNdUQsSztBQUNKLG1CQUF1QjtBQUFBLFFBQVh0SCxNQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JCLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLc0gsU0FBTCxHQUFpQixFQUFqQjs7QUFFQSxTQUFLdkQsRUFBTCxHQUFVekcsU0FBUzBHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLFNBQUtELEVBQUwsQ0FBUUUsU0FBUixDQUFrQjFGLEdBQWxCLENBQXNCLE9BQXRCOztBQUVBLFNBQUsyRixNQUFMLEdBQWM1RyxTQUFTMEcsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsU0FBS0UsTUFBTCxDQUFZekcsS0FBWixHQUFvQnNDLE9BQU90QyxLQUFQLElBQWdCLEdBQXBDO0FBQ0EsU0FBS3lHLE1BQUwsQ0FBWXhHLE1BQVosR0FBcUJxQyxPQUFPckMsTUFBUCxJQUFpQixHQUF0Qzs7QUFFQSxTQUFLcUcsRUFBTCxDQUFRcEcsV0FBUixDQUFvQixLQUFLdUcsTUFBekI7O0FBRUEsU0FBS0csTUFBTCxHQUFjL0csU0FBUzBHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBLFNBQUtLLE1BQUwsQ0FBWUosU0FBWixDQUFzQjFGLEdBQXRCLENBQTBCLGNBQTFCOztBQUVBcEIsV0FBT0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsSUFBckM7QUFDQUQsV0FBT0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsSUFBbkM7QUFDQUQsV0FBT0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsSUFBckM7QUFDRDs7OzswQkFFSztBQUNKLGFBQU8sS0FBSzJHLEVBQVo7QUFDRDs7O3dCQUVHd0QsVyxFQUFhO0FBQ2YsV0FBS3ZILFFBQUwsQ0FBY0UsSUFBZCxDQUFtQnFILFdBQW5CO0FBQ0FBLGtCQUFZQyxZQUFaO0FBQ0EsV0FBS3BCLE1BQUw7QUFDRDs7O2tDQUVhOUYsSSxFQUFNRyxJLEVBQU1DLEksRUFBTUUsSSxFQUFNO0FBQ3BDLFVBQUlOLE9BQU9JLElBQVg7QUFBaUI7QUFBakIsbUJBQWdDLENBQUVBLElBQUYsRUFBUUosSUFBUixDQUFoQztBQUFrQkEsWUFBbEI7QUFBd0JJLFlBQXhCO0FBQUEsT0FDQSxJQUFJRCxPQUFPRyxJQUFYO0FBQWlCO0FBQWpCLG9CQUFnQyxDQUFFQSxJQUFGLEVBQVFILElBQVIsQ0FBaEM7QUFBa0JBLFlBQWxCO0FBQXdCRyxZQUF4QjtBQUFBLE9BQ0EsSUFBSTBHLFlBQVksRUFBaEI7QUFDQSxXQUFLLElBQUkzSSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3FCLFFBQUwsQ0FBY3BCLE1BQWxDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3QyxZQUFJc0IsUUFBUSxLQUFLRCxRQUFMLENBQWNyQixDQUFkLENBQVo7QUFDQSxZQUFJc0IsZ0NBQUosRUFBNEI7QUFDMUIsY0FBSUEsTUFBTXdILG1CQUFOLENBQTBCbkgsSUFBMUIsRUFBZ0NHLElBQWhDLEVBQXNDQyxJQUF0QyxFQUE0Q0UsSUFBNUMsQ0FBSixFQUF1RDtBQUNyRDBHLHNCQUFVcEgsSUFBVixDQUFlRCxLQUFmO0FBQ0FBLGtCQUFNeUgsTUFBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFdBQUtKLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUksS0FBS0EsU0FBTCxDQUFlMUksTUFBbkIsRUFBMkI7QUFDekIsYUFBSyxJQUFJRCxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzJJLFNBQUwsQ0FBZTFJLE1BQW5DLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxlQUFLMkksU0FBTCxDQUFlM0ksQ0FBZixFQUFrQmdKLFFBQWxCO0FBQ0Q7QUFDRCxhQUFLTCxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7QUFDRCxXQUFLbEIsTUFBTDtBQUNEOzs7Z0NBRVdwSSxLLEVBQU80SixTLEVBQVc7QUFDNUIsVUFBSTNKLFNBQVNELE1BQU13SCxTQUFOLEVBQWI7O0FBRUEsVUFBSVYsTUFBTSxLQUFLWixNQUFMLENBQVlhLFVBQVosQ0FBdUIsSUFBdkIsQ0FBVjtBQUNBRCxVQUFJTSxJQUFKOztBQUVBOztBQUVBTixVQUFJRyxTQUFKOztBQUVBLFdBQUssSUFBSVMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJekgsT0FBT1csTUFBM0IsRUFBbUM4RyxHQUFuQyxFQUF3QztBQUN0QyxZQUFJcEMsSUFBSXJGLE9BQU95SCxDQUFQLENBQVI7QUFDQSxZQUFJQSxLQUFLLENBQVQsRUFDRVosSUFBSUksTUFBSixDQUFXNUIsRUFBRXBGLENBQUYsR0FBTUYsTUFBTUUsQ0FBdkIsRUFBMEJvRixFQUFFbkYsQ0FBRixHQUFNSCxNQUFNRyxDQUF0QyxFQURGLEtBR0UyRyxJQUFJSyxNQUFKLENBQVc3QixFQUFFcEYsQ0FBRixHQUFNRixNQUFNRSxDQUF2QixFQUEwQm9GLEVBQUVuRixDQUFGLEdBQU1ILE1BQU1HLENBQXRDO0FBQ0g7O0FBRUQsVUFBSUgsTUFBTU0sTUFBVixFQUFrQndHLElBQUlRLFNBQUo7O0FBRWxCLFVBQUlzQyxTQUFKLEVBQWU7QUFDYjtBQUNBO0FBQ0E7QUFDRDs7QUFFRDlDLFVBQUkrQyxTQUFKLEdBQWdCLENBQWhCO0FBQ0EvQyxVQUFJRSxXQUFKLEdBQWtCaEgsTUFBTUssTUFBTixJQUFnQixhQUFsQztBQUNBeUcsVUFBSU8sU0FBSixHQUFnQnJILE1BQU1JLElBQU4sSUFBYyxhQUE5Qjs7QUFFQTBHLFVBQUkxRyxJQUFKO0FBQ0EwRyxVQUFJekcsTUFBSjs7QUFFQXlHLFVBQUlTLE9BQUo7QUFDRDs7O2dDQUVXZ0MsVyxFQUFhO0FBQ3ZCLFVBQUl6QyxNQUFNLEtBQUtaLE1BQUwsQ0FBWWEsVUFBWixDQUF1QixJQUF2QixDQUFWO0FBQ0FELFVBQUlFLFdBQUosR0FBa0J1QyxZQUFZMUYsUUFBWixHQUF1QixLQUF2QixHQUErQixNQUFqRDtBQUNBaUQsVUFBSUcsU0FBSjtBQUNBSCxVQUFJb0IsR0FBSixDQUFRcUIsWUFBWXJKLENBQVosSUFBaUIsQ0FBekIsRUFBNEJxSixZQUFZcEosQ0FBWixJQUFpQixDQUE3QyxFQUFnRCxDQUFoRCxFQUFtRCxDQUFuRCxFQUFzRDhFLEtBQUtrRCxFQUFMLEdBQVUsQ0FBaEUsRUFBbUUsS0FBbkU7QUFDQXJCLFVBQUl6RyxNQUFKO0FBQ0EsVUFBSStCLFNBQVNtSCxZQUFZbEgsU0FBWixFQUFiO0FBQ0EsVUFBSUQsTUFBSixFQUFZO0FBQ1YwRSxZQUFJRSxXQUFKLEdBQWtCdUMsWUFBWTFGLFFBQVosR0FBdUIsS0FBdkIsR0FBK0IsTUFBakQ7QUFDQWlELFlBQUlHLFNBQUo7QUFDQUgsWUFBSWpFLElBQUosQ0FBVTBHLFlBQVlySixDQUFiLEdBQWtCa0MsT0FBT2xDLENBQXpCLEdBQTZCLEdBQXRDLEVBQTRDcUosWUFBWXBKLENBQWIsR0FBa0JpQyxPQUFPakMsQ0FBekIsR0FBNkIsR0FBeEUsRUFBNkVpQyxPQUFPM0MsS0FBcEYsRUFBMkYyQyxPQUFPMUMsTUFBbEc7QUFDQW9ILFlBQUl6RyxNQUFKO0FBQ0Q7QUFDRjs7O2lDQUVZa0osVyxFQUFhSyxTLEVBQVc7QUFDbkMsVUFBSUwsc0NBQUosRUFBa0M7QUFDaEMsYUFBSyxJQUFJNUksSUFBSSxDQUFiLEVBQWdCQSxJQUFJNEksWUFBWXZILFFBQVosQ0FBcUJwQixNQUF6QyxFQUFpREQsR0FBakQsRUFBc0Q7QUFDcEQsY0FBSXNCLFFBQVFzSCxZQUFZdkgsUUFBWixDQUFxQnJCLENBQXJCLENBQVo7QUFDQSxlQUFLbUosWUFBTCxDQUFrQjdILEtBQWxCLEVBQXlCMkgsU0FBekI7QUFDRDtBQUNGLE9BTEQsTUFNSyxJQUFJTCxzQ0FBSixFQUFrQztBQUNyQyxhQUFLUSxXQUFMLENBQWlCUixXQUFqQixFQUE4QkssU0FBOUI7QUFDRDtBQUNELFVBQUlMLFlBQVkxRixRQUFoQixFQUEwQixLQUFLbUcsV0FBTCxDQUFpQlQsV0FBakI7QUFDM0I7Ozs2QkFFUTtBQUNQLFVBQUl6QyxNQUFNLEtBQUtaLE1BQUwsQ0FBWWEsVUFBWixDQUF1QixJQUF2QixDQUFWO0FBQ0FELFVBQUlhLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUt6QixNQUFMLENBQVl6RyxLQUFoQyxFQUF1QyxLQUFLeUcsTUFBTCxDQUFZeEcsTUFBbkQ7O0FBRUEsV0FBSyxJQUFJaUIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtxQixRQUFMLENBQWNwQixNQUFsQyxFQUEwQ0QsR0FBMUMsRUFBK0M7QUFDN0MsWUFBSXNCLFFBQVEsS0FBS0QsUUFBTCxDQUFjckIsQ0FBZCxDQUFaO0FBQ0EsYUFBS21KLFlBQUwsQ0FBa0I3SCxLQUFsQixFQUF5QixLQUFLZ0ksTUFBTCxJQUFlaEksS0FBeEM7QUFDRDs7QUFFRCxVQUFJLEtBQUtsQixJQUFMLElBQWEsU0FBakIsRUFBNEI7QUFDMUIrRixZQUFJTSxJQUFKO0FBQ0FOLFlBQUlXLFNBQUosQ0FBYyxHQUFkLEVBQW1CLEdBQW5CO0FBQ0FYLFlBQUlFLFdBQUosR0FBa0IsTUFBbEI7QUFDQUYsWUFBSW9ELHdCQUFKLEdBQStCLFdBQS9CO0FBQ0FwRCxZQUFJRyxTQUFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUgsWUFBSUksTUFBSixDQUFXLEtBQUtpRCxLQUFoQixFQUF1QixLQUFLQyxLQUE1QjtBQUNBdEQsWUFBSUssTUFBSixDQUFXLEtBQUtrRCxPQUFoQixFQUF5QixLQUFLRCxLQUE5QjtBQUNBdEQsWUFBSUssTUFBSixDQUFXLEtBQUtrRCxPQUFoQixFQUF5QixLQUFLQyxPQUE5QjtBQUNBeEQsWUFBSUssTUFBSixDQUFXLEtBQUtnRCxLQUFoQixFQUF1QixLQUFLRyxPQUE1QjtBQUNBeEQsWUFBSVEsU0FBSjtBQUNBUixZQUFJekcsTUFBSjtBQUNBeUcsWUFBSVMsT0FBSjtBQUNEO0FBQ0Y7OzttQ0FFYztBQUNiLFVBQUksS0FBSzBDLE1BQUwsMkJBQUosRUFBa0M7QUFDaEMsYUFBS0EsTUFBTCxDQUFZNUosTUFBWixHQUFxQixLQUFLNEosTUFBTCxDQUFZNUosTUFBWixHQUFxQixJQUFyQixHQUE0QixPQUFqRDtBQUNBLGFBQUsrSCxNQUFMO0FBQ0Q7QUFDRjs7O29DQUVldEQsRSxFQUFJQyxFLEVBQUk7QUFDdEIsV0FBSyxJQUFJcEUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUsySSxTQUFMLENBQWUxSSxNQUFuQyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsWUFBSTRKLE9BQU8sS0FBS2pCLFNBQUwsQ0FBZTNJLENBQWYsQ0FBWDtBQUNBNEosYUFBS3JLLENBQUwsSUFBVTRFLEVBQVY7QUFDQXlGLGFBQUtwSyxDQUFMLElBQVU0RSxFQUFWO0FBQ0Q7QUFDRCxXQUFLcUQsTUFBTDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLckgsSUFBTCxHQUFZLE1BQVo7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS0EsSUFBTCxHQUFZLElBQVo7QUFDRDs7O2lDQUVZdUIsSSxFQUFNRyxJLEVBQU1DLEksRUFBTUUsSSxFQUFNO0FBQ25DLFdBQUs3QixJQUFMLEdBQVksU0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQSxJQUFMLEdBQVksSUFBWjtBQUNBLFdBQUtxSCxNQUFMO0FBQ0Q7Ozs0QkFFT2xJLEMsRUFBR0MsQyxFQUFHO0FBQ1osV0FBSyxJQUFJUSxJQUFJLEtBQUtxQixRQUFMLENBQWNwQixNQUFkLEdBQXVCLENBQXBDLEVBQXVDRCxLQUFLLENBQTVDLEVBQStDQSxHQUEvQyxFQUFvRDtBQUNsRCxZQUFJc0IsUUFBUSxLQUFLRCxRQUFMLENBQWNyQixDQUFkLENBQVo7QUFDQSxZQUFJc0IsTUFBTW9HLE9BQU4sQ0FBY25JLENBQWQsRUFBaUJDLENBQWpCLENBQUosRUFBeUI7QUFDdkIsaUJBQU84QixLQUFQO0FBQ0Q7QUFDRjtBQUNELGFBQU8sSUFBUDtBQUNEOzs7Z0NBRVdaLEssRUFBTztBQUNqQixXQUFLZ0osT0FBTCxHQUFlaEosTUFBTW1KLEtBQU4sR0FBYyxLQUFLekUsRUFBTCxDQUFRbEYsVUFBckM7QUFDQSxXQUFLeUosT0FBTCxHQUFlakosTUFBTW9KLEtBQU4sR0FBYyxLQUFLMUUsRUFBTCxDQUFRakYsU0FBckM7O0FBRUEsV0FBS3FKLEtBQUwsR0FBYSxLQUFLRSxPQUFsQjtBQUNBLFdBQUtELEtBQUwsR0FBYSxLQUFLRSxPQUFsQjs7QUFFQSxVQUFJSSxNQUFNLEtBQUtyQyxPQUFMLENBQWEsS0FBS2dDLE9BQWxCLEVBQTJCLEtBQUtDLE9BQWhDLENBQVY7QUFDQSxVQUFJSSxHQUFKLEVBQVM7QUFDUCxZQUFJLEtBQUtwQixTQUFMLENBQWVULFFBQWYsQ0FBd0I2QixHQUF4QixDQUFKLEVBQWtDLENBRWpDLENBRkQsTUFFTztBQUNMLGVBQUtmLFFBQUw7QUFDQSxlQUFLTCxTQUFMLEdBQWlCLENBQUVvQixHQUFGLENBQWpCO0FBQ0FBLGNBQUloQixNQUFKO0FBQ0Q7QUFDRixPQVJELE1BU0s7QUFDSCxhQUFLQyxRQUFMO0FBQ0Q7O0FBRUQsV0FBS3ZCLE1BQUw7QUFDRDs7OzhCQUVTL0csSyxFQUFPO0FBQ2YsVUFBSSxLQUFLTixJQUFMLElBQWEsTUFBakIsRUFDRSxLQUFLNEosVUFBTCxHQURGLEtBRUssSUFBSSxLQUFLNUosSUFBTCxJQUFhLFNBQWpCLEVBQTRCO0FBQy9CLGFBQUs2SixhQUFMLENBQW1CLEtBQUtULEtBQXhCLEVBQStCLEtBQUtDLEtBQXBDLEVBQTJDLEtBQUtDLE9BQWhELEVBQXlELEtBQUtDLE9BQTlEO0FBQ0EsYUFBS08sYUFBTDtBQUNEO0FBQ0Y7OztnQ0FFV3hKLEssRUFBTztBQUNqQixXQUFLZ0osT0FBTCxHQUFlaEosTUFBTW1KLEtBQU4sR0FBYyxLQUFLekUsRUFBTCxDQUFRbEYsVUFBckM7QUFDQSxXQUFLeUosT0FBTCxHQUFlakosTUFBTW9KLEtBQU4sR0FBYyxLQUFLMUUsRUFBTCxDQUFRakYsU0FBckM7O0FBRUEsV0FBS2dLLE1BQUwsR0FBYyxLQUFLQyxLQUFMLEdBQWEsS0FBS1YsT0FBTCxHQUFlLEtBQUtVLEtBQWpDLEdBQXlDLENBQXZEO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEtBQUtDLEtBQUwsR0FBYSxLQUFLWCxPQUFMLEdBQWUsS0FBS1csS0FBakMsR0FBeUMsQ0FBdkQ7O0FBRUEsVUFBSTVKLE1BQU02SixPQUFOLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLFlBQUksS0FBS25LLElBQUwsSUFBYSxNQUFqQixFQUF5QjtBQUN2QixjQUFJLEtBQUt1SSxTQUFMLENBQWUxSSxNQUFuQixFQUEyQjtBQUN6QixpQkFBS3VLLGVBQUwsQ0FBcUIsS0FBS0wsTUFBMUIsRUFBa0MsS0FBS0UsTUFBdkM7QUFDRDtBQUNGLFNBSkQsTUFLSyxJQUFJLEtBQUtqSyxJQUFMLElBQWEsU0FBakIsRUFBNEI7QUFDL0IsZUFBS3FILE1BQUw7QUFDRCxTQUZJLE1BR0E7QUFDSCxjQUFJdEQsS0FBSyxLQUFLdUYsT0FBTCxHQUFlLEtBQUtGLEtBQTdCO0FBQ0EsY0FBSXBGLEtBQUssS0FBS3VGLE9BQUwsR0FBZSxLQUFLRixLQUE3QjtBQUNBLGNBQUksS0FBS2QsU0FBTCxDQUFlMUksTUFBbkIsRUFBMkI7QUFDekIsZ0JBQUlxRSxLQUFLbUcsR0FBTCxDQUFTdEcsRUFBVCxLQUFnQixDQUFoQixJQUFxQkcsS0FBS21HLEdBQUwsQ0FBU3JHLEVBQVQsS0FBZ0IsQ0FBekMsRUFBNEM7QUFDMUMsbUJBQUtzRyxTQUFMO0FBQ0EsbUJBQUtGLGVBQUwsQ0FBcUJyRyxFQUFyQixFQUF5QkMsRUFBekI7QUFDRDtBQUNGLFdBTEQsTUFNSztBQUNILGlCQUFLdUcsWUFBTCxDQUFrQixLQUFLbkIsS0FBdkIsRUFBOEIsS0FBS0MsS0FBbkMsRUFBMEMsS0FBS0QsS0FBTCxHQUFhckYsRUFBdkQsRUFBMkQsS0FBS3NGLEtBQUwsR0FBYXJGLEVBQXhFO0FBQ0Q7QUFDRjtBQUNGLE9BdEJELE1BdUJLO0FBQ0gsWUFBSTJGLE1BQU0sS0FBS3JDLE9BQUwsQ0FBYSxLQUFLZ0MsT0FBbEIsRUFBMkIsS0FBS0MsT0FBaEMsQ0FBVjtBQUNBLFlBQUlJLEdBQUosRUFBUztBQUNQLGVBQUtULE1BQUwsR0FBY1MsR0FBZDtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUksS0FBS1QsTUFBVCxFQUFpQjtBQUNmLGlCQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFLYyxLQUFMLEdBQWEsS0FBS1YsT0FBbEI7QUFDQSxXQUFLWSxLQUFMLEdBQWEsS0FBS1gsT0FBbEI7QUFFRDs7OzhCQUVTakosSyxFQUFPO0FBQ2YsVUFBSUEsTUFBTUMsR0FBTixJQUFhLEdBQWIsSUFBb0IsQ0FBQ0QsTUFBTUUsTUFBL0IsRUFBdUM7QUFDckMsYUFBS2dLLFlBQUw7QUFDRDtBQUNGOzs7Z0NBRVdsSyxLLEVBQU87QUFDakIsVUFBSUEsTUFBTUssSUFBTixJQUFjLFdBQWxCLEVBQStCO0FBQzdCLGFBQUtFLFdBQUwsQ0FBaUJQLEtBQWpCO0FBQ0QsT0FGRCxNQUdLLElBQUlBLE1BQU1LLElBQU4sSUFBYyxTQUFsQixFQUE2QjtBQUNoQyxhQUFLdUgsU0FBTCxDQUFlNUgsS0FBZjtBQUNELE9BRkksTUFHQSxJQUFJQSxNQUFNSyxJQUFOLElBQWMsV0FBbEIsRUFBK0I7QUFDbEMsYUFBS3dILFdBQUwsQ0FBaUI3SCxLQUFqQjtBQUNELE9BRkksTUFHQSxJQUFJQSxNQUFNSyxJQUFOLElBQWMsU0FBbEIsRUFBNkI7QUFDaEMsYUFBS0MsU0FBTCxDQUFlTixLQUFmO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZZ0ksSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFTVG1DLEc7Ozs7Ozs7NEJBQ1c5SixJLEVBQU0rSixVLEVBQVk7QUFDL0IsVUFBSTFGLEtBQUt6RyxTQUFTb00sZUFBVCxDQUF5Qiw0QkFBekIsRUFBdURoSyxJQUF2RCxDQUFUO0FBQ0EsV0FBSyxJQUFJaUssSUFBVCxJQUFpQkYsVUFBakIsRUFBNkI7QUFDM0IxRixXQUFHNkYsWUFBSCxDQUFnQkQsSUFBaEIsRUFBc0JGLFdBQVdFLElBQVgsQ0FBdEI7QUFDRDtBQUNELGFBQU81RixFQUFQO0FBQ0Q7Ozt3QkFFVTBGLFUsRUFBWTtBQUNyQixVQUFJSSxNQUFNdk0sU0FBU29NLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVELEtBQXZELENBQVY7QUFDQUcsVUFBSUQsWUFBSixDQUFpQixhQUFqQixFQUErQiw4QkFBL0I7QUFDQSxXQUFLLElBQUlELElBQVQsSUFBaUJGLFVBQWpCLEVBQTZCO0FBQzNCSSxZQUFJRCxZQUFKLENBQWlCRCxJQUFqQixFQUF1QkYsV0FBV0UsSUFBWCxDQUF2QjtBQUNEO0FBQ0QsYUFBT0UsR0FBUDtBQUNEOzs7Ozs7a0JBR1lMLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CZjtBQUNBOztBQUVBLFNBQVNuSSxjQUFULENBQXdCcEQsTUFBeEIsRUFBZ0M2TCxLQUFoQyxFQUF1Q0MsS0FBdkMsRUFBOEM7QUFDNUMsTUFBSXBMLFVBQUo7QUFBQSxNQUFPK0csVUFBUDtBQUFBLE1BQVVzRSxJQUFJLENBQWQ7QUFDQSxPQUFLLElBQUlyTCxLQUFJLENBQVIsRUFBVytHLEtBQUl6SCxPQUFPVyxNQUFQLEdBQWdCLENBQXBDLEVBQXVDRCxLQUFJVixPQUFPVyxNQUFsRCxFQUEwRDhHLEtBQUkvRyxJQUE5RCxFQUFtRTtBQUNqRSxRQUFNVixPQUFPVSxFQUFQLEVBQVVSLENBQVYsR0FBYzRMLEtBQWYsSUFBMEI5TCxPQUFPeUgsRUFBUCxFQUFVdkgsQ0FBVixHQUFjNEwsS0FBekMsSUFDREQsUUFBUSxDQUFDN0wsT0FBT3lILEVBQVAsRUFBVXhILENBQVYsR0FBY0QsT0FBT1UsRUFBUCxFQUFVVCxDQUF6QixLQUErQjZMLFFBQVE5TCxPQUFPVSxFQUFQLEVBQVVSLENBQWpELEtBQXVERixPQUFPeUgsRUFBUCxFQUFVdkgsQ0FBVixHQUFjRixPQUFPVSxFQUFQLEVBQVVSLENBQS9FLElBQW9GRixPQUFPVSxFQUFQLEVBQVVULENBRHpHLEVBRUU4TCxJQUFJLENBQUNBLENBQUw7QUFDSDtBQUNELFNBQU9BLENBQVA7QUFDRDs7QUFFRCxTQUFTNUksdUJBQVQsQ0FBaUNzQixFQUFqQyxFQUFxQ0MsRUFBckMsRUFBeUNDLEVBQXpDLEVBQTZDQyxFQUE3QyxFQUFpRHZDLElBQWpELEVBQXVERyxJQUF2RCxFQUE2REMsSUFBN0QsRUFBbUVFLElBQW5FLEVBQXlFO0FBQ3ZFO0FBQ0EsTUFBSzhCLE1BQU1wQyxJQUFOLElBQWNzQyxNQUFNdEMsSUFBckIsSUFBK0JxQyxNQUFNbEMsSUFBTixJQUFjb0MsTUFBTXBDLElBQW5ELElBQ0NpQyxNQUFNaEMsSUFBTixJQUFja0MsTUFBTWxDLElBRHJCLElBQytCaUMsTUFBTS9CLElBQU4sSUFBY2lDLE1BQU1qQyxJQUR2RCxFQUVFLE9BQU8sS0FBUDs7QUFFRixNQUFJcUosSUFBSSxDQUFDcEgsS0FBS0YsRUFBTixLQUFhQyxLQUFLRixFQUFsQixDQUFSOztBQUVBLE1BQUl2RSxJQUFJOEwsS0FBSzNKLE9BQU9vQyxFQUFaLElBQWtCQyxFQUExQjtBQUNBLE1BQUl4RSxJQUFJc0MsSUFBSixJQUFZdEMsSUFBSXlDLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUJ6QyxNQUFJOEwsS0FBS3ZKLE9BQU9nQyxFQUFaLElBQWtCQyxFQUF0QjtBQUNBLE1BQUl4RSxJQUFJc0MsSUFBSixJQUFZdEMsSUFBSXlDLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUIsTUFBSTFDLElBQUksQ0FBQ3VDLE9BQU9rQyxFQUFSLElBQWNzSCxDQUFkLEdBQWtCdkgsRUFBMUI7QUFDQSxNQUFJeEUsSUFBSW9DLElBQUosSUFBWXBDLElBQUl3QyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCeEMsTUFBSSxDQUFDMEMsT0FBTytCLEVBQVIsSUFBY3NILENBQWQsR0FBa0J2SCxFQUF0QjtBQUNBLE1BQUl4RSxJQUFJb0MsSUFBSixJQUFZcEMsSUFBSXdDLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUIsU0FBTyxLQUFQO0FBQ0Q7O2tCQUVjO0FBQ2JVLDJCQUF5QkEsdUJBRFo7QUFFYkMsa0JBQWdCQTtBQUZILEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJztcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuLy8gaW1wb3J0IEdyYXBoaWMgZnJvbSAnLi9kaXNwbGF5L2dyYXBoaWMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9kaXNwbGF5L3RleHQnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gIH1cblxuICBpbml0RWxlbWVudHMoKSB7XG4gICAgdGhpcy5kb20uYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSh7IHdpZHRoOiA0ODAsIGhlaWdodDogNDgwIH0pO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnN0YWdlLmRvbSgpKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5kb20oKSk7XG5cbiAgICAvLyB0aGlzLnBhcGVyLm9uKCdwYXRocycsIChwYXRocykgPT4ge1xuICAgIC8vICAgdGhpcy5jcmVhdGVTaGFwZShwYXRocyk7XG4gICAgLy8gICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgLy8gbGV0IGxhYmVsID0gbmV3IFRleHQoeyB0aXRsZTogJ2hlbGxvJyB9KTtcbiAgICAvLyBsYWJlbC54ID0gMjUwO1xuICAgIC8vIGxhYmVsLnkgPSAxMDA7XG4gICAgLy8gdGhpcy5zdGFnZS5hZGQobGFiZWwpO1xuXG4gICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHtcbiAgICAgIHBvaW50czogWyB7IHg6IDAsIHk6IDAgfSwgeyB4OiA2MCwgeTogMCB9LCB7IHg6IDQwLCB5OiA0MCB9LCB7IHg6IDIwLCB5OiAxMCB9IF0sXG4gICAgICBmaWxsOiAnI2NjY2NjYycsXG4gICAgICBzdHJva2U6ICdibGFjaycsXG4gICAgICBjbG9zZWQ6IHRydWVcbiAgICB9KTtcbiAgICBzaGFwZS54ID0gNjA7XG4gICAgc2hhcGUueSA9IDgwO1xuICAgIHRoaXMuc3RhZ2UuYWRkKHNoYXBlKTtcblxuICAgIHNoYXBlID0gbmV3IFNoYXBlKHtcbiAgICAgIHBvaW50czogWyB7IHg6IDAsIHk6IDAgfSwgeyB4OiA2MCwgeTogMjAgfSwgeyB4OiAxMDAsIHk6IDIwIH0sIHsgeDogMTAwLCB5OiA3MCB9IF0sXG4gICAgICBmaWxsOiAnI2NjY2NjYycsXG4gICAgICBzdHJva2U6IG51bGwsXG4gICAgICBjbG9zZWQ6IHRydWVcbiAgICB9KTtcbiAgICBzaGFwZS54ID0gMTUwO1xuICAgIHNoYXBlLnkgPSAxMDA7XG4gICAgdGhpcy5zdGFnZS5hZGQoc2hhcGUpO1xuICB9XG5cbiAgZ3JhYlBhcGVyU2hhcGVzKCkge1xuICAgIGxldCBzdGFnZUVsID0gdGhpcy5zdGFnZS5kb20oKTtcbiAgICBsZXQgc2hhcGVzID0gdGhpcy5wYXBlci5nZXRTaGFwZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgc2hhcGUueCAtPSBzdGFnZUVsLm9mZnNldExlZnQ7XG4gICAgICBzaGFwZS55IC09IHN0YWdlRWwub2Zmc2V0VG9wO1xuICAgICAgdGhpcy5zdGFnZS5hZGQoc2hhcGUpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSAncGFwZXInO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMuZ3JhYlBhcGVyU2hhcGVzKCk7XG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnNob3dQYXBlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy50b2dnbGVQYXBlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgICAgdGhpcy5wYXBlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGFnZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBsZXQgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgLy8gbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuICAgIC8vIGNvbnNvbGUubG9nKHgsIHkpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJyk7XG4gIGxldCBhcHAgPSBuZXcgQXBwKCk7XG4gIGFwcC5pbml0KCk7XG59KTtcbiIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYWRkKGNoaWxkKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBib3VuZHMgPSBjaGlsZC5nZXRCb3VuZHMoKTtcbiAgICAgIHJlY3RzLnB1c2goYm91bmRzKTtcbiAgICB9XG5cbiAgICBpZiAocmVjdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmVjdCA9IHJlY3RzW2ldO1xuICAgICAgICB4bWluID0gcmVjdC54IDwgeG1pbiA/IHJlY3QueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSByZWN0LnkgPCB5bWluID8gcmVjdC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHJlY3QueCArIHJlY3Qud2lkdGggPiB4bWF4ID8gcmVjdC54ICsgcmVjdC53aWR0aCA6IHhtYXg7XG4gICAgICAgIHltYXggPSByZWN0LnkgKyByZWN0LmhlaWdodCA+IHltYXggPyByZWN0LnkgKyByZWN0LmhlaWdodCA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluICsgdGhpcy54LCB5bWluICsgdGhpcy55LCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUG9pbnRMaXN0IGZyb20gJy4uL2dlb20vcG9pbnRfbGlzdCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBTaGFwZSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZpbGwgPSBwYXJhbXMuZmlsbCB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gcGFyYW1zLnN0cm9rZSB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBwYXJhbXMuc3Ryb2tlV2lkdGggfHwgMTtcbiAgICB0aGlzLmNsb3NlZCA9IHBhcmFtcy5jbG9zZWQgfHwgZmFsc2U7XG5cbiAgICB0aGlzLnBvaW50TGlzdCA9IG5ldyBQb2ludExpc3QocGFyYW1zLnBvaW50cyk7XG4gICAgLy8gbGV0IGJvdW5kcyA9IHRoaXMucG9pbnRMaXN0LmdldEJvdW5kcygpO1xuICAgIC8vIHRoaXMueCA9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICAvLyB0aGlzLnkgPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgIC8vXG4gICAgLy8gbGV0IHBvaW50cyA9IHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgICAvL1xuICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAvLyAgIHAueCAtPSB0aGlzLng7XG4gICAgLy8gICBwLnkgLT0gdGhpcy55O1xuICAgIC8vIH1cbiAgfVxuXG4gIGdldFBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHJldHVybiB0aGlzLnBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgfVxuXG4gIGludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIGlmICh4bWluID4geG1heCkgW3htaW4sIHhtYXhdID0gWyB4bWF4LCB4bWluIF07XG4gICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgICBsZXQgcG9pbnRzID0gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcDAgPSBwb2ludHNbaSAtIDFdO1xuICAgICAgbGV0IHAxID0gcG9pbnRzW2ldO1xuICAgICAgaWYgKFV0aWwubGluZUludGVyc2VjdHNSZWN0YW5nbGUocDAueCwgcDAueSwgcDEueCwgcDEueSwgeG1pbiAtIHRoaXMueCwgeW1pbiAtIHRoaXMueSwgeG1heCAtIHRoaXMueCwgeW1heCAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gICAgaWYgKHRoaXMuZmlsbCkge1xuICAgICAgcmV0dXJuIFV0aWwucG9pbnRJblBvbHlnb24ocG9pbnRzLCB4IC0gdGhpcy54LCB5IC0gdGhpcy55KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLmNvbnRlbnQpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgeyBFdmVudCwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZXZlbnRzJztcblxuY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzLl94ID0gdmFsdWU7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZGVkVG9TdGFnZSgpIHtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybTtcbiIsIlxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJhbXMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbiAgZW1pdCh0eXBlLCAuLi5hcmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICBpZiAobGlzdGVuZXIudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyB0eXBlOiB0eXBlLCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEV2ZW50RGlzcGF0Y2hlciwgRXZlbnQgfTtcbiIsIlxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICB9XG5cbiAgaW50ZXJzZWN0c0xpbmVTZWdtZW50KHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgfVxuXG4gIGNvbnRhaW5zUG9pbnQoeCwgeSkge1xuICAgIGxldCBkeCA9IHggLSB0aGlzLng7XG4gICAgbGV0IGR5ID0geSAtIHRoaXMueTtcbiAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgcmV0dXJuIGQgPCB0aGlzLnI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiXG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkaXN0YW5jZShwb2ludCkge1xuICAgIGxldCBkeCA9IHRoaXMueCAtIHBvaW50Lng7XG4gICAgbGV0IGR5ID0gdGhpcy55IC0gcG9pbnQueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9yZWN0YW5nbGUnO1xuXG5jbGFzcyBQb2ludExpc3Qge1xuICBjb25zdHJ1Y3Rvcihwb2ludHMpIHtcbiAgICB0aGlzLnBvaW50cyA9IHBvaW50cyB8fCBbXTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSBwLnkgPCB5bWluID8gcC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcC55ID4geW1heCA/IHAueSA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50TGlzdDtcbiIsIlxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBncm93KGFtb3VudCkge1xuICAgIHRoaXMueCAtPSBhbW91bnQ7XG4gICAgdGhpcy55IC09IGFtb3VudDtcbiAgICB0aGlzLndpZHRoICs9IGFtb3VudCAqIDI7XG4gICAgdGhpcy5oZWlnaHQgKz0gYW1vdW50ICogMjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJcbmNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkb3QodmVjdG9yKSB7XG4gICAgcmV0dXJuICh0aGlzLnggKiB2ZWN0b3IueCArIHRoaXMueSAqIHZlY3Rvci55KTtcbiAgfVxuXG4gIG1hZygpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBwcm9qZWN0KHZlY3Rvcikge1xuICAgIGxldCBkID0gdmVjdG9yLmRvdCh2ZWN0b3IpO1xuICAgIGlmIChkID4gMCkge1xuICAgICAgbGV0IHJhdGlvID0gdGhpcy5kb3QodmVjdG9yKSAvIGQ7XG4gICAgICAvLyByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHJhdGlvIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3I7XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi9nZW9tL3ZlY3Rvcic7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vZ2VvbS9jaXJjbGUnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5cbmxldCBTTkFQX1JBRElVUyA9IDM7XG5sZXQgQ09MT1JTID0gW1xuICAnd2hpdGUnLFxuICAnI2NjY2NjYycsXG4gICcjOTk5OTk5JyxcbiAgJyM2NjY2NjYnLFxuICAnIzMzMzMzMycsXG4gICdibGFjaydcbl07XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLmZpbGwgPSBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gQ09MT1JTWzVdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5hZGp1c3RDYW52YXMoKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5zZXRWaXNpYmxlKHBhcmFtcy52aXNpYmxlICE9PSB1bmRlZmluZWQgPyBwYXJhbXMudmlzaWJsZSA6IHRydWUpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLCAnZGJsY2xpY2snLCAnY29udGV4dG1lbnUnIF07XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BhcGVyLWN1cnNvcicpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGp1c3RDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBkcmF3TGluZSh4MSwgeTEsIHgyLCB5MiwgY29sb3IpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdQYXRoKHBhcmFtcz17fSkge1xuICAgIGxldCBwb2ludHMgPSBwYXJhbXMucG9pbnRzIHx8IFtdO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHBhcmFtcy5zdHJva2UgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuc3Ryb2tlID8gcGFyYW1zLnN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gcGFyYW1zLmZpbGwgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuZmlsbCA/IHBhcmFtcy5maWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3U2hhcGUoc2hhcGUpIHtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgLy8gdGhpcy5kcmF3UGF0aCh7IHBvaW50czogc2hhcGUucG9pbnRzLCBmaWxsOiBzaGFwZS5maWxsLCBzdHJva2U6IHNoYXBlLnN0cm9rZSwgY2xvc2VkOiBzaGFwZS5jbG9zZWQgfSk7XG4gICAgICB0aGlzLmRyYXdTaGFwZShzaGFwZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kcmF3UGF0aCh7IHBvaW50czogdGhpcy5wb2ludHMsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSB9KTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvcngsIHRoaXMuY3Vyc29yeSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGxldCBjcCA9IG5ldyBQb2ludCh0aGlzLmN1cnNvcngsIHRoaXMuY3Vyc29yeSk7XG4gICAgICBsZXQgcDAgPSB0aGlzLnBvaW50c1swXTtcbiAgICAgIGlmIChjcC5kaXN0YW5jZShwMCkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICBjdHguYXJjKHAwLngsIHAwLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgZ2V0U2hhcGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNoYXBlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY2FuY2VsUGF0aCgpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjbG9zZVBhdGgoY2xvc2VkPWZhbHNlKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7IHBvaW50czogdGhpcy5wb2ludHMsIGNsb3NlZDogY2xvc2VkLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG4gICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICB9XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0RmlsbChmaWxsKSB7XG4gICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0U3Ryb2tlKHN0cm9rZSkge1xuICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgU05BUF9SQURJVVMpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3J5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvcnggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yeSArICdweCc7XG5cbiAgICBpZiAodGhpcy5tb2RlICE9PSAnZHJhdycpIHtcblxuICAgIH1cbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5zZXRTdHJva2UodGhpcy5zdHJva2UgPyBudWxsIDogJ2JsYWNrJylcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICcwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnNldEZpbGwobnVsbCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXS5pbmNsdWRlcyhldmVudC5rZXkpICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIGxldCBjb2xvciA9IENPTE9SU1twYXJzZUludChldmVudC5rZXkpIC0gMV07XG4gICAgICBpZiAoY29sb3IgIT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhpcy5zZXRGaWxsKGNvbG9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdkcmF3Jykge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdFc2NhcGUnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgICB0aGlzLmNhbmNlbFBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2Rpc3BsYXkvZ3JvdXAnO1xuXG5jbGFzcyBTdGFnZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2UnKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSBwYXJhbXMud2lkdGggfHwgMzIwO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHBhcmFtcy5oZWlnaHQgfHwgMjAwO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3N0YWdlLWN1cnNvcicpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkKHN0YWdlT2JqZWN0KSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKHN0YWdlT2JqZWN0KTtcbiAgICBzdGFnZU9iamVjdC5hZGRlZFRvU3RhZ2UoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2VsZWN0TWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICBpZiAoeW1pbiA+IHltYXgpIFt5bWluLCB5bWF4XSA9IFsgeW1heCwgeW1pbiBdO1xuICAgIGxldCBzZWxlY3Rpb24gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgICBpZiAoY2hpbGQuaW50ZXJzZWN0c1JlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSkge1xuICAgICAgICAgIHNlbGVjdGlvbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICBjaGlsZC5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25baV0uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXJTaGFwZShzaGFwZSwgaGlnaGxpZ2h0KSB7XG4gICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIC8vIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBpZiAoaGlnaGxpZ2h0KSB7XG4gICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSAnY3lhbic7XG4gICAgICAvLyBjdHgubGluZVdpZHRoID0gNDtcbiAgICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHMoc3RhZ2VPYmplY3QpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdGFnZU9iamVjdC5zZWxlY3RlZCA/ICdyZWQnIDogJ2JsdWUnO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHN0YWdlT2JqZWN0LnggPj4gMCwgc3RhZ2VPYmplY3QueSA+PiAwLCAzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBsZXQgYm91bmRzID0gc3RhZ2VPYmplY3QuZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcykge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3RhZ2VPYmplY3Quc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KChzdGFnZU9iamVjdC54KSArIGJvdW5kcy54ICsgMC41LCAoc3RhZ2VPYmplY3QueSkgKyBib3VuZHMueSArIDAuNSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJPYmplY3Qoc3RhZ2VPYmplY3QsIGhpZ2hsaWdodCkge1xuICAgIGlmIChzdGFnZU9iamVjdCBpbnN0YW5jZW9mIEdyb3VwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWdlT2JqZWN0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHN0YWdlT2JqZWN0LmNoaWxkcmVuW2ldO1xuICAgICAgICB0aGlzLnJlbmRlck9iamVjdChjaGlsZCwgaGlnaGxpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhZ2VPYmplY3QgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgdGhpcy5yZW5kZXJTaGFwZShzdGFnZU9iamVjdCwgaGlnaGxpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHN0YWdlT2JqZWN0LnNlbGVjdGVkKSB0aGlzLnJlbmRlckhpbnRzKHN0YWdlT2JqZWN0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgdGhpcy5yZW5kZXJPYmplY3QoY2hpbGQsIHRoaXMudGFyZ2V0ID09IGNoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdleGNsdXNpb24nO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgLy8gY3R4Lm1vdmVUbyh0aGlzLm1hcnF1ZWVbMF0sIHRoaXMubWFycXVlZVsxXSk7XG4gICAgICAvLyBjdHgubGluZVRvKHRoaXMubWFycXVlZVsyXSwgdGhpcy5tYXJxdWVlWzFdKTtcbiAgICAgIC8vIGN0eC5saW5lVG8odGhpcy5tYXJxdWVlWzJdLCB0aGlzLm1hcnF1ZWVbM10pO1xuICAgICAgLy8gY3R4LmxpbmVUbyh0aGlzLm1hcnF1ZWVbMF0sIHRoaXMubWFycXVlZVszXSk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMuZG93blgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuZG93blgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVN0cm9rZSgpIHtcbiAgICBpZiAodGhpcy50YXJnZXQgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgdGhpcy50YXJnZXQuc3Ryb2tlID0gdGhpcy50YXJnZXQuc3Ryb2tlID8gbnVsbCA6ICdibGFjayc7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgaXRlbS54ICs9IGR4O1xuICAgICAgaXRlbS55ICs9IGR5O1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYmVnaW5EcmFnKCkge1xuICAgIHRoaXMubW9kZSA9ICdkcmFnJztcbiAgfVxuXG4gIGNhbmNlbERyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgfVxuXG4gIGJlZ2luTWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgdGhpcy5tb2RlID0gJ21hcnF1ZWUnO1xuICB9XG5cbiAgY2FuY2VsTWFycXVlZSgpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5oaXRUZXN0KHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbC5vZmZzZXRUb3A7XG5cbiAgICB0aGlzLmRvd25YID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMuZG93blkgPSB0aGlzLmN1cnNvclk7XG5cbiAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAgICAgaGl0LnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpXG4gICAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLnNlbGVjdE1hcnF1ZWUodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgdGhpcy5jYW5jZWxNYXJxdWVlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgdGhpcy5kZWx0YVggPSB0aGlzLmxhc3RYID8gdGhpcy5jdXJzb3JYIC0gdGhpcy5sYXN0WCA6IDA7XG4gICAgdGhpcy5kZWx0YVkgPSB0aGlzLmxhc3RZID8gdGhpcy5jdXJzb3JZIC0gdGhpcy5sYXN0WSA6IDA7XG5cbiAgICBpZiAoZXZlbnQuYnV0dG9ucyAmIDEpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeSh0aGlzLmRlbHRhWCwgdGhpcy5kZWx0YVkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5jdXJzb3JYIC0gdGhpcy5kb3duWDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5jdXJzb3JZIC0gdGhpcy5kb3duWTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPj0gMiB8fCBNYXRoLmFicyhkeSkgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5iZWdpbkRyYWcoKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuYmVnaW5NYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuZG93blggKyBkeCwgdGhpcy5kb3duWSArIGR5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBoaXQgPSB0aGlzLmhpdFRlc3QodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgaWYgKGhpdCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IGhpdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubGFzdFggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMuY3Vyc29yWTtcblxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy50b2dnbGVTdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIiwiXG4vLyBDb3B5cmlnaHQgKGMpIDE5NzAtMjAwMywgV20uIFJhbmRvbHBoIEZyYW5rbGluXG4vLyBodHRwczovL3dyZi5lY3NlLnJwaS5lZHUvL1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sXG5cbmZ1bmN0aW9uIHBvaW50SW5Qb2x5Z29uKHBvaW50cywgdGVzdHgsIHRlc3R5KSB7XG4gIGxldCBpLCBqLCBjID0gMDtcbiAgZm9yIChsZXQgaSA9IDAsIGogPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICBpZiAoKChwb2ludHNbaV0ueSA+IHRlc3R5KSAhPSAocG9pbnRzW2pdLnkgPiB0ZXN0eSkpICYmXG4gICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICBjID0gIWM7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlKHgxLCB5MSwgeDIsIHkyLCB4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gIC8vIENvbXBsZXRlbHkgb3V0c2lkZS5cbiAgaWYgKCh4MSA8PSB4bWluICYmIHgyIDw9IHhtaW4pIHx8ICh5MSA8PSB5bWluICYmIHkyIDw9IHltaW4pIHx8XG4gICAgICAoeDEgPj0geG1heCAmJiB4MiA+PSB4bWF4KSB8fCAoeTEgPj0geW1heCAmJiB5MiA+PSB5bWF4KSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG0gPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG5cbiAgdmFyIHkgPSBtICogKHhtaW4gLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB5ID0gbSAqICh4bWF4IC0geDEpICsgeTE7XG4gIGlmICh5ID4geW1pbiAmJiB5IDwgeW1heCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHggPSAoeW1pbiAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB4ID0gKHltYXggLSB5MSkgLyBtICsgeDE7XG4gIGlmICh4ID4geG1pbiAmJiB4IDwgeG1heCkgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlOiBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSxcbiAgcG9pbnRJblBvbHlnb246IHBvaW50SW5Qb2x5Z29uXG59XG4iXSwic291cmNlUm9vdCI6IiJ9