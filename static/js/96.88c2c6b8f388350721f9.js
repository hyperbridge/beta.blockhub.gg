(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1424:function(t,a,n){"use strict";n.r(a);var l={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var a=[n(1434)];t.apply(null,a)}.bind(this)).catch(n.oe)}},computed:{wallet:function(){if(this.$store.state.application.wallets){var t=this.$store.state.application.wallets[this.id];if(t)return t}}}},s=(n(842),n(0)),e=Object(s.a)(l,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("c-layout",{attrs:{navigationKey:"wallet"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[t.wallet?t._e():n("div",{staticClass:"col-12"},[t._v("\n                    Wallet not found\n                ")]),t._v(" "),t.wallet?n("div",{staticClass:"col-12"},[t._v("\n                    "+t._s(t.wallet.name)+"\n                    "+t._s(t.wallet.id)+"\n                    "),n("br"),t._v(" "),n("a",{attrs:{href:"#/wallet/"+t.wallet.id+"/transactions"}},[t._v("Transactions")])]):t._e()])])])},[],!1,null,null,null);a.default=e.exports},276:function(t,a){},842:function(t,a,n){"use strict";var l=n(276);n.n(l).a}}]);