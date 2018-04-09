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

var _engine = __webpack_require__(/*! ./engine */ "./src/engine.js");

var _engine2 = _interopRequireDefault(_engine);

var _stage = __webpack_require__(/*! ./stage */ "./src/stage.js");

var _stage2 = _interopRequireDefault(_stage);

var _text = __webpack_require__(/*! ./text */ "./src/text.js");

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const Fragment = require('./fragment');
// const Stage = require('./stage');

var App = function () {
  function App() {
    _classCallCheck(this, App);

    console.log('App');
  }

  _createClass(App, [{
    key: 'startup',
    value: function startup() {
      console.log('startup');

      this.stage = new _stage2.default();
      // this.engine = new Engine({ stage: this.stage });

      var label = new _text2.default({ value: 'hello', x: 50, y: 100 });
      this.stage.add(label);

      // let fragment = new Fragment({ text: 'Hello', x: 50, y: 100 });
      // this.stage.add(fragment);

      document.body.appendChild(this.stage.el);

      // label.el.style.fontSize = '36px';
    }
  }, {
    key: 'init',
    value: function init() {
      console.log('init');
      this.initElements();
      this.initEventListeners();
      this.startup();
    }
  }, {
    key: 'initEventListeners',
    value: function initEventListeners() {}
  }, {
    key: 'initElements',
    value: function initElements() {
      // this.dom.app = document.getElementById('app');
      // this.stage = new Stage();
      // this.dom.app.appendChild(this.stage.el);
    }
  }]);

  return App;
}();

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  var app = new App();
  app.init();
});

// module.exports = App;
// global.App = App;

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const Fragment = require('./fragment');
// const Stage = require('./stage');

var Engine = function Engine(params) {
  _classCallCheck(this, Engine);

  this.stage = params.stage;
};

module.exports = Engine;

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
  }

  _createClass(Stage, [{
    key: 'add',
    value: function add(stageObject) {
      this.children.push(stageObject);
      this.el.appendChild(stageObject.el);
      stageObject.addedToStage();
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StageObject = function () {
  function StageObject() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, StageObject);

    this.el = document.createElement('div');
    this.el.classList.add('stage-object');
    this.setPosition(params.x || 0, params.y || 0);
    // this.el.classList.add('fragment');
    // this.el.appendChild(document.createTextNode(this.text));
    //
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
      console.log('added');
    }
  }]);

  return StageObject;
}();

exports.default = StageObject;

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
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

var Text = function (_StageObject) {
  _inherits(Text, _StageObject);

  function Text() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, params));

    _this.setSize(params.size || 48);
    _this.setText(params.value);
    return _this;
  }

  _createClass(Text, [{
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
      _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'addedToStage', this).call(this);
    }
  }]);

  return Text;
}(_stage_object2.default);

