(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{157:function(t,e){},564:function(t,e,s){"use strict";var a=s(157);s.n(a).a},860:function(t,e,s){"use strict";s.r(e);var a={name:"wallets",data:function(){return{new_wallets:{id:"",name:"--",icon:"",short_name:"--",count:"--",history:[{time:"00:00",percent:"0.00",direction:"up"},{time:"00:00",percent:"0.00",direction:"up"},{time:"00:00",percent:"0.00",direction:"up"}],wallet_number:"xxxxxxxxxxxxxxxxxxxx",preferred_switcher:!0},set_new_wallets:!1,set_new_wallets_step_1:!1,set_new_wallets_step_2:!1,search_blk:!1,currency_choices:[{name:"Bitcoin",short_name:"BTC"},{name:"Ethereum",short_name:"ETH"},{name:"Ripple",short_name:"XRP"},{name:"Cardano",short_name:"CDA"},{name:"Thron",short_name:"TRX"},{name:"Bitcoin Cash",short_name:"BCH"}]}},components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[s(881)];t.apply(null,e)}.bind(this)).catch(s.oe)}},computed:{wallets:function(){return this.$store.state.application.wallets}},methods:{copyWalletNumber:function(t){alert("You have copy wallet number - "+t)},addNewWallet:function(){this.set_new_wallets=!0,this.set_new_wallets_step_1=!0},nextStep:function(){this.set_new_wallets_step_1=!1,this.set_new_wallets_step_2=!0},generateNewWalletNumber:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=0;s<25;s++)t+=e.charAt(Math.floor(Math.random()*e.length));this.new_wallets.wallet_number=t},showCurrencyList:function(){this.search_blk=!0},choseCurrency:function(t,e){this.search_blk=!1,this.new_wallets.name=t,this.new_wallets.short_name=e,this.generateNewWalletNumber()}}},i=(s(564),s(0)),l=Object(i.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-layout",{attrs:{navigationKey:"account"}},[s("div",{staticClass:"content",attrs:{id:"content"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("ul",{staticClass:"nav nav-tabs justify-content-between"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#"}},[t._v("Overview")])])]),t._v(" "),s("div",{staticClass:"filter-line"},[s("div",{staticClass:"filter-line__search"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Term Search"}})]),t._v(" "),s("div",{staticClass:"filter-line__filter"},[t._v("\n                            Filter by:\n                            "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"btn dropdown-toggle",attrs:{href:"#",role:"button",id:"filtering_type","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                                    Type\n                                ")]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuLink"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),t._v(" "),s("a",{staticClass:"btn btn-sm btn-danger text-uppercase font-weight-bold",attrs:{href:"#3"}},[t._v("clear "),s("i",{staticClass:"fas fa-times"})]),t._v(" "),s("a",{staticClass:"btn btn-sm btn-info text-uppercase font-weight-bold",attrs:{href:"#3"}},[t._v("more filters")])]),t._v(" "),s("div",{staticClass:"filter-line__sorting"},[t._v("\n                            Sort by:\n                            "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"btn dropdown-toggle",attrs:{href:"#",role:"button",id:"sorting_value","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                                    Value\n                                ")]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuLink"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),t._v(" "),s("a",{staticClass:"btn btn-link",attrs:{href:"#3"}},[s("i",{staticClass:"fas fa-sort-numeric-up"})]),t._v(" "),s("a",{staticClass:"btn btn-link",attrs:{href:"#3"}},[s("i",{staticClass:"fas fa-sort-amount-up"})])])]),t._v(" "),s("div",{staticClass:"wallets-list"},[t._l(t.wallets,function(e,a){return s("div",{key:a,staticClass:"wallet-item"},[s("a",{staticClass:"wallet-item__info",attrs:{href:"/#/wallet/"+e.id}},[s("div",{staticClass:"wallet-item__head"},[s("div",{staticClass:"wallet-item__name",class:{preferred:e.preferred_switcher}},[s("i",{staticClass:"fab fa-bitcoin"}),t._v("\n                                        "+t._s(e.name)+"\n                                    ")]),t._v(" "),s("div",{staticClass:"wallet-item__count"},[s("span",[t._v("\n                                            "+t._s(e.short_name)+"\n                                        ")]),t._v(" "),s("span",[t._v("\n                                            "+t._s(e.count)+"\n                                        ")])])]),t._v(" "),s("div",{staticClass:"wallet-item__body"},[s("div",{staticClass:"wallet-item__graph"}),t._v(" "),s("div",{staticClass:"wallet-item__history"},[s("ul",t._l(e.history,function(e,a){return s("li",{key:a,class:e.direction},[s("span",{staticClass:"time"},[t._v("\n                                                    "+t._s(e.time)+"\n                                                ")]),t._v(" "),s("span",{staticClass:"percent"},[t._v("\n                                                    "+t._s(e.percent)+"%\n                                                ")]),t._v(" "),s("span",{staticClass:"icon"},["up"===e.direction?s("i",{staticClass:"fas fa-arrow-up"}):s("i",{staticClass:"fas fa-arrow-down"})])])}))]),t._v(" "),s("div",{staticClass:"wallet-item__wallet_address",on:{click:function(s){t.copyWalletNumber(e.wallet_number)}}},[s("span",[t._v(t._s(e.wallet_number))]),t._v(" "),s("i",{staticClass:"fas fa-copy"})])])]),t._v(" "),s("div",{staticClass:"wallet-item__footer"},[s("div",{staticClass:"wallet-item__preferred_switcher"},[s("label",{staticClass:"switch switch-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.preferred_switcher,expression:"wallet.preferred_switcher"}],attrs:{type:"checkbox",name:"preeferred",checked:"",value:"0"},domProps:{checked:Array.isArray(e.preferred_switcher)?t._i(e.preferred_switcher,"0")>-1:e.preferred_switcher},on:{change:function(s){var a=e.preferred_switcher,i=s.target,l=!!i.checked;if(Array.isArray(a)){var n=t._i(a,"0");i.checked?n<0&&t.$set(e,"preferred_switcher",a.concat(["0"])):n>-1&&t.$set(e,"preferred_switcher",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(e,"preferred_switcher",l)}}}),t._v(" "),s("span",[t._v("Preferred")])])]),t._v(" "),s("div",{staticClass:"wallet-item__action"},[s("a",{staticClass:"btn btn-sm btn-info"},[t._v("\n                                        Send\n                                        "),s("i",{staticClass:"fas fa-arrow-right"})])])])])}),t._v(" "),t.set_new_wallets?t._e():s("div",{staticClass:"wallet-item empty-item new-wallet",on:{click:t.addNewWallet}},[s("div",{staticClass:"empty-overlay"},[s("i",{staticClass:"fas fa-plus"}),t._v("\n                                New Wallet\n                            ")])]),t._v(" "),t.set_new_wallets?s("div",{staticClass:"wallet-item"},[t.search_blk?t._e():s("div",{staticClass:"wallet-item__info"},[t.set_new_wallets_step_1?s("div",{staticClass:"wallet-item__head"},[s("div",{staticClass:"wallet-item__name"},[s("a",{staticClass:"btn btn-sm wallet-item__toggle-search",attrs:{href:"#3"},on:{click:t.showCurrencyList}},[s("i",{staticClass:"fas fa-angle-down"})]),t._v("\n                                        "+t._s(t.new_wallets.name)+"\n                                    ")]),t._v(" "),s("div",{staticClass:"wallet-item__count"},[s("span",[t._v("\n                                            "+t._s(t.new_wallets.short_name)+"\n                                        ")]),t._v(" "),s("span",[t._v("\n                                            "+t._s(t.new_wallets.count)+"\n                                        ")])])]):t._e(),t._v(" "),t.set_new_wallets_step_2?s("div",{staticClass:"wallet-item__head"},[s("div",{staticClass:"wallet-item__name",class:{preferred:t.new_wallets.preferred_switcher}},[s("i",{staticClass:"fab fa-bitcoin"}),t._v("\n                                        "+t._s(t.new_wallets.name)+"\n                                    ")]),t._v(" "),s("div",{staticClass:"wallet-item__count"},[s("span",[t._v("\n                                            "+t._s(t.new_wallets.short_name)+"\n                                        ")]),t._v(" "),s("span",[t._v("\n                                            "+t._s(t.new_wallets.count)+"\n                                        ")])])]):t._e(),t._v(" "),s("div",{staticClass:"wallet-item__body"},[s("div",{staticClass:"wallet-item__graph"}),t._v(" "),s("div",{staticClass:"wallet-item__history"},[s("ul",t._l(t.new_wallets.history,function(e,a){return s("li",{key:a,class:e.direction},[s("span",{staticClass:"time"},[t._v("\n                                                    "+t._s(e.time)+"\n                                                ")]),t._v(" "),s("span",{staticClass:"percent"},[t._v("\n                                                    "+t._s(e.percent)+"%\n                                                ")]),t._v(" "),s("span",{staticClass:"icon"},["up"===e.direction?s("i",{staticClass:"fas fa-arrow-up"}):s("i",{staticClass:"fas fa-arrow-down"})])])}))]),t._v(" "),s("div",{staticClass:"wallet-item__wallet_address"},[s("span",{attrs:{id:"new_wallet_number"}},[t._v(t._s(t.new_wallets.wallet_number))]),t._v(" "),t.set_new_wallets_step_1?s("i",{staticClass:"fas fa-redo",staticStyle:{color:"#c25a5c"},on:{click:t.generateNewWalletNumber}}):s("i",{staticClass:"fas fa-copy",on:{click:function(e){t.copyWalletNumber(t.new_wallets.wallet_number)}}})])])]),t._v(" "),t.search_blk?s("div",{staticClass:"wallet-item__search-blk"},[s("div",{staticClass:"input-group input-group-sm"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-search"})])])]),t._v(" "),s("ul",t._l(t.currency_choices,function(e,a){return s("li",{key:a,on:{click:function(s){t.choseCurrency(e.name,e.short_name)}}},[s("div",{staticClass:"float-left"},[s("i",{staticClass:"fab fa-btc"}),t._v("\n                                            "+t._s(e.short_name)+"\n                                        ")]),t._v(" "),s("div",{staticClass:"float-right"},[t._v("\n                                            "+t._s(e.name)+"\n                                        ")])])}))]):t._e(),t._v(" "),s("div",{staticClass:"wallet-item__footer"},[s("div",{staticClass:"wallet-item__preferred_switcher"},[s("label",{staticClass:"switch switch-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.new_wallets.preferred_switcher,expression:"new_wallets.preferred_switcher"}],attrs:{type:"checkbox",name:"preeferred",checked:"",value:"0"},domProps:{checked:Array.isArray(t.new_wallets.preferred_switcher)?t._i(t.new_wallets.preferred_switcher,"0")>-1:t.new_wallets.preferred_switcher},on:{change:function(e){var s=t.new_wallets.preferred_switcher,a=e.target,i=!!a.checked;if(Array.isArray(s)){var l=t._i(s,"0");a.checked?l<0&&t.$set(t.new_wallets,"preferred_switcher",s.concat(["0"])):l>-1&&t.$set(t.new_wallets,"preferred_switcher",s.slice(0,l).concat(s.slice(l+1)))}else t.$set(t.new_wallets,"preferred_switcher",i)}}}),t._v(" "),s("span",[t._v("Preferred")])])]),t._v(" "),t.set_new_wallets_step_1?s("div",{staticClass:"wallet-item__action"},[s("a",{staticClass:"btn btn-sm btn-success",on:{click:t.nextStep}},[t._v("\n                                        Done\n                                        "),s("i",{staticClass:"fas fa-check"})])]):s("div",{staticClass:"wallet-item__action"},[s("a",{staticClass:"btn btn-sm btn-info"},[s("i",{staticClass:"fas fa-list ml-0"})]),t._v(" "),s("a",{staticClass:"btn btn-sm btn-info"},[s("i",{staticClass:"fas fa-cog ml-0"})]),t._v(" "),s("a",{staticClass:"btn btn-sm btn-info"},[t._v("\n                                        Send\n                                        "),s("i",{staticClass:"fas fa-arrow-right"})])])])]):t._e()],2)])])])])])},[],!1,null,"4a02a1a8",null);e.default=l.exports}}]);