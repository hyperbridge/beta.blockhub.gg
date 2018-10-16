(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{183:function(e,t){},605:function(e,t,n){"use strict";var s=n(183);n.n(s).a},937:function(e,t,n){"use strict";n.r(t);n(301);var s=n(10),i={components:{"c-layout":function(e){return Promise.resolve().then(function(){var t=[n(930)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-user-card":function(e){return n.e(130).then(function(){var t=[n(842)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-block":function(e){return Promise.resolve().then(function(){var t=[n(870)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-popup":function(e){return n.e(3).then(function(){var t=[n(29)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tabs":function(e){return n.e(124).then(function(){var t=[n(28)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tab":function(e){return n.e(123).then(function(){var t=[n(27)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-welcome-box":function(e){return n.e(160).then(function(){var t=[n(785)];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){var e=this;return{account:this.$store.state.application.account,identities:this.$store.state.application.account.identities,chosenIdentity:this.$store.state.application.account.identities.find(function(t){return t.id==e.$store.state.application.account.current_identity.id}),purchaseETH:null,purchaseHBX:null,tokenContractAddress:"0x627306090abab3a6e1400e9345bc60c78a8bef57",ETH2USD:220.1,maxPurchaseUSD:7500,tokenPriceUSD:.055,tokenSaleAgreement:!1,jurisdictionAgreement:!1,residentAgreement:!1,purchasePopup:{title:"Purchase",text:"",type:"custom",show:!1},transactionData:null,errors:[]}},computed:{desktop_mode:function(){return this.$store.state.application.desktop_mode},canContinue:function(){return this.purchaseETH&&this.chosenIdentity&&this.chosenIdentity.public_address&&this.tokenSaleAgreement&&this.jurisdictionAgreement&&this.residentAgreement&&this.purchaseETH<=this.maxPurchaseUSD/this.ETH2USD}},methods:{calcHBX:function(){this.purchaseHBX=this.purchaseETH*this.ETH2USD/.055},chooseIdentity:function(e){this.chosenIdentity=e},closePurchasePopup:function(){this.purchasePopup.show=!1,this.transactionData=null},showPurchasePopup:function(e){this.purchasePopup.show=!0},confirmPurchase:function(){var e=this;s.i({fromAddress:this.chosenIdentity.public_address,toAddress:this.tokenContractAddress,amount:this.purchaseETH}).then(function(t){t.success?e.purchaseSuccessful=!0:(e.purchaseSuccessful=!1,e.purchaseError=t.message)})},proceed:function(){this.errors=[],this.canContinue?this.showPurchasePopup():(this.purchaseETH||this.errors.push("You must specify how many HBX to purchase."),this.chosenIdentity&&this.chosenIdentity.public_address||this.errors.push("You must choose a payment profile (Ethereum wallet)."),this.tokenSaleAgreement||this.errors.push("You must agree to the token sale agreement terms to continue."),this.jurisdictionAgreement||this.errors.push("You must agree to the jurisdiction terms to continue."),this.residentAgreement||this.errors.push("You must agree to the resident terms to continue."),this.purchaseETH<=this.maxPurchaseUSD/this.ETH2USD||this.errors.push("The purchase amount exceeds the personal cap of $7,500 USD. Please lower your purchase amount."))}},created:function(){}},a=(n(605),n(0)),o=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("c-layout",{attrs:{navigationKey:"help",showLeftPanel:!1,showRightPanel:!1}},[n("div",{staticClass:"content",attrs:{id:"content"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 mb-4"},[n("h2",[e._v("What is HBX?")]),e._v(" "),n("p",[e._v("\n                        Built by "),n("c-button",{attrs:{status:"underline",size:"md",href:"https://hyperbridge.org"}},[e._v("Hyperbridge")]),e._v(", HBX tokens are used to fuel the decentralized protocols underlying BlockHub. \n                        BlockHub is the first economy built on these protocols, designed to let players and game developers productively interact in mutually beneficial ways. \n                        HBX tokens can be earned or purchased:\n                        \n                        "),n("ul",[n("li",[e._v("Selling game items")]),e._v(" "),n("li",[e._v("Curating game information in the store")]),e._v(" "),n("li",[e._v("Bug reporting")]),e._v(" "),n("li",[e._v("Game promotion")]),e._v(" "),n("li",[e._v("Product testing")]),e._v(" "),n("li",[e._v("Polls/Questionnaires")])])],1)]),e._v(" "),n("div",{staticClass:"col-6"},[n("h2",[e._v("What can HBX be used for?")]),e._v(" "),n("p",[n("ul",[n("li",[e._v("Contribute to crowdfund projects")]),e._v(" "),n("li",[e._v("Purchase products within the store")]),e._v(" "),n("li",[e._v("Vote for the direct of game development (staking)")]),e._v(" "),n("li",[e._v("Receive 10% discount on all transactions")])]),e._v("\n\n                        For the game developers, when accepting HBX you will receive a number of benefits, including reduced fees by 50%. To learn more, please see the "),n("c-button",{attrs:{status:"underline",size:"md",href:"https://hyperbridge.org/whitepaper"}},[e._v("whitepaper")]),e._v(".\n                    ")],1)])]),e._v(" "),n("div",{staticClass:"row"},[e.desktop_mode?n("div",{staticClass:"col-6"},[n("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Purchase"}},[n("p",[e._v("Each HBX token is "),n("strong",[e._v("$"+e._s(e.tokenPriceUSD)+" USD")]),e._v(", and can be purchased with ETH at the current price of "),n("strong",[e._v(e._s((1/e.ETH2USD).toString().slice(0,6))+" ETH")]),e._v(" per HBX "),n("em",[e._v("(Based on a locked conversion of $"+e._s(e.ETH2USD)+" USD per 1 ETH)")]),e._v(".")]),e._v(" "),n("div",{staticClass:"input-group mb-4"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[e._v("\n                                    ETH\n                                ")])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.purchaseETH,expression:"purchaseETH"}],ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.purchaseETH},on:{keyup:e.calcHBX,input:function(t){t.target.composing||(e.purchaseETH=t.target.value)}}})]),e._v(" "),n("p",[e._v("Estimated purchase:")]),e._v(" "),n("div",{staticClass:"input-group mb-4"},[n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[e._v("\n                                    HBX\n                                ")])]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.purchaseHBX,expression:"purchaseHBX"}],ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:"0.00",readonly:""},domProps:{value:e.purchaseHBX},on:{input:function(t){t.target.composing||(e.purchaseHBX=t.target.value)}}})]),e._v(" "),n("strong",[e._v("Note:")]),e._v(" Personal cap is "+e._s((e.maxPurchaseUSD/e.ETH2USD).toString().slice(0,2))+" ETH ($"+e._s(e.maxPurchaseUSD)+" USD equivalent).\n                    ")])],1):e._e(),e._v(" "),e.desktop_mode?n("div",{staticClass:"col-6"},[n("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Payment Profile"}},[n("div",{staticClass:"profile-picker"},e._l(e.identities,function(t){return n("div",{key:t.id,staticClass:"profile-picker__profile"},[n("c-user-card",{class:{default:t.id==e.chosenIdentity.id},attrs:{user:t,previewMode:!0}}),e._v(" "),n("div",{staticClass:"profile__action"},[t.id!=e.chosenIdentity.id?n("c-button",{attrs:{status:"info",icon:"check"},on:{click:function(n){e.chooseIdentity(t)}}},[e._v("Choose")]):e._e()],1)],1)}))])],1):e._e(),e._v(" "),e.desktop_mode?e._e():n("div",{staticClass:"col-12 text-center"},[n("h2",[e._v("You must use the BlockHub app to participate.")]),e._v(" "),n("c-welcome-box")],1),e._v(" "),!e.desktop_mode||e.account.is_verified||e.account.is_verifying?e._e():n("div",{staticClass:"col-8 offset-2",staticStyle:{"text-align":"center"}},[n("h2",{staticStyle:{"text-align":"center"}},[e._v("Oops, you haven't verified your account yet. "),n("br"),e._v("You'll need to do this to participate.")]),e._v(" "),n("br"),e._v(" "),n("c-button",{staticClass:"c-btn-lg",staticStyle:{margin:"0 auto"},attrs:{href:"/#/account/verification"}},[e._v("Verify Account")])],1),e._v(" "),e.desktop_mode&&!e.account.is_verified&&e.account.is_verifying?n("div",{staticClass:"col-8 offset-2",staticStyle:{"text-align":"center"}},[n("p",[e._v("Your account is currently being verified. You'll need to wait until it's finished to participate.")]),e._v(" "),n("p",[e._v("Please check back later. If you've been waiting too long or have problems, please email support@hyperbridge.org")])]):e._e(),e._v(" "),e.desktop_mode&&e.account.is_verified?n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticClass:"col-10 offset-1 tab-card"},[n("h4",[e._v("Token Sale Agreement")]),e._v(" "),n("div",{staticClass:"terms_block"},[n("h2",[e._v("Introduction")]),e._v(" "),n("p",[e._v("These Website Standard Terms and Conditions written on this webpage shall\n                                manage\n                                your use of our website, "),n("span",{staticClass:"highlight preview_website_name"},[e._v("BlockHub")]),e._v("\n                                accessible at "),n("span",{staticClass:"highlight preview_website_url"},[e._v("BlockHub.gg")]),e._v(".\n                            ")]),e._v(" "),n("p",[e._v("These Terms will be applied fully and affect to your use of this Website. By\n                                using this Website, you agreed to accept all terms and conditions written in\n                                here. You must not use this Website if you disagree with any of these\n                                Website\n                                Standard Terms and Conditions.")]),e._v(" "),n("p",[e._v("Minors or people below 18 years old are not allowed to use this Website.")]),e._v(" "),n("h2",[e._v("Intellectual Property Rights")]),e._v(" "),n("p",[e._v("Other than the content you own, under these Terms, "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(" and/or its\n                                licensors\n                                own all the intellectual property rights and materials contained in this\n                                Website.")]),e._v(" "),n("p",[e._v("You are granted limited license only for purposes of viewing the material\n                                contained on this Website.")]),e._v(" "),n("h2",[e._v("Restrictions")]),e._v(" "),n("p",[e._v("You are specifically restricted from all of the following:")]),e._v(" "),n("ul",[n("li",[e._v("publishing any Website material in any other media;")]),e._v(" "),n("li",[e._v("selling, sublicensing and/or otherwise commercializing any Website\n                                    material;\n                                ")]),e._v(" "),n("li",[e._v("publicly performing and/or showing any Website material;")]),e._v(" "),n("li",[e._v("using this Website in any way that is or may be damaging to this\n                                    Website;\n                                ")]),e._v(" "),n("li",[e._v("using this Website in any way that impacts user access to this\n                                    Website;\n                                ")]),e._v(" "),n("li",[e._v("using this Website contrary to applicable laws and regulations, or in\n                                    any\n                                    way may cause harm to the Website, or to any person or business entity;\n                                ")]),e._v(" "),n("li",[e._v("engaging in any data mining, data harvesting, data extracting or any\n                                    other\n                                    similar activity in relation to this Website;\n                                ")]),e._v(" "),n("li",[e._v("using this Website to engage in any advertising or marketing.")])]),e._v(" "),n("p",[e._v("Certain areas of this Website are restricted from being access by you and\n                                "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(" may further\n                                restrict\n                                access by you to any areas of this Website, at any time, in absolute\n                                discretion.\n                                Any user ID and password you may have for this Website are confidential and\n                                you\n                                must maintain confidentiality as well.")]),e._v(" "),n("h2",[e._v("Your Content")]),e._v(" "),n("p",[e._v("In these Website Standard Terms and Conditions, “Your Content” shall mean any\n                                audio, video text, images or other material you choose to display on this\n                                Website. By displaying Your Content, you grant "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(" a\n                                non-exclusive,\n                                worldwide irrevocable, sub licensable license to use, reproduce, adapt,\n                                publish,\n                                translate and distribute it in any and all media.")]),e._v(" "),n("p",[e._v("Your Content must be your own and must not be invading any third-party's\n                                rights.\n                                "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(" reserves\n                                the\n                                right to remove any of Your Content from this Website at any time without\n                                notice.")]),e._v(" "),n("h2",[e._v("No warranties")]),e._v(" "),n("p",[e._v("This Website is provided “as is,” with all faults, and "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(" express no\n                                representations or warranties, of any kind related to this Website or the\n                                materials contained on this Website. Also, nothing contained on this Website\n                                shall be interpreted as advising you.")]),e._v(" "),n("h2",[e._v("Limitation of liability")]),e._v(" "),n("p",[e._v("In no event shall "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(", nor any of its\n                                officers, directors and employees, shall be held liable for anything arising\n                                out\n                                of or in any way connected with your use of this Website whether such\n                                liability\n                                is under contract.  "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(",\n                                including its officers, directors and employees shall not be held liable for\n                                any\n                                indirect, consequential or special liability arising out of or in any way\n                                related to your use of this Website.")]),e._v(" "),n("h2",[e._v("Indemnification"),n("p"),e._v(" "),n("p",[e._v("You hereby indemnify to the fullest extent "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(" from and\n                                    against\n                                    any and/or all liabilities, costs, demands, causes of action, damages\n                                    and\n                                    expenses arising in any way related to your breach of any of the\n                                    provisions\n                                    of these Terms.")])]),e._v(" "),n("h2",[e._v("Severability")]),e._v(" "),n("p",[e._v("If any provision of these Terms is found to be invalid under any applicable\n                                law,\n                                such provisions shall be deleted without affecting the remaining provisions\n                                herein.")]),e._v(" "),n("h2",[e._v("Variation of Terms")]),e._v(" "),n("p",[n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(" is permitted\n                                to\n                                revise these Terms at any time as it sees fit, and by using this Website you\n                                are\n                                expected to review these Terms on a regular basis.")]),e._v(" "),n("h2",[e._v("Assignment")]),e._v(" "),n("p",[e._v("The "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(" is\n                                allowed\n                                to assign, transfer, and subcontract its rights and/or obligations under\n                                these\n                                Terms without any notification. However, you are not allowed to assign,\n                                transfer, or subcontract any of your rights and/or obligations under these\n                                Terms.")]),e._v(" "),n("h2",[e._v("Entire Agreement")]),e._v(" "),n("p",[e._v("These Terms constitute the entire agreement between "),n("span",{staticClass:"highlight preview_company_name"},[e._v("Hyperbridge Technology Inc.")]),e._v(" and you in\n                                relation\n                                to your use of this Website, and supersede all prior agreements and\n                                understandings.")]),e._v(" "),n("h2",[e._v("Governing Law & Jurisdiction")]),e._v(" "),n("p",[e._v("These Terms will be governed by and interpreted in accordance with the laws\n                                of\n                                the State of "),n("span",{staticClass:"highlight preview_country"},[e._v("Country")]),e._v(", and you\n                                submit to the non-exclusive jurisdiction of the state and federal courts\n                                located\n                                in "),n("span",{staticClass:"highlight preview_country"},[e._v("Country")]),e._v(" for the resolution\n                                of\n                                any disputes.")])]),e._v(" "),n("c-checkbox",{staticStyle:{},attrs:{id:"tokenSaleAgreement",checked:!1},model:{value:e.tokenSaleAgreement,callback:function(t){e.tokenSaleAgreement=t},expression:"tokenSaleAgreement"}},[e._v("\n                            I confirm that I understand and agree with the terms of the Token Sale Agreement.\n                        ")]),e._v(" "),n("c-checkbox",{staticStyle:{},attrs:{id:"jurisdictionAgreement",checked:!1},model:{value:e.jurisdictionAgreement,callback:function(t){e.jurisdictionAgreement=t},expression:"jurisdictionAgreement"}},[e._v("\n                            I confirm that I am not a resident of any jurisdiction that forbids token sales.\n                        ")]),e._v(" "),n("c-checkbox",{staticStyle:{},attrs:{id:"residentAgreement",checked:!1},model:{value:e.residentAgreement,callback:function(t){e.residentAgreement=t},expression:"residentAgreement"}},[e._v("\n                            I confirm that I am not a resident of China, United States, or Canada.\n                        ")])],1),e._v(" "),n("div",{staticClass:"col-8 offset-2"},[e.errors.length?n("p",{staticClass:"errors"},[n("strong",[e._v("Please correct the following error(s):")]),e._v(" "),n("ul",e._l(e.errors,function(t){return n("li",{key:t},[e._v(e._s(t))])}))]):e._e(),e._v(" "),n("br"),n("br"),e._v(" "),n("c-button",{staticClass:"justify-content-center",class:{disabled:!e.canContinue},attrs:{status:"success",icon_hide:"",size:"xl"},on:{click:e.proceed}},[e._v("\n                            Proceed to Purchase\n                        ")])],1)]):e._e()])])]),e._v(" "),e.purchasePopup.show?n("c-popup",{ref:"purchasePopup",attrs:{activated:e.purchasePopup.show,width:"800",type:e.purchasePopup.type,sub_title:e.purchasePopup.text},on:{close:e.closePurchasePopup}},[n("div",{attrs:{slot:"custom_close",hidden:""},slot:"custom_close"}),e._v(" "),n("div",{staticClass:"purchase-modal",attrs:{slot:"custom_content"},slot:"custom_content"},[n("c-tabs",[n("c-tab",{attrs:{name:"Confirm Purchase",selected:!0,showFooter:!0}},[n("div",[this.purchaseSuccessful?n("div",{staticClass:"tab-card"},[e._v("\n                            Great!\n                        ")]):e._e(),e._v(" "),this.purchaseSuccessful?e._e():n("div",{staticClass:"tab-card"},[this.purchaseError?n("div",{},[e._v("\n                                An error occurred with the purchase: "+e._s(this.purchaseError)+"\n                            ")]):e._e(),e._v(" "),n("p",[e._v("BlockHub will purchase tokens for this profile:")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://etherscan.io/address/"+e.chosenIdentity.public_address}},[n("strong",[e._v(e._s(e.chosenIdentity.public_address))])])]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("BlockHub will send a payment of "+e._s(e.purchaseETH)+" ETH to this contract address:")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://etherscan.io/address/"+e.tokenContractAddress}},[n("strong",[e._v(e._s(e.tokenContractAddress))])])]),e._v(" "),n("div",[e._v("\n                                Purchasing 1000 HBX in exchange for 10 ETH.\n                            ")]),e._v(" "),n("br"),n("br"),e._v(" "),n("c-button",{staticClass:"justify-content-center",attrs:{status:"success",icon_hide:"",size:"xl"},on:{click:e.confirmPurchase}},[e._v("\n                                Confirm Purchase\n                            ")])],1)]),e._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-end",attrs:{slot:"footer"},slot:"footer"},[n("div",[n("c-button",{on:{click:function(t){e.$emit("close")}}},[e._v("Cancel")])],1)])])],1)],1)]):e._e()],1)},[],!1,null,"361fa6fe",null);t.default=o.exports}}]);