(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-schedule-module"],{

/***/ "./src/app/schedule/schedule.module.ts":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/*! exports provided: SchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule.page */ "./src/app/schedule/schedule.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"]
    }
];
var SchedulePageModule = /** @class */ (function () {
    function SchedulePageModule() {
    }
    SchedulePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"]]
        })
    ], SchedulePageModule);
    return SchedulePageModule;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.page.html":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Schedule</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/schedule/schedule.page.scss":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/schedule/schedule.page.ts":
/*!*******************************************!*\
  !*** ./src/app/schedule/schedule.page.ts ***!
  \*******************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchedulePage = /** @class */ (function () {
    function SchedulePage() {
    }
    SchedulePage.prototype.ngOnInit = function () {
    };
    SchedulePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.page.html */ "./src/app/schedule/schedule.page.html"),
            styles: [__webpack_require__(/*! ./schedule.page.scss */ "./src/app/schedule/schedule.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SchedulePage);
    return SchedulePage;
}());



/***/ })

}]);
//# sourceMappingURL=schedule-schedule-module.js.map