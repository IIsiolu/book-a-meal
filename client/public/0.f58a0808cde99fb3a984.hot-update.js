exports.id=0,exports.modules={702:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.logIn=r.userError=r.userLoggedIn=void 0;var o=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r}(n(655)),t=u(n(700));u(n(701));function u(e){return e&&e.__esModule?e:{default:e}}var s=r.userLoggedIn=function(e){return{type:o.USER_LOGGED_IN,user:e}},a=r.userError=function(e){return{type:o.USER_ERROR,error:e}};r.logIn=function(e){return function(r){t.default.post("/api/v1/auth/login",{credentials:e}).then(function(e){r(s(e))}).catch(function(e){console.log({err:"error in login",error:e.response});var n=e.response.data.errorMessage[0]||e.response.data.message;r(a(n))})}}}};