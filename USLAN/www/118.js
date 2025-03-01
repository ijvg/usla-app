(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/s0ahgtia.sc.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/s0ahgtia.sc.entry.js ***!
  \*****************************************************************************/
/*! exports provided: IonApp, IonButtons, IonContent, IonFooter, IonHeader, IonTitle, IonToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonApp", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonButtons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonContent", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonFooter", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonHeader", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonTitle", function() { return ToolbarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonToolbar", function() { return Toolbar; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-7c632336.js");
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-6d7d2f8c.js");
/* harmony import */ var _chunk_62036b20_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-62036b20.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-62036b20.js");






class App {
    componentDidLoad() {
        Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["a"])(() => {
            const { win, config, queue } = this;
            if (!config.getBoolean('_testing')) {
                importTapClick(win, config);
            }
            importInputShims(win, config);
            importStatusTap(win, config, queue);
            importHardwareBackButton(win, config);
            importFocusVisible(win);
        });
    }
    hostData() {
        return {
            class: {
                'ion-page': true,
                'force-statusbar-padding': this.config.getBoolean('_forceStatusbarPadding')
            }
        };
    }
    static get is() { return "ion-app"; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "el": {
            "elementRef": true
        },
        "queue": {
            "context": "queue"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"; }
}
function importHardwareBackButton(win, config) {
    const hardwareBackConfig = config.getBoolean('hardwareBackButton', Object(_chunk_62036b20_js__WEBPACK_IMPORTED_MODULE_3__["a"])(win, 'hybrid'));
    if (hardwareBackConfig) {
        __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./chunk-f5118fa0.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-f5118fa0.js")).then(module => module.startHardwareBackButton(win));
    }
}
function importStatusTap(win, config, queue) {
    const statusTap = config.getBoolean('statusTap', Object(_chunk_62036b20_js__WEBPACK_IMPORTED_MODULE_3__["a"])(win, 'hybrid'));
    if (statusTap) {
        __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./chunk-75ece731.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-75ece731.js")).then(module => module.startStatusTap(win, queue));
    }
}
function importFocusVisible(win) {
    __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./chunk-2a112823.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-2a112823.js")).then(module => module.startFocusVisible(win.document));
}
function importTapClick(win, config) {
    __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./chunk-4513ec06.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-4513ec06.js")).then(module => module.startTapClick(win.document, config));
}
function importInputShims(win, config) {
    const inputShims = config.getBoolean('inputShims', needInputShims(win));
    if (inputShims) {
        __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./chunk-b465a1c6.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-b465a1c6.js")).then(module => module.startInputShims(win.document, config));
    }
}
function needInputShims(win) {
    return Object(_chunk_62036b20_js__WEBPACK_IMPORTED_MODULE_3__["a"])(win, 'ios') && Object(_chunk_62036b20_js__WEBPACK_IMPORTED_MODULE_3__["a"])(win, 'mobile');
}

class Buttons {
    static get is() { return "ion-buttons"; }
    static get encapsulation() { return "scoped"; }
    static get style() { return ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-start:0;--padding-end:0;--box-shadow:none;--overflow:visible;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:2px;margin-right:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;--padding-start:5px;--padding-end:5px;height:32px;font-size:17px;font-weight:400}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--color-activated:initial}\@media (any-hover:hover){.sc-ion-buttons-ios-s  .button-solid-ios:hover {opacity:.4}}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"; }
    static get styleMode() { return "ios"; }
}

class Content {
    constructor() {
        this.isScrolling = false;
        this.lastScroll = 0;
        this.queued = false;
        this.cTop = -1;
        this.cBottom = -1;
        this.detail = {
            scrollTop: 0,
            scrollLeft: 0,
            type: 'scroll',
            event: undefined,
            startX: 0,
            startY: 0,
            startTimeStamp: 0,
            currentX: 0,
            currentY: 0,
            velocityX: 0,
            velocityY: 0,
            deltaX: 0,
            deltaY: 0,
            timeStamp: 0,
            data: undefined,
            isScrolling: true,
        };
        this.fullscreen = false;
        this.scrollX = false;
        this.scrollY = true;
        this.scrollEvents = false;
    }
    componentWillLoad() {
        if (this.forceOverscroll === undefined) {
            this.forceOverscroll = this.mode === 'ios' && Object(_chunk_62036b20_js__WEBPACK_IMPORTED_MODULE_3__["a"])(this.win, 'mobile');
        }
    }
    componentDidLoad() {
        this.resize();
    }
    componentDidUnload() {
        this.onScrollEnd();
    }
    onClick(ev) {
        if (this.isScrolling) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    resize() {
        if (this.fullscreen) {
            this.queue.read(this.readDimensions.bind(this));
        }
        else if (this.cTop !== 0 || this.cBottom !== 0) {
            this.cTop = this.cBottom = 0;
            this.el.forceUpdate();
        }
    }
    readDimensions() {
        const page = getPageElement(this.el);
        const top = Math.max(this.el.offsetTop, 0);
        const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
        const dirty = top !== this.cTop || bottom !== this.cBottom;
        if (dirty) {
            this.cTop = top;
            this.cBottom = bottom;
            this.el.forceUpdate();
        }
    }
    onScroll(ev) {
        const timeStamp = Date.now();
        const shouldStart = !this.isScrolling;
        this.lastScroll = timeStamp;
        if (shouldStart) {
            this.onScrollStart();
        }
        if (!this.queued && this.scrollEvents) {
            this.queued = true;
            this.queue.read(ts => {
                this.queued = false;
                this.detail.event = ev;
                updateScrollDetail(this.detail, this.scrollEl, ts, shouldStart);
                this.ionScroll.emit(this.detail);
            });
        }
    }
    getScrollElement() {
        return Promise.resolve(this.scrollEl);
    }
    scrollToTop(duration = 0) {
        return this.scrollToPoint(undefined, 0, duration);
    }
    scrollToBottom(duration = 0) {
        const y = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
        return this.scrollToPoint(undefined, y, duration);
    }
    scrollByPoint(x, y, duration) {
        return this.scrollToPoint(x + this.scrollEl.scrollLeft, y + this.scrollEl.scrollTop, duration);
    }
    async scrollToPoint(x, y, duration = 0) {
        const el = this.scrollEl;
        if (duration < 32) {
            if (y != null) {
                el.scrollTop = y;
            }
            if (x != null) {
                el.scrollLeft = x;
            }
            return;
        }
        let resolve;
        let startTime = 0;
        const promise = new Promise(r => resolve = r);
        const fromY = el.scrollTop;
        const fromX = el.scrollLeft;
        const deltaY = y != null ? y - fromY : 0;
        const deltaX = x != null ? x - fromX : 0;
        const step = (timeStamp) => {
            const linearTime = Math.min(1, ((timeStamp - startTime) / duration)) - 1;
            const easedT = Math.pow(linearTime, 3) + 1;
            if (deltaY !== 0) {
                el.scrollTop = Math.floor((easedT * deltaY) + fromY);
            }
            if (deltaX !== 0) {
                el.scrollLeft = Math.floor((easedT * deltaX) + fromX);
            }
            if (easedT < 1) {
                requestAnimationFrame(step);
            }
            else {
                resolve();
            }
        };
        requestAnimationFrame(ts => {
            startTime = ts;
            step(ts);
        });
        return promise;
    }
    onScrollStart() {
        this.isScrolling = true;
        this.ionScrollStart.emit({
            isScrolling: true
        });
        if (this.watchDog) {
            clearInterval(this.watchDog);
        }
        this.watchDog = setInterval(() => {
            if (this.lastScroll < Date.now() - 120) {
                this.onScrollEnd();
            }
        }, 100);
    }
    onScrollEnd() {
        clearInterval(this.watchDog);
        this.watchDog = null;
        if (this.isScrolling) {
            this.isScrolling = false;
            this.ionScrollEnd.emit({
                isScrolling: false
            });
        }
    }
    hostData() {
        return {
            class: Object.assign({}, Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color), { 'content-sizing': Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["d"])('ion-popover', this.el), 'overscroll': !!this.forceOverscroll }),
            style: {
                '--offset-top': `${this.cTop}px`,
                '--offset-bottom': `${this.cBottom}px`,
            }
        };
    }
    render() {
        const { scrollX, scrollY, forceOverscroll } = this;
        this.resize();
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
                    'inner-scroll': true,
                    'scroll-x': scrollX,
                    'scroll-y': scrollY,
                    'overscroll': (scrollX || scrollY) && !!forceOverscroll
                }, ref: el => this.scrollEl = el, onScroll: ev => this.onScroll(ev) },
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "fixed" })
        ];
    }
    static get is() { return "ion-content"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "el": {
            "elementRef": true
        },
        "forceOverscroll": {
            "type": Boolean,
            "attr": "force-overscroll",
            "mutable": true
        },
        "fullscreen": {
            "type": Boolean,
            "attr": "fullscreen"
        },
        "getScrollElement": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "scrollByPoint": {
            "method": true
        },
        "scrollEvents": {
            "type": Boolean,
            "attr": "scroll-events"
        },
        "scrollToBottom": {
            "method": true
        },
        "scrollToPoint": {
            "method": true
        },
        "scrollToTop": {
            "method": true
        },
        "scrollX": {
            "type": Boolean,
            "attr": "scroll-x"
        },
        "scrollY": {
            "type": Boolean,
            "attr": "scroll-y"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionScrollStart",
            "method": "ionScrollStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionScroll",
            "method": "ionScroll",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionScrollEnd",
            "method": "ionScrollEnd",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick",
            "capture": true
        }]; }
    static get style() { return ".sc-ion-content-h{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}.ion-color.sc-ion-content-h   .inner-scroll.sc-ion-content{background:var(--ion-color-base);color:var(--ion-color-contrast)}.outer-content.sc-ion-content-h{--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll.sc-ion-content{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll.sc-ion-content{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x.sc-ion-content, .scroll-y.sc-ion-content{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y.sc-ion-content{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x.sc-ion-content{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y.sc-ion-content{-ms-touch-action:auto;touch-action:auto}.overscroll.sc-ion-content:after, .overscroll.sc-ion-content:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll.sc-ion-content:before{bottom:-1px}.overscroll.sc-ion-content:after{top:-1px}.content-sizing.sc-ion-content-h{contain:none}.content-sizing.sc-ion-content-h   .inner-scroll.sc-ion-content{position:relative}"; }
}
function getParentElement(el) {
    if (el.parentElement) {
        return el.parentElement;
    }
    if (el.parentNode && el.parentNode.host) {
        return el.parentNode.host;
    }
    return null;
}
function getPageElement(el) {
    const tabs = el.closest('ion-tabs');
    if (tabs) {
        return tabs;
    }
    const page = el.closest('ion-app,ion-page,.ion-page,page-inner');
    if (page) {
        return page;
    }
    return getParentElement(el);
}
function updateScrollDetail(detail, el, timestamp, shouldStart) {
    const prevX = detail.currentX;
    const prevY = detail.currentY;
    const prevT = detail.timeStamp;
    const currentX = el.scrollLeft;
    const currentY = el.scrollTop;
    if (shouldStart) {
        detail.startTimeStamp = timestamp;
        detail.startX = currentX;
        detail.startY = currentY;
        detail.velocityX = detail.velocityY = 0;
    }
    detail.timeStamp = timestamp;
    detail.currentX = detail.scrollLeft = currentX;
    detail.currentY = detail.scrollTop = currentY;
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    const timeDelta = timestamp - prevT;
    if (timeDelta > 0 && timeDelta < 100) {
        const velocityX = (currentX - prevX) / timeDelta;
        const velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
}

class Footer {
    constructor() {
        this.translucent = false;
    }
    hostData() {
        const themedClasses = Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.mode, 'footer');
        const translucentClasses = this.translucent ? Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.mode, 'footer-translucent') : null;
        return {
            class: Object.assign({}, themedClasses, translucentClasses)
        };
    }
    static get is() { return "ion-footer"; }
    static get properties() { return {
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get style() { return "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"; }
    static get styleMode() { return "ios"; }
}

class Header {
    constructor() {
        this.translucent = false;
    }
    hostData() {
        const themedClasses = Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.mode, 'header');
        const translucentClasses = this.translucent ? Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.mode, 'header-translucent') : null;
        return {
            class: Object.assign({}, themedClasses, translucentClasses)
        };
    }
    static get is() { return "ion-header"; }
    static get properties() { return {
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get style() { return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"; }
    static get styleMode() { return "ios"; }
}

class ToolbarTitle {
    getMode() {
        const toolbar = this.el.closest('ion-toolbar');
        return (toolbar && toolbar.mode) || this.mode;
    }
    hostData() {
        const mode = this.getMode();
        return {
            class: Object.assign({}, Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color), { [`title-${mode}`]: true })
        };
    }
    render() {
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-title" },
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))
        ];
    }
    static get is() { return "ion-title"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "el": {
            "elementRef": true
        }
    }; }
    static get style() { return ".sc-ion-title-h{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}.sc-ion-title-h, .title-ios.sc-ion-title-h{-webkit-transform:translateZ(0);transform:translateZ(0)}.title-ios.sc-ion-title-h{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}[dir=rtl].title-ios.sc-ion-title-h{right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.title-ios.sc-ion-title-h{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}.title-md.sc-ion-title-h{padding-left:12px;padding-right:12px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.title-md.sc-ion-title-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.ion-color.sc-ion-title-h{color:var(--ion-color-base)}.toolbar-title.sc-ion-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"; }
}

