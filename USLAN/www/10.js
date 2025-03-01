(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/0owmtgfs.sc.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/0owmtgfs.sc.entry.js ***!
  \*****************************************************************************/
/*! exports provided: IonChip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonChip", function() { return Chip; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-7c632336.js");




class Chip {
    constructor() {
        this.outline = false;
    }
    hostData() {
        return {
            class: Object.assign({}, Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color), { 'chip-outline': this.outline, 'ion-activatable': true })
        };
    }
    render() {
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null),
            this.mode === 'md' ? Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null) : null
        ];
    }
    static get is() { return "ion-chip"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "outline": {
            "type": Boolean,
            "attr": "outline"
        }
    }; }
    static get style() { return ".sc-ion-chip-ios-h{--background:rgba(0,0,0,0.12);--color:rgba(0,0,0,0.87);border-radius:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:4px;margin-right:4px;margin-top:4px;margin-bottom:4px;padding-left:12px;padding-right:12px;padding-top:7px;padding-bottom:7px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;height:32px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:14px;line-height:1;cursor:pointer;overflow:hidden;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:4px;margin-inline-end:4px;padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.sc-ion-chip-ios-h:focus{outline:none;--background:rgba(0,0,0,0.16)}.activated.sc-ion-chip-ios-h{--background:rgba(0,0,0,0.2)}.ion-color.sc-ion-chip-ios-h{background:rgba(var(--ion-color-base-rgb),.08);color:var(--ion-color-shade)}.ion-color.sc-ion-chip-ios-h:focus{background:rgba(var(--ion-color-base-rgb),.12)}.ion-color.activated.sc-ion-chip-ios-h{background:rgba(var(--ion-color-base-rgb),.16)}.chip-outline.sc-ion-chip-ios-h{border-width:1px;border-style:solid}.chip-outline.sc-ion-chip-ios-h:not(.ion-color){border-color:rgba(0,0,0,.32);background:transparent}.chip-outline.ion-color.sc-ion-chip-ios-h{border-color:rgba(var(--ion-color-base-rgb),.32)}.chip-outline.sc-ion-chip-ios-h:not(.ion-color):focus{background:rgba(0,0,0,.04)}.chip-outline.activated.sc-ion-chip-ios-h:not(.ion-color){background:rgba(0,0,0,.08)}.sc-ion-chip-ios-s > ion-icon{font-size:20px}.sc-ion-chip-ios-h:not(.ion-color) .sc-ion-chip-ios-s > ion-icon{color:rgba(0,0,0,.54)}.sc-ion-chip-ios-s > ion-icon:first-child{margin-left:-4px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-s > ion-icon:first-child{margin-left:unset;margin-right:unset;-webkit-margin-start:-4px;margin-inline-start:-4px;-webkit-margin-end:8px;margin-inline-end:8px}}.sc-ion-chip-ios-s > ion-icon:last-child{margin-left:8px;margin-right:-4px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-s > ion-icon:last-child{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-4px;margin-inline-end:-4px}}.sc-ion-chip-ios-s > ion-avatar{width:24px;height:24px}.sc-ion-chip-ios-s > ion-avatar:first-child{margin-left:-8px;margin-right:8px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-s > ion-avatar:first-child{margin-left:unset;margin-right:unset;-webkit-margin-start:-8px;margin-inline-start:-8px;-webkit-margin-end:8px;margin-inline-end:8px}}.sc-ion-chip-ios-s > ion-avatar:last-child{margin-left:8px;margin-right:-8px;margin-top:-4px;margin-bottom:-4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-chip-ios-s > ion-avatar:last-child{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:-8px;margin-inline-end:-8px}}\@media (any-hover:hover){.sc-ion-chip-ios-h:hover{--background:rgba(0,0,0,0.16)}.ion-color.sc-ion-chip-ios-h:hover{background:rgba(var(--ion-color-base-rgb),.12)}.chip-outline.sc-ion-chip-ios-h:not(.ion-color):hover{background:rgba(0,0,0,.04)}}"; }
    static get styleMode() { return "ios"; }
}




/***/ })

}]);
//# sourceMappingURL=10.js.map