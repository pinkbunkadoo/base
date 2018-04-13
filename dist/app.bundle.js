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

var _stage = __webpack_require__(/*! ./stage */ "./src/stage.js");

var _stage2 = _interopRequireDefault(_stage);

var _text_object = __webpack_require__(/*! ./text_object */ "./src/text_object.js");

var _text_object2 = _interopRequireDefault(_text_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.dom = [];
  }

  _createClass(App, [{
    key: 'startup',
    value: function startup() {
      console.log('startup');

      var label = new _text_object2.default({ value: 'hello', x: 50, y: 100 });

      label.on('hey', function (event) {});

      this.stage.add(label);
    }
  }, {
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
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      // console.log(event.key);
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

    this.el.addEventListener('mousedown', this);
    this.el.addEventListener('mouseup', this);
    this.el.addEventListener('mousemove', this);
  }

  _createClass(Stage, [{
    key: 'add',
    value: function add(stageObject) {
      this.children.push(stageObject);
      this.el.appendChild(stageObject.el);
      stageObject.addedToStage();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      this.cursorx = event.offsetX;
      this.cursory = event.offsetY;
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(event) {
      if (event.type == 'mousedown') {} else if (event.type == 'mouseup') {} else if (event.type == 'mousemove') {
        this.onMouseMove(event);
      }
    }
  }]);

  return Stage;
}();

exports.default = Stage;

/***/ }),

/***/ "./src/stage_object.js":
/*!*****************************!*\
  !*** ./src/stage_object.js ***!
  \*****************************/
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

var StageObject = function (_EventDispatcher) {
  _inherits(StageObject, _EventDispatcher);

  function StageObject() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, StageObject);

    var _this = _possibleConstructorReturn(this, (StageObject.__proto__ || Object.getPrototypeOf(StageObject)).call(this));

    _this.el = document.createElement('div');
    _this.el.classList.add('stage-object');
    _this.setPosition(params.x || 0, params.y || 0);

    _this.el.addEventListener('mousedown', _this);
    return _this;
  }

  _createClass(StageObject, [{
    key: 'setPosition',
    value: function setPosition(x, y) {
      this.x = x;
      this.y = y;
      this.el.style.left = this.x + 'px';
      this.el.style.top = this.y + 'px';
    }
  }, {
    key: 'addedToStage',
    value: function addedToStage() {
      this.emit('hey', new _events.Event('hey', { num: 1 }));
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
        this.setPosition(this.x + event.movementX, this.y + event.movementY);
      } else {
        // if (event.button == 0) {
        //   console.log('left');
        // }
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
  }]);

  return StageObject;
}(_events.EventDispatcher);

exports.default = StageObject;

/***/ }),

/***/ "./src/text_object.js":
/*!****************************!*\
  !*** ./src/text_object.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _stage_object = __webpack_require__(/*! ./stage_object */ "./src/stage_object.js");

var _stage_object2 = _interopRequireDefault(_stage_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextObject = function (_StageObject) {
  _inherits(TextObject, _StageObject);

  function TextObject() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TextObject);

    var _this = _possibleConstructorReturn(this, (TextObject.__proto__ || Object.getPrototypeOf(TextObject)).call(this, params));

    _this.setSize(params.size || 48);
    _this.setText(params.value);
    return _this;
  }

  _createClass(TextObject, [{
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
  }, {
    key: 'addedToStage',
    value: function addedToStage() {
      _get(TextObject.prototype.__proto__ || Object.getPrototypeOf(TextObject.prototype), 'addedToStage', this).call(this);
    }
  }]);

  return TextObject;
}(_stage_object2.default);

