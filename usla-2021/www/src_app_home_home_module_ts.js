(self["webpackChunkusla_2021"] = self["webpackChunkusla_2021"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3760);





/*import { EventDataService } from '../service/event-data.service';
import { ProgramService } from '../service/program.service';
import { SponsorDataService } from '../service/sponsor-data.service';*/
let HomePage = class HomePage {
    constructor(iab) {
        this.iab = iab;
    }
    ngOnInit() {
    }
    openResults() {
        const browser = this.iab.create("https://www.usla.org/page/Nationals", "_system");
        browser.close();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@media only screen and (min-height: 750px) and (orientation: portrait) {\n  /*.scroll-content {\n      margin-bottom: calc(env(safe-area-inset-bottom) + 42px)!important;\n          -webkit-background-size: 100% calc(100% - 85px - env(safe-area-inset-bottom))!important;\n          -moz-background-size: 100% calc(100% - 85px - env(safe-area-inset-bottom))!important;\n          -o-background-size: 100% calc(100% - 85px - env(safe-area-inset-bottom))!important;\n          background-size: 100% calc(100% - 85px - env(safe-area-inset-bottom))!important;\n\n  }*/\n}\n@media only screen and (max-height: 575px) {\n  #sliderHome {\n    display: none;\n  }\n\n  #homeImage, #homeImageCon {\n    display: none;\n  }\n}\n@media only screen and (max-height: 400px) and (orientation: landscape) {\n  #homeBtnsCon {\n    bottom: none !important;\n  }\n\n  #homeCon, #homeBtnsCon, #btnsGrid {\n    height: 100% !important;\n  }\n\n  #btnsGrid > ion-row {\n    height: 33.3333% !important;\n  }\n\n  #btnsGrid ion-icon {\n    font-size: 2em !important;\n  }\n\n  .homeButton {\n    height: 100% !important;\n  }\n\n  #btnsGrid ion-col > ion-row:last-of-type > ion-col {\n    font-size: 1.6rem;\n  }\n}\n.swiper-slide img {\n  display: block;\n  width: 100%;\n}\n#homeGallery .col {\n  padding: 0px !important;\n}\n#sliderHome {\n  padding: 0px !important;\n  border-bottom: 1px solid rgba(90, 90, 90, 0.658);\n  box-shadow: 0px 14px 10px -10px rgba(0, 0, 0, 0.4);\n}\n.headerRight {\n  text-align: right;\n}\n.homeImage {\n  background-color: rgba(255, 255, 255, 0.85);\n  border-bottom: 2px solid rgba(104, 104, 104, 0.836);\n}\n.scroll-content {\n  /* UNCOMMENT FOR iPHONE !!!! */\n  /*background-position: 0px calc(44px + env(safe-area-inset-top));\n  -webkit-background-size: 100% calc(100% - calc(env(safe-area-inset-bottom) + 44px + env(safe-area-inset-top)));\n  -moz-background-size: 100% calc(100% - calc(env(safe-area-inset-bottom) + 44px + env(safe-area-inset-top)));\n  -o-background-size: 100% calc(100% - calc(env(safe-area-inset-bottom) + 44px + env(safe-area-inset-top)));\n  background-size: 100% calc(100% - calc(env(safe-area-inset-bottom) + 44px + env(safe-area-inset-top)));*/\n  /*background-position: 0px 0px;\n  -webkit-background-size: 100% 100%;\n  -moz-background-size: 100% 100%;\n  -o-background-size: 100% 100%;\n  background-size: 100% 100%;*/\n}\n#homeCon {\n  background-color: #24608a;\n  height: 100%;\n  width: 100%;\n}\n#homeImageCon {\n  background-color: white;\n  border-bottom: 2px inset rgba(0, 0, 0, 0.7);\n}\n#homeImage {\n  width: 100%;\n  height: 100%;\n}\n#homeBtnsCon {\n  width: 100%;\n  position: absolute;\n  padding-bottom: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 15px;\n  bottom: 0px;\n}\n#btnsGrid {\n  border-radius: 5px;\n  padding: 0px !important;\n  border-radius: 2px;\n}\n#btnsGrid ion-icon {\n  color: #fcfcfc;\n  font-size: 2.8em;\n  display: block;\n  margin: 2px auto;\n}\n.homeButton.activated {\n  opacity: 0.7;\n}\n.homeButton {\n  height: 5.5em;\n  width: 90%;\n  margin: 0px;\n  padding: 0px;\n  font-weight: bold;\n}\n#btnsGrid ion-button {\n  --border-width: 2px;\n  --border-style: solid;\n  --border-color: rgba(202, 0, 0, 0.9);\n  --box-shadow: -2px 11px 3px -3px rgba(0, 0, 0, 0.35);\n}\n.homeButton ion-label {\n  font-size: 18px;\n}\n#btnsGrid > ion-row > ion-col {\n  padding: 0px;\n  text-align: center;\n}\n#btnsGrid ion-row > ion-col {\n  padding: 2px;\n}\n#btnsGrid ion-row:first-of-type {\n  margin-bottom: 20px;\n}\n#btnsGrid ion-row > ion-col {\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: bold;\n  font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7Ozs7Ozs7SUFBQTtBQVFKO0FBRUU7RUFDRTtJQUNJLGFBQUE7RUFBTjs7RUFHRTtJQUNFLGFBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRTtJQUNJLHVCQUFBO0VBRE47O0VBSUU7SUFDSSx1QkFBQTtFQUROOztFQUlFO0lBQ0ksMkJBQUE7RUFETjs7RUFJRTtJQUNJLHlCQUFBO0VBRE47O0VBSUU7SUFDSSx1QkFBQTtFQUROOztFQUlFO0lBQ0ksaUJBQUE7RUFETjtBQUNGO0FBSUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0U7RUFDRSx1QkFBQTtBQUZKO0FBS0U7RUFDRSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0Esa0RBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7QUFGSjtBQUtFO0VBQ0UsMkNBQUE7RUFFQSxtREFBQTtBQUhKO0FBTUU7RUFFRSw4QkFBQTtFQUNBOzs7OzBHQUFBO0VBS0E7Ozs7OEJBQUE7QUFBSjtBQU9FO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpKO0FBT0U7RUFDRSx1QkFBQTtFQUdBLDJDQUFBO0FBTko7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTko7QUFTRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQU5KO0FBY0U7RUFFRSxrQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUFiSjtBQWdCRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWJKO0FBZ0JFO0VBQ0UsWUFBQTtBQWJKO0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBYko7QUFnQkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvREFBQTtBQWJKO0FBZ0JFO0VBQ0UsZUFBQTtBQWJKO0FBZ0JFO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FBZEo7QUFrQkU7RUFDRSxZQUFBO0FBZko7QUFrQkU7RUFDRSxtQkFBQTtBQWZKO0FBdUJFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBcEJKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzUwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgLyouc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDQycHgpIWltcG9ydGFudDtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIGNhbGMoMTAwJSAtIDg1cHggLSBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpIWltcG9ydGFudDtcbiAgICAgICAgICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiAxMDAlIGNhbGMoMTAwJSAtIDg1cHggLSBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpIWltcG9ydGFudDtcbiAgICAgICAgICAgIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJSBjYWxjKDEwMCUgLSA4NXB4IC0gZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgY2FsYygxMDAlIC0gODVweCAtIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSkhaW1wb3J0YW50O1xuICBcbiAgICB9Ki9cbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTc1cHgpIHtcbiAgICAjc2xpZGVySG9tZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBcbiAgICAjaG9tZUltYWdlLCAjaG9tZUltYWdlQ29uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgI2hvbWVCdG5zQ29uIHtcbiAgICAgICAgYm90dG9tOiBub25lIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgICNob21lQ29uLCAjaG9tZUJ0bnNDb24sICNidG5zR3JpZCB7XG4gICAgICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgICNidG5zR3JpZCA+IGlvbi1yb3cge1xuICAgICAgICBoZWlnaHQ6IDMzLjMzMzMlIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgICNidG5zR3JpZCBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5ob21lQnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgICNidG5zR3JpZCBpb24tY29sID4gaW9uLXJvdzpsYXN0LW9mLXR5cGUgPiBpb24tY29sIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuICB9XG4gIFxuICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gICNob21lR2FsbGVyeSAuY29sIHtcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAjc2xpZGVySG9tZSB7XG4gICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg5MCwgOTAsIDkwLCAwLjY1OCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDE0cHggMTBweCAtMTBweCByZ2JhKDAsMCwwLDAuNCk7XG4gIH1cbiAgXG4gIC5oZWFkZXJSaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIC5ob21lSW1hZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgLy9wYWRkaW5nOiAxMHB4IDVweCA1cHggNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDEwNCwgMTA0LCAxMDQsIDAuODM2KTtcbiAgfVxuICBcbiAgLnNjcm9sbC1jb250ZW50IHtcbiAgICAvL2JhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2ltZ3MvaG9tZUJHLnBuZycpIG5vLXJlcGVhdCBmaXhlZDtcbiAgICAvKiBVTkNPTU1FTlQgRk9SIGlQSE9ORSAhISEhICovXG4gICAgLypiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggY2FsYyg0NHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJSBjYWxjKDEwMCUgLSBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDQ0cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpKTtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJSBjYWxjKDEwMCUgLSBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDQ0cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpKTtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgY2FsYygxMDAlIC0gY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA0NHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGNhbGMoMTAwJSAtIGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgNDRweCArIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSkpOyovXG4gICAgLypiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsqL1xuICB9XG4gIFxuICAjaG9tZUNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0NjA4YTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gICNob21lSW1hZ2VDb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vcGFkZGluZzogMjBweDtcbiAgICAvL3BhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGluc2V0IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgfVxuICBcbiAgI2hvbWVJbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAjaG9tZUJ0bnNDb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzI0NjA4YTtcbiAgICAvL2JvcmRlci10b3A6IDFweCBvdXRzZXQgcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBcbiAgfVxuICBcbiAgI2J0bnNHcmlkIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHJnYigyMjgsIDIyOCwgMjI4KTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbiAgXG4gICNidG5zR3JpZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcbiAgICBmb250LXNpemU6IDIuOGVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMnB4IGF1dG87XG4gIH1cbiAgXG4gIC5ob21lQnV0dG9uLmFjdGl2YXRlZCB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIFxuICAuaG9tZUJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA1LjVlbTtcbiAgICB3aWR0aDogOTAlOyBcbiAgICBtYXJnaW46IDBweDsgXG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAjYnRuc0dyaWQgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjAyLCAwLCAwLCAwLjkpO1xuICAgIC0tYm94LXNoYWRvdzogLTJweCAxMXB4IDNweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIH1cbiAgXG4gIC5ob21lQnV0dG9uIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAjYnRuc0dyaWQgPiBpb24tcm93ID4gaW9uLWNvbCB7XG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuODkpO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gIH1cbiAgXG4gICNidG5zR3JpZCBpb24tcm93ID4gaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMnB4O1xuICB9XG4gIFxuICAjYnRuc0dyaWQgaW9uLXJvdzpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC8vcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICBcbiAgI2J0bnNHcmlkIGlvbi1yb3c6bGFzdC1vZi10eXBlIHtcbiAgICAvL3BhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgXG4gICNidG5zR3JpZCBpb24tcm93ID4gaW9uLWNvbCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH0iXX0= */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <!--<ion-buttons start>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name=\"menu\"></ion-icon>\n      </button>\n    </ion-buttons>-->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n  \n<ion-content class=\"no-scroll\">\n  \n  <div id=\"homeCon\">\n    <div id=\"homeImageCon\">\n      <img id=\"homeImage\" src=\"assets/homeImage.png\" />\n    </div>\n    \n\n    <div id=\"homeBtnsCon\"> \n      <ion-grid id=\"btnsGrid\">\n            <ion-row>\n\n              <ion-col size=\"4\">\n                <ion-button class=\"homeButton\" color=\"danger\" [routerDirection]=\"'forward'\" routerLink=\"/schedule\">\n                  <div>\n                    <ion-icon name=\"calendar\"></ion-icon>\n                    <ion-label style=\"font-weight: bold;\">Schedule</ion-label>\n                  </div>\n                </ion-button>\n              </ion-col>\n\n              <ion-col size=\"4\">\n                <ion-button class=\"homeButton\" color=\"danger\" [routerDirection]=\"'forward'\" routerLink=\"/map\">\n                  <div>\n                    <ion-icon name=\"map\"></ion-icon>\n                    <ion-label style=\"font-weight: bold;\">Map</ion-label>\n                  </div>\n                </ion-button>\n              </ion-col>\n              \n              <ion-col size=\"4\">\n                <ion-button class=\"homeButton\" color=\"danger\" (click)=\"openResults()\">\n                  <div>\n                    <ion-icon name=\"trophy\"></ion-icon>\n                    <ion-label style=\"font-weight: bold;\">Results</ion-label>\n                  </div>\n                </ion-button>\n              </ion-col>\n\n            </ion-row>\n            <ion-row>\n\n              <ion-col size=\"4\">\n                <ion-button class=\"homeButton\" color=\"danger\" [routerDirection]=\"'forward'\" routerLink=\"/program\">\n                  <div>\n                    <ion-icon name=\"list\"></ion-icon>\n                    <ion-label style=\"font-weight: bold;\">Program</ion-label>\n                  </div>\n                </ion-button>\n              </ion-col>\n\n              <ion-col size=\"4\">\n                <ion-button class=\"homeButton\" color=\"danger\" [routerDirection]=\"'forward'\" routerLink=\"/sponsors\">\n                  <div>\n                    <ion-icon name=\"help-buoy\"></ion-icon>\n                    <ion-label style=\"font-weight: bold;\">Sponsors</ion-label>\n                  </div>\n                </ion-button>\n              </ion-col>\n\n              <ion-col size=\"4\">\n                <ion-button class=\"homeButton\" color=\"danger\" [routerDirection]=\"'forward'\" routerLink=\"/travel\">\n                  <div>\n                    <ion-icon name=\"car\"></ion-icon>\n                    <ion-label style=\"font-weight: bold;\">Travel</ion-label>\n                  </div>\n                </ion-button>\n              </ion-col>\n\n            </ion-row>\n        </ion-grid>\n    </div>\n   </div>\n  \n  \n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map