(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1134:function(t,n,o){"use strict";var e=o(363);o.n(e).a},1290:function(t,n,o){"use strict";o.r(n);var e={props:["activated"],components:{"c-popup":function(t){return o.e(6).then(function(){var n=[o(124)];t.apply(null,n)}.bind(this)).catch(o.oe)},"c-tabs":function(t){return o.e(10).then(function(){var n=[o(123)];t.apply(null,n)}.bind(this)).catch(o.oe)},"c-tab":function(t){return o.e(11).then(function(){var n=[o(122)];t.apply(null,n)}.bind(this)).catch(o.oe)}},data:function(){return{}},methods:{signIn:function(){this.$store.dispatch("application/signIn",{password:this.$refs.password})}}},s=(o(1134),o(0)),c=Object(s.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("c-popup",{ref:"modal",attrs:{activated:t.activated,type:"custom",width:"550"},on:{close:function(n){t.$emit("close")}}},[o("div",{attrs:{slot:"custom_close",hidden:""},slot:"custom_close"}),t._v(" "),o("div",{staticClass:"download-modal",attrs:{slot:"custom_content"},slot:"custom_content"},[o("c-tabs",[o("c-tab",{attrs:{name:"Sign In",selected:!0,showFooter:!0}},[o("div",[t._v("\n                    Sign in here // @signIn()\n                ")]),t._v(" "),o("div",{staticClass:"d-flex align-items-center justify-content-end",attrs:{slot:"footer"},slot:"footer"},[o("div",[o("c-button",{on:{click:function(n){t.$emit("close")}}},[t._v("Close")])],1)])])],1)],1)])},[],!1,null,"65f40e7a",null);n.default=c.exports},363:function(t,n){}}]);