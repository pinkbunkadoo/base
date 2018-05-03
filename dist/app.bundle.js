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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _svg = __webpack_require__(/*! ./svg */ "./src/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _stage = __webpack_require__(/*! ./stage */ "./src/stage.js");

var _stage2 = _interopRequireDefault(_stage);

var _paper = __webpack_require__(/*! ./paper/paper */ "./src/paper/paper.js");

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
      this.startup();
      this.initEventListeners();
    }
  }, {
    key: 'initEventListeners',
    value: function initEventListeners() {
      window.addEventListener('keydown', this);
      window.addEventListener('keyup', this);
      window.addEventListener('mousedown', this);
      window.addEventListener('mouseup', this);
      window.addEventListener('mousemove', this);
      window.addEventListener('dblclick', this);
      window.addEventListener('contextmenu', this);
      window.addEventListener('focus', this);
      window.addEventListener('blur', this);
      window.addEventListener('resize', this);
    }
  }, {
    key: 'startup',
    value: function startup() {
      this.dom.app = document.getElementById('app');

      this.paper = new _paper2.default();
      this.setEditor(this.paper);

      global.paper = this.paper;
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
    key: 'setEditor',
    value: function setEditor(editor) {
      if (editor !== this.editor) {
        if (this.editor) {
          this.editor.hide();
          this.dom.app.removeChild(this.dom.app.firstChild);
        }
        this.editor = editor;
        this.dom.app.appendChild(this.editor.dom());
        this.editor.show();
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      // if (event.key == 'p' && !event.repeat) {
      //   this.showArea('paper');
      // }
      // else {
      //
      // }
      // else if (event.key == 'e' && !event.repeat) {
      //   this.stage.edit();
      // }
      // else {
      //   if (this.mode == 'paper') {
      //     this.paper.handleEvent(event);
      //   }
      // }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {}
  }, {
    key: 'onContextMenu',
    value: function onContextMenu(event) {
      event.preventDefault();
    }
  }, {
    key: 'onResize',
    value: function onResize(event) {
      var _this = this;

      if (!this.resizeTimerId) {
        this.resizeTimerId = setTimeout(function () {
          _this.paper.setSize(window.innerWidth, window.innerHeight);
          _this.resizeTimerId = null;
        }, 100);
      }
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'contextmenu') {
        this.onContextMenu(event);
      } else if (event.type == 'resize') {
        this.onResize(event);
      } else {
        if (this.editor) {
          this.editor.handleEvent(event);
        } else {
          if (event.type == 'keydown') {
            this.onKeyDown(event);
          } else if (event.type == 'mousedown') {
            this.onMouseDown(event);
          }
        }
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/display/frame.js":
/*!******************************!*\
  !*** ./src/display/frame.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Frame = function () {
  function Frame() {
    _classCallCheck(this, Frame);

    this.shapes = [];
  }

  _createClass(Frame, [{
    key: "add",
    value: function add(shape) {
      this.shapes.push(shape);
    }
  }, {
    key: "remove",
    value: function remove(shape) {
      var index = this.shapes.indexOf(shape);
      if (index !== -1) {
        this.shapes.splice(index, 1);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.shapes = [];
    }
  }]);

  return Frame;
}();

exports.default = Frame;

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

/***/ "./src/display/sequence.js":
/*!*********************************!*\
  !*** ./src/display/sequence.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sequence = function () {
  function Sequence() {
    _classCallCheck(this, Sequence);

    this.frames = [];
  }

  _createClass(Sequence, [{
    key: "add",
    value: function add(frame, index) {
      if (index !== undefined) this.frames.splice(index, 0, frame);else this.frames.push(frame);
    }
  }, {
    key: "remove",
    value: function remove(index) {
      if (index >= 0 && index < this.frames.length) {
        this.frames.splice(index, 1);
      }
    }
  }, {
    key: "getFrame",
    value: function getFrame(frameNo) {
      return this.frames[frameNo];
    }
  }, {
    key: "length",
    get: function get() {
      return this.frames.length;
    }
  }]);

  return Sequence;
}();

exports.default = Sequence;

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

    _this.x = params.x || 0;
    _this.y = params.y || 0;
    _this.fill = params.fill || null;
    _this.stroke = params.stroke || null;
    _this.closed = params.closed || false;
    // this.strokeWidth = params.strokeWidth || 1;

    if (params.pointList) _this.pointList = params.pointList.copy();else _this.pointList = new _point_list2.default();
    return _this;
  }

  _createClass(Shape, [{
    key: 'copy',
    value: function copy() {
      return new Shape({ x: this.x, y: this.y, pointList: this.pointList, stroke: this.stroke, fill: this.fill, closed: this.closed });
    }
  }, {
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

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! ./events */ "./src/events.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = function (_EventDispatcher) {
  _inherits(Editor, _EventDispatcher);

  function Editor() {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this));
  }

  _createClass(Editor, [{
    key: 'dom',
    value: function dom() {}
  }, {
    key: 'show',
    value: function show() {}
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {}
  }]);

  return Editor;
}(_events.EventDispatcher);

exports.default = Editor;

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

    this.points = [];
    if (points) {
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        this.points.push(new _point2.default(p.x, p.y));
      }
    }
  }

  _createClass(PointList, [{
    key: 'copy',
    value: function copy() {
      return new PointList(this.points);
    }
  }, {
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

/***/ "./src/paper/paper.js":
/*!****************************!*\
  !*** ./src/paper/paper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _point = __webpack_require__(/*! ../geom/point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

var _vector = __webpack_require__(/*! ../geom/vector */ "./src/geom/vector.js");

var _vector2 = _interopRequireDefault(_vector);

var _circle = __webpack_require__(/*! ../geom/circle */ "./src/geom/circle.js");

var _circle2 = _interopRequireDefault(_circle);

var _shape2 = __webpack_require__(/*! ../display/shape */ "./src/display/shape.js");

var _shape3 = _interopRequireDefault(_shape2);

var _frame = __webpack_require__(/*! ../display/frame */ "./src/display/frame.js");

var _frame2 = _interopRequireDefault(_frame);

var _sequence = __webpack_require__(/*! ../display/sequence */ "./src/display/sequence.js");

var _sequence2 = _interopRequireDefault(_sequence);

var _editor = __webpack_require__(/*! ../editor */ "./src/editor.js");

var _editor2 = _interopRequireDefault(_editor);

var _pointer_tool = __webpack_require__(/*! ./tools/pointer_tool */ "./src/paper/tools/pointer_tool.js");

var _pointer_tool2 = _interopRequireDefault(_pointer_tool);

var _pencil_tool = __webpack_require__(/*! ./tools/pencil_tool */ "./src/paper/tools/pencil_tool.js");

var _pencil_tool2 = _interopRequireDefault(_pencil_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paper = function (_Editor) {
  _inherits(Paper, _Editor);

  function Paper() {
    _classCallCheck(this, Paper);

    var _this = _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).call(this));

    _this.points = [];
    _this.shapes = [];
    _this.fill = null;
    _this.stroke = null;

    _this.selection = [];
    _this.clipboard = [];
    _this.sequence = new _sequence2.default();

    _this.el = document.createElement('div');
    _this.el.classList.add('paper');

    _this.canvas = document.createElement('canvas');
    _this.canvas.width = window.innerWidth;
    _this.canvas.height = window.innerHeight;

    _this.el.appendChild(_this.canvas);

    _this.cursorX = 0;
    _this.cursorY = 0;

    _this.addFrame();
    _this.goFrame(0);

    _this.setTool('pointer');
    return _this;
  }

  _createClass(Paper, [{
    key: 'dom',
    value: function dom() {
      return this.el;
    }
  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this.render();
    }
  }, {
    key: 'drawShape',
    value: function drawShape(shape) {
      var points = shape.getPoints();

      var ctx = this.canvas.getContext('2d');
      ctx.save();

      ctx.strokeStyle = shape.stroke || 'transparent';
      ctx.fillStyle = shape.fill || 'transparent';

      ctx.beginPath();

      var sp = this.worldToScreen(shape.x, shape.y);

      for (var j = 0; j < points.length; j++) {
        var p = points[j];
        var x = p.x + sp.x;
        var y = p.y + sp.y;

        if (j == 0) ctx.moveTo(x, y);else ctx.lineTo(x, y);
      }

      if (shape.closed) ctx.closePath();

      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }
  }, {
    key: 'drawOutline',
    value: function drawOutline(shape, stroke) {
      var ctx = this.canvas.getContext('2d');
      ctx.save();

      ctx.strokeStyle = stroke || 'black';

      ctx.beginPath();

      var sp = this.worldToScreen(shape.x, shape.y);
      var points = shape.getPoints();

      for (var j = 0; j < points.length; j++) {
        var p = points[j];
        var x = p.x + sp.x;
        var y = p.y + sp.y;

        if (j == 0) ctx.moveTo(x, y);else ctx.lineTo(x, y);
      }

      if (shape.closed) ctx.closePath();

      ctx.stroke();

      ctx.restore();
    }
  }, {
    key: 'renderAxis',
    value: function renderAxis(x, y) {
      var size = 20;
      var ctx = this.canvas.getContext('2d');
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
    key: 'renderHints',
    value: function renderHints() {
      var ctx = this.canvas.getContext('2d');
      ctx.save();
      if (this.selection.length) {
        ctx.strokeStyle = 'red';
        for (var i = 0; i < this.selection.length; i++) {
          var shape = this.selection[i];
          var p = this.worldToScreen(shape.x, shape.y);
          ctx.beginPath();
          ctx.arc(p.x >> 0, p.y >> 0, 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      ctx.restore();
    }
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.renderAxis(this.canvas.width / 2 >> 0, this.canvas.height / 2 >> 0);

      if (this.frameNo > 0) {
        var frame = this.sequence.getFrame(this.frameNo - 1);
        for (var i = 0; i < frame.shapes.length; i++) {
          var shape = frame.shapes[i];
          this.drawOutline(shape, 'rgb(192, 240, 192)');
        }
      }

      for (var _i = 0; _i < this.frame.shapes.length; _i++) {
        var _shape = this.frame.shapes[_i];
        this.drawShape(_shape);
      }

      this.renderHints();

      if (this.tool) {
        ctx.save();
        this.tool.render(ctx);
        ctx.restore();
      }

      ctx.textBaseline = 'top';
      ctx.font = '18px sans-serif';
      ctx.fillStyle = 'black';
      ctx.fillText(this.frameNo + 1 + ':' + this.sequence.length, 20, 20);
    }
  }, {
    key: 'selectAll',
    value: function selectAll() {
      this.selection = [];
      for (var i = 0; i < this.frame.shapes.length; i++) {
        this.selection.push(this.frame.shapes[i]);
      }
      this.render();
    }
  }, {
    key: 'screenToWorld',
    value: function screenToWorld(x, y) {
      var tx = this.canvas.width / 2;
      var ty = this.canvas.height / 2;
      return new _point2.default(x - tx, y - ty);
    }
  }, {
    key: 'worldToScreen',
    value: function worldToScreen(x, y) {
      var tx = this.canvas.width / 2;
      var ty = this.canvas.height / 2;
      return new _point2.default(x + tx, y + ty);
    }
  }, {
    key: 'addShape',
    value: function addShape(shape) {
      this.frame.add(shape);
    }
  }, {
    key: 'getShapes',
    value: function getShapes() {
      return this.shapes;
    }
  }, {
    key: 'setCursor',
    value: function setCursor(cursor) {
      if (this.el.contains(this.cursor)) {
        this.el.removeChild(this.cursor);
      }
      this.cursor = cursor;
      this.el.appendChild(this.cursor);
    }
  }, {
    key: 'setTool',
    value: function setTool(toolName) {
      var _this2 = this;

      if (toolName !== this.toolName) {
        if (toolName == 'pointer') {
          this.tool = new _pointer_tool2.default();
          this.tool.on('update', function () {
            _this2.render();
          });
        } else if (toolName == 'pencil') {
          this.tool = new _pencil_tool2.default();
          this.tool.on('update', function () {
            _this2.render();
          });
          this.tool.on('shape', function (shape) {
            _this2.addShape(shape);
          });
        } else {
          return;
        }
        this.toolName = toolName;
        if (this.tool.cursor) this.setCursor(this.tool.cursor);
        this.render();
      }
    }
  }, {
    key: 'addFrame',
    value: function addFrame(index) {
      var frame = new _frame2.default();

      if (index !== undefined) this.sequence.add(frame, index);else this.sequence.add(frame);

      if (this.selection.length) {
        for (var i = 0; i < this.selection.length; i++) {
          var shape = this.selection[i].copy();
          frame.add(shape);
        }
      }
    }
  }, {
    key: 'clearFrame',
    value: function clearFrame() {
      this.frame.clear();
      this.render();
    }
  }, {
    key: 'deleteFrame',
    value: function deleteFrame(index) {
      if (this.sequence.length == 1) {
        this.clearFrame();
      } else {
        this.sequence.remove(index);
        this.goFrame(index);
      }
    }
  }, {
    key: 'goFrame',
    value: function goFrame(frameNo) {
      if (frameNo < 0) frameNo = 0;else if (frameNo > this.sequence.length - 1) frameNo = this.sequence.length - 1;

      var frame = this.sequence.getFrame(frameNo);
      if (frame) {
        this.frame = frame;
        this.frameNo = frameNo;
        this.selection = [];
        this.render();
      }
    }
  }, {
    key: 'deleteSelected',
    value: function deleteSelected() {
      for (var i = 0; i < this.selection.length; i++) {
        var shape = this.selection[i];
        this.frame.remove(shape);
      }
      this.selection = [];
      this.render();
    }
  }, {
    key: 'copySelected',
    value: function copySelected() {
      if (this.selection.length) {
        var clipboard = [];
        for (var i = 0; i < this.selection.length; i++) {
          var shape = this.selection[i].copy();
          clipboard.push(shape);
        }
        this.clipboard = clipboard;
      }
    }
  }, {
    key: 'paste',
    value: function paste() {
      if (this.clipboard.length) {
        this.selection = [];
        for (var i = 0; i < this.clipboard.length; i++) {
          var shape = this.clipboard[i].copy();
          this.frame.add(shape);
          this.selection.push(shape);
        }
        this.render();
      }
    }
  }, {
    key: 'bringToFront',
    value: function bringToFront() {
      var _this3 = this;

      if (this.selection.length) {
        var shapes = this.frame.shapes.filter(function (shape) {
          return !_this3.selection.includes(shape);
        });
        var set = this.frame.shapes.filter(function (shape) {
          return _this3.selection.includes(shape);
        });
        this.frame.shapes = shapes.concat(set);
        this.render();
      }
    }
  }, {
    key: 'sendToBack',
    value: function sendToBack() {
      var _this4 = this;

      if (this.selection.length) {
        var shapes = this.frame.shapes.filter(function (shape) {
          return !_this4.selection.includes(shape);
        });
        var set = this.frame.shapes.filter(function (shape) {
          return _this4.selection.includes(shape);
        });
        this.frame.shapes = set.concat(shapes);
        this.render();
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {}
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {}
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorX = event.pageX;
      this.cursorY = event.pageY;
      if (this.cursor) {
        this.cursor.style.left = this.cursorX + 'px';
        this.cursor.style.top = this.cursorY + 'px';
      }
    }
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {}
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key == 'q' && !event.repeat) {
        this.setTool('pointer');
      } else if (event.key == 'b' && !event.repeat) {
        this.setTool('pencil');
      } else if ((event.key == '.' || event.key == '>') && !event.repeat) {
        if (event.shiftKey) {
          this.addFrame(this.frameNo + 1);
        }
        this.goFrame(this.frameNo + 1);
      } else if ((event.key == ',' || event.key == '<') && !event.repeat) {
        if (event.shiftKey) {
          this.addFrame(this.frameNo);
          this.goFrame(this.frameNo);
        } else {
          this.goFrame(this.frameNo - 1);
        }
      } else if (event.key == 'c' && !event.repeat) {
        if (event.metaKey || event.ctrlKey) {
          this.copySelected();
        }
      } else if (event.key == 'v' && !event.repeat) {
        if (event.metaKey || event.ctrlKey) {
          this.paste();
        }
      } else if (event.key == 'a' && !event.repeat) {
        this.selectAll();
      } else if (event.key == 'x' && !event.repeat) {
        this.deleteSelected();
      } else if (event.key == 'X' && !event.repeat) {
        this.deleteFrame(this.frameNo);
      } else if (event.key == 'ArrowUp' && !event.repeat) {
        if (event.metaKey || event.ctrlKey) this.bringToFront();
      } else if (event.key == 'ArrowDown' && !event.repeat) {
        if (event.metaKey || event.ctrlKey) this.sendToBack();
      }
      // if (event.key == 's' && !event.repeat) {
      //   this.setStroke(this.stroke ? null : 'black')
      // }
      // else if (event.key == '0' && !event.repeat) {
      //   this.setFill(null);
      // }
      // else if (['1', '2', '3', '4'].includes(event.key) && !event.repeat) {
      //   let color = COLORS[parseInt(event.key) - 1];
      //   if (color !== undefined)
      //     this.setFill(color);
      // }
      // else {
      //   if (this.mode == 'draw') {
      //     if (event.key == 'Escape' && !event.repeat) {
      //       this.cancelPath();
      //     }
      //     else if (event.key == 'Enter' && !event.repeat) {
      //       this.closePath();
      //     }
      //   }
      //   else {
      //   }
      // }
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'mousemove') {
        this.onMouseMove(event);
      } else if (event.type == 'mousedown') {
        this.onMouseDown(event);
      } else if (event.type == 'mouseup') {
        this.onMouseUp(event);
      } else if (event.type == 'dblclick') {
        this.onDblClick(event);
      } else if (event.type == 'keydown') {
        this.onKeyDown(event);
      }

      if (this.tool) {
        this.tool.handleEvent(event);
      }
    }
  }]);

  return Paper;
}(_editor2.default);

exports.default = Paper;

/***/ }),

