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
      // document.body.appendChild(this.dom.app);

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
          shape.x = bounds.x;
          shape.y = bounds.y;
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
      var x = event.offsetX;
      var y = event.offsetY;
      console.log(x, y);
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
      var x = event.clientX;
      var y = event.clientY;

      // console.log(x, y);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3N0YWdlX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImluaXRFbGVtZW50cyIsImluaXRFdmVudExpc3RlbmVycyIsInN0YXJ0dXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0YWdlIiwiYXBwZW5kQ2hpbGQiLCJwYXBlciIsInZpc2libGUiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ2YWx1ZSIsIngiLCJ5IiwiYWRkIiwic2hhcGVzIiwiaSIsImxlbmd0aCIsInNoYXBlIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwiaiIsInBvaW50cyIsInAiLCJncmFwaGljIiwibW9kZSIsInNldFZpc2libGUiLCJjbGVhciIsImdldFNoYXBlcyIsImNyZWF0ZUdyYXBoaWMiLCJzaG93UGFwZXIiLCJoaWRlUGFwZXIiLCJldmVudCIsImtleSIsInJlcGVhdCIsInRvZ2dsZVBhcGVyIiwiaGFuZGxlRXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInR5cGUiLCJvbktleURvd24iLCJvbk1vdXNlRG93biIsImluaXQiLCJHcmFwaGljIiwicGFyYW1zIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImdyb3ciLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsImhpdFRlc3QiLCJyZWN0IiwieG1pbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwieW1pbiIsInhtYXgiLCJORUdBVElWRV9JTkZJTklUWSIsInltYXgiLCJlbXB0eSIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJzYXZlIiwidHJhbnNsYXRlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJmaWxsU3R5bGUiLCJmaWxsIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VkIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsIl93aWR0aCIsIl9oZWlnaHQiLCJTaGFwZSIsInB1c2giLCJzdHJva2VXaWR0aCIsInBvaW50SW5Qb2x5Z29uIiwidGVzdHgiLCJ0ZXN0eSIsImMiLCJTdGFnZU9iamVjdCIsInNlbGVjdGVkIiwiX3giLCJfeSIsIlRleHQiLCJzZXRTaXplIiwic2l6ZSIsInNldFRleHQiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUmVjdGFuZ2xlIiwiYW1vdW50IiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJTTkFQX1JBRElVUyIsIkNPTE9SUyIsIlBhcGVyIiwiZWwiLCJjbGFzc0xpc3QiLCJhZGp1c3RDYW52YXMiLCJ1bmRlZmluZWQiLCJjdXJzb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkTGlzdGVuZXJzIiwicmVtb3ZlTGlzdGVuZXJzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29sb3IiLCJkcmF3UGF0aCIsImN1cnNvclgiLCJjdXJzb3JZIiwiY3AiLCJwMCIsImRpc3RhbmNlIiwiYXJjIiwiUEkiLCJidXR0b24iLCJsZWZ0IiwidG9wIiwiY29tbWFuZCIsIm9uUGFyYW1ldGVyIiwiY2FuY2VsUGF0aCIsInNldFN0cm9rZSIsInNldEZpbGwiLCJpbmNsdWRlcyIsInBhcnNlSW50IiwicHJldmVudERlZmF1bHQiLCJvbk1vdXNlVXAiLCJvbk1vdXNlTW92ZSIsIm9uRGJsQ2xpY2siLCJvbkNvbnRleHRNZW51IiwiU3RhZ2UiLCJjaGlsZHJlbiIsInNlbGVjdGlvbiIsInN0YWdlT2JqZWN0IiwiYWRkZWRUb1N0YWdlIiwiZGVzZWxlY3QiLCJmaWxsUmVjdCIsImNoaWxkIiwiZHJhd0ltYWdlIiwiY2xpZW50WCIsImNsaWVudFkiLCJjdXJzb3J4IiwiY3Vyc29yeSIsIlN2ZyIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lIiwic2V0QXR0cmlidXRlIiwic3ZnIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7Ozs7QUFDQTs7OztB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LElBQWMsV0FBbEIsRUFBK0I7QUFDN0IsYUFBS0UsV0FBTCxDQUFpQlQsS0FBakI7QUFDRCxPQUZELE1BR0ssSUFBSUEsTUFBTU8sSUFBTixJQUFjLFNBQWxCLEVBQTZCO0FBQ2hDLGFBQUtvSCxTQUFMLENBQWUzSCxLQUFmO0FBQ0QsT0FGSSxNQUdBLElBQUlBLE1BQU1PLElBQU4sSUFBYyxXQUFsQixFQUErQjtBQUNsQyxhQUFLcUgsV0FBTCxDQUFpQjVILEtBQWpCO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZK0gsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZHVGEsRzs7Ozs7Ozs0QkFDV3JJLEksRUFBTXNJLFUsRUFBWTtBQUMvQixVQUFJbEQsS0FBS3pILFNBQVM0SyxlQUFULENBQXlCLDRCQUF6QixFQUF1RHZJLElBQXZELENBQVQ7QUFDQSxXQUFLLElBQUl3SSxJQUFULElBQWlCRixVQUFqQixFQUE2QjtBQUMzQmxELFdBQUdxRCxZQUFILENBQWdCRCxJQUFoQixFQUFzQkYsV0FBV0UsSUFBWCxDQUF0QjtBQUNEO0FBQ0QsYUFBT3BELEVBQVA7QUFDRDs7O3dCQUVVa0QsVSxFQUFZO0FBQ3JCLFVBQUlJLE1BQU0vSyxTQUFTNEssZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsS0FBdkQsQ0FBVjtBQUNBRyxVQUFJRCxZQUFKLENBQWlCLGFBQWpCLEVBQStCLDhCQUEvQjtBQUNBLFdBQUssSUFBSUQsSUFBVCxJQUFpQkYsVUFBakIsRUFBNkI7QUFDM0JJLFlBQUlELFlBQUosQ0FBaUJELElBQWpCLEVBQXVCRixXQUFXRSxJQUFYLENBQXZCO0FBQ0Q7QUFDRCxhQUFPRSxHQUFQO0FBQ0Q7Ozs7OztrQkFHWUwsRyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCBzdmcgZnJvbSAnLi9zdmcnO1xuaW1wb3J0IFN0YWdlIGZyb20gJy4vc3RhZ2UnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXInO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICcuL2Rpc3BsYXkvZ3JhcGhpYyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2Rpc3BsYXkvdGV4dCc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnN0YXJ0dXAoKTtcbiAgfVxuXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIGluaXRFbGVtZW50cygpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbS5hcHApO1xuXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSgpO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnN0YWdlLmRvbSgpKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5kb20oKSk7XG5cbiAgICAvLyB0aGlzLnBhcGVyLm9uKCdwYXRocycsIChwYXRocykgPT4ge1xuICAgIC8vICAgdGhpcy5jcmVhdGVTaGFwZShwYXRocyk7XG4gICAgLy8gICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgbGV0IGxhYmVsID0gbmV3IFRleHQoeyB2YWx1ZTogJ2hlbGxvJyB9KTtcbiAgICBsYWJlbC54ID0gNTA7XG4gICAgbGFiZWwueSA9IDEwMDtcblxuICAgIHRoaXMuc3RhZ2UuYWRkKGxhYmVsKTtcbiAgfVxuXG4gIGNyZWF0ZUdyYXBoaWMoc2hhcGVzKSB7XG4gICAgLy8gbG9jYWxpc2Ugc2hhcGUgY29vcmRpbmF0ZXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgbGV0IGJvdW5kcyA9IHNoYXBlLmdldEJvdW5kcygpO1xuICAgICAgaWYgKGJvdW5kcykge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXBlLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgICAgICAgIHAueCAtPSBib3VuZHMueDtcbiAgICAgICAgICBwLnkgLT0gYm91bmRzLnk7XG4gICAgICAgIH1cbiAgICAgICAgc2hhcGUueCA9IGJvdW5kcy54O1xuICAgICAgICBzaGFwZS55ID0gYm91bmRzLnk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBncmFwaGljID0gbmV3IEdyYXBoaWMoeyBzaGFwZXM6IHNoYXBlcyB9KTtcbiAgICB0aGlzLnN0YWdlLmFkZChncmFwaGljKTtcbiAgfVxuXG4gIHNob3dQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSAncGFwZXInO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnBhcGVyLmdldFNoYXBlcygpO1xuICAgICAgdGhpcy5jcmVhdGVHcmFwaGljKHNoYXBlcyk7XG5cbiAgICAgIHRoaXMucGFwZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB0aGlzLnBhcGVyLmNsZWFyKCk7XG4gICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBhcGVyKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09ICdwYXBlcicpIHtcbiAgICAgIHRoaXMuc2hvd1BhcGVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnRvZ2dsZVBhcGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgICAgICB0aGlzLnBhcGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGxldCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICBsZXQgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgY29uc29sZS5sb2coeCwgeSk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuLi9zdmcnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgU3RhZ2VPYmplY3QgZnJvbSAnLi9zdGFnZV9vYmplY3QnO1xuXG5jbGFzcyBHcmFwaGljIGV4dGVuZHMgU3RhZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hhcGVzID0gcGFyYW1zLnNoYXBlcyB8fCBbXTtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuICAgIGlmIChib3VuZHMpIHtcbiAgICAgIGJvdW5kcy5ncm93KDEpO1xuICAgICAgdGhpcy53aWR0aCA9IGJvdW5kcy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcbiAgICAgIHRoaXMueCA9IGJvdW5kcy54O1xuICAgICAgdGhpcy55ID0gYm91bmRzLnk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdCh4IC0gdGhpcy54LCB5IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0O1xuXG4gICAgaWYgKHRoaXMuc2hhcGVzLmxlbmd0aCkge1xuICAgICAgbGV0IHhtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGxldCBlbXB0eSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgICAgICAgaWYgKGJvdW5kcykge1xuICAgICAgICAgIGJvdW5kcy54ICs9IHNoYXBlLng7XG4gICAgICAgICAgYm91bmRzLnkgKz0gc2hhcGUueTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhib3VuZHMpO1xuICAgICAgICAgIHhtaW4gPSAoYm91bmRzLnggPCB4bWluID8gYm91bmRzLnggOiB4bWluKTtcbiAgICAgICAgICB5bWluID0gKGJvdW5kcy55IDwgeW1pbiA/IGJvdW5kcy55IDogeW1pbik7XG4gICAgICAgICAgeG1heCA9IChib3VuZHMueCArIGJvdW5kcy53aWR0aCA+IHhtYXggPyBib3VuZHMueCArIGJvdW5kcy53aWR0aCA6IHhtYXgpO1xuICAgICAgICAgIHltYXggPSAoYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0ID4geW1heCA/IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCA6IHltYXgpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpO1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFlbXB0eSkgcmVjdCA9IG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnR3JhcGhpYy5yZW5kZXInKTtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSgxLCAxKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuXG4gICAgICAvLyBsZXQgcHMgPSAnTSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZS5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgICAgIGlmIChqID09IDApXG4gICAgICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICAgICAgLy8gbGV0IHAgPSBzaGFwZS5wb2ludHNbal07XG4gICAgICAgIC8vIGlmIChqID4gMCkgcHMgKz0gJ0wnO1xuICAgICAgICAvLyBwcyArPSAocC54IC0gYm91bmRzLngpICsgJyAnICsgKHAueSAtIGJvdW5kcy55KSArICcgJztcbiAgICAgIH1cbiAgICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAgICAgLy8gcHMgKz0gJ1onO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gd2hpbGUgKHRoaXMuZWwuZmlyc3RDaGlsZCkgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xuICAgIC8vXG4gICAgLy8gbGV0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG4gICAgLy8gaWYgKGJvdW5kcykge1xuICAgIC8vICAgdGhpcy54ID0gYm91bmRzLng7XG4gICAgLy8gICB0aGlzLnkgPSBib3VuZHMueTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IGJvdW5kcy53aWR0aCArICdweCc7XG4gICAgLy8gICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQgKyAncHgnO1xuICAgIC8vXG4gICAgLy8gICBsZXQgc3ZnRWwgPSBzdmcuc3ZnKCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYm91bmRzLndpZHRoKTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYm91bmRzLmhlaWdodCk7XG4gICAgLy8gICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyBib3VuZHMud2lkdGggKyAnICcgKyBib3VuZHMuaGVpZ2h0KTtcbiAgICAvLyAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgIC8vXG4gICAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBwcyA9ICdNJztcbiAgICAvL1xuICAgIC8vICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXBlLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgIC8vICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgIC8vICAgICAgIGlmIChqID4gMCkgcHMgKz0gJ0wnO1xuICAgIC8vICAgICAgIHBzICs9IChwLnggLSBib3VuZHMueCkgKyAnICcgKyAocC55IC0gYm91bmRzLnkpICsgJyAnO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAvLyAgICAgICBwcyArPSAnWic7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnZmlsbCcsIHNoYXBlLmZpbGwpO1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBnID0gc3ZnLmVsZW1lbnQoJ2cnKTtcbiAgICAvLyAgICAgLy8gZy5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgc2hhcGUuZmlsbCA/ICd2aXNpYmxlUGFpbnRlZCcgOiAndmlzaWJsZVN0cm9rZScpO1xuICAgIC8vICAgICBnLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAncGFpbnRlZCcpO1xuICAgIC8vICAgICBsZXQgcGF0aCA9IHN2Zy5lbGVtZW50KCdwYXRoJywgeyBkOiBwcywgZmlsbDogKHNoYXBlLmZpbGwgPyBzaGFwZS5maWxsIDogJ25vbmUnKSwgc3Ryb2tlOiBzaGFwZS5zdHJva2UgfSk7XG4gICAgLy8gICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAzKTtcbiAgICAvLyAgICAgZy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICAvL1xuICAgIC8vICAgICBzdmdFbC5hcHBlbmRDaGlsZChnKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3ZnRWwpO1xuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaGljO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5cbmNsYXNzIFNoYXBlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcblxuICAgIGxldCBwb2ludHMgPSBwYXJhbXMucG9pbnRzO1xuICAgIGlmIChwb2ludHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludChwLngsIHAueSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsbCA9IHBhcmFtcy5maWxsIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBwYXJhbXMuc3Ryb2tlIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2VXaWR0aCA9IHBhcmFtcy5zdHJva2VXaWR0aCB8fCAxO1xuICAgIHRoaXMuY2xvc2VkID0gcGFyYW1zLmNsb3NlZCB8fCBmYWxzZTtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdCA9IG51bGw7XG5cbiAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgfVxuICAgICAgcmVjdCA9IG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIC8vIENvcHlyaWdodCAoYykgMTk3MC0yMDAzLCBXbS4gUmFuZG9scGggRnJhbmtsaW5cbiAgLy8gaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1Ly9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuXG4gIHN0YXRpYyBwb2ludEluUG9seWdvbihwb2ludHMsIHRlc3R4LCB0ZXN0eSkge1xuICAgIGxldCBpLCBqLCBjID0gMDtcbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgaWYgKCgocG9pbnRzW2ldLnkgPiB0ZXN0eSkgIT0gKHBvaW50c1tqXS55ID4gdGVzdHkpKSAmJlxuICAgICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICAgIGMgPSAhYztcbiAgICB9XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gU2hhcGUucG9pbnRJblBvbHlnb24odGhpcy5wb2ludHMsIHgsIHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IHsgRXZlbnQsIEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmNsYXNzIFN0YWdlT2JqZWN0IGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzLl94ID0gdmFsdWU7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgfVxuXG4gIGFkZGVkVG9TdGFnZSgpIHtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICB9XG5cbiAgLy8gYmVnaW5EcmFnKCkge1xuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gIC8vICAgdGhpcy5kcmFnID0gdHJ1ZTtcbiAgLy8gfVxuICAvL1xuICAvLyBlbmREcmFnKCkge1xuICAvLyAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gIC8vICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAvLyAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gIC8vICAgdGhpcy5kcmFnID0gZmFsc2U7XG4gIC8vIH1cbiAgLy9cbiAgLy8gb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAvLyAgIHRoaXMuZW1pdCgnbW91c2Vkb3duJywgdGhpcyk7XG4gIC8vICAgdGhpcy5iZWdpbkRyYWcoKTtcbiAgLy8gfVxuICAvL1xuICAvLyBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgLy8gICB0aGlzLmVuZERyYWcoKTtcbiAgLy8gfVxuICAvL1xuICAvLyBvbk1vdXNlTW92ZShldmVudCkge1xuICAvLyAgIGlmICh0aGlzLmRyYWcpIHtcbiAgLy8gICAgIHRoaXMueCArPSBldmVudC5tb3ZlbWVudFg7XG4gIC8vICAgICB0aGlzLnkgKz0gZXZlbnQubW92ZW1lbnRZO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyBvbkJsdXIoZXZlbnQpIHtcbiAgLy8gICB0aGlzLmVuZERyYWcoKTtcbiAgLy8gfVxuICAvL1xuICAvLyBoYW5kbGVFdmVudChldmVudCkge1xuICAvLyAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gIC8vICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgLy8gICB9XG4gIC8vICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgLy8gICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgLy8gICB9XG4gIC8vICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAvLyAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gIC8vICAgfVxuICAvLyAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2JsdXInKSB7XG4gIC8vICAgICB0aGlzLm9uQmx1cihldmVudCk7XG4gIC8vICAgfVxuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlT2JqZWN0O1xuIiwiaW1wb3J0IFN0YWdlT2JqZWN0IGZyb20gJy4vc3RhZ2Vfb2JqZWN0JztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFN0YWdlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMudmFsdWUpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICAgIC8vIHRoaXMuZWwuc3R5bGUuZm9udFNpemUgPSB0aGlzLnNpemUgKyAncHgnO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsIlxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJhbXMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbiAgZW1pdCh0eXBlLCAuLi5hcmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICBpZiAobGlzdGVuZXIudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyB0eXBlOiB0eXBlLCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEV2ZW50RGlzcGF0Y2hlciwgRXZlbnQgfTtcbiIsIlxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICB9XG5cbiAgaW50ZXJzZWN0c0xpbmVTZWdtZW50KHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgfVxuXG4gIGNvbnRhaW5zUG9pbnQoeCwgeSkge1xuICAgIGxldCBkeCA9IHggLSB0aGlzLng7XG4gICAgbGV0IGR5ID0geSAtIHRoaXMueTtcbiAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgcmV0dXJuIGQgPCB0aGlzLnI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiXG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkaXN0YW5jZShwb2ludCkge1xuICAgIGxldCBkeCA9IHRoaXMueCAtIHBvaW50Lng7XG4gICAgbGV0IGR5ID0gdGhpcy55IC0gcG9pbnQueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsIlxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBncm93KGFtb3VudCkge1xuICAgIHRoaXMueCAtPSBhbW91bnQ7XG4gICAgdGhpcy55IC09IGFtb3VudDtcbiAgICB0aGlzLndpZHRoICs9IGFtb3VudCAqIDI7XG4gICAgdGhpcy5oZWlnaHQgKz0gYW1vdW50ICogMjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJcbmNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkb3QodmVjdG9yKSB7XG4gICAgcmV0dXJuICh0aGlzLnggKiB2ZWN0b3IueCArIHRoaXMueSAqIHZlY3Rvci55KTtcbiAgfVxuXG4gIG1hZygpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBwcm9qZWN0KHZlY3Rvcikge1xuICAgIGxldCBkID0gdmVjdG9yLmRvdCh2ZWN0b3IpO1xuICAgIGlmIChkID4gMCkge1xuICAgICAgbGV0IHJhdGlvID0gdGhpcy5kb3QodmVjdG9yKSAvIGQ7XG4gICAgICAvLyByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHJhdGlvIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL2dlb20vdmVjdG9yJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9nZW9tL2NpcmNsZSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcblxubGV0IFNOQVBfUkFESVVTID0gMztcbmxldCBDT0xPUlMgPSBbXG4gICd3aGl0ZScsXG4gIC8vICcjZTZlNmU2JyxcbiAgJyNjY2NjY2MnLFxuICAvLyAnI2IzYjNiMycsXG4gICcjOTk5OTk5JyxcbiAgLy8gJyM4MDgwODAnLFxuICAnIzY2NjY2NicsXG4gIC8vICcjNGQ0ZDRkJyxcbiAgJyMzMzMzMzMnLFxuICAvLyAnIzFhMWExYScsXG4gICdibGFjaydcbl07XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLmZpbGwgPSBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gQ09MT1JTWzVdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5hZGp1c3RDYW52YXMoKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5zZXRWaXNpYmxlKHBhcmFtcy52aXNpYmxlICE9PSB1bmRlZmluZWQgPyBwYXJhbXMudmlzaWJsZSA6IHRydWUpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLCAnZGJsY2xpY2snLCAnY29udGV4dG1lbnUnIF07XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BhcGVyLWN1cnNvcicpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGp1c3RDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBkcmF3TGluZSh4MSwgeTEsIHgyLCB5MiwgY29sb3IpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdQYXRoKHBhcmFtcz17fSkge1xuICAgIGxldCBwb2ludHMgPSBwYXJhbXMucG9pbnRzIHx8IFtdO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHBhcmFtcy5zdHJva2UgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuc3Ryb2tlID8gcGFyYW1zLnN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gcGFyYW1zLmZpbGwgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuZmlsbCA/IHBhcmFtcy5maWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgdGhpcy5kcmF3UGF0aCh7IHBvaW50czogc2hhcGUucG9pbnRzLCBmaWxsOiBzaGFwZS5maWxsLCBzdHJva2U6IHNoYXBlLnN0cm9rZSwgY2xvc2VkOiBzaGFwZS5jbG9zZWQgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kcmF3UGF0aCh7IHBvaW50czogdGhpcy5wb2ludHMsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSB9KTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGxldCBjcCA9IG5ldyBQb2ludCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBsZXQgcDAgPSB0aGlzLnBvaW50c1swXTtcbiAgICAgIGlmIChjcC5kaXN0YW5jZShwMCkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICBjdHguYXJjKHAwLngsIHAwLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmNvbW1hbmQpIHtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29tbWFuZCk7XG4gICAgLy8gICBsZXQgc2l6ZSA9IDI0O1xuICAgIC8vICAgY3R4LmZvbnQgPSBzaXplICsgJ3B4IHNhbnMtc2VyaWYnO1xuICAgIC8vICAgY3R4LmZpbGxUZXh0KHRoaXMuY29tbWFuZCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSBzaXplKjIpO1xuICAgIC8vIH1cblxuICB9XG5cbiAgZ2V0U2hhcGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNoYXBlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY2FuY2VsUGF0aCgpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjbG9zZVBhdGgoY2xvc2VkPWZhbHNlKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7IHBvaW50czogdGhpcy5wb2ludHMsIGNsb3NlZDogY2xvc2VkLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG4gICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNoYXBlLmZpbGwpO1xuICAgIH1cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRGaWxsKGZpbGwpIHtcbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRTdHJva2Uoc3Ryb2tlKSB7XG4gICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgU05BUF9SQURJVVMpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvclggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yWSArICdweCc7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICh0aGlzLmNvbW1hbmQpIHtcbiAgICAgIHRoaXMub25QYXJhbWV0ZXIoZXZlbnQua2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09ICdFc2NhcGUnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3MnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdHJva2UodGhpcy5zdHJva2UgPyBudWxsIDogJ2JsYWNrJylcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnMCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLnNldEZpbGwobnVsbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoZXZlbnQua2V5KSAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIGxldCBjb2xvciA9IENPTE9SU1twYXJzZUludChldmVudC5rZXkpIC0gMV07XG4gICAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuc2V0RmlsbChjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsIlxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3N0YWdlJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gMzIwO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDIwMDtcblxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkKHN0YWdlT2JqZWN0KSB7XG4gICAgY29uc29sZS5sb2coJ2FkZCcsIHN0YWdlT2JqZWN0KTtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goc3RhZ2VPYmplY3QpO1xuICAgIC8vIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3RhZ2VPYmplY3QuZG9tKCkpO1xuICAgIHN0YWdlT2JqZWN0LmFkZGVkVG9TdGFnZSgpO1xuICAgIC8vIHN0YWdlT2JqZWN0Lm9uKCdtb3VzZWRvd24nLCAob2JqKSA9PiB7XG4gICAgLy8gICAvLyBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMob2JqKSkge1xuICAgIC8vICAgLy8gICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IG9iaik7XG4gICAgLy8gICAvLyAgIG9iai5kZXNlbGVjdCgpO1xuICAgIC8vICAgLy8gfVxuICAgIC8vICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIC8vICAgdGhpcy5zZWxlY3Rpb24gPSBbIG9iaiBdO1xuICAgIC8vICAgb2JqLnNlbGVjdCgpO1xuICAgIC8vIH0pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW2ldLmRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoY2hpbGQuY2FudmFzLCBjaGlsZC54LCBjaGlsZC55KTtcbiAgICB9XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCAtIDEsIHRoaXMuY2FudmFzLmhlaWdodCAtIDEpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBsZXQgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgLy8gbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WDtcbiAgICBsZXQgeSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh4LCB5KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5oaXRUZXN0KHgsIHkpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaXQnLCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGlmIChldmVudC50YXJnZXQgPT0gdGhpcy5lbCkge1xuICAgIC8vICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvcnggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yeSA9IGV2ZW50Lm9mZnNldFk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==