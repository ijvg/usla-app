(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{kWO8:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("mrSG"),i=e("ZZ/e"),o=e("ZLtE"),s=e("yeUw"),a=function(){function l(l,n,e){this.dataProvider=l,this.alertCtrl=n,this.modalController=e,this.group="",this.selectedEvent=null,this.selectedGender=null,this.selectedAgeGroup=null,this.genderSpecificEventData=[],this.genderSpecificEventBrackets=[],this.groups=[],this.groupSets=["OPEN","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70+"],this.events=["Beach Flags","Ironguard","Board Race","4 x 100 Run Relay","2K Beach Run","Surf Race","Run-Swim-Run","Surf Ski Race","American Ironperson","Ironperson","Surf Boat Race","Rescue Race"],this.showGenderDD=!1,this.showBracketsDD=!1,this.showResultsBtn=!1}return l.prototype.ngOnInit=function(){},l.prototype.showResults=function(){return u.b(this,void 0,void 0,function(){var l;return u.e(this,function(n){switch(n.label){case 0:return console.log(this.genderSpecificEventData),[4,this.modalController.create({component:s.a,componentProps:{selectedEvent:this.selectedEvent,gsed:this.genderSpecificEventData,ageGroup:this.selectedAgeGroup,gender:this.selectedGender,adults:!0}})];case 1:return(l=n.sent()).onDidDismiss().then(function(){}),[4,l.present()];case 2:return n.sent(),[2]}})})},l.prototype.selectEvent=function(){this.genderSpecificEventData=[],this.genderSpecificEventBrackets=[],this.selectedGender=null,this.selectedAgeGroup=null,this.showGenderDD=!0,this.updateEventSelected()},l.prototype.updateEventSelected=function(){"Beach Flags"==this.selectedEvent?this.eventData=this.dataProvider.getBeachFlagsAdults():"Ironguard"==this.selectedEvent?this.eventData=this.dataProvider.getIronguardAdults():"Board Race"==this.selectedEvent?this.eventData=this.dataProvider.getBoardRaceAdults():"4 x 100 Run Relay"==this.selectedEvent?this.eventData=this.dataProvider.getRunRelay():"2K Beach Run"==this.selectedEvent?this.eventData=this.dataProvider.getBeachRun():"Surf Race"==this.selectedEvent?this.eventData=this.dataProvider.getSurfRace():"Run-Swim-Run"==this.selectedEvent?this.eventData=this.dataProvider.getRunSwimRunAdults():"Surf Ski Race"==this.selectedEvent?this.eventData=this.dataProvider.getSurfSkiRace():"American Ironperson"==this.selectedEvent?this.eventData=this.dataProvider.getAmericanIronperson():"Ironperson"==this.selectedEvent?this.eventData=this.dataProvider.getIronperson():"Surf Boat Race"==this.selectedEvent?this.eventData=this.dataProvider.getSurfBoatRace():"Rescue Race"==this.selectedEvent?this.eventData=this.dataProvider.getRescueRace():"Surf Swim Race"==this.selectedEvent&&(this.eventData=this.dataProvider.getSurfSwimRaceAdults())},l.prototype.selectGender=function(){var l=this;this.selectedAgeGroup=null,this.genderSpecificEventBrackets=[],this.genderSpecificEventData=this.eventData[0].competitors.filter(function(n){return n.gender.toUpperCase().indexOf(l.selectedGender)>-1});for(var n=0;n<this.genderSpecificEventData.length;n++)this.genderSpecificEventBrackets.includes(this.genderSpecificEventData[n].ageGroupName)||this.genderSpecificEventBrackets.push(this.genderSpecificEventData[n].ageGroupName);null!==this.selectedGender||1!=this.showBracketsDD&&1!=this.showResultsBtn?this.genderSpecificEventBrackets.length<2?(this.showResultsBtn=!0,this.showBracketsDD=!1):(this.showBracketsDD=!0,this.showResultsBtn=!1):(this.showBracketsDD=!1,this.showResultsBtn=!1)},l.prototype.selectAgeGroup=function(){null!==this.selectedAgeGroup&&(this.showResultsBtn=!0)},l}(),r=function(){return function(){}}(),c=e("pMnS"),b=e("oBZk"),d=e("gIcY"),h=e("Ip0R"),g=e("ehgb"),p=t.nb({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,b.W,b.x)),t.ob(1,49152,null,0,i.mb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Fb(2,0,["",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,20,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,19,"ion-list",[],null,null,null,b.P,b.p)),t.ob(2,49152,null,0,i.N,[t.h,t.k,t.z],null,null),(l()(),t.pb(3,0,null,0,17,"ion-item",[],null,null,null,b.N,b.n)),t.ob(4,49152,null,0,i.G,[t.h,t.k,t.z],null,null),(l()(),t.pb(5,0,null,0,2,"ion-label",[],null,null,null,b.O,b.o)),t.ob(6,49152,null,0,i.M,[t.h,t.k,t.z],null,null),(l()(),t.Fb(-1,0,["Gender"])),(l()(),t.pb(8,0,null,0,12,"ion-select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.yb(l,9)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==t.yb(l,9)._handleChangeEvent(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(i.selectedGender=e)&&u),"ionChange"===n&&(u=!1!==i.selectGender()&&u),u},b.X,b.w)),t.ob(9,16384,null,0,i.Kb,[t.k],null,null),t.Cb(1024,null,d.b,function(l){return[l]},[i.Kb]),t.ob(11,671744,null,0,d.e,[[8,null],[8,null],[8,null],[6,d.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,d.c,null,[d.e]),t.ob(13,16384,null,0,d.d,[[4,d.c]],null,null),t.ob(14,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.pb(15,0,null,0,2,"ion-select-option",[["value","M"]],null,null,null,b.W,b.x)),t.ob(16,49152,null,0,i.mb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Fb(-1,0,["Male"])),(l()(),t.pb(18,0,null,0,2,"ion-select-option",[["value","F"]],null,null,null,b.W,b.x)),t.ob(19,49152,null,0,i.mb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Fb(-1,0,["Female"]))],function(l,n){l(n,11,0,n.component.selectedGender),l(n,16,0,"M"),l(n,19,0,"F")},function(l,n){l(n,8,0,t.yb(n,13).ngClassUntouched,t.yb(n,13).ngClassTouched,t.yb(n,13).ngClassPristine,t.yb(n,13).ngClassDirty,t.yb(n,13).ngClassValid,t.yb(n,13).ngClassInvalid,t.yb(n,13).ngClassPending)})}function C(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,b.W,b.x)),t.ob(1,49152,null,0,i.mb,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.Fb(2,0,["",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit)})}function k(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,17,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,16,"ion-list",[],null,null,null,b.P,b.p)),t.ob(2,49152,null,0,i.N,[t.h,t.k,t.z],null,null),(l()(),t.pb(3,0,null,0,14,"ion-item",[],null,null,null,b.N,b.n)),t.ob(4,49152,null,0,i.G,[t.h,t.k,t.z],null,null),(l()(),t.pb(5,0,null,0,2,"ion-label",[],null,null,null,b.O,b.o)),t.ob(6,49152,null,0,i.M,[t.h,t.k,t.z],null,null),(l()(),t.Fb(-1,0,["Age Groups"])),(l()(),t.pb(8,0,null,0,9,"ion-select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.yb(l,9)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==t.yb(l,9)._handleChangeEvent(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(i.selectedAgeGroup=e)&&u),"ionChange"===n&&(u=!1!==i.selectAgeGroup()&&u),u},b.X,b.w)),t.ob(9,16384,null,0,i.Kb,[t.k],null,null),t.Cb(1024,null,d.b,function(l){return[l]},[i.Kb]),t.ob(11,671744,null,0,d.e,[[8,null],[8,null],[8,null],[6,d.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,d.c,null,[d.e]),t.ob(13,16384,null,0,d.d,[[4,d.c]],null,null),t.ob(14,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.gb(16777216,null,0,2,null,C)),t.ob(16,278528,null,0,h.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),t.Bb(17,2)],function(l,n){var e=n.component;l(n,11,0,e.selectedAgeGroup);var u=t.Gb(n,16,0,l(n,17,0,t.yb(n.parent,0),e.groupSets,e.genderSpecificEventBrackets));l(n,16,0,u)},function(l,n){l(n,8,0,t.yb(n,13).ngClassUntouched,t.yb(n,13).ngClassTouched,t.yb(n,13).ngClassPristine,t.yb(n,13).ngClassDirty,t.yb(n,13).ngClassValid,t.yb(n,13).ngClassInvalid,t.yb(n,13).ngClassPending)})}function y(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,3,"div",[["id","showResultsBtnCon"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"ion-button",[["color","danger"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.showResults()&&t),t},b.C,b.c)),t.ob(2,49152,null,0,i.j,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Fb(-1,0,["Show Results"]))],function(l,n){l(n,2,0,"danger")},null)}function E(l){return t.Hb(0,[t.Ab(0,g.a,[]),(l()(),t.pb(1,0,null,null,11,"ion-header",[],null,null,null,b.K,b.k)),t.ob(2,49152,null,0,i.A,[t.h,t.k,t.z],null,null),(l()(),t.pb(3,0,null,0,9,"ion-toolbar",[],null,null,null,b.Z,b.z)),t.ob(4,49152,null,0,i.Ab,[t.h,t.k,t.z],null,null),(l()(),t.pb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.D,b.d)),t.ob(6,49152,null,0,i.k,[t.h,t.k,t.z],null,null),(l()(),t.pb(7,0,null,0,2,"ion-back-button",[["defaultHref","result-types"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.yb(l,9).onClick(e)&&u),u},b.B,b.b)),t.ob(8,49152,null,0,i.f,[t.h,t.k,t.z],{defaultHref:[0,"defaultHref"]},null),t.ob(9,16384,null,0,i.g,[[2,i.gb],i.Fb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(10,0,null,0,2,"ion-title",[],null,null,null,b.Y,b.y)),t.ob(11,49152,null,0,i.yb,[t.h,t.k,t.z],null,null),(l()(),t.Fb(-1,0,["Event Results"])),(l()(),t.pb(13,0,null,null,24,"ion-content",[["padding",""]],null,null,null,b.I,b.i)),t.ob(14,49152,null,0,i.t,[t.h,t.k,t.z],null,null),(l()(),t.pb(15,0,null,0,16,"div",[],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,15,"ion-list",[],null,null,null,b.P,b.p)),t.ob(17,49152,null,0,i.N,[t.h,t.k,t.z],null,null),(l()(),t.pb(18,0,null,0,13,"ion-item",[],null,null,null,b.N,b.n)),t.ob(19,49152,null,0,i.G,[t.h,t.k,t.z],null,null),(l()(),t.pb(20,0,null,0,2,"ion-label",[],null,null,null,b.O,b.o)),t.ob(21,49152,null,0,i.M,[t.h,t.k,t.z],null,null),(l()(),t.Fb(-1,0,["Events"])),(l()(),t.pb(23,0,null,0,8,"ion-select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.yb(l,24)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==t.yb(l,24)._handleChangeEvent(e.target.value)&&u),"ngModelChange"===n&&(u=!1!==(i.selectedEvent=e)&&u),"ionChange"===n&&(u=!1!==i.selectEvent()&&u),u},b.X,b.w)),t.ob(24,16384,null,0,i.Kb,[t.k],null,null),t.Cb(1024,null,d.b,function(l){return[l]},[i.Kb]),t.ob(26,671744,null,0,d.e,[[8,null],[8,null],[8,null],[6,d.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,d.c,null,[d.e]),t.ob(28,16384,null,0,d.d,[[4,d.c]],null,null),t.ob(29,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.gb(16777216,null,0,1,null,v)),t.ob(31,278528,null,0,h.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.gb(16777216,null,0,1,null,f)),t.ob(33,16384,null,0,h.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,k)),t.ob(35,16384,null,0,h.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,y)),t.ob(37,16384,null,0,h.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,8,0,"result-types"),l(n,9,0,"result-types"),l(n,26,0,e.selectedEvent),l(n,31,0,e.events),l(n,33,0,e.showGenderDD),l(n,35,0,e.showBracketsDD),l(n,37,0,e.showResultsBtn)},function(l,n){l(n,23,0,t.yb(n,28).ngClassUntouched,t.yb(n,28).ngClassTouched,t.yb(n,28).ngClassPristine,t.yb(n,28).ngClassDirty,t.yb(n,28).ngClassValid,t.yb(n,28).ngClassInvalid,t.yb(n,28).ngClassPending)})}function w(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-event-results",[],null,null,null,E,p)),t.ob(1,114688,null,0,a,[o.a,i.a,i.Eb],null,null)],function(l,n){l(n,1,0)},null)}var R=t.lb("app-event-results",a,w,{},{},[]),D=e("zOgu"),m=e("ZYCi");e.d(n,"EventResultsPageModuleNgFactory",function(){return B});var B=t.mb(r,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[c.a,R]],[3,t.j],t.x]),t.wb(4608,h.l,h.k,[t.u,[2,h.t]]),t.wb(4608,d.g,d.g,[]),t.wb(4608,i.b,i.b,[t.z,t.g]),t.wb(4608,i.Eb,i.Eb,[i.b,t.j,t.q]),t.wb(4608,i.Ib,i.Ib,[i.b,t.j,t.q]),t.wb(1073742336,h.b,h.b,[]),t.wb(1073742336,d.f,d.f,[]),t.wb(1073742336,d.a,d.a,[]),t.wb(1073742336,i.Cb,i.Cb,[]),t.wb(1073742336,D.a,D.a,[]),t.wb(1073742336,m.o,m.o,[[2,m.u],[2,m.m]]),t.wb(1073742336,r,r,[]),t.wb(1024,m.k,function(){return[[{path:"",component:a}]]},[])])})}}]);