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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
  function Shape() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Shape);

    this.points = [];

    var points = params.points;
    if (points) {
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        this.points.push(new _point2.default(p.x, p.y));
      }
    }

    this.fill = params.fill || null;
    this.stroke = params.stroke || null;
    this.strokeWidth = params.strokeWidth || 1;
    this.closed = params.closed || false;

    this.x = 0;
    this.y = 0;
  }

  _createClass(Shape, [{
    key: 'getBounds',
    value: function getBounds() {
      var rect = null;

      var xmax = Number.NEGATIVE_INFINITY;
      var xmin = Number.POSITIVE_INFINITY;
      var ymax = Number.NEGATIVE_INFINITY;
      var ymin = Number.POSITIVE_INFINITY;

      if (this.points.length) {
        for (var i = 0; i < this.points.length; i++) {
          var p = this.points[i];
          xmax = p.x > xmax ? p.x : xmax;
          xmin = p.x < xmin ? p.x : xmin;
          ymax = p.y > ymax ? p.y : ymax;
          ymin = p.y < ymin ? p.y : ymin;
        }
        rect = new _rectangle2.default(xmin, ymin, xmax - xmin, ymax - ymin);
      }

      return rect;
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
}();

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
    _classCallCheck(this, StageObject);

    var _this = _possibleConstructorReturn(this, (StageObject.__proto__ || Object.getPrototypeOf(StageObject)).call(this));

    _this.x = 0;
    _this.y = 0;

    _this.canvas = document.createElement('canvas');
    return _this;
  }

  _createClass(StageObject, [{
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
    key: 'render',
    value: function render() {}

    // beginDrag() {
    //   window.addEventListener('mouseup', this);
    //   window.addEventListener('mousemove', this);
    //   window.addEventListener('blur', this);
    //   this.drag = true;
    // }
    //
    // endDrag() {
    //   window.removeEventListener('mouseup', this);
    //   window.removeEventListener('mousemove', this);
    //   window.removeEventListener('blur', this);
    //   this.drag = false;
    // }
    //
    // onMouseDown(event) {
    //   console.log(event.target);
    //   this.emit('mousedown', this);
    //   this.beginDrag();
    // }
    //
    // onMouseUp(event) {
    //   this.endDrag();
    // }
    //
    // onMouseMove(event) {
    //   if (this.drag) {
    //     this.x += event.movementX;
    //     this.y += event.movementY;
    //   }
    // }
    //
    // onBlur(event) {
    //   this.endDrag();
    // }
    //
    // handleEvent(event) {
    //   if (event.type == 'mousedown') {
    //     this.onMouseDown(event);
    //   }
    //   else if (event.type == 'mouseup') {
    //     this.onMouseUp(event);
    //   }
    //   else if (event.type == 'mousemove') {
    //     this.onMouseMove(event);
    //   }
    //   else if (event.type == 'blur') {
    //     this.onBlur(event);
    //   }
    // }

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
    this.el.appendChild(this.cursor);

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
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        ctx.drawImage(child.canvas, child.x, child.y);
      }
      // ctx.fillStyle = 'lightgray';
      // ctx.fillRect(0, 0, this.canvas.width - 1, this.canvas.height - 1);
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      // let x = event.offsetX;
      // let y = event.offsetY;
      // let x = event.clientX;
      // let y = event.clientY;

      var x = event.offsetX;
      var y = event.offsetY;
      console.log(x, y);

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.hitTest(x, y)) {
          console.log('hit', child);
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3N0YWdlX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImluaXRFbGVtZW50cyIsImluaXRFdmVudExpc3RlbmVycyIsInN0YXJ0dXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YWdlIiwiYXBwZW5kQ2hpbGQiLCJwYXBlciIsInZpc2libGUiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ2YWx1ZSIsIngiLCJ5IiwiYWRkIiwic2hhcGVzIiwic3RhZ2VFbCIsImkiLCJsZW5ndGgiLCJzaGFwZSIsImJvdW5kcyIsImdldEJvdW5kcyIsImoiLCJwb2ludHMiLCJwIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImdyYXBoaWMiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwiZ2V0U2hhcGVzIiwiY3JlYXRlR3JhcGhpYyIsInNob3dQYXBlciIsImhpZGVQYXBlciIsImV2ZW50Iiwia2V5IiwicmVwZWF0IiwidG9nZ2xlUGFwZXIiLCJoYW5kbGVFdmVudCIsInR5cGUiLCJvbktleURvd24iLCJvbk1vdXNlRG93biIsImluaXQiLCJHcmFwaGljIiwicGFyYW1zIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImdyb3ciLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsImhpdFRlc3QiLCJyZWN0IiwieG1pbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwieW1pbiIsInhtYXgiLCJORUdBVElWRV9JTkZJTklUWSIsInltYXgiLCJlbXB0eSIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJzYXZlIiwidHJhbnNsYXRlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmaWxsU3R5bGUiLCJmaWxsIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VkIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsIl93aWR0aCIsIl9oZWlnaHQiLCJTaGFwZSIsInB1c2giLCJzdHJva2VXaWR0aCIsInBvaW50SW5Qb2x5Z29uIiwidGVzdHgiLCJ0ZXN0eSIsImMiLCJTdGFnZU9iamVjdCIsInNlbGVjdGVkIiwiX3giLCJfeSIsIlRleHQiLCJzZXRTaXplIiwic2l6ZSIsInNldFRleHQiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUmVjdGFuZ2xlIiwiYW1vdW50IiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJTTkFQX1JBRElVUyIsIkNPTE9SUyIsIlBhcGVyIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGp1c3RDYW52YXMiLCJ1bmRlZmluZWQiLCJjdXJzb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkTGlzdGVuZXJzIiwicmVtb3ZlTGlzdGVuZXJzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29sb3IiLCJkcmF3UGF0aCIsImN1cnNvcngiLCJjdXJzb3J5IiwiY3AiLCJwMCIsImRpc3RhbmNlIiwiYXJjIiwiUEkiLCJidXR0b24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImxlZnQiLCJ0b3AiLCJjb21tYW5kIiwib25QYXJhbWV0ZXIiLCJjYW5jZWxQYXRoIiwic2V0U3Ryb2tlIiwic2V0RmlsbCIsImluY2x1ZGVzIiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIiwib25EYmxDbGljayIsIm9uQ29udGV4dE1lbnUiLCJTdGFnZSIsImNoaWxkcmVuIiwic2VsZWN0aW9uIiwic3RhZ2VPYmplY3QiLCJhZGRlZFRvU3RhZ2UiLCJkZXNlbGVjdCIsImZpbGxSZWN0IiwiY2hpbGQiLCJkcmF3SW1hZ2UiLCJwYWdlWCIsInBhZ2VZIiwiU3ZnIiwiYXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJzdmciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7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LFdBQUssSUFBSUQsSUFBVCxJQUFpQkYsVUFBakIsRUFBNkI7QUFDM0JJLFlBQUlELFlBQUosQ0FBaUJELElBQWpCLEVBQXVCRixXQUFXRSxJQUFYLENBQXZCO0FBQ0Q7QUFDRCxhQUFPRSxHQUFQO0FBQ0Q7Ozs7OztrQkFHWUwsRyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCBzdmcgZnJvbSAnLi9zdmcnO1xuaW1wb3J0IFN0YWdlIGZyb20gJy4vc3RhZ2UnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXInO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICcuL2Rpc3BsYXkvZ3JhcGhpYyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2Rpc3BsYXkvdGV4dCc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnN0YXJ0dXAoKTtcbiAgfVxuXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIGluaXRFbGVtZW50cygpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICB0aGlzLnN0YWdlID0gbmV3IFN0YWdlKCk7XG4gICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMuc3RhZ2UuZG9tKCkpO1xuXG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcih7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnBhcGVyLmRvbSgpKTtcblxuICAgIC8vIHRoaXMucGFwZXIub24oJ3BhdGhzJywgKHBhdGhzKSA9PiB7XG4gICAgLy8gICB0aGlzLmNyZWF0ZVNoYXBlKHBhdGhzKTtcbiAgICAvLyAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgLy8gfSk7XG4gIH1cblxuICBzdGFydHVwKCkge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydHVwJyk7XG5cbiAgICBsZXQgbGFiZWwgPSBuZXcgVGV4dCh7IHZhbHVlOiAnaGVsbG8nIH0pO1xuICAgIGxhYmVsLnggPSA1MDtcbiAgICBsYWJlbC55ID0gMTAwO1xuXG4gICAgdGhpcy5zdGFnZS5hZGQobGFiZWwpO1xuICB9XG5cbiAgY3JlYXRlR3JhcGhpYyhzaGFwZXMpIHtcbiAgICBsZXQgc3RhZ2VFbCA9IHRoaXMuc3RhZ2UuZG9tKCk7XG5cbiAgICAvLyBsb2NhbGlzZSBzaGFwZSBjb29yZGluYXRlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICBsZXQgYm91bmRzID0gc2hhcGUuZ2V0Qm91bmRzKCk7XG4gICAgICBpZiAoYm91bmRzKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2hhcGUucG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgICAgICAgcC54IC09IGJvdW5kcy54O1xuICAgICAgICAgIHAueSAtPSBib3VuZHMueTtcbiAgICAgICAgfVxuICAgICAgICBzaGFwZS54ID0gYm91bmRzLnggLSBzdGFnZUVsLm9mZnNldExlZnQ7XG4gICAgICAgIHNoYXBlLnkgPSBib3VuZHMueSAtIHN0YWdlRWwub2Zmc2V0VG9wO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHsgc2hhcGVzOiBzaGFwZXMgfSk7XG4gICAgdGhpcy5zdGFnZS5hZGQoZ3JhcGhpYyk7XG4gIH1cblxuICBzaG93UGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5wYXBlci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gJ3BhcGVyJztcbiAgICB9XG4gIH1cblxuICBoaWRlUGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgICBsZXQgc2hhcGVzID0gdGhpcy5wYXBlci5nZXRTaGFwZXMoKTtcbiAgICAgIHRoaXMuY3JlYXRlR3JhcGhpYyhzaGFwZXMpO1xuXG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnNob3dQYXBlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy50b2dnbGVQYXBlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgICAgdGhpcy5wYXBlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBsZXQgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgLy8gbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuICAgIC8vIGNvbnNvbGUubG9nKHgsIHkpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJyk7XG4gIGxldCBhcHAgPSBuZXcgQXBwKCk7XG4gIGFwcC5pbml0KCk7XG59KTtcbiIsImltcG9ydCBzdmcgZnJvbSAnLi4vc3ZnJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFN0YWdlT2JqZWN0IGZyb20gJy4vc3RhZ2Vfb2JqZWN0JztcblxuY2xhc3MgR3JhcGhpYyBleHRlbmRzIFN0YWdlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNoYXBlcyA9IHBhcmFtcy5zaGFwZXMgfHwgW107XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBsZXQgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcbiAgICBpZiAoYm91bmRzKSB7XG4gICAgICBib3VuZHMuZ3JvdygxKTtcbiAgICAgIHRoaXMud2lkdGggPSBib3VuZHMud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XG4gICAgICB0aGlzLnggPSBib3VuZHMueDtcbiAgICAgIHRoaXMueSA9IGJvdW5kcy55O1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIHNldCB3aWR0aCh2YWx1ZSkge1xuICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB2YWx1ZTtcbiAgfVxuXG4gIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgaWYgKHNoYXBlLmhpdFRlc3QoeCAtIHRoaXMueCwgeSAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdDtcblxuICAgIGlmICh0aGlzLnNoYXBlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBsZXQgZW1wdHkgPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgICBsZXQgYm91bmRzID0gc2hhcGUuZ2V0Qm91bmRzKCk7XG4gICAgICAgIGlmIChib3VuZHMpIHtcbiAgICAgICAgICBib3VuZHMueCArPSBzaGFwZS54O1xuICAgICAgICAgIGJvdW5kcy55ICs9IHNoYXBlLnk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYm91bmRzKTtcbiAgICAgICAgICB4bWluID0gKGJvdW5kcy54IDwgeG1pbiA/IGJvdW5kcy54IDogeG1pbik7XG4gICAgICAgICAgeW1pbiA9IChib3VuZHMueSA8IHltaW4gPyBib3VuZHMueSA6IHltaW4pO1xuICAgICAgICAgIHhtYXggPSAoYm91bmRzLnggKyBib3VuZHMud2lkdGggPiB4bWF4ID8gYm91bmRzLnggKyBib3VuZHMud2lkdGggOiB4bWF4KTtcbiAgICAgICAgICB5bWF4ID0gKGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCA+IHltYXggPyBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgOiB5bWF4KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4bWluLCB5bWluLCB4bWF4LCB5bWF4KTtcbiAgICAgICAgICBlbXB0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZW1wdHkpIHJlY3QgPSBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ0dyYXBoaWMucmVuZGVyJyk7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAvLyBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC50cmFuc2xhdGUoMSwgMSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcblxuICAgICAgLy8gbGV0IHBzID0gJ00nO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2hhcGUucG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgICAgICBpZiAoaiA9PSAwKVxuICAgICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgICAgIC8vIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgICAgICAvLyBpZiAoaiA+IDApIHBzICs9ICdMJztcbiAgICAgICAgLy8gcHMgKz0gKHAueCAtIGJvdW5kcy54KSArICcgJyArIChwLnkgLSBib3VuZHMueSkgKyAnICc7XG4gICAgICB9XG4gICAgICBpZiAoc2hhcGUuY2xvc2VkKSB7XG4gICAgICAgIC8vIHBzICs9ICdaJztcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgfVxuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIHdoaWxlICh0aGlzLmVsLmZpcnN0Q2hpbGQpIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5lbC5maXJzdENoaWxkKTtcbiAgICAvL1xuICAgIC8vIGxldCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuICAgIC8vIGlmIChib3VuZHMpIHtcbiAgICAvLyAgIHRoaXMueCA9IGJvdW5kcy54O1xuICAgIC8vICAgdGhpcy55ID0gYm91bmRzLnk7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSBib3VuZHMud2lkdGggKyAncHgnO1xuICAgIC8vICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBib3VuZHMuaGVpZ2h0ICsgJ3B4JztcbiAgICAvL1xuICAgIC8vICAgbGV0IHN2Z0VsID0gc3ZnLnN2ZygpO1xuICAgIC8vICAgc3ZnRWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGJvdW5kcy53aWR0aCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGJvdW5kcy5oZWlnaHQpO1xuICAgIC8vICAgc3ZnRWwuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgYm91bmRzLndpZHRoICsgJyAnICsgYm91bmRzLmhlaWdodCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcbiAgICAvL1xuICAgIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcbiAgICAvL1xuICAgIC8vICAgICBsZXQgcHMgPSAnTSc7XG4gICAgLy9cbiAgICAvLyAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZS5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgICAgICBsZXQgcCA9IHNoYXBlLnBvaW50c1tqXTtcbiAgICAvLyAgICAgICBpZiAoaiA+IDApIHBzICs9ICdMJztcbiAgICAvLyAgICAgICBwcyArPSAocC54IC0gYm91bmRzLngpICsgJyAnICsgKHAueSAtIGJvdW5kcy55KSArICcgJztcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoc2hhcGUuY2xvc2VkKSB7XG4gICAgLy8gICAgICAgcHMgKz0gJ1onO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2ZpbGwnLCBzaGFwZS5maWxsKTtcbiAgICAvL1xuICAgIC8vICAgICBsZXQgZyA9IHN2Zy5lbGVtZW50KCdnJyk7XG4gICAgLy8gICAgIC8vIGcuc2V0QXR0cmlidXRlKCdwb2ludGVyLWV2ZW50cycsIHNoYXBlLmZpbGwgPyAndmlzaWJsZVBhaW50ZWQnIDogJ3Zpc2libGVTdHJva2UnKTtcbiAgICAvLyAgICAgZy5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgJ3BhaW50ZWQnKTtcbiAgICAvLyAgICAgbGV0IHBhdGggPSBzdmcuZWxlbWVudCgncGF0aCcsIHsgZDogcHMsIGZpbGw6IChzaGFwZS5maWxsID8gc2hhcGUuZmlsbCA6ICdub25lJyksIHN0cm9rZTogc2hhcGUuc3Ryb2tlIH0pO1xuICAgIC8vICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMyk7XG4gICAgLy8gICAgIGcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgLy9cbiAgICAvLyAgICAgc3ZnRWwuYXBwZW5kQ2hpbGQoZyk7XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLmVsLmFwcGVuZENoaWxkKHN2Z0VsKTtcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhpYztcbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuXG5jbGFzcyBTaGFwZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG5cbiAgICBsZXQgcG9pbnRzID0gcGFyYW1zLnBvaW50cztcbiAgICBpZiAocG9pbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgUG9pbnQocC54LCBwLnkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbGwgPSBwYXJhbXMuZmlsbCB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gcGFyYW1zLnN0cm9rZSB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBwYXJhbXMuc3Ryb2tlV2lkdGggfHwgMTtcbiAgICB0aGlzLmNsb3NlZCA9IHBhcmFtcy5jbG9zZWQgfHwgZmFsc2U7XG5cbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgbGV0IHJlY3QgPSBudWxsO1xuXG4gICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgbGV0IHhtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgbGV0IHltYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgIHhtYXggPSBwLnggPiB4bWF4ID8gcC54IDogeG1heDtcbiAgICAgICAgeG1pbiA9IHAueCA8IHhtaW4gPyBwLnggOiB4bWluO1xuICAgICAgICB5bWF4ID0gcC55ID4geW1heCA/IHAueSA6IHltYXg7XG4gICAgICAgIHltaW4gPSBwLnkgPCB5bWluID8gcC55IDogeW1pbjtcbiAgICAgIH1cbiAgICAgIHJlY3QgPSBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICAvLyBDb3B5cmlnaHQgKGMpIDE5NzAtMjAwMywgV20uIFJhbmRvbHBoIEZyYW5rbGluXG4gIC8vIGh0dHBzOi8vd3JmLmVjc2UucnBpLmVkdS8vUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcblxuICBzdGF0aWMgcG9pbnRJblBvbHlnb24ocG9pbnRzLCB0ZXN0eCwgdGVzdHkpIHtcbiAgICBsZXQgaSwgaiwgYyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICAgIGlmICgoKHBvaW50c1tpXS55ID4gdGVzdHkpICE9IChwb2ludHNbal0ueSA+IHRlc3R5KSkgJiZcbiAgICAgICAgKHRlc3R4IDwgKHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLngpICogKHRlc3R5IC0gcG9pbnRzW2ldLnkpIC8gKHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnkpICsgcG9pbnRzW2ldLngpKVxuICAgICAgICBjID0gIWM7XG4gICAgfVxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIFNoYXBlLnBvaW50SW5Qb2x5Z29uKHRoaXMucG9pbnRzLCB4LCB5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBTdGFnZU9iamVjdCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5feTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpcy5feCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLl95ID0gdmFsdWU7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgfVxuXG4gIC8vIGJlZ2luRHJhZygpIHtcbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICAvLyAgIHRoaXMuZHJhZyA9IHRydWU7XG4gIC8vIH1cbiAgLy9cbiAgLy8gZW5kRHJhZygpIHtcbiAgLy8gICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAvLyAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgLy8gICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICAvLyAgIHRoaXMuZHJhZyA9IGZhbHNlO1xuICAvLyB9XG4gIC8vXG4gIC8vIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gIC8vICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgLy8gICB0aGlzLmVtaXQoJ21vdXNlZG93bicsIHRoaXMpO1xuICAvLyAgIHRoaXMuYmVnaW5EcmFnKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gb25Nb3VzZVVwKGV2ZW50KSB7XG4gIC8vICAgdGhpcy5lbmREcmFnKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgLy8gICBpZiAodGhpcy5kcmFnKSB7XG4gIC8vICAgICB0aGlzLnggKz0gZXZlbnQubW92ZW1lbnRYO1xuICAvLyAgICAgdGhpcy55ICs9IGV2ZW50Lm1vdmVtZW50WTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gb25CbHVyKGV2ZW50KSB7XG4gIC8vICAgdGhpcy5lbmREcmFnKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgLy8gICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAvLyAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gIC8vICAgfVxuICAvLyAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gIC8vICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gIC8vICAgfVxuICAvLyAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgLy8gICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAvLyAgIH1cbiAgLy8gICBlbHNlIGlmIChldmVudC50eXBlID09ICdibHVyJykge1xuICAvLyAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZU9iamVjdDtcbiIsImltcG9ydCBTdGFnZU9iamVjdCBmcm9tICcuL3N0YWdlX29iamVjdCc7XG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBTdGFnZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLnZhbHVlKTtcbiAgfVxuXG4gIHNldFNpemUodmFsdWUpIHtcbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLmVsLnN0eWxlLmZvbnRTaXplID0gdGhpcy5zaXplICsgJ3B4JztcbiAgfVxuXG4gIHNldFRleHQodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgLy8gdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJcbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFyYW1zKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgdHlwZTogdHlwZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFdmVudERpc3BhdGNoZXIsIEV2ZW50IH07XG4iLCJcbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yID0gcjtcbiAgfVxuXG4gIGludGVyc2VjdHNMaW5lU2VnbWVudCh4MSwgeTEsIHgyLCB5Mikge1xuXG4gIH1cblxuICBjb250YWluc1BvaW50KHgsIHkpIHtcbiAgICBsZXQgZHggPSB4IC0gdGhpcy54O1xuICAgIGxldCBkeSA9IHkgLSB0aGlzLnk7XG4gICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIHJldHVybiBkIDwgdGhpcy5yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcbiIsIlxuY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIHBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJcbmNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ3JvdyhhbW91bnQpIHtcbiAgICB0aGlzLnggLT0gYW1vdW50O1xuICAgIHRoaXMueSAtPSBhbW91bnQ7XG4gICAgdGhpcy53aWR0aCArPSBhbW91bnQgKiAyO1xuICAgIHRoaXMuaGVpZ2h0ICs9IGFtb3VudCAqIDI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xuIiwiXG5jbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZG90KHZlY3Rvcikge1xuICAgIHJldHVybiAodGhpcy54ICogdmVjdG9yLnggKyB0aGlzLnkgKiB2ZWN0b3IueSk7XG4gIH1cblxuICBtYWcoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgcHJvamVjdCh2ZWN0b3IpIHtcbiAgICBsZXQgZCA9IHZlY3Rvci5kb3QodmVjdG9yKTtcbiAgICBpZiAoZCA+IDApIHtcbiAgICAgIGxldCByYXRpbyA9IHRoaXMuZG90KHZlY3RvcikgLyBkO1xuICAgICAgLy8gcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICBpZiAocmF0aW8gPj0gMCAmJiByYXRpbyA8PSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3I7XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi9nZW9tL3ZlY3Rvcic7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vZ2VvbS9jaXJjbGUnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5cbmxldCBTTkFQX1JBRElVUyA9IDM7XG5sZXQgQ09MT1JTID0gW1xuICAnd2hpdGUnLFxuICAvLyAnI2U2ZTZlNicsXG4gICcjY2NjY2NjJyxcbiAgLy8gJyNiM2IzYjMnLFxuICAnIzk5OTk5OScsXG4gIC8vICcjODA4MDgwJyxcbiAgJyM2NjY2NjYnLFxuICAvLyAnIzRkNGQ0ZCcsXG4gICcjMzMzMzMzJyxcbiAgLy8gJyMxYTFhMWEnLFxuICAnYmxhY2snXG5dO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IENPTE9SU1s1XTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3BhcGVyJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuYWRqdXN0Q2FudmFzKCk7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuc2V0VmlzaWJsZShwYXJhbXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkID8gcGFyYW1zLnZpc2libGUgOiB0cnVlKTtcblxuICAgIHRoaXMubGlzdGVuZXJzID0gWyAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJywgJ2RibGNsaWNrJywgJ2NvbnRleHRtZW51JyBdO1xuXG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwYXBlci1jdXJzb3InKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMubGlzdGVuZXJzW2ldLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZpc2libGUodmlzaWJsZSkge1xuICAgIGlmICh0aGlzLnZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRqdXN0Q2FudmFzKCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgZHJhd0xpbmUoeDEsIHkxLCB4MiwgeTIsIGNvbG9yKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgJ2JsYWNrJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3UGF0aChwYXJhbXM9e30pIHtcbiAgICBsZXQgcG9pbnRzID0gcGFyYW1zLnBvaW50cyB8fCBbXTtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBwYXJhbXMuc3Ryb2tlICE9PSB1bmRlZmluZWQgPyAocGFyYW1zLnN0cm9rZSA/IHBhcmFtcy5zdHJva2UgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHBhcmFtcy5maWxsICE9PSB1bmRlZmluZWQgPyAocGFyYW1zLmZpbGwgPyBwYXJhbXMuZmlsbCA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcbiAgICAgIHRoaXMuZHJhd1BhdGgoeyBwb2ludHM6IHNoYXBlLnBvaW50cywgZmlsbDogc2hhcGUuZmlsbCwgc3Ryb2tlOiBzaGFwZS5zdHJva2UsIGNsb3NlZDogc2hhcGUuY2xvc2VkIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZHJhd1BhdGgoeyBwb2ludHM6IHRoaXMucG9pbnRzLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3J4LCB0aGlzLmN1cnNvcnkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBsZXQgY3AgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3J4LCB0aGlzLmN1cnNvcnkpO1xuICAgICAgbGV0IHAwID0gdGhpcy5wb2ludHNbMF07XG4gICAgICBpZiAoY3AuZGlzdGFuY2UocDApIDwgU05BUF9SQURJVVMpIHtcbiAgICAgICAgY3R4LmFyYyhwMC54LCBwMC55LCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGdldFNoYXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNhbmNlbFBhdGgoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY2xvc2VQYXRoKGNsb3NlZD1mYWxzZSkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoeyBwb2ludHM6IHRoaXMucG9pbnRzLCBjbG9zZWQ6IGNsb3NlZCwgZmlsbDogdGhpcy5maWxsLCBzdHJva2U6IHRoaXMuc3Ryb2tlIH0pO1xuICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZSk7XG4gICAgfVxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldEZpbGwoZmlsbCkge1xuICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldFN0cm9rZShzdHJva2UpIHtcbiAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGxldCBwID0gbmV3IFBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICBpZiAocC5kaXN0YW5jZSh0aGlzLnBvaW50c1swXSkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3J4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvcnkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yeCArICdweCc7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3J5ICsgJ3B4JztcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuY29tbWFuZCkge1xuICAgICAgdGhpcy5vblBhcmFtZXRlcihldmVudC5rZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLmNhbmNlbFBhdGgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLnNldFN0cm9rZSh0aGlzLnN0cm9rZSA/IG51bGwgOiAnYmxhY2snKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICcwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIHRoaXMuc2V0RmlsbChudWxsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXS5pbmNsdWRlcyhldmVudC5rZXkpICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gQ09MT1JTW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXTtcbiAgICAgICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5zZXRGaWxsKGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyO1xuIiwiXG5jbGFzcyBTdGFnZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2UnKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSAzMjA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gMjAwO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3N0YWdlLWN1cnNvcicpO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuXG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGQoc3RhZ2VPYmplY3QpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnYWRkJywgc3RhZ2VPYmplY3QpO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChzdGFnZU9iamVjdCk7XG4gICAgc3RhZ2VPYmplY3QuYWRkZWRUb1N0YWdlKCk7XG4gICAgLy8gc3RhZ2VPYmplY3Qub24oJ21vdXNlZG93bicsIChvYmopID0+IHtcbiAgICAvLyAgIC8vIGlmICh0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhvYmopKSB7XG4gICAgLy8gICAvLyAgIHRoaXMuc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb24uZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCAhPT0gb2JqKTtcbiAgICAvLyAgIC8vICAgb2JqLmRlc2VsZWN0KCk7XG4gICAgLy8gICAvLyB9XG4gICAgLy8gICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgLy8gICB0aGlzLnNlbGVjdGlvbiA9IFsgb2JqIF07XG4gICAgLy8gICBvYmouc2VsZWN0KCk7XG4gICAgLy8gfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25baV0uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgY3R4LmRyYXdJbWFnZShjaGlsZC5jYW52YXMsIGNoaWxkLngsIGNoaWxkLnkpO1xuICAgIH1cbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJ2xpZ2h0Z3JheSc7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoIC0gMSwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gMSk7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIGxldCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICAvLyBsZXQgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgLy8gbGV0IHggPSBldmVudC5jbGllbnRYO1xuICAgIC8vIGxldCB5ID0gZXZlbnQuY2xpZW50WTtcblxuICAgIGxldCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICBsZXQgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgY29uc29sZS5sb2coeCwgeSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQuaGl0VGVzdCh4LCB5KSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGl0JywgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiAoZXZlbnQudGFyZ2V0ID09IHRoaXMuZWwpIHtcbiAgICAvLyAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICAvLyB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3J4ID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3J5ID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvcnggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yeSArICdweCc7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==