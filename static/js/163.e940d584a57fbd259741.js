(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1252:function(s,e,t){"use strict";t.r(e);var a={name:"asset-preview-basic",props:{asset:{type:Object,required:!0},horizontal:Boolean,hideGame:Boolean,size:{type:String,default:"lg",validator:function(s){return["sm","md","lg"].includes(s)}}}},i=(t(718),t(0)),n=Object(i.a)(a,function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"asset-preview-basic",class:[{horizontal:s.horizontal},s.size]},[t("h5",{staticClass:"asset-preview-basic__text"},[t("router-link",{attrs:{to:"/asset/"+s.asset.id}},[s._v("\n            "+s._s(s.asset.name)+"\n        ")])],1),s._v(" "),t("c-img",{staticClass:"asset-preview-basic__image",attrs:{src:s.asset.image}}),s._v(" "),s.hideGame?s._e():t("p",{staticClass:"asset-preview-basic__text"},[s._v("\n        "+s._s(s.asset.product_name)+"\n    ")])],1)},[],!1,null,"42bdf428",null);e.default=n.exports},163:function(s,e){},718:function(s,e,t){"use strict";var a=t(163);t.n(a).a}}]);