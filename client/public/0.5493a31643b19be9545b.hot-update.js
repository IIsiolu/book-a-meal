exports.id=0,exports.modules={230:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.logIn=n.connectin=n.userError=n.userLoggedIn=void 0;var o,t=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.default=e,n}(r(229)),u=r(396),c=(o=u)&&o.__esModule?o:{default:o};var l=n.userLoggedIn=function(e){return{type:t.USER_LOGGED_IN,user:e}},i=(n.userError=function(e){return{type:t.USER_ERROR,error:e}},n.connectin=function(e){return{type:t.LOADING,loading:e}});n.logIn=function(e,n){return function(r){try{console.log({credentials:e}),r(i(!0)),c.default.post("/api/v1/auth/login",e).then(function(e){r(l(e.data)),n.push("/")}).catch(function(e){console.log({tryError:e})})}catch(e){console.log(e)}}}}};
//# sourceMappingURL=bundle.map