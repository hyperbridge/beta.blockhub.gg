(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1261:function(e,t,i){"use strict";i.r(t);var n=i(54),a=i.n(n),o={name:"screen-gallery",props:{main:{type:String},items:{type:Array,required:!0},name_url:String,video_url:String},components:{"c-modal":function(e){return i.e(168).then(function(){var t=[i(1283)];e.apply(null,t)}.bind(this)).catch(i.oe)},"c-images-explorer":function(e){return i.e(229).then(function(){var t=[i(1361)];e.apply(null,t)}.bind(this)).catch(i.oe)}},data:function(){return{active_item:0,random_item:0,show_modal:!1,interval:null,run_slideshow:!0,play_video:!1}},methods:{slideshow:function(){var e=this;this.interval=setInterval(function(){if(e.items&&e.items.length){e.active_item<e.items.length-1?e.active_item++:e.active_item=0;var t=a()(e.$refs["thumb-"+e.active_item],1)[0],i=e.$refs["thumb-nav"];e.scrollParentToChild(i,t)}},4e3)},enableSlideshow:function(e){clearInterval(this.interval),this.run_slideshow=e,e&&!this.play_video&&this.slideshow()},enableVideoPlay:function(){this.enableSlideshow(!1),this.play_video=!0},changeActiveItem:function(e){this.play_video&&(this.play_video=!1),this.active_item=e},mouseOut:function(){this.play_video||this.enableSlideshow(!0)},scrollParentToChild:function(e,t){if(e){var i=e.getBoundingClientRect(),n=e.clientHeight,a=(e.clientWidth,t.getBoundingClientRect());a.top>=i.top&&a.top<=i.top+n||(e.scrollTop=a.top+e.scrollTop-i.top),status&&this.slideshow()}},restartGallery:function(){var e=this;this.active_item=0,this.play_video=!1,setTimeout(function(){e.video_url?(e.random_item=Math.floor(Math.random()*e.items.length),e.enableVideoPlay()):e.enableSlideshow(!0)},50)}},mounted:function(){this.restartGallery()},beforeDestroy:function(){this.enableSlideshow(!1)},watch:{$route:"restartGallery"}},s=(i(796),i(0)),l=Object(s.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"screen-gallery",on:{mouseover:function(t){e.enableSlideshow(!1)},mouseout:function(t){e.mouseOut()}}},[i("div",{staticClass:"screen-gallery__main-img"},[i("c-icon",{directives:[{name:"show",rawName:"v-show",value:!e.run_slideshow&&!e.play_video,expression:"!run_slideshow && !play_video"}],attrs:{name:"expand"}}),e._v(" "),e.play_video?e.play_video?i("video",{attrs:{controls:"",autoplay:""}},[i("source",{attrs:{src:e.video_url,type:"video/mp4"}})]):e._e():i("c-img",{attrs:{src:e.items[e.active_item]},on:{click:function(t){e.show_modal=!0}}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.run_slideshow,expression:"run_slideshow"}],staticClass:"screen-gallery__progress-bar"})],1),e._v(" "),i("ul",{ref:"thumb-nav",staticClass:"screen-gallery__thumb-nav"},[e.video_url?i("li",{staticClass:"thumb-nav__video-thumb",class:{"inactive-item":!e.play_video},style:{backgroundSize:"cover",background:"black url("+e.items[e.random_item]+") no-repeat center"},on:{click:function(t){e.enableVideoPlay()}}},[i("c-icon",{attrs:{name:"play"}})],1):e._e(),e._v(" "),e._l(e.items,function(t,n){return i("li",{key:n,ref:"thumb-"+n,refInFor:!0},[i("c-img",{class:{"inactive-item":n!==e.active_item||e.play_video},attrs:{src:t},on:{click:function(t){e.changeActiveItem(n)}}})],1)})],2),e._v(" "),e.show_modal?i("c-modal",{on:{close:function(t){e.show_modal=!1}}},[i("c-images-explorer",{attrs:{images:e.items,start_from:e.active_item}})],1):e._e()],1)},[],!1,null,"bcbaac2e",null);t.default=l.exports},241:function(e,t){},796:function(e,t,i){"use strict";var n=i(241);i.n(n).a}}]);