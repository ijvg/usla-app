(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-4513ec06.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-4513ec06.js ***!
  \**************************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-6d7d2f8c.js");




function startTapClick(doc, config) {
    let lastTouch = -MOUSE_WAIT * 10;
    let lastActivated = 0;
    let scrollingEl;
    let activatableEle;
    let activeRipple;
    let activeDefer;
    const useRippleEffect = config.getBoolean('animated', true) && config.getBoolean('rippleEffect', true);
    const clearDefers = new WeakMap();
    function isScrolling() {
        return scrollingEl !== undefined && scrollingEl.parentElement !== null;
    }
    function onTouchStart(ev) {
        lastTouch = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["b"])(ev);
        pointerDown(ev);
    }
    function onTouchEnd(ev) {
        lastTouch = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["b"])(ev);
        pointerUp(ev);
    }
    function onMouseDown(ev) {
        const t = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["b"])(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerDown(ev);
        }
    }
    function onMouseUp(ev) {
        const t = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["b"])(ev) - MOUSE_WAIT;
        if (lastTouch < t) {
            pointerUp(ev);
        }
    }
    function cancelActive() {
        clearTimeout(activeDefer);
        activeDefer = undefined;
        if (activatableEle) {
            removeActivated(false);
            activatableEle = undefined;
        }
    }
    function pointerDown(ev) {
        if (activatableEle || isScrolling()) {
            return;
        }
        scrollingEl = undefined;
        setActivatedElement(getActivatableTarget(ev), ev);
    }
    function pointerUp(ev) {
        setActivatedElement(undefined, ev);
    }
    function setActivatedElement(el, ev) {
        if (el && el === activatableEle) {
            return;
        }
        clearTimeout(activeDefer);
        activeDefer = undefined;
        const { x, y } = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_1__["k"])(ev);
        if (activatableEle) {
            if (clearDefers.has(activatableEle)) {
                throw new Error('internal error');
            }
            if (!activatableEle.classList.contains(ACTIVATED)) {
                addActivated(activatableEle, x, y);
            }
            removeActivated(true);
        }
        if (el) {
            const deferId = clearDefers.get(el);
            if (deferId) {
                clearTimeout(deferId);
                clearDefers.delete(el);
            }
            const delay = isInstant(el) ? 0 : ADD_ACTIVATED_DEFERS;
            el.classList.remove(ACTIVATED);
            activeDefer = setTimeout(() => {
                addActivated(el, x, y);
                activeDefer = undefined;
            }, delay);
        }
        activatableEle = el;
    }
    function addActivated(el, x, y) {
        lastActivated = Date.now();
        el.classList.add(ACTIVATED);
        const rippleEffect = useRippleEffect && getRippleEffect(el);
        if (rippleEffect && rippleEffect.addRipple) {
            activeRipple = rippleEffect.addRipple(x, y);
        }
    }
    function removeActivated(smooth) {
        if (activeRipple !== undefined) {
            activeRipple.then(remove => remove());
        }
        const active = activatableEle;
        if (!active) {
            return;
        }
        const time = CLEAR_STATE_DEFERS - Date.now() + lastActivated;
        if (smooth && time > 0 && !isInstant(active)) {
            const deferId = setTimeout(() => {
                active.classList.remove(ACTIVATED);
                clearDefers.delete(active);
            }, CLEAR_STATE_DEFERS);
            clearDefers.set(active, deferId);
        }
        else {
            active.classList.remove(ACTIVATED);
        }
    }
    doc.addEventListener('ionScrollStart', ev => {
        scrollingEl = ev.target;
        cancelActive();
    });
    doc.addEventListener('ionScrollEnd', () => {
        scrollingEl = undefined;
    });
    doc.addEventListener('ionGestureCaptured', cancelActive);
    doc.addEventListener('touchstart', onTouchStart, true);
    doc.addEventListener('touchcancel', onTouchEnd, true);
    doc.addEventListener('touchend', onTouchEnd, true);
    doc.addEventListener('mousedown', onMouseDown, true);
    doc.addEventListener('mouseup', onMouseUp, true);
}
function getActivatableTarget(ev) {
    if (ev.composedPath) {
        const path = ev.composedPath();
        for (let i = 0; i < path.length - 2; i++) {
            const el = path[i];
            if (el.classList && el.classList.contains('ion-activatable')) {
                return el;
            }
        }
    }
    else {
        return ev.target.closest('.ion-activatable');
    }
}
function isInstant(el) {
    return el.classList.contains('ion-activatable-instant');
}
function getRippleEffect(el) {
    if (el.shadowRoot) {
        const ripple = el.shadowRoot.querySelector('ion-ripple-effect');
        if (ripple) {
            return ripple;
        }
    }
    return el.querySelector('ion-ripple-effect');
}
const ACTIVATED = 'activated';
const ADD_ACTIVATED_DEFERS = 200;
const CLEAR_STATE_DEFERS = 200;
const MOUSE_WAIT = 2500;




/***/ })

}]);
//# sourceMappingURL=4.js.map