(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-date-schedule-date-module"],{

/***/ "./src/app/schedule-date/schedule-date.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/schedule-date/schedule-date.module.ts ***!
  \*******************************************************/
/*! exports provided: ScheduleDatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDatePageModule", function() { return ScheduleDatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_date_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule-date.page */ "./src/app/schedule-date/schedule-date.page.ts");







var routes = [
    {
        path: '',
        component: _schedule_date_page__WEBPACK_IMPORTED_MODULE_6__["ScheduleDatePage"]
    }
];
var ScheduleDatePageModule = /** @class */ (function () {
    function ScheduleDatePageModule() {
    }
    ScheduleDatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_schedule_date_page__WEBPACK_IMPORTED_MODULE_6__["ScheduleDatePage"]]
        })
    ], ScheduleDatePageModule);
    return ScheduleDatePageModule;
}());



/***/ }),

/***/ "./src/app/schedule-date/schedule-date.page.html":
/*!*******************************************************!*\
  !*** ./src/app/schedule-date/schedule-date.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>scheduleDate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/schedule-date/schedule-date.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/schedule-date/schedule-date.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlLWRhdGUvc2NoZWR1bGUtZGF0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/schedule-date/schedule-date.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/schedule-date/schedule-date.page.ts ***!
  \*****************************************************/
/*! exports provided: ScheduleDatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDatePage", function() { return ScheduleDatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScheduleDatePage = /** @class */ (function () {
    function ScheduleDatePage() {
    }
    ScheduleDatePage.prototype.ngOnInit = function () {
    };
    ScheduleDatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-date',
            template: __webpack_require__(/*! ./schedule-date.page.html */ "./src/app/schedule-date/schedule-date.page.html"),
            styles: [__webpack_require__(/*! ./schedule-date.page.scss */ "./src/app/schedule-date/schedule-date.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScheduleDatePage);
    return ScheduleDatePage;
}());



/***/ })

}]);
//# sourceMappingURL=schedule-date-schedule-date-module.js.map