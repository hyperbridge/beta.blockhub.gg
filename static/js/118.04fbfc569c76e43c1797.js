(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{305:function(t,n,r){t.exports={default:r(643),__esModule:!0}},641:function(t,n,r){var e=r(25),s=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&s(t)===t}},642:function(t,n,r){var e=r(19);e(e.S,"Number",{isInteger:r(641)})},643:function(t,n,r){r(642),t.exports=r(10).Number.isInteger},706:function(t,n,r){"use strict";r.r(n);var e=r(305),s=r.n(e),u={name:"rating-stars",props:{number:{required:!0}},computed:{stars:function(){for(var t=[],n=Number(this.number),r=Math.floor(n).toString(),e=0;e<r;e++)t.push("star");return s()(n)?t:[].concat(t,["star-half"])}}},o=r(0),i=Object(o.a)(u,function(){var t=this.$createElement,n=this._self._c||t;return n("span",this._l(this.stars,function(t,r){return n("c-icon",{key:r,attrs:{name:t}})}))},[],!1,null,null,null);n.default=i.exports}}]);