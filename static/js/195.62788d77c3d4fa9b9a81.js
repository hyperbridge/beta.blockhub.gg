(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{228:function(e,s){},658:function(e,s,r){"use strict";var a=r(228);r.n(a).a},705:function(e,s,r){"use strict";r.r(s);var a={props:{percent:{required:!0},amount:{required:!0},currency:{default:"USD"},label:{default:!1},goal:{}},filters:{currency_sign:function(e){switch(e){case"EUR":return"€";case"GBP":return"£";default:return"$"}}}},t=(r(658),r(0)),n=Object(t.a)(a,function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"money-info"},[r("div",{staticClass:"progress progress-bar-vertical"},[r("div",{staticClass:"progress-bar bg-success",style:{height:e.percent+"%"},attrs:{role:"progressbar","aria-valuenow":e.percent,"aria-valuemin":"0","aria-valuemax":"100"}},[r("span",{staticClass:"sr-only"},[e._v(e._s(e.percent)+"% Complete")])])]),e._v(" "),r("div",{staticClass:"money-info__detail"},[r("div",{staticClass:"text"},[e._v(e._s(e.label))]),e._v(" "),r("div",{staticClass:"amount-detail"},[e._v("\n            "+e._s(e._f("currency_sign")(e.currency))+e._s(e.amount)+"\n            "),e.goal?r("span",[e._v(" of "+e._s(e._f("currency_sign")(e.currency))+e._s(e.goal))]):e._e()])])])},[],!1,null,"0dc182ee",null);s.default=n.exports}}]);