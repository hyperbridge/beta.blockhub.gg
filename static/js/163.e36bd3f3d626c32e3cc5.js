(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{163:function(t,i){},564:function(t,i,s){"use strict";var e=s(163);s.n(e).a},633:function(t,i,s){"use strict";s.r(i);var e={name:"game-includes-list",props:["list","showNumber"],data:function(){return{hiddenItems:"",limit:this.showNumber,showMore:!0}},components:{"c-includes-item":function(t){return s.e(130).then(function(){var i=[s(682)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-load-more":function(t){return s.e(144).then(function(){var i=[s(634)];t.apply(null,i)}.bind(this)).catch(s.oe)}},methods:{hiddenCount:function(){return this.list.length-this.showNumber},showAll:function(){this.limit=this.list.length,this.limitedList(this.limit),this.showMore=!1},hideAll:function(){this.limit=this.showNumber,this.limitedList(this.limit),this.showMore=!0},limitedList:function(t){var i=this.list,s=[];return i.forEach(function(i,e){e<=t-1&&s.push(i)}),s}}},n=(s(564),s(0)),l=Object(n.a)(e,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"game-includes"},[t._m(0),t._v(" "),s("transition-group",{staticClass:"game-includes__list",attrs:{name:"list",tag:"div"}},t._l(t.limitedList(t.limit),function(t,i){return s("div",{key:i,staticClass:"game-includes__item-container"},[s("c-includes-item",{attrs:{item:t}})],1)})),t._v(" "),t.showMore&&t.list.length>t.showNumber-1?s("c-load-more",{on:{click:t.showAll}},[t._v("\n        Load More "),s("span",{staticClass:"ml-3"},[t._v("+"+t._s(t.hiddenCount()))])]):t._e(),t._v(" "),t.showMore?t._e():s("c-load-more",{on:{click:t.hideAll}},[t._v("\n        Hide\n    ")])],1)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"game-includes__title"},[i("h3",[this._v("What's included")])])}],!1,null,"4274853b",null);i.default=l.exports}}]);