class Toolbar {
    constructor() {
        this.childrenStyles = new Map();
    }
    childrenStyle(ev) {
        ev.stopPropagation();
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        const newStyles = {};
        const childStyles = this.childrenStyles.get(tagName) || {};
        let hasStyleChange = false;
        Object.keys(updatedStyles).forEach(key => {
            const childKey = `toolbar-${key}`;
            const newValue = updatedStyles[key];
            if (newValue !== childStyles[childKey]) {
                hasStyleChange = true;
            }
            if (newValue) {
                newStyles[childKey] = true;
            }
        });
        if (hasStyleChange) {
            this.childrenStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    }
    hostData() {
        const childStyles = {};
        this.childrenStyles.forEach(value => {
            Object.assign(childStyles, value);
        });
        return {
            class: Object.assign({}, childStyles, Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color))
        };
    }
    render() {
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-background" }),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-container" },
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "secondary" }),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toolbar-content" },
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "primary" }),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" }))
        ];
    }
    static get is() { return "ion-toolbar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get listeners() { return [{
            "name": "ionStyle",
            "method": "childrenStyle"
        }]; }
    static get style() { return ".sc-ion-toolbar-ios-h{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-toolbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}.ion-color.sc-ion-toolbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-toolbar-ios-h   .toolbar-background.sc-ion-toolbar-ios{background:var(--ion-color-base)}.toolbar-container.sc-ion-toolbar-ios{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container.sc-ion-toolbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background.sc-ion-toolbar-ios{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-segment.sc-ion-toolbar-ios-h{--min-height:auto}.sc-ion-toolbar-ios-s > ion-progress-bar{left:0;right:0;bottom:0;position:absolute}.sc-ion-toolbar-ios-h{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content.sc-ion-toolbar-ios{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}.sc-ion-toolbar-ios-s > [slot=start]{-ms-flex-order:2;order:2}.sc-ion-toolbar-ios-s > [slot=secondary]{-ms-flex-order:3;order:3}.sc-ion-toolbar-ios-s > [slot=primary]{-ms-flex-order:5;order:5;text-align:end}.sc-ion-toolbar-ios-s > [slot=end]{-ms-flex-order:6;order:6;text-align:end}"; }
    static get styleMode() { return "ios"; }
}




/***/ })

}]);
//# sourceMappingURL=118.js.map