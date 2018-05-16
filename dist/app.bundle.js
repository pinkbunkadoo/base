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

      var sequence = new Sequence();
      sequence.add(new Frame());
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

    _this.palette = ['#333333', '#666666', '#999999', '#cccccc', '#ffffff'];

    _this.points = [];
    _this.shapes = [];
    _this.fill = _this.palette[2];
    _this.stroke = _this.palette[0];

    _this.selection = [];
    _this.clipboard = [];
    _this.sequence = new _sequence2.default();

    _this.el.classList.add('paper');

    _this.canvas = document.createElement('canvas');
    _this.canvas.width = window.innerWidth;
    _this.canvas.height = window.innerHeight;

    _this.el.appendChild(_this.canvas);

    _this.el.addEventListener('pointerleave', _this);
    _this.el.addEventListener('pointerenter', _this);

    _this.cursorX = 0;
    _this.cursorY = 0;

    _this.addFrame();
    _this.goFrame(0);
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
      this.canvas.width = width;
      this.canvas.height = height;
      this.render();
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

      // let vec1 = new Vector(120, 150);
      // let vec2 = new Vector(this.cursorX, this.cursorY);
      // let vec3 = vec2.project(vec1) || new Vector();
      //
      // ctx.beginPath();
      // ctx.moveTo(0, 0);
      // ctx.lineTo(vec1.x, vec1.y);
      // ctx.strokeStyle = 'blue';
      // ctx.stroke();
      //
      // ctx.beginPath();
      // ctx.moveTo(0, 0);
      // ctx.lineTo(vec2.x, vec2.y);
      // ctx.strokeStyle = 'red';
      // ctx.stroke();
      //
      // ctx.beginPath();
      // ctx.moveTo(0, 0);
      // ctx.lineTo(vec3.x, vec3.y);
      // ctx.strokeStyle = 'cyan';
      // ctx.stroke();
      //
      // let p1 = new Point(vec3.x, vec3.y);
      // let p2 = new Point(vec2.x, vec2.y);
      // let d = p1.distance(p2);
      //
      // ctx.fillText(d, 50, 50);
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
        } else {
          return;
        }
        this.toolName = toolName;
        if (this.tool.cursor) this.setCursor(this.tool.cursor);
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

      // this.render();
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
          var set = ['1', '2', '3', '4', '!', '@', '£', '$'];
          var index = set.indexOf(key);
          if (index !== -1) {
            if (index > 3) {
              this.setStroke(this.palette[index - 4] || null);
            } else {
              this.setFill(this.palette[index] || null);
            }
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

    var _this = _possibleConstructorReturn(this, (PathTool.__proto__ || Object.getPrototypeOf(PathTool)).call(this));

    _this.cursor = document.createElement('div');
    _this.cursor.classList.add('pointer-cursor');
    return _this;
  }

  _createClass(PathTool, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NlcXVlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5L3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXkvdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vcG9pbnRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb20vdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci9wYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFwZXIvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci90b29scy9wYXRoX3Rvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcGVyL3Rvb2xzL3BlbmNpbF90b29sLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci90b29scy9wb2ludF90b29sLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci90b29scy90b29sLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXBlci91bmRvX3N0YWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJlZGl0b3JzIiwic2VxdWVuY2VzIiwicGFwZXIiLCJsaWJyYXJ5Iiwic3RhZ2UiLCJnbG9iYWwiLCJhcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9ucyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJidXR0b24iLCJpbm5lckhUTUwiLCJvbmNsaWNrIiwic2F2ZSIsImFwcGVuZENoaWxkIiwic2V0RWRpdG9yIiwibG9hZCIsInNlcXVlbmNlIiwiU2VxdWVuY2UiLCJGcmFtZSIsInB1c2giLCJzZXRTZXF1ZW5jZSIsImluaXRFdmVudExpc3RlbmVycyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWdpYyIsInRpdGxlIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZSIsImVkaXRvciIsImhpZGUiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJldmVudCIsInJlcGVhdCIsImtleSIsInByZXZlbnREZWZhdWx0IiwicmVzaXplVGltZXJJZCIsInNldFRpbWVvdXQiLCJzZXRTaXplIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidHlwZSIsIm9uQ29udGV4dE1lbnUiLCJvblJlc2l6ZSIsIm9uS2V5RG93biIsIm9uTW91c2VEb3duIiwiaGFuZGxlRXZlbnQiLCJpbml0Iiwic2hhcGVzIiwic2hhcGUiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJmcmFtZSIsImkiLCJsZW5ndGgiLCJjb3B5IiwiR3JvdXAiLCJwYXJhbXMiLCJjaGlsZHJlbiIsImNvbnRlbnQiLCJBcnJheSIsIngiLCJ5IiwiaGl0VGVzdCIsInJlY3RzIiwiY2hpbGQiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJ4bWluIiwieW1pbiIsInhtYXgiLCJ5bWF4IiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZnJhbWVzIiwidW5kZWZpbmVkIiwiZnJhbWVObyIsIlNoYXBlIiwiZmlsbCIsInN0cm9rZSIsImNsb3NlZCIsInBvaW50TGlzdCIsInBvaW50cyIsIlRleHQiLCJzaXplIiwic2V0VGV4dCIsInZhbHVlIiwiVHJhbnNmb3JtIiwicG9zaXRpb24iLCJzZWxlY3RlZCIsImVtaXQiLCJFZGl0b3IiLCJlbCIsIkV2ZW50IiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwiQ2lyY2xlIiwiciIsIngxIiwieTEiLCJ4MiIsInkyIiwiZHgiLCJkeSIsImQiLCJNYXRoIiwic3FydCIsIlBvaW50IiwicG9pbnQiLCJwIiwiUG9pbnRMaXN0IiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJORUdBVElWRV9JTkZJTklUWSIsIlJlY3RhbmdsZSIsImFtb3VudCIsIlZlY3RvciIsInZlY3RvciIsImRvdCIsInJhdGlvIiwiTGlicmFyeSIsIlBhcGVyIiwicGFsZXR0ZSIsInNlbGVjdGlvbiIsImNsaXBib2FyZCIsImNhbnZhcyIsImN1cnNvclgiLCJjdXJzb3JZIiwiYWRkRnJhbWUiLCJnb0ZyYW1lIiwic2V0VG9vbCIsInJlbmRlciIsImdldFBvaW50cyIsImN0eCIsImdldENvbnRleHQiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInNwIiwid29ybGRUb1NjcmVlbiIsImoiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJyZXN0b3JlIiwidHJhbnNsYXRlIiwiZmlsbFJlY3QiLCJyZW5kZXJBeGlzIiwiZ2V0RnJhbWUiLCJyZW5kZXJPdXRsaW5lIiwicmVuZGVyU2hhcGUiLCJ0b29sIiwidGV4dEJhc2VsaW5lIiwiZm9udCIsImZpbGxUZXh0IiwiY291bnQiLCJwMCIsInAxIiwic3AwIiwic3AxIiwibGluZUludGVyc2VjdHNSZWN0YW5nbGUiLCJ0eCIsInR5Iiwic2NyZWVuVG9Xb3JsZCIsInBvaW50SW5Qb2x5Z29uIiwibWFyZ2luIiwidGVtcCIsInN1YnRyYWN0IiwiZGlzdGFuY2UiLCJwMiIsImN1cnNvciIsImNvbnRhaW5zIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwidG9vbE5hbWUiLCJvbiIsInNhdmVVbmRvIiwiYWRkU2hhcGUiLCJzZXRDdXJzb3IiLCJ1bmRvU3RhY2siLCJ1bmRvIiwiY3VycmVudCIsInJlZG8iLCJjbGVhckZyYW1lIiwicmVtb3ZlIiwiY2xlYXIiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInNldCIsImNvbmNhdCIsInBsYXllciIsInBsYXkiLCJkb3duWCIsInBhZ2VYIiwiZG93blkiLCJwYWdlWSIsImRvd24iLCJkZWx0YVgiLCJsYXN0WCIsImRlbHRhWSIsImxhc3RZIiwic2hpZnRLZXkiLCJtZXRhS2V5IiwiY3RybEtleSIsImNvcHlTZWxlY3RlZCIsInBhc3RlIiwic2VsZWN0QWxsIiwiZGVsZXRlU2VsZWN0ZWQiLCJkZWxldGVGcmFtZSIsImJyaW5nVG9Gcm9udCIsInNlbmRUb0JhY2siLCJzZXRTdHJva2UiLCJzZXRGaWxsIiwiZGlzcGxheSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwib25EYmxDbGljayIsIm9uQmx1ciIsIm9uUG9pbnRlckVudGVyIiwib25Qb2ludGVyTGVhdmUiLCJQbGF5ZXIiLCJmcHMiLCJwbGF5aW5nIiwiZnJhbWVJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0ZXAiLCJiaW5kIiwidGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwidGltZURlbHRhIiwicHJldmlvdXNUaW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsImRvbmUiLCJQYXRoVG9vbCIsInBvaW50T25TaGFwZUxpbWl0IiwicG9pbnRJblNoYXBlIiwiY2hhbmdlZCIsIm1vZGUiLCJ0ZXh0QWxpZ24iLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJtb2RpZmllciIsImhpdCIsInRhcmdldCIsInVwZGF0ZSIsImRyYWdPZmYiLCJzZWxlY3RNYXJxdWVlIiwibW92ZVNlbGVjdGlvbkJ5IiwiYWJzIiwiZHJhZ09uIiwiUGVuY2lsVG9vbCIsIndwIiwicHAiLCJyZW5kZXJQYXRoIiwiY3AiLCJhcmMiLCJQSSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY2FuY2VsUGF0aCIsIlBvaW50VG9vbCIsImFsdEtleSIsImluc2VydFBvaW50IiwicG9pbnRIaXRUZXN0IiwibW92ZVBvaW50c0J5IiwiVG9vbCIsIlVuZG9TdGFjayIsInN0YWNrIiwibWFya2VyIiwiaXRlbSIsIlN0YWdlIiwidHJhbnNmb3JtIiwiYWRkZWRUb1N0YWdlIiwiY2xlYXJSZWN0IiwidGVzdHgiLCJ0ZXN0eSIsImMiLCJtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRU1BLEc7QUFDSixpQkFBYztBQUFBOztBQUNaLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsU0FBS0MsT0FB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QUkxQyxJQUFJK04sS0FBS3pOLE9BQU9vQyxFQUFaLElBQWtCQyxFQUExQjtBQUNBLE1BQUkzQyxJQUFJTyxJQUFKLElBQVlQLElBQUlTLElBQXBCLEVBQTBCLE9BQU8sSUFBUDs7QUFFMUJULE1BQUkrTixLQUFLdk4sT0FBT2tDLEVBQVosSUFBa0JDLEVBQXRCO0FBQ0EsTUFBSTNDLElBQUlPLElBQUosSUFBWVAsSUFBSVMsSUFBcEIsRUFBMEIsT0FBTyxJQUFQOztBQUUxQixNQUFJVixJQUFJLENBQUNRLE9BQU9vQyxFQUFSLElBQWNvTCxDQUFkLEdBQWtCckwsRUFBMUI7QUFDQSxNQUFJM0MsSUFBSU8sSUFBSixJQUFZUCxJQUFJUyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCVCxNQUFJLENBQUNVLE9BQU9rQyxFQUFSLElBQWNvTCxDQUFkLEdBQWtCckwsRUFBdEI7QUFDQSxNQUFJM0MsSUFBSU8sSUFBSixJQUFZUCxJQUFJUyxJQUFwQixFQUEwQixPQUFPLElBQVA7O0FBRTFCLFNBQU8sS0FBUDtBQUNEOztrQkFFYztBQUNiZ0csMkJBQXlCQSx1QkFEWjtBQUViSSxrQkFBZ0JBO0FBRkgsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2ggKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuIiwiaW1wb3J0IFN0YWdlIGZyb20gJy4vc3RhZ2UnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXIvcGFwZXInO1xuaW1wb3J0IExpYnJhcnkgZnJvbSAnLi9saWJyYXJ5JztcbmltcG9ydCBUZXh0IGZyb20gJy4vZGlzcGxheS90ZXh0JztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb20gPSBbXTtcbiAgICB0aGlzLmVkaXRvcnMgPSBbXTtcbiAgICB0aGlzLnNlcXVlbmNlcyA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmVkaXRvcnMucGFwZXIgPSBuZXcgUGFwZXIoKTtcbiAgICB0aGlzLmVkaXRvcnMubGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG4gICAgdGhpcy5lZGl0b3JzLnN0YWdlID0gbmV3IFN0YWdlKCk7XG5cbiAgICBnbG9iYWwucGFwZXIgPSB0aGlzLmVkaXRvcnMucGFwZXI7XG5cbiAgICB0aGlzLmRvbS5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5cbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZWRpdG9yLWJ1dHRvbnMnKTtcblxuICAgIGxldCBidXR0b247XG5cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICdzYXZlJztcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICdsaWJyYXJ5JztcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0RWRpdG9yKHRoaXMuZWRpdG9ycy5saWJyYXJ5KTtcbiAgICB9XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnc3RhZ2UnO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRFZGl0b3IodGhpcy5lZGl0b3JzLnN0YWdlKTtcbiAgICB9XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAncGFwZXInO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRFZGl0b3IodGhpcy5lZGl0b3JzLnBhcGVyKTtcbiAgICB9XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICAgIHRoaXMuZG9tLmJ1dHRvbnMgPSBidXR0b25zO1xuXG4gICAgdGhpcy5sb2FkKCk7XG5cbiAgICB0aGlzLnNldEVkaXRvcih0aGlzLmVkaXRvcnMucGFwZXIpO1xuXG4gICAgbGV0IHNlcXVlbmNlID0gbmV3IFNlcXVlbmNlKCk7XG4gICAgc2VxdWVuY2UuYWRkKG5ldyBGcmFtZSgpKTtcbiAgICB0aGlzLnNlcXVlbmNlcy5wdXNoKHNlcXVlbmNlKTtcbiAgICB0aGlzLmVkaXRvcnMucGFwZXIuc2V0U2VxdWVuY2Uoc2VxdWVuY2UpO1xuXG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGluaXRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzKTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgbGV0IG1hZ2ljID0geyB0aXRsZTogJ2hleScgfTtcbiAgICBsb2NhbFN0b3JhZ2VbJ21hZ2ljJ10gPSBKU09OLnN0cmluZ2lmeShtYWdpYyk7XG4gICAgY29uc29sZS5sb2coJ3NhdmVkIScpO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBsZXQgbWFnaWMgPSBsb2NhbFN0b3JhZ2VbJ21hZ2ljJ107XG4gICAgaWYgKG1hZ2ljKSB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKG1hZ2ljKSk7XG4gICAgICBjb25zb2xlLmxvZygnbG9hZGVkIScpO1xuICAgIH1cbiAgfVxuXG4gIHNldEVkaXRvcihlZGl0b3IpIHtcbiAgICBpZiAoZWRpdG9yICE9PSB0aGlzLmVkaXRvcikge1xuICAgICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yLmhpZGUoKTtcbiAgICAgICAgdGhpcy5kb20uYXBwLnJlbW92ZUNoaWxkKHRoaXMuZWRpdG9yLmRvbSgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgICAgdGhpcy5kb20uYXBwLmFwcGVuZENoaWxkKHRoaXMuZWRpdG9yLmRvbSgpKTtcbiAgICAgIHRoaXMuZWRpdG9yLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnJlcGVhdCkge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PSAnXScpIHtcblxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09ICddJykge1xuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgfVxuXG4gIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25SZXNpemUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucmVzaXplVGltZXJJZCkge1xuICAgICAgdGhpcy5yZXNpemVUaW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdG9ycy5wYXBlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVySWQgPSBudWxsO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdjb250ZXh0bWVudScpIHtcbiAgICAgIHRoaXMub25Db250ZXh0TWVudShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ3Jlc2l6ZScpIHtcbiAgICAgIHRoaXMub25SZXNpemUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmVkaXRvci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJyk7XG4gIGxldCBhcHAgPSBuZXcgQXBwKCk7XG4gIGdsb2JhbC5hcHAgPSBhcHA7XG4gIGFwcC5pbml0KCk7XG59KTtcbiIsIlxuY2xhc3MgRnJhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNoYXBlcyA9IFtdO1xuICB9XG5cbiAgYWRkKHNoYXBlKSB7XG4gICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZSk7XG4gIH1cblxuICByZW1vdmUoc2hhcGUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnNoYXBlcy5pbmRleE9mKHNoYXBlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnNoYXBlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gIH1cblxuICBjb3B5KCkge1xuICAgIGxldCBmcmFtZSA9IG5ldyBGcmFtZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZyYW1lLmFkZCh0aGlzLnNoYXBlc1tpXS5jb3B5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJhbWU7XG4iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4uL2dlb20vcmVjdGFuZ2xlJztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4vc2hhcGUnO1xuXG5jbGFzcyBHcm91cCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgYWRkKGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gY29udGVudFtpXTtcbiAgICAgICAgaWYgKHNoYXBlIGluc3RhbmNlb2YgU2hhcGUpIHRoaXMuYWRkKHNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFNoYXBlKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKHNoYXBlLmhpdFRlc3QoeCAtIHRoaXMueCwgeSAtIHRoaXMueSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgcmVjdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBib3VuZHMgPSBjaGlsZC5nZXRCb3VuZHMoKTtcbiAgICAgIHJlY3RzLnB1c2goYm91bmRzKTtcbiAgICB9XG5cbiAgICBpZiAocmVjdHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IDA7IC8vTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHltaW4gPSAwOyAvL051bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB4bWF4ID0gMDsgLy9OdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IDA7IC8vTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByZWN0ID0gcmVjdHNbaV07XG4gICAgICAgIHhtaW4gPSByZWN0LnggPCB4bWluID8gcmVjdC54IDogeG1pbjtcbiAgICAgICAgeW1pbiA9IHJlY3QueSA8IHltaW4gPyByZWN0LnkgOiB5bWluO1xuICAgICAgICB4bWF4ID0gcmVjdC54ICsgcmVjdC53aWR0aCA+IHhtYXggPyByZWN0LnggKyByZWN0LndpZHRoIDogeG1heDtcbiAgICAgICAgeW1heCA9IHJlY3QueSArIHJlY3QuaGVpZ2h0ID4geW1heCA/IHJlY3QueSArIHJlY3QuaGVpZ2h0IDogeW1heDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHhtaW4gKyB0aGlzLngsIHltaW4gKyB0aGlzLnksIHhtYXggLSB4bWluLCB5bWF4IC0geW1pbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJcbmNsYXNzIFNlcXVlbmNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mcmFtZXMgPSBbXTtcbiAgfVxuXG4gIGFkZChmcmFtZSwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMuZnJhbWVzLnNwbGljZShpbmRleCwgMCwgZnJhbWUpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZnJhbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RnJhbWUoZnJhbWVObykge1xuICAgIHJldHVybiB0aGlzLmZyYW1lc1tmcmFtZU5vXTtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzLmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXF1ZW5jZTtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFBvaW50TGlzdCBmcm9tICcuLi9nZW9tL3BvaW50X2xpc3QnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgU2hhcGUgZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy54ID0gcGFyYW1zLnggfHwgMDtcbiAgICB0aGlzLnkgPSBwYXJhbXMueSB8fCAwO1xuICAgIHRoaXMuZmlsbCA9IHBhcmFtcy5maWxsIHx8IG51bGw7XG4gICAgdGhpcy5zdHJva2UgPSBwYXJhbXMuc3Ryb2tlIHx8IG51bGw7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuXG4gICAgaWYgKHBhcmFtcy5wb2ludExpc3QpXG4gICAgICB0aGlzLnBvaW50TGlzdCA9IHBhcmFtcy5wb2ludExpc3QuY29weSgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMucG9pbnRMaXN0ID0gbmV3IFBvaW50TGlzdCgpO1xuICB9XG5cbiAgY29weSgpIHtcbiAgICByZXR1cm4gbmV3IFNoYXBlKHtcbiAgICAgIHg6IHRoaXMueCwgeTogdGhpcy55LCBwb2ludExpc3Q6IHRoaXMucG9pbnRMaXN0LCBzdHJva2U6IHRoaXMuc3Ryb2tlLFxuICAgICAgZmlsbDogdGhpcy5maWxsLCBjbG9zZWQ6IHRoaXMuY2xvc2VkXG4gICAgfSk7XG4gIH1cblxuICBnZXRQb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0LnBvaW50cztcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBsZXQgYm91bmRzID0gdGhpcy5wb2ludExpc3QuZ2V0Qm91bmRzKCk7XG4gICAgYm91bmRzLnggKz0gdGhpcy54O1xuICAgIGJvdW5kcy55ICs9IHRoaXMueTtcbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG4iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtJztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXRTaXplKHBhcmFtcy5zaXplIHx8IDQ4KTtcbiAgICB0aGlzLnNldFRleHQocGFyYW1zLmNvbnRlbnQpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgeyBFdmVudCwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcblxuY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KCk7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpcy5wb3NpdGlvbi54ID0gdmFsdWU7XG4gICAgdGhpcy5lbWl0KCd2YWx1ZWNoYW5nZScpO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnkgPSB2YWx1ZTtcbiAgICB0aGlzLmVtaXQoJ3ZhbHVlY2hhbmdlJyk7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gIH1cblxuICBoaXRUZXN0KHgsIHkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBkZXNlbGVjdCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgeyBFdmVudERpc3BhdGNoZXIgfSBmcm9tICcuL2V2ZW50cyc7XG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgZG9tKCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG5cbiAgc2hvdygpIHtcblxuICB9XG5cbiAgaGlkZSgpIHtcblxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcbiIsIlxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJhbXMpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbiAgZW1pdCh0eXBlLCAuLi5hcmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbaV07XG4gICAgICBpZiAobGlzdGVuZXIudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyB0eXBlOiB0eXBlLCBjYWxsYmFjazogY2FsbGJhY2sgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IEV2ZW50RGlzcGF0Y2hlciwgRXZlbnQgfTtcbiIsIlxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnIgPSByO1xuICB9XG5cbiAgaW50ZXJzZWN0c0xpbmVTZWdtZW50KHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgfVxuXG4gIGNvbnRhaW5zUG9pbnQoeCwgeSkge1xuICAgIGxldCBkeCA9IHggLSB0aGlzLng7XG4gICAgbGV0IGR5ID0geSAtIHRoaXMueTtcbiAgICBsZXQgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgcmV0dXJuIGQgPCB0aGlzLnI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xuIiwiXG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4IHx8IDA7XG4gICAgdGhpcy55ID0geSB8fCAwO1xuICB9XG5cbiAgZGlzdGFuY2UocG9pbnQpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIHBvaW50Lnk7XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gIH1cblxuICBhZGQocCkge1xuICAgIHRoaXMueCArPSBwLng7XG4gICAgdGhpcy55ICs9IHAueTtcbiAgfVxuXG4gIHN1YnRyYWN0KHApIHtcbiAgICB0aGlzLnggLT0gcC54O1xuICAgIHRoaXMueSAtPSBwLnk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vcmVjdGFuZ2xlJztcblxuY2xhc3MgUG9pbnRMaXN0IHtcbiAgY29uc3RydWN0b3IocG9pbnRzKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICBpZiAocG9pbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgUG9pbnQocC54LCBwLnkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb3B5KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnRMaXN0KHRoaXMucG9pbnRzKTtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICBsZXQgeG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIGxldCB5bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgbGV0IHhtYXggPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICBsZXQgeW1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgICB4bWluID0gcC54IDwgeG1pbiA/IHAueCA6IHhtaW47XG4gICAgICAgIHltaW4gPSBwLnkgPCB5bWluID8gcC55IDogeW1pbjtcbiAgICAgICAgeG1heCA9IHAueCA+IHhtYXggPyBwLnggOiB4bWF4O1xuICAgICAgICB5bWF4ID0gcC55ID4geW1heCA/IHAueSA6IHltYXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4bWluLCB5bWluLCB4bWF4IC0geG1pbiwgeW1heCAtIHltaW4pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50TGlzdDtcbiIsIlxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBncm93KGFtb3VudCkge1xuICAgIHRoaXMueCAtPSBhbW91bnQ7XG4gICAgdGhpcy55IC09IGFtb3VudDtcbiAgICB0aGlzLndpZHRoICs9IGFtb3VudCAqIDI7XG4gICAgdGhpcy5oZWlnaHQgKz0gYW1vdW50ICogMjtcbiAgfVxuXG4gIHBvaW50SW5zaWRlKHgsIHkpIHtcbiAgICByZXR1cm4gKHggPiB0aGlzLnggJiYgeCA8IHRoaXMueCArIHRoaXMud2lkdGggJiYgeSA+IHRoaXMueSAmJiB5IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIlxuY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGRvdCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gKHRoaXMueCAqIHZlY3Rvci54ICsgdGhpcy55ICogdmVjdG9yLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHByb2plY3QodmVjdG9yKSB7XG4gICAgbGV0IGQgPSB2ZWN0b3IuZG90KHZlY3Rvcik7XG4gICAgaWYgKGQgPiAwKSB7XG4gICAgICBsZXQgcmF0aW8gPSB0aGlzLmRvdCh2ZWN0b3IpIC8gZDtcbiAgICAgIGlmIChyYXRpbyA+PSAwICYmIHJhdGlvIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodmVjdG9yLnggKiByYXRpbywgdmVjdG9yLnkgKiByYXRpbyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsImltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3InO1xuXG5jbGFzcyBMaWJyYXJ5IGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpYnJhcnk7XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi91dGlsJztcbmltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL3BvaW50JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vZ2VvbS92ZWN0b3InO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi9nZW9tL2NpcmNsZSc7XG5cbmltcG9ydCBTaGFwZSBmcm9tICcuLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBGcmFtZSBmcm9tICcuLi9kaXNwbGF5L2ZyYW1lJztcbmltcG9ydCBTZXF1ZW5jZSBmcm9tICcuLi9kaXNwbGF5L3NlcXVlbmNlJztcblxuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3InO1xuaW1wb3J0IFBhdGhUb29sIGZyb20gJy4vdG9vbHMvcGF0aF90b29sJztcbmltcG9ydCBQb2ludFRvb2wgZnJvbSAnLi90b29scy9wb2ludF90b29sJztcbmltcG9ydCBQZW5jaWxUb29sIGZyb20gJy4vdG9vbHMvcGVuY2lsX3Rvb2wnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgVW5kb1N0YWNrIGZyb20gJy4vdW5kb19zdGFjayc7XG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFsZXR0ZSA9IFtcbiAgICAgICcjMzMzMzMzJyxcbiAgICAgICcjNjY2NjY2JyxcbiAgICAgICcjOTk5OTk5JyxcbiAgICAgICcjY2NjY2NjJyxcbiAgICAgICcjZmZmZmZmJ1xuICAgIF07XG5cbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuc2hhcGVzID0gW107XG4gICAgdGhpcy5maWxsID0gdGhpcy5wYWxldHRlWzJdO1xuICAgIHRoaXMuc3Ryb2tlID0gdGhpcy5wYWxldHRlWzBdO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB0aGlzLmNsaXBib2FyZCA9IFtdO1xuICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2UoKTtcblxuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGFwZXInKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgdGhpcyk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCB0aGlzKTtcblxuICAgIHRoaXMuY3Vyc29yWCA9IDA7XG4gICAgdGhpcy5jdXJzb3JZID0gMDtcblxuICAgIHRoaXMuYWRkRnJhbWUoKTtcbiAgICB0aGlzLmdvRnJhbWUoMCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHN1cGVyLnNob3coKTtcbiAgICB0aGlzLnNldFRvb2woJ3BhdGgnKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgc3VwZXIuaGlkZSgpO1xuICB9XG5cbiAgc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldFNlcXVlbmNlKHNlcXVlbmNlKSB7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IHNlcXVlbmNlO1xuICAgIHRoaXMuZ29GcmFtZSgwKTtcbiAgfVxuXG4gIHJlbmRlclNoYXBlKHNoYXBlKSB7XG4gICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuXG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnNhdmUoKTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHNoYXBlLnN0cm9rZSB8fCAndHJhbnNwYXJlbnQnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzaGFwZS5maWxsIHx8ICd0cmFuc3BhcmVudCc7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBsZXQgc3AgPSB0aGlzLndvcmxkVG9TY3JlZW4oc2hhcGUueCwgc2hhcGUueSk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBsZXQgeCA9IChwLnggKyBzcC54KTtcbiAgICAgIGxldCB5ID0gKHAueSotMSArIHNwLnkpO1xuXG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlck91dGxpbmUoc2hhcGUsIHN0cm9rZSkge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2UgfHwgJ2JsYWNrJztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGxldCBzcCA9IHRoaXMud29ybGRUb1NjcmVlbihzaGFwZS54LCBzaGFwZS55KTtcbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHAgPSBwb2ludHNbal07XG4gICAgICBsZXQgeCA9IChwLnggKyBzcC54KTtcbiAgICAgIGxldCB5ID0gKHAueSotMSArIHNwLnkpO1xuXG4gICAgICBpZiAoaiA9PSAwKVxuICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChzaGFwZS5jbG9zZWQpIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXJBeGlzKHgsIHkpIHtcbiAgICBsZXQgc2l6ZSA9IDIwO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaWdodGdyYXknO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgc2l6ZSwgeSk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkgLSBzaXplKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLnJlbmRlckF4aXMoKHRoaXMuY2FudmFzLndpZHRoIC8gMikgPj4gMCwgKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpID4+IDApO1xuXG4gICAgaWYgKHRoaXMuZnJhbWVObyA+IDApIHtcbiAgICAgIGxldCBmcmFtZSA9IHRoaXMuc2VxdWVuY2UuZ2V0RnJhbWUodGhpcy5mcmFtZU5vIC0gMSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lLnNoYXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hhcGUgPSBmcmFtZS5zaGFwZXNbaV07XG4gICAgICAgIHRoaXMucmVuZGVyT3V0bGluZShzaGFwZSwgJ3JnYigxOTIsIDI0MCwgMTkyKScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mcmFtZS5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuZnJhbWUuc2hhcGVzW2ldO1xuICAgICAgdGhpcy5yZW5kZXJTaGFwZShzaGFwZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9vbCkge1xuICAgICAgY3R4LnNhdmUoKTtcbiAgICAgIHRoaXMudG9vbC5yZW5kZXIoY3R4KTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGN0eC5mb250ID0gJzE4cHggc2Fucy1zZXJpZic7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZpbGxUZXh0KCh0aGlzLmZyYW1lTm8gKyAxKSArICc6JyArIHRoaXMuc2VxdWVuY2UubGVuZ3RoLCAyMCwgMjApO1xuXG4gICAgLy8gbGV0IHZlYzEgPSBuZXcgVmVjdG9yKDEyMCwgMTUwKTtcbiAgICAvLyBsZXQgdmVjMiA9IG5ldyBWZWN0b3IodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgIC8vIGxldCB2ZWMzID0gdmVjMi5wcm9qZWN0KHZlYzEpIHx8IG5ldyBWZWN0b3IoKTtcbiAgICAvL1xuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKDAsIDApO1xuICAgIC8vIGN0eC5saW5lVG8odmVjMS54LCB2ZWMxLnkpO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgLy9cbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4Lm1vdmVUbygwLCAwKTtcbiAgICAvLyBjdHgubGluZVRvKHZlYzIueCwgdmVjMi55KTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSAncmVkJztcbiAgICAvLyBjdHguc3Ryb2tlKCk7XG4gICAgLy9cbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4Lm1vdmVUbygwLCAwKTtcbiAgICAvLyBjdHgubGluZVRvKHZlYzMueCwgdmVjMy55KTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSAnY3lhbic7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICAgIC8vXG4gICAgLy8gbGV0IHAxID0gbmV3IFBvaW50KHZlYzMueCwgdmVjMy55KTtcbiAgICAvLyBsZXQgcDIgPSBuZXcgUG9pbnQodmVjMi54LCB2ZWMyLnkpO1xuICAgIC8vIGxldCBkID0gcDEuZGlzdGFuY2UocDIpO1xuICAgIC8vXG4gICAgLy8gY3R4LmZpbGxUZXh0KGQsIDUwLCA1MCk7XG5cbiAgfVxuXG4gIHNlbGVjdEFsbCgpIHtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mcmFtZS5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2godGhpcy5mcmFtZS5zaGFwZXNbaV0pO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2VsZWN0TWFycXVlZSh4bWluLCB5bWluLCB4bWF4LCB5bWF4KSB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mcmFtZS5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHRoaXMuZnJhbWUuc2hhcGVzW2ldO1xuICAgICAgbGV0IHBvaW50cyA9IHNoYXBlLnBvaW50TGlzdC5wb2ludHM7XG4gICAgICBsZXQgY291bnQgPSAoc2hhcGUuY2xvc2VkID8gcG9pbnRzLmxlbmd0aCArIDEgOiBwb2ludHMubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICBsZXQgcDAgPSBwb2ludHNbaiAtIDFdO1xuICAgICAgICBsZXQgcDEgPSAoaiA9PSBwb2ludHMubGVuZ3RoID8gcG9pbnRzWzBdIDogcG9pbnRzW2pdKTtcbiAgICAgICAgbGV0IHNwMCA9IHBhcGVyLndvcmxkVG9TY3JlZW4ocDAueCArIHNoYXBlLngsIHAwLnkgKyBzaGFwZS55KTtcbiAgICAgICAgbGV0IHNwMSA9IHBhcGVyLndvcmxkVG9TY3JlZW4ocDEueCArIHNoYXBlLngsIHAxLnkgKyBzaGFwZS55KTtcbiAgICAgICAgaWYgKFV0aWwubGluZUludGVyc2VjdHNSZWN0YW5nbGUoc3AwLngsIHNwMC55LCBzcDEueCwgc3AxLnksIHhtaW4sIHltaW4sIHhtYXgsIHltYXgpKSB7XG4gICAgICAgICAgc2VsZWN0aW9uLnB1c2goc2hhcGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xuICB9XG5cbiAgc2NyZWVuVG9Xb3JsZCh4LCB5KSB7XG4gICAgbGV0IHR4ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIGxldCB0eSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh4IC0gdHgsICh5IC0gdHkpICogLTEpO1xuICB9XG5cbiAgd29ybGRUb1NjcmVlbih4LCB5KSB7XG4gICAgbGV0IHR4ID0gdGhpcy5jYW52YXMud2lkdGggLyAyO1xuICAgIGxldCB0eSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh4ICsgdHgsICh5Ki0xICsgdHkpKTtcbiAgfVxuXG4gIHBvaW50SW5TaGFwZShzaGFwZSwgeCwgeSkge1xuICAgIGxldCBwb2ludHMgPSBzaGFwZS5nZXRQb2ludHMoKTtcbiAgICBsZXQgc3AgPSB0aGlzLnNjcmVlblRvV29ybGQoeCwgeSk7XG4gICAgcmV0dXJuIFV0aWwucG9pbnRJblBvbHlnb24ocG9pbnRzLCBzcC54IC0gc2hhcGUueCwgc3AueSAtIHNoYXBlLnkpO1xuICB9XG5cbiAgcG9pbnRPblNoYXBlTGltaXQoc2hhcGUsIHgsIHkpIHtcbiAgICBsZXQgbWFyZ2luID0gNTtcbiAgICBsZXQgdGVtcCA9IG5ldyBQb2ludCgpO1xuICAgIGxldCBwb2ludCA9IHRoaXMuc2NyZWVuVG9Xb3JsZCh4LCB5KTtcbiAgICBwb2ludC5zdWJ0cmFjdChzaGFwZS5wb3NpdGlvbik7XG5cbiAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG4gICAgbGV0IGNvdW50ID0gKHNoYXBlLmNsb3NlZCA/IHBvaW50cy5sZW5ndGggKyAxIDogcG9pbnRzLmxlbmd0aCk7XG5cbiAgICBpZiAocG9pbnRzWzBdLmRpc3RhbmNlKHBvaW50KSA8IG1hcmdpbikgcmV0dXJuIHBvaW50c1swXTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgbGV0IHAxID0gcG9pbnRzW2ktMV07XG4gICAgICBsZXQgcDIgPSAoaSA9PSBwb2ludHMubGVuZ3RoID8gcG9pbnRzWzBdIDogcG9pbnRzW2ldKTtcblxuICAgICAgaWYgKHAyLmRpc3RhbmNlKHBvaW50KSA8IG1hcmdpbikgcmV0dXJuIHAyO1xuXG4gICAgICBsZXQgeDEgPSBwMi54IC0gcDEueDtcbiAgICAgIGxldCB5MSA9IHAyLnkgLSBwMS55O1xuICAgICAgbGV0IHgyID0gcG9pbnQueCAtIHAxLng7XG4gICAgICBsZXQgeTIgPSBwb2ludC55IC0gcDEueTtcblxuICAgICAgbGV0IGRvdCA9IHgxICogeDEgKyB5MSAqIHkxO1xuICAgICAgaWYgKGRvdCA+IDApIHtcbiAgICAgICAgbGV0IHJhdGlvID0gKHgyICogeDEgKyB5MiAqIHkxKSAvIGRvdDtcbiAgICAgICAgaWYgKHJhdGlvID49IDAgJiYgcmF0aW8gPD0gMSkge1xuICAgICAgICAgIHRlbXAueCA9ICh4MSAqIHJhdGlvKSArIHAxLng7XG4gICAgICAgICAgdGVtcC55ID0gKHkxICogcmF0aW8pICsgcDEueTtcbiAgICAgICAgICBpZiAodGVtcC5kaXN0YW5jZShwb2ludCkgPCBtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiB7IHBvaW50OiB0ZW1wLCBpbmRleDogaSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNldEN1cnNvcihjdXJzb3IpIHtcbiAgICBpZiAodGhpcy5lbC5jb250YWlucyh0aGlzLmN1cnNvcikpIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpO1xuICAgIH1cbiAgICB0aGlzLmN1cnNvciA9IGN1cnNvcjtcbiAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY3Vyc29yKTtcbiAgICB0aGlzLmN1cnNvci5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJzb3JYICsgJ3B4JztcbiAgICB0aGlzLmN1cnNvci5zdHlsZS50b3AgPSB0aGlzLmN1cnNvclkgKyAncHgnO1xuICB9XG5cbiAgc2V0VG9vbCh0b29sTmFtZSkge1xuICAgIGlmICh0b29sTmFtZSAhPT0gdGhpcy50b29sTmFtZSkge1xuICAgICAgaWYgKHRvb2xOYW1lID09ICdwYXRoJykge1xuICAgICAgICB0aGlzLnRvb2wgPSBuZXcgUGF0aFRvb2woKTtcbiAgICAgICAgdGhpcy50b29sLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9vbC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2F2ZVVuZG8oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0b29sTmFtZSA9PSAncG9pbnQnKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBQb2ludFRvb2woKTtcbiAgICAgICAgdGhpcy50b29sLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0b29sTmFtZSA9PSAncGVuY2lsJykge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgICB0aGlzLnRvb2wgPSBuZXcgUGVuY2lsVG9vbCgpO1xuICAgICAgICB0aGlzLnRvb2wub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b29sLm9uKCdzaGFwZScsIChzaGFwZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkU2hhcGUoc2hhcGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvb2xOYW1lID0gdG9vbE5hbWU7XG4gICAgICBpZiAodGhpcy50b29sLmN1cnNvcikgdGhpcy5zZXRDdXJzb3IodGhpcy50b29sLmN1cnNvcik7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHVuZG8oKSB7XG4gICAgaWYgKHRoaXMudW5kb1N0YWNrLnVuZG8oKSkge1xuICAgICAgbGV0IGZyYW1lID0gdGhpcy51bmRvU3RhY2suY3VycmVudCgpO1xuICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgIHRoaXMuZnJhbWUuc2hhcGVzID0gZnJhbWUuc2hhcGVzO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZG8oKSB7XG4gICAgaWYgKHRoaXMudW5kb1N0YWNrLnJlZG8oKSkge1xuICAgICAgbGV0IGZyYW1lID0gdGhpcy51bmRvU3RhY2suY3VycmVudCgpO1xuICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgIHRoaXMuZnJhbWUuc2hhcGVzID0gZnJhbWUuc2hhcGVzO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNhdmVVbmRvKCkge1xuICAgIGxldCBmcmFtZSA9IHRoaXMuZnJhbWUuY29weSgpO1xuICAgIHRoaXMudW5kb1N0YWNrLnB1c2goZnJhbWUpO1xuICB9XG5cbiAgYWRkU2hhcGUoc2hhcGUpIHtcbiAgICB0aGlzLmZyYW1lLmFkZChzaGFwZSk7XG4gICAgdGhpcy5zYXZlVW5kbygpO1xuICB9XG5cbiAgYWRkRnJhbWUoaW5kZXgpIHtcbiAgICBsZXQgZnJhbWUgPSBuZXcgRnJhbWUoKTtcblxuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5zZXF1ZW5jZS5hZGQoZnJhbWUsIGluZGV4KTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnNlcXVlbmNlLmFkZChmcmFtZSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2VsZWN0aW9uW2ldLmNvcHkoKTtcbiAgICAgICAgZnJhbWUuYWRkKHNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZWxldGVGcmFtZShpbmRleCkge1xuICAgIGlmICh0aGlzLnNlcXVlbmNlLmxlbmd0aCA9PSAxKSB7XG4gICAgICB0aGlzLmNsZWFyRnJhbWUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNlcXVlbmNlLnJlbW92ZShpbmRleCk7XG4gICAgICB0aGlzLmdvRnJhbWUoaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyRnJhbWUoKSB7XG4gICAgdGhpcy5zYXZlVW5kbygpO1xuICAgIHRoaXMuZnJhbWUuY2xlYXIoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZ29GcmFtZShmcmFtZU5vKSB7XG4gICAgaWYgKGZyYW1lTm8gPCAwKVxuICAgICAgZnJhbWVObyA9IDA7XG4gICAgZWxzZSBpZiAoZnJhbWVObyA+IHRoaXMuc2VxdWVuY2UubGVuZ3RoIC0gMSlcbiAgICAgIGZyYW1lTm8gPSB0aGlzLnNlcXVlbmNlLmxlbmd0aCAtIDE7XG4gICAgbGV0IGZyYW1lID0gdGhpcy5zZXF1ZW5jZS5nZXRGcmFtZShmcmFtZU5vKTtcbiAgICBpZiAoZnJhbWUpIHtcbiAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICAgIHRoaXMuZnJhbWVObyA9IGZyYW1lTm87XG4gICAgICB0aGlzLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgdGhpcy51bmRvU3RhY2sgPSBuZXcgVW5kb1N0YWNrKCk7XG4gICAgICB0aGlzLnNhdmVVbmRvKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZVNlbGVjdGVkKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICAgIHRoaXMuZnJhbWUucmVtb3ZlKHNoYXBlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgICB0aGlzLnNhdmVVbmRvKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGNvcHlTZWxlY3RlZCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBsZXQgY2xpcGJvYXJkID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuc2VsZWN0aW9uW2ldLmNvcHkoKTtcbiAgICAgICAgY2xpcGJvYXJkLnB1c2goc2hhcGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGlwYm9hcmQgPSBjbGlwYm9hcmQ7XG4gICAgfVxuICB9XG5cbiAgcGFzdGUoKSB7XG4gICAgaWYgKHRoaXMuY2xpcGJvYXJkLmxlbmd0aCkgIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xpcGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHRoaXMuY2xpcGJvYXJkW2ldLmNvcHkoKTtcbiAgICAgICAgdGhpcy5mcmFtZS5hZGQoc2hhcGUpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5wdXNoKHNoYXBlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2F2ZVVuZG8oKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RmlsbChmaWxsKSB7XG4gICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSB0aGlzLnNlbGVjdGlvbltpXTtcbiAgICAgIHNoYXBlLmZpbGwgPSB0aGlzLmZpbGw7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBzZXRTdHJva2Uoc3Ryb2tlKSB7XG4gICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoYXBlID0gdGhpcy5zZWxlY3Rpb25baV07XG4gICAgICBzaGFwZS5zdHJva2UgPSB0aGlzLnN0cm9rZTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGJyaW5nVG9Gcm9udCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBsZXQgc2hhcGVzID0gdGhpcy5mcmFtZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+ICF0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhzaGFwZSkpO1xuICAgICAgbGV0IHNldCA9IHRoaXMuZnJhbWUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiB0aGlzLnNlbGVjdGlvbi5pbmNsdWRlcyhzaGFwZSkpO1xuICAgICAgdGhpcy5mcmFtZS5zaGFwZXMgPSBzaGFwZXMuY29uY2F0KHNldCk7XG4gICAgICB0aGlzLnNhdmVVbmRvKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRUb0JhY2soKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgbGV0IHNoYXBlcyA9IHRoaXMuZnJhbWUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiAhdGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoc2hhcGUpKTtcbiAgICAgIGxldCBzZXQgPSB0aGlzLmZyYW1lLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gdGhpcy5zZWxlY3Rpb24uaW5jbHVkZXMoc2hhcGUpKTtcbiAgICAgIHRoaXMuZnJhbWUuc2hhcGVzID0gc2V0LmNvbmNhdChzaGFwZXMpO1xuICAgICAgdGhpcy5zYXZlVW5kbygpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcywgdGhpcy5zZXF1ZW5jZSk7XG4gICAgdGhpcy5wbGF5ZXIub24oJ2RvbmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllciA9IG51bGw7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICAgIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5kb3duWCA9IGV2ZW50LnBhZ2VYO1xuICAgIHRoaXMuZG93blkgPSBldmVudC5wYWdlWTtcbiAgICB0aGlzLmRvd24gPSB0cnVlO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgdGhpcy5kb3duID0gZmFsc2U7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50LnBhZ2VYO1xuICAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LnBhZ2VZO1xuXG4gICAgdGhpcy5kZWx0YVggPSAodGhpcy5sYXN0WCAhPT0gdW5kZWZpbmVkID8gdGhpcy5jdXJzb3JYIC0gdGhpcy5sYXN0WCA6IDApO1xuICAgIHRoaXMuZGVsdGFZID0gKHRoaXMubGFzdFkgIT09IHVuZGVmaW5lZCA/IHRoaXMuY3Vyc29yWSAtIHRoaXMubGFzdFkgOiAwKTtcblxuICAgIGlmICh0aGlzLmN1cnNvcikge1xuICAgICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3Vyc29yWCArICdweCc7XG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS50b3AgPSB0aGlzLmN1cnNvclkgKyAncHgnO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFggPSB0aGlzLmN1cnNvclg7XG4gICAgdGhpcy5sYXN0WSA9IHRoaXMuY3Vyc29yWTtcblxuICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBsZXQga2V5ID0gZXZlbnQua2V5O1xuICAgIGlmICghZXZlbnQucmVwZWF0KSB7XG4gICAgICBpZiAoa2V5ID09ICdxJykge1xuICAgICAgICB0aGlzLnNldFRvb2woJ3BhdGgnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PSAnZScpIHtcbiAgICAgICAgdGhpcy5zZXRUb29sKCdwb2ludCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09ICdiJykge1xuICAgICAgICB0aGlzLnNldFRvb2woJ3BlbmNpbCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoKGtleSA9PSAnLicgfHwga2V5ID09ICc+JykpIHtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGhpcy5hZGRGcmFtZSh0aGlzLmZyYW1lTm8gKyAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdvRnJhbWUodGhpcy5mcmFtZU5vICsgMSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgoa2V5ID09ICcsJyB8fCBrZXkgPT0gJzwnKSkge1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICB0aGlzLmFkZEZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgICAgICAgdGhpcy5nb0ZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nb0ZyYW1lKHRoaXMuZnJhbWVObyAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ2MnKSB7XG4gICAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICB0aGlzLmNvcHlTZWxlY3RlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ3YnKSB7XG4gICAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICB0aGlzLnBhc3RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PSAnYScpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PSAneCcpIHtcbiAgICAgICAgdGhpcy5kZWxldGVTZWxlY3RlZCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09ICdYJykge1xuICAgICAgICB0aGlzLmRlbGV0ZUZyYW1lKHRoaXMuZnJhbWVObyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ3onICYmIGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KVxuICAgICAgICAgIHRoaXMucmVkbygpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpcy51bmRvKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpIHRoaXMuYnJpbmdUb0Zyb250KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgaWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSkgdGhpcy5zZW5kVG9CYWNrKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT0gJyAnKSB7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09ICcpJykge1xuICAgICAgICB0aGlzLnNldFN0cm9rZShudWxsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PSAnMCcpIHtcbiAgICAgICAgdGhpcy5zZXRGaWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBzZXQgPSBbJzEnLCAnMicsICczJywgJzQnLCAnIScsICdAJywgJ8KjJywgJyQnXTtcbiAgICAgICAgbGV0IGluZGV4ID0gc2V0LmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGlmIChpbmRleCA+IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3Ryb2tlKHRoaXMucGFsZXR0ZVtpbmRleCAtIDRdIHx8IG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsbCh0aGlzLnBhbGV0dGVbaW5kZXhdIHx8IG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuXG4gIH1cblxuICBvblBvaW50ZXJFbnRlcihldmVudCkge1xuICAgIHRoaXMuY3Vyc29yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgb25Qb2ludGVyTGVhdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2JsdXInKSB7XG4gICAgICB0aGlzLm9uQmx1cihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ3BvaW50ZXJlbnRlcicpIHtcbiAgICAgIHRoaXMub25Qb2ludGVyRW50ZXIoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdwb2ludGVybGVhdmUnKSB7XG4gICAgICB0aGlzLm9uUG9pbnRlckxlYXZlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgIHRoaXMucGxheWVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudG9vbCkge1xuICAgICAgICB0aGlzLnRvb2wuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXBlcjtcbiIsImltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJy4uL2V2ZW50cyc7XG5cbmNsYXNzIFBsYXllciBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgc2VxdWVuY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuc2VxdWVuY2UgPSBzZXF1ZW5jZTtcbiAgICB0aGlzLmZyYW1lTm8gPSAwO1xuICAgIHRoaXMuZnBzID0gNjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc2F2ZSgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG5cbiAgICBjdHguZm9udCA9ICcxNnB4IHNhbnMtc2VyaWYnO1xuICAgIGN0eC5maWxsVGV4dCh0aGlzLnBsYXlpbmcgPyAnUGxheScgOiAnUGF1c2UnLCAyMCwgMjApO1xuXG4gICAgY3R4LmZvbnQgPSAnMTZweCBzYW5zLXNlcmlmJztcbiAgICBjdHguZmlsbFRleHQodGhpcy5mcmFtZU5vICsgMSwgMTAwLCAyMCk7XG5cbiAgICBsZXQgZnJhbWUgPSB0aGlzLnNlcXVlbmNlLmZyYW1lc1t0aGlzLmZyYW1lTm9dO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmFtZS5zaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IGZyYW1lLnNoYXBlc1tpXTtcblxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2hhcGUuc3Ryb2tlIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gc2hhcGUuZmlsbCB8fCAndHJhbnNwYXJlbnQnO1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgIGxldCBzcCA9IHBhcGVyLndvcmxkVG9TY3JlZW4oc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgICBsZXQgeCA9IChwLnggKyBzcC54KTtcbiAgICAgICAgbGV0IHkgPSAocC55Ki0xICsgc3AueSk7XG5cbiAgICAgICAgaWYgKGogPT0gMClcbiAgICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNoYXBlLmNsb3NlZCkgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBzdGVwKCkge1xuICAgIHRoaXMuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLnRpbWVEZWx0YSA9IHRoaXMudGltZURlbHRhICsgKHRoaXMudGltZSAtIHRoaXMucHJldmlvdXNUaW1lKTtcblxuICAgIGlmICh0aGlzLnRpbWVEZWx0YSA+PSAxMDAwIC8gdGhpcy5mcHMpIHtcbiAgICAgIHRoaXMudGltZURlbHRhID0gdGhpcy50aW1lRGVsdGEgLSAoMTAwMCAvIHRoaXMuZnBzKTtcbiAgICAgIHRoaXMuZnJhbWVObysrO1xuICAgICAgaWYgKHRoaXMuZnJhbWVObyA9PSB0aGlzLnNlcXVlbmNlLmxlbmd0aCkgdGhpcy5mcmFtZU5vID0gMDtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aGlzLnRpbWU7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMudGltZURlbHRhID0gMDtcbiAgICB0aGlzLnRpbWUgPSB0aGlzLnByZXZpb3VzVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgdGhpcy5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZUlkKTtcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgZG9uZSgpIHtcbiAgICB0aGlzLnBhdXNlKCk7XG4gICAgdGhpcy5lbWl0KCdkb25lJyk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICghZXZlbnQucmVwZWF0KSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09ICcgJyB8fCBldmVudC5rZXkgPT0gJ0VzY2FwZScgfHwgZXZlbnQua2V5ID09ICdFbnRlcicpIHtcbiAgICAgICAgdGhpcy5kb25lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICB0aGlzLmRvbmUoKTtcbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuICAgIHRoaXMuZG9uZSgpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2JsdXInKSB7XG4gICAgICB0aGlzLm9uQmx1cihldmVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uLy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi8uLi9nZW9tL3ZlY3Rvcic7XG5pbXBvcnQgVG9vbCBmcm9tICcuL3Rvb2wnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4uLy4uL2Rpc3BsYXkvc2hhcGUnO1xuXG5jbGFzcyBQYXRoVG9vbCBleHRlbmRzIFRvb2wge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncG9pbnRlci1jdXJzb3InKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgbGV0IHNwID0gcGFwZXIuc2NyZWVuVG9Xb3JsZCh4LCB5KTtcbiAgICBmb3IgKHZhciBpID0gcGFwZXIuZnJhbWUuc2hhcGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5mcmFtZS5zaGFwZXNbaV07XG4gICAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG4gICAgICBpZiAocGFwZXIucG9pbnRPblNoYXBlTGltaXQoc2hhcGUsIHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaGFwZS5maWxsKSB7XG4gICAgICAgICAgaWYgKHBhcGVyLnBvaW50SW5TaGFwZShzaGFwZSwgeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBtb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXBlci5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGFwZSA9IHBhcGVyLnNlbGVjdGlvbltpXTtcbiAgICAgIHNoYXBlLnggKz0gZHg7XG4gICAgICBzaGFwZS55ICs9IGR5ICotMTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYWdPbigpIHtcbiAgICB0aGlzLm1vZGUgPSAnZHJhZyc7XG4gIH1cblxuICBkcmFnT2ZmKCkge1xuICAgIGlmICh0aGlzLmNoYW5nZWQpIHRoaXMuZW1pdCgnY2hhbmdlJyk7XG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcihjdHgpIHtcbiAgICBjdHguZm9udCA9ICcxMHB4IHNhbnMtc2VyaWYnO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcblxuICAgIGN0eC50cmFuc2xhdGUoMC41LCAwLjUpO1xuXG4gICAgaWYgKHBhcGVyLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXBlci5zZWxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoYXBlID0gcGFwZXIuc2VsZWN0aW9uW2ldO1xuICAgICAgICBsZXQgcCA9IHBhcGVyLndvcmxkVG9TY3JlZW4oc2hhcGUueCwgc2hhcGUueSk7XG4gICAgICAgIGxldCB4ID0gcC54ID4+IDAsIHkgPSBwLnkgPj4gMDtcblxuICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2V4Y2x1c2lvbic7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgNSwgeSk7XG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSAtIDUpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZXhjbHVzaW9uJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8ocGFwZXIuZG93blgsIHBhcGVyLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8ocGFwZXIuY3Vyc29yWCwgcGFwZXIuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyhwYXBlci5jdXJzb3JYLCBwYXBlci5jdXJzb3JZKTtcbiAgICAgIGN0eC5saW5lVG8ocGFwZXIuZG93blgsIHBhcGVyLmN1cnNvclkpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIC8vIGxldCBwMCA9IG5ldyBQb2ludChwYXBlci5kb3duWCwgcGFwZXIuZG93blkpO1xuICAgIC8vIGxldCBwMSA9IG5ldyBQb2ludCgxNTAsIDE1MCk7XG4gICAgLy8gbGV0IHAyID0gbmV3IFBvaW50KDI1MCwgMzAwKTtcbiAgICAvL1xuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgIC8vIGN0eC5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgIC8vIGN0eC5zdHJva2UoKTtcbiAgICAvL1xuICAgIC8vIGxldCBoaXQgPSB0aGlzLnBvaW50T25FZGdlKHAwLCBwMSwgcDIpO1xuICAgIC8vIGlmIChoaXQpIHtcbiAgICAvLyAgIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAvLyAgIGN0eC5maWxsUmVjdChoaXQueC0yLCBoaXQueS0yLCA0LCA0KTtcbiAgICAvLyB9XG5cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PSAwKSB7XG4gICAgICBsZXQgbW9kaWZpZXIgPSBldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5O1xuXG4gICAgICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHBhcGVyLmRvd25YLCBwYXBlci5kb3duWSk7XG4gICAgICBpZiAoaGl0KSB7XG4gICAgICAgIGlmIChtb2RpZmllcikge1xuICAgICAgICAgIGlmIChwYXBlci5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuICAgICAgICAgICAgcGFwZXIuc2VsZWN0aW9uLnNwbGljZShwYXBlci5zZWxlY3Rpb24uaW5kZXhPZihoaXQpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXBlci5zZWxlY3Rpb24ucHVzaChoaXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoIXBhcGVyLnNlbGVjdGlvbi5pbmNsdWRlcyhoaXQpKSB7XG4gICAgICAgICAgICBwYXBlci5zZWxlY3Rpb24gPSBbaGl0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQgPSBoaXQ7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICBwYXBlci5zZWxlY3Rpb24gPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgbGV0IG1vZGlmaWVyID0gZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleTtcbiAgICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgICAgdGhpcy5kcmFnT2ZmKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICAgIGxldCB4bWluID0gcGFwZXIuZG93blgsIHltaW4gPSBwYXBlci5kb3duWTtcbiAgICAgIGxldCB4bWF4ID0gcGFwZXIuY3Vyc29yWCwgeW1heCA9IHBhcGVyLmN1cnNvclk7XG4gICAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcbiAgICAgIHBhcGVyLnNlbGVjdE1hcnF1ZWUoeG1pbiwgeW1pbiwgeG1heCwgeW1heCk7XG4gICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgLy8gICBsZXQgaGl0ID0gdGhpcy5oaXRUZXN0KHBhcGVyLmN1cnNvclgsIHBhcGVyLmN1cnNvclkpO1xuICAgICAgLy8gICBpZiAoaGl0ICYmIHRoaXMudGFyZ2V0ID09IGhpdCkge1xuICAgICAgLy8gICAgIGlmIChtb2RpZmllcikge1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgIC8vICAgICAgIHBhcGVyLnNlbGVjdGlvbiA9IFtoaXRdO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShwYXBlci5kZWx0YVgsIHBhcGVyLmRlbHRhWSk7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChwYXBlci5kb3duKSB7XG4gICAgICAgIGxldCBkeCA9IHBhcGVyLmN1cnNvclggLSBwYXBlci5kb3duWDtcbiAgICAgICAgbGV0IGR5ID0gcGFwZXIuY3Vyc29yWSAtIHBhcGVyLmRvd25ZO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID4gMiB8fCBNYXRoLmFicyhkeSkgPiAyKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgICAgICAgICAgdGhpcy5kcmFnT24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG5cbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKVxuICAgICAgdGhpcy5kcmFnT2ZmKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vkb3duJykge1xuICAgICAgdGhpcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNldXAnKSB7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdkYmxjbGljaycpIHtcbiAgICAgIHRoaXMub25EYmxDbGljayhldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2tleWRvd24nKSB7XG4gICAgICB0aGlzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2JsdXInKSB7XG4gICAgICB0aGlzLm9uQmx1cihldmVudCk7XG4gICAgfVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF0aFRvb2w7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi4vLi4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgUG9pbnRMaXN0IGZyb20gJy4uLy4uL2dlb20vcG9pbnRfbGlzdCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi4vLi4vZGlzcGxheS9zaGFwZSc7XG5pbXBvcnQgVG9vbCBmcm9tICcuL3Rvb2wnO1xuXG5jbGFzcyBQZW5jaWxUb29sIGV4dGVuZHMgVG9vbCB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgICB0aGlzLnN0cm9rZSA9IDA7XG4gICAgdGhpcy5maWxsID0gMDtcblxuICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgncGVuY2lsLWN1cnNvcicpO1xuICB9XG5cbiAgY2xvc2VQYXRoKGNsb3NlZD1mYWxzZSkge1xuICAgIGlmICh0aGlzLnBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgcG9pbnRMaXN0ID0gbmV3IFBvaW50TGlzdCh0aGlzLnBvaW50cyk7XG4gICAgICBsZXQgYm91bmRzID0gcG9pbnRMaXN0LmdldEJvdW5kcygpO1xuICAgICAgbGV0IHdwID0gcGFwZXIuc2NyZWVuVG9Xb3JsZChib3VuZHMueCArIGJvdW5kcy53aWR0aCAvIDIsIGJvdW5kcy55ICsgYm91bmRzLmhlaWdodCAvIDIpO1xuICAgICAgbGV0IHBvaW50cyA9IHBvaW50TGlzdC5wb2ludHM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2ldO1xuICAgICAgICBsZXQgcHAgPSBwYXBlci5zY3JlZW5Ub1dvcmxkKHAueCwgcC55KTtcbiAgICAgICAgcC54ID0gcHAueCAtIHdwLng7XG4gICAgICAgIHAueSA9IHBwLnkgLSB3cC55O1xuICAgICAgfVxuXG4gICAgICBsZXQgc2hhcGUgPSBuZXcgU2hhcGUoeyB4OiB3cC54LCB5OiB3cC55LCBwb2ludExpc3Q6IHBvaW50TGlzdCxcbiAgICAgICAgZmlsbDogcGFwZXIuZmlsbCwgc3Ryb2tlOiBwYXBlci5zdHJva2UsIGNsb3NlZDogY2xvc2VkIH0pO1xuICAgICAgdGhpcy5lbWl0KCdzaGFwZScsIHNoYXBlKTtcbiAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsUGF0aCgpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICByZW5kZXJQYXRoKGN0eCwgcG9pbnRzLCBzdHJva2UsIGZpbGwsIGNsb3NlZD1mYWxzZSkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZSAhPT0gdW5kZWZpbmVkID8gKHN0cm9rZSA/IHN0cm9rZSA6ICd0cmFuc3BhcmVudCcpIDogJ3RyYW5zcGFyZW50JztcbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbCAhPT0gdW5kZWZpbmVkID8gKGZpbGwgPyBmaWxsIDogJ3RyYW5zcGFyZW50JykgOiAndHJhbnNwYXJlbnQnO1xuXG4gICAgaWYgKHN0cm9rZSA9PSBudWxsKSB7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnY3lhbic7XG4gICAgfVxuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHBvaW50c1tpXTtcbiAgICAgIGlmIChpID09IDApXG4gICAgICAgIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgZWxzZVxuICAgICAgICBjdHgubGluZVRvKHAueCwgcC55KTtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VkKSBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW5kZXJQYXRoKGN0eCwgdGhpcy5wb2ludHMsIHBhcGVyLnN0cm9rZSwgcGFwZXIuZmlsbCk7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBwID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV07XG4gICAgICBjdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgIGN0eC5saW5lVG8odGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICBsZXQgY3AgPSBuZXcgUG9pbnQodGhpcy5jdXJzb3JYLCB0aGlzLmN1cnNvclkpO1xuICAgICAgbGV0IHAwID0gdGhpcy5wb2ludHNbMF07XG5cbiAgICAgIGlmIChjcC5kaXN0YW5jZShwMCkgPCA1KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhwMC54LCBwMC55LCA1LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgbGV0IHAgPSBuZXcgUG9pbnQoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG4gICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIGlmIChwLmRpc3RhbmNlKHRoaXMucG9pbnRzWzBdKSA8IDUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlUGF0aCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09IDIpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuXG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIHRoaXMuY3Vyc29yWCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgdGhpcy5jdXJzb3JZID0gZXZlbnQub2Zmc2V0WTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnJlcGVhdCkge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PSAnRXNjYXBlJykge1xuICAgICAgICB0aGlzLmNhbmNlbFBhdGgoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGV2ZW50KSB7XG4gICAgdGhpcy5jYW5jZWxQYXRoKCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnYmx1cicpIHtcbiAgICAgIHRoaXMub25CbHVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVuY2lsVG9vbDtcbiIsImltcG9ydCBVdGlsIGZyb20gJy4uLy4uL3V0aWwnO1xuaW1wb3J0IFBvaW50IGZyb20gJy4uLy4uL2dlb20vcG9pbnQnO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuLi8uLi9nZW9tL3JlY3RhbmdsZSc7XG5pbXBvcnQgVG9vbCBmcm9tICcuL3Rvb2wnO1xuXG5jbGFzcyBQb2ludFRvb2wgZXh0ZW5kcyBUb29sIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3BvaW50LWN1cnNvcicpO1xuICAgIHRoaXMucG9pbnRzID0gW107XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgaWYgKHBhcGVyLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFwZXIuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHBhcGVyLnNlbGVjdGlvbltpXTtcbiAgICAgICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuICAgICAgICBsZXQgc3AgPSBwYXBlci53b3JsZFRvU2NyZWVuKHNoYXBlLngsIHNoYXBlLnkpO1xuXG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZXhjbHVzaW9uJztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgcCA9IHBvaW50c1tqXTtcbiAgICAgICAgICBsZXQgcHAgPSBwYXBlci53b3JsZFRvU2NyZWVuKHAueCArIHNoYXBlLngsIHAueSArIHNoYXBlLnkpO1xuICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMucG9pbnRzLmluY2x1ZGVzKHApO1xuICAgICAgICAgIGxldCB4ID0gcHAueCA+PiAwO1xuICAgICAgICAgIGxldCB5ID0gcHAueSA+PiAwO1xuICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnJlY3QoKHgpIC0gMywgKHkpIC0gMywgNSwgNSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5yZWN0KCh4ICsgMC41KSAtIDMsICh5ICsgMC41KSAtIDMsIDQsIDQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB4ID0gKHNwLnggPj4gMCkgKyAwLjU7XG4gICAgICAgIGxldCB5ID0gKHNwLnkgPj4gMCkgKyAwLjU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgNSwgeSk7XG4gICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSAtIDUpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICBjdHgudHJhbnNsYXRlKDAuNSwgMC41KTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZXhjbHVzaW9uJztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8ocGFwZXIuZG93blgsIHBhcGVyLmRvd25ZKTtcbiAgICAgIGN0eC5saW5lVG8ocGFwZXIuY3Vyc29yWCwgcGFwZXIuZG93blkpO1xuICAgICAgY3R4LmxpbmVUbyhwYXBlci5jdXJzb3JYLCBwYXBlci5jdXJzb3JZKTtcbiAgICAgIGN0eC5saW5lVG8ocGFwZXIuZG93blgsIHBhcGVyLmN1cnNvclkpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgaGl0VGVzdCh4LCB5KSB7XG4gICAgbGV0IHNwID0gcGFwZXIuc2NyZWVuVG9Xb3JsZCh4LCB5KTtcbiAgICBmb3IgKHZhciBpID0gcGFwZXIuZnJhbWUuc2hhcGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5mcmFtZS5zaGFwZXNbaV07XG4gICAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG4gICAgICBpZiAocGFwZXIucG9pbnRPblNoYXBlTGltaXQoc2hhcGUsIHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaGFwZS5maWxsKSB7XG4gICAgICAgICAgaWYgKHBhcGVyLnBvaW50SW5TaGFwZShzaGFwZSwgeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwb2ludEhpdFRlc3QoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFwZXIuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5zZWxlY3Rpb25baV07XG4gICAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG5cbiAgICAgIGxldCB3cCA9IHBhcGVyLnNjcmVlblRvV29ybGQoeCwgeSk7XG4gICAgICB3cC5zdWJ0cmFjdChzaGFwZS5wb3NpdGlvbik7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgICBsZXQgZCA9IHAuZGlzdGFuY2Uod3ApO1xuICAgICAgICBpZiAoZCA8IDcpIHtcbiAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIG1vdmVQb2ludHNCeShkeCwgZHkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgcC54ICs9IGR4O1xuICAgICAgcC55ICs9IGR5O1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICB9XG5cbiAgaW5zZXJ0UG9pbnQoeCwgeSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFwZXIuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2hhcGUgPSBwYXBlci5zZWxlY3Rpb25baV07XG4gICAgICBsZXQgaGl0ID0gcGFwZXIucG9pbnRPblNoYXBlTGltaXQoc2hhcGUsIHgsIHkpO1xuICAgICAgaWYgKGhpdCkge1xuICAgICAgICBsZXQgcG9pbnRzID0gc2hhcGUuZ2V0UG9pbnRzKCk7XG4gICAgICAgIHBvaW50cy5zcGxpY2UoaGl0LmluZGV4LCAwLCBoaXQucG9pbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgbGV0IG1vZGlmaWVyID0gZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleTtcbiAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgdGhpcy5pbnNlcnRQb2ludChwYXBlci5kb3duWCwgcGFwZXIuZG93blkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBoaXQgPSB0aGlzLnBvaW50SGl0VGVzdChwYXBlci5kb3duWCwgcGFwZXIuZG93blkpO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnBvaW50cy5pbmNsdWRlcyhoaXQpKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IFsgaGl0IF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdChwYXBlci5kb3duWCwgcGFwZXIuZG93blkpO1xuICAgICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gaGl0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgbGV0IG1vZGlmaWVyID0gZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleTtcblxuICAgIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKSB7XG4gICAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1vZGUgPT0gJ21hcnF1ZWUnKSB7XG4gICAgICB0aGlzLnBvaW50cyA9IFtdO1xuXG4gICAgICBsZXQgeG1pbiA9IHBhcGVyLmRvd25YLCB5bWluID0gcGFwZXIuZG93blk7XG4gICAgICBsZXQgeG1heCA9IHBhcGVyLmN1cnNvclgsIHltYXggPSBwYXBlci5jdXJzb3JZO1xuXG4gICAgICBpZiAoeG1pbiA+IHhtYXgpIFt4bWluLCB4bWF4XSA9IFsgeG1heCwgeG1pbiBdO1xuICAgICAgaWYgKHltaW4gPiB5bWF4KSBbeW1pbiwgeW1heF0gPSBbIHltYXgsIHltaW4gXTtcblxuICAgICAgbGV0IHAxID0gcGFwZXIuc2NyZWVuVG9Xb3JsZCh4bWluLCB5bWluKTtcbiAgICAgIGxldCBwMiA9IHBhcGVyLnNjcmVlblRvV29ybGQoeG1heCwgeW1heCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFwZXIuc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGFwZSA9IHBhcGVyLnNlbGVjdGlvbltpXTtcbiAgICAgICAgbGV0IHBvaW50cyA9IHNoYXBlLmdldFBvaW50cygpO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBwID0gcG9pbnRzW2pdO1xuICAgICAgICAgIGxldCB4ID0gcC54ICsgc2hhcGUueDtcbiAgICAgICAgICBsZXQgeSA9IHAueSArIHNoYXBlLnk7XG4gICAgICAgICAgaWYgKHggPiBwMS54ICYmIHkgPCBwMS55ICYmIHggPCBwMi54ICYmIHkgPiBwMi55KSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgICAgbGV0IGhpdCA9IHRoaXMuaGl0VGVzdChwYXBlci5jdXJzb3JYLCBwYXBlci5jdXJzb3JZKTtcbiAgICAgICAgaWYgKGhpdCAmJiBoaXQgPT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICAgIGlmIChwYXBlci5zZWxlY3Rpb24uaW5jbHVkZXMoaGl0KSkge1xuICAgICAgICAgICAgICBwYXBlci5zZWxlY3Rpb24uc3BsaWNlKHBhcGVyLnNlbGVjdGlvbi5pbmRleE9mKGhpdCksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHBhcGVyLnNlbGVjdGlvbi5wdXNoKGhpdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFwZXIuc2VsZWN0aW9uID0gW2hpdF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHBhcGVyLnNlbGVjdGlvbiA9IFtdO1xuICAgICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PSAnZHJhZycpIHtcbiAgICAgIHRoaXMubW92ZVBvaW50c0J5KHBhcGVyLmRlbHRhWCwgLXBhcGVyLmRlbHRhWSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubW9kZSA9PSAnbWFycXVlZScpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwYXBlci5kb3duKSB7XG4gICAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGR4ID0gcGFwZXIuY3Vyc29yWCAtIHBhcGVyLmRvd25YO1xuICAgICAgICAgICAgbGV0IGR5ID0gcGFwZXIuY3Vyc29yWSAtIHBhcGVyLmRvd25ZO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+IDIgfHwgTWF0aC5hYnMoZHkpID4gMikge1xuICAgICAgICAgICAgICB0aGlzLm1vZGUgPSAnZHJhZyc7XG4gICAgICAgICAgICAgIHRoaXMubW92ZVBvaW50c0J5KGR4LCAtZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdtYXJxdWVlJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG5cbiAgb25EYmxDbGljayhldmVudCkge1xuICAgIHRoaXMuaW5zZXJ0UG9pbnQocGFwZXIuZG93blgsIHBhcGVyLmRvd25ZKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG5cbiAgfVxuXG4gIG9uQmx1cihldmVudCkge1xuXG4gIH1cblxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnZGJsY2xpY2snKSB7XG4gICAgICB0aGlzLm9uRGJsQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdibHVyJykge1xuICAgICAgdGhpcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRUb29sO1xuIiwiaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZXZlbnRzLmpzJztcblxuY2xhc3MgVG9vbCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoY3R4KSB7XG4gICAgXG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbDtcbiIsIlxuY2xhc3MgVW5kb1N0YWNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIHRoaXMubWFya2VyID0gMDtcbiAgfVxuXG4gIHB1c2goaXRlbSkge1xuICAgIHRoaXMuc3RhY2suc3BsaWNlKHRoaXMubWFya2VyICsgMSk7XG4gICAgdGhpcy5zdGFjay5wdXNoKGl0ZW0pO1xuICAgIHRoaXMubWFya2VyID0gdGhpcy5zdGFjay5sZW5ndGggLSAxO1xuICB9XG5cbiAgY3VycmVudCgpIHtcbiAgICBpZiAodGhpcy5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMubWFya2VyXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1bmRvKCkge1xuICAgIGlmICh0aGlzLm1hcmtlciA+IDApIHtcbiAgICAgIHRoaXMubWFya2VyLS07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVkbygpIHtcbiAgICBpZiAodGhpcy5tYXJrZXIgPCB0aGlzLnN0YWNrLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMubWFya2VyKys7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVuZG9TdGFjaztcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9kaXNwbGF5L3NoYXBlJztcbmltcG9ydCBHcm91cCBmcm9tICcuL2Rpc3BsYXkvZ3JvdXAnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4vcGFwZXIvcGFwZXInO1xuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvcic7XG5cbmNsYXNzIFN0YWdlIGV4dGVuZHMgRWRpdG9yIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3N0YWdlJyk7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHBhcmFtcy53aWR0aCA9PSB1bmRlZmluZWQgPyAzMjAgOiBwYXJhbXMud2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gcGFyYW1zLmhlaWdodCA9PSB1bmRlZmluZWQgPyAyMDAgOiBwYXJhbXMuaGVpZ2h0O1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBzdXBlci5zaG93KCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHN1cGVyLmhpZGUoKTtcbiAgfVxuXG4gIGFkZCh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2godHJhbnNmb3JtKTtcbiAgICB0cmFuc2Zvcm0uYWRkZWRUb1N0YWdlKCk7XG4gICAgdHJhbnNmb3JtLm9uKCd2YWx1ZWNoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGVkaXQoKSB7XG4gIH1cblxuICBzZWxlY3RNYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICB9XG5cbiAgcmVuZGVyU2hhcGUoc2hhcGUsIHgsIHkpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gIH1cblxuICBtb3ZlU2VsZWN0aW9uQnkoZHgsIGR5KSB7XG4gIH1cblxuICBiZWdpbkRyYWcoKSB7XG4gIH1cblxuICBjYW5jZWxEcmFnKCkge1xuICB9XG5cbiAgYmVnaW5NYXJxdWVlKHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgICB0aGlzLm1vZGUgPSAnbWFycXVlZSc7XG4gIH1cblxuICBjYW5jZWxNYXJxdWVlKCkge1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGhpdFRlc3QoeCwgeSkge1xuICAgIC8vIGZvciAodmFyIGkgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgLy8gICBsZXQgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgIC8vICAgaWYgKGNoaWxkLmhpdFRlc3QoeCwgeSkpIHtcbiAgICAvLyAgICAgcmV0dXJuIGNoaWxkO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNob3dQYXBlcigpIHtcblxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyB0aGlzLmN1cnNvclggPSBldmVudC5wYWdlWCAtIHRoaXMuZWwub2Zmc2V0TGVmdDtcbiAgICAvLyB0aGlzLmN1cnNvclkgPSBldmVudC5wYWdlWSAtIHRoaXMuZWwub2Zmc2V0VG9wO1xuICAgIC8vXG4gICAgLy8gdGhpcy5kb3duWCA9IHRoaXMuY3Vyc29yWDtcbiAgICAvLyB0aGlzLmRvd25ZID0gdGhpcy5jdXJzb3JZO1xuICAgIC8vXG4gICAgLy8gbGV0IGhpdCA9IHRoaXMuaGl0VGVzdCh0aGlzLmN1cnNvclgsIHRoaXMuY3Vyc29yWSk7XG4gICAgLy8gaWYgKGhpdCkge1xuICAgIC8vICAgaWYgKHRoaXMuc2VsZWN0aW9uLmluY2x1ZGVzKGhpdCkpIHtcbiAgICAvL1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy5kZXNlbGVjdCgpO1xuICAgIC8vICAgICB0aGlzLnNlbGVjdGlvbiA9IFsgaGl0IF07XG4gICAgLy8gICAgIGhpdC5zZWxlY3QoKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICB0aGlzLmRlc2VsZWN0KCk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIC8vIGlmICh0aGlzLm1vZGUgPT0gJ2RyYWcnKVxuICAgIC8vICAgdGhpcy5jYW5jZWxEcmFnKCk7XG4gICAgLy8gZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgIC8vICAgdGhpcy5zZWxlY3RNYXJxdWVlKHRoaXMuZG93blgsIHRoaXMuZG93blksIHRoaXMuY3Vyc29yWCwgdGhpcy5jdXJzb3JZKTtcbiAgICAvLyAgIHRoaXMuY2FuY2VsTWFycXVlZSgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgLy8gdGhpcy5jdXJzb3JYID0gZXZlbnQucGFnZVggLSB0aGlzLmVsLm9mZnNldExlZnQ7XG4gICAgLy8gdGhpcy5jdXJzb3JZID0gZXZlbnQucGFnZVkgLSB0aGlzLmVsLm9mZnNldFRvcDtcbiAgICAvL1xuICAgIC8vIHRoaXMuZGVsdGFYID0gdGhpcy5sYXN0WCA/IHRoaXMuY3Vyc29yWCAtIHRoaXMubGFzdFggOiAwO1xuICAgIC8vIHRoaXMuZGVsdGFZID0gdGhpcy5sYXN0WSA/IHRoaXMuY3Vyc29yWSAtIHRoaXMubGFzdFkgOiAwO1xuICAgIC8vXG4gICAgLy8gaWYgKGV2ZW50LmJ1dHRvbnMgJiAxKSB7XG4gICAgLy8gICBpZiAodGhpcy5tb2RlID09ICdkcmFnJykge1xuICAgIC8vICAgICBpZiAodGhpcy5zZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgLy8gICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uQnkodGhpcy5kZWx0YVgsIHRoaXMuZGVsdGFZKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgZWxzZSBpZiAodGhpcy5tb2RlID09ICdtYXJxdWVlJykge1xuICAgIC8vICAgICB0aGlzLnJlbmRlcigpO1xuICAgIC8vICAgfVxuICAgIC8vICAgZWxzZSB7XG4gICAgLy8gICAgIGxldCBkeCA9IHRoaXMuY3Vyc29yWCAtIHRoaXMuZG93blg7XG4gICAgLy8gICAgIGxldCBkeSA9IHRoaXMuY3Vyc29yWSAtIHRoaXMuZG93blk7XG4gICAgLy8gICAgIGlmICh0aGlzLnNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAvLyAgICAgICBpZiAoTWF0aC5hYnMoZHgpID49IDIgfHwgTWF0aC5hYnMoZHkpID49IDIpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuYmVnaW5EcmFnKCk7XG4gICAgLy8gICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb25CeShkeCwgZHkpO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlIHtcbiAgICAvLyAgICAgICB0aGlzLmJlZ2luTWFycXVlZSh0aGlzLmRvd25YLCB0aGlzLmRvd25ZLCB0aGlzLmRvd25YICsgZHgsIHRoaXMuZG93blkgKyBkeSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gdGhpcy5sYXN0WCA9IHRoaXMuY3Vyc29yWDtcbiAgICAvLyB0aGlzLmxhc3RZID0gdGhpcy5jdXJzb3JZO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gIH1cblxuICBvbkRibENsaWNrKGV2ZW50KSB7XG4gICAgLy8gdGhpcy5lZGl0KCk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG4gICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJykge1xuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LnR5cGUgPT0gJ2RibGNsaWNrJykge1xuICAgICAgdGhpcy5vbkRibENsaWNrKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAna2V5ZG93bicpIHtcbiAgICAgIHRoaXMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJcbi8vIENvcHlyaWdodCAoYykgMTk3MC0yMDAzLCBXbS4gUmFuZG9scGggRnJhbmtsaW5cbi8vIGh0dHBzOi8vd3JmLmVjc2UucnBpLmVkdS8vUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcblxuZnVuY3Rpb24gcG9pbnRJblBvbHlnb24ocG9pbnRzLCB0ZXN0eCwgdGVzdHkpIHtcbiAgbGV0IGksIGosIGMgPSAwO1xuICBmb3IgKGxldCBpID0gMCwgaiA9IHBvaW50cy5sZW5ndGggLSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgIGlmICgoKHBvaW50c1tpXS55ID4gdGVzdHkpICE9IChwb2ludHNbal0ueSA+IHRlc3R5KSkgJiZcbiAgICAgICh0ZXN0eCA8IChwb2ludHNbal0ueCAtIHBvaW50c1tpXS54KSAqICh0ZXN0eSAtIHBvaW50c1tpXS55KSAvIChwb2ludHNbal0ueSAtIHBvaW50c1tpXS55KSArIHBvaW50c1tpXS54KSlcbiAgICAgIGMgPSAhYztcbiAgfVxuICByZXR1cm4gYztcbn1cblxuZnVuY3Rpb24gbGluZUludGVyc2VjdHNSZWN0YW5nbGUoeDEsIHkxLCB4MiwgeTIsIHhtaW4sIHltaW4sIHhtYXgsIHltYXgpIHtcbiAgLy8gQ29tcGxldGVseSBvdXRzaWRlLlxuICBpZiAoKHgxIDw9IHhtaW4gJiYgeDIgPD0geG1pbikgfHwgKHkxIDw9IHltaW4gJiYgeTIgPD0geW1pbikgfHxcbiAgICAgICh4MSA+PSB4bWF4ICYmIHgyID49IHhtYXgpIHx8ICh5MSA+PSB5bWF4ICYmIHkyID49IHltYXgpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICB2YXIgbSA9ICh5MiAtIHkxKSAvICh4MiAtIHgxKTtcblxuICB2YXIgeSA9IG0gKiAoeG1pbiAtIHgxKSArIHkxO1xuICBpZiAoeSA+IHltaW4gJiYgeSA8IHltYXgpIHJldHVybiB0cnVlO1xuXG4gIHkgPSBtICogKHhtYXggLSB4MSkgKyB5MTtcbiAgaWYgKHkgPiB5bWluICYmIHkgPCB5bWF4KSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgeCA9ICh5bWluIC0geTEpIC8gbSArIHgxO1xuICBpZiAoeCA+IHhtaW4gJiYgeCA8IHhtYXgpIHJldHVybiB0cnVlO1xuXG4gIHggPSAoeW1heCAtIHkxKSAvIG0gKyB4MTtcbiAgaWYgKHggPiB4bWluICYmIHggPCB4bWF4KSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGluZUludGVyc2VjdHNSZWN0YW5nbGU6IGxpbmVJbnRlcnNlY3RzUmVjdGFuZ2xlLFxuICBwb2ludEluUG9seWdvbjogcG9pbnRJblBvbHlnb25cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=