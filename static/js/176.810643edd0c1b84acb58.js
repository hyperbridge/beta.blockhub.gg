(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{105:function(t,e){},491:function(t,e,i){"use strict";var a=i(105);i.n(a).a},646:function(t,e,i){"use strict";i.r(e);var a={name:"images-explorer",props:{images:{type:Array},start_from:{type:Number,default:0}},data:function(){return{active_item:-1}},methods:{change_image:function(t){var e=this.active_item,i=this.images;0===e&&-1===t?this.active_item=i.length-1:e===i.length-1&&1===t?this.active_item=0:this.active_item+=t}},mounted:function(){this.active_item=this.start_from}},s=(i(491),i(0)),n=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"images-explorer"},[i("button",{staticClass:"images-explorer__btn",on:{click:function(e){t.change_image(-1)}}},[i("i",{staticClass:"fas fa-angle-left"})]),t._v(" "),i("transition-group",{attrs:{tag:"div",name:"fade-transform"}},t._l(t.images,function(e,a){return a===t.active_item?i("c-img",{key:e,staticClass:"images-explorer__img",attrs:{src:t.images[t.active_item]}}):t._e()})),t._v(" "),i("button",{staticClass:"images-explorer__btn",on:{click:function(e){t.change_image(1)}}},[i("i",{staticClass:"fas fa-angle-right"})])],1)},[],!1,null,"1542b485",null);e.default=n.exports}}]);