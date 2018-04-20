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
    // console.log(bounds);

    var points = _this.pointList.points;

    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      p.x -= _this.x;
      p.y -= _this.y;
    }

    // console.log(points);
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

    // Copyright (c) 1970-2003, Wm. Randolph Franklin
    // https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html

  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      return Shape.pointInside(this.pointList.points, x - this.x, y - this.y);
    }
  }], [{
    key: 'pointInside',
    value: function pointInside(points, testx, testy) {
      var i = void 0,
          j = void 0,
          c = 0;
      for (var _i = 0, _j = points.length - 1; _i < points.length; _j = _i++) {
        if (points[_i].y > testy != points[_j].y > testy && testx < (points[_j].x - points[_i].x) * (testy - points[_i].y) / (points[_j].y - points[_i].y) + points[_i].x) c = !c;
      }
      return c;
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
    this.canvas.width = 450;
    this.canvas.height = 450;

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
      // stageObject.on('mousedown', (obj) => {
      //   // if (this.selection.includes(obj)) {
      //   //   this.selection = this.selection.filter(element => element !== obj);
      //   //   obj.deselect();
      //   // }
      //   this.deselect();
      //   this.selection = [ obj ];
      //   obj.select();
      // });
      this.render();
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
    }
  }, {
    key: 'moveSelectionBy',
    value: function moveSelectionBy(dx, dy) {
      // console.log('moveSelectionBy', dx, dy);
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
      this.drag = true;
    }
  }, {
    key: 'cancelDrag',
    value: function cancelDrag() {
      this.drag = false;
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      // let x = event.offsetX;
      // let y = event.offsetY;
      this.cursorX = event.pageX - this.el.offsetLeft;
      this.cursorY = event.pageY - this.el.offsetTop;

      this.downX = this.cursorX;
      this.downY = this.cursorY;

      var hit = false;

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.hitTest(this.cursorX, this.cursorY)) {
          this.deselect();
          child.select();
          this.selection = [child];
          hit = true;
        }
      }

      if (!hit) {
        this.deselect();
      }

      this.render();
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      this.cancelDrag();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      // console.log('move');
      this.cursorX = event.pageX - this.el.offsetLeft;
      this.cursorY = event.pageY - this.el.offsetTop;

      // this.cursor.style.left = this.cursorX + 'px';
      // this.cursor.style.top = this.cursorY + 'px';
      // console.log(event.buttons, this.cursorX);

      if (event.buttons & 1) {
        if (this.drag) {
          if (this.selection.length) {
            this.moveSelectionBy(event.movementX, event.movementY);
          } else {
            var stageEl = this.dom();
            stageEl.style.left = stageEl.offsetLeft + event.movementX + 'px';
            stageEl.style.top = stageEl.offsetTop + event.movementY + 'px';
          }
        } else {
          var dx = this.cursorX - this.downX;
          var dy = this.cursorY - this.downY;
          // console.log(dx);
          if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) {
            this.beginDrag();
            this.moveSelectionBy(dx, dy);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50X2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdmcuanMiXSwibmFtZXMiOlsiQXBwIiwiZG9tIiwiaW5pdEVsZW1lbnRzIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwic3RhcnR1cCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhZ2UiLCJhcHBlbmRDaGlsZCIsInBhcGVyIiwidmlzaWJsZSIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsInZhbHVlIiwieCIsInkiLCJhZGQiLCJzaGFwZSIsInBvaW50cyIsImZpbGwiLCJzdHJva2UiLCJjbG9zZWQiLCJzdGFnZUVsIiwic2hhcGVzIiwiZ2V0U2hhcGVzIiwiaSIsImxlbmd0aCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwiZ3JhYlBhcGVyU2hhcGVzIiwic2hvd1BhcGVyIiwiaGlkZVBhcGVyIiwiZXZlbnQiLCJrZXkiLCJyZXBlYXQiLCJ0b2dnbGVQYXBlciIsImhhbmRsZUV2ZW50IiwidHlwZSIsIm9uS2V5RG93biIsIm9uTW91c2VEb3duIiwiaW5pdCIsIkdyYXBoaWMiLCJwYXJhbXMiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwiZ3JvdyIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyIiwiaGl0VGVzdCIsInJlY3QiLCJ4bWluIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJ5bWluIiwieG1heCIsIk5FR0FUSVZFX0lORklOSVRZIiwieW1heCIsImVtcHR5IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImoiLCJwIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsIl93aWR0aCIsIl9oZWlnaHQiLCJHcm91cCIsImNoaWxkcmVuIiwiY2hpbGQiLCJwdXNoIiwicmVjdHMiLCJSZWN0YW5nbGUiLCJTaGFwZSIsInN0cm9rZVdpZHRoIiwicG9pbnRMaXN0IiwicG9pbnRJbnNpZGUiLCJ0ZXN0eCIsInRlc3R5IiwiYyIsIlRleHQiLCJzZXRTaXplIiwic2l6ZSIsInNldFRleHQiLCJUcmFuc2Zvcm0iLCJzZWxlY3RlZCIsIl94IiwiX3kiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUG9pbnRMaXN0IiwiYW1vdW50IiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJTTkFQX1JBRElVUyIsIkNPTE9SUyIsIlBhcGVyIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGp1c3RDYW52YXMiLCJ1bmRlZmluZWQiLCJjdXJzb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkTGlzdGVuZXJzIiwicmVtb3ZlTGlzdGVuZXJzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29sb3IiLCJnZXRQb2ludHMiLCJkcmF3U2hhcGUiLCJkcmF3UGF0aCIsImN1cnNvcngiLCJjdXJzb3J5IiwiY3AiLCJwMCIsImRpc3RhbmNlIiwiYXJjIiwiUEkiLCJidXR0b24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImxlZnQiLCJ0b3AiLCJjb21tYW5kIiwib25QYXJhbWV0ZXIiLCJjYW5jZWxQYXRoIiwic2V0U3Ryb2tlIiwic2V0RmlsbCIsImluY2x1ZGVzIiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIiwib25EYmxDbGljayIsIm9uQ29udGV4dE1lbnUiLCJTdGFnZSIsInNlbGVjdGlvbiIsInN0YWdlT2JqZWN0IiwiYWRkZWRUb1N0YWdlIiwiZGVzZWxlY3QiLCJyZW5kZXJPYmplY3QiLCJyZW5kZXJTaGFwZSIsInJlbmRlckhpbnRzIiwiaXRlbSIsImRyYWciLCJjdXJzb3JYIiwicGFnZVgiLCJjdXJzb3JZIiwicGFnZVkiLCJkb3duWCIsImRvd25ZIiwiaGl0Iiwic2VsZWN0IiwiY2FuY2VsRHJhZyIsImJ1dHRvbnMiLCJtb3ZlU2VsZWN0aW9uQnkiLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJhYnMiLCJiZWdpbkRyYWciLCJTdmciLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsInN2ZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QU1LLElBQU4sSUFBYyxXQUFsQixFQUErQjtBQUNsQyxhQUFLZ0ksV0FBTCxDQUFpQnJJLEtBQWpCO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZd0ksSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3JOVHlCLEc7Ozs7Ozs7NEJBQ1c1SixJLEVBQU02SixVLEVBQVk7QUFDL0IsVUFBSWxFLEtBQUsvSCxTQUFTa00sZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQ5SixJQUF2RCxDQUFUO0FBQ0EsV0FBSyxJQUFJK0osSUFBVCxJQUFpQkYsVUFBakIsRUFBNkI7QUFDM0JsRSxXQUFHcUUsWUFBSCxDQUFnQkQsSUFBaEIsRUFBc0JGLFdBQVdFLElBQVgsQ0FBdEI7QUFDRDtBQUNELGFBQU9wRSxFQUFQO0FBQ0Q7Ozt3QkFFVWtFLFUsRUFBWTtBQUNyQixVQUFJSSxNQUFNck0sU0FBU2tNLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVELEtBQXZELENBQVY7QUFDQUcsVUFBSUQsWUFBSixDQUFpQixhQUFqQixFQUErQiw4QkFBL0I7QUFDQSxXQUFLLElBQUlELElBQVQsSUFBaUJGLFVBQWpCLEVBQTZCO0FBQzNCSSxZQUFJRCxZQUFKLENBQWlCRCxJQUFqQixFQUF1QkYsV0FBV0UsSUFBWCxDQUF2QjtBQUNEO0FBQ0QsYUFBT0UsR0FBUDtBQUNEOzs7Ozs7a0JBR1lMLEciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJztcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnLi9kaXNwbGF5L2dyYXBoaWMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9kaXNwbGF5L3RleHQnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gIH1cblxuICBpbml0RWxlbWVudHMoKSB7XG4gICAgdGhpcy5kb20uYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSgpO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnN0YWdlLmRvbSgpKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5kb20oKSk7XG5cbiAgICAvLyB0aGlzLnBhcGVyLm9uKCdwYXRocycsIChwYXRocykgPT4ge1xuICAgIC8vICAgdGhpcy5jcmVhdGVTaGFwZShwYXRocyk7XG4gICAgLy8gICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgbGV0IGxhYmVsID0gbmV3IFRleHQoeyB2YWx1ZTogJ2hlbGxvJyB9KTtcbiAgICBsYWJlbC54ID0gMjUwO1xuICAgIGxhYmVsLnkgPSAxMDA7XG5cbiAgICB0aGlzLnN0YWdlLmFkZChsYWJlbCk7XG5cbiAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoe1xuICAgICAgcG9pbnRzOiBbIHsgeDogMCwgeTogMCB9LCB7IHg6IDYwLCB5OiAwIH0sIHsgeDogNDAsIHk6IDQwIH0sIHsgeDogMjAsIHk6IDEwIH0gXSxcbiAgICAgIGZpbGw6ICcjY2NjY2NjJyxcbiAgICAgIHN0cm9rZTogJ2JsYWNrJyxcbiAgICAgIGNsb3NlZDogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIHNoYXBlLnggPSA2MDtcbiAgICAvLyBzaGFwZS55ID0gODA7XG4gICAgdGhpcy5zdGFnZS5hZGQoc2hhcGUpO1xuICB9XG5cbiAgLy8gY3JlYXRlR3JhcGhpYyhzaGFwZXMpIHtcbiAgLy8gICBsZXQgc3RhZ2VFbCA9IHRoaXMuc3RhZ2UuZG9tKCk7XG4gIC8vXG4gIC8vICAgLy8gbG9jYWxpc2Ugc2hhcGUgY29vcmRpbmF0ZXNcbiAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAvLyAgICAgbGV0IGJvdW5kcyA9IHNoYXBlLmdldEJvdW5kcygpO1xuICAvLyAgICAgaWYgKGJvdW5kcykge1xuICAvLyAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXBlLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAvLyAgICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAvLyAgICAgICAgIHAueCAtPSBib3VuZHMueDtcbiAgLy8gICAgICAgICBwLnkgLT0gYm91bmRzLnk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgICAgc2hhcGUueCA9IGJvdW5kcy54IC0gc3RhZ2VFbC5vZmZzZXRMZWZ0O1xuICAvLyAgICAgICBzaGFwZS55ID0gYm91bmRzLnkgLSBzdGFnZUVsLm9mZnNldFRvcDtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgbGV0IGdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7IHNoYXBlczogc2hhcGVzIH0pO1xuICAvLyAgIHRoaXMuc3RhZ2UuYWRkKGdyYXBoaWMpO1xuICAvLyB9XG5cbiAgZ3JhYlBhcGVyU2hhcGVzKCkge1xuICAgIGxldCBzdGFnZUVsID0gdGhpcy5zdGFnZS5kb20oKTtcbiAgICBsZXQgc2hhcGVzID0gdGhpcy5wYXBlci5nZXRTaGFwZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgc2hhcGUueCAtPSBzdGFnZUVsLm9mZnNldExlZnQ7XG4gICAgICBzaGFwZS55IC09IHN0YWdlRWwub2Zmc2V0VG9wO1xuICAgICAgdGhpcy5zdGFnZS5hZGQoc2hhcGUpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSAncGFwZXInO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMuZ3JhYlBhcGVyU2hhcGVzKCk7XG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnNob3dQYXBlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy50b2dnbGVQYXBlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgICAgdGhpcy5wYXBlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBsZXQgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgLy8gbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuICAgIC8vIGNvbnNvbGUubG9nKHgsIHkpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJyk7XG4gIGxldCBhcHAgPSBuZXcgQXBwKCk7XG4gIGFwcC5pbml0KCk7XG59KTtcbiIsImltcG9ydCBzdmcgZnJvbSAnLi4vc3ZnJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIEdyYXBoaWMgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hhcGVzID0gcGFyYW1zLnNoYXBlcyB8fCBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuICAgIGlmIChib3VuZHMpIHtcbiAgICAgIGJvdW5kcy5ncm93KDEpO1xuICAgICAgdGhpcy53aWR0aCA9IGJvdW5kcy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcbiAgICAgIHRoaXMueCA9IGJvdW5kcy54O1xuICAgICAgdGhpcy55ID0gYm91bmRzLnk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdCh4IC0gdGhpcy54LCB5IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0O1xuXG4gICAgaWYgKHRoaXMuc2hhcGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHhtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGxldCBlbXB0eSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgICAgICAgaWYgKGJvdW5kcykge1xuICAgICAgICAgIGJvdW5kcy54ICs9IHNoYXBlLng7XG4gICAgICAgICAgYm91bmRzLnkgKz0gc2hhcGUueTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhib3VuZHMpO1xuICAgICAgICAgIHhtaW4gPSAoYm91bmRzLnggPCB4bWluID8gYm91bmRzLnggOiB4bWluKTtcbiAgICAgICAgICB5bWluID0gKGJvdW5kcy55IDwgeW1pbiA/IGJvdW5kcy55IDogeW1pbik7XG4gICAgICAgICAgeG1heCA9IChib3VuZHMueCArIGJvdW5kcy53aWR0aCA+IHhtYXggPyBib3VuZHMueCArIGJvdW5kcy53aWR0aCA6IHhtYXgpO1xuICAgICAgICAgIHltYXggPSAoYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0ID4geW1heCA/IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCA6IHltYXgpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpO1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFlbXB0eSkgcmVjdCA9IG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnR3JhcGhpYy5yZW5kZXInKTtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSgxLCAxKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuXG4gICAgICAvLyBsZXQgcHMgPSAnTSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZS5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgICAgIGlmIChqID09IDApXG4gICAgICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICAgICAgLy8gbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgICAgIC8vIGlmIChqID4gMCkgcHMgKz0gJ0wnO1xuICAgICAgICAvLyBwcyArPSAocC54IC0gYm91bmRzLngpICsgJyAnICsgKHAueSAtIGJvdW5kcy55KSArICcgJztcbiAgICAgIH1cbiAgICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAgICAgLy8gcHMgKz0gJ1onO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gd2hpbGUgKHRoaXMuZWwuZmlyc3RDaGlsZCkgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xuICAgIC8vXG4gICAgLy8gbGV0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG4gICAgLy8gaWYgKGJvdW5kcykge1xuICAgIC8vICAgdGhpcy54ID0gYm91bmRzLng7XG4gICAgLy8gICB0aGlzLnkgPSBib3VuZHMueTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IGJvdW5kcy53aWR0aCArICdweCc7XG4gICAgLy8gICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQgKyAncHgnO1xuICAgIC8vXG4gICAgLy8gICBsZXQgc3ZnRWwgPSBzdmcuc3ZnKCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYm91bmRzLndpZHRoKTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYm91bmRzLmhlaWdodCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyBib3VuZHMud2lkdGggKyAnICcgKyBib3VuZHMuaGVpZ2h0KTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgIC8vXG4gICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBwcyA9ICdNJztcbiAgICAvL1xuICAgIC8vICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXBlLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgIC8vICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgIC8vICAgICAgIGlmIChqID4gMCkgcHMgKz0gJ0wnO1xuICAgIC8vICAgICAgIHBzICs9IChwLnggLSBib3VuZHMueCkgKyAnICcgKyAocC55IC0gYm91bmRzLnkpICsgJyAnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAvLyAgICAgICBwcyArPSAnWic7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnZmlsbCcsIHNoYXBlLmZpbGwpO1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBnID0gc3ZnLmVsZW1lbnQoJ2cnKTtcbiAgICAvLyAgICAgLy8gZy5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgc2hhcGUuZmlsbCA/ICd2aXNpYmxlUGFpbnRlZCcgOiAndmlzaWJsZVN0cm9rZScpO1xuICAgIC8vICAgICBnLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAncGFpbnRlZCcpO1xuICAgIC8vICAgICBsZXQgcGF0aCA9IHN2Zy5lbGVtZW50KCdwYXRoJywgeyBkOiBwcywgZmlsbDogKHNoYXBlLmZpbGwgPyBzaGFwZS5maWxsIDogJ25vbmUnKSwgc3Ryb2tlOiBzaGFwZS5zdHJva2UgfSk7XG4gICAgLy8gICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAzKTtcbiAgICAvLyAgICAgZy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICAvL1xuICAgIC8vICAgICBzdmdFbC5hcHBlbmRDaGlsZChnKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3ZnRWwpO1xuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaGljO1xuIiwiaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBhZGQoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGJvdW5kcyA9IGNoaWxkLmdldEJvdW5kcygpO1xuICAgICAgcmVjdHMucHVzaChib3VuZHMpO1xuICAgIH1cblxuICAgIGlmIChyZWN0cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWN0ID0gcmVjdHNbaV07XG4gICAgICAgIHhtaW4gPSByZWN0LnggPCB4bWluID8gcmVjdC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHJlY3QueSA8IHltaW4gPyByZWN0LnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcmVjdC54ICsgcmVjdC53aWR0aCA+IHhtYXggPyByZWN0LnggKyByZWN0LndpZHRoIDogeG1heDtcbiAgICAgICAgeW1heCA9IHJlY3QueSArIHJlY3QuaGVpZ2h0ID4geW1heCA/IHJlY3QueSArIHJlY3QuaGVpZ2h0IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4gKyB0aGlzLngsIHltaW4gKyB0aGlzLnksIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUG9pbnRMaXN0IGZyb20gJy4uL2dlb20vcG9pbnRfbGlzdCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBTaGFwZSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZpbGwgPSBwYXJhbXMuZmlsbCB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gcGFyYW1zLnN0cm9rZSB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBwYXJhbXMuc3Ryb2tlV2lkdGggfHwgMTtcbiAgICB0aGlzLmNsb3NlZCA9IHBhcmFtcy5jbG9zZWQgfHwgZmFsc2U7XG5cbiAgICB0aGlzLnBvaW50TGlzdCA9IG5ldyBQb2ludExpc3QocGFyYW1zLnBvaW50cyk7XG4gICAgbGV0IGJvdW5kcyA9IHRoaXMucG9pbnRMaXN0LmdldEJvdW5kcygpO1xuICAgIHRoaXMueCA9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICB0aGlzLnkgPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgIC8vIGNvbnNvbGUubG9nKGJvdW5kcyk7XG5cbiAgICBsZXQgcG9pbnRzID0gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgcC54IC09IHRoaXMueDtcbiAgICAgIHAueSAtPSB0aGlzLnk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2cocG9pbnRzKTtcbiAgfVxuXG4gIGdldFBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHJldHVybiB0aGlzLnBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgfVxuXG4gIC8vIENvcHlyaWdodCAoYykgMTk3MC0yMDAzLCBXbS4gUmFuZG9scGggRnJhbmtsaW5cbiAgLy8gaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1Ly9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuXG4gIHN0YXRpYyBwb2ludEluc2lkZShwb2ludHMsIHRlc3R4LCB0ZXN0eSkge1xuICAgIGxldCBpLCBqLCBjID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgaWYgKCgocG9pbnRzW2ldLnkgPiB0ZXN0eSkgIT0gKHBvaW50c1tqXS55ID4gdGVzdHkpKSAmJlxuICAgICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICAgIGMgPSAhYztcbiAgICB9XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gU2hhcGUucG9pbnRJbnNpZGUodGhpcy5wb2ludExpc3QucG9pbnRzLCB4IC0gdGhpcy54LCB5IC0gdGhpcy55KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcbiIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMudmFsdWUpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICAgIC8vIHRoaXMuZWwuc3R5bGUuZm9udFNpemUgPSB0aGlzLnNpemUgKyAncHgnO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiXG5jbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cbn1cblxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09IHR5cGUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IHR5cGU6IHR5cGUsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRXZlbnREaXNwYXRjaGVyLCBFdmVudCB9O1xuIiwiXG5jbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuciA9IHI7XG4gIH1cblxuICBpbnRlcnNlY3RzTGluZVNlZ21lbnQoeDEsIHkxLCB4MiwgeTIpIHtcblxuICB9XG5cbiAgY29udGFpbnNQb2ludCh4LCB5KSB7XG4gICAgbGV0IGR4ID0geCAtIHRoaXMueDtcbiAgICBsZXQgZHkgPSB5IC0gdGhpcy55O1xuICAgIGxldCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICByZXR1cm4gZCA8IHRoaXMucjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRpc3RhbmNlKHBvaW50KSB7XG4gICAgbGV0IGR4ID0gdGhpcy54IC0gcG9pbnQueDtcbiAgICBsZXQgZHkgPSB0aGlzLnkgLSBwb2ludC55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL3JlY3RhbmdsZSc7XG5cbmNsYXNzIFBvaW50TGlzdCB7XG4gIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzIHx8IFtdO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgIHhtaW4gPSBwLnggPCB4bWluID8gcC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcC54ID4geG1heCA/IHAueCA6IHhtYXg7XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRMaXN0O1xuIiwiXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdyb3coYW1vdW50KSB7XG4gICAgdGhpcy54IC09IGFtb3VudDtcbiAgICB0aGlzLnkgLT0gYW1vdW50O1xuICAgIHRoaXMud2lkdGggKz0gYW1vdW50ICogMjtcbiAgICB0aGlzLmhlaWdodCArPSBhbW91bnQgKiAyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL2dlb20vY2lyY2xlJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuXG5sZXQgU05BUF9SQURJVVMgPSAzO1xubGV0IENPTE9SUyA9IFtcbiAgJ3doaXRlJyxcbiAgJyNjY2NjY2MnLFxuICAnIzk5OTk5OScsXG4gICcjNjY2NjY2JyxcbiAgJyMzMzMzMzMnLFxuICAnYmxhY2snXG5dO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IENPTE9SU1s1XTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3BhcGVyJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuYWRqdXN0Q2FudmFzKCk7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuc2V0VmlzaWJsZShwYXJhbXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkID8gcGFyYW1zLnZpc2libGUgOiB0cnVlKTtcblxuICAgIHRoaXMubGlzdGVuZXJzID0gWyAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJywgJ2RibGNsaWNrJywgJ2NvbnRleHRtZW51JyBdO1xuXG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwYXBlci1jdXJzb3InKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMubGlzdGVuZXJzW2ldLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZpc2libGUodmlzaWJsZSkge1xuICAgIGlmICh0aGlzLnZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRqdXN0Q2FudmFzKCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgZHJhd0xpbmUoeDEsIHkxLCB4MiwgeTIsIGNvbG9yKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgJ2JsYWNrJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3UGF0aChwYXJhbXM9e30pIHtcbiAgICBsZXQgcG9pbnRzID0gcGFyYW1zLnBvaW50cyB8fCBbXTtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBwYXJhbXMuc3Ryb2tlICE9PSB1bmRlZmluZWQgPyAocGFyYW1zLnN0cm9rZSA/IHBhcmFtcy5zdHJva2UgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHBhcmFtcy5maWxsICE9PSB1bmRlZmluZWQgPyAocGFyYW1zLmZpbGwgPyBwYXJhbXMuZmlsbCA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd1NoYXBlKHNoYXBlKSB7XG4gICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54ICsgc2hhcGUueCwgcC55ICsgc2hhcGUueSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8ocC54ICsgc2hhcGUueCwgcC55ICsgc2hhcGUueSk7XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcbiAgICAgIC8vIHRoaXMuZHJhd1BhdGgoeyBwb2ludHM6IHNoYXBlLnBvaW50cywgZmlsbDogc2hhcGUuZmlsbCwgc3Ryb2tlOiBzaGFwZS5zdHJva2UsIGNsb3NlZDogc2hhcGUuY2xvc2VkIH0pO1xuICAgICAgdGhpcy5kcmF3U2hhcGUoc2hhcGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZHJhd1BhdGgoeyBwb2ludHM6IHRoaXMucG9pbnRzLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3J4LCB0aGlzLmN1cnNvcnkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBsZXQgY3AgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3J4LCB0aGlzLmN1cnNvcnkpO1xuICAgICAgbGV0IHAwID0gdGhpcy5wb2ludHNbMF07XG4gICAgICBpZiAoY3AuZGlzdGFuY2UocDApIDwgU05BUF9SQURJVVMpIHtcbiAgICAgICAgY3R4LmFyYyhwMC54LCBwMC55LCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdldFNoYXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNhbmNlbFBhdGgoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY2xvc2VQYXRoKGNsb3NlZD1mYWxzZSkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoeyBwb2ludHM6IHRoaXMucG9pbnRzLCBjbG9zZWQ6IGNsb3NlZCwgZmlsbDogdGhpcy5maWxsLCBzdHJva2U6IHRoaXMuc3Ryb2tlIH0pO1xuICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZSk7XG4gICAgfVxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldEZpbGwoZmlsbCkge1xuICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldFN0cm9rZShzdHJva2UpIHtcbiAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGxldCBwID0gbmV3IFBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICBpZiAocC5kaXN0YW5jZSh0aGlzLnBvaW50c1swXSkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3J4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvcnkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yeCArICdweCc7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3J5ICsgJ3B4JztcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29tbWFuZCkge1xuICAgICAgdGhpcy5vblBhcmFtZXRlcihldmVudC5rZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLmNhbmNlbFBhdGgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLnNldFN0cm9rZSh0aGlzLnN0cm9rZSA/IG51bGwgOiAnYmxhY2snKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICcwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIHRoaXMuc2V0RmlsbChudWxsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXS5pbmNsdWRlcyhldmVudC5rZXkpICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gQ09MT1JTW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXTtcbiAgICAgICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5zZXRGaWxsKGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyO1xuIiwiaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9kaXNwbGF5L2dyb3VwJztcblxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3N0YWdlJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gNDUwO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDQ1MDtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdzdGFnZS1jdXJzb3InKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGFkZChzdGFnZU9iamVjdCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChzdGFnZU9iamVjdCk7XG4gICAgc3RhZ2VPYmplY3QuYWRkZWRUb1N0YWdlKCk7XG4gICAgLy8gc3RhZ2VPYmplY3Qub24oJ21vdXNlZG93bicsIChvYmopID0+IHtcbiAgICAvLyAgIC8vIGlmICh0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhvYmopKSB7XG4gICAgLy8gICAvLyAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCAhPT0gb2JqKTtcbiAgICAvLyAgIC8vICAgb2JqLmRlc2VsZWN0KCk7XG4gICAgLy8gICAvLyB9XG4gICAgLy8gICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgLy8gICB0aGlzLnNlbGVjdGlvbiA9IFsgb2JqIF07XG4gICAgLy8gICBvYmouc2VsZWN0KCk7XG4gICAgLy8gfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25baV0uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXJTaGFwZShzaGFwZSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlckhpbnRzKHN0YWdlT2JqZWN0KSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc3RhZ2VPYmplY3Quc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhzdGFnZU9iamVjdC54ID4+IDAsIHN0YWdlT2JqZWN0LnkgPj4gMCwgMywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgbGV0IGJvdW5kcyA9IHN0YWdlT2JqZWN0LmdldEJvdW5kcygpO1xuICAgIGlmIChib3VuZHMpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0YWdlT2JqZWN0LnNlbGVjdGVkID8gJ3JlZCcgOiAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgucmVjdCgoc3RhZ2VPYmplY3QueCkgKyBib3VuZHMueCArIDAuNSwgKHN0YWdlT2JqZWN0LnkpICsgYm91bmRzLnkgKyAwLjUsIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyT2JqZWN0KHN0YWdlT2JqZWN0KSB7XG4gICAgaWYgKHN0YWdlT2JqZWN0IGluc3RhbmNlb2YgR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhZ2VPYmplY3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gc3RhZ2VPYmplY3QuY2hpbGRyZW5baV07XG4gICAgICAgIHRoaXMucmVuZGVyT2JqZWN0KGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhZ2VPYmplY3QgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgdGhpcy5yZW5kZXJTaGFwZShzdGFnZU9iamVjdCk7XG4gICAgfVxuICAgIGlmIChzdGFnZU9iamVjdC5zZWxlY3RlZCkgdGhpcy5yZW5kZXJIaW50cyhzdGFnZU9iamVjdCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICB0aGlzLnJlbmRlck9iamVjdChjaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdtb3ZlU2VsZWN0aW9uQnknLCBkeCwgZHkpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICBpdGVtLnggKz0gZHg7XG4gICAgICBpdGVtLnkgKz0gZHk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBiZWdpbkRyYWcoKSB7XG4gICAgdGhpcy5kcmFnID0gdHJ1ZTtcbiAgfVxuXG4gIGNhbmNlbERyYWcoKSB7XG4gICAgdGhpcy5kcmFnID0gZmFsc2U7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIGxldCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICAvLyBsZXQgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIHRoaXMuZG93blggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5kb3duWSA9IHRoaXMuY3Vyc29yWTtcblxuICAgIGxldCBoaXQgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKSkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgICAgIGNoaWxkLnNlbGVjdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFsgY2hpbGQgXTtcbiAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhpdCkge1xuICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ21vdmUnKTtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgLy8gdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yWCArICdweCc7XG4gICAgLy8gdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3JZICsgJ3B4JztcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC5idXR0b25zLCB0aGlzLmN1cnNvclgpO1xuXG4gICAgaWYgKGV2ZW50LmJ1dHRvbnMgJiAxKSB7XG4gICAgICBpZiAodGhpcy5kcmFnKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShldmVudC5tb3ZlbWVudFgsIGV2ZW50Lm1vdmVtZW50WSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbGV0IHN0YWdlRWwgPSB0aGlzLmRvbSgpO1xuICAgICAgICAgIHN0YWdlRWwuc3R5bGUubGVmdCA9IChzdGFnZUVsLm9mZnNldExlZnQgKyBldmVudC5tb3ZlbWVudFgpICsgJ3B4JztcbiAgICAgICAgICBzdGFnZUVsLnN0eWxlLnRvcCA9IChzdGFnZUVsLm9mZnNldFRvcCArIGV2ZW50Lm1vdmVtZW50WSkgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZHggPSB0aGlzLmN1cnNvclggLSB0aGlzLmRvd25YO1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmN1cnNvclkgLSB0aGlzLmRvd25ZO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkeCk7XG4gICAgICAgIGlmIChNYXRoLmFicyhkeCkgPj0gMiB8fCBNYXRoLmFicyhkeSkgPj0gMikge1xuICAgICAgICAgIHRoaXMuYmVnaW5EcmFnKCk7XG4gICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJcbmNsYXNzIFN2ZyB7XG4gIHN0YXRpYyBlbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdHlwZSk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHN0YXRpYyBzdmcoYXR0cmlidXRlcykge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJywnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG4iXSwic291cmNlUm9vdCI6IiJ9