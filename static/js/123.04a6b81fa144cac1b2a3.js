(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1060:function(t,e,n){"use strict";var c=n(360);n.n(c).a},1626:function(t,e,n){"use strict";n.r(e);var c=n(11),o={methods:{deleteAccount:function(){c.sendCommand("deleteAccountRequest")},signOut:function(){this.$store.state.application.signedIn=!1,this.$store.dispatch("auth/logout"),this.$router.push({path:"/"})}}},s=(n(1060),n(0)),i=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-layout",{attrs:{navigationKey:"account"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row",staticStyle:{"text-align":"center"}},[n("div",{staticClass:"col"},[n("p",{attrs:{hidden:""}},[t._v("The only way to do this right now is to delete your account. Are you sure?")]),t._v(" "),n("p",[t._v("Are you sure?")]),t._v(" "),n("c-button",{attrs:{hidden:""},on:{click:t.deleteAccount}},[t._v("Delete Account")]),t._v(" "),n("c-button",{on:{click:t.signOut}},[t._v("Sign Out")])],1)])])])},[],!1,null,"53fa0ace",null);e.default=i.exports},360:function(t,e){}}]);