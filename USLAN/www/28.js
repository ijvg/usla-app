(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/5ey3bs99.sc.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/5ey3bs99.sc.entry.js ***!
  \*****************************************************************************/
/*! exports provided: IonSearchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSearchbar", function() { return Searchbar; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-7c632336.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-7c632336.js");
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-6d7d2f8c.js");





class Searchbar {
    constructor() {
        this.isCancelVisible = false;
        this.shouldAlignLeft = true;
        this.focused = false;
        this.noAnimate = true;
        this.animated = false;
        this.autocomplete = 'off';
        this.autocorrect = 'off';
        this.cancelButtonIcon = 'md-arrow-back';
        this.cancelButtonText = 'Cancel';
        this.debounce = 250;
        this.placeholder = 'Search';
        this.searchIcon = 'search';
        this.showCancelButton = false;
        this.spellcheck = false;
        this.type = 'search';
        this.value = '';
        this.onClearInput = (ev) => {
            this.ionClear.emit();
            if (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            setTimeout(() => {
                const value = this.getValue();
                if (value !== '') {
                    this.value = '';
                    this.ionInput.emit();
                }
            }, 16 * 4);
        };
        this.onCancelSearchbar = (ev) => {
            if (ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            this.ionCancel.emit();
            this.onClearInput();
            if (this.nativeInput) {
                this.nativeInput.blur();
            }
        };
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value;
            }
            this.ionInput.emit(ev);
        };
        this.onBlur = () => {
            this.focused = false;
            this.ionBlur.emit();
            this.positionElements();
        };
        this.onFocus = () => {
            this.focused = true;
            this.ionFocus.emit();
            this.positionElements();
        };
    }
    debounceChanged() {
        this.ionChange = Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.ionChange, this.debounce);
    }
    valueChanged() {
        const inputEl = this.nativeInput;
        const value = this.getValue();
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.ionChange.emit({ value });
    }
    componentDidLoad() {
        this.positionElements();
        this.debounceChanged();
        setTimeout(() => {
            this.noAnimate = false;
        }, 300);
    }
    setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    positionElements() {
        const value = this.getValue();
        const prevAlignLeft = this.shouldAlignLeft;
        const shouldAlignLeft = (!this.animated || value.trim() !== '' || !!this.focused);
        this.shouldAlignLeft = shouldAlignLeft;
        if (this.mode !== 'ios') {
            return;
        }
        if (prevAlignLeft !== shouldAlignLeft) {
            this.positionPlaceholder();
        }
        if (this.animated) {
            this.positionCancelButton();
        }
    }
    positionPlaceholder() {
        const inputEl = this.nativeInput;
        if (!inputEl) {
            return;
        }
        const isRTL = this.doc.dir === 'rtl';
        const iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');
        if (this.shouldAlignLeft) {
            inputEl.removeAttribute('style');
            iconEl.removeAttribute('style');
        }
        else {
            const doc = this.doc;
            const tempSpan = doc.createElement('span');
            tempSpan.innerHTML = this.placeholder;
            doc.body.appendChild(tempSpan);
            const textWidth = tempSpan.offsetWidth;
            tempSpan.remove();
            const inputLeft = 'calc(50% - ' + (textWidth / 2) + 'px)';
            const iconLeft = 'calc(50% - ' + ((textWidth / 2) + 30) + 'px)';
            if (isRTL) {
                inputEl.style.paddingRight = inputLeft;
                iconEl.style.marginRight = iconLeft;
            }
            else {
                inputEl.style.paddingLeft = inputLeft;
                iconEl.style.marginLeft = iconLeft;
            }
        }
    }
    positionCancelButton() {
        const isRTL = this.doc.dir === 'rtl';
        const cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
        const shouldShowCancel = this.focused;
        if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
            const cancelStyle = cancelButton.style;
            this.isCancelVisible = shouldShowCancel;
            if (shouldShowCancel) {
                if (isRTL) {
                    cancelStyle.marginLeft = '0';
                }
                else {
                    cancelStyle.marginRight = '0';
                }
            }
            else {
                const offset = cancelButton.offsetWidth;
                if (offset > 0) {
                    if (isRTL) {
                        cancelStyle.marginLeft = -offset + 'px';
                    }
                    else {
                        cancelStyle.marginRight = -offset + 'px';
                    }
                }
            }
        }
    }
    getValue() {
        return this.value || '';
    }
    hostData() {
        const animated = this.animated && this.config.getBoolean('animated', true);
        return {
            class: Object.assign({}, Object(_chunk_7c632336_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.color), { 'searchbar-animated': animated, 'searchbar-no-animate': animated && this.noAnimate, 'searchbar-has-value': (this.getValue() !== ''), 'searchbar-left-aligned': this.shouldAlignLeft, 'searchbar-has-focus': this.focused })
        };
    }
    render() {
        const clearIcon = this.clearIcon || (this.mode === 'ios' ? 'ios-close-circle' : 'md-close');
        const searchIcon = this.searchIcon;
        const cancelButton = this.showCancelButton && (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", tabIndex: this.mode === 'ios' && !this.focused ? -1 : undefined, onMouseDown: this.onCancelSearchbar, onTouchStart: this.onCancelSearchbar, class: "searchbar-cancel-button" },
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.mode === 'md'
                ? Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { mode: this.mode, icon: this.cancelButtonIcon, lazy: false })
                : this.cancelButtonText)));
        return [
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "searchbar-input-container" },
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { ref: el => this.nativeInput = el, class: "searchbar-input", onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, placeholder: this.placeholder, type: this.type, value: this.getValue(), autoComplete: this.autocomplete, autoCorrect: this.autocorrect, spellCheck: this.spellcheck }),
                this.mode === 'md' && cancelButton,
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { mode: this.mode, icon: searchIcon, lazy: false, class: "searchbar-search-icon" }),
                Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", "no-blur": true, class: "searchbar-clear-button", onMouseDown: this.onClearInput, onTouchStart: this.onClearInput },
                    Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { mode: this.mode, icon: clearIcon, lazy: false, class: "searchbar-clear-icon" }))),
            this.mode === 'ios' && cancelButton
        ];
    }
    static get is() { return "ion-searchbar"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "animated": {
            "type": Boolean,
            "attr": "animated"
        },
        "autocomplete": {
            "type": String,
            "attr": "autocomplete"
        },
        "autocorrect": {
            "type": String,
            "attr": "autocorrect"
        },
        "cancelButtonIcon": {
            "type": String,
            "attr": "cancel-button-icon"
        },
        "cancelButtonText": {
            "type": String,
            "attr": "cancel-button-text"
        },
        "clearIcon": {
            "type": String,
            "attr": "clear-icon"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "debounce": {
            "type": Number,
            "attr": "debounce",
            "watchCallbacks": ["debounceChanged"]
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "focused": {
            "state": true
        },
        "getInputElement": {
            "method": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "noAnimate": {
            "state": true
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "searchIcon": {
            "type": String,
            "attr": "search-icon"
        },
        "setFocus": {
            "method": true
        },
        "showCancelButton": {
            "type": Boolean,
            "attr": "show-cancel-button"
        },
        "spellcheck": {
            "type": Boolean,
            "attr": "spellcheck"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionInput",
            "method": "ionInput",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionCancel",
            "method": "ionCancel",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionClear",
            "method": "ionClear",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h   .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h   .searchbar-cancel-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h   .searchbar-clear-button.sc-ion-searchbar-md, .ion-color.sc-ion-searchbar-md-h   .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-clear, .searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md > div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h   .searchbar-clear-button.sc-ion-searchbar-md{display:block}.sc-ion-searchbar-md-h{--clear-button-color:initial;--cancel-button-color:var(--ion-color-step-900,#1a1a1a);--color:var(--ion-color-step-850,#262626);--icon-color:var(--ion-color-step-600,#666);--background:var(--ion-background-color,#fff);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md-h   .searchbar-search-icon.sc-ion-searchbar-md, [dir=rtl]   .sc-ion-searchbar-md-h   .searchbar-search-icon.sc-ion-searchbar-md{right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md-h   .searchbar-cancel-button.sc-ion-searchbar-md, [dir=rtl]   .sc-ion-searchbar-md-h   .searchbar-cancel-button.sc-ion-searchbar-md{right:5px}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md-h   .searchbar-input.sc-ion-searchbar-md, [dir=rtl]   .sc-ion-searchbar-md-h   .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md-h   .searchbar-clear-button.sc-ion-searchbar-md, [dir=rtl]   .sc-ion-searchbar-md-h   .searchbar-clear-button.sc-ion-searchbar-md{left:13px}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h   .searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-has-focus.sc-ion-searchbar-md-h   .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h   .searchbar-cancel-button.sc-ion-searchbar-md + .searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar   .sc-ion-searchbar-md-h{padding-left:3px;padding-right:3px;padding-top:3px;padding-bottom:3px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar   .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:3px;padding-inline-start:3px;-webkit-padding-end:3px;padding-inline-end:3px}}"; }
    static get styleMode() { return "md"; }
}




/***/ })

}]);
//# sourceMappingURL=28.js.map