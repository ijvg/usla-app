(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/afjpklm4.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/afjpklm4.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonInfiniteScroll, IonInfiniteScrollContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInfiniteScroll", function() { return InfiniteScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonInfiniteScrollContent", function() { return InfiniteScrollContent; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-7c632336.js");




class InfiniteScroll {
    constructor() {
        this.thrPx = 0;
        this.thrPc = 0;
        this.didFire = false;
        this.isBusy = false;
        this.isLoading = false;
        this.threshold = '15%';
        this.disabled = false;
        this.position = 'bottom';
    }
    thresholdChanged(val) {
        if (val.lastIndexOf('%') > -1) {
            this.thrPx = 0;
            this.thrPc = (parseFloat(val) / 100);
        }
        else {
            this.thrPx = parseFloat(val);
            this.thrPc = 0;
        }
    }
    disabledChanged(val) {
        if (this.disabled) {
            this.isLoading = false;
            this.isBusy = false;
        }
        this.enableScrollEvents(!val);
    }
    async componentDidLoad() {
        const contentEl = this.el.closest('ion-content');
        if (contentEl) {
            await contentEl.componentOnReady();
            this.scrollEl = await contentEl.getScrollElement();
        }
        this.thresholdChanged(this.threshold);
        this.enableScrollEvents(!this.disabled);
        if (this.position === 'top') {
            this.queue.write(() => {
                if (this.scrollEl) {
                    this.scrollEl.scrollTop = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
                }
            });
        }
    }
    componentDidUnload() {
        this.scrollEl = undefined;
    }
    onScroll() {
        const scrollEl = this.scrollEl;
        if (!scrollEl || !this.canStart()) {
            return 1;
        }
        const infiniteHeight = this.el.offsetHeight;
        if (infiniteHeight === 0) {
            return 2;
        }
        const scrollTop = scrollEl.scrollTop;
        const scrollHeight = scrollEl.scrollHeight;
        const height = scrollEl.offsetHeight;
        const threshold = this.thrPc !== 0 ? (height * this.thrPc) : this.thrPx;
        const distanceFromInfinite = (this.position === 'bottom')
            ? scrollHeight - infiniteHeight - scrollTop - threshold - height
            : scrollTop - infiniteHeight - threshold;
        if (distanceFromInfinite < 0) {
            if (!this.didFire) {
                this.isLoading = true;
                this.didFire = true;
                this.ionInfinite.emit();
                return 3;
            }
        }
        else {
            this.didFire = false;
        }
        return 4;
    }
    complete() {
        const scrollEl = this.scrollEl;
        if (!this.isLoading || !scrollEl) {
            return;
        }
        this.isLoading = false;
        if (this.position === 'top') {
            this.isBusy = true;
            const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
            requestAnimationFrame(() => {
                this.queue.read(() => {
                    const scrollHeight = scrollEl.scrollHeight;
                    const newScrollTop = scrollHeight - prev;
                    requestAnimationFrame(() => {
                        this.queue.write(() => {
                            scrollEl.scrollTop = newScrollTop;
                            this.isBusy = false;
                        });
                    });
                });
            });
        }
    }
    canStart() {
        return (!this.disabled &&
            !this.isBusy &&
            !!this.scrollEl &&
            !this.isLoading);
    }
    enableScrollEvents(shouldListen) {
        if (this.scrollEl) {
            this.enableListener(this, 'scroll', shouldListen, this.scrollEl);
        }
    }
    hostData() {
        return {
            class: {
                'infinite-scroll-loading': this.isLoading,
                'infinite-scroll-enabled': !this.disabled
            }
        };
    }
    static get is() { return "ion-infinite-scroll"; }
    static get properties() { return {
        "complete": {
            "method": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "el": {
            "elementRef": true
        },
        "enableListener": {
            "context": "enableListener"
        },
        "isLoading": {
            "state": true
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "queue": {
            "context": "queue"
        },
        "threshold": {
            "type": String,
            "attr": "threshold",
            "watchCallbacks": ["thresholdChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionInfinite",
            "method": "ionInfinite",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "scroll",
            "method": "onScroll",
            "disabled": true,
            "passive": true
        }]; }
    static get style() { return "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"; }
}

class InfiniteScrollContent {
    componentDidLoad() {
        if (this.loadingSpinner === undefined) {
            this.loadingSpinner = this.config.get('infiniteLoadingSpinner', this.config.get('spinner', 'lines'));
        }
    }
    hostData() {
        return {
            class: Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.mode, 'infinite-scroll-content')
        };
    }
    render() {
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "infinite-loading" },
            this.loadingSpinner && (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "infinite-loading-spinner" },
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: this.loadingSpinner }))),
            this.loadingText && (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "infinite-loading-text", innerHTML: this.loadingText }))));
    }
    static get is() { return "ion-infinite-scroll-content"; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "loadingSpinner": {
            "type": String,
            "attr": "loading-spinner",
            "mutable": true
        },
        "loadingText": {
            "type": String,
            "attr": "loading-text"
        }
    }; }
    static get style() { return "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"; }
    static get styleMode() { return "md"; }
}




/***/ })

}]);
//# sourceMappingURL=41.js.map