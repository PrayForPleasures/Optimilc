!function(){"use strict";var t=[,function(t,e,r){function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(){try{var t=document.querySelectorAll("[data-toggle-menu]"),e=document.getElementById("toggle-mobile-menu");if(t&&t.length>0){var r=function(t){var e=this,r=t.currentTarget,n=function(t){setTimeout((function(){t&&t.classList.remove("active")}),100)};r&&(r.classList.contains("active")?(r.classList.remove("active"),document.removeEventListener("click",n.bind(this,r))):(r.classList.add("active"),setTimeout((function(){document.addEventListener("click",n.bind(e,r),{once:!0})}),0)))};(t=Array.apply(void 0,n(t))).forEach((function(t){t.addEventListener("click",r)}))}if(e){e.addEventListener("click",(function(){document.body.classList.toggle("off-scroll"),e.classList.toggle("active")})),window.addEventListener("resize",(function(){document.body.classList.remove("off-scroll"),e.classList.remove("active")}))}}catch(t){console.error(t)}}r.r(e),r.d(e,{default:function(){return a}})},function(t,e,r){function n(){try{var t=document.querySelectorAll("[data-open-modal]"),e=document.querySelectorAll("[data-close-modal]"),r=null;t&&t.length>0&&t.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target,n=e.getAttribute("data-open-modal")||"",o=document.querySelector('[data-modal-name="'.concat(n,'"]')),a=e.getAttribute("data-modal-change-value")||"",i=e.getAttribute("data-modal-change-img")||"";if(o){if(a){var c=o.querySelectorAll("[data-change-value-in-modal]");c&&c.length>0&&c.forEach((function(t){"INPUT"===t.tagName.toUpperCase()?t.value="".concat(a):t.innerHTML="".concat(a)}))}if(i){var u=o.querySelectorAll("[data-change-img-in-modal]");u&&u.length>0&&u.forEach((function(t){"IMG"===t.tagName.toUpperCase()&&(t.src="".concat(i))}))}o.classList.add("open"),r=o,document.body.classList.add("off-scroll")}}))}));var n=function(){r&&(r.classList.remove("open"),document.body.classList.remove("off-scroll"),setTimeout((function(){!function(){if(r){var t=r.querySelectorAll("[data-change-value-in-modal]"),e=r.querySelectorAll("[data-change-img-in-modal]");t&&t.length>0&&e.forEach((function(t){"INPUT"===t.tagName.toUpperCase()?t.value="":t.innerHTML=""})),e&&e.length>0&&e.forEach((function(t){"IMG"===t.tagName.toUpperCase()&&(t.src="")}));var n=r.querySelectorAll("input");n&&n.length>0&&n.forEach((function(t){"checkbox"===t.type?t.checked=!1:t.value=""}))}}(),r=null}),300))};e&&e.length>0&&e.forEach((function(t){t.addEventListener("click",n)})),window.addEventListener("resize",(function(){document.body.classList.remove("off-scroll"),n()})),window.addEventListener("close-all-modal",n)}catch(t){console.error(t)}}r.r(e),r.d(e,{default:function(){return n}})},function(t,e,r){function n(){try{var t=document.querySelectorAll("[data-change-clients]");if(t&&t.length>0){t[0];t.forEach((function(t){var e,r,n=t.querySelectorAll(".main-our-clients__item-img"),o=(e=10,r=20,Math.floor(Math.random()*(r-e))+e);n&&n.length>0&&n.forEach((function(t,e){if(t){var r=o*e/2;t.style.animationName="toggle-gray",t.style.animationDuration="".concat(o,"s"),t.style.animationDelay="".concat(r,"s"),t.style.animationIterationCount="infinite",t.style.animationTimingFunction="linear"}}))}))}}catch(t){console.error(t)}}r.r(e),r.d(e,{default:function(){return n}})},function(t,e,r){function n(){try{var t=document.getElementById("slider-main"),e=document.querySelectorAll("[data-main-slider-image]");if(t&&e&&e.length>0){var r=0,n=new window.Swiper("#slider-main",{effect:"fade",fadeEffect:{crossFade:!0},allowTouchMove:!1,speed:800,autoplay:{disableOnInteraction:!1,pauseOnMouseEnter:!0}}),o=function(t){var n=e[r],o=e[t];n&&o&&(n.classList.remove("active"),o.classList.add("active"),r=t)};e.forEach((function(t,e){t.addEventListener("click",(function(){o(e),n.slideTo(e)}))})),n.on("slideChange",(function(){var t=n.activeIndex;o(t)}))}}catch(t){console.error(t)}}r.r(e),r.d(e,{default:function(){return n}})},function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(6);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:S(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function v(){}function y(){}function p(){}var m={};s(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==e&&r.call(b,c)&&(m=b);var w=p.prototype=v.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function a(n,i,c,u){var l=d(t[n],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==o(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){a("next",t,c,u)}),(function(t){a("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return a("throw",t,c,u)}))}u(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return y.prototype=p,n(w,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:y,configurable:!0}),y.displayName=s(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(){var t=!1,e=function(t){var e=t.target;if(e)if("checkbox"===e.type)e.classList.remove("error");else{var r=t.target.parentNode;r&&r.classList.contains("main-feedback__wrap")&&r.classList.remove("error")}},r=function(t){if(t&&t.length>0){var e=c(t),r=!1;return e.forEach((function(t){if("checkbox"===t.type)t.checked||(t.classList.add("error"),r=!0);else{var e=t.parentNode,n=new RegExp("".concat(t.getAttribute("data-validation-form")));e&&e.classList.contains("main-feedback__wrap")&&(n&&n.test(t.value)||(e.classList.add("error"),r=!0))}})),!r}},o=function(){var e,o=(e=a().mark((function e(o){var i,c,u,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),i=o.target,c=i.querySelectorAll("[data-validation-form]"),u=new FormData(i),t){e.next=21;break}if(!r(c)){e.next=21;break}return t=!0,e.prev=7,e.next=10,axios.post("mail/mail.php",u);case 10:(l=e.sent)&&200==l.status?((0,n.default)("success"),i.reset(),setTimeout((function(){window.dispatchEvent(new Event("close-all-modal"))}),1500)):console.error(l,"response failed"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),(0,n.default)("error"),console.error(e.t0);case 18:return e.prev=18,t=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[7,14,18,21]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))});return function(t){return o.apply(this,arguments)}}(),u=document.querySelectorAll("[data-consultation-form]");u&&u.length>0&&(u=Array.apply(void 0,c(u))).forEach((function(t){var r=t.querySelectorAll("[data-validation-form]");r&&u.length>0&&r.forEach((function(t){t.addEventListener("change",e),t.addEventListener("input",e)})),t.addEventListener("submit",o)}))}},function(t,e,r){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,r=document.querySelector(["[data-toast-id=".concat(t,"]")]);r&&!r.classList.contains("active")&&(r.classList.add("active"),setTimeout((function(){return r.classList.remove("active")}),e))}r.r(e),r.d(e,{default:function(){return n}})}],e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};!function(){r.r(n);var t=r(1),e=r(2),o=r(3),a=r(4),i=r(5);document.addEventListener("DOMContentLoaded",(function(){(0,t.default)(),(0,e.default)(),(0,a.default)(),(0,o.default)(),(0,i.default)()}))}()}();
//# sourceMappingURL=main-dist.js.map