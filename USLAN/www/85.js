(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/jzmfoyaa.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/jzmfoyaa.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRange", function() { return Range; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-7c632336.js");
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-6d7d2f8c.js");





class Range {
    constructor() {
        this.noUpdate = false;
        this.hasFocus = false;
        this.ratioA = 0;
        this.ratioB = 0;
        this.debounce = 0;
        this.name = '';
        this.dualKnobs = false;
        this.min = 0;
        this.max = 100;
        this.pin = false;
        this.snaps = false;
        this.step = 1;
        this.disabled = false;
        this.value = 0;
        this.handleKeyboard = (knob, isIncrease) => {
            let step = this.step;
            step = step > 0 ? step : 1;
            step = step / (this.max - this.min);
            if (!isIncrease) {
                step *= -1;
            }
            if (knob === 'A') {
                this.ratioA = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["i"])(0, this.ratioA + step, 1);
            }
            else {
                this.ratioB = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["i"])(0, this.ratioB + step, 1);
            }
            this.updateValue();
        };
    }
    debounceChanged() {
        this.ionChange = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.ionChange, this.debounce);
    }
    minChanged() {
        if (!this.noUpdate) {
            this.updateRatio();
        }
    }
    maxChanged() {
        if (!this.noUpdate) {
            this.updateRatio();
        }
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
        this.emitStyle();
    }
    valueChanged(value) {
        if (!this.noUpdate) {
            this.updateRatio();
        }
        this.ionChange.emit({ value });
    }
    onBlur() {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.ionBlur.emit();
            this.emitStyle();
        }
    }
    onFocus() {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.ionFocus.emit();
            this.emitStyle();
        }
    }
    componentWillLoad() {
        this.updateRatio();
        this.debounceChanged();
        this.emitStyle();
    }
    async componentDidLoad() {
        this.gesture = (await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./chunk-f56eaea8.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-f56eaea8.js"))).createGesture({
            el: this.rangeSlider,
            queue: this.queue,
            gestureName: 'range',
            gesturePriority: 100,
            threshold: 0,
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.gesture.setDisabled(this.disabled);
    }
    componentDidUnload() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    getValue() {
        const value = this.value || 0;
        if (this.dualKnobs) {
            if (typeof value === 'object') {
                return value;
            }
            return {
                lower: 0,
                upper: value
            };
        }
        else {
            if (typeof value === 'object') {
                return value.upper;
            }
            return value;
        }
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'interactive-disabled': this.disabled
        });
    }
    onStart(detail) {
        const rect = this.rect = this.rangeSlider.getBoundingClientRect();
        const currentX = detail.currentX;
        const ratio = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["i"])(0, (currentX - rect.left) / rect.width, 1);
        this.pressedKnob =
            !this.dualKnobs ||
                Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio)
                ? 'A'
                : 'B';
        this.setFocus(this.pressedKnob);
        this.update(currentX);
    }
    onMove(detail) {
        this.update(detail.currentX);
    }
    onEnd(detail) {
        this.update(detail.currentX);
        this.pressedKnob = undefined;
    }
    update(currentX) {
        const rect = this.rect;
        let ratio = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["i"])(0, (currentX - rect.left) / rect.width, 1);
        if (this.snaps) {
            ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
        }
        if (this.pressedKnob === 'A') {
            this.ratioA = ratio;
        }
        else {
            this.ratioB = ratio;
        }
        this.updateValue();
    }
    get valA() {
        return ratioToValue(this.ratioA, this.min, this.max, this.step);
    }
    get valB() {
        return ratioToValue(this.ratioB, this.min, this.max, this.step);
    }
    get ratioLower() {
        if (this.dualKnobs) {
            return Math.min(this.ratioA, this.ratioB);
        }
        return 0;
    }
    get ratioUpper() {
        if (this.dualKnobs) {
            return Math.max(this.ratioA, this.ratioB);
        }
        return this.ratioA;
    }
    updateRatio() {
        const value = this.getValue();
        const { min, max } = this;
        if (this.dualKnobs) {
            this.ratioA = valueToRatio(value.lower, min, max);
            this.ratioB = valueToRatio(value.upper, min, max);
        }
        else {
            this.ratioA = valueToRatio(value, min, max);
        }
    }
    updateValue() {
        this.noUpdate = true;
        const { valA, valB } = this;
        this.value = !this.dualKnobs
            ? valA
            : {
                lower: Math.min(valA, valB),
                upper: Math.max(valA, valB)
            };
        this.noUpdate = false;
    }
    setFocus(knob) {
        if (this.el.shadowRoot) {
            const knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');
            if (knobEl) {
                knobEl.focus();
            }
        }
    }
    hostData() {
        return {
            class: Object.assign({}, Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color), { 'in-item': Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["d"])('ion-item', this.el), 'range-disabled': this.disabled, 'range-pressed': this.pressedKnob !== undefined, 'range-has-pin': this.pin })
        };
    }
    render() {
        const { min, max, step, ratioLower, ratioUpper } = this;
        const barL = `${ratioLower * 100}%`;
        const barR = `${100 - ratioUpper * 100}%`;
        const ticks = [];
        if (this.snaps) {
            for (let value = min; value <= max; value += step) {
                const ratio = valueToRatio(value, min, max);
                ticks.push({
                    ratio,
                    active: ratio >= ratioLower && ratio <= ratioUpper,
                    left: `${ratio * 100}%`
                });
            }
        }
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-slider", ref: el => this.rangeSlider = el },
                ticks.map(t => (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: { left: t.left }, role: "presentation", class: {
                        'range-tick': true,
                        'range-tick-active': t.active
                    } }))),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-bar", role: "presentation" }),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-bar range-bar-active", role: "presentation", style: {
                        left: barL,
                        right: barR
                    } }),
                renderKnob({
                    knob: 'A',
                    pressed: this.pressedKnob === 'A',
                    value: this.valA,
                    ratio: this.ratioA,
                    pin: this.pin,
                    disabled: this.disabled,
                    handleKeyboard: this.handleKeyboard,
                    min,
                    max
                }),
                this.dualKnobs && renderKnob({
                    knob: 'B',
                    pressed: this.pressedKnob === 'B',
                    value: this.valB,
                    ratio: this.ratioB,
                    pin: this.pin,
                    disabled: this.disabled,
                    handleKeyboard: this.handleKeyboard,
                    min,
                    max
                })),
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" })
        ];
    }
    static get is() { return "ion-range"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "debounce": {
            "type": Number,
            "attr": "debounce",
            "watchCallbacks": ["debounceChanged"]
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "dualKnobs": {
            "type": Boolean,
            "attr": "dual-knobs"
        },
        "el": {
            "elementRef": true
        },
        "max": {
            "type": Number,
            "attr": "max",
            "watchCallbacks": ["maxChanged"]
        },
        "min": {
            "type": Number,
            "attr": "min",
            "watchCallbacks": ["minChanged"]
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "pin": {
            "type": Boolean,
            "attr": "pin"
        },
        "pressedKnob": {
            "state": true
        },
        "queue": {
            "context": "queue"
        },
        "ratioA": {
            "state": true
        },
        "ratioB": {
            "state": true
        },
        "snaps": {
            "type": Boolean,
            "attr": "snaps"
        },
        "step": {
            "type": Number,
            "attr": "step"
        },
        "value": {
            "type": Number,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "focusout",
            "method": "onBlur"
        }, {
            "name": "focusin",
            "method": "onFocus"
        }]; }
    static get style() { return ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle{right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar{right:0}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}:host-context([dir=rtl]) .range-knob{right:calc(50% - var(--knob-size) / 2)}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--ion-background-color,#fff);--knob-box-shadow:0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02);--knob-size:28px;--bar-height:1px;--bar-background:var(--ion-color-step-250,#bfbfbf);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-.5px;border-radius:0;position:absolute;top:17.5px;width:1px;height:8px;background:var(--ion-color-step-250,#bfbfbf);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-tick{margin-left:unset;-webkit-margin-start:-.5px;margin-inline-start:-.5px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform .12s ease;transition:-webkit-transform .12s ease;transition:transform .12s ease;transition:transform .12s ease,-webkit-transform .12s ease;background:transparent;color:var(--ion-text-color,#000);font-size:12px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host(.range-disabled){opacity:.5}"; }
    static get styleMode() { return "ios"; }
}
function renderKnob({ knob, value, ratio, min, max, disabled, pressed, pin, handleKeyboard }) {
    return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { onKeyDown: (ev) => {
            const key = ev.key;
            if (key === 'ArrowLeft' || key === 'ArrowDown') {
                handleKeyboard(knob, false);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (key === 'ArrowRight' || key === 'ArrowUp') {
                handleKeyboard(knob, true);
                ev.preventDefault();
                ev.stopPropagation();
            }
        }, class: {
            'range-knob-handle': true,
            'range-knob-a': knob === 'A',
            'range-knob-b': knob === 'B',
            'range-knob-pressed': pressed,
            'range-knob-min': value === min,
            'range-knob-max': value === max
        }, style: {
            'left': `${ratio * 100}%`
        }, role: "slider", tabindex: disabled ? -1 : 0, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? 'true' : null, "aria-valuenow": value },
        pin && Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-pin", role: "presentation" }, Math.round(value)),
        Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "range-knob", role: "presentation" })));
}
function ratioToValue(ratio, min, max, step) {
    let value = (max - min) * ratio;
    if (step > 0) {
        value = Math.round(value / step) * step + min;
    }
    return Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["i"])(min, value, max);
}
function valueToRatio(value, min, max) {
    return Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["i"])(0, (value - min) / (max - min), 1);
}




/***/ })

}]);
//# sourceMappingURL=85.js.map