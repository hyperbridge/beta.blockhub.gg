(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1101:function(t,s,i){"use strict";var e=i(323);i.n(e).a},1102:function(t,s,i){"use strict";var e=i(324);i.n(e).a},1334:function(t,s,i){"use strict";i.r(s);i(54);var e=i(16),a=i(1),n=i.n(a),c={name:"game-description",props:["game"],components:{"c-tags":function(t){return i.e(8).then(function(){var s=[i(1278)];t.apply(null,s)}.bind(this)).catch(i.oe)},"c-swiper":e.swiper,"c-slide":e.swiperSlide},data:function(){return{sliderOptions:{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0}}}},computed:{expires_date:function(){return n()(this.game.expires).format("Do MMM YYYY")}}},r=(i(1102),i(1101),i(0)),o=Object(r.a)(c,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"game-description"},[i("div",{staticClass:"game-description__carousel"},[i("div",{staticClass:"slider-dots"},[i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})]),t._v(" "),i("c-swiper",{staticClass:"custom-dots-top carousel-full-height",attrs:{options:t.sliderOptions}},t._l(t.game.images,function(t,s){return i("c-slide",{key:s},[i("c-img",{attrs:{src:t}})],1)}))],1),t._v(" "),i("div",{staticClass:"game-description__info"},[i("h3",[t._v(t._s(t.game.title))]),t._v(" "),i("p",[t._v(t._s(t.game.description))]),t._v(" "),i("c-tags",{attrs:{tags:t.game.tags||[]}}),t._v(" "),i("div",{staticClass:"game-description__info--bottom"},[i("div",{staticClass:"text"},[i("h4",[t._v("Get all for only")]),t._v(" "),i("small",[t._v("Expires "+t._s(t.expires_date))])]),t._v(" "),i("div",[i("a",{staticClass:"btn-price",attrs:{href:"#3"}},[i("span",{staticClass:"price"},[t._v(t._s(t._f("convertCurrency")(t.game.price)))]),t._v(" "),i("span",{staticClass:"name"},[t._v("BUY NOW")])])])])],1)])},[],!1,null,"27e42951",null);s.default=o.exports},323:function(t,s){},324:function(t,s){}}]);