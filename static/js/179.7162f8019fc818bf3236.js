(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{132:function(t,n){},558:function(t,n,e){"use strict";var i=e(132);e.n(i).a},771:function(t,n,e){"use strict";e.r(n);var i={name:"rating-block",props:{items:{type:Array},fullReviewsLink:{type:String},rateGameLink:{type:String}},components:{"c-block":function(t){return Promise.resolve().then(function(){var n=[e(868)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-rating-stars":function(t){return e.e(155).then(function(){var n=[e(727)];t.apply(null,n)}.bind(this)).catch(e.oe)}}},s=(e(558),e(0)),a=Object(s.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-block",{attrs:{title:"Rating",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[t.items.length>0?e("div",{staticClass:"w-100"},[e("ul",{staticClass:"rating-block__list"},t._l(t.items,function(n,i){return e("li",{key:i},[e("div",{staticClass:"rating-block__info"},[e("span",{staticClass:"rating-block__name"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"rating-block__number"},[t._v(t._s(n.number))])]),t._v(" "),e("c-rating-stars",{staticClass:"rating-block__stars",attrs:{number:n.number}})],1)})),t._v(" "),t.fullReviewsLink?e("a",{staticClass:"btn btn-outline-white",attrs:{href:t.fullReviewsLink}},[t._v("See Full Reviews")]):t._e(),t._v(" "),t.rateGameLink?e("a",{staticClass:"btn btn-outline-white",attrs:{href:t.rateGameLink}},[t._v("Rate this game")]):t._e()]):e("div",[e("h4",[t._v("No reviews yet.")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-white",on:{click:function(n){t.$emit("goto")}}},[t._v("Be the first reviewer")])])])},[],!1,null,"30b73841",null);n.default=a.exports}}]);