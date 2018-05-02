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

      // if (this.resizeTimerId) clearTimeout(this.resizeTimerId);
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
    key: 'add',
    value: function add(frame, index) {
      console.log('sequence.add', index);
      if (index !== undefined) this.frames.splice(index, 0, frame);else this.frames.push(frame);
    }
  }, {
    key: 'remove',
    value: function remove(index) {
      if (index >= 0 && index < this.frames.length) {
        this.frames.splice(index, 1);
      }
    }
  }, {
    key: 'getFrame',
    value: function getFrame(frameNo) {
      return this.frames[frameNo];
    }
  }, {
    key: 'length',
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

    _this.fill = params.fill || null;
    _this.stroke = params.stroke || null;
    _this.closed = params.closed || false;
    // this.strokeWidth = params.strokeWidth || 1;

    _this.pointList = params.pointList.copy();
    return _this;
  }

  _createClass(Shape, [{
    key: 'copy',
    value: function copy() {
      return new Shape({ pointList: this.pointList, stroke: this.stroke, fill: this.fill, closed: this.closed });
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

    // setFill(fill) {
    //   this.fill = fill;
    //   this.render();
    // }
    //
    // setStroke(stroke) {
    //   this.stroke = stroke;
    //   this.render();
    // }

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
          // this.tool.on('select', (selection) => {
          // console.log(point);
          // this.selection = selection;
          // this.render();
          // });
          // this.tool.on('marquee', (rect) => {
          //   console.log(rect);
          // });
        } else if (toolName == 'pencil') {
          this.tool = new _pencil_tool2.default();
          this.tool.on('update', function () {
            _this2.render();
          });
          this.tool.on('shape', function (shape) {
            // this.shapes.push(shape);
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
      if (frameNo < 0) frameNo = 0;
      if (frameNo > this.sequence.length - 1) frameNo = this.sequence.length - 1;
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
      // console.log(event.key, event.shiftKey);
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
      } else if (event.key == 'x' && !event.repeat) {
        this.deleteSelected();
      } else if (event.key == 'X' && !event.repeat) {
        this.deleteFrame(this.frameNo);
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
        this.downX = event.pageX;
        this.downY = event.pageY;

        this.left = true;

        var hit = this.hitTest(this.downX, this.downY);
        if (hit) {
          if (paper.selection.includes(hit)) {} else {
            paper.selection = [hit];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NlcXVlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvcGVuY2lsX3Rvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyL3Rvb2xzL3BvaW50ZXJfdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJzdGFydHVwIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXBlciIsInNldEVkaXRvciIsImdsb2JhbCIsInN0YWdlRWwiLCJzdGFnZSIsInNoYXBlcyIsImdldFNoYXBlcyIsImxlbmd0aCIsImdyb3VwIiwieCIsInkiLCJpIiwic2hhcGUiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJ3aWR0aCIsImhlaWdodCIsImFkZCIsImVkaXRvciIsImhpZGUiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInNob3ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzaXplVGltZXJJZCIsInNldFRpbWVvdXQiLCJzZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidHlwZSIsIm9uQ29udGV4dE1lbnUiLCJvblJlc2l6ZSIsImhhbmRsZUV2ZW50Iiwib25LZXlEb3duIiwib25Nb3VzZURvd24iLCJjb25zb2xlIiwibG9nIiwiaW5pdCIsIkZyYW1lIiwicHVzaCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIkdyb3VwIiwicGFyYW1zIiwiY2hpbGRyZW4iLCJjb250ZW50IiwiQXJyYXkiLCJoaXRUZXN0IiwicmVjdHMiLCJjaGlsZCIsInhtaW4iLCJ5bWluIiwieG1heCIsInltYXgiLCJyZWN0IiwiU2VxdWVuY2UiLCJmcmFtZXMiLCJmcmFtZSIsInVuZGVmaW5lZCIsImZyYW1lTm8iLCJTaGFwZSIsImZpbGwiLCJzdHJva2UiLCJjbG9zZWQiLCJwb2ludExpc3QiLCJjb3B5IiwicG9pbnRzIiwicDAiLCJwMSIsImxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlIiwicG9pbnRJblBvbHlnb24iLCJUZXh0Iiwic2l6ZSIsInNldFRleHQiLCJ2YWx1ZSIsIlRyYW5zZm9ybSIsInNlbGVjdGVkIiwiX3giLCJlbWl0IiwiX3kiLCJFZGl0b3IiLCJFdmVudCIsIkV2ZW50RGlzcGF0Y2hlciIsImxpc3RlbmVycyIsImFyZ3MiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIkNpcmNsZSIsInIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImR4IiwiZHkiLCJkIiwiTWF0aCIsInNxcnQiLCJQb2ludCIsInBvaW50IiwiUG9pbnRMaXN0IiwicCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJSZWN0YW5nbGUiLCJhbW91bnQiLCJWZWN0b3IiLCJ2ZWN0b3IiLCJkb3QiLCJyYXRpbyIsIlBhcGVyIiwic2VsZWN0aW9uIiwic2VxdWVuY2UiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjYW52YXMiLCJjdXJzb3JYIiwiY3Vyc29yWSIsImFkZEZyYW1lIiwiZ29GcmFtZSIsInNldFRvb2wiLCJyZW5kZXIiLCJnZXRQb2ludHMiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2F2ZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwic3AiLCJ3b3JsZFRvU2NyZWVuIiwiaiIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInJlc3RvcmUiLCJ0cmFuc2xhdGUiLCJhcmMiLCJQSSIsImZpbGxSZWN0IiwicmVuZGVyQXhpcyIsImdldEZyYW1lIiwiZHJhd091dGxpbmUiLCJkcmF3U2hhcGUiLCJyZW5kZXJIaW50cyIsInRvb2wiLCJ0ZXh0QmFzZWxpbmUiLCJmb250IiwiZmlsbFRleHQiLCJ0eCIsInR5IiwiY3Vyc29yIiwiY29udGFpbnMiLCJ0b29sTmFtZSIsIm9uIiwiYWRkU2hhcGUiLCJzZXRDdXJzb3IiLCJjbGVhciIsImNsZWFyRnJhbWUiLCJyZW1vdmUiLCJwYWdlWCIsInBhZ2VZIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwia2V5IiwicmVwZWF0Iiwic2hpZnRLZXkiLCJkZWxldGVTZWxlY3RlZCIsImRlbGV0ZUZyYW1lIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbkRibENsaWNrIiwiUGVuY2lsVG9vbCIsInNjcmVlblRvV29ybGQiLCJkcmF3UGF0aCIsImNwIiwiZGlzdGFuY2UiLCJidXR0b24iLCJvZmZzZXRYIiwib2Zmc2V0WSIsIlBvaW50ZXJUb29sIiwicDIiLCJpbnRlcnNlY3RzUmVjdGFuZ2xlIiwibW9kZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImRvd25YIiwiZG93blkiLCJoaXQiLCJpbmNsdWRlcyIsInRhcmdldCIsImRyYWdPZmYiLCJtYXJxdWVlU2VsZWN0IiwiZGVsdGFYIiwibGFzdFgiLCJkZWx0YVkiLCJsYXN0WSIsIm1vdmVTZWxlY3Rpb25CeSIsImFicyIsImRyYWdPbiIsIlRvb2wiLCJTdGFnZSIsImNvbnRleHQiLCJ2aXNpYmxlIiwidHJhbnNmb3JtIiwiYWRkZWRUb1N0YWdlIiwic2VsZWN0IiwiZGVzZWxlY3QiLCJsaW5lV2lkdGgiLCJyZW5kZXJTaGFwZSIsImNsZWFyUmVjdCIsInJlbmRlck9iamVjdCIsImdsb2JhbEFscGhhIiwiaXRlbSIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjYW5jZWxEcmFnIiwic2VsZWN0TWFycXVlZSIsImNhbmNlbE1hcnF1ZWUiLCJidXR0b25zIiwiYmVnaW5EcmFnIiwiYmVnaW5NYXJxdWVlIiwiZWRpdCIsIlN2ZyIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lIiwic2V0QXR0cmlidXRlIiwic3ZnIiwidGVzdHgiLCJ0ZXN0eSIsImMiLCJtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNB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ckYsSUFBSTRDLElBQUosSUFBWTVDLElBQUk4QyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCOUMsTUFBSXFPLEtBQUt4TCxPQUFPdUMsRUFBWixJQUFrQkMsRUFBdEI7QUFDQSxNQUFJckYsSUFBSTRDLElBQUosSUFBWTVDLElBQUk4QyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCLE1BQUkvQyxJQUFJLENBQUM2QyxPQUFPeUMsRUFBUixJQUFjZ0osQ0FBZCxHQUFrQmpKLEVBQTFCO0FBQ0EsTUFBSXJGLElBQUk0QyxJQUFKLElBQVk1QyxJQUFJOEMsSUFBcEIsRUFBMEIsT0FBTyxJQUFQOztBQUUxQjlDLE1BQUksQ0FBQytDLE9BQU91QyxFQUFSLElBQWNnSixDQUFkLEdBQWtCakosRUFBdEI7QUFDQSxNQUFJckYsSUFBSTRDLElBQUosSUFBWTVDLElBQUk4QyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCLFNBQU8sS0FBUDtBQUNEOztrQkFFYztBQUNiaUIsMkJBQXlCQSx1QkFEWjtBQUViQyxrQkFBZ0JBO0FBRkgsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2ggKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuIiwiaW1wb3J0IHN2ZyBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlci9wYXBlcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2Rpc3BsYXkvZ3JvdXAnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9kaXNwbGF5L3RleHQnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN0YXJ0dXAoKTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMpO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKCk7XG4gICAgdGhpcy5zZXRFZGl0b3IodGhpcy5wYXBlcik7XG5cbiAgICBnbG9iYWwucGFwZXIgPSB0aGlzLnBhcGVyO1xuICB9XG5cbiAgZ3JhYlBhcGVyU2hhcGVzKCkge1xuICAgIGxldCBzdGFnZUVsID0gdGhpcy5zdGFnZS5kb20oKTtcbiAgICBsZXQgc2hhcGVzID0gdGhpcy5wYXBlci5nZXRTaGFwZXMoKTtcblxuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICAgIGxldCB4ID0gMDtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgICAgICAgbGV0IGJvdW5kcyA9IHNoYXBlLmdldEJvdW5kcygpO1xuICAgICAgICB4ICs9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICAgICAgeSArPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgeCAvPSBzaGFwZXMubGVuZ3RoO1xuICAgICAgeSAvPSBzaGFwZXMubGVuZ3RoO1xuXG4gICAgICBncm91cC54ID0geDtcbiAgICAgIGdyb3VwLnkgPSB5O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICAgIHNoYXBlLnggKz0gZ3JvdXAueDtcbiAgICAgICAgc2hhcGUueSArPSBncm91cC55O1xuICAgICAgfVxuXG4gICAgICBncm91cC5hZGQoc2hhcGVzKTtcbiAgICAgIHRoaXMuc3RhZ2UuYWRkKGdyb3VwKTtcbiAgICB9XG4gIH1cblxuICBzZXRFZGl0b3IoZWRpdG9yKSB7XG4gICAgaWYgKGVkaXRvciAhPT0gdGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgICB0aGlzLmVkaXRvci5oaWRlKCk7XG4gICAgICAgIHRoaXMuZG9tLmFwcC5yZW1vdmVDaGlsZCh0aGlzLmRvbS5hcHAuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLmVkaXRvci5kb20oKSk7XG4gICAgICB0aGlzLmVkaXRvci5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgLy8gaWYgKGV2ZW50LmtleSA9PSAncCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgdGhpcy5zaG93QXJlYSgncGFwZXInKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy9cbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdlJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnN0YWdlLmVkaXQoKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAvLyAgICAgdGhpcy5wYXBlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAvLyBpZiAodGhpcy5yZXNpemVUaW1lcklkKSBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcklkKTtcbiAgICBpZiAoIXRoaXMucmVzaXplVGltZXJJZCkge1xuICAgICAgdGhpcy5yZXNpemVUaW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucGFwZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgdGhpcy5yZXNpemVUaW1lcklkID0gbnVsbDtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdyZXNpemUnKSB7XG4gICAgICB0aGlzLm9uUmVzaXplKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gIH1cblxuICBhZGQoc2hhcGUpIHtcbiAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgfVxuXG4gIHJlbW92ZShzaGFwZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuc2hhcGVzLmluZGV4T2Yoc2hhcGUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2hhcGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZTtcbiIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBhZGQoY29udGVudCkge1xuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBjb250ZW50W2ldO1xuICAgICAgICBpZiAoc2hhcGUgaW5zdGFuY2VvZiBTaGFwZSkgdGhpcy5hZGQoc2hhcGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdCh4IC0gdGhpcy54LCB5IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGJvdW5kcyA9IGNoaWxkLmdldEJvdW5kcygpO1xuICAgICAgcmVjdHMucHVzaChib3VuZHMpO1xuICAgIH1cblxuICAgIGlmIChyZWN0cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gMDsgLy9OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IDA7IC8vTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSAwOyAvL051bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gMDsgLy9OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJlY3QgPSByZWN0c1tpXTtcbiAgICAgICAgeG1pbiA9IHJlY3QueCA8IHhtaW4gPyByZWN0LnggOiB4bWluO1xuICAgICAgICB5bWluID0gcmVjdC55IDwgeW1pbiA/IHJlY3QueSA6IHltaW47XG4gICAgICAgIHhtYXggPSByZWN0LnggKyByZWN0LndpZHRoID4geG1heCA/IHJlY3QueCArIHJlY3Qud2lkdGggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcmVjdC55ICsgcmVjdC5oZWlnaHQgPiB5bWF4ID8gcmVjdC55ICsgcmVjdC5oZWlnaHQgOiB5bWF4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeG1pbiArIHRoaXMueCwgeW1pbiArIHRoaXMueSwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsIlxuY2xhc3MgU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICB9XG5cbiAgYWRkKGZyYW1lLCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKCdzZXF1ZW5jZS5hZGQnLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLmZyYW1lcy5zcGxpY2UoaW5kZXgsIDAsIGZyYW1lKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5mcmFtZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmZyYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGdldEZyYW1lKGZyYW1lTm8pIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXNbZnJhbWVOb107XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lcy5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VxdWVuY2U7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBQb2ludExpc3QgZnJvbSAnLi4vZ2VvbS9wb2ludF9saXN0JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIFNoYXBlIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZmlsbCA9IHBhcmFtcy5maWxsIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBwYXJhbXMuc3Ryb2tlIHx8IG51bGw7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuICAgIC8vIHRoaXMuc3Ryb2tlV2lkdGggPSBwYXJhbXMuc3Ryb2tlV2lkdGggfHwgMTtcblxuICAgIHRoaXMucG9pbnRMaXN0ID0gcGFyYW1zLnBvaW50TGlzdC5jb3B5KCk7XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgU2hhcGUoeyBwb2ludExpc3Q6IHRoaXMucG9pbnRMaXN0LCBzdHJva2U6IHRoaXMuc3Ryb2tlLCBmaWxsOiB0aGlzLmZpbGwsIGNsb3NlZDogdGhpcy5jbG9zZWQgfSk7XG4gIH1cblxuICBnZXRQb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgYm91bmRzID0gdGhpcy5wb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gICAgYm91bmRzLnggKz0gdGhpcy54O1xuICAgIGJvdW5kcy55ICs9IHRoaXMueTtcbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgaW50ZXJzZWN0c1JlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICBpZiAoeW1pbiA+IHltYXgpIFt5bWluLCB5bWF4XSA9IFsgeW1heCwgeW1pbiBdO1xuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwMCA9IHBvaW50c1tpIC0gMV07XG4gICAgICBsZXQgcDEgPSBwb2ludHNbaV07XG4gICAgICBpZiAoVXRpbC5saW5lSW50ZXJzZWN0c1JlY3RhbmdsZShwMC54LCBwMC55LCBwMS54LCBwMS55LCB4bWluIC0gdGhpcy54LCB5bWluIC0gdGhpcy55LCB4bWF4IC0gdGhpcy54LCB5bWF4IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgbGV0IHBvaW50cyA9IHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgICBpZiAodGhpcy5maWxsKSB7XG4gICAgICByZXR1cm4gVXRpbC5wb2ludEluUG9seWdvbihwb2ludHMsIHggLSB0aGlzLngsIHkgLSB0aGlzLnkpO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcbiIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMuY29udGVudCk7XG4gIH1cblxuICBzZXRTaXplKHZhbHVlKSB7XG4gICAgdGhpcy5zaXplID0gdmFsdWU7XG4gIH1cblxuICBzZXRUZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBkb20oKSB7XG4gIH1cblxuICBzaG93KCkge1xuXG4gIH1cblxuICBoaWRlKCkge1xuXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIiwiXG5jbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cbn1cblxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09IHR5cGUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IHR5cGU6IHR5cGUsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRXZlbnREaXNwYXRjaGVyLCBFdmVudCB9O1xuIiwiXG5jbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuciA9IHI7XG4gIH1cblxuICBpbnRlcnNlY3RzTGluZVNlZ21lbnQoeDEsIHkxLCB4MiwgeTIpIHtcblxuICB9XG5cbiAgY29udGFpbnNQb2ludCh4LCB5KSB7XG4gICAgbGV0IGR4ID0geCAtIHRoaXMueDtcbiAgICBsZXQgZHkgPSB5IC0gdGhpcy55O1xuICAgIGxldCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICByZXR1cm4gZCA8IHRoaXMucjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRpc3RhbmNlKHBvaW50KSB7XG4gICAgbGV0IGR4ID0gdGhpcy54IC0gcG9pbnQueDtcbiAgICBsZXQgZHkgPSB0aGlzLnkgLSBwb2ludC55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL3JlY3RhbmdsZSc7XG5cbmNsYXNzIFBvaW50TGlzdCB7XG4gIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgaWYgKHBvaW50cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHAueCwgcC55KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50TGlzdCh0aGlzLnBvaW50cyk7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IHhtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgeG1pbiA9IHAueCA8IHhtaW4gPyBwLnggOiB4bWluO1xuICAgICAgICB5bWluID0gcC55IDwgeW1pbiA/IHAueSA6IHltaW47XG4gICAgICAgIHhtYXggPSBwLnggPiB4bWF4ID8gcC54IDogeG1heDtcbiAgICAgICAgeW1heCA9IHAueSA+IHltYXggPyBwLnkgOiB5bWF4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludExpc3Q7XG4iLCJcbmNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ3JvdyhhbW91bnQpIHtcbiAgICB0aGlzLnggLT0gYW1vdW50O1xuICAgIHRoaXMueSAtPSBhbW91bnQ7XG4gICAgdGhpcy53aWR0aCArPSBhbW91bnQgKiAyO1xuICAgIHRoaXMuaGVpZ2h0ICs9IGFtb3VudCAqIDI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xuIiwiXG5jbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZG90KHZlY3Rvcikge1xuICAgIHJldHVybiAodGhpcy54ICogdmVjdG9yLnggKyB0aGlzLnkgKiB2ZWN0b3IueSk7XG4gIH1cblxuICBtYWcoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgcHJvamVjdCh2ZWN0b3IpIHtcbiAgICBsZXQgZCA9IHZlY3Rvci5kb3QodmVjdG9yKTtcbiAgICBpZiAoZCA+IDApIHtcbiAgICAgIGxldCByYXRpbyA9IHRoaXMuZG90KHZlY3RvcikgLyBkO1xuICAgICAgLy8gcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICBpZiAocmF0aW8gPj0gMCAmJiByYXRpbyA8PSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9nZW9tL3ZlY3Rvcic7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4uL2dlb20vY2lyY2xlJztcblxuaW1wb3J0IFNoYXBlIGZyb20gJy4uL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEZyYW1lIGZyb20gJy4uL2Rpc3BsYXkvZnJhbWUnO1xuaW1wb3J0IFNlcXVlbmNlIGZyb20gJy4uL2Rpc3BsYXkvc2VxdWVuY2UnO1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQgUG9pbnRlclRvb2wgZnJvbSAnLi90b29scy9wb2ludGVyX3Rvb2wnO1xuaW1wb3J0IFBlbmNpbFRvb2wgZnJvbSAnLi90b29scy9wZW5jaWxfdG9vbCc7XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLmZpbGwgPSBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gbnVsbDtcblxuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgdGhpcy5zZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZSgpO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yWCA9IDA7XG4gICAgdGhpcy5jdXJzb3JZID0gMDtcblxuICAgIHRoaXMuYWRkRnJhbWUoKTtcbiAgICB0aGlzLmdvRnJhbWUoMCk7XG5cbiAgICB0aGlzLnNldFRvb2woJ3BvaW50ZXInKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIHNldFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBkcmF3U2hhcGUoc2hhcGUpIHtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGxldCBzcCA9IHRoaXMud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIGxldCB4ID0gKHAueCArIHNwLngpO1xuICAgICAgbGV0IHkgPSAocC55ICsgc3AueSk7XG5cbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZHJhd091dGxpbmUoc2hhcGUsIHN0cm9rZSkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2UgfHwgJ2JsYWNrJztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGxldCBzcCA9IHRoaXMud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBsZXQgeCA9IChwLnggKyBzcC54KTtcbiAgICAgIGxldCB5ID0gKHAueSArIHNwLnkpO1xuXG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJBeGlzKHgsIHkpIHtcbiAgICBsZXQgc2l6ZSA9IDIwO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIGN0eC5tb3ZlVG8oeCAtIHNpemUsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHNpemUsIHkpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHNpemUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHMoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICAgIGxldCBwID0gdGhpcy53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMocC54ID4+IDAsIHAueSA+PiAwLCAzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLnJlbmRlckF4aXMoKHRoaXMuY2FudmFzLndpZHRoIC8gMikgPj4gMCwgKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpID4+IDApO1xuXG4gICAgaWYgKHRoaXMuZnJhbWVObyA+IDApIHtcbiAgICAgIGxldCBmcmFtZSA9IHRoaXMuc2VxdWVuY2UuZ2V0RnJhbWUodGhpcy5mcmFtZU5vIC0gMSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBmcmFtZS5zaGFwZXNbaV07XG4gICAgICAgIHRoaXMuZHJhd091dGxpbmUoc2hhcGUsICdyZ2IoMTkyLCAyNDAsIDE5MiknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLmZyYW1lLnNoYXBlc1tpXTtcbiAgICAgIHRoaXMuZHJhd1NoYXBlKHNoYXBlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckhpbnRzKCk7XG5cbiAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgdGhpcy50b29sLnJlbmRlcihjdHgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgY3R4LmZvbnQgPSAnMThweCBzYW5zLXNlcmlmJztcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguZmlsbFRleHQoKHRoaXMuZnJhbWVObyArIDEpICsgJzonICsgdGhpcy5zZXF1ZW5jZS5sZW5ndGgsIDIwLCAyMCk7XG4gIH1cblxuICBzY3JlZW5Ub1dvcmxkKHgsIHkpIHtcbiAgICBsZXQgdHggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgbGV0IHR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICByZXR1cm4gbmV3IFBvaW50KHggLSB0eCwgeSAtIHR5KTtcbiAgfVxuXG4gIHdvcmxkVG9TY3JlZW4oeCwgeSkge1xuICAgIGxldCB0eCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICBsZXQgdHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCArIHR4LCB5ICsgdHkpO1xuICB9XG5cbiAgYWRkU2hhcGUoc2hhcGUpIHtcbiAgICB0aGlzLmZyYW1lLmFkZChzaGFwZSk7XG4gIH1cblxuICBnZXRTaGFwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcGVzO1xuICB9XG5cbiAgLy8gc2V0RmlsbChmaWxsKSB7XG4gIC8vICAgdGhpcy5maWxsID0gZmlsbDtcbiAgLy8gICB0aGlzLnJlbmRlcigpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHNldFN0cm9rZShzdHJva2UpIHtcbiAgLy8gICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgLy8gICB0aGlzLnJlbmRlcigpO1xuICAvLyB9XG5cbiAgc2V0Q3Vyc29yKGN1cnNvcikge1xuICAgIGlmICh0aGlzLmVsLmNvbnRhaW5zKHRoaXMuY3Vyc29yKSkge1xuICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvcik7XG4gICAgfVxuICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuICB9XG5cbiAgc2V0VG9vbCh0b29sTmFtZSkge1xuICAgIGlmICh0b29sTmFtZSAhPT0gdGhpcy50b29sTmFtZSkge1xuICAgICAgaWYgKHRvb2xOYW1lID09ICdwb2ludGVyJykge1xuICAgICAgICB0aGlzLnRvb2wgPSBuZXcgUG9pbnRlclRvb2woKTtcbiAgICAgICAgdGhpcy50b29sLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMudG9vbC5vbignc2VsZWN0JywgKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBvaW50KTtcbiAgICAgICAgICAvLyB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdGhpcy50b29sLm9uKCdtYXJxdWVlJywgKHJlY3QpID0+IHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZWN0KTtcbiAgICAgICAgLy8gfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0b29sTmFtZSA9PSAncGVuY2lsJykge1xuICAgICAgICB0aGlzLnRvb2wgPSBuZXcgUGVuY2lsVG9vbCgpO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b29sLm9uKCdzaGFwZScsIChzaGFwZSkgPT4ge1xuICAgICAgICAgIC8vIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUpO1xuICAgICAgICAgIHRoaXMuYWRkU2hhcGUoc2hhcGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvb2xOYW1lID0gdG9vbE5hbWU7XG4gICAgICBpZiAodGhpcy50b29sLmN1cnNvcikgdGhpcy5zZXRDdXJzb3IodGhpcy50b29sLmN1cnNvcik7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZyYW1lKGluZGV4KSB7XG4gICAgbGV0IGZyYW1lID0gbmV3IEZyYW1lKCk7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLnNlcXVlbmNlLmFkZChmcmFtZSwgaW5kZXgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc2VxdWVuY2UuYWRkKGZyYW1lKTtcbiAgfVxuXG4gIGNsZWFyRnJhbWUoKSB7XG4gICAgdGhpcy5mcmFtZS5jbGVhcigpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBkZWxldGVGcmFtZShpbmRleCkge1xuICAgIGlmICh0aGlzLnNlcXVlbmNlLmxlbmd0aCA9PSAxKSB7XG4gICAgICB0aGlzLmNsZWFyRnJhbWUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNlcXVlbmNlLnJlbW92ZShpbmRleCk7XG4gICAgICB0aGlzLmdvRnJhbWUoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGdvRnJhbWUoZnJhbWVObykge1xuICAgIGlmIChmcmFtZU5vIDwgMCkgZnJhbWVObyA9IDA7XG4gICAgaWYgKGZyYW1lTm8gPiB0aGlzLnNlcXVlbmNlLmxlbmd0aCAtIDEpIGZyYW1lTm8gPSB0aGlzLnNlcXVlbmNlLmxlbmd0aCAtIDE7XG4gICAgbGV0IGZyYW1lID0gdGhpcy5zZXF1ZW5jZS5nZXRGcmFtZShmcmFtZU5vKTtcbiAgICBpZiAoZnJhbWUpIHtcbiAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICAgIHRoaXMuZnJhbWVObyA9IGZyYW1lTm87XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVTZWxlY3RlZCgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgIHRoaXMuZnJhbWUucmVtb3ZlKHNoYXBlKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWTtcbiAgICBpZiAodGhpcy5jdXJzb3IpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvclggKyAncHgnO1xuICAgICAgdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3JZICsgJ3B4JztcbiAgICB9XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC5rZXksIGV2ZW50LnNoaWZ0S2V5KTtcbiAgICBpZiAoZXZlbnQua2V5ID09ICdxJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnNldFRvb2woJ3BvaW50ZXInKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdiJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLnNldFRvb2woJ3BlbmNpbCcpO1xuICAgIH1cbiAgICBlbHNlIGlmICgoZXZlbnQua2V5ID09ICcuJyB8fCBldmVudC5rZXkgPT0gJz4nKSAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5hZGRGcmFtZSh0aGlzLmZyYW1lTm8gKyAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ29GcmFtZSh0aGlzLmZyYW1lTm8gKyAxKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKGV2ZW50LmtleSA9PSAnLCcgfHwgZXZlbnQua2V5ID09ICc8JykgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIHRoaXMuYWRkRnJhbWUodGhpcy5mcmFtZU5vKTtcbiAgICAgICAgdGhpcy5nb0ZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdvRnJhbWUodGhpcy5mcmFtZU5vIC0gMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAneCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5kZWxldGVTZWxlY3RlZCgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ1gnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuZGVsZXRlRnJhbWUodGhpcy5mcmFtZU5vKTtcbiAgICB9XG4gICAgLy8gaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgdGhpcy5zZXRTdHJva2UodGhpcy5zdHJva2UgPyBudWxsIDogJ2JsYWNrJylcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnNldEZpbGwobnVsbCk7XG4gICAgLy8gfVxuICAgIC8vIGVsc2UgaWYgKFsnMScsICcyJywgJzMnLCAnNCddLmluY2x1ZGVzKGV2ZW50LmtleSkgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgbGV0IGNvbG9yID0gQ09MT1JTW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXTtcbiAgICAvLyAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKVxuICAgIC8vICAgICB0aGlzLnNldEZpbGwoY29sb3IpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYXcnKSB7XG4gICAgLy8gICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgICAgIHRoaXMuY2FuY2VsUGF0aCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNlIHtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICB0aGlzLnRvb2wuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9nZW9tL3BvaW50JztcbmltcG9ydCBQb2ludExpc3QgZnJvbSAnLi4vLi4vZ2VvbS9wb2ludF9saXN0JztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBUb29sIGZyb20gJy4vdG9vbCc7XG5cbmNsYXNzIFBlbmNpbFRvb2wgZXh0ZW5kcyBUb29sIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc3Ryb2tlID0gJ2dyYXknO1xuICAgIHRoaXMuZmlsbCA9ICdsaWdodGdyYXknO1xuXG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwZW5jaWwtY3Vyc29yJyk7XG4gIH1cblxuICBjbG9zZVBhdGgoY2xvc2VkPWZhbHNlKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBwb2ludExpc3QgPSBuZXcgUG9pbnRMaXN0KHRoaXMucG9pbnRzKTtcbiAgICAgIGxldCBib3VuZHMgPSBwb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gICAgICBsZXQgeCA9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICAgIGxldCB5ID0gYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IC8gMjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRMaXN0LnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50TGlzdC5wb2ludHNbaV07XG4gICAgICAgIHAueCAtPSB4O1xuICAgICAgICBwLnkgLT0geTtcbiAgICAgIH1cbiAgICAgIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7IHBvaW50TGlzdDogcG9pbnRMaXN0LCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UsIGNsb3NlZDogY2xvc2VkIH0pO1xuICAgICAgbGV0IHAgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHgsIHkpO1xuICAgICAgc2hhcGUueCA9IHAueDtcbiAgICAgIHNoYXBlLnkgPSBwLnk7XG4gICAgICB0aGlzLmVtaXQoJ3NoYXBlJywgc2hhcGUpO1xuICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBkcmF3UGF0aChjdHgsIHBvaW50cywgc3Ryb2tlLCBmaWxsLCBjbG9zZWQ9ZmFsc2UpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2UgIT09IHVuZGVmaW5lZCA/IChzdHJva2UgPyBzdHJva2UgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGwgIT09IHVuZGVmaW5lZCA/IChmaWxsID8gZmlsbCA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcblxuICAgIGlmIChzdHJva2UgPT0gbnVsbCkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2N5YW4nO1xuICAgIH1cblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZHJhd1BhdGgoY3R4LCB0aGlzLnBvaW50cywgdGhpcy5zdHJva2UsIHRoaXMuZmlsbCk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBsZXQgY3AgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgbGV0IHAwID0gdGhpcy5wb2ludHNbMF07XG5cbiAgICAgIGlmIChjcC5kaXN0YW5jZShwMCkgPCA1KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhwMC54LCBwMC55LCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgbGV0IHAgPSBuZXcgUG9pbnQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChwLmRpc3RhbmNlKHRoaXMucG9pbnRzWzBdKSA8IDUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7fVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge31cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVuY2lsVG9vbDtcbiIsImltcG9ydCBUb29sIGZyb20gJy4vdG9vbCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vLi4vZGlzcGxheS9zaGFwZSc7XG5cbmNsYXNzIFBvaW50ZXJUb29sIGV4dGVuZHMgVG9vbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwb2ludGVyLWN1cnNvcicpO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgbGV0IHNwID0gcGFwZXIuc2NyZWVuVG9Xb3JsZCh4LCB5KTtcbiAgICBmb3IgKHZhciBpID0gcGFwZXIuZnJhbWUuc2hhcGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5mcmFtZS5zaGFwZXNbaV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdChzcC54LCBzcC55KSkge1xuICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbWFycXVlZVNlbGVjdCh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgbGV0IHAxID0gcGFwZXIuc2NyZWVuVG9Xb3JsZCh4bWluLCB5bWluKTtcbiAgICBsZXQgcDIgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHhtYXgsIHltYXgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcGVyLmZyYW1lLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gcGFwZXIuZnJhbWUuc2hhcGVzW2ldO1xuICAgICAgaWYgKHNoYXBlIGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgICAgaWYgKHNoYXBlLmludGVyc2VjdHNSZWN0YW5nbGUocDEueCwgcDEueSwgcDIueCwgcDIueSkpIHtcbiAgICAgICAgICBzZWxlY3Rpb24ucHVzaChzaGFwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGFwZXIuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAgIC8vIGNvbnNvbGUubG9nKHBhcGVyLnNlbGVjdGlvbik7XG4gIH1cblxuICBtb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXBlci5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHBhcGVyLnNlbGVjdGlvbltpXTtcbiAgICAgIHNoYXBlLnggKz0gZHg7XG4gICAgICBzaGFwZS55ICs9IGR5O1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgZHJhZ09uKCkge1xuICAgIHRoaXMubW9kZSA9ICdkcmFnJztcbiAgICAvLyBjb25zb2xlLmxvZygnZHJhZ09uJyk7XG4gIH1cblxuICBkcmFnT2ZmKCkge1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgLy8gY29uc29sZS5sb2coJ2RyYWdPZmYnKTtcbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2V4Y2x1c2lvbic7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMuZG93blgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuZG93blgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIHRoaXMuZG93blggPSBldmVudC5wYWdlWDtcbiAgICAgIHRoaXMuZG93blkgPSBldmVudC5wYWdlWTtcblxuICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcblxuICAgICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmRvd25YLCB0aGlzLmRvd25ZKTtcbiAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgaWYgKHBhcGVyLnNlbGVjdGlvbi5pbmNsdWRlcyhoaXQpKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcGFwZXIuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhcmdldCA9IGhpdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcGVyLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIHRoaXMubW9kZSA9ICdtYXJxdWVlJztcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgICB0aGlzLmRyYWdPZmYoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgICAgdGhpcy5tYXJxdWVlU2VsZWN0KHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVk7XG5cbiAgICB0aGlzLmRlbHRhWCA9ICh0aGlzLmxhc3RYICE9PSB1bmRlZmluZWQgPyB0aGlzLmN1cnNvclggLSB0aGlzLmxhc3RYIDogMCk7XG4gICAgdGhpcy5kZWx0YVkgPSAodGhpcy5sYXN0WSAhPT0gdW5kZWZpbmVkID8gdGhpcy5jdXJzb3JZIC0gdGhpcy5sYXN0WSA6IDApO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpIHtcbiAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KHRoaXMuZGVsdGFYLCB0aGlzLmRlbHRhWSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMubGVmdCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICBsZXQgZHggPSB0aGlzLmN1cnNvclggLSB0aGlzLmRvd25YO1xuICAgICAgICAgIGxldCBkeSA9IHRoaXMuY3Vyc29yWSAtIHRoaXMuZG93blk7XG4gICAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+IDIgfHwgTWF0aC5hYnMoZHkpID4gMikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ09uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0WCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmxhc3RZID0gdGhpcy5jdXJzb3JZO1xuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuXG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcblxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRlclRvb2w7XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9ldmVudHMuanMnO1xuXG5jbGFzcyBUb29sIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgICBcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlci9wYXBlcic7XG5cbmNsYXNzIFN0YWdlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoeyB2aXNpYmxlOiBmYWxzZSB9KTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3N0YWdlJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAvLyB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3N0YWdlLWN1cnNvcicpO1xuXG4gICAgLy8gdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnBhcGVyLmRvbSgpKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGFkZCh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2godHJhbnNmb3JtKTtcbiAgICB0cmFuc2Zvcm0uYWRkZWRUb1N0YWdlKCk7XG4gICAgdHJhbnNmb3JtLm9uKCd2YWx1ZWNoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGVkaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2VkaXQnKTtcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0aW9uJyk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuc2VsZWN0aW9uWzBdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBncm91cCA9IG5ldyBHcm91cCgpO1xuICAgICAgICBncm91cC54ID0gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgPj4gMDtcbiAgICAgICAgZ3JvdXAueSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSA+PiAwO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBncm91cDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNlbGVjdE1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIGlmICh4bWluID4geG1heCkgW3htaW4sIHhtYXhdID0gWyB4bWF4LCB4bWluIF07XG4gICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgICBsZXQgc2VsZWN0aW9uID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgICAgaWYgKGNoaWxkLmludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkpIHtcbiAgICAgICAgICBzZWxlY3Rpb24ucHVzaChjaGlsZCk7XG4gICAgICAgICAgY2hpbGQuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uW2ldLmRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyU2hhcGUoc2hhcGUsIHgsIHkpIHtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54ICsgc2hhcGUueCwgcC55ICsgc2hhcGUueSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8ocC54ICsgc2hhcGUueCwgcC55ICsgc2hhcGUueSk7XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlckhpbnRzKHRyYW5zZm9ybSkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdHJhbnNmb3JtLnNlbGVjdGVkID8gJ3JlZCcgOiAnYmx1ZSc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModHJhbnNmb3JtLngsIHRyYW5zZm9ybS55LCAzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBsZXQgYm91bmRzID0gdHJhbnNmb3JtLmdldEJvdW5kcygpO1xuICAgIGlmIChib3VuZHMpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyYW5zZm9ybS5zZWxlY3RlZCA/ICdyZWQnIDogJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnJlY3QoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVyT2JqZWN0KHRyYW5zZm9ybSkge1xuICAgIGlmICh0cmFuc2Zvcm0gaW5zdGFuY2VvZiBHcm91cCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFuc2Zvcm0uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gdHJhbnNmb3JtLmNoaWxkcmVuW2ldO1xuICAgICAgICB0aGlzLnJlbmRlclNoYXBlKGNoaWxkLCB0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHJhbnNmb3JtLnNlbGVjdGVkKSB0aGlzLnJlbmRlckhpbnRzKHRyYW5zZm9ybSk7XG4gIH1cblxuICByZW5kZXJBeGlzKHgsIHkpIHtcbiAgICBsZXQgc2l6ZSA9IDEwO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIGN0eC5tb3ZlVG8oeCAtIHNpemUsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHNpemUsIHkpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHNpemUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICB0aGlzLnJlbmRlck9iamVjdChjaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjU7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgdGhpcy5yZW5kZXJBeGlzKHRoaXMuY29udGV4dC54LCB0aGlzLmNvbnRleHQueSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZXhjbHVzaW9uJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy5kb3duWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5kb3duWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gIH1cblxuICBtb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgIGl0ZW0ueCArPSBkeDtcbiAgICAgIGl0ZW0ueSArPSBkeTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGJlZ2luRHJhZygpIHtcbiAgICB0aGlzLm1vZGUgPSAnZHJhZyc7XG4gIH1cblxuICBjYW5jZWxEcmFnKCkge1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gIH1cblxuICBiZWdpbk1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIHRoaXMubW9kZSA9ICdtYXJxdWVlJztcbiAgfVxuXG4gIGNhbmNlbE1hcnF1ZWUoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQuaGl0VGVzdCh4LCB5KSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2hvd1BhcGVyKCkge1xuXG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkb3duJyk7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIHRoaXMuZG93blggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5kb3duWSA9IHRoaXMuY3Vyc29yWTtcblxuICAgIGxldCBoaXQgPSB0aGlzLmhpdFRlc3QodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhoaXQpKSB7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbIGhpdCBdO1xuICAgICAgICBoaXQuc2VsZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJylcbiAgICAgIHRoaXMuY2FuY2VsRHJhZygpO1xuICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgIHRoaXMuc2VsZWN0TWFycXVlZSh0aGlzLmRvd25YLCB0aGlzLmRvd25ZLCB0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICB0aGlzLmNhbmNlbE1hcnF1ZWUoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbC5vZmZzZXRUb3A7XG5cbiAgICB0aGlzLmRlbHRhWCA9IHRoaXMubGFzdFggPyB0aGlzLmN1cnNvclggLSB0aGlzLmxhc3RYIDogMDtcbiAgICB0aGlzLmRlbHRhWSA9IHRoaXMubGFzdFkgPyB0aGlzLmN1cnNvclkgLSB0aGlzLmxhc3RZIDogMDtcblxuICAgIGlmIChldmVudC5idXR0b25zICYgMSkge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KHRoaXMuZGVsdGFYLCB0aGlzLmRlbHRhWSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZHggPSB0aGlzLmN1cnNvclggLSB0aGlzLmRvd25YO1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmN1cnNvclkgLSB0aGlzLmRvd25ZO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+PSAyIHx8IE1hdGguYWJzKGR5KSA+PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmJlZ2luRHJhZygpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5iZWdpbk1hcnF1ZWUodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5kb3duWCArIGR4LCB0aGlzLmRvd25ZICsgZHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICAvLyBpZiAoaGl0KSB7XG4gICAgICAvLyAgIHRoaXMudGFyZ2V0ID0gaGl0O1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAvLyAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0WCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmxhc3RZID0gdGhpcy5jdXJzb3JZO1xuXG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmVkaXQoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZTtcbiIsIlxuY2xhc3MgU3ZnIHtcbiAgc3RhdGljIGVsZW1lbnQodHlwZSwgYXR0cmlidXRlcykge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0eXBlKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgc3RhdGljIHN2ZyhhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnLCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBzdmcuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2ZztcbiIsIlxuLy8gQ29weXJpZ2h0IChjKSAxOTcwLTIwMDMsIFdtLiBSYW5kb2xwaCBGcmFua2xpblxuLy8gaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1Ly9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuXG5mdW5jdGlvbiBwb2ludEluUG9seWdvbihwb2ludHMsIHRlc3R4LCB0ZXN0eSkge1xuICBsZXQgaSwgaiwgYyA9IDA7XG4gIGZvciAobGV0IGkgPSAwLCBqID0gcG9pbnRzLmxlbmd0aCAtIDE7IGkgPCBwb2ludHMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgaWYgKCgocG9pbnRzW2ldLnkgPiB0ZXN0eSkgIT0gKHBvaW50c1tqXS55ID4gdGVzdHkpKSAmJlxuICAgICAgKHRlc3R4IDwgKHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLngpICogKHRlc3R5IC0gcG9pbnRzW2ldLnkpIC8gKHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnkpICsgcG9pbnRzW2ldLngpKVxuICAgICAgYyA9ICFjO1xuICB9XG4gIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSh4MSwgeTEsIHgyLCB5MiwgeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAvLyBDb21wbGV0ZWx5IG91dHNpZGUuXG4gIGlmICgoeDEgPD0geG1pbiAmJiB4MiA8PSB4bWluKSB8fCAoeTEgPD0geW1pbiAmJiB5MiA8PSB5bWluKSB8fFxuICAgICAgKHgxID49IHhtYXggJiYgeDIgPj0geG1heCkgfHwgKHkxID49IHltYXggJiYgeTIgPj0geW1heCkpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtID0gKHkyIC0geTEpIC8gKHgyIC0geDEpO1xuXG4gIHZhciB5ID0gbSAqICh4bWluIC0geDEpICsgeTE7XG4gIGlmICh5ID4geW1pbiAmJiB5IDwgeW1heCkgcmV0dXJuIHRydWU7XG5cbiAgeSA9IG0gKiAoeG1heCAtIHgxKSArIHkxO1xuICBpZiAoeSA+IHltaW4gJiYgeSA8IHltYXgpIHJldHVybiB0cnVlO1xuXG4gIHZhciB4ID0gKHltaW4gLSB5MSkgLyBtICsgeDE7XG4gIGlmICh4ID4geG1pbiAmJiB4IDwgeG1heCkgcmV0dXJuIHRydWU7XG5cbiAgeCA9ICh5bWF4IC0geTEpIC8gbSArIHgxO1xuICBpZiAoeCA+IHhtaW4gJiYgeCA8IHhtYXgpIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZTogbGluZUludGVyc2VjdHNSZWN0YW5nbGUsXG4gIHBvaW50SW5Qb2x5Z29uOiBwb2ludEluUG9seWdvblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==