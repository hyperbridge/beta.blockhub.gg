(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1342:function(e,t,s){"use strict";s.r(t);var n=s(19),i=s.n(n),c=s(2),a=s.n(c),r=s(9),l=s.n(r),o=s(25),u={components:{"c-layout":function(e){return Promise.resolve().then(function(){var t=[s(1424)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-checkbox":function(e){return Promise.resolve().then(function(){var t=[s(1441)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-block":function(e){return Promise.resolve().then(function(){var t=[s(1364)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-searcher":function(e){return s.e(5).then(function(){var t=[s(1269)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-input-searcher":function(e){return Promise.resolve().then(function(){var t=[s(1181)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-game-grid":function(e){return s.e(18).then(function(){var t=[s(1273)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-spinner":function(e){return s.e(246).then(function(){var t=[s(1264)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-option-tag":function(e){return s.e(182).then(function(){var t=[s(1221)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-range-slider":function(e){return s.e(170).then(function(){var t=[s(1261)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-list":function(e){return s.e(173).then(function(){var t=[s(1321)];e.apply(null,t)}.bind(this)).catch(s.oe)},"c-content-navigation":function(e){return s.e(7).then(function(){var t=[s(1256)];e.apply(null,t)}.bind(this)).catch(s.oe)}},mixins:[s(29).b],data:function(){return{systemTags:[{value:"featured",selected:!1},{value:"new",selected:!1},{value:"sale",selected:!1},{value:"specials",selected:!1},{value:"top_seller",selected:!1},{value:"trending",selected:!1},{value:"upcoming",selected:!1}],phrase:"",results:[],isTyping:!1,selectableTags:[],selectableLanguages:[],price:{min:0,max:0},expandFilters:!1,timeout2:0,communitySize:0,activeUsers:0,platforms:[{prop:"win",icon:"windows",name:"Windows",selected:!1},{prop:"mac",icon:"apple",name:"macOS",selected:!1},{prop:"linux",icon:"linux",name:"Linux",selected:!1}]}},methods:{search:function(){var e=this;this.debounce(function(){e.isTyping||(e.isTyping=!0),e.filtersActive?e.debounce(function(){e.isTyping=!1,e.results=[].concat(l()(e.getProductsQuery(e.query)))},250,"timeout2"):(e.isTyping=!1,e.results=e.products),e.$router.replace({name:"Search",query:e.urlQuery})},500)},clearFilters:function(){var e=this.phrase,t=this.selectedSpecials,s=this.selectedGenres,n=this.selectedLanguages,i=this.price,c=this.communitySize,a=this.activeUsers,r=this.selectedPlatforms;e.length&&(this.phrase=""),t.length&&this.selectedSpecials.forEach(function(e){return e.selected=!1}),s.length&&this.selectedGenres.forEach(function(e){return e.selected=!1}),n.length&&this.selectedLanguages.forEach(function(e){return e.selected=!1}),(i.min||i.max)&&(this.price.min=0,this.price.max=0),(c||a)&&(this.communitySize=0,this.activeUsers=0),r.length&&this.selectedPlatforms.forEach(function(e){return e.selected=!1})}},computed:a()({},Object(o.c)({getProductsQuery:"marketplace/getProductsQuery",products:"marketplace/productsArray",productsTags:"marketplace/productsTags",languages:"marketplace/productsLanguages"}),{query:function(){var e=this.phrase,t=this.selectedSpecials,s=this.selectedGenres,n=(this.selectedLanguages,this.price),i={};return e.length&&(i.name={$eq:e}),t.length&&(i.system_tags={$contains:t.map(function(e){return e.value})}),s.length&&(i.developer_tags={$contains:s.map(function(e){return e.name})}),(n.min||n.max)&&(i.price={$between:[n.min,300|n.max]}),i},resultsFiltered:function(){var e=this.selectedLanguagesNames,t=this.selectedPlatformsNames;return this.results.filter(function(t){return!e.length||t.language_support.filter(function(t){return e.includes(t.name)}).length}).filter(function(e){return!t.length||e.system_requirements.filter(function(e){return t.includes(e.os)}).length})},selectedGenres:function(){return this.selectableTags.filter(function(e){return e.selected})},selectedSpecials:function(){return this.systemTags.filter(function(e){return e.selected})},selectedLanguages:function(){return this.selectableLanguages.filter(function(e){return e.selected})},selectedLanguagesNames:function(){return this.selectedLanguages.map(function(e){return e.name})},selectedPlatforms:function(){return this.platforms.filter(function(e){return e.selected})},selectedPlatformsNames:function(){return this.selectedPlatforms.map(function(e){return e.prop})},filtersActive:function(){return!!(this.selectedGenres.length||this.phrase.length||this.selectedSpecials.length||this.price.max||this.price.min||this.selectedLanguages.length||this.communitySize||this.activeUsers||this.selectedPlatforms.length)},urlQuery:function(){var e={},t=this.phrase,s=this.selectedSpecials,n=this.selectedGenres,i=this.selectedLanguages,c=this.price,a=this.communitySize,r=this.activeUsers,l=this.selectedPlatforms;return t.length&&(e.name=t),c.min&&(e.priceMin=c.min),c.max&&(e.priceMax=c.max),s.length&&(e.specials=s.map(function(e){return e.value})),n.length&&(e.tags=n.map(function(e){return e.name})),i.length&&(e.langs=this.selectedLanguagesNames),a&&(e.communitySize=a),r&&(e.activeUsers=r),l.length&&(e.platforms=this.selectedPlatformsNames),e}}),mounted:function(){if(i()(this.$route.query).length){this.isTyping=!0;var e=this.$route.query,t=e.tags,s=e.langs,n=e.name,c=e.priceMin,a=e.priceMax,r=e.specials,l=e.showFilters,o=e.activeUsers,u=e.communitySize,p=e.platforms;n&&(this.phrase=n),c&&(this.price.min=c),a&&(this.price.max=a),this.selectableTags=this.productsTags.map(function(e){return{name:e,selected:t&&t.includes(e)}}),this.selectableLanguages=this.languages.map(function(e){return{name:e,selected:!(!s||!s.includes(e))}}),l&&(this.expandFilters=!0),o&&(this.activeUsers=o),u&&(this.communitySize=u),p&&this.platforms.forEach(function(e){p.includes(e.prop)&&(e.selected=!0)}),r&&this.systemTags.forEach(function(e){r.includes(e.value)&&(e.selected=!0)})}else this.results=this.products},watch:{urlQuery:{handler:"search",deep:!0}},filters:{replaceLoDash:function(e){return e.replace(/_/g," ")}}},p=(s(743),s(0)),d=Object(p.a)(u,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("c-layout",[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("c-block",{staticClass:"searching-box",attrs:{title:"Search"}},[s("div",{staticClass:"search__main"},[s("c-input-searcher",{attrs:{placeholder:"Search for games","aria-placeholder":"Search for games"},model:{value:e.phrase,callback:function(t){e.phrase=t},expression:"phrase"}}),e._v(" "),s("c-button",{attrs:{status:"success",size:"lg",icon:"sliders-h","data-toggle":"collapse","data-target":"#expand-filters","aria-expanded":"false","aria-controls":"collapseFilters"},on:{click:function(t){e.expandFilters=!e.expandFilters}}},[e._v("Filters")])],1),e._v(" "),s("transition",{attrs:{name:"slide-in-top"}},[e.expandFilters?s("div",{staticClass:"search-filters__container"},[s("div",{staticClass:"filter-box"},[s("h4",[e._v("\n                                    Specials:\n                                    "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedSpecials.length,expression:"selectedSpecials.length"}]},[e._v("\n                                        ("+e._s(e.selectedSpecials.length)+")\n                                    ")])]),e._v(" "),e._l(e.systemTags,function(t,n){return s("c-checkbox",{key:n,attrs:{id:"specials-"+t.value},model:{value:t.selected,callback:function(s){e.$set(t,"selected",s)},expression:"tag.selected"}},[e._v("\n                                    "+e._s(e._f("upperFirstChar")(e._f("replaceLoDash")(t.value)))+"\n                                ")])})],2),e._v(" "),s("div",{staticClass:"filter-box"},[s("h4",[e._v("\n                                    Price range:\n                                    "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.price.min&&e.price.max,expression:"price.min && price.max"}]},[e._v("\n                                        ("+e._s(e.price.min)+" - "+e._s(e.price.max)+")\n                                    ")])]),e._v(" "),s("p",{staticClass:"margin-top-20"},[e._v("Minimum:")]),e._v(" "),s("c-range-slider",{attrs:{min:0,max:60},model:{value:e.price.min,callback:function(t){e.$set(e.price,"min",e._n(t))},expression:"price.min"}}),e._v(" "),s("p",{staticClass:"margin-top-20"},[e._v("Maximum:")]),e._v(" "),s("c-range-slider",{attrs:{max:300},model:{value:e.price.max,callback:function(t){e.$set(e.price,"max",e._n(t))},expression:"price.max"}})],1),e._v(" "),s("div",{staticClass:"filter-box"},[s("h4",[e._v("\n                                    Genres:\n                                    "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedGenres.length,expression:"selectedGenres.length"}]},[e._v("\n                                        ("+e._s(e.selectedGenres.length)+")\n                                    ")])]),e._v(" "),s("c-list",{attrs:{items:e.selectableTags},on:{click:function(e){return e.selected=!e.selected}}})],1),e._v(" "),s("div",{staticClass:"filter-box"},[s("h4",[e._v("\n                                    Languages:\n                                    "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.selectedLanguages.length,expression:"selectedLanguages.length"}]},[e._v("\n                                        ("+e._s(e.selectedLanguages.length)+")\n                                    ")])]),e._v(" "),s("div",[s("c-list",{attrs:{items:e.selectableLanguages},on:{click:function(e){return e.selected=!e.selected}}})],1)]),e._v(" "),s("div",{staticClass:"filter-box"},[s("h4",[e._v("Community:")]),e._v(" "),s("p",{staticClass:"margin-top-20"},[e._v("Size:")]),e._v(" "),s("c-range-slider",{attrs:{max:1e3},model:{value:e.communitySize,callback:function(t){e.communitySize=e._n(t)},expression:"communitySize"}}),e._v(" "),s("p",{staticClass:"margin-top-20"},[e._v("Active Users:")]),e._v(" "),s("c-range-slider",{attrs:{max:5e3},model:{value:e.activeUsers,callback:function(t){e.activeUsers=e._n(t)},expression:"activeUsers"}})],1),e._v(" "),s("div",{staticClass:"filter-box"},[s("h4",[e._v("System:")]),e._v(" "),e._l(e.platforms,function(t){return s("c-checkbox",{key:t.prop,attrs:{id:"specials-"+t.prop},model:{value:t.selected,callback:function(s){e.$set(t,"selected",s)},expression:"os.selected"}},[s("c-icon",{staticClass:"platform-icon",class:[t.selected?"icon--active":"icon--inactive"],attrs:{cat:"fab",name:t.icon}}),e._v("\n                                    "+e._s(t.name)+"\n                                ")],1)})],2)]):e._e()])],1),e._v(" "),s("transition",{attrs:{name:"slide-in-top"}},[e.filtersActive?s("div",{staticClass:"active-filters"},[s("h3",[e._v("Active filters")]),e._v(" "),s("div",{staticClass:"active-filters__content"},[e.phrase.length?s("c-option-tag",{attrs:{title:"NAME:",text:e.phrase},on:{delete:function(t){e.phrase=""}}}):e._e(),e._v(" "),e.selectedGenres.length?s("c-option-tag",{attrs:{title:"GENRES:"},on:{delete:function(t){e.selectedGenres.forEach(function(e){return e.selected=!1})}}},e._l(e.selectedGenres,function(e,t){return s("c-option-tag",{key:t,attrs:{text:e.name,isChildren:""},on:{delete:function(t){e.selected=!1}}})})):e._e(),e._v(" "),e.selectedSpecials.length?s("c-option-tag",{attrs:{title:"SPECIALS:"},on:{delete:function(t){e.selectedSpecials.forEach(function(e){return e.selected=!1})}}},e._l(e.selectedSpecials,function(t,n){return s("c-option-tag",{key:n,attrs:{text:e._f("upperFirstChar")(e._f("replaceLoDash")(t.value)),isChildren:""},on:{delete:function(e){t.selected=!1}}})})):e._e(),e._v(" "),e.price.min>0||e.price.max>0?s("c-option-tag",{attrs:{title:"PRICE RANGE:"},on:{delete:function(t){e.price.min=0,e.price.max=0}}},[e.price.min?s("c-option-tag",{attrs:{title:"Minimum:",text:e.price.min,isChildren:""},on:{delete:function(t){e.price.min=0}}}):e._e(),e._v(" "),e.price.max?s("c-option-tag",{attrs:{title:"Maximum:",text:e.price.max,isChildren:""},on:{delete:function(t){e.price.max=0}}}):e._e()],1):e._e(),e._v(" "),e.selectedLanguages.length?s("c-option-tag",{attrs:{title:"LANGUAGES:"},on:{delete:function(t){e.selectableLanguages.forEach(function(e){return e.selected=!1})}}},e._l(e.selectedLanguages,function(e,t){return s("c-option-tag",{key:t,attrs:{text:e.name,isChildren:""},on:{delete:function(t){e.selected=!1}}})})):e._e(),e._v(" "),e.communitySize||e.activeUsers?s("c-option-tag",{attrs:{title:"COMMUNITY:"},on:{delete:function(t){e.communitySize=0,e.activeUsers=0}}},[e.communitySize?s("c-option-tag",{attrs:{title:"Size:",text:e.communitySize,isChildren:""},on:{delete:function(t){e.communitySize=0}}}):e._e(),e._v(" "),e.activeUsers?s("c-option-tag",{attrs:{title:"Active users:",text:e.activeUsers,isChildren:""},on:{delete:function(t){e.activeUsers=0}}}):e._e()],1):e._e(),e._v(" "),e.selectedPlatforms.length?s("c-option-tag",{attrs:{title:"PLATFORMS:"},on:{delete:function(t){e.selectedPlatforms.forEach(function(e){return e.selected=!1})}}},e._l(e.selectedPlatforms,function(t,n){return s("c-option-tag",{key:n,attrs:{text:e._f("upperFirstChar")(t.name),isChildren:""},on:{delete:function(e){t.selected=!1}}})})):e._e()],1)]):e._e()]),e._v(" "),s("h3",[e._v("Results")]),e._v(" "),s("div",{staticClass:"results__container"},[s("div",{staticClass:"results"},[e.isTyping?s("c-spinner"):e.resultsFiltered.length?s("c-content-navigation",{attrs:{items:e.resultsFiltered,setItemsLimit:12,setItemsPerPage:12},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.items;return s("c-game-grid",{attrs:{itemInRow:2,showRating:!1,items:t,itemBg:"transparent",showTime:""}})}}])}):s("div",[s("p",[e._v("No results were found for provided filters")]),e._v(" "),s("c-button",{attrs:{status:"info"},on:{click:function(t){e.clearFilters()}}},[e._v("Clear filters")]),e._v(" "),s("c-button",[e._v("Check for updates")])],1)],1)])],1)])])])},[],!1,null,"9046ca3e",null);t.default=d.exports},180:function(e,t){},743:function(e,t,s){"use strict";var n=s(180);s.n(n).a}}]);