/***/ "./src/paper/tools/pencil_tool.js":
/*!****************************************!*\
  !*** ./src/paper/tools/pencil_tool.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _point = __webpack_require__(/*! ../../geom/point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

var _point_list = __webpack_require__(/*! ../../geom/point_list */ "./src/geom/point_list.js");

var _point_list2 = _interopRequireDefault(_point_list);

var _shape = __webpack_require__(/*! ../../display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

var _tool = __webpack_require__(/*! ./tool */ "./src/paper/tools/tool.js");

var _tool2 = _interopRequireDefault(_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PencilTool = function (_Tool) {
  _inherits(PencilTool, _Tool);

  function PencilTool() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, PencilTool);

    var _this = _possibleConstructorReturn(this, (PencilTool.__proto__ || Object.getPrototypeOf(PencilTool)).call(this));

    _this.points = [];
    _this.stroke = 'gray';
    _this.fill = 'lightgray';

    _this.cursor = document.createElement('div');
    _this.cursor.classList.add('pencil-cursor');
    return _this;
  }

  _createClass(PencilTool, [{
    key: 'closePath',
    value: function closePath() {
      var closed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.points.length > 1) {
        var pointList = new _point_list2.default(this.points);
        var bounds = pointList.getBounds();
        var x = bounds.x + bounds.width / 2;
        var y = bounds.y + bounds.height / 2;
        for (var i = 0; i < pointList.points.length; i++) {
          var _p = pointList.points[i];
          _p.x -= x;
          _p.y -= y;
        }
        var shape = new _shape2.default({ pointList: pointList, fill: this.fill, stroke: this.stroke, closed: closed });
        var p = paper.screenToWorld(x, y);
        shape.x = p.x;
        shape.y = p.y;
        this.emit('shape', shape);
        this.points = [];
      }
    }
  }, {
    key: 'drawPath',
    value: function drawPath(ctx, points, stroke, fill) {
      var closed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      ctx.strokeStyle = stroke !== undefined ? stroke ? stroke : 'transparent' : 'transparent';
      ctx.fillStyle = fill !== undefined ? fill ? fill : 'transparent' : 'transparent';

      if (stroke == null) {
        ctx.strokeStyle = 'cyan';
      }

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
    value: function render(ctx) {
      if (this.points.length) {
        this.drawPath(ctx, this.points, this.stroke, this.fill);

        ctx.strokeStyle = 'blue';
        ctx.beginPath();
        var p = this.points[this.points.length - 1];
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(this.cursorX, this.cursorY);
        ctx.stroke();

        var cp = new _point2.default(this.cursorX, this.cursorY);
        var p0 = this.points[0];

        if (cp.distance(p0) < 5) {
          ctx.beginPath();
          ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      if (event.button == 0) {
        var p = new _point2.default(event.offsetX, event.offsetY);
        if (this.points.length) {
          if (p.distance(this.points[0]) < 5) {
            this.closePath(true);
          } else {
            this.points.push(p);
          }
        } else {
          this.points.push(p);
        }
        this.emit('update');
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
      this.emit('update');
    }
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {
      this.closePath();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {}
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
      }
    }
  }]);

  return PencilTool;
}(_tool2.default);

exports.default = PencilTool;

/***/ }),

