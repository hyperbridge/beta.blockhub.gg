(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1271:function(t,e,n){"use strict";n.r(e);var a={components:{"c-tabs":function(t){return n.e(157).then(function(){var e=[n(1257)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tab":function(t){return n.e(158).then(function(){var e=[n(1251)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-trade-offer":function(t){return n.e(239).then(function(){var e=[n(1199)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tag-count":function(t){return n.e(194).then(function(){var e=[n(1208)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{activeTab:1}},computed:{notifsCount:function(){return{}},offers:function(){return this.$store.state.assets.transactions.reduce(function(t,e){var n=e.createdBy,a=e.status;return t[1!==n?"closed"===a?"closed":"received":"sent"].push(e),t},{received:[],sent:[],closed:[]})}}},c=(n(661),n(0)),s=Object(c.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trade-block"},[n("nav",{staticClass:"trade-block__nav"},[n("ul",{staticClass:"trade-block__menu-list reset-list"},t._l(["received","sent","closed"],function(e,a){return n("li",{key:a},[n("a",{staticClass:"menu-list__item",class:{"menu-list__item--active":t.activeTab===a+1},on:{click:function(e){t.activeTab=a+1}}},[t._v("\n                    "+t._s(t._f("upperFirstChar")(e))+"\n                    "),n("c-tag-count",{attrs:{number:t.offers[e].length}})],1)])}))]),t._v(" "),n("c-tabs",{attrs:{active_tab_prop:t.activeTab,disableMenu:""}},t._l(t.offers,function(e,a,c){return n("c-tab",{key:a,staticClass:"trade-block__offers-tab",attrs:{tab_id:c+1}},[t._l(e,function(t){return n("c-trade-offer",{key:t.id,attrs:{offer:t},on:{wasSeen:function(e){t.new=!1}}})}),t._v(" "),e.length?t._e():n("p",[t._v("No offers were found")])],2)}))],1)},[],!1,null,"864caa9e",null);e.default=s.exports},139:function(t,e){},661:function(t,e,n){"use strict";var a=n(139);n.n(a).a}}]);