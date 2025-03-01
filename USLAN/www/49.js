(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-e34b3d2d.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-e34b3d2d.js ***!
  \**************************************************************************/
/*! exports provided: shadow, iosTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return iosTransitionAnimation; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


const DURATION = 500;
const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
const OPACITY = 'opacity';
const TRANSFORM = 'transform';
const TRANSLATEX = 'translateX';
const CENTER = '0%';
const OFF_OPACITY = 0.8;
function shadow(el) {
    return el.shadowRoot || el;
}
function iosTransitionAnimation(AnimationC, navEl, opts) {
    const isRTL = document.dir === 'rtl';
    const OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
    const OFF_LEFT = isRTL ? '33%' : '-33%';
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const rootTransition = new AnimationC();
    rootTransition
        .addElement(enteringEl)
        .duration(opts.duration || DURATION)
        .easing(opts.easing || EASING)
        .beforeRemoveClass('ion-page-invisible');
    if (leavingEl && navEl) {
        const navDecor = new AnimationC();
        navDecor
            .addElement(navEl);
        rootTransition.add(navDecor);
    }
    const backDirection = (opts.direction === 'back');
    const contentEl = enteringEl.querySelector(':scope > ion-content');
    const headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
    const enteringToolBarEle = enteringEl.querySelector(':scope > ion-header > ion-toolbar');
    const enteringContent = new AnimationC();
    if (!contentEl && !enteringToolBarEle && headerEls.length === 0) {
        enteringContent.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'));
    }
    else {
        enteringContent.addElement(contentEl);
        enteringContent.addElement(headerEls);
    }
    rootTransition.add(enteringContent);
    if (backDirection) {
        enteringContent
            .beforeClearStyles([OPACITY])
            .fromTo(TRANSLATEX, OFF_LEFT, CENTER, true)
            .fromTo(OPACITY, OFF_OPACITY, 1, true);
    }
    else {
        enteringContent
            .beforeClearStyles([OPACITY])
            .fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
    }
    if (enteringToolBarEle) {
        const enteringToolBar = new AnimationC();
        enteringToolBar.addElement(enteringToolBarEle);
        rootTransition.add(enteringToolBar);
        const enteringTitle = new AnimationC();
        enteringTitle.addElement(enteringToolBarEle.querySelector('ion-title'));
        const enteringToolBarItems = new AnimationC();
        enteringToolBarItems.addElement(enteringToolBarEle.querySelectorAll('ion-buttons,[menuToggle]'));
        const enteringToolBarBg = new AnimationC();
        enteringToolBarBg.addElement(shadow(enteringToolBarEle).querySelector('.toolbar-background'));
        const enteringBackButton = new AnimationC();
        const backButtonEl = enteringToolBarEle.querySelector('ion-back-button');
        enteringBackButton.addElement(backButtonEl);
        enteringToolBar
            .add(enteringTitle)
            .add(enteringToolBarItems)
            .add(enteringToolBarBg)
            .add(enteringBackButton);
        enteringTitle.fromTo(OPACITY, 0.01, 1, true);
        enteringToolBarItems.fromTo(OPACITY, 0.01, 1, true);
        if (backDirection) {
            enteringTitle.fromTo(TRANSLATEX, OFF_LEFT, CENTER, true);
            enteringBackButton.fromTo(OPACITY, 0.01, 1, true);
        }
        else {
            enteringTitle.fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
            enteringToolBarBg
                .beforeClearStyles([OPACITY])
                .fromTo(OPACITY, 0.01, 1, true);
            enteringBackButton.fromTo(OPACITY, 0.01, 1, true);
            if (backButtonEl) {
                const enteringBackBtnText = new AnimationC();
                enteringBackBtnText
                    .addElement(shadow(backButtonEl).querySelector('.button-text'))
                    .fromTo(TRANSLATEX, (isRTL ? '-100px' : '100px'), '0px');
                enteringToolBar.add(enteringBackBtnText);
            }
        }
    }
    if (leavingEl) {
        const leavingContent = new AnimationC();
        leavingContent.addElement(leavingEl.querySelector(':scope > ion-content'));
        leavingContent.addElement(leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'));
        rootTransition.add(leavingContent);
        if (backDirection) {
            leavingContent
                .beforeClearStyles([OPACITY])
                .fromTo(TRANSLATEX, CENTER, (isRTL ? '-100%' : '100%'));
        }
        else {
            leavingContent
                .fromTo(TRANSLATEX, CENTER, OFF_LEFT, true)
                .fromTo(OPACITY, 1, OFF_OPACITY, true);
        }
        const leavingToolBarEle = leavingEl.querySelector(':scope > ion-header > ion-toolbar');
        if (leavingToolBarEle) {
            const leavingToolBar = new AnimationC();
            leavingToolBar.addElement(leavingToolBarEle);
            const leavingTitle = new AnimationC();
            leavingTitle.addElement(leavingToolBarEle.querySelector('ion-title'));
            const leavingToolBarItems = new AnimationC();
            leavingToolBarItems.addElement(leavingToolBarEle.querySelectorAll('ion-buttons,[menuToggle]'));
            const leavingToolBarBg = new AnimationC();
            leavingToolBarBg.addElement(shadow(leavingToolBarEle).querySelector('.toolbar-background'));
            const leavingBackButton = new AnimationC();
            const backButtonEl = leavingToolBarEle.querySelector('ion-back-button');
            leavingBackButton.addElement(backButtonEl);
            leavingToolBar
                .add(leavingTitle)
                .add(leavingToolBarItems)
                .add(leavingBackButton)
                .add(leavingToolBarBg);
            rootTransition.add(leavingToolBar);
            leavingBackButton.fromTo(OPACITY, 0.99, 0, true);
            leavingTitle.fromTo(OPACITY, 0.99, 0, true);
            leavingToolBarItems.fromTo(OPACITY, 0.99, 0, true);
            if (backDirection) {
                leavingTitle.fromTo(TRANSLATEX, CENTER, (isRTL ? '-100%' : '100%'));
                leavingToolBarBg
                    .beforeClearStyles([OPACITY])
                    .fromTo(OPACITY, 1, 0.01, true);
                if (backButtonEl) {
                    const leavingBackBtnText = new AnimationC();
                    leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text'));
                    leavingBackBtnText.fromTo(TRANSLATEX, CENTER, (isRTL ? -124 : 124) + 'px');
                    leavingToolBar.add(leavingBackBtnText);
                }
            }
            else {
                leavingTitle
                    .fromTo(TRANSLATEX, CENTER, OFF_LEFT)
                    .afterClearStyles([TRANSFORM]);
                leavingBackButton.afterClearStyles([OPACITY]);
                leavingTitle.afterClearStyles([OPACITY]);
                leavingToolBarItems.afterClearStyles([OPACITY]);
            }
        }
    }
    return Promise.resolve(rootTransition);
}




/***/ })

}]);
//# sourceMappingURL=49.js.map