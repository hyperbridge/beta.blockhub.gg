(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1444:function(t,e,n){"use strict";n.r(e);var r=n(6),s=n.n(r),c=n(2),a=n.n(c),i=n(21),o=n.n(i),u=n(431),f=n.n(u),l=n(9),d=n.n(l),v=n(10),p=n.n(v),h=n(27),_=h.a.state,b=h.a.getters,m=(p()(_.assets.users).reduce(function(t,e){return a()({},t,s()({},e.id,a()({},e,{inventory:e.inventory.map(function(t){return b["assets/assets"][t]}),inventoryGrouped:e.inventory.reduce(function(t,e){var n=b["assets/assets"][e];return t[n.product.name]=t[n.product.name]||[],t[n.product.name]=[].concat(d()(t[n.product.name]),[n]),t},{})})))},{}),p()(_.assets.trxs).reduce(function(t,e){return a()({},t,s()({},e.id,a()({},e)))},{}),{components:{"c-tabs":function(t){return n.e(162).then(function(){var e=[n(1318)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tab":function(t){return n.e(161).then(function(){var e=[n(1312)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-trade-offer":function(t){return n.e(254).then(function(){var e=[n(1298)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tag-count":function(t){return n.e(207).then(function(){var e=[n(1304)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{activeTab:1}},computed:{notifsCount:function(){return{}},offers:function(){return this.$store.state.assets.transactions.reduce(function(t,e){var n=e.createdBy,r=e.status;return t[1!==n?"closed"===r?"closed":"received":"sent"].push(e),t},{received:[],sent:[],closed:[]})},transactions:function(){return this.$store.getters["assets/transactionsArray"]},userId:function(){return this.$store.state.application.account.id},offers2:function(){var t=this.userId;return this.transactions.reduce(function(e,n){return e[n.accepted?"closed":n.createdBy==t?"sent":"received"].push(n),e},{received:[],sent:[],closed:[]})},offersCount:function(){return f()(this.offers2).reduce(function(t,e){var n=o()(e,2),r=n[0],c=n[1];return a()({},t,s()({},r,c.length))},{received:0,sent:0,closed:0})}}}),y=(n(717),n(0)),k=Object(y.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"trade-block"},[n("nav",{staticClass:"trade-block__nav"},[n("ul",{staticClass:"trade-block__menu-list reset-list"},t._l(["received","sent","closed"],function(e,r){return n("li",{key:r},[n("a",{staticClass:"menu-list__item",class:{"menu-list__item--active":t.activeTab===r+1},on:{click:function(e){t.activeTab=r+1}}},[t._v("\n                    "+t._s(t._f("upperFirstChar")(e))+"\n                    "),n("c-tag-count",{attrs:{number:t.offers[e].length}})],1)])}))]),t._v(" "),n("c-tabs",{attrs:{active_tab_prop:t.activeTab,disableMenu:""}},t._l(t.offers,function(e,r,s){return n("c-tab",{key:r,staticClass:"trade-block__offers-tab",attrs:{tab_id:s+1}},[t._l(e,function(t){return n("c-trade-offer",{key:t.id,attrs:{offer:t},on:{wasSeen:function(e){t.new=!1}}})}),t._v(" "),e.length?t._e():n("p",[t._v("No offers were found")])],2)}))],1)},[],!1,null,"a9954868",null);e.default=k.exports},154:function(t,e){},717:function(t,e,n){"use strict";var r=n(154);n.n(r).a}}]);