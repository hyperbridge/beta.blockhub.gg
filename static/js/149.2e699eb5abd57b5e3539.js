(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{107:function(r,e){},528:function(r,e,t){"use strict";var s=t(107);t.n(s).a},767:function(r,e,t){"use strict";t.r(e);var s={name:"progress-bar",props:{percentages:[String,Number],values:Object,direction:{type:String,default:"horizontal",validator:function(r){return["horizontal","vertical"].includes(r)}},show_text:Boolean},data:function(){return{direction_prop:"horizontal"==this.direction?"width":"height"}},computed:{progress:function(){var r=this.values;return r?parseFloat(r.reached)/parseFloat(r.goal)*100:this.percentages}}},a=(t(528),t(0)),n=Object(a.a)(s,function(){var r,e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"progress-bar",class:e.direction,style:(r={},r[e.direction_prop]=e.progress+"%",r),attrs:{role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100"}},[e._v("\n    "+e._s(e.show_text&&e.progress>8?e.progress:"")+"\n    "),s("span",{staticClass:"sr-only"},[e._v(e._s(e.progress))])])},[],!1,null,"d065536e",null);e.default=n.exports}}]);