(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1638:function(e,t,n){"use strict";n.r(t);var r=n(6),s=n.n(r),i=n(8),a=n.n(i),u=n(1),o=n.n(u),c={props:["offersMap","asset","profile","offerId"],components:{"c-user":function(e){return n.e(214).then(function(){var t=[n(1464)];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{value:0,errors:[]}},methods:{createBid:function(){var e=this;return a()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.errors=[],e.value<e.minValue&&e.errors.push("Minimum bid value for this offer is "+e.minValue),e.$store.dispatch("createRelation",["assets/offers/bids",e.offerId,{value:e.value,user:e.profile,createdAt:o()()}]),t.next=5,e.$nextTick();case 5:e.value=e.minValue;case 6:case"end":return t.stop()}},t,e)}))()}},computed:{offer:function(){return this.$store.getters["assets/offers"][this.offerId]},minValue:function(){var e=this.offer;if(!e||!e.bids.length)return 0;var t=e.bids[e.bids.length-1].value;return Math.round(100*(t+.05*t))/100}},mounted:function(){this.value=this.minValue}},f=(n(822),n(0)),l=Object(f.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.offer?e.offer.bids.length?n("div",[n("table",{staticClass:"bids-table"},[e._m(0),e._v(" "),n("tbody",e._l(e.offer.bids,function(t){return n("tr",{key:t.id},[n("td",[n("c-user",{attrs:{user:t.user}})],1),e._v(" "),n("td",[n("span",{staticClass:"bid-price"},[e._v("\n                            "+e._s(t.value)+"\n                        ")]),e._v("$\n                    ")]),e._v(" "),n("td",[e._v(e._s(e._f("customDate")(t.createdAt,"dddd, DD MMMM, HH:MM:SS")))])])}))])]):n("p",[e._v("\n        This offer doesn't contain any bids yet.\n    ")]):n("p",[e._v("\n        Offer with id "+e._s(e.offerId)+" doesn't exist.\n    ")]),e._v(" "),n("div",{staticClass:"create-bid"},[n("h3",[e._v("Create new bid")]),e._v(" "),e.errors.length?n("ul",e._l(e.errors,function(t,r){return n("li",{key:r,domProps:{textContent:e._s(t)}})})):e._e(),e._v(" "),n("label",[e._v("\n            Bid value\n            "),n("c-input",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("c-button",{attrs:{size:"md"},on:{click:function(t){e.createBid()}}},[e._v("\n            Create bid\n        ")])],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("User")]),this._v(" "),t("th",[this._v("Price")]),this._v(" "),t("th",[this._v("Date")])])])}],!1,null,"e130331a",null);t.default=l.exports},180:function(e,t){},822:function(e,t,n){"use strict";var r=n(180);n.n(r).a}}]);