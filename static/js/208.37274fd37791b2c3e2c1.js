(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1128:function(t,s,e){"use strict";e.r(s);var i={props:["product"],components:{"c-tags-list":function(t){return e.e(4).then(function(){var s=[e(1111)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-project-card":function(t){return e.e(22).then(function(){var s=[e(1117)];t.apply(null,s)}.bind(this)).catch(e.oe)}},computed:{projects:function(){return BlockHub.DB.funding.projects.find({target_id:{$eq:this.product.id}})||[]}}},c=(e(703),e(0)),a=Object(c.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"filter d-flex justify-content-between"},[t._m(0),t._v(" "),e("div",[e("c-button",{attrs:{status:"info",icon_hide:""}},[t._v("Suggest Idea")])],1)])]),t._v(" "),e("div",{staticClass:"col-12"},[e("c-block",{attrs:{title:"Top 3 Ideas",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6 col-lg-3"},t._l(t.projects,function(s,i){return e("c-project-card",{key:i,staticClass:"margin-0 w-100",attrs:{image:s.images.medium_tile,description:s.description,funds:s.funds,productImage:t.product.images.medium_tile,productName:t.product.name,productDeveloper:t.product.developer,showGame:!1}})}))])])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group input-group-sm"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),this._v(" "),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-search"})])])])])}],!1,null,"5d80d3c4",null);s.default=a.exports},202:function(t,s){},703:function(t,s,e){"use strict";var i=e(202);e.n(i).a}}]);