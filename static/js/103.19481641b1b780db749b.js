(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1429:function(t,n,o){"use strict";o.r(n);var s=o(8),c={components:{"c-layout":function(t){return Promise.resolve().then(function(){var n=[o(1425)];t.apply(null,n)}.bind(this)).catch(o.oe)}},data:function(){return{errors:[]}},methods:{signIn:function(){this.$store.dispatch("application/signIn"),this.$router.push("/")},importAccountFile:function(){s.sendCommand("importAccountFileRequest").then(function(){window.location.reload()})}}},e=(o(847),o(0)),i=Object(e.a)(c,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("c-layout",{attrs:{navigationKey:"account",showLeftPanel:!1,showRightPanel:!1}},[o("div",{staticClass:"content login-container",attrs:{id:"content"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"col-12"},[t.errors.length?o("p",{staticClass:"errors"},[o("strong",[t._v("Please correct the following error(s):")]),t._v(" "),o("ul",t._l(t.errors,function(n){return o("li",{key:n},[t._v(t._s(n))])}))]):t._e(),t._v(" "),o("div",{staticClass:"chosen-box"},[o("div",{staticClass:"chosen-box__container"},[o("div",{staticClass:"h1 mb-4"},[t._v("Already have an account?")]),t._v(" "),o("c-button",{attrs:{status:"outline-success",size:"lg"},on:{click:t.importAccountFile}},[t._v("Import Account")])],1)])])])])])},[],!1,null,"53c01012",null);n.default=i.exports},282:function(t,n){},847:function(t,n,o){"use strict";var s=o(282);o.n(s).a}}]);