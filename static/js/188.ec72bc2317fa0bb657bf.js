(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{493:function(t,e,i){"use strict";var s=i(86);i.n(s).a},714:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i.n(s),r={name:"timeline-item",props:["item","index","projectID"],methods:{dateFormat:function(t){return n()(t).format("DD MMMM, YYYY")}},computed:{itemPosition:function(){return this.index%2?"right-side":"left-side"}},filters:{stringLength:function(t){if(t.length>250){var e=t.substr(0,250);return e.substr(0,Math.min(e.length,e.lastIndexOf(" "))).concat("...")}return t}}},a=(i(493),i(0)),o=Object(a.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"posts-timeline__post-item",class:t.itemPosition},[i("div",{staticClass:"posts-timeline__post--content"},[i("div",{staticClass:"post-date"},[t._v("\n            "+t._s(t.dateFormat(t.item.date))+"\n        ")]),t._v(" "),i("a",{attrs:{href:"#3"}},[i("h3",[t._v(t._s(t.item.title))])]),t._v(" "),i("p",{staticClass:"mb-4"},[t._v(t._s(t._f("stringLength")(t.item.text)))]),t._v(" "),i("c-button",{attrs:{status:"info",href:"/#/project/"+t.projectID+"/updates/"+t.item.id,icon_hide:""}},[t._v("Read more")])],1)])},[],!1,null,null,null);e.default=o.exports},86:function(t,e){}}]);