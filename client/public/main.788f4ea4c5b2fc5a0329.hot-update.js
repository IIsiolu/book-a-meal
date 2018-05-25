exports.id = "main";
exports.modules = {

/***/ "./client/src/App.js":
/*!***************************!*\
  !*** ./client/src/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

__webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");

var _pages = __webpack_require__(/*! ./components/pages */ "./client/src/components/pages/index.js");

__webpack_require__(/*! ./static/css/style.css */ "./client/src/static/css/style.css");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Documentation
 * stateless component
 */

var App = function App() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _pages.HomePage }), _react2.default.createElement(_reactRouterDom.Route, { path: '/login', exact: true, component: _pages.LoginPage }), _react2.default.createElement(_reactRouterDom.Route, { path: '*', exact: true, component: _pages.NotFoundPage }));
};
// url loader solved issue with semantic
exports.default = App;

/***/ }),

/***/ "./client/src/components/pages/NotFoundPage.js":
/*!*****************************************************!*\
  !*** ./client/src/components/pages/NotFoundPage.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var NotFoundPage = function (_Component) {
  _inherits(NotFoundPage, _Component);

  function NotFoundPage() {
    _classCallCheck(this, NotFoundPage);

    return _possibleConstructorReturn(this, (NotFoundPage.__proto__ || Object.getPrototypeOf(NotFoundPage)).apply(this, arguments));
  }

  _createClass(NotFoundPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, '404 - Page Not Found'), _react2.default.createElement('p', null, 'I\'m sorry, the page you were looking for cannot be found!'));
    }
  }]);

  return NotFoundPage;
}(_react.Component);

exports.default = NotFoundPage;

/***/ }),

/***/ "./client/src/components/pages/index.js":
/*!**********************************************!*\
  !*** ./client/src/components/pages/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundPage = exports.LoginPage = exports.HomePage = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(/*! ./HomePage */ "./client/src/components/pages/HomePage.js");

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LoginPage = __webpack_require__(/*! ./LoginPage */ "./client/src/components/pages/LoginPage.js");

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _NotFoundPage = __webpack_require__(/*! ./NotFoundPage */ "./client/src/components/pages/NotFoundPage.js");

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.HomePage = _HomePage2.default;
exports.LoginPage = _LoginPage2.default;
exports.NotFoundPage = _NotFoundPage2.default;

/***/ })

};
//# sourceMappingURL=bundle.map