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
    _this.strokeWidth = params.strokeWidth || 1;
    _this.closed = params.closed || false;

    _this.pointList = new _point_list2.default(params.points);

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

  // center() {
  //   let bounds = this.getBounds();
  //   return new Point(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
  // }

  _createClass(PointList, [{
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

      this.renderAxis(this.canvas.width / 2, this.canvas.height / 2);

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
        var shape = new _shape2.default({ points: pointList.points, closed: closed, fill: this.fill, stroke: this.stroke });
        var p = paper.screenToWorld(x, y);
        shape.x = p.x;
        shape.y = p.y;
        // console.log(shape.x, shape.y);
        this.emit('shape', shape);
        this.points = [];
      }
      // this.points = [];
      // this.render();
    }
  }, {
    key: 'drawPath',
    value: function drawPath(ctx, points, stroke, fill) {
      var closed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      // let points = params.points || [];
      // let ctx = this.canvas.getContext('2d');
      // ctx.save();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvcGVuY2lsX3Rvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyL3Rvb2xzL3BvaW50ZXJfdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvdG9vbHMvdG9vbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJzdGFydHVwIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXBlciIsInNldEVkaXRvciIsImdsb2JhbCIsInN0YWdlRWwiLCJzdGFnZSIsInNoYXBlcyIsImdldFNoYXBlcyIsImxlbmd0aCIsImdyb3VwIiwieCIsInkiLCJpIiwic2hhcGUiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJ3aWR0aCIsImhlaWdodCIsImFkZCIsImVkaXRvciIsImhpZGUiLCJyZW1vdmVDaGlsZCIsImZpcnN0Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInNob3ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIm9uQ29udGV4dE1lbnUiLCJoYW5kbGVFdmVudCIsIm9uS2V5RG93biIsIm9uTW91c2VEb3duIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJHcm91cCIsInBhcmFtcyIsImNoaWxkcmVuIiwiY29udGVudCIsIkFycmF5IiwicHVzaCIsImhpdFRlc3QiLCJyZWN0cyIsImNoaWxkIiwieG1pbiIsInltaW4iLCJ4bWF4IiwieW1heCIsInJlY3QiLCJTaGFwZSIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsImNsb3NlZCIsInBvaW50TGlzdCIsInBvaW50cyIsInAwIiwicDEiLCJsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSIsInBvaW50SW5Qb2x5Z29uIiwiVGV4dCIsInNldFNpemUiLCJzaXplIiwic2V0VGV4dCIsInZhbHVlIiwiVHJhbnNmb3JtIiwic2VsZWN0ZWQiLCJfeCIsImVtaXQiLCJfeSIsIkVkaXRvciIsIkV2ZW50IiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2lyY2xlIiwiciIsIngxIiwieTEiLCJ4MiIsInkyIiwiZHgiLCJkeSIsImQiLCJNYXRoIiwic3FydCIsIlBvaW50IiwicG9pbnQiLCJQb2ludExpc3QiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsIk5FR0FUSVZFX0lORklOSVRZIiwicCIsIlJlY3RhbmdsZSIsImFtb3VudCIsIlZlY3RvciIsInZlY3RvciIsImRvdCIsInJhdGlvIiwiUGFwZXIiLCJzZWxlY3Rpb24iLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjdXJzb3IiLCJjdXJzb3JYIiwiY3Vyc29yWSIsInNldFRvb2wiLCJnZXRQb2ludHMiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2F2ZSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwic3AiLCJ3b3JsZFRvU2NyZWVuIiwiaiIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInJlc3RvcmUiLCJ0cmFuc2xhdGUiLCJhcmMiLCJQSSIsImZpbGxSZWN0IiwicmVuZGVyQXhpcyIsImRyYXdTaGFwZSIsInJlbmRlckhpbnRzIiwidG9vbCIsInJlbmRlciIsInR4IiwidHkiLCJjb250YWlucyIsInRvb2xOYW1lIiwib24iLCJzZXRDdXJzb3IiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInN0eWxlIiwibGVmdCIsInRvcCIsImtleSIsInJlcGVhdCIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwib25EYmxDbGljayIsIlBlbmNpbFRvb2wiLCJzY3JlZW5Ub1dvcmxkIiwidW5kZWZpbmVkIiwiZHJhd1BhdGgiLCJjcCIsImRpc3RhbmNlIiwiYnV0dG9uIiwiUG9pbnRlclRvb2wiLCJpbnRlcnNlY3RzUmVjdGFuZ2xlIiwic2VsZWN0IiwibW9kZSIsImRvd25YIiwiZG93blkiLCJoaXQiLCJkcmFnT2ZmIiwiZGVsdGFYIiwibGFzdFgiLCJkZWx0YVkiLCJsYXN0WSIsIm1vdmVTZWxlY3Rpb25CeSIsImJ1dHRvbnMiLCJhYnMiLCJkcmFnT24iLCJUb29sIiwiU3RhZ2UiLCJjb250ZXh0IiwidmlzaWJsZSIsInRyYW5zZm9ybSIsImFkZGVkVG9TdGFnZSIsImRlc2VsZWN0IiwibGluZVdpZHRoIiwicmVuZGVyU2hhcGUiLCJjbGVhclJlY3QiLCJyZW5kZXJPYmplY3QiLCJnbG9iYWxBbHBoYSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsIml0ZW0iLCJwYWdlWCIsIm9mZnNldExlZnQiLCJwYWdlWSIsIm9mZnNldFRvcCIsImluY2x1ZGVzIiwiY2FuY2VsRHJhZyIsInNlbGVjdE1hcnF1ZWUiLCJjYW5jZWxNYXJxdWVlIiwiYmVnaW5EcmFnIiwiYmVnaW5NYXJxdWVlIiwiZWRpdCIsIlN2ZyIsImF0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lIiwic2V0QXR0cmlidXRlIiwic3ZnIiwidGVzdHgiLCJ0ZXN0eSIsImMiLCJtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVNQSxHO0FBQ0osaUJBQWM7QUFBQTs7QUFDWixTQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS0MsT0FBTDtBQUNBLFdBQUtDLGtCQUFMO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkJDLGFBQU9DLGdC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UDs7QUFFRixNQUFJb0ssSUFBSSxDQUFDL0gsS0FBS0YsRUFBTixLQUFhQyxLQUFLRixFQUFsQixDQUFSOztBQUVBLE1BQUl0RSxJQUFJd00sS0FBS3ZLLE9BQU9xQyxFQUFaLElBQWtCQyxFQUExQjtBQUNBLE1BQUl2RSxJQUFJa0MsSUFBSixJQUFZbEMsSUFBSW9DLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUJwQyxNQUFJd00sS0FBS3JLLE9BQU9tQyxFQUFaLElBQWtCQyxFQUF0QjtBQUNBLE1BQUl2RSxJQUFJa0MsSUFBSixJQUFZbEMsSUFBSW9DLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUIsTUFBSXJDLElBQUksQ0FBQ21DLE9BQU9xQyxFQUFSLElBQWNpSSxDQUFkLEdBQWtCbEksRUFBMUI7QUFDQSxNQUFJdkUsSUFBSWtDLElBQUosSUFBWWxDLElBQUlvQyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCcEMsTUFBSSxDQUFDcUMsT0FBT21DLEVBQVIsSUFBY2lJLENBQWQsR0FBa0JsSSxFQUF0QjtBQUNBLE1BQUl2RSxJQUFJa0MsSUFBSixJQUFZbEMsSUFBSW9DLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUIsU0FBTyxLQUFQO0FBQ0Q7O2tCQUVjO0FBQ2JZLDJCQUF5QkEsdUJBRFo7QUFFYkMsa0JBQWdCQTtBQUZILEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsImltcG9ydCBzdmcgZnJvbSAnLi9zdmcnO1xuaW1wb3J0IFN0YWdlIGZyb20gJy4vc3RhZ2UnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXIvcGFwZXInO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9kaXNwbGF5L2dyb3VwJztcbmltcG9ydCBUZXh0IGZyb20gJy4vZGlzcGxheS90ZXh0JztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSBbXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdGFydHVwKCk7XG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgLy8gbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgLy9cbiAgICAvLyBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoe1xuICAgIC8vICAgcG9pbnRzOiBbIHsgeDogMCwgeTogMCB9LCB7IHg6IDYwLCB5OiAwIH0sIHsgeDogNDAsIHk6IDQwIH0sIHsgeDogMjAsIHk6IDEwIH0gXSxcbiAgICAvLyAgIGZpbGw6ICcjY2NjY2NjJyxcbiAgICAvLyAgIHN0cm9rZTogJ2JsYWNrJyxcbiAgICAvLyAgIGNsb3NlZDogdHJ1ZVxuICAgIC8vIH0pO1xuICAgIC8vIHNoYXBlLnggPSAtNjA7XG4gICAgLy8gc2hhcGUueSA9IDgwO1xuICAgIC8vIGdyb3VwLmFkZChzaGFwZSk7XG4gICAgLy9cbiAgICAvLyBzaGFwZSA9IG5ldyBTaGFwZSh7XG4gICAgLy8gICBwb2ludHM6IFsgeyB4OiAwLCB5OiAwIH0sIHsgeDogNjAsIHk6IDIwIH0sIHsgeDogMTAwLCB5OiAyMCB9LCB7IHg6IDEwMCwgeTogNzAgfSBdLFxuICAgIC8vICAgZmlsbDogJyNjY2NjY2MnLFxuICAgIC8vICAgc3Ryb2tlOiBudWxsLFxuICAgIC8vICAgY2xvc2VkOiB0cnVlXG4gICAgLy8gfSk7XG4gICAgLy8gc2hhcGUueCA9IDE1MDtcbiAgICAvLyBzaGFwZS55ID0gMTAwO1xuICAgIC8vIGdyb3VwLmFkZChzaGFwZSk7XG4gICAgLy9cbiAgICAvLyB0aGlzLnN0YWdlLmFkZChncm91cCk7XG4gICAgLy9cbiAgICAvLyBncm91cC54ID0gNzU7XG4gICAgLy8gZ3JvdXAueSA9IDUwO1xuXG4gICAgdGhpcy5kb20uYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuXG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcigpO1xuICAgIHRoaXMuc2V0RWRpdG9yKHRoaXMucGFwZXIpO1xuXG4gICAgZ2xvYmFsLnBhcGVyID0gdGhpcy5wYXBlcjtcblxuICAgIC8vIHRoaXMucGFwZXIuc2hvdygpO1xuICAgIC8vIHRoaXMuZWRpdG9yID0gdGhpcy5wYXBlcjtcbiAgfVxuXG4gIGdyYWJQYXBlclNoYXBlcygpIHtcbiAgICBsZXQgc3RhZ2VFbCA9IHRoaXMuc3RhZ2UuZG9tKCk7XG4gICAgbGV0IHNoYXBlcyA9IHRoaXMucGFwZXIuZ2V0U2hhcGVzKCk7XG5cbiAgICBpZiAoc2hhcGVzLmxlbmd0aCkge1xuICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgICBsZXQgeCA9IDA7XG4gICAgICBsZXQgeSA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICAgIGxldCBib3VuZHMgPSBzaGFwZS5nZXRCb3VuZHMoKTtcbiAgICAgICAgeCArPSBib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDI7XG4gICAgICAgIHkgKz0gYm91bmRzLnkgKyBib3VuZHMuaGVpZ2h0IC8gMjtcbiAgICAgIH1cbiAgICAgIHggLz0gc2hhcGVzLmxlbmd0aDtcbiAgICAgIHkgLz0gc2hhcGVzLmxlbmd0aDtcblxuICAgICAgZ3JvdXAueCA9IHg7XG4gICAgICBncm91cC55ID0geTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgICBzaGFwZS54ICs9IGdyb3VwLng7XG4gICAgICAgIHNoYXBlLnkgKz0gZ3JvdXAueTtcbiAgICAgIH1cblxuICAgICAgZ3JvdXAuYWRkKHNoYXBlcyk7XG4gICAgICB0aGlzLnN0YWdlLmFkZChncm91cCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RWRpdG9yKGVkaXRvcikge1xuICAgIGlmIChlZGl0b3IgIT09IHRoaXMuZWRpdG9yKSB7XG4gICAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IuaGlkZSgpO1xuICAgICAgICB0aGlzLmRvbS5hcHAucmVtb3ZlQ2hpbGQodGhpcy5kb20uYXBwLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5lZGl0b3IuZG9tKCkpO1xuICAgICAgdGhpcy5lZGl0b3Iuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGhpZGVBcmVhKCkge1xuICAvLyAgIGlmICh0aGlzLmFyZWEgPT0gJ3BhcGVyJykge1xuICAvLyAgICAgdGhpcy5oaWRlUGFwZXIoKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gc2hvd0FyZWEoYXJlYSkge1xuICAvLyAgIGlmIChhcmVhICE9PSB0aGlzLmFyZWEpIHtcbiAgLy8gICAgIHRoaXMuaGlkZUFyZWEoKTtcbiAgLy8gICAgIGlmIChhcmVhID09ICdwYXBlcicpIHtcbiAgLy8gICAgICAgdGhpcy5zaG93UGFwZXIoKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsc2UgaWYgKGFyZWEgPT0gJ3N0YWdlJykge1xuICAvL1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyBzaG93UGFwZXIoKSB7XG4gIC8vICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMucGFwZXIuZG9tKCkpO1xuICAvLyAgIHRoaXMuYXJlYSA9ICdwYXBlcic7XG4gIC8vIH1cbiAgLy9cbiAgLy8gaGlkZVBhcGVyKCkge1xuICAvLyAgIHRoaXMuZG9tLmFwcC5yZW1vdmVDaGlsZCh0aGlzLmRvbS5hcHAuZmlyc3RDaGlsZCk7XG4gIC8vICAgdGhpcy5hcmVhID0gbnVsbDtcbiAgLy8gfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIC8vIGlmIChldmVudC5rZXkgPT0gJ3AnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIHRoaXMuc2hvd0FyZWEoJ3BhcGVyJyk7XG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vXG4gICAgLy8gfVxuICAgIC8vIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnZScgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgdGhpcy5zdGFnZS5lZGl0KCk7XG4gICAgLy8gfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgaWYgKHRoaXMubW9kZSA9PSAncGFwZXInKSB7XG4gICAgLy8gICAgIHRoaXMucGFwZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gIH1cblxuICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ2NvbnRleHRtZW51Jykge1xuICAgICAgdGhpcy5vbkNvbnRleHRNZW51KGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL3NoYXBlJztcblxuY2xhc3MgR3JvdXAgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxuXG4gIGFkZChjb250ZW50KSB7XG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IGNvbnRlbnRbaV07XG4gICAgICAgIGlmIChzaGFwZSBpbnN0YW5jZW9mIFNoYXBlKSB0aGlzLmFkZChzaGFwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChzaGFwZS5oaXRUZXN0KHggLSB0aGlzLngsIHkgLSB0aGlzLnkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgbGV0IHJlY3RzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBsZXQgYm91bmRzID0gY2hpbGQuZ2V0Qm91bmRzKCk7XG4gICAgICByZWN0cy5wdXNoKGJvdW5kcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlY3RzLmxlbmd0aCkge1xuICAgICAgbGV0IHhtaW4gPSAwOyAvL051bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gMDsgLy9OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IDA7IC8vTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltYXggPSAwOyAvL051bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcmVjdCA9IHJlY3RzW2ldO1xuICAgICAgICB4bWluID0gcmVjdC54IDwgeG1pbiA/IHJlY3QueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSByZWN0LnkgPCB5bWluID8gcmVjdC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHJlY3QueCArIHJlY3Qud2lkdGggPiB4bWF4ID8gcmVjdC54ICsgcmVjdC53aWR0aCA6IHhtYXg7XG4gICAgICAgIHltYXggPSByZWN0LnkgKyByZWN0LmhlaWdodCA+IHltYXggPyByZWN0LnkgKyByZWN0LmhlaWdodCA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluICsgdGhpcy54LCB5bWluICsgdGhpcy55LCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUG9pbnRMaXN0IGZyb20gJy4uL2dlb20vcG9pbnRfbGlzdCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5jbGFzcyBTaGFwZSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZpbGwgPSBwYXJhbXMuZmlsbCB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlID0gcGFyYW1zLnN0cm9rZSB8fCBudWxsO1xuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSBwYXJhbXMuc3Ryb2tlV2lkdGggfHwgMTtcbiAgICB0aGlzLmNsb3NlZCA9IHBhcmFtcy5jbG9zZWQgfHwgZmFsc2U7XG5cbiAgICB0aGlzLnBvaW50TGlzdCA9IG5ldyBQb2ludExpc3QocGFyYW1zLnBvaW50cyk7XG5cbiAgICAvLyBsZXQgY2VudGVyID0gdGhpcy5wb2ludExpc3QuY2VudGVyKCk7XG4gICAgLy8gdGhpcy54ID0gY2VudGVyLng7XG4gICAgLy8gdGhpcy55ID0gY2VudGVyLnk7XG4gICAgLy9cbiAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzTGlzdC5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIGxldCBwID0gdGhpcy5wb2ludHNMaXN0LnBvaW50c1tpXTtcbiAgICAvLyAgIHAueCAtPSB0aGlzLng7XG4gICAgLy8gICBwLnkgLT0gdGhpcy55O1xuICAgIC8vIH1cbiAgfVxuXG4gIGdldFBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGxldCBib3VuZHMgPSB0aGlzLnBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgICBib3VuZHMueCArPSB0aGlzLng7XG4gICAgYm91bmRzLnkgKz0gdGhpcy55O1xuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBpbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHBvaW50cyA9IHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAwID0gcG9pbnRzW2kgLSAxXTtcbiAgICAgIGxldCBwMSA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChVdGlsLmxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlKHAwLngsIHAwLnksIHAxLngsIHAxLnksIHhtaW4gLSB0aGlzLngsIHltaW4gLSB0aGlzLnksIHhtYXggLSB0aGlzLngsIHltYXggLSB0aGlzLnkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBsZXQgcG9pbnRzID0gdGhpcy5wb2ludExpc3QucG9pbnRzO1xuICAgIGlmICh0aGlzLmZpbGwpIHtcbiAgICAgIHJldHVybiBVdGlsLnBvaW50SW5Qb2x5Z29uKHBvaW50cywgeCAtIHRoaXMueCwgeSAtIHRoaXMueSk7XG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuIiwiaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmNsYXNzIFRleHQgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2V0U2l6ZShwYXJhbXMuc2l6ZSB8fCA0OCk7XG4gICAgdGhpcy5zZXRUZXh0KHBhcmFtcy5jb250ZW50KTtcbiAgfVxuXG4gIHNldFNpemUodmFsdWUpIHtcbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldFRleHQodmFsdWUpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiaW1wb3J0IHsgRXZlbnQsIEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmNsYXNzIFRyYW5zZm9ybSBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9XG5cbiAgZ2V0IHgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3g7XG4gIH1cblxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5feTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpcy5feCA9IHZhbHVlO1xuICAgIHRoaXMuZW1pdCgndmFsdWVjaGFuZ2UnKTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpcy5feSA9IHZhbHVlO1xuICAgIHRoaXMuZW1pdCgndmFsdWVjaGFuZ2UnKTtcbiAgfVxuXG4gIGFkZGVkVG9TdGFnZSgpIHtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybTtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4vZXZlbnRzJztcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgfVxuXG4gIHNob3coKSB7XG5cbiAgfVxuXG4gIGhpZGUoKSB7XG5cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XG4iLCJcbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFyYW1zKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgdHlwZTogdHlwZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFdmVudERpc3BhdGNoZXIsIEV2ZW50IH07XG4iLCJcbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yID0gcjtcbiAgfVxuXG4gIGludGVyc2VjdHNMaW5lU2VnbWVudCh4MSwgeTEsIHgyLCB5Mikge1xuXG4gIH1cblxuICBjb250YWluc1BvaW50KHgsIHkpIHtcbiAgICBsZXQgZHggPSB4IC0gdGhpcy54O1xuICAgIGxldCBkeSA9IHkgLSB0aGlzLnk7XG4gICAgbGV0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIHJldHVybiBkIDwgdGhpcy5yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcbiIsIlxuY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIHBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vcmVjdGFuZ2xlJztcblxuY2xhc3MgUG9pbnRMaXN0IHtcbiAgY29uc3RydWN0b3IocG9pbnRzKSB7XG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHMgfHwgW107XG4gIH1cblxuICAvLyBjZW50ZXIoKSB7XG4gIC8vICAgbGV0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG4gIC8vICAgcmV0dXJuIG5ldyBQb2ludChib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDIsIGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAvIDIpO1xuICAvLyB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbaV07XG4gICAgICAgIHhtaW4gPSBwLnggPCB4bWluID8gcC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHAueSA8IHltaW4gPyBwLnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcC54ID4geG1heCA/IHAueCA6IHhtYXg7XG4gICAgICAgIHltYXggPSBwLnkgPiB5bWF4ID8gcC55IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRMaXN0O1xuIiwiXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdyb3coYW1vdW50KSB7XG4gICAgdGhpcy54IC09IGFtb3VudDtcbiAgICB0aGlzLnkgLT0gYW1vdW50O1xuICAgIHRoaXMud2lkdGggKz0gYW1vdW50ICogMjtcbiAgICB0aGlzLmhlaWdodCArPSBhbW91bnQgKiAyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIC8vIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54ICogcmF0aW8sIHZlY3Rvci55ICogcmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih2ZWN0b3IueCAqIHJhdGlvLCB2ZWN0b3IueSAqIHJhdGlvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi9nZW9tL2NpcmNsZSc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL2VkaXRvcic7XG5pbXBvcnQgUG9pbnRlclRvb2wgZnJvbSAnLi90b29scy9wb2ludGVyX3Rvb2wnO1xuaW1wb3J0IFBlbmNpbFRvb2wgZnJvbSAnLi90b29scy9wZW5jaWxfdG9vbCc7XG5cbi8vIGxldCBTTkFQX1JBRElVUyA9IDM7XG4vLyBsZXQgQ09MT1JTID0gW1xuLy8gICAnd2hpdGUnLFxuLy8gICAnbGlnaHRncmF5Jyxcbi8vICAgJ2dyYXknLFxuLy8gICAnYmxhY2snXG4vLyBdO1xuXG5jbGFzcyBQYXBlciBleHRlbmRzIEVkaXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gbnVsbDtcbiAgICB0aGlzLnN0cm9rZSA9IG51bGw7XG5cbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncG9pbnRlci1jdXJzb3InKTtcblxuICAgIHRoaXMuY3Vyc29yWCA9IDA7XG4gICAgdGhpcy5jdXJzb3JZID0gMDtcblxuICAgIC8vIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BhcGVyLWN1cnNvcicpO1xuICAgIC8vIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ1BhcGVyJyk7XG4gICAgdGhpcy5zZXRUb29sKCdwZW5jaWwnKTtcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIGRyYXdTaGFwZShzaGFwZSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICAvLyBsZXQgdHggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgLy8gbGV0IHR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIC8vIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGxldCBzcCA9IHRoaXMud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIC8vIGxldCB4ID0gKHAueCArIHNwLngpID4+IDA7XG4gICAgICAvLyBsZXQgeSA9IChwLnkgKyBzcC55KSA+PiAwO1xuICAgICAgbGV0IHggPSAocC54ICsgc3AueCk7XG4gICAgICBsZXQgeSA9IChwLnkgKyBzcC55KTtcblxuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJBeGlzKHgsIHkpIHtcbiAgICBsZXQgc2l6ZSA9IDIwO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIGN0eC5tb3ZlVG8oeCAtIHNpemUsIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHNpemUsIHkpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHNpemUpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHNpemUpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHMoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAgIC8vIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgICAgbGV0IHAgPSB0aGlzLndvcmxkVG9TY3JlZW4oc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhwLng+PjAsIHAueT4+MCwgMywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5yZW5kZXJBeGlzKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNoYXBlc1tpXTtcbiAgICAgIHRoaXMuZHJhd1NoYXBlKHNoYXBlKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckhpbnRzKCk7XG5cbiAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICBjdHguc2F2ZSgpO1xuICAgICAgdGhpcy50b29sLnJlbmRlcihjdHgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgLy8gICB0aGlzLmRyYXdQYXRoKHsgcG9pbnRzOiB0aGlzLnBvaW50cywgZmlsbDogdGhpcy5maWxsLCBzdHJva2U6IHRoaXMuc3Ryb2tlIH0pO1xuICAgIC8vXG4gICAgLy8gICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgLy8gICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gICBsZXQgcCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgIC8vICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgLy8gICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAvLyAgIGN0eC5zdHJva2UoKTtcbiAgICAvL1xuICAgIC8vICAgbGV0IGNwID0gbmV3IFBvaW50KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAvLyAgIGxldCBwMCA9IHRoaXMucG9pbnRzWzBdO1xuICAgIC8vICAgaWYgKGNwLmRpc3RhbmNlKHAwKSA8IFNOQVBfUkFESVVTKSB7XG4gICAgLy8gICAgIGN0eC5hcmMocDAueCwgcDAueSwgNSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgIC8vICAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gIH1cblxuICBzY3JlZW5Ub1dvcmxkKHgsIHkpIHtcbiAgICBsZXQgdHggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgbGV0IHR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICByZXR1cm4gbmV3IFBvaW50KHggLSB0eCwgeSAtIHR5KTtcbiAgfVxuXG4gIHdvcmxkVG9TY3JlZW4oeCwgeSkge1xuICAgIGxldCB0eCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMjtcbiAgICBsZXQgdHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCArIHR4LCB5ICsgdHkpO1xuICB9XG5cbiAgZ2V0U2hhcGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNoYXBlcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIC8vIHRoaXMucG9pbnRzID0gW107XG4gICAgLy8gdGhpcy5zaGFwZXMgPSBbXTtcbiAgICAvLyB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLy8gc2V0RmlsbChmaWxsKSB7XG4gIC8vICAgdGhpcy5maWxsID0gZmlsbDtcbiAgLy8gICB0aGlzLnJlbmRlcigpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHNldFN0cm9rZShzdHJva2UpIHtcbiAgLy8gICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgLy8gICB0aGlzLnJlbmRlcigpO1xuICAvLyB9XG5cbiAgc2V0Q3Vyc29yKGN1cnNvcikge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZXRDdXJvcicsIGN1cnNvcik7XG4gICAgaWYgKHRoaXMuZWwuY29udGFpbnModGhpcy5jdXJzb3IpKSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcbiAgICB9XG4gICAgdGhpcy5jdXJzb3IgPSBjdXJzb3I7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmN1cnNvcik7XG4gIH1cblxuICBzZXRUb29sKHRvb2xOYW1lKSB7XG4gICAgaWYgKHRvb2xOYW1lICE9PSB0aGlzLnRvb2xOYW1lKSB7XG4gICAgICBpZiAodG9vbE5hbWUgPT0gJ3BvaW50ZXInKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQb2ludGVyVG9vbCgpO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy50b29sLm9uKCdzZWxlY3QnLCAoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocG9pbnQpO1xuICAgICAgICAgIC8vIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAgICAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyB0aGlzLnRvb2wub24oJ21hcnF1ZWUnLCAocmVjdCkgPT4ge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlY3QpO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRvb2xOYW1lID09ICdwZW5jaWwnKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQZW5jaWxUb29sKCk7XG4gICAgICAgIHRoaXMudG9vbC5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3NoYXBlJywgKHNoYXBlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9vbE5hbWUgPSB0b29sTmFtZTtcbiAgICAgIHRoaXMuc2V0Q3Vyc29yKHRoaXMudG9vbC5jdXJzb3IpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3Qoc2hhcGUpIHtcbiAgICAvLyB0aGlzLnNlbGVjdGlvbiA9IFsgc2hhcGUgXTtcbiAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3QnLCBzaGFwZSk7XG4gIH1cblxuICAvLyBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgLy8gICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAvLyAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gIC8vICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgLy8gICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gIC8vICAgICAgIGlmIChjaGlsZC5pbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpKSB7XG4gIC8vICAgICAgICAgc2VsZWN0aW9uLnB1c2goY2hpbGQpO1xuICAvLyAgICAgICAgIGNoaWxkLnNlbGVjdCgpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICAvLyB9XG5cbiAgLy8gaGl0VGVzdCh4LCB5KSB7XG4gIC8vICAgZm9yICh2YXIgaSA9IHRoaXMuc2hhcGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gIC8vICAgICBsZXQgY2hpbGQgPSB0aGlzLnNoYXBlc1tpXTtcbiAgLy8gICAgIGlmIChjaGlsZC5oaXRUZXN0KHgsIHkpKSB7XG4gIC8vICAgICAgIHJldHVybiBjaGlsZDtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIG51bGw7XG4gIC8vIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIHRoaXMuZG93blggPSBldmVudC5vZmZzZXRYO1xuICAgIC8vIHRoaXMuZG93blkgPSBldmVudC5vZmZzZXRZO1xuICAgIC8vXG4gICAgLy8gbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgLy8gaWYgKGhpdCkge1xuICAgIC8vICAgaWYgKHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKGhpdCkpIHtcbiAgICAvL1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIC8vICAgICB0aGlzLnNlbGVjdGlvbiA9IFsgaGl0IF07XG4gICAgLy8gICAgIGhpdC5zZWxlY3QoKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yWCArICdweCc7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUudG9wID0gdGhpcy5jdXJzb3JZICsgJ3B4JztcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gJ3EnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuc2V0VG9vbCgncG9pbnRlcicpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ2InICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAgIHRoaXMuc2V0VG9vbCgncGVuY2lsJyk7XG4gICAgfVxuICAgIC8vIGlmIChldmVudC5rZXkgPT0gJ3MnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIHRoaXMuc2V0U3Ryb2tlKHRoaXMuc3Ryb2tlID8gbnVsbCA6ICdibGFjaycpXG4gICAgLy8gfVxuICAgIC8vIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnMCcgJiYgIWV2ZW50LnJlcGVhdCkge1xuICAgIC8vICAgdGhpcy5zZXRGaWxsKG51bGwpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmIChbJzEnLCAnMicsICczJywgJzQnXS5pbmNsdWRlcyhldmVudC5rZXkpICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgIGxldCBjb2xvciA9IENPTE9SU1twYXJzZUludChldmVudC5rZXkpIC0gMV07XG4gICAgLy8gICBpZiAoY29sb3IgIT09IHVuZGVmaW5lZClcbiAgICAvLyAgICAgdGhpcy5zZXRGaWxsKGNvbG9yKTtcbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICBpZiAodGhpcy5tb2RlID09ICdkcmF3Jykge1xuICAgIC8vICAgICBpZiAoZXZlbnQua2V5ID09ICdFc2NhcGUnICYmICFldmVudC5yZXBlYXQpIHtcbiAgICAvLyAgICAgICB0aGlzLmNhbmNlbFBhdGgoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJyAmJiAhZXZlbnQucmVwZWF0KSB7XG4gICAgLy8gICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgZWxzZSB7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9vbCkge1xuICAgICAgdGhpcy50b29sLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFwZXI7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi4vLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUG9pbnRMaXN0IGZyb20gJy4uLy4uL2dlb20vcG9pbnRfbGlzdCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vLi4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgVG9vbCBmcm9tICcuL3Rvb2wnO1xuXG5jbGFzcyBQZW5jaWxUb29sIGV4dGVuZHMgVG9vbCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnN0cm9rZSA9ICdncmF5JztcbiAgICB0aGlzLmZpbGwgPSAnbGlnaHRncmF5JztcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncGVuY2lsLWN1cnNvcicpO1xuICB9XG5cbiAgY2xvc2VQYXRoKGNsb3NlZD1mYWxzZSkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgcG9pbnRMaXN0ID0gbmV3IFBvaW50TGlzdCh0aGlzLnBvaW50cyk7XG4gICAgICBsZXQgYm91bmRzID0gcG9pbnRMaXN0LmdldEJvdW5kcygpO1xuICAgICAgbGV0IHggPSBib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDI7XG4gICAgICBsZXQgeSA9IGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAvIDI7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50TGlzdC5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHAgPSBwb2ludExpc3QucG9pbnRzW2ldO1xuICAgICAgICBwLnggLT0geDtcbiAgICAgICAgcC55IC09IHk7XG4gICAgICB9XG4gICAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoeyBwb2ludHM6IHBvaW50TGlzdC5wb2ludHMsIGNsb3NlZDogY2xvc2VkLCBmaWxsOiB0aGlzLmZpbGwsIHN0cm9rZTogdGhpcy5zdHJva2UgfSk7XG4gICAgICBsZXQgcCA9IHBhcGVyLnNjcmVlblRvV29ybGQoeCwgeSk7XG4gICAgICBzaGFwZS54ID0gcC54O1xuICAgICAgc2hhcGUueSA9IHAueTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgdGhpcy5lbWl0KCdzaGFwZScsIHNoYXBlKTtcbiAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgfVxuICAgIC8vIHRoaXMucG9pbnRzID0gW107XG4gICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGRyYXdQYXRoKGN0eCwgcG9pbnRzLCBzdHJva2UsIGZpbGwsIGNsb3NlZD1mYWxzZSkge1xuICAgIC8vIGxldCBwb2ludHMgPSBwYXJhbXMucG9pbnRzIHx8IFtdO1xuICAgIC8vIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8vIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2UgIT09IHVuZGVmaW5lZCA/IChzdHJva2UgPyBzdHJva2UgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGwgIT09IHVuZGVmaW5lZCA/IChmaWxsID8gZmlsbCA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcblxuICAgIGlmIChzdHJva2UgPT0gbnVsbCkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2N5YW4nO1xuICAgIH1cblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuXG4gICAgICB0aGlzLmRyYXdQYXRoKGN0eCwgdGhpcy5wb2ludHMsIHRoaXMuc3Ryb2tlLCB0aGlzLmZpbGwpO1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgbGV0IGNwID0gbmV3IFBvaW50KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGxldCBwMCA9IHRoaXMucG9pbnRzWzBdO1xuICAgICAgaWYgKGNwLmRpc3RhbmNlKHAwKSA8IDUpIHtcbiAgICAgICAgY3R4LmFyYyhwMC54LCBwMC55LCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgbGV0IHAgPSBuZXcgUG9pbnQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChwLmRpc3RhbmNlKHRoaXMucG9pbnRzWzBdKSA8IDUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7fVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQub2Zmc2V0WDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5vZmZzZXRZO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge31cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVuY2lsVG9vbDtcbiIsImltcG9ydCBUb29sIGZyb20gJy4vdG9vbCc7XG5cbmNsYXNzIFBvaW50ZXJUb29sIGV4dGVuZHMgVG9vbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwb2ludGVyLWN1cnNvcicpO1xuXG4gICAgLy8gdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnUGFwZXIgdG9vbDonLCBwYXBlci50b29sTmFtZSk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBsZXQgc3AgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHgsIHkpO1xuICAgIGZvciAodmFyIGkgPSBwYXBlci5zaGFwZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBzaGFwZSA9IHBhcGVyLnNoYXBlc1tpXTtcbiAgICAgIC8vIGxldCBwID0gcGFwZXIud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcbiAgICAgIGlmIChzaGFwZS5oaXRUZXN0KHNwLngsIHNwLnkpKSB7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICAgIGlmIChjaGlsZC5pbnRlcnNlY3RzUmVjdGFuZ2xlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpKSB7XG4gICAgICAgICAgc2VsZWN0aW9uLnB1c2goY2hpbGQpO1xuICAgICAgICAgIGNoaWxkLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHBhcGVyLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbW92ZWJ5JywgZHgsIGR5KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcGVyLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gcGFwZXIuc2VsZWN0aW9uW2ldO1xuICAgICAgc2hhcGUueCArPSBkeDtcbiAgICAgIHNoYXBlLnkgKz0gZHk7XG4gICAgfVxuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBkcmFnT24oKSB7XG4gICAgdGhpcy5tb2RlID0gJ2RyYWcnO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkcmFnJyk7XG4gIH1cblxuICBkcmFnT2ZmKCkge1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgLy8gY29uc29sZS5sb2coJ2RyYWdvZmYnKTtcbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVuZGVyJywgdGhpcy5zZWxlY3Rpb24pO1xuXG4gICAgLy8gY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuICAgIC8vIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZXhjbHVzaW9uJztcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh0aGlzLmRvd25YLCB0aGlzLmRvd25ZKTtcbiAgICAvLyBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5kb3duWSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgLy8gY3R4LmxpbmVUbyh0aGlzLmRvd25YLCB0aGlzLmN1cnNvclkpO1xuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAvL1xuICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgcGFwZXIuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBsZXQgc2hhcGUgPSBwYXBlci5zZWxlY3Rpb25baV07XG4gICAgLy8gICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gICBjdHguYXJjKHNoYXBlLnggPj4gMCwgc2hhcGUueSA+PiAwLCAzLCAwLCBNYXRoLlBJICogMik7XG4gICAgLy8gICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgdGhpcy5kb3duWCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmRvd25ZID0gdGhpcy5jdXJzb3JZO1xuXG4gICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgcGFwZXIuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcGVyLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgdGhpcy5kcmFnT2ZmKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50Lm9mZnNldFk7XG5cbiAgICB0aGlzLmRlbHRhWCA9IHRoaXMubGFzdFggPyB0aGlzLmN1cnNvclggLSB0aGlzLmxhc3RYIDogMDtcbiAgICB0aGlzLmRlbHRhWSA9IHRoaXMubGFzdFkgPyB0aGlzLmN1cnNvclkgLSB0aGlzLmxhc3RZIDogMDtcblxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeSh0aGlzLmRlbHRhWCwgdGhpcy5kZWx0YVkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChldmVudC5idXR0b25zICYgMSkge1xuICAgICAgICBsZXQgZHggPSB0aGlzLmN1cnNvclggLSB0aGlzLmRvd25YO1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmN1cnNvclkgLSB0aGlzLmRvd25ZO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID4gMiB8fCBNYXRoLmFicyhkeSkgPiAyKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KTtcbiAgICAgICAgICB0aGlzLmRyYWdPbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0WCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmxhc3RZID0gdGhpcy5jdXJzb3JZO1xuICAgIC8vIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG5cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludGVyVG9vbDtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2V2ZW50cy5qcyc7XG5cbmNsYXNzIFRvb2wgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIFxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2w7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9kaXNwbGF5L2dyb3VwJztcbmltcG9ydCBQYXBlciBmcm9tICcuL3BhcGVyL3BhcGVyJztcblxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuXG4gICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcih7IHZpc2libGU6IGZhbHNlIH0pO1xuXG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2UnKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIC8vIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgnc3RhZ2UtY3Vyc29yJyk7XG5cbiAgICAvLyB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucGFwZXIuZG9tKCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgYWRkKHRyYW5zZm9ybSkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0cmFuc2Zvcm0pO1xuICAgIHRyYW5zZm9ybS5hZGRlZFRvU3RhZ2UoKTtcbiAgICB0cmFuc2Zvcm0ub24oJ3ZhbHVlY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZWRpdCcpO1xuICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3Rpb24nKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5zZWxlY3Rpb25bMF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG4gICAgICAgIGdyb3VwLnggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSA+PiAwO1xuICAgICAgICBncm91cC55ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpID4+IDA7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGdyb3VwO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2VsZWN0TWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICBpZiAoeW1pbiA+IHltYXgpIFt5bWluLCB5bWF4XSA9IFsgeW1heCwgeW1pbiBdO1xuICAgIGxldCBzZWxlY3Rpb24gPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgICBpZiAoY2hpbGQuaW50ZXJzZWN0c1JlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSkge1xuICAgICAgICAgIHNlbGVjdGlvbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICBjaGlsZC5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25baV0uZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXJTaGFwZShzaGFwZSwgeCwgeSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgcmVuZGVySGludHModHJhbnNmb3JtKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmFuc2Zvcm0uc2VsZWN0ZWQgPyAncmVkJyA6ICdibHVlJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnksIDMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGxldCBib3VuZHMgPSB0cmFuc2Zvcm0uZ2V0Qm91bmRzKCk7XG4gICAgaWYgKGJvdW5kcykge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJhbnNmb3JtLnNlbGVjdGVkID8gJ3JlZCcgOiAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgucmVjdChib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJPYmplY3QodHJhbnNmb3JtKSB7XG4gICAgaWYgKHRyYW5zZm9ybSBpbnN0YW5jZW9mIEdyb3VwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYW5zZm9ybS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSB0cmFuc2Zvcm0uY2hpbGRyZW5baV07XG4gICAgICAgIHRoaXMucmVuZGVyU2hhcGUoY2hpbGQsIHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0cmFuc2Zvcm0uc2VsZWN0ZWQpIHRoaXMucmVuZGVySGludHModHJhbnNmb3JtKTtcbiAgfVxuXG4gIHJlbmRlckF4aXMoeCwgeSkge1xuICAgIGxldCBzaXplID0gMTA7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpZ2h0Z3JheSc7XG4gICAgY3R4Lm1vdmVUbyh4IC0gc2l6ZSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgc2l6ZSwgeSk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5IC0gc2l6ZSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgc2l6ZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIHRoaXMucmVuZGVyT2JqZWN0KGNoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDAuNTtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICB0aGlzLnJlbmRlckF4aXModGhpcy5jb250ZXh0LngsIHRoaXMuY29udGV4dC55KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2dyYXknO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdleGNsdXNpb24nO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLmRvd25YLCB0aGlzLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LmxpbmVUbyh0aGlzLmRvd25YLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgaXRlbS54ICs9IGR4O1xuICAgICAgaXRlbS55ICs9IGR5O1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYmVnaW5EcmFnKCkge1xuICAgIHRoaXMubW9kZSA9ICdkcmFnJztcbiAgfVxuXG4gIGNhbmNlbERyYWcoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgfVxuXG4gIGJlZ2luTWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgdGhpcy5tb2RlID0gJ21hcnF1ZWUnO1xuICB9XG5cbiAgY2FuY2VsTWFycXVlZSgpIHtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5oaXRUZXN0KHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzaG93UGFwZXIoKSB7XG5cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2Rvd24nKTtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuXG4gICAgdGhpcy5kb3duWCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmRvd25ZID0gdGhpcy5jdXJzb3JZO1xuXG4gICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKGhpdCkpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFsgaGl0IF07XG4gICAgICAgIGhpdC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKVxuICAgICAgdGhpcy5jYW5jZWxEcmFnKCk7XG4gICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgdGhpcy5zZWxlY3RNYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIHRoaXMuY2FuY2VsTWFycXVlZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcblxuICAgIHRoaXMuZGVsdGFYID0gdGhpcy5sYXN0WCA/IHRoaXMuY3Vyc29yWCAtIHRoaXMubGFzdFggOiAwO1xuICAgIHRoaXMuZGVsdGFZID0gdGhpcy5sYXN0WSA/IHRoaXMuY3Vyc29yWSAtIHRoaXMubGFzdFkgOiAwO1xuXG4gICAgaWYgKGV2ZW50LmJ1dHRvbnMgJiAxKSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkodGhpcy5kZWx0YVgsIHRoaXMuZGVsdGFZKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBkeCA9IHRoaXMuY3Vyc29yWCAtIHRoaXMuZG93blg7XG4gICAgICAgIGxldCBkeSA9IHRoaXMuY3Vyc29yWSAtIHRoaXMuZG93blk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID49IDIgfHwgTWF0aC5hYnMoZHkpID49IDIpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5EcmFnKCk7XG4gICAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJlZ2luTWFycXVlZSh0aGlzLmRvd25YLCB0aGlzLmRvd25ZLCB0aGlzLmRvd25YICsgZHgsIHRoaXMuZG93blkgKyBkeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIC8vIGlmIChoaXQpIHtcbiAgICAgIC8vICAgdGhpcy50YXJnZXQgPSBoaXQ7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgIC8vICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgICB0aGlzLmxhc3RYID0gdGhpcy5jdXJzb3JYO1xuICAgIHRoaXMubGFzdFkgPSB0aGlzLmN1cnNvclk7XG5cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICAgIHRoaXMuZWRpdCgpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlO1xuIiwiXG5jbGFzcyBTdmcge1xuICBzdGF0aWMgZWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHR5cGUpO1xuICAgIGZvciAobGV0IG5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBzdGF0aWMgc3ZnKGF0dHJpYnV0ZXMpIHtcbiAgICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cmlidXRlc1tuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnO1xuIiwiXG4vLyBDb3B5cmlnaHQgKGMpIDE5NzAtMjAwMywgV20uIFJhbmRvbHBoIEZyYW5rbGluXG4vLyBodHRwczovL3dyZi5lY3NlLnJwaS5lZHUvL1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sXG5cbmZ1bmN0aW9uIHBvaW50SW5Qb2x5Z29uKHBvaW50cywgdGVzdHgsIHRlc3R5KSB7XG4gIGxldCBpLCBqLCBjID0gMDtcbiAgZm9yIChsZXQgaSA9IDAsIGogPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICBpZiAoKChwb2ludHNbaV0ueSA+IHRlc3R5KSAhPSAocG9pbnRzW2pdLnkgPiB0ZXN0eSkpICYmXG4gICAgICAodGVzdHggPCAocG9pbnRzW2pdLnggLSBwb2ludHNbaV0ueCkgKiAodGVzdHkgLSBwb2ludHNbaV0ueSkgLyAocG9pbnRzW2pdLnkgLSBwb2ludHNbaV0ueSkgKyBwb2ludHNbaV0ueCkpXG4gICAgICBjID0gIWM7XG4gIH1cbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlKHgxLCB5MSwgeDIsIHkyLCB4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gIC8vIENvbXBsZXRlbHkgb3V0c2lkZS5cbiAgaWYgKCh4MSA8PSB4bWluICYmIHgyIDw9IHhtaW4pIHx8ICh5MSA8PSB5bWluICYmIHkyIDw9IHltaW4pIHx8XG4gICAgICAoeDEgPj0geG1heCAmJiB4MiA+PSB4bWF4KSB8fCAoeTEgPj0geW1heCAmJiB5MiA+PSB5bWF4KSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG0gPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG5cbiAgdmFyIHkgPSBtICogKHhtaW4gLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB5ID0gbSAqICh4bWF4IC0geDEpICsgeTE7XG4gIGlmICh5ID4geW1pbiAmJiB5IDwgeW1heCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIHggPSAoeW1pbiAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB4ID0gKHltYXggLSB5MSkgLyBtICsgeDE7XG4gIGlmICh4ID4geG1pbiAmJiB4IDwgeG1heCkgcmV0dXJuIHRydWU7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlOiBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSxcbiAgcG9pbnRJblBvbHlnb246IHBvaW50SW5Qb2x5Z29uXG59XG4iXSwic291cmNlUm9vdCI6IiJ9