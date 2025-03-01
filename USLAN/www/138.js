(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/unqw84tu.sc.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/unqw84tu.sc.entry.js ***!
  \*****************************************************************************/
/*! exports provided: IonReorder, IonReorderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonReorder", function() { return Reorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonReorderGroup", function() { return ReorderGroup; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_81780b86_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-81780b86.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-81780b86.js");




class Reorder {
    onClick(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
    }
    render() {
        return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null,
            Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { name: "reorder", lazy: false, class: "reorder-icon" })));
    }
    static get is() { return "ion-reorder"; }
    static get encapsulation() { return "shadow"; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick",
            "capture": true
        }]; }
    static get style() { return "[slot].sc-ion-reorder-ios-h{display:none;line-height:0;z-index:100}.reorder-icon.sc-ion-reorder-ios{display:block;font-size:22px;font-size:34px;opacity:.4}"; }
    static get styleMode() { return "ios"; }
}

class ReorderGroup {
    constructor() {
        this.lastToIndex = -1;
        this.cachedHeights = [];
        this.scrollElTop = 0;
        this.scrollElBottom = 0;
        this.scrollElInitial = 0;
        this.containerTop = 0;
        this.containerBottom = 0;
        this.state = 0;
        this.disabled = true;
    }
    disabledChanged() {
        if (this.gesture) {
            this.gesture.setDisabled(this.disabled);
        }
    }
    async componentDidLoad() {
        const contentEl = this.el.closest('ion-content');
        if (contentEl) {
            await contentEl.componentOnReady();
            this.scrollEl = await contentEl.getScrollElement();
        }
        this.gesture = (await Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./chunk-f56eaea8.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-f56eaea8.js"))).createGesture({
            el: this.doc.body,
            queue: this.queue,
            gestureName: 'reorder',
            gesturePriority: 90,
            threshold: 0,
            direction: 'y',
            passive: false,
            canStart: detail => this.canStart(detail),
            onStart: ev => this.onStart(ev),
            onMove: ev => this.onMove(ev),
            onEnd: () => this.onEnd(),
        });
        this.disabledChanged();
    }
    componentDidUnload() {
        this.onEnd();
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    complete(listOrReorder) {
        return Promise.resolve(this.completeSync(listOrReorder));
    }
    canStart(ev) {
        if (this.selectedItemEl || this.state !== 0) {
            return false;
        }
        const target = ev.event.target;
        const reorderEl = target.closest('ion-reorder');
        if (!reorderEl) {
            return false;
        }
        const item = findReorderItem(reorderEl, this.el);
        if (!item) {
            return false;
        }
        ev.data = item;
        return true;
    }
    onStart(ev) {
        ev.event.preventDefault();
        const item = this.selectedItemEl = ev.data;
        const heights = this.cachedHeights;
        heights.length = 0;
        const el = this.el;
        const children = el.children;
        if (!children || children.length === 0) {
            return;
        }
        let sum = 0;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            sum += child.offsetHeight;
            heights.push(sum);
            child.$ionIndex = i;
        }
        const box = el.getBoundingClientRect();
        this.containerTop = box.top;
        this.containerBottom = box.bottom;
        if (this.scrollEl) {
            const scrollBox = this.scrollEl.getBoundingClientRect();
            this.scrollElInitial = this.scrollEl.scrollTop;
            this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
            this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
        }
        else {
            this.scrollElInitial = 0;
            this.scrollElTop = 0;
            this.scrollElBottom = 0;
        }
        this.lastToIndex = indexForItem(item);
        this.selectedItemHeight = item.offsetHeight;
        this.state = 1;
        item.classList.add(ITEM_REORDER_SELECTED);
        Object(_chunk_81780b86_js__WEBPACK_IMPORTED_MODULE_1__["b"])();
    }
    onMove(ev) {
        const selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        const scroll = this.autoscroll(ev.currentY);
        const top = this.containerTop - scroll;
        const bottom = this.containerBottom - scroll;
        const currentY = Math.max(top, Math.min(ev.currentY, bottom));
        const deltaY = scroll + currentY - ev.startY;
        const normalizedY = currentY - top;
        const toIndex = this.itemIndexForTop(normalizedY);
        if (toIndex !== this.lastToIndex) {
            const fromIndex = indexForItem(selectedItem);
            this.lastToIndex = toIndex;
            Object(_chunk_81780b86_js__WEBPACK_IMPORTED_MODULE_1__["a"])();
            this.reorderMove(fromIndex, toIndex);
        }
        selectedItem.style.transform = `translateY(${deltaY}px)`;
    }
    onEnd() {
        const selectedItem = this.selectedItemEl;
        this.state = 2;
        if (!selectedItem) {
            this.state = 0;
            return;
        }
        const toIndex = this.lastToIndex;
        const fromIndex = indexForItem(selectedItem);
        if (toIndex === fromIndex) {
            selectedItem.style.transition = 'transform 200ms ease-in-out';
            setTimeout(() => this.completeSync(), 200);
        }
        else {
            this.ionItemReorder.emit({
                from: fromIndex,
                to: toIndex,
                complete: this.completeSync.bind(this)
            });
        }
        Object(_chunk_81780b86_js__WEBPACK_IMPORTED_MODULE_1__["c"])();
    }
    completeSync(listOrReorder) {
        const selectedItemEl = this.selectedItemEl;
        if (selectedItemEl && this.state === 2) {
            const children = this.el.children;
            const len = children.length;
            const toIndex = this.lastToIndex;
            const fromIndex = indexForItem(selectedItemEl);
            if (listOrReorder === true) {
                const ref = (fromIndex < toIndex)
                    ? children[toIndex + 1]
                    : children[toIndex];
                this.el.insertBefore(selectedItemEl, ref);
            }
            if (Array.isArray(listOrReorder)) {
                listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
            }
            for (let i = 0; i < len; i++) {
                children[i].style['transform'] = '';
            }
            selectedItemEl.style.transition = '';
            selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
            this.selectedItemEl = undefined;
            this.state = 0;
        }
        return listOrReorder;
    }
    itemIndexForTop(deltaY) {
        const heights = this.cachedHeights;
        let i = 0;
        for (i = 0; i < heights.length; i++) {
            if (heights[i] > deltaY) {
                break;
            }
        }
        return i;
    }
    reorderMove(fromIndex, toIndex) {
        const itemHeight = this.selectedItemHeight;
        const children = this.el.children;
        for (let i = 0; i < children.length; i++) {
            const style = children[i].style;
            let value = '';
            if (i > fromIndex && i <= toIndex) {
                value = `translateY(${-itemHeight}px)`;
            }
            else if (i < fromIndex && i >= toIndex) {
                value = `translateY(${itemHeight}px)`;
            }
            style['transform'] = value;
        }
    }
    autoscroll(posY) {
        if (!this.scrollEl) {
            return 0;
        }
        let amount = 0;
        if (posY < this.scrollElTop) {
            amount = -SCROLL_JUMP;
        }
        else if (posY > this.scrollElBottom) {
            amount = SCROLL_JUMP;
        }
        if (amount !== 0) {
            this.scrollEl.scrollBy(0, amount);
        }
        return this.scrollEl.scrollTop - this.scrollElInitial;
    }
    hostData() {
        return {
            class: {
                'reorder-enabled': !this.disabled,
                'reorder-list-active': this.state !== 0,
            }
        };
    }
    static get is() { return "ion-reorder-group"; }
    static get properties() { return {
        "complete": {
            "method": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "doc": {
            "context": "document"
        },
        "el": {
            "elementRef": true
        },
        "queue": {
            "context": "queue"
        },
        "state": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ionItemReorder",
            "method": "ionItemReorder",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"; }
}
function indexForItem(element) {
    return element['$ionIndex'];
}
function findReorderItem(node, container) {
    let parent;
    while (node) {
        parent = node.parentElement;
        if (parent === container) {
            return node;
        }
        node = parent;
    }
    return undefined;
}
const AUTO_SCROLL_MARGIN = 60;
const SCROLL_JUMP = 10;
const ITEM_REORDER_SELECTED = 'reorder-selected';
function reorderArray(array, from, to) {
    const element = array[from];
    array.splice(from, 1);
    array.splice(to, 0, element);
    return array.slice();
}




/***/ })

}]);
//# sourceMappingURL=138.js.map