exports.id=0,exports.modules={702:function(r,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logIn=e.userError=e.userLoggedIn=void 0;var o=function(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e.default=r,e}(n(655)),t=u(n(700));u(n(701));function u(r){return r&&r.__esModule?r:{default:r}}var i=e.userLoggedIn=function(r){return{type:o.USER_LOGGED_IN,user:r}},l=e.userError=function(r){return{type:o.USER_ERROR,error:r}};e.logIn=function(r){return function(e){t.default.post("/api/v1/auth/login",{credentials:r}).then(function(r){e(i(r))}).catch(function(r){var n=r.errorMessage[0];e(l(n)),console.log({err:"error in login",error:r})})}}}};