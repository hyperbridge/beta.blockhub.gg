(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1313:function(e,t,a){"use strict";var s=a(415);a.n(s).a},1517:function(e,t,a){"use strict";a.r(t);var s={props:{id:String,type:String,user:{img:String,name:String,wallet:String},status:{type:String,default:"success",validator:function(e){return["info","success","warning","danger"].includes(e)}},iconColor:String,iconClass:String,previewMode:Boolean,removing:Boolean},methods:{copyToClipboard:function(e){BlockHub.Bridge.sendCommand("writeToClipboard",e),this.$snotify.success("Address copied to clipboard")}}},i=(a(1313),a(0)),r=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profile-block",class:{"preview-mode":e.previewMode}},[a("c-loading",{attrs:{enabled:e.removing}}),e._v(" "),e.removing?e._e():a("div",{staticClass:"profile-block__user-data"},[e.previewMode?a("div",{staticClass:"user-data__icon",class:{verified:e.user.verified},attrs:{hidden:""}},[a("i",{staticClass:"fas",class:{"fa-check":e.user.verified,"fa-times":!e.user.verified}})]):e._e(),e._v(" "),e.previewMode?a("div",{staticClass:"user-data__avatar"},[a("a",{staticClass:"user-data__avatar-upload-btn",attrs:{href:"#/profiles/"+e.user.id}},[e.user.img?a("c-img",{attrs:{src:e.user.img}}):a("c-img",{attrs:{src:"../../../../static/img/user.png"}})],1)]):e._e(),e._v(" "),e.previewMode?e._e():a("div",{staticClass:"user-data__avatar"},[e.user.img?a("c-img",{attrs:{src:"../../../../static/img/user.png"}}):a("a",{staticClass:"user-data__avatar-upload-btn",attrs:{href:"#"}},[a("c-img",{attrs:{src:"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxOS45ODIgMzE5Ljk4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE5Ljk4MiAzMTkuOTgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTIzNC45OTEsMzE5Ljk4MmMyLjYxOCwwLDUuMjItMS4wNzgsNy4wNzEtMi45MjlzMi45MjktNC40NTMsMi45MjktNy4wNzF2LTE0MGg2NSAgIGMzLjkyMi0wLjAwOCw3LjcyMS0yLjU1Miw5LjIyMS02LjE3NnMwLjYxLTguMTA5LTIuMTU5LTEwLjg4NmwtMTUwLTE1MEMxNjUuMjAyLDEuMDc0LDE2Mi42MDQsMCwxNTkuOTkxLDAgICBjLTIuNjE0LDAtNS4yMTIsMS4wNzQtNy4wNjIsMi45MmwtMTUwLDE1MGMtMi43NjksMi43NzctMy42NTksNy4yNjMtMi4xNTksMTAuODg2YzEuNSwzLjYyNCw1LjI5OSw2LjE2OCw5LjIyMSw2LjE3Nmg2NXYxNDAgICBjMCwyLjYxOCwxLjA3OCw1LjIyLDIuOTI5LDcuMDcxczQuNDUzLDIuOTI5LDcuMDcxLDIuOTI5SDIzNC45OTF6IiBmaWxsPSIjNjQ3M2Y0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="}})],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[a("input",{directives:[{name:"focus",rawName:"v-focus",value:!e.previewMode,expression:"!previewMode"}],staticClass:"form-control margin-bottom-5",attrs:{type:"text",name:"profile_name",placeholder:"Profile name",readonly:e.previewMode},domProps:{value:e.user.name},on:{input:function(t){e.$emit("update:name",t.target.value)}}}),e._v(" "),"user"===e.user.role?a("p",[a("em",[e._v("Gamer")])]):e._e(),e._v(" "),"developer"===e.user.role?a("p",[a("em",[e._v("Developer")])]):e._e(),e._v(" "),"curator"===e.user.role?a("p",[a("em",[e._v("Curator")])]):e._e()])]),e._v(" "),a("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"BADGES",expression:"'BADGES'"}],staticClass:"profile-block__unknown-blk"},[e._l(4,function(e){return a("button",{key:e,staticClass:"btn"},[a("i",{staticClass:"fas fa-plus"})])}),e._v(" "),e.previewMode?a("div",{staticClass:"counts"},[e._m(0),e._v(" "),e._m(1)]):e._e()],2),e._v(" "),a("div",{staticClass:"walletNumber",attrs:{hidden:""}},[a("input",{staticClass:"form-control",attrs:{type:"text",name:"walletNumber",placeholder:"Public address",readonly:"readonly"},domProps:{value:e.user.address},on:{input:function(t){e.$emit("update:wallet",t.target.value)}}}),e._v(" "),a("button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"BADGES",expression:"'BADGES'"}],on:{click:function(t){e.copyToClipboard(e.user.address)}}},[a("i",{class:"fas fa-"+(e.previewMode?"copy":"redo-alt")})])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[this._v("\n                0 "),t("i",{staticClass:"fas fa-long-arrow-alt-down"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",[this._v("\n                0 "),t("i",{staticClass:"fas fa-long-arrow-alt-up"})])}],!1,null,"7bfa6ec0",null);t.default=r.exports},415:function(e,t){}}]);