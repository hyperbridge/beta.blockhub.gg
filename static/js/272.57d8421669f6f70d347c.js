(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1102:function(t,o,i){"use strict";var n=i(334);i.n(n).a},1182:function(t,o,i){"use strict";i.r(o);var n={name:"tooltip",props:{name:[String,Number],position:{type:String,default:"left"},type:{type:String,default:"hover",validator:function(t){return["hover","click"].includes(t)}},lightStyle:{type:Boolean,default:!1}},data:function(){return{showToolTip:!1}},methods:{clickHandler:function(){this.showToolTip=!this.showToolTip}}},e=(i(1102),i(0)),s=Object(e.a)(n,function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("span",{staticClass:"c-tooltips"},["hover"==t.type?i("span",{on:{mouseover:function(o){t.showToolTip=!0},mouseleave:function(o){t.showToolTip=!1}}},[t._v(t._s(t.name))]):t._e(),t._v(" "),"click"==t.type?i("span",{on:{click:t.clickHandler}},[t._v(t._s(t.name))]):t._e(),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.showToolTip?i("div",{staticClass:"c-tooltips__content",class:{"left-position":"left"==t.position,"right-position":"right"==t.position,"center-position":"center"==t.position,"light-style":1==t.lightStyle},staticStyle:{"animation-duration":"0.25s"}},[i("div",{staticClass:"c-tooltips__content-default"},[t._t("default")],2)]):t._e()])],1)},[],!1,null,"378e2a4d",null);o.default=s.exports},334:function(t,o){}}]);