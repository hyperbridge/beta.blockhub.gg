(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{130:function(e,t){},1420:function(e,t,s){"use strict";s.r(t);var n={props:["assets"],components:{"c-block":function(e){return Promise.resolve().then(function(){var t=[s(1398)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-asset-comparison":function(e){return s.e(212).then(function(){var t=[s(1297)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-modal":function(e){return s.e(171).then(function(){var t=[s(1298)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-asset-grid":function(e){return s.e(167).then(function(){var t=[s(1291)];e.apply(null,t)}.bind(this)).catch(s.oe)}},data:function(){return{addMore:!1}},methods:{negateValue:function(e){var t=e.id,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"selected";this.$store.commit("assets/negateValue",{id:t,iprop:s})}},computed:{selectedAssets:function(){return this.$store.getters["assets/selectedAssets"]}}},o=(s(696),s(0)),a=Object(o.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Compare assets")]),e._v(" "),s("c-asset-comparison",{attrs:{assets:e.selectedAssets},on:{addMore:function(t){e.addMore=!0},delete:e.negateValue}}),e._v(" "),e.addMore?s("c-modal",{attrs:{title:"Select assets to compare"},on:{close:function(t){e.addMore=!1}}},[s("c-asset-grid",{attrs:{slot:"body",assets:e.assets},on:{click:e.negateValue},slot:"body"})],1):e._e()],1)},[],!1,null,null,null);t.default=a.exports},696:function(e,t,s){"use strict";var n=s(130);s.n(n).a}}]);