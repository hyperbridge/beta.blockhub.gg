(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{123:function(e,t){},261:function(e,t){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";n(1);var r=n(6).createTemplate,i=n(8);e.exports=function(e){var t=e.env,n=e.apiKey,o=e.parentId,a=e.onSession;return{env:{ENV_MAP:{dev:{VERIFF_API_URL:"http://localhost:3000/v1"},test:{VERIFF_API_URL:"http://localhost:3000/v1"},sandbox:{VERIFF_API_URL:"https://sandbox.veriff.me/v1"},staging:{VERIFF_API_URL:"https://staging.veriff.me/v1"},production:{VERIFF_API_URL:"https://magic.veriff.me/v1"}}}.ENV,params:{person:{},features:["selfid"]},setParams:function(e){this.params=Object.assign({},this.params,e)},mount:function(){var e=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=s.formLabel,c=s.submitBtnText,l=void 0===c?"Start Verification":c,f=s.loadingText,p=void 0===f?"Loading...":f,d=r(o,{person:this.params.person,formLabel:u,submitBtnText:l});d.onsubmit=function(r){r.preventDefault();var o=d.givenName?d.givenName.value:e.params.person.givenName,s=d.lastName?d.lastName.value:e.params.person.lastName,u=d.idNumber?d.idNumber.value:e.params.person.idNumber;if(!(e.params.features&&e.params.features instanceof Array))throw new Error("Session features array is required");if(!o||!s)throw new Error("Required parameters givenName or lastName is missing");e.setParams({person:{givenName:o,lastName:s,idNumber:u}}),d.submitBtn.value=p,d.submitBtn.disabled=!0,i(t,n,e.params,function(e,t){a(e,t),d.submitBtn.value=l,d.submitBtn.disabled=!1})}}}}},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".veriff-container {\n  margin-top: 80px;\n  width: 125px;\n}\n\n.veriff-label {\n  display: inline-block;\n  max-width: 100%;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: normal;\n  margin-bottom: 10px;\n}\n\n.veriff-text {\n    border: 0;\n    outline: 0;\n    background: transparent;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.25);\n    width: 100%;\n    font-size: 14px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    color: black;\n    margin-bottom: 5px;\n}\n\n.veriff-submit {\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  min-height: 16px;\n  margin-top: 10px;\n  padding: 5px 16px;\n  border-radius: 100px;\n  background-color: #4DD965;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  color: rgba(255, 255, 255, 0.8);\n}\n",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],t))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(l(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function i(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function o(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=h[h.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),h.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=v(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function s(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),c(t,e.attrs),o(e,t),t}function u(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",c(t,e.attrs),o(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var c=b++;n=m||(m=s(t)),r=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=g(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function f(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}var p={},d=function(e){var t;return function(){return void 0===t&&(t=function(){return window&&document&&document.all&&!window.atob}.apply(this,arguments)),t}}(),v=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),m=null,b=0,h=[],g=n(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=d()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a];(u=p[s.id]).refs--,o.push(u)}e&&r(i(e,t),t);for(a=0;a<o.length;a++){var u;if(0===(u=o[a]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete p[u.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";var r=n(7).camelCaseToSlug,i=function(e){var t=e.type,n=e.value,i=e.name,o=e.required,a=document.createElement("input");return a.setAttribute("type",t),"submit"===t&&n&&(a.value=n),a.setAttribute("class","veriff-"+t),a.setAttribute("id","veriff-"+r(i)),a.setAttribute("name",i),a.required=o,a},o=function(e,t){var n=document.createElement("label");return n.setAttribute("class","veriff-label"),n.setAttribute("id","veriff-label-"+r(t)),n.setAttribute("htmlFor",t),n.innerHTML=e,n},a=function(e){var t=e.container,n=e.name,r=e.label,a=e.shouldRender,s=e.required;if(!a){var u=o(r,n),c=i({type:"text",name:n,required:s});t.appendChild(u),t.appendChild(c)}};e.exports={createTemplate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.formLabel,r=void 0===n?{givenName:"Given name",lastName:"Last name",idNumber:"Id number"}:n,o=t.person,s=void 0===o?{givenName:!1,lastName:!1,idNumber:!1}:o,u=t.submitBtnText,c=document.getElementById(e);c||new Error("Element "+e+" does not exists");var l=document.createDocumentFragment(),f=document.createElement("form");f.setAttribute("class","veriff-container"),f.setAttribute("name","veriff-form"),a({container:f,name:"givenName",label:r.givenName,shouldRender:s.givenName,required:!0}),a({container:f,name:"lastName",label:r.lastName,shouldRender:s.lastName,required:!0}),a({container:f,name:"idNumber",label:r.idNumber,shouldRender:s.idNumber,required:!1});var p=i({type:"submit",name:"submitBtn",value:u,required:!0});return f.appendChild(p),l.appendChild(f),c.appendChild(l),f}}},function(e,t,n){"use strict";var r=t;r.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},r.camelCaseToSlug=function(e){return e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase()},r.camelCaseHuminize=function(e){return r.capitalize(e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1 ").toLowerCase())}},function(e,t,n){"use strict";var r={dev:{VERIFF_API_URL:"http://localhost:3000/v1"},test:{VERIFF_API_URL:"http://localhost:3000/v1"},sandbox:{VERIFF_API_URL:"https://sandbox.veriff.me/v1"},staging:{VERIFF_API_URL:"https://staging.veriff.me/v1"},production:{VERIFF_API_URL:"https://magic.veriff.me/v1"}};e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"production",t=arguments[1],n=arguments[2],i=arguments[3],o=r[e].VERIFF_API_URL+"/sessions",a=new XMLHttpRequest;a.open("POST",o,!0),a.setRequestHeader("Content-type","application/json"),a.setRequestHeader("x-auth-client",t),a.onreadystatechange=function(){if(4===a.readyState)if("201"==a.status){var e=JSON.parse(a.responseText);i(null,e)}else i({status:a.status,statusText:a.statusText},null)};var s={verification:{features:n.features,person:{firstName:n.person.givenName,lastName:n.person.lastName,idNumber:n.person.idNumber},timestamp:(new Date).toISOString()}},u=JSON.stringify(s);a.send(u)}}])},494:function(e,t,n){"use strict";var r=n(123);n.n(r).a},737:function(e,t,n){"use strict";n.r(t);var r=n(25),i=n.n(r),o=n(261),a=n.n(o),s={components:{"c-layout":function(e){return Promise.resolve().then(function(){var t=[n(746)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tab":function(e){return n.e(97).then(function(){var t=[n(16)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tabs":function(e){return n.e(98).then(function(){var t=[n(15)];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{errors:[],installed:{veriff:!1},verificationLink:null}},methods:{signIn:function(){this.$store.dispatch("application/signIn"),this.$router.push("/")},installVeriff:function(){var e=this;this.installed.veriff||(a()({env:"production",apiKey:"ceba96be-5fd6-48ed-87d6-e5aaf80f9718",parentId:"veriff-root",onSession:function(t,n){n&&!t||e.errors.push("Could not contact verification service. Please contact support. "+i()(t)),e.verificationLink=n.verification.url}}).mount(),this.installed.veriff=!0)}},updated:function(){var e=this;this.$nextTick(function(){e.installVeriff()})}},u=(n(494),n(0)),c=Object(u.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("c-layout",{attrs:{navigationKey:"account-navigation"}},[n("div",{staticClass:"content login-container",attrs:{id:"content"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"col-12"},[e.errors.length?n("p",{staticClass:"errors"},[n("strong",[e._v("Please correct the following error(s):")]),e._v(" "),n("ul",e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}))]):e._e(),e._v(" "),n("c-tabs",{attrs:{currentStep:e.current_step}},[n("c-tab",{attrs:{name:"Account Verification",selected:!0,showFooter:!0}},[n("div",{staticClass:"tab-container"},[n("div",{staticClass:"tab-card padding-20"},[n("h3",[e._v("Verify your identity (KYC)")]),e._v(" "),n("p",[e._v("\n                                    Submit a proof of identity by providing your legal name, country of residence, and government identification number."),n("br"),e._v("\n                                    KYC stands for Know Your Customer. BlockHub is required by law to collect this information, so that we know the source of money (money laundering prevention).\n                                ")]),e._v(" "),e.verificationLink?e._e():n("div",[n("p",[e._v('Please fill in the fields below. Afterward you will be taken to our partner Veriff to complete your identity verification. For "Id number" use the same government ID number you will use for the next step.')]),e._v(" "),n("div",{attrs:{id:"veriff-root"}})]),e._v(" "),e.verificationLink?n("div",[e.verificationLink?n("c-button",{attrs:{href:e.verificationLink,target:"_blank",icon:"angle-right"}},[e._v("Continue to Veriff")]):e._e()],1):e._e()])])])],1)],1)])])])},[],!1,null,null,null);t.default=c.exports}}]);