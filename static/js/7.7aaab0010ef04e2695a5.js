(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{477:function(t,n,e){"use strict";var a=e(57);e.n(a).a},57:function(t,n){},901:function(t,n,e){"use strict";e.r(n);var a={components:{"c-block":function(t){return e.e(116).then(function(){var n=[e(768)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-tabs":function(t){return e.e(141).then(function(){var n=[e(824)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-tab":function(t){return e.e(140).then(function(){var n=[e(827)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-trade-offer":function(t){return e.e(220).then(function(){var n=[e(817)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-tag-count":function(t){return e.e(178).then(function(){var n=[e(818)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{activeTab:1}},computed:{notifsCount:function(){return{}},offers:function(){return this.$store.state.assets.transactions.reduce(function(t,n){var e=n.createdBy,a=n.status;return t[1!==e?"closed"===a?"closed":"received":"sent"].push(n),t},{received:[],sent:[],closed:[]})}}},c=(e(477),e(0)),s=Object(c.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-layout",[e("div",{staticClass:"content",attrs:{id:"content"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t._v("\n                    Marketplace\n                    "),e("h2",[t._v("Trade")]),t._v(" "),e("c-block",[e("div",{staticClass:"trade-block"},[e("nav",{staticClass:"trade-block__nav"},[e("h3",[t._v("Offers")]),t._v(" "),e("ul",{staticClass:"trade-block__menu-list reset-list"},t._l(["received","sent","closed"],function(n,a){return e("li",{key:a},[e("a",{staticClass:"menu-list__item",class:{"menu-list__item--active":t.activeTab===a+1},on:{click:function(n){t.activeTab=a+1}}},[t._v("\n                                            "+t._s(t._f("upperFirstChar")(n))+"\n                                            "),e("c-tag-count",{attrs:{number:t.offers[n].length}})],1)])}))]),t._v(" "),e("c-tabs",{attrs:{active_tab_prop:t.activeTab,disableMenu:""}},t._l(t.offers,function(n,a,c){return e("c-tab",{key:a,staticClass:"trade-block__offers-tab",attrs:{tab_id:c+1}},[t._l(n,function(t){return e("c-trade-offer",{key:t.id,attrs:{offer:t},on:{wasSeen:function(n){t.new=!1}}})}),t._v(" "),n.length?t._e():e("p",[t._v("No offers were found")])],2)}))],1)])],1)])])])])},[],!1,null,"47da18be",null);n.default=s.exports}}]);