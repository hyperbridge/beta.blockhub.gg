(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1531:function(t,a,i){"use strict";i.r(a);var n={name:"game-grid",props:{items:{type:Array,require:!0},itemInRow:{default:"4"}},components:{"c-tags":function(t){return i.e(10).then(function(){var a=[i(1416)];t.apply(null,a)}.bind(this)).catch(i.oe)}}},s=(i(931),i(0)),e=Object(s.a)(n,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"product-grid__container"},[t._l(t.items,function(a,n){return t.items.length?i("div",{key:n,staticClass:"product-grid__item-container",style:{width:"calc(100% / "+t.itemInRow+")"}},[i("div",{staticClass:"product-grid__item"},[t.$slots.block?i("div",[t._t("block")],2):i("div",{staticClass:"card-body padding-0"},[i("a",{attrs:{href:"#/product/"+a.id}},[i("c-img",{staticClass:"card-img-top",attrs:{src:a.meta.images.mediumTile}})],1),t._v(" "),i("h4",[i("a",{attrs:{href:"#/product/"+a.id}},[t._v(t._s(a.name))])]),t._v(" "),i("p",{staticClass:"card-text",attrs:{hidden:""}},[t._v(t._s(a.shortDescription)+" ")]),t._v(" "),i("c-tags",{attrs:{tags:a.tags.map(function(t){return t.value})}})],1)])]):t._e()}),t._v(" "),t.items.length?t._e():i("p",[t._v("\n        Nothing could be found. Want to "),i("c-button",{attrs:{status:"plain"},on:{click:function(a){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Check for updates")]),t._v("?\n    ")],1)],2)},[],!1,null,"1583faaa",null);a.default=e.exports},248:function(t,a){},931:function(t,a,i){"use strict";var n=i(248);i.n(n).a}}]);