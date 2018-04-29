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
    // this.strokeWidth = params.strokeWidth || 1;
    _this.closed = params.closed || false;

    // this.pointList = new PointList(params.points);
    _this.pointsList = params.pointList;

    // let center = this.pointList.center();
    // this.x = center.x;
    // this.y = center.y;
    //
    // for (var i = 0; i < this.pointsList.points.length; i++) {
    //   let p = this.pointsList.points[i];
    //   p.x -= this.x;
    //   p.y -= this.y;
    // }
    return _this;
  }

  _createClass(Shape, [{
    key: 'copy',
    value: function copy() {
      var pointList = this.pointList.copy();
      return new Shape({ pointList: pointList, stroke: this.stroke, fill: this.fill, closed: this.closed });
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

    this.points = points || [];
  }

  _createClass(PointList, [{
    key: 'copy',
    value: function copy() {
      var points = [];
      for (var i = 0; i < this.points.length; i++) {
        var p = this.points[i];
        points.push(new _point2.default(p.x, p.y));
      }
      return new PointList(points);
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

// let SNAP_RADIUS = 3;
// let COLORS = [
//   'white',
//   'lightgray',
//   'gray',
//   'black'
// ];

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

    _this.el = document.createElement('div');
    _this.el.classList.add('paper');

    _this.canvas = document.createElement('canvas');
    _this.canvas.width = window.innerWidth;
    _this.canvas.height = window.innerHeight;

    _this.el.appendChild(_this.canvas);

    _this.cursor = document.createElement('div');
    // this.cursor.classList.add('pointer-cursor');

    _this.cursorX = 0;
    _this.cursorY = 0;

    // this.cursor.classList.add('paper-cursor');
    // this.el.appendChild(this.cursor);

    // console.log('Paper');
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

      // let tx = this.canvas.width / 2;
      // let ty = this.canvas.height / 2;

      // ctx.translate(0.5, 0.5);

      ctx.strokeStyle = shape.stroke || 'transparent';
      ctx.fillStyle = shape.fill || 'transparent';

      ctx.beginPath();

      var sp = this.worldToScreen(shape.x, shape.y);

      for (var j = 0; j < points.length; j++) {
        var p = points[j];
        // let x = (p.x + sp.x) >> 0;
        // let y = (p.y + sp.y) >> 0;
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
      this.cursorX = event.offsetX;
      this.cursorY = event.offsetY;
      this.cursor.style.left = this.cursorX + 'px';
      this.cursor.style.top = this.cursorY + 'px';
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

      // ctx.restore();
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      if (this.points.length) {
        // ctx.translate(0.5, 0.5);

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

    // this.selection = [];
    // console.log('Paper tool:', paper.toolName);
    return _this;
  }

  _createClass(PointerTool, [{
    key: 'hitTest',
    value: function hitTest(x, y) {
      var sp = paper.screenToWorld(x, y);
      for (var i = paper.shapes.length - 1; i >= 0; i--) {
        var shape = paper.shapes[i];
        // let p = paper.worldToScreen(shape.x, shape.y);
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
      // console.log('moveby', dx, dy);
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
      // console.log('drag');
    }
  }, {
    key: 'dragOff',
    value: function dragOff() {
      this.mode = null;
      // console.log('dragoff');
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      // console.log('render', this.selection);

      // ctx.translate(0.5, 0.5);
      // ctx.strokeStyle = 'gray';
      // ctx.globalCompositeOperation = 'exclusion';
      // ctx.beginPath();
      // ctx.moveTo(this.downX, this.downY);
      // ctx.lineTo(this.cursorX, this.downY);
      // ctx.lineTo(this.cursorX, this.cursorY);
      // ctx.lineTo(this.downX, this.cursorY);
      // ctx.closePath();
      // ctx.stroke();

      // ctx.strokeStyle = 'red';
      //
      // for (var i = 0; i < paper.selection.length; i++) {
      //   let shape = paper.selection[i];
      //   ctx.beginPath();
      //   ctx.arc(shape.x >> 0, shape.y >> 0, 3, 0, Math.PI * 2);
      //   ctx.stroke();
      // }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      this.cursorX = event.offsetX;
      this.cursorY = event.offsetY;
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
      this.cursorX = event.offsetX;
      this.cursorY = event.offsetY;

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
      // this.emit('update');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvcGVuY2lsX3Rvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyL3Rvb2xzL3BvaW50ZXJfdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJzdGFydHVwIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXBlciIsInNldEVkaXRvciIsImdsb2JhbCIsInN0YWdlRWwiLCJzdGFnZSIsInNoYXBlcyIsImdldFNoYXBlcyIsImxlbmd0aCIsImdyb3VwIiwieCIsInkiLCJpIiwic2hhcGUiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJ3aWR0aCIsImhlaWdodCIsImFkZCIsImVkaXRvciIsImhpZGUiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInNob3ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIm9uQ29udGV4dE1lbnUiLCJoYW5kbGVFdmVudCIsIm9uS2V5RG93biIsIm9uTW91c2VEb3duIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJHcm91cCIsInBhcmFtcyIsImNoaWxkcmVuIiwiY29udGVudCIsIkFycmF5IiwicHVzaCIsImhpdFRlc3QiLCJyZWN0cyIsImNoaWxkIiwieG1pbiIsInltaW4iLCJ4bWF4IiwieW1heCIsInJlY3QiLCJTaGFwZSIsImZpbGwiLCJzdHJva2UiLCJjbG9zZWQiLCJwb2ludHNMaXN0IiwicG9pbnRMaXN0IiwiY29weSIsInBvaW50cyIsInAwIiwicDEiLCJsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSIsInBvaW50SW5Qb2x5Z29uIiwiVGV4dCIsInNldFNpemUiLCJzaXplIiwic2V0VGV4dCIsInZhbHVlIiwiVHJhbnNmb3JtIiwic2VsZWN0ZWQiLCJfeCIsImVtaXQiLCJfeSIsIkVkaXRvciIsIkV2ZW50IiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2lyY2xlIiwiciIsIngxIiwieTEiLCJ4MiIsInkyIiwiZHgiLCJkeSIsImQiLCJNYXRoIiwic3FydCIsIlBvaW50IiwicG9pbnQiLCJQb2ludExpc3QiLCJwIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJORUdBVElWRV9JTkZJTklUWSIsIlJlY3RhbmdsZSIsImFtb3VudCIsIlZlY3RvciIsInZlY3RvciIsImRvdCIsInJhdGlvIiwiUGFwZXIiLCJzZWxlY3Rpb24iLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjdXJzb3IiLCJjdXJzb3JYIiwiY3Vyc29yWSIsInNldFRvb2wiLCJnZXRQb2ludHMiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2F2ZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwic3AiLCJ3b3JsZFRvU2NyZWVuIiwiaiIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInJlc3RvcmUiLCJ0cmFuc2xhdGUiLCJhcmMiLCJQSSIsImZpbGxSZWN0IiwicmVuZGVyQXhpcyIsImRyYXdTaGFwZSIsInJlbmRlckhpbnRzIiwidG9vbCIsInJlbmRlciIsInR4IiwidHkiLCJjb250YWlucyIsInRvb2xOYW1lIiwib24iLCJzZXRDdXJzb3IiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInN0eWxlIiwibGVmdCIsInRvcCIsImtleSIsInJlcGVhdCIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwib25EYmxDbGljayIsIlBlbmNpbFRvb2wiLCJzY3JlZW5Ub1dvcmxkIiwidW5kZWZpbmVkIiwiZHJhd1BhdGgiLCJjcCIsImRpc3RhbmNlIiwiYnV0dG9uIiwiUG9pbnRlclRvb2wiLCJpbnRlcnNlY3RzUmVjdGFuZ2xlIiwic2VsZWN0IiwibW9kZSIsImRvd25YIiwiZG93blkiLCJoaXQiLCJkcmFnT2ZmIiwiZGVsdGFYIiwibGFzdFgiLCJkZWx0YVkiLCJsYXN0WSIsIm1vdmVTZWxlY3Rpb25CeSIsImJ1dHRvbnMiLCJhYnMiLCJkcmFnT24iLCJUb29sIiwiU3RhZ2UiLCJjb250ZXh0IiwidmlzaWJsZSIsInRyYW5zZm9ybSIsImFkZGVkVG9TdGFnZSIsImRlc2VsZWN0IiwibGluZVdpZHRoIiwicmVuZGVyU2hhcGUiLCJjbGVhclJlY3QiLCJyZW5kZXJPYmplY3QiLCJnbG9iYWxBbHBoYSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsIml0ZW0iLCJwYWdlWCIsIm9mZnNldExlZnQiLCJwYWdlWSIsIm9mZnNldFRvcCIsImluY2x1ZGVzIiwiY2FuY2VsRHJhZyIsInNlbGVjdE1hcnF1ZWUiLCJjYW5jZWxNYXJxdWVlIiwiYmVnaW5EcmFnIiwiYmVnaW5NYXJxdWVlIiwiZWRpdCIsIlN2ZyIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lIiwic2V0QXR0cmlidXRlIiwic3ZnIiwidGVzdHgiLCJ0ZXN0eSIsImMiLCJtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVNQSxHO0FBQ0osaUJBQWM7QUFBQTs7QUFDWixTQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS0MsT0FBTDtBQUNBLFdBQUtDLGtCQUFMO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkJDLGFB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QUFQOztBQUUxQixTQUFPLEtBQVA7QUFDRDs7a0JBRWM7QUFDYmEsMkJBQXlCQSx1QkFEWjtBQUViQyxrQkFBZ0JBO0FBRkgsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2ggKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuIiwiaW1wb3J0IHN2ZyBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlci9wYXBlcic7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2Rpc3BsYXkvZ3JvdXAnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9kaXNwbGF5L3RleHQnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN0YXJ0dXAoKTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcyk7XG4gIH1cblxuICBzdGFydHVwKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydHVwJyk7XG5cbiAgICAvLyBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICAvL1xuICAgIC8vIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7XG4gICAgLy8gICBwb2ludHM6IFsgeyB4OiAwLCB5OiAwIH0sIHsgeDogNjAsIHk6IDAgfSwgeyB4OiA0MCwgeTogNDAgfSwgeyB4OiAyMCwgeTogMTAgfSBdLFxuICAgIC8vICAgZmlsbDogJyNjY2NjY2MnLFxuICAgIC8vICAgc3Ryb2tlOiAnYmxhY2snLFxuICAgIC8vICAgY2xvc2VkOiB0cnVlXG4gICAgLy8gfSk7XG4gICAgLy8gc2hhcGUueCA9IC02MDtcbiAgICAvLyBzaGFwZS55ID0gODA7XG4gICAgLy8gZ3JvdXAuYWRkKHNoYXBlKTtcbiAgICAvL1xuICAgIC8vIHNoYXBlID0gbmV3IFNoYXBlKHtcbiAgICAvLyAgIHBvaW50czogWyB7IHg6IDAsIHk6IDAgfSwgeyB4OiA2MCwgeTogMjAgfSwgeyB4OiAxMDAsIHk6IDIwIH0sIHsgeDogMTAwLCB5OiA3MCB9IF0sXG4gICAgLy8gICBmaWxsOiAnI2NjY2NjYycsXG4gICAgLy8gICBzdHJva2U6IG51bGwsXG4gICAgLy8gICBjbG9zZWQ6IHRydWVcbiAgICAvLyB9KTtcbiAgICAvLyBzaGFwZS54ID0gMTUwO1xuICAgIC8vIHNoYXBlLnkgPSAxMDA7XG4gICAgLy8gZ3JvdXAuYWRkKHNoYXBlKTtcbiAgICAvL1xuICAgIC8vIHRoaXMuc3RhZ2UuYWRkKGdyb3VwKTtcbiAgICAvL1xuICAgIC8vIGdyb3VwLnggPSA3NTtcbiAgICAvLyBncm91cC55ID0gNTA7XG5cbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKCk7XG4gICAgdGhpcy5zZXRFZGl0b3IodGhpcy5wYXBlcik7XG5cbiAgICBnbG9iYWwucGFwZXIgPSB0aGlzLnBhcGVyO1xuXG4gICAgLy8gdGhpcy5wYXBlci5zaG93KCk7XG4gICAgLy8gdGhpcy5lZGl0b3IgPSB0aGlzLnBhcGVyO1xuICB9XG5cbiAgZ3JhYlBhcGVyU2hhcGVzKCkge1xuICAgIGxldCBzdGFnZUVsID0gdGhpcy5zdGFnZS5kb20oKTtcbiAgICBsZXQgc2hhcGVzID0gdGhpcy5wYXBlci5nZXRTaGFwZXMoKTtcblxuICAgIGlmIChzaGFwZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICAgIGxldCB4ID0gMDtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHNoYXBlc1tpXTtcbiAgICAgICAgbGV0IGJvdW5kcyA9IHNoYXBlLmdldEJvdW5kcygpO1xuICAgICAgICB4ICs9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICAgICAgeSArPSBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgeCAvPSBzaGFwZXMubGVuZ3RoO1xuICAgICAgeSAvPSBzaGFwZXMubGVuZ3RoO1xuXG4gICAgICBncm91cC54ID0geDtcbiAgICAgIGdyb3VwLnkgPSB5O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICAgIHNoYXBlLnggKz0gZ3JvdXAueDtcbiAgICAgICAgc2hhcGUueSArPSBncm91cC55O1xuICAgICAgfVxuXG4gICAgICBncm91cC5hZGQoc2hhcGVzKTtcbiAgICAgIHRoaXMuc3RhZ2UuYWRkKGdyb3VwKTtcbiAgICB9XG4gIH1cblxuICBzZXRFZGl0b3IoZWRpdG9yKSB7XG4gICAgaWYgKGVkaXRvciAhPT0gdGhpcy5lZGl0b3IpIHtcbiAgICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgICB0aGlzLmVkaXRvci5oaWRlKCk7XG4gICAgICAgIHRoaXMuZG9tLmFwcC5yZW1vdmVDaGlsZCh0aGlzLmRvbS5hcHAuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAgIHRoaXMuZG9tLmFwcC5hcHBlbmRDaGlsZCh0aGlzLmVkaXRvci5kb20oKSk7XG4gICAgICB0aGlzLmVkaXRvci5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaGlkZUFyZWEoKSB7XG4gIC8vICAgaWYgKHRoaXMuYXJlYSA9PSAncGFwZXInKSB7XG4gIC8vICAgICB0aGlzLmhpZGVQYXBlcigpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyBzaG93QXJlYShhcmVhKSB7XG4gIC8vICAgaWYgKGFyZWEgIT09IHRoaXMuYXJlYSkge1xuICAvLyAgICAgdGhpcy5oaWRlQXJlYSgpO1xuICAvLyAgICAgaWYgKGFyZWEgPT0gJ3BhcGVyJykge1xuICAvLyAgICAgICB0aGlzLnNob3dQYXBlcigpO1xuICAvLyAgICAgfVxuICAvLyAgICAgZWxzZSBpZiAoYXJlYSA9PSAnc3RhZ2UnKSB7XG4gIC8vXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHNob3dQYXBlcigpIHtcbiAgLy8gICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5kb20oKSk7XG4gIC8vICAgdGhpcy5hcmVhID0gJ3BhcGVyJztcbiAgLy8gfVxuICAvL1xuICAvLyBoaWRlUGFwZXIoKSB7XG4gIC8vICAgdGhpcy5kb20uYXBwLnJlbW92ZUNoaWxkKHRoaXMuZG9tLmFwcC5maXJzdENoaWxkKTtcbiAgLy8gICB0aGlzLmFyZWEgPSBudWxsO1xuICAvLyB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgLy8gaWYgKGV2ZW50LmtleSA9PSAncCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgdGhpcy5zaG93QXJlYSgncGFwZXInKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy9cbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdlJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnN0YWdlLmVkaXQoKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICBpZiAodGhpcy5tb2RlID09ICdwYXBlcicpIHtcbiAgICAvLyAgICAgdGhpcy5wYXBlci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnY29udGV4dG1lbnUnKSB7XG4gICAgICB0aGlzLm9uQ29udGV4dE1lbnUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgICB0aGlzLmVkaXRvci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpO1xuICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuICBhcHAuaW5pdCgpO1xufSk7XG4iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vc2hhcGUnO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYWRkKGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gY29udGVudFtpXTtcbiAgICAgICAgaWYgKHNoYXBlIGluc3RhbmNlb2YgU2hhcGUpIHRoaXMuYWRkKHNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKHNoYXBlLmhpdFRlc3QoeCAtIHRoaXMueCwgeSAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBib3VuZHMgPSBjaGlsZC5nZXRCb3VuZHMoKTtcbiAgICAgIHJlY3RzLnB1c2goYm91bmRzKTtcbiAgICB9XG5cbiAgICBpZiAocmVjdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IDA7IC8vTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSAwOyAvL051bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gMDsgLy9OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IDA7IC8vTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWN0ID0gcmVjdHNbaV07XG4gICAgICAgIHhtaW4gPSByZWN0LnggPCB4bWluID8gcmVjdC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHJlY3QueSA8IHltaW4gPyByZWN0LnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcmVjdC54ICsgcmVjdC53aWR0aCA+IHhtYXggPyByZWN0LnggKyByZWN0LndpZHRoIDogeG1heDtcbiAgICAgICAgeW1heCA9IHJlY3QueSArIHJlY3QuaGVpZ2h0ID4geW1heCA/IHJlY3QueSArIHJlY3QuaGVpZ2h0IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4gKyB0aGlzLngsIHltaW4gKyB0aGlzLnksIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBQb2ludExpc3QgZnJvbSAnLi4vZ2VvbS9wb2ludF9saXN0JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIFNoYXBlIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZmlsbCA9IHBhcmFtcy5maWxsIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBwYXJhbXMuc3Ryb2tlIHx8IG51bGw7XG4gICAgLy8gdGhpcy5zdHJva2VXaWR0aCA9IHBhcmFtcy5zdHJva2VXaWR0aCB8fCAxO1xuICAgIHRoaXMuY2xvc2VkID0gcGFyYW1zLmNsb3NlZCB8fCBmYWxzZTtcblxuICAgIC8vIHRoaXMucG9pbnRMaXN0ID0gbmV3IFBvaW50TGlzdChwYXJhbXMucG9pbnRzKTtcbiAgICB0aGlzLnBvaW50c0xpc3QgPSBwYXJhbXMucG9pbnRMaXN0O1xuXG4gICAgLy8gbGV0IGNlbnRlciA9IHRoaXMucG9pbnRMaXN0LmNlbnRlcigpO1xuICAgIC8vIHRoaXMueCA9IGNlbnRlci54O1xuICAgIC8vIHRoaXMueSA9IGNlbnRlci55O1xuICAgIC8vXG4gICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50c0xpc3QucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBsZXQgcCA9IHRoaXMucG9pbnRzTGlzdC5wb2ludHNbaV07XG4gICAgLy8gICBwLnggLT0gdGhpcy54O1xuICAgIC8vICAgcC55IC09IHRoaXMueTtcbiAgICAvLyB9XG4gIH1cblxuICBjb3B5KCkge1xuICAgIGxldCBwb2ludExpc3QgPSB0aGlzLnBvaW50TGlzdC5jb3B5KCk7XG4gICAgcmV0dXJuIG5ldyBTaGFwZSh7IHBvaW50TGlzdDogcG9pbnRMaXN0LCBzdHJva2U6IHRoaXMuc3Ryb2tlLCBmaWxsOiB0aGlzLmZpbGwsIGNsb3NlZDogdGhpcy5jbG9zZWQgfSk7XG4gIH1cblxuICBnZXRQb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgYm91bmRzID0gdGhpcy5wb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gICAgYm91bmRzLnggKz0gdGhpcy54O1xuICAgIGJvdW5kcy55ICs9IHRoaXMueTtcbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgaW50ZXJzZWN0c1JlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICBpZiAoeW1pbiA+IHltYXgpIFt5bWluLCB5bWF4XSA9IFsgeW1heCwgeW1pbiBdO1xuICAgIGxldCBwb2ludHMgPSB0aGlzLnBvaW50TGlzdC5wb2ludHM7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwMCA9IHBvaW50c1tpIC0gMV07XG4gICAgICBsZXQgcDEgPSBwb2ludHNbaV07XG4gICAgICBpZiAoVXRpbC5saW5lSW50ZXJzZWN0c1JlY3RhbmdsZShwMC54LCBwMC55LCBwMS54LCBwMS55LCB4bWluIC0gdGhpcy54LCB5bWluIC0gdGhpcy55LCB4bWF4IC0gdGhpcy54LCB5bWF4IC0gdGhpcy55KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgbGV0IHBvaW50cyA9IHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgICBpZiAodGhpcy5maWxsKSB7XG4gICAgICByZXR1cm4gVXRpbC5wb2ludEluUG9seWdvbihwb2ludHMsIHggLSB0aGlzLngsIHkgLSB0aGlzLnkpO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcbiIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMuY29udGVudCk7XG4gIH1cblxuICBzZXRTaXplKHZhbHVlKSB7XG4gICAgdGhpcy5zaXplID0gdmFsdWU7XG4gIH1cblxuICBzZXRUZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdmFsdWU7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCB7IEV2ZW50LCBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzLl94O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cblxuICBzZXQgeCh2YWx1ZSkge1xuICAgIHRoaXMuX3ggPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMuX3kgPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBkb20oKSB7XG4gIH1cblxuICBzaG93KCkge1xuXG4gIH1cblxuICBoaWRlKCkge1xuXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIiwiXG5jbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cbn1cblxuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuICBlbWl0KHR5cGUsIC4uLmFyZ3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tpXTtcbiAgICAgIGlmIChsaXN0ZW5lci50eXBlID09IHR5cGUpIHtcbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaCh7IHR5cGU6IHR5cGUsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRXZlbnREaXNwYXRjaGVyLCBFdmVudCB9O1xuIiwiXG5jbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuciA9IHI7XG4gIH1cblxuICBpbnRlcnNlY3RzTGluZVNlZ21lbnQoeDEsIHkxLCB4MiwgeTIpIHtcblxuICB9XG5cbiAgY29udGFpbnNQb2ludCh4LCB5KSB7XG4gICAgbGV0IGR4ID0geCAtIHRoaXMueDtcbiAgICBsZXQgZHkgPSB5IC0gdGhpcy55O1xuICAgIGxldCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICByZXR1cm4gZCA8IHRoaXMucjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XG4iLCJcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRpc3RhbmNlKHBvaW50KSB7XG4gICAgbGV0IGR4ID0gdGhpcy54IC0gcG9pbnQueDtcbiAgICBsZXQgZHkgPSB0aGlzLnkgLSBwb2ludC55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL3JlY3RhbmdsZSc7XG5cbmNsYXNzIFBvaW50TGlzdCB7XG4gIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzIHx8IFtdO1xuICB9XG5cbiAgY29weSgpIHtcbiAgICBsZXQgcG9pbnRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgIHBvaW50cy5wdXNoKG5ldyBQb2ludChwLngsIHAueSkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50TGlzdChwb2ludHMpO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgIHhtaW4gPSBwLnggPCB4bWluID8gcC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcC54ID4geG1heCA/IHAueCA6IHhtYXg7XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRMaXN0O1xuIiwiXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdyb3coYW1vdW50KSB7XG4gICAgdGhpcy54IC09IGFtb3VudDtcbiAgICB0aGlzLnkgLT0gYW1vdW50O1xuICAgIHRoaXMud2lkdGggKz0gYW1vdW50ICogMjtcbiAgICB0aGlzLmhlaWdodCArPSBhbW91bnQgKiAyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi9nZW9tL2NpcmNsZSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQgUG9pbnRlclRvb2wgZnJvbSAnLi90b29scy9wb2ludGVyX3Rvb2wnO1xuaW1wb3J0IFBlbmNpbFRvb2wgZnJvbSAnLi90b29scy9wZW5jaWxfdG9vbCc7XG5cbi8vIGxldCBTTkFQX1JBRElVUyA9IDM7XG4vLyBsZXQgQ09MT1JTID0gW1xuLy8gICAnd2hpdGUnLFxuLy8gICAnbGlnaHRncmF5Jyxcbi8vICAgJ2dyYXknLFxuLy8gICAnYmxhY2snXG4vLyBdO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IG51bGw7XG5cbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncG9pbnRlci1jdXJzb3InKTtcblxuICAgIHRoaXMuY3Vyc29yWCA9IDA7XG4gICAgdGhpcy5jdXJzb3JZID0gMDtcblxuICAgIC8vIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BhcGVyLWN1cnNvcicpO1xuICAgIC8vIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ1BhcGVyJyk7XG4gICAgdGhpcy5zZXRUb29sKCdwZW5jaWwnKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGRyYXdTaGFwZShzaGFwZSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICAvLyBsZXQgdHggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgLy8gbGV0IHR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIC8vIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGxldCBzcCA9IHRoaXMud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIC8vIGxldCB4ID0gKHAueCArIHNwLngpID4+IDA7XG4gICAgICAvLyBsZXQgeSA9IChwLnkgKyBzcC55KSA+PiAwO1xuICAgICAgbGV0IHggPSAocC54ICsgc3AueCk7XG4gICAgICBsZXQgeSA9IChwLnkgKyBzcC55KTtcblxuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJBeGlzKHgsIHkpIHtcbiAgICBsZXQgc2l6ZSA9IDIwO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIGN0eC5tb3ZlVG8oeCAtIHNpemUsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHNpemUsIHkpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHNpemUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHMoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgIC8vIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgICAgbGV0IHAgPSB0aGlzLndvcmxkVG9TY3JlZW4oc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhwLng+PjAsIHAueT4+MCwgMywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5yZW5kZXJBeGlzKCh0aGlzLmNhbnZhcy53aWR0aCAvIDIpID4+IDAsICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSA+PiAwKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2hhcGVzW2ldO1xuICAgICAgdGhpcy5kcmF3U2hhcGUoc2hhcGUpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVySGludHMoKTtcblxuICAgIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICB0aGlzLnRvb2wucmVuZGVyKGN0eCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAvLyAgIHRoaXMuZHJhd1BhdGgoeyBwb2ludHM6IHRoaXMucG9pbnRzLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG4gICAgLy9cbiAgICAvLyAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAvLyAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgLy8gICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAvLyAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIC8vICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vXG4gICAgLy8gICBsZXQgY3AgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIC8vICAgbGV0IHAwID0gdGhpcy5wb2ludHNbMF07XG4gICAgLy8gICBpZiAoY3AuZGlzdGFuY2UocDApIDwgU05BUF9SQURJVVMpIHtcbiAgICAvLyAgICAgY3R4LmFyYyhwMC54LCBwMC55LCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgLy8gICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgfVxuXG4gIHNjcmVlblRvV29ybGQoeCwgeSkge1xuICAgIGxldCB0eCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICBsZXQgdHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCAtIHR4LCB5IC0gdHkpO1xuICB9XG5cbiAgd29ybGRUb1NjcmVlbih4LCB5KSB7XG4gICAgbGV0IHR4ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIGxldCB0eSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh4ICsgdHgsIHkgKyB0eSk7XG4gIH1cblxuICBnZXRTaGFwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hhcGVzO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgLy8gdGhpcy5wb2ludHMgPSBbXTtcbiAgICAvLyB0aGlzLnNoYXBlcyA9IFtdO1xuICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvLyBzZXRGaWxsKGZpbGwpIHtcbiAgLy8gICB0aGlzLmZpbGwgPSBmaWxsO1xuICAvLyAgIHRoaXMucmVuZGVyKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gc2V0U3Ryb2tlKHN0cm9rZSkge1xuICAvLyAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAvLyAgIHRoaXMucmVuZGVyKCk7XG4gIC8vIH1cblxuICBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NldEN1cm9yJywgY3Vyc29yKTtcbiAgICBpZiAodGhpcy5lbC5jb250YWlucyh0aGlzLmN1cnNvcikpIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpO1xuICAgIH1cbiAgICB0aGlzLmN1cnNvciA9IGN1cnNvcjtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY3Vyc29yKTtcbiAgfVxuXG4gIHNldFRvb2wodG9vbE5hbWUpIHtcbiAgICBpZiAodG9vbE5hbWUgIT09IHRoaXMudG9vbE5hbWUpIHtcbiAgICAgIGlmICh0b29sTmFtZSA9PSAncG9pbnRlcicpIHtcbiAgICAgICAgdGhpcy50b29sID0gbmV3IFBvaW50ZXJUb29sKCk7XG4gICAgICAgIHRoaXMudG9vbC5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLnRvb2wub24oJ3NlbGVjdCcsIChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwb2ludCk7XG4gICAgICAgICAgLy8gdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIHRoaXMudG9vbC5vbignbWFycXVlZScsIChyZWN0KSA9PiB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2cocmVjdCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodG9vbE5hbWUgPT0gJ3BlbmNpbCcpIHtcbiAgICAgICAgdGhpcy50b29sID0gbmV3IFBlbmNpbFRvb2woKTtcbiAgICAgICAgdGhpcy50b29sLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9vbC5vbignc2hhcGUnLCAoc2hhcGUpID0+IHtcbiAgICAgICAgICB0aGlzLnNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50b29sTmFtZSA9IHRvb2xOYW1lO1xuICAgICAgdGhpcy5zZXRDdXJzb3IodGhpcy50b29sLmN1cnNvcik7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdChzaGFwZSkge1xuICAgIC8vIHRoaXMuc2VsZWN0aW9uID0gWyBzaGFwZSBdO1xuICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdCcsIHNoYXBlKTtcbiAgfVxuXG4gIC8vIHNlbGVjdE1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAvLyAgIGlmICh4bWluID4geG1heCkgW3htaW4sIHhtYXhdID0gWyB4bWF4LCB4bWluIF07XG4gIC8vICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgLy8gICBsZXQgc2VsZWN0aW9uID0gW107XG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAvLyAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgLy8gICAgICAgaWYgKGNoaWxkLmludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkpIHtcbiAgLy8gICAgICAgICBzZWxlY3Rpb24ucHVzaChjaGlsZCk7XG4gIC8vICAgICAgICAgY2hpbGQuc2VsZWN0KCk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gIC8vIH1cblxuICAvLyBoaXRUZXN0KHgsIHkpIHtcbiAgLy8gICBmb3IgKHZhciBpID0gdGhpcy5zaGFwZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgLy8gICAgIGxldCBjaGlsZCA9IHRoaXMuc2hhcGVzW2ldO1xuICAvLyAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgLy8gICAgICAgcmV0dXJuIGNoaWxkO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gbnVsbDtcbiAgLy8gfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gdGhpcy5kb3duWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgLy8gdGhpcy5kb3duWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgLy9cbiAgICAvLyBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAvLyBpZiAoaGl0KSB7XG4gICAgLy8gICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuICAgIC8vXG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgLy8gICAgIHRoaXMuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAvLyAgICAgaGl0LnNlbGVjdCgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLmN1cnNvci5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJzb3JYICsgJ3B4JztcbiAgICB0aGlzLmN1cnNvci5zdHlsZS50b3AgPSB0aGlzLmN1cnNvclkgKyAncHgnO1xuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSAncScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5zZXRUb29sKCdwb2ludGVyJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnYicgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgICAgdGhpcy5zZXRUb29sKCdwZW5jaWwnKTtcbiAgICB9XG4gICAgLy8gaWYgKGV2ZW50LmtleSA9PSAncycgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgdGhpcy5zZXRTdHJva2UodGhpcy5zdHJva2UgPyBudWxsIDogJ2JsYWNrJylcbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAoZXZlbnQua2V5ID09ICcwJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICB0aGlzLnNldEZpbGwobnVsbCk7XG4gICAgLy8gfVxuICAgIC8vIGVsc2UgaWYgKFsnMScsICcyJywgJzMnLCAnNCddLmluY2x1ZGVzKGV2ZW50LmtleSkgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgbGV0IGNvbG9yID0gQ09MT1JTW3BhcnNlSW50KGV2ZW50LmtleSkgLSAxXTtcbiAgICAvLyAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKVxuICAgIC8vICAgICB0aGlzLnNldEZpbGwoY29sb3IpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYXcnKSB7XG4gICAgLy8gICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgICAgIHRoaXMuY2FuY2VsUGF0aCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNlIHtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICB0aGlzLnRvb2wuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9nZW9tL3BvaW50JztcbmltcG9ydCBQb2ludExpc3QgZnJvbSAnLi4vLi4vZ2VvbS9wb2ludF9saXN0JztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBUb29sIGZyb20gJy4vdG9vbCc7XG5cbmNsYXNzIFBlbmNpbFRvb2wgZXh0ZW5kcyBUb29sIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc3Ryb2tlID0gJ2dyYXknO1xuICAgIHRoaXMuZmlsbCA9ICdsaWdodGdyYXknO1xuXG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwZW5jaWwtY3Vyc29yJyk7XG4gIH1cblxuICBjbG9zZVBhdGgoY2xvc2VkPWZhbHNlKSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBwb2ludExpc3QgPSBuZXcgUG9pbnRMaXN0KHRoaXMucG9pbnRzKTtcbiAgICAgIGxldCBib3VuZHMgPSBwb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gICAgICBsZXQgeCA9IGJvdW5kcy54ICsgYm91bmRzLndpZHRoIC8gMjtcbiAgICAgIGxldCB5ID0gYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IC8gMjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRMaXN0LnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50TGlzdC5wb2ludHNbaV07XG4gICAgICAgIHAueCAtPSB4O1xuICAgICAgICBwLnkgLT0geTtcbiAgICAgIH1cbiAgICAgIGxldCBzaGFwZSA9IG5ldyBTaGFwZSh7IHBvaW50TGlzdDogcG9pbnRMaXN0LCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UsIGNsb3NlZDogY2xvc2VkIH0pO1xuICAgICAgbGV0IHAgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHgsIHkpO1xuICAgICAgc2hhcGUueCA9IHAueDtcbiAgICAgIHNoYXBlLnkgPSBwLnk7XG4gICAgICB0aGlzLmVtaXQoJ3NoYXBlJywgc2hhcGUpO1xuICAgICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBkcmF3UGF0aChjdHgsIHBvaW50cywgc3Ryb2tlLCBmaWxsLCBjbG9zZWQ9ZmFsc2UpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2UgIT09IHVuZGVmaW5lZCA/IChzdHJva2UgPyBzdHJva2UgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGwgIT09IHVuZGVmaW5lZCA/IChmaWxsID8gZmlsbCA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBpZiAoc3Ryb2tlID09IG51bGwpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdjeWFuJztcbiAgICB9XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgaWYgKGkgPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8ocC54LCBwLnkpO1xuICAgIH1cblxuICAgIGlmIChjbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIC8vIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgLy8gY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG5cbiAgICAgIHRoaXMuZHJhd1BhdGgoY3R4LCB0aGlzLnBvaW50cywgdGhpcy5zdHJva2UsIHRoaXMuZmlsbCk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBsZXQgY3AgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgbGV0IHAwID0gdGhpcy5wb2ludHNbMF07XG4gICAgICBpZiAoY3AuZGlzdGFuY2UocDApIDwgNSkge1xuICAgICAgICBjdHguYXJjKHAwLngsIHAwLnksIDUsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgcCA9IG5ldyBQb2ludChldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHAuZGlzdGFuY2UodGhpcy5wb2ludHNbMF0pIDwgNSkge1xuICAgICAgICAgIHRoaXMuY2xvc2VQYXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHt9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7fVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZW5jaWxUb29sO1xuIiwiaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcblxuY2xhc3MgUG9pbnRlclRvb2wgZXh0ZW5kcyBUb29sIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BvaW50ZXItY3Vyc29yJyk7XG5cbiAgICAvLyB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdQYXBlciB0b29sOicsIHBhcGVyLnRvb2xOYW1lKTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGxldCBzcCA9IHBhcGVyLnNjcmVlblRvV29ybGQoeCwgeSk7XG4gICAgZm9yICh2YXIgaSA9IHBhcGVyLnNoYXBlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHNoYXBlID0gcGFwZXIuc2hhcGVzW2ldO1xuICAgICAgLy8gbGV0IHAgPSBwYXBlci53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgaWYgKHNoYXBlLmhpdFRlc3Qoc3AueCwgc3AueSkpIHtcbiAgICAgICAgcmV0dXJuIHNoYXBlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNlbGVjdE1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIGlmICh4bWluID4geG1heCkgW3htaW4sIHhtYXhdID0gWyB4bWF4LCB4bWluIF07XG4gICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgICBsZXQgc2VsZWN0aW9uID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgICAgaWYgKGNoaWxkLmludGVyc2VjdHNSZWN0YW5nbGUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkpIHtcbiAgICAgICAgICBzZWxlY3Rpb24ucHVzaChjaGlsZCk7XG4gICAgICAgICAgY2hpbGQuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGFwZXIuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICB9XG5cbiAgbW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdtb3ZlYnknLCBkeCwgZHkpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFwZXIuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5zZWxlY3Rpb25baV07XG4gICAgICBzaGFwZS54ICs9IGR4O1xuICAgICAgc2hhcGUueSArPSBkeTtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIGRyYWdPbigpIHtcbiAgICB0aGlzLm1vZGUgPSAnZHJhZyc7XG4gICAgLy8gY29uc29sZS5sb2coJ2RyYWcnKTtcbiAgfVxuXG4gIGRyYWdPZmYoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICAvLyBjb25zb2xlLmxvZygnZHJhZ29mZicpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW5kZXInLCB0aGlzLnNlbGVjdGlvbik7XG5cbiAgICAvLyBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgLy8gY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdleGNsdXNpb24nO1xuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHRoaXMuZG93blgsIHRoaXMuZG93blkpO1xuICAgIC8vIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmRvd25ZKTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMuZG93blgsIHRoaXMuY3Vyc29yWSk7XG4gICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcblxuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgIC8vXG4gICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCBwYXBlci5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIGxldCBzaGFwZSA9IHBhcGVyLnNlbGVjdGlvbltpXTtcbiAgICAvLyAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAgIGN0eC5hcmMoc2hhcGUueCA+PiAwLCBzaGFwZS55ID4+IDAsIDMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAvLyAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLmRvd25YID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMuZG93blkgPSB0aGlzLmN1cnNvclk7XG5cbiAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBwYXBlci5zZWxlY3Rpb24gPSBbIGhpdCBdO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFwZXIuc2VsZWN0aW9uID0gW107XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLmRyYWdPZmYoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQub2Zmc2V0WTtcblxuICAgIHRoaXMuZGVsdGFYID0gdGhpcy5sYXN0WCA/IHRoaXMuY3Vyc29yWCAtIHRoaXMubGFzdFggOiAwO1xuICAgIHRoaXMuZGVsdGFZID0gdGhpcy5sYXN0WSA/IHRoaXMuY3Vyc29yWSAtIHRoaXMubGFzdFkgOiAwO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpIHtcbiAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KHRoaXMuZGVsdGFYLCB0aGlzLmRlbHRhWSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbnMgJiAxKSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMuY3Vyc29yWCAtIHRoaXMuZG93blg7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuY3Vyc29yWSAtIHRoaXMuZG93blk7XG4gICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiAyIHx8IE1hdGguYWJzKGR5KSA+IDIpIHtcbiAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgICAgICAgIHRoaXMuZHJhZ09uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxhc3RYID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMubGFzdFkgPSB0aGlzLmN1cnNvclk7XG4gICAgLy8gdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcblxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG5cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50ZXJUb29sO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZXZlbnRzLmpzJztcblxuY2xhc3MgVG9vbCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbDtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2Rpc3BsYXkvZ3JvdXAnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXIvcGFwZXInO1xuXG5jbGFzcyBTdGFnZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG5cbiAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKHsgdmlzaWJsZTogZmFsc2UgfSk7XG5cbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgLy8gdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdzdGFnZS1jdXJzb3InKTtcblxuICAgIC8vIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wYXBlci5kb20oKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcyk7XG4gIH1cblxuICBkb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICBhZGQodHJhbnNmb3JtKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRyYW5zZm9ybSk7XG4gICAgdHJhbnNmb3JtLmFkZGVkVG9TdGFnZSgpO1xuICAgIHRyYW5zZm9ybS5vbigndmFsdWVjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBlZGl0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdlZGl0Jyk7XG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGlvbicpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLnNlbGVjdGlvblswXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcbiAgICAgICAgZ3JvdXAueCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpID4+IDA7XG4gICAgICAgIGdyb3VwLnkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgPj4gMDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gZ3JvdXA7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICAgIGlmIChjaGlsZC5pbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpKSB7XG4gICAgICAgICAgc2VsZWN0aW9uLnB1c2goY2hpbGQpO1xuICAgICAgICAgIGNoaWxkLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbltpXS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlclNoYXBlKHNoYXBlLCB4LCB5KSB7XG4gICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJIaW50cyh0cmFuc2Zvcm0pIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyYW5zZm9ybS5zZWxlY3RlZCA/ICdyZWQnIDogJ2JsdWUnO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSwgMywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgbGV0IGJvdW5kcyA9IHRyYW5zZm9ybS5nZXRCb3VuZHMoKTtcbiAgICBpZiAoYm91bmRzKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmFuc2Zvcm0uc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlck9iamVjdCh0cmFuc2Zvcm0pIHtcbiAgICBpZiAodHJhbnNmb3JtIGluc3RhbmNlb2YgR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJhbnNmb3JtLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IHRyYW5zZm9ybS5jaGlsZHJlbltpXTtcbiAgICAgICAgdGhpcy5yZW5kZXJTaGFwZShjaGlsZCwgdHJhbnNmb3JtLngsIHRyYW5zZm9ybS55KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRyYW5zZm9ybS5zZWxlY3RlZCkgdGhpcy5yZW5kZXJIaW50cyh0cmFuc2Zvcm0pO1xuICB9XG5cbiAgcmVuZGVyQXhpcyh4LCB5KSB7XG4gICAgbGV0IHNpemUgPSAxMDtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGlnaHRncmF5JztcbiAgICBjdHgubW92ZVRvKHggLSBzaXplLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyBzaXplLCB5KTtcbiAgICBjdHgubW92ZVRvKHgsIHkgLSBzaXplKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyBzaXplKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgdGhpcy5yZW5kZXJPYmplY3QoY2hpbGQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC41O1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMTtcbiAgICAgIHRoaXMucmVuZGVyQXhpcyh0aGlzLmNvbnRleHQueCwgdGhpcy5jb250ZXh0LnkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2V4Y2x1c2lvbic7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMuZG93blgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuZG93blgsIHRoaXMuY3Vyc29yWSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICB9XG5cbiAgbW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICBpdGVtLnggKz0gZHg7XG4gICAgICBpdGVtLnkgKz0gZHk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBiZWdpbkRyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RyYWcnO1xuICB9XG5cbiAgY2FuY2VsRHJhZygpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICB9XG5cbiAgYmVnaW5NYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gIH1cblxuICBjYW5jZWxNYXJxdWVlKCkge1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNob3dQYXBlcigpIHtcblxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZG93bicpO1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5lbC5vZmZzZXRMZWZ0O1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbC5vZmZzZXRUb3A7XG5cbiAgICB0aGlzLmRvd25YID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMuZG93blkgPSB0aGlzLmN1cnNvclk7XG5cbiAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAgICAgaGl0LnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpXG4gICAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLnNlbGVjdE1hcnF1ZWUodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgdGhpcy5jYW5jZWxNYXJxdWVlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgdGhpcy5kZWx0YVggPSB0aGlzLmxhc3RYID8gdGhpcy5jdXJzb3JYIC0gdGhpcy5sYXN0WCA6IDA7XG4gICAgdGhpcy5kZWx0YVkgPSB0aGlzLmxhc3RZID8gdGhpcy5jdXJzb3JZIC0gdGhpcy5sYXN0WSA6IDA7XG5cbiAgICBpZiAoZXZlbnQuYnV0dG9ucyAmIDEpIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeSh0aGlzLmRlbHRhWCwgdGhpcy5kZWx0YVkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5jdXJzb3JYIC0gdGhpcy5kb3duWDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5jdXJzb3JZIC0gdGhpcy5kb3duWTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPj0gMiB8fCBNYXRoLmFicyhkeSkgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5iZWdpbkRyYWcoKTtcbiAgICAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuYmVnaW5NYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuZG93blggKyBkeCwgdGhpcy5kb3duWSArIGR5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGxldCBoaXQgPSB0aGlzLmhpdFRlc3QodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgLy8gaWYgKGhpdCkge1xuICAgICAgLy8gICB0aGlzLnRhcmdldCA9IGhpdDtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgLy8gICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHRoaXMubGFzdFggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMuY3Vyc29yWTtcblxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5lZGl0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJcbmNsYXNzIFN2ZyB7XG4gIHN0YXRpYyBlbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdHlwZSk7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHN0YXRpYyBzdmcoYXR0cmlidXRlcykge1xuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJywnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdmc7XG4iLCJcbi8vIENvcHlyaWdodCAoYykgMTk3MC0yMDAzLCBXbS4gUmFuZG9scGggRnJhbmtsaW5cbi8vIGh0dHBzOi8vd3JmLmVjc2UucnBpLmVkdS8vUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcblxuZnVuY3Rpb24gcG9pbnRJblBvbHlnb24ocG9pbnRzLCB0ZXN0eCwgdGVzdHkpIHtcbiAgbGV0IGksIGosIGMgPSAwO1xuICBmb3IgKGxldCBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgIGlmICgoKHBvaW50c1tpXS55ID4gdGVzdHkpICE9IChwb2ludHNbal0ueSA+IHRlc3R5KSkgJiZcbiAgICAgICh0ZXN0eCA8IChwb2ludHNbal0ueCAtIHBvaW50c1tpXS54KSAqICh0ZXN0eSAtIHBvaW50c1tpXS55KSAvIChwb2ludHNbal0ueSAtIHBvaW50c1tpXS55KSArIHBvaW50c1tpXS54KSlcbiAgICAgIGMgPSAhYztcbiAgfVxuICByZXR1cm4gYztcbn1cblxuZnVuY3Rpb24gbGluZUludGVyc2VjdHNSZWN0YW5nbGUoeDEsIHkxLCB4MiwgeTIsIHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgLy8gQ29tcGxldGVseSBvdXRzaWRlLlxuICBpZiAoKHgxIDw9IHhtaW4gJiYgeDIgPD0geG1pbikgfHwgKHkxIDw9IHltaW4gJiYgeTIgPD0geW1pbikgfHxcbiAgICAgICh4MSA+PSB4bWF4ICYmIHgyID49IHhtYXgpIHx8ICh5MSA+PSB5bWF4ICYmIHkyID49IHltYXgpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICB2YXIgbSA9ICh5MiAtIHkxKSAvICh4MiAtIHgxKTtcblxuICB2YXIgeSA9IG0gKiAoeG1pbiAtIHgxKSArIHkxO1xuICBpZiAoeSA+IHltaW4gJiYgeSA8IHltYXgpIHJldHVybiB0cnVlO1xuXG4gIHkgPSBtICogKHhtYXggLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgeCA9ICh5bWluIC0geTEpIC8gbSArIHgxO1xuICBpZiAoeCA+IHhtaW4gJiYgeCA8IHhtYXgpIHJldHVybiB0cnVlO1xuXG4gIHggPSAoeW1heCAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGluZUludGVyc2VjdHNSZWN0YW5nbGU6IGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlLFxuICBwb2ludEluUG9seWdvbjogcG9pbnRJblBvbHlnb25cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=