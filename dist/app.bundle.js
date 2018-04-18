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
    }
  }, {
    key: 'initElements',
    value: function initElements() {
      this.dom.app = document.getElementById('app');
      document.body.appendChild(this.dom.app);

      this.stage = new _stage2.default();
      this.dom.app.appendChild(this.stage.el);

      this.paper = new _paper2.default({ visible: false });
      this.dom.app.appendChild(this.paper.el);

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
      label.on('hey', function (event) {});

      this.stage.add(label);
    }
  }, {
    key: 'createGraphic',
    value: function createGraphic(shapes) {
      if (shapes.length) {
        var graphic = new _graphic2.default({ shapes: shapes });
        this.stage.add(graphic);
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
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'keydown') {
        this.onKeyDown(event);
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

    _this.update();
    return _this;
  }

  _createClass(Graphic, [{
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
    key: 'update',
    value: function update() {
      while (this.el.firstChild) {
        this.el.removeChild(this.el.firstChild);
      }var bounds = this.getBounds();
      if (bounds) {
        this.x = bounds.x;
        this.y = bounds.y;
        // this.setPosition(bounds.x, bounds.y);
        this.el.style.width = bounds.width + 'px';
        this.el.style.height = bounds.height + 'px';

        var svgEl = _svg2.default.svg();
        svgEl.setAttribute('width', bounds.width);
        svgEl.setAttribute('height', bounds.height);
        svgEl.setAttribute('viewBox', '0 0 ' + bounds.width + ' ' + bounds.height);

        for (var i = 0; i < this.shapes.length; i++) {
          var shape = this.shapes[i];
          var ps = '';
          for (var j = 0; j < shape.points.length; j++) {
            var p = shape.points[j];
            ps += p.x - bounds.x + ',' + (p.y - bounds.y) + ' ';
          }
          if (shape.closed) {
            ps += 'Z';
          }

          var svgChildEl = _svg2.default.element('polyline', { points: ps, fill: 'transparent', stroke: 'black' });
          svgEl.appendChild(svgChildEl);
        }
        this.el.appendChild(svgEl);

        // this.x = bounds.x;
      }
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

    this.fill = params.fill || 'transparent';
    this.stroke = params.stroke || 'black';
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

    _this.el = document.createElement('div');
    _this.el.classList.add('stage-object');
    _this.el.addEventListener('mousedown', _this);

    _this.x = 0;
    _this.y = 0;
    return _this;
  }

  _createClass(StageObject, [{
    key: 'dom',
    value: function dom() {
      return this.el;
    }
  }, {
    key: 'addedToStage',
    value: function addedToStage() {}
  }, {
    key: 'select',
    value: function select() {
      this.el.classList.add('selected');
    }
  }, {
    key: 'deselect',
    value: function deselect() {
      this.el.classList.remove('selected');
    }
  }, {
    key: 'beginDrag',
    value: function beginDrag() {
      window.addEventListener('mouseup', this);
      window.addEventListener('mousemove', this);
      window.addEventListener('blur', this);
      this.drag = true;
    }
  }, {
    key: 'endDrag',
    value: function endDrag() {
      window.removeEventListener('mouseup', this);
      window.removeEventListener('mousemove', this);
      window.removeEventListener('blur', this);
      this.drag = false;
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      this.emit('mousedown', this);
      this.beginDrag();
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      this.endDrag();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      if (this.drag) {
        this.x += event.movementX;
        this.y += event.movementY;
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      this.endDrag();
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
      } else if (event.type == 'blur') {
        this.onBlur(event);
      }
    }
  }, {
    key: 'x',
    get: function get() {
      return this._x;
    },
    set: function set(value) {
      this._x = value;
      this.el.style.left = this._x + 'px';
    }
  }, {
    key: 'y',
    get: function get() {
      return this._y;
    },
    set: function set(value) {
      this._y = value;
      this.el.style.top = this._y + 'px';
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
      this.el.style.fontSize = this.size + 'px';
    }
  }, {
    key: 'setText',
    value: function setText(value) {
      this.value = value;
      this.el.innerHTML = this.value;
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function Rectangle(x, y, width, height) {
  _classCallCheck(this, Rectangle);

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
};

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

var Paper = function (_EventDispatcher) {
  _inherits(Paper, _EventDispatcher);

  function Paper() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Paper);

    var _this = _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).call(this));

    _this.points = [];
    _this.shapes = [];
    _this.fill = 'cyan';
    _this.stroke = 'green';

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
    value: function drawPath(points) {
      var closed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var ctx = this.canvas.getContext('2d');
      ctx.strokeStyle = this.stroke;
      ctx.fillStyle = this.fill;
      ctx.beginPath();
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        if (i == 0) ctx.moveTo(p.x, p.y);else ctx.lineTo(p.x, p.y);
      }
      if (closed) ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.shapes.length; i++) {
        var shape = this.shapes[i];
        this.drawPath(shape.points, shape.closed);
      }

      if (this.points.length) {
        this.drawPath(this.points);

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
        var shape = new _shape2.default({ points: this.points, closed: closed });
        this.shapes.push(shape);
      }
      this.points = [];
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
      if (event.key == 'Escape' && !event.repeat) {
        // this.emit('paths', this.shapes);
        this.cancelPath();
      } else if (event.key == 'Enter' && !event.repeat) {
        this.closePath();
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

    this.el = document.createElement('div');
    this.el.classList.add('stage');

    this.children = [];
    this.selection = [];

    this.el.addEventListener('mousedown', this);
    this.el.addEventListener('mouseup', this);
    this.el.addEventListener('mousemove', this);
  }

  _createClass(Stage, [{
    key: 'add',
    value: function add(stageObject) {
      var _this = this;

      this.children.push(stageObject);
      this.el.appendChild(stageObject.dom());
      stageObject.addedToStage();
      stageObject.on('mousedown', function (obj) {
        // if (this.selection.includes(obj)) {
        //   this.selection = this.selection.filter(element => element !== obj);
        //   obj.deselect();
        // }
        _this.deselect();
        _this.selection = [obj];
        obj.select();
      });
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
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      if (event.target == this.el) {
        this.deselect();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3N0YWdlX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImluaXRFbGVtZW50cyIsImluaXRFdmVudExpc3RlbmVycyIsInN0YXJ0dXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN0YWdlIiwiZWwiLCJwYXBlciIsInZpc2libGUiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ2YWx1ZSIsIngiLCJ5Iiwib24iLCJldmVudCIsImFkZCIsInNoYXBlcyIsImxlbmd0aCIsImdyYXBoaWMiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwiZ2V0U2hhcGVzIiwiY3JlYXRlR3JhcGhpYyIsInNob3dQYXBlciIsImhpZGVQYXBlciIsImtleSIsInJlcGVhdCIsInRvZ2dsZVBhcGVyIiwiaGFuZGxlRXZlbnQiLCJ0eXBlIiwib25LZXlEb3duIiwiaW5pdCIsIkdyYXBoaWMiLCJwYXJhbXMiLCJ1cGRhdGUiLCJyZWN0IiwieG1pbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwieW1pbiIsInhtYXgiLCJORUdBVElWRV9JTkZJTklUWSIsInltYXgiLCJlbXB0eSIsImkiLCJzaGFwZSIsImJvdW5kcyIsImdldEJvdW5kcyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwic3R5bGUiLCJzdmdFbCIsInN2ZyIsInNldEF0dHJpYnV0ZSIsInBzIiwiaiIsInBvaW50cyIsInAiLCJjbG9zZWQiLCJzdmdDaGlsZEVsIiwiZWxlbWVudCIsImZpbGwiLCJzdHJva2UiLCJTaGFwZSIsInB1c2giLCJzdHJva2VXaWR0aCIsIlN0YWdlT2JqZWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImRyYWciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZW1pdCIsImJlZ2luRHJhZyIsImVuZERyYWciLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIiwib25CbHVyIiwiX3giLCJsZWZ0IiwiX3kiLCJ0b3AiLCJUZXh0Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRUZXh0IiwiZm9udFNpemUiLCJpbm5lckhUTUwiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUmVjdGFuZ2xlIiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJTTkFQX1JBRElVUyIsIlBhcGVyIiwiY2FudmFzIiwiYWRqdXN0Q2FudmFzIiwidW5kZWZpbmVkIiwiY3Vyc29yIiwiZGlzcGxheSIsImFkZExpc3RlbmVycyIsInJlbW92ZUxpc3RlbmVycyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNvbG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbFN0eWxlIiwiY2xvc2VQYXRoIiwiY2xlYXJSZWN0IiwiZHJhd1BhdGgiLCJjdXJzb3JYIiwiY3Vyc29yWSIsImNwIiwicDAiLCJkaXN0YW5jZSIsImFyYyIsIlBJIiwicmVuZGVyIiwiYnV0dG9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjYW5jZWxQYXRoIiwicHJldmVudERlZmF1bHQiLCJvbkRibENsaWNrIiwib25Db250ZXh0TWVudSIsIlN0YWdlIiwiY2hpbGRyZW4iLCJzZWxlY3Rpb24iLCJzdGFnZU9iamVjdCIsImFkZGVkVG9TdGFnZSIsIm9iaiIsImRlc2VsZWN0Iiwic2VsZWN0IiwidGFyZ2V0IiwiY3Vyc29yeCIsImN1cnNvcnkiLCJTdmciLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEs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LEtBQXZELENBQVY7QUFDQW5ILFVBQUlDLFlBQUosQ0FBaUIsYUFBakIsRUFBK0IsOEJBQS9CO0FBQ0EsV0FBSyxJQUFJbUgsSUFBVCxJQUFpQkYsVUFBakIsRUFBNkI7QUFDM0JsSCxZQUFJQyxZQUFKLENBQWlCbUgsSUFBakIsRUFBdUJGLFdBQVdFLElBQVgsQ0FBdkI7QUFDRDtBQUNELGFBQU9wSCxHQUFQO0FBQ0Q7Ozs7OztrQkFHWWlILEciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJztcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnLi9kaXNwbGF5L2dyYXBoaWMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9kaXNwbGF5L3RleHQnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIGluaXRFbGVtZW50cygpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbS5hcHApO1xuXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSgpO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnN0YWdlLmVsKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5lbCk7XG5cbiAgICAvLyB0aGlzLnBhcGVyLm9uKCdwYXRocycsIChwYXRocykgPT4ge1xuICAgIC8vICAgdGhpcy5jcmVhdGVTaGFwZShwYXRocyk7XG4gICAgLy8gICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgbGV0IGxhYmVsID0gbmV3IFRleHQoeyB2YWx1ZTogJ2hlbGxvJyB9KTtcbiAgICBsYWJlbC54ID0gNTA7XG4gICAgbGFiZWwueSA9IDEwMDtcbiAgICBsYWJlbC5vbignaGV5JywgKGV2ZW50KSA9PiB7fSk7XG5cbiAgICB0aGlzLnN0YWdlLmFkZChsYWJlbCk7XG4gIH1cblxuICBjcmVhdGVHcmFwaGljKHNoYXBlcykge1xuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHsgc2hhcGVzOiBzaGFwZXMgfSk7XG4gICAgICB0aGlzLnN0YWdlLmFkZChncmFwaGljKTtcbiAgICB9XG4gIH1cblxuICBzaG93UGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5wYXBlci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gJ3BhcGVyJztcbiAgICB9XG4gIH1cblxuICBoaWRlUGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgICBsZXQgc2hhcGVzID0gdGhpcy5wYXBlci5nZXRTaGFwZXMoKTtcbiAgICAgIHRoaXMuY3JlYXRlR3JhcGhpYyhzaGFwZXMpO1xuXG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnNob3dQYXBlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy50b2dnbGVQYXBlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgICAgdGhpcy5wYXBlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuLi9zdmcnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgU3RhZ2VPYmplY3QgZnJvbSAnLi9zdGFnZV9vYmplY3QnO1xuXG5jbGFzcyBHcmFwaGljIGV4dGVuZHMgU3RhZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zaGFwZXMgPSBwYXJhbXMuc2hhcGVzIHx8IFtdO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdDtcblxuICAgIGlmICh0aGlzLnNoYXBlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBsZXQgZW1wdHkgPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgICBsZXQgYm91bmRzID0gc2hhcGUuZ2V0Qm91bmRzKCk7XG4gICAgICAgIGlmIChib3VuZHMpIHtcbiAgICAgICAgICBib3VuZHMueCArPSBzaGFwZS54O1xuICAgICAgICAgIGJvdW5kcy55ICs9IHNoYXBlLnk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYm91bmRzKTtcbiAgICAgICAgICB4bWluID0gKGJvdW5kcy54IDwgeG1pbiA/IGJvdW5kcy54IDogeG1pbik7XG4gICAgICAgICAgeW1pbiA9IChib3VuZHMueSA8IHltaW4gPyBib3VuZHMueSA6IHltaW4pO1xuICAgICAgICAgIHhtYXggPSAoYm91bmRzLnggKyBib3VuZHMud2lkdGggPiB4bWF4ID8gYm91bmRzLnggKyBib3VuZHMud2lkdGggOiB4bWF4KTtcbiAgICAgICAgICB5bWF4ID0gKGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCA+IHltYXggPyBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgOiB5bWF4KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4bWluLCB5bWluLCB4bWF4LCB5bWF4KTtcbiAgICAgICAgICBlbXB0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZW1wdHkpIHJlY3QgPSBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgd2hpbGUgKHRoaXMuZWwuZmlyc3RDaGlsZCkgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xuXG4gICAgbGV0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcykge1xuICAgICAgdGhpcy54ID0gYm91bmRzLng7XG4gICAgICB0aGlzLnkgPSBib3VuZHMueTtcbiAgICAgIC8vIHRoaXMuc2V0UG9zaXRpb24oYm91bmRzLngsIGJvdW5kcy55KTtcbiAgICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSBib3VuZHMud2lkdGggKyAncHgnO1xuICAgICAgdGhpcy5lbC5zdHlsZS5oZWlnaHQgPSBib3VuZHMuaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgbGV0IHN2Z0VsID0gc3ZnLnN2ZygpO1xuICAgICAgc3ZnRWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGJvdW5kcy53aWR0aCk7XG4gICAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgc3ZnRWwuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgYm91bmRzLndpZHRoICsgJyAnICsgYm91bmRzLmhlaWdodCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zaGFwZXNbaV07XG4gICAgICAgIGxldCBwcyA9ICcnO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXBlLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgICAgICAgIHBzICs9IChwLnggLSBib3VuZHMueCkgKyAnLCcgKyAocC55IC0gYm91bmRzLnkpICsgJyAnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAgICAgICBwcyArPSAnWic7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3ZnQ2hpbGRFbCA9IHN2Zy5lbGVtZW50KCdwb2x5bGluZScsIHsgcG9pbnRzOiBwcywgZmlsbDogJ3RyYW5zcGFyZW50Jywgc3Ryb2tlOiAnYmxhY2snIH0pO1xuICAgICAgICBzdmdFbC5hcHBlbmRDaGlsZChzdmdDaGlsZEVsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3ZnRWwpO1xuXG4gICAgICAvLyB0aGlzLnggPSBib3VuZHMueDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhpYztcbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuXG5jbGFzcyBTaGFwZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG5cbiAgICBsZXQgcG9pbnRzID0gcGFyYW1zLnBvaW50cztcbiAgICBpZiAocG9pbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgUG9pbnQocC54LCBwLnkpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpbGwgPSBwYXJhbXMuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuICAgIHRoaXMuc3Ryb2tlID0gcGFyYW1zLnN0cm9rZSB8fCAnYmxhY2snO1xuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBwYXJhbXMuc3Ryb2tlV2lkdGggfHwgMTtcbiAgICB0aGlzLmNsb3NlZCA9IHBhcmFtcy5jbG9zZWQgfHwgZmFsc2U7XG5cbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgbGV0IHJlY3QgPSBudWxsO1xuXG4gICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgbGV0IHhtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgbGV0IHltYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgIHhtYXggPSBwLnggPiB4bWF4ID8gcC54IDogeG1heDtcbiAgICAgICAgeG1pbiA9IHAueCA8IHhtaW4gPyBwLnggOiB4bWluO1xuICAgICAgICB5bWF4ID0gcC55ID4geW1heCA/IHAueSA6IHltYXg7XG4gICAgICAgIHltaW4gPSBwLnkgPCB5bWluID8gcC55IDogeW1pbjtcbiAgICAgIH1cbiAgICAgIHJlY3QgPSBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgeyBFdmVudCwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZXZlbnRzJztcblxuY2xhc3MgU3RhZ2VPYmplY3QgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2Utb2JqZWN0Jyk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgICB0aGlzLmVsLnN0eWxlLmxlZnQgPSB0aGlzLl94ICsgJ3B4JztcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlO1xuICAgIHRoaXMuZWwuc3R5bGUudG9wID0gdGhpcy5feSArICdweCc7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICB9XG5cbiAgYmVnaW5EcmFnKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gICAgdGhpcy5kcmFnID0gdHJ1ZTtcbiAgfVxuXG4gIGVuZERyYWcoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzKTtcbiAgICB0aGlzLmRyYWcgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5lbWl0KCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB0aGlzLmJlZ2luRHJhZygpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgdGhpcy5lbmREcmFnKCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGlmICh0aGlzLmRyYWcpIHtcbiAgICAgIHRoaXMueCArPSBldmVudC5tb3ZlbWVudFg7XG4gICAgICB0aGlzLnkgKz0gZXZlbnQubW92ZW1lbnRZO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuZW5kRHJhZygpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdibHVyJykge1xuICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZU9iamVjdDtcbiIsImltcG9ydCBTdGFnZU9iamVjdCBmcm9tICcuL3N0YWdlX29iamVjdCc7XG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBTdGFnZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLnZhbHVlKTtcbiAgfVxuXG4gIHNldFNpemUodmFsdWUpIHtcbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLmVsLnN0eWxlLmZvbnRTaXplID0gdGhpcy5zaXplICsgJ3B4JztcbiAgfVxuXG4gIHNldFRleHQodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJcbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFyYW1zKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgdHlwZTogdHlwZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFdmVudERpc3BhdGNoZXIsIEV2ZW50IH07XG4iLCJcbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yID0gcjtcbiAgfVxuXG4gIGludGVyc2VjdHNMaW5lU2VnbWVudCh4MSwgeTEsIHgyLCB5Mikge1xuXG4gIH1cblxuICBjb250YWluc1BvaW50KHgsIHkpIHtcbiAgICBsZXQgZHggPSB4IC0gdGhpcy54O1xuICAgIGxldCBkeSA9IHkgLSB0aGlzLnk7XG4gICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIHJldHVybiBkIDwgdGhpcy5yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcbiIsIlxuY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIHBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJcbmNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL2dlb20vY2lyY2xlJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuXG5sZXQgU05BUF9SQURJVVMgPSAzO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gJ2N5YW4nO1xuICAgIHRoaXMuc3Ryb2tlID0gJ2dyZWVuJztcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3BhcGVyJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuYWRqdXN0Q2FudmFzKCk7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuc2V0VmlzaWJsZShwYXJhbXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkID8gcGFyYW1zLnZpc2libGUgOiB0cnVlKTtcblxuICAgIHRoaXMubGlzdGVuZXJzID0gWyAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZXVwJywgJ2RibGNsaWNrJywgJ2NvbnRleHRtZW51JyBdO1xuXG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwYXBlci1jdXJzb3InKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHRoaXMubGlzdGVuZXJzW2ldLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZpc2libGUodmlzaWJsZSkge1xuICAgIGlmICh0aGlzLnZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRqdXN0Q2FudmFzKCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgZHJhd0xpbmUoeDEsIHkxLCB4MiwgeTIsIGNvbG9yKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3IgfHwgJ2JsYWNrJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3UGF0aChwb2ludHMsIGNsb3NlZD1mYWxzZSkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGw7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG4gICAgaWYgKGNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcbiAgICAgIHRoaXMuZHJhd1BhdGgoc2hhcGUucG9pbnRzLCBzaGFwZS5jbG9zZWQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZHJhd1BhdGgodGhpcy5wb2ludHMpO1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgbGV0IGNwID0gbmV3IFBvaW50KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGxldCBwMCA9IHRoaXMucG9pbnRzWzBdO1xuICAgICAgaWYgKGNwLmRpc3RhbmNlKHAwKSA8IFNOQVBfUkFESVVTKSB7XG4gICAgICAgIGN0eC5hcmMocDAueCwgcDAueSwgNSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBnZXRTaGFwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcGVzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjYW5jZWxQYXRoKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNsb3NlUGF0aChjbG9zZWQ9ZmFsc2UpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHsgcG9pbnRzOiB0aGlzLnBvaW50cywgY2xvc2VkOiBjbG9zZWQgfSk7XG4gICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICB9XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGxldCBwID0gbmV3IFBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICBpZiAocC5kaXN0YW5jZSh0aGlzLnBvaW50c1swXSkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yWCArICdweCc7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3JZICsgJ3B4JztcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAnRXNjYXBlJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAvLyB0aGlzLmVtaXQoJ3BhdGhzJywgdGhpcy5zaGFwZXMpO1xuICAgICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsIlxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gIH1cblxuICBhZGQoc3RhZ2VPYmplY3QpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goc3RhZ2VPYmplY3QpO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3RhZ2VPYmplY3QuZG9tKCkpO1xuICAgIHN0YWdlT2JqZWN0LmFkZGVkVG9TdGFnZSgpO1xuICAgIHN0YWdlT2JqZWN0Lm9uKCdtb3VzZWRvd24nLCAob2JqKSA9PiB7XG4gICAgICAvLyBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMob2JqKSkge1xuICAgICAgLy8gICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IG9iaik7XG4gICAgICAvLyAgIG9iai5kZXNlbGVjdCgpO1xuICAgICAgLy8gfVxuICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbIG9iaiBdO1xuICAgICAgb2JqLnNlbGVjdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gdGhpcy5lbCkge1xuICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvcnggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yeSA9IGV2ZW50Lm9mZnNldFk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==