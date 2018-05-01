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
    }
  }, {
    key: 'startup',
    value: function startup() {
      // console.log('startup');

      // let group = new Group();
      //
      // let shape = new Shape({
      //   points: [ { x: 0, y: 0 }, { x: 60, y: 0 }, { x: 40, y: 40 }, { x: 20, y: 10 } ],
      //   fill: '#cccccc',
      //   stroke: 'black',
      //   closed: true
      // });
      // shape.x = -60;
      // shape.y = 80;
      // group.add(shape);
      //
      // shape = new Shape({
      //   points: [ { x: 0, y: 0 }, { x: 60, y: 20 }, { x: 100, y: 20 }, { x: 100, y: 70 } ],
      //   fill: '#cccccc',
      //   stroke: null,
      //   closed: true
      // });
      // shape.x = 150;
      // shape.y = 100;
      // group.add(shape);
      //
      // this.stage.add(group);
      //
      // group.x = 75;
      // group.y = 50;

      this.dom.app = document.getElementById('app');

      this.paper = new _paper2.default();
      this.setEditor(this.paper);

      global.paper = this.paper;

      // this.paper.show();
      // this.editor = this.paper;
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

    // hideArea() {
    //   if (this.area == 'paper') {
    //     this.hidePaper();
    //   }
    // }
    //
    // showArea(area) {
    //   if (area !== this.area) {
    //     this.hideArea();
    //     if (area == 'paper') {
    //       this.showPaper();
    //     }
    //     else if (area == 'stage') {
    //
    //     }
    //   }
    // }
    //
    // showPaper() {
    //   this.dom.app.appendChild(this.paper.dom());
    //   this.area = 'paper';
    // }
    //
    // hidePaper() {
    //   this.dom.app.removeChild(this.dom.app.firstChild);
    //   this.area = null;
    // }

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
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'contextmenu') {
        this.onContextMenu(event);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NlcXVlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvcGVuY2lsX3Rvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyL3Rvb2xzL3BvaW50ZXJfdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJzdGFydHVwIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXBlciIsInNldEVkaXRvciIsImdsb2JhbCIsInN0YWdlRWwiLCJzdGFnZSIsInNoYXBlcyIsImdldFNoYXBlcyIsImxlbmd0aCIsImdyb3VwIiwieCIsInkiLCJpIiwic2hhcGUiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJ3aWR0aCIsImhlaWdodCIsImFkZCIsImVkaXRvciIsImhpZGUiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInNob3ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIm9uQ29udGV4dE1lbnUiLCJoYW5kbGVFdmVudCIsIm9uS2V5RG93biIsIm9uTW91c2VEb3duIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJGcmFtZSIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJHcm91cCIsInBhcmFtcyIsImNoaWxkcmVuIiwiY29udGVudCIsIkFycmF5IiwiaGl0VGVzdCIsInJlY3RzIiwiY2hpbGQiLCJ4bWluIiwieW1pbiIsInhtYXgiLCJ5bWF4IiwicmVjdCIsIlNlcXVlbmNlIiwiZnJhbWVzIiwiZnJhbWUiLCJ1bmRlZmluZWQiLCJmcmFtZU5vIiwiU2hhcGUiLCJmaWxsIiwic3Ryb2tlIiwiY2xvc2VkIiwicG9pbnRMaXN0IiwiY29weSIsInBvaW50cyIsInAwIiwicDEiLCJsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSIsInBvaW50SW5Qb2x5Z29uIiwiVGV4dCIsInNldFNpemUiLCJzaXplIiwic2V0VGV4dCIsInZhbHVlIiwiVHJhbnNmb3JtIiwic2VsZWN0ZWQiLCJfeCIsImVtaXQiLCJfeSIsIkVkaXRvciIsIkV2ZW50IiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2lyY2xlIiwiciIsIngxIiwieTEiLCJ4MiIsInkyIiwiZHgiLCJkeSIsImQiLCJNYXRoIiwic3FydCIsIlBvaW50IiwicG9pbnQiLCJQb2ludExpc3QiLCJwIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJORUdBVElWRV9JTkZJTklUWSIsIlJlY3RhbmdsZSIsImFtb3VudCIsIlZlY3RvciIsInZlY3RvciIsImRvdCIsInJhdGlvIiwiUGFwZXIiLCJzZWxlY3Rpb24iLCJzZXF1ZW5jZSIsImVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImNhbnZhcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImN1cnNvclgiLCJjdXJzb3JZIiwiYWRkRnJhbWUiLCJnb0ZyYW1lIiwic2V0VG9vbCIsImdldFBvaW50cyIsImN0eCIsImdldENvbnRleHQiLCJzYXZlIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJzcCIsIndvcmxkVG9TY3JlZW4iLCJqIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwicmVzdG9yZSIsInRyYW5zbGF0ZSIsImFyYyIsIlBJIiwiZmlsbFJlY3QiLCJyZW5kZXJBeGlzIiwiZ2V0RnJhbWUiLCJkcmF3T3V0bGluZSIsImRyYXdTaGFwZSIsInJlbmRlckhpbnRzIiwidG9vbCIsInJlbmRlciIsInRleHRCYXNlbGluZSIsImZvbnQiLCJmaWxsVGV4dCIsInR4IiwidHkiLCJjdXJzb3IiLCJjb250YWlucyIsInRvb2xOYW1lIiwib24iLCJhZGRTaGFwZSIsInNldEN1cnNvciIsImNsZWFyIiwiY2xlYXJGcmFtZSIsInJlbW92ZSIsInBhZ2VYIiwicGFnZVkiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJrZXkiLCJyZXBlYXQiLCJzaGlmdEtleSIsImRlbGV0ZVNlbGVjdGVkIiwiZGVsZXRlRnJhbWUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uRGJsQ2xpY2siLCJQZW5jaWxUb29sIiwic2NyZWVuVG9Xb3JsZCIsImRyYXdQYXRoIiwiY3AiLCJkaXN0YW5jZSIsImJ1dHRvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwiUG9pbnRlclRvb2wiLCJwMiIsImludGVyc2VjdHNSZWN0YW5nbGUiLCJtb2RlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZG93blgiLCJkb3duWSIsImhpdCIsImluY2x1ZGVzIiwidGFyZ2V0IiwiZHJhZ09mZiIsIm1hcnF1ZWVTZWxlY3QiLCJkZWx0YVgiLCJsYXN0WCIsImRlbHRhWSIsImxhc3RZIiwibW92ZVNlbGVjdGlvbkJ5IiwiYWJzIiwiZHJhZ09uIiwiVG9vbCIsIlN0YWdlIiwiY29udGV4dCIsInZpc2libGUiLCJ0cmFuc2Zvcm0iLCJhZGRlZFRvU3RhZ2UiLCJzZWxlY3QiLCJkZXNlbGVjdCIsImxpbmVXaWR0aCIsInJlbmRlclNoYXBlIiwiY2xlYXJSZWN0IiwicmVuZGVyT2JqZWN0IiwiZ2xvYmFsQWxwaGEiLCJpdGVtIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsImNhbmNlbERyYWciLCJzZWxlY3RNYXJxdWVlIiwiY2FuY2VsTWFycXVlZSIsImJ1dHRvbnMiLCJiZWdpbkRyYWciLCJiZWdpbk1hcnF1ZWUiLCJlZGl0IiwiU3ZnIiwiYXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJzdmciLCJ0ZXN0eCIsInRlc3R5IiwiYyIsIm0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFB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QUFZdEMsSUFBSXdDLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUJ4QyxNQUFJLENBQUN5QyxPQUFPd0MsRUFBUixJQUFja0osQ0FBZCxHQUFrQm5KLEVBQXRCO0FBQ0EsTUFBSWhGLElBQUlzQyxJQUFKLElBQVl0QyxJQUFJd0MsSUFBcEIsRUFBMEIsT0FBTyxJQUFQOztBQUUxQixTQUFPLEtBQVA7QUFDRDs7a0JBRWM7QUFDYmlCLDJCQUF5QkEsdUJBRFo7QUFFYkMsa0JBQWdCQTtBQUZILEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsImltcG9ydCBzdmcgZnJvbSAnLi9zdmcnO1xuaW1wb3J0IFN0YWdlIGZyb20gJy4vc3RhZ2UnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXIvcGFwZXInO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9kaXNwbGF5L2dyb3VwJztcbmltcG9ydCBUZXh0IGZyb20gJy4vZGlzcGxheS90ZXh0JztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSBbXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgLy8gbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgLy9cbiAgICAvLyBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoe1xuICAgIC8vICAgcG9pbnRzOiBbIHsgeDogMCwgeTogMCB9LCB7IHg6IDYwLCB5OiAwIH0sIHsgeDogNDAsIHk6IDQwIH0sIHsgeDogMjAsIHk6IDEwIH0gXSxcbiAgICAvLyAgIGZpbGw6ICcjY2NjY2NjJyxcbiAgICAvLyAgIHN0cm9rZTogJ2JsYWNrJyxcbiAgICAvLyAgIGNsb3NlZDogdHJ1ZVxuICAgIC8vIH0pO1xuICAgIC8vIHNoYXBlLnggPSAtNjA7XG4gICAgLy8gc2hhcGUueSA9IDgwO1xuICAgIC8vIGdyb3VwLmFkZChzaGFwZSk7XG4gICAgLy9cbiAgICAvLyBzaGFwZSA9IG5ldyBTaGFwZSh7XG4gICAgLy8gICBwb2ludHM6IFsgeyB4OiAwLCB5OiAwIH0sIHsgeDogNjAsIHk6IDIwIH0sIHsgeDogMTAwLCB5OiAyMCB9LCB7IHg6IDEwMCwgeTogNzAgfSBdLFxuICAgIC8vICAgZmlsbDogJyNjY2NjY2MnLFxuICAgIC8vICAgc3Ryb2tlOiBudWxsLFxuICAgIC8vICAgY2xvc2VkOiB0cnVlXG4gICAgLy8gfSk7XG4gICAgLy8gc2hhcGUueCA9IDE1MDtcbiAgICAvLyBzaGFwZS55ID0gMTAwO1xuICAgIC8vIGdyb3VwLmFkZChzaGFwZSk7XG4gICAgLy9cbiAgICAvLyB0aGlzLnN0YWdlLmFkZChncm91cCk7XG4gICAgLy9cbiAgICAvLyBncm91cC54ID0gNzU7XG4gICAgLy8gZ3JvdXAueSA9IDUwO1xuXG4gICAgdGhpcy5kb20uYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcigpO1xuICAgIHRoaXMuc2V0RWRpdG9yKHRoaXMucGFwZXIpO1xuXG4gICAgZ2xvYmFsLnBhcGVyID0gdGhpcy5wYXBlcjtcblxuICAgIC8vIHRoaXMucGFwZXIuc2hvdygpO1xuICAgIC8vIHRoaXMuZWRpdG9yID0gdGhpcy5wYXBlcjtcbiAgfVxuXG4gIGdyYWJQYXBlclNoYXBlcygpIHtcbiAgICBsZXQgc3RhZ2VFbCA9IHRoaXMuc3RhZ2UuZG9tKCk7XG4gICAgbGV0IHNoYXBlcyA9IHRoaXMucGFwZXIuZ2V0U2hhcGVzKCk7XG5cbiAgICBpZiAoc2hhcGVzLmxlbmd0aCkge1xuICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgICBsZXQgeCA9IDA7XG4gICAgICBsZXQgeSA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgICAgICAgeCArPSBib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDI7XG4gICAgICAgIHkgKz0gYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IC8gMjtcbiAgICAgIH1cbiAgICAgIHggLz0gc2hhcGVzLmxlbmd0aDtcbiAgICAgIHkgLz0gc2hhcGVzLmxlbmd0aDtcblxuICAgICAgZ3JvdXAueCA9IHg7XG4gICAgICBncm91cC55ID0geTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgICBzaGFwZS54ICs9IGdyb3VwLng7XG4gICAgICAgIHNoYXBlLnkgKz0gZ3JvdXAueTtcbiAgICAgIH1cblxuICAgICAgZ3JvdXAuYWRkKHNoYXBlcyk7XG4gICAgICB0aGlzLnN0YWdlLmFkZChncm91cCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RWRpdG9yKGVkaXRvcikge1xuICAgIGlmIChlZGl0b3IgIT09IHRoaXMuZWRpdG9yKSB7XG4gICAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IuaGlkZSgpO1xuICAgICAgICB0aGlzLmRvbS5hcHAucmVtb3ZlQ2hpbGQodGhpcy5kb20uYXBwLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5lZGl0b3IuZG9tKCkpO1xuICAgICAgdGhpcy5lZGl0b3Iuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhpZGVBcmVhKCkge1xuICAvLyAgIGlmICh0aGlzLmFyZWEgPT0gJ3BhcGVyJykge1xuICAvLyAgICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gc2hvd0FyZWEoYXJlYSkge1xuICAvLyAgIGlmIChhcmVhICE9PSB0aGlzLmFyZWEpIHtcbiAgLy8gICAgIHRoaXMuaGlkZUFyZWEoKTtcbiAgLy8gICAgIGlmIChhcmVhID09ICdwYXBlcicpIHtcbiAgLy8gICAgICAgdGhpcy5zaG93UGFwZXIoKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsc2UgaWYgKGFyZWEgPT0gJ3N0YWdlJykge1xuICAvL1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyBzaG93UGFwZXIoKSB7XG4gIC8vICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMucGFwZXIuZG9tKCkpO1xuICAvLyAgIHRoaXMuYXJlYSA9ICdwYXBlcic7XG4gIC8vIH1cbiAgLy9cbiAgLy8gaGlkZVBhcGVyKCkge1xuICAvLyAgIHRoaXMuZG9tLmFwcC5yZW1vdmVDaGlsZCh0aGlzLmRvbS5hcHAuZmlyc3RDaGlsZCk7XG4gIC8vICAgdGhpcy5hcmVhID0gbnVsbDtcbiAgLy8gfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIC8vIGlmIChldmVudC5rZXkgPT0gJ3AnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIHRoaXMuc2hvd0FyZWEoJ3BhcGVyJyk7XG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vXG4gICAgLy8gfVxuICAgIC8vIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgdGhpcy5zdGFnZS5lZGl0KCk7XG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgLy8gICAgIHRoaXMucGFwZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ2NvbnRleHRtZW51Jykge1xuICAgICAgdGhpcy5vbkNvbnRleHRNZW51KGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiXG5jbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gIH1cblxuICBhZGQoc2hhcGUpIHtcbiAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgfVxuXG4gIHJlbW92ZShzaGFwZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuc2hhcGVzLmluZGV4T2Yoc2hhcGUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2hhcGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFtZTtcbiIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBhZGQoY29udGVudCkge1xuICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBjb250ZW50W2ldO1xuICAgICAgICBpZiAoc2hhcGUgaW5zdGFuY2VvZiBTaGFwZSkgdGhpcy5hZGQoc2hhcGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdCh4IC0gdGhpcy54LCB5IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCByZWN0cyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGJvdW5kcyA9IGNoaWxkLmdldEJvdW5kcygpO1xuICAgICAgcmVjdHMucHVzaChib3VuZHMpO1xuICAgIH1cblxuICAgIGlmIChyZWN0cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gMDsgLy9OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IDA7IC8vTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSAwOyAvL051bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gMDsgLy9OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHJlY3QgPSByZWN0c1tpXTtcbiAgICAgICAgeG1pbiA9IHJlY3QueCA8IHhtaW4gPyByZWN0LnggOiB4bWluO1xuICAgICAgICB5bWluID0gcmVjdC55IDwgeW1pbiA/IHJlY3QueSA6IHltaW47XG4gICAgICAgIHhtYXggPSByZWN0LnggKyByZWN0LndpZHRoID4geG1heCA/IHJlY3QueCArIHJlY3Qud2lkdGggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcmVjdC55ICsgcmVjdC5oZWlnaHQgPiB5bWF4ID8gcmVjdC55ICsgcmVjdC5oZWlnaHQgOiB5bWF4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeG1pbiArIHRoaXMueCwgeW1pbiArIHRoaXMueSwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsIlxuY2xhc3MgU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICB9XG5cbiAgYWRkKGZyYW1lLCBpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKCdzZXF1ZW5jZS5hZGQnLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLmZyYW1lcy5zcGxpY2UoaW5kZXgsIDAsIGZyYW1lKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5mcmFtZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmZyYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGdldEZyYW1lKGZyYW1lTm8pIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXNbZnJhbWVOb107XG4gIH1cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lcy5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VxdWVuY2U7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBQb2ludExpc3QgZnJvbSAnLi4vZ2VvbS9wb2ludF9saXN0JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIFNoYXBlIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZmlsbCA9IHBhcmFtcy5maWxsIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBwYXJhbXMuc3Ryb2tlIHx8IG51bGw7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuICAgIC8vIHRoaXMuc3Ryb2tlV2lkdGggPSBwYXJhbXMuc3Ryb2tlV2lkdGggfHwgMTtcblxuICAgIHRoaXMucG9pbnRMaXN0ID0gcGFyYW1zLnBvaW50TGlzdC5jb3B5KCk7XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgU2hhcGUoeyBwb2ludExpc3Q6IHRoaXMucG9pbnRMaXN0LCBzdHJva2U6IHRoaXMuc3Ryb2tlLCBmaWxsOiB0aGlzLmZpbGwsIGNsb3NlZDogdGhpcy5jbG9zZWQgfSk7XG4gIH1cblxuICBnZXRQb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgYm91bmRzID0gdGhpcy5wb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gICAgYm91bmRzLnggKz0gdGhpcy54O1xuICAgIGJvdW5kcy55ICs9IHRoaXMueTtcbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgaW50ZXJzZWN0c1JlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICBpZiAoeW1pbiA+IHltYXgpIFt5bWluLCB5bWF4XSA9IFsgeW1heCwgeW1pbiBdO1xuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwMCA9IHBvaW50c1tpIC0gMV07XG4gICAgICBsZXQgcDEgPSBwb2ludHNbaV07XG4gICAgICBpZiAoVXRpbC5saW5lSW50ZXJzZWN0c1JlY3RhbmdsZShwMC54LCBwMC55LCBwMS54LCBwMS55LCB4bWluIC0gdGhpcy54LCB5bWluIC0gdGhpcy55LCB4bWF4IC0gdGhpcy54LCB5bWF4IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgbGV0IHBvaW50cyA9IHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgICBpZiAodGhpcy5maWxsKSB7XG4gICAgICByZXR1cm4gVXRpbC5wb2ludEluUG9seWdvbihwb2ludHMsIHggLSB0aGlzLngsIHkgLSB0aGlzLnkpO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcbiIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMuY29udGVudCk7XG4gIH1cblxuICBzZXRTaXplKHZhbHVlKSB7XG4gICAgdGhpcy5zaXplID0gdmFsdWU7XG4gIH1cblxuICBzZXRUZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBkb20oKSB7XG4gIH1cblxuICBzaG93KCkge1xuXG4gIH1cblxuICBoaWRlKCkge1xuXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIiwiXG5jbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cbn1cblxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09IHR5cGUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IHR5cGU6IHR5cGUsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRXZlbnREaXNwYXRjaGVyLCBFdmVudCB9O1xuIiwiXG5jbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuciA9IHI7XG4gIH1cblxuICBpbnRlcnNlY3RzTGluZVNlZ21lbnQoeDEsIHkxLCB4MiwgeTIpIHtcblxuICB9XG5cbiAgY29udGFpbnNQb2ludCh4LCB5KSB7XG4gICAgbGV0IGR4ID0geCAtIHRoaXMueDtcbiAgICBsZXQgZHkgPSB5IC0gdGhpcy55O1xuICAgIGxldCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICByZXR1cm4gZCA8IHRoaXMucjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRpc3RhbmNlKHBvaW50KSB7XG4gICAgbGV0IGR4ID0gdGhpcy54IC0gcG9pbnQueDtcbiAgICBsZXQgZHkgPSB0aGlzLnkgLSBwb2ludC55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL3JlY3RhbmdsZSc7XG5cbmNsYXNzIFBvaW50TGlzdCB7XG4gIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgaWYgKHBvaW50cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHAueCwgcC55KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50TGlzdCh0aGlzLnBvaW50cyk7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IHhtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgICAgeG1pbiA9IHAueCA8IHhtaW4gPyBwLnggOiB4bWluO1xuICAgICAgICB5bWluID0gcC55IDwgeW1pbiA/IHAueSA6IHltaW47XG4gICAgICAgIHhtYXggPSBwLnggPiB4bWF4ID8gcC54IDogeG1heDtcbiAgICAgICAgeW1heCA9IHAueSA+IHltYXggPyBwLnkgOiB5bWF4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCAtIHhtaW4sIHltYXggLSB5bWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludExpc3Q7XG4iLCJcbmNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ3JvdyhhbW91bnQpIHtcbiAgICB0aGlzLnggLT0gYW1vdW50O1xuICAgIHRoaXMueSAtPSBhbW91bnQ7XG4gICAgdGhpcy53aWR0aCArPSBhbW91bnQgKiAyO1xuICAgIHRoaXMuaGVpZ2h0ICs9IGFtb3VudCAqIDI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xuIiwiXG5jbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZG90KHZlY3Rvcikge1xuICAgIHJldHVybiAodGhpcy54ICogdmVjdG9yLnggKyB0aGlzLnkgKiB2ZWN0b3IueSk7XG4gIH1cblxuICBtYWcoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgcHJvamVjdCh2ZWN0b3IpIHtcbiAgICBsZXQgZCA9IHZlY3Rvci5kb3QodmVjdG9yKTtcbiAgICBpZiAoZCA+IDApIHtcbiAgICAgIGxldCByYXRpbyA9IHRoaXMuZG90KHZlY3RvcikgLyBkO1xuICAgICAgLy8gcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICBpZiAocmF0aW8gPj0gMCAmJiByYXRpbyA8PSAxKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi9nZW9tL3ZlY3Rvcic7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4uL2dlb20vY2lyY2xlJztcblxuaW1wb3J0IFNoYXBlIGZyb20gJy4uL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEZyYW1lIGZyb20gJy4uL2Rpc3BsYXkvZnJhbWUnO1xuaW1wb3J0IFNlcXVlbmNlIGZyb20gJy4uL2Rpc3BsYXkvc2VxdWVuY2UnO1xuXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQgUG9pbnRlclRvb2wgZnJvbSAnLi90b29scy9wb2ludGVyX3Rvb2wnO1xuaW1wb3J0IFBlbmNpbFRvb2wgZnJvbSAnLi90b29scy9wZW5jaWxfdG9vbCc7XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgICB0aGlzLmZpbGwgPSBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gbnVsbDtcblxuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgdGhpcy5zZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZSgpO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yWCA9IDA7XG4gICAgdGhpcy5jdXJzb3JZID0gMDtcblxuICAgIHRoaXMuYWRkRnJhbWUoKTtcbiAgICB0aGlzLmdvRnJhbWUoMCk7XG5cbiAgICB0aGlzLnNldFRvb2woJ3BvaW50ZXInKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGRyYXdTaGFwZShzaGFwZSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgbGV0IHNwID0gdGhpcy53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgbGV0IHggPSAocC54ICsgc3AueCk7XG4gICAgICBsZXQgeSA9IChwLnkgKyBzcC55KTtcblxuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBkcmF3T3V0bGluZShzaGFwZSwgc3Ryb2tlKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZSB8fCAnYmxhY2snO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgbGV0IHNwID0gdGhpcy53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIGxldCB4ID0gKHAueCArIHNwLngpO1xuICAgICAgbGV0IHkgPSAocC55ICsgc3AueSk7XG5cbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlckF4aXMoeCwgeSkge1xuICAgIGxldCBzaXplID0gMjA7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG4gICAgY3R4Lm1vdmVUbyh4IC0gc2l6ZSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgc2l6ZSwgeSk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5IC0gc2l6ZSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgc2l6ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJIaW50cygpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgICAgbGV0IHAgPSB0aGlzLndvcmxkVG9TY3JlZW4oc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhwLnggPj4gMCwgcC55ID4+IDAsIDMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHRoaXMucmVuZGVyQXhpcygodGhpcy5jYW52YXMud2lkdGggLyAyKSA+PiAwLCAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgPj4gMCk7XG5cbiAgICBpZiAodGhpcy5mcmFtZU5vID4gMCkge1xuICAgICAgbGV0IGZyYW1lID0gdGhpcy5zZXF1ZW5jZS5nZXRGcmFtZSh0aGlzLmZyYW1lTm8gLSAxKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IGZyYW1lLnNoYXBlc1tpXTtcbiAgICAgICAgdGhpcy5kcmF3T3V0bGluZShzaGFwZSwgJ3JnYigxOTIsIDI0MCwgMTkyKScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mcmFtZS5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuZnJhbWUuc2hhcGVzW2ldO1xuICAgICAgdGhpcy5kcmF3U2hhcGUoc2hhcGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVySGludHMoKTtcblxuICAgIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICB0aGlzLnRvb2wucmVuZGVyKGN0eCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICBjdHguZm9udCA9ICcxOHB4IHNhbnMtc2VyaWYnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGN0eC5maWxsVGV4dCgodGhpcy5mcmFtZU5vICsgMSkgKyAnOicgKyB0aGlzLnNlcXVlbmNlLmxlbmd0aCwgMjAsIDIwKTtcbiAgfVxuXG4gIHNjcmVlblRvV29ybGQoeCwgeSkge1xuICAgIGxldCB0eCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICBsZXQgdHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCAtIHR4LCB5IC0gdHkpO1xuICB9XG5cbiAgd29ybGRUb1NjcmVlbih4LCB5KSB7XG4gICAgbGV0IHR4ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIGxldCB0eSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh4ICsgdHgsIHkgKyB0eSk7XG4gIH1cblxuICBhZGRTaGFwZShzaGFwZSkge1xuICAgIHRoaXMuZnJhbWUuYWRkKHNoYXBlKTtcbiAgfVxuXG4gIGdldFNoYXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZXM7XG4gIH1cblxuICAvLyBzZXRGaWxsKGZpbGwpIHtcbiAgLy8gICB0aGlzLmZpbGwgPSBmaWxsO1xuICAvLyAgIHRoaXMucmVuZGVyKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gc2V0U3Ryb2tlKHN0cm9rZSkge1xuICAvLyAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAvLyAgIHRoaXMucmVuZGVyKCk7XG4gIC8vIH1cblxuICBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gICAgaWYgKHRoaXMuZWwuY29udGFpbnModGhpcy5jdXJzb3IpKSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcbiAgICB9XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3I7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBzZXRUb29sKHRvb2xOYW1lKSB7XG4gICAgaWYgKHRvb2xOYW1lICE9PSB0aGlzLnRvb2xOYW1lKSB7XG4gICAgICBpZiAodG9vbE5hbWUgPT0gJ3BvaW50ZXInKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQb2ludGVyVG9vbCgpO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy50b29sLm9uKCdzZWxlY3QnLCAoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocG9pbnQpO1xuICAgICAgICAgIC8vIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAgICAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyB0aGlzLnRvb2wub24oJ21hcnF1ZWUnLCAocmVjdCkgPT4ge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlY3QpO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRvb2xOYW1lID09ICdwZW5jaWwnKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQZW5jaWxUb29sKCk7XG4gICAgICAgIHRoaXMudG9vbC5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3NoYXBlJywgKHNoYXBlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5zaGFwZXMucHVzaChzaGFwZSk7XG4gICAgICAgICAgdGhpcy5hZGRTaGFwZShzaGFwZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9vbE5hbWUgPSB0b29sTmFtZTtcbiAgICAgIGlmICh0aGlzLnRvb2wuY3Vyc29yKSB0aGlzLnNldEN1cnNvcih0aGlzLnRvb2wuY3Vyc29yKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRnJhbWUoaW5kZXgpIHtcbiAgICBsZXQgZnJhbWUgPSBuZXcgRnJhbWUoKTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMuc2VxdWVuY2UuYWRkKGZyYW1lLCBpbmRleCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5zZXF1ZW5jZS5hZGQoZnJhbWUpO1xuICB9XG5cbiAgY2xlYXJGcmFtZSgpIHtcbiAgICB0aGlzLmZyYW1lLmNsZWFyKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGRlbGV0ZUZyYW1lKGluZGV4KSB7XG4gICAgaWYgKHRoaXMuc2VxdWVuY2UubGVuZ3RoID09IDEpIHtcbiAgICAgIHRoaXMuY2xlYXJGcmFtZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2VxdWVuY2UucmVtb3ZlKGluZGV4KTtcbiAgICAgIHRoaXMuZ29GcmFtZShpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ29GcmFtZShmcmFtZU5vKSB7XG4gICAgaWYgKGZyYW1lTm8gPCAwKSBmcmFtZU5vID0gMDtcbiAgICBpZiAoZnJhbWVObyA+IHRoaXMuc2VxdWVuY2UubGVuZ3RoIC0gMSkgZnJhbWVObyA9IHRoaXMuc2VxdWVuY2UubGVuZ3RoIC0gMTtcbiAgICBsZXQgZnJhbWUgPSB0aGlzLnNlcXVlbmNlLmdldEZyYW1lKGZyYW1lTm8pO1xuICAgIGlmIChmcmFtZSkge1xuICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgICAgdGhpcy5mcmFtZU5vID0gZnJhbWVObztcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVNlbGVjdGVkKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgdGhpcy5mcmFtZS5yZW1vdmUoc2hhcGUpO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZO1xuICAgIGlmICh0aGlzLmN1cnNvcikge1xuICAgICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yWCArICdweCc7XG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS50b3AgPSB0aGlzLmN1cnNvclkgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmtleSwgZXZlbnQuc2hpZnRLZXkpO1xuICAgIGlmIChldmVudC5rZXkgPT0gJ3EnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuc2V0VG9vbCgncG9pbnRlcicpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2InICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuc2V0VG9vbCgncGVuY2lsJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKChldmVudC5rZXkgPT0gJy4nIHx8IGV2ZW50LmtleSA9PSAnPicpICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICB0aGlzLmFkZEZyYW1lKHRoaXMuZnJhbWVObyArIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5nb0ZyYW1lKHRoaXMuZnJhbWVObyArIDEpO1xuICAgIH1cbiAgICBlbHNlIGlmICgoZXZlbnQua2V5ID09ICcsJyB8fCBldmVudC5rZXkgPT0gJzwnKSAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgdGhpcy5hZGRGcmFtZSh0aGlzLmZyYW1lTm8pO1xuICAgICAgICB0aGlzLmdvRnJhbWUodGhpcy5mcmFtZU5vKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ29GcmFtZSh0aGlzLmZyYW1lTm8gLSAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICd4JyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgICB0aGlzLmRlbGV0ZVNlbGVjdGVkKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnWCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5kZWxldGVGcmFtZSh0aGlzLmZyYW1lTm8pO1xuICAgIH1cbiAgICAvLyBpZiAoZXZlbnQua2V5ID09ICdzJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnNldFN0cm9rZSh0aGlzLnN0cm9rZSA/IG51bGwgOiAnYmxhY2snKVxuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChldmVudC5rZXkgPT0gJzAnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIHRoaXMuc2V0RmlsbChudWxsKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoWycxJywgJzInLCAnMycsICc0J10uaW5jbHVkZXMoZXZlbnQua2V5KSAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICBsZXQgY29sb3IgPSBDT0xPUlNbcGFyc2VJbnQoZXZlbnQua2V5KSAtIDFdO1xuICAgIC8vICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpXG4gICAgLy8gICAgIHRoaXMuc2V0RmlsbChjb2xvcik7XG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhdycpIHtcbiAgICAvLyAgICAgaWYgKGV2ZW50LmtleSA9PSAnRXNjYXBlJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICAgICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2Uge1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgIHRoaXMudG9vbC5oYW5kbGVFdmVudChldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uLy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFBvaW50TGlzdCBmcm9tICcuLi8uLi9nZW9tL3BvaW50X2xpc3QnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4uLy4uL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcblxuY2xhc3MgUGVuY2lsVG9vbCBleHRlbmRzIFRvb2wge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgdGhpcy5zdHJva2UgPSAnZ3JheSc7XG4gICAgdGhpcy5maWxsID0gJ2xpZ2h0Z3JheSc7XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BlbmNpbC1jdXJzb3InKTtcbiAgfVxuXG4gIGNsb3NlUGF0aChjbG9zZWQ9ZmFsc2UpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IHBvaW50TGlzdCA9IG5ldyBQb2ludExpc3QodGhpcy5wb2ludHMpO1xuICAgICAgbGV0IGJvdW5kcyA9IHBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgICAgIGxldCB4ID0gYm91bmRzLnggKyBib3VuZHMud2lkdGggLyAyO1xuICAgICAgbGV0IHkgPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludExpc3QucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRMaXN0LnBvaW50c1tpXTtcbiAgICAgICAgcC54IC09IHg7XG4gICAgICAgIHAueSAtPSB5O1xuICAgICAgfVxuICAgICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHsgcG9pbnRMaXN0OiBwb2ludExpc3QsIGZpbGw6IHRoaXMuZmlsbCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSwgY2xvc2VkOiBjbG9zZWQgfSk7XG4gICAgICBsZXQgcCA9IHBhcGVyLnNjcmVlblRvV29ybGQoeCwgeSk7XG4gICAgICBzaGFwZS54ID0gcC54O1xuICAgICAgc2hhcGUueSA9IHAueTtcbiAgICAgIHRoaXMuZW1pdCgnc2hhcGUnLCBzaGFwZSk7XG4gICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdQYXRoKGN0eCwgcG9pbnRzLCBzdHJva2UsIGZpbGwsIGNsb3NlZD1mYWxzZSkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZSAhPT0gdW5kZWZpbmVkID8gKHN0cm9rZSA/IHN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbCAhPT0gdW5kZWZpbmVkID8gKGZpbGwgPyBmaWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgaWYgKHN0cm9rZSA9PSBudWxsKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnY3lhbic7XG4gICAgfVxuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kcmF3UGF0aChjdHgsIHRoaXMucG9pbnRzLCB0aGlzLnN0cm9rZSwgdGhpcy5maWxsKTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgIGxldCBjcCA9IG5ldyBQb2ludCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBsZXQgcDAgPSB0aGlzLnBvaW50c1swXTtcblxuICAgICAgaWYgKGNwLmRpc3RhbmNlKHAwKSA8IDUpIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHAwLngsIHAwLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgNSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHt9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7fVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZW5jaWxUb29sO1xuIiwiaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9kaXNwbGF5L3NoYXBlJztcblxuY2xhc3MgUG9pbnRlclRvb2wgZXh0ZW5kcyBUb29sIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BvaW50ZXItY3Vyc29yJyk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBsZXQgc3AgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHgsIHkpO1xuICAgIGZvciAodmFyIGkgPSBwYXBlci5mcmFtZS5zaGFwZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBzaGFwZSA9IHBhcGVyLmZyYW1lLnNoYXBlc1tpXTtcbiAgICAgIGlmIChzaGFwZS5oaXRUZXN0KHNwLngsIHNwLnkpKSB7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBtYXJxdWVlU2VsZWN0KHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBsZXQgcDEgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHhtaW4sIHltaW4pO1xuICAgIGxldCBwMiA9IHBhcGVyLnNjcmVlblRvV29ybGQoeG1heCwgeW1heCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFwZXIuZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5mcmFtZS5zaGFwZXNbaV07XG4gICAgICBpZiAoc2hhcGUgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgICBpZiAoc2hhcGUuaW50ZXJzZWN0c1JlY3RhbmdsZShwMS54LCBwMS55LCBwMi54LCBwMi55KSkge1xuICAgICAgICAgIHNlbGVjdGlvbi5wdXNoKHNoYXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwYXBlci5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgLy8gY29uc29sZS5sb2cocGFwZXIuc2VsZWN0aW9uKTtcbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcGVyLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gcGFwZXIuc2VsZWN0aW9uW2ldO1xuICAgICAgc2hhcGUueCArPSBkeDtcbiAgICAgIHNoYXBlLnkgKz0gZHk7XG4gICAgfVxuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBkcmFnT24oKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RyYWcnO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkcmFnT24nKTtcbiAgfVxuXG4gIGRyYWdPZmYoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICAvLyBjb25zb2xlLmxvZygnZHJhZ09mZicpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZXhjbHVzaW9uJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy5kb3duWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5kb3duWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgdGhpcy5kb3duWCA9IGV2ZW50LnBhZ2VYO1xuICAgICAgdGhpcy5kb3duWSA9IGV2ZW50LnBhZ2VZO1xuXG4gICAgICB0aGlzLmxlZnQgPSB0cnVlO1xuXG4gICAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuZG93blgsIHRoaXMuZG93blkpO1xuICAgICAgaWYgKGhpdCkge1xuICAgICAgICBpZiAocGFwZXIuc2VsZWN0aW9uLmluY2x1ZGVzKGhpdCkpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwYXBlci5zZWxlY3Rpb24gPSBbIGhpdCBdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gaGl0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFwZXIuc2VsZWN0aW9uID0gW107XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb2RlID0gJ21hcnF1ZWUnO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICAgIHRoaXMuZHJhZ09mZigpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgICB0aGlzLm1hcnF1ZWVTZWxlY3QodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWTtcblxuICAgIHRoaXMuZGVsdGFYID0gKHRoaXMubGFzdFggIT09IHVuZGVmaW5lZCA/IHRoaXMuY3Vyc29yWCAtIHRoaXMubGFzdFggOiAwKTtcbiAgICB0aGlzLmRlbHRhWSA9ICh0aGlzLmxhc3RZICE9PSB1bmRlZmluZWQgPyB0aGlzLmN1cnNvclkgLSB0aGlzLmxhc3RZIDogMCk7XG5cbiAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkodGhpcy5kZWx0YVgsIHRoaXMuZGVsdGFZKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5sZWZ0KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgIGxldCBkeCA9IHRoaXMuY3Vyc29yWCAtIHRoaXMuZG93blg7XG4gICAgICAgICAgbGV0IGR5ID0gdGhpcy5jdXJzb3JZIC0gdGhpcy5kb3duWTtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID4gMiB8fCBNYXRoLmFicyhkeSkgPiAyKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgICAgICAgICAgdGhpcy5kcmFnT24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxhc3RYID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMubGFzdFkgPSB0aGlzLmN1cnNvclk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG5cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyVG9vbDtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2V2ZW50cy5qcyc7XG5cbmNsYXNzIFRvb2wgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIFxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2w7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9kaXNwbGF5L2dyb3VwJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyL3BhcGVyJztcblxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuXG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcih7IHZpc2libGU6IGZhbHNlIH0pO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2UnKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIC8vIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnc3RhZ2UtY3Vyc29yJyk7XG5cbiAgICAvLyB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFwZXIuZG9tKCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkKHRyYW5zZm9ybSkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0cmFuc2Zvcm0pO1xuICAgIHRyYW5zZm9ybS5hZGRlZFRvU3RhZ2UoKTtcbiAgICB0cmFuc2Zvcm0ub24oJ3ZhbHVlY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZWRpdCcpO1xuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3Rpb24nKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5zZWxlY3Rpb25bMF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGdyb3VwLnggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSA+PiAwO1xuICAgICAgICBncm91cC55ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpID4+IDA7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGdyb3VwO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2VsZWN0TWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICBpZiAoeW1pbiA+IHltYXgpIFt5bWluLCB5bWF4XSA9IFsgeW1heCwgeW1pbiBdO1xuICAgIGxldCBzZWxlY3Rpb24gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgICBpZiAoY2hpbGQuaW50ZXJzZWN0c1JlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSkge1xuICAgICAgICAgIHNlbGVjdGlvbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICBjaGlsZC5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25baV0uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXJTaGFwZShzaGFwZSwgeCwgeSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHModHJhbnNmb3JtKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmFuc2Zvcm0uc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnksIDMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGxldCBib3VuZHMgPSB0cmFuc2Zvcm0uZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcykge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJhbnNmb3JtLnNlbGVjdGVkID8gJ3JlZCcgOiAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgucmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJPYmplY3QodHJhbnNmb3JtKSB7XG4gICAgaWYgKHRyYW5zZm9ybSBpbnN0YW5jZW9mIEdyb3VwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYW5zZm9ybS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSB0cmFuc2Zvcm0uY2hpbGRyZW5baV07XG4gICAgICAgIHRoaXMucmVuZGVyU2hhcGUoY2hpbGQsIHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0cmFuc2Zvcm0uc2VsZWN0ZWQpIHRoaXMucmVuZGVySGludHModHJhbnNmb3JtKTtcbiAgfVxuXG4gIHJlbmRlckF4aXMoeCwgeSkge1xuICAgIGxldCBzaXplID0gMTA7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG4gICAgY3R4Lm1vdmVUbyh4IC0gc2l6ZSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgc2l6ZSwgeSk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5IC0gc2l6ZSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgc2l6ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIHRoaXMucmVuZGVyT2JqZWN0KGNoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuNTtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICB0aGlzLnJlbmRlckF4aXModGhpcy5jb250ZXh0LngsIHRoaXMuY29udGV4dC55KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdleGNsdXNpb24nO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLmRvd25YLCB0aGlzLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmRvd25YLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgaXRlbS54ICs9IGR4O1xuICAgICAgaXRlbS55ICs9IGR5O1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYmVnaW5EcmFnKCkge1xuICAgIHRoaXMubW9kZSA9ICdkcmFnJztcbiAgfVxuXG4gIGNhbmNlbERyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgfVxuXG4gIGJlZ2luTWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgdGhpcy5tb2RlID0gJ21hcnF1ZWUnO1xuICB9XG5cbiAgY2FuY2VsTWFycXVlZSgpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5oaXRUZXN0KHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzaG93UGFwZXIoKSB7XG5cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2Rvd24nKTtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgdGhpcy5kb3duWCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmRvd25ZID0gdGhpcy5jdXJzb3JZO1xuXG4gICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKGhpdCkpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFsgaGl0IF07XG4gICAgICAgIGhpdC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKVxuICAgICAgdGhpcy5jYW5jZWxEcmFnKCk7XG4gICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgdGhpcy5zZWxlY3RNYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIHRoaXMuY2FuY2VsTWFycXVlZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIHRoaXMuZGVsdGFYID0gdGhpcy5sYXN0WCA/IHRoaXMuY3Vyc29yWCAtIHRoaXMubGFzdFggOiAwO1xuICAgIHRoaXMuZGVsdGFZID0gdGhpcy5sYXN0WSA/IHRoaXMuY3Vyc29yWSAtIHRoaXMubGFzdFkgOiAwO1xuXG4gICAgaWYgKGV2ZW50LmJ1dHRvbnMgJiAxKSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkodGhpcy5kZWx0YVgsIHRoaXMuZGVsdGFZKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMuY3Vyc29yWCAtIHRoaXMuZG93blg7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuY3Vyc29yWSAtIHRoaXMuZG93blk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID49IDIgfHwgTWF0aC5hYnMoZHkpID49IDIpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5EcmFnKCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJlZ2luTWFycXVlZSh0aGlzLmRvd25YLCB0aGlzLmRvd25ZLCB0aGlzLmRvd25YICsgZHgsIHRoaXMuZG93blkgKyBkeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIC8vIGlmIChoaXQpIHtcbiAgICAgIC8vICAgdGhpcy50YXJnZXQgPSBoaXQ7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgIC8vICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICB0aGlzLmxhc3RYID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMubGFzdFkgPSB0aGlzLmN1cnNvclk7XG5cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICAgIHRoaXMuZWRpdCgpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIiwiXG4vLyBDb3B5cmlnaHQgKGMpIDE5NzAtMjAwMywgV20uIFJhbmRvbHBoIEZyYW5rbGluXG4vLyBodHRwczovL3dyZi5lY3NlLnJwaS5lZHUvL1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sXG5cbmZ1bmN0aW9uIHBvaW50SW5Qb2x5Z29uKHBvaW50cywgdGVzdHgsIHRlc3R5KSB7XG4gIGxldCBpLCBqLCBjID0gMDtcbiAgZm9yIChsZXQgaSA9IDAsIGogPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICBpZiAoKChwb2ludHNbaV0ueSA+IHRlc3R5KSAhPSAocG9pbnRzW2pdLnkgPiB0ZXN0eSkpICYmXG4gICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICBjID0gIWM7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlKHgxLCB5MSwgeDIsIHkyLCB4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gIC8vIENvbXBsZXRlbHkgb3V0c2lkZS5cbiAgaWYgKCh4MSA8PSB4bWluICYmIHgyIDw9IHhtaW4pIHx8ICh5MSA8PSB5bWluICYmIHkyIDw9IHltaW4pIHx8XG4gICAgICAoeDEgPj0geG1heCAmJiB4MiA+PSB4bWF4KSB8fCAoeTEgPj0geW1heCAmJiB5MiA+PSB5bWF4KSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG0gPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG5cbiAgdmFyIHkgPSBtICogKHhtaW4gLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB5ID0gbSAqICh4bWF4IC0geDEpICsgeTE7XG4gIGlmICh5ID4geW1pbiAmJiB5IDwgeW1heCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHggPSAoeW1pbiAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB4ID0gKHltYXggLSB5MSkgLyBtICsgeDE7XG4gIGlmICh4ID4geG1pbiAmJiB4IDwgeG1heCkgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlOiBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSxcbiAgcG9pbnRJblBvbHlnb246IHBvaW50SW5Qb2x5Z29uXG59XG4iXSwic291cmNlUm9vdCI6IiJ9