exports.default = TextObject;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2Vfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0X29iamVjdC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJkb20iLCJjb25zb2xlIiwibG9nIiwibGFiZWwiLCJ2YWx1ZSIsIngiLCJ5Iiwib24iLCJldmVudCIsInN0YWdlIiwiYWRkIiwiaW5pdEVsZW1lbnRzIiwiaW5pdEV2ZW50TGlzdGVuZXJzIiwic3RhcnR1cCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZWwiLCJ0eXBlIiwib25LZXlEb3duIiwiaW5pdCIsIkV2ZW50IiwicGFyYW1zIiwiRXZlbnREaXNwYXRjaGVyIiwibGlzdGVuZXJzIiwiYXJncyIsImkiLCJsZW5ndGgiLCJsaXN0ZW5lciIsImNhbGxiYWNrIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTdGFnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjaGlsZHJlbiIsInN0YWdlT2JqZWN0IiwiYWRkZWRUb1N0YWdlIiwiY3Vyc29yeCIsIm9mZnNldFgiLCJjdXJzb3J5Iiwib2Zmc2V0WSIsIm9uTW91c2VNb3ZlIiwiU3RhZ2VPYmplY3QiLCJzZXRQb3NpdGlvbiIsInN0eWxlIiwibGVmdCIsInRvcCIsImVtaXQiLCJudW0iLCJkcmFnIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJlZ2luRHJhZyIsImVuZERyYWciLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsIm9uQmx1ciIsIlRleHRPYmplY3QiLCJzZXRTaXplIiwic2l6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OztBQUVyQixVQUFLdUMsT0FBTCxDQUFhdkMsT0FBT3dDLElBQVAsSUFBZSxFQUE1QjtBQUNBLFVBQUtDLE9BQUwsQ0FBYXpDLE9BQU90QixLQUFwQjtBQUhxQjtBQUl0Qjs7Ozs0QkFFT0EsSyxFQUFPO0FBQ2IsV0FBSzhELElBQUwsR0FBWTlELEtBQVo7QUFDQSxXQUFLaUIsRUFBTCxDQUFRNkIsS0FBUixDQUFja0IsUUFBZCxHQUF5QixLQUFLRixJQUFMLEdBQVksSUFBckM7QUFDRDs7OzRCQUVPOUQsSyxFQUFPO0FBQ2IsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsV0FBS2lCLEVBQUwsQ0FBUWdELFNBQVIsR0FBb0IsS0FBS2pFLEtBQXpCO0FBQ0Q7OzttQ0FFYztBQUNiO0FBQ0Q7Ozs7OztrQkFHWTRELFUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJcbmltcG9ydCBTdGFnZSBmcm9tICcuL3N0YWdlJztcbmltcG9ydCBUZXh0T2JqZWN0IGZyb20gJy4vdGV4dF9vYmplY3QnO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbSA9IFtdO1xuICB9XG5cbiAgc3RhcnR1cCgpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnR1cCcpO1xuXG4gICAgbGV0IGxhYmVsID0gbmV3IFRleHRPYmplY3QoeyB2YWx1ZTogJ2hlbGxvJywgeDogNTAsIHk6IDEwMCB9KTtcblxuICAgIGxhYmVsLm9uKCdoZXknLCAoZXZlbnQpID0+IHtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RhZ2UuYWRkKGxhYmVsKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc3RhcnR1cCgpO1xuICB9XG5cbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcyk7XG4gIH1cblxuICBpbml0RWxlbWVudHMoKSB7XG4gICAgdGhpcy5kb20uYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb20uYXBwKTtcblxuICAgIHRoaXMuc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcbiAgICB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5zdGFnZS5lbCk7XG5cbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmtleSk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdrZXlkb3duJykge1xuICAgICAgdGhpcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpO1xuICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuICBhcHAuaW5pdCgpO1xufSk7XG4iLCJcbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFyYW1zKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxufVxuXG5jbGFzcyBFdmVudERpc3BhdGNoZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG4gIGVtaXQodHlwZSwgLi4uYXJncykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2ldO1xuICAgICAgaWYgKGxpc3RlbmVyLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjayguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgdHlwZTogdHlwZSwgY2FsbGJhY2s6IGNhbGxiYWNrIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBFdmVudERpc3BhdGNoZXIsIEV2ZW50IH07XG4iLCJcbmNsYXNzIFN0YWdlIHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2UnKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gIH1cblxuICBhZGQoc3RhZ2VPYmplY3QpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goc3RhZ2VPYmplY3QpO1xuICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoc3RhZ2VPYmplY3QuZWwpO1xuICAgIHN0YWdlT2JqZWN0LmFkZGVkVG9TdGFnZSgpO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnNvcnggPSBldmVudC5vZmZzZXRYO1xuICAgIHRoaXMuY3Vyc29yeSA9IGV2ZW50Lm9mZnNldFk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09ICdtb3VzZWRvd24nKSB7XG5cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnbW91c2V1cCcpIHtcblxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJpbXBvcnQgeyBFdmVudCwgRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnLi9ldmVudHMnO1xuXG5jbGFzcyBTdGFnZU9iamVjdCBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcz17fSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2Utb2JqZWN0Jyk7XG4gICAgdGhpcy5zZXRQb3NpdGlvbihwYXJhbXMueCB8fCAwLCBwYXJhbXMueSB8fCAwKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcyk7XG4gIH1cblxuICBzZXRQb3NpdGlvbih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XG4gICAgdGhpcy5lbC5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICAgIHRoaXMuZW1pdCgnaGV5JywgbmV3IEV2ZW50KCdoZXknLCB7IG51bTogMSB9KSk7XG4gIH1cblxuICBiZWdpbkRyYWcoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzKTtcbiAgICB0aGlzLmRyYWcgPSB0cnVlO1xuICB9XG5cbiAgZW5kRHJhZygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMpO1xuICAgIHRoaXMuZHJhZyA9IGZhbHNlO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICB0aGlzLmJlZ2luRHJhZygpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgdGhpcy5lbmREcmFnKCk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGlmICh0aGlzLmRyYWcpIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy54ICsgZXZlbnQubW92ZW1lbnRYLCB0aGlzLnkgKyBldmVudC5tb3ZlbWVudFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2xlZnQnKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cblxuICBvbkJsdXIoZXZlbnQpIHtcbiAgICB0aGlzLmVuZERyYWcoKTtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZXVwJykge1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC50eXBlID09ICdtb3VzZW1vdmUnKSB7XG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQudHlwZSA9PSAnYmx1cicpIHtcbiAgICAgIHRoaXMub25CbHVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2VPYmplY3Q7XG4iLCJpbXBvcnQgU3RhZ2VPYmplY3QgZnJvbSAnLi9zdGFnZV9vYmplY3QnO1xuXG5jbGFzcyBUZXh0T2JqZWN0IGV4dGVuZHMgU3RhZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICBzdXBlcihwYXJhbXMpO1xuICAgIHRoaXMuc2V0U2l6ZShwYXJhbXMuc2l6ZSB8fCA0OCk7XG4gICAgdGhpcy5zZXRUZXh0KHBhcmFtcy52YWx1ZSk7XG4gIH1cblxuICBzZXRTaXplKHZhbHVlKSB7XG4gICAgdGhpcy5zaXplID0gdmFsdWU7XG4gICAgdGhpcy5lbC5zdHlsZS5mb250U2l6ZSA9IHRoaXMuc2l6ZSArICdweCc7XG4gIH1cblxuICBzZXRUZXh0KHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGFkZGVkVG9TdGFnZSgpIHtcbiAgICBzdXBlci5hZGRlZFRvU3RhZ2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0T2JqZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==