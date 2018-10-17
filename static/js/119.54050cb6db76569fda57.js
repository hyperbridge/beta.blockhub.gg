(window.webpackJsonp=window.webpackJsonp||[]).push([[119,5,7,8],{245:function(t,e){},27:function(t,e,i){"use strict";i.r(e);var s={name:"c-tab",props:{name:{type:String,required:!0},selected:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1},transparentBg:{type:Boolean,default:!1}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}},a=(i(472),i(0)),n=Object(a.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}],staticClass:"tab-item",class:{"bg-transparent":this.transparentBg}},[e("div",{staticClass:"tab-item__container"},[this._t("default")],2),this._v(" "),this.showFooter?e("div",{staticClass:"tab-item__footer"},[this._t("footer")],2):this._e()])},[],!1,null,"9962aa38",null);e.default=n.exports},28:function(t,e,i){"use strict";i.r(e);var s={name:"c-tabs",props:{variant:{type:String,default:"default"},currentStep:[Number,String]},data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(t,e){this.currentStep?e+1<=this.currentStep&&this.tabs.forEach(function(t,i){t.isActive=e==i}):this.tabs.forEach(function(e){e.isActive=e.name==t})}}},a=(i(473),i(0)),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tabs-nav",class:t.variant},[i("ul",t._l(t.tabs,function(e,s){return i("li",{key:s,class:"nav-item layer"+(s+1)},[i("a",{class:{active:e.isActive},attrs:{href:e.href},on:{click:function(i){i.preventDefault(),t.selectTab(e.name,s)}}},[t._v(t._s(e.name))])])})),t._v(" "),t._t("tabs-nav")],2),t._v(" "),i("div",{ref:"tabs",staticClass:"tabs-container"},[t._t("default",null,{tabs:t.tabs})],2)])},[],!1,null,"5fd8794a",null);e.default=n.exports},29:function(t,e,i){"use strict";i.r(e);var s={props:{type:{default:"default"},title:{type:String},sub_title:{type:String},activated:{type:Boolean},width:{default:"400"}},computed:{customClose:function(){return this.$slots.custom_close}}},a=(i(474),i(0)),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade",duration:100}},[t.activated?i("div",{staticClass:"c-popup",on:{click:function(e){if(e.target!==e.currentTarget)return null;e.preventDefault(),t.$emit("close")}}},[i("div",{staticClass:"c-popup__item",style:{width:+t.width+"px"}},[t.title?i("h3",[t._v(t._s(t.title))]):t._e(),t._v(" "),i("div",{staticClass:"position-relative"},[t.customClose?t._t("custom_close"):i("div",{staticClass:"c-popup__close",on:{click:function(e){t.$emit("close")}}},[i("i",{staticClass:"fas fa-times"})]),t._v(" "),this.$slots.custom_content?t._t("custom_content"):i("div",{staticClass:"c-popup__content"},[t.sub_title?i("div",{staticClass:"c-popup__content-header",class:["c-popup-type-"+t.type]},[i("div",{staticClass:"popup-icon"},[t.type==["warning","danger"]?i("i",{staticClass:"fas fa-exclamation-triangle"}):t._e(),t._v(" "),"success"==t.type?i("i",{staticClass:"fas fa-check"}):i("i",{staticClass:"fas fa-info-circle"})]),t._v(" "),i("div",{staticClass:"sub_title"},[t._v("\n                            "+t._s(t.sub_title)+"\n                        ")])]):t._e(),t._v(" "),i("div",{staticClass:"c-popup__content-body"},[i("p",{staticClass:"m-0"},[t._t("default")],2),t._v(" "),t._t("body")],2),t._v(" "),this.$slots.footer?i("div",{staticClass:"c-popup__content-footer"},[t._t("footer")],2):t._e()])],2)])]):t._e()])},[],!1,null,"4e2e54da",null);e.default=n.exports},46:function(t,e){},47:function(t,e){},472:function(t,e,i){"use strict";var s=i(46);i.n(s).a},473:function(t,e,i){"use strict";var s=i(47);i.n(s).a},474:function(t,e,i){"use strict";var s=i(48);i.n(s).a},48:function(t,e){},693:function(t,e,i){"use strict";var s=i(245);i.n(s).a},751:function(t,e,i){"use strict";i.r(e);var s=i(28),a=i(27),n=i(276),o=i(275),r=i(29),c={props:["activated"],components:{"c-tab":a.default,"c-tabs":s.default,"c-switch":n.default,"c-button":o.default,"c-popup":r.default},data:function(){return{agreement:!0,sending:!1}},methods:{toggleSteps:function(){this.agreement=!1,this.sending=!0}}},l=(i(693),i(0)),v=Object(l.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("c-popup",{ref:"modal",attrs:{activated:t.activated,type:"custom",title:"Purchase",width:"650"},on:{close:function(e){t.$emit("close")}}},[i("div",{staticClass:"c-popup__close",attrs:{slot:"custom_close"},on:{click:function(e){t.$emit("close")}},slot:"custom_close"},[i("i",{staticClass:"fas fa-times"})]),t._v(" "),i("div",{staticClass:"purchase-modal",attrs:{slot:"custom_content"},slot:"custom_content"},[i("c-tabs",[i("c-tab",{attrs:{name:"Agreement",selected:t.agreement,showFooter:!0}},[i("div",[i("div",{staticClass:"d-flex justify-content-between align-items-center"},[i("h4",[t._v("Purchase Agreement")])]),t._v(" "),i("div",{staticClass:"terms_block"},[t._t("agreement_text",[i("h1",[t._v("Terms and Conditions for "),i("span",{staticClass:"highlight preview_company_name"},[t._v("BlockHub")])]),t._v(" "),i("h2",[t._v("Introduction")]),t._v(" "),i("p",[t._v("These Website Standard Terms and Conditions written on this webpage shall\n                                manage\n                                your use of our website, "),i("span",{staticClass:"highlight preview_website_name"},[t._v("BlockHub")]),t._v("\n                                accessible at "),i("span",{staticClass:"highlight preview_website_url"},[t._v("BlockHub.gg")]),t._v(".\n                            ")]),t._v(" "),i("p",[t._v("These Terms will be applied fully and affect to your use of this Website. By\n                                using this Website, you agreed to accept all terms and conditions written in\n                                here. You must not use this Website if you disagree with any of these\n                                Website\n                                Standard Terms and Conditions.")]),t._v(" "),i("p",[t._v("Minors or people below 18 years old are not allowed to use this Website.")]),t._v(" "),i("h2",[t._v("Intellectual Property Rights")]),t._v(" "),i("p",[t._v("Other than the content you own, under these Terms, "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(" and/or its\n                                licensors\n                                own all the intellectual property rights and materials contained in this\n                                Website.")]),t._v(" "),i("p",[t._v("You are granted limited license only for purposes of viewing the material\n                                contained on this Website.")]),t._v(" "),i("h2",[t._v("Restrictions")]),t._v(" "),i("p",[t._v("You are specifically restricted from all of the following:")]),t._v(" "),i("ul",[i("li",[t._v("publishing any Website material in any other media;")]),t._v(" "),i("li",[t._v("selling, sublicensing and/or otherwise commercializing any Website\n                                    material;\n                                ")]),t._v(" "),i("li",[t._v("publicly performing and/or showing any Website material;")]),t._v(" "),i("li",[t._v("using this Website in any way that is or may be damaging to this\n                                    Website;\n                                ")]),t._v(" "),i("li",[t._v("using this Website in any way that impacts user access to this\n                                    Website;\n                                ")]),t._v(" "),i("li",[t._v("using this Website contrary to applicable laws and regulations, or in\n                                    any\n                                    way may cause harm to the Website, or to any person or business entity;\n                                ")]),t._v(" "),i("li",[t._v("engaging in any data mining, data harvesting, data extracting or any\n                                    other\n                                    similar activity in relation to this Website;\n                                ")]),t._v(" "),i("li",[t._v("using this Website to engage in any advertising or marketing.")])]),t._v(" "),i("p",[t._v("Certain areas of this Website are restricted from being access by you and\n                                "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(" may further\n                                restrict\n                                access by you to any areas of this Website, at any time, in absolute\n                                discretion.\n                                Any user ID and password you may have for this Website are confidential and\n                                you\n                                must maintain confidentiality as well.")]),t._v(" "),i("h2",[t._v("Your Content")]),t._v(" "),i("p",[t._v("In these Website Standard Terms and Conditions, “Your Content” shall mean any\n                                audio, video text, images or other material you choose to display on this\n                                Website. By displaying Your Content, you grant "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(" a\n                                non-exclusive,\n                                worldwide irrevocable, sub licensable license to use, reproduce, adapt,\n                                publish,\n                                translate and distribute it in any and all media.")]),t._v(" "),i("p",[t._v("Your Content must be your own and must not be invading any third-party's\n                                rights.\n                                "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(" reserves\n                                the\n                                right to remove any of Your Content from this Website at any time without\n                                notice.")]),t._v(" "),i("h2",[t._v("No warranties")]),t._v(" "),i("p",[t._v("This Website is provided “as is,” with all faults, and "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(" express no\n                                representations or warranties, of any kind related to this Website or the\n                                materials contained on this Website. Also, nothing contained on this Website\n                                shall be interpreted as advising you.")]),t._v(" "),i("h2",[t._v("Limitation of liability")]),t._v(" "),i("p",[t._v("In no event shall "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(", nor any of its\n                                officers, directors and employees, shall be held liable for anything arising\n                                out\n                                of or in any way connected with your use of this Website whether such\n                                liability\n                                is under contract.  "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(",\n                                including its officers, directors and employees shall not be held liable for\n                                any\n                                indirect, consequential or special liability arising out of or in any way\n                                related to your use of this Website.")]),t._v(" "),i("h2",[t._v("Indemnification"),i("p"),t._v(" "),i("p",[t._v("You hereby indemnify to the fullest extent "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(" from and\n                                    against\n                                    any and/or all liabilities, costs, demands, causes of action, damages\n                                    and\n                                    expenses arising in any way related to your breach of any of the\n                                    provisions\n                                    of these Terms.")])]),t._v(" "),i("h2",[t._v("Severability")]),t._v(" "),i("p",[t._v("If any provision of these Terms is found to be invalid under any applicable\n                                law,\n                                such provisions shall be deleted without affecting the remaining provisions\n                                herein.")]),t._v(" "),i("h2",[t._v("Variation of Terms")]),t._v(" "),i("p",[i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(" is permitted\n                                to\n                                revise these Terms at any time as it sees fit, and by using this Website you\n                                are\n                                expected to review these Terms on a regular basis.")]),t._v(" "),i("h2",[t._v("Assignment")]),t._v(" "),i("p",[t._v("The "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(" is\n                                allowed\n                                to assign, transfer, and subcontract its rights and/or obligations under\n                                these\n                                Terms without any notification. However, you are not allowed to assign,\n                                transfer, or subcontract any of your rights and/or obligations under these\n                                Terms.")]),t._v(" "),i("h2",[t._v("Entire Agreement")]),t._v(" "),i("p",[t._v("These Terms constitute the entire agreement between "),i("span",{staticClass:"highlight preview_company_name"},[t._v("Hyperbridge Technology Inc.")]),t._v(" and you in\n                                relation\n                                to your use of this Website, and supersede all prior agreements and\n                                understandings.")]),t._v(" "),i("h2",[t._v("Governing Law & Jurisdiction")]),t._v(" "),i("p",[t._v("These Terms will be governed by and interpreted in accordance with the laws\n                                of\n                                the State of "),i("span",{staticClass:"highlight preview_country"},[t._v("Country")]),t._v(", and you\n                                submit to the non-exclusive jurisdiction of the state and federal courts\n                                located\n                                in "),i("span",{staticClass:"highlight preview_country"},[t._v("Country")]),t._v(" for the resolution\n                                of\n                                any disputes.")])])],2)]),t._v(" "),i("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"footer"},slot:"footer"},[i("div",[i("c-switch",{attrs:{size:"sm",value:!0,label:"I agree with the terms"}})],1),t._v(" "),i("div",[i("c-button",{attrs:{status:"danger",c_class:"mx-1"},on:{click:function(t){}}},[t._v("Cancel")]),t._v(" "),i("c-button",{attrs:{status:"success"},on:{click:t.toggleSteps}},[t._v("Next")])],1)])]),t._v(" "),i("c-tab",{attrs:{name:"Sending",selected:t.sending,showFooter:!0}},[i("div",{staticClass:"sending-blk"},[i("div",{staticClass:"clmn-1"},[i("div",{staticClass:"grid"},[i("div",{staticClass:"grid-item"},[i("div",[i("c-img",{attrs:{src:"https://www.touchtapplay.com/wp-content/uploads/2017/12/bitcoin-game-cheats-ketchapp.jpg"}})],1)]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")])]),t._v(" "),i("div",{staticClass:"info text-left"},[i("strong",[t._v("SatoSama")]),t._v(" "),i("span",{staticClass:"float-right down"},[t._v("-$14.00")])])]),t._v(" "),i("div",{staticClass:"clmn-2"},[i("div",{staticClass:"directions"},[i("div",{staticClass:"right-arrow"},[i("div",{staticClass:"progress"})]),t._v(" "),i("div",{staticClass:"left-arrow"},[i("div",{staticClass:"progress",staticStyle:{width:"45%"}})])]),t._v(" "),i("div",{staticClass:"time"},[i("i",{staticClass:"fas fa-clock"}),t._v("\n                            15 seconds\n                        ")]),t._v(" "),i("div",{staticClass:"info text-center"},[t._v("\n                            1 "),i("strong",[t._v("hbx")]),t._v(" - 0.02 "),i("strong",[t._v("usd")])])]),t._v(" "),i("div",{staticClass:"clmn-3"},[i("div",{staticClass:"grid"},[i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")])]),t._v(" "),i("div",{staticClass:"info text-left"},[i("strong",[t._v("SatoshiStudios")]),t._v(" "),i("span",{staticClass:"float-right up"},[t._v("+$14.00")])])])]),t._v(" "),i("div",{staticClass:"d-flex align-items-center justify-content-end",attrs:{slot:"footer"},slot:"footer"},[i("div",[i("c-button",{attrs:{status:"danger"},on:{click:function(t){}}},[t._v("Cancel")]),t._v(" "),i("c-button",{attrs:{status:"success"},on:{click:function(t){}}},[t._v("Complete")])],1)])])],1)],1)])},[],!1,null,"4e231418",null);e.default=v.exports}}]);