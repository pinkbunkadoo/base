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

      this.stage = new _stage2.default();
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

      var label = new _text2.default({ value: 'hello' });
      label.x = 250;
      label.y = 100;

      this.stage.add(label);

      var shape = new _shape2.default({
        points: [{ x: 0, y: 0 }, { x: 60, y: 0 }, { x: 40, y: 40 }, { x: 20, y: 10 }],
        fill: '#cccccc',
        stroke: 'black',
        closed: true
      });
      // shape.x = 60;
      // shape.y = 80;
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
    _this.setText(params.value);
    return _this;
  }

  _createClass(Text, [{
    key: 'setSize',
    value: function setSize(value) {
      this.size = value;
      // this.el.style.fontSize = this.size + 'px';
    }
  }, {
    key: 'setText',
    value: function setText(value) {
      this.value = value;
      // this.el.innerHTML = this.value;
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
    }
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {
      this.closePath();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (this.command) {
        this.onParameter(event.key);
      } else {
        if (event.key == 'Escape' && !event.repeat) {
          this.cancelPath();
        } else if (event.key == 'Enter' && !event.repeat) {
          this.closePath();
        } else if (event.key == 's' && !event.repeat) {
          this.setStroke(this.stroke ? null : 'black');
        } else if (event.key == '0' && !event.repeat) {
          this.setFill(null);
        } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(event.key) && !event.repeat) {
          var color = COLORS[parseInt(event.key) - 1];
          if (color !== undefined) this.setFill(color);
        }
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    this.canvas.width = 400;
    this.canvas.height = 300;

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
      var selection = [];
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
        ctx.moveTo(this.marquee[0], this.marquee[1]);
        ctx.lineTo(this.marquee[2], this.marquee[1]);
        ctx.lineTo(this.marquee[2], this.marquee[3]);
        ctx.lineTo(this.marquee[0], this.marquee[3]);
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
      this.marquee = [xmin, ymin, xmax, ymax];
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
        this.selectMarquee.apply(this, _toConsumableArray(this.marquee));
        this.cancelMarquee();
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorX = event.pageX - this.el.offsetLeft;
      this.cursorY = event.pageY - this.el.offsetTop;

      // this.cursor.style.left = this.cursorX + 'px';
      // this.cursor.style.top = this.cursorY + 'px';

      if (event.buttons & 1) {
        if (this.mode == 'drag') {
          if (this.selection.length) {
            this.moveSelectionBy(event.movementX, event.movementY);
          }
        } else if (this.mode == 'marquee') {
          this.marquee[2] += event.movementX;
          this.marquee[3] += event.movementY;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50X2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiQXBwIiwiZG9tIiwiaW5pdEVsZW1lbnRzIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwic3RhcnR1cCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhZ2UiLCJhcHBlbmRDaGlsZCIsInBhcGVyIiwidmlzaWJsZSIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsInZhbHVlIiwieCIsInkiLCJhZGQiLCJzaGFwZSIsInBvaW50cyIsImZpbGwiLCJzdHJva2UiLCJjbG9zZWQiLCJzdGFnZUVsIiwic2hhcGVzIiwiZ2V0U2hhcGVzIiwiaSIsImxlbmd0aCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwiZ3JhYlBhcGVyU2hhcGVzIiwic2hvd1BhcGVyIiwiaGlkZVBhcGVyIiwiZXZlbnQiLCJrZXkiLCJyZXBlYXQiLCJ0b2dnbGVQYXBlciIsImhhbmRsZUV2ZW50IiwidHlwZSIsIm9uS2V5RG93biIsIm9uTW91c2VEb3duIiwiaW5pdCIsIkdyYXBoaWMiLCJwYXJhbXMiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwiZ3JvdyIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyIiwiaGl0VGVzdCIsInJlY3QiLCJ4bWluIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJ5bWluIiwieG1heCIsIk5FR0FUSVZFX0lORklOSVRZIiwieW1heCIsImVtcHR5IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImoiLCJwIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsIl93aWR0aCIsIl9oZWlnaHQiLCJHcm91cCIsImNoaWxkcmVuIiwiY2hpbGQiLCJwdXNoIiwicmVjdHMiLCJSZWN0YW5nbGUiLCJTaGFwZSIsInN0cm9rZVdpZHRoIiwicG9pbnRMaXN0IiwicDAiLCJwMSIsImxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlIiwicG9pbnRJblBvbHlnb24iLCJUZXh0Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRUZXh0IiwiVHJhbnNmb3JtIiwic2VsZWN0ZWQiLCJfeCIsIl95IiwiRXZlbnQiLCJFdmVudERpc3BhdGNoZXIiLCJsaXN0ZW5lcnMiLCJhcmdzIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsIm1vZHVsZSIsImV4cG9ydHMiLCJDaXJjbGUiLCJyIiwieDEiLCJ5MSIsIngyIiwieTIiLCJkeCIsImR5IiwiZCIsIk1hdGgiLCJzcXJ0IiwiUG9pbnQiLCJwb2ludCIsIlBvaW50TGlzdCIsImFtb3VudCIsIlZlY3RvciIsInZlY3RvciIsImRvdCIsInJhdGlvIiwiU05BUF9SQURJVVMiLCJDT0xPUlMiLCJQYXBlciIsImVsIiwiY2xhc3NMaXN0IiwiYWRqdXN0Q2FudmFzIiwidW5kZWZpbmVkIiwiY3Vyc29yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImFkZExpc3RlbmVycyIsInJlbW92ZUxpc3RlbmVycyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNvbG9yIiwiZ2V0UG9pbnRzIiwiZHJhd1NoYXBlIiwiZHJhd1BhdGgiLCJjdXJzb3J4IiwiY3Vyc29yeSIsImNwIiwiZGlzdGFuY2UiLCJhcmMiLCJQSSIsImJ1dHRvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwibGVmdCIsInRvcCIsImNvbW1hbmQiLCJvblBhcmFtZXRlciIsImNhbmNlbFBhdGgiLCJzZXRTdHJva2UiLCJzZXRGaWxsIiwiaW5jbHVkZXMiLCJwYXJzZUludCIsInByZXZlbnREZWZhdWx0Iiwib25Nb3VzZVVwIiwib25Nb3VzZU1vdmUiLCJvbkRibENsaWNrIiwib25Db250ZXh0TWVudSIsIlN0YWdlIiwic2VsZWN0aW9uIiwic3RhZ2VPYmplY3QiLCJhZGRlZFRvU3RhZ2UiLCJpbnRlcnNlY3RzUmVjdGFuZ2xlIiwic2VsZWN0IiwiZGVzZWxlY3QiLCJyZW5kZXJPYmplY3QiLCJyZW5kZXJTaGFwZSIsInJlbmRlckhpbnRzIiwibWFycXVlZSIsIml0ZW0iLCJjdXJzb3JYIiwicGFnZVgiLCJjdXJzb3JZIiwicGFnZVkiLCJkb3duWCIsImRvd25ZIiwiaGl0IiwiY2FuY2VsRHJhZyIsInNlbGVjdE1hcnF1ZWUiLCJjYW5jZWxNYXJxdWVlIiwiYnV0dG9ucyIsIm1vdmVTZWxlY3Rpb25CeSIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsImFicyIsImJlZ2luRHJhZyIsImJlZ2luTWFycXVlZSIsIlN2ZyIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lIiwi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LEVBQTBCLE9BQU8sSUFBUDs7QUFFMUIsTUFBSWhELElBQUksQ0FBQzZDLE9BQU9xRCxFQUFSLElBQWNnRyxDQUFkLEdBQWtCakcsRUFBMUI7QUFDQSxNQUFJakcsSUFBSTBDLElBQUosSUFBWTFDLElBQUk4QyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCOUMsTUFBSSxDQUFDZ0QsT0FBT2tELEVBQVIsSUFBY2dHLENBQWQsR0FBa0JqRyxFQUF0QjtBQUNBLE1BQUlqRyxJQUFJMEMsSUFBSixJQUFZMUMsSUFBSThDLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUIsU0FBTyxLQUFQO0FBQ0Q7O2tCQUVjO0FBQ2IrQiwyQkFBeUJBLHVCQURaO0FBRWJDLGtCQUFnQkE7QUFGSCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcmFwaGljIGZyb20gJy4vZGlzcGxheS9ncmFwaGljJztcbmltcG9ydCBUZXh0IGZyb20gJy4vZGlzcGxheS90ZXh0JztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSBbXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc3RhcnR1cCgpO1xuICB9XG5cbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICB9XG5cbiAgaW5pdEVsZW1lbnRzKCkge1xuICAgIHRoaXMuZG9tLmFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgIHRoaXMuc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5zdGFnZS5kb20oKSk7XG5cbiAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKHsgdmlzaWJsZTogZmFsc2UgfSk7XG4gICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMucGFwZXIuZG9tKCkpO1xuXG4gICAgLy8gdGhpcy5wYXBlci5vbigncGF0aHMnLCAocGF0aHMpID0+IHtcbiAgICAvLyAgIHRoaXMuY3JlYXRlU2hhcGUocGF0aHMpO1xuICAgIC8vICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHN0YXJ0dXAoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0dXAnKTtcblxuICAgIGxldCBsYWJlbCA9IG5ldyBUZXh0KHsgdmFsdWU6ICdoZWxsbycgfSk7XG4gICAgbGFiZWwueCA9IDI1MDtcbiAgICBsYWJlbC55ID0gMTAwO1xuXG4gICAgdGhpcy5zdGFnZS5hZGQobGFiZWwpO1xuXG4gICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHtcbiAgICAgIHBvaW50czogWyB7IHg6IDAsIHk6IDAgfSwgeyB4OiA2MCwgeTogMCB9LCB7IHg6IDQwLCB5OiA0MCB9LCB7IHg6IDIwLCB5OiAxMCB9IF0sXG4gICAgICBmaWxsOiAnI2NjY2NjYycsXG4gICAgICBzdHJva2U6ICdibGFjaycsXG4gICAgICBjbG9zZWQ6IHRydWVcbiAgICB9KTtcbiAgICAvLyBzaGFwZS54ID0gNjA7XG4gICAgLy8gc2hhcGUueSA9IDgwO1xuICAgIHRoaXMuc3RhZ2UuYWRkKHNoYXBlKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZUdyYXBoaWMoc2hhcGVzKSB7XG4gIC8vICAgbGV0IHN0YWdlRWwgPSB0aGlzLnN0YWdlLmRvbSgpO1xuICAvL1xuICAvLyAgIC8vIGxvY2FsaXNlIHNoYXBlIGNvb3JkaW5hdGVzXG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgLy8gICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgLy8gICAgIGlmIChib3VuZHMpIHtcbiAgLy8gICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZS5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgLy8gICAgICAgICBsZXQgcCA9IHNoYXBlLnBvaW50c1tqXTtcbiAgLy8gICAgICAgICBwLnggLT0gYm91bmRzLng7XG4gIC8vICAgICAgICAgcC55IC09IGJvdW5kcy55O1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIHNoYXBlLnggPSBib3VuZHMueCAtIHN0YWdlRWwub2Zmc2V0TGVmdDtcbiAgLy8gICAgICAgc2hhcGUueSA9IGJvdW5kcy55IC0gc3RhZ2VFbC5vZmZzZXRUb3A7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIGxldCBncmFwaGljID0gbmV3IEdyYXBoaWMoeyBzaGFwZXM6IHNoYXBlcyB9KTtcbiAgLy8gICB0aGlzLnN0YWdlLmFkZChncmFwaGljKTtcbiAgLy8gfVxuXG4gIGdyYWJQYXBlclNoYXBlcygpIHtcbiAgICBsZXQgc3RhZ2VFbCA9IHRoaXMuc3RhZ2UuZG9tKCk7XG4gICAgbGV0IHNoYXBlcyA9IHRoaXMucGFwZXIuZ2V0U2hhcGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgICAgIHNoYXBlLnggLT0gc3RhZ2VFbC5vZmZzZXRMZWZ0O1xuICAgICAgc2hhcGUueSAtPSBzdGFnZUVsLm9mZnNldFRvcDtcbiAgICAgIHRoaXMuc3RhZ2UuYWRkKHNoYXBlKTtcbiAgICB9XG4gIH1cblxuICBzaG93UGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5wYXBlci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gJ3BhcGVyJztcbiAgICB9XG4gIH1cblxuICBoaWRlUGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLmdyYWJQYXBlclNoYXBlcygpO1xuICAgICAgdGhpcy5wYXBlci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHRoaXMucGFwZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5zaG93UGFwZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ3AnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUGFwZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgICAgIHRoaXMucGFwZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gbGV0IHggPSBldmVudC5vZmZzZXRYO1xuICAgIC8vIGxldCB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICAvLyBjb25zb2xlLmxvZyh4LCB5KTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpO1xuICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuICBhcHAuaW5pdCgpO1xufSk7XG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4uL3N2Zyc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBHcmFwaGljIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNoYXBlcyA9IHBhcmFtcy5zaGFwZXMgfHwgW107XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBsZXQgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcbiAgICBpZiAoYm91bmRzKSB7XG4gICAgICBib3VuZHMuZ3JvdygxKTtcbiAgICAgIHRoaXMud2lkdGggPSBib3VuZHMud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XG4gICAgICB0aGlzLnggPSBib3VuZHMueDtcbiAgICAgIHRoaXMueSA9IGJvdW5kcy55O1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIHNldCB3aWR0aCh2YWx1ZSkge1xuICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgaWYgKHNoYXBlLmhpdFRlc3QoeCAtIHRoaXMueCwgeSAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdDtcblxuICAgIGlmICh0aGlzLnNoYXBlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBsZXQgZW1wdHkgPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgICBsZXQgYm91bmRzID0gc2hhcGUuZ2V0Qm91bmRzKCk7XG4gICAgICAgIGlmIChib3VuZHMpIHtcbiAgICAgICAgICBib3VuZHMueCArPSBzaGFwZS54O1xuICAgICAgICAgIGJvdW5kcy55ICs9IHNoYXBlLnk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYm91bmRzKTtcbiAgICAgICAgICB4bWluID0gKGJvdW5kcy54IDwgeG1pbiA/IGJvdW5kcy54IDogeG1pbik7XG4gICAgICAgICAgeW1pbiA9IChib3VuZHMueSA8IHltaW4gPyBib3VuZHMueSA6IHltaW4pO1xuICAgICAgICAgIHhtYXggPSAoYm91bmRzLnggKyBib3VuZHMud2lkdGggPiB4bWF4ID8gYm91bmRzLnggKyBib3VuZHMud2lkdGggOiB4bWF4KTtcbiAgICAgICAgICB5bWF4ID0gKGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCA+IHltYXggPyBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgOiB5bWF4KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4bWluLCB5bWluLCB4bWF4LCB5bWF4KTtcbiAgICAgICAgICBlbXB0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZW1wdHkpIHJlY3QgPSBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0dyYXBoaWMucmVuZGVyJyk7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC50cmFuc2xhdGUoMSwgMSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcblxuICAgICAgLy8gbGV0IHBzID0gJ00nO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2hhcGUucG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgICAgICBpZiAoaiA9PSAwKVxuICAgICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgICAgIC8vIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgICAgICAvLyBpZiAoaiA+IDApIHBzICs9ICdMJztcbiAgICAgICAgLy8gcHMgKz0gKHAueCAtIGJvdW5kcy54KSArICcgJyArIChwLnkgLSBib3VuZHMueSkgKyAnICc7XG4gICAgICB9XG4gICAgICBpZiAoc2hhcGUuY2xvc2VkKSB7XG4gICAgICAgIC8vIHBzICs9ICdaJztcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgfVxuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIHdoaWxlICh0aGlzLmVsLmZpcnN0Q2hpbGQpIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5lbC5maXJzdENoaWxkKTtcbiAgICAvL1xuICAgIC8vIGxldCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuICAgIC8vIGlmIChib3VuZHMpIHtcbiAgICAvLyAgIHRoaXMueCA9IGJvdW5kcy54O1xuICAgIC8vICAgdGhpcy55ID0gYm91bmRzLnk7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSBib3VuZHMud2lkdGggKyAncHgnO1xuICAgIC8vICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBib3VuZHMuaGVpZ2h0ICsgJ3B4JztcbiAgICAvL1xuICAgIC8vICAgbGV0IHN2Z0VsID0gc3ZnLnN2ZygpO1xuICAgIC8vICAgc3ZnRWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGJvdW5kcy53aWR0aCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGJvdW5kcy5oZWlnaHQpO1xuICAgIC8vICAgc3ZnRWwuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgYm91bmRzLndpZHRoICsgJyAnICsgYm91bmRzLmhlaWdodCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcbiAgICAvL1xuICAgIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcbiAgICAvL1xuICAgIC8vICAgICBsZXQgcHMgPSAnTSc7XG4gICAgLy9cbiAgICAvLyAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZS5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgICAgICBsZXQgcCA9IHNoYXBlLnBvaW50c1tqXTtcbiAgICAvLyAgICAgICBpZiAoaiA+IDApIHBzICs9ICdMJztcbiAgICAvLyAgICAgICBwcyArPSAocC54IC0gYm91bmRzLngpICsgJyAnICsgKHAueSAtIGJvdW5kcy55KSArICcgJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoc2hhcGUuY2xvc2VkKSB7XG4gICAgLy8gICAgICAgcHMgKz0gJ1onO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2ZpbGwnLCBzaGFwZS5maWxsKTtcbiAgICAvL1xuICAgIC8vICAgICBsZXQgZyA9IHN2Zy5lbGVtZW50KCdnJyk7XG4gICAgLy8gICAgIC8vIGcuc2V0QXR0cmlidXRlKCdwb2ludGVyLWV2ZW50cycsIHNoYXBlLmZpbGwgPyAndmlzaWJsZVBhaW50ZWQnIDogJ3Zpc2libGVTdHJva2UnKTtcbiAgICAvLyAgICAgZy5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgJ3BhaW50ZWQnKTtcbiAgICAvLyAgICAgbGV0IHBhdGggPSBzdmcuZWxlbWVudCgncGF0aCcsIHsgZDogcHMsIGZpbGw6IChzaGFwZS5maWxsID8gc2hhcGUuZmlsbCA6ICdub25lJyksIHN0cm9rZTogc2hhcGUuc3Ryb2tlIH0pO1xuICAgIC8vICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMyk7XG4gICAgLy8gICAgIGcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgLy9cbiAgICAvLyAgICAgc3ZnRWwuYXBwZW5kQ2hpbGQoZyk7XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLmVsLmFwcGVuZENoaWxkKHN2Z0VsKTtcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhpYztcbiIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYWRkKGNoaWxkKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBib3VuZHMgPSBjaGlsZC5nZXRCb3VuZHMoKTtcbiAgICAgIHJlY3RzLnB1c2goYm91bmRzKTtcbiAgICB9XG5cbiAgICBpZiAocmVjdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmVjdCA9IHJlY3RzW2ldO1xuICAgICAgICB4bWluID0gcmVjdC54IDwgeG1pbiA/IHJlY3QueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSByZWN0LnkgPCB5bWluID8gcmVjdC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHJlY3QueCArIHJlY3Qud2lkdGggPiB4bWF4ID8gcmVjdC54ICsgcmVjdC53aWR0aCA6IHhtYXg7XG4gICAgICAgIHltYXggPSByZWN0LnkgKyByZWN0LmhlaWdodCA+IHltYXggPyByZWN0LnkgKyByZWN0LmhlaWdodCA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluICsgdGhpcy54LCB5bWluICsgdGhpcy55LCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUG9pbnRMaXN0IGZyb20gJy4uL2dlb20vcG9pbnRfbGlzdCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBTaGFwZSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZpbGwgPSBwYXJhbXMuZmlsbCB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gcGFyYW1zLnN0cm9rZSB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBwYXJhbXMuc3Ryb2tlV2lkdGggfHwgMTtcbiAgICB0aGlzLmNsb3NlZCA9IHBhcmFtcy5jbG9zZWQgfHwgZmFsc2U7XG5cbiAgICB0aGlzLnBvaW50TGlzdCA9IG5ldyBQb2ludExpc3QocGFyYW1zLnBvaW50cyk7XG4gICAgbGV0IGJvdW5kcyA9IHRoaXMucG9pbnRMaXN0LmdldEJvdW5kcygpO1xuICAgIHRoaXMueCA9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuXG4gICAgbGV0IHBvaW50cyA9IHRoaXMucG9pbnRMaXN0LnBvaW50cztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIHAueCAtPSB0aGlzLng7XG4gICAgICBwLnkgLT0gdGhpcy55O1xuICAgIH1cbiAgfVxuXG4gIGdldFBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHJldHVybiB0aGlzLnBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgfVxuXG4gIGludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIGlmICh4bWluID4geG1heCkgW3htaW4sIHhtYXhdID0gWyB4bWF4LCB4bWluIF07XG4gICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgICBsZXQgcG9pbnRzID0gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcDAgPSBwb2ludHNbaSAtIDFdO1xuICAgICAgbGV0IHAxID0gcG9pbnRzW2ldO1xuICAgICAgaWYgKFV0aWwubGluZUludGVyc2VjdHNSZWN0YW5nbGUocDAueCwgcDAueSwgcDEueCwgcDEueSwgeG1pbiAtIHRoaXMueCwgeW1pbiAtIHRoaXMueSwgeG1heCAtIHRoaXMueCwgeW1heCAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gICAgcmV0dXJuIFV0aWwucG9pbnRJblBvbHlnb24ocG9pbnRzLCB4IC0gdGhpcy54LCB5IC0gdGhpcy55KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcbiIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMudmFsdWUpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICAgIC8vIHRoaXMuZWwuc3R5bGUuZm9udFNpemUgPSB0aGlzLnNpemUgKyAncHgnO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiXG5jbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cbn1cblxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09IHR5cGUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IHR5cGU6IHR5cGUsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRXZlbnREaXNwYXRjaGVyLCBFdmVudCB9O1xuIiwiXG5jbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuciA9IHI7XG4gIH1cblxuICBpbnRlcnNlY3RzTGluZVNlZ21lbnQoeDEsIHkxLCB4MiwgeTIpIHtcblxuICB9XG5cbiAgY29udGFpbnNQb2ludCh4LCB5KSB7XG4gICAgbGV0IGR4ID0geCAtIHRoaXMueDtcbiAgICBsZXQgZHkgPSB5IC0gdGhpcy55O1xuICAgIGxldCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICByZXR1cm4gZCA8IHRoaXMucjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRpc3RhbmNlKHBvaW50KSB7XG4gICAgbGV0IGR4ID0gdGhpcy54IC0gcG9pbnQueDtcbiAgICBsZXQgZHkgPSB0aGlzLnkgLSBwb2ludC55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL3JlY3RhbmdsZSc7XG5cbmNsYXNzIFBvaW50TGlzdCB7XG4gIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzIHx8IFtdO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgIHhtaW4gPSBwLnggPCB4bWluID8gcC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcC54ID4geG1heCA/IHAueCA6IHhtYXg7XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRMaXN0O1xuIiwiXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdyb3coYW1vdW50KSB7XG4gICAgdGhpcy54IC09IGFtb3VudDtcbiAgICB0aGlzLnkgLT0gYW1vdW50O1xuICAgIHRoaXMud2lkdGggKz0gYW1vdW50ICogMjtcbiAgICB0aGlzLmhlaWdodCArPSBhbW91bnQgKiAyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL2dlb20vY2lyY2xlJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuXG5sZXQgU05BUF9SQURJVVMgPSAzO1xubGV0IENPTE9SUyA9IFtcbiAgJ3doaXRlJyxcbiAgJyNjY2NjY2MnLFxuICAnIzk5OTk5OScsXG4gICcjNjY2NjY2JyxcbiAgJyMzMzMzMzMnLFxuICAnYmxhY2snXG5dO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IENPTE9SU1s1XTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3BhcGVyJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuYWRqdXN0Q2FudmFzKCk7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuc2V0VmlzaWJsZShwYXJhbXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkID8gcGFyYW1zLnZpc2libGUgOiB0cnVlKTtcblxuICAgIHRoaXMubGlzdGVuZXJzID0gWyAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJywgJ2RibGNsaWNrJywgJ2NvbnRleHRtZW51JyBdO1xuXG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwYXBlci1jdXJzb3InKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMubGlzdGVuZXJzW2ldLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZpc2libGUodmlzaWJsZSkge1xuICAgIGlmICh0aGlzLnZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRqdXN0Q2FudmFzKCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgZHJhd0xpbmUoeDEsIHkxLCB4MiwgeTIsIGNvbG9yKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgJ2JsYWNrJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3UGF0aChwYXJhbXM9e30pIHtcbiAgICBsZXQgcG9pbnRzID0gcGFyYW1zLnBvaW50cyB8fCBbXTtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBwYXJhbXMuc3Ryb2tlICE9PSB1bmRlZmluZWQgPyAocGFyYW1zLnN0cm9rZSA/IHBhcmFtcy5zdHJva2UgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHBhcmFtcy5maWxsICE9PSB1bmRlZmluZWQgPyAocGFyYW1zLmZpbGwgPyBwYXJhbXMuZmlsbCA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd1NoYXBlKHNoYXBlKSB7XG4gICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54ICsgc2hhcGUueCwgcC55ICsgc2hhcGUueSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8ocC54ICsgc2hhcGUueCwgcC55ICsgc2hhcGUueSk7XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcbiAgICAgIC8vIHRoaXMuZHJhd1BhdGgoeyBwb2ludHM6IHNoYXBlLnBvaW50cywgZmlsbDogc2hhcGUuZmlsbCwgc3Ryb2tlOiBzaGFwZS5zdHJva2UsIGNsb3NlZDogc2hhcGUuY2xvc2VkIH0pO1xuICAgICAgdGhpcy5kcmF3U2hhcGUoc2hhcGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZHJhd1BhdGgoeyBwb2ludHM6IHRoaXMucG9pbnRzLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3J4LCB0aGlzLmN1cnNvcnkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBsZXQgY3AgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3J4LCB0aGlzLmN1cnNvcnkpO1xuICAgICAgbGV0IHAwID0gdGhpcy5wb2ludHNbMF07XG4gICAgICBpZiAoY3AuZGlzdGFuY2UocDApIDwgU05BUF9SQURJVVMpIHtcbiAgICAgICAgY3R4LmFyYyhwMC54LCBwMC55LCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdldFNoYXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNhbmNlbFBhdGgoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY2xvc2VQYXRoKGNsb3NlZD1mYWxzZSkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoeyBwb2ludHM6IHRoaXMucG9pbnRzLCBjbG9zZWQ6IGNsb3NlZCwgZmlsbDogdGhpcy5maWxsLCBzdHJva2U6IHRoaXMuc3Ryb2tlIH0pO1xuICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZSk7XG4gICAgfVxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldEZpbGwoZmlsbCkge1xuICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldFN0cm9rZShzdHJva2UpIHtcbiAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGxldCBwID0gbmV3IFBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICBpZiAocC5kaXN0YW5jZSh0aGlzLnBvaW50c1swXSkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3J4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvcnkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yeCArICdweCc7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3J5ICsgJ3B4JztcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29tbWFuZCkge1xuICAgICAgdGhpcy5vblBhcmFtZXRlcihldmVudC5rZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLmNhbmNlbFBhdGgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLnNldFN0cm9rZSh0aGlzLnN0cm9rZSA/IG51bGwgOiAnYmxhY2snKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICcwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIHRoaXMuc2V0RmlsbChudWxsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXS5pbmNsdWRlcyhldmVudC5rZXkpICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gQ09MT1JTW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXTtcbiAgICAgICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5zZXRGaWxsKGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5cbmNsYXNzIFN0YWdlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDQwMDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAzMDA7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnc3RhZ2UtY3Vyc29yJyk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGQoc3RhZ2VPYmplY3QpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goc3RhZ2VPYmplY3QpO1xuICAgIHN0YWdlT2JqZWN0LmFkZGVkVG9TdGFnZSgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgICAgaWYgKGNoaWxkLmludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkpIHtcbiAgICAgICAgICBzZWxlY3Rpb24ucHVzaChjaGlsZCk7XG4gICAgICAgICAgY2hpbGQuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW2ldLmRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyU2hhcGUoc2hhcGUpIHtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJIaW50cyhzdGFnZU9iamVjdCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0YWdlT2JqZWN0LnNlbGVjdGVkID8gJ3JlZCcgOiAnYmx1ZSc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoc3RhZ2VPYmplY3QueCA+PiAwLCBzdGFnZU9iamVjdC55ID4+IDAsIDMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGxldCBib3VuZHMgPSBzdGFnZU9iamVjdC5nZXRCb3VuZHMoKTtcbiAgICBpZiAoYm91bmRzKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdGFnZU9iamVjdC5zZWxlY3RlZCA/ICdyZWQnIDogJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnJlY3QoKHN0YWdlT2JqZWN0LngpICsgYm91bmRzLnggKyAwLjUsIChzdGFnZU9iamVjdC55KSArIGJvdW5kcy55ICsgMC41LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck9iamVjdChzdGFnZU9iamVjdCkge1xuICAgIGlmIChzdGFnZU9iamVjdCBpbnN0YW5jZW9mIEdyb3VwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWdlT2JqZWN0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHN0YWdlT2JqZWN0LmNoaWxkcmVuW2ldO1xuICAgICAgICB0aGlzLnJlbmRlck9iamVjdChjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YWdlT2JqZWN0IGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgIHRoaXMucmVuZGVyU2hhcGUoc3RhZ2VPYmplY3QpO1xuICAgIH1cbiAgICBpZiAoc3RhZ2VPYmplY3Quc2VsZWN0ZWQpIHRoaXMucmVuZGVySGludHMoc3RhZ2VPYmplY3QpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICB0aGlzLnJlbmRlck9iamVjdChjaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy5tYXJxdWVlWzBdLCB0aGlzLm1hcnF1ZWVbMV0pO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLm1hcnF1ZWVbMl0sIHRoaXMubWFycXVlZVsxXSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMubWFycXVlZVsyXSwgdGhpcy5tYXJxdWVlWzNdKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5tYXJxdWVlWzBdLCB0aGlzLm1hcnF1ZWVbM10pO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgaXRlbS54ICs9IGR4O1xuICAgICAgaXRlbS55ICs9IGR5O1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYmVnaW5EcmFnKCkge1xuICAgIHRoaXMubW9kZSA9ICdkcmFnJztcbiAgfVxuXG4gIGNhbmNlbERyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgfVxuXG4gIGJlZ2luTWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgdGhpcy5tb2RlID0gJ21hcnF1ZWUnO1xuICAgIHRoaXMubWFycXVlZSA9IFsgeG1pbiwgeW1pbiwgeG1heCwgeW1heCBdO1xuICB9XG5cbiAgY2FuY2VsTWFycXVlZSgpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5oaXRUZXN0KHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbC5vZmZzZXRUb3A7XG5cbiAgICB0aGlzLmRvd25YID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMuZG93blkgPSB0aGlzLmN1cnNvclk7XG5cbiAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAgICAgaGl0LnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpXG4gICAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLnNlbGVjdE1hcnF1ZWUoLi4udGhpcy5tYXJxdWVlKTtcbiAgICAgIHRoaXMuY2FuY2VsTWFycXVlZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIC8vIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvclggKyAncHgnO1xuICAgIC8vIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yWSArICdweCc7XG5cbiAgICBpZiAoZXZlbnQuYnV0dG9ucyAmIDEpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShldmVudC5tb3ZlbWVudFgsIGV2ZW50Lm1vdmVtZW50WSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgICAgdGhpcy5tYXJxdWVlWzJdICs9IGV2ZW50Lm1vdmVtZW50WDtcbiAgICAgICAgdGhpcy5tYXJxdWVlWzNdICs9IGV2ZW50Lm1vdmVtZW50WTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZHggPSB0aGlzLmN1cnNvclggLSB0aGlzLmRvd25YO1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmN1cnNvclkgLSB0aGlzLmRvd25ZO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+PSAyIHx8IE1hdGguYWJzKGR5KSA+PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmJlZ2luRHJhZygpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5iZWdpbk1hcnF1ZWUodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5kb3duWCArIGR4LCB0aGlzLmRvd25ZICsgZHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZTtcbiIsIlxuY2xhc3MgU3ZnIHtcbiAgc3RhdGljIGVsZW1lbnQodHlwZSwgYXR0cmlidXRlcykge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0eXBlKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgc3RhdGljIHN2ZyhhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnLCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBzdmcuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2ZztcbiIsIlxuLy8gQ29weXJpZ2h0IChjKSAxOTcwLTIwMDMsIFdtLiBSYW5kb2xwaCBGcmFua2xpblxuLy8gaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1Ly9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuXG5mdW5jdGlvbiBwb2ludEluUG9seWdvbihwb2ludHMsIHRlc3R4LCB0ZXN0eSkge1xuICBsZXQgaSwgaiwgYyA9IDA7XG4gIGZvciAobGV0IGkgPSAwLCBqID0gcG9pbnRzLmxlbmd0aCAtIDE7IGkgPCBwb2ludHMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgaWYgKCgocG9pbnRzW2ldLnkgPiB0ZXN0eSkgIT0gKHBvaW50c1tqXS55ID4gdGVzdHkpKSAmJlxuICAgICAgKHRlc3R4IDwgKHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLngpICogKHRlc3R5IC0gcG9pbnRzW2ldLnkpIC8gKHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnkpICsgcG9pbnRzW2ldLngpKVxuICAgICAgYyA9ICFjO1xuICB9XG4gIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSh4MSwgeTEsIHgyLCB5MiwgeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAvLyBDb21wbGV0ZWx5IG91dHNpZGUuXG4gIGlmICgoeDEgPD0geG1pbiAmJiB4MiA8PSB4bWluKSB8fCAoeTEgPD0geW1pbiAmJiB5MiA8PSB5bWluKSB8fFxuICAgICAgKHgxID49IHhtYXggJiYgeDIgPj0geG1heCkgfHwgKHkxID49IHltYXggJiYgeTIgPj0geW1heCkpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtID0gKHkyIC0geTEpIC8gKHgyIC0geDEpO1xuXG4gIHZhciB5ID0gbSAqICh4bWluIC0geDEpICsgeTE7XG4gIGlmICh5ID4geW1pbiAmJiB5IDwgeW1heCkgcmV0dXJuIHRydWU7XG5cbiAgeSA9IG0gKiAoeG1heCAtIHgxKSArIHkxO1xuICBpZiAoeSA+IHltaW4gJiYgeSA8IHltYXgpIHJldHVybiB0cnVlO1xuXG4gIHZhciB4ID0gKHltaW4gLSB5MSkgLyBtICsgeDE7XG4gIGlmICh4ID4geG1pbiAmJiB4IDwgeG1heCkgcmV0dXJuIHRydWU7XG5cbiAgeCA9ICh5bWF4IC0geTEpIC8gbSArIHgxO1xuICBpZiAoeCA+IHhtaW4gJiYgeCA8IHhtYXgpIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZTogbGluZUludGVyc2VjdHNSZWN0YW5nbGUsXG4gIHBvaW50SW5Qb2x5Z29uOiBwb2ludEluUG9seWdvblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==