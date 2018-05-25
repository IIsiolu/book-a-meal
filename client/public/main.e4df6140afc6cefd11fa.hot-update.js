exports.id = "main";
exports.modules = {

/***/ "./client/src/actions/actionsTypes.js":
/*!********************************************!*\
  !*** ./client/src/actions/actionsTypes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var USER_ERROR = exports.USER_ERROR = 'USER_ERROR';
var USER_SIGN_UP = exports.USER_SIGN_UP = 'USER_SIGN_UP';
var USER_LOGGED_IN = exports.USER_LOGGED_IN = 'USER_LOGGED_IN';
var LOADING = exports.LOADING = 'LOADING';

/***/ }),

/***/ "./client/src/actions/auth.js":
/*!************************************!*\
  !*** ./client/src/actions/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.logIn = exports.signup = exports.connectin = exports.userError = exports.userLoggedIn = exports.userSignup = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _jwtDecode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _actionsTypes = __webpack_require__(/*! ./actionsTypes */ "./client/src/actions/actionsTypes.js");

var actionTypes = _interopRequireWildcard(_actionsTypes);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var userSignup = exports.userSignup = function userSignup(user) {
  return {
    type: actionTypes.USER_SIGN_UP,
    user: user
  };
};
var userLoggedIn = exports.userLoggedIn = function userLoggedIn(user) {
  return {
    type: actionTypes.USER_LOGGED_IN,
    user: user
  };
};

var userError = exports.userError = function userError(error) {
  return {
    type: actionTypes.USER_ERROR,
    error: error
  };
};

var connectin = exports.connectin = function connectin(loading) {
  return {
    type: actionTypes.LOADING
  };
};

var signup = exports.signup = function signup(credentials, history) {
  return function (dispatch) {
    console.log({
      credentials: credentials
    });
    dispatch(connectin(true));
    _axios2.default.post('/api/v1/auth/signup', credentials).then(function (res) {
      var data = res.data;

      dispatch(userSignup(data));
      history.push('/login');
    }).catch(function (error) {
      if (error.response) {
        console.log({
          err: 'error in signup',
          error: error.response
        });
        var myError = error.response.data.errorMessage ? error.response.data.errorMessage[0] : error.response.data.message;
        dispatch(userError(myError));
      } else {
        var _myError = 'poor internet connection';
        dispatch(userError(_myError));
      }
    });
  };
};

var logIn = exports.logIn = function logIn(credentials, history) {
  return function (dispatch) {
    console.log({
      credentials: credentials
    });
    dispatch(connectin(true));
    _axios2.default.post('/api/v1/auth/login', credentials).then(function (res) {
      var jwtoken = res.data.token;
      localStorage.setItem('myUserT', jwtoken);
      var userDecode = (0, _jwtDecode2.default)(jwtoken);
      var pass = _extends({}, userDecode, { token: jwtoken });
      dispatch(userLoggedIn(pass));
      var navigate = userDecode.role === 'admin' ? '/dashboard' : '/';
      history.push(navigate);
    }).catch(function (error) {
      if (error.response) {
        console.log({
          err: 'error in login',
          error: error.response
        });
        var myError = error.response.data.errorMessage ? error.response.data.errorMessage[0] : error.response.data.message;
        dispatch(userError(myError));
      } else {
        var _myError2 = 'poor internet connection';
        dispatch(userError(_myError2));
      }
    });
  };
};

var logout = exports.logout = function logout(history) {
  return function (dispatch) {
    localStorage.clear();
    history.push('/');
    dispatch(userLoggedIn({}));
  };
};

/***/ })

};
//# sourceMappingURL=bundle.map