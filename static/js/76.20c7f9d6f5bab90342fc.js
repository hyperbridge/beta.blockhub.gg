(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{199:function(t,n){},573:function(t,n,i){"use strict";var s=i(199);i.n(s).a},660:function(t,n,i){"use strict";i.r(n);var s={name:"notification",props:{notification:{type:Object,required:!0}},data:function(){return{show:!0}},methods:{actionOnClose:function(){this.show=!1}},computed:{notif_icon:function(){switch(this.notification.type){case"info":return"info";case"success":return"check-circle";case"warning":return"exclamation-triangle";case"danger":return"times-circle";default:return"cog"}}}},e=(i(573),i(0)),c=Object(e.a)(s,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("transition",{attrs:{name:"custom-classes-transition",mode:"out-in","leave-active-class":"animated bounceOutRight"}},[t.show?i("div",{staticClass:"notif",class:t.notification.type},[i("div",{staticClass:"title"},[i("h5",{staticClass:"text-left",on:{click:function(n){if(n.target!==n.currentTarget)return null;t.$emit("showPopup")}}},[i("i",{class:"fas fa-"+t.notif_icon}),t._v("\n                "+t._s(t.notification.title)+"\n                "),i("div",{staticClass:"close",on:{click:function(n){t.actionOnClose()}}},[i("i",{staticClass:"fas fa-times"})])])]),t._v(" "),i("div",{staticClass:"text"},[t._v("\n            "+t._s(t.notification.text)+"\n        ")])]):t._e()])},[],!1,null,"74f41764",null);n.default=c.exports}}]);