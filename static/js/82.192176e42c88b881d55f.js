(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1605:function(e,t,s){"use strict";s.r(t);var n={components:{"c-game-card":function(e){return s.e(270).then(function(){var t=[s(1511)];e.apply(null,t)}.bind(this)).catch(s.oe)}},created:function(){this.$store.dispatch("products/find",{query:{$sort:{createdAt:-1},$limit:25}})},computed:{games:function(){return this.$store.getters["products/list"]},list:function(){var e=[];return e.push({type:"trendingProjectsRow",data:{title:"Trending Games",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.trendingProjects||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Top Games",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topGameIdeas||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Top Independent Games",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topItemIdeas||[]}}),e}}},i=(s(956),s(0)),a=Object(i.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("c-layout",{attrs:{navigationKey:"store"}},[s("c-infinite-content",{attrs:{list:e.list}}),e._v(" "),s("c-block",{attrs:{noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[s("c-heading-bar",{staticClass:"mb-0",attrs:{slot:"title",name:"Browse All Games",showArrows:e.games.length>4},slot:"title"}),e._v(" "),s("div",{staticClass:"row"},[s("c-loading",{attrs:{enabled:!e.games.length}}),e._v(" "),e._l(e.games,function(e,t){return s("c-game-card",{key:t,staticClass:"p-2 col-3",attrs:{image:e.meta.images.mediumTile,description:e.description,funds:e.meta.funds,parentName:e.product&&e.product.name,parentDeveloper:e.product&&e.product.developer,parentImage:e.product&&e.product.meta.images.mediumTile,id:e.id}})})],2)],1)],1)},[],!1,null,"2dd598ee",null);t.default=a.exports},272:function(e,t){},956:function(e,t,s){"use strict";var n=s(272);s.n(n).a}}]);