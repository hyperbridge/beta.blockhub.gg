(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1275:function(t,s,e){"use strict";e.r(s);var a={components:{"c-asset":function(t){return e.e(177).then(function(){var s=[e(1233)];t.apply(null,s)}.bind(this)).catch(e.oe)}},computed:{transactions:function(){return this.$store.getters["assets/transactionsArray"]}}},r=(e(659),e(0)),n=Object(r.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",t._l(t.transactions,function(s,a){return e("div",{key:s.id,staticClass:"trade-offer",class:"trade-offer--status-"+a},[e("div",{staticClass:"trade-offer__items"},[e("div",{staticClass:"trade-offer__user"},[e("img",{staticClass:"trade-offer__user-image",attrs:{src:s.you.img}}),t._v("\n                You offered\n            ")]),t._v(" "),e("div",{staticClass:"trade-offer__assets"},t._l(s.yourOffer,function(t,s){return e("c-asset",{key:s,attrs:{asset:t,showTooltip:""}})}))]),t._v(" "),e("p",{staticClass:"trade-offer__bar"},[t._v("\n            Trade "+t._s(s.accepted?"accepted":"received")+" on\n            "+t._s(t._f("customDate")(s.createdAt,"MMM D"))+"\n            "),e("span",[t._v("\n                On hold until\n                "+t._s(t._f("customDate")(t._f("addTime")(s.createdAt,5,"days"),"MMM D"))+"\n            ")]),t._v(" "),e("span",[t._v(t._s(s.id))])]),t._v(" "),e("div",{staticClass:"trade-offer__items"},[e("div",{staticClass:"trade-offer__user"},[e("img",{staticClass:"trade-offer__user-image",attrs:{src:s.contractor.img}}),t._v("\n                For "+t._s(s.contractor.name)+"'s\n            ")]),t._v(" "),e("div",{staticClass:"trade-offer__assets"},t._l(s.contractorOffer,function(t,s){return e("c-asset",{key:s,attrs:{asset:t,showTooltip:""}})}))])])}))},[],!1,null,"d37d68aa",null);s.default=n.exports},137:function(t,s){},659:function(t,s,e){"use strict";var a=e(137);e.n(a).a}}]);