(window.webpackJsonp=window.webpackJsonp||[]).push([[3,265,266],{102:function(t,e){},103:function(t,e){},1343:function(t,e,n){"use strict";n.r(e);var r=n(30),o=n.n(r),s=n(47),c=n.n(s),i=n(5),a=n(405),l=n(406),d={components:{"c-expand-block":function(t){return n.e(244).then(function(){var e=[n(1232)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar-color":function(t){return Promise.resolve().then(function(){var e=[n(405)];t.apply(null,e)}.bind(this)).catch(n.oe)}},computed:{},data:function(){return{errors:[],updateExpanded:null,updates:[],entries:[]}},created:function(){var t=this;c()({method:"get",url:"https://spreadsheets.google.com/feeds/list/1Ndg4etkvLQZKeTcPfP1L1nJiMWn6UkwFd9RVSMcltp4/1/public/values?alt=json"}).then(function(e){t.entries=e.data.feed.entry;try{for(var n in t.entries){var r=t.entries[n],o=i.a.compile("<div>"+r.gsx$content.$t+"</div>");o=new i.a({components:{"c-heading-bar-color":a.default,"c-dotted-list":l.default},render:o.render,staticRenderFns:o.staticRenderFns}).$mount(),t.updates.push({version:r.gsx$version.$t,title:r.gsx$title.$t,description:r.gsx$description.$t,content:o.$el.innerHTML})}}catch(t){console.log(t)}}).catch(function(e){t.errors.push("Could not contact update service. Please contact support with this error: "+o()(e))})}},u=(n(729),n(0)),f=Object(u.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-layout",{attrs:{navigationKey:"help"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mb-4"},[n("c-block",{attrs:{title:"Updates",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[t.errors.length?n("p",{staticClass:"errors"},[n("strong",[t._v("Please correct the following error(s):")]),t._v(" "),n("ul",t._l(t.errors,function(e){return n("li",{key:e},[t._v(t._s(e))])}))]):t._e(),t._v(" "),n("div",{staticClass:"row"},t._l(t.updates,function(t,e){return n("div",{key:e,staticClass:"col-md-6 col-sm-12"},[n("c-expand-block",{attrs:{title:t.title,description:t.description,content:t.content}})],1)}))])],1)])])},[],!1,null,"10d40e14",null);e.default=f.exports},174:function(t,e){},405:function(t,e,n){"use strict";n.r(e);var r={name:"heading-bar-colored",props:{colorCode:{type:String,default:"#fff"},textAlign:{type:String,default:"left"}}},o=(n(676),n(0)),s=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading-bar-colored",class:["text-position-"+t.textAlign]},["left"!=t.textAlign?n("span",{staticClass:"heading-bar-colored__left-line",style:{"background-color":t.colorCode}}):t._e(),t._v(" "),n("div",{staticClass:"h3 heading-bar-colored__title",style:{color:t.colorCode}},[t._t("default")],2),t._v(" "),"right"!=t.textAlign?n("span",{staticClass:"heading-bar-colored__right-line",style:{"background-color":t.colorCode}}):t._e()])},[],!1,null,"df6ed2c2",null);e.default=s.exports},406:function(t,e,n){"use strict";n.r(e);var r={},o=(n(677),n(0)),s=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("ul",{staticClass:"doted-list-container"},[this._t("default")],2)},[],!1,null,"6271eca6",null);e.default=s.exports},676:function(t,e,n){"use strict";var r=n(102);n.n(r).a},677:function(t,e,n){"use strict";var r=n(103);n.n(r).a},729:function(t,e,n){"use strict";var r=n(174);n.n(r).a}}]);