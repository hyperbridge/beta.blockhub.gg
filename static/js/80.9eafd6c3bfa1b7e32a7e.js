(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{14:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return a});var r={data:function(){return{timeout:0}},methods:{debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"timeout";clearTimeout(this[n]),this[n]=setTimeout(t,e)}}},a={methods:{handleArray:function(t,e){var n=this[e].indexOf(t);n>-1?this[e].splice(n,1):this[e].push(t)}}}},206:function(t,e){},578:function(t,e,n){"use strict";var r=n(206);n.n(r).a},619:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n.n(r),i=n(8),s={components:{"c-sidebar-menu-link":function(t){return n.e(120).then(function(){var e=[n(614)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-sidebar-menu":function(t){return n.e(89).then(function(){var e=[n(615)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-searcher":function(t){return n.e(141).then(function(){var e=[n(257)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-range-slider":function(t){return n.e(140).then(function(){var e=[n(626)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-input-searcher":function(t){return n.e(94).then(function(){var e=[n(589)];t.apply(null,e)}.bind(this)).catch(n.oe)}},mixins:[n(14).a],data:function(){return{phrase:"",results:[],platforms:[{name:"windows",prop:"win"},{name:"apple",prop:"mac"},{name:"linux",prop:"linux"}],choosenPlatforms:[],communitySize:0,activeUsers:0}},methods:{filter:function(){alert("Click")},search:function(){this.results=this.phrase.length?this.getProductsByName(this.phrase):[]},goToSearchPage:function(){this.$router.push({name:"Search Page",query:this.phrase.length?{name:this.phrase}:{}})}},computed:a()({},Object(i.c)({getProductsByName:"marketplace/getProductsByName"}),{filteredResults:function(){var t=this;return this.choosenPlatforms.length?this.results.filter(function(e){return e.system_requirements.some(function(e){return t.choosenPlatforms.includes(e.os)})}):this.results},query:function(){var t=this.phrase,e=this.choosenPlatforms,n=this.communitySize,r=this.activeUsers,a={};return t.length&&(a.name=t),e.length&&(a.platforms=e),n&&(a.communitySize=n),r&&(a.activeUsers=r),a}})},c=(n(578),n(0)),o=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation",attrs:{id:"navigation-default"}},[n("c-sidebar-menu",{attrs:{title:"STORE",sub_title:"General",mClass:"margin-bottom-20"}},t._l(["Home","Projects","Curators","Collections","Items"],function(e){return n("c-sidebar-menu-link",{key:e,attrs:{to:{name:e}}},[t._v("\n            "+t._s("Home"===e?e:"Browse "+e)+"\n        ")])})),t._v(" "),n("c-sidebar-menu",{attrs:{sub_title:"Browse By Genre",sub_icon:"fas fa-gamepad",mClass:"margin-bottom-20"}},t._l(["Action","Adventure","RPG","Co-op","Multiplayer","Sports"],function(e){return n("c-sidebar-menu-link",{key:e,attrs:{to:{name:"Search Page",query:{tags:e}}}},[t._v("\n            "+t._s(e)+"\n        ")])})),t._v(" "),n("h3",{staticClass:"text-uppercase"},[t._v("Search")]),t._v(" "),n("div",{staticClass:"filter-blk"},[n("c-searcher",{staticClass:"margin-bottom-20",attrs:{results:t.filteredResults,resultUrl:"/product/",resultUrlProp:"id",resultTextProp:"name",resultsCount:t.filteredResults.length},on:{input:t.search,click:function(e){t.goToSearchPage()}},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.goToSearchPage()}},model:{value:t.phrase,callback:function(e){t.phrase=e},expression:"phrase"}}),t._v(" "),n("h4",{staticClass:"margin-vertical-20"},[t._v("Community Size")]),t._v(" "),n("c-range-slider",{attrs:{max:1e3},model:{value:t.communitySize,callback:function(e){t.communitySize=t._n(e)},expression:"communitySize"}}),t._v(" "),n("h4",{staticClass:"margin-vertical-20"},[t._v("Active Users")]),t._v(" "),n("c-range-slider",{attrs:{max:5e3},model:{value:t.activeUsers,callback:function(e){t.activeUsers=t._n(e)},expression:"activeUsers"}}),t._v(" "),n("div",{staticClass:"form-group platform-chose margin-vertical-20"},[n("label",[t._v("Platform Availability")]),t._v(" "),t._l(t.platforms,function(e){return n("a",{key:e.prop,attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.handleArray(e.prop,"choosenPlatforms")}}},[n("c-icon",{staticClass:"platform-icon",class:[t.choosenPlatforms.includes(e.prop)?"platform-icon--active":"platform-icon--inactive"],attrs:{cat:"fab",name:e.name}})],1)})],2),t._v(" "),n("div",{staticClass:"action"},[n("router-link",{staticClass:"btn btn-filter",attrs:{to:{name:"Search Page",query:t.query}}},[t._v("\n                Search\n            ")]),t._v(" "),n("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"Search Page",query:{showFilters:!0}}}},[t._v("\n                More filters ...\n            ")])],1)],1),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"help-block",attrs:{hidden:""}},[n("li",{staticClass:"title"},[n("i",{staticClass:"fas fa-question-circle"}),t._v("\n            Help\n        ")]),t._v(" "),n("li",[n("a",{attrs:{href:"/#/help/1/article/purchasing-with-cryptocurrency"}},[t._v("Purchasing with Cryptocurrency")]),t._v(" "),n("a",{attrs:{href:"/#/help/1/article/content-availability-by-country"}},[t._v("Content Availability by Country")]),t._v(" "),n("a",{attrs:{href:"/#/help/1/article/becoming-a-community-curator"}},[t._v("Becoming a Community Curator")]),t._v(" "),n("a",{attrs:{href:"/#/help/1/article/18-plus-games-and-verification"}},[t._v("18+ Games and Verification")]),t._v(" "),n("a",{attrs:{href:"/#/help/1/article/recporting-misleading-content"}},[t._v("Reporting Misleading Content")])]),t._v(" "),n("li",[n("a",{staticClass:"btn btn-link",attrs:{href:"/#/help/1"}},[t._v("\n                More...\n            ")])])])}],!1,null,"1934c994",null);e.default=o.exports}}]);