(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1238:function(t,e,r){"use strict";var s=r(394);r.n(s).a},1239:function(t,e,r){"use strict";var s=r(395);r.n(s).a},1401:function(t,e,r){"use strict";r.r(e);var s=r(10),a=r(3),o=r(1),n=r.n(o),c={props:["activated"],components:{"c-popup":function(t){return r.e(7).then(function(){var e=[r(102)];t.apply(null,e)}.bind(this)).catch(r.oe)},"c-datepicker":function(t){return r.e(194).then(function(){var e=[r(1570)];t.apply(null,e)}.bind(this)).catch(r.oe)},"c-tabs":function(t){return r.e(11).then(function(){var e=[r(100)];t.apply(null,e)}.bind(this)).catch(r.oe)},"c-tab":function(t){return r.e(12).then(function(){var e=[r(101)];t.apply(null,e)}.bind(this)).catch(r.oe)}},methods:{unlock:function(){$(this.$refs.submit.$el).removeClass("wrong"),this.$store.dispatch("application/unlockAccount",{password:this.$refs.password})},recoverPassword:function(){var t=this;s.sendCommand("recoverPasswordRequest",{secret_question_1:this.secret_question_1,secret_answer_1:this.secret_answer_1,birthday:n()(this.birthday).format("DD-MM-YYYY")}).then(function(e){e.error?t.recoveryError=e.error.message:(t.recoveryError=null,t.password=e.password)})},customBirthdayFormatter:function(t){return n()(t).format("DD-MM-YYYY")},exportAccount:function(){s.sendCommand("exportAccountFileRequest")},clearAccount:function(){s.sendCommand("deleteAccountRequest")}},computed:{secret_question_1:function(){if(!a.application.config.data[0].account.secret_question_1)return"Secret question not found";var t={last_name_first_kissed:"What is the first name of the person you first kissed?",first_name_favorite_aunt_uncle:"What is the first name of the your favorite aunt or uncle?",favorite_high_school_teacher:"What is the last name of your favorite teacher in high school?",last_name_teacher_failing_grade:"What is the last name of the teacher who gave you your first failing grade?",wedding_reception:"What is the name of the plac eyour wedding reception was held?",city_sibling_live:"In what city or town does your nearest sibling live?"};return t[a.application.config.data[0].account.secret_question_1]}},data:function(){return{recovery:!1,password:null,secret_answer_1:null,birthday:null,recoveryError:null}},created:function(){var t=this;s.on("promptPasswordRequest",function(e){e.error&&$(t.$refs.submit.$el).addClass("wrong")})}},i=(r(1239),r(1238),r(0)),l=Object(i.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("c-popup",{ref:"modal",attrs:{activated:t.activated,type:"custom",width:"250"}},[r("div",{attrs:{slot:"custom_close",hidden:""},slot:"custom_close"}),t._v(" "),r("div",{staticClass:"unlock-modal",attrs:{slot:"custom_content"},slot:"custom_content"},[r("div",{staticClass:"tab-container"},[r("div",{staticClass:"tab-card"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"form-group"},[r("h3",[t._v("Password")]),t._v(" "),r("label",{staticClass:"sr-only"},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"focus",rawName:"v-focus"}],ref:"password",staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.unlock()}}}),t._v(" "),r("br"),t._v(" "),r("c-button",{ref:"submit",staticClass:"c-btn-lg",on:{click:function(e){t.unlock()}}},[t._v("Unlock")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"margin-top-20"},[r("span",{staticStyle:{color:"#aaa"}},[t._v("Can't remember?")]),t._v(" "),r("c-button",{staticClass:"plain",on:{click:function(e){t.recovery=!0}}},[t._v("Recover your account")])],1),t._v(" "),t.recovery?r("div",{staticClass:"row recovery-box"},[t.password?t._e():r("div",{staticClass:"col-12"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"sr-only"},[t._v("Enter your secret question #1")]),t._v(" "),r("p",[t._v(t._s(t.secret_question_1))]),t._v(" "),r("div",{staticClass:"input-group mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.secret_answer_1,expression:"secret_answer_1"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Secret Answer",name:"secret_answer_1"},domProps:{value:t.secret_answer_1},on:{input:function(e){e.target.composing||(t.secret_answer_1=e.target.value)}}})])])]),t._v(" "),t.password?t._e():r("div",{staticClass:"col-12"},[r("div",{staticClass:"input-group"},[r("p",[t._v("What is your birthday?")]),t._v(" "),r("label",{staticClass:"sr-only"},[t._v("Enter your birthday")]),t._v(" "),r("c-datepicker",{attrs:{placeholder:"Birthday","input-class":"form-control form-calendar__text",name:"birthday","calendar-class":"form-calendar",minimumView:"day",maximumView:"year",initialView:"year",format:t.customBirthdayFormatter},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}})],1)]),t._v(" "),t.password?t._e():r("div",{staticClass:"col-12 margin-bottom-20"},[r("c-button",{staticClass:"outline-green",on:{click:t.recoverPassword}},[t._v("Submit")])],1),t._v(" "),t.recoveryError?r("div",{staticClass:"col-12"},[r("div",{staticClass:"alert alert-danger mb-4"},[t._v(t._s(t.recoveryError))])]):t._e(),t._v(" "),t.password?r("p",{staticClass:"col-12"},[r("strong",[t._v("Success!")]),t._v(" "),r("br"),t._v(" \n                                    Your password has been recovered without a third-party. It was all you. Isn't that awesome? Now don't lose it!\n                                    "),r("br"),r("br"),t._v(" "),r("strong",[t._v("Your password is:")]),t._v(" "),r("br"),t._v("\n                                    "+t._s(t.password)+"\n                                    "),r("br"),r("br"),t._v(" "),r("c-button",{on:{click:function(e){t.recovery=!1}}},[t._v("I Understand")])],1):t._e(),t._v(" "),t.password?t._e():r("div",{staticClass:"col-12"},[r("p",[r("strong",[t._v("Can't remember?")])]),t._v(" "),r("p",[r("em",[t._v("If you can't remember, you can download your account file, reset your account and try again later.")])]),t._v(" "),r("p",[r("c-button",{on:{click:t.exportAccount}},[t._v("Export Saved Account")])],1),t._v(" "),r("p",[r("c-button",{on:{click:t.clearAccount}},[t._v("Clear Saved Account")])],1)])]):t._e()],1)])])])])])])},[],!1,null,"43be33b7",null);e.default=l.exports},394:function(t,e){},395:function(t,e){}}]);