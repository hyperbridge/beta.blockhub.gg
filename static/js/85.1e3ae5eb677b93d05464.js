(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1276:function(t,i,e){"use strict";e.r(i);var n=e(4),a=e.n(n),s=e(15),o={components:{"c-layout":function(t){return Promise.resolve().then(function(){var i=[e(1306)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var i=[e(1231)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-user-card":function(t){return e.e(151).then(function(){var i=[e(1215)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-button-arrows":function(t){return e.e(159).then(function(){var i=[e(1108)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-modal-light":function(t){return e.e(199).then(function(){var i=[e(1192)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-checkbox":function(t){return Promise.resolve().then(function(){var i=[e(1274)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-input-searcher":function(t){return e.e(150).then(function(){var i=[e(1086)];t.apply(null,i)}.bind(this)).catch(e.oe)}},data:function(){return{newIdentity:{name:"",wallet:"",img:"/static/img/new-identity.png",default:!1,edit:!1},identityCopy:{},removeIdentity:null,filterPhrase:"",sortAsc:!0}},methods:{setDefault:function(t){this.$store.state.application.account.current_identity=t,this.saveIdentities()},editIdentity:function(t){this.editedIdentity?this.$snotify.warning("You must finish editing the current profile"):t.edit=!0},saveIdentity:function(t){for(var i in t)t[i]=this.identityClone[i];t.edit=!1,this.saveIdentities()},deleteIdentity:function(t){var i=this.removeIdentity;if(i){var e=this.identities.indexOf(i);this.identities.splice(e,1),this.removeIdentity=null}else this.removeIdentity=t;this.saveIdentities()},createIdentity:function(){var t=this,i=this.newIdentity;Math.floor(100*Math.random());s.h("createIdentityRequest").then(function(e){i.id=e.id,i.public_address=e.public_address,t.identities.push(a()({},i,{edit:!0}))})},saveIdentities:function(){this.$store.state.application.account.identities=this.identities,this.$store.dispatch("application/updateState")}},computed:{identities:function(){return this.$store.state.application.account.identities},defaultIdentity:function(){var t=this;return this.identities.find(function(i){return i.id==t.$store.state.application.account.current_identity.id})},editedIdentity:function(){return this.identities.find(function(t){return t.edit})},identityClone:function(){return this.editedIdentity?a()({},this.editedIdentity):{}},isEditing:function(){return this.identities.find(function(t){return t.edit})},filteredIdentities:function(){var t=this;return this.identities.filter(function(i){return i.name.toLowerCase().includes(t.filterPhrase.toLowerCase())}).sort(function(i,e){return i.name>e.name?t.sortAsc?1:-1:0})}}},r=(e(741),e(0)),c=Object(r.a)(o,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("c-layout",{attrs:{navigationKey:"account"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("c-heading-bar",{attrs:{name:"My Profile",showArrows:!1,showBackground:!1}})],1),t._v(" "),e("div",{staticClass:"col-6 margin-bottom-40 my_identity"},[t.defaultIdentity?e("c-user-card",{attrs:{user:t.defaultIdentity,previewMode:!0},on:{updateIdentity:function(i,e){return t.defaultIdentity[i]=e}}}):t.identities.length?e("p",[t._v("\n                        You don't have a default profile.\n                    ")]):e("p",[t._v("\n                        You don't have any profiles yet.\n                    ")])],1),t._v(" "),t.defaultIdentity?e("div",{staticClass:"col-6"},[e("div",{staticClass:"verification-blk"},[e("h3",[t._v("Verify Your Profile")]),t._v(" "),t.defaultIdentity.is_verified?e("div",{staticClass:"status"},[e("i",{staticClass:"fas fa-check"}),t._v("\n                            Verified\n                        ")]):t.defaultIdentity.is_verifying?e("div",{staticClass:"status"},[e("i",{staticClass:"fas fa-hourglass"}),t._v("\n                            Verifying\n                        ")]):e("router-link",{attrs:{to:"/account/verification"}},[t._v("\n                            Click here to verify\n                        ")]),t._v(" "),t.defaultIdentity.is_verified?e("div",{staticClass:"date"},[t._v("\n                            Valid Up To $10,000 USD\n                        ")]):t._e()],1)]):t._e(),t._v(" "),e("div",{staticClass:"col-12 mb-4"},[e("c-button",{attrs:{status:"info",icon:"user-plus"},on:{click:t.createIdentity}},[t._v(" New Profile")])],1),t._v(" "),e("div",{staticClass:"col-12"},[e("c-heading-bar",{attrs:{name:"All Identities",showArrows:!1,showBackground:!1}},[e("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[e("span",{staticClass:"text"},[t._v("Name "),e("c-icon",{attrs:{name:"user"}})],1),t._v(" "),e("c-button-arrows",{attrs:{activeUp:t.sortAsc},on:{clickUp:function(i){t.sortAsc=!0},clickDown:function(i){t.sortAsc=!1}}})],1),t._v(" "),e("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"REPUTATION",expression:"'REPUTATION'"}],staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[e("span",{staticClass:"text"},[t._v("Rating "),e("c-icon",{attrs:{name:"trophy"}})],1),t._v(" "),e("c-button-arrows")],1),t._v(" "),e("div",{staticClass:"additional-action margin-left-20 padding-5",attrs:{slot:"additional-action"},slot:"additional-action"},[e("c-input-searcher",{attrs:{placeholder:"Search"},model:{value:t.filterPhrase,callback:function(i){t.filterPhrase=i},expression:"filterPhrase"}})],1)])],1),t._v(" "),e("transition-group",{staticClass:"profile-picker",attrs:{tag:"div",name:"item",duration:100}},t._l(t.filteredIdentities,function(i){return e("div",{key:i.id,staticClass:"profile-picker__profile",class:{edit:i.edit}},[e("c-user-card",t._b({class:{default:i.id==(t.defaultIdentity&&t.defaultIdentity.id)},attrs:{user:i,previewMode:!i.edit}},"c-user-card",t.identityClone,!1,!0)),t._v(" "),e("div",{staticClass:"profile__action"},[i.edit||i.id==(t.defaultIdentity&&t.defaultIdentity.id)?t._e():e("c-button",{attrs:{status:"info",icon:"check"},on:{click:function(e){t.setDefault(i)}}},[t._v("Set default")]),t._v(" "),i.edit?t._e():e("c-button",{attrs:{status:"share",icon:"pen"},on:{click:function(e){t.editIdentity(i)}}},[t._v("Edit")]),t._v(" "),i.edit?e("c-button",{attrs:{status:"share",icon:"pen"},on:{click:function(e){t.saveIdentity(i)}}},[t._v("Save")]):t._e(),t._v(" "),i.edit?e("c-button",{attrs:{status:"danger",icon:"trash"},on:{click:function(e){t.deleteIdentity(i)}}},[t._v("Delete")]):t._e(),t._v(" "),i.edit?e("c-button",{attrs:{icon:"times"},on:{click:function(t){i.edit=!1}}},[t._v("Cancel")]):t._e()],1)],1)})),t._v(" "),t.removeIdentity?e("c-modal-light",{on:{close:function(i){t.removeIdentity=null}}},[e("h4",[t._v("Are you sure that you want to delete this profile?")]),t._v(" "),e("p",[t._v("This operation can not be reversed")]),t._v(" "),e("c-user-card",{attrs:{user:t.removeIdentity,previewMode:""}}),t._v(" "),e("div",[e("div",{staticClass:"profile-remove__buttons"},[e("c-button",{attrs:{size:"md"},on:{click:function(i){t.removeIdentity=null}}},[t._v("Cancel")]),t._v(" "),e("c-button",{attrs:{size:"md"},on:{click:function(i){t.deleteIdentity()}}},[t._v("Confirm")])],1)])],1):t._e()],1)])])},[],!1,null,"1a620e48",null);i.default=c.exports},240:function(t,i){},741:function(t,i,e){"use strict";var n=e(240);e.n(n).a}}]);