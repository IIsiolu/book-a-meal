exports.id=0,exports.modules={660:function(e,t,r){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=r(1),i=c(l),u=(c(r(659)),r(349)),s=(r(101),c(r(0))),f=c(r(386));function c(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":a(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onChange=function(t){var r,a,o;e.setState({data:n({},e.state.data,(r={},a=t.target.name,o=t.target.value,a in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r))})},e.onSubmit=function(t){t.preventDefault();var r=e.validate(e.state.data);e.setState({errors:r}),0==Object.keys(r).length&&e.props.submit(e.state.data)},e.state={data:{email:"",password:""},loading:!1,errors:{}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":a(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),o(t,[{key:"validate",value:function(e){var t={};return/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e.email)||(t.email="Invalid email"),e.password||(t.password="Can't be blank"),t}},{key:"render",value:function(){var e=this.state,t=e.data,r=e.errors;return i.default.createElement(u.Form,{onSubmit:this.onSubmit},this.props.error&&i.default.createElement(u.Message,{negative:!0},i.default.createElement(u.Message.Header,null," Something went wrong "),i.default.createElement("p",null,this.props.error," ")),i.default.createElement(u.Form.Field,{error:!!r.email},i.default.createElement("label",{htmlFor:"email"}," Email "),i.default.createElement("input",{type:"email",id:"email",name:"email",value:t.email,onChange:this.onChange,placeholder:"example@example.com"}),r.email&&i.default.createElement(f.default,{text:r.email})),i.default.createElement(u.Form.Field,{error:!!r.password},i.default.createElement("label",{htmlFor:"password"}," Password "),i.default.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Make it secure",value:t.password,onChange:this.onChange}),r.password&&i.default.createElement(f.default,{text:r.password})),i.default.createElement(u.Button,{type:"submit",primary:!0},"Login"))}}]),t}();p.prototypes={submit:s.default.func.isRequired},t.default=p}};