(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1503:function(t,n,e){"use strict";e.r(n);var i={props:["projectID","postID"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var n=[e(1538)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-block":function(t){return Promise.resolve().then(function(){var n=[e(1437)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-tags-list":function(t){return e.e(9).then(function(){var n=[e(1376)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-badges":function(t){return e.e(197).then(function(){var n=[e(1334)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{id:this.projectID}},computed:{project:function(){var t=null;return"new"===this.id&&(t=this.$store.state.funding.default_project),this.$store.state.funding.projects&&this.$store.state.funding.projects[this.id]&&(t=this.$store.state.funding.projects[this.id]),t&&t.images&&t.images.header&&(window.document.getElementById("header-bg").style["background-image"]="url("+t.images.header+")"),t},post:function(){var t=this;return this.project.updates.find(function(n){return n.id===Number(t.postID)&&n})}}},s=(e(838),e(0)),o=Object(s.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-layout",{attrs:{navigationKey:"project"}},[e("div",{staticClass:"container-fluid"},[t.post?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[t._v("\n                        "+t._s(t.post.title)+"\n                    ")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.post.text)}})])]):e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h4",[t._v("\n                        Something went wrong\n                    ")])])])])])},[],!1,null,"55abe428",null);n.default=o.exports},209:function(t,n){},838:function(t,n,e){"use strict";var i=e(209);e.n(i).a}}]);