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

    this.groups = [];
  }

  _createClass(Frame, [{
    key: "add",
    value: function add(group) {
      this.groups.push(group);
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

    this.shapes = [];
  }

  _createClass(Sequence, [{
    key: "add",
    value: function add(shape) {
      this.shapes.push(shape);
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

var _shape = __webpack_require__(/*! ../display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

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
    _this.sequence = [];

    _this.el = document.createElement('div');
    _this.el.classList.add('paper');

    _this.canvas = document.createElement('canvas');
    _this.canvas.width = window.innerWidth;
    _this.canvas.height = window.innerHeight;

    _this.el.appendChild(_this.canvas);

    _this.cursor = document.createElement('div');

    _this.cursorX = 0;
    _this.cursorY = 0;

    _this.addFrame();

    _this.setTool('pencil');
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
        // ctx.translate(0.5, 0.5);
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

      for (var i = 0; i < this.shapes.length; i++) {
        var shape = this.shapes[i];
        this.drawShape(shape);
      }

      this.renderHints();

      if (this.tool) {
        ctx.save();
        this.tool.render(ctx);
        ctx.restore();
      }

      // if (this.points.length) {
      //   this.drawPath({ points: this.points, fill: this.fill, stroke: this.stroke });
      //
      //   ctx.strokeStyle = 'blue';
      //   ctx.beginPath();
      //   let p = this.points[this.points.length - 1];
      //   ctx.moveTo(p.x, p.y);
      //   ctx.lineTo(this.cursorX, this.cursorY);
      //   ctx.stroke();
      //
      //   let cp = new Point(this.cursorX, this.cursorY);
      //   let p0 = this.points[0];
      //   if (cp.distance(p0) < SNAP_RADIUS) {
      //     ctx.arc(p0.x, p0.y, 5, 0, Math.PI * 2);
      //     ctx.stroke();
      //   }
      // }
    }
  }, {
    key: 'addFrame',
    value: function addFrame() {
      var frame = new _frame2.default();
      this.sequence.add(frame);
      this.frame = frame;
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
    key: 'getShapes',
    value: function getShapes() {
      return this.shapes;
    }
  }, {
    key: 'clear',
    value: function clear() {}
    // this.points = [];
    // this.shapes = [];
    // this.render();


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
      // console.log('setCuror', cursor);
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
            // console.log(shape);
            _this2.shapes.push(shape);
          });
        } else {
          return;
        }
        this.toolName = toolName;
        this.setCursor(this.tool.cursor);
        this.render();
      }
    }
  }, {
    key: 'goFrame',
    value: function goFrame(frameNo) {
      if (frameNo >= 0 && frameNo < this.sequence.length) {
        this.frameNo = frameNo;
        // this.
      }
    }
  }, {
    key: 'select',
    value: function select(shape) {}
    // this.selection = [ shape ];
    // this.render();
    // console.log('select', shape);


    // selectMarquee(xmin, ymin, xmax, ymax) {
    //   if (xmin > xmax) [xmin, xmax] = [ xmax, xmin ];
    //   if (ymin > ymax) [ymin, ymax] = [ ymax, ymin ];
    //   let selection = [];
    //   for (var i = 0; i < this.children.length; i++) {
    //     let child = this.children[i];
    //     if (child instanceof Shape) {
    //       if (child.intersectsRectangle(xmin, ymin, xmax, ymax)) {
    //         selection.push(child);
    //         child.select();
    //       }
    //     }
    //   }
    //   this.selection = selection;
    // }

    // hitTest(x, y) {
    //   for (var i = this.shapes.length - 1; i >= 0; i--) {
    //     let child = this.shapes[i];
    //     if (child.hitTest(x, y)) {
    //       return child;
    //     }
    //   }
    //   return null;
    // }

  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      // this.downX = event.offsetX;
      // this.downY = event.offsetY;
      //
      // let hit = this.hitTest(this.cursorX, this.cursorY);
      // if (hit) {
      //   if (this.selection.includes(hit)) {
      //
      //   } else {
      //     this.deselect();
      //     this.selection = [ hit ];
      //     hit.select();
      //   }
      // }
      // else {
      //   this.deselect();
      // }
      //
      // this.render();
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {}
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorX = event.pageX;
      this.cursorY = event.pageY;
      this.cursor.style.left = this.cursorX + 'px';
      this.cursor.style.top = this.cursorY + 'px';
      // if (event.buttons & 1)
      // console.log(this.cursorX);
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
      } else if (event.key == '.' && !event.repeat) {
        this.goFrame(this.frameNo + 1);
      } else if (event.key == ',' && !event.repeat) {
        this.goFrame(this.frameNo - 1);
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
      for (var i = paper.shapes.length - 1; i >= 0; i--) {
        var shape = paper.shapes[i];
        if (shape.hitTest(sp.x, sp.y)) {
          return shape;
        }
      }
      return null;
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
        if (child instanceof Shape) {
          if (child.intersectsRectangle(xmin, ymin, xmax, ymax)) {
            selection.push(child);
            child.select();
          }
        }
      }
      paper.selection = selection;
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
    }
  }, {
    key: 'dragOff',
    value: function dragOff() {
      this.mode = null;
    }
  }, {
    key: 'render',
    value: function render(ctx) {}
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      this.cursorX = event.pageX;
      this.cursorY = event.pageY;
      this.downX = this.cursorX;
      this.downY = this.cursorY;

      var hit = this.hitTest(this.cursorX, this.cursorY);
      if (hit) {
        paper.selection = [hit];
        this.emit('update');
      } else {
        paper.selection = [];
        this.emit('update');
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      if (this.mode == 'drag') {
        this.dragOff();
      }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorX = event.pageX;
      this.cursorY = event.pageY;

      this.deltaX = this.lastX ? this.cursorX - this.lastX : 0;
      this.deltaY = this.lastY ? this.cursorY - this.lastY : 0;

      if (this.mode == 'drag') {
        this.moveSelectionBy(this.deltaX, this.deltaY);
      } else {
        if (event.buttons & 1) {
          var dx = this.cursorX - this.downX;
          var dy = this.cursorY - this.downY;
          if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
            this.moveSelectionBy(dx, dy);
            this.dragOn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NlcXVlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvcGVuY2lsX3Rvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyL3Rvb2xzL3BvaW50ZXJfdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJzdGFydHVwIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXBlciIsInNldEVkaXRvciIsImdsb2JhbCIsInN0YWdlRWwiLCJzdGFnZSIsInNoYXBlcyIsImdldFNoYXBlcyIsImxlbmd0aCIsImdyb3VwIiwieCIsInkiLCJpIiwic2hhcGUiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJ3aWR0aCIsImhlaWdodCIsImFkZCIsImVkaXRvciIsImhpZGUiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInNob3ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIm9uQ29udGV4dE1lbnUiLCJoYW5kbGVFdmVudCIsIm9uS2V5RG93biIsIm9uTW91c2VEb3duIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJGcmFtZSIsImdyb3VwcyIsInB1c2giLCJHcm91cCIsInBhcmFtcyIsImNoaWxkcmVuIiwiY29udGVudCIsIkFycmF5IiwiaGl0VGVzdCIsInJlY3RzIiwiY2hpbGQiLCJ4bWluIiwieW1pbiIsInhtYXgiLCJ5bWF4IiwicmVjdCIsIlNlcXVlbmNlIiwiU2hhcGUiLCJmaWxsIiwic3Ryb2tlIiwiY2xvc2VkIiwicG9pbnRMaXN0IiwiY29weSIsInBvaW50cyIsInAwIiwicDEiLCJsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSIsInBvaW50SW5Qb2x5Z29uIiwiVGV4dCIsInNldFNpemUiLCJzaXplIiwic2V0VGV4dCIsInZhbHVlIiwiVHJhbnNmb3JtIiwic2VsZWN0ZWQiLCJfeCIsImVtaXQiLCJfeSIsIkVkaXRvciIsIkV2ZW50IiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2lyY2xlIiwiciIsIngxIiwieTEiLCJ4MiIsInkyIiwiZHgiLCJkeSIsImQiLCJNYXRoIiwic3FydCIsIlBvaW50IiwicG9pbnQiLCJQb2ludExpc3QiLCJwIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJORUdBVElWRV9JTkZJTklUWSIsIlJlY3RhbmdsZSIsImFtb3VudCIsIlZlY3RvciIsInZlY3RvciIsImRvdCIsInJhdGlvIiwiUGFwZXIiLCJzZWxlY3Rpb24iLCJzZXF1ZW5jZSIsImVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImNhbnZhcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImN1cnNvciIsImN1cnNvclgiLCJjdXJzb3JZIiwiYWRkRnJhbWUiLCJzZXRUb29sIiwiZ2V0UG9pbnRzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNhdmUiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInNwIiwid29ybGRUb1NjcmVlbiIsImoiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJyZXN0b3JlIiwidHJhbnNsYXRlIiwiYXJjIiwiUEkiLCJmaWxsUmVjdCIsInJlbmRlckF4aXMiLCJkcmF3U2hhcGUiLCJyZW5kZXJIaW50cyIsInRvb2wiLCJyZW5kZXIiLCJmcmFtZSIsInR4IiwidHkiLCJjb250YWlucyIsInRvb2xOYW1lIiwib24iLCJzZXRDdXJzb3IiLCJmcmFtZU5vIiwicGFnZVgiLCJwYWdlWSIsInN0eWxlIiwibGVmdCIsInRvcCIsImtleSIsInJlcGVhdCIsImdvRnJhbWUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uRGJsQ2xpY2siLCJQZW5jaWxUb29sIiwic2NyZWVuVG9Xb3JsZCIsInVuZGVmaW5lZCIsImRyYXdQYXRoIiwiY3AiLCJkaXN0YW5jZSIsImJ1dHRvbiIsIm9mZnNldFgiLCJvZmZzZXRZIiwiUG9pbnRlclRvb2wiLCJpbnRlcnNlY3RzUmVjdGFuZ2xlIiwic2VsZWN0IiwibW9kZSIsImRvd25YIiwiZG93blkiLCJoaXQiLCJkcmFnT2ZmIiwiZGVsdGFYIiwibGFzdFgiLCJkZWx0YVkiLCJsYXN0WSIsIm1vdmVTZWxlY3Rpb25CeSIsImJ1dHRvbnMiLCJhYnMiLCJkcmFnT24iLCJUb29sIiwiU3RhZ2UiLCJjb250ZXh0IiwidmlzaWJsZSIsInRyYW5zZm9ybSIsImFkZGVkVG9TdGFnZSIsImRlc2VsZWN0IiwibGluZVdpZHRoIiwicmVuZGVyU2hhcGUiLCJjbGVhclJlY3QiLCJyZW5kZXJPYmplY3QiLCJnbG9iYWxBbHBoYSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsIml0ZW0iLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwiaW5jbHVkZXMiLCJjYW5jZWxEcmFnIiwic2VsZWN0TWFycXVlZSIsImNhbmNlbE1hcnF1ZWUiLCJiZWdpbkRyYWciLCJiZWdpbk1hcnF1ZWUiLCJlZGl0IiwiU3ZnIiwiYXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJzdmciLCJ0ZXN0eCIsInRlc3R5IiwiYyIsIm0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztB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QUFuRSxFQUF5RTtBQUN2RTtBQUNBLE1BQUttQyxNQUFNdEMsSUFBTixJQUFjd0MsTUFBTXhDLElBQXJCLElBQStCdUMsTUFBTXRDLElBQU4sSUFBY3dDLE1BQU14QyxJQUFuRCxJQUNDcUMsTUFBTXBDLElBQU4sSUFBY3NDLE1BQU10QyxJQURyQixJQUMrQnFDLE1BQU1wQyxJQUFOLElBQWNzQyxNQUFNdEMsSUFEdkQsRUFFRSxPQUFPLEtBQVA7O0FBRUYsTUFBSTBLLElBQUksQ0FBQ3BJLEtBQUtGLEVBQU4sS0FBYUMsS0FBS0YsRUFBbEIsQ0FBUjs7QUFFQSxNQUFJekUsSUFBSWdOLEtBQUs3SyxPQUFPc0MsRUFBWixJQUFrQkMsRUFBMUI7QUFDQSxNQUFJMUUsSUFBSW9DLElBQUosSUFBWXBDLElBQUlzQyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCdEMsTUFBSWdOLEtBQUszSyxPQUFPb0MsRUFBWixJQUFrQkMsRUFBdEI7QUFDQSxNQUFJMUUsSUFBSW9DLElBQUosSUFBWXBDLElBQUlzQyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCLE1BQUl2QyxJQUFJLENBQUNxQyxPQUFPc0MsRUFBUixJQUFjc0ksQ0FBZCxHQUFrQnZJLEVBQTFCO0FBQ0EsTUFBSTFFLElBQUlvQyxJQUFKLElBQVlwQyxJQUFJc0MsSUFBcEIsRUFBMEIsT0FBTyxJQUFQOztBQUUxQnRDLE1BQUksQ0FBQ3VDLE9BQU9vQyxFQUFSLElBQWNzSSxDQUFkLEdBQWtCdkksRUFBdEI7QUFDQSxNQUFJMUUsSUFBSW9DLElBQUosSUFBWXBDLElBQUlzQyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCLFNBQU8sS0FBUDtBQUNEOztrQkFFYztBQUNiYSwyQkFBeUJBLHVCQURaO0FBRWJDLGtCQUFnQkE7QUFGSCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJztcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyL3BhcGVyJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2Rpc3BsYXkvdGV4dCc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuc3RhcnR1cCgpO1xuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzKTtcbiAgfVxuXG4gIHN0YXJ0dXAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0dXAnKTtcblxuICAgIC8vIGxldCBncm91cCA9IG5ldyBHcm91cCgpO1xuICAgIC8vXG4gICAgLy8gbGV0IHNoYXBlID0gbmV3IFNoYXBlKHtcbiAgICAvLyAgIHBvaW50czogWyB7IHg6IDAsIHk6IDAgfSwgeyB4OiA2MCwgeTogMCB9LCB7IHg6IDQwLCB5OiA0MCB9LCB7IHg6IDIwLCB5OiAxMCB9IF0sXG4gICAgLy8gICBmaWxsOiAnI2NjY2NjYycsXG4gICAgLy8gICBzdHJva2U6ICdibGFjaycsXG4gICAgLy8gICBjbG9zZWQ6IHRydWVcbiAgICAvLyB9KTtcbiAgICAvLyBzaGFwZS54ID0gLTYwO1xuICAgIC8vIHNoYXBlLnkgPSA4MDtcbiAgICAvLyBncm91cC5hZGQoc2hhcGUpO1xuICAgIC8vXG4gICAgLy8gc2hhcGUgPSBuZXcgU2hhcGUoe1xuICAgIC8vICAgcG9pbnRzOiBbIHsgeDogMCwgeTogMCB9LCB7IHg6IDYwLCB5OiAyMCB9LCB7IHg6IDEwMCwgeTogMjAgfSwgeyB4OiAxMDAsIHk6IDcwIH0gXSxcbiAgICAvLyAgIGZpbGw6ICcjY2NjY2NjJyxcbiAgICAvLyAgIHN0cm9rZTogbnVsbCxcbiAgICAvLyAgIGNsb3NlZDogdHJ1ZVxuICAgIC8vIH0pO1xuICAgIC8vIHNoYXBlLnggPSAxNTA7XG4gICAgLy8gc2hhcGUueSA9IDEwMDtcbiAgICAvLyBncm91cC5hZGQoc2hhcGUpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5zdGFnZS5hZGQoZ3JvdXApO1xuICAgIC8vXG4gICAgLy8gZ3JvdXAueCA9IDc1O1xuICAgIC8vIGdyb3VwLnkgPSA1MDtcblxuICAgIHRoaXMuZG9tLmFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcblxuICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoKTtcbiAgICB0aGlzLnNldEVkaXRvcih0aGlzLnBhcGVyKTtcblxuICAgIGdsb2JhbC5wYXBlciA9IHRoaXMucGFwZXI7XG5cbiAgICAvLyB0aGlzLnBhcGVyLnNob3coKTtcbiAgICAvLyB0aGlzLmVkaXRvciA9IHRoaXMucGFwZXI7XG4gIH1cblxuICBncmFiUGFwZXJTaGFwZXMoKSB7XG4gICAgbGV0IHN0YWdlRWwgPSB0aGlzLnN0YWdlLmRvbSgpO1xuICAgIGxldCBzaGFwZXMgPSB0aGlzLnBhcGVyLmdldFNoYXBlcygpO1xuXG4gICAgaWYgKHNoYXBlcy5sZW5ndGgpIHtcbiAgICAgIGxldCBncm91cCA9IG5ldyBHcm91cCgpO1xuICAgICAgbGV0IHggPSAwO1xuICAgICAgbGV0IHkgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgICBsZXQgYm91bmRzID0gc2hhcGUuZ2V0Qm91bmRzKCk7XG4gICAgICAgIHggKz0gYm91bmRzLnggKyBib3VuZHMud2lkdGggLyAyO1xuICAgICAgICB5ICs9IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAvIDI7XG4gICAgICB9XG4gICAgICB4IC89IHNoYXBlcy5sZW5ndGg7XG4gICAgICB5IC89IHNoYXBlcy5sZW5ndGg7XG5cbiAgICAgIGdyb3VwLnggPSB4O1xuICAgICAgZ3JvdXAueSA9IHk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgICAgICAgc2hhcGUueCArPSBncm91cC54O1xuICAgICAgICBzaGFwZS55ICs9IGdyb3VwLnk7XG4gICAgICB9XG5cbiAgICAgIGdyb3VwLmFkZChzaGFwZXMpO1xuICAgICAgdGhpcy5zdGFnZS5hZGQoZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHNldEVkaXRvcihlZGl0b3IpIHtcbiAgICBpZiAoZWRpdG9yICE9PSB0aGlzLmVkaXRvcikge1xuICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yLmhpZGUoKTtcbiAgICAgICAgdGhpcy5kb20uYXBwLnJlbW92ZUNoaWxkKHRoaXMuZG9tLmFwcC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMuZWRpdG9yLmRvbSgpKTtcbiAgICAgIHRoaXMuZWRpdG9yLnNob3coKTtcbiAgICB9XG4gIH1cblxuICAvLyBoaWRlQXJlYSgpIHtcbiAgLy8gICBpZiAodGhpcy5hcmVhID09ICdwYXBlcicpIHtcbiAgLy8gICAgIHRoaXMuaGlkZVBhcGVyKCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHNob3dBcmVhKGFyZWEpIHtcbiAgLy8gICBpZiAoYXJlYSAhPT0gdGhpcy5hcmVhKSB7XG4gIC8vICAgICB0aGlzLmhpZGVBcmVhKCk7XG4gIC8vICAgICBpZiAoYXJlYSA9PSAncGFwZXInKSB7XG4gIC8vICAgICAgIHRoaXMuc2hvd1BhcGVyKCk7XG4gIC8vICAgICB9XG4gIC8vICAgICBlbHNlIGlmIChhcmVhID09ICdzdGFnZScpIHtcbiAgLy9cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gc2hvd1BhcGVyKCkge1xuICAvLyAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLnBhcGVyLmRvbSgpKTtcbiAgLy8gICB0aGlzLmFyZWEgPSAncGFwZXInO1xuICAvLyB9XG4gIC8vXG4gIC8vIGhpZGVQYXBlcigpIHtcbiAgLy8gICB0aGlzLmRvbS5hcHAucmVtb3ZlQ2hpbGQodGhpcy5kb20uYXBwLmZpcnN0Q2hpbGQpO1xuICAvLyAgIHRoaXMuYXJlYSA9IG51bGw7XG4gIC8vIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICAvLyBpZiAoZXZlbnQua2V5ID09ICdwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnNob3dBcmVhKCdwYXBlcicpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvL1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2UnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIHRoaXMuc3RhZ2UuZWRpdCgpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIGlmICh0aGlzLm1vZGUgPT0gJ3BhcGVyJykge1xuICAgIC8vICAgICB0aGlzLnBhcGVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICB9XG5cbiAgb25Db250ZXh0TWVudShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJyk7XG4gIGxldCBhcHAgPSBuZXcgQXBwKCk7XG4gIGFwcC5pbml0KCk7XG59KTtcbiIsIlxuY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICB9XG5cbiAgYWRkKGdyb3VwKSB7XG4gICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWU7XG4iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vc2hhcGUnO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYWRkKGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gY29udGVudFtpXTtcbiAgICAgICAgaWYgKHNoYXBlIGluc3RhbmNlb2YgU2hhcGUpIHRoaXMuYWRkKHNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKHNoYXBlLmhpdFRlc3QoeCAtIHRoaXMueCwgeSAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBib3VuZHMgPSBjaGlsZC5nZXRCb3VuZHMoKTtcbiAgICAgIHJlY3RzLnB1c2goYm91bmRzKTtcbiAgICB9XG5cbiAgICBpZiAocmVjdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IDA7IC8vTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSAwOyAvL051bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gMDsgLy9OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IDA7IC8vTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWN0ID0gcmVjdHNbaV07XG4gICAgICAgIHhtaW4gPSByZWN0LnggPCB4bWluID8gcmVjdC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHJlY3QueSA8IHltaW4gPyByZWN0LnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcmVjdC54ICsgcmVjdC53aWR0aCA+IHhtYXggPyByZWN0LnggKyByZWN0LndpZHRoIDogeG1heDtcbiAgICAgICAgeW1heCA9IHJlY3QueSArIHJlY3QuaGVpZ2h0ID4geW1heCA/IHJlY3QueSArIHJlY3QuaGVpZ2h0IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4gKyB0aGlzLngsIHltaW4gKyB0aGlzLnksIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJcbmNsYXNzIFNlcXVlbmNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGFwZXMgPSBbXTtcbiAgfVxuXG4gIGFkZChzaGFwZSkge1xuICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcXVlbmNlO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUG9pbnRMaXN0IGZyb20gJy4uL2dlb20vcG9pbnRfbGlzdCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBTaGFwZSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZpbGwgPSBwYXJhbXMuZmlsbCB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gcGFyYW1zLnN0cm9rZSB8fCBudWxsO1xuICAgIHRoaXMuY2xvc2VkID0gcGFyYW1zLmNsb3NlZCB8fCBmYWxzZTtcbiAgICAvLyB0aGlzLnN0cm9rZVdpZHRoID0gcGFyYW1zLnN0cm9rZVdpZHRoIHx8IDE7XG5cbiAgICB0aGlzLnBvaW50TGlzdCA9IHBhcmFtcy5wb2ludExpc3QuY29weSgpO1xuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFNoYXBlKHsgcG9pbnRMaXN0OiB0aGlzLnBvaW50TGlzdCwgc3Ryb2tlOiB0aGlzLnN0cm9rZSwgZmlsbDogdGhpcy5maWxsLCBjbG9zZWQ6IHRoaXMuY2xvc2VkIH0pO1xuICB9XG5cbiAgZ2V0UG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgbGV0IGJvdW5kcyA9IHRoaXMucG9pbnRMaXN0LmdldEJvdW5kcygpO1xuICAgIGJvdW5kcy54ICs9IHRoaXMueDtcbiAgICBib3VuZHMueSArPSB0aGlzLnk7XG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIGlmICh4bWluID4geG1heCkgW3htaW4sIHhtYXhdID0gWyB4bWF4LCB4bWluIF07XG4gICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgICBsZXQgcG9pbnRzID0gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcDAgPSBwb2ludHNbaSAtIDFdO1xuICAgICAgbGV0IHAxID0gcG9pbnRzW2ldO1xuICAgICAgaWYgKFV0aWwubGluZUludGVyc2VjdHNSZWN0YW5nbGUocDAueCwgcDAueSwgcDEueCwgcDEueSwgeG1pbiAtIHRoaXMueCwgeW1pbiAtIHRoaXMueSwgeG1heCAtIHRoaXMueCwgeW1heCAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gICAgaWYgKHRoaXMuZmlsbCkge1xuICAgICAgcmV0dXJuIFV0aWwucG9pbnRJblBvbHlnb24ocG9pbnRzLCB4IC0gdGhpcy54LCB5IC0gdGhpcy55KTtcbiAgICB9XG4gICAgZWxzZSB7XG5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLmNvbnRlbnQpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgeyBFdmVudCwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZXZlbnRzJztcblxuY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzLl94ID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0KCd2YWx1ZWNoYW5nZScpO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLl95ID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0KCd2YWx1ZWNoYW5nZScpO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZG9tKCkge1xuICB9XG5cbiAgc2hvdygpIHtcblxuICB9XG5cbiAgaGlkZSgpIHtcblxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcbiIsIlxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJhbXMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbiAgZW1pdCh0eXBlLCAuLi5hcmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICBpZiAobGlzdGVuZXIudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyB0eXBlOiB0eXBlLCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEV2ZW50RGlzcGF0Y2hlciwgRXZlbnQgfTtcbiIsIlxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICB9XG5cbiAgaW50ZXJzZWN0c0xpbmVTZWdtZW50KHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgfVxuXG4gIGNvbnRhaW5zUG9pbnQoeCwgeSkge1xuICAgIGxldCBkeCA9IHggLSB0aGlzLng7XG4gICAgbGV0IGR5ID0geSAtIHRoaXMueTtcbiAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgcmV0dXJuIGQgPCB0aGlzLnI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiXG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkaXN0YW5jZShwb2ludCkge1xuICAgIGxldCBkeCA9IHRoaXMueCAtIHBvaW50Lng7XG4gICAgbGV0IGR5ID0gdGhpcy55IC0gcG9pbnQueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9yZWN0YW5nbGUnO1xuXG5jbGFzcyBQb2ludExpc3Qge1xuICBjb25zdHJ1Y3Rvcihwb2ludHMpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIGlmIChwb2ludHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludChwLngsIHAueSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvcHkoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludExpc3QodGhpcy5wb2ludHMpO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgIHhtaW4gPSBwLnggPCB4bWluID8gcC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcC54ID4geG1heCA/IHAueCA6IHhtYXg7XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRMaXN0O1xuIiwiXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdyb3coYW1vdW50KSB7XG4gICAgdGhpcy54IC09IGFtb3VudDtcbiAgICB0aGlzLnkgLT0gYW1vdW50O1xuICAgIHRoaXMud2lkdGggKz0gYW1vdW50ICogMjtcbiAgICB0aGlzLmhlaWdodCArPSBhbW91bnQgKiAyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi9nZW9tL2NpcmNsZSc7XG5cbmltcG9ydCBTaGFwZSBmcm9tICcuLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBGcmFtZSBmcm9tICcuLi9kaXNwbGF5L2ZyYW1lJztcbmltcG9ydCBTZXF1ZW5jZSBmcm9tICcuLi9kaXNwbGF5L3NlcXVlbmNlJztcblxuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IFBvaW50ZXJUb29sIGZyb20gJy4vdG9vbHMvcG9pbnRlcl90b29sJztcbmltcG9ydCBQZW5jaWxUb29sIGZyb20gJy4vdG9vbHMvcGVuY2lsX3Rvb2wnO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IG51bGw7XG5cbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuc2VxdWVuY2UgPSBbXTtcblxuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3BhcGVyJyk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGhpcy5jdXJzb3JYID0gMDtcbiAgICB0aGlzLmN1cnNvclkgPSAwO1xuXG4gICAgdGhpcy5hZGRGcmFtZSgpO1xuXG4gICAgdGhpcy5zZXRUb29sKCdwZW5jaWwnKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGRyYXdTaGFwZShzaGFwZSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgbGV0IHNwID0gdGhpcy53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgbGV0IHggPSAocC54ICsgc3AueCk7XG4gICAgICBsZXQgeSA9IChwLnkgKyBzcC55KTtcblxuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJBeGlzKHgsIHkpIHtcbiAgICBsZXQgc2l6ZSA9IDIwO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIGN0eC5tb3ZlVG8oeCAtIHNpemUsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHNpemUsIHkpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHNpemUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHMoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgIC8vIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgICAgbGV0IHAgPSB0aGlzLndvcmxkVG9TY3JlZW4oc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhwLng+PjAsIHAueT4+MCwgMywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5yZW5kZXJBeGlzKCh0aGlzLmNhbnZhcy53aWR0aCAvIDIpID4+IDAsICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSA+PiAwKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgdGhpcy5kcmF3U2hhcGUoc2hhcGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVySGludHMoKTtcblxuICAgIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICB0aGlzLnRvb2wucmVuZGVyKGN0eCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAvLyAgIHRoaXMuZHJhd1BhdGgoeyBwb2ludHM6IHRoaXMucG9pbnRzLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG4gICAgLy9cbiAgICAvLyAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAvLyAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgLy8gICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAvLyAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIC8vICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vXG4gICAgLy8gICBsZXQgY3AgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIC8vICAgbGV0IHAwID0gdGhpcy5wb2ludHNbMF07XG4gICAgLy8gICBpZiAoY3AuZGlzdGFuY2UocDApIDwgU05BUF9SQURJVVMpIHtcbiAgICAvLyAgICAgY3R4LmFyYyhwMC54LCBwMC55LCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgLy8gICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgfVxuXG4gIGFkZEZyYW1lKCkge1xuICAgIGxldCBmcmFtZSA9IG5ldyBGcmFtZSgpO1xuICAgIHRoaXMuc2VxdWVuY2UuYWRkKGZyYW1lKTtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gIH1cblxuICBzY3JlZW5Ub1dvcmxkKHgsIHkpIHtcbiAgICBsZXQgdHggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgbGV0IHR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICByZXR1cm4gbmV3IFBvaW50KHggLSB0eCwgeSAtIHR5KTtcbiAgfVxuXG4gIHdvcmxkVG9TY3JlZW4oeCwgeSkge1xuICAgIGxldCB0eCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICBsZXQgdHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCArIHR4LCB5ICsgdHkpO1xuICB9XG5cbiAgZ2V0U2hhcGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNoYXBlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIC8vIHRoaXMucG9pbnRzID0gW107XG4gICAgLy8gdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAvLyB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLy8gc2V0RmlsbChmaWxsKSB7XG4gIC8vICAgdGhpcy5maWxsID0gZmlsbDtcbiAgLy8gICB0aGlzLnJlbmRlcigpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHNldFN0cm9rZShzdHJva2UpIHtcbiAgLy8gICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgLy8gICB0aGlzLnJlbmRlcigpO1xuICAvLyB9XG5cbiAgc2V0Q3Vyc29yKGN1cnNvcikge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZXRDdXJvcicsIGN1cnNvcik7XG4gICAgaWYgKHRoaXMuZWwuY29udGFpbnModGhpcy5jdXJzb3IpKSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcbiAgICB9XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3I7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBzZXRUb29sKHRvb2xOYW1lKSB7XG4gICAgaWYgKHRvb2xOYW1lICE9PSB0aGlzLnRvb2xOYW1lKSB7XG4gICAgICBpZiAodG9vbE5hbWUgPT0gJ3BvaW50ZXInKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQb2ludGVyVG9vbCgpO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy50b29sLm9uKCdzZWxlY3QnLCAoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocG9pbnQpO1xuICAgICAgICAgIC8vIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAgICAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyB0aGlzLnRvb2wub24oJ21hcnF1ZWUnLCAocmVjdCkgPT4ge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlY3QpO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRvb2xOYW1lID09ICdwZW5jaWwnKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQZW5jaWxUb29sKCk7XG4gICAgICAgIHRoaXMudG9vbC5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3NoYXBlJywgKHNoYXBlKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc2hhcGUpO1xuICAgICAgICAgIHRoaXMuc2hhcGVzLnB1c2goc2hhcGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvb2xOYW1lID0gdG9vbE5hbWU7XG4gICAgICB0aGlzLnNldEN1cnNvcih0aGlzLnRvb2wuY3Vyc29yKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgZ29GcmFtZShmcmFtZU5vKSB7XG4gICAgaWYgKGZyYW1lTm8gPj0gMCAmJiBmcmFtZU5vIDwgdGhpcy5zZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZnJhbWVObyA9IGZyYW1lTm87XG4gICAgICAvLyB0aGlzLlxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdChzaGFwZSkge1xuICAgIC8vIHRoaXMuc2VsZWN0aW9uID0gWyBzaGFwZSBdO1xuICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdCcsIHNoYXBlKTtcbiAgfVxuXG4gIC8vIHNlbGVjdE1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAvLyAgIGlmICh4bWluID4geG1heCkgW3htaW4sIHhtYXhdID0gWyB4bWF4LCB4bWluIF07XG4gIC8vICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgLy8gICBsZXQgc2VsZWN0aW9uID0gW107XG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAvLyAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgLy8gICAgICAgaWYgKGNoaWxkLmludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkpIHtcbiAgLy8gICAgICAgICBzZWxlY3Rpb24ucHVzaChjaGlsZCk7XG4gIC8vICAgICAgICAgY2hpbGQuc2VsZWN0KCk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gIC8vIH1cblxuICAvLyBoaXRUZXN0KHgsIHkpIHtcbiAgLy8gICBmb3IgKHZhciBpID0gdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgLy8gICAgIGxldCBjaGlsZCA9IHRoaXMuc2hhcGVzW2ldO1xuICAvLyAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgLy8gICAgICAgcmV0dXJuIGNoaWxkO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gbnVsbDtcbiAgLy8gfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gdGhpcy5kb3duWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgLy8gdGhpcy5kb3duWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgLy9cbiAgICAvLyBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAvLyBpZiAoaGl0KSB7XG4gICAgLy8gICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuICAgIC8vXG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgLy8gICAgIHRoaXMuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAvLyAgICAgaGl0LnNlbGVjdCgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvclggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yWSArICdweCc7XG4gICAgLy8gaWYgKGV2ZW50LmJ1dHRvbnMgJiAxKVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJzb3JYKTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ3EnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuc2V0VG9vbCgncG9pbnRlcicpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2InICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuc2V0VG9vbCgncGVuY2lsJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnLicgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5nb0ZyYW1lKHRoaXMuZnJhbWVObyArIDEpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJywnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuZ29GcmFtZSh0aGlzLmZyYW1lTm8gLSAxKTtcbiAgICB9XG4gICAgLy8gaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgdGhpcy5zZXRTdHJva2UodGhpcy5zdHJva2UgPyBudWxsIDogJ2JsYWNrJylcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnNldEZpbGwobnVsbCk7XG4gICAgLy8gfVxuICAgIC8vIGVsc2UgaWYgKFsnMScsICcyJywgJzMnLCAnNCddLmluY2x1ZGVzKGV2ZW50LmtleSkgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgbGV0IGNvbG9yID0gQ09MT1JTW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXTtcbiAgICAvLyAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKVxuICAgIC8vICAgICB0aGlzLnNldEZpbGwoY29sb3IpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYXcnKSB7XG4gICAgLy8gICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgICAgIHRoaXMuY2FuY2VsUGF0aCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNlIHtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICB0aGlzLnRvb2wuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9nZW9tL3BvaW50JztcbmltcG9ydCBQb2ludExpc3QgZnJvbSAnLi4vLi4vZ2VvbS9wb2ludF9saXN0JztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBUb29sIGZyb20gJy4vdG9vbCc7XG5cbmNsYXNzIFBlbmNpbFRvb2wgZXh0ZW5kcyBUb29sIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc3Ryb2tlID0gJ2dyYXknO1xuICAgIHRoaXMuZmlsbCA9ICdsaWdodGdyYXknO1xuXG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwZW5jaWwtY3Vyc29yJyk7XG4gIH1cblxuICBjbG9zZVBhdGgoY2xvc2VkPWZhbHNlKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBwb2ludExpc3QgPSBuZXcgUG9pbnRMaXN0KHRoaXMucG9pbnRzKTtcbiAgICAgIGxldCBib3VuZHMgPSBwb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gICAgICBsZXQgeCA9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICAgIGxldCB5ID0gYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IC8gMjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRMaXN0LnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50TGlzdC5wb2ludHNbaV07XG4gICAgICAgIHAueCAtPSB4O1xuICAgICAgICBwLnkgLT0geTtcbiAgICAgIH1cbiAgICAgIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7IHBvaW50TGlzdDogcG9pbnRMaXN0LCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UsIGNsb3NlZDogY2xvc2VkIH0pO1xuICAgICAgbGV0IHAgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHgsIHkpO1xuICAgICAgc2hhcGUueCA9IHAueDtcbiAgICAgIHNoYXBlLnkgPSBwLnk7XG4gICAgICB0aGlzLmVtaXQoJ3NoYXBlJywgc2hhcGUpO1xuICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBkcmF3UGF0aChjdHgsIHBvaW50cywgc3Ryb2tlLCBmaWxsLCBjbG9zZWQ9ZmFsc2UpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2UgIT09IHVuZGVmaW5lZCA/IChzdHJva2UgPyBzdHJva2UgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGwgIT09IHVuZGVmaW5lZCA/IChmaWxsID8gZmlsbCA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcblxuICAgIGlmIChzdHJva2UgPT0gbnVsbCkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2N5YW4nO1xuICAgIH1cblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZHJhd1BhdGgoY3R4LCB0aGlzLnBvaW50cywgdGhpcy5zdHJva2UsIHRoaXMuZmlsbCk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBsZXQgY3AgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgbGV0IHAwID0gdGhpcy5wb2ludHNbMF07XG5cbiAgICAgIGlmIChjcC5kaXN0YW5jZShwMCkgPCA1KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhwMC54LCBwMC55LCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgbGV0IHAgPSBuZXcgUG9pbnQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChwLmRpc3RhbmNlKHRoaXMucG9pbnRzWzBdKSA8IDUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7fVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge31cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVuY2lsVG9vbDtcbiIsImltcG9ydCBUb29sIGZyb20gJy4vdG9vbCc7XG5cbmNsYXNzIFBvaW50ZXJUb29sIGV4dGVuZHMgVG9vbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwb2ludGVyLWN1cnNvcicpO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgbGV0IHNwID0gcGFwZXIuc2NyZWVuVG9Xb3JsZCh4LCB5KTtcbiAgICBmb3IgKHZhciBpID0gcGFwZXIuc2hhcGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5zaGFwZXNbaV07XG4gICAgICBpZiAoc2hhcGUuaGl0VGVzdChzcC54LCBzcC55KSkge1xuICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2VsZWN0TWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICBpZiAoeW1pbiA+IHltYXgpIFt5bWluLCB5bWF4XSA9IFsgeW1heCwgeW1pbiBdO1xuICAgIGxldCBzZWxlY3Rpb24gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgICBpZiAoY2hpbGQuaW50ZXJzZWN0c1JlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSkge1xuICAgICAgICAgIHNlbGVjdGlvbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICBjaGlsZC5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwYXBlci5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gIH1cblxuICBtb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXBlci5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHBhcGVyLnNlbGVjdGlvbltpXTtcbiAgICAgIHNoYXBlLnggKz0gZHg7XG4gICAgICBzaGFwZS55ICs9IGR5O1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgZHJhZ09uKCkge1xuICAgIHRoaXMubW9kZSA9ICdkcmFnJztcbiAgfVxuXG4gIGRyYWdPZmYoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVk7XG4gICAgdGhpcy5kb3duWCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmRvd25ZID0gdGhpcy5jdXJzb3JZO1xuXG4gICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgcGFwZXIuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcGVyLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgdGhpcy5kcmFnT2ZmKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWTtcblxuICAgIHRoaXMuZGVsdGFYID0gdGhpcy5sYXN0WCA/IHRoaXMuY3Vyc29yWCAtIHRoaXMubGFzdFggOiAwO1xuICAgIHRoaXMuZGVsdGFZID0gdGhpcy5sYXN0WSA/IHRoaXMuY3Vyc29yWSAtIHRoaXMubGFzdFkgOiAwO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpIHtcbiAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KHRoaXMuZGVsdGFYLCB0aGlzLmRlbHRhWSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbnMgJiAxKSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMuY3Vyc29yWCAtIHRoaXMuZG93blg7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuY3Vyc29yWSAtIHRoaXMuZG93blk7XG4gICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiAyIHx8IE1hdGguYWJzKGR5KSA+IDIpIHtcbiAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgICAgICAgIHRoaXMuZHJhZ09uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxhc3RYID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMubGFzdFkgPSB0aGlzLmN1cnNvclk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG5cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyVG9vbDtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2V2ZW50cy5qcyc7XG5cbmNsYXNzIFRvb2wgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIFxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2w7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9kaXNwbGF5L2dyb3VwJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyL3BhcGVyJztcblxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuXG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcih7IHZpc2libGU6IGZhbHNlIH0pO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2UnKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIC8vIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnc3RhZ2UtY3Vyc29yJyk7XG5cbiAgICAvLyB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFwZXIuZG9tKCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkKHRyYW5zZm9ybSkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0cmFuc2Zvcm0pO1xuICAgIHRyYW5zZm9ybS5hZGRlZFRvU3RhZ2UoKTtcbiAgICB0cmFuc2Zvcm0ub24oJ3ZhbHVlY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZWRpdCcpO1xuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3Rpb24nKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5zZWxlY3Rpb25bMF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGdyb3VwLnggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSA+PiAwO1xuICAgICAgICBncm91cC55ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpID4+IDA7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGdyb3VwO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2VsZWN0TWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICBpZiAoeW1pbiA+IHltYXgpIFt5bWluLCB5bWF4XSA9IFsgeW1heCwgeW1pbiBdO1xuICAgIGxldCBzZWxlY3Rpb24gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgICBpZiAoY2hpbGQuaW50ZXJzZWN0c1JlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSkge1xuICAgICAgICAgIHNlbGVjdGlvbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICBjaGlsZC5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25baV0uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXJTaGFwZShzaGFwZSwgeCwgeSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHModHJhbnNmb3JtKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmFuc2Zvcm0uc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnksIDMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGxldCBib3VuZHMgPSB0cmFuc2Zvcm0uZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcykge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJhbnNmb3JtLnNlbGVjdGVkID8gJ3JlZCcgOiAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgucmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJPYmplY3QodHJhbnNmb3JtKSB7XG4gICAgaWYgKHRyYW5zZm9ybSBpbnN0YW5jZW9mIEdyb3VwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYW5zZm9ybS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSB0cmFuc2Zvcm0uY2hpbGRyZW5baV07XG4gICAgICAgIHRoaXMucmVuZGVyU2hhcGUoY2hpbGQsIHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0cmFuc2Zvcm0uc2VsZWN0ZWQpIHRoaXMucmVuZGVySGludHModHJhbnNmb3JtKTtcbiAgfVxuXG4gIHJlbmRlckF4aXMoeCwgeSkge1xuICAgIGxldCBzaXplID0gMTA7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG4gICAgY3R4Lm1vdmVUbyh4IC0gc2l6ZSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgc2l6ZSwgeSk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5IC0gc2l6ZSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgc2l6ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIHRoaXMucmVuZGVyT2JqZWN0KGNoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuNTtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICB0aGlzLnJlbmRlckF4aXModGhpcy5jb250ZXh0LngsIHRoaXMuY29udGV4dC55KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdleGNsdXNpb24nO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLmRvd25YLCB0aGlzLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmRvd25YLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgaXRlbS54ICs9IGR4O1xuICAgICAgaXRlbS55ICs9IGR5O1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYmVnaW5EcmFnKCkge1xuICAgIHRoaXMubW9kZSA9ICdkcmFnJztcbiAgfVxuXG4gIGNhbmNlbERyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgfVxuXG4gIGJlZ2luTWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgdGhpcy5tb2RlID0gJ21hcnF1ZWUnO1xuICB9XG5cbiAgY2FuY2VsTWFycXVlZSgpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5oaXRUZXN0KHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzaG93UGFwZXIoKSB7XG5cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2Rvd24nKTtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgdGhpcy5kb3duWCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmRvd25ZID0gdGhpcy5jdXJzb3JZO1xuXG4gICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKGhpdCkpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFsgaGl0IF07XG4gICAgICAgIGhpdC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKVxuICAgICAgdGhpcy5jYW5jZWxEcmFnKCk7XG4gICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgdGhpcy5zZWxlY3RNYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIHRoaXMuY2FuY2VsTWFycXVlZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIHRoaXMuZGVsdGFYID0gdGhpcy5sYXN0WCA/IHRoaXMuY3Vyc29yWCAtIHRoaXMubGFzdFggOiAwO1xuICAgIHRoaXMuZGVsdGFZID0gdGhpcy5sYXN0WSA/IHRoaXMuY3Vyc29yWSAtIHRoaXMubGFzdFkgOiAwO1xuXG4gICAgaWYgKGV2ZW50LmJ1dHRvbnMgJiAxKSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkodGhpcy5kZWx0YVgsIHRoaXMuZGVsdGFZKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMuY3Vyc29yWCAtIHRoaXMuZG93blg7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuY3Vyc29yWSAtIHRoaXMuZG93blk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID49IDIgfHwgTWF0aC5hYnMoZHkpID49IDIpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5EcmFnKCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJlZ2luTWFycXVlZSh0aGlzLmRvd25YLCB0aGlzLmRvd25ZLCB0aGlzLmRvd25YICsgZHgsIHRoaXMuZG93blkgKyBkeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIC8vIGlmIChoaXQpIHtcbiAgICAgIC8vICAgdGhpcy50YXJnZXQgPSBoaXQ7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgIC8vICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICB0aGlzLmxhc3RYID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMubGFzdFkgPSB0aGlzLmN1cnNvclk7XG5cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICAgIHRoaXMuZWRpdCgpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIiwiXG4vLyBDb3B5cmlnaHQgKGMpIDE5NzAtMjAwMywgV20uIFJhbmRvbHBoIEZyYW5rbGluXG4vLyBodHRwczovL3dyZi5lY3NlLnJwaS5lZHUvL1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sXG5cbmZ1bmN0aW9uIHBvaW50SW5Qb2x5Z29uKHBvaW50cywgdGVzdHgsIHRlc3R5KSB7XG4gIGxldCBpLCBqLCBjID0gMDtcbiAgZm9yIChsZXQgaSA9IDAsIGogPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICBpZiAoKChwb2ludHNbaV0ueSA+IHRlc3R5KSAhPSAocG9pbnRzW2pdLnkgPiB0ZXN0eSkpICYmXG4gICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICBjID0gIWM7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlKHgxLCB5MSwgeDIsIHkyLCB4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gIC8vIENvbXBsZXRlbHkgb3V0c2lkZS5cbiAgaWYgKCh4MSA8PSB4bWluICYmIHgyIDw9IHhtaW4pIHx8ICh5MSA8PSB5bWluICYmIHkyIDw9IHltaW4pIHx8XG4gICAgICAoeDEgPj0geG1heCAmJiB4MiA+PSB4bWF4KSB8fCAoeTEgPj0geW1heCAmJiB5MiA+PSB5bWF4KSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG0gPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG5cbiAgdmFyIHkgPSBtICogKHhtaW4gLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB5ID0gbSAqICh4bWF4IC0geDEpICsgeTE7XG4gIGlmICh5ID4geW1pbiAmJiB5IDwgeW1heCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHggPSAoeW1pbiAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB4ID0gKHltYXggLSB5MSkgLyBtICsgeDE7XG4gIGlmICh4ID4geG1pbiAmJiB4IDwgeG1heCkgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlOiBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSxcbiAgcG9pbnRJblBvbHlnb246IHBvaW50SW5Qb2x5Z29uXG59XG4iXSwic291cmNlUm9vdCI6IiJ9