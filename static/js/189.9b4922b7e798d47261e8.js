(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1299:function(t,i,e){"use strict";e.r(i);var o={name:"tooltip-universal",mixins:[e(30).b],props:{position:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},text:String,title:String,theme:{type:String,default:"light",validator:function(t){return["light","dark"].includes(t)}},iconHide:Boolean,default_class:String,delay:{type:Number,default:50}},data:function(){return{show_tooltip:!1}}},n=(e(721),e(0)),l=Object(n.a)(o,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tooltip-universal__wrapper"},[e("div",{staticClass:"tooltip-universal__content",on:{mouseover:function(i){t.debounce(function(){return t.show_tooltip=!0},t.delay)},mouseout:function(i){t.debounce(function(){return t.show_tooltip=!1},t.delay+1)}}},[t._t("default"),t._v(" "),t.iconHide?t._e():e("c-icon",{attrs:{name:"question-circle"}})],2),t._v(" "),t.show_tooltip?e("div",{staticClass:"tooltip-universal",class:t.position},[t._t("tooltip",[e("div",{staticClass:"tooltip-universal__default",class:[t.position,t.theme,t.default_class]},[t.title?e("h4",[t._v(t._s(t.title))]):t._e(),t._v("\n                "+t._s(t.text)+"\n            ")])])],2):t._e()])},[],!1,null,"137ccbc2",null);i.default=l.exports},158:function(t,i){},721:function(t,i,e){"use strict";var o=e(158);e.n(o).a}}]);