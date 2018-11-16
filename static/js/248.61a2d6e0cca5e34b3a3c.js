(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1267:function(t,e,n){"use strict";n.r(e);n(6);var i={props:["project","editing"],components:{"c-game-plan":function(t){return n.e(202).then(function(){var e=[n(1212)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-screen-gallery":function(t){return n.e(201).then(function(){var e=[n(1205)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tags-list":function(t){return n.e(8).then(function(){var e=[n(1278)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-rating-block":function(t){return n.e(187).then(function(){var e=[n(1294)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-frequently-traded-assets":function(t){return n.e(200).then(function(){var e=[n(1195)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-community-spotlight":function(t){return n.e(199).then(function(){var e=[n(1202)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[n(1387)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-progress-bar":function(t){return n.e(173).then(function(){var e=[n(1217)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-contribute-form":function(t){return n.e(238).then(function(){var e=[n(468)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-contribute-pledge":function(t){return n.e(237).then(function(){var e=[n(1209)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-badges":function(t){return n.e(188).then(function(){var e=[n(1268)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-decentralization-meter":function(t){return n.e(236).then(function(){var e=[n(1211)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-btn-fav":function(t){return n.e(186).then(function(){var e=[n(1338)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{errors:[],activeElement:{name:!1,background_image:!1,store_image:!1,developer_tags:!1,description:!1,content:!1},author_tag_options:["game","mod","other"],crowdfunding_props:["spent","locked","overflow"]}},methods:{showContributeModal:function(){this.$store.commit("application/showProfileChooser",!0)}},computed:{wishlist:function(){return this.$store.getters["application/identity"].project_wishlist||{}}}},s=(n(776),n(775),n(0)),c=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mx-0"},[n("div",{staticClass:"col-12 col-lg-7 col-xl-8"},[t.project.images.preview?n("c-screen-gallery",{attrs:{items:t.project.images.preview}}):t._e(),t._v(" "),n("div",{staticClass:"editor-container"},[t.editing?n("div",{staticClass:"editor"},[t.activeElement.description?t._e():n("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("description")}}},[t._v("Change Description "),n("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.description?n("div",{staticClass:"form-control-element form-control-element--right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.project.description,expression:"project.description"}],ref:"description",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project description..."},domProps:{value:t.project.description},on:{input:function(e){e.target.composing||t.$set(t.project,"description",e.target.value)}}}),t._v(" "),n("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[n("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("description")}}})])]):t._e()]):t._e(),t._v(" "),n("p",{staticClass:"project__description"},[t._v(t._s(t.project.description))])]),t._v(" "),t.editing?t._e():n("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.project.content)}},[t._v("\n            "+t._s(t.project.content)+"\n        ")]),t._v(" "),t.editing?n("div",{staticClass:"content-editor"},[n("div",{attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.project.content)}},[t._v(t._s(t.project.content))])]):t._e()],1),t._v(" "),n("div",{staticClass:"col-12 col-lg-5 col-xl-4"},[t.project.funding?n("div",{staticClass:"card invert"},[n("div",{staticClass:"card-body"},[t.editing&&!t.activeElement.campaign?n("a",{staticClass:"nav-link editor-container editor-container--style-2",attrs:{href:"javascript:;"},on:{click:function(e){t.showTab("configure")}}},[n("i",{staticClass:"fas fa-cog"}),t._v(" "),n("span",[t._v("Configure Campaign")])]):t._e(),t._v(" "),n("h2",{staticClass:"title"},[t._v("Crowdfunding campaign")]),t._v(" "),n("c-btn-fav",{attrs:{target:"wishlist",active:!!t.wishlist[t.project.id]},on:{click:function(e){t.$store.dispatch("community/updateWishlist",["project",t.project.id])}}}),t._v(" "),n("div",{staticClass:"project"},[n("div",{staticClass:"project__progress"},t._l(t.project.funding.stages,function(e,i){return n("div",{key:i,staticClass:"project__progress-stage",class:e.status},["done"===e.status?n("i",{staticClass:"fas fa-check"}):t._e(),t._v(" "),"in_progress"===e.status?n("i",{staticClass:"fas fa-clock"}):t._e(),t._v(" "),n("span",{staticClass:"stage_line"}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(e.text))])])})),t._v(" "),n("div",{staticClass:"project__info"},[n("div",{staticClass:"funded"},[n("div",{staticClass:"text"},[t._v("114% Funded")]),t._v("\n                            "+t._s(t._f("convertCurrency")(t.project.funding.funded_amount))+"\n                        ")]),t._v(" "),n("div",{staticClass:"goal"},[n("div",{staticClass:"text"},[t._v("Goal")]),t._v("\n                            "+t._s(t._f("convertCurrency")(t.project.funding.goal_amount))+"\n                        ")]),t._v(" "),t._l(t.crowdfunding_props,function(e,i){return n("div",{key:i,class:e},[n("div",{staticClass:"progress-bar-vertical"},[n("c-progress-bar",{attrs:{values:{reached:t.project.funding[e+"_amount"],goal:t.project.funding.goal_amount},direction:"vertical"}})],1),t._v(" "),n("div",[n("p",{staticClass:"text"},[n("strong",[t._v(t._s(t._f("upperFirstChar")(e)))])]),t._v("\n                                "+t._s(t._f("convertCurrency")(t.project.funding[e+"_amount"]))+"\n                            ")])])})],2),t._v(" "),n("div",{staticClass:"project__action"},[n("c-button",{attrs:{status:"share",swap_direction:""}},[t._v("Share")]),t._v(" "),n("c-button",{attrs:{status:"info",icon:"check",swap_direction:""}},[t._v("Follow")]),t._v(" "),n("c-button",{attrs:{status:"support",swap_direction:""}},[t._v("Support")])],1)])],1)]):t._e(),t._v(" "),t.project.milestones?n("div",{staticClass:"card invert milestones"},[n("div",{staticClass:"card-body"},[t.editing&&!t.activeElement.milestones?n("a",{staticClass:"editor-container editor-container--style-2",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-cog"}),t._v(" "),n("span",[t._v("Set Up Milestones")])]):t._e(),t._v(" "),n("h2",{staticClass:"title"},[t._v("Milestones")]),t._v(" "),n("ul",{staticClass:"milestones__list"},t._l(t.project.milestones.items,function(e,i){return n("li",{key:i,class:{done:"done"===e.status}},["done"===e.status?n("div",{staticClass:"step_number"},[n("i",{staticClass:"fas fa-check"})]):n("div",{staticClass:"step_number"},[t._v("\n                            "+t._s(e.step_number)+"\n                        ")]),t._v(" "),n("div",{staticClass:"text"},[t._v("\n                            "+t._s(e.title)+"\n                        ")])])}))])]):t._e(),t._v(" "),n("c-community-spotlight",{staticClass:"margin-bottom-30",attrs:{discussions:t.project.community.discussions,community_url:"#/project/"+t.project.id,editing:t.editing,activeElement:t.activeElement.milestones}}),t._v(" "),n("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Contribute"}},[n("c-contribute-form",{on:{click:t.showContributeModal}})],1),t._v(" "),t._l(t.project.pledges,function(e,i){return n("c-contribute-pledge",{key:i,attrs:{pledge:e},on:{click:t.showContributeModal}})}),t._v(" "),n("c-decentralization-meter")],2)])},[],!1,null,"8407fb6c",null);e.default=c.exports},209:function(t,e){},210:function(t,e){},775:function(t,e,n){"use strict";var i=n(209);n.n(i).a},776:function(t,e,n){"use strict";var i=n(210);n.n(i).a}}]);