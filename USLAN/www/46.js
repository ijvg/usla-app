(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/c2kiol1t.sc.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/c2kiol1t.sc.entry.js ***!
  \*****************************************************************************/
/*! exports provided: IonProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonProgressBar", function() { return ProgressBar; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-7c632336.js");
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-6d7d2f8c.js");





class ProgressBar {
    constructor() {
        this.type = 'determinate';
        this.reversed = false;
        this.value = 0;
        this.buffer = 1;
    }
    hostData() {
        const { color, type, reversed, value } = this;
        const paused = this.config.getBoolean('_testing');
        return {
            'role': 'progressbar',
            'aria-valuenow': type === 'determinate' ? value : null,
            'aria-valuemin': 0,
            'aria-valuemax': 1,
            class: Object.assign({}, Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(color), { [`progress-bar-${type}`]: true, 'progress-paused': paused, 'progress-bar-reversed': reversed })
        };
    }
    render() {
        if (this.type === 'indeterminate') {
            return [
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "indeterminate-bar-primary" },
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "progress-indeterminate" })),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "indeterminate-bar-secondary" },
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "progress-indeterminate" }))
            ];
        }
        const value = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["i"])(0, this.value, 1);
        const buffer = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["i"])(0, this.buffer, 1);
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "progress", style: { transform: `scaleX(${value})` } }),
            buffer !== 1 && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "buffer-circles" }),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "progress-buffer-bar", style: { transform: `scaleX(${buffer})` } }),
        ];
    }
    static get is() { return "ion-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "buffer": {
            "type": Number,
            "attr": "buffer"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "reversed": {
            "type": Boolean,
            "attr": "reversed"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "value": {
            "type": Number,
            "attr": "value"
        }
    }; }
    static get style() { return ".sc-ion-progress-bar-ios-h{--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.2);--progress-background:var(--ion-color-primary,#3880ff);--buffer-background:var(--background);display:block;position:relative;width:100%;contain:strict;overflow:hidden}.ion-color.sc-ion-progress-bar-ios-h{--progress-background:var(--ion-color-base);--buffer-background:rgba(var(--ion-color-base-rgb),0.2)}.progress-bar-indeterminate.sc-ion-progress-bar-ios-h{background:var(--buffer-background)}.buffer-circles.sc-ion-progress-bar-ios, .indeterminate-bar-primary.sc-ion-progress-bar-ios, .indeterminate-bar-secondary.sc-ion-progress-bar-ios, .progress.sc-ion-progress-bar-ios, .progress-buffer-bar.sc-ion-progress-bar-ios, .progress-buffer-bar.sc-ion-progress-bar-ios:before, .progress-indeterminate.sc-ion-progress-bar-ios{left:0;right:0;top:0;bottom:0;position:absolute;width:100%;height:100%}.progress.sc-ion-progress-bar-ios, .progress-buffer-bar.sc-ion-progress-bar-ios{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s linear;transition:-webkit-transform .15s linear;transition:transform .15s linear;transition:transform .15s linear,-webkit-transform .15s linear}[dir=rtl].sc-ion-progress-bar-ios-h   .progress.sc-ion-progress-bar-ios, [dir=rtl]   .sc-ion-progress-bar-ios-h   .progress.sc-ion-progress-bar-ios, [dir=rtl].sc-ion-progress-bar-ios-h   .progress-buffer-bar.sc-ion-progress-bar-ios, [dir=rtl]   .sc-ion-progress-bar-ios-h   .progress-buffer-bar.sc-ion-progress-bar-ios{-webkit-transform-origin:right top;transform-origin:right top}.progress.sc-ion-progress-bar-ios, .progress-indeterminate.sc-ion-progress-bar-ios{background:var(--progress-background);z-index:2}.progress-buffer-bar.sc-ion-progress-bar-ios{background:#fff;z-index:1}.progress-buffer-bar.sc-ion-progress-bar-ios:before{background:var(--buffer-background);content:\"\"}.indeterminate-bar-primary.sc-ion-progress-bar-ios{left:-145.16661%;right:0;top:0;bottom:0;-webkit-animation:primary-indeterminate-translate 2s linear infinite;animation:primary-indeterminate-translate 2s linear infinite}[dir=rtl].sc-ion-progress-bar-ios-h   .indeterminate-bar-primary.sc-ion-progress-bar-ios, [dir=rtl]   .sc-ion-progress-bar-ios-h   .indeterminate-bar-primary.sc-ion-progress-bar-ios{left:0;right:-145.16661%}.indeterminate-bar-primary.sc-ion-progress-bar-ios   .progress-indeterminate.sc-ion-progress-bar-ios{-webkit-animation:primary-indeterminate-scale 2s linear infinite;animation:primary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.indeterminate-bar-secondary.sc-ion-progress-bar-ios{left:-54.88889%;right:0;top:0;bottom:0;-webkit-animation:secondary-indeterminate-translate 2s linear infinite;animation:secondary-indeterminate-translate 2s linear infinite}[dir=rtl].sc-ion-progress-bar-ios-h   .indeterminate-bar-secondary.sc-ion-progress-bar-ios, [dir=rtl]   .sc-ion-progress-bar-ios-h   .indeterminate-bar-secondary.sc-ion-progress-bar-ios{left:0;right:-54.88889%}.indeterminate-bar-secondary.sc-ion-progress-bar-ios   .progress-indeterminate.sc-ion-progress-bar-ios{-webkit-animation:secondary-indeterminate-scale 2s linear infinite;animation:secondary-indeterminate-scale 2s linear infinite;-webkit-animation-play-state:inherit;animation-play-state:inherit}.buffer-circles.sc-ion-progress-bar-ios{background:radial-gradient(ellipse at center,var(--buffer-background) 0,var(--buffer-background) 30%,transparent 0) repeat-x 5px;background-size:10px 10px;z-index:0;-webkit-animation:buffering .45s linear infinite;animation:buffering .45s linear infinite}.progress-bar-reversed.sc-ion-progress-bar-ios-h   .progress.sc-ion-progress-bar-ios, .progress-bar-reversed.sc-ion-progress-bar-ios-h   .progress-buffer-bar.sc-ion-progress-bar-ios{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl].progress-bar-reversed.sc-ion-progress-bar-ios-h   .progress.sc-ion-progress-bar-ios, [dir=rtl].progress-bar-reversed.sc-ion-progress-bar-ios-h   .progress-buffer-bar.sc-ion-progress-bar-ios{-webkit-transform-origin:left top;transform-origin:left top}.progress-bar-reversed.sc-ion-progress-bar-ios-h   .buffer-circles.sc-ion-progress-bar-ios, .progress-bar-reversed.sc-ion-progress-bar-ios-h   .indeterminate-bar-primary.sc-ion-progress-bar-ios, .progress-bar-reversed.sc-ion-progress-bar-ios-h   .indeterminate-bar-secondary.sc-ion-progress-bar-ios, .progress-bar-reversed.sc-ion-progress-bar-ios-h   .progress-indeterminate.sc-ion-progress-bar-ios{animation-direction:reverse}.progress-paused.sc-ion-progress-bar-ios-h   .buffer-circles.sc-ion-progress-bar-ios, .progress-paused.sc-ion-progress-bar-ios-h   .indeterminate-bar-primary.sc-ion-progress-bar-ios, .progress-paused.sc-ion-progress-bar-ios-h   .indeterminate-bar-secondary.sc-ion-progress-bar-ios{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}\@keyframes primary-indeterminate-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}\@-webkit-keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@keyframes primary-indeterminate-scale{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@-webkit-keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}to{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}\@keyframes secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}to{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}\@-webkit-keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@keyframes secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}\@-webkit-keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}\@keyframes buffering{to{-webkit-transform:translateX(-10px);transform:translateX(-10px)}}.sc-ion-progress-bar-ios-h{height:3px}"; }
    static get styleMode() { return "ios"; }
}




/***/ })

}]);
//# sourceMappingURL=46.js.map