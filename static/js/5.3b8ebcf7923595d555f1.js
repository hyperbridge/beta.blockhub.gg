(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{461:function(t,s,n){"use strict";var e=n(54);n.n(e).a},54:function(t,s){},867:function(t,s,n){"use strict";n.r(s);var e=n(12),i=n.n(e),a={components:{"c-block":function(t){return n.e(109).then(function(){var s=[n(751)];t.apply(null,s)}.bind(this)).catch(n.oe)},"c-list":function(t){return n.e(124).then(function(){var s=[n(791)];t.apply(null,s)}.bind(this)).catch(n.oe)},"c-list-submenu":function(t){return n.e(212).then(function(){var s=[n(782)];t.apply(null,s)}.bind(this)).catch(n.oe)},"c-tooltip":function(t){return n.e(167).then(function(){var s=[n(775)];t.apply(null,s)}.bind(this)).catch(n.oe)},"c-asset-preview":function(t){return n.e(166).then(function(){var s=[n(777)];t.apply(null,s)}.bind(this)).catch(n.oe)},"c-asset-preview-small":function(t){return n.e(211).then(function(){var s=[n(784)];t.apply(null,s)}.bind(this)).catch(n.oe)},"c-exchange-bar":function(t){return n.e(210).then(function(){var s=[n(786)];t.apply(null,s)}.bind(this)).catch(n.oe)},"c-author":function(t){return n.e(125).then(function(){var s=[n(737)];t.apply(null,s)}.bind(this)).catch(n.oe)}},data:function(){return{yoursOffer:[],theirOffer:[]}},methods:{addTransactionAsset:function(t,s){var n=this.tradeId;this.$store.commit("addTransactionAsset",{asset:t,target:s,tradeId:n})}},computed:{inventory:function(){var t=this,s=function(s,n){var e=t.transaction[s].user.inventory,a=e.reduce(function(t,s){var n=s.product_name;return t[n]?t[n].push(s):t[n]=[s],t},{});return i()(a).reduce(function(s,i){return s[i]=a[i].reduce(function(s,i,a){var r=i.name,c=t[n].filter(function(t){return t.id===i.id}),o=e.filter(function(t){return t.id===i.id});return s[r]&&!t[n].includes(i)?s[r].push(i):c.length!==o.length&&(s[r]=[i]),s},{}),s},{})};return{yours:s("me","yoursOffer"),their:s("contractor","theirOffer")}},price:function(){var t=this.yoursOffer,s=this.theirOffer,n=function(t){return Math.round(100*t)/100},e=n(t.reduce(function(t,s){return t+s.price.current},0)),i=n(s.reduce(function(t,s){return t+s.price.current},0));return{yours:e,their:i,sum:n(e-i)}},tradeId:function(){return this.$route.params.tradeId},transaction:function(){var t=this;return this.$store.state.assets.transactions.find(function(s){return s.id===t.tradeId})}},mounted:function(){this.yoursOffer=this.transaction.me.selling,this.theirOffer=this.transaction.contractor.selling}},r=(n(461),n(0)),c=Object(r.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("c-layout",[n("div",{staticClass:"content",attrs:{id:"content"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[t._v("\n                    Marketplace\n                    "),n("h2",[t._v("Trade transaction")]),t._v(" "),t.transaction?n("c-block",{staticClass:"transaction",attrs:{title:"Transaction: "+t.tradeId}},[n("div",{staticClass:"transaction__block"},[n("div",{staticClass:"transaction__headings"},[n("h4",[t._v("Yours selling offer")]),t._v(" "),n("h4",[t._v("Yours inventory")])]),t._v(" "),n("div",{staticClass:"transaction__management"},[n("div",{staticClass:"management__selected-assets"},[n("div",{staticClass:"assets-grid"},t._l(t.yoursOffer,function(s,e){return n("div",{key:e,staticClass:"assets-grid__asset",on:{click:function(s){t.yoursOffer.splice(e,1)}}},[n("c-tooltip",{attrs:{delay:30,iconHide:""}},[n("c-asset-preview",{attrs:{slot:"tooltip",asset:s},slot:"tooltip"}),t._v(" "),n("c-img",{staticClass:"asset__image",attrs:{src:s.image}}),t._v(" "),n("span",{staticClass:"asset__price"},[t._v(t._s(s.price.current)+"$")])],1)],1)}))]),t._v(" "),n("div",{staticClass:"management__inventory-explorer"},[n("c-list-submenu",{attrs:{items:t.inventory.yours,isParent:""},scopedSlots:t._u([{key:"sublist",fn:function(s){var e=s.sublist;return n("c-list-submenu",{attrs:{items:e},on:{click:function(s){t.yoursOffer.push(s)}},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.list;return n("div",{staticClass:"sublist-menu__assets"},[n("c-asset-preview-small",{attrs:{slot:"item-content",asset:e[0]},slot:"item-content"}),t._v("\n                                                "+t._s(e.length>1?e.length:"")+"\n                                            ")],1)}}])})}}])})],1)])]),t._v(" "),n("c-exchange-bar",{attrs:{price:t.price,yours:t.yoursOffer.length,their:t.theirOffer.length}}),t._v(" "),n("div",{staticClass:"transaction__block"},[n("div",{staticClass:"transaction__headings"},[n("h4",[t._v(t._s(t.transaction.contractor.user.name)+"'s selling offer")]),t._v(" "),n("c-author",{attrs:{author:t.transaction.contractor.user}}),t._v(" "),n("h4",[t._v(t._s(t.transaction.contractor.user.name)+"'s inventory")])],1),t._v(" "),n("div",{staticClass:"transaction__management"},[n("div",{staticClass:"management__selected-assets"},[n("div",{staticClass:"assets-grid"},t._l(t.theirOffer,function(s,e){return n("div",{key:s,staticClass:"assets-grid__asset",on:{click:function(s){t.theirOffer.splice(e,1)}}},[n("c-tooltip",{directives:[{name:"show",rawName:"v-show",value:s.id,expression:"asset.id"}],attrs:{delay:30,iconHide:""}},[n("c-asset-preview",{attrs:{slot:"tooltip",asset:s},slot:"tooltip"}),t._v(" "),n("c-img",{staticClass:"asset__image",attrs:{src:s.image}}),t._v(" "),n("span",{staticClass:"asset__price"},[t._v(t._s(s.price.current)+"$")])],1)],1)}))]),t._v(" "),n("div",{staticClass:"management__inventory-explorer"},[n("c-list-submenu",{attrs:{items:t.inventory.their,isParent:""},scopedSlots:t._u([{key:"sublist",fn:function(s){var e=s.sublist;return n("c-list-submenu",{attrs:{items:e},on:{click:function(s){t.theirOffer.push(s)}},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.list;return n("div",{staticClass:"sublist-menu__assets"},[n("c-asset-preview-small",{attrs:{slot:"item-content",asset:e[0]},slot:"item-content"}),t._v("\n                                                "+t._s(e.length>1?e.length:"")+"\n                                            ")],1)}}])})}}])})],1)])]),t._v(" "),n("div",{staticClass:"transaction__actions"},[n("c-button",{attrs:{status:"info",icon_hide:""}},[t._v("Update transaction")])],1)],1):n("c-block",{staticClass:"transaction",attrs:{title:"Transaction: "+t.tradeId}},[n("p",[t._v("Transaction with id "),n("i",[t._v(t._s(t.tradeId))]),t._v(" doesn't exist")])])],1)])])])])},[],!1,null,"ffb3f472",null);s.default=c.exports}}]);