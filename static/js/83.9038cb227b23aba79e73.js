(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1635:function(e,t,s){"use strict";s.r(t);var i={components:{"c-idea-card":function(e){return s.e(267).then(function(){var t=[s(1543)];e.apply(null,t)}.bind(this)).catch(s.oe)}},created:function(){this.$store.dispatch("ideas/find",{query:{$sort:{createdAt:-1},$limit:25}})},computed:{ideas:function(){return this.$store.getters["ideas/list"]},list:function(){var e=[];return e.push({type:"trendingProjectsRow",data:{title:"Trending Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.trendingProjects||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Most Popular Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.trendingProjects||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Top Game Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topGameIdeas||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Top Content Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topContentIdeas||[]}}),e.push({type:"trendingProjectsRow",data:{title:"Top Item Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topItemIdeas||[]}}),e}}},n=(s(964),s(0)),a=Object(n.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("c-layout",{attrs:{navigationKey:"idea"}},[s("div",{staticClass:"row"},[e.$store.state.application.account.settings.client.hide_crowdfund_game_notice?e._e():s("div",{staticClass:"crowdfund-notice col-12 col-md-6 offset-md-3",staticStyle:{"text-align":"center",width:"100%","margin-top":"30px","margin-bottom":"30px",padding:"20px",border:"3px dashed rgba(0,0,0,0.1)","border-radius":"7px",background:"rgba(0,0,0,0.2)"}},[s("c-button",{staticClass:"btn-close",on:{click:function(t){e.$store.commit("application/updateClientSettings","hide_crowdfund_game_notice",!0)}}},[s("i",{staticClass:"fas fa-times"})]),e._v(" "),s("h2",[e._v("Submit Idea")]),e._v(" "),s("div",{staticStyle:{"text-align":"left"}},[s("p",[e._v("Looking to suggest ideas for your favorite game? We're here to help.")]),e._v(" "),s("p",[e._v("Maybe you just have an awesome idea, or want to inspire your favourite dev studio to continue a series (*cough* half-life).")])]),e._v(" "),s("br"),e._v(" "),s("p",[s("c-button",{staticClass:"c-button--lg outline-white",attrs:{href:"#/idea/new"}},[e._v("Get Started")])],1)],1)]),e._v(" "),s("c-infinite-content",{attrs:{list:e.list}}),e._v(" "),s("c-block",{attrs:{noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[s("c-heading-bar",{staticClass:"mb-0",attrs:{slot:"title",name:"Browse All Ideas"},slot:"title"}),e._v(" "),s("div",{staticClass:"row"},[s("c-loading",{attrs:{enabled:!e.ideas.length}}),e._v(" "),e._l(e.ideas,function(e,t){return s("c-idea-card",{key:t,staticClass:"p-2 col-3",attrs:{description:e.description,parentName:e.product&&e.product.name,parentDeveloper:e.product&&e.product.developer,id:e.id}})})],2)],1)],1)},[],!1,null,"7dba774a",null);t.default=a.exports},281:function(e,t){},964:function(e,t,s){"use strict";var i=s(281);s.n(i).a}}]);