(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1013:function(t,e,s){"use strict";var n=s(330);s.n(n).a},1014:function(t,e,s){"use strict";var n=s(331);s.n(n).a},1657:function(t,e,s){"use strict";s.r(e);var n={components:{},computed:{},methods:{fetchData:function(){var t=this,e=new XMLHttpRequest;e.open("GET",this.sheetUrl),e.onload=function(){for(var s in t.entries=JSON.parse(e.responseText),t.entries=t.entries.feed.entry,t.entries){var n=t.entries[s];n.gsx$address.$t,n.gsx$amount.$t,n.gsx$approved.$t}},e.send()},whitelist:function(t){}},data:function(){return{sheetUrl:"https://spreadsheets.google.com/feeds/list/1wKotu_xf0Ye2dh6PsJUJSbpXTSG7BcBlwJlScfI5Sbg/1/public/values?alt=json",entries:[],allAddresses:[],newAddresses:[]}},created:function(){!function t(){setTimeout(t,1e4)}()}},i=(s(1014),s(1013),s(0)),o=Object(i.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-layout",{attrs:{showLeftPanel:!1,showRightPanel:!1}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mb-4"},[s("h2",[t._v("Verification Assistant")]),t._v(" "),s("p",[t._v("\n                Let's do this.\n            ")]),t._v(" "),s("div",{staticClass:"input-group mb-4"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v("\n                        URL\n                    ")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sheetUrl,expression:"sheetUrl"}],ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Google Sheet URL..."},domProps:{value:t.sheetUrl},on:{input:function(e){e.target.composing||(t.sheetUrl=e.target.value)}}}),t._v(" "),s("c-button",{on:{click:t.fetchData}},[t._v("Update")])],1),t._v(" "),s("div",t._l(t.entries,function(e,n){return"YES"!==e.gsx$approved.$t?s("div",{key:n,staticClass:"col-md-4 entry"},[s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.gsx$address.$t)+" : "+t._s(e.gsx$amount.$t))]),t._v(" "),s("c-button",{on:{click:function(s){t.whitelist(e.gsx$address.$t)}}},[t._v("Whitelist")])],1)]):t._e()}))])])])},[],!1,null,"367b7b26",null);e.default=o.exports},330:function(t,e){},331:function(t,e){}}]);