(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/3hf0d5sl.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/3hf0d5sl.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonNav, IonNavPop, IonNavPush, IonNavSetRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNavPop", function() { return NavPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNavPush", function() { return NavPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonNavSetRoot", function() { return NavSetRoot; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-6d7d2f8c.js");
/* harmony import */ var _chunk_99929188_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-99929188.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-99929188.js");
/* harmony import */ var _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-90d954cd.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-90d954cd.js");
/* harmony import */ var _chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunk-da1efb5f.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-da1efb5f.js");







const VIEW_STATE_NEW = 1;
const VIEW_STATE_ATTACHED = 2;
const VIEW_STATE_DESTROYED = 3;
class ViewController {
    constructor(component, params) {
        this.component = component;
        this.params = params;
        this.state = VIEW_STATE_NEW;
    }
    async init(container) {
        this.state = VIEW_STATE_ATTACHED;
        if (!this.element) {
            const component = this.component;
            this.element = await Object(_chunk_99929188_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, container, component, ['ion-page', 'ion-page-invisible'], this.params);
        }
    }
    _destroy() {
        Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
        const element = this.element;
        if (element) {
            if (this.delegate) {
                this.delegate.removeViewFromDom(element.parentElement, element);
            }
            else {
                element.remove();
            }
        }
        this.nav = undefined;
        this.state = VIEW_STATE_DESTROYED;
    }
}
function matches(view, id, params) {
    if (!view) {
        return false;
    }
    if (view.component !== id) {
        return false;
    }
    const currentParams = view.params;
    if (currentParams === params) {
        return true;
    }
    if (!currentParams && !params) {
        return true;
    }
    if (!currentParams || !params) {
        return false;
    }
    const keysA = Object.keys(currentParams);
    const keysB = Object.keys(params);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (const key of keysA) {
        if (currentParams[key] !== params[key]) {
            return false;
        }
    }
    return true;
}
function convertToView(page, params) {
    if (!page) {
        return null;
    }
    if (page instanceof ViewController) {
        return page;
    }
    return new ViewController(page, params);
}
function convertToViews(pages) {
    return pages.map(page => {
        if (page instanceof ViewController) {
            return page;
        }
        if ('page' in page) {
            return convertToView(page.page, page.params);
        }
        return convertToView(page, undefined);
    }).filter(v => v !== null);
}

class Nav {
    constructor() {
        this.transInstr = [];
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        this.animated = true;
    }
    swipeGestureChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.swipeGesture !== true);
        }
    }
    rootChanged() {
        if (this.root !== undefined) {
            if (!this.useRouter) {
                this.setRoot(this.root, this.rootParams);
            }
        }
    }
    componentWillLoad() {
        this.useRouter =
            !!this.win.document.querySelector('ion-router') &&
                !this.el.closest('[no-router]');
        if (this.swipeGesture === undefined) {
            this.swipeGesture = this.config.getBoolean('swipeBackEnabled', this.mode === 'ios');
        }
        this.ionNavWillLoad.emit();
    }
    async componentDidLoad() {
        this.rootChanged();
        this.gesture = (await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common"), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./chunk-ca529fbc.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-ca529fbc.js"))).createSwipeBackGesture(this.el, this.queue, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
        this.swipeGestureChanged();
    }
    componentDidUnload() {
        for (const view of this.views) {
            Object(_chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_4__["b"])(view.element, _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_3__["e"]);
            view._destroy();
        }
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
        this.transInstr.length = this.views.length = 0;
        this.destroyed = true;
    }
    push(component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: -1,
            insertViews: [{ page: component, params: componentProps }],
            opts
        }, done);
    }
    insert(insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: [{ page: component, params: componentProps }],
            opts
        }, done);
    }
    insertPages(insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
            insertStart: insertIndex,
            insertViews: insertComponents,
            opts
        }, done);
    }
    pop(opts, done) {
        return this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts
        }, done);
    }
    popTo(indexOrViewCtrl, opts, done) {
        const config = {
            removeStart: -1,
            removeCount: -1,
            opts
        };
        if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
            config.removeView = indexOrViewCtrl;
            config.removeStart = 1;
        }
        else if (typeof indexOrViewCtrl === 'number') {
            config.removeStart = indexOrViewCtrl + 1;
        }
        return this.queueTrns(config, done);
    }
    popToRoot(opts, done) {
        return this.queueTrns({
            removeStart: 1,
            removeCount: -1,
            opts
        }, done);
    }
    removeIndex(startIndex, removeCount = 1, opts, done) {
        return this.queueTrns({
            removeStart: startIndex,
            removeCount,
            opts
        }, done);
    }
    setRoot(component, componentProps, opts, done) {
        return this.setPages([{ page: component, params: componentProps }], opts, done);
    }
    setPages(views, opts, done) {
        if (opts == null) {
            opts = {};
        }
        if (opts.animated !== true) {
            opts.animated = false;
        }
        return this.queueTrns({
            insertStart: 0,
            insertViews: views,
            removeStart: 0,
            removeCount: -1,
            opts
        }, done);
    }
    setRouteId(id, params, direction) {
        const active = this.getActiveSync();
        if (matches(active, id, params)) {
            return Promise.resolve({
                changed: false,
                element: active.element
            });
        }
        let resolve;
        const promise = new Promise(r => (resolve = r));
        let finish;
        const commonOpts = {
            updateURL: false,
            viewIsReady: enteringEl => {
                let mark;
                const p = new Promise(r => (mark = r));
                resolve({
                    changed: true,
                    element: enteringEl,
                    markVisible: async () => {
                        mark();
                        await finish;
                    }
                });
                return p;
            }
        };
        if (direction === 'root') {
            finish = this.setRoot(id, params, commonOpts);
        }
        else {
            const viewController = this.views.find(v => matches(v, id, params));
            if (viewController) {
                finish = this.popTo(viewController, Object.assign({}, commonOpts, { direction: 'back' }));
            }
            else if (direction === 'forward') {
                finish = this.push(id, params, commonOpts);
            }
            else if (direction === 'back') {
                finish = this.setRoot(id, params, Object.assign({}, commonOpts, { direction: 'back', animated: true }));
            }
        }
        return promise;
    }
    async getRouteId() {
        const active = this.getActiveSync();
        return active
            ? {
                id: active.element.tagName,
                params: active.params,
                element: active.element
            }
            : undefined;
    }
    getActive() {
        return Promise.resolve(this.getActiveSync());
    }
    getByIndex(index) {
        return Promise.resolve(this.views[index]);
    }
    canGoBack(view) {
        return Promise.resolve(this.canGoBackSync(view));
    }
    getPrevious(view) {
        return Promise.resolve(this.getPreviousSync(view));
    }
    getLength() {
        return this.views.length;
    }
    getActiveSync() {
        return this.views[this.views.length - 1];
    }
    canGoBackSync(view = this.getActiveSync()) {
        return !!(view && this.getPreviousSync(view));
    }
    getPreviousSync(view = this.getActiveSync()) {
        if (!view) {
            return undefined;
        }
        const views = this.views;
        const index = views.indexOf(view);
        return index > 0 ? views[index - 1] : undefined;
    }
    queueTrns(ti, done) {
        if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
            return Promise.resolve(false);
        }
        const promise = new Promise((resolve, reject) => {
            ti.resolve = resolve;
            ti.reject = reject;
        });
        ti.done = done;
        if (ti.insertViews && ti.insertViews.length === 0) {
            ti.insertViews = undefined;
        }
        this.transInstr.push(ti);
        this.nextTrns();
        return promise;
    }
    success(result, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        if (ti.done) {
            ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }
        ti.resolve(result.hasCompleted);
        if (ti.opts.updateURL !== false && this.useRouter) {
            const router = this.win.document.querySelector('ion-router');
            if (router) {
                const direction = result.direction === 'back' ? 'back' : 'forward';
                router.navChanged(direction);
            }
        }
    }
    failed(rejectReason, ti) {
        if (this.destroyed) {
            this.fireError('nav controller was destroyed', ti);
            return;
        }
        this.transInstr.length = 0;
        this.fireError(rejectReason, ti);
    }
    fireError(rejectReason, ti) {
        if (ti.done) {
            ti.done(false, false, rejectReason);
        }
        if (ti.reject && !this.destroyed) {
            ti.reject(rejectReason);
        }
        else {
            ti.resolve(false);
        }
    }
    nextTrns() {
        if (this.isTransitioning) {
            return false;
        }
        const ti = this.transInstr.shift();
        if (!ti) {
            return false;
        }
        this.runTransition(ti);
        return true;
    }
    async runTransition(ti) {
        try {
            this.ionNavWillChange.emit();
            this.isTransitioning = true;
            this.prepareTI(ti);
            const leavingView = this.getActiveSync();
            const enteringView = this.getEnteringView(ti, leavingView);
            if (!leavingView && !enteringView) {
                throw new Error('no views in the stack to be removed');
            }
            if (enteringView && enteringView.state === VIEW_STATE_NEW) {
                await enteringView.init(this.el);
            }
            this.postViewInit(enteringView, leavingView, ti);
            const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
                enteringView !== leavingView;
            const result = requiresTransition
                ? await this.transition(enteringView, leavingView, ti)
                : {
                    hasCompleted: true,
                    requiresTransition: false
                };
            this.success(result, ti);
            this.ionNavDidChange.emit();
        }
        catch (rejectReason) {
            this.failed(rejectReason, ti);
        }
        this.isTransitioning = false;
        this.nextTrns();
    }
    prepareTI(ti) {
        const viewsLength = this.views.length;
        ti.opts = ti.opts || {};
        if (ti.opts.delegate === undefined) {
            ti.opts.delegate = this.delegate;
        }
        if (ti.removeView !== undefined) {
            Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(ti.removeStart !== undefined, 'removeView needs removeStart');
            Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(ti.removeCount !== undefined, 'removeView needs removeCount');
            const index = this.views.indexOf(ti.removeView);
            if (index < 0) {
                throw new Error('removeView was not found');
            }
            ti.removeStart += index;
        }
        if (ti.removeStart !== undefined) {
            if (ti.removeStart < 0) {
                ti.removeStart = viewsLength - 1;
            }
            if (ti.removeCount < 0) {
                ti.removeCount = viewsLength - ti.removeStart;
            }
            ti.leavingRequiresTransition =
                ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
        }
        if (ti.insertViews) {
            if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
                ti.insertStart = viewsLength;
            }
            ti.enteringRequiresTransition = ti.insertStart === viewsLength;
        }
        const insertViews = ti.insertViews;
        if (!insertViews) {
            return;
        }
        Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(insertViews.length > 0, 'length can not be zero');
        const viewControllers = convertToViews(insertViews);
        if (viewControllers.length === 0) {
            throw new Error('invalid views to insert');
        }
        for (const view of viewControllers) {
            view.delegate = ti.opts.delegate;
            const nav = view.nav;
            if (nav && nav !== this) {
                throw new Error('inserted view was already inserted');
            }
            if (view.state === VIEW_STATE_DESTROYED) {
                throw new Error('inserted view was already destroyed');
            }
        }
        ti.insertViews = viewControllers;
    }
    getEnteringView(ti, leavingView) {
        const insertViews = ti.insertViews;
        if (insertViews !== undefined) {
            return insertViews[insertViews.length - 1];
        }
        const removeStart = ti.removeStart;
        if (removeStart !== undefined) {
            const views = this.views;
            const removeEnd = removeStart + ti.removeCount;
            for (let i = views.length - 1; i >= 0; i--) {
                const view = views[i];
                if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
                    return view;
                }
            }
        }
        return undefined;
    }
    postViewInit(enteringView, leavingView, ti) {
        Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
        Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(ti.resolve, 'resolve must be valid');
        Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(ti.reject, 'reject must be valid');
        const opts = ti.opts;
        const insertViews = ti.insertViews;
        const removeStart = ti.removeStart;
        const removeCount = ti.removeCount;
        let destroyQueue;
        if (removeStart !== undefined && removeCount !== undefined) {
            Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(removeStart >= 0, 'removeStart can not be negative');
            Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(removeCount >= 0, 'removeCount can not be negative');
            destroyQueue = [];
            for (let i = 0; i < removeCount; i++) {
                const view = this.views[i + removeStart];
                if (view && view !== enteringView && view !== leavingView) {
                    destroyQueue.push(view);
                }
            }
            opts.direction = opts.direction || 'back';
        }
        const finalBalance = this.views.length +
            (insertViews !== undefined ? insertViews.length : 0) -
            (removeCount !== undefined ? removeCount : 0);
        Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(finalBalance >= 0, 'final balance can not be negative');
        if (finalBalance === 0) {
            console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
            throw new Error('navigation stack needs at least one root page');
        }
        if (insertViews) {
            let insertIndex = ti.insertStart;
            for (const view of insertViews) {
                this.insertViewAt(view, insertIndex);
                insertIndex++;
            }
            if (ti.enteringRequiresTransition) {
                opts.direction = opts.direction || 'forward';
            }
        }
        if (destroyQueue && destroyQueue.length > 0) {
            for (const view of destroyQueue) {
                Object(_chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_4__["b"])(view.element, _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_3__["a"]);
                Object(_chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_4__["b"])(view.element, _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_3__["d"]);
                Object(_chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_4__["b"])(view.element, _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_3__["e"]);
            }
            for (const view of destroyQueue) {
                this.destroyView(view);
            }
        }
    }
    async transition(enteringView, leavingView, ti) {
        const opts = ti.opts;
        const progressCallback = opts.progressAnimation
            ? (ani) => this.sbAni = ani
            : undefined;
        const enteringEl = enteringView.element;
        const leavingEl = leavingView && leavingView.element;
        const animationOpts = Object.assign({ mode: this.mode, showGoBack: this.canGoBackSync(enteringView), queue: this.queue, window: this.win, baseEl: this.el, animationBuilder: this.animation || opts.animationBuilder || this.config.get('navAnimation'), progressCallback, animated: this.animated && this.config.getBoolean('animated', true), enteringEl,
            leavingEl }, opts);
        const { hasCompleted } = await Object(_chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_4__["c"])(animationOpts);
        return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
    }
    transitionFinish(hasCompleted, enteringView, leavingView, opts) {
        const cleanupView = hasCompleted ? enteringView : leavingView;
        if (cleanupView) {
            this.cleanup(cleanupView);
        }
        return {
            hasCompleted,
            requiresTransition: true,
            enteringView,
            leavingView,
            direction: opts.direction
        };
    }
    insertViewAt(view, index) {
        const views = this.views;
        const existingIndex = views.indexOf(view);
        if (existingIndex > -1) {
            Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(view.nav === this, 'view is not part of the nav');
            views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        }
        else {
            Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(!view.nav, 'nav is used');
            view.nav = this;
            views.splice(index, 0, view);
        }
    }
    removeView(view) {
        Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
        const views = this.views;
        const index = views.indexOf(view);
        Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(index > -1, 'view must be part of the stack');
        if (index >= 0) {
            views.splice(index, 1);
        }
    }
    destroyView(view) {
        view._destroy();
        this.removeView(view);
    }
    cleanup(activeView) {
        if (this.destroyed) {
            return;
        }
        const views = this.views;
        const activeViewIndex = views.indexOf(activeView);
        for (let i = views.length - 1; i >= 0; i--) {
            const view = views[i];
            const element = view.element;
            if (i > activeViewIndex) {
                Object(_chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_4__["b"])(element, _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_3__["e"]);
                this.destroyView(view);
            }
            else if (i < activeViewIndex) {
                Object(_chunk_da1efb5f_js__WEBPACK_IMPORTED_MODULE_4__["d"])(element, true);
            }
        }
    }
    canStart() {
        return (!!this.swipeGesture &&
            !this.isTransitioning &&
            this.transInstr.length === 0 &&
            this.canGoBackSync());
    }
    onStart() {
        this.queueTrns({
            removeStart: -1,
            removeCount: 1,
            opts: {
                direction: 'back',
                progressAnimation: true
            }
        }, undefined);
    }
    onMove(stepValue) {
        if (this.sbAni) {
            this.sbAni.progressStep(stepValue);
        }
    }
    onEnd(shouldComplete, stepValue, dur) {
        if (this.sbAni) {
            this.sbAni.progressEnd(shouldComplete, stepValue, dur);
        }
    }
    render() {
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
    }
    static get is() { return "ion-nav"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "animated": {
            "type": Boolean,
            "attr": "animated"
        },
        "animation": {
            "type": "Any",
            "attr": "animation"
        },
        "canGoBack": {
            "method": true
        },
        "config": {
            "context": "config"
        },
        "delegate": {
            "type": "Any",
            "attr": "delegate"
        },
        "el": {
            "elementRef": true
        },
        "getActive": {
            "method": true
        },
        "getByIndex": {
            "method": true
        },
        "getPrevious": {
            "method": true
        },
        "getRouteId": {
            "method": true
        },
        "insert": {
            "method": true
        },
        "insertPages": {
            "method": true
        },
        "pop": {
            "method": true
        },
        "popTo": {
            "method": true
        },
        "popToRoot": {
            "method": true
        },
        "push": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "removeIndex": {
            "method": true
        },
        "root": {
            "type": String,
            "attr": "root",
            "watchCallbacks": ["rootChanged"]
        },
        "rootParams": {
            "type": "Any",
            "attr": "root-params"
        },
        "setPages": {
            "method": true
        },
        "setRoot": {
            "method": true
        },
        "setRouteId": {
            "method": true
        },
        "swipeGesture": {
            "type": Boolean,
            "attr": "swipe-gesture",
            "mutable": true,
            "watchCallbacks": ["swipeGestureChanged"]
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionNavWillLoad",
            "method": "ionNavWillLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavWillChange",
            "method": "ionNavWillChange",
            "bubbles": false,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionNavDidChange",
            "method": "ionNavDidChange",
            "bubbles": false,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"; }
}

class NavPop {
    pop() {
        const nav = this.el.closest('ion-nav');
        if (nav) {
            nav.pop({ skipIfBusy: true });
        }
    }
    static get is() { return "ion-nav-pop"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        }
    }; }
    static get listeners() { return [{
            "name": "child:click",
            "method": "pop"
        }]; }
}

