(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{137:function(t,s){},138:function(t,s){},538:function(t,s,a){"use strict";var i=a(137);a.n(i).a},539:function(t,s,a){"use strict";var i=a(138);a.n(i).a},744:function(t,s,a){"use strict";a.r(s);var i=a(12),c=a.n(i),n={components:{"c-layout":function(t){return Promise.resolve().then(function(){var s=[a(798)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-block":function(t){return a.e(92).then(function(){var s=[a(662)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var s=[a(250)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-custom-modal":function(t){return a.e(129).then(function(){var s=[a(661)];t.apply(null,s)}.bind(this)).catch(a.oe)}},computed:{identityCount:function(){return c()(this.$store.state.application.identities).length},account:function(){return this.$store.state.application.account}},data:function(){return{wallets:[],expert_mode:!1}}},l=(a(539),a(538),a(0)),e=Object(l.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("c-layout",{attrs:{navigationKey:"account-navigation"}},[a("div",{staticClass:"content",attrs:{id:"content"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("c-block",{attrs:{title:"Account Information"}},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Email Address")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Email",readonly:""},domProps:{value:t.account.email}}),t._v(" "),a("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("First Name")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"First name",readonly:""},domProps:{value:t.account.first_name}}),t._v(" "),a("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Public Address")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Public address",readonly:""},domProps:{value:t.account.public_address}}),t._v(" "),a("span",{staticClass:"form-text"},[t._v("Your account is an Ethereum wallet, and can be "),a("a",{attrs:{href:"https://etherscan.io/address/"+t.account.public_address}},[t._v("found on the blockchain using the Public Address")])])])])])])])]),t._v(" "),a("c-block",{attrs:{title:"Overview"}},[a("div",{staticClass:"stat-card-container"},[a("div",{staticClass:"stat-card-list"},[a("div",{staticClass:"stat-card"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-id-card"})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v("Identities")]),t._v(" "),a("div",{staticClass:"stat"},[a("div",[t._v("\n                                                12 on your account\n                                            ")])]),t._v(" "),a("p",[t._v("\n                                            Viev and Manage Identities on this account.\n                                        ")])])]),t._v(" "),a("div",{staticClass:"stat-card"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-question-circle"})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v("Support Tickets")]),t._v(" "),a("div",{staticClass:"stat"},[a("div",[a("i",{staticClass:"fa fa-clock"}),t._v("\n                                                35\n                                            ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-exclamation-triangle",staticStyle:{color:"#FADC72"}}),t._v("\n                                                12\n                                            ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-check",staticStyle:{color:"#43C981"}}),t._v("\n                                                5\n                                            ")])]),t._v(" "),a("p",[t._v("\n                                            Viev and Manage Identities on this account.\n                                        ")])])]),t._v(" "),a("div",{staticClass:"stat-card"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-dollar-sign"})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v("Open Payments")]),t._v(" "),a("div",{staticClass:"stat"},[a("div",[t._v("\n                                                $ 2,345,00 om 6 Payments\n                                            ")])]),t._v(" "),a("p",[t._v("\n                                            Viev and Manage Identities on this account.\n                                        ")])])]),t._v(" "),a("div",{staticClass:"stat-card"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-users"})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v("User Activity")]),t._v(" "),a("div",{staticClass:"stat"},[a("div",[a("i",{staticClass:"fas fa-circle",staticStyle:{color:"#43C981"}}),t._v("\n                                                3\n                                            ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-circle",staticStyle:{color:"#FADC72"}}),t._v("\n                                                1\n                                            ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-circle",staticStyle:{color:"#F75D5D"}}),t._v("\n                                                0\n                                            ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-circle",staticStyle:{color:"#A2A3BE"}}),t._v("\n                                                5\n                                            ")])]),t._v(" "),a("p",[t._v("\n                                            Viev and Manage Identities on this account.\n                                        ")])])])])])])],1)])])])])},[],!1,null,"b6fd9b50",null);s.default=e.exports}}]);