(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1406:function(t,a,s){"use strict";s.r(a);var i=s(17),c=s.n(i),n=s(8),e={components:{"c-layout":function(t){return Promise.resolve().then(function(){var a=[s(1421)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-block":function(t){return Promise.resolve().then(function(){var a=[s(1346)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var a=[s(1356)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-custom-modal":function(t){return s.e(177).then(function(){var a=[s(1250)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-tabs":function(t){return s.e(161).then(function(){var a=[s(1303)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-tab":function(t){return s.e(160).then(function(){var a=[s(1297)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-game-includes-item":function(t){return s.e(191).then(function(){var a=[s(1292)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-btn-fav":function(t){return s.e(183).then(function(){var a=[s(1276)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-project-card":function(t){return s.e(22).then(function(){var a=[s(1294)];t.apply(null,a)}.bind(this)).catch(s.oe)}},data:function(){return{wallets:[],expert_mode:!1}},methods:{exportAccountFile:function(){n.sendCommand("exportAccountFileRequest")},importAccountFile:function(){n.sendCommand("importAccountFileRequest")},deleteAccount:function(){n.sendCommand("deleteAccountRequest")}},computed:{identityCount:function(){return c()(this.$store.state.application.identities).length},account:function(){return this.$store.state.application.account},products:function(){return this.$store.getters["application/wishlistedProducts"]},projects:function(){return this.$store.getters["application/wishlistedProjects"]}}},o=(s(842),s(841),s(0)),l=Object(o.a)(e,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("c-layout",{attrs:{navigationKey:"account"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("c-block",{attrs:{title:"Account Information",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[s("form",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Email Address")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Email",readonly:""},domProps:{value:t.account.email}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Given Name")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Given name",readonly:""},domProps:{value:t.account.first_name}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Family Name")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Family name",readonly:""},domProps:{value:t.account.last_name}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Public Address")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Public address",readonly:""},domProps:{value:t.account.public_address}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Your account is an Ethereum wallet, and can be "),s("a",{attrs:{href:"https://etherscan.io/address/"+t.account.public_address}},[t._v("found on the blockchain using the Public Address")])])])])]),t._v(" "),s("div",{staticClass:"col-12"},[s("c-button",{attrs:{hidden:""},on:{click:t.importAccountFile}},[t._v("Import Account")]),t._v(" "),s("c-button",{attrs:{hidden:""},on:{click:t.exportAccountFile}},[t._v("Export Saved Account")]),t._v(" "),s("c-button",{staticClass:"outline-danger",on:{click:t.deleteAccount}},[t._v("Clear Saved Account")])],1)])])]),t._v(" "),s("c-block",{attrs:{title:"Overview",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[s("div",{staticClass:"stat-card-container"},[s("div",{staticClass:"stat-card-list"},[s("router-link",{staticClass:"route stat-card",attrs:{tag:"div",to:"/account/identities"}},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-id-card"})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v("Profiles")]),t._v(" "),s("div",{staticClass:"stat"},[s("div",[t._v("\n                                        "+t._s(t.account.identities.length)+" owned by your account\n                                    ")])]),t._v(" "),s("p",[t._v("\n                                    View and manage profiles on this account.\n                                ")])])]),t._v(" "),s("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"TICKETS",expression:"'TICKETS'"}],staticClass:"stat-card"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-question-circle"})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v("Support Tickets")]),t._v(" "),s("div",{staticClass:"stat"},[s("div",[s("i",{staticClass:"fa fa-clock"}),t._v("\n                                        35\n                                    ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-exclamation-triangle",staticStyle:{color:"#FADC72"}}),t._v("\n                                        12\n                                    ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-check",staticStyle:{color:"#43C981"}}),t._v("\n                                        5\n                                    ")])]),t._v(" "),s("p",[t._v("\n                                    Viev and Manage Profiles on this account.\n                                ")])])]),t._v(" "),s("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"PAYMENTS",expression:"'PAYMENTS'"}],staticClass:"stat-card"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-dollar-sign"})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v("Open Payments")]),t._v(" "),s("div",{staticClass:"stat"},[s("div",[t._v("\n                                        $ 2,345,00 om 6 Payments\n                                    ")])]),t._v(" "),s("p",[t._v("\n                                    Viev and Manage Profiles on this account.\n                                ")])])]),t._v(" "),s("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"USER_ACTIVITY",expression:"'USER_ACTIVITY'"}],staticClass:"stat-card"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fas fa-users"})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",[t._v("User Activity")]),t._v(" "),s("div",{staticClass:"stat"},[s("div",[s("i",{staticClass:"fas fa-circle",staticStyle:{color:"#43C981"}}),t._v("\n                                        3\n                                    ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-circle",staticStyle:{color:"#FADC72"}}),t._v("\n                                        1\n                                    ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-circle",staticStyle:{color:"#F75D5D"}}),t._v("\n                                        0\n                                    ")]),t._v(" "),s("div",[s("i",{staticClass:"fas fa-circle",staticStyle:{color:"#A2A3BE"}}),t._v("\n                                        5\n                                    ")])]),t._v(" "),s("p",[t._v("\n                                    Viev and Manage Profiles on this account.\n                                ")])])])],1)])]),t._v(" "),s("c-block",{attrs:{title:"Wishlists",noGutter:"",bgGradient:"",onlyContentBg:""}},[s("c-tabs",{attrs:{tabNames:["Products","Projects"],styled:""}},[s("c-tab",{attrs:{tab_id:1}},[s("div",{staticClass:"wishlist-box"},t._l(t.products,function(a){return s("div",{key:a.id,staticClass:"wishlist-box__item"},[s("c-game-includes-item",{attrs:{id:a.id,image:a.images.medium_tile,name:a.name,rating:a.rating.overall,developer:a.developer}}),t._v(" "),s("c-btn-fav",{attrs:{target:"Wishlist",active:!0},on:{click:function(s){t.$store.commit("application/updateFavorites",{id:a.id})}}})],1)})),t._v(" "),t.products.length?t._e():s("p",[t._v("\n                            You have not added any products to your wishlist\n                        ")])]),t._v(" "),s("c-tab",{attrs:{tab_id:2}},[s("div",{staticClass:"wishlist-box"},t._l(t.projects,function(a){return s("div",{key:a.id,staticClass:"wishlist-box__item"},[s("c-project-card",{staticClass:"p-0 mb-2",attrs:{image:a.images[0],funds:a.funds}}),t._v(" "),s("c-btn-fav",{attrs:{target:"Wishlist",active:!0},on:{click:function(s){t.$store.commit("application/updateFavorites",{id:a.id,prop:"project_wishlist"})}}})],1)})),t._v(" "),t.projects.length?t._e():s("p",[t._v("\n                            You have not added any projects to your wishlist\n                        ")])])],1)],1)],1)])])},[],!1,null,"38eff3d3",null);a.default=l.exports},283:function(t,a){},284:function(t,a){},841:function(t,a,s){"use strict";var i=s(283);s.n(i).a},842:function(t,a,s){"use strict";var i=s(284);s.n(i).a}}]);