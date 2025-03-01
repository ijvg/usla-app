(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/lqvrsauo.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/lqvrsauo.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonRefresher, IonRefresherContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRefresher", function() { return Refresher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRefresherContent", function() { return RefresherContent; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-7c632336.js");




class Refresher {
    constructor() {
        this.appliedStyles = false;
        this.didStart = false;
        this.progress = 0;
        this.state = 1;
        this.pullMin = 60;
        this.pullMax = this.pullMin + 60;
        this.closeDuration = '280ms';
        this.snapbackDuration = '280ms';
        this.disabled = false;
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async componentDidLoad() {
        if (this.el.getAttribute('slot') !== 'fixed') {
            console.error('Make sure you use: <ion-refresher slot="fixed">');
            return;
        }
        const contentEl = this.el.closest('ion-content');
        if (contentEl) {
            await contentEl.componentOnReady();
            this.scrollEl = await contentEl.getScrollElement();
        }
        else {
            console.error('ion-refresher did not attach, make sure the parent is an ion-content.');
        }
        this.gesture = (await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./chunk-f56eaea8.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-f56eaea8.js"))).createGesture({
            el: this.el.closest('ion-content'),
            queue: this.queue,
            gestureName: 'refresher',
            gesturePriority: 10,
            direction: 'y',
            threshold: 20,
            passive: false,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: () => this.onEnd(),
        });
        this.disabledChanged();
    }
    componentDidUnload() {
        this.scrollEl = undefined;
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    complete() {
        this.close(32, '120ms');
    }
    cancel() {
        this.close(16, '');
    }
    getProgress() {
        return Promise.resolve(this.progress);
    }
    canStart() {
        if (!this.scrollEl) {
            return false;
        }
        if (this.state !== 1) {
            return false;
        }
        if (this.scrollEl.scrollTop > 0) {
            return false;
        }
        return true;
    }
    onStart() {
        this.progress = 0;
        this.state = 1;
    }
    onMove(detail) {
        if (!this.scrollEl) {
            return;
        }
        const ev = detail.event;
        if (ev.touches && ev.touches.length > 1) {
            return;
        }
        if ((this.state & 56) !== 0) {
            return;
        }
        const deltaY = detail.deltaY;
        if (deltaY <= 0) {
            this.progress = 0;
            this.state = 1;
            if (this.appliedStyles) {
                this.setCss(0, '', false, '');
                return;
            }
            return;
        }
        if (this.state === 1) {
            const scrollHostScrollTop = this.scrollEl.scrollTop;
            if (scrollHostScrollTop > 0) {
                this.progress = 0;
                return;
            }
            this.state = 2;
        }
        ev.preventDefault();
        this.setCss(deltaY, '0ms', true, '');
        if (deltaY === 0) {
            this.progress = 0;
            return;
        }
        const pullMin = this.pullMin;
        this.progress = deltaY / pullMin;
        if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
        }
        this.ionPull.emit();
        if (deltaY < pullMin) {
            this.state = 2;
            return;
        }
        if (deltaY > this.pullMax) {
            this.beginRefresh();
            return;
        }
        this.state = 4;
        return;
    }
    onEnd() {
        if (this.state === 4) {
            this.beginRefresh();
        }
        else if (this.state === 2) {
            this.cancel();
        }
    }
    beginRefresh() {
        this.state = 8;
        this.setCss(this.pullMin, this.snapbackDuration, true, '');
        this.ionRefresh.emit({
            complete: this.complete.bind(this)
        });
    }
    close(state, delay) {
        setTimeout(() => {
            this.state = 1;
            this.progress = 0;
            this.didStart = false;
            this.setCss(0, '0ms', false, '');
        }, 600);
        this.state = state;
        this.setCss(0, this.closeDuration, true, delay);
    }
    setCss(y, duration, overflowVisible, delay) {
        this.appliedStyles = (y > 0);
        this.queue.write(() => {
            if (this.scrollEl) {
                const style = this.scrollEl.style;
                style.transform = ((y > 0) ? `translateY(${y}px) translateZ(0px)` : 'translateZ(0px)');
                style.transitionDuration = duration;
                style.transitionDelay = delay;
                style.overflow = (overflowVisible ? 'hidden' : '');
            }
        });
    }
    hostData() {
        return {
            slot: 'fixed',
            class: Object.assign({}, Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.mode, 'refresher'), { 'refresher-active': this.state !== 1, 'refresher-pulling': this.state === 2, 'refresher-ready': this.state === 4, 'refresher-refreshing': this.state === 8, 'refresher-cancelling': this.state === 16, 'refresher-completing': this.state === 32 })
        };
    }
    static get is() { return "ion-refresher"; }
    static get properties() { return {
        "cancel": {
            "method": true
        },
        "closeDuration": {
            "type": String,
            "attr": "close-duration"
        },
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
        "getProgress": {
            "method": true
        },
        "pullMax": {
            "type": Number,
            "attr": "pull-max"
        },
        "pullMin": {
            "type": Number,
            "attr": "pull-min"
        },
        "queue": {
            "context": "queue"
        },
        "snapbackDuration": {
            "type": String,
            "attr": "snapback-duration"
        },
        "state": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ionRefresh",
            "method": "ionRefresh",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionPull",
            "method": "ionPull",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionStart",
            "method": "ionStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher{right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"; }
    static get styleMode() { return "md"; }
}

class RefresherContent {
    componentWillLoad() {
        if (this.pullingIcon === undefined) {
            this.pullingIcon = this.config.get('refreshingIcon', 'arrow-down');
        }
        if (this.refreshingSpinner === undefined) {
            this.refreshingSpinner = this.config.get('refreshingSpinner', this.config.get('spinner', 'lines'));
        }
    }
    render() {
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling" },
                this.pullingIcon &&
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-icon" },
                        Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { icon: this.pullingIcon, lazy: false })),
                this.pullingText &&
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-pulling-text", innerHTML: this.pullingText })),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing" },
                this.refreshingSpinner &&
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-icon" },
                        Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", { name: this.refreshingSpinner })),
                this.refreshingText &&
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "refresher-refreshing-text", innerHTML: this.refreshingText }))
        ];
    }
    static get is() { return "ion-refresher-content"; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "pullingIcon": {
            "type": String,
            "attr": "pulling-icon",
            "mutable": true
        },
        "pullingText": {
            "type": String,
            "attr": "pulling-text"
        },
        "refreshingSpinner": {
            "type": String,
            "attr": "refreshing-spinner",
            "mutable": true
        },
        "refreshingText": {
            "type": String,
            "attr": "refreshing-text"
        }
    }; }
}




/***/ })

}]);
//# sourceMappingURL=89.js.map