exports.default = Text;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhZ2Vfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIl0sIm5hbWVzIjpbIkFwcCIsImNvbnNvbGUiLCJsb2ciLCJzdGFnZSIsImxhYmVsIiwidmFsdWUiLCJ4IiwieSIsImFkZCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZWwiLCJpbml0RWxlbWVudHMiLCJpbml0RXZlbnRMaXN0ZW5lcnMiLCJzdGFydHVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcCIsImluaXQiLCJFbmdpbmUiLCJwYXJhbXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiU3RhZ2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiY2hpbGRyZW4iLCJzdGFnZU9iamVjdCIsInB1c2giLCJhZGRlZFRvU3RhZ2UiLCJTdGFnZU9iamVjdCIsInNldFBvc2l0aW9uIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiVGV4dCIsInNldFNpemUiLCJzaXplIiwic2V0VGV4dCIsImZvbnRTaXplIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlD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Ozs7Ozs7O0FDdkJmOzs7Ozs7Ozs7Ozs7SUFFTUssSTs7O0FBQ0osa0JBQXVCO0FBQUEsUUFBWGYsTUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUFBLDRHQUNmQSxNQURlOztBQUVyQixVQUFLZ0IsT0FBTCxDQUFhaEIsT0FBT2lCLElBQVAsSUFBZSxFQUE1QjtBQUNBLFVBQUtDLE9BQUwsQ0FBYWxCLE9BQU9mLEtBQXBCO0FBSHFCO0FBSXRCOzs7OzRCQUVPQSxLLEVBQU87QUFDYixXQUFLZ0MsSUFBTCxHQUFZaEMsS0FBWjtBQUNBLFdBQUtPLEVBQUwsQ0FBUW9CLEtBQVIsQ0FBY08sUUFBZCxHQUF5QixLQUFLRixJQUFMLEdBQVksSUFBckM7QUFDRDs7OzRCQUVPaEMsSyxFQUFPO0FBQ2IsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsV0FBS08sRUFBTCxDQUFRNEIsU0FBUixHQUFvQixLQUFLbkMsS0FBekI7QUFDRDs7O21DQUVjO0FBQ2I7QUFDRDs7Ozs7O2tCQUdZOEIsSSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsIlxuaW1wb3J0IEVuZ2luZSBmcm9tICcuL2VuZ2luZSc7XG5pbXBvcnQgU3RhZ2UgZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xuXG4vLyBjb25zdCBGcmFnbWVudCA9IHJlcXVpcmUoJy4vZnJhZ21lbnQnKTtcbi8vIGNvbnN0IFN0YWdlID0gcmVxdWlyZSgnLi9zdGFnZScpO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZygnQXBwJyk7XG5cbiAgfVxuXG4gIHN0YXJ0dXAoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0dXAnKTtcblxuICAgIHRoaXMuc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcbiAgICAvLyB0aGlzLmVuZ2luZSA9IG5ldyBFbmdpbmUoeyBzdGFnZTogdGhpcy5zdGFnZSB9KTtcblxuICAgIGxldCBsYWJlbCA9IG5ldyBUZXh0KHsgdmFsdWU6ICdoZWxsbycsIHg6IDUwLCB5OiAxMDAgfSk7XG4gICAgdGhpcy5zdGFnZS5hZGQobGFiZWwpO1xuXG4gICAgLy8gbGV0IGZyYWdtZW50ID0gbmV3IEZyYWdtZW50KHsgdGV4dDogJ0hlbGxvJywgeDogNTAsIHk6IDEwMCB9KTtcbiAgICAvLyB0aGlzLnN0YWdlLmFkZChmcmFnbWVudCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3RhZ2UuZWwpO1xuXG4gICAgLy8gbGFiZWwuZWwuc3R5bGUuZm9udFNpemUgPSAnMzZweCc7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdpbml0Jyk7XG4gICAgdGhpcy5pbml0RWxlbWVudHMoKTtcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc3RhcnR1cCgpO1xuICB9XG5cbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xuXG4gIH1cblxuICBpbml0RWxlbWVudHMoKSB7XG4gICAgLy8gdGhpcy5kb20uYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICAgIC8vIHRoaXMuc3RhZ2UgPSBuZXcgU3RhZ2UoKTtcbiAgICAvLyB0aGlzLmRvbS5hcHAuYXBwZW5kQ2hpbGQodGhpcy5zdGFnZS5lbCk7XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgYXBwLmluaXQoKTtcbn0pO1xuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQXBwO1xuLy8gZ2xvYmFsLkFwcCA9IEFwcDtcbiIsIi8vIGNvbnN0IEZyYWdtZW50ID0gcmVxdWlyZSgnLi9mcmFnbWVudCcpO1xuLy8gY29uc3QgU3RhZ2UgPSByZXF1aXJlKCcuL3N0YWdlJyk7XG5cbmNsYXNzIEVuZ2luZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMuc3RhZ2UgPSBwYXJhbXMuc3RhZ2U7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZ2luZTtcbiIsIlxuY2xhc3MgU3RhZ2Uge1xuICBjb25zdHJ1Y3RvcihwYXJhbXM9e30pIHtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzdGFnZScpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxuXG4gIGFkZChzdGFnZU9iamVjdCkge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChzdGFnZU9iamVjdCk7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChzdGFnZU9iamVjdC5lbCk7XG4gICAgc3RhZ2VPYmplY3QuYWRkZWRUb1N0YWdlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2U7XG4iLCJcbmNsYXNzIFN0YWdlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RhZ2Utb2JqZWN0Jyk7XG4gICAgdGhpcy5zZXRQb3NpdGlvbihwYXJhbXMueHx8MCwgcGFyYW1zLnl8fDApO1xuICAgIC8vIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnZnJhZ21lbnQnKTtcbiAgICAvLyB0aGlzLmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudGV4dCkpO1xuICAgIC8vXG4gIH1cblxuICBzZXRQb3NpdGlvbih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IHRoaXMueCArICdweCc7XG4gICAgdGhpcy5lbC5zdHlsZS50b3AgPSB0aGlzLnkgKyAncHgnO1xuICB9XG5cbiAgYWRkZWRUb1N0YWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdhZGRlZCcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWdlT2JqZWN0O1xuIiwiaW1wb3J0IFN0YWdlT2JqZWN0IGZyb20gJy4vc3RhZ2Vfb2JqZWN0JztcblxuY2xhc3MgVGV4dCBleHRlbmRzIFN0YWdlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocGFyYW1zPXt9KSB7XG4gICAgc3VwZXIocGFyYW1zKTtcbiAgICB0aGlzLnNldFNpemUocGFyYW1zLnNpemUgfHwgNDgpO1xuICAgIHRoaXMuc2V0VGV4dChwYXJhbXMudmFsdWUpO1xuICB9XG5cbiAgc2V0U2l6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMuZWwuc3R5bGUuZm9udFNpemUgPSB0aGlzLnNpemUgKyAncHgnO1xuICB9XG5cbiAgc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gIH1cblxuICBhZGRlZFRvU3RhZ2UoKSB7XG4gICAgc3VwZXIuYWRkZWRUb1N0YWdlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=