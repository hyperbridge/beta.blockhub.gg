(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1015:function(t,e,s){"use strict";var i=s(283);s.n(i).a},1222:function(t,e,s){"use strict";s.r(e);var i={name:"c-collection-item",props:["item"],data:function(){return{label:""}},computed:{getAsset:function(){var t=this.item.assets,e=this.$store.state.marketplace.assets||{},s=[];return t&&t.forEach(function(t,i){e[t]&&s.push(e[t])}),s}},filters:{count_label:function(t){switch(t){case t=1:return"Item";default:return"Items"}}}},n=(s(1015),s(0)),a=Object(n.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collection-item",style:{"background-image":"url("+t.item.background+")"}},[s("div",{staticClass:"collection-item__items-container"},t._l(t.getAsset,function(e,i){return i<4?s("router-link",{key:i,attrs:{to:{name:"Asset",params:{id:e.id}}}},[s("c-img",{attrs:{src:e.image}})],1):t._e()})),t._v(" "),s("div",{staticClass:"collection-item__info"},[s("router-link",{attrs:{to:{name:"Collection",params:{id:t.item.id}}}},[s("h4",[t._v(t._s(t.item.name))])]),t._v(" "),s("h6",[t._v("by "+t._s(t.item.author))]),t._v(" "),s("div",{staticClass:"count"},[s("i",{staticClass:"fas fa-box"}),t._v("\n            "+t._s(t.item.assets.length)+" "+t._s(t._f("count_label")(t.item.assets.length))+"\n        ")])],1)])},[],!1,null,"23747ff3",null);e.default=a.exports},283:function(t,e){}}]);