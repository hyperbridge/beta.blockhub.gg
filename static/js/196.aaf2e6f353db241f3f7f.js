(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1287:function(t,i,n){"use strict";n.r(i);var e={name:"inline-notification",props:{type:{type:String,default:"default"},size:String},data:function(){return{show:!0}},methods:{actionOnClose:function(){this.show=!1}},computed:{notif_icon:function(){switch(this.type){case"info":return"info";case"success":return"check-circle";case"warning":return"exclamation-triangle";case"danger":return"times-circle";default:return"cog"}}}},s=(n(826),n(0)),a=Object(s.a)(e,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"fade"}},[t.show?n("div",{staticClass:"inline-notification",class:["type-"+t.type,"size-"+t.size]},[n("div",{staticClass:"inline-notification__icon"},[n("i",{class:"fas fa-"+t.notif_icon})]),t._v(" "),n("div",{staticClass:"inline-notification__text"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"close",on:{click:function(i){t.actionOnClose()}}},[n("i",{staticClass:"fas fa-times"})])]):t._e()])},[],!1,null,"0db4ee42",null);i.default=a.exports},263:function(t,i){},826:function(t,i,n){"use strict";var e=n(263);n.n(e).a}}]);