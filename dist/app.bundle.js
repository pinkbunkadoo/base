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

var _shape = __webpack_require__(/*! ./display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

var _graphic = __webpack_require__(/*! ./display/graphic */ "./src/display/graphic.js");

var _graphic2 = _interopRequireDefault(_graphic);

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

    // createGraphic(shapes) {
    //   let stageEl = this.stage.dom();
    //
    //   // localise shape coordinates
    //   for (var i = 0; i < shapes.length; i++) {
    //     let shape = shapes[i];
    //     let bounds = shape.getBounds();
    //     if (bounds) {
    //       for (var j = 0; j < shape.points.length; j++) {
    //         let p = shape.points[j];
    //         p.x -= bounds.x;
    //         p.y -= bounds.y;
    //       }
    //       shape.x = bounds.x - stageEl.offsetLeft;
    //       shape.y = bounds.y - stageEl.offsetTop;
    //     }
    //   }
    //   let graphic = new Graphic({ shapes: shapes });
    //   this.stage.add(graphic);
    // }

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

/***/ "./src/display/graphic.js":
/*!********************************!*\
  !*** ./src/display/graphic.js ***!
  \********************************/
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

var _transform = __webpack_require__(/*! ./transform */ "./src/display/transform.js");

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Graphic = function (_Transform) {
  _inherits(Graphic, _Transform);

  function Graphic() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Graphic);

    var _this = _possibleConstructorReturn(this, (Graphic.__proto__ || Object.getPrototypeOf(Graphic)).call(this));

    _this.shapes = params.shapes || [];
    _this.canvas = document.createElement('canvas');
    var bounds = _this.getBounds();
    if (bounds) {
      bounds.grow(1);
      _this.width = bounds.width;
      _this.height = bounds.height;
      _this.x = bounds.x;
      _this.y = bounds.y;
    }
    _this.render();
    return _this;
  }

  _createClass(Graphic, [{
    key: 'hitTest',
    value: function hitTest(x, y) {
      for (var i = 0; i < this.shapes.length; i++) {
        var shape = this.shapes[i];
        if (shape.hitTest(x - this.x, y - this.y)) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var rect = void 0;

      if (this.shapes.length) {
        var xmin = Number.POSITIVE_INFINITY;
        var ymin = Number.POSITIVE_INFINITY;
        var xmax = Number.NEGATIVE_INFINITY;
        var ymax = Number.NEGATIVE_INFINITY;

        var empty = true;

        for (var i = 0; i < this.shapes.length; i++) {
          var shape = this.shapes[i];
          var bounds = shape.getBounds();
          if (bounds) {
            bounds.x += shape.x;
            bounds.y += shape.y;
            // console.log(bounds);
            xmin = bounds.x < xmin ? bounds.x : xmin;
            ymin = bounds.y < ymin ? bounds.y : ymin;
            xmax = bounds.x + bounds.width > xmax ? bounds.x + bounds.width : xmax;
            ymax = bounds.y + bounds.height > ymax ? bounds.y + bounds.height : ymax;
            // console.log(xmin, ymin, xmax, ymax);
            empty = false;
          }
        }

        if (!empty) rect = new _rectangle2.default(xmin, ymin, xmax - xmin, ymax - ymin);
      }

      return rect;
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('Graphic.render');
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // ctx.fillStyle = 'green';
      // ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.save();

      ctx.translate(1, 1);

      for (var i = 0; i < this.shapes.length; i++) {
        var shape = this.shapes[i];

        // let ps = 'M';
        ctx.strokeStyle = shape.stroke || 'transparent';
        ctx.fillStyle = shape.fill || 'transparent';

        ctx.beginPath();

        for (var j = 0; j < shape.points.length; j++) {
          var p = shape.points[j];
          if (j == 0) ctx.moveTo(p.x, p.y);else ctx.lineTo(p.x, p.y);
          // let p = shape.points[j];
          // if (j > 0) ps += 'L';
          // ps += (p.x - bounds.x) + ' ' + (p.y - bounds.y) + ' ';
        }
        if (shape.closed) {
          // ps += 'Z';
          ctx.closePath();
        }
        ctx.fill();
        ctx.stroke();
      }

      ctx.restore();
    }
  }, {
    key: 'update',
    value: function update() {
      // while (this.el.firstChild) this.el.removeChild(this.el.firstChild);
      //
      // let bounds = this.getBounds();
      // if (bounds) {
      //   this.x = bounds.x;
      //   this.y = bounds.y;
      //
      //   this.el.style.width = bounds.width + 'px';
      //   this.el.style.height = bounds.height + 'px';
      //
      //   let svgEl = svg.svg();
      //   svgEl.setAttribute('width', bounds.width);
      //   svgEl.setAttribute('height', bounds.height);
      //   svgEl.setAttribute('viewBox', '0 0 ' + bounds.width + ' ' + bounds.height);
      //   svgEl.setAttribute('pointer-events', 'none');
      //
      //   for (var i = 0; i < this.shapes.length; i++) {
      //     let shape = this.shapes[i];
      //
      //     let ps = 'M';
      //
      //     for (var j = 0; j < shape.points.length; j++) {
      //       let p = shape.points[j];
      //       if (j > 0) ps += 'L';
      //       ps += (p.x - bounds.x) + ' ' + (p.y - bounds.y) + ' ';
      //     }
      //     if (shape.closed) {
      //       ps += 'Z';
      //     }
      //
      //     console.log('fill', shape.fill);
      //
      //     let g = svg.element('g');
      //     // g.setAttribute('pointer-events', shape.fill ? 'visiblePainted' : 'visibleStroke');
      //     g.setAttribute('pointer-events', 'painted');
      //     let path = svg.element('path', { d: ps, fill: (shape.fill ? shape.fill : 'none'), stroke: shape.stroke });
      //     path.setAttribute('stroke-width', 3);
      //     g.appendChild(path);
      //
      //     svgEl.appendChild(g);
      //   }
      //   this.el.appendChild(svgEl);
      // }
    }
  }, {
    key: 'width',
    get: function get() {
      return this._width;
    },
    set: function set(value) {
      this._width = value;
      this.canvas.width = value;
    }
  }, {
    key: 'height',
    get: function get() {
      return this._height;
    },
    set: function set(value) {
      this._height = value;
      this.canvas.height = value;
    }
  }]);

  return Graphic;
}(_transform2.default);

