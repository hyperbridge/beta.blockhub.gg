(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{178:function(t,i){},604:function(t,i,s){"use strict";var c=s(178);s.n(c).a},879:function(t,i,s){"use strict";s.r(i);var c={components:{"c-layout":function(t){return Promise.resolve().then(function(){var i=[s(881)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-block":function(t){return s.e(109).then(function(){var i=[s(751)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-article-item":function(t){return s.e(138).then(function(){var i=[s(801)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-topic-item":function(t){return s.e(137).then(function(){var i=[s(802)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-list-item":function(t){return s.e(136).then(function(){var i=[s(803)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-card":function(t){return s.e(135).then(function(){var i=[s(762)];t.apply(null,i)}.bind(this)).catch(s.oe)}},data:function(){return{}},methods:{showByTopic:function(t,i){for(var s=[],c=0;c<t.length;c++)t[c].topic.includes(i)&&s.push(t[c]);return s}},computed:{topics:function(){return this.$store.state.marketplace.help.topics},articles:function(){return this.$store.state.marketplace.help.articles}}},a=(s(604),s(0)),e=Object(a.a)(c,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("c-layout",{attrs:{navigationKey:"help"}},[s("div",{staticClass:"content",attrs:{id:"content"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 text-center"},[s("h2",{staticClass:"m-0 p-o"},[t._v("Welcome to BlockHub Support")])]),t._v(" "),s("div",{staticClass:"col-12 col-lg-9 text-center"},[s("div",{staticClass:"input-group input-group-lg my-5"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search query","aria-label":"Search query","aria-describedby":"button-addon"}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("c-button",{staticClass:"px-4",staticStyle:{"border-radius":"0 5px 5px 0"},attrs:{status:"info",icon_hide:""}},[t._v("Search")])],1)])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[t.articles?s("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Trending articles"}},[s("div",{staticClass:"article-list"},t._l(t.showByTopic(t.articles,0),function(i,c){return s("c-article-item",{key:c,class:{"mb-0":t.articles.length===c+1},attrs:{link:"/#/help/0/article/"+i.slug}},[t._v("\n                                "+t._s(i.title)+"\n                            ")])}))]):t._e(),t._v(" "),s("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Topics"}},[s("div",{staticClass:"topics-list"},t._l(t.topics,function(i,c){return s("c-topic-item",{key:c,staticClass:"padding-10",attrs:{link:"/#/help/"+i.id,icon:i.icon}},[t._v("\n                                "+t._s(i.label)+"\n                            ")])}))])],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6 margin-bottom-30"},[s("c-block",{attrs:{title:"Changelog"}},[s("div",{staticClass:"simple-list"},t._l(t.showByTopic(t.articles,5),function(i,c){return s("c-list-item",{key:c,class:{"mb-0":t.articles.length===c+1},attrs:{link:"/#/help/5/article/"+i.slug}},[t._v("\n                                "+t._s(i.title)+"\n                                ")])}))])],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6 margin-bottom-30"},[s("c-block",{attrs:{title:"Common issues"}},[s("div",{staticClass:"simple-list"},t._l(t.showByTopic(t.articles,7),function(i,c){return s("c-list-item",{key:c,class:{"mb-0":t.articles.length===c+1},attrs:{link:"/#/help/7/article/"+i.slug}},[t._v("\n                                "+t._s(i.title)+"\n                            ")])}))])],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6"},[s("c-card",{staticClass:"text-center"},[s("h4",{staticClass:"h2"},[t._v("Community")]),t._v(" "),s("p",[t._v("Engage with a community of passionate experts to get the answers you need")]),t._v(" "),s("c-button",{staticClass:"width-auto margin-top-10",attrs:{icon_hide:"",href:"https://github.com/hyperbridge",target:"_blank"}},[t._v("Visit GitHub")])],1)],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6"},[s("c-card",{staticClass:"text-center"},[s("h4",{staticClass:"h2"},[t._v("BlockHub Support")]),t._v(" "),s("p",[t._v("Create a support ticket and our support experts will get back to you")]),t._v(" "),s("c-button",{staticClass:"width-auto margin-top-10",attrs:{status:"info",icon_hide:""}},[t._v("Create a ticket")])],1)],1)])])])])},[],!1,null,"0ded3b82",null);i.default=e.exports}}]);