(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{174:function(t,e){},579:function(t,e,n){"use strict";var r=n(174);n.n(r).a},646:function(t,e,n){"use strict";n.r(e);var r=n(13),s=n.n(r),i=n(4),o=n.n(i),c=n(8),a={name:"assets-explorer",props:{assets:{type:Array,required:!0}},components:{"c-content-navigation":function(t){return n.e(99).then(function(){var e=[n(729)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-block":function(t){return n.e(95).then(function(){var e=[n(717)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar-fields":function(t){return n.e(101).then(function(){var e=[n(709)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-dropdown":function(t){return n.e(124).then(function(){var e=[n(657)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-input-searcher":function(t){return n.e(103).then(function(){var e=[n(637)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-assets-list":function(t){return n.e(108).then(function(){var e=[n(697)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-dropdown-menu":function(t){return n.e(165).then(function(){var e=[n(750)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-list":function(t){return n.e(115).then(function(){var e=[n(681)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-option-tag":function(t){return n.e(129).then(function(){var e=[n(713)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{phrase:"",selectableGenres:[],selectableProducts:[],sortBy:{property:"",priceProp:"current",asc:!0},sortOptions:[{title:"Name",property:"name",icon:"language"},{title:"Price",property:"price",icon:"dollar-sign"}]}},methods:{clearFilters:function(){this.phrase="",this.sortBy.property="",this.sortBy.asc=!0,this.selectedProducts.forEach(function(t){return t.selected=!1}),this.selectedGenres.forEach(function(t){return t.selected=!1})},setSort:function(t,e){var n=this.sortBy,r=n.property,s=n.asc;this.sortBy.property=r===t&&e===s?null:t,this.sortBy.asc=e}},computed:o()({},Object(c.c)({genres:"marketplace/productsTags",products:"marketplace/assetsProducts"}),{selectedProducts:function(){return this.selectableProducts.filter(function(t){return t.selected})},selectedProductsNames:function(){return this.selectedProducts.map(function(t){return t.name})},selectedGenres:function(){return this.selectableGenres.filter(function(t){return t.selected})},filtersActive:function(){return!!(this.selectedProducts.length||this.phrase||this.selectedGenres.length||this.sortBy.property)},filteredAssets:function(){var t=this.sortBy,e=t.property,n=t.asc,r=t.priceProp,s=this.phrase,i=this.selectedProductsNames,o=function(t){return n?t:-1*t};return this.assets.filter(function(t){return!s||t.name.toLowerCase().includes(s.toLowerCase())}).filter(function(t){return!i.length||i.includes(t.product_name)}).sort(function(t,n){return e?"price"===e?t.price[r]>n.price[r]?o(1):t.price[r]<n.price[r]?o(-1):0:t[e]>n[e]?o(1):t[e]<n[e]?o(-1):0:0})},priceProps:function(){return s()(this.assets[0].price)}}),mounted:function(){this.selectableGenres=this.genres.map(function(t){return{name:t,selected:!1}}),this.selectableProducts=this.products.map(function(t){return{name:t,selected:!1}})}},l=(n(579),n(0)),u=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row margin-bottom-30"},[n("div",{staticClass:"col-12"},[n("c-block",{attrs:{title:"Top 20 Items",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},[n("template",{slot:"additional-action"},[n("span",{staticClass:"margin-right-15"},[t._v("Sort by:")]),t._v(" "),t._l(t.sortOptions,function(e,r){return n("c-heading-bar-fields",{key:r,attrs:{name:e.title,icon:e.icon,activeUp:t.sortBy.property===e.property?t.sortBy.asc:null},on:{clickUp:function(n){t.setSort(e.property,!0)},clickDown:function(n){t.setSort(e.property,!1)}}})})],2),t._v(" "),n("div",{staticClass:"filter-blk d-flex justify-content-between align-items-center margin-bottom-20"},[n("div",{staticClass:"d-inline-flex align-items-center"},[n("c-dropdown-menu",{staticClass:"margin-right-10",attrs:{title:"FILTER BY PRODUCTS"}},[n("c-list",{attrs:{items:t.selectableProducts},on:{click:function(t){return t.selected=!t.selected}}})],1),t._v(" "),n("c-dropdown-menu",{staticClass:"margin-right-10",attrs:{title:"FILTER BY GENRE"}},[n("c-list",{attrs:{items:t.selectableGenres},on:{click:function(t){return t.selected=!t.selected}}})],1),t._v(" "),n("c-input-searcher",{staticClass:"assets-explorer__input-searcher",model:{value:t.phrase,callback:function(e){t.phrase=e},expression:"phrase"}})],1),t._v(" "),t.assets.length?n("c-button",{attrs:{status:"info",icon_hide:""}},[t._v("View All")]):t._e()],1),t._v(" "),n("transition",{attrs:{name:"slide-in-top"}},[t.filtersActive?n("div",[t._v("\n                    Active filters:\n                    "),n("div",{staticClass:"flex-center-wrap"},[t.phrase?n("c-option-tag",{attrs:{title:"Name:",text:t.phrase},on:{delete:function(e){t.phrase=""}}}):t._e(),t._v(" "),t.selectedProducts.length?n("c-option-tag",{attrs:{title:"PRODUCTS:"},on:{delete:function(e){t.selectedProducts.forEach(function(t){return t.selected=!1})}}},t._l(t.selectedProducts,function(t,e){return n("c-option-tag",{key:e,attrs:{text:t.name,isChildren:""},on:{delete:function(e){t.selected=!1}}})})):t._e(),t._v(" "),t.selectedGenres.length?n("c-option-tag",{attrs:{title:"GENRES:"},on:{delete:function(e){t.selectedGenres.forEach(function(t){return t.selected=!1})}}},t._l(t.selectedGenres,function(t,e){return n("c-option-tag",{key:e,attrs:{text:t.name,isChildren:""},on:{delete:function(e){t.selected=!1}}})})):t._e(),t._v(" "),t.sortBy.property?n("c-option-tag",{attrs:{title:"SORT BY:"},on:{delete:function(e){t.sortBy.property="",t.sortBy.asc=!0}}},[n("c-option-tag",{attrs:{title:"Property:",isChildren:"",isParent:!1},on:{delete:function(e){t.sortBy.property=""}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.sortBy.property,expression:"sortBy.property"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.sortBy,"property",e.target.multiple?n:n[0])}}},t._l(t.sortOptions,function(e){return n("option",{key:e.property,domProps:{value:e.property}},[t._v("\n                                        "+t._s(e.title)+"\n                                    ")])}))]),t._v(" "),"price"===t.sortBy.property?n("c-option-tag",{attrs:{title:"Price:",isParent:!1,isChildren:""}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.sortBy.priceProp,expression:"sortBy.priceProp"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.sortBy,"priceProp",e.target.multiple?n:n[0])}}},t._l(t.priceProps,function(e){return n("option",{key:e,domProps:{value:e}},[t._v("\n                                        "+t._s(t._f("upperFirstChar")(e))+"\n                                    ")])}))]):t._e(),t._v(" "),n("c-option-tag",{attrs:{title:"Direction:",isChildren:"",isParent:!1,hideButton:""},on:{delete:function(e){t.sortBy.asc=!t.sortBy.asc}}},[t._v("\n                                "+t._s(t.sortBy.asc?"Ascending":"Descending")+"\n                                "),n("c-icon",{staticClass:"sort-button",class:{desc:!t.sortBy.asc},attrs:{name:"arrow-up"},on:{click:function(e){t.sortBy.asc=!t.sortBy.asc}}})],1)],1):t._e()],1)]):t._e()]),t._v(" "),t.filteredAssets.length?n("c-content-navigation",{attrs:{items:t.filteredAssets},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.items;return n("c-assets-list",{attrs:{items:e,itemInRow:2}})}}])}):t.filtersActive?n("div",[n("p",[t._v("No products were found using these filters. Want to "),n("c-button",{attrs:{status:"plain"}},[t._v("Check for updates")]),t._v("?")],1),t._v(" "),n("c-button",{attrs:{status:"info",size:"md",icon_hide:""},on:{click:function(e){t.clearFilters()}}},[t._v("Clear filters")])],1):n("p",[t._v("\n                Nothing could be found. Want to "),n("c-button",{attrs:{status:"plain"}},[t._v("Check for updates")]),t._v("?\n            ")],1)],2)],1)])},[],!1,null,"8b8efab0",null);e.default=u.exports}}]);