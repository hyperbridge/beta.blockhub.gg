(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1294:function(t,e,s){"use strict";s.r(e);var n={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[s(1321)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-tags-list":function(t){return s.e(4).then(function(){var e=[s(1159)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-milestone":function(t){return s.e(215).then(function(){var e=[s(1179)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-progress-bar":function(t){return s.e(171).then(function(){var e=[s(1167)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-badges":function(t){return s.e(152).then(function(){var e=[s(1170)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-icon-block":function(t){return s.e(186).then(function(){var e=[s(1173)];t.apply(null,e)}.bind(this)).catch(s.oe)}},computed:{project:function(){if(this.$store.state.funding.projects){var t=this.$store.state.funding.projects[this.id];if(t)return t.images&&t.images.header&&(window.document.getElementById("header-bg").style["background-image"]="url("+t.images.header+")"),t}},editing:function(){if(!this.$store.state.application.editor_mode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editor_mode},milestones:function(){return this.project.milestones.items.sort()},doneMilestones:function(){var t=this.project.milestones.items,e=0;return t.forEach(function(t,s){console.log(t),"done"===t.status&&(e+=1)}),e}},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"}},a=(s(680),s(0)),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-layout",{attrs:{navigationKey:"project"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[t.project?t._e():s("div",{staticClass:"col-12"},[t._v("\n                    Project not found\n                ")])]),t._v(" "),t.project?s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"editor-container"},[t.editing?s("div",{staticClass:"editor"},[t.activeElement.name?t._e():s("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("name")}}},[t._v("Change\n                                Project Name "),s("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.name?s("div",{staticClass:"form-control-element form-control-element--right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],ref:"name",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project name..."},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[s("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("name")}}})])]):t._e()]):t._e(),t._v(" "),s("h1",{staticClass:"title margin-top-10 margin-bottom-15"},[t._v(t._s(t.project.name))])]),t._v(" "),s("div",{staticClass:"editor-container"},[t.editing?s("div",{staticClass:"editor"},[t.activeElement.developer_tags?t._e():s("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",staticStyle:{"margin-bottom":"20px"},on:{click:function(e){t.activateElement("developer_tags")}}},[t._v("Change\n                                Tags "),s("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.developer_tags?s("div",{staticClass:"form-control-element form-control-element--right"},[s("select",{staticClass:"form-control",attrs:{id:"tag-editor",multiple:"multiple"}},t._l(t.author_tag_options,function(e,n){return s("option",{key:n,domProps:{selected:t.project.developer_tags.includes(e)}},[t._v(t._s(e)+"\n                                    ")])})),t._v(" "),s("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[s("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("developer_tags")}}})])]):t._e()]):t._e(),t._v(" "),t.editing&&t.activeElement.developer_tags?t._e():s("c-tags-list",{attrs:{tags:t.project.developer_tags}})],1)]),t._v(" "),s("div",{staticClass:"col-lg-4"},[s("c-badges",{attrs:{icons:["trophy","gem"]}})],1),t._v(" "),s("div",{staticClass:"col-lg-4"},[t.editing?s("div",{staticClass:"editor text-right",staticStyle:{"margin-bottom":"30px"}},[t.activeElement.background_image?t._e():s("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("background_image")}}},[t._v("Change Background Image "),s("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.background_image?s("div",{},[s("div",{staticClass:"form-control-element form-control-element--right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{name:"background_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[s("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("background_image")}}})])])]):t._e(),t._v(" "),s("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 1120 x 524px")])]):t._e(),t._v(" "),t.editing?s("div",{staticClass:"editor text-right"},[t.activeElement.store_image?t._e():s("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("store_image")}}},[t._v("Change Store Image "),s("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.store_image?s("div",{},[s("div",{staticClass:"form-control-element form-control-element--right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"store_image",staticClass:"form-control",attrs:{name:"store_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),s("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[s("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("store_image")}}})])])]):t._e(),t._v(" "),s("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 2140 x 680px")])]):t._e()]),t._v(" "),s("div",{staticClass:"col-12"},[s("ul",{staticClass:"nav nav-tabs margin-bottom-20 justify-content-between"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id}},[t._v("Overview")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/community"}},[t._v("Community")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/bounties"}},[t._v("Bounties")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/updates"}},[t._v("Updates")])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link active",attrs:{to:"/project/"+t.project.id+"/milestones"}},[t._v("Milestones")])],1)]),t._v(" "),s("div",{staticClass:"milestones-header margin-bottom-20"},[s("div",{staticClass:"milestones-header__info"},[s("div",{staticClass:"h3 text-white font-weight-bold mb-0"},[t._v("\n                                "+t._s(t.project.milestones.overall_progress)+"% Project Completion\n                            ")]),t._v("\n                            "+t._s(t.doneMilestones)+" of "+t._s(t.project.milestones.items.length)+" Milestones Completed\n                        ")]),t._v(" "),s("div",{staticClass:"milestones-header__stat"},[s("c-icon-block",{attrs:{icon:"check"}},[s("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                                    Completed\n                                ")]),t._v("\n                                "+t._s(t.doneMilestones)+" Milestones\n                            ")]),t._v(" "),s("c-icon-block",{attrs:{icon:"th"}},[s("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                                    Total\n                                ")]),t._v("\n                                "+t._s(t.project.milestones.items.length)+" Milestones\n                            ")]),t._v(" "),s("c-icon-block",{attrs:{icon:"file-alt"}},[s("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                                    Total Spent\n                                ")]),t._v("\n                                $ "+t._s(t._f("numeralFormat")(t.project.funding.spent_amount,"0,0"))+"\n                            ")]),t._v(" "),s("c-icon-block",{attrs:{icon:"hand-holding-usd"}},[s("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                                    Project Budget\n                                ")]),t._v("\n                                $ "+t._s(t._f("numeralFormat")(t.project.funding.funded_amount,"0,0"))+"\n                            ")])],1)]),t._v(" "),s("div",{staticClass:"timeline-blk position-relative"},[s("div",{staticClass:"progress main_timeline",staticStyle:{height:"15px"}},[s("c-progress-bar",{attrs:{percentages:t.project.milestones.overall_progress}})],1),t._v(" "),t.milestones?s("div",{staticClass:"period-container"},t._l(t.milestones,function(e,n){return s("div",{key:n,staticClass:"period"},[s("div",{staticClass:"number"},[t._v(t._s(e.step_number))]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[t._v("\n                                        "+t._s(e.short_description)+"\n                                    ")]),t._v(" "),s("div",{staticClass:"progress_line"},[s("i",{staticClass:"fas fa-clock icon"}),t._v(" "),s("c-progress-bar",{attrs:{percentages:e.progress.percent_days}}),t._v("\n                                        "+t._s(e.progress.days_left)+" days left\n                                    ")],1),t._v(" "),s("div",{staticClass:"progress_line"},[s("i",{staticClass:"fas fa-check icon"}),t._v(" "),s("c-progress-bar",{attrs:{percentages:e.progress.percent_done}}),t._v("\n                                        "+t._s(e.progress.percent_done)+"% Done\n                                    ")],1),t._v(" "),s("div",{staticClass:"progress_line"},[s("i",{staticClass:"fas fa-dollar-sign icon"}),t._v(" "),s("c-progress-bar",{attrs:{percentages:e.progress.percent_spent}}),t._v("\n                                        "+t._s(e.progress.percent_spent)+"% Spent\n                                    ")],1)])])})):t._e()]),t._v(" "),s("div",{staticClass:"milestones-list"},t._l(t.milestones,function(t,e){return s("c-milestone",{key:e,attrs:{milestone:t}})}))])]):t._e()])])},[],!1,null,"06a111c0",null);e.default=i.exports},175:function(t,e){},680:function(t,e,s){"use strict";var n=s(175);s.n(n).a}}]);