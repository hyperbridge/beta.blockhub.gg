(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1142:function(e,t,s){"use strict";var a=s(363);s.n(a).a},1237:function(e,t,s){"use strict";s.r(t);var a={name:"user-card",props:{id:String,type:String,user:{img:String,name:String,wallet:String},status:{type:String,default:"success",validator:function(e){return["info","success","warning","danger"].includes(e)}},iconColor:String,iconClass:String,previewMode:Boolean},methods:{copyToClipboard:function(e){BlockHub.Bridge.sendCommand("writeToClipboard",e),this.$snotify.success("Address copied to clipboard")}}},i=(s(1142),s(0)),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"identity-block",class:{"preview-mode":e.previewMode}},[s("div",{staticClass:"identity-block__user-data"},[e.previewMode?s("div",{staticClass:"user-data__icon",class:{verified:e.user.verified},attrs:{hidden:""}},[s("i",{staticClass:"fas",class:{"fa-check":e.user.verified,"fa-times":!e.user.verified}})]):e._e(),e._v(" "),e.previewMode?s("div",{staticClass:"user-data__avatar"},[s("a",{staticClass:"user-data__avatar-upload-btn",attrs:{href:"/#/identities/"+e.user.id}},[e.user.img?s("c-img",{attrs:{src:e.user.img}}):s("c-img",{attrs:{src:"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"}})],1)]):e._e(),e._v(" "),e.previewMode?e._e():s("div",{staticClass:"user-data__avatar"},[e.user.img?s("c-img",{attrs:{src:"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"}}):s("a",{staticClass:"user-data__avatar-upload-btn",attrs:{href:"#"}},[s("c-img",{attrs:{src:"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxOS45ODIgMzE5Ljk4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE5Ljk4MiAzMTkuOTgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTIzNC45OTEsMzE5Ljk4MmMyLjYxOCwwLDUuMjItMS4wNzgsNy4wNzEtMi45MjlzMi45MjktNC40NTMsMi45MjktNy4wNzF2LTE0MGg2NSAgIGMzLjkyMi0wLjAwOCw3LjcyMS0yLjU1Miw5LjIyMS02LjE3NnMwLjYxLTguMTA5LTIuMTU5LTEwLjg4NmwtMTUwLTE1MEMxNjUuMjAyLDEuMDc0LDE2Mi42MDQsMCwxNTkuOTkxLDAgICBjLTIuNjE0LDAtNS4yMTIsMS4wNzQtNy4wNjIsMi45MmwtMTUwLDE1MGMtMi43NjksMi43NzctMy42NTksNy4yNjMtMi4xNTksMTAuODg2YzEuNSwzLjYyNCw1LjI5OSw2LjE2OCw5LjIyMSw2LjE3Nmg2NXYxNDAgICBjMCwyLjYxOCwxLjA3OCw1LjIyLDIuOTI5LDcuMDcxczQuNDUzLDIuOTI5LDcuMDcxLDIuOTI5SDIzNC45OTF6IiBmaWxsPSIjNjQ3M2Y0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="}})],1)],1),e._v(" "),s("div",{staticStyle:{"text-align":"left"}},[s("input",{staticClass:"form-control margin-bottom-5",attrs:{type:"text",name:"profile_name",placeholder:"Profile name",readonly:e.previewMode},domProps:{value:e.user.name},on:{input:function(t){e.$emit("update:name",t.target.value)}}}),e._v(" "),e.user.developer_id||e.user.curator_id?e._e():s("p",[s("em",[e._v("Gamer")])]),e._v(" "),e.user.developer_id?s("p",[s("em",[e._v("Developer")])]):e._e(),e._v(" "),e.user.curator_id?s("p",[s("em",[e._v("Curator")])]):e._e()])]),e._v(" "),s("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"BADGES",expression:"'BADGES'"}],staticClass:"identity-block__unknown-blk"},[e._l(4,function(e){return s("button",{key:e,staticClass:"btn"},[s("i",{staticClass:"fas fa-plus"})])}),e._v(" "),e.previewMode?s("div",{staticClass:"counts"},[e._m(0),e._v(" "),e._m(1)]):e._e()],2),e._v(" "),s("div",{staticClass:"wallet_number"},[s("input",{staticClass:"form-control",attrs:{type:"text",name:"wallet_number",placeholder:"Public address",readonly:"readonly"},domProps:{value:e.user.public_address},on:{input:function(t){e.$emit("update:wallet",t.target.value)}}}),e._v(" "),s("button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"BADGES",expression:"'BADGES'"}],on:{click:function(t){e.copyToClipboard(e.user.public_address)}}},[s("i",{class:"fas fa-"+(e.previewMode?"copy":"redo-alt")})])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[this._v("\n                0 "),t("i",{staticClass:"fas fa-long-arrow-alt-down"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",[this._v("\n                0 "),t("i",{staticClass:"fas fa-long-arrow-alt-up"})])}],!1,null,"eda2f3f8",null);t.default=r.exports},363:function(e,t){}}]);