(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1137:function(t,s,i){"use strict";var e=i(360);i.n(e).a},1249:function(t,s,i){"use strict";i.r(s);function e(t){return(parseInt(t,10)<10?"0":"")+t}var n={data:function(){return{hours:"",minutes:"",seconds:"",divider:"",format:""}},methods:{updateTime:function(){var t=new Date,s=t.getMinutes(),i=t.getSeconds(),n=t.getHours(),c=n>=12?"PM":"AM";this.hours=n%12||12,this.minutes=e(s),this.seconds=e(i),this.format=c,this.divider=":"===this.divider?"":":"}},created:function(){var t=this;setInterval(function(){return t.updateTime()},1e3)}},c=(i(1137),i(0)),r=Object(c.a)(n,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"clock"},[i("ul",[i("li",{staticClass:"clock__hours"},[t._v(t._s(t.hours))]),t._v(" "),i("li",{staticClass:"clock__divider"},[t._v(t._s(t.divider))]),t._v(" "),i("li",{staticClass:"clock__minutes"},[t._v(t._s(t.minutes))]),t._v(" "),i("li",{staticClass:"clock__format"},[t._v(t._s(t.format))])])])},[],!1,null,"73e30bcb",null);s.default=r.exports},360:function(t,s){}}]);