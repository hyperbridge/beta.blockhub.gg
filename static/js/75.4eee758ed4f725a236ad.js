(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{159:function(t,e){},568:function(t,e,a){"use strict";var r=a(159);a.n(r).a},751:function(t,e,a){"use strict";a.r(e);var r=a(4),s=a.n(r),i=a(8),n={name:"home",computed:{product:function(){return this.$store.state.marketplace.products?this.$store.state.marketplace.products[5]:{}},article:function(){return this.$store.state.news.articles?this.$store.state.news.articles.post1:{}}},methods:s()({updateTitle:function(){this.$store.dispatch("marketplace/updateProductTitle",{id:"5",title:"newww2"}),this.$data.xxx="newww2"}},Object(i.b)(["increment","decrement","incrementIfOdd","incrementAsync"])),components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[a(807)];t.apply(null,e)}.bind(this)).catch(a.oe)}},created:function(){}},c=(a(568),a(0)),o=Object(c.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-layout",[a("div",{staticClass:"content",attrs:{id:"content"}},[a("div",{staticClass:"page-heading"},[a("div",{staticClass:"page-heading__container"},[a("h1",{staticClass:"title"},[t._v("Sitemap")]),t._v(" "),a("p",{staticClass:"caption"},[t._v("Mostly for testing")])])]),t._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card invert"},[a("div",{staticClass:"card-body"},[a("ul",[a("li",[a("a",{attrs:{href:"#/news"}},[t._v("News")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/help"}},[t._v("Help")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/support"}},[t._v("Support")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/changelog"}},[t._v("Changelog")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/store"}},[t._v("Store")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/store/cart"}},[t._v("Store Cart")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/store/checkout"}},[t._v("Store Checkout")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/store/invoices"}},[t._v("Store Invoices")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/store/invoice/1"}},[t._v("Store Invoice #1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/settings"}},[t._v("Settings")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/settings/profile"}},[t._v("Settings > Profile")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/settings/client"}},[t._v("Settings > Client")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/account"}},[t._v("Account")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/account/signup"}},[t._v("Account > Sign Up")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/account/signin"}},[t._v("Account > Sign In")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/account/wallets"}},[t._v("Account > Wallets")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/account/new-wallet"}},[t._v("Account > New Wallet")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/account/identities"}},[t._v("Account > Identities")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/account/new-identity"}},[t._v("Account > New Identity")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/wallet/1"}},[t._v("Wallet #1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/wallet/1/transactions"}},[t._v("Wallet #1 > Transactions")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/wallet/1/tokens"}},[t._v("Wallet #1 > Tokens")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/wallet/1/send"}},[t._v("Wallet #1 > Send")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/wallet/1/receive"}},[t._v("Wallet #1 > Receive")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/identity/1"}},[t._v("Identity #1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/identity/1/assets"}},[t._v("Identity #1 > Digital Assets")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/identity/1/contacts"}},[t._v("Identity #1 > Contacts")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/identity/1/projects"}},[t._v("Identity #1 > Projects")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/identity/1/bounties"}},[t._v("Identity #1 > Bounties")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/product/1"}},[t._v("Product #1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/product/1/community"}},[t._v("Product #1 > Community")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/product/1/projects"}},[t._v("Product #1 > Projects")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/product/1/assets"}},[t._v("Product #1 > Assets")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/community"}},[t._v("Community")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/community/chat"}},[t._v("Community > Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/assets"}},[t._v("Digital Assets")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/asset/1"}},[t._v("Digital Asset #1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/projects"}},[t._v("Projects")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/project/1"}},[t._v("Project #1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/project/1/bounties"}},[t._v("Project #1 > Bounties")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/project/1/discussion"}},[t._v("Project #1 > Discussion")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/project/1/contributers"}},[t._v("Project #1 > Contributers")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/curators"}},[t._v("Curators")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/curator/1"}},[t._v("Curator #1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/developer"}},[t._v("Developer Area")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/developer/new-product"}},[t._v("Developer > New Product")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#/developer/new-asset"}},[t._v("Developer > New Digital Asset")])])])])])])])])])])},[],!1,null,null,null);e.default=o.exports}}]);