/***/ "./src/paper/tools/pointer_tool.js":
/*!*****************************************!*\
  !*** ./src/paper/tools/pointer_tool.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tool = __webpack_require__(/*! ./tool */ "./src/paper/tools/tool.js");

var _tool2 = _interopRequireDefault(_tool);

var _shape = __webpack_require__(/*! ../../display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PointerTool = function (_Tool) {
  _inherits(PointerTool, _Tool);

  function PointerTool() {
    _classCallCheck(this, PointerTool);

    var _this = _possibleConstructorReturn(this, (PointerTool.__proto__ || Object.getPrototypeOf(PointerTool)).call(this));

    _this.cursor = document.createElement('div');
    _this.cursor.classList.add('pointer-cursor');
    return _this;
  }

  _createClass(PointerTool, [{
    key: 'hitTest',
    value: function hitTest(x, y) {
      var sp = paper.screenToWorld(x, y);
      for (var i = paper.frame.shapes.length - 1; i >= 0; i--) {
        var shape = paper.frame.shapes[i];
        if (shape.hitTest(sp.x, sp.y)) {
          return shape;
        }
      }
      return null;
    }
  }, {
    key: 'marqueeSelect',
    value: function marqueeSelect(xmin, ymin, xmax, ymax) {
      var p1 = paper.screenToWorld(xmin, ymin);
      var p2 = paper.screenToWorld(xmax, ymax);
      var selection = [];
      for (var i = 0; i < paper.frame.shapes.length; i++) {
        var shape = paper.frame.shapes[i];
        if (shape instanceof _shape2.default) {
          if (shape.intersectsRectangle(p1.x, p1.y, p2.x, p2.y)) {
            selection.push(shape);
          }
        }
      }
      paper.selection = selection;
      // console.log(paper.selection);
    }
  }, {
    key: 'moveSelectionBy',
    value: function moveSelectionBy(dx, dy) {
      for (var i = 0; i < paper.selection.length; i++) {
        var shape = paper.selection[i];
        shape.x += dx;
        shape.y += dy;
      }
      this.emit('update');
    }
  }, {
    key: 'dragOn',
    value: function dragOn() {
      this.mode = 'drag';
      // console.log('dragOn');
    }
  }, {
    key: 'dragOff',
    value: function dragOff() {
      this.mode = null;
      // console.log('dragOff');
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      if (this.mode == 'marquee') {
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
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      if (event.button == 0) {
        var modifier = event.shiftKey || event.metaKey;
        this.downX = event.pageX;
        this.downY = event.pageY;

        this.left = true;

        var hit = this.hitTest(this.downX, this.downY);
        if (hit) {
          if (paper.selection.includes(hit)) {
            if (modifier) paper.selection.splice(paper.selection.indexOf(hit), 1);
            // else
            // paper.selection = [hit];
          } else {
            if (modifier) paper.selection.push(hit);else paper.selection = [hit];
          }
          this.target = hit;
        } else {
          paper.selection = [];
          this.target = null;
          this.mode = 'marquee';
        }
        this.emit('update');
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      if (event.button == 0) {
        if (this.mode == 'drag') {
          this.dragOff();
        } else if (this.mode == 'marquee') {
          this.marqueeSelect(this.downX, this.downY, this.cursorX, this.cursorY);
          this.mode = null;
        }
        this.left = false;

        this.emit('update');
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorX = event.pageX;
      this.cursorY = event.pageY;

      this.deltaX = this.lastX !== undefined ? this.cursorX - this.lastX : 0;
      this.deltaY = this.lastY !== undefined ? this.cursorY - this.lastY : 0;

      if (this.mode == 'drag') {
        this.moveSelectionBy(this.deltaX, this.deltaY);
      } else if (this.mode == 'marquee') {
        this.emit('update');
      } else {
        if (this.left) {
          if (this.target) {
            var dx = this.cursorX - this.downX;
            var dy = this.cursorY - this.downY;
            if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
              this.moveSelectionBy(dx, dy);
              this.dragOn();
            }
          }
        }
      }

      this.lastX = this.cursorX;
      this.lastY = this.cursorY;
    }
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {}
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {}
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
      }
    }
  }]);

  return PointerTool;
}(_tool2.default);

exports.default = PointerTool;

/***/ }),

/***/ "./src/paper/tools/tool.js":
/*!*********************************!*\
  !*** ./src/paper/tools/tool.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(/*! ../../events.js */ "./src/events.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tool = function (_EventDispatcher) {
  _inherits(Tool, _EventDispatcher);

  function Tool() {
    _classCallCheck(this, Tool);

    return _possibleConstructorReturn(this, (Tool.__proto__ || Object.getPrototypeOf(Tool)).call(this));
  }

  _createClass(Tool, [{
    key: 'render',
    value: function render(ctx) {}
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {}
  }]);

  return Tool;
}(_events.EventDispatcher);

exports.default = Tool;

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

var _paper = __webpack_require__(/*! ./paper/paper */ "./src/paper/paper.js");

