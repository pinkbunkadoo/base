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
    this.paper = new _paper2.default();
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      this.dom.app = document.getElementById('app');

      this.setEditor(this.paper);

      global.paper = this.paper;
      global.app = this;

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
      if (!event.repeat) {
        if (event.key == ']') {} else if (event.key == ']') {}
      }
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
      } else if (event.type == 'keydown') {
        this.onKeyDown(event);
      } else if (event.type == 'mousedown') {
        this.onMouseDown(event);
      }

      if (this.editor) {
        this.editor.handleEvent(event);
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

var _player = __webpack_require__(/*! ./player */ "./src/paper/player.js");

var _player2 = _interopRequireDefault(_player);

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
    key: 'play',
    value: function play() {
      var _this5 = this;

      // console.log('player--');
      this.player = new _player2.default(this.canvas, this.sequence);
      this.player.on('done', function () {
        _this5.player = null;
        _this5.render();
        // console.log('done');
      });
      this.player.play();
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
      if (event.repeat) return;

      if (event.key == 'q') {
        this.setTool('pointer');
      } else if (event.key == 'b') {
        this.setTool('pencil');
      } else if (event.key == '.' || event.key == '>') {
        if (event.shiftKey) {
          this.addFrame(this.frameNo + 1);
        }
        this.goFrame(this.frameNo + 1);
      } else if (event.key == ',' || event.key == '<') {
        if (event.shiftKey) {
          this.addFrame(this.frameNo);
          this.goFrame(this.frameNo);
        } else {
          this.goFrame(this.frameNo - 1);
        }
      } else if (event.key == 'c') {
        if (event.metaKey || event.ctrlKey) {
          this.copySelected();
        }
      } else if (event.key == 'v') {
        if (event.metaKey || event.ctrlKey) {
          this.paste();
        }
      } else if (event.key == 'a') {
        this.selectAll();
      } else if (event.key == 'x') {
        this.deleteSelected();
      } else if (event.key == 'X') {
        this.deleteFrame(this.frameNo);
      } else if (event.key == 'ArrowUp') {
        if (event.metaKey || event.ctrlKey) this.bringToFront();
      } else if (event.key == 'ArrowDown') {
        if (event.metaKey || event.ctrlKey) this.sendToBack();
      } else if (event.key == ' ') {
        this.play();
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
      }

      if (this.player) {
        this.player.handleEvent(event);
      } else {
        if (event.type == 'keydown') {
          this.onKeyDown(event);
        }
        if (this.tool) {
          this.tool.handleEvent(event);
        }
      }
    }
  }]);

  return Paper;
}(_editor2.default);

exports.default = Paper;

/***/ }),

/***/ "./src/paper/player.js":
/*!*****************************!*\
  !*** ./src/paper/player.js ***!
  \*****************************/
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

