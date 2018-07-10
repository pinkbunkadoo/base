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

var _stage = __webpack_require__(/*! ./stage */ "./src/stage.js");

var _stage2 = _interopRequireDefault(_stage);

var _paper = __webpack_require__(/*! ./paper/paper */ "./src/paper/paper.js");

var _paper2 = _interopRequireDefault(_paper);

var _library = __webpack_require__(/*! ./library */ "./src/library.js");

var _library2 = _interopRequireDefault(_library);

var _text = __webpack_require__(/*! ./display/text */ "./src/display/text.js");

var _text2 = _interopRequireDefault(_text);

var _sequence = __webpack_require__(/*! ./display/sequence */ "./src/display/sequence.js");

var _sequence2 = _interopRequireDefault(_sequence);

var _frame = __webpack_require__(/*! ./display/frame */ "./src/display/frame.js");

var _frame2 = _interopRequireDefault(_frame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.dom = [];
    this.editors = [];
    this.sequences = [];
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.editors.paper = new _paper2.default();
      this.editors.library = new _library2.default();
      this.editors.stage = new _stage2.default();

      global.paper = this.editors.paper;

      this.dom.app = document.getElementById('app');

      var buttons = document.createElement('div');
      buttons.classList.add('editor-buttons');

      var button = void 0;

      button = document.createElement('div');
      button.classList.add('button');
      button.innerHTML = 'save';
      button.onclick = function () {
        _this.save();
      };
      buttons.appendChild(button);

      button = document.createElement('div');
      button.classList.add('button');
      button.innerHTML = 'library';
      button.onclick = function () {
        _this.setEditor(_this.editors.library);
      };
      buttons.appendChild(button);

      button = document.createElement('div');
      button.classList.add('button');
      button.innerHTML = 'stage';
      button.onclick = function () {
        _this.setEditor(_this.editors.stage);
      };
      buttons.appendChild(button);

      button = document.createElement('div');
      button.classList.add('button');
      button.innerHTML = 'paper';
      button.onclick = function () {
        _this.setEditor(_this.editors.paper);
      };
      buttons.appendChild(button);

      this.dom.app.appendChild(buttons);
      this.dom.buttons = buttons;

      this.load();

      this.setEditor(this.editors.paper);

      var sequence = new _sequence2.default();
      sequence.add(new _frame2.default());
      this.sequences.push(sequence);
      this.editors.paper.setSequence(sequence);

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
    key: 'save',
    value: function save() {
      var magic = { title: 'hey' };
      localStorage['magic'] = JSON.stringify(magic);
      console.log('saved!');
    }
  }, {
    key: 'load',
    value: function load() {
      var magic = localStorage['magic'];
      if (magic) {
        console.log(JSON.parse(magic));
        console.log('loaded!');
      }
    }
  }, {
    key: 'setEditor',
    value: function setEditor(editor) {
      if (editor !== this.editor) {
        if (this.editor) {
          this.editor.hide();
          this.dom.app.removeChild(this.editor.dom());
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
      var _this2 = this;

      if (!this.resizeTimerId) {
        this.resizeTimerId = setTimeout(function () {
          _this2.editors.paper.setSize(window.innerWidth, window.innerHeight);
          _this2.resizeTimerId = null;
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
  global.app = app;
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
  }, {
    key: "copy",
    value: function copy() {
      var frame = new Frame();
      for (var i = 0; i < this.shapes.length; i++) {
        frame.add(this.shapes[i].copy());
      }
      return frame;
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

    if (params.pointList) _this.pointList = params.pointList.copy();else _this.pointList = new _point_list2.default();
    return _this;
  }

  _createClass(Shape, [{
    key: 'copy',
    value: function copy() {
      return new Shape({
        x: this.x, y: this.y, pointList: this.pointList, stroke: this.stroke,
        fill: this.fill, closed: this.closed
      });
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

var _point = __webpack_require__(/*! ../geom/point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transform = function (_EventDispatcher) {
  _inherits(Transform, _EventDispatcher);

  function Transform() {
    _classCallCheck(this, Transform);

    var _this = _possibleConstructorReturn(this, (Transform.__proto__ || Object.getPrototypeOf(Transform)).call(this));

    _this.position = new _point2.default();
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
      return this.position.x;
    },
    set: function set(value) {
      this.position.x = value;
      this.emit('valuechange');
    }
  }, {
    key: 'y',
    get: function get() {
      return this.position.y;
    },
    set: function set(value) {
      this.position.y = value;
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

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this));

    _this.el = document.createElement('div');
    return _this;
  }

  _createClass(Editor, [{
    key: 'dom',
    value: function dom() {
      return this.el;
    }
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

    this.x = x || 0;
    this.y = y || 0;
  }

  _createClass(Point, [{
    key: "distance",
    value: function distance(point) {
      var dx = this.x - point.x;
      var dy = this.y - point.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, {
    key: "add",
    value: function add(p) {
      this.x += p.x;
      this.y += p.y;
    }
  }, {
    key: "subtract",
    value: function subtract(p) {
      this.x -= p.x;
      this.y -= p.y;
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
  }, {
    key: "pointInside",
    value: function pointInside(x, y) {
      return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
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

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _editor = __webpack_require__(/*! ./editor */ "./src/editor.js");

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Library = function (_Editor) {
  _inherits(Library, _Editor);

  function Library() {
    _classCallCheck(this, Library);

    return _possibleConstructorReturn(this, (Library.__proto__ || Object.getPrototypeOf(Library)).call(this));
  }

  return Library;
}(_editor2.default);

exports.default = Library;

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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _util = __webpack_require__(/*! ../util */ "./src/util.js");

var _util2 = _interopRequireDefault(_util);

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

var _path_tool = __webpack_require__(/*! ./tools/path_tool */ "./src/paper/tools/path_tool.js");

var _path_tool2 = _interopRequireDefault(_path_tool);

var _point_tool = __webpack_require__(/*! ./tools/point_tool */ "./src/paper/tools/point_tool.js");

var _point_tool2 = _interopRequireDefault(_point_tool);

var _pencil_tool = __webpack_require__(/*! ./tools/pencil_tool */ "./src/paper/tools/pencil_tool.js");

var _pencil_tool2 = _interopRequireDefault(_pencil_tool);

var _triangle_tool = __webpack_require__(/*! ./tools/triangle_tool */ "./src/paper/tools/triangle_tool.js");

var _triangle_tool2 = _interopRequireDefault(_triangle_tool);

var _player = __webpack_require__(/*! ./player */ "./src/paper/player.js");

var _player2 = _interopRequireDefault(_player);

var _undo_stack = __webpack_require__(/*! ./undo_stack */ "./src/paper/undo_stack.js");

var _undo_stack2 = _interopRequireDefault(_undo_stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paper = function (_Editor) {
  _inherits(Paper, _Editor);

  function Paper() {
    _classCallCheck(this, Paper);

    var _this = _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).call(this));

    _this.palette = ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff'];

    _this.points = [];
    _this.shapes = [];
    _this.fill = _this.palette[2];
    _this.stroke = null; //this.palette[0];

    _this.selection = [];
    _this.clipboard = [];
    _this.sequence = new _sequence2.default();

    _this.el.classList.add('paper');

    _this.canvas = document.createElement('canvas');
    _this.canvas.width = window.innerWidth;
    _this.canvas.height = window.innerHeight;
    _this.setSize(window.innerWidth, window.innerHeight);

    _this.el.appendChild(_this.canvas);

    _this.el.addEventListener('pointerleave', _this);
    _this.el.addEventListener('pointerenter', _this);

    _this.cursorX = 0;
    _this.cursorY = 0;

    _this.addFrame();
    _this.goFrame(0);

    _this.initialised = true;
    return _this;
  }

  _createClass(Paper, [{
    key: 'show',
    value: function show() {
      _get(Paper.prototype.__proto__ || Object.getPrototypeOf(Paper.prototype), 'show', this).call(this);
      this.setTool('path');
    }
  }, {
    key: 'hide',
    value: function hide() {
      _get(Paper.prototype.__proto__ || Object.getPrototypeOf(Paper.prototype), 'hide', this).call(this);
    }
  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      this.canvas.width = width;
      this.canvas.height = height;

      if (this.initialised) this.render();
    }
  }, {
    key: 'setSequence',
    value: function setSequence(sequence) {
      this.sequence = sequence;
      this.goFrame(0);
    }
  }, {
    key: 'renderShape',
    value: function renderShape(shape) {
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
        var y = p.y * -1 + sp.y;

        if (j == 0) ctx.moveTo(x, y);else ctx.lineTo(x, y);
      }

      if (shape.closed) ctx.closePath();

      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }
  }, {
    key: 'renderOutline',
    value: function renderOutline(shape, stroke) {
      var ctx = this.canvas.getContext('2d');
      ctx.save();

      ctx.strokeStyle = stroke || 'black';
      ctx.beginPath();

      var sp = this.worldToScreen(shape.x, shape.y);
      var points = shape.getPoints();

      for (var j = 0; j < points.length; j++) {
        var p = points[j];
        var x = p.x + sp.x;
        var y = p.y * -1 + sp.y;

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
      ctx.moveTo(x, y);
      ctx.lineTo(x + size, y);
      ctx.moveTo(x, y);
      ctx.lineTo(x, y - size);
      ctx.stroke();
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
          this.renderOutline(shape, 'rgb(192, 240, 192)');
        }
      }

      for (var _i = 0; _i < this.frame.shapes.length; _i++) {
        var _shape = this.frame.shapes[_i];
        this.renderShape(_shape);
      }

      if (this.tool) {
        ctx.save();
        this.tool.render(ctx);
        ctx.restore();
      }

      ctx.textBaseline = 'top';
      ctx.font = '18px sans-serif';
      ctx.fillStyle = 'black';
      ctx.fillText(this.frameNo + 1 + ':' + this.sequence.length, 20, 20);

      ctx.textBaseline = 'top';
      ctx.font = '18px sans-serif';
      ctx.fillStyle = 'black';
      ctx.fillText(this.toolName, 20, this.canvas.height - 32);

      ctx.fillStyle = this.fill || 'red';
      ctx.fillRect(100, 20, 20, 20);

      ctx.fillStyle = this.stroke || 'red';
      ctx.fillRect(140, 20, 20, 20);
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
    key: 'selectMarquee',
    value: function selectMarquee(xmin, ymin, xmax, ymax) {
      var selection = [];
      for (var i = 0; i < this.frame.shapes.length; i++) {
        var shape = this.frame.shapes[i];
        var points = shape.pointList.points;
        var count = shape.closed ? points.length + 1 : points.length;
        for (var j = 1; j < count; j++) {
          var p0 = points[j - 1];
          var p1 = j == points.length ? points[0] : points[j];
          var sp0 = paper.worldToScreen(p0.x + shape.x, p0.y + shape.y);
          var sp1 = paper.worldToScreen(p1.x + shape.x, p1.y + shape.y);
          if (_util2.default.lineIntersectsRectangle(sp0.x, sp0.y, sp1.x, sp1.y, xmin, ymin, xmax, ymax)) {
            selection.push(shape);
            break;
          }
        }
      }
      this.selection = selection;
    }
  }, {
    key: 'screenToWorld',
    value: function screenToWorld(x, y) {
      var tx = this.canvas.width / 2;
      var ty = this.canvas.height / 2;
      return new _point2.default(x - tx, (y - ty) * -1);
    }
  }, {
    key: 'worldToScreen',
    value: function worldToScreen(x, y) {
      var tx = this.canvas.width / 2;
      var ty = this.canvas.height / 2;
      return new _point2.default(x + tx, y * -1 + ty);
    }
  }, {
    key: 'pointInShape',
    value: function pointInShape(shape, x, y) {
      var points = shape.getPoints();
      var sp = this.screenToWorld(x, y);
      return _util2.default.pointInPolygon(points, sp.x - shape.x, sp.y - shape.y);
    }
  }, {
    key: 'pointOnShapeLimit',
    value: function pointOnShapeLimit(shape, x, y) {
      var margin = 5;
      var temp = new _point2.default();
      var point = this.screenToWorld(x, y);
      point.subtract(shape.position);

      var points = shape.getPoints();
      var count = shape.closed ? points.length + 1 : points.length;

      if (points[0].distance(point) < margin) return points[0];

      for (var i = 1; i < count; i++) {
        var p1 = points[i - 1];
        var p2 = i == points.length ? points[0] : points[i];

        if (p2.distance(point) < margin) return p2;

        var x1 = p2.x - p1.x;
        var y1 = p2.y - p1.y;
        var x2 = point.x - p1.x;
        var y2 = point.y - p1.y;

        var dot = x1 * x1 + y1 * y1;
        if (dot > 0) {
          var ratio = (x2 * x1 + y2 * y1) / dot;
          if (ratio >= 0 && ratio <= 1) {
            temp.x = x1 * ratio + p1.x;
            temp.y = y1 * ratio + p1.y;
            if (temp.distance(point) < margin) {
              return { point: temp, index: i };
            }
          }
        }
      }
      return null;
    }
  }, {
    key: 'setCursor',
    value: function setCursor(cursor) {
      if (this.el.contains(this.cursor)) {
        this.el.removeChild(this.cursor);
      }
      this.cursor = cursor;
      this.el.appendChild(this.cursor);
      this.cursor.style.left = this.cursorX + 'px';
      this.cursor.style.top = this.cursorY + 'px';
    }
  }, {
    key: 'setTool',
    value: function setTool(toolName) {
      var _this2 = this;

      if (toolName !== this.toolName) {
        if (toolName == 'path') {
          this.tool = new _path_tool2.default();
          this.tool.on('update', function () {
            _this2.render();
          });
          this.tool.on('change', function () {
            _this2.saveUndo();
          });
        } else if (toolName == 'point') {
          this.tool = new _point_tool2.default();
          this.tool.on('update', function () {
            _this2.render();
          });
        } else if (toolName == 'pencil') {
          this.selection = [];
          this.tool = new _pencil_tool2.default();
          this.tool.on('update', function () {
            _this2.render();
          });
          this.tool.on('shape', function (shape) {
            _this2.addShape(shape);
          });
        } else if (toolName == 'triangle') {
          this.tool = new _triangle_tool2.default();
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
        // console.log(this.toolName);
        this.setCursor(this.tool.getCursor());
        this.render();
      }
    }
  }, {
    key: 'undo',
    value: function undo() {
      if (this.undoStack.undo()) {
        var frame = this.undoStack.current();
        if (frame) {
          this.frame.shapes = frame.shapes;
          this.selection = [];
          this.render();
        }
      }
    }
  }, {
    key: 'redo',
    value: function redo() {
      if (this.undoStack.redo()) {
        var frame = this.undoStack.current();
        if (frame) {
          this.frame.shapes = frame.shapes;
          this.selection = [];
          this.render();
        }
      }
    }
  }, {
    key: 'saveUndo',
    value: function saveUndo() {
      var frame = this.frame.copy();
      this.undoStack.push(frame);
    }
  }, {
    key: 'addShape',
    value: function addShape(shape) {
      this.frame.add(shape);
      this.saveUndo();
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
    key: 'clearFrame',
    value: function clearFrame() {
      this.saveUndo();
      this.frame.clear();
      this.render();
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
        this.undoStack = new _undo_stack2.default();
        this.saveUndo();
        this.render();
      }
    }
  }, {
    key: 'deleteSelected',
    value: function deleteSelected() {
      if (this.selection.length) {
        for (var i = 0; i < this.selection.length; i++) {
          var shape = this.selection[i];
          this.frame.remove(shape);
        }
        this.selection = [];
        this.saveUndo();
        this.render();
      }
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
        this.saveUndo();
        this.render();
      }
    }
  }, {
    key: 'setFill',
    value: function setFill(fill) {
      this.fill = fill;
      for (var i = 0; i < this.selection.length; i++) {
        var shape = this.selection[i];
        shape.fill = this.fill;
      }
      this.render();
    }
  }, {
    key: 'setStroke',
    value: function setStroke(stroke) {
      this.stroke = stroke;
      for (var i = 0; i < this.selection.length; i++) {
        var shape = this.selection[i];
        shape.stroke = this.stroke;
      }
      this.render();
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
        this.saveUndo();
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
        this.saveUndo();
        this.render();
      }
    }
  }, {
    key: 'play',
    value: function play() {
      var _this5 = this;

      this.player = new _player2.default(this.canvas, this.sequence);
      this.player.on('done', function () {
        _this5.player = null;
        _this5.render();
      });
      this.player.play();
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      this.downX = event.pageX;
      this.downY = event.pageY;
      this.down = true;
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      this.down = false;
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorX = event.pageX;
      this.cursorY = event.pageY;

      this.deltaX = this.lastX !== undefined ? this.cursorX - this.lastX : 0;
      this.deltaY = this.lastY !== undefined ? this.cursorY - this.lastY : 0;

      if (this.cursor) {
        this.cursor.style.left = this.cursorX + 'px';
        this.cursor.style.top = this.cursorY + 'px';
      }

      this.lastX = this.cursorX;
      this.lastY = this.cursorY;

      if (this.initialised) {
        // let ctx = this.canvas.getContext('2d');
        // let imageData = ctx.getImageData(0, 0, this.width, this.height);
        // let pixels = imageData.data;
        // let offset = this.cursorY * this.width + this.cursorX;
        // if (pixels[offset*4] <= 16) {
        //   this.cursor.style.filter = 'invert(100%)';
        // }
        // else {
        //   this.cursor.style.filter = 'none';
        // }
      }
    }
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {}
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      var key = event.key;
      if (!event.repeat) {
        if (key == 'q') {
          this.setTool('path');
        } else if (key == 'e') {
          this.setTool('point');
        } else if (key == 'b') {
          this.setTool('pencil');
        } else if (key == 't') {
          this.setTool('triangle');
        } else if (key == '.' || key == '>') {
          if (event.shiftKey) {
            this.addFrame(this.frameNo + 1);
          }
          this.goFrame(this.frameNo + 1);
        } else if (key == ',' || key == '<') {
          if (event.shiftKey) {
            this.addFrame(this.frameNo);
            this.goFrame(this.frameNo);
          } else {
            this.goFrame(this.frameNo - 1);
          }
        } else if (key == 'c') {
          if (event.metaKey || event.ctrlKey) {
            this.copySelected();
          }
        } else if (key == 'v') {
          if (event.metaKey || event.ctrlKey) {
            this.paste();
          }
        } else if (key == 'a') {
          this.selectAll();
        } else if (key == 'x') {
          this.deleteSelected();
        } else if (key == 'X') {
          this.deleteFrame(this.frameNo);
        } else if (key == 'z' && event.metaKey) {
          if (event.shiftKey) this.redo();else this.undo();
        } else if (key == 'ArrowUp') {
          if (event.metaKey || event.ctrlKey) this.bringToFront();
        } else if (key == 'ArrowDown') {
          if (event.metaKey || event.ctrlKey) this.sendToBack();
        } else if (key == ' ') {
          this.play();
        } else if (key == ')') {
          this.setStroke(null);
        } else if (key == '0') {
          this.setFill(null);
        } else {
          var set = ['1', '2', '3', '4', '5', '6', '!', '@', '£', '$', '%', '^'];
          var index = set.indexOf(key);
          if (index !== -1) {
            if (index > 5) {
              this.setStroke(this.palette[index - 6] || null);
            } else {
              this.setFill(this.palette[index] || null);
            }
            this.render();
          }
        }
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {}
  }, {
    key: 'onPointerEnter',
    value: function onPointerEnter(event) {
      this.cursor.style.display = 'block';
    }
  }, {
    key: 'onPointerLeave',
    value: function onPointerLeave(event) {
      this.cursor.style.display = 'none';
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
      } else if (event.type == 'blur') {
        this.onBlur(event);
      } else if (event.type == 'pointerenter') {
        this.onPointerEnter(event);
      } else if (event.type == 'pointerleave') {
        this.onPointerLeave(event);
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
      ctx.fillText(this.frameNo + 1, 100, 20);

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
          var y = p.y * -1 + sp.y;

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
    key: 'done',
    value: function done() {
      this.pause();
      this.emit('done');
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
      if (!event.repeat) {
        if (event.key == ' ' || event.key == 'Escape' || event.key == 'Enter') {
          this.done();
        }
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      this.done();
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      this.done();
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'keydown') {
        this.onKeyDown(event);
      } else if (event.type == 'mousedown') {
        this.onMouseDown(event);
      } else if (event.type == 'blur') {
        this.onBlur(event);
      }
    }
  }]);

  return Player;
}(_events.EventDispatcher);

exports.default = Player;

/***/ }),

/***/ "./src/paper/tools/path_tool.js":
/*!**************************************!*\
  !*** ./src/paper/tools/path_tool.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _util2 = _interopRequireDefault(_util);

var _point = __webpack_require__(/*! ../../geom/point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

var _vector = __webpack_require__(/*! ../../geom/vector */ "./src/geom/vector.js");

var _vector2 = _interopRequireDefault(_vector);

var _tool = __webpack_require__(/*! ./tool */ "./src/paper/tools/tool.js");

var _tool2 = _interopRequireDefault(_tool);

var _shape = __webpack_require__(/*! ../../display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PathTool = function (_Tool) {
  _inherits(PathTool, _Tool);

  function PathTool() {
    _classCallCheck(this, PathTool);

    return _possibleConstructorReturn(this, (PathTool.__proto__ || Object.getPrototypeOf(PathTool)).call(this));
    // this.cursor = document.createElement('div');
    // this.cursor.classList.add('path-cursor');
  }

  _createClass(PathTool, [{
    key: 'getCursor',
    value: function getCursor() {
      var ctx = this.cursor.getContext('2d');
      ctx.save();
      ctx.fillStyle = 'black';
      ctx.strokeStyle = 'white';
      // ctx.fillRect(0, 0, this.cursor.width, this.cursor.height);
      ctx.translate(0.5, 0.5);
      ctx.beginPath();
      ctx.moveTo(1, 1);
      ctx.lineTo(9, 1);
      ctx.lineTo(1, 9);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      var el = document.createElement('div');
      el.style.position = 'absolute';
      // el.style.border = '1px solid black';
      // el.style.backgroundColor = 'red';
      // el.style.width = '16px';
      // el.style.height = '16px';
      // el.style.zIndex = 9000;
      el.appendChild(this.cursor);
      return el;
    }
  }, {
    key: 'update',
    value: function update() {
      this.emit('update');
    }
  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      var sp = paper.screenToWorld(x, y);
      for (var i = paper.frame.shapes.length - 1; i >= 0; i--) {
        var shape = paper.frame.shapes[i];
        var points = shape.getPoints();
        if (paper.pointOnShapeLimit(shape, x, y)) {
          return shape;
        } else {
          if (shape.fill) {
            if (paper.pointInShape(shape, x, y)) {
              return shape;
            }
          }
        }
      }
      return null;
    }
  }, {
    key: 'moveSelectionBy',
    value: function moveSelectionBy(dx, dy) {
      for (var i = 0; i < paper.selection.length; i++) {
        var shape = paper.selection[i];
        shape.x += dx;
        shape.y += dy * -1;
      }
      this.changed = true;
    }
  }, {
    key: 'dragOn',
    value: function dragOn() {
      this.mode = 'drag';
    }
  }, {
    key: 'dragOff',
    value: function dragOff() {
      if (this.changed) this.emit('change');
      this.mode = null;
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      ctx.font = '10px sans-serif';
      ctx.textBaseline = 'top';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'blue';

      ctx.translate(0.5, 0.5);

      if (paper.selection.length) {
        ctx.strokeStyle = 'red';
        for (var i = 0; i < paper.selection.length; i++) {
          var shape = paper.selection[i];
          var p = paper.worldToScreen(shape.x, shape.y);
          var x = p.x >> 0,
              y = p.y >> 0;

          ctx.globalCompositeOperation = 'exclusion';
          ctx.beginPath();
          ctx.strokeStyle = 'white';
          ctx.moveTo(x, y);
          ctx.lineTo(x + 5, y);
          ctx.moveTo(x, y);
          ctx.lineTo(x, y - 5);
          ctx.stroke();
        }
      }

      if (this.mode == 'marquee') {
        ctx.strokeStyle = 'gray';
        ctx.globalCompositeOperation = 'exclusion';
        ctx.beginPath();
        ctx.moveTo(paper.downX, paper.downY);
        ctx.lineTo(paper.cursorX, paper.downY);
        ctx.lineTo(paper.cursorX, paper.cursorY);
        ctx.lineTo(paper.downX, paper.cursorY);
        ctx.closePath();
        ctx.stroke();
      }

      // let p0 = new Point(paper.downX, paper.downY);
      // let p1 = new Point(150, 150);
      // let p2 = new Point(250, 300);
      //
      // ctx.beginPath();
      // ctx.moveTo(p1.x, p1.y);
      // ctx.lineTo(p2.x, p2.y);
      // ctx.strokeStyle = 'blue';
      // ctx.stroke();
      //
      // let hit = this.pointOnEdge(p0, p1, p2);
      // if (hit) {
      //   ctx.fillStyle = 'red';
      //   ctx.fillRect(hit.x-2, hit.y-2, 4, 4);
      // }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      if (event.button == 0) {
        var modifier = event.shiftKey || event.metaKey;

        var hit = this.hitTest(paper.downX, paper.downY);
        if (hit) {
          if (modifier) {
            if (paper.selection.includes(hit)) {
              paper.selection.splice(paper.selection.indexOf(hit), 1);
            } else {
              paper.selection.push(hit);
            }
          } else {
            if (!paper.selection.includes(hit)) {
              paper.selection = [hit];
            }
          }
          this.target = hit;
        } else {
          this.target = null;
          paper.selection = [];
        }
        this.update();
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      var modifier = event.shiftKey || event.metaKey;
      if (this.mode == 'drag') {
        this.dragOff();
      } else if (this.mode == 'marquee') {
        var xmin = paper.downX,
            ymin = paper.downY;
        var xmax = paper.cursorX,
            ymax = paper.cursorY;
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
        }paper.selectMarquee(xmin, ymin, xmax, ymax);
        this.mode = null;
      } else {
        // if (event.button == 0) {
        //   let hit = this.hitTest(paper.cursorX, paper.cursorY);
        //   if (hit && this.target == hit) {
        //     if (modifier) {
        //     }
        //     else {
        //       paper.selection = [hit];
        //     }
        //   }
        // }
      }

      this.update();
    }
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {}
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      if (this.mode == 'drag') {
        this.moveSelectionBy(paper.deltaX, paper.deltaY);
        this.update();
      } else if (this.mode == 'marquee') {
        this.update();
      } else {
        if (paper.down) {
          var dx = paper.cursorX - paper.downX;
          var dy = paper.cursorY - paper.downY;
          if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
            if (this.target) {
              this.moveSelectionBy(dx, dy);
              this.dragOn();
            } else {
              this.mode = 'marquee';
            }
          }
        }
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {}
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      if (this.mode == 'drag') this.dragOff();else this.mode = null;
      this.update();
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
      } else if (event.type == 'blur') {
        this.onBlur(event);
      }
    }
  }]);

  return PathTool;
}(_tool2.default);

exports.default = PathTool;

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
    _this.stroke = 0;
    _this.fill = 0;

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
        var wp = paper.screenToWorld(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
        var points = pointList.points;

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var pp = paper.screenToWorld(p.x, p.y);
          p.x = pp.x - wp.x;
          p.y = pp.y - wp.y;
        }

        var shape = new _shape2.default({ x: wp.x, y: wp.y, pointList: pointList,
          fill: paper.fill, stroke: paper.stroke, closed: closed });
        this.emit('shape', shape);
        this.points = [];
      }
    }
  }, {
    key: 'cancelPath',
    value: function cancelPath() {
      this.points = [];
      this.emit('update');
    }
  }, {
    key: 'renderPath',
    value: function renderPath(ctx, points, stroke, fill) {
      var closed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      ctx.strokeStyle = stroke !== undefined ? stroke ? stroke : 'transparent' : 'transparent';
      ctx.fillStyle = fill !== undefined ? fill ? fill : 'transparent' : 'transparent';

      if (points.length <= 2 && stroke == null) {
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
        this.renderPath(ctx, this.points, paper.stroke, paper.fill);

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
          ctx.arc(p0.x, p0.y, 3, 0, Math.PI * 2);
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
      } else {
        if (event.button == 2) {
          this.closePath();
        }
      }
      this.emit('update');
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
    value: function onKeyDown(event) {
      if (!event.repeat) {
        if (event.key == 'Escape') {
          this.cancelPath();
        } else if (event.key == 'Enter') {
          this.closePath();
        }
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      this.cancelPath();
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
      } else if (event.type == 'blur') {
        this.onBlur(event);
      }
    }
  }]);

  return PencilTool;
}(_tool2.default);

exports.default = PencilTool;

/***/ }),

/***/ "./src/paper/tools/point_tool.js":
/*!***************************************!*\
  !*** ./src/paper/tools/point_tool.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(/*! ../../util */ "./src/util.js");

var _util2 = _interopRequireDefault(_util);

var _point = __webpack_require__(/*! ../../geom/point */ "./src/geom/point.js");

var _point2 = _interopRequireDefault(_point);

var _rectangle = __webpack_require__(/*! ../../geom/rectangle */ "./src/geom/rectangle.js");

var _rectangle2 = _interopRequireDefault(_rectangle);

var _tool = __webpack_require__(/*! ./tool */ "./src/paper/tools/tool.js");

var _tool2 = _interopRequireDefault(_tool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PointTool = function (_Tool) {
  _inherits(PointTool, _Tool);

  function PointTool() {
    _classCallCheck(this, PointTool);

    var _this = _possibleConstructorReturn(this, (PointTool.__proto__ || Object.getPrototypeOf(PointTool)).call(this));

    _this.cursor = document.createElement('div');
    _this.cursor.classList.add('point-cursor');
    _this.points = [];
    return _this;
  }

  _createClass(PointTool, [{
    key: 'render',
    value: function render(ctx) {
      if (paper.selection.length) {
        for (var i = 0; i < paper.selection.length; i++) {
          var shape = paper.selection[i];
          var points = shape.getPoints();
          var sp = paper.worldToScreen(shape.x, shape.y);

          ctx.globalCompositeOperation = 'exclusion';
          ctx.fillStyle = 'white';
          ctx.strokeStyle = 'white';

          for (var j = 0; j < points.length; j++) {
            var p = points[j];
            var pp = paper.worldToScreen(p.x + shape.x, p.y + shape.y);
            var selected = this.points.includes(p);
            var _x = pp.x >> 0;
            var _y = pp.y >> 0;
            if (selected) {
              ctx.beginPath();
              ctx.rect(_x - 3, _y - 3, 5, 5);
              ctx.fill();
            } else {
              ctx.beginPath();
              ctx.rect(_x + 0.5 - 3, _y + 0.5 - 3, 4, 4);
              ctx.stroke();
            }
          }

          var x = (sp.x >> 0) + 0.5;
          var y = (sp.y >> 0) + 0.5;
          ctx.beginPath();
          ctx.strokeStyle = 'white';
          ctx.moveTo(x, y);
          ctx.lineTo(x + 5, y);
          ctx.moveTo(x, y);
          ctx.lineTo(x, y - 5);
          ctx.stroke();

          ctx.globalCompositeOperation = 'source-over';
        }
      }
      if (this.mode == 'marquee') {
        ctx.translate(0.5, 0.5);
        ctx.strokeStyle = 'gray';
        ctx.globalCompositeOperation = 'exclusion';
        ctx.beginPath();
        ctx.moveTo(paper.downX, paper.downY);
        ctx.lineTo(paper.cursorX, paper.downY);
        ctx.lineTo(paper.cursorX, paper.cursorY);
        ctx.lineTo(paper.downX, paper.cursorY);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      this.emit('update');
    }
  }, {
    key: 'hitTest',
    value: function hitTest(x, y) {
      var sp = paper.screenToWorld(x, y);
      for (var i = paper.frame.shapes.length - 1; i >= 0; i--) {
        var shape = paper.frame.shapes[i];
        var points = shape.getPoints();
        if (paper.pointOnShapeLimit(shape, x, y)) {
          return shape;
        } else {
          if (shape.fill) {
            if (paper.pointInShape(shape, x, y)) {
              return shape;
            }
          }
        }
      }
      return null;
    }
  }, {
    key: 'pointHitTest',
    value: function pointHitTest(x, y) {
      for (var i = 0; i < paper.selection.length; i++) {
        var shape = paper.selection[i];
        var points = shape.getPoints();

        var wp = paper.screenToWorld(x, y);
        wp.subtract(shape.position);

        for (var j = 0; j < points.length; j++) {
          var p = points[j];
          var d = p.distance(wp);
          if (d < 7) {
            return p;
          }
        }
      }
      return null;
    }
  }, {
    key: 'movePointsBy',
    value: function movePointsBy(dx, dy) {
      for (var i = 0; i < this.points.length; i++) {
        var p = this.points[i];
        p.x += dx;
        p.y += dy;
      }
      this.changed = true;
    }
  }, {
    key: 'insertPoint',
    value: function insertPoint(x, y) {
      for (var i = 0; i < paper.selection.length; i++) {
        var shape = paper.selection[i];
        var hit = paper.pointOnShapeLimit(shape, x, y);
        if (hit) {
          var points = shape.getPoints();
          points.splice(hit.index, 0, hit.point);
          break;
        }
      }
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      if (event.button == 0) {
        var modifier = event.shiftKey || event.metaKey;
        if (event.altKey) {
          this.insertPoint(paper.downX, paper.downY);
        } else {
          var hit = this.pointHitTest(paper.downX, paper.downY);
          if (hit) {
            if (!this.points.includes(hit)) {
              this.points = [hit];
            }
          } else {
            this.points = [];
            var _hit = this.hitTest(paper.downX, paper.downY);
            if (_hit) {
              this.target = _hit;
            } else {
              this.target = null;
            }
          }
        }
        this.update();
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      var modifier = event.shiftKey || event.metaKey;

      if (this.mode == 'drag') {
        this.mode = null;
      } else if (this.mode == 'marquee') {
        this.points = [];

        var xmin = paper.downX,
            ymin = paper.downY;
        var xmax = paper.cursorX,
            ymax = paper.cursorY;

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
        }var p1 = paper.screenToWorld(xmin, ymin);
        var p2 = paper.screenToWorld(xmax, ymax);

        for (var i = 0; i < paper.selection.length; i++) {
          var shape = paper.selection[i];
          var points = shape.getPoints();
          for (var j = 0; j < points.length; j++) {
            var p = points[j];
            var x = p.x + shape.x;
            var y = p.y + shape.y;
            if (x > p1.x && y < p1.y && x < p2.x && y > p2.y) {
              this.points.push(p);
            }
          }
        }
        this.mode = null;
      } else {
        if (event.button == 0) {
          var hit = this.hitTest(paper.cursorX, paper.cursorY);
          if (hit && hit == this.target) {
            if (modifier) {
              if (paper.selection.includes(hit)) {
                paper.selection.splice(paper.selection.indexOf(hit), 1);
              } else {
                paper.selection.push(hit);
              }
            } else {
              paper.selection = [hit];
            }
          } else {
            paper.selection = [];
            this.points = [];
          }
        }
      }
      this.update();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      if (this.mode == 'drag') {
        this.movePointsBy(paper.deltaX, -paper.deltaY);
      } else if (this.mode == 'marquee') {} else {
        if (paper.down) {
          if (this.points.length) {
            var dx = paper.cursorX - paper.downX;
            var dy = paper.cursorY - paper.downY;
            if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
              this.mode = 'drag';
              this.movePointsBy(dx, -dy);
            }
          } else {
            this.mode = 'marquee';
          }
        }
      }
      this.update();
    }
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {
      this.insertPoint(paper.downX, paper.downY);
      this.update();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {}
  }, {
    key: 'onBlur',
    value: function onBlur(event) {}
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
      } else if (event.type == 'blur') {
        this.onBlur(event);
      }
    }
  }]);

  return PointTool;
}(_tool2.default);

exports.default = PointTool;

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

    var _this = _possibleConstructorReturn(this, (Tool.__proto__ || Object.getPrototypeOf(Tool)).call(this));

    _this.cursor = document.createElement('canvas');
    _this.cursor.width = 16;
    _this.cursor.height = 16;
    return _this;
  }

  _createClass(Tool, [{
    key: 'getCursor',
    value: function getCursor() {
      return this.cursor;
    }
  }, {
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

/***/ "./src/paper/tools/triangle_tool.js":
/*!******************************************!*\
  !*** ./src/paper/tools/triangle_tool.js ***!
  \******************************************/
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

var TriangleTool = function (_Tool) {
  _inherits(TriangleTool, _Tool);

  function TriangleTool() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TriangleTool);

    var _this = _possibleConstructorReturn(this, (TriangleTool.__proto__ || Object.getPrototypeOf(TriangleTool)).call(this));

    _this.points = [];
    _this.stroke = 0;
    _this.fill = 0;

    _this.cursor = document.createElement('div');
    _this.cursor.classList.add('pencil-cursor');
    return _this;
  }

  _createClass(TriangleTool, [{
    key: 'closePath',
    value: function closePath() {
      var closed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.points.length == 3) {
        var pointList = new _point_list2.default(this.points);
        var bounds = pointList.getBounds();
        var wp = paper.screenToWorld(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
        var points = pointList.points;

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          var pp = paper.screenToWorld(p.x, p.y);
          p.x = pp.x - wp.x;
          p.y = pp.y - wp.y;
        }

        var shape = new _shape2.default({ x: wp.x, y: wp.y, pointList: pointList,
          fill: paper.fill, stroke: paper.stroke, closed: closed });

        this.emit('shape', shape);
      }
      this.points = [];
    }
  }, {
    key: 'cancelPath',
    value: function cancelPath() {
      this.points = [];
      this.emit('update');
    }
  }, {
    key: 'renderPath',
    value: function renderPath(ctx, points, stroke, fill) {
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
        this.renderPath(ctx, this.points, paper.stroke, paper.fill);

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
        this.points.push(p);
        // console.log(this.points.length);
        if (this.points.length == 3) {
          this.closePath(true);
        }
        // console.log('down', p);
      }
      this.emit('update');
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {
      if (event.button == 0) {
        if (this.points.length == 1) {
          var p = new _point2.default(event.offsetX, event.offsetY);
          this.points.push(p);
        }
        // console.log('up');
      }
    }
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
    value: function onKeyDown(event) {
      if (!event.repeat) {
        if (event.key == 'Escape') {
          this.cancelPath();
        } else if (event.key == 'Enter') {
          this.closePath();
        }
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      this.cancelPath();
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
      } else if (event.type == 'blur') {
        this.onBlur(event);
      }
    }
  }]);

  return TriangleTool;
}(_tool2.default);

exports.default = TriangleTool;

/***/ }),

/***/ "./src/paper/undo_stack.js":
/*!*********************************!*\
  !*** ./src/paper/undo_stack.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UndoStack = function () {
  function UndoStack() {
    _classCallCheck(this, UndoStack);

    this.stack = [];
    this.marker = 0;
  }

  _createClass(UndoStack, [{
    key: "push",
    value: function push(item) {
      this.stack.splice(this.marker + 1);
      this.stack.push(item);
      this.marker = this.stack.length - 1;
    }
  }, {
    key: "current",
    value: function current() {
      if (this.stack.length) {
        return this.stack[this.marker];
      }
      return null;
    }
  }, {
    key: "undo",
    value: function undo() {
      if (this.marker > 0) {
        this.marker--;
        return true;
      }
      return false;
    }
  }, {
    key: "redo",
    value: function redo() {
      if (this.marker < this.stack.length - 1) {
        this.marker++;
        return true;
      }
      return false;
    }
  }]);

  return UndoStack;
}();

exports.default = UndoStack;

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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var _util2 = _interopRequireDefault(_util);

var _shape = __webpack_require__(/*! ./display/shape */ "./src/display/shape.js");