exports.default = Graphic;

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
    var bounds = _this.pointList.getBounds();
    _this.x = bounds.x + bounds.width / 2;
    _this.y = bounds.y + bounds.height / 2;

    var points = _this.pointList.points;

    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      p.x -= _this.x;
      p.y -= _this.y;
    }
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
      return _util2.default.pointInPolygon(points, x - this.x, y - this.y);
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
    value: function renderShape(shape) {
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
    value: function renderObject(stageObject) {
      if (stageObject instanceof _group2.default) {
        for (var i = 0; i < stageObject.children.length; i++) {
          var child = stageObject.children[i];
          this.renderObject(child);
        }
      } else if (stageObject instanceof _shape2.default) {
        this.renderShape(stageObject);
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
        this.renderObject(child);
      }

      if (this.mode == 'marquee') {
        ctx.save();
        ctx.translate(0.5, 0.5);
        ctx.strokeStyle = 'gray';
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
      // this.marquee = [ xmin, ymin, xmax, ymax ];
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

      if (event.buttons & 1) {
        if (this.mode == 'drag') {
          if (this.selection.length) {
            this.moveSelectionBy(event.movementX, event.movementY);
          }
        } else if (this.mode == 'marquee') {
          // this.marquee[2] += event.movementX;
          // this.marquee[3] += event.movementY;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50X2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiQXBwIiwiZG9tIiwiaW5pdEVsZW1lbnRzIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwic3RhcnR1cCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhZ2UiLCJ3aWR0aCIsImhlaWdodCIsImFwcGVuZENoaWxkIiwicGFwZXIiLCJ2aXNpYmxlIiwiY29uc29sZSIsImxvZyIsInNoYXBlIiwicG9pbnRzIiwieCIsInkiLCJmaWxsIiwic3Ryb2tlIiwiY2xvc2VkIiwiYWRkIiwic3RhZ2VFbCIsInNoYXBlcyIsImdldFNoYXBlcyIsImkiLCJsZW5ndGgiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwibW9kZSIsInNldFZpc2libGUiLCJjbGVhciIsImdyYWJQYXBlclNoYXBlcyIsInNob3dQYXBlciIsImhpZGVQYXBlciIsImV2ZW50Iiwia2V5IiwicmVwZWF0IiwidG9nZ2xlUGFwZXIiLCJoYW5kbGVFdmVudCIsInR5cGUiLCJvbktleURvd24iLCJvbk1vdXNlRG93biIsImluaXQiLCJHcmFwaGljIiwicGFyYW1zIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImJvdW5kcyIsImdldEJvdW5kcyIsImdyb3ciLCJyZW5kZXIiLCJoaXRUZXN0IiwicmVjdCIsInhtaW4iLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsInltaW4iLCJ4bWF4IiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJ5bWF4IiwiZW1wdHkiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiaiIsInAiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJyZXN0b3JlIiwiX3dpZHRoIiwidmFsdWUiLCJfaGVpZ2h0IiwiR3JvdXAiLCJjaGlsZHJlbiIsImNoaWxkIiwicHVzaCIsInJlY3RzIiwiUmVjdGFuZ2xlIiwiU2hhcGUiLCJzdHJva2VXaWR0aCIsInBvaW50TGlzdCIsInAwIiwicDEiLCJsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSIsInBvaW50SW5Qb2x5Z29uIiwiVGV4dCIsInNldFNpemUiLCJzaXplIiwic2V0VGV4dCIsImNvbnRlbnQiLCJUcmFuc2Zvcm0iLCJzZWxlY3RlZCIsIl94IiwiX3kiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUG9pbnRMaXN0IiwiYW1vdW50IiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJTTkFQX1JBRElVUyIsIkNPTE9SUyIsIlBhcGVyIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGp1c3RDYW52YXMiLCJ1bmRlZmluZWQiLCJjdXJzb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkTGlzdGVuZXJzIiwicmVtb3ZlTGlzdGVuZXJzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29sb3IiLCJnZXRQb2ludHMiLCJkcmF3U2hhcGUiLCJkcmF3UGF0aCIsImN1cnNvcngiLCJjdXJzb3J5IiwiY3AiLCJkaXN0YW5jZSIsImFyYyIsIlBJIiwiYnV0dG9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJsZWZ0IiwidG9wIiwic2V0U3Ryb2tlIiwic2V0RmlsbCIsImluY2x1ZGVzIiwicGFyc2VJbnQiLCJjYW5jZWxQYXRoIiwicHJldmVudERlZmF1bHQiLCJvbk1vdXNlVXAiLCJvbk1vdXNlTW92ZSIsIm9uRGJsQ2xpY2siLCJvbkNvbnRleHRNZW51IiwiU3RhZ2UiLCJzZWxlY3Rpb24iLCJzdGFnZU9iamVjdCIsImFkZGVkVG9TdGFnZSIsImludGVyc2VjdHNSZWN0YW5nbGUiLCJzZWxlY3QiLCJkZXNlbGVjdCIsInJlbmRlck9iamVjdCIsInJlbmRlclNoYXBlIiwicmVuZGVySGludHMiLCJkb3duWCIsImRvd25ZIiwiY3Vyc29yWCIsImN1cnNvclkiLCJpdGVtIiwicGFnZVgiLCJwYWdlWSIsImhpdCIsImNhbmNlbERyYWciLCJzZWxlY3RNYXJxdWVlIiwiY2FuY2VsTWFycXVlZSIsImJ1dHRvbnMiLCJtb3ZlU2VsZWN0aW9uQnkiLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJhYnMiLCJiZWdpbkRyYWciLCJiZWdpbk1hcnF1ZWUiLCJTdmciLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsInN2ZyIsInRlc3R4IiwidGVz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OztrQkFFYztBQUNiZ0MsMkJBQXlCQSx1QkFEWjtBQUViQyxrQkFBZ0JBO0FBRkgsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCBzdmcgZnJvbSAnLi9zdmcnO1xuaW1wb3J0IFN0YWdlIGZyb20gJy4vc3RhZ2UnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXInO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICcuL2Rpc3BsYXkvZ3JhcGhpYyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2Rpc3BsYXkvdGV4dCc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnN0YXJ0dXAoKTtcbiAgfVxuXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIGluaXRFbGVtZW50cygpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICB0aGlzLnN0YWdlID0gbmV3IFN0YWdlKHsgd2lkdGg6IDQ4MCwgaGVpZ2h0OiA0ODAgfSk7XG4gICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMuc3RhZ2UuZG9tKCkpO1xuXG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcih7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnBhcGVyLmRvbSgpKTtcblxuICAgIC8vIHRoaXMucGFwZXIub24oJ3BhdGhzJywgKHBhdGhzKSA9PiB7XG4gICAgLy8gICB0aGlzLmNyZWF0ZVNoYXBlKHBhdGhzKTtcbiAgICAvLyAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgLy8gfSk7XG4gIH1cblxuICBzdGFydHVwKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydHVwJyk7XG5cbiAgICAvLyBsZXQgbGFiZWwgPSBuZXcgVGV4dCh7IHRpdGxlOiAnaGVsbG8nIH0pO1xuICAgIC8vIGxhYmVsLnggPSAyNTA7XG4gICAgLy8gbGFiZWwueSA9IDEwMDtcbiAgICAvLyB0aGlzLnN0YWdlLmFkZChsYWJlbCk7XG5cbiAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoe1xuICAgICAgcG9pbnRzOiBbIHsgeDogMCwgeTogMCB9LCB7IHg6IDYwLCB5OiAwIH0sIHsgeDogNDAsIHk6IDQwIH0sIHsgeDogMjAsIHk6IDEwIH0gXSxcbiAgICAgIGZpbGw6ICcjY2NjY2NjJyxcbiAgICAgIHN0cm9rZTogJ2JsYWNrJyxcbiAgICAgIGNsb3NlZDogdHJ1ZVxuICAgIH0pO1xuICAgIHNoYXBlLnggPSA2MDtcbiAgICBzaGFwZS55ID0gODA7XG4gICAgdGhpcy5zdGFnZS5hZGQoc2hhcGUpO1xuXG4gICAgc2hhcGUgPSBuZXcgU2hhcGUoe1xuICAgICAgcG9pbnRzOiBbIHsgeDogMCwgeTogMCB9LCB7IHg6IDYwLCB5OiAyMCB9LCB7IHg6IDEwMCwgeTogMjAgfSwgeyB4OiAxMDAsIHk6IDcwIH0gXSxcbiAgICAgIGZpbGw6ICcjY2NjY2NjJyxcbiAgICAgIHN0cm9rZTogbnVsbCxcbiAgICAgIGNsb3NlZDogdHJ1ZVxuICAgIH0pO1xuICAgIHNoYXBlLnggPSAxNTA7XG4gICAgc2hhcGUueSA9IDEwMDtcbiAgICB0aGlzLnN0YWdlLmFkZChzaGFwZSk7XG4gIH1cblxuICAvLyBjcmVhdGVHcmFwaGljKHNoYXBlcykge1xuICAvLyAgIGxldCBzdGFnZUVsID0gdGhpcy5zdGFnZS5kb20oKTtcbiAgLy9cbiAgLy8gICAvLyBsb2NhbGlzZSBzaGFwZSBjb29yZGluYXRlc1xuICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBsZXQgc2hhcGUgPSBzaGFwZXNbaV07XG4gIC8vICAgICBsZXQgYm91bmRzID0gc2hhcGUuZ2V0Qm91bmRzKCk7XG4gIC8vICAgICBpZiAoYm91bmRzKSB7XG4gIC8vICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2hhcGUucG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gIC8vICAgICAgICAgbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gIC8vICAgICAgICAgcC54IC09IGJvdW5kcy54O1xuICAvLyAgICAgICAgIHAueSAtPSBib3VuZHMueTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgICBzaGFwZS54ID0gYm91bmRzLnggLSBzdGFnZUVsLm9mZnNldExlZnQ7XG4gIC8vICAgICAgIHNoYXBlLnkgPSBib3VuZHMueSAtIHN0YWdlRWwub2Zmc2V0VG9wO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICBsZXQgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHsgc2hhcGVzOiBzaGFwZXMgfSk7XG4gIC8vICAgdGhpcy5zdGFnZS5hZGQoZ3JhcGhpYyk7XG4gIC8vIH1cblxuICBncmFiUGFwZXJTaGFwZXMoKSB7XG4gICAgbGV0IHN0YWdlRWwgPSB0aGlzLnN0YWdlLmRvbSgpO1xuICAgIGxldCBzaGFwZXMgPSB0aGlzLnBhcGVyLmdldFNoYXBlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICBzaGFwZS54IC09IHN0YWdlRWwub2Zmc2V0TGVmdDtcbiAgICAgIHNoYXBlLnkgLT0gc3RhZ2VFbC5vZmZzZXRUb3A7XG4gICAgICB0aGlzLnN0YWdlLmFkZChzaGFwZSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1BhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMucGFwZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgIHRoaXMucGFwZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMubW9kZSA9ICdwYXBlcic7XG4gICAgfVxuICB9XG5cbiAgaGlkZVBhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5ncmFiUGFwZXJTaGFwZXMoKTtcbiAgICAgIHRoaXMucGFwZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMuc2hvd1BhcGVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnRvZ2dsZVBhcGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgICAgICB0aGlzLnBhcGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIGxldCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICAvLyBsZXQgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgLy8gY29uc29sZS5sb2coeCwgeSk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuLi9zdmcnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgR3JhcGhpYyBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaGFwZXMgPSBwYXJhbXMuc2hhcGVzIHx8IFtdO1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgbGV0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcykge1xuICAgICAgYm91bmRzLmdyb3coMSk7XG4gICAgICB0aGlzLndpZHRoID0gYm91bmRzLndpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuICAgICAgdGhpcy54ID0gYm91bmRzLng7XG4gICAgICB0aGlzLnkgPSBib3VuZHMueTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cblxuICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdmFsdWU7XG4gIH1cblxuICBzZXQgaGVpZ2h0KHZhbHVlKSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcbiAgICAgIGlmIChzaGFwZS5oaXRUZXN0KHggLSB0aGlzLngsIHkgLSB0aGlzLnkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgbGV0IHJlY3Q7XG5cbiAgICBpZiAodGhpcy5zaGFwZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgbGV0IGVtcHR5ID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcbiAgICAgICAgbGV0IGJvdW5kcyA9IHNoYXBlLmdldEJvdW5kcygpO1xuICAgICAgICBpZiAoYm91bmRzKSB7XG4gICAgICAgICAgYm91bmRzLnggKz0gc2hhcGUueDtcbiAgICAgICAgICBib3VuZHMueSArPSBzaGFwZS55O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGJvdW5kcyk7XG4gICAgICAgICAgeG1pbiA9IChib3VuZHMueCA8IHhtaW4gPyBib3VuZHMueCA6IHhtaW4pO1xuICAgICAgICAgIHltaW4gPSAoYm91bmRzLnkgPCB5bWluID8gYm91bmRzLnkgOiB5bWluKTtcbiAgICAgICAgICB4bWF4ID0gKGJvdW5kcy54ICsgYm91bmRzLndpZHRoID4geG1heCA/IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIDogeG1heCk7XG4gICAgICAgICAgeW1heCA9IChib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgPiB5bWF4ID8gYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IDogeW1heCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coeG1pbiwgeW1pbiwgeG1heCwgeW1heCk7XG4gICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWVtcHR5KSByZWN0ID0gbmV3IFJlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdHcmFwaGljLnJlbmRlcicpO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKDEsIDEpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG5cbiAgICAgIC8vIGxldCBwcyA9ICdNJztcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXBlLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgcCA9IHNoYXBlLnBvaW50c1tqXTtcbiAgICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGN0eC5saW5lVG8ocC54LCBwLnkpO1xuICAgICAgICAvLyBsZXQgcCA9IHNoYXBlLnBvaW50c1tqXTtcbiAgICAgICAgLy8gaWYgKGogPiAwKSBwcyArPSAnTCc7XG4gICAgICAgIC8vIHBzICs9IChwLnggLSBib3VuZHMueCkgKyAnICcgKyAocC55IC0gYm91bmRzLnkpICsgJyAnO1xuICAgICAgfVxuICAgICAgaWYgKHNoYXBlLmNsb3NlZCkge1xuICAgICAgICAvLyBwcyArPSAnWic7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIH1cbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyB3aGlsZSAodGhpcy5lbC5maXJzdENoaWxkKSB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMuZWwuZmlyc3RDaGlsZCk7XG4gICAgLy9cbiAgICAvLyBsZXQgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcbiAgICAvLyBpZiAoYm91bmRzKSB7XG4gICAgLy8gICB0aGlzLnggPSBib3VuZHMueDtcbiAgICAvLyAgIHRoaXMueSA9IGJvdW5kcy55O1xuICAgIC8vXG4gICAgLy8gICB0aGlzLmVsLnN0eWxlLndpZHRoID0gYm91bmRzLndpZHRoICsgJ3B4JztcbiAgICAvLyAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gYm91bmRzLmhlaWdodCArICdweCc7XG4gICAgLy9cbiAgICAvLyAgIGxldCBzdmdFbCA9IHN2Zy5zdmcoKTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBib3VuZHMud2lkdGgpO1xuICAgIC8vICAgc3ZnRWwuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIGJvdW5kcy53aWR0aCArICcgJyArIGJvdW5kcy5oZWlnaHQpO1xuICAgIC8vICAgc3ZnRWwuc2V0QXR0cmlidXRlKCdwb2ludGVyLWV2ZW50cycsICdub25lJyk7XG4gICAgLy9cbiAgICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgLy9cbiAgICAvLyAgICAgbGV0IHBzID0gJ00nO1xuICAgIC8vXG4gICAgLy8gICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2hhcGUucG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgLy8gICAgICAgbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgLy8gICAgICAgaWYgKGogPiAwKSBwcyArPSAnTCc7XG4gICAgLy8gICAgICAgcHMgKz0gKHAueCAtIGJvdW5kcy54KSArICcgJyArIChwLnkgLSBib3VuZHMueSkgKyAnICc7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHNoYXBlLmNsb3NlZCkge1xuICAgIC8vICAgICAgIHBzICs9ICdaJztcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdmaWxsJywgc2hhcGUuZmlsbCk7XG4gICAgLy9cbiAgICAvLyAgICAgbGV0IGcgPSBzdmcuZWxlbWVudCgnZycpO1xuICAgIC8vICAgICAvLyBnLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCBzaGFwZS5maWxsID8gJ3Zpc2libGVQYWludGVkJyA6ICd2aXNpYmxlU3Ryb2tlJyk7XG4gICAgLy8gICAgIGcuc2V0QXR0cmlidXRlKCdwb2ludGVyLWV2ZW50cycsICdwYWludGVkJyk7XG4gICAgLy8gICAgIGxldCBwYXRoID0gc3ZnLmVsZW1lbnQoJ3BhdGgnLCB7IGQ6IHBzLCBmaWxsOiAoc2hhcGUuZmlsbCA/IHNoYXBlLmZpbGwgOiAnbm9uZScpLCBzdHJva2U6IHNoYXBlLnN0cm9rZSB9KTtcbiAgICAvLyAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIDMpO1xuICAgIC8vICAgICBnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIC8vXG4gICAgLy8gICAgIHN2Z0VsLmFwcGVuZENoaWxkKGcpO1xuICAgIC8vICAgfVxuICAgIC8vICAgdGhpcy5lbC5hcHBlbmRDaGlsZChzdmdFbCk7XG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoaWM7XG4iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxuXG4gIGFkZChjaGlsZCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgbGV0IHJlY3RzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBsZXQgYm91bmRzID0gY2hpbGQuZ2V0Qm91bmRzKCk7XG4gICAgICByZWN0cy5wdXNoKGJvdW5kcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlY3RzLmxlbmd0aCkge1xuICAgICAgbGV0IHhtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJlY3QgPSByZWN0c1tpXTtcbiAgICAgICAgeG1pbiA9IHJlY3QueCA8IHhtaW4gPyByZWN0LnggOiB4bWluO1xuICAgICAgICB5bWluID0gcmVjdC55IDwgeW1pbiA/IHJlY3QueSA6IHltaW47XG4gICAgICAgIHhtYXggPSByZWN0LnggKyByZWN0LndpZHRoID4geG1heCA/IHJlY3QueCArIHJlY3Qud2lkdGggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcmVjdC55ICsgcmVjdC5oZWlnaHQgPiB5bWF4ID8gcmVjdC55ICsgcmVjdC5oZWlnaHQgOiB5bWF4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeG1pbiArIHRoaXMueCwgeW1pbiArIHRoaXMueSwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFBvaW50TGlzdCBmcm9tICcuLi9nZW9tL3BvaW50X2xpc3QnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgU2hhcGUgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5maWxsID0gcGFyYW1zLmZpbGwgfHwgbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IHBhcmFtcy5zdHJva2UgfHwgbnVsbDtcbiAgICB0aGlzLnN0cm9rZVdpZHRoID0gcGFyYW1zLnN0cm9rZVdpZHRoIHx8IDE7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5wb2ludExpc3QgPSBuZXcgUG9pbnRMaXN0KHBhcmFtcy5wb2ludHMpO1xuICAgIGxldCBib3VuZHMgPSB0aGlzLnBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgICB0aGlzLnggPSBib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDI7XG4gICAgdGhpcy55ID0gYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IC8gMjtcblxuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBwLnggLT0gdGhpcy54O1xuICAgICAgcC55IC09IHRoaXMueTtcbiAgICB9XG4gIH1cblxuICBnZXRQb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICByZXR1cm4gdGhpcy5wb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gIH1cblxuICBpbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHBvaW50cyA9IHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAwID0gcG9pbnRzW2kgLSAxXTtcbiAgICAgIGxldCBwMSA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChVdGlsLmxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlKHAwLngsIHAwLnksIHAxLngsIHAxLnksIHhtaW4gLSB0aGlzLngsIHltaW4gLSB0aGlzLnksIHhtYXggLSB0aGlzLngsIHltYXggLSB0aGlzLnkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBsZXQgcG9pbnRzID0gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICAgIHJldHVybiBVdGlsLnBvaW50SW5Qb2x5Z29uKHBvaW50cywgeCAtIHRoaXMueCwgeSAtIHRoaXMueSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLmNvbnRlbnQpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgeyBFdmVudCwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZXZlbnRzJztcblxuY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzLl94ID0gdmFsdWU7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZGVkVG9TdGFnZSgpIHtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybTtcbiIsIlxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJhbXMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbiAgZW1pdCh0eXBlLCAuLi5hcmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICBpZiAobGlzdGVuZXIudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyB0eXBlOiB0eXBlLCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEV2ZW50RGlzcGF0Y2hlciwgRXZlbnQgfTtcbiIsIlxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICB9XG5cbiAgaW50ZXJzZWN0c0xpbmVTZWdtZW50KHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgfVxuXG4gIGNvbnRhaW5zUG9pbnQoeCwgeSkge1xuICAgIGxldCBkeCA9IHggLSB0aGlzLng7XG4gICAgbGV0IGR5ID0geSAtIHRoaXMueTtcbiAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgcmV0dXJuIGQgPCB0aGlzLnI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiXG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkaXN0YW5jZShwb2ludCkge1xuICAgIGxldCBkeCA9IHRoaXMueCAtIHBvaW50Lng7XG4gICAgbGV0IGR5ID0gdGhpcy55IC0gcG9pbnQueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9yZWN0YW5nbGUnO1xuXG5jbGFzcyBQb2ludExpc3Qge1xuICBjb25zdHJ1Y3Rvcihwb2ludHMpIHtcbiAgICB0aGlzLnBvaW50cyA9IHBvaW50cyB8fCBbXTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSBwLnkgPCB5bWluID8gcC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcC55ID4geW1heCA/IHAueSA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50TGlzdDtcbiIsIlxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBncm93KGFtb3VudCkge1xuICAgIHRoaXMueCAtPSBhbW91bnQ7XG4gICAgdGhpcy55IC09IGFtb3VudDtcbiAgICB0aGlzLndpZHRoICs9IGFtb3VudCAqIDI7XG4gICAgdGhpcy5oZWlnaHQgKz0gYW1vdW50ICogMjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJcbmNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkb3QodmVjdG9yKSB7XG4gICAgcmV0dXJuICh0aGlzLnggKiB2ZWN0b3IueCArIHRoaXMueSAqIHZlY3Rvci55KTtcbiAgfVxuXG4gIG1hZygpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBwcm9qZWN0KHZlY3Rvcikge1xuICAgIGxldCBkID0gdmVjdG9yLmRvdCh2ZWN0b3IpO1xuICAgIGlmIChkID4gMCkge1xuICAgICAgbGV0IHJhdGlvID0gdGhpcy5kb3QodmVjdG9yKSAvIGQ7XG4gICAgICAvLyByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHJhdGlvIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL2dlb20vdmVjdG9yJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9nZW9tL2NpcmNsZSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcblxubGV0IFNOQVBfUkFESVVTID0gMztcbmxldCBDT0xPUlMgPSBbXG4gICd3aGl0ZScsXG4gICcjY2NjY2NjJyxcbiAgJyM5OTk5OTknLFxuICAnIzY2NjY2NicsXG4gICcjMzMzMzMzJyxcbiAgJ2JsYWNrJ1xuXTtcblxuY2xhc3MgUGFwZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgIHRoaXMuZmlsbCA9IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBDT0xPUlNbNV07XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdwYXBlcicpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmFkanVzdENhbnZhcygpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLnNldFZpc2libGUocGFyYW1zLnZpc2libGUgIT09IHVuZGVmaW5lZCA/IHBhcmFtcy52aXNpYmxlIDogdHJ1ZSk7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IFsgJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdkYmxjbGljaycsICdjb250ZXh0bWVudScgXTtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncGFwZXItY3Vyc29yJyk7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY3Vyc29yKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubGlzdGVuZXJzW2ldLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRWaXNpYmxlKHZpc2libGUpIHtcbiAgICBpZiAodGhpcy52aXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkanVzdENhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIGRyYXdMaW5lKHgxLCB5MSwgeDIsIHkyLCBjb2xvcikge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8ICdibGFjayc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcbiAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd1BhdGgocGFyYW1zPXt9KSB7XG4gICAgbGV0IHBvaW50cyA9IHBhcmFtcy5wb2ludHMgfHwgW107XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gcGFyYW1zLnN0cm9rZSAhPT0gdW5kZWZpbmVkID8gKHBhcmFtcy5zdHJva2UgPyBwYXJhbXMuc3Ryb2tlIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwYXJhbXMuZmlsbCAhPT0gdW5kZWZpbmVkID8gKHBhcmFtcy5maWxsID8gcGFyYW1zLmZpbGwgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgaWYgKGkgPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8ocC54LCBwLnkpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGRyYXdTaGFwZShzaGFwZSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICAvLyB0aGlzLmRyYXdQYXRoKHsgcG9pbnRzOiBzaGFwZS5wb2ludHMsIGZpbGw6IHNoYXBlLmZpbGwsIHN0cm9rZTogc2hhcGUuc3Ryb2tlLCBjbG9zZWQ6IHNoYXBlLmNsb3NlZCB9KTtcbiAgICAgIHRoaXMuZHJhd1NoYXBlKHNoYXBlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRyYXdQYXRoKHsgcG9pbnRzOiB0aGlzLnBvaW50cywgZmlsbDogdGhpcy5maWxsLCBzdHJva2U6IHRoaXMuc3Ryb2tlIH0pO1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yeCwgdGhpcy5jdXJzb3J5KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgbGV0IGNwID0gbmV3IFBvaW50KHRoaXMuY3Vyc29yeCwgdGhpcy5jdXJzb3J5KTtcbiAgICAgIGxldCBwMCA9IHRoaXMucG9pbnRzWzBdO1xuICAgICAgaWYgKGNwLmRpc3RhbmNlKHAwKSA8IFNOQVBfUkFESVVTKSB7XG4gICAgICAgIGN0eC5hcmMocDAueCwgcDAueSwgNSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBnZXRTaGFwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcGVzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjYW5jZWxQYXRoKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNsb3NlUGF0aChjbG9zZWQ9ZmFsc2UpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHsgcG9pbnRzOiB0aGlzLnBvaW50cywgY2xvc2VkOiBjbG9zZWQsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSB9KTtcbiAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUpO1xuICAgIH1cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRGaWxsKGZpbGwpIHtcbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRTdHJva2Uoc3Ryb2tlKSB7XG4gICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLnNoYXBlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICBpZiAoY2hpbGQuaGl0VGVzdCh4LCB5KSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGxldCBwID0gbmV3IFBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICBpZiAocC5kaXN0YW5jZSh0aGlzLnBvaW50c1swXSkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3J4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvcnkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yeCArICdweCc7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3J5ICsgJ3B4JztcblxuICAgIGlmICh0aGlzLm1vZGUgIT09ICdkcmF3Jykge1xuXG4gICAgfVxuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdzJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnNldFN0cm9rZSh0aGlzLnN0cm9rZSA/IG51bGwgOiAnYmxhY2snKVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJzAnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuc2V0RmlsbChudWxsKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOSddLmluY2x1ZGVzKGV2ZW50LmtleSkgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgbGV0IGNvbG9yID0gQ09MT1JTW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXTtcbiAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLnNldEZpbGwoY29sb3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYXcnKSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICAgIHRoaXMuY2FuY2VsUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5cbmNsYXNzIFN0YWdlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHBhcmFtcy53aWR0aCB8fCAzMjA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gcGFyYW1zLmhlaWdodCB8fCAyMDA7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnc3RhZ2UtY3Vyc29yJyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGQoc3RhZ2VPYmplY3QpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goc3RhZ2VPYmplY3QpO1xuICAgIHN0YWdlT2JqZWN0LmFkZGVkVG9TdGFnZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICAgIGlmIChjaGlsZC5pbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpKSB7XG4gICAgICAgICAgc2VsZWN0aW9uLnB1c2goY2hpbGQpO1xuICAgICAgICAgIGNoaWxkLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlclNoYXBlKHNoYXBlKSB7XG4gICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIC8vIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54ICsgc2hhcGUueCwgcC55ICsgc2hhcGUueSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8ocC54ICsgc2hhcGUueCwgcC55ICsgc2hhcGUueSk7XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHMoc3RhZ2VPYmplY3QpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdGFnZU9iamVjdC5zZWxlY3RlZCA/ICdyZWQnIDogJ2JsdWUnO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHN0YWdlT2JqZWN0LnggPj4gMCwgc3RhZ2VPYmplY3QueSA+PiAwLCAzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBsZXQgYm91bmRzID0gc3RhZ2VPYmplY3QuZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcykge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3RhZ2VPYmplY3Quc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KChzdGFnZU9iamVjdC54KSArIGJvdW5kcy54ICsgMC41LCAoc3RhZ2VPYmplY3QueSkgKyBib3VuZHMueSArIDAuNSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJPYmplY3Qoc3RhZ2VPYmplY3QpIHtcbiAgICBpZiAoc3RhZ2VPYmplY3QgaW5zdGFuY2VvZiBHcm91cCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFnZU9iamVjdC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBzdGFnZU9iamVjdC5jaGlsZHJlbltpXTtcbiAgICAgICAgdGhpcy5yZW5kZXJPYmplY3QoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzdGFnZU9iamVjdCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICB0aGlzLnJlbmRlclNoYXBlKHN0YWdlT2JqZWN0KTtcbiAgICB9XG4gICAgaWYgKHN0YWdlT2JqZWN0LnNlbGVjdGVkKSB0aGlzLnJlbmRlckhpbnRzKHN0YWdlT2JqZWN0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgdGhpcy5yZW5kZXJPYmplY3QoY2hpbGQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAvLyBjdHgubW92ZVRvKHRoaXMubWFycXVlZVswXSwgdGhpcy5tYXJxdWVlWzFdKTtcbiAgICAgIC8vIGN0eC5saW5lVG8odGhpcy5tYXJxdWVlWzJdLCB0aGlzLm1hcnF1ZWVbMV0pO1xuICAgICAgLy8gY3R4LmxpbmVUbyh0aGlzLm1hcnF1ZWVbMl0sIHRoaXMubWFycXVlZVszXSk7XG4gICAgICAvLyBjdHgubGluZVRvKHRoaXMubWFycXVlZVswXSwgdGhpcy5tYXJxdWVlWzNdKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy5kb3duWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5kb3duWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gIH1cblxuICBtb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgIGl0ZW0ueCArPSBkeDtcbiAgICAgIGl0ZW0ueSArPSBkeTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGJlZ2luRHJhZygpIHtcbiAgICB0aGlzLm1vZGUgPSAnZHJhZyc7XG4gIH1cblxuICBjYW5jZWxEcmFnKCkge1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gIH1cblxuICBiZWdpbk1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIHRoaXMubW9kZSA9ICdtYXJxdWVlJztcbiAgICAvLyB0aGlzLm1hcnF1ZWUgPSBbIHhtaW4sIHltaW4sIHhtYXgsIHltYXggXTtcbiAgfVxuXG4gIGNhbmNlbE1hcnF1ZWUoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQuaGl0VGVzdCh4LCB5KSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgdGhpcy5kb3duWCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmRvd25ZID0gdGhpcy5jdXJzb3JZO1xuXG4gICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKGhpdCkpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFsgaGl0IF07XG4gICAgICAgIGhpdC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKVxuICAgICAgdGhpcy5jYW5jZWxEcmFnKCk7XG4gICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgdGhpcy5zZWxlY3RNYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIHRoaXMuY2FuY2VsTWFycXVlZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIGlmIChldmVudC5idXR0b25zICYgMSkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KGV2ZW50Lm1vdmVtZW50WCwgZXZlbnQubW92ZW1lbnRZKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgICAvLyB0aGlzLm1hcnF1ZWVbMl0gKz0gZXZlbnQubW92ZW1lbnRYO1xuICAgICAgICAvLyB0aGlzLm1hcnF1ZWVbM10gKz0gZXZlbnQubW92ZW1lbnRZO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMuY3Vyc29yWCAtIHRoaXMuZG93blg7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuY3Vyc29yWSAtIHRoaXMuZG93blk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID49IDIgfHwgTWF0aC5hYnMoZHkpID49IDIpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5EcmFnKCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJlZ2luTWFycXVlZSh0aGlzLmRvd25YLCB0aGlzLmRvd25ZLCB0aGlzLmRvd25YICsgZHgsIHRoaXMuZG93blkgKyBkeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIiwiXG4vLyBDb3B5cmlnaHQgKGMpIDE5NzAtMjAwMywgV20uIFJhbmRvbHBoIEZyYW5rbGluXG4vLyBodHRwczovL3dyZi5lY3NlLnJwaS5lZHUvL1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sXG5cbmZ1bmN0aW9uIHBvaW50SW5Qb2x5Z29uKHBvaW50cywgdGVzdHgsIHRlc3R5KSB7XG4gIGxldCBpLCBqLCBjID0gMDtcbiAgZm9yIChsZXQgaSA9IDAsIGogPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICBpZiAoKChwb2ludHNbaV0ueSA+IHRlc3R5KSAhPSAocG9pbnRzW2pdLnkgPiB0ZXN0eSkpICYmXG4gICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICBjID0gIWM7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlKHgxLCB5MSwgeDIsIHkyLCB4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gIC8vIENvbXBsZXRlbHkgb3V0c2lkZS5cbiAgaWYgKCh4MSA8PSB4bWluICYmIHgyIDw9IHhtaW4pIHx8ICh5MSA8PSB5bWluICYmIHkyIDw9IHltaW4pIHx8XG4gICAgICAoeDEgPj0geG1heCAmJiB4MiA+PSB4bWF4KSB8fCAoeTEgPj0geW1heCAmJiB5MiA+PSB5bWF4KSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG0gPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG5cbiAgdmFyIHkgPSBtICogKHhtaW4gLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB5ID0gbSAqICh4bWF4IC0geDEpICsgeTE7XG4gIGlmICh5ID4geW1pbiAmJiB5IDwgeW1heCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHggPSAoeW1pbiAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB4ID0gKHltYXggLSB5MSkgLyBtICsgeDE7XG4gIGlmICh4ID4geG1pbiAmJiB4IDwgeG1heCkgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlOiBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSxcbiAgcG9pbnRJblBvbHlnb246IHBvaW50SW5Qb2x5Z29uXG59XG4iXSwic291cmNlUm9vdCI6IiJ9