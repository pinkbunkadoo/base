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

var _paper = __webpack_require__(/*! ./paper */ "./src/paper.js");

var _paper2 = _interopRequireDefault(_paper);

var _shape2 = __webpack_require__(/*! ./display/shape */ "./src/display/shape.js");

var _shape3 = _interopRequireDefault(_shape2);

var _group = __webpack_require__(/*! ./display/group */ "./src/display/group.js");

var _group2 = _interopRequireDefault(_group);

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

      var group = new _group2.default();

      var shape = new _shape3.default({
        points: [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 40, y: 40 }, { x: 20, y: 10 }],
        fill: '#cccccc',
        stroke: 'black',
        closed: true
      });
      shape.x = -60;
      shape.y = 80;
      group.add(shape);

      shape = new _shape3.default({
        points: [{ x: 0, y: 0 }, { x: 60, y: 20 }, { x: 100, y: 20 }, { x: 100, y: 70 }],
        fill: '#cccccc',
        stroke: null,
        closed: true
      });
      shape.x = 150;
      shape.y = 100;
      group.add(shape);

      this.stage.add(group);

      group.x = 75;
      group.y = 50;
    }
  }, {
    key: 'grabPaperShapes',
    value: function grabPaperShapes() {
      var stageEl = this.stage.dom();
      var shapes = this.paper.getShapes();

      if (shapes.length) {
        var group = new _group2.default();
        var x = 0;
        var y = 0;
        for (var i = 0; i < shapes.length; i++) {
          var shape = shapes[i];
          // shape.x -= stageEl.offsetLeft;
          // shape.y -= stageEl.offsetTop;
          var bounds = shape.getBounds();
          x += bounds.x + bounds.width / 2;
          y += bounds.y + bounds.height / 2;
        }
        x /= shapes.length;
        y /= shapes.length;

        group.x = x;
        group.y = y;

        for (var i = 0; i < shapes.length; i++) {
          var _shape = shapes[i];
          _shape.x += group.x;
          _shape.y += group.y;
        }

        group.add(shapes);
        this.stage.add(group);
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
      } else if (event.key == 'e' && !event.repeat) {
        this.stage.edit();
      } else {
        if (this.mode == 'paper') {
          this.paper.handleEvent(event);
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

var _rectangle = __webpack_require__(/*! ../geom/rectangle */ "./src/geom/rectangle.js");

var _rectangle2 = _interopRequireDefault(_rectangle);

var _transform = __webpack_require__(/*! ./transform */ "./src/display/transform.js");

var _transform2 = _interopRequireDefault(_transform);

var _shape = __webpack_require__(/*! ./shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

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
    value: function add(content) {
      if (content instanceof Array) {
        for (var i = 0; i < content.length; i++) {
          var shape = content[i];
          if (shape instanceof _shape2.default) this.add(shape);
        }
      } else if (content instanceof _shape2.default) {
        this.children.push(content);
      }
    }
  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      for (var i = 0; i < this.children.length; i++) {
        var shape = this.children[i];
        if (shape.hitTest(x - this.x, y - this.y)) {
          return true;
        }
      }
      return false;
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
        var xmin = 0; //Number.POSITIVE_INFINITY;
        var ymin = 0; //Number.POSITIVE_INFINITY;
        var xmax = 0; //Number.NEGATIVE_INFINITY;
        var ymax = 0; //Number.NEGATIVE_INFINITY;

        for (var i = 0; i < rects.length; i++) {
          var rect = rects[i];
          xmin = rect.x < xmin ? rect.x : xmin;
          ymin = rect.y < ymin ? rect.y : ymin;
          xmax = rect.x + rect.width > xmax ? rect.x + rect.width : xmax;
          ymax = rect.y + rect.height > ymax ? rect.y + rect.height : ymax;
        }
        return new _rectangle2.default(xmin + this.x, ymin + this.y, xmax - xmin, ymax - ymin);
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

    // let center = this.pointList.center();
    // this.x = center.x;
    // this.y = center.y;
    //
    // for (var i = 0; i < this.pointsList.points.length; i++) {
    //   let p = this.pointsList.points[i];
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
      var bounds = this.pointList.getBounds();
      bounds.x += this.x;
      bounds.y += this.y;
      return bounds;
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
      this.emit('valuechange');
    }
  }, {
    key: 'y',
    get: function get() {
      return this._y;
    },
    set: function set(value) {
      this._y = value;
      this.emit('valuechange');
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

  // center() {
  //   let bounds = this.getBounds();
  //   return new Point(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
  // }

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

      // ctx.translate(0.5, 0.5);

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
    this.context = null;

    this.el = document.createElement('div');
    this.el.classList.add('stage');

    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth; //params.width || 320;
    this.canvas.height = window.innerHeight; //params.height || 200;

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
    value: function add(transform) {
      var _this = this;

      this.children.push(transform);
      transform.addedToStage();
      transform.on('valuechange', function () {
        _this.render();
      });
      this.render();
    }
  }, {
    key: 'edit',
    value: function edit() {
      if (this.context) {} else {
        if (this.selection.length) {
          this.context = this.selection[0];
        } else {
          var group = new _group2.default();
          group.x = this.canvas.width / 2 >> 0;
          group.y = this.canvas.height / 2 >> 0;
          this.context = group;
        }
      }
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
    value: function renderShape(shape, x, y) {
      // console.log('renderShape', shape);
      var points = shape.getPoints();

      var ctx = this.canvas.getContext('2d');
      ctx.save();

      ctx.translate(x, y);

      ctx.beginPath();

      for (var j = 0; j < points.length; j++) {
        var p = points[j];
        // console.log(p);
        if (j == 0) ctx.moveTo(p.x + shape.x, p.y + shape.y);else ctx.lineTo(p.x + shape.x, p.y + shape.y);
      }

      if (shape.closed) ctx.closePath();

      // if (highlight) {
      // ctx.strokeStyle = 'cyan';
      // ctx.lineWidth = 4;
      // ctx.stroke();
      // }

      ctx.lineWidth = 1;
      ctx.strokeStyle = shape.stroke || 'transparent';
      ctx.fillStyle = shape.fill || 'transparent';

      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }

    // renderHints(transform) {
    //   let ctx = this.canvas.getContext('2d');
    //   ctx.save();
    //   ctx.translate(0.5, 0.5);
    //   ctx.strokeStyle = transform.selected ? 'red' : 'blue';
    //   ctx.beginPath();
    //   ctx.arc(transform.x, transform.y, 3, 0, Math.PI * 2, false);
    //   ctx.stroke();
    //   let bounds = transform.getBounds();
    //   if (bounds) {
    //     ctx.strokeStyle = transform.selected ? 'red' : 'blue';
    //     ctx.beginPath();
    //     ctx.rect(bounds.x, bounds.y, bounds.width, bounds.height);
    //     ctx.stroke();
    //   }
    //   ctx.restore();
    // }

  }, {
    key: 'renderObject',
    value: function renderObject(transform) {
      if (transform instanceof _group2.default) {
        for (var i = 0; i < transform.children.length; i++) {
          var child = transform.children[i];
          this.renderShape(child, transform.x, transform.y);
        }
      }
      // if (transform.selected) this.renderHints(transform);
    }
  }, {
    key: 'renderHints',
    value: function renderHints(x, y) {
      var size = 10;
      var ctx = this.canvas.getContext('2d');
      // let x = (this.canvas.width / 2) >> 0;
      // let y = (this.canvas.height / 2) >> 0;
      ctx.save();
      ctx.translate(0.5, 0.5);
      ctx.beginPath();
      ctx.strokeStyle = 'lightgray';
      ctx.moveTo(x - size, y);
      ctx.lineTo(x + size, y);
      ctx.moveTo(x, y - size);
      ctx.lineTo(x, y + size);
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        this.renderObject(child);
      }

      if (this.context) {
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 0.5;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.globalAlpha = 1;
        this.renderAxis(this.context.x, this.context.y);
      }

      if (this.mode == 'marquee') {
        ctx.save();
        ctx.translate(0.5, 0.5);
        ctx.strokeStyle = 'gray';
        ctx.globalCompositeOperation = 'exclusion';
        ctx.beginPath();
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
        // let hit = this.hitTest(this.cursorX, this.cursorY);
        // if (hit) {
        //   this.target = hit;
        // } else {
        //   if (this.target) {
        //     this.target = null;
        //   }
        // }
      }

      this.lastX = this.cursorX;
      this.lastY = this.cursorY;
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      // if (event.key == 's' && !event.repeat) {
      //   this.toggleStroke();
      // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9zaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9wb2ludF9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImluaXRFbGVtZW50cyIsImluaXRFdmVudExpc3RlbmVycyIsInN0YXJ0dXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsInBhcGVyIiwidmlzaWJsZSIsImNvbnNvbGUiLCJsb2ciLCJncm91cCIsInNoYXBlIiwicG9pbnRzIiwieCIsInkiLCJmaWxsIiwic3Ryb2tlIiwiY2xvc2VkIiwiYWRkIiwic3RhZ2VFbCIsInNoYXBlcyIsImdldFNoYXBlcyIsImxlbmd0aCIsImkiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwiZ3JhYlBhcGVyU2hhcGVzIiwic2hvd1BhcGVyIiwiaGlkZVBhcGVyIiwiZXZlbnQiLCJrZXkiLCJyZXBlYXQiLCJ0b2dnbGVQYXBlciIsImVkaXQiLCJoYW5kbGVFdmVudCIsInR5cGUiLCJvbktleURvd24iLCJvbk1vdXNlRG93biIsImluaXQiLCJHcm91cCIsInBhcmFtcyIsImNoaWxkcmVuIiwiY29udGVudCIsIkFycmF5IiwicHVzaCIsImhpdFRlc3QiLCJyZWN0cyIsImNoaWxkIiwieG1pbiIsInltaW4iLCJ4bWF4IiwieW1heCIsInJlY3QiLCJTaGFwZSIsInN0cm9rZVdpZHRoIiwicG9pbnRMaXN0IiwicDAiLCJwMSIsImxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlIiwicG9pbnRJblBvbHlnb24iLCJUZXh0Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRUZXh0IiwidmFsdWUiLCJUcmFuc2Zvcm0iLCJzZWxlY3RlZCIsIl94IiwiZW1pdCIsIl95IiwiRXZlbnQiLCJFdmVudERpc3BhdGNoZXIiLCJsaXN0ZW5lcnMiLCJhcmdzIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsIm1vZHVsZSIsImV4cG9ydHMiLCJDaXJjbGUiLCJyIiwieDEiLCJ5MSIsIngyIiwieTIiLCJkeCIsImR5IiwiZCIsIk1hdGgiLCJzcXJ0IiwiUG9pbnQiLCJwb2ludCIsIlBvaW50TGlzdCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJwIiwiUmVjdGFuZ2xlIiwiYW1vdW50IiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJTTkFQX1JBRElVUyIsIkNPTE9SUyIsIlBhcGVyIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiY2FudmFzIiwiYWRqdXN0Q2FudmFzIiwidW5kZWZpbmVkIiwiY3Vyc29yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImFkZExpc3RlbmVycyIsInJlbW92ZUxpc3RlbmVycyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNvbG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic2F2ZSIsImZpbGxTdHlsZSIsImNsb3NlUGF0aCIsInJlc3RvcmUiLCJnZXRQb2ludHMiLCJqIiwiY2xlYXJSZWN0IiwiZHJhd1NoYXBlIiwiZHJhd1BhdGgiLCJjdXJzb3J4IiwiY3Vyc29yeSIsImNwIiwiZGlzdGFuY2UiLCJhcmMiLCJQSSIsInJlbmRlciIsImJ1dHRvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwibGVmdCIsInRvcCIsInNldFN0cm9rZSIsInNldEZpbGwiLCJpbmNsdWRlcyIsInBhcnNlSW50IiwiY2FuY2VsUGF0aCIsInByZXZlbnREZWZhdWx0Iiwib25Nb3VzZVVwIiwib25Nb3VzZU1vdmUiLCJvbkRibENsaWNrIiwib25Db250ZXh0TWVudSIsIlN0YWdlIiwic2VsZWN0aW9uIiwiY29udGV4dCIsInRyYW5zZm9ybSIsImFkZGVkVG9TdGFnZSIsIm9uIiwiaW50ZXJzZWN0c1JlY3RhbmdsZSIsInNlbGVjdCIsImRlc2VsZWN0IiwidHJhbnNsYXRlIiwibGluZVdpZHRoIiwicmVuZGVyU2hhcGUiLCJyZW5kZXJPYmplY3QiLCJnbG9iYWxBbHBoYSIsImZpbGxSZWN0IiwicmVuZGVyQXhpcyIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImRvd25YIiwiZG93blkiLCJjdXJzb3JYIiwiY3Vyc29yWSIsIml0ZW0iLCJwYWdlWCIsIm9mZnNldExlZnQiLCJwYWdlWSIsIm9mZnNldFRvcCIsImhpdCIsImNhbmNlbERyYWciLCJzZWxlY3RNYXJxdWVlIiwiY2FuY2VsTWFycXVlZSIsImRlbHRhWCIsImxhc3RYIiwiZGVsdGFZIiwibGFzdFkiLCJidXR0b25zIiwibW92ZVNlbGVjdGlvbkJ5IiwiYWJzIiwiYmVnaW5EcmFnIiwiYmVnaW5NYXJxdWVlIiwiU3ZnIiwiYXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWUi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TWxDLElBQXJCLElBQStCaUMsTUFBTWhDLElBQU4sSUFBY2tDLE1BQU1sQyxJQUFuRCxJQUNDK0IsTUFBTTlCLElBQU4sSUFBY2dDLE1BQU1oQyxJQURyQixJQUMrQitCLE1BQU05QixJQUFOLElBQWNnQyxNQUFNaEMsSUFEdkQsRUFFRSxPQUFPLEtBQVA7O0FBRUYsTUFBSTBKLElBQUksQ0FBQzFILEtBQUtGLEVBQU4sS0FBYUMsS0FBS0YsRUFBbEIsQ0FBUjs7QUFFQSxNQUFJckUsSUFBSWtNLEtBQUs3SixPQUFPZ0MsRUFBWixJQUFrQkMsRUFBMUI7QUFDQSxNQUFJdEUsSUFBSXNDLElBQUosSUFBWXRDLElBQUl3QyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCeEMsTUFBSWtNLEtBQUszSixPQUFPOEIsRUFBWixJQUFrQkMsRUFBdEI7QUFDQSxNQUFJdEUsSUFBSXNDLElBQUosSUFBWXRDLElBQUl3QyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCLE1BQUl6QyxJQUFJLENBQUN1QyxPQUFPZ0MsRUFBUixJQUFjNEgsQ0FBZCxHQUFrQjdILEVBQTFCO0FBQ0EsTUFBSXRFLElBQUlzQyxJQUFKLElBQVl0QyxJQUFJd0MsSUFBcEIsRUFBMEIsT0FBTyxJQUFQOztBQUUxQnhDLE1BQUksQ0FBQ3lDLE9BQU84QixFQUFSLElBQWM0SCxDQUFkLEdBQWtCN0gsRUFBdEI7QUFDQSxNQUFJdEUsSUFBSXNDLElBQUosSUFBWXRDLElBQUl3QyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCLFNBQU8sS0FBUDtBQUNEOztrQkFFYztBQUNiUSwyQkFBeUJBLHVCQURaO0FBRWJDLGtCQUFnQkE7QUFGSCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2Rpc3BsYXkvZ3JvdXAnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9kaXNwbGF5L3RleHQnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gIH1cblxuICBpbml0RWxlbWVudHMoKSB7XG4gICAgdGhpcy5kb20uYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSh7IHdpZHRoOiA0ODAsIGhlaWdodDogNDgwIH0pO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnN0YWdlLmRvbSgpKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5kb20oKSk7XG5cbiAgICAvLyB0aGlzLnBhcGVyLm9uKCdwYXRocycsIChwYXRocykgPT4ge1xuICAgIC8vICAgdGhpcy5jcmVhdGVTaGFwZShwYXRocyk7XG4gICAgLy8gICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG5cbiAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoe1xuICAgICAgcG9pbnRzOiBbIHsgeDogMCwgeTogMCB9LCB7IHg6IDYwLCB5OiAwIH0sIHsgeDogNDAsIHk6IDQwIH0sIHsgeDogMjAsIHk6IDEwIH0gXSxcbiAgICAgIGZpbGw6ICcjY2NjY2NjJyxcbiAgICAgIHN0cm9rZTogJ2JsYWNrJyxcbiAgICAgIGNsb3NlZDogdHJ1ZVxuICAgIH0pO1xuICAgIHNoYXBlLnggPSAtNjA7XG4gICAgc2hhcGUueSA9IDgwO1xuICAgIGdyb3VwLmFkZChzaGFwZSk7XG5cbiAgICBzaGFwZSA9IG5ldyBTaGFwZSh7XG4gICAgICBwb2ludHM6IFsgeyB4OiAwLCB5OiAwIH0sIHsgeDogNjAsIHk6IDIwIH0sIHsgeDogMTAwLCB5OiAyMCB9LCB7IHg6IDEwMCwgeTogNzAgfSBdLFxuICAgICAgZmlsbDogJyNjY2NjY2MnLFxuICAgICAgc3Ryb2tlOiBudWxsLFxuICAgICAgY2xvc2VkOiB0cnVlXG4gICAgfSk7XG4gICAgc2hhcGUueCA9IDE1MDtcbiAgICBzaGFwZS55ID0gMTAwO1xuICAgIGdyb3VwLmFkZChzaGFwZSk7XG5cbiAgICB0aGlzLnN0YWdlLmFkZChncm91cCk7XG5cbiAgICBncm91cC54ID0gNzU7XG4gICAgZ3JvdXAueSA9IDUwO1xuICB9XG5cbiAgZ3JhYlBhcGVyU2hhcGVzKCkge1xuICAgIGxldCBzdGFnZUVsID0gdGhpcy5zdGFnZS5kb20oKTtcbiAgICBsZXQgc2hhcGVzID0gdGhpcy5wYXBlci5nZXRTaGFwZXMoKTtcblxuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICAgIGxldCB4ID0gMDtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgICAgICAgLy8gc2hhcGUueCAtPSBzdGFnZUVsLm9mZnNldExlZnQ7XG4gICAgICAgIC8vIHNoYXBlLnkgLT0gc3RhZ2VFbC5vZmZzZXRUb3A7XG4gICAgICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgICAgICAgeCArPSBib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDI7XG4gICAgICAgIHkgKz0gYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IC8gMjtcbiAgICAgIH1cbiAgICAgIHggLz0gc2hhcGVzLmxlbmd0aDtcbiAgICAgIHkgLz0gc2hhcGVzLmxlbmd0aDtcblxuICAgICAgZ3JvdXAueCA9IHg7XG4gICAgICBncm91cC55ID0geTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgICBzaGFwZS54ICs9IGdyb3VwLng7XG4gICAgICAgIHNoYXBlLnkgKz0gZ3JvdXAueTtcbiAgICAgIH1cblxuICAgICAgZ3JvdXAuYWRkKHNoYXBlcyk7XG4gICAgICB0aGlzLnN0YWdlLmFkZChncm91cCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1BhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMucGFwZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgIHRoaXMucGFwZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMubW9kZSA9ICdwYXBlcic7XG4gICAgfVxuICB9XG5cbiAgaGlkZVBhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5ncmFiUGFwZXJTaGFwZXMoKTtcbiAgICAgIHRoaXMucGFwZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMuc2hvd1BhcGVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnRvZ2dsZVBhcGVyKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5zdGFnZS5lZGl0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgICAgIHRoaXMucGFwZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gbGV0IHggPSBldmVudC5vZmZzZXRYO1xuICAgIC8vIGxldCB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICAvLyBjb25zb2xlLmxvZyh4LCB5KTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpO1xuICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuICBhcHAuaW5pdCgpO1xufSk7XG4iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vc2hhcGUnO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYWRkKGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gY29udGVudFtpXTtcbiAgICAgICAgaWYgKHNoYXBlIGluc3RhbmNlb2YgU2hhcGUpIHRoaXMuYWRkKHNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKHNoYXBlLmhpdFRlc3QoeCAtIHRoaXMueCwgeSAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBib3VuZHMgPSBjaGlsZC5nZXRCb3VuZHMoKTtcbiAgICAgIHJlY3RzLnB1c2goYm91bmRzKTtcbiAgICB9XG5cbiAgICBpZiAocmVjdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IDA7IC8vTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSAwOyAvL051bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gMDsgLy9OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IDA7IC8vTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWN0ID0gcmVjdHNbaV07XG4gICAgICAgIHhtaW4gPSByZWN0LnggPCB4bWluID8gcmVjdC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHJlY3QueSA8IHltaW4gPyByZWN0LnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcmVjdC54ICsgcmVjdC53aWR0aCA+IHhtYXggPyByZWN0LnggKyByZWN0LndpZHRoIDogeG1heDtcbiAgICAgICAgeW1heCA9IHJlY3QueSArIHJlY3QuaGVpZ2h0ID4geW1heCA/IHJlY3QueSArIHJlY3QuaGVpZ2h0IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4gKyB0aGlzLngsIHltaW4gKyB0aGlzLnksIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBQb2ludExpc3QgZnJvbSAnLi4vZ2VvbS9wb2ludF9saXN0JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIFNoYXBlIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZmlsbCA9IHBhcmFtcy5maWxsIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBwYXJhbXMuc3Ryb2tlIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2VXaWR0aCA9IHBhcmFtcy5zdHJva2VXaWR0aCB8fCAxO1xuICAgIHRoaXMuY2xvc2VkID0gcGFyYW1zLmNsb3NlZCB8fCBmYWxzZTtcblxuICAgIHRoaXMucG9pbnRMaXN0ID0gbmV3IFBvaW50TGlzdChwYXJhbXMucG9pbnRzKTtcblxuICAgIC8vIGxldCBjZW50ZXIgPSB0aGlzLnBvaW50TGlzdC5jZW50ZXIoKTtcbiAgICAvLyB0aGlzLnggPSBjZW50ZXIueDtcbiAgICAvLyB0aGlzLnkgPSBjZW50ZXIueTtcbiAgICAvL1xuICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHNMaXN0LnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgbGV0IHAgPSB0aGlzLnBvaW50c0xpc3QucG9pbnRzW2ldO1xuICAgIC8vICAgcC54IC09IHRoaXMueDtcbiAgICAvLyAgIHAueSAtPSB0aGlzLnk7XG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0UG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgbGV0IGJvdW5kcyA9IHRoaXMucG9pbnRMaXN0LmdldEJvdW5kcygpO1xuICAgIGJvdW5kcy54ICs9IHRoaXMueDtcbiAgICBib3VuZHMueSArPSB0aGlzLnk7XG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIGlmICh4bWluID4geG1heCkgW3htaW4sIHhtYXhdID0gWyB4bWF4LCB4bWluIF07XG4gICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgICBsZXQgcG9pbnRzID0gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcDAgPSBwb2ludHNbaSAtIDFdO1xuICAgICAgbGV0IHAxID0gcG9pbnRzW2ldO1xuICAgICAgaWYgKFV0aWwubGluZUludGVyc2VjdHNSZWN0YW5nbGUocDAueCwgcDAueSwgcDEueCwgcDEueSwgeG1pbiAtIHRoaXMueCwgeW1pbiAtIHRoaXMueSwgeG1heCAtIHRoaXMueCwgeW1heCAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gICAgaWYgKHRoaXMuZmlsbCkge1xuICAgICAgcmV0dXJuIFV0aWwucG9pbnRJblBvbHlnb24ocG9pbnRzLCB4IC0gdGhpcy54LCB5IC0gdGhpcy55KTtcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLmNvbnRlbnQpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgeyBFdmVudCwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZXZlbnRzJztcblxuY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzLl94ID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0KCd2YWx1ZWNoYW5nZScpO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLl95ID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0KCd2YWx1ZWNoYW5nZScpO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiXG5jbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cbn1cblxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09IHR5cGUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IHR5cGU6IHR5cGUsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRXZlbnREaXNwYXRjaGVyLCBFdmVudCB9O1xuIiwiXG5jbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuciA9IHI7XG4gIH1cblxuICBpbnRlcnNlY3RzTGluZVNlZ21lbnQoeDEsIHkxLCB4MiwgeTIpIHtcblxuICB9XG5cbiAgY29udGFpbnNQb2ludCh4LCB5KSB7XG4gICAgbGV0IGR4ID0geCAtIHRoaXMueDtcbiAgICBsZXQgZHkgPSB5IC0gdGhpcy55O1xuICAgIGxldCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICByZXR1cm4gZCA8IHRoaXMucjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRpc3RhbmNlKHBvaW50KSB7XG4gICAgbGV0IGR4ID0gdGhpcy54IC0gcG9pbnQueDtcbiAgICBsZXQgZHkgPSB0aGlzLnkgLSBwb2ludC55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL3JlY3RhbmdsZSc7XG5cbmNsYXNzIFBvaW50TGlzdCB7XG4gIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzIHx8IFtdO1xuICB9XG5cbiAgLy8gY2VudGVyKCkge1xuICAvLyAgIGxldCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuICAvLyAgIHJldHVybiBuZXcgUG9pbnQoYm91bmRzLnggKyBib3VuZHMud2lkdGggLyAyLCBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyKTtcbiAgLy8gfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSBwLnkgPCB5bWluID8gcC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcC55ID4geW1heCA/IHAueSA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50TGlzdDtcbiIsIlxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBncm93KGFtb3VudCkge1xuICAgIHRoaXMueCAtPSBhbW91bnQ7XG4gICAgdGhpcy55IC09IGFtb3VudDtcbiAgICB0aGlzLndpZHRoICs9IGFtb3VudCAqIDI7XG4gICAgdGhpcy5oZWlnaHQgKz0gYW1vdW50ICogMjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJcbmNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkb3QodmVjdG9yKSB7XG4gICAgcmV0dXJuICh0aGlzLnggKiB2ZWN0b3IueCArIHRoaXMueSAqIHZlY3Rvci55KTtcbiAgfVxuXG4gIG1hZygpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBwcm9qZWN0KHZlY3Rvcikge1xuICAgIGxldCBkID0gdmVjdG9yLmRvdCh2ZWN0b3IpO1xuICAgIGlmIChkID4gMCkge1xuICAgICAgbGV0IHJhdGlvID0gdGhpcy5kb3QodmVjdG9yKSAvIGQ7XG4gICAgICAvLyByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHJhdGlvIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3I7XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi9nZW9tL3ZlY3Rvcic7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vZ2VvbS9jaXJjbGUnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5cbmxldCBTTkFQX1JBRElVUyA9IDM7XG5sZXQgQ09MT1JTID0gW1xuICAnd2hpdGUnLFxuICAnI2NjY2NjYycsXG4gICcjOTk5OTk5JyxcbiAgJyM2NjY2NjYnLFxuICAnIzMzMzMzMycsXG4gICdibGFjaydcbl07XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLmZpbGwgPSBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gQ09MT1JTWzVdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5hZGp1c3RDYW52YXMoKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5zZXRWaXNpYmxlKHBhcmFtcy52aXNpYmxlICE9PSB1bmRlZmluZWQgPyBwYXJhbXMudmlzaWJsZSA6IHRydWUpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLCAnZGJsY2xpY2snLCAnY29udGV4dG1lbnUnIF07XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BhcGVyLWN1cnNvcicpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGp1c3RDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBkcmF3TGluZSh4MSwgeTEsIHgyLCB5MiwgY29sb3IpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdQYXRoKHBhcmFtcz17fSkge1xuICAgIGxldCBwb2ludHMgPSBwYXJhbXMucG9pbnRzIHx8IFtdO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHBhcmFtcy5zdHJva2UgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuc3Ryb2tlID8gcGFyYW1zLnN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gcGFyYW1zLmZpbGwgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuZmlsbCA/IHBhcmFtcy5maWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3U2hhcGUoc2hhcGUpIHtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgLy8gY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgLy8gdGhpcy5kcmF3UGF0aCh7IHBvaW50czogc2hhcGUucG9pbnRzLCBmaWxsOiBzaGFwZS5maWxsLCBzdHJva2U6IHNoYXBlLnN0cm9rZSwgY2xvc2VkOiBzaGFwZS5jbG9zZWQgfSk7XG4gICAgICB0aGlzLmRyYXdTaGFwZShzaGFwZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kcmF3UGF0aCh7IHBvaW50czogdGhpcy5wb2ludHMsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSB9KTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvcngsIHRoaXMuY3Vyc29yeSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGxldCBjcCA9IG5ldyBQb2ludCh0aGlzLmN1cnNvcngsIHRoaXMuY3Vyc29yeSk7XG4gICAgICBsZXQgcDAgPSB0aGlzLnBvaW50c1swXTtcbiAgICAgIGlmIChjcC5kaXN0YW5jZShwMCkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICBjdHguYXJjKHAwLngsIHAwLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgZ2V0U2hhcGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNoYXBlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY2FuY2VsUGF0aCgpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjbG9zZVBhdGgoY2xvc2VkPWZhbHNlKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7IHBvaW50czogdGhpcy5wb2ludHMsIGNsb3NlZDogY2xvc2VkLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG4gICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICB9XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0RmlsbChmaWxsKSB7XG4gICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0U3Ryb2tlKHN0cm9rZSkge1xuICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgU05BUF9SQURJVVMpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3J5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvcnggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yeSArICdweCc7XG5cbiAgICBpZiAodGhpcy5tb2RlICE9PSAnZHJhdycpIHtcblxuICAgIH1cbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5zZXRTdHJva2UodGhpcy5zdHJva2UgPyBudWxsIDogJ2JsYWNrJylcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICcwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnNldEZpbGwobnVsbCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXS5pbmNsdWRlcyhldmVudC5rZXkpICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIGxldCBjb2xvciA9IENPTE9SU1twYXJzZUludChldmVudC5rZXkpIC0gMV07XG4gICAgICBpZiAoY29sb3IgIT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhpcy5zZXRGaWxsKGNvbG9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdkcmF3Jykge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdFc2NhcGUnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgICB0aGlzLmNhbmNlbFBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2Rpc3BsYXkvZ3JvdXAnO1xuXG5jbGFzcyBTdGFnZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoOyAvL3BhcmFtcy53aWR0aCB8fCAzMjA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyAvL3BhcmFtcy5oZWlnaHQgfHwgMjAwO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3N0YWdlLWN1cnNvcicpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkKHRyYW5zZm9ybSkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0cmFuc2Zvcm0pO1xuICAgIHRyYW5zZm9ybS5hZGRlZFRvU3RhZ2UoKTtcbiAgICB0cmFuc2Zvcm0ub24oJ3ZhbHVlY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLnNlbGVjdGlvblswXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZ3JvdXAueCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpID4+IDA7XG4gICAgICAgIGdyb3VwLnkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgPj4gMDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZ3JvdXA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICAgIGlmIChjaGlsZC5pbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpKSB7XG4gICAgICAgICAgc2VsZWN0aW9uLnB1c2goY2hpbGQpO1xuICAgICAgICAgIGNoaWxkLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlclNoYXBlKHNoYXBlLCB4LCB5KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbmRlclNoYXBlJywgc2hhcGUpO1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgLy8gY29uc29sZS5sb2cocCk7XG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIC8vIGlmIChoaWdobGlnaHQpIHtcbiAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9ICdjeWFuJztcbiAgICAgIC8vIGN0eC5saW5lV2lkdGggPSA0O1xuICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgIC8vIH1cblxuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICAvLyByZW5kZXJIaW50cyh0cmFuc2Zvcm0pIHtcbiAgLy8gICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8gICBjdHguc2F2ZSgpO1xuICAvLyAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAvLyAgIGN0eC5zdHJva2VTdHlsZSA9IHRyYW5zZm9ybS5zZWxlY3RlZCA/ICdyZWQnIDogJ2JsdWUnO1xuICAvLyAgIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gICBjdHguYXJjKHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSwgMywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgLy8gICBjdHguc3Ryb2tlKCk7XG4gIC8vICAgbGV0IGJvdW5kcyA9IHRyYW5zZm9ybS5nZXRCb3VuZHMoKTtcbiAgLy8gICBpZiAoYm91bmRzKSB7XG4gIC8vICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmFuc2Zvcm0uc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgLy8gICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gICAgIGN0eC5yZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgLy8gICAgIGN0eC5zdHJva2UoKTtcbiAgLy8gICB9XG4gIC8vICAgY3R4LnJlc3RvcmUoKTtcbiAgLy8gfVxuXG4gIHJlbmRlck9iamVjdCh0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHJhbnNmb3JtIGluc3RhbmNlb2YgR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhbnNmb3JtLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHRyYW5zZm9ybS5jaGlsZHJlbltpXTtcbiAgICAgICAgdGhpcy5yZW5kZXJTaGFwZShjaGlsZCwgdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKHRyYW5zZm9ybS5zZWxlY3RlZCkgdGhpcy5yZW5kZXJIaW50cyh0cmFuc2Zvcm0pO1xuICB9XG5cbiAgcmVuZGVySGludHMoeCwgeSkge1xuICAgIGxldCBzaXplID0gMTA7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgLy8gbGV0IHggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSA+PiAwO1xuICAgIC8vIGxldCB5ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpID4+IDA7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG4gICAgY3R4Lm1vdmVUbyh4IC0gc2l6ZSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgc2l6ZSwgeSk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5IC0gc2l6ZSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgc2l6ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIHRoaXMucmVuZGVyT2JqZWN0KGNoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuNTtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICB0aGlzLnJlbmRlckF4aXModGhpcy5jb250ZXh0LngsIHRoaXMuY29udGV4dC55KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdleGNsdXNpb24nO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLmRvd25YLCB0aGlzLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmRvd25YLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgaXRlbS54ICs9IGR4O1xuICAgICAgaXRlbS55ICs9IGR5O1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYmVnaW5EcmFnKCkge1xuICAgIHRoaXMubW9kZSA9ICdkcmFnJztcbiAgfVxuXG4gIGNhbmNlbERyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgfVxuXG4gIGJlZ2luTWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgdGhpcy5tb2RlID0gJ21hcnF1ZWUnO1xuICB9XG5cbiAgY2FuY2VsTWFycXVlZSgpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5oaXRUZXN0KHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbC5vZmZzZXRUb3A7XG5cbiAgICB0aGlzLmRvd25YID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMuZG93blkgPSB0aGlzLmN1cnNvclk7XG5cbiAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAgICAgaGl0LnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpXG4gICAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLnNlbGVjdE1hcnF1ZWUodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgdGhpcy5jYW5jZWxNYXJxdWVlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgdGhpcy5kZWx0YVggPSB0aGlzLmxhc3RYID8gdGhpcy5jdXJzb3JYIC0gdGhpcy5sYXN0WCA6IDA7XG4gICAgdGhpcy5kZWx0YVkgPSB0aGlzLmxhc3RZID8gdGhpcy5jdXJzb3JZIC0gdGhpcy5sYXN0WSA6IDA7XG5cbiAgICBpZiAoZXZlbnQuYnV0dG9ucyAmIDEpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeSh0aGlzLmRlbHRhWCwgdGhpcy5kZWx0YVkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5jdXJzb3JYIC0gdGhpcy5kb3duWDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5jdXJzb3JZIC0gdGhpcy5kb3duWTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPj0gMiB8fCBNYXRoLmFicyhkeSkgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5iZWdpbkRyYWcoKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuYmVnaW5NYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuZG93blggKyBkeCwgdGhpcy5kb3duWSArIGR5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGxldCBoaXQgPSB0aGlzLmhpdFRlc3QodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgLy8gaWYgKGhpdCkge1xuICAgICAgLy8gICB0aGlzLnRhcmdldCA9IGhpdDtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgLy8gICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHRoaXMubGFzdFggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMuY3Vyc29yWTtcblxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgLy8gaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgdGhpcy50b2dnbGVTdHJva2UoKTtcbiAgICAvLyB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIiwiXG4vLyBDb3B5cmlnaHQgKGMpIDE5NzAtMjAwMywgV20uIFJhbmRvbHBoIEZyYW5rbGluXG4vLyBodHRwczovL3dyZi5lY3NlLnJwaS5lZHUvL1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sXG5cbmZ1bmN0aW9uIHBvaW50SW5Qb2x5Z29uKHBvaW50cywgdGVzdHgsIHRlc3R5KSB7XG4gIGxldCBpLCBqLCBjID0gMDtcbiAgZm9yIChsZXQgaSA9IDAsIGogPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICBpZiAoKChwb2ludHNbaV0ueSA+IHRlc3R5KSAhPSAocG9pbnRzW2pdLnkgPiB0ZXN0eSkpICYmXG4gICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICBjID0gIWM7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlKHgxLCB5MSwgeDIsIHkyLCB4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gIC8vIENvbXBsZXRlbHkgb3V0c2lkZS5cbiAgaWYgKCh4MSA8PSB4bWluICYmIHgyIDw9IHhtaW4pIHx8ICh5MSA8PSB5bWluICYmIHkyIDw9IHltaW4pIHx8XG4gICAgICAoeDEgPj0geG1heCAmJiB4MiA+PSB4bWF4KSB8fCAoeTEgPj0geW1heCAmJiB5MiA+PSB5bWF4KSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG0gPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG5cbiAgdmFyIHkgPSBtICogKHhtaW4gLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB5ID0gbSAqICh4bWF4IC0geDEpICsgeTE7XG4gIGlmICh5ID4geW1pbiAmJiB5IDwgeW1heCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHggPSAoeW1pbiAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB4ID0gKHltYXggLSB5MSkgLyBtICsgeDE7XG4gIGlmICh4ID4geG1pbiAmJiB4IDwgeG1heCkgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlOiBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSxcbiAgcG9pbnRJblBvbHlnb246IHBvaW50SW5Qb2x5Z29uXG59XG4iXSwic291cmNlUm9vdCI6IiJ9