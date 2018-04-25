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
      } else if (event.key == 's' && !event.repeat) {} else {
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
    value: function renderHints() {
      var size = 50;
      var ctx = this.canvas.getContext('2d');
      var x = this.canvas.width / 2 >> 0;
      var y = this.canvas.height / 2 >> 0;
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

      // this.renderHints();

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        this.renderObject(child);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9zaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9wb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9wb2ludF9saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImluaXRFbGVtZW50cyIsImluaXRFdmVudExpc3RlbmVycyIsInN0YXJ0dXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YWdlIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsInBhcGVyIiwidmlzaWJsZSIsImNvbnNvbGUiLCJsb2ciLCJncm91cCIsInNoYXBlIiwicG9pbnRzIiwieCIsInkiLCJmaWxsIiwic3Ryb2tlIiwiY2xvc2VkIiwiYWRkIiwic3RhZ2VFbCIsInNoYXBlcyIsImdldFNoYXBlcyIsImxlbmd0aCIsImkiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwiZ3JhYlBhcGVyU2hhcGVzIiwic2hvd1BhcGVyIiwiaGlkZVBhcGVyIiwiZXZlbnQiLCJrZXkiLCJyZXBlYXQiLCJ0b2dnbGVQYXBlciIsImhhbmRsZUV2ZW50IiwidHlwZSIsIm9uS2V5RG93biIsIm9uTW91c2VEb3duIiwiaW5pdCIsIkdyb3VwIiwicGFyYW1zIiwiY2hpbGRyZW4iLCJjb250ZW50IiwiQXJyYXkiLCJwdXNoIiwiaGl0VGVzdCIsInJlY3RzIiwiY2hpbGQiLCJ4bWluIiwieW1pbiIsInhtYXgiLCJ5bWF4IiwicmVjdCIsIlNoYXBlIiwic3Ryb2tlV2lkdGgiLCJwb2ludExpc3QiLCJwMCIsInAxIiwibGluZUludGVyc2VjdHNSZWN0YW5nbGUiLCJwb2ludEluUG9seWdvbiIsIlRleHQiLCJzZXRTaXplIiwic2l6ZSIsInNldFRleHQiLCJ2YWx1ZSIsIlRyYW5zZm9ybSIsInNlbGVjdGVkIiwiX3giLCJlbWl0IiwiX3kiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUG9pbnRMaXN0IiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJORUdBVElWRV9JTkZJTklUWSIsInAiLCJSZWN0YW5nbGUiLCJhbW91bnQiLCJWZWN0b3IiLCJ2ZWN0b3IiLCJkb3QiLCJyYXRpbyIsIlNOQVBfUkFESVVTIiwiQ09MT1JTIiwiUGFwZXIiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjYW52YXMiLCJhZGp1c3RDYW52YXMiLCJ1bmRlZmluZWQiLCJjdXJzb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkTGlzdGVuZXJzIiwicmVtb3ZlTGlzdGVuZXJzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29sb3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzYXZlIiwiZmlsbFN0eWxlIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsImdldFBvaW50cyIsImoiLCJjbGVhclJlY3QiLCJkcmF3U2hhcGUiLCJkcmF3UGF0aCIsImN1cnNvcngiLCJjdXJzb3J5IiwiY3AiLCJkaXN0YW5jZSIsImFyYyIsIlBJIiwicmVuZGVyIiwiYnV0dG9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJsZWZ0IiwidG9wIiwic2V0U3Ryb2tlIiwic2V0RmlsbCIsImluY2x1ZGVzIiwicGFyc2VJbnQiLCJjYW5jZWxQYXRoIiwicHJldmVudERlZmF1bHQiLCJvbk1vdXNlVXAiLCJvbk1vdXNlTW92ZSIsIm9uRGJsQ2xpY2siLCJvbkNvbnRleHRNZW51IiwiU3RhZ2UiLCJzZWxlY3Rpb24iLCJjb250ZXh0IiwidHJhbnNmb3JtIiwiYWRkZWRUb1N0YWdlIiwib24iLCJpbnRlcnNlY3RzUmVjdGFuZ2xlIiwic2VsZWN0IiwiZGVzZWxlY3QiLCJ0cmFuc2xhdGUiLCJsaW5lV2lkdGgiLCJyZW5kZXJTaGFwZSIsInJlbmRlck9iamVjdCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImRvd25YIiwiZG93blkiLCJjdXJzb3JYIiwiY3Vyc29yWSIsIml0ZW0iLCJwYWdlWCIsIm9mZnNldExlZnQiLCJwYWdlWSIsIm9mZnNldFRvcCIsImhpdCIsImNhbmNlbERyYWciLCJzZWxlY3RNYXJxdWVlIiwiY2FuY2VsTWFycXVlZSIsImRlbHRhWCIsImxhc3RYIiwiZGVsdGFZIiwibGFzdFkiLCJidXR0b25zIiwibW92ZVNlbGVjdGlvbkJ5IiwiYWJzIiwiYmVnaW5EcmFnIiwiYmVnaW5NYXJxdWVlIiwiU3ZnIiwiYXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJzdmciLCJ0ZXN0eCIsInRlc3R5IiwiYyIsIm0i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LE9BQU8sSUFBUDs7QUFFMUIsU0FBTyxLQUFQO0FBQ0Q7O2tCQUVjO0FBQ2JRLDJCQUF5QkEsdUJBRFo7QUFFYkMsa0JBQWdCQTtBQUZILEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJztcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2Rpc3BsYXkvdGV4dCc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnN0YXJ0dXAoKTtcbiAgfVxuXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIGluaXRFbGVtZW50cygpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICB0aGlzLnN0YWdlID0gbmV3IFN0YWdlKHsgd2lkdGg6IDQ4MCwgaGVpZ2h0OiA0ODAgfSk7XG4gICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMuc3RhZ2UuZG9tKCkpO1xuXG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcih7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnBhcGVyLmRvbSgpKTtcblxuICAgIC8vIHRoaXMucGFwZXIub24oJ3BhdGhzJywgKHBhdGhzKSA9PiB7XG4gICAgLy8gICB0aGlzLmNyZWF0ZVNoYXBlKHBhdGhzKTtcbiAgICAvLyAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgLy8gfSk7XG4gIH1cblxuICBzdGFydHVwKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydHVwJyk7XG5cbiAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcblxuICAgIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7XG4gICAgICBwb2ludHM6IFsgeyB4OiAwLCB5OiAwIH0sIHsgeDogNjAsIHk6IDAgfSwgeyB4OiA0MCwgeTogNDAgfSwgeyB4OiAyMCwgeTogMTAgfSBdLFxuICAgICAgZmlsbDogJyNjY2NjY2MnLFxuICAgICAgc3Ryb2tlOiAnYmxhY2snLFxuICAgICAgY2xvc2VkOiB0cnVlXG4gICAgfSk7XG4gICAgc2hhcGUueCA9IC02MDtcbiAgICBzaGFwZS55ID0gODA7XG4gICAgZ3JvdXAuYWRkKHNoYXBlKTtcblxuICAgIHNoYXBlID0gbmV3IFNoYXBlKHtcbiAgICAgIHBvaW50czogWyB7IHg6IDAsIHk6IDAgfSwgeyB4OiA2MCwgeTogMjAgfSwgeyB4OiAxMDAsIHk6IDIwIH0sIHsgeDogMTAwLCB5OiA3MCB9IF0sXG4gICAgICBmaWxsOiAnI2NjY2NjYycsXG4gICAgICBzdHJva2U6IG51bGwsXG4gICAgICBjbG9zZWQ6IHRydWVcbiAgICB9KTtcbiAgICBzaGFwZS54ID0gMTUwO1xuICAgIHNoYXBlLnkgPSAxMDA7XG4gICAgZ3JvdXAuYWRkKHNoYXBlKTtcblxuICAgIHRoaXMuc3RhZ2UuYWRkKGdyb3VwKTtcblxuICAgIGdyb3VwLnggPSA3NTtcbiAgICBncm91cC55ID0gNTA7XG4gIH1cblxuICBncmFiUGFwZXJTaGFwZXMoKSB7XG4gICAgbGV0IHN0YWdlRWwgPSB0aGlzLnN0YWdlLmRvbSgpO1xuICAgIGxldCBzaGFwZXMgPSB0aGlzLnBhcGVyLmdldFNoYXBlcygpO1xuXG4gICAgaWYgKHNoYXBlcy5sZW5ndGgpIHtcbiAgICAgIGxldCBncm91cCA9IG5ldyBHcm91cCgpO1xuICAgICAgbGV0IHggPSAwO1xuICAgICAgbGV0IHkgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgICAvLyBzaGFwZS54IC09IHN0YWdlRWwub2Zmc2V0TGVmdDtcbiAgICAgICAgLy8gc2hhcGUueSAtPSBzdGFnZUVsLm9mZnNldFRvcDtcbiAgICAgICAgbGV0IGJvdW5kcyA9IHNoYXBlLmdldEJvdW5kcygpO1xuICAgICAgICB4ICs9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICAgICAgeSArPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgeCAvPSBzaGFwZXMubGVuZ3RoO1xuICAgICAgeSAvPSBzaGFwZXMubGVuZ3RoO1xuXG4gICAgICBncm91cC54ID0geDtcbiAgICAgIGdyb3VwLnkgPSB5O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICAgIHNoYXBlLnggKz0gZ3JvdXAueDtcbiAgICAgICAgc2hhcGUueSArPSBncm91cC55O1xuICAgICAgfVxuXG4gICAgICBncm91cC5hZGQoc2hhcGVzKTtcbiAgICAgIHRoaXMuc3RhZ2UuYWRkKGdyb3VwKTtcbiAgICB9XG4gIH1cblxuICBzaG93UGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5wYXBlci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gJ3BhcGVyJztcbiAgICB9XG4gIH1cblxuICBoaWRlUGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLmdyYWJQYXBlclNoYXBlcygpO1xuICAgICAgdGhpcy5wYXBlci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHRoaXMucGFwZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5zaG93UGFwZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ3AnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUGFwZXIoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdzJyAmJiAhZXZlbnQucmVwZWF0KSB7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgICAgdGhpcy5wYXBlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBsZXQgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgLy8gbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuICAgIC8vIGNvbnNvbGUubG9nKHgsIHkpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJyk7XG4gIGxldCBhcHAgPSBuZXcgQXBwKCk7XG4gIGFwcC5pbml0KCk7XG59KTtcbiIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBhZGQoY29udGVudCkge1xuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBjb250ZW50W2ldO1xuICAgICAgICBpZiAoc2hhcGUgaW5zdGFuY2VvZiBTaGFwZSkgdGhpcy5hZGQoc2hhcGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdCh4IC0gdGhpcy54LCB5IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGJvdW5kcyA9IGNoaWxkLmdldEJvdW5kcygpO1xuICAgICAgcmVjdHMucHVzaChib3VuZHMpO1xuICAgIH1cblxuICAgIGlmIChyZWN0cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gMDsgLy9OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IDA7IC8vTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSAwOyAvL051bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gMDsgLy9OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJlY3QgPSByZWN0c1tpXTtcbiAgICAgICAgeG1pbiA9IHJlY3QueCA8IHhtaW4gPyByZWN0LnggOiB4bWluO1xuICAgICAgICB5bWluID0gcmVjdC55IDwgeW1pbiA/IHJlY3QueSA6IHltaW47XG4gICAgICAgIHhtYXggPSByZWN0LnggKyByZWN0LndpZHRoID4geG1heCA/IHJlY3QueCArIHJlY3Qud2lkdGggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcmVjdC55ICsgcmVjdC5oZWlnaHQgPiB5bWF4ID8gcmVjdC55ICsgcmVjdC5oZWlnaHQgOiB5bWF4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeG1pbiArIHRoaXMueCwgeW1pbiArIHRoaXMueSwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFBvaW50TGlzdCBmcm9tICcuLi9nZW9tL3BvaW50X2xpc3QnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgU2hhcGUgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5maWxsID0gcGFyYW1zLmZpbGwgfHwgbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IHBhcmFtcy5zdHJva2UgfHwgbnVsbDtcbiAgICB0aGlzLnN0cm9rZVdpZHRoID0gcGFyYW1zLnN0cm9rZVdpZHRoIHx8IDE7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5wb2ludExpc3QgPSBuZXcgUG9pbnRMaXN0KHBhcmFtcy5wb2ludHMpO1xuXG4gICAgLy8gbGV0IGNlbnRlciA9IHRoaXMucG9pbnRMaXN0LmNlbnRlcigpO1xuICAgIC8vIHRoaXMueCA9IGNlbnRlci54O1xuICAgIC8vIHRoaXMueSA9IGNlbnRlci55O1xuICAgIC8vXG4gICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50c0xpc3QucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBsZXQgcCA9IHRoaXMucG9pbnRzTGlzdC5wb2ludHNbaV07XG4gICAgLy8gICBwLnggLT0gdGhpcy54O1xuICAgIC8vICAgcC55IC09IHRoaXMueTtcbiAgICAvLyB9XG4gIH1cblxuICBnZXRQb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgYm91bmRzID0gdGhpcy5wb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gICAgYm91bmRzLnggKz0gdGhpcy54O1xuICAgIGJvdW5kcy55ICs9IHRoaXMueTtcbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgaW50ZXJzZWN0c1JlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICBpZiAoeW1pbiA+IHltYXgpIFt5bWluLCB5bWF4XSA9IFsgeW1heCwgeW1pbiBdO1xuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwMCA9IHBvaW50c1tpIC0gMV07XG4gICAgICBsZXQgcDEgPSBwb2ludHNbaV07XG4gICAgICBpZiAoVXRpbC5saW5lSW50ZXJzZWN0c1JlY3RhbmdsZShwMC54LCBwMC55LCBwMS54LCBwMS55LCB4bWluIC0gdGhpcy54LCB5bWluIC0gdGhpcy55LCB4bWF4IC0gdGhpcy54LCB5bWF4IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgbGV0IHBvaW50cyA9IHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgICBpZiAodGhpcy5maWxsKSB7XG4gICAgICByZXR1cm4gVXRpbC5wb2ludEluUG9seWdvbihwb2ludHMsIHggLSB0aGlzLngsIHkgLSB0aGlzLnkpO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcbiIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMuY29udGVudCk7XG4gIH1cblxuICBzZXRTaXplKHZhbHVlKSB7XG4gICAgdGhpcy5zaXplID0gdmFsdWU7XG4gIH1cblxuICBzZXRUZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJcbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFyYW1zKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgdHlwZTogdHlwZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFdmVudERpc3BhdGNoZXIsIEV2ZW50IH07XG4iLCJcbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yID0gcjtcbiAgfVxuXG4gIGludGVyc2VjdHNMaW5lU2VnbWVudCh4MSwgeTEsIHgyLCB5Mikge1xuXG4gIH1cblxuICBjb250YWluc1BvaW50KHgsIHkpIHtcbiAgICBsZXQgZHggPSB4IC0gdGhpcy54O1xuICAgIGxldCBkeSA9IHkgLSB0aGlzLnk7XG4gICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIHJldHVybiBkIDwgdGhpcy5yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcbiIsIlxuY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIHBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vcmVjdGFuZ2xlJztcblxuY2xhc3MgUG9pbnRMaXN0IHtcbiAgY29uc3RydWN0b3IocG9pbnRzKSB7XG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHMgfHwgW107XG4gIH1cblxuICAvLyBjZW50ZXIoKSB7XG4gIC8vICAgbGV0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG4gIC8vICAgcmV0dXJuIG5ldyBQb2ludChib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDIsIGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAvIDIpO1xuICAvLyB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgIHhtaW4gPSBwLnggPCB4bWluID8gcC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcC54ID4geG1heCA/IHAueCA6IHhtYXg7XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRMaXN0O1xuIiwiXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdyb3coYW1vdW50KSB7XG4gICAgdGhpcy54IC09IGFtb3VudDtcbiAgICB0aGlzLnkgLT0gYW1vdW50O1xuICAgIHRoaXMud2lkdGggKz0gYW1vdW50ICogMjtcbiAgICB0aGlzLmhlaWdodCArPSBhbW91bnQgKiAyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL2dlb20vdmVjdG9yJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9nZW9tL2NpcmNsZSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcblxubGV0IFNOQVBfUkFESVVTID0gMztcbmxldCBDT0xPUlMgPSBbXG4gICd3aGl0ZScsXG4gICcjY2NjY2NjJyxcbiAgJyM5OTk5OTknLFxuICAnIzY2NjY2NicsXG4gICcjMzMzMzMzJyxcbiAgJ2JsYWNrJ1xuXTtcblxuY2xhc3MgUGFwZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgIHRoaXMuZmlsbCA9IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBDT0xPUlNbNV07XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdwYXBlcicpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmFkanVzdENhbnZhcygpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLnNldFZpc2libGUocGFyYW1zLnZpc2libGUgIT09IHVuZGVmaW5lZCA/IHBhcmFtcy52aXNpYmxlIDogdHJ1ZSk7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IFsgJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdkYmxjbGljaycsICdjb250ZXh0bWVudScgXTtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncGFwZXItY3Vyc29yJyk7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY3Vyc29yKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubGlzdGVuZXJzW2ldLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRWaXNpYmxlKHZpc2libGUpIHtcbiAgICBpZiAodGhpcy52aXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkanVzdENhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIGRyYXdMaW5lKHgxLCB5MSwgeDIsIHkyLCBjb2xvcikge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8ICdibGFjayc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcbiAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd1BhdGgocGFyYW1zPXt9KSB7XG4gICAgbGV0IHBvaW50cyA9IHBhcmFtcy5wb2ludHMgfHwgW107XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gcGFyYW1zLnN0cm9rZSAhPT0gdW5kZWZpbmVkID8gKHBhcmFtcy5zdHJva2UgPyBwYXJhbXMuc3Ryb2tlIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwYXJhbXMuZmlsbCAhPT0gdW5kZWZpbmVkID8gKHBhcmFtcy5maWxsID8gcGFyYW1zLmZpbGwgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgaWYgKGkgPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8ocC54LCBwLnkpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdTaGFwZShzaGFwZSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICAvLyBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICAvLyB0aGlzLmRyYXdQYXRoKHsgcG9pbnRzOiBzaGFwZS5wb2ludHMsIGZpbGw6IHNoYXBlLmZpbGwsIHN0cm9rZTogc2hhcGUuc3Ryb2tlLCBjbG9zZWQ6IHNoYXBlLmNsb3NlZCB9KTtcbiAgICAgIHRoaXMuZHJhd1NoYXBlKHNoYXBlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRyYXdQYXRoKHsgcG9pbnRzOiB0aGlzLnBvaW50cywgZmlsbDogdGhpcy5maWxsLCBzdHJva2U6IHRoaXMuc3Ryb2tlIH0pO1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yeCwgdGhpcy5jdXJzb3J5KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgbGV0IGNwID0gbmV3IFBvaW50KHRoaXMuY3Vyc29yeCwgdGhpcy5jdXJzb3J5KTtcbiAgICAgIGxldCBwMCA9IHRoaXMucG9pbnRzWzBdO1xuICAgICAgaWYgKGNwLmRpc3RhbmNlKHAwKSA8IFNOQVBfUkFESVVTKSB7XG4gICAgICAgIGN0eC5hcmMocDAueCwgcDAueSwgNSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBnZXRTaGFwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcGVzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjYW5jZWxQYXRoKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNsb3NlUGF0aChjbG9zZWQ9ZmFsc2UpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHsgcG9pbnRzOiB0aGlzLnBvaW50cywgY2xvc2VkOiBjbG9zZWQsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSB9KTtcbiAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUpO1xuICAgIH1cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRGaWxsKGZpbGwpIHtcbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRTdHJva2Uoc3Ryb2tlKSB7XG4gICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLnNoYXBlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICBpZiAoY2hpbGQuaGl0VGVzdCh4LCB5KSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGxldCBwID0gbmV3IFBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICBpZiAocC5kaXN0YW5jZSh0aGlzLnBvaW50c1swXSkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3J4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvcnkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yeCArICdweCc7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3J5ICsgJ3B4JztcblxuICAgIGlmICh0aGlzLm1vZGUgIT09ICdkcmF3Jykge1xuXG4gICAgfVxuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdzJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnNldFN0cm9rZSh0aGlzLnN0cm9rZSA/IG51bGwgOiAnYmxhY2snKVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJzAnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuc2V0RmlsbChudWxsKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddLmluY2x1ZGVzKGV2ZW50LmtleSkgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgbGV0IGNvbG9yID0gQ09MT1JTW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXTtcbiAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLnNldEZpbGwoY29sb3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYXcnKSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICAgIHRoaXMuY2FuY2VsUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5cbmNsYXNzIFN0YWdlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3N0YWdlJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7IC8vcGFyYW1zLndpZHRoIHx8IDMyMDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IC8vcGFyYW1zLmhlaWdodCB8fCAyMDA7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnc3RhZ2UtY3Vyc29yJyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGQodHJhbnNmb3JtKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRyYW5zZm9ybSk7XG4gICAgdHJhbnNmb3JtLmFkZGVkVG9TdGFnZSgpO1xuICAgIHRyYW5zZm9ybS5vbigndmFsdWVjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICAgIGlmIChjaGlsZC5pbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpKSB7XG4gICAgICAgICAgc2VsZWN0aW9uLnB1c2goY2hpbGQpO1xuICAgICAgICAgIGNoaWxkLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlclNoYXBlKHNoYXBlLCB4LCB5KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbmRlclNoYXBlJywgc2hhcGUpO1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgLy8gY29uc29sZS5sb2cocCk7XG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIC8vIGlmIChoaWdobGlnaHQpIHtcbiAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9ICdjeWFuJztcbiAgICAgIC8vIGN0eC5saW5lV2lkdGggPSA0O1xuICAgICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgIC8vIH1cblxuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICAvLyByZW5kZXJIaW50cyh0cmFuc2Zvcm0pIHtcbiAgLy8gICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8gICBjdHguc2F2ZSgpO1xuICAvLyAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAvLyAgIGN0eC5zdHJva2VTdHlsZSA9IHRyYW5zZm9ybS5zZWxlY3RlZCA/ICdyZWQnIDogJ2JsdWUnO1xuICAvLyAgIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gICBjdHguYXJjKHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSwgMywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgLy8gICBjdHguc3Ryb2tlKCk7XG4gIC8vICAgbGV0IGJvdW5kcyA9IHRyYW5zZm9ybS5nZXRCb3VuZHMoKTtcbiAgLy8gICBpZiAoYm91bmRzKSB7XG4gIC8vICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmFuc2Zvcm0uc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgLy8gICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gICAgIGN0eC5yZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgLy8gICAgIGN0eC5zdHJva2UoKTtcbiAgLy8gICB9XG4gIC8vICAgY3R4LnJlc3RvcmUoKTtcbiAgLy8gfVxuXG4gIHJlbmRlck9iamVjdCh0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHJhbnNmb3JtIGluc3RhbmNlb2YgR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhbnNmb3JtLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHRyYW5zZm9ybS5jaGlsZHJlbltpXTtcbiAgICAgICAgdGhpcy5yZW5kZXJTaGFwZShjaGlsZCwgdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKHRyYW5zZm9ybS5zZWxlY3RlZCkgdGhpcy5yZW5kZXJIaW50cyh0cmFuc2Zvcm0pO1xuICB9XG5cbiAgcmVuZGVySGludHMoKSB7XG4gICAgbGV0IHNpemUgPSA1MDtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpID4+IDA7XG4gICAgbGV0IHkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgPj4gMDtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5JztcbiAgICBjdHgubW92ZVRvKHggLSBzaXplLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyBzaXplLCB5KTtcbiAgICBjdHgubW92ZVRvKHgsIHkgLSBzaXplKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyBzaXplKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gdGhpcy5yZW5kZXJIaW50cygpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgdGhpcy5yZW5kZXJPYmplY3QoY2hpbGQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2V4Y2x1c2lvbic7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMuZG93blgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuZG93blgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICB9XG5cbiAgbW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICBpdGVtLnggKz0gZHg7XG4gICAgICBpdGVtLnkgKz0gZHk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBiZWdpbkRyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RyYWcnO1xuICB9XG5cbiAgY2FuY2VsRHJhZygpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICB9XG5cbiAgYmVnaW5NYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gIH1cblxuICBjYW5jZWxNYXJxdWVlKCkge1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIHRoaXMuZG93blggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5kb3duWSA9IHRoaXMuY3Vyc29yWTtcblxuICAgIGxldCBoaXQgPSB0aGlzLmhpdFRlc3QodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhoaXQpKSB7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbIGhpdCBdO1xuICAgICAgICBoaXQuc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJylcbiAgICAgIHRoaXMuY2FuY2VsRHJhZygpO1xuICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgIHRoaXMuc2VsZWN0TWFycXVlZSh0aGlzLmRvd25YLCB0aGlzLmRvd25ZLCB0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICB0aGlzLmNhbmNlbE1hcnF1ZWUoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbC5vZmZzZXRUb3A7XG5cbiAgICB0aGlzLmRlbHRhWCA9IHRoaXMubGFzdFggPyB0aGlzLmN1cnNvclggLSB0aGlzLmxhc3RYIDogMDtcbiAgICB0aGlzLmRlbHRhWSA9IHRoaXMubGFzdFkgPyB0aGlzLmN1cnNvclkgLSB0aGlzLmxhc3RZIDogMDtcblxuICAgIGlmIChldmVudC5idXR0b25zICYgMSkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KHRoaXMuZGVsdGFYLCB0aGlzLmRlbHRhWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZHggPSB0aGlzLmN1cnNvclggLSB0aGlzLmRvd25YO1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmN1cnNvclkgLSB0aGlzLmRvd25ZO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+PSAyIHx8IE1hdGguYWJzKGR5KSA+PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmJlZ2luRHJhZygpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5iZWdpbk1hcnF1ZWUodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5kb3duWCArIGR4LCB0aGlzLmRvd25ZICsgZHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICAvLyBpZiAoaGl0KSB7XG4gICAgICAvLyAgIHRoaXMudGFyZ2V0ID0gaGl0O1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAvLyAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0WCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmxhc3RZID0gdGhpcy5jdXJzb3JZO1xuXG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICAvLyBpZiAoZXZlbnQua2V5ID09ICdzJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnRvZ2dsZVN0cm9rZSgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJcbmNsYXNzIFN2ZyB7XG4gIHN0YXRpYyBlbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdHlwZSk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHN0YXRpYyBzdmcoYXR0cmlidXRlcykge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJywnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG4iLCJcbi8vIENvcHlyaWdodCAoYykgMTk3MC0yMDAzLCBXbS4gUmFuZG9scGggRnJhbmtsaW5cbi8vIGh0dHBzOi8vd3JmLmVjc2UucnBpLmVkdS8vUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcblxuZnVuY3Rpb24gcG9pbnRJblBvbHlnb24ocG9pbnRzLCB0ZXN0eCwgdGVzdHkpIHtcbiAgbGV0IGksIGosIGMgPSAwO1xuICBmb3IgKGxldCBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgIGlmICgoKHBvaW50c1tpXS55ID4gdGVzdHkpICE9IChwb2ludHNbal0ueSA+IHRlc3R5KSkgJiZcbiAgICAgICh0ZXN0eCA8IChwb2ludHNbal0ueCAtIHBvaW50c1tpXS54KSAqICh0ZXN0eSAtIHBvaW50c1tpXS55KSAvIChwb2ludHNbal0ueSAtIHBvaW50c1tpXS55KSArIHBvaW50c1tpXS54KSlcbiAgICAgIGMgPSAhYztcbiAgfVxuICByZXR1cm4gYztcbn1cblxuZnVuY3Rpb24gbGluZUludGVyc2VjdHNSZWN0YW5nbGUoeDEsIHkxLCB4MiwgeTIsIHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgLy8gQ29tcGxldGVseSBvdXRzaWRlLlxuICBpZiAoKHgxIDw9IHhtaW4gJiYgeDIgPD0geG1pbikgfHwgKHkxIDw9IHltaW4gJiYgeTIgPD0geW1pbikgfHxcbiAgICAgICh4MSA+PSB4bWF4ICYmIHgyID49IHhtYXgpIHx8ICh5MSA+PSB5bWF4ICYmIHkyID49IHltYXgpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICB2YXIgbSA9ICh5MiAtIHkxKSAvICh4MiAtIHgxKTtcblxuICB2YXIgeSA9IG0gKiAoeG1pbiAtIHgxKSArIHkxO1xuICBpZiAoeSA+IHltaW4gJiYgeSA8IHltYXgpIHJldHVybiB0cnVlO1xuXG4gIHkgPSBtICogKHhtYXggLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgeCA9ICh5bWluIC0geTEpIC8gbSArIHgxO1xuICBpZiAoeCA+IHhtaW4gJiYgeCA8IHhtYXgpIHJldHVybiB0cnVlO1xuXG4gIHggPSAoeW1heCAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGluZUludGVyc2VjdHNSZWN0YW5nbGU6IGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlLFxuICBwb2ludEluUG9seWdvbjogcG9pbnRJblBvbHlnb25cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=