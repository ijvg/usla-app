(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[160],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/z9nt6ntd.sc.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/z9nt6ntd.sc.entry.js ***!
  \*****************************************************************************/
/*! exports provided: IonRippleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRippleEffect", function() { return RippleEffect; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


class RippleEffect {
    constructor() {
        this.type = 'bounded';
    }
    async addRipple(pageX, pageY) {
        return new Promise(resolve => {
            this.queue.read(() => {
                const rect = this.el.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;
                const hypotenuse = Math.sqrt(width * width + height * height);
                const maxDim = Math.max(height, width);
                const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
                const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                const finalScale = maxRadius / initialSize;
                let posX = pageX - rect.left;
                let posY = pageY - rect.top;
                if (this.unbounded) {
                    posX = width * 0.5;
                    posY = height * 0.5;
                }
                const x = posX - initialSize * 0.5;
                const y = posY - initialSize * 0.5;
                const moveX = width * 0.5 - posX;
                const moveY = height * 0.5 - posY;
                this.queue.write(() => {
                    const div = this.win.document.createElement('div');
                    div.classList.add('ripple-effect');
                    const style = div.style;
                    style.top = y + 'px';
                    style.left = x + 'px';
                    style.width = style.height = initialSize + 'px';
                    style.setProperty('--final-scale', `${finalScale}`);
                    style.setProperty('--translate-end', `${moveX}px, ${moveY}px`);
                    const container = this.el.shadowRoot || this.el;
                    container.appendChild(div);
                    setTimeout(() => {
                        resolve(() => {
                            removeRipple(div);
                        });
                    }, 225 + 100);
                });
            });
        });
    }
    get unbounded() {
        return this.type === 'unbounded';
    }
    hostData() {
        return {
            role: 'presentation',
            class: {
                'unbounded': this.unbounded
            }
        };
    }
    static get is() { return "ion-ripple-effect"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "addRipple": {
            "method": true
        },
        "el": {
            "elementRef": true
        },
        "queue": {
            "context": "queue"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get style() { return ".sc-ion-ripple-effect-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}.unbounded.sc-ion-ripple-effect-h{contain:layout size style}.ripple-effect.sc-ion-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out.sc-ion-ripple-effect{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}\@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}\@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}\@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}\@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"; }
}
function removeRipple(ripple) {
    ripple.classList.add('fade-out');
    setTimeout(() => {
        ripple.remove();
    }, 200);
}
const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;




/***/ })

}]);
//# sourceMappingURL=160.js.map