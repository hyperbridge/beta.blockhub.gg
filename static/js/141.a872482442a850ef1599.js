(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{227:function(t,n,e){"use strict";e.r(n);var c={name:"comment",props:{comment:{type:Object,required:!0}},components:{"c-dropdown-menu":function(t){return e.e(180).then(function(){var n=[e(649)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-reply":function(t){return e.e(179).then(function(){var n=[e(652)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-button-arrows":function(t){return e.e(107).then(function(){var n=[e(678)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{reply:!1}}},o=(e(423),e(0)),s=Object(o.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"community-item__comment",class:{"is-reply":t.reply}},[e("c-button-arrows",{attrs:{size:"xl",colored:""}},[e("span",{class:{up:t.comment.rate>400,down:t.comment.rate<0}},[t._v(t._s(t.comment.rate))])]),t._v(" "),e("div",{staticClass:"comment-container"},[e("c-dropdown-menu",{staticStyle:{right:"5px",top:"10px"},attrs:{dropPosition:"right"}}),t._v(" "),e("div",{staticClass:"comment-content"},[e("div",{staticClass:"user-info"},[e("c-img",{attrs:{src:t.comment.author.img}}),t._v(" "),e("div",[e("h6",[t._v(t._s(t.comment.author.name))]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t._f("timeAgoShort")(t.comment.date)))])])],1),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(t.comment.text))])]),t._v(" "),e("div",{staticClass:"sub-comments-list"},[t._t("default")],2)],1)],1),t._v(" "),e("c-reply",{on:{replyMode:function(n){t.reply=n}}})],1)},[],!1,null,"0612a060",null);n.default=s.exports},41:function(t,n){},423:function(t,n,e){"use strict";var c=e(41);e.n(c).a}}]);