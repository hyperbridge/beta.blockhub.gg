(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{117:function(a,t){},1259:function(a,t,n){"use strict";var s=n(417);n.n(s).a},1308:function(a,t,n){"use strict";n.r(t);var s=n(457),e={name:"language-dropdown",props:{current_language:Object,languages:Array},components:{"c-country-flag":s.a},data:function(){return{showList:!1}},methods:{toggleList:function(){this.showList=!this.showList},changeLanguage:function(a){this.$emit("change",a),this.toggleList()}}},l=(n(1259),n(0)),r=Object(l.a)(e,function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"language-dropdown"},[n("div",{staticClass:"language-dropdown__current",on:{click:a.toggleList}},[a.current_language?n("c-country-flag",{attrs:{country:a.current_language.code,size:"small"}}):a._e(),a._v(" "),n("span",{staticClass:"language-name"},[a._v("\n            "+a._s(a.current_language?a.current_language.name:"Language")+"\n        ")]),a._v(" "),n("i",{staticClass:"fas ",class:a.showList?"fa-angle-up":"fa-angle-down"})],1),a._v(" "),n("transition",{attrs:{name:"slide-in-top"}},[a.showList?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside.bool",value:a.showList,expression:"showList",modifiers:{bool:!0}}],staticClass:"language-dropdown__list"},[n("ul",{class:{"d-block":a.showList}},a._l(a.languages,function(t,s){return n("li",{key:s,staticClass:"language-dropdown__list-item",on:{click:function(n){a.changeLanguage(t)}}},[n("c-country-flag",{attrs:{country:t.code,size:"small"}}),a._v(" "),n("span",{staticClass:"language-name"},[a._v("\n                        "+a._s(t.name)+" ("+a._s(t.native)+")\n                    ")])],1)}))]):a._e()])],1)},[],!1,null,"7e3039e1",null);t.default=r.exports},417:function(a,t){},457:function(a,t,n){"use strict";n(723);var s={name:"CountryFlag",props:{country:{type:String,required:!0,validator:function(a){return 2===a.length}},size:{type:String,validator:function(a){return"small"===a||"normal"===a||"big"===a}}},computed:{flagIconClass(){return{[`flag ${this.flagIconCountry}`]:!0,[this.flagMargin]:!0}},flagIconCountry(){return`flag-${this.country.toLowerCase()}`},flagWidth(){switch(this.size){case"small":return"16";case"normal":return"32";case"big":return"64";default:return"32"}},flagStyle(){return`transform: scale(calc(${this.flagWidth} / 64));`},flagMargin(){switch(this.size){case"small":return"small-flag";case"normal":return"normal-flag";case"big":return"big-flag";default:return"normal-flag"}}}},e=(n(722),n(0)),l=Object(e.a)(s,function(){var a=this.$createElement;return(this._self._c||a)("span",{class:this.flagIconClass,style:this.flagStyle})},[],!1,null,"4c4e3cee",null);t.a=l.exports},722:function(a,t,n){"use strict";var s=n(117);n.n(s).a},723:function(a,t){}}]);