var _shape2 = _interopRequireDefault(_shape);

var _group = __webpack_require__(/*! ./display/group */ "./src/display/group.js");

var _group2 = _interopRequireDefault(_group);

var _paper = __webpack_require__(/*! ./paper/paper */ "./src/paper/paper.js");

var _paper2 = _interopRequireDefault(_paper);

var _editor = __webpack_require__(/*! ./editor */ "./src/editor.js");

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stage = function (_Editor) {
  _inherits(Stage, _Editor);

  function Stage() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Stage);

    var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this));

    _this.el.classList.add('stage');
    _this.canvas = document.createElement('canvas');
    _this.canvas.width = params.width == undefined ? 320 : params.width;
    _this.canvas.height = params.height == undefined ? 200 : params.height;
    _this.el.appendChild(_this.canvas);
    return _this;
  }

  _createClass(Stage, [{
    key: 'show',
    value: function show() {
      _get(Stage.prototype.__proto__ || Object.getPrototypeOf(Stage.prototype), 'show', this).call(this);
    }
  }, {
    key: 'hide',
    value: function hide() {
      _get(Stage.prototype.__proto__ || Object.getPrototypeOf(Stage.prototype), 'hide', this).call(this);
    }
  }, {
    key: 'add',
    value: function add(transform) {
      var _this2 = this;

      this.children.push(transform);
      transform.addedToStage();
      transform.on('valuechange', function () {
        _this2.render();
      });
      this.render();
    }
  }, {
    key: 'edit',
    value: function edit() {}
  }, {
    key: 'selectMarquee',
    value: function selectMarquee(xmin, ymin, xmax, ymax) {}
  }, {
    key: 'deselect',
    value: function deselect() {}
  }, {
    key: 'renderShape',
    value: function renderShape(shape, x, y) {}
  }, {
    key: 'render',
    value: function render() {
      var ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: 'moveSelectionBy',
    value: function moveSelectionBy(dx, dy) {}
  }, {
    key: 'beginDrag',
    value: function beginDrag() {}
  }, {
    key: 'cancelDrag',
    value: function cancelDrag() {}
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
      // for (var i = this.children.length - 1; i >= 0; i--) {
      //   let child = this.children[i];
      //   if (child.hitTest(x, y)) {
      //     return child;
      //   }
      // }
      // return null;
    }
  }, {
    key: 'showPaper',
    value: function showPaper() {}
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {
      // this.cursorX = event.pageX - this.el.offsetLeft;
      // this.cursorY = event.pageY - this.el.offsetTop;
      //
      // this.downX = this.cursorX;
      // this.downY = this.cursorY;
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
    value: function onMouseUp(event) {
      // if (this.mode == 'drag')
      //   this.cancelDrag();
      // else if (this.mode == 'marquee') {
      //   this.selectMarquee(this.downX, this.downY, this.cursorX, this.cursorY);
      //   this.cancelMarquee();
      // }
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      // this.cursorX = event.pageX - this.el.offsetLeft;
      // this.cursorY = event.pageY - this.el.offsetTop;
      //
      // this.deltaX = this.lastX ? this.cursorX - this.lastX : 0;
      // this.deltaY = this.lastY ? this.cursorY - this.lastY : 0;
      //
      // if (event.buttons & 1) {
      //   if (this.mode == 'drag') {
      //     if (this.selection.length) {
      //       this.moveSelectionBy(this.deltaX, this.deltaY);
      //     }
      //   }
      //   else if (this.mode == 'marquee') {
      //     this.render();
      //   }
      //   else {
      //     let dx = this.cursorX - this.downX;
      //     let dy = this.cursorY - this.downY;
      //     if (this.selection.length) {
      //       if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) {
      //         this.beginDrag();
      //         this.moveSelectionBy(dx, dy);
      //       }
      //     }
      //     else {
      //       this.beginMarquee(this.downX, this.downY, this.downX + dx, this.downY + dy);
      //     }
      //   }
      // }
      // else {
      // }
      //
      // this.lastX = this.cursorX;
      // this.lastY = this.cursorY;
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {}
  }, {
    key: 'onDblClick',
    value: function onDblClick(event) {
      // this.edit();
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
}(_editor2.default);

exports.default = Stage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NlcXVlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci90b29scy9wYXRoX3Rvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyL3Rvb2xzL3BlbmNpbF90b29sLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci90b29scy9wb2ludF90b29sLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci90b29scy90b29sLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci90b29scy90cmlhbmdsZV90b29sLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci91bmRvX3N0YWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJlZGl0b3JzIiwic2VxdWVuY2VzIiwicGFwZXIiLCJsaWJyYXJ5Iiwic3RhZ2UiLCJnbG9iYWwiLCJhcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9ucyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJidXR0b24iLCJpbm5lckhUTUwiLCJvbmNsaWNrIiwic2F2ZSIsImFwcGVuZENoaWxkIiwic2V0RWRpdG9yIiwibG9hZCIsInNlcXVlbmNlIiwicHVzaCIsInNldFNlcXVlbmNlIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hZ2ljIiwidGl0bGUiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInBhcnNlIiwiZWRpdG9yIiwiaGlkZSIsInJlbW92ZUNoaWxkIiwic2hvdyIsImV2ZW50IiwicmVwZWF0Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJyZXNpemVUaW1lcklkIiwic2V0VGltZW91dCIsInNldFNpemUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ0eXBlIiwib25Db250ZXh0TWVudSIsIm9uUmVzaXplIiwib25LZXlEb3duIiwib25Nb3VzZURvd24iLCJoYW5kbGVFdmVudCIsImluaXQiLCJGcmFtZSIsInNoYXBlcyIsInNoYXBlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZnJhbWUiLCJpIiwibGVuZ3RoIiwiY29weSIsIkdyb3VwIiwicGFyYW1zIiwiY2hpbGRyZW4iLCJjb250ZW50IiwiQXJyYXkiLCJ4IiwieSIsImhpdFRlc3QiLCJyZWN0cyIsImNoaWxkIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwieG1pbiIsInltaW4iLCJ4bWF4IiwieW1heCIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIlNlcXVlbmNlIiwiZnJhbWVzIiwidW5kZWZpbmVkIiwiZnJhbWVObyIsIlNoYXBlIiwiZmlsbCIsInN0cm9rZSIsImNsb3NlZCIsInBvaW50TGlzdCIsInBvaW50cyIsIlRleHQiLCJzaXplIiwic2V0VGV4dCIsInZhbHVlIiwiVHJhbnNmb3JtIiwicG9zaXRpb24iLCJzZWxlY3RlZCIsImVtaXQiLCJFZGl0b3IiLCJlbCIsIkV2ZW50IiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2lyY2xlIiwiciIsIngxIiwieTEiLCJ4MiIsInkyIiwiZHgiLCJkeSIsImQiLCJNYXRoIiwic3FydCIsIlBvaW50IiwicG9pbnQiLCJwIiwiUG9pbnRMaXN0IiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJORUdBVElWRV9JTkZJTklUWSIsIlJlY3RhbmdsZSIsImFtb3VudCIsIlZlY3RvciIsInZlY3RvciIsImRvdCIsInJhdGlvIiwiTGlicmFyeSIsIlBhcGVyIiwicGFsZXR0ZSIsInNlbGVjdGlvbiIsImNsaXBib2FyZCIsImNhbnZhcyIsImN1cnNvclgiLCJjdXJzb3JZIiwiYWRkRnJhbWUiLCJnb0ZyYW1lIiwiaW5pdGlhbGlzZWQiLCJzZXRUb29sIiwicmVuZGVyIiwiZ2V0UG9pbnRzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwic3AiLCJ3b3JsZFRvU2NyZWVuIiwiaiIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInJlc3RvcmUiLCJ0cmFuc2xhdGUiLCJmaWxsUmVjdCIsInJlbmRlckF4aXMiLCJnZXRGcmFtZSIsInJlbmRlck91dGxpbmUiLCJyZW5kZXJTaGFwZSIsInRvb2wiLCJ0ZXh0QmFzZWxpbmUiLCJmb250IiwiZmlsbFRleHQiLCJ0b29sTmFtZSIsImNvdW50IiwicDAiLCJwMSIsInNwMCIsInNwMSIsImxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlIiwidHgiLCJ0eSIsInNjcmVlblRvV29ybGQiLCJwb2ludEluUG9seWdvbiIsIm1hcmdpbiIsInRlbXAiLCJzdWJ0cmFjdCIsImRpc3RhbmNlIiwicDIiLCJjdXJzb3IiLCJjb250YWlucyIsInN0eWxlIiwibGVmdCIsInRvcCIsIm9uIiwic2F2ZVVuZG8iLCJhZGRTaGFwZSIsInNldEN1cnNvciIsImdldEN1cnNvciIsInVuZG9TdGFjayIsInVuZG8iLCJjdXJyZW50IiwicmVkbyIsImNsZWFyRnJhbWUiLCJyZW1vdmUiLCJjbGVhciIsImZpbHRlciIsImluY2x1ZGVzIiwic2V0IiwiY29uY2F0IiwicGxheWVyIiwicGxheSIsImRvd25YIiwicGFnZVgiLCJkb3duWSIsInBhZ2VZIiwiZG93biIsImRlbHRhWCIsImxhc3RYIiwiZGVsdGFZIiwibGFzdFkiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiY29weVNlbGVjdGVkIiwicGFzdGUiLCJzZWxlY3RBbGwiLCJkZWxldGVTZWxlY3RlZCIsImRlbGV0ZUZyYW1lIiwiYnJpbmdUb0Zyb250Iiwic2VuZFRvQmFjayIsInNldFN0cm9rZSIsInNldEZpbGwiLCJkaXNwbGF5Iiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbkRibENsaWNrIiwib25CbHVyIiwib25Qb2ludGVyRW50ZXIiLCJvblBvaW50ZXJMZWF2ZSIsIlBsYXllciIsImZwcyIsInBsYXlpbmciLCJmcmFtZUlkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RlcCIsImJpbmQiLCJ0aW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJ0aW1lRGVsdGEiLCJwcmV2aW91c1RpbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInBhdXNlIiwiZG9uZSIsIlBhdGhUb29sIiwicG9pbnRPblNoYXBlTGltaXQiLCJwb2ludEluU2hhcGUiLCJjaGFuZ2VkIiwibW9kZSIsInRleHRBbGlnbiIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsIm1vZGlmaWVyIiwiaGl0IiwidGFyZ2V0IiwidXBkYXRlIiwiZHJhZ09mZiIsInNlbGVjdE1hcnF1ZWUiLCJtb3ZlU2VsZWN0aW9uQnkiLCJhYnMiLCJkcmFnT24iLCJQZW5jaWxUb29sIiwid3AiLCJwcCIsInJlbmRlclBhdGgiLCJjcCIsImFyYyIsIlBJIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjYW5jZWxQYXRoIiwiUG9pbnRUb29sIiwiYWx0S2V5IiwiaW5zZXJ0UG9pbnQiLCJwb2ludEhpdFRlc3QiLCJtb3ZlUG9pbnRzQnkiLCJUb29sIiwiVHJpYW5nbGVUb29sIiwiVW5kb1N0YWNrIiwic3RhY2siLCJtYXJrZXIiLCJpdGVtIiwiU3RhZ2UiLCJ0cmFuc2Zvcm0iLCJhZGRlZFRvU3RhZ2UiLCJjbGVhclJlY3QiLCJ0ZXN0eCIsInRlc3R5IiwiYyIsIm0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7OztBQUNB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QWlEeEMsSUFBakQsRUFBdURDLElBQXZELEVBQTZEQyxJQUE3RCxFQUFtRUMsSUFBbkUsRUFBeUU7QUFDdkU7QUFDQSxNQUFLa0MsTUFBTXJDLElBQU4sSUFBY3VDLE1BQU12QyxJQUFyQixJQUErQnNDLE1BQU1yQyxJQUFOLElBQWN1QyxNQUFNdkMsSUFBbkQsSUFDQ29DLE1BQU1uQyxJQUFOLElBQWNxQyxNQUFNckMsSUFEckIsSUFDK0JvQyxNQUFNbkMsSUFBTixJQUFjcUMsTUFBTXJDLElBRHZELEVBRUUsT0FBTyxLQUFQOztBQUVGLE1BQUkwTixJQUFJLENBQUNyTCxLQUFLRixFQUFOLEtBQWFDLEtBQUtGLEVBQWxCLENBQVI7O0FBRUEsTUFBSTNDLElBQUltTyxLQUFLN04sT0FBT3FDLEVBQVosSUFBa0JDLEVBQTFCO0FBQ0EsTUFBSTVDLElBQUlPLElBQUosSUFBWVAsSUFBSVMsSUFBcEIsRUFBMEIsT0FBTyxJQUFQOztBQUUxQlQsTUFBSW1PLEtBQUszTixPQUFPbUMsRUFBWixJQUFrQkMsRUFBdEI7QUFDQSxNQUFJNUMsSUFBSU8sSUFBSixJQUFZUCxJQUFJUyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCLE1BQUlWLElBQUksQ0FBQ1EsT0FBT3FDLEVBQVIsSUFBY3VMLENBQWQsR0FBa0J4TCxFQUExQjtBQUNBLE1BQUk1QyxJQUFJTyxJQUFKLElBQVlQLElBQUlTLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUJULE1BQUksQ0FBQ1UsT0FBT21DLEVBQVIsSUFBY3VMLENBQWQsR0FBa0J4TCxFQUF0QjtBQUNBLE1BQUk1QyxJQUFJTyxJQUFKLElBQVlQLElBQUlTLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUIsU0FBTyxLQUFQO0FBQ0Q7O2tCQUVjO0FBQ2JtRywyQkFBeUJBLHVCQURaO0FBRWJJLGtCQUFnQkE7QUFGSCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJpbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlci9wYXBlcic7XG5pbXBvcnQgTGlicmFyeSBmcm9tICcuL2xpYnJhcnknO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9kaXNwbGF5L3RleHQnO1xuaW1wb3J0IFNlcXVlbmNlIGZyb20gJy4vZGlzcGxheS9zZXF1ZW5jZSc7XG5pbXBvcnQgRnJhbWUgZnJvbSAnLi9kaXNwbGF5L2ZyYW1lJztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSBbXTtcbiAgICB0aGlzLmVkaXRvcnMgPSBbXTtcbiAgICB0aGlzLnNlcXVlbmNlcyA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmVkaXRvcnMucGFwZXIgPSBuZXcgUGFwZXIoKTtcbiAgICB0aGlzLmVkaXRvcnMubGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG4gICAgdGhpcy5lZGl0b3JzLnN0YWdlID0gbmV3IFN0YWdlKCk7XG5cbiAgICBnbG9iYWwucGFwZXIgPSB0aGlzLmVkaXRvcnMucGFwZXI7XG5cbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJ1dHRvbnMnKTtcblxuICAgIGxldCBidXR0b247XG5cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICdzYXZlJztcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICdsaWJyYXJ5JztcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0RWRpdG9yKHRoaXMuZWRpdG9ycy5saWJyYXJ5KTtcbiAgICB9XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnc3RhZ2UnO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRFZGl0b3IodGhpcy5lZGl0b3JzLnN0YWdlKTtcbiAgICB9XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAncGFwZXInO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRFZGl0b3IodGhpcy5lZGl0b3JzLnBhcGVyKTtcbiAgICB9XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICAgIHRoaXMuZG9tLmJ1dHRvbnMgPSBidXR0b25zO1xuXG4gICAgdGhpcy5sb2FkKCk7XG5cbiAgICB0aGlzLnNldEVkaXRvcih0aGlzLmVkaXRvcnMucGFwZXIpO1xuXG4gICAgbGV0IHNlcXVlbmNlID0gbmV3IFNlcXVlbmNlKCk7XG4gICAgc2VxdWVuY2UuYWRkKG5ldyBGcmFtZSgpKTtcbiAgICB0aGlzLnNlcXVlbmNlcy5wdXNoKHNlcXVlbmNlKTtcbiAgICB0aGlzLmVkaXRvcnMucGFwZXIuc2V0U2VxdWVuY2Uoc2VxdWVuY2UpO1xuXG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgbGV0IG1hZ2ljID0geyB0aXRsZTogJ2hleScgfTtcbiAgICBsb2NhbFN0b3JhZ2VbJ21hZ2ljJ10gPSBKU09OLnN0cmluZ2lmeShtYWdpYyk7XG4gICAgY29uc29sZS5sb2coJ3NhdmVkIScpO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBsZXQgbWFnaWMgPSBsb2NhbFN0b3JhZ2VbJ21hZ2ljJ107XG4gICAgaWYgKG1hZ2ljKSB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG1hZ2ljKSk7XG4gICAgICBjb25zb2xlLmxvZygnbG9hZGVkIScpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVkaXRvcihlZGl0b3IpIHtcbiAgICBpZiAoZWRpdG9yICE9PSB0aGlzLmVkaXRvcikge1xuICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yLmhpZGUoKTtcbiAgICAgICAgdGhpcy5kb20uYXBwLnJlbW92ZUNoaWxkKHRoaXMuZWRpdG9yLmRvbSgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMuZWRpdG9yLmRvbSgpKTtcbiAgICAgIHRoaXMuZWRpdG9yLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnJlcGVhdCkge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PSAnXScpIHtcblxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICddJykge1xuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucmVzaXplVGltZXJJZCkge1xuICAgICAgdGhpcy5yZXNpemVUaW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdG9ycy5wYXBlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVySWQgPSBudWxsO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ3Jlc2l6ZScpIHtcbiAgICAgIHRoaXMub25SZXNpemUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmVkaXRvci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJyk7XG4gIGxldCBhcHAgPSBuZXcgQXBwKCk7XG4gIGdsb2JhbC5hcHAgPSBhcHA7XG4gIGFwcC5pbml0KCk7XG59KTtcbiIsIlxuY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICB9XG5cbiAgYWRkKHNoYXBlKSB7XG4gICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZSk7XG4gIH1cblxuICByZW1vdmUoc2hhcGUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnNoYXBlcy5pbmRleE9mKHNoYXBlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnNoYXBlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gIH1cblxuICBjb3B5KCkge1xuICAgIGxldCBmcmFtZSA9IG5ldyBGcmFtZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZyYW1lLmFkZCh0aGlzLnNoYXBlc1tpXS5jb3B5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWU7XG4iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vc2hhcGUnO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYWRkKGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gY29udGVudFtpXTtcbiAgICAgICAgaWYgKHNoYXBlIGluc3RhbmNlb2YgU2hhcGUpIHRoaXMuYWRkKHNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKHNoYXBlLmhpdFRlc3QoeCAtIHRoaXMueCwgeSAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBib3VuZHMgPSBjaGlsZC5nZXRCb3VuZHMoKTtcbiAgICAgIHJlY3RzLnB1c2goYm91bmRzKTtcbiAgICB9XG5cbiAgICBpZiAocmVjdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IDA7IC8vTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSAwOyAvL051bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gMDsgLy9OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IDA7IC8vTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWN0ID0gcmVjdHNbaV07XG4gICAgICAgIHhtaW4gPSByZWN0LnggPCB4bWluID8gcmVjdC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHJlY3QueSA8IHltaW4gPyByZWN0LnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcmVjdC54ICsgcmVjdC53aWR0aCA+IHhtYXggPyByZWN0LnggKyByZWN0LndpZHRoIDogeG1heDtcbiAgICAgICAgeW1heCA9IHJlY3QueSArIHJlY3QuaGVpZ2h0ID4geW1heCA/IHJlY3QueSArIHJlY3QuaGVpZ2h0IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4gKyB0aGlzLngsIHltaW4gKyB0aGlzLnksIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJcbmNsYXNzIFNlcXVlbmNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mcmFtZXMgPSBbXTtcbiAgfVxuXG4gIGFkZChmcmFtZSwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMuZnJhbWVzLnNwbGljZShpbmRleCwgMCwgZnJhbWUpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZnJhbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RnJhbWUoZnJhbWVObykge1xuICAgIHJldHVybiB0aGlzLmZyYW1lc1tmcmFtZU5vXTtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXF1ZW5jZTtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFBvaW50TGlzdCBmcm9tICcuLi9nZW9tL3BvaW50X2xpc3QnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgU2hhcGUgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy54ID0gcGFyYW1zLnggfHwgMDtcbiAgICB0aGlzLnkgPSBwYXJhbXMueSB8fCAwO1xuICAgIHRoaXMuZmlsbCA9IHBhcmFtcy5maWxsIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBwYXJhbXMuc3Ryb2tlIHx8IG51bGw7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuXG4gICAgaWYgKHBhcmFtcy5wb2ludExpc3QpXG4gICAgICB0aGlzLnBvaW50TGlzdCA9IHBhcmFtcy5wb2ludExpc3QuY29weSgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMucG9pbnRMaXN0ID0gbmV3IFBvaW50TGlzdCgpO1xuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFNoYXBlKHtcbiAgICAgIHg6IHRoaXMueCwgeTogdGhpcy55LCBwb2ludExpc3Q6IHRoaXMucG9pbnRMaXN0LCBzdHJva2U6IHRoaXMuc3Ryb2tlLFxuICAgICAgZmlsbDogdGhpcy5maWxsLCBjbG9zZWQ6IHRoaXMuY2xvc2VkXG4gICAgfSk7XG4gIH1cblxuICBnZXRQb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgYm91bmRzID0gdGhpcy5wb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gICAgYm91bmRzLnggKz0gdGhpcy54O1xuICAgIGJvdW5kcy55ICs9IHRoaXMueTtcbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLmNvbnRlbnQpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgeyBFdmVudCwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcblxuY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KCk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpcy5wb3NpdGlvbi54ID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0KCd2YWx1ZWNoYW5nZScpO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgc2hvdygpIHtcblxuICB9XG5cbiAgaGlkZSgpIHtcblxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcbiIsIlxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJhbXMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbiAgZW1pdCh0eXBlLCAuLi5hcmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICBpZiAobGlzdGVuZXIudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyB0eXBlOiB0eXBlLCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEV2ZW50RGlzcGF0Y2hlciwgRXZlbnQgfTtcbiIsIlxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICB9XG5cbiAgaW50ZXJzZWN0c0xpbmVTZWdtZW50KHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgfVxuXG4gIGNvbnRhaW5zUG9pbnQoeCwgeSkge1xuICAgIGxldCBkeCA9IHggLSB0aGlzLng7XG4gICAgbGV0IGR5ID0geSAtIHRoaXMueTtcbiAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgcmV0dXJuIGQgPCB0aGlzLnI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiXG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4IHx8IDA7XG4gICAgdGhpcy55ID0geSB8fCAwO1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIHBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH1cblxuICBhZGQocCkge1xuICAgIHRoaXMueCArPSBwLng7XG4gICAgdGhpcy55ICs9IHAueTtcbiAgfVxuXG4gIHN1YnRyYWN0KHApIHtcbiAgICB0aGlzLnggLT0gcC54O1xuICAgIHRoaXMueSAtPSBwLnk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vcmVjdGFuZ2xlJztcblxuY2xhc3MgUG9pbnRMaXN0IHtcbiAgY29uc3RydWN0b3IocG9pbnRzKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICBpZiAocG9pbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgUG9pbnQocC54LCBwLnkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnRMaXN0KHRoaXMucG9pbnRzKTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSBwLnkgPCB5bWluID8gcC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcC55ID4geW1heCA/IHAueSA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50TGlzdDtcbiIsIlxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBncm93KGFtb3VudCkge1xuICAgIHRoaXMueCAtPSBhbW91bnQ7XG4gICAgdGhpcy55IC09IGFtb3VudDtcbiAgICB0aGlzLndpZHRoICs9IGFtb3VudCAqIDI7XG4gICAgdGhpcy5oZWlnaHQgKz0gYW1vdW50ICogMjtcbiAgfVxuXG4gIHBvaW50SW5zaWRlKHgsIHkpIHtcbiAgICByZXR1cm4gKHggPiB0aGlzLnggJiYgeCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgeSA+IHRoaXMueSAmJiB5IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHJhdGlvIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InO1xuXG5jbGFzcyBMaWJyYXJ5IGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpYnJhcnk7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi9nZW9tL2NpcmNsZSc7XG5cbmltcG9ydCBTaGFwZSBmcm9tICcuLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBGcmFtZSBmcm9tICcuLi9kaXNwbGF5L2ZyYW1lJztcbmltcG9ydCBTZXF1ZW5jZSBmcm9tICcuLi9kaXNwbGF5L3NlcXVlbmNlJztcblxuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4vdG9vbHMvcGF0aF90b29sJztcbmltcG9ydCBQb2ludFRvb2wgZnJvbSAnLi90b29scy9wb2ludF90b29sJztcbmltcG9ydCBQZW5jaWxUb29sIGZyb20gJy4vdG9vbHMvcGVuY2lsX3Rvb2wnO1xuaW1wb3J0IFRyaWFuZ2xlVG9vbCBmcm9tICcuL3Rvb2xzL3RyaWFuZ2xlX3Rvb2wnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgVW5kb1N0YWNrIGZyb20gJy4vdW5kb19zdGFjayc7XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFsZXR0ZSA9IFtcbiAgICAgICcjMDAwMDAwJyxcbiAgICAgICcjMzMzMzMzJyxcbiAgICAgICcjNjY2NjY2JyxcbiAgICAgICcjOTk5OTk5JyxcbiAgICAgICcjY2NjY2NjJyxcbiAgICAgICcjZmZmZmZmJ1xuICAgIF07XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gdGhpcy5wYWxldHRlWzJdO1xuICAgIHRoaXMuc3Ryb2tlID0gbnVsbDsgLy90aGlzLnBhbGV0dGVbMF07XG5cbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIHRoaXMuY2xpcGJvYXJkID0gW107XG4gICAgdGhpcy5zZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZSgpO1xuXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdwYXBlcicpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdGhpcyk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCB0aGlzKTtcblxuICAgIHRoaXMuY3Vyc29yWCA9IDA7XG4gICAgdGhpcy5jdXJzb3JZID0gMDtcblxuICAgIHRoaXMuYWRkRnJhbWUoKTtcbiAgICB0aGlzLmdvRnJhbWUoMCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgc3VwZXIuc2hvdygpO1xuICAgIHRoaXMuc2V0VG9vbCgncGF0aCcpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBzdXBlci5oaWRlKCk7XG4gIH1cblxuICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5pbml0aWFsaXNlZCkgdGhpcy5yZW5kZXIoKTtcblxuXG4gIH1cblxuICBzZXRTZXF1ZW5jZShzZXF1ZW5jZSkge1xuICAgIHRoaXMuc2VxdWVuY2UgPSBzZXF1ZW5jZTtcbiAgICB0aGlzLmdvRnJhbWUoMCk7XG4gIH1cblxuICByZW5kZXJTaGFwZShzaGFwZSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzaGFwZS5zdHJva2UgfHwgJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgbGV0IHNwID0gdGhpcy53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgbGV0IHggPSAocC54ICsgc3AueCk7XG4gICAgICBsZXQgeSA9IChwLnkqLTEgKyBzcC55KTtcblxuICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGUuY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJPdXRsaW5lKHNoYXBlLCBzdHJva2UpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlIHx8ICdibGFjayc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgbGV0IHNwID0gdGhpcy53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgIGxldCB4ID0gKHAueCArIHNwLngpO1xuICAgICAgbGV0IHkgPSAocC55Ki0xICsgc3AueSk7XG5cbiAgICAgIGlmIChqID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBlbHNlXG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJBeGlzKHgsIHkpIHtcbiAgICBsZXQgc2l6ZSA9IDIwO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgc2l6ZSwgeSk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkgLSBzaXplKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLnJlbmRlckF4aXMoKHRoaXMuY2FudmFzLndpZHRoIC8gMikgPj4gMCwgKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpID4+IDApO1xuXG4gICAgaWYgKHRoaXMuZnJhbWVObyA+IDApIHtcbiAgICAgIGxldCBmcmFtZSA9IHRoaXMuc2VxdWVuY2UuZ2V0RnJhbWUodGhpcy5mcmFtZU5vIC0gMSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBmcmFtZS5zaGFwZXNbaV07XG4gICAgICAgIHRoaXMucmVuZGVyT3V0bGluZShzaGFwZSwgJ3JnYigxOTIsIDI0MCwgMTkyKScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mcmFtZS5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuZnJhbWUuc2hhcGVzW2ldO1xuICAgICAgdGhpcy5yZW5kZXJTaGFwZShzaGFwZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9vbCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIHRoaXMudG9vbC5yZW5kZXIoY3R4KTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGN0eC5mb250ID0gJzE4cHggc2Fucy1zZXJpZic7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZpbGxUZXh0KCh0aGlzLmZyYW1lTm8gKyAxKSArICc6JyArIHRoaXMuc2VxdWVuY2UubGVuZ3RoLCAyMCwgMjApO1xuXG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGN0eC5mb250ID0gJzE4cHggc2Fucy1zZXJpZic7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZpbGxUZXh0KHRoaXMudG9vbE5hbWUsIDIwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAzMik7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5maWxsIHx8ICdyZWQnO1xuICAgIGN0eC5maWxsUmVjdCgxMDAsIDIwLCAyMCwgMjApO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3Ryb2tlIHx8ICdyZWQnO1xuICAgIGN0eC5maWxsUmVjdCgxNDAsIDIwLCAyMCwgMjApO1xuICB9XG5cbiAgc2VsZWN0QWxsKCkge1xuICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZyYW1lLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zZWxlY3Rpb24ucHVzaCh0aGlzLmZyYW1lLnNoYXBlc1tpXSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICBsZXQgc2VsZWN0aW9uID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZyYW1lLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5mcmFtZS5zaGFwZXNbaV07XG4gICAgICBsZXQgcG9pbnRzID0gc2hhcGUucG9pbnRMaXN0LnBvaW50cztcbiAgICAgIGxldCBjb3VudCA9IChzaGFwZS5jbG9zZWQgPyBwb2ludHMubGVuZ3RoICsgMSA6IHBvaW50cy5sZW5ndGgpO1xuICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgIGxldCBwMCA9IHBvaW50c1tqIC0gMV07XG4gICAgICAgIGxldCBwMSA9IChqID09IHBvaW50cy5sZW5ndGggPyBwb2ludHNbMF0gOiBwb2ludHNbal0pO1xuICAgICAgICBsZXQgc3AwID0gcGFwZXIud29ybGRUb1NjcmVlbihwMC54ICsgc2hhcGUueCwgcDAueSArIHNoYXBlLnkpO1xuICAgICAgICBsZXQgc3AxID0gcGFwZXIud29ybGRUb1NjcmVlbihwMS54ICsgc2hhcGUueCwgcDEueSArIHNoYXBlLnkpO1xuICAgICAgICBpZiAoVXRpbC5saW5lSW50ZXJzZWN0c1JlY3RhbmdsZShzcDAueCwgc3AwLnksIHNwMS54LCBzcDEueSwgeG1pbiwgeW1pbiwgeG1heCwgeW1heCkpIHtcbiAgICAgICAgICBzZWxlY3Rpb24ucHVzaChzaGFwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gIH1cblxuICBzY3JlZW5Ub1dvcmxkKHgsIHkpIHtcbiAgICBsZXQgdHggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgbGV0IHR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICByZXR1cm4gbmV3IFBvaW50KHggLSB0eCwgKHkgLSB0eSkgKiAtMSk7XG4gIH1cblxuICB3b3JsZFRvU2NyZWVuKHgsIHkpIHtcbiAgICBsZXQgdHggPSB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XG4gICAgbGV0IHR5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICByZXR1cm4gbmV3IFBvaW50KHggKyB0eCwgKHkqLTEgKyB0eSkpO1xuICB9XG5cbiAgcG9pbnRJblNoYXBlKHNoYXBlLCB4LCB5KSB7XG4gICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuICAgIGxldCBzcCA9IHRoaXMuc2NyZWVuVG9Xb3JsZCh4LCB5KTtcbiAgICByZXR1cm4gVXRpbC5wb2ludEluUG9seWdvbihwb2ludHMsIHNwLnggLSBzaGFwZS54LCBzcC55IC0gc2hhcGUueSk7XG4gIH1cblxuICBwb2ludE9uU2hhcGVMaW1pdChzaGFwZSwgeCwgeSkge1xuICAgIGxldCBtYXJnaW4gPSA1O1xuICAgIGxldCB0ZW1wID0gbmV3IFBvaW50KCk7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5zY3JlZW5Ub1dvcmxkKHgsIHkpO1xuICAgIHBvaW50LnN1YnRyYWN0KHNoYXBlLnBvc2l0aW9uKTtcblxuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcbiAgICBsZXQgY291bnQgPSAoc2hhcGUuY2xvc2VkID8gcG9pbnRzLmxlbmd0aCArIDEgOiBwb2ludHMubGVuZ3RoKTtcblxuICAgIGlmIChwb2ludHNbMF0uZGlzdGFuY2UocG9pbnQpIDwgbWFyZ2luKSByZXR1cm4gcG9pbnRzWzBdO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBsZXQgcDEgPSBwb2ludHNbaS0xXTtcbiAgICAgIGxldCBwMiA9IChpID09IHBvaW50cy5sZW5ndGggPyBwb2ludHNbMF0gOiBwb2ludHNbaV0pO1xuXG4gICAgICBpZiAocDIuZGlzdGFuY2UocG9pbnQpIDwgbWFyZ2luKSByZXR1cm4gcDI7XG5cbiAgICAgIGxldCB4MSA9IHAyLnggLSBwMS54O1xuICAgICAgbGV0IHkxID0gcDIueSAtIHAxLnk7XG4gICAgICBsZXQgeDIgPSBwb2ludC54IC0gcDEueDtcbiAgICAgIGxldCB5MiA9IHBvaW50LnkgLSBwMS55O1xuXG4gICAgICBsZXQgZG90ID0geDEgKiB4MSArIHkxICogeTE7XG4gICAgICBpZiAoZG90ID4gMCkge1xuICAgICAgICBsZXQgcmF0aW8gPSAoeDIgKiB4MSArIHkyICogeTEpIC8gZG90O1xuICAgICAgICBpZiAocmF0aW8gPj0gMCAmJiByYXRpbyA8PSAxKSB7XG4gICAgICAgICAgdGVtcC54ID0gKHgxICogcmF0aW8pICsgcDEueDtcbiAgICAgICAgICB0ZW1wLnkgPSAoeTEgKiByYXRpbykgKyBwMS55O1xuICAgICAgICAgIGlmICh0ZW1wLmRpc3RhbmNlKHBvaW50KSA8IG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHsgcG9pbnQ6IHRlbXAsIGluZGV4OiBpIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0Q3Vyc29yKGN1cnNvcikge1xuICAgIGlmICh0aGlzLmVsLmNvbnRhaW5zKHRoaXMuY3Vyc29yKSkge1xuICAgICAgdGhpcy5lbC5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvcik7XG4gICAgfVxuICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmxlZnQgPSB0aGlzLmN1cnNvclggKyAncHgnO1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yWSArICdweCc7XG4gIH1cblxuICBzZXRUb29sKHRvb2xOYW1lKSB7XG4gICAgaWYgKHRvb2xOYW1lICE9PSB0aGlzLnRvb2xOYW1lKSB7XG4gICAgICBpZiAodG9vbE5hbWUgPT0gJ3BhdGgnKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQYXRoVG9vbCgpO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b29sLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zYXZlVW5kbygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRvb2xOYW1lID09ICdwb2ludCcpIHtcbiAgICAgICAgdGhpcy50b29sID0gbmV3IFBvaW50VG9vbCgpO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRvb2xOYW1lID09ICdwZW5jaWwnKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQZW5jaWxUb29sKCk7XG4gICAgICAgIHRoaXMudG9vbC5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3NoYXBlJywgKHNoYXBlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRTaGFwZShzaGFwZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodG9vbE5hbWUgPT0gJ3RyaWFuZ2xlJykge1xuICAgICAgICB0aGlzLnRvb2wgPSBuZXcgVHJpYW5nbGVUb29sKCk7XG4gICAgICAgIHRoaXMudG9vbC5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3NoYXBlJywgKHNoYXBlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRTaGFwZShzaGFwZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9vbE5hbWUgPSB0b29sTmFtZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG9vbE5hbWUpO1xuICAgICAgdGhpcy5zZXRDdXJzb3IodGhpcy50b29sLmdldEN1cnNvcigpKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgdW5kbygpIHtcbiAgICBpZiAodGhpcy51bmRvU3RhY2sudW5kbygpKSB7XG4gICAgICBsZXQgZnJhbWUgPSB0aGlzLnVuZG9TdGFjay5jdXJyZW50KCk7XG4gICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgdGhpcy5mcmFtZS5zaGFwZXMgPSBmcmFtZS5zaGFwZXM7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVkbygpIHtcbiAgICBpZiAodGhpcy51bmRvU3RhY2sucmVkbygpKSB7XG4gICAgICBsZXQgZnJhbWUgPSB0aGlzLnVuZG9TdGFjay5jdXJyZW50KCk7XG4gICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgdGhpcy5mcmFtZS5zaGFwZXMgPSBmcmFtZS5zaGFwZXM7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2F2ZVVuZG8oKSB7XG4gICAgbGV0IGZyYW1lID0gdGhpcy5mcmFtZS5jb3B5KCk7XG4gICAgdGhpcy51bmRvU3RhY2sucHVzaChmcmFtZSk7XG4gIH1cblxuICBhZGRTaGFwZShzaGFwZSkge1xuICAgIHRoaXMuZnJhbWUuYWRkKHNoYXBlKTtcbiAgICB0aGlzLnNhdmVVbmRvKCk7XG4gIH1cblxuICBhZGRGcmFtZShpbmRleCkge1xuICAgIGxldCBmcmFtZSA9IG5ldyBGcmFtZSgpO1xuXG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLnNlcXVlbmNlLmFkZChmcmFtZSwgaW5kZXgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc2VxdWVuY2UuYWRkKGZyYW1lKTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zZWxlY3Rpb25baV0uY29weSgpO1xuICAgICAgICBmcmFtZS5hZGQoc2hhcGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUZyYW1lKGluZGV4KSB7XG4gICAgaWYgKHRoaXMuc2VxdWVuY2UubGVuZ3RoID09IDEpIHtcbiAgICAgIHRoaXMuY2xlYXJGcmFtZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2VxdWVuY2UucmVtb3ZlKGluZGV4KTtcbiAgICAgIHRoaXMuZ29GcmFtZShpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJGcmFtZSgpIHtcbiAgICB0aGlzLnNhdmVVbmRvKCk7XG4gICAgdGhpcy5mcmFtZS5jbGVhcigpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnb0ZyYW1lKGZyYW1lTm8pIHtcbiAgICBpZiAoZnJhbWVObyA8IDApXG4gICAgICBmcmFtZU5vID0gMDtcbiAgICBlbHNlIGlmIChmcmFtZU5vID4gdGhpcy5zZXF1ZW5jZS5sZW5ndGggLSAxKVxuICAgICAgZnJhbWVObyA9IHRoaXMuc2VxdWVuY2UubGVuZ3RoIC0gMTtcbiAgICBsZXQgZnJhbWUgPSB0aGlzLnNlcXVlbmNlLmdldEZyYW1lKGZyYW1lTm8pO1xuICAgIGlmIChmcmFtZSkge1xuICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgICAgdGhpcy5mcmFtZU5vID0gZnJhbWVObztcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgICB0aGlzLnVuZG9TdGFjayA9IG5ldyBVbmRvU3RhY2soKTtcbiAgICAgIHRoaXMuc2F2ZVVuZG8oKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlU2VsZWN0ZWQoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgICAgdGhpcy5mcmFtZS5yZW1vdmUoc2hhcGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICAgIHRoaXMuc2F2ZVVuZG8oKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgY29weVNlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGxldCBjbGlwYm9hcmQgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zZWxlY3Rpb25baV0uY29weSgpO1xuICAgICAgICBjbGlwYm9hcmQucHVzaChzaGFwZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsaXBib2FyZCA9IGNsaXBib2FyZDtcbiAgICB9XG4gIH1cblxuICBwYXN0ZSgpIHtcbiAgICBpZiAodGhpcy5jbGlwYm9hcmQubGVuZ3RoKSAge1xuICAgICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jbGlwYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5jbGlwYm9hcmRbaV0uY29weSgpO1xuICAgICAgICB0aGlzLmZyYW1lLmFkZChzaGFwZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2goc2hhcGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5zYXZlVW5kbygpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBzZXRGaWxsKGZpbGwpIHtcbiAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2VsZWN0aW9uW2ldO1xuICAgICAgc2hhcGUuZmlsbCA9IHRoaXMuZmlsbDtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldFN0cm9rZShzdHJva2UpIHtcbiAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgIHNoYXBlLnN0cm9rZSA9IHRoaXMuc3Ryb2tlO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYnJpbmdUb0Zyb250KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGxldCBzaGFwZXMgPSB0aGlzLmZyYW1lLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gIXRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKHNoYXBlKSk7XG4gICAgICBsZXQgc2V0ID0gdGhpcy5mcmFtZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKHNoYXBlKSk7XG4gICAgICB0aGlzLmZyYW1lLnNoYXBlcyA9IHNoYXBlcy5jb25jYXQoc2V0KTtcbiAgICAgIHRoaXMuc2F2ZVVuZG8oKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2VuZFRvQmFjaygpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBsZXQgc2hhcGVzID0gdGhpcy5mcmFtZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+ICF0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhzaGFwZSkpO1xuICAgICAgbGV0IHNldCA9IHRoaXMuZnJhbWUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiB0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhzaGFwZSkpO1xuICAgICAgdGhpcy5mcmFtZS5zaGFwZXMgPSBzZXQuY29uY2F0KHNoYXBlcyk7XG4gICAgICB0aGlzLnNhdmVVbmRvKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzLCB0aGlzLnNlcXVlbmNlKTtcbiAgICB0aGlzLnBsYXllci5vbignZG9uZScsICgpID0+IHtcbiAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gICAgdGhpcy5wbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICB0aGlzLmRvd25YID0gZXZlbnQucGFnZVg7XG4gICAgdGhpcy5kb3duWSA9IGV2ZW50LnBhZ2VZO1xuICAgIHRoaXMuZG93biA9IHRydWU7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVk7XG5cbiAgICB0aGlzLmRlbHRhWCA9ICh0aGlzLmxhc3RYICE9PSB1bmRlZmluZWQgPyB0aGlzLmN1cnNvclggLSB0aGlzLmxhc3RYIDogMCk7XG4gICAgdGhpcy5kZWx0YVkgPSAodGhpcy5sYXN0WSAhPT0gdW5kZWZpbmVkID8gdGhpcy5jdXJzb3JZIC0gdGhpcy5sYXN0WSA6IDApO1xuXG4gICAgaWYgKHRoaXMuY3Vyc29yKSB7XG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJzb3JYICsgJ3B4JztcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3Vyc29yWSArICdweCc7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0WCA9IHRoaXMuY3Vyc29yWDtcbiAgICB0aGlzLmxhc3RZID0gdGhpcy5jdXJzb3JZO1xuXG4gICAgaWYgKHRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgIC8vIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgLy8gbGV0IGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgLy8gbGV0IHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuICAgICAgLy8gbGV0IG9mZnNldCA9IHRoaXMuY3Vyc29yWSAqIHRoaXMud2lkdGggKyB0aGlzLmN1cnNvclg7XG4gICAgICAvLyBpZiAocGl4ZWxzW29mZnNldCo0XSA8PSAxNikge1xuICAgICAgLy8gICB0aGlzLmN1cnNvci5zdHlsZS5maWx0ZXIgPSAnaW52ZXJ0KDEwMCUpJztcbiAgICAgIC8vIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgLy8gICB0aGlzLmN1cnNvci5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgbGV0IGtleSA9IGV2ZW50LmtleTtcbiAgICBpZiAoIWV2ZW50LnJlcGVhdCkge1xuICAgICAgaWYgKGtleSA9PSAncScpIHtcbiAgICAgICAgdGhpcy5zZXRUb29sKCdwYXRoJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ2UnKSB7XG4gICAgICAgIHRoaXMuc2V0VG9vbCgncG9pbnQnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PSAnYicpIHtcbiAgICAgICAgdGhpcy5zZXRUb29sKCdwZW5jaWwnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PSAndCcpIHtcbiAgICAgICAgdGhpcy5zZXRUb29sKCd0cmlhbmdsZScpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoKGtleSA9PSAnLicgfHwga2V5ID09ICc+JykpIHtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGhpcy5hZGRGcmFtZSh0aGlzLmZyYW1lTm8gKyAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdvRnJhbWUodGhpcy5mcmFtZU5vICsgMSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgoa2V5ID09ICcsJyB8fCBrZXkgPT0gJzwnKSkge1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICB0aGlzLmFkZEZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgICAgICAgdGhpcy5nb0ZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nb0ZyYW1lKHRoaXMuZnJhbWVObyAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ2MnKSB7XG4gICAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICB0aGlzLmNvcHlTZWxlY3RlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ3YnKSB7XG4gICAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICB0aGlzLnBhc3RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PSAnYScpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PSAneCcpIHtcbiAgICAgICAgdGhpcy5kZWxldGVTZWxlY3RlZCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09ICdYJykge1xuICAgICAgICB0aGlzLmRlbGV0ZUZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ3onICYmIGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KVxuICAgICAgICAgIHRoaXMucmVkbygpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy51bmRvKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpIHRoaXMuYnJpbmdUb0Zyb250KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSkgdGhpcy5zZW5kVG9CYWNrKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJyAnKSB7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09ICcpJykge1xuICAgICAgICB0aGlzLnNldFN0cm9rZShudWxsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PSAnMCcpIHtcbiAgICAgICAgdGhpcy5zZXRGaWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBzZXQgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJyEnLCAnQCcsICfCoycsICckJywgJyUnLCAnXiddO1xuICAgICAgICBsZXQgaW5kZXggPSBzZXQuaW5kZXhPZihrZXkpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgaWYgKGluZGV4ID4gNSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdHJva2UodGhpcy5wYWxldHRlW2luZGV4IC0gNl0gfHwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRGaWxsKHRoaXMucGFsZXR0ZVtpbmRleF0gfHwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkJsdXIoZXZlbnQpIHtcblxuICB9XG5cbiAgb25Qb2ludGVyRW50ZXIoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxuXG4gIG9uUG9pbnRlckxlYXZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJzb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdibHVyJykge1xuICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdwb2ludGVyZW50ZXInKSB7XG4gICAgICB0aGlzLm9uUG9pbnRlckVudGVyKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAncG9pbnRlcmxlYXZlJykge1xuICAgICAgdGhpcy5vblBvaW50ZXJMZWF2ZShldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICB0aGlzLnBsYXllci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgICAgdGhpcy50b29sLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFwZXI7XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuLi9ldmVudHMnO1xuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIHNlcXVlbmNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLnNlcXVlbmNlID0gc2VxdWVuY2U7XG4gICAgdGhpcy5mcmFtZU5vID0gMDtcbiAgICB0aGlzLmZwcyA9IDY7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuXG4gICAgY3R4LmZvbnQgPSAnMTZweCBzYW5zLXNlcmlmJztcbiAgICBjdHguZmlsbFRleHQodGhpcy5wbGF5aW5nID8gJ1BsYXknIDogJ1BhdXNlJywgMjAsIDIwKTtcblxuICAgIGN0eC5mb250ID0gJzE2cHggc2Fucy1zZXJpZic7XG4gICAgY3R4LmZpbGxUZXh0KHRoaXMuZnJhbWVObyArIDEsIDEwMCwgMjApO1xuXG4gICAgbGV0IGZyYW1lID0gdGhpcy5zZXF1ZW5jZS5mcmFtZXNbdGhpcy5mcmFtZU5vXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhbWUuc2hhcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSBmcmFtZS5zaGFwZXNbaV07XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoYXBlLmZpbGwgfHwgJ3RyYW5zcGFyZW50JztcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICBsZXQgc3AgPSBwYXBlci53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuICAgICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgICAgbGV0IHggPSAocC54ICsgc3AueCk7XG4gICAgICAgIGxldCB5ID0gKHAueSotMSArIHNwLnkpO1xuXG4gICAgICAgIGlmIChqID09IDApXG4gICAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgc3RlcCgpIHtcbiAgICB0aGlzLmZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGVwLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy50aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy50aW1lRGVsdGEgPSB0aGlzLnRpbWVEZWx0YSArICh0aGlzLnRpbWUgLSB0aGlzLnByZXZpb3VzVGltZSk7XG5cbiAgICBpZiAodGhpcy50aW1lRGVsdGEgPj0gMTAwMCAvIHRoaXMuZnBzKSB7XG4gICAgICB0aGlzLnRpbWVEZWx0YSA9IHRoaXMudGltZURlbHRhIC0gKDEwMDAgLyB0aGlzLmZwcyk7XG4gICAgICB0aGlzLmZyYW1lTm8rKztcbiAgICAgIGlmICh0aGlzLmZyYW1lTm8gPT0gdGhpcy5zZXF1ZW5jZS5sZW5ndGgpIHRoaXMuZnJhbWVObyA9IDA7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMucHJldmlvdXNUaW1lID0gdGhpcy50aW1lO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnRpbWVEZWx0YSA9IDA7XG4gICAgdGhpcy50aW1lID0gdGhpcy5wcmV2aW91c1RpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZnJhbWVJZCk7XG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGRvbmUoKSB7XG4gICAgdGhpcy5wYXVzZSgpO1xuICAgIHRoaXMuZW1pdCgnZG9uZScpO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnJlcGVhdCkge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PSAnICcgfHwgZXZlbnQua2V5ID09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgIHRoaXMuZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5kb25lKCk7XG4gIH1cblxuICBvbkJsdXIoZXZlbnQpIHtcbiAgICB0aGlzLmRvbmUoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdibHVyJykge1xuICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vLi4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcbmltcG9ydCBTaGFwZSBmcm9tICcuLi8uLi9kaXNwbGF5L3NoYXBlJztcblxuY2xhc3MgUGF0aFRvb2wgZXh0ZW5kcyBUb29sIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BhdGgtY3Vyc29yJyk7XG4gIH1cblxuICBnZXRDdXJzb3IoKSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY3Vyc29yLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmN1cnNvci53aWR0aCwgdGhpcy5jdXJzb3IuaGVpZ2h0KTtcbiAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygxLCAxKTtcbiAgICBjdHgubGluZVRvKDksIDEpO1xuICAgIGN0eC5saW5lVG8oMSwgOSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG5cbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgLy8gZWwuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBibGFjayc7XG4gICAgLy8gZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgLy8gZWwuc3R5bGUud2lkdGggPSAnMTZweCc7XG4gICAgLy8gZWwuc3R5bGUuaGVpZ2h0ID0gJzE2cHgnO1xuICAgIC8vIGVsLnN0eWxlLnpJbmRleCA9IDkwMDA7XG4gICAgZWwuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpO1xuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgbGV0IHNwID0gcGFwZXIuc2NyZWVuVG9Xb3JsZCh4LCB5KTtcbiAgICBmb3IgKHZhciBpID0gcGFwZXIuZnJhbWUuc2hhcGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5mcmFtZS5zaGFwZXNbaV07XG4gICAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG4gICAgICBpZiAocGFwZXIucG9pbnRPblNoYXBlTGltaXQoc2hhcGUsIHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaGFwZS5maWxsKSB7XG4gICAgICAgICAgaWYgKHBhcGVyLnBvaW50SW5TaGFwZShzaGFwZSwgeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBtb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXBlci5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHBhcGVyLnNlbGVjdGlvbltpXTtcbiAgICAgIHNoYXBlLnggKz0gZHg7XG4gICAgICBzaGFwZS55ICs9IGR5ICotMTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYWdPbigpIHtcbiAgICB0aGlzLm1vZGUgPSAnZHJhZyc7XG4gIH1cblxuICBkcmFnT2ZmKCkge1xuICAgIGlmICh0aGlzLmNoYW5nZWQpIHRoaXMuZW1pdCgnY2hhbmdlJyk7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgICBjdHguZm9udCA9ICcxMHB4IHNhbnMtc2VyaWYnO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcblxuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuXG4gICAgaWYgKHBhcGVyLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXBlci5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gcGFwZXIuc2VsZWN0aW9uW2ldO1xuICAgICAgICBsZXQgcCA9IHBhcGVyLndvcmxkVG9TY3JlZW4oc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICAgIGxldCB4ID0gcC54ID4+IDAsIHkgPSBwLnkgPj4gMDtcblxuICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2V4Y2x1c2lvbic7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgNSwgeSk7XG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSAtIDUpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZXhjbHVzaW9uJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8ocGFwZXIuZG93blgsIHBhcGVyLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8ocGFwZXIuY3Vyc29yWCwgcGFwZXIuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyhwYXBlci5jdXJzb3JYLCBwYXBlci5jdXJzb3JZKTtcbiAgICAgIGN0eC5saW5lVG8ocGFwZXIuZG93blgsIHBhcGVyLmN1cnNvclkpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8vIGxldCBwMCA9IG5ldyBQb2ludChwYXBlci5kb3duWCwgcGFwZXIuZG93blkpO1xuICAgIC8vIGxldCBwMSA9IG5ldyBQb2ludCgxNTAsIDE1MCk7XG4gICAgLy8gbGV0IHAyID0gbmV3IFBvaW50KDI1MCwgMzAwKTtcbiAgICAvL1xuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgIC8vIGN0eC5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAvL1xuICAgIC8vIGxldCBoaXQgPSB0aGlzLnBvaW50T25FZGdlKHAwLCBwMSwgcDIpO1xuICAgIC8vIGlmIChoaXQpIHtcbiAgICAvLyAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAvLyAgIGN0eC5maWxsUmVjdChoaXQueC0yLCBoaXQueS0yLCA0LCA0KTtcbiAgICAvLyB9XG5cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgbW9kaWZpZXIgPSBldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5O1xuXG4gICAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHBhcGVyLmRvd25YLCBwYXBlci5kb3duWSk7XG4gICAgICBpZiAoaGl0KSB7XG4gICAgICAgIGlmIChtb2RpZmllcikge1xuICAgICAgICAgIGlmIChwYXBlci5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuICAgICAgICAgICAgcGFwZXIuc2VsZWN0aW9uLnNwbGljZShwYXBlci5zZWxlY3Rpb24uaW5kZXhPZihoaXQpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXBlci5zZWxlY3Rpb24ucHVzaChoaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoIXBhcGVyLnNlbGVjdGlvbi5pbmNsdWRlcyhoaXQpKSB7XG4gICAgICAgICAgICBwYXBlci5zZWxlY3Rpb24gPSBbaGl0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQgPSBoaXQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICBwYXBlci5zZWxlY3Rpb24gPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgbGV0IG1vZGlmaWVyID0gZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleTtcbiAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgdGhpcy5kcmFnT2ZmKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgIGxldCB4bWluID0gcGFwZXIuZG93blgsIHltaW4gPSBwYXBlci5kb3duWTtcbiAgICAgIGxldCB4bWF4ID0gcGFwZXIuY3Vyc29yWCwgeW1heCA9IHBhcGVyLmN1cnNvclk7XG4gICAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgICAgIHBhcGVyLnNlbGVjdE1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCk7XG4gICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgLy8gICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHBhcGVyLmN1cnNvclgsIHBhcGVyLmN1cnNvclkpO1xuICAgICAgLy8gICBpZiAoaGl0ICYmIHRoaXMudGFyZ2V0ID09IGhpdCkge1xuICAgICAgLy8gICAgIGlmIChtb2RpZmllcikge1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgIC8vICAgICAgIHBhcGVyLnNlbGVjdGlvbiA9IFtoaXRdO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShwYXBlci5kZWx0YVgsIHBhcGVyLmRlbHRhWSk7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChwYXBlci5kb3duKSB7XG4gICAgICAgIGxldCBkeCA9IHBhcGVyLmN1cnNvclggLSBwYXBlci5kb3duWDtcbiAgICAgICAgbGV0IGR5ID0gcGFwZXIuY3Vyc29yWSAtIHBhcGVyLmRvd25ZO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID4gMiB8fCBNYXRoLmFicyhkeSkgPiAyKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgICAgICAgICAgdGhpcy5kcmFnT24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG5cbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKVxuICAgICAgdGhpcy5kcmFnT2ZmKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2JsdXInKSB7XG4gICAgICB0aGlzLm9uQmx1cihldmVudCk7XG4gICAgfVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF0aFRvb2w7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi4vLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUG9pbnRMaXN0IGZyb20gJy4uLy4uL2dlb20vcG9pbnRfbGlzdCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vLi4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgVG9vbCBmcm9tICcuL3Rvb2wnO1xuXG5jbGFzcyBQZW5jaWxUb29sIGV4dGVuZHMgVG9vbCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnN0cm9rZSA9IDA7XG4gICAgdGhpcy5maWxsID0gMDtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncGVuY2lsLWN1cnNvcicpO1xuICB9XG5cbiAgY2xvc2VQYXRoKGNsb3NlZD1mYWxzZSkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgcG9pbnRMaXN0ID0gbmV3IFBvaW50TGlzdCh0aGlzLnBvaW50cyk7XG4gICAgICBsZXQgYm91bmRzID0gcG9pbnRMaXN0LmdldEJvdW5kcygpO1xuICAgICAgbGV0IHdwID0gcGFwZXIuc2NyZWVuVG9Xb3JsZChib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDIsIGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAvIDIpO1xuICAgICAgbGV0IHBvaW50cyA9IHBvaW50TGlzdC5wb2ludHM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgICBsZXQgcHAgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHAueCwgcC55KTtcbiAgICAgICAgcC54ID0gcHAueCAtIHdwLng7XG4gICAgICAgIHAueSA9IHBwLnkgLSB3cC55O1xuICAgICAgfVxuXG4gICAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoeyB4OiB3cC54LCB5OiB3cC55LCBwb2ludExpc3Q6IHBvaW50TGlzdCxcbiAgICAgICAgZmlsbDogcGFwZXIuZmlsbCwgc3Ryb2tlOiBwYXBlci5zdHJva2UsIGNsb3NlZDogY2xvc2VkIH0pO1xuICAgICAgdGhpcy5lbWl0KCdzaGFwZScsIHNoYXBlKTtcbiAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsUGF0aCgpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICByZW5kZXJQYXRoKGN0eCwgcG9pbnRzLCBzdHJva2UsIGZpbGwsIGNsb3NlZD1mYWxzZSkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZSAhPT0gdW5kZWZpbmVkID8gKHN0cm9rZSA/IHN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbCAhPT0gdW5kZWZpbmVkID8gKGZpbGwgPyBmaWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPD0gMiAmJiBzdHJva2UgPT0gbnVsbCkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2N5YW4nO1xuICAgIH1cblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyUGF0aChjdHgsIHRoaXMucG9pbnRzLCBwYXBlci5zdHJva2UsIHBhcGVyLmZpbGwpO1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgbGV0IGNwID0gbmV3IFBvaW50KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGxldCBwMCA9IHRoaXMucG9pbnRzWzBdO1xuXG4gICAgICBpZiAoY3AuZGlzdGFuY2UocDApIDwgNSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMocDAueCwgcDAueSwgMywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGxldCBwID0gbmV3IFBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICBpZiAocC5kaXN0YW5jZSh0aGlzLnBvaW50c1swXSkgPCA1KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZVBhdGgodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAyKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcblxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvclggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5yZXBlYXQpIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuY2FuY2VsUGF0aCgpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2JsdXInKSB7XG4gICAgICB0aGlzLm9uQmx1cihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlbmNpbFRvb2w7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi8uLi9nZW9tL3BvaW50JztcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi4vLi4vZ2VvbS9yZWN0YW5nbGUnO1xuaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcblxuY2xhc3MgUG9pbnRUb29sIGV4dGVuZHMgVG9vbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdwb2ludC1jdXJzb3InKTtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGlmIChwYXBlci5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcGVyLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBwYXBlci5zZWxlY3Rpb25baV07XG4gICAgICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcbiAgICAgICAgbGV0IHNwID0gcGFwZXIud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcblxuICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2V4Y2x1c2lvbic7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICAgICAgbGV0IHBwID0gcGFwZXIud29ybGRUb1NjcmVlbihwLnggKyBzaGFwZS54LCBwLnkgKyBzaGFwZS55KTtcbiAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnBvaW50cy5pbmNsdWRlcyhwKTtcbiAgICAgICAgICBsZXQgeCA9IHBwLnggPj4gMDtcbiAgICAgICAgICBsZXQgeSA9IHBwLnkgPj4gMDtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5yZWN0KCh4KSAtIDMsICh5KSAtIDMsIDUsIDUpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCgoeCArIDAuNSkgLSAzLCAoeSArIDAuNSkgLSAzLCA0LCA0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgeCA9IChzcC54ID4+IDApICsgMC41O1xuICAgICAgICBsZXQgeSA9IChzcC55ID4+IDApICsgMC41O1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIDUsIHkpO1xuICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkgLSA1KTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JheSc7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2V4Y2x1c2lvbic7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHBhcGVyLmRvd25YLCBwYXBlci5kb3duWSk7XG4gICAgICBjdHgubGluZVRvKHBhcGVyLmN1cnNvclgsIHBhcGVyLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8ocGFwZXIuY3Vyc29yWCwgcGFwZXIuY3Vyc29yWSk7XG4gICAgICBjdHgubGluZVRvKHBhcGVyLmRvd25YLCBwYXBlci5jdXJzb3JZKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIGxldCBzcCA9IHBhcGVyLnNjcmVlblRvV29ybGQoeCwgeSk7XG4gICAgZm9yICh2YXIgaSA9IHBhcGVyLmZyYW1lLnNoYXBlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHNoYXBlID0gcGFwZXIuZnJhbWUuc2hhcGVzW2ldO1xuICAgICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuICAgICAgaWYgKHBhcGVyLnBvaW50T25TaGFwZUxpbWl0KHNoYXBlLCB4LCB5KSkge1xuICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2hhcGUuZmlsbCkge1xuICAgICAgICAgIGlmIChwYXBlci5wb2ludEluU2hhcGUoc2hhcGUsIHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcG9pbnRIaXRUZXN0KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcGVyLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gcGFwZXIuc2VsZWN0aW9uW2ldO1xuICAgICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgICBsZXQgd3AgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHgsIHkpO1xuICAgICAgd3Auc3VidHJhY3Qoc2hhcGUucG9zaXRpb24pO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgICAgbGV0IGQgPSBwLmRpc3RhbmNlKHdwKTtcbiAgICAgICAgaWYgKGQgPCA3KSB7XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBtb3ZlUG9pbnRzQnkoZHgsIGR5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSB0aGlzLnBvaW50c1tpXTtcbiAgICAgIHAueCArPSBkeDtcbiAgICAgIHAueSArPSBkeTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGluc2VydFBvaW50KHgsIHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcGVyLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gcGFwZXIuc2VsZWN0aW9uW2ldO1xuICAgICAgbGV0IGhpdCA9IHBhcGVyLnBvaW50T25TaGFwZUxpbWl0KHNoYXBlLCB4LCB5KTtcbiAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuICAgICAgICBwb2ludHMuc3BsaWNlKGhpdC5pbmRleCwgMCwgaGl0LnBvaW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGxldCBtb2RpZmllciA9IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50Lm1ldGFLZXk7XG4gICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0UG9pbnQocGFwZXIuZG93blgsIHBhcGVyLmRvd25ZKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgaGl0ID0gdGhpcy5wb2ludEhpdFRlc3QocGFwZXIuZG93blgsIHBhcGVyLmRvd25ZKTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgIGlmICghdGhpcy5wb2ludHMuaW5jbHVkZXMoaGl0KSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBbIGhpdCBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICAgIGxldCBoaXQgPSB0aGlzLmhpdFRlc3QocGFwZXIuZG93blgsIHBhcGVyLmRvd25ZKTtcbiAgICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IGhpdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIGxldCBtb2RpZmllciA9IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50Lm1ldGFLZXk7XG5cbiAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgICAgdGhpcy5wb2ludHMgPSBbXTtcblxuICAgICAgbGV0IHhtaW4gPSBwYXBlci5kb3duWCwgeW1pbiA9IHBhcGVyLmRvd25ZO1xuICAgICAgbGV0IHhtYXggPSBwYXBlci5jdXJzb3JYLCB5bWF4ID0gcGFwZXIuY3Vyc29yWTtcblxuICAgICAgaWYgKHhtaW4gPiB4bWF4KSBbeG1pbiwgeG1heF0gPSBbIHhtYXgsIHhtaW4gXTtcbiAgICAgIGlmICh5bWluID4geW1heCkgW3ltaW4sIHltYXhdID0gWyB5bWF4LCB5bWluIF07XG5cbiAgICAgIGxldCBwMSA9IHBhcGVyLnNjcmVlblRvV29ybGQoeG1pbiwgeW1pbik7XG4gICAgICBsZXQgcDIgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHhtYXgsIHltYXgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcGVyLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBwYXBlci5zZWxlY3Rpb25baV07XG4gICAgICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgICAgICBsZXQgeCA9IHAueCArIHNoYXBlLng7XG4gICAgICAgICAgbGV0IHkgPSBwLnkgKyBzaGFwZS55O1xuICAgICAgICAgIGlmICh4ID4gcDEueCAmJiB5IDwgcDEueSAmJiB4IDwgcDIueCAmJiB5ID4gcDIueSkge1xuICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICAgIGxldCBoaXQgPSB0aGlzLmhpdFRlc3QocGFwZXIuY3Vyc29yWCwgcGFwZXIuY3Vyc29yWSk7XG4gICAgICAgIGlmIChoaXQgJiYgaGl0ID09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKG1vZGlmaWVyKSB7XG4gICAgICAgICAgICBpZiAocGFwZXIuc2VsZWN0aW9uLmluY2x1ZGVzKGhpdCkpIHtcbiAgICAgICAgICAgICAgcGFwZXIuc2VsZWN0aW9uLnNwbGljZShwYXBlci5zZWxlY3Rpb24uaW5kZXhPZihoaXQpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBwYXBlci5zZWxlY3Rpb24ucHVzaChoaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcGVyLnNlbGVjdGlvbiA9IFtoaXRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwYXBlci5zZWxlY3Rpb24gPSBbXTtcbiAgICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLm1vdmVQb2ludHNCeShwYXBlci5kZWx0YVgsIC1wYXBlci5kZWx0YVkpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocGFwZXIuZG93bikge1xuICAgICAgICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBkeCA9IHBhcGVyLmN1cnNvclggLSBwYXBlci5kb3duWDtcbiAgICAgICAgICAgIGxldCBkeSA9IHBhcGVyLmN1cnNvclkgLSBwYXBlci5kb3duWTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiAyIHx8IE1hdGguYWJzKGR5KSA+IDIpIHtcbiAgICAgICAgICAgICAgdGhpcy5tb2RlID0gJ2RyYWcnO1xuICAgICAgICAgICAgICB0aGlzLm1vdmVQb2ludHNCeShkeCwgLWR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmluc2VydFBvaW50KHBhcGVyLmRvd25YLCBwYXBlci5kb3duWSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuXG4gIH1cblxuICBvbkJsdXIoZXZlbnQpIHtcblxuICB9XG5cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnYmx1cicpIHtcbiAgICAgIHRoaXMub25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50VG9vbDtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2V2ZW50cy5qcyc7XG5cbmNsYXNzIFRvb2wgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdXJzb3Iud2lkdGggPSAxNjtcbiAgICB0aGlzLmN1cnNvci5oZWlnaHQgPSAxNjtcbiAgfVxuXG4gIGdldEN1cnNvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJzb3I7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG5cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4uLy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFBvaW50TGlzdCBmcm9tICcuLi8uLi9nZW9tL3BvaW50X2xpc3QnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4uLy4uL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IFRvb2wgZnJvbSAnLi90b29sJztcblxuY2xhc3MgVHJpYW5nbGVUb29sIGV4dGVuZHMgVG9vbCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnN0cm9rZSA9IDA7XG4gICAgdGhpcy5maWxsID0gMDtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncGVuY2lsLWN1cnNvcicpO1xuICB9XG5cbiAgY2xvc2VQYXRoKGNsb3NlZD1mYWxzZSkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPT0gMykge1xuICAgICAgbGV0IHBvaW50TGlzdCA9IG5ldyBQb2ludExpc3QodGhpcy5wb2ludHMpO1xuICAgICAgbGV0IGJvdW5kcyA9IHBvaW50TGlzdC5nZXRCb3VuZHMoKTtcbiAgICAgIGxldCB3cCA9IHBhcGVyLnNjcmVlblRvV29ybGQoYm91bmRzLnggKyBib3VuZHMud2lkdGggLyAyLCBib3VuZHMueSArIGJvdW5kcy5oZWlnaHQgLyAyKTtcbiAgICAgIGxldCBwb2ludHMgPSBwb2ludExpc3QucG9pbnRzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgICAgbGV0IHBwID0gcGFwZXIuc2NyZWVuVG9Xb3JsZChwLngsIHAueSk7XG4gICAgICAgIHAueCA9IHBwLnggLSB3cC54O1xuICAgICAgICBwLnkgPSBwcC55IC0gd3AueTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNoYXBlID0gbmV3IFNoYXBlKHsgeDogd3AueCwgeTogd3AueSwgcG9pbnRMaXN0OiBwb2ludExpc3QsXG4gICAgICAgIGZpbGw6IHBhcGVyLmZpbGwsIHN0cm9rZTogcGFwZXIuc3Ryb2tlLCBjbG9zZWQ6IGNsb3NlZCB9KTtcblxuICAgICAgdGhpcy5lbWl0KCdzaGFwZScsIHNoYXBlKTtcbiAgICB9XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgfVxuXG4gIGNhbmNlbFBhdGgoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgcmVuZGVyUGF0aChjdHgsIHBvaW50cywgc3Ryb2tlLCBmaWxsLCBjbG9zZWQ9ZmFsc2UpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2UgIT09IHVuZGVmaW5lZCA/IChzdHJva2UgPyBzdHJva2UgOiAndHJhbnNwYXJlbnQnKSA6ICd0cmFuc3BhcmVudCc7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGwgIT09IHVuZGVmaW5lZCA/IChmaWxsID8gZmlsbCA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcblxuICAgIGlmIChzdHJva2UgPT0gbnVsbCkge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2N5YW4nO1xuICAgIH1cblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbaV07XG4gICAgICBpZiAoaSA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGVsc2VcbiAgICAgICAgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcmVuZGVyKGN0eCkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyUGF0aChjdHgsIHRoaXMucG9pbnRzLCBwYXBlci5zdHJva2UsIHBhcGVyLmZpbGwpO1xuXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICBjdHgubGluZVRvKHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgbGV0IGNwID0gbmV3IFBvaW50KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAgIGxldCBwMCA9IHRoaXMucG9pbnRzWzBdO1xuXG4gICAgICBpZiAoY3AuZGlzdGFuY2UocDApIDwgNSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMocDAueCwgcDAueSwgNSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIGxldCBwID0gbmV3IFBvaW50KGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9pbnRzLmxlbmd0aCk7XG4gICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID09IDMpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBhdGgodHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygnZG93bicsIHApO1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgbGV0IHAgPSBuZXcgUG9pbnQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gocCk7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygndXAnKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnJlcGVhdCkge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmNhbmNlbFBhdGgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGV2ZW50KSB7XG4gICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnYmx1cicpIHtcbiAgICAgIHRoaXMub25CbHVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGVUb29sO1xuIiwiXG5jbGFzcyBVbmRvU3RhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0YWNrID0gW107XG4gICAgdGhpcy5tYXJrZXIgPSAwO1xuICB9XG5cbiAgcHVzaChpdGVtKSB7XG4gICAgdGhpcy5zdGFjay5zcGxpY2UodGhpcy5tYXJrZXIgKyAxKTtcbiAgICB0aGlzLnN0YWNrLnB1c2goaXRlbSk7XG4gICAgdGhpcy5tYXJrZXIgPSB0aGlzLnN0YWNrLmxlbmd0aCAtIDE7XG4gIH1cblxuICBjdXJyZW50KCkge1xuICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5tYXJrZXJdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVuZG8oKSB7XG4gICAgaWYgKHRoaXMubWFya2VyID4gMCkge1xuICAgICAgdGhpcy5tYXJrZXItLTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWRvKCkge1xuICAgIGlmICh0aGlzLm1hcmtlciA8IHRoaXMuc3RhY2subGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5tYXJrZXIrKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5kb1N0YWNrO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaGFwZSBmcm9tICcuL2Rpc3BsYXkvc2hhcGUnO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZGlzcGxheS9ncm91cCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlci9wYXBlcic7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yJztcblxuY2xhc3MgU3RhZ2UgZXh0ZW5kcyBFZGl0b3Ige1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2UnKTtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gcGFyYW1zLndpZHRoID09IHVuZGVmaW5lZCA/IDMyMCA6IHBhcmFtcy53aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBwYXJhbXMuaGVpZ2h0ID09IHVuZGVmaW5lZCA/IDIwMCA6IHBhcmFtcy5oZWlnaHQ7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHN1cGVyLnNob3coKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgc3VwZXIuaGlkZSgpO1xuICB9XG5cbiAgYWRkKHRyYW5zZm9ybSkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0cmFuc2Zvcm0pO1xuICAgIHRyYW5zZm9ybS5hZGRlZFRvU3RhZ2UoKTtcbiAgICB0cmFuc2Zvcm0ub24oJ3ZhbHVlY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZWRpdCgpIHtcbiAgfVxuXG4gIHNlbGVjdE1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICB9XG5cbiAgZGVzZWxlY3QoKSB7XG4gIH1cblxuICByZW5kZXJTaGFwZShzaGFwZSwgeCwgeSkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgfVxuXG4gIG1vdmVTZWxlY3Rpb25CeShkeCwgZHkpIHtcbiAgfVxuXG4gIGJlZ2luRHJhZygpIHtcbiAgfVxuXG4gIGNhbmNlbERyYWcoKSB7XG4gIH1cblxuICBiZWdpbk1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAgIHRoaXMubW9kZSA9ICdtYXJxdWVlJztcbiAgfVxuXG4gIGNhbmNlbE1hcnF1ZWUoKSB7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgLy8gZm9yICh2YXIgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAvLyAgIGxldCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgLy8gICBpZiAoY2hpbGQuaGl0VGVzdCh4LCB5KSkge1xuICAgIC8vICAgICByZXR1cm4gY2hpbGQ7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2hvd1BhcGVyKCkge1xuXG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIC8vIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYIC0gdGhpcy5lbC5vZmZzZXRMZWZ0O1xuICAgIC8vIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZIC0gdGhpcy5lbC5vZmZzZXRUb3A7XG4gICAgLy9cbiAgICAvLyB0aGlzLmRvd25YID0gdGhpcy5jdXJzb3JYO1xuICAgIC8vIHRoaXMuZG93blkgPSB0aGlzLmN1cnNvclk7XG4gICAgLy9cbiAgICAvLyBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAvLyBpZiAoaGl0KSB7XG4gICAgLy8gICBpZiAodGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuICAgIC8vXG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgLy8gICAgIHRoaXMuc2VsZWN0aW9uID0gWyBoaXQgXTtcbiAgICAvLyAgICAgaGl0LnNlbGVjdCgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgLy8gaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpXG4gICAgLy8gICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICAvLyBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgLy8gICB0aGlzLnNlbGVjdE1hcnF1ZWUodGhpcy5kb3duWCwgdGhpcy5kb3duWSwgdGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIC8vICAgdGhpcy5jYW5jZWxNYXJxdWVlKCk7XG4gICAgLy8gfVxuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAvLyB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICAvLyB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuICAgIC8vXG4gICAgLy8gdGhpcy5kZWx0YVggPSB0aGlzLmxhc3RYID8gdGhpcy5jdXJzb3JYIC0gdGhpcy5sYXN0WCA6IDA7XG4gICAgLy8gdGhpcy5kZWx0YVkgPSB0aGlzLmxhc3RZID8gdGhpcy5jdXJzb3JZIC0gdGhpcy5sYXN0WSA6IDA7XG4gICAgLy9cbiAgICAvLyBpZiAoZXZlbnQuYnV0dG9ucyAmIDEpIHtcbiAgICAvLyAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgLy8gICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAvLyAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeSh0aGlzLmRlbHRhWCwgdGhpcy5kZWx0YVkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgLy8gICAgIHRoaXMucmVuZGVyKCk7XG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNlIHtcbiAgICAvLyAgICAgbGV0IGR4ID0gdGhpcy5jdXJzb3JYIC0gdGhpcy5kb3duWDtcbiAgICAvLyAgICAgbGV0IGR5ID0gdGhpcy5jdXJzb3JZIC0gdGhpcy5kb3duWTtcbiAgICAvLyAgICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgIC8vICAgICAgIGlmIChNYXRoLmFicyhkeCkgPj0gMiB8fCBNYXRoLmFicyhkeSkgPj0gMikge1xuICAgIC8vICAgICAgICAgdGhpcy5iZWdpbkRyYWcoKTtcbiAgICAvLyAgICAgICAgIHRoaXMubW92ZVNlbGVjdGlvbkJ5KGR4LCBkeSk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2Uge1xuICAgIC8vICAgICAgIHRoaXMuYmVnaW5NYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuZG93blggKyBkeCwgdGhpcy5kb3duWSArIGR5KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyB0aGlzLmxhc3RYID0gdGhpcy5jdXJzb3JYO1xuICAgIC8vIHRoaXMubGFzdFkgPSB0aGlzLmN1cnNvclk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgfVxuXG4gIG9uRGJsQ2xpY2soZXZlbnQpIHtcbiAgICAvLyB0aGlzLmVkaXQoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFnZTtcbiIsIlxuLy8gQ29weXJpZ2h0IChjKSAxOTcwLTIwMDMsIFdtLiBSYW5kb2xwaCBGcmFua2xpblxuLy8gaHR0cHM6Ly93cmYuZWNzZS5ycGkuZWR1Ly9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuXG5mdW5jdGlvbiBwb2ludEluUG9seWdvbihwb2ludHMsIHRlc3R4LCB0ZXN0eSkge1xuICBsZXQgaSwgaiwgYyA9IDA7XG4gIGZvciAobGV0IGkgPSAwLCBqID0gcG9pbnRzLmxlbmd0aCAtIDE7IGkgPCBwb2ludHMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgaWYgKCgocG9pbnRzW2ldLnkgPiB0ZXN0eSkgIT0gKHBvaW50c1tqXS55ID4gdGVzdHkpKSAmJlxuICAgICAgKHRlc3R4IDwgKHBvaW50c1tqXS54IC0gcG9pbnRzW2ldLngpICogKHRlc3R5IC0gcG9pbnRzW2ldLnkpIC8gKHBvaW50c1tqXS55IC0gcG9pbnRzW2ldLnkpICsgcG9pbnRzW2ldLngpKVxuICAgICAgYyA9ICFjO1xuICB9XG4gIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZSh4MSwgeTEsIHgyLCB5MiwgeG1pbiwgeW1pbiwgeG1heCwgeW1heCkge1xuICAvLyBDb21wbGV0ZWx5IG91dHNpZGUuXG4gIGlmICgoeDEgPD0geG1pbiAmJiB4MiA8PSB4bWluKSB8fCAoeTEgPD0geW1pbiAmJiB5MiA8PSB5bWluKSB8fFxuICAgICAgKHgxID49IHhtYXggJiYgeDIgPj0geG1heCkgfHwgKHkxID49IHltYXggJiYgeTIgPj0geW1heCkpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtID0gKHkyIC0geTEpIC8gKHgyIC0geDEpO1xuXG4gIHZhciB5ID0gbSAqICh4bWluIC0geDEpICsgeTE7XG4gIGlmICh5ID4geW1pbiAmJiB5IDwgeW1heCkgcmV0dXJuIHRydWU7XG5cbiAgeSA9IG0gKiAoeG1heCAtIHgxKSArIHkxO1xuICBpZiAoeSA+IHltaW4gJiYgeSA8IHltYXgpIHJldHVybiB0cnVlO1xuXG4gIHZhciB4ID0gKHltaW4gLSB5MSkgLyBtICsgeDE7XG4gIGlmICh4ID4geG1pbiAmJiB4IDwgeG1heCkgcmV0dXJuIHRydWU7XG5cbiAgeCA9ICh5bWF4IC0geTEpIC8gbSArIHgxO1xuICBpZiAoeCA+IHhtaW4gJiYgeCA8IHhtYXgpIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaW5lSW50ZXJzZWN0c1JlY3RhbmdsZTogbGluZUludGVyc2VjdHNSZWN0YW5nbGUsXG4gIHBvaW50SW5Qb2x5Z29uOiBwb2ludEluUG9seWdvblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==