(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[132],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/tylmm2yl.sc.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/tylmm2yl.sc.entry.js ***!
  \*****************************************************************************/
/*! exports provided: IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCard", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCardHeader", function() { return CardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCardSubtitle", function() { return CardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonCardTitle", function() { return CardTitle; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-7c632336.js");




class Card {
    hostData() {
        return {
            class: Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color)
        };
    }
    static get is() { return "ion-card"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return ".sc-ion-card-ios-h{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden}.ion-color.sc-ion-card-ios-h{background:var(--ion-color-base)}.ion-color.sc-ion-card-ios-h, .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-header , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-subtitle , .sc-ion-card-ios-h.ion-color.sc-ion-card-ios-s  ion-card-title {color:var(--ion-color-contrast)}.sc-ion-card-ios-s  img {display:block;width:100%}.sc-ion-card-ios-s  ion-list {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-card-ios-h{--background:var(--ion-item-background,transparent);--color:var(--ion-color-step-600,#666);margin-left:16px;margin-right:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:14px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.12);box-shadow:0 4px 16px rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-card-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}"; }
    static get styleMode() { return "ios"; }
}

class CardContent {
    hostData() {
        return {
            class: Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.mode, 'card-content')
        };
    }
    static get is() { return "ion-card-content"; }
    static get properties() { return {
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "ion-card-content{display:block;position:relative}.card-content-ios{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;font-size:16px;line-height:1.4}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.card-content-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px}"; }
    static get styleMode() { return "ios"; }
}

class CardHeader {
    constructor() {
        this.translucent = false;
    }
    hostData() {
        return {
            class: Object.assign({}, Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color), { 'card-header-translucent': this.translucent })
        };
    }
    render() {
        return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    }
    static get is() { return "ion-card-header"; }
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
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get style() { return ".sc-ion-card-header-ios-h{display:block;position:relative;background:var(--background);color:var(--color)}.ion-color.sc-ion-card-header-ios-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-card-header-ios-h.ion-color .sc-ion-card-header-ios-s > ion-card-subtitle, .sc-ion-card-header-ios-h.ion-color .sc-ion-card-header-ios-s > ion-card-title{color:currentColor}.sc-ion-card-header-ios-h{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-card-header-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}.card-header-translucent.sc-ion-card-header-ios-h{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}"; }
    static get styleMode() { return "ios"; }
}

class CardSubtitle {
    hostData() {
        return {
            class: Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color),
            'role': 'heading',
            'aria-level': '3'
        };
    }
    render() {
        return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    }
    static get is() { return "ion-card-subtitle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return ".sc-ion-card-subtitle-ios-h{display:block;position:relative;color:var(--color)}.ion-color.sc-ion-card-subtitle-ios-h{color:var(--ion-color-base)}.sc-ion-card-subtitle-ios-h{--color:var(--ion-color-step-600,#666);margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:12px;font-weight:700;letter-spacing:.4px;text-transform:uppercase}"; }
    static get styleMode() { return "ios"; }
}

class CardTitle {
    hostData() {
        return {
            class: Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color),
            'role': 'heading',
            'aria-level': '2'
        };
    }
    render() {
        return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    }
    static get is() { return "ion-card-title"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return ".sc-ion-card-title-ios-h{display:block;position:relative;color:var(--color)}.ion-color.sc-ion-card-title-ios-h{color:var(--ion-color-base)}.sc-ion-card-title-ios-h{--color:var(--ion-text-color,#000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}"; }
    static get styleMode() { return "ios"; }
}




/***/ })

}]);
//# sourceMappingURL=132.js.map