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

    _this.el.style.pointerEvents = 'none';

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

        this.el.style.width = bounds.width + 'px';
        this.el.style.height = bounds.height + 'px';

        var svgEl = _svg2.default.svg();
        svgEl.setAttribute('width', bounds.width);
        svgEl.setAttribute('height', bounds.height);
        svgEl.setAttribute('viewBox', '0 0 ' + bounds.width + ' ' + bounds.height);
        svgEl.setAttribute('pointer-events', 'none');

        for (var i = 0; i < this.shapes.length; i++) {
          var shape = this.shapes[i];

          var ps = 'M';

          for (var j = 0; j < shape.points.length; j++) {
            var p = shape.points[j];
            if (j > 0) ps += 'L';
            ps += p.x - bounds.x + ' ' + (p.y - bounds.y) + ' ';
          }
          if (shape.closed) {
            ps += 'Z';
          }

          console.log('fill', shape.fill);

          var g = _svg2.default.element('g');
          // g.setAttribute('pointer-events', shape.fill ? 'visiblePainted' : 'visibleStroke');
          g.setAttribute('pointer-events', 'painted');
          var path = _svg2.default.element('path', { d: ps, fill: shape.fill ? shape.fill : 'none', stroke: shape.stroke });
          path.setAttribute('stroke-width', 3);
          g.appendChild(path);

          svgEl.appendChild(g);
        }
        this.el.appendChild(svgEl);
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
      console.log(event.target);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS9ncmFwaGljLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3N0YWdlX29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheS90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsImluaXRFbGVtZW50cyIsImluaXRFdmVudExpc3RlbmVycyIsInN0YXJ0dXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInN0YWdlIiwiZWwiLCJwYXBlciIsInZpc2libGUiLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ2YWx1ZSIsIngiLCJ5Iiwib24iLCJldmVudCIsImFkZCIsInNoYXBlcyIsImxlbmd0aCIsImdyYXBoaWMiLCJtb2RlIiwic2V0VmlzaWJsZSIsImNsZWFyIiwiZ2V0U2hhcGVzIiwiY3JlYXRlR3JhcGhpYyIsInNob3dQYXBlciIsImhpZGVQYXBlciIsImtleSIsInJlcGVhdCIsInRvZ2dsZVBhcGVyIiwiaGFuZGxlRXZlbnQiLCJ0eXBlIiwib25LZXlEb3duIiwiaW5pdCIsIkdyYXBoaWMiLCJwYXJhbXMiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJ1cGRhdGUiLCJyZWN0IiwieG1pbiIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwieW1pbiIsInhtYXgiLCJORUdBVElWRV9JTkZJTklUWSIsInltYXgiLCJlbXB0eSIsImkiLCJzaGFwZSIsImJvdW5kcyIsImdldEJvdW5kcyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwic3ZnRWwiLCJzdmciLCJzZXRBdHRyaWJ1dGUiLCJwcyIsImoiLCJwb2ludHMiLCJwIiwiY2xvc2VkIiwiZmlsbCIsImciLCJlbGVtZW50IiwicGF0aCIsImQiLCJzdHJva2UiLCJTaGFwZSIsInB1c2giLCJzdHJva2VXaWR0aCIsIlN0YWdlT2JqZWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImRyYWciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiZW1pdCIsImJlZ2luRHJhZyIsImVuZERyYWciLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIiwib25CbHVyIiwiX3giLCJsZWZ0IiwiX3kiLCJ0b3AiLCJUZXh0Iiwic2V0U2l6ZSIsInNpemUiLCJzZXRUZXh0IiwiZm9udFNpemUiLCJpbm5lckhUTUwiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJNYXRoIiwic3FydCIsIlBvaW50IiwicG9pbnQiLCJSZWN0YW5nbGUiLCJWZWN0b3IiLCJ2ZWN0b3IiLCJkb3QiLCJyYXRpbyIsIlNOQVBfUkFESVVTIiwiQ09MT1JTIiwiUGFwZXIiLCJjYW52YXMiLCJhZGp1c3RDYW52YXMiLCJ1bmRlZmluZWQiLCJjdXJzb3IiLCJkaXNwbGF5IiwiYWRkTGlzdGVuZXJzIiwicmVtb3ZlTGlzdGVuZXJzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29sb3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzYXZlIiwiZmlsbFN0eWxlIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsImNsZWFyUmVjdCIsImRyYXdQYXRoIiwiY3Vyc29yWCIsImN1cnNvclkiLCJjcCIsInAwIiwiZGlzdGFuY2UiLCJhcmMiLCJQSSIsInJlbmRlciIsImJ1dHRvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY29tbWFuZCIsIm9uUGFyYW1ldGVyIiwiY2FuY2VsUGF0aCIsInNldFN0cm9rZSIsInNldEZpbGwiLCJpbmNsdWRlcyIsInBhcnNlSW50IiwicHJldmVudERlZmF1bHQiLCJvbkRibENsaWNrIiwib25Db250ZXh0TWVudSIsIlN0YWdlIiwiY2hpbGRyZW4iLCJzZWxlY3Rpb24iLCJzdGFnZU9iamVjdCIsImFkZGVkVG9TdGFnZSIsIm9iaiIsImRlc2VsZWN0Iiwic2VsZWN0IiwiY3Vyc29yeCIsImN1cnNvcnkiLCJTdmciLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsRztBQUNKLGlCQUFjO0FBQUE7O0FBQ1osU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFDRDs7OzsyQkFFTTtBQUNMLFdBQUtDLFlBQUw7QUFDQSxXQUFLQyxrQkFBTDtBQUNBLFdBQUtDLE9BQUw7QUFDRDs7O3lDQUVvQjtBQUNuQkMsYUFBT0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsSUFBbkM7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS0wsR0FBTCxDQUFTTSxHQUFULEdBQWVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBZjtBQUNBRCxlQUFTRSxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS1YsR0FBTCxDQUFTTSxHQUFuQzs7QUFFQSxXQUFLSyxLQUFMLEdBQWEscUJBQWI7QUFDQSxXQUFLWCxHQUFMLENBQVNNLEdBQVQsQ0FBYUksV0FBYixDQUF5QixLQUFLQyxLQUFMLENBQVdDLEVBQXBDOztBQUVBLFdBQUtDLEtBQUwsR0FBYSxvQkFBVSxFQUFFQyxTQUFTLEtBQVgsRUFBVixDQUFiO0FBQ0EsV0FBS2QsR0FBTCxDQUFTTSxHQUFULENBQWFJLFdBQWIsQ0FBeUIsS0FBS0csS0FBTCxDQUFXRCxFQUFwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7OEJBRVM7QUFDUkcsY0FBUUMsR0FBUixDQUFZLFNBQVo7O0FBRUEsVUFBSUMsUUFBUSxtQkFBUyxFQUFFQyxPQUFPLE9BQVQsRUFBVCxDQUFaO0FBQ0FELFlBQU1FLENBQU4sR0FBVSxFQUFWO0FBQ0FGLFlBQU1HLENBQU4sR0FBVSxHQUFWO0FBQ0FILFlBQU1JLEVBQU4sQ0FBUyxLQUFULEVBQWdCLFVBQUNDLEtBQUQsRUFBVyxDQUFFLENBQTdCOztBQUVBLFdBQUtYLEtBQUwsQ0FBV1ksR0FBWCxDQUFlTixLQUFmO0FBQ0Q7OztrQ0FFYU8sTSxFQUFRO0FBQ3BCLFVBQUlBLE9BQU9DLE1BQVgsRUFBbUI7QUFDakIsWUFBSUMsVUFBVSxzQkFBWSxFQUFFRixRQUFRQSxNQUFWLEVBQVosQ0FBZDtBQUNBLGFBQUtiLEtBQUwsQ0FBV1ksR0FBWCxDQUFlRyxPQUFmO0FBQ0Q7QUFDRjs7O2dDQUVXO0FBQ1YsVUFBSSxLQUFLQyxJQUFMLEtBQWMsT0FBbEIsRUFBMkI7QUFDekIsYUFBS2QsS0FBTCxDQUFXZSxVQUFYLENBQXNCLElBQXRCO0FBQ0EsYUFBS2YsS0FBTCxDQUFXZ0IsS0FBWDtBQUNBLGFBQUtGLElBQUwsR0FBWSxPQUFaO0FBQ0Q7QUFDRjs7O2dDQUVXO0FBQ1YsVUFBSSxLQUFLQSxJQUFMLElBQWEsT0FBakIsRUFBMEI7QUFDeEIsWUFBSUgsU0FBUyxLQUFLWCxLQUFMLENBQVdpQixTQUFYLEVBQWI7QUFDQSxhQUFLQyxhQUFMLENBQW1CUCxNQUFuQjs7QUFFQSxhQUFLWCxLQUFMLENBQVdlLFVBQVgsQ0FBc0IsS0FBdEI7QUFDQSxhQUFLZixLQUFMLENBQVdnQixLQUFYO0FBQ0EsYUFBS0YsSUFBTCxHQUFZLElBQVo7QUFDRDtBQUNGOzs7a0NBRWE7QUFDWixVQUFJLEtBQUtBLElBQUwsS0FBYyxPQUFsQixFQUEyQjtBQUN6QixhQUFLSyxTQUFMO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0MsU0FBTDtBQUNEO0FBQ0Y7Ozs4QkFFU1gsSyxFQUFPO0FBQ2YsVUFBSUEsTUFBTVksR0FBTixJQUFhLEdBQWIsSUFBb0IsQ0FBQ1osTUFBTWEsTUFBL0IsRUFBdUM7QUFDckMsYUFBS0MsV0FBTDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUksS0FBS1QsSUFBTCxJQUFhLE9BQWpCLEVBQTBCO0FBQ3hCLGVBQUtkLEtBQUwsQ0FBV3dCLFdBQVgsQ0FBdUJmLEtBQXZCO0FBQ0Q7QUFDRjtBQUNGOzs7Z0NBRVdBLEssRUFBTztBQUNqQixVQUFJQSxNQUFNZ0IsSUFBTixJQUFjLFNBQWxCLEVBQTZCO0FBQzNCLGFBQUtDLFNBQUwsQ0FBZWpCLEtBQWY7QUFDRDtBQUNGOzs7Ozs7QUFHSGYsU0FBU0YsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbERVLFVBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBLE1BQUlWLE1BQU0sSUFBSVAsR0FBSixFQUFWO0FBQ0FPLE1BQUlrQyxJQUFKO0FBQ0QsQ0FKRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1DLE87OztBQUNKLHFCQUF1QjtBQUFBLFFBQVhDLE1BQVcsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFHckIsVUFBS2xCLE1BQUwsR0FBY2tCLE9BQU9sQixNQUFQLElBQWlCLEVBQS9COztBQUVBLFVBQUtaLEVBQUwsQ0FBUStCLEtBQVIsQ0FBY0MsYUFBZCxHQUE4QixNQUE5Qjs7QUFFQSxVQUFLQyxNQUFMO0FBUHFCO0FBUXRCOzs7O2dDQUVXO0FBQ1YsVUFBSUMsYUFBSjs7QUFFQSxVQUFJLEtBQUt0QixNQUFMLENBQVlDLE1BQWhCLEVBQXdCO0FBQ3RCLFlBQUlzQixPQUFPQyxPQUFPQyxpQkFBbEI7QUFDQSxZQUFJQyxPQUFPRixPQUFPQyxpQkFBbEI7QUFDQSxZQUFJRSxPQUFPSCxPQUFPSSxpQkFBbEI7QUFDQSxZQUFJQyxPQUFPTCxPQUFPSSxpQkFBbEI7O0FBRUEsWUFBSUUsUUFBUSxJQUFaOztBQUVBLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUsvQixNQUFMLENBQVlDLE1BQWhDLEVBQXdDOEIsR0FBeEMsRUFBNkM7QUFDM0MsY0FBSUMsUUFBUSxLQUFLaEMsTUFBTCxDQUFZK0IsQ0FBWixDQUFaO0FBQ0EsY0FBSUUsU0FBU0QsTUFBTUUsU0FBTixFQUFiO0FBQ0EsY0FBSUQsTUFBSixFQUFZO0FBQ1ZBLG1CQUFPdEMsQ0FBUCxJQUFZcUMsTUFBTXJDLENBQWxCO0FBQ0FzQyxtQkFBT3JDLENBQVAsSUFBWW9DLE1BQU1wQyxDQUFsQjtBQUNBO0FBQ0EyQixtQkFBUVUsT0FBT3RDLENBQVAsR0FBVzRCLElBQVgsR0FBa0JVLE9BQU90QyxDQUF6QixHQUE2QjRCLElBQXJDO0FBQ0FHLG1CQUFRTyxPQUFPckMsQ0FBUCxHQUFXOEIsSUFBWCxHQUFrQk8sT0FBT3JDLENBQXpCLEdBQTZCOEIsSUFBckM7QUFDQUMsbUJBQVFNLE9BQU90QyxDQUFQLEdBQVdzQyxPQUFPRSxLQUFsQixHQUEwQlIsSUFBMUIsR0FBaUNNLE9BQU90QyxDQUFQLEdBQVdzQyxPQUFPRSxLQUFuRCxHQUEyRFIsSUFBbkU7QUFDQUUsbUJBQVFJLE9BQU9yQyxDQUFQLEdBQVdxQyxPQUFPRyxNQUFsQixHQUEyQlAsSUFBM0IsR0FBa0NJLE9BQU9yQyxDQUFQLEdBQVdxQyxPQUFPRyxNQUFwRCxHQUE2RFAsSUFBckU7QUFDQTtBQUNBQyxvQkFBUSxLQUFSO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJLENBQUNBLEtBQUwsRUFBWVIsT0FBTyx3QkFBY0MsSUFBZCxFQUFvQkcsSUFBcEIsRUFBMEJDLE9BQU9KLElBQWpDLEVBQXVDTSxPQUFPSCxJQUE5QyxDQUFQO0FBQ2I7O0FBRUQsYUFBT0osSUFBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtsQyxFQUFMLENBQVFpRCxVQUFmO0FBQTJCLGFBQUtqRCxFQUFMLENBQVFrRCxXQUFSLENBQW9CLEtBQUtsRCxFQUFMLENBQVFpRCxVQUE1QjtBQUEzQixPQUVBLElBQUlKLFNBQVMsS0FBS0MsU0FBTCxFQUFiO0FBQ0EsVUFBSUQsTUFBSixFQUFZO0FBQ1YsYUFBS3RDLENBQUwsR0FBU3NDLE9BQU90QyxDQUFoQjtBQUNBLGFBQUtDLENBQUwsR0FBU3FDLE9BQU9yQyxDQUFoQjs7QUFFQSxhQUFLUixFQUFMLENBQVErQixLQUFSLENBQWNnQixLQUFkLEdBQXNCRixPQUFPRSxLQUFQLEdBQWUsSUFBckM7QUFDQSxhQUFLL0MsRUFBTCxDQUFRK0IsS0FBUixDQUFjaUIsTUFBZCxHQUF1QkgsT0FBT0csTUFBUCxHQUFnQixJQUF2Qzs7QUFFQSxZQUFJRyxRQUFRLGNBQUlDLEdBQUosRUFBWjtBQUNBRCxjQUFNRSxZQUFOLENBQW1CLE9BQW5CLEVBQTRCUixPQUFPRSxLQUFuQztBQUNBSSxjQUFNRSxZQUFOLENBQW1CLFFBQW5CLEVBQTZCUixPQUFPRyxNQUFwQztBQUNBRyxjQUFNRSxZQUFOLENBQW1CLFNBQW5CLEVBQThCLFNBQVNSLE9BQU9FLEtBQWhCLEdBQXdCLEdBQXhCLEdBQThCRixPQUFPRyxNQUFuRTtBQUNBRyxjQUFNRSxZQUFOLENBQW1CLGdCQUFuQixFQUFxQyxNQUFyQzs7QUFFQSxhQUFLLElBQUlWLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLL0IsTUFBTCxDQUFZQyxNQUFoQyxFQUF3QzhCLEdBQXhDLEVBQTZDO0FBQzNDLGNBQUlDLFFBQVEsS0FBS2hDLE1BQUwsQ0FBWStCLENBQVosQ0FBWjs7QUFFQSxjQUFJVyxLQUFLLEdBQVQ7O0FBRUEsZUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlYLE1BQU1ZLE1BQU4sQ0FBYTNDLE1BQWpDLEVBQXlDMEMsR0FBekMsRUFBOEM7QUFDNUMsZ0JBQUlFLElBQUliLE1BQU1ZLE1BQU4sQ0FBYUQsQ0FBYixDQUFSO0FBQ0EsZ0JBQUlBLElBQUksQ0FBUixFQUFXRCxNQUFNLEdBQU47QUFDWEEsa0JBQU9HLEVBQUVsRCxDQUFGLEdBQU1zQyxPQUFPdEMsQ0FBZCxHQUFtQixHQUFuQixJQUEwQmtELEVBQUVqRCxDQUFGLEdBQU1xQyxPQUFPckMsQ0FBdkMsSUFBNEMsR0FBbEQ7QUFDRDtBQUNELGNBQUlvQyxNQUFNYyxNQUFWLEVBQWtCO0FBQ2hCSixrQkFBTSxHQUFOO0FBQ0Q7O0FBRURuRCxrQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0J3QyxNQUFNZSxJQUExQjs7QUFFQSxjQUFJQyxJQUFJLGNBQUlDLE9BQUosQ0FBWSxHQUFaLENBQVI7QUFDQTtBQUNBRCxZQUFFUCxZQUFGLENBQWUsZ0JBQWYsRUFBaUMsU0FBakM7QUFDQSxjQUFJUyxPQUFPLGNBQUlELE9BQUosQ0FBWSxNQUFaLEVBQW9CLEVBQUVFLEdBQUdULEVBQUwsRUFBU0ssTUFBT2YsTUFBTWUsSUFBTixHQUFhZixNQUFNZSxJQUFuQixHQUEwQixNQUExQyxFQUFtREssUUFBUXBCLE1BQU1vQixNQUFqRSxFQUFwQixDQUFYO0FBQ0FGLGVBQUtULFlBQUwsQ0FBa0IsY0FBbEIsRUFBa0MsQ0FBbEM7QUFDQU8sWUFBRTlELFdBQUYsQ0FBY2dFLElBQWQ7O0FBRUFYLGdCQUFNckQsV0FBTixDQUFrQjhELENBQWxCO0FBQ0Q7QUFDRCxhQUFLNUQsRUFBTCxDQUFRRixXQUFSLENBQW9CcUQsS0FBcEI7QUFDRDtBQUNGOzs7Ozs7a0JBR1l0QixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHZjs7OztBQUNBOzs7Ozs7OztJQUVNb0MsSztBQUNKLG1CQUF1QjtBQUFBLFFBQVhuQyxNQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JCLFNBQUswQixNQUFMLEdBQWMsRUFBZDs7QUFFQSxRQUFJQSxTQUFTMUIsT0FBTzBCLE1BQXBCO0FBQ0EsUUFBSUEsTUFBSixFQUFZO0FBQ1YsV0FBSyxJQUFJYixJQUFJLENBQWIsRUFBZ0JBLElBQUlhLE9BQU8zQyxNQUEzQixFQUFtQzhCLEdBQW5DLEVBQXdDO0FBQ3RDLFlBQUljLElBQUlELE9BQU9iLENBQVAsQ0FBUjtBQUNBLGFBQUthLE1BQUwsQ0FBWVUsSUFBWixDQUFpQixvQkFBVVQsRUFBRWxELENBQVosRUFBZWtELEVBQUVqRCxDQUFqQixDQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBS21ELElBQUwsR0FBWTdCLE9BQU82QixJQUFQLElBQWUsSUFBM0I7QUFDQSxTQUFLSyxNQUFMLEdBQWNsQyxPQUFPa0MsTUFBUCxJQUFpQixJQUEvQjtBQUNBLFNBQUtHLFdBQUwsR0FBbUJyQyxPQUFPcUMsV0FBUCxJQUFzQixDQUF6QztBQUNBLFNBQUtULE1BQUwsR0FBYzVCLE9BQU80QixNQUFQLElBQWlCLEtBQS9COztBQUVBLFNBQUtuRCxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixVQUFJMEIsT0FBTyxJQUFYOztBQUVBLFVBQUlLLE9BQU9ILE9BQU9JLGlCQUFsQjtBQUNBLFVBQUlMLE9BQU9DLE9BQU9DLGlCQUFsQjtBQUNBLFVBQUlJLE9BQU9MLE9BQU9JLGlCQUFsQjtBQUNBLFVBQUlGLE9BQU9GLE9BQU9DLGlCQUFsQjs7QUFFQSxVQUFJLEtBQUttQixNQUFMLENBQVkzQyxNQUFoQixFQUF3QjtBQUN0QixhQUFLLElBQUk4QixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2EsTUFBTCxDQUFZM0MsTUFBaEMsRUFBd0M4QixHQUF4QyxFQUE2QztBQUMzQyxjQUFJYyxJQUFJLEtBQUtELE1BQUwsQ0FBWWIsQ0FBWixDQUFSO0FBQ0FKLGlCQUFPa0IsRUFBRWxELENBQUYsR0FBTWdDLElBQU4sR0FBYWtCLEVBQUVsRCxDQUFmLEdBQW1CZ0MsSUFBMUI7QUFDQUosaUJBQU9zQixFQUFFbEQsQ0FBRixHQUFNNEIsSUFBTixHQUFhc0IsRUFBRWxELENBQWYsR0FBbUI0QixJQUExQjtBQUNBTSxpQkFBT2dCLEVBQUVqRCxDQUFGLEdBQU1pQyxJQUFOLEdBQWFnQixFQUFFakQsQ0FBZixHQUFtQmlDLElBQTFCO0FBQ0FILGlCQUFPbUIsRUFBRWpELENBQUYsR0FBTThCLElBQU4sR0FBYW1CLEVBQUVqRCxDQUFmLEdBQW1COEIsSUFBMUI7QUFDRDtBQUNESixlQUFPLHdCQUFjQyxJQUFkLEVBQW9CRyxJQUFwQixFQUEwQkMsT0FBT0osSUFBakMsRUFBdUNNLE9BQU9ILElBQTlDLENBQVA7QUFDRDs7QUFFRCxhQUFPSixJQUFQO0FBQ0Q7Ozs7OztrQkFHWStCLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NmOzs7Ozs7OztJQUVNRyxXOzs7QUFDSix5QkFBYztBQUFBOztBQUFBOztBQUdaLFVBQUtwRSxFQUFMLEdBQVVMLFNBQVMwRSxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQSxVQUFLckUsRUFBTCxDQUFRc0UsU0FBUixDQUFrQjNELEdBQWxCLENBQXNCLGNBQXRCO0FBQ0EsVUFBS1gsRUFBTCxDQUFRUCxnQkFBUixDQUF5QixXQUF6Qjs7QUFFQSxVQUFLYyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFVBQUtDLENBQUwsR0FBUyxDQUFUO0FBUlk7QUFTYjs7OzswQkFvQks7QUFDSixhQUFPLEtBQUtSLEVBQVo7QUFDRDs7O21DQUVjLENBQ2Q7Ozs2QkFFUTtBQUNQLFdBQUtBLEVBQUwsQ0FBUXNFLFNBQVIsQ0FBa0IzRCxHQUFsQixDQUFzQixVQUF0QjtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLWCxFQUFMLENBQVFzRSxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixVQUF6QjtBQUNEOzs7Z0NBRVc7QUFDVi9FLGFBQU9DLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLElBQW5DO0FBQ0FELGFBQU9DLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLElBQXJDO0FBQ0FELGFBQU9DLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLElBQWhDO0FBQ0EsV0FBSytFLElBQUwsR0FBWSxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSaEYsYUFBT2lGLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDLElBQXRDO0FBQ0FqRixhQUFPaUYsbUJBQVAsQ0FBMkIsV0FBM0IsRUFBd0MsSUFBeEM7QUFDQWpGLGFBQU9pRixtQkFBUCxDQUEyQixNQUEzQixFQUFtQyxJQUFuQztBQUNBLFdBQUtELElBQUwsR0FBWSxLQUFaO0FBQ0Q7OztnQ0FFVzlELEssRUFBTztBQUNqQlAsY0FBUUMsR0FBUixDQUFZTSxNQUFNZ0UsTUFBbEI7QUFDQSxXQUFLQyxJQUFMLENBQVUsV0FBVixFQUF1QixJQUF2QjtBQUNBLFdBQUtDLFNBQUw7QUFDRDs7OzhCQUVTbEUsSyxFQUFPO0FBQ2YsV0FBS21FLE9BQUw7QUFDRDs7O2dDQUVXbkUsSyxFQUFPO0FBQ2pCLFVBQUksS0FBSzhELElBQVQsRUFBZTtBQUNiLGFBQUtqRSxDQUFMLElBQVVHLE1BQU1vRSxTQUFoQjtBQUNBLGFBQUt0RSxDQUFMLElBQVVFLE1BQU1xRSxTQUFoQjtBQUNEO0FBQ0Y7OzsyQkFFTXJFLEssRUFBTztBQUNaLFdBQUttRSxPQUFMO0FBQ0Q7OztnQ0FFV25FLEssRUFBTztBQUNqQixVQUFJQSxNQUFNZ0IsSUFBTixJQUFjLFdBQWxCLEVBQStCO0FBQzdCLGFBQUtzRCxXQUFMLENBQWlCdEUsS0FBakI7QUFDRCxPQUZELE1BR0ssSUFBSUEsTUFBTWdCLElBQU4sSUFBYyxTQUFsQixFQUE2QjtBQUNoQyxhQUFLdUQsU0FBTCxDQUFldkUsS0FBZjtBQUNELE9BRkksTUFHQSxJQUFJQSxNQUFNZ0IsSUFBTixJQUFjLFdBQWxCLEVBQStCO0FBQ2xDLGFBQUt3RCxXQUFMLENBQWlCeEUsS0FBakI7QUFDRCxPQUZJLE1BR0EsSUFBSUEsTUFBTWdCLElBQU4sSUFBYyxNQUFsQixFQUEwQjtBQUM3QixhQUFLeUQsTUFBTCxDQUFZekUsS0FBWjtBQUNEO0FBQ0Y7Ozt3QkFqRk87QUFDTixhQUFPLEtBQUswRSxFQUFaO0FBQ0QsSztzQkFNSzlFLEssRUFBTztBQUNYLFdBQUs4RSxFQUFMLEdBQVU5RSxLQUFWO0FBQ0EsV0FBS04sRUFBTCxDQUFRK0IsS0FBUixDQUFjc0QsSUFBZCxHQUFxQixLQUFLRCxFQUFMLEdBQVUsSUFBL0I7QUFDRDs7O3dCQVBPO0FBQ04sYUFBTyxLQUFLRSxFQUFaO0FBQ0QsSztzQkFPS2hGLEssRUFBTztBQUNYLFdBQUtnRixFQUFMLEdBQVVoRixLQUFWO0FBQ0EsV0FBS04sRUFBTCxDQUFRK0IsS0FBUixDQUFjd0QsR0FBZCxHQUFvQixLQUFLRCxFQUFMLEdBQVUsSUFBOUI7QUFDRDs7Ozs7O2tCQW9FWWxCLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdmOzs7Ozs7Ozs7Ozs7SUFFTW9CLEk7OztBQUNKLGtCQUF1QjtBQUFBLFFBQVgxRCxNQUFXLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUE7O0FBRXJCLFVBQUsyRCxPQUFMLENBQWEzRCxPQUFPNEQsSUFBUCxJQUFlLEVBQTVCO0FBQ0EsVUFBS0MsT0FBTCxDQUFhN0QsT0FBT3hCLEtBQXBCO0FBSHFCO0FBSXRCOzs7OzRCQUVPQSxLLEVBQU87QUFDYixXQUFLb0YsSUFBTCxHQUFZcEYsS0FBWjtBQUNBLFdBQUtOLEVBQUwsQ0FBUStCLEtBQVIsQ0FBYzZELFFBQWQsR0FBeUIsS0FBS0YsSUFBTCxHQUFZLElBQXJDO0FBQ0Q7Ozs0QkFFT3BGLEssRUFBTztBQUNiLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtOLEVBQUwsQ0FBUTZGLFNBQVIsR0FBb0IsS0FBS3ZGLEtBQXpCO0FBQ0Q7Ozs7OztrQkFHWWtGLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25CVE0sSyxHQUNKLGVBQVlwRSxJQUFaLEVBQWtCSSxNQUFsQixFQUEwQjtBQUFBOztBQUN4QixPQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLSSxNQUFMLEdBQWNBLE1BQWQ7QUFDRCxDOztJQUdHaUUsZTtBQUNKLDZCQUFjO0FBQUE7O0FBQ1osU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNEOzs7O3lCQUNJdEUsSSxFQUFlO0FBQUEsd0NBQU51RSxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDbEIsV0FBSyxJQUFJdEQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtxRCxTQUFMLENBQWVuRixNQUFuQyxFQUEyQzhCLEdBQTNDLEVBQWdEO0FBQzlDLFlBQUl1RCxXQUFXLEtBQUtGLFNBQUwsQ0FBZXJELENBQWYsQ0FBZjtBQUNBLFlBQUl1RCxTQUFTeEUsSUFBVCxJQUFpQkEsSUFBckIsRUFBMkI7QUFDekJ3RSxtQkFBU0MsUUFBVCxpQkFBcUJGLElBQXJCO0FBQ0Q7QUFDRjtBQUNGOzs7dUJBQ0V2RSxJLEVBQU15RSxRLEVBQVU7QUFDakIsV0FBS0gsU0FBTCxDQUFlOUIsSUFBZixDQUFvQixFQUFFeEMsTUFBTUEsSUFBUixFQUFjeUUsVUFBVUEsUUFBeEIsRUFBcEI7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUIsRUFBRU4sZ0NBQUYsRUFBbUJELFlBQW5CLEVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN4Qk1RLE07QUFDSixrQkFBWS9GLENBQVosRUFBZUMsQ0FBZixFQUFrQitGLENBQWxCLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtoRyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLK0YsQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7Ozs7MENBRXFCQyxFLEVBQUlDLEUsRUFBSUMsRSxFQUFJQyxFLEVBQUksQ0FFckM7OztrQ0FFYXBHLEMsRUFBR0MsQyxFQUFHO0FBQ2xCLFVBQUlvRyxLQUFLckcsSUFBSSxLQUFLQSxDQUFsQjtBQUNBLFVBQUlzRyxLQUFLckcsSUFBSSxLQUFLQSxDQUFsQjtBQUNBLFVBQUl1RCxJQUFJK0MsS0FBS0MsSUFBTCxDQUFVSCxLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQXpCLENBQVI7QUFDQSxhQUFPOUMsSUFBSSxLQUFLd0MsQ0FBaEI7QUFDRDs7Ozs7O2tCQUdZRCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbkJUVSxLO0FBQ0osaUJBQVl6RyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7Ozs7NkJBRVF5RyxLLEVBQU87QUFDZCxVQUFJTCxLQUFLLEtBQUtyRyxDQUFMLEdBQVMwRyxNQUFNMUcsQ0FBeEI7QUFDQSxVQUFJc0csS0FBSyxLQUFLckcsQ0FBTCxHQUFTeUcsTUFBTXpHLENBQXhCO0FBQ0EsYUFBT3NHLEtBQUtDLElBQUwsQ0FBVUgsS0FBS0EsRUFBTCxHQUFVQyxLQUFLQSxFQUF6QixDQUFQO0FBQ0Q7Ozs7OztrQkFHWUcsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNiVEUsUyxHQUNKLG1CQUFZM0csQ0FBWixFQUFlQyxDQUFmLEVBQWtCdUMsS0FBbEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQUE7O0FBQy9CLE9BQUt6QyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxPQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxPQUFLdUMsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0QsQzs7a0JBR1lrRSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVFRDLE07QUFDSixrQkFBWTVHLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUFBOztBQUNoQixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7Ozt3QkFFRzRHLE0sRUFBUTtBQUNWLGFBQVEsS0FBSzdHLENBQUwsR0FBUzZHLE9BQU83RyxDQUFoQixHQUFvQixLQUFLQyxDQUFMLEdBQVM0RyxPQUFPNUcsQ0FBNUM7QUFDRDs7OzBCQUVLO0FBQ0osYUFBT3NHLEtBQUtDLElBQUwsQ0FBVSxLQUFLeEcsQ0FBTCxHQUFTLEtBQUtBLENBQWQsR0FBa0IsS0FBS0MsQ0FBTCxHQUFTLEtBQUtBLENBQTFDLENBQVA7QUFDRDs7OzRCQUVPNEcsTSxFQUFRO0FBQ2QsVUFBSXJELElBQUlxRCxPQUFPQyxHQUFQLENBQVdELE1BQVgsQ0FBUjtBQUNBLFVBQUlyRCxJQUFJLENBQVIsRUFBVztBQUNULFlBQUl1RCxRQUFRLEtBQUtELEdBQUwsQ0FBU0QsTUFBVCxJQUFtQnJELENBQS9CO0FBQ0E7QUFDQSxZQUFJdUQsU0FBUyxDQUFULElBQWNBLFNBQVMsQ0FBM0IsRUFBOEI7QUFDNUIsaUJBQU8sSUFBSUgsTUFBSixDQUFXQyxPQUFPN0csQ0FBUCxHQUFXK0csS0FBdEIsRUFBNkJGLE9BQU81RyxDQUFQLEdBQVc4RyxLQUF4QyxDQUFQO0FBQ0Q7QUFDRjtBQUNELGFBQU8sSUFBUDtBQUNEOzs7Ozs7a0JBR1lILE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJmOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJSSxjQUFjLENBQWxCO0FBQ0EsSUFBSUMsU0FBUyxDQUNYLE9BRFc7QUFFWDtBQUNBLFNBSFc7QUFJWDtBQUNBLFNBTFc7QUFNWDtBQUNBLFNBUFc7QUFRWDtBQUNBLFNBVFc7QUFVWDtBQUNBLE9BWFcsQ0FBYjs7SUFjTUMsSzs7O0FBQ0osbUJBQXVCO0FBQUEsUUFBWDNGLE1BQVcsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFHckIsVUFBSzBCLE1BQUwsR0FBYyxFQUFkO0FBQ0EsVUFBSzVDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsVUFBSytDLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBS0ssTUFBTCxHQUFjd0QsT0FBTyxDQUFQLENBQWQ7O0FBRUEsVUFBS3hILEVBQUwsR0FBVUwsU0FBUzBFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLFVBQUtyRSxFQUFMLENBQVFzRSxTQUFSLENBQWtCM0QsR0FBbEIsQ0FBc0IsT0FBdEI7O0FBRUEsVUFBSytHLE1BQUwsR0FBYy9ILFNBQVMwRSxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxVQUFLc0QsWUFBTDs7QUFFQSxVQUFLM0gsRUFBTCxDQUFRRixXQUFSLENBQW9CLE1BQUs0SCxNQUF6Qjs7QUFFQSxVQUFLMUcsVUFBTCxDQUFnQmMsT0FBTzVCLE9BQVAsS0FBbUIwSCxTQUFuQixHQUErQjlGLE9BQU81QixPQUF0QyxHQUFnRCxJQUFoRTs7QUFFQSxVQUFLOEYsU0FBTCxHQUFpQixDQUFFLFdBQUYsRUFBZSxXQUFmLEVBQTRCLFNBQTVCLEVBQXVDLFVBQXZDLEVBQW1ELGFBQW5ELENBQWpCOztBQUVBLFVBQUs2QixNQUFMLEdBQWNsSSxTQUFTMEUsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0EsVUFBS3dELE1BQUwsQ0FBWXZELFNBQVosQ0FBc0IzRCxHQUF0QixDQUEwQixjQUExQjs7QUFFQSxVQUFLWCxFQUFMLENBQVFGLFdBQVIsQ0FBb0IsTUFBSytILE1BQXpCO0FBdkJxQjtBQXdCdEI7Ozs7bUNBRWM7QUFDYixXQUFLLElBQUlsRixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3FELFNBQUwsQ0FBZW5GLE1BQW5DLEVBQTJDOEIsR0FBM0MsRUFBZ0Q7QUFDOUNuRCxlQUFPQyxnQkFBUCxDQUF3QixLQUFLdUcsU0FBTCxDQUFlckQsQ0FBZixDQUF4QixFQUEyQyxJQUEzQztBQUNEO0FBQ0Y7OztzQ0FFaUI7QUFDaEIsV0FBSyxJQUFJQSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3FELFNBQUwsQ0FBZW5GLE1BQW5DLEVBQTJDOEIsR0FBM0MsRUFBZ0Q7QUFDOUNuRCxlQUFPaUYsbUJBQVAsQ0FBMkIsS0FBS3VCLFNBQUwsQ0FBZXJELENBQWYsQ0FBM0IsRUFBOEMsSUFBOUM7QUFDRDtBQUNGOzs7K0JBRVV6QyxPLEVBQVM7QUFDbEIsVUFBSSxLQUFLQSxPQUFMLEtBQWlCQSxPQUFyQixFQUE4QjtBQUM1QixhQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxZQUFJLEtBQUtBLE9BQVQsRUFBa0I7QUFDaEIsZUFBS0YsRUFBTCxDQUFRK0IsS0FBUixDQUFjK0YsT0FBZCxHQUF3QixPQUF4QjtBQUNBLGVBQUtDLFlBQUw7QUFDRCxTQUhELE1BR087QUFDTCxlQUFLL0gsRUFBTCxDQUFRK0IsS0FBUixDQUFjK0YsT0FBZCxHQUF3QixNQUF4QjtBQUNBLGVBQUtFLGVBQUw7QUFDRDtBQUNGO0FBQ0Y7OzttQ0FFYztBQUNiLFdBQUtOLE1BQUwsQ0FBWTNFLEtBQVosR0FBb0J2RCxPQUFPeUksVUFBM0I7QUFDQSxXQUFLUCxNQUFMLENBQVkxRSxNQUFaLEdBQXFCeEQsT0FBTzBJLFdBQTVCO0FBQ0Q7Ozs2QkFFUTFCLEUsRUFBSUMsRSxFQUFJQyxFLEVBQUlDLEUsRUFBSXdCLEssRUFBTztBQUM5QixVQUFJQyxNQUFNLEtBQUtWLE1BQUwsQ0FBWVcsVUFBWixDQUF1QixJQUF2QixDQUFWO0FBQ0FELFVBQUlFLFdBQUosR0FBa0JILFNBQVMsT0FBM0I7QUFDQUMsVUFBSUcsU0FBSjtBQUNBSCxVQUFJSSxNQUFKLENBQVdoQyxFQUFYLEVBQWVDLEVBQWY7QUFDQTJCLFVBQUlLLE1BQUosQ0FBVy9CLEVBQVgsRUFBZUMsRUFBZjtBQUNBeUIsVUFBSXBFLE1BQUo7QUFDRDs7OytCQUVtQjtBQUFBLFVBQVhsQyxNQUFXLHVFQUFKLEVBQUk7O0FBQ2xCLFVBQUkwQixTQUFTMUIsT0FBTzBCLE1BQVAsSUFBaUIsRUFBOUI7QUFDQSxVQUFJNEUsTUFBTSxLQUFLVixNQUFMLENBQVlXLFVBQVosQ0FBdUIsSUFBdkIsQ0FBVjs7QUFFQUQsVUFBSU0sSUFBSjs7QUFFQU4sVUFBSUUsV0FBSixHQUFrQnhHLE9BQU9rQyxNQUFQLEtBQWtCNEQsU0FBbEIsR0FBK0I5RixPQUFPa0MsTUFBUCxHQUFnQmxDLE9BQU9rQyxNQUF2QixHQUFnQyxhQUEvRCxHQUFnRixhQUFsRztBQUNBb0UsVUFBSU8sU0FBSixHQUFnQjdHLE9BQU82QixJQUFQLEtBQWdCaUUsU0FBaEIsR0FBNkI5RixPQUFPNkIsSUFBUCxHQUFjN0IsT0FBTzZCLElBQXJCLEdBQTRCLGFBQXpELEdBQTBFLGFBQTFGOztBQUVBeUUsVUFBSUcsU0FBSjtBQUNBLFdBQUssSUFBSTVGLElBQUksQ0FBYixFQUFnQkEsSUFBSWEsT0FBTzNDLE1BQTNCLEVBQW1DOEIsR0FBbkMsRUFBd0M7QUFDdEMsWUFBSWMsSUFBSUQsT0FBT2IsQ0FBUCxDQUFSO0FBQ0EsWUFBSUEsS0FBSyxDQUFULEVBQ0V5RixJQUFJSSxNQUFKLENBQVcvRSxFQUFFbEQsQ0FBYixFQUFnQmtELEVBQUVqRCxDQUFsQixFQURGLEtBR0U0SCxJQUFJSyxNQUFKLENBQVdoRixFQUFFbEQsQ0FBYixFQUFnQmtELEVBQUVqRCxDQUFsQjtBQUNIO0FBQ0QsVUFBSXNCLE9BQU80QixNQUFYLEVBQW1CMEUsSUFBSVEsU0FBSjtBQUNuQlIsVUFBSXpFLElBQUo7QUFDQXlFLFVBQUlwRSxNQUFKOztBQUVBb0UsVUFBSVMsT0FBSjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJVCxNQUFNLEtBQUtWLE1BQUwsQ0FBWVcsVUFBWixDQUF1QixJQUF2QixDQUFWO0FBQ0FELFVBQUlVLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUtwQixNQUFMLENBQVkzRSxLQUFoQyxFQUF1QyxLQUFLMkUsTUFBTCxDQUFZMUUsTUFBbkQ7O0FBRUEsV0FBSyxJQUFJTCxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSy9CLE1BQUwsQ0FBWUMsTUFBaEMsRUFBd0M4QixHQUF4QyxFQUE2QztBQUMzQyxZQUFJQyxRQUFRLEtBQUtoQyxNQUFMLENBQVkrQixDQUFaLENBQVo7QUFDQSxhQUFLb0csUUFBTCxDQUFjLEVBQUV2RixRQUFRWixNQUFNWSxNQUFoQixFQUF3QkcsTUFBTWYsTUFBTWUsSUFBcEMsRUFBMENLLFFBQVFwQixNQUFNb0IsTUFBeEQsRUFBZ0VOLFFBQVFkLE1BQU1jLE1BQTlFLEVBQWQ7QUFDRDs7QUFFRCxVQUFJLEtBQUtGLE1BQUwsQ0FBWTNDLE1BQWhCLEVBQXdCO0FBQ3RCLGFBQUtrSSxRQUFMLENBQWMsRUFBRXZGLFFBQVEsS0FBS0EsTUFBZixFQUF1QkcsTUFBTSxLQUFLQSxJQUFsQyxFQUF3Q0ssUUFBUSxLQUFLQSxNQUFyRCxFQUFkOztBQUVBb0UsWUFBSUUsV0FBSixHQUFrQixNQUFsQjtBQUNBRixZQUFJRyxTQUFKO0FBQ0EsWUFBSTlFLElBQUksS0FBS0QsTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWTNDLE1BQVosR0FBcUIsQ0FBakMsQ0FBUjtBQUNBdUgsWUFBSUksTUFBSixDQUFXL0UsRUFBRWxELENBQWIsRUFBZ0JrRCxFQUFFakQsQ0FBbEI7QUFDQTRILFlBQUlLLE1BQUosQ0FBVyxLQUFLTyxPQUFoQixFQUF5QixLQUFLQyxPQUE5QjtBQUNBYixZQUFJcEUsTUFBSjs7QUFFQSxZQUFJa0YsS0FBSyxvQkFBVSxLQUFLRixPQUFmLEVBQXdCLEtBQUtDLE9BQTdCLENBQVQ7QUFDQSxZQUFJRSxLQUFLLEtBQUszRixNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsWUFBSTBGLEdBQUdFLFFBQUgsQ0FBWUQsRUFBWixJQUFrQjVCLFdBQXRCLEVBQW1DO0FBQ2pDYSxjQUFJaUIsR0FBSixDQUFRRixHQUFHNUksQ0FBWCxFQUFjNEksR0FBRzNJLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCc0csS0FBS3dDLEVBQUwsR0FBVSxDQUFwQztBQUNBbEIsY0FBSXBFLE1BQUo7QUFDRDtBQUNGOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtwRCxNQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFdBQUs0QyxNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUs1QyxNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUsySSxNQUFMO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUsvRixNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUsrRixNQUFMO0FBQ0Q7OztnQ0FFdUI7QUFBQSxVQUFkN0YsTUFBYyx1RUFBUCxLQUFPOztBQUN0QixVQUFJLEtBQUtGLE1BQUwsQ0FBWTNDLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsWUFBSStCLFFBQVEsb0JBQVUsRUFBRVksUUFBUSxLQUFLQSxNQUFmLEVBQXVCRSxRQUFRQSxNQUEvQixFQUF1Q0MsTUFBTSxLQUFLQSxJQUFsRCxFQUF3REssUUFBUSxLQUFLQSxNQUFyRSxFQUFWLENBQVo7QUFDQSxhQUFLcEQsTUFBTCxDQUFZc0QsSUFBWixDQUFpQnRCLEtBQWpCO0FBQ0E7QUFDRDtBQUNELFdBQUtZLE1BQUwsR0FBYyxFQUFkO0FBQ0EsV0FBSytGLE1BQUw7QUFDRDs7OzRCQUVPNUYsSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBSzRGLE1BQUw7QUFDRDs7OzhCQUVTdkYsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFdBQUt1RixNQUFMO0FBQ0Q7OztnQ0FFVzdJLEssRUFBTztBQUNqQixVQUFJQSxNQUFNOEksTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNyQixZQUFJL0YsSUFBSSxvQkFBVS9DLE1BQU0rSSxPQUFoQixFQUF5Qi9JLE1BQU1nSixPQUEvQixDQUFSO0FBQ0EsWUFBSSxLQUFLbEcsTUFBTCxDQUFZM0MsTUFBaEIsRUFBd0I7QUFDdEIsY0FBSTRDLEVBQUUyRixRQUFGLENBQVcsS0FBSzVGLE1BQUwsQ0FBWSxDQUFaLENBQVgsSUFBNkIrRCxXQUFqQyxFQUE4QztBQUM1QyxpQkFBS3FCLFNBQUwsQ0FBZSxJQUFmO0FBQ0QsV0FGRCxNQUdLO0FBQ0gsaUJBQUtwRixNQUFMLENBQVlVLElBQVosQ0FBaUJULENBQWpCO0FBQ0Q7QUFDRixTQVBELE1BUUs7QUFDSCxlQUFLRCxNQUFMLENBQVlVLElBQVosQ0FBaUJULENBQWpCO0FBQ0Q7QUFDRCxhQUFLOEYsTUFBTDtBQUNEO0FBQ0Y7Ozs4QkFFUzdJLEssRUFBTyxDQUNoQjs7O2dDQUVXQSxLLEVBQU87QUFDakIsV0FBS3NJLE9BQUwsR0FBZXRJLE1BQU0rSSxPQUFyQjtBQUNBLFdBQUtSLE9BQUwsR0FBZXZJLE1BQU1nSixPQUFyQjtBQUNBLFdBQUtILE1BQUw7QUFDQSxXQUFLMUIsTUFBTCxDQUFZOUYsS0FBWixDQUFrQnNELElBQWxCLEdBQXlCLEtBQUsyRCxPQUFMLEdBQWUsSUFBeEM7QUFDQSxXQUFLbkIsTUFBTCxDQUFZOUYsS0FBWixDQUFrQndELEdBQWxCLEdBQXdCLEtBQUswRCxPQUFMLEdBQWUsSUFBdkM7QUFDRDs7OytCQUVVdkksSyxFQUFPO0FBQ2hCLFdBQUtrSSxTQUFMO0FBQ0Q7Ozs4QkFFU2xJLEssRUFBTztBQUNmLFVBQUksS0FBS2lKLE9BQVQsRUFBa0I7QUFDaEIsYUFBS0MsV0FBTCxDQUFpQmxKLE1BQU1ZLEdBQXZCO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsWUFBSVosTUFBTVksR0FBTixJQUFhLFFBQWIsSUFBeUIsQ0FBQ1osTUFBTWEsTUFBcEMsRUFBNEM7QUFDMUMsZUFBS3NJLFVBQUw7QUFDRCxTQUZELE1BR0ssSUFBSW5KLE1BQU1ZLEdBQU4sSUFBYSxPQUFiLElBQXdCLENBQUNaLE1BQU1hLE1BQW5DLEVBQTJDO0FBQzlDLGVBQUtxSCxTQUFMO0FBQ0QsU0FGSSxNQUdBLElBQUlsSSxNQUFNWSxHQUFOLElBQWEsR0FBYixJQUFvQixDQUFDWixNQUFNYSxNQUEvQixFQUF1QztBQUMxQyxlQUFLdUksU0FBTCxDQUFlLEtBQUs5RixNQUFMLEdBQWMsSUFBZCxHQUFxQixPQUFwQztBQUNELFNBRkksTUFHQSxJQUFJdEQsTUFBTVksR0FBTixJQUFhLEdBQWIsSUFBb0IsQ0FBQ1osTUFBTWEsTUFBL0IsRUFBdUM7QUFDMUMsZUFBS3dJLE9BQUwsQ0FBYSxJQUFiO0FBQ0QsU0FGSSxNQUdBLElBQUksQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOENDLFFBQTlDLENBQXVEdEosTUFBTVksR0FBN0QsS0FBcUUsQ0FBQ1osTUFBTWEsTUFBaEYsRUFBd0Y7QUFDM0YsY0FBSTRHLFFBQVFYLE9BQU95QyxTQUFTdkosTUFBTVksR0FBZixJQUFzQixDQUE3QixDQUFaO0FBQ0EsY0FBSTZHLFVBQVVQLFNBQWQsRUFDRSxLQUFLbUMsT0FBTCxDQUFhNUIsS0FBYjtBQUNIO0FBQ0Y7QUFDRjs7O2tDQUVhekgsSyxFQUFPO0FBQ25CQSxZQUFNd0osY0FBTjtBQUNEOzs7Z0NBRVd4SixLLEVBQU87QUFDakIsVUFBSUEsTUFBTWdCLElBQU4sSUFBYyxXQUFsQixFQUErQjtBQUM3QixhQUFLc0QsV0FBTCxDQUFpQnRFLEtBQWpCO0FBQ0QsT0FGRCxNQUdLLElBQUlBLE1BQU1nQixJQUFOLElBQWMsU0FBbEIsRUFBNkI7QUFDaEMsYUFBS3VELFNBQUwsQ0FBZXZFLEtBQWY7QUFDRCxPQUZJLE1BR0EsSUFBSUEsTUFBTWdCLElBQU4sSUFBYyxXQUFsQixFQUErQjtBQUNsQyxhQUFLd0QsV0FBTCxDQUFpQnhFLEtBQWpCO0FBQ0QsT0FGSSxNQUdBLElBQUlBLE1BQU1nQixJQUFOLElBQWMsVUFBbEIsRUFBOEI7QUFDakMsYUFBS3lJLFVBQUwsQ0FBZ0J6SixLQUFoQjtBQUNELE9BRkksTUFHQSxJQUFJQSxNQUFNZ0IsSUFBTixJQUFjLFNBQWxCLEVBQTZCO0FBQ2hDLGFBQUtDLFNBQUwsQ0FBZWpCLEtBQWY7QUFDRCxPQUZJLE1BR0EsSUFBSUEsTUFBTWdCLElBQU4sSUFBYyxhQUFsQixFQUFpQztBQUNwQyxhQUFLMEksYUFBTCxDQUFtQjFKLEtBQW5CO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZK0csSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3pRVDRDLEs7QUFDSixtQkFBdUI7QUFBQSxRQUFYdkksTUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUNyQixTQUFLOUIsRUFBTCxHQUFVTCxTQUFTMEUsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0EsU0FBS3JFLEVBQUwsQ0FBUXNFLFNBQVIsQ0FBa0IzRCxHQUFsQixDQUFzQixPQUF0Qjs7QUFFQSxTQUFLMkosUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7O0FBRUEsU0FBS3ZLLEVBQUwsQ0FBUVAsZ0JBQVIsQ0FBeUIsV0FBekIsRUFBc0MsSUFBdEM7QUFDQSxTQUFLTyxFQUFMLENBQVFQLGdCQUFSLENBQXlCLFNBQXpCLEVBQW9DLElBQXBDO0FBQ0EsU0FBS08sRUFBTCxDQUFRUCxnQkFBUixDQUF5QixXQUF6QixFQUFzQyxJQUF0QztBQUNEOzs7O3dCQUVHK0ssVyxFQUFhO0FBQUE7O0FBQ2YsV0FBS0YsUUFBTCxDQUFjcEcsSUFBZCxDQUFtQnNHLFdBQW5CO0FBQ0EsV0FBS3hLLEVBQUwsQ0FBUUYsV0FBUixDQUFvQjBLLFlBQVlwTCxHQUFaLEVBQXBCO0FBQ0FvTCxrQkFBWUMsWUFBWjtBQUNBRCxrQkFBWS9KLEVBQVosQ0FBZSxXQUFmLEVBQTRCLFVBQUNpSyxHQUFELEVBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFLQyxRQUFMO0FBQ0EsY0FBS0osU0FBTCxHQUFpQixDQUFFRyxHQUFGLENBQWpCO0FBQ0FBLFlBQUlFLE1BQUo7QUFDRCxPQVJEO0FBU0Q7OzsrQkFFVTtBQUNULFVBQUksS0FBS0wsU0FBTCxDQUFlMUosTUFBbkIsRUFBMkI7QUFDekIsYUFBSyxJQUFJOEIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUs0SCxTQUFMLENBQWUxSixNQUFuQyxFQUEyQzhCLEdBQTNDLEVBQWdEO0FBQzlDLGVBQUs0SCxTQUFMLENBQWU1SCxDQUFmLEVBQWtCZ0ksUUFBbEI7QUFDRDtBQUNELGFBQUtKLFNBQUwsR0FBaUIsRUFBakI7QUFDRDtBQUNGOzs7Z0NBRVc3SixLLEVBQU87QUFDakIsVUFBSUEsTUFBTWdFLE1BQU4sSUFBZ0IsS0FBSzFFLEVBQXpCLEVBQTZCO0FBQzNCLGFBQUsySyxRQUFMO0FBQ0Q7QUFDRjs7OzhCQUVTakssSyxFQUFPLENBQ2hCOzs7Z0NBRVdBLEssRUFBTztBQUNqQixXQUFLbUssT0FBTCxHQUFlbkssTUFBTStJLE9BQXJCO0FBQ0EsV0FBS3FCLE9BQUwsR0FBZXBLLE1BQU1nSixPQUFyQjtBQUNEOzs7Z0NBRVdoSixLLEVBQU87QUFDakIsVUFBSUEsTUFBTWdCLElBQU4sSUFBYyxXQUFsQixFQUErQjtBQUM3QixhQUFLc0QsV0FBTCxDQUFpQnRFLEtBQWpCO0FBQ0QsT0FGRCxNQUdLLElBQUlBLE1BQU1nQixJQUFOLElBQWMsU0FBbEIsRUFBNkI7QUFDaEMsYUFBS3VELFNBQUwsQ0FBZXZFLEtBQWY7QUFDRCxPQUZJLE1BR0EsSUFBSUEsTUFBTWdCLElBQU4sSUFBYyxXQUFsQixFQUErQjtBQUNsQyxhQUFLd0QsV0FBTCxDQUFpQnhFLEtBQWpCO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZMkosSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hFVFUsRzs7Ozs7Ozs0QkFDV3JKLEksRUFBTXNKLFUsRUFBWTtBQUMvQixVQUFJaEwsS0FBS0wsU0FBU3NMLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVEdkosSUFBdkQsQ0FBVDtBQUNBLFdBQUssSUFBSXdKLElBQVQsSUFBaUJGLFVBQWpCLEVBQTZCO0FBQzNCaEwsV0FBR3FELFlBQUgsQ0FBZ0I2SCxJQUFoQixFQUFzQkYsV0FBV0UsSUFBWCxDQUF0QjtBQUNEO0FBQ0QsYUFBT2xMLEVBQVA7QUFDRDs7O3dCQUVVZ0wsVSxFQUFZO0FBQ3JCLFVBQUk1SCxNQUFNekQsU0FBU3NMLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVELEtBQXZELENBQVY7QUFDQTdILFVBQUlDLFlBQUosQ0FBaUIsYUFBakIsRUFBK0IsOEJBQS9CO0FBQ0EsV0FBSyxJQUFJNkgsSUFBVCxJQUFpQkYsVUFBakIsRUFBNkI7QUFDM0I1SCxZQUFJQyxZQUFKLENBQWlCNkgsSUFBakIsRUFBdUJGLFdBQVdFLElBQVgsQ0FBdkI7QUFDRDtBQUNELGFBQU85SCxHQUFQO0FBQ0Q7Ozs7OztrQkFHWTJILEciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJztcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnLi9kaXNwbGF5L2dyYXBoaWMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9kaXNwbGF5L3RleHQnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluaXRFbGVtZW50cygpO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzKTtcbiAgfVxuXG4gIGluaXRFbGVtZW50cygpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbS5hcHApO1xuXG4gICAgdGhpcy5zdGFnZSA9IG5ldyBTdGFnZSgpO1xuICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnN0YWdlLmVsKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5lbCk7XG5cbiAgICAvLyB0aGlzLnBhcGVyLm9uKCdwYXRocycsIChwYXRocykgPT4ge1xuICAgIC8vICAgdGhpcy5jcmVhdGVTaGFwZShwYXRocyk7XG4gICAgLy8gICB0aGlzLmhpZGVQYXBlcigpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgbGV0IGxhYmVsID0gbmV3IFRleHQoeyB2YWx1ZTogJ2hlbGxvJyB9KTtcbiAgICBsYWJlbC54ID0gNTA7XG4gICAgbGFiZWwueSA9IDEwMDtcbiAgICBsYWJlbC5vbignaGV5JywgKGV2ZW50KSA9PiB7fSk7XG5cbiAgICB0aGlzLnN0YWdlLmFkZChsYWJlbCk7XG4gIH1cblxuICBjcmVhdGVHcmFwaGljKHNoYXBlcykge1xuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHsgc2hhcGVzOiBzaGFwZXMgfSk7XG4gICAgICB0aGlzLnN0YWdlLmFkZChncmFwaGljKTtcbiAgICB9XG4gIH1cblxuICBzaG93UGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ3BhcGVyJykge1xuICAgICAgdGhpcy5wYXBlci5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gJ3BhcGVyJztcbiAgICB9XG4gIH1cblxuICBoaWRlUGFwZXIoKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgICBsZXQgc2hhcGVzID0gdGhpcy5wYXBlci5nZXRTaGFwZXMoKTtcbiAgICAgIHRoaXMuY3JlYXRlR3JhcGhpYyhzaGFwZXMpO1xuXG4gICAgICB0aGlzLnBhcGVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgdGhpcy5wYXBlci5jbGVhcigpO1xuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVQYXBlcigpIHtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAncGFwZXInKSB7XG4gICAgICB0aGlzLnNob3dQYXBlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy50b2dnbGVQYXBlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAgICAgdGhpcy5wYXBlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiaW1wb3J0IHN2ZyBmcm9tICcuLi9zdmcnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgU3RhZ2VPYmplY3QgZnJvbSAnLi9zdGFnZV9vYmplY3QnO1xuXG5jbGFzcyBHcmFwaGljIGV4dGVuZHMgU3RhZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zaGFwZXMgPSBwYXJhbXMuc2hhcGVzIHx8IFtdO1xuXG4gICAgdGhpcy5lbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdDtcblxuICAgIGlmICh0aGlzLnNoYXBlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBsZXQgZW1wdHkgPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgICBsZXQgYm91bmRzID0gc2hhcGUuZ2V0Qm91bmRzKCk7XG4gICAgICAgIGlmIChib3VuZHMpIHtcbiAgICAgICAgICBib3VuZHMueCArPSBzaGFwZS54O1xuICAgICAgICAgIGJvdW5kcy55ICs9IHNoYXBlLnk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYm91bmRzKTtcbiAgICAgICAgICB4bWluID0gKGJvdW5kcy54IDwgeG1pbiA/IGJvdW5kcy54IDogeG1pbik7XG4gICAgICAgICAgeW1pbiA9IChib3VuZHMueSA8IHltaW4gPyBib3VuZHMueSA6IHltaW4pO1xuICAgICAgICAgIHhtYXggPSAoYm91bmRzLnggKyBib3VuZHMud2lkdGggPiB4bWF4ID8gYm91bmRzLnggKyBib3VuZHMud2lkdGggOiB4bWF4KTtcbiAgICAgICAgICB5bWF4ID0gKGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCA+IHltYXggPyBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgOiB5bWF4KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4bWluLCB5bWluLCB4bWF4LCB5bWF4KTtcbiAgICAgICAgICBlbXB0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZW1wdHkpIHJlY3QgPSBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgd2hpbGUgKHRoaXMuZWwuZmlyc3RDaGlsZCkgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xuXG4gICAgbGV0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcykge1xuICAgICAgdGhpcy54ID0gYm91bmRzLng7XG4gICAgICB0aGlzLnkgPSBib3VuZHMueTtcblxuICAgICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IGJvdW5kcy53aWR0aCArICdweCc7XG4gICAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQgKyAncHgnO1xuXG4gICAgICBsZXQgc3ZnRWwgPSBzdmcuc3ZnKCk7XG4gICAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYm91bmRzLndpZHRoKTtcbiAgICAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYm91bmRzLmhlaWdodCk7XG4gICAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyBib3VuZHMud2lkdGggKyAnICcgKyBib3VuZHMuaGVpZ2h0KTtcbiAgICAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuXG4gICAgICAgIGxldCBwcyA9ICdNJztcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoYXBlLnBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBwID0gc2hhcGUucG9pbnRzW2pdO1xuICAgICAgICAgIGlmIChqID4gMCkgcHMgKz0gJ0wnO1xuICAgICAgICAgIHBzICs9IChwLnggLSBib3VuZHMueCkgKyAnICcgKyAocC55IC0gYm91bmRzLnkpICsgJyAnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGFwZS5jbG9zZWQpIHtcbiAgICAgICAgICBwcyArPSAnWic7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnZmlsbCcsIHNoYXBlLmZpbGwpO1xuXG4gICAgICAgIGxldCBnID0gc3ZnLmVsZW1lbnQoJ2cnKTtcbiAgICAgICAgLy8gZy5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgc2hhcGUuZmlsbCA/ICd2aXNpYmxlUGFpbnRlZCcgOiAndmlzaWJsZVN0cm9rZScpO1xuICAgICAgICBnLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAncGFpbnRlZCcpO1xuICAgICAgICBsZXQgcGF0aCA9IHN2Zy5lbGVtZW50KCdwYXRoJywgeyBkOiBwcywgZmlsbDogKHNoYXBlLmZpbGwgPyBzaGFwZS5maWxsIDogJ25vbmUnKSwgc3Ryb2tlOiBzaGFwZS5zdHJva2UgfSk7XG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAzKTtcbiAgICAgICAgZy5hcHBlbmRDaGlsZChwYXRoKTtcblxuICAgICAgICBzdmdFbC5hcHBlbmRDaGlsZChnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3ZnRWwpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaGljO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5cbmNsYXNzIFNoYXBlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcblxuICAgIGxldCBwb2ludHMgPSBwYXJhbXMucG9pbnRzO1xuICAgIGlmIChwb2ludHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludChwLngsIHAueSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlsbCA9IHBhcmFtcy5maWxsIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBwYXJhbXMuc3Ryb2tlIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2VXaWR0aCA9IHBhcmFtcy5zdHJva2VXaWR0aCB8fCAxO1xuICAgIHRoaXMuY2xvc2VkID0gcGFyYW1zLmNsb3NlZCB8fCBmYWxzZTtcblxuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdCA9IG51bGw7XG5cbiAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgfVxuICAgICAgcmVjdCA9IG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBTdGFnZU9iamVjdCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZS1vYmplY3QnKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuXG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5feTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpcy5feCA9IHZhbHVlO1xuICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IHRoaXMuX3ggKyAncHgnO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLl95ID0gdmFsdWU7XG4gICAgdGhpcy5lbC5zdHlsZS50b3AgPSB0aGlzLl95ICsgJ3B4JztcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGFkZGVkVG9TdGFnZSgpIHtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIH1cblxuICBiZWdpbkRyYWcoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzKTtcbiAgICB0aGlzLmRyYWcgPSB0cnVlO1xuICB9XG5cbiAgZW5kRHJhZygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICAgIHRoaXMuZHJhZyA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgIHRoaXMuZW1pdCgnbW91c2Vkb3duJywgdGhpcyk7XG4gICAgdGhpcy5iZWdpbkRyYWcoKTtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIHRoaXMuZW5kRHJhZygpO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnKSB7XG4gICAgICB0aGlzLnggKz0gZXZlbnQubW92ZW1lbnRYO1xuICAgICAgdGhpcy55ICs9IGV2ZW50Lm1vdmVtZW50WTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoZXZlbnQpIHtcbiAgICB0aGlzLmVuZERyYWcoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnYmx1cicpIHtcbiAgICAgIHRoaXMub25CbHVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2VPYmplY3Q7XG4iLCJpbXBvcnQgU3RhZ2VPYmplY3QgZnJvbSAnLi9zdGFnZV9vYmplY3QnO1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgU3RhZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2V0U2l6ZShwYXJhbXMuc2l6ZSB8fCA0OCk7XG4gICAgdGhpcy5zZXRUZXh0KHBhcmFtcy52YWx1ZSk7XG4gIH1cblxuICBzZXRTaXplKHZhbHVlKSB7XG4gICAgdGhpcy5zaXplID0gdmFsdWU7XG4gICAgdGhpcy5lbC5zdHlsZS5mb250U2l6ZSA9IHRoaXMuc2l6ZSArICdweCc7XG4gIH1cblxuICBzZXRUZXh0KHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiXG5jbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cbn1cblxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09IHR5cGUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IHR5cGU6IHR5cGUsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRXZlbnREaXNwYXRjaGVyLCBFdmVudCB9O1xuIiwiXG5jbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuciA9IHI7XG4gIH1cblxuICBpbnRlcnNlY3RzTGluZVNlZ21lbnQoeDEsIHkxLCB4MiwgeTIpIHtcblxuICB9XG5cbiAgY29udGFpbnNQb2ludCh4LCB5KSB7XG4gICAgbGV0IGR4ID0geCAtIHRoaXMueDtcbiAgICBsZXQgZHkgPSB5IC0gdGhpcy55O1xuICAgIGxldCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICByZXR1cm4gZCA8IHRoaXMucjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRpc3RhbmNlKHBvaW50KSB7XG4gICAgbGV0IGR4ID0gdGhpcy54IC0gcG9pbnQueDtcbiAgICBsZXQgZHkgPSB0aGlzLnkgLSBwb2ludC55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJcbmNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkb3QodmVjdG9yKSB7XG4gICAgcmV0dXJuICh0aGlzLnggKiB2ZWN0b3IueCArIHRoaXMueSAqIHZlY3Rvci55KTtcbiAgfVxuXG4gIG1hZygpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBwcm9qZWN0KHZlY3Rvcikge1xuICAgIGxldCBkID0gdmVjdG9yLmRvdCh2ZWN0b3IpO1xuICAgIGlmIChkID4gMCkge1xuICAgICAgbGV0IHJhdGlvID0gdGhpcy5kb3QodmVjdG9yKSAvIGQ7XG4gICAgICAvLyByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHJhdGlvIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL2dlb20vdmVjdG9yJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9nZW9tL2NpcmNsZSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcblxubGV0IFNOQVBfUkFESVVTID0gMztcbmxldCBDT0xPUlMgPSBbXG4gICd3aGl0ZScsXG4gIC8vICcjZTZlNmU2JyxcbiAgJyNjY2NjY2MnLFxuICAvLyAnI2IzYjNiMycsXG4gICcjOTk5OTk5JyxcbiAgLy8gJyM4MDgwODAnLFxuICAnIzY2NjY2NicsXG4gIC8vICcjNGQ0ZDRkJyxcbiAgJyMzMzMzMzMnLFxuICAvLyAnIzFhMWExYScsXG4gICdibGFjaydcbl07XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLmZpbGwgPSBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gQ09MT1JTWzVdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5hZGp1c3RDYW52YXMoKTtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5zZXRWaXNpYmxlKHBhcmFtcy52aXNpYmxlICE9PSB1bmRlZmluZWQgPyBwYXJhbXMudmlzaWJsZSA6IHRydWUpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnLCAnZGJsY2xpY2snLCAnY29udGV4dG1lbnUnIF07XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BhcGVyLWN1cnNvcicpO1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5saXN0ZW5lcnNbaV0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyc1tpXSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGp1c3RDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBkcmF3TGluZSh4MSwgeTEsIHgyLCB5MiwgY29sb3IpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvciB8fCAnYmxhY2snO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdQYXRoKHBhcmFtcz17fSkge1xuICAgIGxldCBwb2ludHMgPSBwYXJhbXMucG9pbnRzIHx8IFtdO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHBhcmFtcy5zdHJva2UgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuc3Ryb2tlID8gcGFyYW1zLnN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gcGFyYW1zLmZpbGwgIT09IHVuZGVmaW5lZCA/IChwYXJhbXMuZmlsbCA/IHBhcmFtcy5maWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgdGhpcy5kcmF3UGF0aCh7IHBvaW50czogc2hhcGUucG9pbnRzLCBmaWxsOiBzaGFwZS5maWxsLCBzdHJva2U6IHNoYXBlLnN0cm9rZSwgY2xvc2VkOiBzaGFwZS5jbG9zZWQgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kcmF3UGF0aCh7IHBvaW50czogdGhpcy5wb2ludHMsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSB9KTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGxldCBjcCA9IG5ldyBQb2ludCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBsZXQgcDAgPSB0aGlzLnBvaW50c1swXTtcbiAgICAgIGlmIChjcC5kaXN0YW5jZShwMCkgPCBTTkFQX1JBRElVUykge1xuICAgICAgICBjdHguYXJjKHAwLngsIHAwLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmNvbW1hbmQpIHtcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29tbWFuZCk7XG4gICAgLy8gICBsZXQgc2l6ZSA9IDI0O1xuICAgIC8vICAgY3R4LmZvbnQgPSBzaXplICsgJ3B4IHNhbnMtc2VyaWYnO1xuICAgIC8vICAgY3R4LmZpbGxUZXh0KHRoaXMuY29tbWFuZCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSBzaXplKjIpO1xuICAgIC8vIH1cblxuICB9XG5cbiAgZ2V0U2hhcGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNoYXBlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY2FuY2VsUGF0aCgpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjbG9zZVBhdGgoY2xvc2VkPWZhbHNlKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7IHBvaW50czogdGhpcy5wb2ludHMsIGNsb3NlZDogY2xvc2VkLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG4gICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNoYXBlLmZpbGwpO1xuICAgIH1cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRGaWxsKGZpbGwpIHtcbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRTdHJva2Uoc3Ryb2tlKSB7XG4gICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgU05BUF9SQURJVVMpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvclggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yWSArICdweCc7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICh0aGlzLmNvbW1hbmQpIHtcbiAgICAgIHRoaXMub25QYXJhbWV0ZXIoZXZlbnQua2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09ICdFc2NhcGUnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3MnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgICAgdGhpcy5zZXRTdHJva2UodGhpcy5zdHJva2UgPyBudWxsIDogJ2JsYWNrJylcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnMCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgICB0aGlzLnNldEZpbGwobnVsbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoZXZlbnQua2V5KSAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICAgIGxldCBjb2xvciA9IENPTE9SU1twYXJzZUludChldmVudC5rZXkpIC0gMV07XG4gICAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuc2V0RmlsbChjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsIlxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gIH1cblxuICBhZGQoc3RhZ2VPYmplY3QpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goc3RhZ2VPYmplY3QpO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3RhZ2VPYmplY3QuZG9tKCkpO1xuICAgIHN0YWdlT2JqZWN0LmFkZGVkVG9TdGFnZSgpO1xuICAgIHN0YWdlT2JqZWN0Lm9uKCdtb3VzZWRvd24nLCAob2JqKSA9PiB7XG4gICAgICAvLyBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMob2JqKSkge1xuICAgICAgLy8gICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IG9iaik7XG4gICAgICAvLyAgIG9iai5kZXNlbGVjdCgpO1xuICAgICAgLy8gfVxuICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbIG9iaiBdO1xuICAgICAgb2JqLnNlbGVjdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gdGhpcy5lbCkge1xuICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvcnggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yeSA9IGV2ZW50Lm9mZnNldFk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==