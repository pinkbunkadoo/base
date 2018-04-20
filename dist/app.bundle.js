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
      label.x = 50;
      label.y = 100;

      this.stage.add(label);
    }
  }, {
    key: 'createGraphic',
    value: function createGraphic(shapes) {
      var stageEl = this.stage.dom();

      // localise shape coordinates
      for (var i = 0; i < shapes.length; i++) {
        var shape = shapes[i];
        var bounds = shape.getBounds();
        if (bounds) {
          for (var j = 0; j < shape.points.length; j++) {
            var p = shape.points[j];
            p.x -= bounds.x;
            p.y -= bounds.y;
          }
          shape.x = bounds.x - stageEl.offsetLeft;
          shape.y = bounds.y - stageEl.offsetTop;
        }
      }
      var graphic = new _graphic2.default({ shapes: shapes });
      this.stage.add(graphic);
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
        var shapes = this.paper.getShapes();
        this.createGraphic(shapes);

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

var _stage_object = __webpack_require__(/*! ./stage_object */ "./src/display/stage_object.js");

var _stage_object2 = _interopRequireDefault(_stage_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Graphic = function (_StageObject) {
  _inherits(Graphic, _StageObject);

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
}(_stage_object2.default);

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

    _this.points = [];

    var points = params.points;
    if (points) {
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        _this.points.push(new _point2.default(p.x, p.y));
      }
    }

    _this.fill = params.fill || null;
    _this.stroke = params.stroke || null;
    _this.strokeWidth = params.strokeWidth || 1;
    _this.closed = params.closed || false;

    // this.x = 0;
    // this.y = 0;
    return _this;
  }

  _createClass(Shape, [{
    key: 'getBounds',
    value: function getBounds() {
      var xmax = Number.NEGATIVE_INFINITY;
      var xmin = Number.POSITIVE_INFINITY;
      var ymax = Number.NEGATIVE_INFINITY;
      var ymin = Number.POSITIVE_INFINITY;

      if (this.points.length) {
        for (var i = 0; i < this.points.length; i++) {
          var p = this.points[i];
          var x = p.x;
          var y = p.y;
          xmax = x > xmax ? x : xmax;
          xmin = x < xmin ? x : xmin;
          ymax = y > ymax ? y : ymax;
          ymin = y < ymin ? y : ymin;
        }
        return new _rectangle2.default(xmin + this.x, ymin + this.y, xmax - xmin, ymax - ymin);
      }

      return null;
    }

    // Copyright (c) 1970-2003, Wm. Randolph Franklin
    // https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html

  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      return Shape.pointInPolygon(this.points, x, y);
    }
  }], [{
    key: 'pointInPolygon',
    value: function pointInPolygon(points, testx, testy) {
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

/***/ "./src/display/stage_object.js":
/*!*************************************!*\
  !*** ./src/display/stage_object.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/sleeper/github/base/src/display/stage_object.js'");

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
}(_stage_object2.default);

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
var COLORS = ['white',
// '#e6e6e6',
'#cccccc',
// '#b3b3b3',
'#999999',
// '#808080',
'#666666',
// '#4d4d4d',
'#333333',
// '#1a1a1a',
'black'];

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
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.shapes.length; i++) {
        var shape = this.shapes[i];
        this.drawPath({ points: shape.points, fill: shape.fill, stroke: shape.stroke, closed: shape.closed });
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
    this.canvas.width = 320;
    this.canvas.height = 200;

    this.el.appendChild(this.canvas);

    this.cursor = document.createElement('div');
    this.cursor.classList.add('stage-cursor');
    // this.el.appendChild(this.cursor);

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
      // console.log('add', stageObject);
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
      var ctx = this.canvas.getContext('2d');
      ctx.strokeStyle = shape.stroke || 'transparent';
      ctx.fillStyle = shape.fill || 'transparent';

      ctx.beginPath();

      for (var j = 0; j < shape.points.length; j++) {
        var p = shape.points[j];
        if (j == 0) ctx.moveTo(p.x, p.y);else ctx.lineTo(p.x, p.y);
      }
      if (shape.closed) ctx.closePath();
      ctx.fill();
      ctx.stroke();
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
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        this.renderObject(child);
        if (child.selected) {
          ctx.strokeStyle = 'cyan';
          ctx.beginPath();
          ctx.rect(child.x - 4 + 0.5, child.y - 4 + 0.5, 8, 8);
          ctx.stroke();
        }
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      var x = event.offsetX;
      var y = event.offsetY;

      var hit = false;

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.hitTest(x, y)) {
          // console.log('hit', child);
          child.select();
          this.selection = [child];
          hit = true;
        }
      }

      if (!hit) {
        this.deselect();
      }

      this.render();
      // if (event.target == this.el) {
      //   this.deselect();
      // }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {}
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorx = event.pageX - this.el.offsetLeft;
      this.cursory = event.pageY - this.el.offsetTop;

      this.cursor.style.left = this.cursorx + 'px';
      this.cursor.style.top = this.cursory + 'px';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImluaXRFbGVtZW50cyIsImluaXRFdmVudExpc3RlbmVycyIsInN0YXJ0dXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YWdlIiwiYXBwZW5kQ2hpbGQiLCJwYXBlciIsInZpc2libGUiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ2YWx1ZSIsIngiLCJ5IiwiYWRkIiwic2hhcGVzIiwic3RhZ2VFbCIsImkiLCJsZW5ndGgiLCJzaGFwZSIsImJvdW5kcyIsImdldEJvdW5kcyIsImoiLCJwb2ludHMiLCJwIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImdyYXBoaWMiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwiZ2V0U2hhcGVzIiwiY3JlYXRlR3JhcGhpYyIsInNob3dQYXBlciIsImhpZGVQYXBlciIsImV2ZW50Iiwia2V5IiwicmVwZWF0IiwidG9nZ2xlUGFwZXIiLCJoYW5kbGVFdmVudCIsInR5cGUiLCJvbktleURvd24iLCJvbk1vdXNlRG93biIsImluaXQiLCJHcmFwaGljIiwicGFyYW1zIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImdyb3ciLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsImhpdFRlc3QiLCJyZWN0IiwieG1pbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwieW1pbiIsInhtYXgiLCJORUdBVElWRV9JTkZJTklUWSIsInltYXgiLCJlbXB0eSIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJzYXZlIiwidHJhbnNsYXRlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmaWxsU3R5bGUiLCJmaWxsIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VkIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsIl93aWR0aCIsIl9oZWlnaHQiLCJHcm91cCIsImNoaWxkcmVuIiwiY2hpbGQiLCJwdXNoIiwicmVjdHMiLCJSZWN0YW5nbGUiLCJTaGFwZSIsInN0cm9rZVdpZHRoIiwicG9pbnRJblBvbHlnb24iLCJ0ZXN0eCIsInRlc3R5IiwiYyIsIlRleHQiLCJzZXRTaXplIiwic2l6ZSIsInNldFRleHQiLCJUcmFuc2Zvcm0iLCJzZWxlY3RlZCIsIl94IiwiX3kiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiYW1vdW50IiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJTTkFQX1JBRElVUyIsIkNPTE9SUyIsIlBhcGVyIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGp1c3RDYW52YXMiLCJ1bmRlZmluZWQiLCJjdXJzb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkTGlzdGVuZXJzIiwicmVtb3ZlTGlzdGVuZXJzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29sb3IiLCJkcmF3UGF0aCIsImN1cnNvcngiLCJjdXJzb3J5IiwiY3AiLCJwMCIsImRpc3RhbmNlIiwiYXJjIiwiUEkiLCJidXR0b24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImxlZnQiLCJ0b3AiLCJjb21tYW5kIiwib25QYXJhbWV0ZXIiLCJjYW5jZWxQYXRoIiwic2V0U3Ryb2tlIiwic2V0RmlsbCIsImluY2x1ZGVzIiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIiwib25EYmxDbGljayIsIm9uQ29udGV4dE1lbnUiLCJTdGFnZSIsInNlbGVjdGlvbiIsInN0YWdlT2JqZWN0IiwiYWRkZWRUb1N0YWdlIiwiZGVzZWxlY3QiLCJyZW5kZXJPYmplY3QiLCJyZW5kZXJTaGFwZSIsImhpdCIsInNlbGVjdCIsInBhZ2VYIiwicGFnZVkiLCJTdmciLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsInN2ZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFF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TCxlQUFULENBQXlCLDRCQUF6QixFQUF1RCxLQUF2RCxDQUFWO0FBQ0FHLFVBQUlELFlBQUosQ0FBaUIsYUFBakIsRUFBK0IsOEJBQS9CO0FBQ0EsV0FBSyxJQUFJRCxJQUFULElBQWlCRixVQUFqQixFQUE2QjtBQUMzQkksWUFBSUQsWUFBSixDQUFpQkQsSUFBakIsRUFBdUJGLFdBQVdFLElBQVgsQ0FBdkI7QUFDRDtBQUNELGFBQU9FLEdBQVA7QUFDRDs7Ozs7O2tCQUdZTCxHIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcmFwaGljIGZyb20gJy4vZGlzcGxheS9ncmFwaGljJztcbmltcG9ydCBUZXh0IGZyb20gJy4vZGlzcGxheS90ZXh0JztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSBbXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc3RhcnR1cCgpO1xuICB9XG5cbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICB9XG5cbiAgaW5pdEVsZW1lbnRzKCkge1xuICAgIHRoaXMuZG9tLmFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgIHRoaXMuc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5zdGFnZS5kb20oKSk7XG5cbiAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKHsgdmlzaWJsZTogZmFsc2UgfSk7XG4gICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMucGFwZXIuZG9tKCkpO1xuXG4gICAgLy8gdGhpcy5wYXBlci5vbigncGF0aHMnLCAocGF0aHMpID0+IHtcbiAgICAvLyAgIHRoaXMuY3JlYXRlU2hhcGUocGF0aHMpO1xuICAgIC8vICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHN0YXJ0dXAoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0dXAnKTtcblxuICAgIGxldCBsYWJlbCA9IG5ldyBUZXh0KHsgdmFsdWU6ICdoZWxsbycgfSk7XG4gICAgbGFiZWwueCA9IDUwO1xuICAgIGxhYmVsLnkgPSAxMDA7XG5cbiAgICB0aGlzLnN0YWdlLmFkZChsYWJlbCk7XG4gIH1cblxuICBjcmVhdGVHcmFwaGljKHNoYXBlcykge1xuICAgIGxldCBzdGFnZUVsID0gdGhpcy5zdGFnZS5kb20oKTtcblxuICAgIC8vIGxvY2FsaXNlIHNoYXBlIGNvb3JkaW5hdGVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgICAgIGlmIChib3VuZHMpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZS5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgcCA9IHNoYXBlLnBvaW50c1tqXTtcbiAgICAgICAgICBwLnggLT0gYm91bmRzLng7XG4gICAgICAgICAgcC55IC09IGJvdW5kcy55O1xuICAgICAgICB9XG4gICAgICAgIHNoYXBlLnggPSBib3VuZHMueCAtIHN0YWdlRWwub2Zmc2V0TGVmdDtcbiAgICAgICAgc2hhcGUueSA9IGJvdW5kcy55IC0gc3RhZ2VFbC5vZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBncmFwaGljID0gbmV3IEdyYXBoaWMoeyBzaGFwZXM6IHNoYXBlcyB9KTtcbiAgICB0aGlzLnN0YWdlLmFkZChncmFwaGljKTtcbiAgfVxuXG4gIHNob3dQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSAncGFwZXInO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnBhcGVyLmdldFNoYXBlcygpO1xuICAgICAgdGhpcy5jcmVhdGVHcmFwaGljKHNoYXBlcyk7XG5cbiAgICAgIHRoaXMucGFwZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMuc2hvd1BhcGVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnRvZ2dsZVBhcGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgICAgICB0aGlzLnBhcGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIGxldCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICAvLyBsZXQgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgLy8gY29uc29sZS5sb2coeCwgeSk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuLi9zdmcnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgU3RhZ2VPYmplY3QgZnJvbSAnLi9zdGFnZV9vYmplY3QnO1xuXG5jbGFzcyBHcmFwaGljIGV4dGVuZHMgU3RhZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hhcGVzID0gcGFyYW1zLnNoYXBlcyB8fCBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuICAgIGlmIChib3VuZHMpIHtcbiAgICAgIGJvdW5kcy5ncm93KDEpO1xuICAgICAgdGhpcy53aWR0aCA9IGJvdW5kcy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcbiAgICAgIHRoaXMueCA9IGJvdW5kcy54O1xuICAgICAgdGhpcy55ID0gYm91bmRzLnk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdCh4IC0gdGhpcy54LCB5IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0O1xuXG4gICAgaWYgKHRoaXMuc2hhcGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHhtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGxldCBlbXB0eSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgICAgICAgaWYgKGJvdW5kcykge1xuICAgICAgICAgIGJvdW5kcy54ICs9IHNoYXBlLng7XG4gICAgICAgICAgYm91bmRzLnkgKz0gc2hhcGUueTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhib3VuZHMpO1xuICAgICAgICAgIHhtaW4gPSAoYm91bmRzLnggPCB4bWluID8gYm91bmRzLnggOiB4bWluKTtcbiAgICAgICAgICB5bWluID0gKGJvdW5kcy55IDwgeW1pbiA/IGJvdW5kcy55IDogeW1pbik7XG4gICAgICAgICAgeG1heCA9IChib3VuZHMueCArIGJvdW5kcy53aWR0aCA+IHhtYXggPyBib3VuZHMueCArIGJvdW5kcy53aWR0aCA6IHhtYXgpO1xuICAgICAgICAgIHltYXggPSAoYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0ID4geW1heCA/IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCA6IHltYXgpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpO1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFlbXB0eSkgcmVjdCA9IG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnR3JhcGhpYy5yZW5kZXInKTtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSgxLCAxKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuXG4gICAgICAvLyBsZXQgcHMgPSAnTSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZS5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgICAgIGlmIChqID09IDApXG4gICAgICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICAgICAgLy8gbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgICAgIC8vIGlmIChqID4gMCkgcHMgKz0gJ0wnO1xuICAgICAgICAvLyBwcyArPSAocC54IC0gYm91bmRzLngpICsgJyAnICsgKHAueSAtIGJvdW5kcy55KSArICcgJztcbiAgICAgIH1cbiAgICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAgICAgLy8gcHMgKz0gJ1onO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gd2hpbGUgKHRoaXMuZWwuZmlyc3RDaGlsZCkgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xuICAgIC8vXG4gICAgLy8gbGV0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG4gICAgLy8gaWYgKGJvdW5kcykge1xuICAgIC8vICAgdGhpcy54ID0gYm91bmRzLng7XG4gICAgLy8gICB0aGlzLnkgPSBib3VuZHMueTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IGJvdW5kcy53aWR0aCArICdweCc7XG4gICAgLy8gICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQgKyAncHgnO1xuICAgIC8vXG4gICAgLy8gICBsZXQgc3ZnRWwgPSBzdmcuc3ZnKCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYm91bmRzLndpZHRoKTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYm91bmRzLmhlaWdodCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyBib3VuZHMud2lkdGggKyAnICcgKyBib3VuZHMuaGVpZ2h0KTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgIC8vXG4gICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBwcyA9ICdNJztcbiAgICAvL1xuICAgIC8vICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXBlLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgIC8vICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgIC8vICAgICAgIGlmIChqID4gMCkgcHMgKz0gJ0wnO1xuICAgIC8vICAgICAgIHBzICs9IChwLnggLSBib3VuZHMueCkgKyAnICcgKyAocC55IC0gYm91bmRzLnkpICsgJyAnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAvLyAgICAgICBwcyArPSAnWic7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnZmlsbCcsIHNoYXBlLmZpbGwpO1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBnID0gc3ZnLmVsZW1lbnQoJ2cnKTtcbiAgICAvLyAgICAgLy8gZy5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgc2hhcGUuZmlsbCA/ICd2aXNpYmxlUGFpbnRlZCcgOiAndmlzaWJsZVN0cm9rZScpO1xuICAgIC8vICAgICBnLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAncGFpbnRlZCcpO1xuICAgIC8vICAgICBsZXQgcGF0aCA9IHN2Zy5lbGVtZW50KCdwYXRoJywgeyBkOiBwcywgZmlsbDogKHNoYXBlLmZpbGwgPyBzaGFwZS5maWxsIDogJ25vbmUnKSwgc3Ryb2tlOiBzaGFwZS5zdHJva2UgfSk7XG4gICAgLy8gICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAzKTtcbiAgICAvLyAgICAgZy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICAvL1xuICAgIC8vICAgICBzdmdFbC5hcHBlbmRDaGlsZChnKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3ZnRWwpO1xuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaGljO1xuIiwiaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBhZGQoY2hpbGQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGJvdW5kcyA9IGNoaWxkLmdldEJvdW5kcygpO1xuICAgICAgcmVjdHMucHVzaChib3VuZHMpO1xuICAgIH1cblxuICAgIGlmIChyZWN0cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWN0ID0gcmVjdHNbaV07XG4gICAgICAgIHhtaW4gPSByZWN0LnggPCB4bWluID8gcmVjdC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHJlY3QueSA8IHltaW4gPyByZWN0LnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcmVjdC54ICsgcmVjdC53aWR0aCA+IHhtYXggPyByZWN0LnggKyByZWN0LndpZHRoIDogeG1heDtcbiAgICAgICAgeW1heCA9IHJlY3QueSArIHJlY3QuaGVpZ2h0ID4geW1heCA/IHJlY3QueSArIHJlY3QuaGVpZ2h0IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4gKyB0aGlzLngsIHltaW4gKyB0aGlzLnksIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBTaGFwZSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuXG4gICAgbGV0IHBvaW50cyA9IHBhcmFtcy5wb2ludHM7XG4gICAgaWYgKHBvaW50cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHAueCwgcC55KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maWxsID0gcGFyYW1zLmZpbGwgfHwgbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IHBhcmFtcy5zdHJva2UgfHwgbnVsbDtcbiAgICB0aGlzLnN0cm9rZVdpZHRoID0gcGFyYW1zLnN0cm9rZVdpZHRoIHx8IDE7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuXG4gICAgLy8gdGhpcy54ID0gMDtcbiAgICAvLyB0aGlzLnkgPSAwO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCB4bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICBsZXQgeCA9IHAueDtcbiAgICAgICAgbGV0IHkgPSBwLnk7XG4gICAgICAgIHhtYXggPSB4ID4geG1heCA/IHggOiB4bWF4O1xuICAgICAgICB4bWluID0geCA8IHhtaW4gPyB4IDogeG1pbjtcbiAgICAgICAgeW1heCA9IHkgPiB5bWF4ID8geSA6IHltYXg7XG4gICAgICAgIHltaW4gPSB5IDwgeW1pbiA/IHkgOiB5bWluO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeG1pbiArIHRoaXMueCwgeW1pbiArIHRoaXMueSwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIENvcHlyaWdodCAoYykgMTk3MC0yMDAzLCBXbS4gUmFuZG9scGggRnJhbmtsaW5cbiAgLy8gaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1Ly9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuXG4gIHN0YXRpYyBwb2ludEluUG9seWdvbihwb2ludHMsIHRlc3R4LCB0ZXN0eSkge1xuICAgIGxldCBpLCBqLCBjID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgaWYgKCgocG9pbnRzW2ldLnkgPiB0ZXN0eSkgIT0gKHBvaW50c1tqXS55ID4gdGVzdHkpKSAmJlxuICAgICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICAgIGMgPSAhYztcbiAgICB9XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gU2hhcGUucG9pbnRJblBvbHlnb24odGhpcy5wb2ludHMsIHgsIHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IFN0YWdlT2JqZWN0IGZyb20gJy4vc3RhZ2Vfb2JqZWN0JztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFN0YWdlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMudmFsdWUpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICAgIC8vIHRoaXMuZWwuc3R5bGUuZm9udFNpemUgPSB0aGlzLnNpemUgKyAncHgnO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiXG5jbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cbn1cblxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09IHR5cGUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IHR5cGU6IHR5cGUsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRXZlbnREaXNwYXRjaGVyLCBFdmVudCB9O1xuIiwiXG5jbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuciA9IHI7XG4gIH1cblxuICBpbnRlcnNlY3RzTGluZVNlZ21lbnQoeDEsIHkxLCB4MiwgeTIpIHtcblxuICB9XG5cbiAgY29udGFpbnNQb2ludCh4LCB5KSB7XG4gICAgbGV0IGR4ID0geCAtIHRoaXMueDtcbiAgICBsZXQgZHkgPSB5IC0gdGhpcy55O1xuICAgIGxldCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICByZXR1cm4gZCA8IHRoaXMucjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRpc3RhbmNlKHBvaW50KSB7XG4gICAgbGV0IGR4ID0gdGhpcy54IC0gcG9pbnQueDtcbiAgICBsZXQgZHkgPSB0aGlzLnkgLSBwb2ludC55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdyb3coYW1vdW50KSB7XG4gICAgdGhpcy54IC09IGFtb3VudDtcbiAgICB0aGlzLnkgLT0gYW1vdW50O1xuICAgIHRoaXMud2lkdGggKz0gYW1vdW50ICogMjtcbiAgICB0aGlzLmhlaWdodCArPSBhbW91bnQgKiAyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL2dlb20vY2lyY2xlJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuXG5sZXQgU05BUF9SQURJVVMgPSAzO1xubGV0IENPTE9SUyA9IFtcbiAgJ3doaXRlJyxcbiAgLy8gJyNlNmU2ZTYnLFxuICAnI2NjY2NjYycsXG4gIC8vICcjYjNiM2IzJyxcbiAgJyM5OTk5OTknLFxuICAvLyAnIzgwODA4MCcsXG4gICcjNjY2NjY2JyxcbiAgLy8gJyM0ZDRkNGQnLFxuICAnIzMzMzMzMycsXG4gIC8vICcjMWExYTFhJyxcbiAgJ2JsYWNrJ1xuXTtcblxuY2xhc3MgUGFwZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgIHRoaXMuZmlsbCA9IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBDT0xPUlNbNV07XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdwYXBlcicpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmFkanVzdENhbnZhcygpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLnNldFZpc2libGUocGFyYW1zLnZpc2libGUgIT09IHVuZGVmaW5lZCA/IHBhcmFtcy52aXNpYmxlIDogdHJ1ZSk7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IFsgJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdkYmxjbGljaycsICdjb250ZXh0bWVudScgXTtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncGFwZXItY3Vyc29yJyk7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY3Vyc29yKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubGlzdGVuZXJzW2ldLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBzZXRWaXNpYmxlKHZpc2libGUpIHtcbiAgICBpZiAodGhpcy52aXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkanVzdENhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIGRyYXdMaW5lKHgxLCB5MSwgeDIsIHkyLCBjb2xvcikge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yIHx8ICdibGFjayc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcbiAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd1BhdGgocGFyYW1zPXt9KSB7XG4gICAgbGV0IHBvaW50cyA9IHBhcmFtcy5wb2ludHMgfHwgW107XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gcGFyYW1zLnN0cm9rZSAhPT0gdW5kZWZpbmVkID8gKHBhcmFtcy5zdHJva2UgPyBwYXJhbXMuc3Ryb2tlIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwYXJhbXMuZmlsbCAhPT0gdW5kZWZpbmVkID8gKHBhcmFtcy5maWxsID8gcGFyYW1zLmZpbGwgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgaWYgKGkgPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8ocC54LCBwLnkpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICB0aGlzLmRyYXdQYXRoKHsgcG9pbnRzOiBzaGFwZS5wb2ludHMsIGZpbGw6IHNoYXBlLmZpbGwsIHN0cm9rZTogc2hhcGUuc3Ryb2tlLCBjbG9zZWQ6IHNoYXBlLmNsb3NlZCB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRyYXdQYXRoKHsgcG9pbnRzOiB0aGlzLnBvaW50cywgZmlsbDogdGhpcy5maWxsLCBzdHJva2U6IHRoaXMuc3Ryb2tlIH0pO1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yeCwgdGhpcy5jdXJzb3J5KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgbGV0IGNwID0gbmV3IFBvaW50KHRoaXMuY3Vyc29yeCwgdGhpcy5jdXJzb3J5KTtcbiAgICAgIGxldCBwMCA9IHRoaXMucG9pbnRzWzBdO1xuICAgICAgaWYgKGNwLmRpc3RhbmNlKHAwKSA8IFNOQVBfUkFESVVTKSB7XG4gICAgICAgIGN0eC5hcmMocDAueCwgcDAueSwgNSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBnZXRTaGFwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcGVzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjYW5jZWxQYXRoKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNsb3NlUGF0aChjbG9zZWQ9ZmFsc2UpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHsgcG9pbnRzOiB0aGlzLnBvaW50cywgY2xvc2VkOiBjbG9zZWQsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSB9KTtcbiAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUpO1xuICAgIH1cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRGaWxsKGZpbGwpIHtcbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRTdHJva2Uoc3Ryb2tlKSB7XG4gICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgU05BUF9SQURJVVMpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3J5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvcnggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yeSArICdweCc7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICh0aGlzLmNvbW1hbmQpIHtcbiAgICAgIHRoaXMub25QYXJhbWV0ZXIoZXZlbnQua2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09ICdFc2NhcGUnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3MnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdHJva2UodGhpcy5zdHJva2UgPyBudWxsIDogJ2JsYWNrJylcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnMCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLnNldEZpbGwobnVsbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoZXZlbnQua2V5KSAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIGxldCBjb2xvciA9IENPTE9SU1twYXJzZUludChldmVudC5rZXkpIC0gMV07XG4gICAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuc2V0RmlsbChjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsImltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5cbmNsYXNzIFN0YWdlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDMyMDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAyMDA7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnc3RhZ2UtY3Vyc29yJyk7XG4gICAgLy8gdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG5cbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGFkZChzdGFnZU9iamVjdCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhZGQnLCBzdGFnZU9iamVjdCk7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKHN0YWdlT2JqZWN0KTtcbiAgICBzdGFnZU9iamVjdC5hZGRlZFRvU3RhZ2UoKTtcbiAgICAvLyBzdGFnZU9iamVjdC5vbignbW91c2Vkb3duJywgKG9iaikgPT4ge1xuICAgIC8vICAgLy8gaWYgKHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKG9iaikpIHtcbiAgICAvLyAgIC8vICAgdGhpcy5zZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICE9PSBvYmopO1xuICAgIC8vICAgLy8gICBvYmouZGVzZWxlY3QoKTtcbiAgICAvLyAgIC8vIH1cbiAgICAvLyAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICAvLyAgIHRoaXMuc2VsZWN0aW9uID0gWyBvYmogXTtcbiAgICAvLyAgIG9iai5zZWxlY3QoKTtcbiAgICAvLyB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlclNoYXBlKHNoYXBlKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2hhcGUucG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHNoYXBlLnBvaW50c1tqXTtcbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcmVuZGVyT2JqZWN0KHN0YWdlT2JqZWN0KSB7XG4gICAgaWYgKHN0YWdlT2JqZWN0IGluc3RhbmNlb2YgR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhZ2VPYmplY3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gc3RhZ2VPYmplY3QuY2hpbGRyZW5baV07XG4gICAgICAgIHRoaXMucmVuZGVyT2JqZWN0KGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhZ2VPYmplY3QgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgdGhpcy5yZW5kZXJTaGFwZShzdGFnZU9iamVjdCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICB0aGlzLnJlbmRlck9iamVjdChjaGlsZCk7XG4gICAgICBpZiAoY2hpbGQuc2VsZWN0ZWQpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2N5YW4nO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KGNoaWxkLngtNCswLjUsIGNoaWxkLnktNCswLjUsIDgsIDgpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBsZXQgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuXG4gICAgbGV0IGhpdCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hpdCcsIGNoaWxkKTtcbiAgICAgICAgY2hpbGQuc2VsZWN0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWyBjaGlsZCBdO1xuICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGl0KSB7XG4gICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICAvLyBpZiAoZXZlbnQudGFyZ2V0ID09IHRoaXMuZWwpIHtcbiAgICAvLyAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICAvLyB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3J4ID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3J5ID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvcnggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yeSArICdweCc7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==