var _paper2 = _interopRequireDefault(_paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = function () {
  function Stage() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Stage);

    this.children = [];
    this.selection = [];
    this.context = null;

    this.paper = new _paper2.default({ visible: false });

    this.el = document.createElement('div');
    this.el.classList.add('stage');

    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.el.appendChild(this.canvas);

    // this.cursor = document.createElement('div');
    // this.cursor.classList.add('stage-cursor');

    // this.el.appendChild(this.paper.dom());

    window.addEventListener('mousedown', this);
    window.addEventListener('mouseup', this);
    window.addEventListener('mousemove', this);
    window.addEventListener('dblclick', this);
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
    key: 'edit',
    value: function edit() {
      // console.log('edit');
      if (this.context) {} else {
        if (this.selection.length) {
          // console.log('selection');
          this.context = this.selection[0];
        } else {
          var group = new _group2.default();
          group.x = this.canvas.width / 2 >> 0;
          group.y = this.canvas.height / 2 >> 0;
          this.context = group;
        }
      }
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
      var points = shape.getPoints();

      var ctx = this.canvas.getContext('2d');
      ctx.save();

      ctx.translate(x, y);

      ctx.beginPath();

      for (var j = 0; j < points.length; j++) {
        var p = points[j];
        if (j == 0) ctx.moveTo(p.x + shape.x, p.y + shape.y);else ctx.lineTo(p.x + shape.x, p.y + shape.y);
      }

      if (shape.closed) ctx.closePath();

      ctx.lineWidth = 1;
      ctx.strokeStyle = shape.stroke || 'transparent';
      ctx.fillStyle = shape.fill || 'transparent';

      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }
  }, {
    key: 'renderHints',
    value: function renderHints(transform) {
      var ctx = this.canvas.getContext('2d');
      ctx.save();
      ctx.translate(0.5, 0.5);
      ctx.strokeStyle = transform.selected ? 'red' : 'blue';
      ctx.beginPath();
      ctx.arc(transform.x, transform.y, 3, 0, Math.PI * 2, false);
      ctx.stroke();
      var bounds = transform.getBounds();
      if (bounds) {
        ctx.strokeStyle = transform.selected ? 'red' : 'blue';
        ctx.beginPath();
        ctx.rect(bounds.x, bounds.y, bounds.width, bounds.height);
        ctx.stroke();
      }
      ctx.restore();
    }
  }, {
    key: 'renderObject',
    value: function renderObject(transform) {
      if (transform instanceof _group2.default) {
        for (var i = 0; i < transform.children.length; i++) {
          var child = transform.children[i];
          this.renderShape(child, transform.x, transform.y);
        }
      }
      if (transform.selected) this.renderHints(transform);
    }
  }, {
    key: 'renderAxis',
    value: function renderAxis(x, y) {
      var size = 10;
      var ctx = this.canvas.getContext('2d');
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

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        this.renderObject(child);
      }

      if (this.context) {
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 0.5;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.globalAlpha = 1;
        this.renderAxis(this.context.x, this.context.y);
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
    key: 'showPaper',
    value: function showPaper() {}
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      // console.log('down');
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
    value: function onKeyDown(event) {}
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {
      this.edit();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NlcXVlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvcGVuY2lsX3Rvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyL3Rvb2xzL3BvaW50ZXJfdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJzdGFydHVwIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXBlciIsInNldEVkaXRvciIsImdsb2JhbCIsInN0YWdlRWwiLCJzdGFnZSIsInNoYXBlcyIsImdldFNoYXBlcyIsImxlbmd0aCIsImdyb3VwIiwieCIsInkiLCJpIiwic2hhcGUiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJ3aWR0aCIsImhlaWdodCIsImFkZCIsImVkaXRvciIsImhpZGUiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInNob3ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzaXplVGltZXJJZCIsInNldFRpbWVvdXQiLCJzZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidHlwZSIsIm9uQ29udGV4dE1lbnUiLCJvblJlc2l6ZSIsImhhbmRsZUV2ZW50Iiwib25LZXlEb3duIiwib25Nb3VzZURvd24iLCJjb25zb2xlIiwibG9nIiwiaW5pdCIsIkZyYW1lIiwicHVzaCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIkdyb3VwIiwicGFyYW1zIiwiY2hpbGRyZW4iLCJjb250ZW50IiwiQXJyYXkiLCJoaXRUZXN0IiwicmVjdHMiLCJjaGlsZCIsInhtaW4iLCJ5bWluIiwieG1heCIsInltYXgiLCJyZWN0IiwiU2VxdWVuY2UiLCJmcmFtZXMiLCJmcmFtZSIsInVuZGVmaW5lZCIsImZyYW1lTm8iLCJTaGFwZSIsImZpbGwiLCJzdHJva2UiLCJjbG9zZWQiLCJwb2ludExpc3QiLCJjb3B5IiwicG9pbnRzIiwicDAiLCJwMSIsImxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlIiwicG9pbnRJblBvbHlnb24iLCJUZXh0Iiwic2l6ZSIsInNldFRleHQiLCJ2YWx1ZSIsIlRyYW5zZm9ybSIsInNlbGVjdGVkIiwiX3giLCJlbWl0IiwiX3kiLCJFZGl0b3IiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUG9pbnRMaXN0IiwicCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJSZWN0YW5nbGUiLCJhbW91bnQiLCJWZWN0b3IiLCJ2ZWN0b3IiLCJkb3QiLCJyYXRpbyIsIlBhcGVyIiwic2VsZWN0aW9uIiwiY2xpcGJvYXJkIiwic2VxdWVuY2UiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjYW52YXMiLCJjdXJzb3JYIiwiY3Vyc29yWSIsImFkZEZyYW1lIiwiZ29GcmFtZSIsInNldFRvb2wiLCJyZW5kZXIiLCJnZXRQb2ludHMiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2F2ZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwic3AiLCJ3b3JsZFRvU2NyZWVuIiwiaiIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInJlc3RvcmUiLCJ0cmFuc2xhdGUiLCJhcmMiLCJQSSIsImZpbGxSZWN0IiwicmVuZGVyQXhpcyIsImdldEZyYW1lIiwiZHJhd091dGxpbmUiLCJkcmF3U2hhcGUiLCJyZW5kZXJIaW50cyIsInRvb2wiLCJ0ZXh0QmFzZWxpbmUiLCJmb250IiwiZmlsbFRleHQiLCJ0eCIsInR5IiwiY3Vyc29yIiwiY29udGFpbnMiLCJ0b29sTmFtZSIsIm9uIiwiYWRkU2hhcGUiLCJzZXRDdXJzb3IiLCJjbGVhciIsImNsZWFyRnJhbWUiLCJyZW1vdmUiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInNldCIsImNvbmNhdCIsInBhZ2VYIiwicGFnZVkiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJrZXkiLCJyZXBlYXQiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiY29weVNlbGVjdGVkIiwicGFzdGUiLCJzZWxlY3RBbGwiLCJkZWxldGVTZWxlY3RlZCIsImRlbGV0ZUZyYW1lIiwiYnJpbmdUb0Zyb250Iiwic2VuZFRvQmFjayIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwib25EYmxDbGljayIsIlBlbmNpbFRvb2wiLCJzY3JlZW5Ub1dvcmxkIiwiZHJhd1BhdGgiLCJjcCIsImRpc3RhbmNlIiwiYnV0dG9uIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJQb2ludGVyVG9vbCIsInAyIiwiaW50ZXJzZWN0c1JlY3RhbmdsZSIsIm1vZGUiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJkb3duWCIsImRvd25ZIiwibW9kaWZpZXIiLCJoaXQiLCJ0YXJnZXQiLCJkcmFnT2ZmIiwibWFycXVlZVNlbGVjdCIsImRlbHRhWCIsImxhc3RYIiwiZGVsdGFZIiwibGFzdFkiLCJtb3ZlU2VsZWN0aW9uQnkiLCJhYnMiLCJkcmFnT24iLCJUb29sIiwiU3RhZ2UiLCJjb250ZXh0IiwidmlzaWJsZSIsInRyYW5zZm9ybSIsImFkZGVkVG9TdGFnZSIsInNlbGVjdCIsImRlc2VsZWN0IiwibGluZVdpZHRoIiwicmVuZGVyU2hhcGUiLCJjbGVhclJlY3QiLCJyZW5kZXJPYmplY3QiLCJnbG9iYWxBbHBoYSIsIml0ZW0iLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiY2FuY2VsRHJhZyIsInNlbGVjdE1hcnF1ZWUiLCJjYW5jZWxNYXJxdWVlIiwiYnV0dG9ucyIsImJlZ2luRHJhZyIsImJlZ2luTWFycXVlZSIsImVkaXQiLCJTdmciLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZSIsInNldEF0dHJpYnV0ZSIsInN2ZyIsInRlc3R4IiwidGVzdHkiLCJjIiwibSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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XHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJztcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyL3BhcGVyJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2Rpc3BsYXkvdGV4dCc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc3RhcnR1cCgpO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcyk7XG4gIH1cblxuICBzdGFydHVwKCkge1xuICAgIHRoaXMuZG9tLmFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoKTtcbiAgICB0aGlzLnNldEVkaXRvcih0aGlzLnBhcGVyKTtcblxuICAgIGdsb2JhbC5wYXBlciA9IHRoaXMucGFwZXI7XG4gIH1cblxuICBncmFiUGFwZXJTaGFwZXMoKSB7XG4gICAgbGV0IHN0YWdlRWwgPSB0aGlzLnN0YWdlLmRvbSgpO1xuICAgIGxldCBzaGFwZXMgPSB0aGlzLnBhcGVyLmdldFNoYXBlcygpO1xuXG4gICAgaWYgKHNoYXBlcy5sZW5ndGgpIHtcbiAgICAgIGxldCBncm91cCA9IG5ldyBHcm91cCgpO1xuICAgICAgbGV0IHggPSAwO1xuICAgICAgbGV0IHkgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgICBsZXQgYm91bmRzID0gc2hhcGUuZ2V0Qm91bmRzKCk7XG4gICAgICAgIHggKz0gYm91bmRzLnggKyBib3VuZHMud2lkdGggLyAyO1xuICAgICAgICB5ICs9IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAvIDI7XG4gICAgICB9XG4gICAgICB4IC89IHNoYXBlcy5sZW5ndGg7XG4gICAgICB5IC89IHNoYXBlcy5sZW5ndGg7XG5cbiAgICAgIGdyb3VwLnggPSB4O1xuICAgICAgZ3JvdXAueSA9IHk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgICAgICAgc2hhcGUueCArPSBncm91cC54O1xuICAgICAgICBzaGFwZS55ICs9IGdyb3VwLnk7XG4gICAgICB9XG5cbiAgICAgIGdyb3VwLmFkZChzaGFwZXMpO1xuICAgICAgdGhpcy5zdGFnZS5hZGQoZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHNldEVkaXRvcihlZGl0b3IpIHtcbiAgICBpZiAoZWRpdG9yICE9PSB0aGlzLmVkaXRvcikge1xuICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yLmhpZGUoKTtcbiAgICAgICAgdGhpcy5kb20uYXBwLnJlbW92ZUNoaWxkKHRoaXMuZG9tLmFwcC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMuZWRpdG9yLmRvbSgpKTtcbiAgICAgIHRoaXMuZWRpdG9yLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICAvLyBpZiAoZXZlbnQua2V5ID09ICdwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnNob3dBcmVhKCdwYXBlcicpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvL1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2UnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIHRoaXMuc3RhZ2UuZWRpdCgpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgIC8vICAgICB0aGlzLnBhcGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIGlmICghdGhpcy5yZXNpemVUaW1lcklkKSB7XG4gICAgICB0aGlzLnJlc2l6ZVRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXBlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVySWQgPSBudWxsO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ3Jlc2l6ZScpIHtcbiAgICAgIHRoaXMub25SZXNpemUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgICB0aGlzLmVkaXRvci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpO1xuICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuICBhcHAuaW5pdCgpO1xufSk7XG4iLCJcbmNsYXNzIEZyYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgfVxuXG4gIGFkZChzaGFwZSkge1xuICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUpO1xuICB9XG5cbiAgcmVtb3ZlKHNoYXBlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5zaGFwZXMuaW5kZXhPZihzaGFwZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5zaGFwZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lO1xuIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL3NoYXBlJztcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxuXG4gIGFkZChjb250ZW50KSB7XG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IGNvbnRlbnRbaV07XG4gICAgICAgIGlmIChzaGFwZSBpbnN0YW5jZW9mIFNoYXBlKSB0aGlzLmFkZChzaGFwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChzaGFwZS5oaXRUZXN0KHggLSB0aGlzLngsIHkgLSB0aGlzLnkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgbGV0IHJlY3RzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBsZXQgYm91bmRzID0gY2hpbGQuZ2V0Qm91bmRzKCk7XG4gICAgICByZWN0cy5wdXNoKGJvdW5kcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlY3RzLmxlbmd0aCkge1xuICAgICAgbGV0IHhtaW4gPSAwOyAvL051bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gMDsgLy9OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IDA7IC8vTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltYXggPSAwOyAvL051bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmVjdCA9IHJlY3RzW2ldO1xuICAgICAgICB4bWluID0gcmVjdC54IDwgeG1pbiA/IHJlY3QueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSByZWN0LnkgPCB5bWluID8gcmVjdC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHJlY3QueCArIHJlY3Qud2lkdGggPiB4bWF4ID8gcmVjdC54ICsgcmVjdC53aWR0aCA6IHhtYXg7XG4gICAgICAgIHltYXggPSByZWN0LnkgKyByZWN0LmhlaWdodCA+IHltYXggPyByZWN0LnkgKyByZWN0LmhlaWdodCA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluICsgdGhpcy54LCB5bWluICsgdGhpcy55LCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiXG5jbGFzcyBTZXF1ZW5jZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZnJhbWVzID0gW107XG4gIH1cblxuICBhZGQoZnJhbWUsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLmZyYW1lcy5zcGxpY2UoaW5kZXgsIDAsIGZyYW1lKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5mcmFtZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmZyYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGdldEZyYW1lKGZyYW1lTm8pIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXNbZnJhbWVOb107XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lcy5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VxdWVuY2U7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBQb2ludExpc3QgZnJvbSAnLi4vZ2VvbS9wb2ludF9saXN0JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIFNoYXBlIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMueCA9IHBhcmFtcy54IHx8IDA7XG4gICAgdGhpcy55ID0gcGFyYW1zLnkgfHwgMDtcbiAgICB0aGlzLmZpbGwgPSBwYXJhbXMuZmlsbCB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gcGFyYW1zLnN0cm9rZSB8fCBudWxsO1xuICAgIHRoaXMuY2xvc2VkID0gcGFyYW1zLmNsb3NlZCB8fCBmYWxzZTtcbiAgICAvLyB0aGlzLnN0cm9rZVdpZHRoID0gcGFyYW1zLnN0cm9rZVdpZHRoIHx8IDE7XG5cbiAgICBpZiAocGFyYW1zLnBvaW50TGlzdClcbiAgICAgIHRoaXMucG9pbnRMaXN0ID0gcGFyYW1zLnBvaW50TGlzdC5jb3B5KCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5wb2ludExpc3QgPSBuZXcgUG9pbnRMaXN0KCk7XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgU2hhcGUoeyB4OiB0aGlzLngsIHk6IHRoaXMueSwgcG9pbnRMaXN0OiB0aGlzLnBvaW50TGlzdCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSwgZmlsbDogdGhpcy5maWxsLCBjbG9zZWQ6IHRoaXMuY2xvc2VkIH0pO1xuICB9XG5cbiAgZ2V0UG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgbGV0IGJvdW5kcyA9IHRoaXMucG9pbnRMaXN0LmdldEJvdW5kcygpO1xuICAgIGJvdW5kcy54ICs9IHRoaXMueDtcbiAgICBib3VuZHMueSArPSB0aGlzLnk7XG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIGlmICh4bWluID4geG1heCkgW3htaW4sIHhtYXhdID0gWyB4bWF4LCB4bWluIF07XG4gICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgICBsZXQgcG9pbnRzID0gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcDAgPSBwb2ludHNbaSAtIDFdO1xuICAgICAgbGV0IHAxID0gcG9pbnRzW2ldO1xuICAgICAgaWYgKFV0aWwubGluZUludGVyc2VjdHNSZWN0YW5nbGUocDAueCwgcDAueSwgcDEueCwgcDEueSwgeG1pbiAtIHRoaXMueCwgeW1pbiAtIHRoaXMueSwgeG1heCAtIHRoaXMueCwgeW1heCAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gICAgaWYgKHRoaXMuZmlsbCkge1xuICAgICAgcmV0dXJuIFV0aWwucG9pbnRJblBvbHlnb24ocG9pbnRzLCB4IC0gdGhpcy54LCB5IC0gdGhpcy55KTtcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLmNvbnRlbnQpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgeyBFdmVudCwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZXZlbnRzJztcblxuY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzLl94ID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0KCd2YWx1ZWNoYW5nZScpO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLl95ID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0KCd2YWx1ZWNoYW5nZScpO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZG9tKCkge1xuICB9XG5cbiAgc2hvdygpIHtcblxuICB9XG5cbiAgaGlkZSgpIHtcblxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcbiIsIlxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJhbXMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbiAgZW1pdCh0eXBlLCAuLi5hcmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICBpZiAobGlzdGVuZXIudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyB0eXBlOiB0eXBlLCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEV2ZW50RGlzcGF0Y2hlciwgRXZlbnQgfTtcbiIsIlxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICB9XG5cbiAgaW50ZXJzZWN0c0xpbmVTZWdtZW50KHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgfVxuXG4gIGNvbnRhaW5zUG9pbnQoeCwgeSkge1xuICAgIGxldCBkeCA9IHggLSB0aGlzLng7XG4gICAgbGV0IGR5ID0geSAtIHRoaXMueTtcbiAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgcmV0dXJuIGQgPCB0aGlzLnI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiXG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkaXN0YW5jZShwb2ludCkge1xuICAgIGxldCBkeCA9IHRoaXMueCAtIHBvaW50Lng7XG4gICAgbGV0IGR5ID0gdGhpcy55IC0gcG9pbnQueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9yZWN0YW5nbGUnO1xuXG5jbGFzcyBQb2ludExpc3Qge1xuICBjb25zdHJ1Y3Rvcihwb2ludHMpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIGlmIChwb2ludHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludChwLngsIHAueSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludExpc3QodGhpcy5wb2ludHMpO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgIHhtaW4gPSBwLnggPCB4bWluID8gcC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcC54ID4geG1heCA/IHAueCA6IHhtYXg7XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRMaXN0O1xuIiwiXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdyb3coYW1vdW50KSB7XG4gICAgdGhpcy54IC09IGFtb3VudDtcbiAgICB0aGlzLnkgLT0gYW1vdW50O1xuICAgIHRoaXMud2lkdGggKz0gYW1vdW50ICogMjtcbiAgICB0aGlzLmhlaWdodCArPSBhbW91bnQgKiAyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi9nZW9tL2NpcmNsZSc7XG5cbmltcG9ydCBTaGFwZSBmcm9tICcuLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBGcmFtZSBmcm9tICcuLi9kaXNwbGF5L2ZyYW1lJztcbmltcG9ydCBTZXF1ZW5jZSBmcm9tICcuLi9kaXNwbGF5L3NlcXVlbmNlJztcblxuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IFBvaW50ZXJUb29sIGZyb20gJy4vdG9vbHMvcG9pbnRlcl90b29sJztcbmltcG9ydCBQZW5jaWxUb29sIGZyb20gJy4vdG9vbHMvcGVuY2lsX3Rvb2wnO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IG51bGw7XG5cbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuY2xpcGJvYXJkID0gW107XG4gICAgdGhpcy5zZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZSgpO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yWCA9IDA7XG4gICAgdGhpcy5jdXJzb3JZID0gMDtcblxuICAgIHRoaXMuYWRkRnJhbWUoKTtcbiAgICB0aGlzLmdvRnJhbWUoMCk7XG5cbiAgICB0aGlzLnNldFRvb2woJ3BvaW50ZXInKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBkcmF3U2hhcGUoc2hhcGUpIHtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGxldCBzcCA9IHRoaXMud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIGxldCB4ID0gKHAueCArIHNwLngpO1xuICAgICAgbGV0IHkgPSAocC55ICsgc3AueSk7XG5cbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd091dGxpbmUoc2hhcGUsIHN0cm9rZSkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2UgfHwgJ2JsYWNrJztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGxldCBzcCA9IHRoaXMud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBsZXQgeCA9IChwLnggKyBzcC54KTtcbiAgICAgIGxldCB5ID0gKHAueSArIHNwLnkpO1xuXG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJBeGlzKHgsIHkpIHtcbiAgICBsZXQgc2l6ZSA9IDIwO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIGN0eC5tb3ZlVG8oeCAtIHNpemUsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHNpemUsIHkpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHNpemUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHMoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICAgIGxldCBwID0gdGhpcy53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMocC54ID4+IDAsIHAueSA+PiAwLCAzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLnJlbmRlckF4aXMoKHRoaXMuY2FudmFzLndpZHRoIC8gMikgPj4gMCwgKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpID4+IDApO1xuXG4gICAgaWYgKHRoaXMuZnJhbWVObyA+IDApIHtcbiAgICAgIGxldCBmcmFtZSA9IHRoaXMuc2VxdWVuY2UuZ2V0RnJhbWUodGhpcy5mcmFtZU5vIC0gMSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBmcmFtZS5zaGFwZXNbaV07XG4gICAgICAgIHRoaXMuZHJhd091dGxpbmUoc2hhcGUsICdyZ2IoMTkyLCAyNDAsIDE5MiknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLmZyYW1lLnNoYXBlc1tpXTtcbiAgICAgIHRoaXMuZHJhd1NoYXBlKHNoYXBlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckhpbnRzKCk7XG5cbiAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgdGhpcy50b29sLnJlbmRlcihjdHgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgY3R4LmZvbnQgPSAnMThweCBzYW5zLXNlcmlmJztcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguZmlsbFRleHQoKHRoaXMuZnJhbWVObyArIDEpICsgJzonICsgdGhpcy5zZXF1ZW5jZS5sZW5ndGgsIDIwLCAyMCk7XG4gIH1cblxuICBzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKHRoaXMuZnJhbWUuc2hhcGVzW2ldKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNjcmVlblRvV29ybGQoeCwgeSkge1xuICAgIGxldCB0eCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICBsZXQgdHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCAtIHR4LCB5IC0gdHkpO1xuICB9XG5cbiAgd29ybGRUb1NjcmVlbih4LCB5KSB7XG4gICAgbGV0IHR4ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIGxldCB0eSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh4ICsgdHgsIHkgKyB0eSk7XG4gIH1cblxuICBhZGRTaGFwZShzaGFwZSkge1xuICAgIHRoaXMuZnJhbWUuYWRkKHNoYXBlKTtcbiAgfVxuXG4gIGdldFNoYXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZXM7XG4gIH1cblxuICBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gICAgaWYgKHRoaXMuZWwuY29udGFpbnModGhpcy5jdXJzb3IpKSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcbiAgICB9XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3I7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBzZXRUb29sKHRvb2xOYW1lKSB7XG4gICAgaWYgKHRvb2xOYW1lICE9PSB0aGlzLnRvb2xOYW1lKSB7XG4gICAgICBpZiAodG9vbE5hbWUgPT0gJ3BvaW50ZXInKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQb2ludGVyVG9vbCgpO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRvb2xOYW1lID09ICdwZW5jaWwnKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQZW5jaWxUb29sKCk7XG4gICAgICAgIHRoaXMudG9vbC5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3NoYXBlJywgKHNoYXBlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRTaGFwZShzaGFwZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9vbE5hbWUgPSB0b29sTmFtZTtcbiAgICAgIGlmICh0aGlzLnRvb2wuY3Vyc29yKSB0aGlzLnNldEN1cnNvcih0aGlzLnRvb2wuY3Vyc29yKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRnJhbWUoaW5kZXgpIHtcbiAgICBsZXQgZnJhbWUgPSBuZXcgRnJhbWUoKTtcblxuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5zZXF1ZW5jZS5hZGQoZnJhbWUsIGluZGV4KTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnNlcXVlbmNlLmFkZChmcmFtZSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2VsZWN0aW9uW2ldLmNvcHkoKTtcbiAgICAgICAgZnJhbWUuYWRkKHNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckZyYW1lKCkge1xuICAgIHRoaXMuZnJhbWUuY2xlYXIoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZGVsZXRlRnJhbWUoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5zZXF1ZW5jZS5sZW5ndGggPT0gMSkge1xuICAgICAgdGhpcy5jbGVhckZyYW1lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXF1ZW5jZS5yZW1vdmUoaW5kZXgpO1xuICAgICAgdGhpcy5nb0ZyYW1lKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBnb0ZyYW1lKGZyYW1lTm8pIHtcbiAgICBpZiAoZnJhbWVObyA8IDApXG4gICAgICBmcmFtZU5vID0gMDtcbiAgICBlbHNlIGlmIChmcmFtZU5vID4gdGhpcy5zZXF1ZW5jZS5sZW5ndGggLSAxKVxuICAgICAgZnJhbWVObyA9IHRoaXMuc2VxdWVuY2UubGVuZ3RoIC0gMTtcblxuICAgIGxldCBmcmFtZSA9IHRoaXMuc2VxdWVuY2UuZ2V0RnJhbWUoZnJhbWVObyk7XG4gICAgaWYgKGZyYW1lKSB7XG4gICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgICB0aGlzLmZyYW1lTm8gPSBmcmFtZU5vO1xuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlU2VsZWN0ZWQoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICB0aGlzLmZyYW1lLnJlbW92ZShzaGFwZSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNvcHlTZWxlY3RlZCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBsZXQgY2xpcGJvYXJkID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2VsZWN0aW9uW2ldLmNvcHkoKTtcbiAgICAgICAgY2xpcGJvYXJkLnB1c2goc2hhcGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGlwYm9hcmQgPSBjbGlwYm9hcmQ7XG4gICAgfVxuICB9XG5cbiAgcGFzdGUoKSB7XG4gICAgaWYgKHRoaXMuY2xpcGJvYXJkLmxlbmd0aCkgIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xpcGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuY2xpcGJvYXJkW2ldLmNvcHkoKTtcbiAgICAgICAgdGhpcy5mcmFtZS5hZGQoc2hhcGUpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKHNoYXBlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgYnJpbmdUb0Zyb250KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGxldCBzaGFwZXMgPSB0aGlzLmZyYW1lLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gIXRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKHNoYXBlKSk7XG4gICAgICBsZXQgc2V0ID0gdGhpcy5mcmFtZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKHNoYXBlKSk7XG4gICAgICB0aGlzLmZyYW1lLnNoYXBlcyA9IHNoYXBlcy5jb25jYXQoc2V0KTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2VuZFRvQmFjaygpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBsZXQgc2hhcGVzID0gdGhpcy5mcmFtZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+ICF0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhzaGFwZSkpO1xuICAgICAgbGV0IHNldCA9IHRoaXMuZnJhbWUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiB0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhzaGFwZSkpO1xuICAgICAgdGhpcy5mcmFtZS5zaGFwZXMgPSBzZXQuY29uY2F0KHNoYXBlcyk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVk7XG4gICAgaWYgKHRoaXMuY3Vyc29yKSB7XG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJzb3JYICsgJ3B4JztcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yWSArICdweCc7XG4gICAgfVxuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5zZXRUb29sKCdwb2ludGVyJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYicgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5zZXRUb29sKCdwZW5jaWwnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKGV2ZW50LmtleSA9PSAnLicgfHwgZXZlbnQua2V5ID09ICc+JykgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIHRoaXMuYWRkRnJhbWUodGhpcy5mcmFtZU5vICsgMSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdvRnJhbWUodGhpcy5mcmFtZU5vICsgMSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKChldmVudC5rZXkgPT0gJywnIHx8IGV2ZW50LmtleSA9PSAnPCcpICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICB0aGlzLmFkZEZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgICAgIHRoaXMuZ29GcmFtZSh0aGlzLmZyYW1lTm8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nb0ZyYW1lKHRoaXMuZnJhbWVObyAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2MnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgdGhpcy5jb3B5U2VsZWN0ZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICd2JyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICBpZiAoZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5KSB7XG4gICAgICAgIHRoaXMucGFzdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbCgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3gnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuZGVsZXRlU2VsZWN0ZWQoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdYJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLmRlbGV0ZUZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnQXJyb3dVcCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgaWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSkgdGhpcy5icmluZ1RvRnJvbnQoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdBcnJvd0Rvd24nICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpIHRoaXMuc2VuZFRvQmFjaygpO1xuICAgIH1cbiAgICAvLyBpZiAoZXZlbnQua2V5ID09ICdzJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnNldFN0cm9rZSh0aGlzLnN0cm9rZSA/IG51bGwgOiAnYmxhY2snKVxuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChldmVudC5rZXkgPT0gJzAnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIHRoaXMuc2V0RmlsbChudWxsKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoWycxJywgJzInLCAnMycsICc0J10uaW5jbHVkZXMoZXZlbnQua2V5KSAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICBsZXQgY29sb3IgPSBDT0xPUlNbcGFyc2VJbnQoZXZlbnQua2V5KSAtIDFdO1xuICAgIC8vICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpXG4gICAgLy8gICAgIHRoaXMuc2V0RmlsbChjb2xvcik7XG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhdycpIHtcbiAgICAvLyAgICAgaWYgKGV2ZW50LmtleSA9PSAnRXNjYXBlJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICAgICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2Uge1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgIHRoaXMudG9vbC5oYW5kbGVFdmVudChldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uLy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFBvaW50TGlzdCBmcm9tICcuLi8uLi9nZW9tL3BvaW50X2xpc3QnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4uLy4uL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcblxuY2xhc3MgUGVuY2lsVG9vbCBleHRlbmRzIFRvb2wge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zdHJva2UgPSAnZ3JheSc7XG4gICAgdGhpcy5maWxsID0gJ2xpZ2h0Z3JheSc7XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BlbmNpbC1jdXJzb3InKTtcbiAgfVxuXG4gIGNsb3NlUGF0aChjbG9zZWQ9ZmFsc2UpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHBvaW50TGlzdCA9IG5ldyBQb2ludExpc3QodGhpcy5wb2ludHMpO1xuICAgICAgbGV0IGJvdW5kcyA9IHBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgICAgIGxldCB4ID0gYm91bmRzLnggKyBib3VuZHMud2lkdGggLyAyO1xuICAgICAgbGV0IHkgPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludExpc3QucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRMaXN0LnBvaW50c1tpXTtcbiAgICAgICAgcC54IC09IHg7XG4gICAgICAgIHAueSAtPSB5O1xuICAgICAgfVxuICAgICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHsgcG9pbnRMaXN0OiBwb2ludExpc3QsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSwgY2xvc2VkOiBjbG9zZWQgfSk7XG4gICAgICBsZXQgcCA9IHBhcGVyLnNjcmVlblRvV29ybGQoeCwgeSk7XG4gICAgICBzaGFwZS54ID0gcC54O1xuICAgICAgc2hhcGUueSA9IHAueTtcbiAgICAgIHRoaXMuZW1pdCgnc2hhcGUnLCBzaGFwZSk7XG4gICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdQYXRoKGN0eCwgcG9pbnRzLCBzdHJva2UsIGZpbGwsIGNsb3NlZD1mYWxzZSkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZSAhPT0gdW5kZWZpbmVkID8gKHN0cm9rZSA/IHN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbCAhPT0gdW5kZWZpbmVkID8gKGZpbGwgPyBmaWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgaWYgKHN0cm9rZSA9PSBudWxsKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnY3lhbic7XG4gICAgfVxuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kcmF3UGF0aChjdHgsIHRoaXMucG9pbnRzLCB0aGlzLnN0cm9rZSwgdGhpcy5maWxsKTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGxldCBjcCA9IG5ldyBQb2ludCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBsZXQgcDAgPSB0aGlzLnBvaW50c1swXTtcblxuICAgICAgaWYgKGNwLmRpc3RhbmNlKHAwKSA8IDUpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHAwLngsIHAwLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgNSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHt9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7fVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZW5jaWxUb29sO1xuIiwiaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9kaXNwbGF5L3NoYXBlJztcblxuY2xhc3MgUG9pbnRlclRvb2wgZXh0ZW5kcyBUb29sIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BvaW50ZXItY3Vyc29yJyk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBsZXQgc3AgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHgsIHkpO1xuICAgIGZvciAodmFyIGkgPSBwYXBlci5mcmFtZS5zaGFwZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBzaGFwZSA9IHBhcGVyLmZyYW1lLnNoYXBlc1tpXTtcbiAgICAgIGlmIChzaGFwZS5oaXRUZXN0KHNwLngsIHNwLnkpKSB7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBtYXJxdWVlU2VsZWN0KHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBsZXQgcDEgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHhtaW4sIHltaW4pO1xuICAgIGxldCBwMiA9IHBhcGVyLnNjcmVlblRvV29ybGQoeG1heCwgeW1heCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFwZXIuZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5mcmFtZS5zaGFwZXNbaV07XG4gICAgICBpZiAoc2hhcGUgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgICBpZiAoc2hhcGUuaW50ZXJzZWN0c1JlY3RhbmdsZShwMS54LCBwMS55LCBwMi54LCBwMi55KSkge1xuICAgICAgICAgIHNlbGVjdGlvbi5wdXNoKHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwYXBlci5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgLy8gY29uc29sZS5sb2cocGFwZXIuc2VsZWN0aW9uKTtcbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcGVyLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gcGFwZXIuc2VsZWN0aW9uW2ldO1xuICAgICAgc2hhcGUueCArPSBkeDtcbiAgICAgIHNoYXBlLnkgKz0gZHk7XG4gICAgfVxuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBkcmFnT24oKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RyYWcnO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkcmFnT24nKTtcbiAgfVxuXG4gIGRyYWdPZmYoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICAvLyBjb25zb2xlLmxvZygnZHJhZ09mZicpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZXhjbHVzaW9uJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy5kb3duWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5kb3duWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgbGV0IG1vZGlmaWVyID0gZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleTtcbiAgICAgIHRoaXMuZG93blggPSBldmVudC5wYWdlWDtcbiAgICAgIHRoaXMuZG93blkgPSBldmVudC5wYWdlWTtcblxuICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcblxuICAgICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmRvd25YLCB0aGlzLmRvd25ZKTtcbiAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgaWYgKHBhcGVyLnNlbGVjdGlvbi5pbmNsdWRlcyhoaXQpKSB7XG4gICAgICAgICAgaWYgKG1vZGlmaWVyKVxuICAgICAgICAgICAgcGFwZXIuc2VsZWN0aW9uLnNwbGljZShwYXBlci5zZWxlY3Rpb24uaW5kZXhPZihoaXQpLCAxKTtcbiAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICAvLyBwYXBlci5zZWxlY3Rpb24gPSBbaGl0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAobW9kaWZpZXIpXG4gICAgICAgICAgICBwYXBlci5zZWxlY3Rpb24ucHVzaChoaXQpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBhcGVyLnNlbGVjdGlvbiA9IFsgaGl0IF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQgPSBoaXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXBlci5zZWxlY3Rpb24gPSBbXTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpIHtcbiAgICAgICAgdGhpcy5kcmFnT2ZmKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICAgIHRoaXMubWFycXVlZVNlbGVjdCh0aGlzLmRvd25YLCB0aGlzLmRvd25ZLCB0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZO1xuXG4gICAgdGhpcy5kZWx0YVggPSAodGhpcy5sYXN0WCAhPT0gdW5kZWZpbmVkID8gdGhpcy5jdXJzb3JYIC0gdGhpcy5sYXN0WCA6IDApO1xuICAgIHRoaXMuZGVsdGFZID0gKHRoaXMubGFzdFkgIT09IHVuZGVmaW5lZCA/IHRoaXMuY3Vyc29yWSAtIHRoaXMubGFzdFkgOiAwKTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeSh0aGlzLmRlbHRhWCwgdGhpcy5kZWx0YVkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmxlZnQpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgbGV0IGR4ID0gdGhpcy5jdXJzb3JYIC0gdGhpcy5kb3duWDtcbiAgICAgICAgICBsZXQgZHkgPSB0aGlzLmN1cnNvclkgLSB0aGlzLmRvd25ZO1xuICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiAyIHx8IE1hdGguYWJzKGR5KSA+IDIpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSk7XG4gICAgICAgICAgICB0aGlzLmRyYWdPbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubGFzdFggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMuY3Vyc29yWTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcblxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG5cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50ZXJUb29sO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZXZlbnRzLmpzJztcblxuY2xhc3MgVG9vbCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbDtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2Rpc3BsYXkvZ3JvdXAnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXIvcGFwZXInO1xuXG5jbGFzcyBTdGFnZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG5cbiAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKHsgdmlzaWJsZTogZmFsc2UgfSk7XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgLy8gdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdzdGFnZS1jdXJzb3InKTtcblxuICAgIC8vIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5kb20oKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcyk7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGQodHJhbnNmb3JtKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRyYW5zZm9ybSk7XG4gICAgdHJhbnNmb3JtLmFkZGVkVG9TdGFnZSgpO1xuICAgIHRyYW5zZm9ybS5vbigndmFsdWVjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdlZGl0Jyk7XG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGlvbicpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLnNlbGVjdGlvblswXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZ3JvdXAueCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpID4+IDA7XG4gICAgICAgIGdyb3VwLnkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgPj4gMDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZ3JvdXA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICAgIGlmIChjaGlsZC5pbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpKSB7XG4gICAgICAgICAgc2VsZWN0aW9uLnB1c2goY2hpbGQpO1xuICAgICAgICAgIGNoaWxkLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlclNoYXBlKHNoYXBlLCB4LCB5KSB7XG4gICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJIaW50cyh0cmFuc2Zvcm0pIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyYW5zZm9ybS5zZWxlY3RlZCA/ICdyZWQnIDogJ2JsdWUnO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSwgMywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgbGV0IGJvdW5kcyA9IHRyYW5zZm9ybS5nZXRCb3VuZHMoKTtcbiAgICBpZiAoYm91bmRzKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmFuc2Zvcm0uc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlck9iamVjdCh0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHJhbnNmb3JtIGluc3RhbmNlb2YgR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhbnNmb3JtLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHRyYW5zZm9ybS5jaGlsZHJlbltpXTtcbiAgICAgICAgdGhpcy5yZW5kZXJTaGFwZShjaGlsZCwgdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRyYW5zZm9ybS5zZWxlY3RlZCkgdGhpcy5yZW5kZXJIaW50cyh0cmFuc2Zvcm0pO1xuICB9XG5cbiAgcmVuZGVyQXhpcyh4LCB5KSB7XG4gICAgbGV0IHNpemUgPSAxMDtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5JztcbiAgICBjdHgubW92ZVRvKHggLSBzaXplLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyBzaXplLCB5KTtcbiAgICBjdHgubW92ZVRvKHgsIHkgLSBzaXplKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyBzaXplKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgdGhpcy5yZW5kZXJPYmplY3QoY2hpbGQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC41O1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgIHRoaXMucmVuZGVyQXhpcyh0aGlzLmNvbnRleHQueCwgdGhpcy5jb250ZXh0LnkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2V4Y2x1c2lvbic7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMuZG93blgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuZG93blgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICB9XG5cbiAgbW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICBpdGVtLnggKz0gZHg7XG4gICAgICBpdGVtLnkgKz0gZHk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBiZWdpbkRyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RyYWcnO1xuICB9XG5cbiAgY2FuY2VsRHJhZygpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICB9XG5cbiAgYmVnaW5NYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gIH1cblxuICBjYW5jZWxNYXJxdWVlKCkge1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNob3dQYXBlcigpIHtcblxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZG93bicpO1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbC5vZmZzZXRUb3A7XG5cbiAgICB0aGlzLmRvd25YID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMuZG93blkgPSB0aGlzLmN1cnNvclk7XG5cbiAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAgICAgaGl0LnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpXG4gICAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLnNlbGVjdE1hcnF1ZWUodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgdGhpcy5jYW5jZWxNYXJxdWVlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgdGhpcy5kZWx0YVggPSB0aGlzLmxhc3RYID8gdGhpcy5jdXJzb3JYIC0gdGhpcy5sYXN0WCA6IDA7XG4gICAgdGhpcy5kZWx0YVkgPSB0aGlzLmxhc3RZID8gdGhpcy5jdXJzb3JZIC0gdGhpcy5sYXN0WSA6IDA7XG5cbiAgICBpZiAoZXZlbnQuYnV0dG9ucyAmIDEpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeSh0aGlzLmRlbHRhWCwgdGhpcy5kZWx0YVkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5jdXJzb3JYIC0gdGhpcy5kb3duWDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5jdXJzb3JZIC0gdGhpcy5kb3duWTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPj0gMiB8fCBNYXRoLmFicyhkeSkgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5iZWdpbkRyYWcoKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuYmVnaW5NYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuZG93blggKyBkeCwgdGhpcy5kb3duWSArIGR5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGxldCBoaXQgPSB0aGlzLmhpdFRlc3QodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgLy8gaWYgKGhpdCkge1xuICAgICAgLy8gICB0aGlzLnRhcmdldCA9IGhpdDtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgLy8gICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHRoaXMubGFzdFggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMuY3Vyc29yWTtcblxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5lZGl0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJcbmNsYXNzIFN2ZyB7XG4gIHN0YXRpYyBlbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdHlwZSk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHN0YXRpYyBzdmcoYXR0cmlidXRlcykge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJywnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG4iLCJcbi8vIENvcHlyaWdodCAoYykgMTk3MC0yMDAzLCBXbS4gUmFuZG9scGggRnJhbmtsaW5cbi8vIGh0dHBzOi8vd3JmLmVjc2UucnBpLmVkdS8vUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcblxuZnVuY3Rpb24gcG9pbnRJblBvbHlnb24ocG9pbnRzLCB0ZXN0eCwgdGVzdHkpIHtcbiAgbGV0IGksIGosIGMgPSAwO1xuICBmb3IgKGxldCBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgIGlmICgoKHBvaW50c1tpXS55ID4gdGVzdHkpICE9IChwb2ludHNbal0ueSA+IHRlc3R5KSkgJiZcbiAgICAgICh0ZXN0eCA8IChwb2ludHNbal0ueCAtIHBvaW50c1tpXS54KSAqICh0ZXN0eSAtIHBvaW50c1tpXS55KSAvIChwb2ludHNbal0ueSAtIHBvaW50c1tpXS55KSArIHBvaW50c1tpXS54KSlcbiAgICAgIGMgPSAhYztcbiAgfVxuICByZXR1cm4gYztcbn1cblxuZnVuY3Rpb24gbGluZUludGVyc2VjdHNSZWN0YW5nbGUoeDEsIHkxLCB4MiwgeTIsIHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgLy8gQ29tcGxldGVseSBvdXRzaWRlLlxuICBpZiAoKHgxIDw9IHhtaW4gJiYgeDIgPD0geG1pbikgfHwgKHkxIDw9IHltaW4gJiYgeTIgPD0geW1pbikgfHxcbiAgICAgICh4MSA+PSB4bWF4ICYmIHgyID49IHhtYXgpIHx8ICh5MSA+PSB5bWF4ICYmIHkyID49IHltYXgpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICB2YXIgbSA9ICh5MiAtIHkxKSAvICh4MiAtIHgxKTtcblxuICB2YXIgeSA9IG0gKiAoeG1pbiAtIHgxKSArIHkxO1xuICBpZiAoeSA+IHltaW4gJiYgeSA8IHltYXgpIHJldHVybiB0cnVlO1xuXG4gIHkgPSBtICogKHhtYXggLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgeCA9ICh5bWluIC0geTEpIC8gbSArIHgxO1xuICBpZiAoeCA+IHhtaW4gJiYgeCA8IHhtYXgpIHJldHVybiB0cnVlO1xuXG4gIHggPSAoeW1heCAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGluZUludGVyc2VjdHNSZWN0YW5nbGU6IGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlLFxuICBwb2ludEluUG9seWdvbjogcG9pbnRJblBvbHlnb25cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=