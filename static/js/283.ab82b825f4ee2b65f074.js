(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{1522:function(t,e,n){"use strict";n.r(e);n(5);var i={props:["project","editing"],components:{"c-game-plan":function(t){return n.e(234).then(function(){var e=[n(1394)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-screen-gallery":function(t){return n.e(233).then(function(){var e=[n(1396)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tags":function(t){return n.e(10).then(function(){var e=[n(1416)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-rating-block":function(t){return n.e(196).then(function(){var e=[n(1444)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-frequently-traded-assets":function(t){return n.e(232).then(function(){var e=[n(1405)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-community-spotlight":function(t){return n.e(231).then(function(){var e=[n(1406)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[n(1573)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-progress-bar":function(t){return n.e(204).then(function(){var e=[n(1379)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-contribute-form":function(t){return n.e(274).then(function(){var e=[n(479)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-contribute-pledge":function(t){return n.e(273).then(function(){var e=[n(1391)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-badges":function(t){return n.e(212).then(function(){var e=[n(1440)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-decentralization-meter":function(t){return n.e(272).then(function(){var e=[n(1390)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-button-fav":function(t){return n.e(219).then(function(){var e=[n(1523)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{errors:[],activeElement:{name:!1,backgroundImage:!1,storeImage:!1,developerTags:!1,description:!1,content:!1},authorTagOptions:["game","mod","other"],crowdfundingProps:["spent","locked","overflow"]}},methods:{showContributeModal:function(){this.$store.commit("application/showProfileChooser",!0)}},computed:{wishlist:function(){return this.$store.state.application.activeProfile&&this.$store.state.application.activeProfile.productWishlist||{}}}},s=(n(952),n(951),n(0)),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mx-0"},[n("div",{staticClass:"col-12 col-lg-7 col-xl-8"},[t.project.images&&t.project.images.preview?n("c-screen-gallery",{attrs:{items:t.project.images.preview}}):t._e(),t._v(" "),n("div",{staticClass:"editor-container"},[t.editing?n("div",{staticClass:"editor"},[t.activeElement.description?t._e():n("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("description")}}},[t._v("Change Description "),n("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.description?n("div",{staticClass:"form-control-element form-control-element--right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.project.description,expression:"project.description"}],ref:"description",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project description..."},domProps:{value:t.project.description},on:{input:function(e){e.target.composing||t.$set(t.project,"description",e.target.value)}}}),t._v(" "),n("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[n("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("description")}}})])]):t._e()]):t._e(),t._v(" "),n("p",{staticClass:"project__description"},[t._v(t._s(t.project.description))])]),t._v(" "),t.editing?t._e():n("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Contents",noPadding:!0,noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.project.value)}},[t._v("\n                    "+t._s(t.project.value)+"\n            ")])]),t._v(" "),t.editing?n("div",{staticClass:"content-editor"},[n("div",{attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.project.value)}},[t._v(t._s(t.project.value))])]):t._e()],1),t._v(" "),n("div",{staticClass:"col-12 col-lg-5 col-xl-4"},[t.project.funding?n("div",{staticClass:"card invert"},[n("div",{staticClass:"card-body"},[t.editing&&!t.activeElement.campaign?n("a",{staticClass:"nav-link editor-container editor-container--style-2",attrs:{href:"javascript:;"},on:{click:function(e){t.showTab("configure")}}},[n("i",{staticClass:"fas fa-cog"}),t._v(" "),n("span",[t._v("Configure Campaign")])]):t._e(),t._v(" "),n("h2",{staticClass:"title"},[t._v("Crowdfunding campaign")]),t._v(" "),n("c-button-fav",{attrs:{target:"wishlist",active:!!t.wishlist[t.project.id]},on:{click:function(e){t.$store.dispatch("community/updateWishlist",["project",t.project.id])}}}),t._v(" "),n("div",{staticClass:"project"},[n("div",{staticClass:"project__progress"},t._l(t.project.funding.stages,function(e,i){return n("div",{key:i,staticClass:"project__progress-stage",class:e.status},["Done"===e.status?n("i",{staticClass:"fas fa-check"}):t._e(),t._v(" "),"InProgress"===e.status?n("i",{staticClass:"fas fa-clock"}):t._e(),t._v(" "),n("span",{staticClass:"stage_line"}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(e.text))])])})),t._v(" "),n("div",{staticClass:"project__info"},[n("div",{staticClass:"funded"},[n("div",{staticClass:"text"},[t._v("114% Funded")]),t._v("\n                            "+t._s(t._f("convertCurrency")(t.project.funding.fundedAmount))+"\n                        ")]),t._v(" "),n("div",{staticClass:"goal"},[n("div",{staticClass:"text"},[t._v("Goal")]),t._v("\n                            "+t._s(t._f("convertCurrency")(t.project.funding.goalAmount))+"\n                        ")]),t._v(" "),t._l(t.crowdfundingProps,function(e,i){return n("div",{key:i,class:e},[n("div",{staticClass:"progress-bar-vertical"},[n("c-progress-bar",{attrs:{values:{reached:t.project.funding[e+"_amount"],goal:t.project.funding.goalAmount},direction:"vertical"}})],1),t._v(" "),n("div",[n("p",{staticClass:"text"},[n("strong",[t._v(t._s(t._f("upperFirstChar")(e)))])]),t._v("\n                                "+t._s(t._f("convertCurrency")(t.project.funding[e+"_amount"]))+"\n                            ")])])})],2),t._v(" "),n("div",{staticClass:"project__action"},[n("c-button",{attrs:{status:"share",swapDirection:""}},[t._v("Share")]),t._v(" "),n("c-button",{attrs:{status:"info",icon:"check",swapDirection:""}},[t._v("Follow")]),t._v(" "),n("c-button",{attrs:{status:"support",swapDirection:""}},[t._v("Support")])],1)])],1)]):t._e(),t._v(" "),t.project.milestones?n("div",{staticClass:"card invert milestones"},[n("div",{staticClass:"card-body"},[t.editing&&!t.activeElement.milestones?n("a",{staticClass:"editor-container editor-container--style-2",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-cog"}),t._v(" "),n("span",[t._v("Set Up Milestones")])]):t._e(),t._v(" "),n("h2",{staticClass:"title"},[t._v("Milestones")]),t._v(" "),n("ul",{staticClass:"milestones__list"},t._l(t.project.milestones.items,function(e,i){return n("li",{key:i,class:{done:"Done"===e.status}},["Done"===e.status?n("div",{staticClass:"stepNumber"},[n("i",{staticClass:"fas fa-check"})]):n("div",{staticClass:"stepNumber"},[t._v("\n                            "+t._s(e.stepNumber)+"\n                        ")]),t._v(" "),n("div",{staticClass:"text"},[t._v("\n                            "+t._s(e.title)+"\n                        ")])])}))])]):t._e(),t._v(" "),n("c-community-spotlight",{staticClass:"margin-bottom-30",attrs:{discussions:t.project.community.discussions,community_url:"#/project/"+t.project.id,editing:t.editing,activeElement:t.activeElement.milestones}}),t._v(" "),n("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Contribute",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("c-contribute-form",{on:{click:t.showContributeModal}})],1),t._v(" "),t._l(t.project.pledges,function(e,i){return n("c-contribute-pledge",{key:i,attrs:{pledge:e},on:{click:t.showContributeModal}})}),t._v(" "),n("c-decentralization-meter",{directives:[{name:"decentralized-mode",rawName:"v-decentralized-mode"}]})],2)])},[],!1,null,"7337e71b",null);e.default=a.exports},268:function(t,e){},269:function(t,e){},951:function(t,e,n){"use strict";var i=n(268);n.n(i).a},952:function(t,e,n){"use strict";var i=n(269);n.n(i).a}}]);