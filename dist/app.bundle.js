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
        ctx.lineTo(this.cursorX, this.cursorY);
        ctx.stroke();

        var cp = new _point2.default(this.cursorX, this.cursorY);
        var p0 = this.points[0];
        if (cp.distance(p0) < SNAP_RADIUS) {
          ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // if (this.command) {
      //   // console.log(this.command);
      //   let size = 24;
      //   ctx.font = size + 'px sans-serif';
      //   ctx.fillText(this.command, this.canvas.width / 2, this.canvas.height - size*2);
      // }
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
        // console.log(shape.fill);
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

    this.canvas.addEventListener('mousedown', this);
    this.canvas.addEventListener('mouseup', this);
    this.canvas.addEventListener('mousemove', this);

    this.el.appendChild(this.canvas);
  }

  _createClass(Stage, [{
    key: 'dom',
    value: function dom() {
      return this.el;
    }
  }, {
    key: 'add',
    value: function add(stageObject) {
      console.log('add', stageObject);
      this.children.push(stageObject);
      // this.el.appendChild(stageObject.dom());
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3N0YWdlX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImluaXRFbGVtZW50cyIsImluaXRFdmVudExpc3RlbmVycyIsInN0YXJ0dXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YWdlIiwiYXBwZW5kQ2hpbGQiLCJwYXBlciIsInZpc2libGUiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ2YWx1ZSIsIngiLCJ5IiwiYWRkIiwic2hhcGVzIiwic3RhZ2VFbCIsImkiLCJsZW5ndGgiLCJzaGFwZSIsImJvdW5kcyIsImdldEJvdW5kcyIsImoiLCJwb2ludHMiLCJwIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImdyYXBoaWMiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwiZ2V0U2hhcGVzIiwiY3JlYXRlR3JhcGhpYyIsInNob3dQYXBlciIsImhpZGVQYXBlciIsImV2ZW50Iiwia2V5IiwicmVwZWF0IiwidG9nZ2xlUGFwZXIiLCJoYW5kbGVFdmVudCIsInR5cGUiLCJvbktleURvd24iLCJvbk1vdXNlRG93biIsImluaXQiLCJHcmFwaGljIiwicGFyYW1zIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImdyb3ciLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsImhpdFRlc3QiLCJyZWN0IiwieG1pbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwieW1pbiIsInhtYXgiLCJORUdBVElWRV9JTkZJTklUWSIsInltYXgiLCJlbXB0eSIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJzYXZlIiwidHJhbnNsYXRlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmaWxsU3R5bGUiLCJmaWxsIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VkIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsIl93aWR0aCIsIl9oZWlnaHQiLCJTaGFwZSIsInB1c2giLCJzdHJva2VXaWR0aCIsInBvaW50SW5Qb2x5Z29uIiwidGVzdHgiLCJ0ZXN0eSIsImMiLCJTdGFnZU9iamVjdCIsInNlbGVjdGVkIiwiX3giLCJfeSIsIlRleHQiLCJzZXRTaXplIiwic2l6ZSIsInNldFRleHQiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUmVjdGFuZ2xlIiwiYW1vdW50IiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJTTkFQX1JBRElVUyIsIkNPTE9SUyIsIlBhcGVyIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGp1c3RDYW52YXMiLCJ1bmRlZmluZWQiLCJjdXJzb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkTGlzdGVuZXJzIiwicmVtb3ZlTGlzdGVuZXJzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29sb3IiLCJkcmF3UGF0aCIsImN1cnNvclgiLCJjdXJzb3JZIiwiY3AiLCJwMCIsImRpc3RhbmNlIiwiYXJjIiwiUEkiLCJidXR0b24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsImxlZnQiLCJ0b3AiLCJjb21tYW5kIiwib25QYXJhbWV0ZXIiLCJjYW5jZWxQYXRoIiwic2V0U3Ryb2tlIiwic2V0RmlsbCIsImluY2x1ZGVzIiwicGFyc2VJbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIiwib25EYmxDbGljayIsIm9uQ29udGV4dE1lbnUiLCJTdGFnZSIsImNoaWxkcmVuIiwic2VsZWN0aW9uIiwic3RhZ2VPYmplY3QiLCJhZGRlZFRvU3RhZ2UiLCJkZXNlbGVjdCIsImZpbGxSZWN0IiwiY2hpbGQiLCJkcmF3SW1hZ2UiLCJjdXJzb3J4IiwiY3Vyc29yeSIsIlN2ZyIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lIiwic2V0QXR0cmlidXRlIiwic3ZnIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNu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QUFNZ0gsT0FBckI7QUFDRDs7O2dDQUVXaEgsSyxFQUFPO0FBQ2pCLFVBQUlBLE1BQU1LLElBQU4sSUFBYyxXQUFsQixFQUErQjtBQUM3QixhQUFLRSxXQUFMLENBQWlCUCxLQUFqQjtBQUNELE9BRkQsTUFHSyxJQUFJQSxNQUFNSyxJQUFOLElBQWMsU0FBbEIsRUFBNkI7QUFDaEMsYUFBS3NILFNBQUwsQ0FBZTNILEtBQWY7QUFDRCxPQUZJLE1BR0EsSUFBSUEsTUFBTUssSUFBTixJQUFjLFdBQWxCLEVBQStCO0FBQ2xDLGFBQUt1SCxXQUFMLENBQWlCNUgsS0FBakI7QUFDRDtBQUNGOzs7Ozs7a0JBR1krSCxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDekdUVyxHOzs7Ozs7OzRCQUNXckksSSxFQUFNc0ksVSxFQUFZO0FBQy9CLFVBQUlsRCxLQUFLMUgsU0FBUzZLLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVEdkksSUFBdkQsQ0FBVDtBQUNBLFdBQUssSUFBSXdJLElBQVQsSUFBaUJGLFVBQWpCLEVBQTZCO0FBQzNCbEQsV0FBR3FELFlBQUgsQ0FBZ0JELElBQWhCLEVBQXNCRixXQUFXRSxJQUFYLENBQXRCO0FBQ0Q7QUFDRCxhQUFPcEQsRUFBUDtBQUNEOzs7d0JBRVVrRCxVLEVBQVk7QUFDckIsVUFBSUksTUFBTWhMLFNBQVM2SyxlQUFULENBQXlCLDRCQUF6QixFQUF1RCxLQUF2RCxDQUFWO0FBQ0FHLFVBQUlELFlBQUosQ0FBaUIsYUFBakIsRUFBK0IsOEJBQS9CO0FBQ0EsV0FBSyxJQUFJRCxJQUFULElBQWlCRixVQUFqQixFQUE2QjtBQUMzQkksWUFBSUQsWUFBSixDQUFpQkQsSUFBakIsRUFBdUJGLFdBQVdFLElBQVgsQ0FBdkI7QUFDRDtBQUNELGFBQU9FLEdBQVA7QUFDRDs7Ozs7O2tCQUdZTCxHIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcmFwaGljIGZyb20gJy4vZGlzcGxheS9ncmFwaGljJztcbmltcG9ydCBUZXh0IGZyb20gJy4vZGlzcGxheS90ZXh0JztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSBbXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc3RhcnR1cCgpO1xuICB9XG5cbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICB9XG5cbiAgaW5pdEVsZW1lbnRzKCkge1xuICAgIHRoaXMuZG9tLmFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgIHRoaXMuc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5zdGFnZS5kb20oKSk7XG5cbiAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKHsgdmlzaWJsZTogZmFsc2UgfSk7XG4gICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMucGFwZXIuZG9tKCkpO1xuXG4gICAgLy8gdGhpcy5wYXBlci5vbigncGF0aHMnLCAocGF0aHMpID0+IHtcbiAgICAvLyAgIHRoaXMuY3JlYXRlU2hhcGUocGF0aHMpO1xuICAgIC8vICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHN0YXJ0dXAoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0dXAnKTtcblxuICAgIGxldCBsYWJlbCA9IG5ldyBUZXh0KHsgdmFsdWU6ICdoZWxsbycgfSk7XG4gICAgbGFiZWwueCA9IDUwO1xuICAgIGxhYmVsLnkgPSAxMDA7XG5cbiAgICB0aGlzLnN0YWdlLmFkZChsYWJlbCk7XG4gIH1cblxuICBjcmVhdGVHcmFwaGljKHNoYXBlcykge1xuICAgIGxldCBzdGFnZUVsID0gdGhpcy5zdGFnZS5kb20oKTtcblxuICAgIC8vIGxvY2FsaXNlIHNoYXBlIGNvb3JkaW5hdGVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgICAgIGlmIChib3VuZHMpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZS5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgcCA9IHNoYXBlLnBvaW50c1tqXTtcbiAgICAgICAgICBwLnggLT0gYm91bmRzLng7XG4gICAgICAgICAgcC55IC09IGJvdW5kcy55O1xuICAgICAgICB9XG4gICAgICAgIHNoYXBlLnggPSBib3VuZHMueCAtIHN0YWdlRWwub2Zmc2V0TGVmdDtcbiAgICAgICAgc2hhcGUueSA9IGJvdW5kcy55IC0gc3RhZ2VFbC5vZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBncmFwaGljID0gbmV3IEdyYXBoaWMoeyBzaGFwZXM6IHNoYXBlcyB9KTtcbiAgICB0aGlzLnN0YWdlLmFkZChncmFwaGljKTtcbiAgfVxuXG4gIHNob3dQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSAncGFwZXInO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnBhcGVyLmdldFNoYXBlcygpO1xuICAgICAgdGhpcy5jcmVhdGVHcmFwaGljKHNoYXBlcyk7XG5cbiAgICAgIHRoaXMucGFwZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMuc2hvd1BhcGVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnRvZ2dsZVBhcGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgICAgICB0aGlzLnBhcGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIGxldCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICAvLyBsZXQgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgLy8gY29uc29sZS5sb2coeCwgeSk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuLi9zdmcnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgU3RhZ2VPYmplY3QgZnJvbSAnLi9zdGFnZV9vYmplY3QnO1xuXG5jbGFzcyBHcmFwaGljIGV4dGVuZHMgU3RhZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hhcGVzID0gcGFyYW1zLnNoYXBlcyB8fCBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuICAgIGlmIChib3VuZHMpIHtcbiAgICAgIGJvdW5kcy5ncm93KDEpO1xuICAgICAgdGhpcy53aWR0aCA9IGJvdW5kcy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcbiAgICAgIHRoaXMueCA9IGJvdW5kcy54O1xuICAgICAgdGhpcy55ID0gYm91bmRzLnk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdCh4IC0gdGhpcy54LCB5IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0O1xuXG4gICAgaWYgKHRoaXMuc2hhcGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHhtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGxldCBlbXB0eSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgICAgICAgaWYgKGJvdW5kcykge1xuICAgICAgICAgIGJvdW5kcy54ICs9IHNoYXBlLng7XG4gICAgICAgICAgYm91bmRzLnkgKz0gc2hhcGUueTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhib3VuZHMpO1xuICAgICAgICAgIHhtaW4gPSAoYm91bmRzLnggPCB4bWluID8gYm91bmRzLnggOiB4bWluKTtcbiAgICAgICAgICB5bWluID0gKGJvdW5kcy55IDwgeW1pbiA/IGJvdW5kcy55IDogeW1pbik7XG4gICAgICAgICAgeG1heCA9IChib3VuZHMueCArIGJvdW5kcy53aWR0aCA+IHhtYXggPyBib3VuZHMueCArIGJvdW5kcy53aWR0aCA6IHhtYXgpO1xuICAgICAgICAgIHltYXggPSAoYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0ID4geW1heCA/IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCA6IHltYXgpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpO1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFlbXB0eSkgcmVjdCA9IG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnR3JhcGhpYy5yZW5kZXInKTtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSgxLCAxKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuXG4gICAgICAvLyBsZXQgcHMgPSAnTSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZS5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgICAgIGlmIChqID09IDApXG4gICAgICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICAgICAgLy8gbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgICAgIC8vIGlmIChqID4gMCkgcHMgKz0gJ0wnO1xuICAgICAgICAvLyBwcyArPSAocC54IC0gYm91bmRzLngpICsgJyAnICsgKHAueSAtIGJvdW5kcy55KSArICcgJztcbiAgICAgIH1cbiAgICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAgICAgLy8gcHMgKz0gJ1onO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gd2hpbGUgKHRoaXMuZWwuZmlyc3RDaGlsZCkgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xuICAgIC8vXG4gICAgLy8gbGV0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG4gICAgLy8gaWYgKGJvdW5kcykge1xuICAgIC8vICAgdGhpcy54ID0gYm91bmRzLng7XG4gICAgLy8gICB0aGlzLnkgPSBib3VuZHMueTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IGJvdW5kcy53aWR0aCArICdweCc7XG4gICAgLy8gICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQgKyAncHgnO1xuICAgIC8vXG4gICAgLy8gICBsZXQgc3ZnRWwgPSBzdmcuc3ZnKCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYm91bmRzLndpZHRoKTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYm91bmRzLmhlaWdodCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyBib3VuZHMud2lkdGggKyAnICcgKyBib3VuZHMuaGVpZ2h0KTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgIC8vXG4gICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBwcyA9ICdNJztcbiAgICAvL1xuICAgIC8vICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXBlLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgIC8vICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgIC8vICAgICAgIGlmIChqID4gMCkgcHMgKz0gJ0wnO1xuICAgIC8vICAgICAgIHBzICs9IChwLnggLSBib3VuZHMueCkgKyAnICcgKyAocC55IC0gYm91bmRzLnkpICsgJyAnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAvLyAgICAgICBwcyArPSAnWic7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnZmlsbCcsIHNoYXBlLmZpbGwpO1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBnID0gc3ZnLmVsZW1lbnQoJ2cnKTtcbiAgICAvLyAgICAgLy8gZy5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgc2hhcGUuZmlsbCA/ICd2aXNpYmxlUGFpbnRlZCcgOiAndmlzaWJsZVN0cm9rZScpO1xuICAgIC8vICAgICBnLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAncGFpbnRlZCcpO1xuICAgIC8vICAgICBsZXQgcGF0aCA9IHN2Zy5lbGVtZW50KCdwYXRoJywgeyBkOiBwcywgZmlsbDogKHNoYXBlLmZpbGwgPyBzaGFwZS5maWxsIDogJ25vbmUnKSwgc3Ryb2tlOiBzaGFwZS5zdHJva2UgfSk7XG4gICAgLy8gICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAzKTtcbiAgICAvLyAgICAgZy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICAvL1xuICAgIC8vICAgICBzdmdFbC5hcHBlbmRDaGlsZChnKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3ZnRWwpO1xuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaGljO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5cbmNsYXNzIFNoYXBlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcblxuICAgIGxldCBwb2ludHMgPSBwYXJhbXMucG9pbnRzO1xuICAgIGlmIChwb2ludHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludChwLngsIHAueSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsbCA9IHBhcmFtcy5maWxsIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBwYXJhbXMuc3Ryb2tlIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2VXaWR0aCA9IHBhcmFtcy5zdHJva2VXaWR0aCB8fCAxO1xuICAgIHRoaXMuY2xvc2VkID0gcGFyYW1zLmNsb3NlZCB8fCBmYWxzZTtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdCA9IG51bGw7XG5cbiAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgfVxuICAgICAgcmVjdCA9IG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIC8vIENvcHlyaWdodCAoYykgMTk3MC0yMDAzLCBXbS4gUmFuZG9scGggRnJhbmtsaW5cbiAgLy8gaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1Ly9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuXG4gIHN0YXRpYyBwb2ludEluUG9seWdvbihwb2ludHMsIHRlc3R4LCB0ZXN0eSkge1xuICAgIGxldCBpLCBqLCBjID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgaWYgKCgocG9pbnRzW2ldLnkgPiB0ZXN0eSkgIT0gKHBvaW50c1tqXS55ID4gdGVzdHkpKSAmJlxuICAgICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICAgIGMgPSAhYztcbiAgICB9XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gU2hhcGUucG9pbnRJblBvbHlnb24odGhpcy5wb2ludHMsIHgsIHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IHsgRXZlbnQsIEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmNsYXNzIFN0YWdlT2JqZWN0IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzLl94ID0gdmFsdWU7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZGVkVG9TdGFnZSgpIHtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICB9XG5cbiAgLy8gYmVnaW5EcmFnKCkge1xuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gIC8vICAgdGhpcy5kcmFnID0gdHJ1ZTtcbiAgLy8gfVxuICAvL1xuICAvLyBlbmREcmFnKCkge1xuICAvLyAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gIC8vICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAvLyAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gIC8vICAgdGhpcy5kcmFnID0gZmFsc2U7XG4gIC8vIH1cbiAgLy9cbiAgLy8gb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAvLyAgIHRoaXMuZW1pdCgnbW91c2Vkb3duJywgdGhpcyk7XG4gIC8vICAgdGhpcy5iZWdpbkRyYWcoKTtcbiAgLy8gfVxuICAvL1xuICAvLyBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgLy8gICB0aGlzLmVuZERyYWcoKTtcbiAgLy8gfVxuICAvL1xuICAvLyBvbk1vdXNlTW92ZShldmVudCkge1xuICAvLyAgIGlmICh0aGlzLmRyYWcpIHtcbiAgLy8gICAgIHRoaXMueCArPSBldmVudC5tb3ZlbWVudFg7XG4gIC8vICAgICB0aGlzLnkgKz0gZXZlbnQubW92ZW1lbnRZO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyBvbkJsdXIoZXZlbnQpIHtcbiAgLy8gICB0aGlzLmVuZERyYWcoKTtcbiAgLy8gfVxuICAvL1xuICAvLyBoYW5kbGVFdmVudChldmVudCkge1xuICAvLyAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gIC8vICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgLy8gICB9XG4gIC8vICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgLy8gICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgLy8gICB9XG4gIC8vICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAvLyAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gIC8vICAgfVxuICAvLyAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2JsdXInKSB7XG4gIC8vICAgICB0aGlzLm9uQmx1cihldmVudCk7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlT2JqZWN0O1xuIiwiaW1wb3J0IFN0YWdlT2JqZWN0IGZyb20gJy4vc3RhZ2Vfb2JqZWN0JztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFN0YWdlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMudmFsdWUpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICAgIC8vIHRoaXMuZWwuc3R5bGUuZm9udFNpemUgPSB0aGlzLnNpemUgKyAncHgnO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsIlxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJhbXMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbiAgZW1pdCh0eXBlLCAuLi5hcmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICBpZiAobGlzdGVuZXIudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyB0eXBlOiB0eXBlLCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEV2ZW50RGlzcGF0Y2hlciwgRXZlbnQgfTtcbiIsIlxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICB9XG5cbiAgaW50ZXJzZWN0c0xpbmVTZWdtZW50KHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgfVxuXG4gIGNvbnRhaW5zUG9pbnQoeCwgeSkge1xuICAgIGxldCBkeCA9IHggLSB0aGlzLng7XG4gICAgbGV0IGR5ID0geSAtIHRoaXMueTtcbiAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgcmV0dXJuIGQgPCB0aGlzLnI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiXG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkaXN0YW5jZShwb2ludCkge1xuICAgIGxldCBkeCA9IHRoaXMueCAtIHBvaW50Lng7XG4gICAgbGV0IGR5ID0gdGhpcy55IC0gcG9pbnQueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsIlxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBncm93KGFtb3VudCkge1xuICAgIHRoaXMueCAtPSBhbW91bnQ7XG4gICAgdGhpcy55IC09IGFtb3VudDtcbiAgICB0aGlzLndpZHRoICs9IGFtb3VudCAqIDI7XG4gICAgdGhpcy5oZWlnaHQgKz0gYW1vdW50ICogMjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJcbmNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkb3QodmVjdG9yKSB7XG4gICAgcmV0dXJuICh0aGlzLnggKiB2ZWN0b3IueCArIHRoaXMueSAqIHZlY3Rvci55KTtcbiAgfVxuXG4gIG1hZygpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBwcm9qZWN0KHZlY3Rvcikge1xuICAgIGxldCBkID0gdmVjdG9yLmRvdCh2ZWN0b3IpO1xuICAgIGlmIChkID4gMCkge1xuICAgICAgbGV0IHJhdGlvID0gdGhpcy5kb3QodmVjdG9yKSAvIGQ7XG4gICAgICAvLyByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHJhdGlvIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL2dlb20vdmVjdG9yJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9nZW9tL2NpcmNsZSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcblxubGV0IFNOQVBfUkFESVVTID0gMztcbmxldCBDT0xPUlMgPSBbXG4gICd3aGl0ZScsXG4gIC8vICcjZTZlNmU2JyxcbiAgJyNjY2NjY2MnLFxuICAvLyAnI2IzYjNiMycsXG4gICcjOTk5OTk5JyxcbiAgLy8gJyM4MDgwODAnLFxuICAnIzY2NjY2NicsXG4gIC8vICcjNGQ0ZDRkJyxcbiAgJyMzMzMzMzMnLFxuICAvLyAnIzFhMWExYScsXG4gICdibGFjaydcbl07XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLmZpbGwgPSBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gQ09MT1JTWzVdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5hZGp1c3RDYW52YXMoKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5zZXRWaXNpYmxlKHBhcmFtcy52aXNpYmxlICE9PSB1bmRlZmluZWQgPyBwYXJhbXMudmlzaWJsZSA6IHRydWUpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLCAnZGJsY2xpY2snLCAnY29udGV4dG1lbnUnIF07XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BhcGVyLWN1cnNvcicpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGp1c3RDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBkcmF3TGluZSh4MSwgeTEsIHgyLCB5MiwgY29sb3IpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdQYXRoKHBhcmFtcz17fSkge1xuICAgIGxldCBwb2ludHMgPSBwYXJhbXMucG9pbnRzIHx8IFtdO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHBhcmFtcy5zdHJva2UgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuc3Ryb2tlID8gcGFyYW1zLnN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gcGFyYW1zLmZpbGwgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuZmlsbCA/IHBhcmFtcy5maWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgdGhpcy5kcmF3UGF0aCh7IHBvaW50czogc2hhcGUucG9pbnRzLCBmaWxsOiBzaGFwZS5maWxsLCBzdHJva2U6IHNoYXBlLnN0cm9rZSwgY2xvc2VkOiBzaGFwZS5jbG9zZWQgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kcmF3UGF0aCh7IHBvaW50czogdGhpcy5wb2ludHMsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSB9KTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGxldCBjcCA9IG5ldyBQb2ludCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBsZXQgcDAgPSB0aGlzLnBvaW50c1swXTtcbiAgICAgIGlmIChjcC5kaXN0YW5jZShwMCkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICBjdHguYXJjKHAwLngsIHAwLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmNvbW1hbmQpIHtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29tbWFuZCk7XG4gICAgLy8gICBsZXQgc2l6ZSA9IDI0O1xuICAgIC8vICAgY3R4LmZvbnQgPSBzaXplICsgJ3B4IHNhbnMtc2VyaWYnO1xuICAgIC8vICAgY3R4LmZpbGxUZXh0KHRoaXMuY29tbWFuZCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSBzaXplKjIpO1xuICAgIC8vIH1cblxuICB9XG5cbiAgZ2V0U2hhcGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNoYXBlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY2FuY2VsUGF0aCgpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjbG9zZVBhdGgoY2xvc2VkPWZhbHNlKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7IHBvaW50czogdGhpcy5wb2ludHMsIGNsb3NlZDogY2xvc2VkLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG4gICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNoYXBlLmZpbGwpO1xuICAgIH1cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRGaWxsKGZpbGwpIHtcbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRTdHJva2Uoc3Ryb2tlKSB7XG4gICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgU05BUF9SQURJVVMpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvclggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yWSArICdweCc7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICh0aGlzLmNvbW1hbmQpIHtcbiAgICAgIHRoaXMub25QYXJhbWV0ZXIoZXZlbnQua2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09ICdFc2NhcGUnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3MnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdHJva2UodGhpcy5zdHJva2UgPyBudWxsIDogJ2JsYWNrJylcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnMCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLnNldEZpbGwobnVsbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoZXZlbnQua2V5KSAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIGxldCBjb2xvciA9IENPTE9SU1twYXJzZUludChldmVudC5rZXkpIC0gMV07XG4gICAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuc2V0RmlsbChjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsIlxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3N0YWdlJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gMzIwO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDIwMDtcblxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkKHN0YWdlT2JqZWN0KSB7XG4gICAgY29uc29sZS5sb2coJ2FkZCcsIHN0YWdlT2JqZWN0KTtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goc3RhZ2VPYmplY3QpO1xuICAgIC8vIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3RhZ2VPYmplY3QuZG9tKCkpO1xuICAgIHN0YWdlT2JqZWN0LmFkZGVkVG9TdGFnZSgpO1xuICAgIC8vIHN0YWdlT2JqZWN0Lm9uKCdtb3VzZWRvd24nLCAob2JqKSA9PiB7XG4gICAgLy8gICAvLyBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMob2JqKSkge1xuICAgIC8vICAgLy8gICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IG9iaik7XG4gICAgLy8gICAvLyAgIG9iai5kZXNlbGVjdCgpO1xuICAgIC8vICAgLy8gfVxuICAgIC8vICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIC8vICAgdGhpcy5zZWxlY3Rpb24gPSBbIG9iaiBdO1xuICAgIC8vICAgb2JqLnNlbGVjdCgpO1xuICAgIC8vIH0pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW2ldLmRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoY2hpbGQuY2FudmFzLCBjaGlsZC54LCBjaGlsZC55KTtcbiAgICB9XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCAtIDEsIHRoaXMuY2FudmFzLmhlaWdodCAtIDEpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBsZXQgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgLy8gbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuICAgIC8vIGxldCB4ID0gZXZlbnQuY2xpZW50WDtcbiAgICAvLyBsZXQgeSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICBsZXQgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuICAgIGNvbnNvbGUubG9nKHgsIHkpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hpdCcsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKGV2ZW50LnRhcmdldCA9PSB0aGlzLmVsKSB7XG4gICAgLy8gICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgLy8gfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3J5ID0gZXZlbnQub2Zmc2V0WTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJcbmNsYXNzIFN2ZyB7XG4gIHN0YXRpYyBlbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdHlwZSk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHN0YXRpYyBzdmcoYXR0cmlidXRlcykge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJywnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG4iXSwic291cmNlUm9vdCI6IiJ9