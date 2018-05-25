exports.id=0,exports.modules={672:function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),u=c(l),i=r(364),s=(r(103),c(r(0))),f=c(r(398));function c(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onChange=function(t){var r,n,a;e.setState({data:o({},e.state.data,(r={},n=t.target.name,a=t.target.value,n in r?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,r))})},e.onSubmit=function(t){t.preventDefault();var r=e.validate(e.state.data);e.setState({errors:r}),0==Object.keys(r).length&&e.props.submit(e.state.data)},e.state={data:{email:"",password:""},loading:!1,errors:{}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,[{key:"validate",value:function(e){var t={};return/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e.email)||(t.email="Invalid email"),e.password||(t.password="Can't be blank"),t}},{key:"render",value:function(){var e=this.state,t=e.data,r=e.errors;return u.default.createElement(i.Form,{onSubmit:this.onSubmit,loading:this.props.loading},this.props.error&&u.default.createElement(i.Message,{negative:!0},u.default.createElement(i.Message.Header,null," Something went wrong "),u.default.createElement("p",null,this.props.error," ")),u.default.createElement(i.Form.Field,{error:!!r.email},u.default.createElement("label",{htmlFor:"email"}," Email "),u.default.createElement("input",{type:"email",id:"email",name:"email",value:t.email,onChange:this.onChange,placeholder:"example@example.com"}),r.email&&u.default.createElement(f.default,{text:r.email})),u.default.createElement(i.Form.Field,{error:!!r.password},u.default.createElement("label",{htmlFor:"password"}," Password "),u.default.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Make it secure",value:t.password,onChange:this.onChange}),r.password&&u.default.createElement(f.default,{text:r.password})),u.default.createElement(i.Button,{type:"submit",primary:!0},"Login"))}}]),t}();p.propTypes={submit:s.default.func.isRequired},t.default=p},673:function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(1),u=p(l),i=r(102),s=p(r(0)),f=p(r(672)),c=r(397);function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}var m=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return r=n=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.submit=function(e){return n.props.logIn(e,n.props.history)},d(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("h1",null," Login Page "),u.default.createElement(f.default,o({submit:this.submit},this.props)))}}]),t}();m.propTypes={history:s.default.shape({push:s.default.func.isRequired}).isRequired,logIn:s.default.func.isRequired};t.default=(0,i.connect)(function(e){return{error:e.user.error,loading:e.user.loading}},{logIn:c.logIn})(m)}};
//# sourceMappingURL=bundle.map