class NavPush {
    push() {
        const nav = this.el.closest('ion-nav');
        const toPush = this.component;
        if (nav && toPush !== undefined) {
            nav.push(toPush, this.componentProps, { skipIfBusy: true });
        }
    }
    static get is() { return "ion-nav-push"; }
    static get properties() { return {
        "component": {
            "type": String,
            "attr": "component"
        },
        "componentProps": {
            "type": "Any",
            "attr": "component-props"
        },
        "el": {
            "elementRef": true
        }
    }; }
    static get listeners() { return [{
            "name": "child:click",
            "method": "push"
        }]; }
}

class NavSetRoot {
    push() {
        const nav = this.el.closest('ion-nav');
        const toPush = this.component;
        if (nav && toPush !== undefined) {
            nav.setRoot(toPush, this.componentProps, { skipIfBusy: true });
        }
    }
    static get is() { return "ion-nav-set-root"; }
    static get properties() { return {
        "component": {
            "type": String,
            "attr": "component"
        },
        "componentProps": {
            "type": "Any",
            "attr": "component-props"
        },
        "el": {
            "elementRef": true
        }
    }; }
    static get listeners() { return [{
            "name": "child:click",
            "method": "push"
        }]; }
}




/***/ })

}]);
//# sourceMappingURL=13.js.map