var Player = function (_EventDispatcher) {
  _inherits(Player, _EventDispatcher);

  function Player(canvas, sequence) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this.canvas = canvas;
    _this.sequence = sequence;
    _this.frameNo = 0;
    _this.fps = 6;
    return _this;
  }

  _createClass(Player, [{
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.save();

      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      ctx.fillStyle = 'black';

      ctx.font = '16px sans-serif';
      ctx.fillText(this.playing ? 'Play' : 'Pause', 20, 20);

      ctx.font = '16px sans-serif';
      ctx.fillText(this.frameNo + 1, 100, 100);

      var frame = this.sequence.frames[this.frameNo];

      for (var i = 0; i < frame.shapes.length; i++) {
        var shape = frame.shapes[i];

        ctx.strokeStyle = shape.stroke || 'transparent';
        ctx.fillStyle = shape.fill || 'transparent';

        ctx.beginPath();

        var sp = paper.worldToScreen(shape.x, shape.y);
        var points = shape.getPoints();

        for (var j = 0; j < points.length; j++) {
          var p = points[j];
          var x = p.x + sp.x;
          var y = p.y + sp.y;

          if (j == 0) ctx.moveTo(x, y);else ctx.lineTo(x, y);
        }

        if (shape.closed) ctx.closePath();

        ctx.fill();
        ctx.stroke();
      }

      ctx.restore();
    }
  }, {
    key: 'step',
    value: function step() {
      this.frameId = requestAnimationFrame(this.step.bind(this));

      this.time = performance.now();
      this.timeDelta = this.timeDelta + (this.time - this.previousTime);

      if (this.timeDelta >= 1000 / this.fps) {
        this.timeDelta = this.timeDelta - 1000 / this.fps;
        this.frameNo++;
        if (this.frameNo == this.sequence.length) this.frameNo = 0;
        this.render();
      }

      this.previousTime = this.time;
    }
  }, {
    key: 'play',
    value: function play() {
      this.timeDelta = 0;
      this.time = this.previousTime = performance.now();
      this.playing = true;
      this.frameId = requestAnimationFrame(this.step.bind(this));
      this.render();
    }
  }, {
    key: 'pause',
    value: function pause() {
      cancelAnimationFrame(this.frameId);
      this.playing = false;
      this.render();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this.playing) {
        this.pause();
      } else {
        this.play();
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.repeat) return;

      if (event.key == ' ') {
        this.toggle();
      } else if (event.key == 'Escape') {
        this.pause();
        this.emit('done');
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      this.toggle();
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

  return Player;
}(_events.EventDispatcher);

exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NlcXVlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci90b29scy9wZW5jaWxfdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvcG9pbnRlcl90b29sLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci90b29scy90b29sLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbIkFwcCIsImRvbSIsInBhcGVyIiwiYXBwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEVkaXRvciIsImdsb2JhbCIsImluaXRFdmVudExpc3RlbmVycyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFnZUVsIiwic3RhZ2UiLCJzaGFwZXMiLCJnZXRTaGFwZXMiLCJsZW5ndGgiLCJncm91cCIsIngiLCJ5IiwiaSIsInNoYXBlIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwid2lkdGgiLCJoZWlnaHQiLCJhZGQiLCJlZGl0b3IiLCJoaWRlIiwicmVtb3ZlQ2hpbGQiLCJmaXJzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJzaG93IiwiZXZlbnQiLCJyZXBlYXQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZVRpbWVySWQiLCJzZXRUaW1lb3V0Iiwic2V0U2l6ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInR5cGUiLCJvbkNvbnRleHRNZW51Iiwib25SZXNpemUiLCJvbktleURvd24iLCJvbk1vdXNlRG93biIsImhhbmRsZUV2ZW50IiwiY29uc29sZSIsImxvZyIsImluaXQiLCJGcmFtZSIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJHcm91cCIsInBhcmFtcyIsImNoaWxkcmVuIiwiY29udGVudCIsIkFycmF5IiwiaGl0VGVzdCIsInJlY3RzIiwiY2hpbGQiLCJ4bWluIiwieW1pbiIsInhtYXgiLCJ5bWF4IiwicmVjdCIsIlNlcXVlbmNlIiwiZnJhbWVzIiwiZnJhbWUiLCJ1bmRlZmluZWQiLCJmcmFtZU5vIiwiU2hhcGUiLCJmaWxsIiwic3Ryb2tlIiwiY2xvc2VkIiwicG9pbnRMaXN0IiwiY29weSIsInBvaW50cyIsInAwIiwicDEiLCJsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSIsInBvaW50SW5Qb2x5Z29uIiwiVGV4dCIsInNpemUiLCJzZXRUZXh0IiwidmFsdWUiLCJUcmFuc2Zvcm0iLCJzZWxlY3RlZCIsIl94IiwiZW1pdCIsIl95IiwiRWRpdG9yIiwiRXZlbnQiLCJFdmVudERpc3BhdGNoZXIiLCJsaXN0ZW5lcnMiLCJhcmdzIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsIm1vZHVsZSIsImV4cG9ydHMiLCJDaXJjbGUiLCJyIiwieDEiLCJ5MSIsIngyIiwieTIiLCJkeCIsImR5IiwiZCIsIk1hdGgiLCJzcXJ0IiwiUG9pbnQiLCJwb2ludCIsIlBvaW50TGlzdCIsInAiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsIk5FR0FUSVZFX0lORklOSVRZIiwiUmVjdGFuZ2xlIiwiYW1vdW50IiwiVmVjdG9yIiwidmVjdG9yIiwiZG90IiwicmF0aW8iLCJQYXBlciIsInNlbGVjdGlvbiIsImNsaXBib2FyZCIsInNlcXVlbmNlIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiY2FudmFzIiwiY3Vyc29yWCIsImN1cnNvclkiLCJhZGRGcmFtZSIsImdvRnJhbWUiLCJzZXRUb29sIiwicmVuZGVyIiwiZ2V0UG9pbnRzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNhdmUiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInNwIiwid29ybGRUb1NjcmVlbiIsImoiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJyZXN0b3JlIiwidHJhbnNsYXRlIiwiYXJjIiwiUEkiLCJmaWxsUmVjdCIsInJlbmRlckF4aXMiLCJnZXRGcmFtZSIsImRyYXdPdXRsaW5lIiwiZHJhd1NoYXBlIiwicmVuZGVySGludHMiLCJ0b29sIiwidGV4dEJhc2VsaW5lIiwiZm9udCIsImZpbGxUZXh0IiwidHgiLCJ0eSIsImN1cnNvciIsImNvbnRhaW5zIiwidG9vbE5hbWUiLCJvbiIsImFkZFNoYXBlIiwic2V0Q3Vyc29yIiwiY2xlYXIiLCJjbGVhckZyYW1lIiwicmVtb3ZlIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzZXQiLCJjb25jYXQiLCJwbGF5ZXIiLCJwbGF5IiwicGFnZVgiLCJwYWdlWSIsInN0eWxlIiwibGVmdCIsInRvcCIsInNoaWZ0S2V5IiwibWV0YUtleSIsImN0cmxLZXkiLCJjb3B5U2VsZWN0ZWQiLCJwYXN0ZSIsInNlbGVjdEFsbCIsImRlbGV0ZVNlbGVjdGVkIiwiZGVsZXRlRnJhbWUiLCJicmluZ1RvRnJvbnQiLCJzZW5kVG9CYWNrIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbkRibENsaWNrIiwiUGxheWVyIiwiZnBzIiwicGxheWluZyIsImZyYW1lSWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwiYmluZCIsInRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInRpbWVEZWx0YSIsInByZXZpb3VzVGltZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicGF1c2UiLCJ0b2dnbGUiLCJQZW5jaWxUb29sIiwic2NyZWVuVG9Xb3JsZCIsImRyYXdQYXRoIiwiY3AiLCJkaXN0YW5jZSIsImJ1dHRvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwiUG9pbnRlclRvb2wiLCJwMiIsImludGVyc2VjdHNSZWN0YW5nbGUiLCJtb2RlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZG93blgiLCJkb3duWSIsIm1vZGlmaWVyIiwiaGl0IiwidGFyZ2V0IiwiZHJhZ09mZiIsIm1hcnF1ZWVTZWxlY3QiLCJkZWx0YVgiLCJsYXN0WCIsImRlbHRhWSIsImxhc3RZIiwibW92ZVNlbGVjdGlvbkJ5IiwiYWJzIiwiZHJhZ09uIiwiVG9vbCIsIlN0YWdlIiwiY29udGV4dCIsInZpc2libGUiLCJ0cmFuc2Zvcm0iLCJhZGRlZFRvU3RhZ2UiLCJzZWxlY3QiLCJkZXNlbGVjdCIsImxpbmVXaWR0aCIsInJlbmRlclNoYXBlIiwiY2xlYXJSZWN0IiwicmVuZGVyT2JqZWN0IiwiZ2xvYmFsQWxwaGEiLCJpdGVtIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImNhbmNlbERyYWciLCJzZWxlY3RNYXJxdWVlIiwiY2FuY2VsTWFycXVlZSIsImJ1dHRvbnMiLCJiZWdpbkRyYWciLCJiZWdpbk1hcnF1ZWUiLCJlZGl0IiwiU3ZnIiwiYXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnROUyIs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QUExQjtBQUNBLE1BQUl2RixJQUFJOEMsSUFBSixJQUFZOUMsSUFBSWdELElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUJoRCxNQUFJa1EsS0FBS25OLE9BQU91QyxFQUFaLElBQWtCQyxFQUF0QjtBQUNBLE1BQUl2RixJQUFJOEMsSUFBSixJQUFZOUMsSUFBSWdELElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUIsTUFBSWpELElBQUksQ0FBQytDLE9BQU95QyxFQUFSLElBQWMySyxDQUFkLEdBQWtCNUssRUFBMUI7QUFDQSxNQUFJdkYsSUFBSThDLElBQUosSUFBWTlDLElBQUlnRCxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCaEQsTUFBSSxDQUFDaUQsT0FBT3VDLEVBQVIsSUFBYzJLLENBQWQsR0FBa0I1SyxFQUF0QjtBQUNBLE1BQUl2RixJQUFJOEMsSUFBSixJQUFZOUMsSUFBSWdELElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUIsU0FBTyxLQUFQO0FBQ0Q7O2tCQUVjO0FBQ2JpQiwyQkFBeUJBLHVCQURaO0FBRWJDLGtCQUFnQkE7QUFGSCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJztcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyL3BhcGVyJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2Rpc3BsYXkvdGV4dCc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0gW107XG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcigpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICB0aGlzLnNldEVkaXRvcih0aGlzLnBhcGVyKTtcblxuICAgIGdsb2JhbC5wYXBlciA9IHRoaXMucGFwZXI7XG4gICAgZ2xvYmFsLmFwcCA9IHRoaXM7XG5cbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMpO1xuICB9XG5cbiAgZ3JhYlBhcGVyU2hhcGVzKCkge1xuICAgIGxldCBzdGFnZUVsID0gdGhpcy5zdGFnZS5kb20oKTtcbiAgICBsZXQgc2hhcGVzID0gdGhpcy5wYXBlci5nZXRTaGFwZXMoKTtcblxuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICAgIGxldCB4ID0gMDtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgICAgICAgbGV0IGJvdW5kcyA9IHNoYXBlLmdldEJvdW5kcygpO1xuICAgICAgICB4ICs9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICAgICAgeSArPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgeCAvPSBzaGFwZXMubGVuZ3RoO1xuICAgICAgeSAvPSBzaGFwZXMubGVuZ3RoO1xuXG4gICAgICBncm91cC54ID0geDtcbiAgICAgIGdyb3VwLnkgPSB5O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICAgIHNoYXBlLnggKz0gZ3JvdXAueDtcbiAgICAgICAgc2hhcGUueSArPSBncm91cC55O1xuICAgICAgfVxuXG4gICAgICBncm91cC5hZGQoc2hhcGVzKTtcbiAgICAgIHRoaXMuc3RhZ2UuYWRkKGdyb3VwKTtcbiAgICB9XG4gIH1cblxuICBzZXRFZGl0b3IoZWRpdG9yKSB7XG4gICAgaWYgKGVkaXRvciAhPT0gdGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgICB0aGlzLmVkaXRvci5oaWRlKCk7XG4gICAgICAgIHRoaXMuZG9tLmFwcC5yZW1vdmVDaGlsZCh0aGlzLmRvbS5hcHAuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLmVkaXRvci5kb20oKSk7XG4gICAgICB0aGlzLmVkaXRvci5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5yZXBlYXQpIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT0gJ10nKSB7XG5cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnXScpIHtcblxuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiAoZXZlbnQua2V5ID09ICdwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnNob3dBcmVhKCdwYXBlcicpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvL1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2UnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIHRoaXMuc3RhZ2UuZWRpdCgpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgIC8vICAgICB0aGlzLnBhcGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvblJlc2l6ZShldmVudCkge1xuICAgIGlmICghdGhpcy5yZXNpemVUaW1lcklkKSB7XG4gICAgICB0aGlzLnJlc2l6ZVRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXBlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVySWQgPSBudWxsO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ3Jlc2l6ZScpIHtcbiAgICAgIHRoaXMub25SZXNpemUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gIH1cblxuICBhZGQoc2hhcGUpIHtcbiAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgfVxuXG4gIHJlbW92ZShzaGFwZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuc2hhcGVzLmluZGV4T2Yoc2hhcGUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2hhcGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZTtcbiIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBhZGQoY29udGVudCkge1xuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBjb250ZW50W2ldO1xuICAgICAgICBpZiAoc2hhcGUgaW5zdGFuY2VvZiBTaGFwZSkgdGhpcy5hZGQoc2hhcGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdCh4IC0gdGhpcy54LCB5IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGJvdW5kcyA9IGNoaWxkLmdldEJvdW5kcygpO1xuICAgICAgcmVjdHMucHVzaChib3VuZHMpO1xuICAgIH1cblxuICAgIGlmIChyZWN0cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gMDsgLy9OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IDA7IC8vTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSAwOyAvL051bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gMDsgLy9OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJlY3QgPSByZWN0c1tpXTtcbiAgICAgICAgeG1pbiA9IHJlY3QueCA8IHhtaW4gPyByZWN0LnggOiB4bWluO1xuICAgICAgICB5bWluID0gcmVjdC55IDwgeW1pbiA/IHJlY3QueSA6IHltaW47XG4gICAgICAgIHhtYXggPSByZWN0LnggKyByZWN0LndpZHRoID4geG1heCA/IHJlY3QueCArIHJlY3Qud2lkdGggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcmVjdC55ICsgcmVjdC5oZWlnaHQgPiB5bWF4ID8gcmVjdC55ICsgcmVjdC5oZWlnaHQgOiB5bWF4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeG1pbiArIHRoaXMueCwgeW1pbiArIHRoaXMueSwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsIlxuY2xhc3MgU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICB9XG5cbiAgYWRkKGZyYW1lLCBpbmRleCkge1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5mcmFtZXMuc3BsaWNlKGluZGV4LCAwLCBmcmFtZSk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuZnJhbWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5mcmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBnZXRGcmFtZShmcmFtZU5vKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzW2ZyYW1lTm9dO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXMubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcXVlbmNlO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUG9pbnRMaXN0IGZyb20gJy4uL2dlb20vcG9pbnRfbGlzdCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBTaGFwZSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnggPSBwYXJhbXMueCB8fCAwO1xuICAgIHRoaXMueSA9IHBhcmFtcy55IHx8IDA7XG4gICAgdGhpcy5maWxsID0gcGFyYW1zLmZpbGwgfHwgbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IHBhcmFtcy5zdHJva2UgfHwgbnVsbDtcbiAgICB0aGlzLmNsb3NlZCA9IHBhcmFtcy5jbG9zZWQgfHwgZmFsc2U7XG4gICAgLy8gdGhpcy5zdHJva2VXaWR0aCA9IHBhcmFtcy5zdHJva2VXaWR0aCB8fCAxO1xuXG4gICAgaWYgKHBhcmFtcy5wb2ludExpc3QpXG4gICAgICB0aGlzLnBvaW50TGlzdCA9IHBhcmFtcy5wb2ludExpc3QuY29weSgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMucG9pbnRMaXN0ID0gbmV3IFBvaW50TGlzdCgpO1xuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFNoYXBlKHsgeDogdGhpcy54LCB5OiB0aGlzLnksIHBvaW50TGlzdDogdGhpcy5wb2ludExpc3QsIHN0cm9rZTogdGhpcy5zdHJva2UsIGZpbGw6IHRoaXMuZmlsbCwgY2xvc2VkOiB0aGlzLmNsb3NlZCB9KTtcbiAgfVxuXG4gIGdldFBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCBib3VuZHMgPSB0aGlzLnBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgICBib3VuZHMueCArPSB0aGlzLng7XG4gICAgYm91bmRzLnkgKz0gdGhpcy55O1xuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBpbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHBvaW50cyA9IHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAwID0gcG9pbnRzW2kgLSAxXTtcbiAgICAgIGxldCBwMSA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChVdGlsLmxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlKHAwLngsIHAwLnksIHAxLngsIHAxLnksIHhtaW4gLSB0aGlzLngsIHltaW4gLSB0aGlzLnksIHhtYXggLSB0aGlzLngsIHltYXggLSB0aGlzLnkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBsZXQgcG9pbnRzID0gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICAgIGlmICh0aGlzLmZpbGwpIHtcbiAgICAgIHJldHVybiBVdGlsLnBvaW50SW5Qb2x5Z29uKHBvaW50cywgeCAtIHRoaXMueCwgeSAtIHRoaXMueSk7XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2V0U2l6ZShwYXJhbXMuc2l6ZSB8fCA0OCk7XG4gICAgdGhpcy5zZXRUZXh0KHBhcmFtcy5jb250ZW50KTtcbiAgfVxuXG4gIHNldFNpemUodmFsdWUpIHtcbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldFRleHQodmFsdWUpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiaW1wb3J0IHsgRXZlbnQsIEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmNsYXNzIFRyYW5zZm9ybSBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5feTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpcy5feCA9IHZhbHVlO1xuICAgIHRoaXMuZW1pdCgndmFsdWVjaGFuZ2UnKTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlO1xuICAgIHRoaXMuZW1pdCgndmFsdWVjaGFuZ2UnKTtcbiAgfVxuXG4gIGFkZGVkVG9TdGFnZSgpIHtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybTtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4vZXZlbnRzJztcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgfVxuXG4gIHNob3coKSB7XG5cbiAgfVxuXG4gIGhpZGUoKSB7XG5cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XG4iLCJcbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFyYW1zKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgdHlwZTogdHlwZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFdmVudERpc3BhdGNoZXIsIEV2ZW50IH07XG4iLCJcbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yID0gcjtcbiAgfVxuXG4gIGludGVyc2VjdHNMaW5lU2VnbWVudCh4MSwgeTEsIHgyLCB5Mikge1xuXG4gIH1cblxuICBjb250YWluc1BvaW50KHgsIHkpIHtcbiAgICBsZXQgZHggPSB4IC0gdGhpcy54O1xuICAgIGxldCBkeSA9IHkgLSB0aGlzLnk7XG4gICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIHJldHVybiBkIDwgdGhpcy5yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcbiIsIlxuY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIHBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vcmVjdGFuZ2xlJztcblxuY2xhc3MgUG9pbnRMaXN0IHtcbiAgY29uc3RydWN0b3IocG9pbnRzKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICBpZiAocG9pbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgUG9pbnQocC54LCBwLnkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnRMaXN0KHRoaXMucG9pbnRzKTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSBwLnkgPCB5bWluID8gcC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcC55ID4geW1heCA/IHAueSA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50TGlzdDtcbiIsIlxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBncm93KGFtb3VudCkge1xuICAgIHRoaXMueCAtPSBhbW91bnQ7XG4gICAgdGhpcy55IC09IGFtb3VudDtcbiAgICB0aGlzLndpZHRoICs9IGFtb3VudCAqIDI7XG4gICAgdGhpcy5oZWlnaHQgKz0gYW1vdW50ICogMjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJcbmNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkb3QodmVjdG9yKSB7XG4gICAgcmV0dXJuICh0aGlzLnggKiB2ZWN0b3IueCArIHRoaXMueSAqIHZlY3Rvci55KTtcbiAgfVxuXG4gIG1hZygpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBwcm9qZWN0KHZlY3Rvcikge1xuICAgIGxldCBkID0gdmVjdG9yLmRvdCh2ZWN0b3IpO1xuICAgIGlmIChkID4gMCkge1xuICAgICAgbGV0IHJhdGlvID0gdGhpcy5kb3QodmVjdG9yKSAvIGQ7XG4gICAgICAvLyByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHJhdGlvIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3I7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL2dlb20vdmVjdG9yJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi4vZ2VvbS9jaXJjbGUnO1xuXG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgRnJhbWUgZnJvbSAnLi4vZGlzcGxheS9mcmFtZSc7XG5pbXBvcnQgU2VxdWVuY2UgZnJvbSAnLi4vZGlzcGxheS9zZXF1ZW5jZSc7XG5cbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vZWRpdG9yJztcbmltcG9ydCBQb2ludGVyVG9vbCBmcm9tICcuL3Rvb2xzL3BvaW50ZXJfdG9vbCc7XG5pbXBvcnQgUGVuY2lsVG9vbCBmcm9tICcuL3Rvb2xzL3BlbmNpbF90b29sJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IG51bGw7XG5cbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuY2xpcGJvYXJkID0gW107XG4gICAgdGhpcy5zZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZSgpO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yWCA9IDA7XG4gICAgdGhpcy5jdXJzb3JZID0gMDtcblxuICAgIHRoaXMuYWRkRnJhbWUoKTtcbiAgICB0aGlzLmdvRnJhbWUoMCk7XG5cbiAgICB0aGlzLnNldFRvb2woJ3BvaW50ZXInKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBkcmF3U2hhcGUoc2hhcGUpIHtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGxldCBzcCA9IHRoaXMud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIGxldCB4ID0gKHAueCArIHNwLngpO1xuICAgICAgbGV0IHkgPSAocC55ICsgc3AueSk7XG5cbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd091dGxpbmUoc2hhcGUsIHN0cm9rZSkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2UgfHwgJ2JsYWNrJztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGxldCBzcCA9IHRoaXMud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBsZXQgeCA9IChwLnggKyBzcC54KTtcbiAgICAgIGxldCB5ID0gKHAueSArIHNwLnkpO1xuXG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJBeGlzKHgsIHkpIHtcbiAgICBsZXQgc2l6ZSA9IDIwO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIGN0eC5tb3ZlVG8oeCAtIHNpemUsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHNpemUsIHkpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHNpemUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHMoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICAgIGxldCBwID0gdGhpcy53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMocC54ID4+IDAsIHAueSA+PiAwLCAzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLnJlbmRlckF4aXMoKHRoaXMuY2FudmFzLndpZHRoIC8gMikgPj4gMCwgKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpID4+IDApO1xuXG4gICAgaWYgKHRoaXMuZnJhbWVObyA+IDApIHtcbiAgICAgIGxldCBmcmFtZSA9IHRoaXMuc2VxdWVuY2UuZ2V0RnJhbWUodGhpcy5mcmFtZU5vIC0gMSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBmcmFtZS5zaGFwZXNbaV07XG4gICAgICAgIHRoaXMuZHJhd091dGxpbmUoc2hhcGUsICdyZ2IoMTkyLCAyNDAsIDE5MiknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLmZyYW1lLnNoYXBlc1tpXTtcbiAgICAgIHRoaXMuZHJhd1NoYXBlKHNoYXBlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckhpbnRzKCk7XG5cbiAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgdGhpcy50b29sLnJlbmRlcihjdHgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgY3R4LmZvbnQgPSAnMThweCBzYW5zLXNlcmlmJztcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguZmlsbFRleHQoKHRoaXMuZnJhbWVObyArIDEpICsgJzonICsgdGhpcy5zZXF1ZW5jZS5sZW5ndGgsIDIwLCAyMCk7XG4gIH1cblxuICBzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKHRoaXMuZnJhbWUuc2hhcGVzW2ldKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNjcmVlblRvV29ybGQoeCwgeSkge1xuICAgIGxldCB0eCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICBsZXQgdHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCAtIHR4LCB5IC0gdHkpO1xuICB9XG5cbiAgd29ybGRUb1NjcmVlbih4LCB5KSB7XG4gICAgbGV0IHR4ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIGxldCB0eSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh4ICsgdHgsIHkgKyB0eSk7XG4gIH1cblxuICBhZGRTaGFwZShzaGFwZSkge1xuICAgIHRoaXMuZnJhbWUuYWRkKHNoYXBlKTtcbiAgfVxuXG4gIGdldFNoYXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZXM7XG4gIH1cblxuICBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gICAgaWYgKHRoaXMuZWwuY29udGFpbnModGhpcy5jdXJzb3IpKSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcbiAgICB9XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3I7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBzZXRUb29sKHRvb2xOYW1lKSB7XG4gICAgaWYgKHRvb2xOYW1lICE9PSB0aGlzLnRvb2xOYW1lKSB7XG4gICAgICBpZiAodG9vbE5hbWUgPT0gJ3BvaW50ZXInKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQb2ludGVyVG9vbCgpO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRvb2xOYW1lID09ICdwZW5jaWwnKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQZW5jaWxUb29sKCk7XG4gICAgICAgIHRoaXMudG9vbC5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3NoYXBlJywgKHNoYXBlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRTaGFwZShzaGFwZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9vbE5hbWUgPSB0b29sTmFtZTtcbiAgICAgIGlmICh0aGlzLnRvb2wuY3Vyc29yKSB0aGlzLnNldEN1cnNvcih0aGlzLnRvb2wuY3Vyc29yKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRnJhbWUoaW5kZXgpIHtcbiAgICBsZXQgZnJhbWUgPSBuZXcgRnJhbWUoKTtcblxuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5zZXF1ZW5jZS5hZGQoZnJhbWUsIGluZGV4KTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnNlcXVlbmNlLmFkZChmcmFtZSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2VsZWN0aW9uW2ldLmNvcHkoKTtcbiAgICAgICAgZnJhbWUuYWRkKHNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckZyYW1lKCkge1xuICAgIHRoaXMuZnJhbWUuY2xlYXIoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZGVsZXRlRnJhbWUoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5zZXF1ZW5jZS5sZW5ndGggPT0gMSkge1xuICAgICAgdGhpcy5jbGVhckZyYW1lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXF1ZW5jZS5yZW1vdmUoaW5kZXgpO1xuICAgICAgdGhpcy5nb0ZyYW1lKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBnb0ZyYW1lKGZyYW1lTm8pIHtcbiAgICBpZiAoZnJhbWVObyA8IDApXG4gICAgICBmcmFtZU5vID0gMDtcbiAgICBlbHNlIGlmIChmcmFtZU5vID4gdGhpcy5zZXF1ZW5jZS5sZW5ndGggLSAxKVxuICAgICAgZnJhbWVObyA9IHRoaXMuc2VxdWVuY2UubGVuZ3RoIC0gMTtcblxuICAgIGxldCBmcmFtZSA9IHRoaXMuc2VxdWVuY2UuZ2V0RnJhbWUoZnJhbWVObyk7XG4gICAgaWYgKGZyYW1lKSB7XG4gICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgICB0aGlzLmZyYW1lTm8gPSBmcmFtZU5vO1xuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlU2VsZWN0ZWQoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICB0aGlzLmZyYW1lLnJlbW92ZShzaGFwZSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNvcHlTZWxlY3RlZCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBsZXQgY2xpcGJvYXJkID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2VsZWN0aW9uW2ldLmNvcHkoKTtcbiAgICAgICAgY2xpcGJvYXJkLnB1c2goc2hhcGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGlwYm9hcmQgPSBjbGlwYm9hcmQ7XG4gICAgfVxuICB9XG5cbiAgcGFzdGUoKSB7XG4gICAgaWYgKHRoaXMuY2xpcGJvYXJkLmxlbmd0aCkgIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xpcGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuY2xpcGJvYXJkW2ldLmNvcHkoKTtcbiAgICAgICAgdGhpcy5mcmFtZS5hZGQoc2hhcGUpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKHNoYXBlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgYnJpbmdUb0Zyb250KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGxldCBzaGFwZXMgPSB0aGlzLmZyYW1lLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gIXRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKHNoYXBlKSk7XG4gICAgICBsZXQgc2V0ID0gdGhpcy5mcmFtZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKHNoYXBlKSk7XG4gICAgICB0aGlzLmZyYW1lLnNoYXBlcyA9IHNoYXBlcy5jb25jYXQoc2V0KTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2VuZFRvQmFjaygpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBsZXQgc2hhcGVzID0gdGhpcy5mcmFtZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+ICF0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhzaGFwZSkpO1xuICAgICAgbGV0IHNldCA9IHRoaXMuZnJhbWUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiB0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhzaGFwZSkpO1xuICAgICAgdGhpcy5mcmFtZS5zaGFwZXMgPSBzZXQuY29uY2F0KHNoYXBlcyk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3BsYXllci0tJyk7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzLCB0aGlzLnNlcXVlbmNlKTtcbiAgICB0aGlzLnBsYXllci5vbignZG9uZScsICgpID0+IHtcbiAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZG9uZScpO1xuICAgIH0pO1xuICAgIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVk7XG4gICAgaWYgKHRoaXMuY3Vyc29yKSB7XG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJzb3JYICsgJ3B4JztcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yWSArICdweCc7XG4gICAgfVxuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xuXG4gICAgaWYgKGV2ZW50LmtleSA9PSAncScpIHtcbiAgICAgIHRoaXMuc2V0VG9vbCgncG9pbnRlcicpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2InKSB7XG4gICAgICB0aGlzLnNldFRvb2woJ3BlbmNpbCcpO1xuICAgIH1cbiAgICBlbHNlIGlmICgoZXZlbnQua2V5ID09ICcuJyB8fCBldmVudC5rZXkgPT0gJz4nKSkge1xuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIHRoaXMuYWRkRnJhbWUodGhpcy5mcmFtZU5vICsgMSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdvRnJhbWUodGhpcy5mcmFtZU5vICsgMSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKChldmVudC5rZXkgPT0gJywnIHx8IGV2ZW50LmtleSA9PSAnPCcpKSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5hZGRGcmFtZSh0aGlzLmZyYW1lTm8pO1xuICAgICAgICB0aGlzLmdvRnJhbWUodGhpcy5mcmFtZU5vKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ29GcmFtZSh0aGlzLmZyYW1lTm8gLSAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdjJykge1xuICAgICAgaWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSkge1xuICAgICAgICB0aGlzLmNvcHlTZWxlY3RlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ3YnKSB7XG4gICAgICBpZiAoZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5KSB7XG4gICAgICAgIHRoaXMucGFzdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdhJykge1xuICAgICAgdGhpcy5zZWxlY3RBbGwoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICd4Jykge1xuICAgICAgdGhpcy5kZWxldGVTZWxlY3RlZCgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ1gnKSB7XG4gICAgICB0aGlzLmRlbGV0ZUZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnQXJyb3dVcCcpIHtcbiAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpIHRoaXMuYnJpbmdUb0Zyb250KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnQXJyb3dEb3duJykge1xuICAgICAgaWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSkgdGhpcy5zZW5kVG9CYWNrKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnICcpIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgICAvLyBpZiAoZXZlbnQua2V5ID09ICdzJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnNldFN0cm9rZSh0aGlzLnN0cm9rZSA/IG51bGwgOiAnYmxhY2snKVxuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChldmVudC5rZXkgPT0gJzAnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIHRoaXMuc2V0RmlsbChudWxsKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoWycxJywgJzInLCAnMycsICc0J10uaW5jbHVkZXMoZXZlbnQua2V5KSAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICBsZXQgY29sb3IgPSBDT0xPUlNbcGFyc2VJbnQoZXZlbnQua2V5KSAtIDFdO1xuICAgIC8vICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpXG4gICAgLy8gICAgIHRoaXMuc2V0RmlsbChjb2xvcik7XG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhdycpIHtcbiAgICAvLyAgICAgaWYgKGV2ZW50LmtleSA9PSAnRXNjYXBlJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICAgICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2Uge1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBsYXllcikge1xuICAgICAgdGhpcy5wbGF5ZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICAgIHRoaXMudG9vbC5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZXZlbnRzJztcblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBzZXF1ZW5jZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IHNlcXVlbmNlO1xuICAgIHRoaXMuZnJhbWVObyA9IDA7XG4gICAgdGhpcy5mcHMgPSA2O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcblxuICAgIGN0eC5mb250ID0gJzE2cHggc2Fucy1zZXJpZic7XG4gICAgY3R4LmZpbGxUZXh0KHRoaXMucGxheWluZyA/ICdQbGF5JyA6ICdQYXVzZScsIDIwLCAyMCk7XG5cbiAgICBjdHguZm9udCA9ICcxNnB4IHNhbnMtc2VyaWYnO1xuICAgIGN0eC5maWxsVGV4dCh0aGlzLmZyYW1lTm8gKyAxLCAxMDAsIDEwMCk7XG5cbiAgICBsZXQgZnJhbWUgPSB0aGlzLnNlcXVlbmNlLmZyYW1lc1t0aGlzLmZyYW1lTm9dO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmFtZS5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IGZyYW1lLnNoYXBlc1tpXTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgIGxldCBzcCA9IHBhcGVyLndvcmxkVG9TY3JlZW4oc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgICBsZXQgeCA9IChwLnggKyBzcC54KTtcbiAgICAgICAgbGV0IHkgPSAocC55ICsgc3AueSk7XG5cbiAgICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBzdGVwKCkge1xuICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLnRpbWVEZWx0YSA9IHRoaXMudGltZURlbHRhICsgKHRoaXMudGltZSAtIHRoaXMucHJldmlvdXNUaW1lKTtcblxuICAgIGlmICh0aGlzLnRpbWVEZWx0YSA+PSAxMDAwIC8gdGhpcy5mcHMpIHtcbiAgICAgIHRoaXMudGltZURlbHRhID0gdGhpcy50aW1lRGVsdGEgLSAoMTAwMCAvIHRoaXMuZnBzKTtcbiAgICAgIHRoaXMuZnJhbWVObysrO1xuICAgICAgaWYgKHRoaXMuZnJhbWVObyA9PSB0aGlzLnNlcXVlbmNlLmxlbmd0aCkgdGhpcy5mcmFtZU5vID0gMDtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aGlzLnRpbWU7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMudGltZURlbHRhID0gMDtcbiAgICB0aGlzLnRpbWUgPSB0aGlzLnByZXZpb3VzVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQucmVwZWF0KSByZXR1cm47XG5cbiAgICBpZiAoZXZlbnQua2V5ID09ICcgJykge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB0aGlzLmVtaXQoJ2RvbmUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uLy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFBvaW50TGlzdCBmcm9tICcuLi8uLi9nZW9tL3BvaW50X2xpc3QnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4uLy4uL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcblxuY2xhc3MgUGVuY2lsVG9vbCBleHRlbmRzIFRvb2wge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zdHJva2UgPSAnZ3JheSc7XG4gICAgdGhpcy5maWxsID0gJ2xpZ2h0Z3JheSc7XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BlbmNpbC1jdXJzb3InKTtcbiAgfVxuXG4gIGNsb3NlUGF0aChjbG9zZWQ9ZmFsc2UpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHBvaW50TGlzdCA9IG5ldyBQb2ludExpc3QodGhpcy5wb2ludHMpO1xuICAgICAgbGV0IGJvdW5kcyA9IHBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgICAgIGxldCB4ID0gYm91bmRzLnggKyBib3VuZHMud2lkdGggLyAyO1xuICAgICAgbGV0IHkgPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludExpc3QucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRMaXN0LnBvaW50c1tpXTtcbiAgICAgICAgcC54IC09IHg7XG4gICAgICAgIHAueSAtPSB5O1xuICAgICAgfVxuICAgICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHsgcG9pbnRMaXN0OiBwb2ludExpc3QsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSwgY2xvc2VkOiBjbG9zZWQgfSk7XG4gICAgICBsZXQgcCA9IHBhcGVyLnNjcmVlblRvV29ybGQoeCwgeSk7XG4gICAgICBzaGFwZS54ID0gcC54O1xuICAgICAgc2hhcGUueSA9IHAueTtcbiAgICAgIHRoaXMuZW1pdCgnc2hhcGUnLCBzaGFwZSk7XG4gICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdQYXRoKGN0eCwgcG9pbnRzLCBzdHJva2UsIGZpbGwsIGNsb3NlZD1mYWxzZSkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZSAhPT0gdW5kZWZpbmVkID8gKHN0cm9rZSA/IHN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbCAhPT0gdW5kZWZpbmVkID8gKGZpbGwgPyBmaWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgaWYgKHN0cm9rZSA9PSBudWxsKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnY3lhbic7XG4gICAgfVxuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kcmF3UGF0aChjdHgsIHRoaXMucG9pbnRzLCB0aGlzLnN0cm9rZSwgdGhpcy5maWxsKTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGxldCBjcCA9IG5ldyBQb2ludCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBsZXQgcDAgPSB0aGlzLnBvaW50c1swXTtcblxuICAgICAgaWYgKGNwLmRpc3RhbmNlKHAwKSA8IDUpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHAwLngsIHAwLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgNSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHt9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7fVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZW5jaWxUb29sO1xuIiwiaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9kaXNwbGF5L3NoYXBlJztcblxuY2xhc3MgUG9pbnRlclRvb2wgZXh0ZW5kcyBUb29sIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BvaW50ZXItY3Vyc29yJyk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBsZXQgc3AgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHgsIHkpO1xuICAgIGZvciAodmFyIGkgPSBwYXBlci5mcmFtZS5zaGFwZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBzaGFwZSA9IHBhcGVyLmZyYW1lLnNoYXBlc1tpXTtcbiAgICAgIGlmIChzaGFwZS5oaXRUZXN0KHNwLngsIHNwLnkpKSB7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBtYXJxdWVlU2VsZWN0KHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBsZXQgcDEgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHhtaW4sIHltaW4pO1xuICAgIGxldCBwMiA9IHBhcGVyLnNjcmVlblRvV29ybGQoeG1heCwgeW1heCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFwZXIuZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5mcmFtZS5zaGFwZXNbaV07XG4gICAgICBpZiAoc2hhcGUgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgICBpZiAoc2hhcGUuaW50ZXJzZWN0c1JlY3RhbmdsZShwMS54LCBwMS55LCBwMi54LCBwMi55KSkge1xuICAgICAgICAgIHNlbGVjdGlvbi5wdXNoKHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwYXBlci5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgLy8gY29uc29sZS5sb2cocGFwZXIuc2VsZWN0aW9uKTtcbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcGVyLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gcGFwZXIuc2VsZWN0aW9uW2ldO1xuICAgICAgc2hhcGUueCArPSBkeDtcbiAgICAgIHNoYXBlLnkgKz0gZHk7XG4gICAgfVxuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBkcmFnT24oKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RyYWcnO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkcmFnT24nKTtcbiAgfVxuXG4gIGRyYWdPZmYoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICAvLyBjb25zb2xlLmxvZygnZHJhZ09mZicpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZXhjbHVzaW9uJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy5kb3duWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5kb3duWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgbGV0IG1vZGlmaWVyID0gZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleTtcbiAgICAgIHRoaXMuZG93blggPSBldmVudC5wYWdlWDtcbiAgICAgIHRoaXMuZG93blkgPSBldmVudC5wYWdlWTtcblxuICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcblxuICAgICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmRvd25YLCB0aGlzLmRvd25ZKTtcbiAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgaWYgKHBhcGVyLnNlbGVjdGlvbi5pbmNsdWRlcyhoaXQpKSB7XG4gICAgICAgICAgaWYgKG1vZGlmaWVyKVxuICAgICAgICAgICAgcGFwZXIuc2VsZWN0aW9uLnNwbGljZShwYXBlci5zZWxlY3Rpb24uaW5kZXhPZihoaXQpLCAxKTtcbiAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgICAvLyBwYXBlci5zZWxlY3Rpb24gPSBbaGl0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAobW9kaWZpZXIpXG4gICAgICAgICAgICBwYXBlci5zZWxlY3Rpb24ucHVzaChoaXQpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHBhcGVyLnNlbGVjdGlvbiA9IFsgaGl0IF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQgPSBoaXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXBlci5zZWxlY3Rpb24gPSBbXTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpIHtcbiAgICAgICAgdGhpcy5kcmFnT2ZmKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICAgIHRoaXMubWFycXVlZVNlbGVjdCh0aGlzLmRvd25YLCB0aGlzLmRvd25ZLCB0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZO1xuXG4gICAgdGhpcy5kZWx0YVggPSAodGhpcy5sYXN0WCAhPT0gdW5kZWZpbmVkID8gdGhpcy5jdXJzb3JYIC0gdGhpcy5sYXN0WCA6IDApO1xuICAgIHRoaXMuZGVsdGFZID0gKHRoaXMubGFzdFkgIT09IHVuZGVmaW5lZCA/IHRoaXMuY3Vyc29yWSAtIHRoaXMubGFzdFkgOiAwKTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeSh0aGlzLmRlbHRhWCwgdGhpcy5kZWx0YVkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmxlZnQpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgbGV0IGR4ID0gdGhpcy5jdXJzb3JYIC0gdGhpcy5kb3duWDtcbiAgICAgICAgICBsZXQgZHkgPSB0aGlzLmN1cnNvclkgLSB0aGlzLmRvd25ZO1xuICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiAyIHx8IE1hdGguYWJzKGR5KSA+IDIpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSk7XG4gICAgICAgICAgICB0aGlzLmRyYWdPbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubGFzdFggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMuY3Vyc29yWTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcblxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG5cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50ZXJUb29sO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZXZlbnRzLmpzJztcblxuY2xhc3MgVG9vbCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbDtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2Rpc3BsYXkvZ3JvdXAnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXIvcGFwZXInO1xuXG5jbGFzcyBTdGFnZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG5cbiAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKHsgdmlzaWJsZTogZmFsc2UgfSk7XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgLy8gdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdzdGFnZS1jdXJzb3InKTtcblxuICAgIC8vIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5kb20oKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcyk7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGQodHJhbnNmb3JtKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRyYW5zZm9ybSk7XG4gICAgdHJhbnNmb3JtLmFkZGVkVG9TdGFnZSgpO1xuICAgIHRyYW5zZm9ybS5vbigndmFsdWVjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdlZGl0Jyk7XG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGlvbicpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLnNlbGVjdGlvblswXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZ3JvdXAueCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpID4+IDA7XG4gICAgICAgIGdyb3VwLnkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgPj4gMDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZ3JvdXA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICAgIGlmIChjaGlsZC5pbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpKSB7XG4gICAgICAgICAgc2VsZWN0aW9uLnB1c2goY2hpbGQpO1xuICAgICAgICAgIGNoaWxkLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlclNoYXBlKHNoYXBlLCB4LCB5KSB7XG4gICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJIaW50cyh0cmFuc2Zvcm0pIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyYW5zZm9ybS5zZWxlY3RlZCA/ICdyZWQnIDogJ2JsdWUnO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSwgMywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgbGV0IGJvdW5kcyA9IHRyYW5zZm9ybS5nZXRCb3VuZHMoKTtcbiAgICBpZiAoYm91bmRzKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmFuc2Zvcm0uc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlck9iamVjdCh0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHJhbnNmb3JtIGluc3RhbmNlb2YgR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhbnNmb3JtLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHRyYW5zZm9ybS5jaGlsZHJlbltpXTtcbiAgICAgICAgdGhpcy5yZW5kZXJTaGFwZShjaGlsZCwgdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRyYW5zZm9ybS5zZWxlY3RlZCkgdGhpcy5yZW5kZXJIaW50cyh0cmFuc2Zvcm0pO1xuICB9XG5cbiAgcmVuZGVyQXhpcyh4LCB5KSB7XG4gICAgbGV0IHNpemUgPSAxMDtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5JztcbiAgICBjdHgubW92ZVRvKHggLSBzaXplLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyBzaXplLCB5KTtcbiAgICBjdHgubW92ZVRvKHgsIHkgLSBzaXplKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyBzaXplKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgdGhpcy5yZW5kZXJPYmplY3QoY2hpbGQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC41O1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgIHRoaXMucmVuZGVyQXhpcyh0aGlzLmNvbnRleHQueCwgdGhpcy5jb250ZXh0LnkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2V4Y2x1c2lvbic7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMuZG93blgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuZG93blgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICB9XG5cbiAgbW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICBpdGVtLnggKz0gZHg7XG4gICAgICBpdGVtLnkgKz0gZHk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBiZWdpbkRyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RyYWcnO1xuICB9XG5cbiAgY2FuY2VsRHJhZygpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICB9XG5cbiAgYmVnaW5NYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gIH1cblxuICBjYW5jZWxNYXJxdWVlKCkge1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNob3dQYXBlcigpIHtcblxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZG93bicpO1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbC5vZmZzZXRUb3A7XG5cbiAgICB0aGlzLmRvd25YID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMuZG93blkgPSB0aGlzLmN1cnNvclk7XG5cbiAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAgICAgaGl0LnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpXG4gICAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLnNlbGVjdE1hcnF1ZWUodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgdGhpcy5jYW5jZWxNYXJxdWVlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgdGhpcy5kZWx0YVggPSB0aGlzLmxhc3RYID8gdGhpcy5jdXJzb3JYIC0gdGhpcy5sYXN0WCA6IDA7XG4gICAgdGhpcy5kZWx0YVkgPSB0aGlzLmxhc3RZID8gdGhpcy5jdXJzb3JZIC0gdGhpcy5sYXN0WSA6IDA7XG5cbiAgICBpZiAoZXZlbnQuYnV0dG9ucyAmIDEpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeSh0aGlzLmRlbHRhWCwgdGhpcy5kZWx0YVkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5jdXJzb3JYIC0gdGhpcy5kb3duWDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5jdXJzb3JZIC0gdGhpcy5kb3duWTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPj0gMiB8fCBNYXRoLmFicyhkeSkgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5iZWdpbkRyYWcoKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuYmVnaW5NYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuZG93blggKyBkeCwgdGhpcy5kb3duWSArIGR5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGxldCBoaXQgPSB0aGlzLmhpdFRlc3QodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgLy8gaWYgKGhpdCkge1xuICAgICAgLy8gICB0aGlzLnRhcmdldCA9IGhpdDtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgLy8gICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHRoaXMubGFzdFggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMuY3Vyc29yWTtcblxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5lZGl0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJcbmNsYXNzIFN2ZyB7XG4gIHN0YXRpYyBlbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdHlwZSk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHN0YXRpYyBzdmcoYXR0cmlidXRlcykge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJywnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG4iLCJcbi8vIENvcHlyaWdodCAoYykgMTk3MC0yMDAzLCBXbS4gUmFuZG9scGggRnJhbmtsaW5cbi8vIGh0dHBzOi8vd3JmLmVjc2UucnBpLmVkdS8vUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcblxuZnVuY3Rpb24gcG9pbnRJblBvbHlnb24ocG9pbnRzLCB0ZXN0eCwgdGVzdHkpIHtcbiAgbGV0IGksIGosIGMgPSAwO1xuICBmb3IgKGxldCBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgIGlmICgoKHBvaW50c1tpXS55ID4gdGVzdHkpICE9IChwb2ludHNbal0ueSA+IHRlc3R5KSkgJiZcbiAgICAgICh0ZXN0eCA8IChwb2ludHNbal0ueCAtIHBvaW50c1tpXS54KSAqICh0ZXN0eSAtIHBvaW50c1tpXS55KSAvIChwb2ludHNbal0ueSAtIHBvaW50c1tpXS55KSArIHBvaW50c1tpXS54KSlcbiAgICAgIGMgPSAhYztcbiAgfVxuICByZXR1cm4gYztcbn1cblxuZnVuY3Rpb24gbGluZUludGVyc2VjdHNSZWN0YW5nbGUoeDEsIHkxLCB4MiwgeTIsIHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgLy8gQ29tcGxldGVseSBvdXRzaWRlLlxuICBpZiAoKHgxIDw9IHhtaW4gJiYgeDIgPD0geG1pbikgfHwgKHkxIDw9IHltaW4gJiYgeTIgPD0geW1pbikgfHxcbiAgICAgICh4MSA+PSB4bWF4ICYmIHgyID49IHhtYXgpIHx8ICh5MSA+PSB5bWF4ICYmIHkyID49IHltYXgpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICB2YXIgbSA9ICh5MiAtIHkxKSAvICh4MiAtIHgxKTtcblxuICB2YXIgeSA9IG0gKiAoeG1pbiAtIHgxKSArIHkxO1xuICBpZiAoeSA+IHltaW4gJiYgeSA8IHltYXgpIHJldHVybiB0cnVlO1xuXG4gIHkgPSBtICogKHhtYXggLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgeCA9ICh5bWluIC0geTEpIC8gbSArIHgxO1xuICBpZiAoeCA+IHhtaW4gJiYgeCA8IHhtYXgpIHJldHVybiB0cnVlO1xuXG4gIHggPSAoeW1heCAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGluZUludGVyc2VjdHNSZWN0YW5nbGU6IGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlLFxuICBwb2ludEluUG9seWdvbjogcG9pbnRJblBvbHlnb25cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=