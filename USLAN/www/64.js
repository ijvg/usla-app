(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/ffukzwt6.sc.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/ffukzwt6.sc.entry.js ***!
  \*****************************************************************************/
/*! exports provided: IonVirtualScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonVirtualScroll", function() { return VirtualScroll; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


const CELL_TYPE_ITEM = 'item';
const CELL_TYPE_HEADER = 'header';
const CELL_TYPE_FOOTER = 'footer';
const NODE_CHANGE_NONE = 0;
const NODE_CHANGE_POSITION = 1;
const NODE_CHANGE_CELL = 2;

const MIN_READS = 2;
function updateVDom(dom, heightIndex, cells, range) {
    for (const node of dom) {
        node.change = NODE_CHANGE_NONE;
        node.d = true;
    }
    const toMutate = [];
    const end = range.offset + range.length;
    for (let i = range.offset; i < end; i++) {
        const cell = cells[i];
        const node = dom.find(n => n.d && n.cell === cell);
        if (node) {
            const top = heightIndex[i];
            if (top !== node.top) {
                node.top = top;
                node.change = NODE_CHANGE_POSITION;
            }
            node.d = false;
        }
        else {
            toMutate.push(cell);
        }
    }
    const pool = dom.filter(n => n.d);
    for (const cell of toMutate) {
        const node = pool.find(n => n.d && n.cell.type === cell.type);
        const index = cell.index;
        if (node) {
            node.d = false;
            node.change = NODE_CHANGE_CELL;
            node.cell = cell;
            node.top = heightIndex[index];
        }
        else {
            dom.push({
                d: false,
                cell,
                visible: true,
                change: NODE_CHANGE_CELL,
                top: heightIndex[index],
            });
        }
    }
    dom
        .filter(n => n.d && n.top !== -9999)
        .forEach(n => {
        n.change = NODE_CHANGE_POSITION;
        n.top = -9999;
    });
}
function doRender(el, nodeRender, dom, updateCellHeight) {
    const children = Array.from(el.children).filter(n => n.tagName !== 'TEMPLATE');
    const childrenNu = children.length;
    let child;
    for (let i = 0; i < dom.length; i++) {
        const node = dom[i];
        const cell = node.cell;
        if (node.change === NODE_CHANGE_CELL) {
            if (i < childrenNu) {
                child = children[i];
                nodeRender(child, cell, i);
            }
            else {
                const newChild = createNode(el, cell.type);
                child = nodeRender(newChild, cell, i) || newChild;
                child.classList.add('virtual-item');
                el.appendChild(child);
            }
            child['$ionCell'] = cell;
        }
        else {
            child = children[i];
        }
        if (node.change !== NODE_CHANGE_NONE) {
            child.style.transform = `translate3d(0,${node.top}px,0)`;
        }
        const visible = cell.visible;
        if (node.visible !== visible) {
            if (visible) {
                child.classList.remove('virtual-loading');
            }
            else {
                child.classList.add('virtual-loading');
            }
            node.visible = visible;
        }
        if (cell.reads > 0) {
            updateCellHeight(cell, child);
            cell.reads--;
        }
    }
}
function createNode(el, type) {
    const template = getTemplate(el, type);
    if (template && el.ownerDocument) {
        return el.ownerDocument.importNode(template.content, true).children[0];
    }
    return null;
}
function getTemplate(el, type) {
    switch (type) {
        case CELL_TYPE_ITEM: return el.querySelector('template:not([name])');
        case CELL_TYPE_HEADER: return el.querySelector('template[name=header]');
        case CELL_TYPE_FOOTER: return el.querySelector('template[name=footer]');
    }
}
function getViewport(scrollTop, vierportHeight, margin) {
    return {
        top: Math.max(scrollTop - margin, 0),
        bottom: scrollTop + vierportHeight + margin
    };
}
function getRange(heightIndex, viewport, buffer) {
    const topPos = viewport.top;
    const bottomPos = viewport.bottom;
    let i = 0;
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] > topPos) {
            break;
        }
    }
    const offset = Math.max(i - buffer - 1, 0);
    for (; i < heightIndex.length; i++) {
        if (heightIndex[i] >= bottomPos) {
            break;
        }
    }
    const end = Math.min(i + buffer, heightIndex.length);
    const length = end - offset;
    return { offset, length };
}
function getShouldUpdate(dirtyIndex, currentRange, range) {
    const end = range.offset + range.length;
    return (dirtyIndex <= end ||
        currentRange.offset !== range.offset ||
        currentRange.length !== range.length);
}
function findCellIndex(cells, index) {
    const max = cells[cells.length - 1].index || 0;
    if (index === 0) {
        return 0;
    }
    else if (index === max + 1) {
        return cells.length;
    }
    else {
        return cells.findIndex(c => c.index === index);
    }
}
function inplaceUpdate(dst, src, offset) {
    if (offset === 0 && src.length >= dst.length) {
        return src;
    }
    for (let i = 0; i < src.length; i++) {
        dst[i + offset] = src[i];
    }
    return dst;
}
function calcCells(items, itemHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) {
    const cells = [];
    const end = len + offset;
    for (let i = offset; i < end; i++) {
        const item = items[i];
        if (headerFn) {
            const value = headerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: CELL_TYPE_HEADER,
                    value,
                    index: i,
                    height: approxHeaderHeight,
                    reads: MIN_READS,
                    visible: false,
                });
            }
        }
        cells.push({
            i: j++,
            type: CELL_TYPE_ITEM,
            value: item,
            index: i,
            height: itemHeight ? itemHeight(item, i) : approxItemHeight,
            reads: itemHeight ? 0 : MIN_READS,
            visible: !!itemHeight,
        });
        if (footerFn) {
            const value = footerFn(item, i, items);
            if (value != null) {
                cells.push({
                    i: j++,
                    type: CELL_TYPE_FOOTER,
                    value,
                    index: i,
                    height: approxFooterHeight,
                    reads: 2,
                    visible: false,
                });
            }
        }
    }
    return cells;
}
function calcHeightIndex(buf, cells, index) {
    let acum = buf[index];
    for (let i = index; i < buf.length; i++) {
        buf[i] = acum;
        acum += cells[i].height;
    }
    return acum;
}
function resizeBuffer(buf, len) {
    if (!buf) {
        return new Uint32Array(len);
    }
    if (buf.length === len) {
        return buf;
    }
    else if (len > buf.length) {
        const newBuf = new Uint32Array(len);
        newBuf.set(buf);
        return newBuf;
    }
    else {
        return buf.subarray(0, len);
    }
}
function positionForIndex(index, cells, heightIndex) {
    const cell = cells.find(c => c.type === CELL_TYPE_ITEM && c.index === index);
    if (cell) {
        return heightIndex[cell.i];
    }
    return -1;
}

class VirtualScroll {
    constructor() {
        this.range = { offset: 0, length: 0 };
        this.viewportHeight = 0;
        this.cells = [];
        this.virtualDom = [];
        this.isEnabled = false;
        this.viewportOffset = 0;
        this.currentScrollTop = 0;
        this.indexDirty = 0;
        this.lastItemLen = 0;
        this.totalHeight = 0;
        this.approxItemHeight = 45;
        this.approxHeaderHeight = 30;
        this.approxFooterHeight = 30;
    }
    itemsChanged() {
        this.calcCells();
        this.updateVirtualScroll();
    }
    async componentDidLoad() {
        const contentEl = this.el.closest('ion-content');
        if (!contentEl) {
            console.error('virtual-scroll must be used inside ion-content');
            return;
        }
        await contentEl.componentOnReady();
        this.contentEl = contentEl;
        this.scrollEl = await contentEl.getScrollElement();
        this.calcCells();
        this.updateState();
    }
    componentDidUpdate() {
        this.updateState();
    }
    componentDidUnload() {
        this.scrollEl = undefined;
    }
    onScroll() {
        this.updateVirtualScroll();
    }
    onResize() {
        this.updateVirtualScroll();
    }
    positionForItem(index) {
        return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
    }
    checkRange(offset, len = -1) {
        if (!this.items) {
            return;
        }
        const length = (len === -1)
            ? this.items.length - offset
            : len;
        const cellIndex = findCellIndex(this.cells, offset);
        const cells = calcCells(this.items, this.itemHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, cellIndex, offset, length);
        console.debug('[virtual] cells recalculated', cells.length);
        this.cells = inplaceUpdate(this.cells, cells, cellIndex);
        this.lastItemLen = this.items.length;
        this.indexDirty = Math.max(offset - 1, 0);
        this.scheduleUpdate();
    }
    checkEnd() {
        if (this.items) {
            this.checkRange(this.lastItemLen);
        }
    }
    updateVirtualScroll() {
        if (!this.isEnabled || !this.scrollEl) {
            return;
        }
        if (this.timerUpdate) {
            clearTimeout(this.timerUpdate);
            this.timerUpdate = undefined;
        }
        this.queue.read(this.readVS.bind(this));
        this.queue.write(this.writeVS.bind(this));
    }
    readVS() {
        const { contentEl, scrollEl, el } = this;
        let topOffset = 0;
        let node = el;
        while (node && node !== contentEl) {
            topOffset += node.offsetTop;
            node = node.parentElement;
        }
        this.viewportOffset = topOffset;
        if (scrollEl) {
            this.viewportHeight = scrollEl.offsetHeight;
            this.currentScrollTop = scrollEl.scrollTop;
        }
    }
    writeVS() {
        const dirtyIndex = this.indexDirty;
        const scrollTop = this.currentScrollTop - this.viewportOffset;
        const viewport = getViewport(scrollTop, this.viewportHeight, 100);
        const heightIndex = this.getHeightIndex();
        const range = getRange(heightIndex, viewport, 2);
        const shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);
        if (!shouldUpdate) {
            return;
        }
        this.range = range;
        updateVDom(this.virtualDom, heightIndex, this.cells, range);
        if (this.nodeRender) {
            doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
        }
        else if (this.domRender) {
            this.domRender(this.virtualDom);
        }
        else if (this.renderItem) {
            this.el.forceUpdate();
        }
    }
    updateCellHeight(cell, node) {
        const update = () => {
            if (node['$ionCell'] === cell) {
                const style = this.win.getComputedStyle(node);
                const height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));
                this.setCellHeight(cell, height);
            }
        };
        if (node && node.componentOnReady) {
            node.componentOnReady().then(update);
        }
        else {
            update();
        }
    }
    setCellHeight(cell, height) {
        const index = cell.i;
        if (cell !== this.cells[index]) {
            return;
        }
        cell.visible = true;
        if (cell.height !== height) {
            console.debug(`[virtual] cell height changed ${cell.height}px -> ${height}px`);
            cell.height = height;
            this.indexDirty = Math.min(this.indexDirty, index);
            this.scheduleUpdate();
        }
    }
    scheduleUpdate() {
        clearTimeout(this.timerUpdate);
        this.timerUpdate = setTimeout(() => this.updateVirtualScroll(), 100);
    }
    updateState() {
        const shouldEnable = !!(this.scrollEl &&
            this.cells);
        if (shouldEnable !== this.isEnabled) {
            this.enableScrollEvents(shouldEnable);
            if (shouldEnable) {
                this.updateVirtualScroll();
            }
        }
    }
    calcCells() {
        if (!this.items) {
            return;
        }
        this.lastItemLen = this.items.length;
        this.cells = calcCells(this.items, this.itemHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
        console.debug('[virtual] cells recalculated', this.cells.length);
        this.indexDirty = 0;
    }
    getHeightIndex() {
        if (this.indexDirty !== Infinity) {
            this.calcHeightIndex(this.indexDirty);
        }
        return this.heightIndex;
    }
    calcHeightIndex(index = 0) {
        this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
        this.totalHeight = calcHeightIndex(this.heightIndex, this.cells, index);
        console.debug('[virtual] height index recalculated', this.heightIndex.length - index);
        this.indexDirty = Infinity;
    }
    enableScrollEvents(shouldListen) {
        if (this.scrollEl) {
            this.isEnabled = shouldListen;
            this.enableListener(this, 'scroll', shouldListen, this.scrollEl);
        }
    }
    renderVirtualNode(node) {
        const { type, value, index } = node.cell;
        switch (type) {
            case CELL_TYPE_ITEM: return this.renderItem(value, index);
            case CELL_TYPE_HEADER: return this.renderHeader(value, index);
            case CELL_TYPE_FOOTER: return this.renderFooter(value, index);
        }
    }
    hostData() {
        return {
            style: {
                height: `${this.totalHeight}px`
            }
        };
    }
    render() {
        if (this.renderItem) {
            return (Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])(VirtualProxy, { dom: this.virtualDom }, this.virtualDom.map(node => this.renderVirtualNode(node))));
        }
        return undefined;
    }
    static get is() { return "ion-virtual-scroll"; }
    static get properties() { return {
        "approxFooterHeight": {
            "type": Number,
            "attr": "approx-footer-height"
        },
        "approxHeaderHeight": {
            "type": Number,
            "attr": "approx-header-height"
        },
        "approxItemHeight": {
            "type": Number,
            "attr": "approx-item-height"
        },
        "checkEnd": {
            "method": true
        },
        "checkRange": {
            "method": true
        },
        "domRender": {
            "type": "Any",
            "attr": "dom-render"
        },
        "el": {
            "elementRef": true
        },
        "enableListener": {
            "context": "enableListener"
        },
        "footerFn": {
            "type": "Any",
            "attr": "footer-fn"
        },
        "headerFn": {
            "type": "Any",
            "attr": "header-fn"
        },
        "itemHeight": {
            "type": "Any",
            "attr": "item-height",
            "watchCallbacks": ["itemsChanged"]
        },
        "items": {
            "type": "Any",
            "attr": "items",
            "watchCallbacks": ["itemsChanged"]
        },
        "nodeRender": {
            "type": "Any",
            "attr": "node-render"
        },
        "positionForItem": {
            "method": true
        },
        "queue": {
            "context": "queue"
        },
        "renderFooter": {
            "type": "Any",
            "attr": "render-footer"
        },
        "renderHeader": {
            "type": "Any",
            "attr": "render-header"
        },
        "renderItem": {
            "type": "Any",
            "attr": "render-item"
        },
        "totalHeight": {
            "state": true
        },
        "win": {
            "context": "window"
        }
    }; }
    static get listeners() { return [{
            "name": "scroll",
            "method": "onScroll",
            "disabled": true
        }, {
            "name": "window:resize",
            "method": "onResize",
            "passive": true
        }]; }
    static get style() { return "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"; }
}
const VirtualProxy = ({ dom }, children, utils) => {
    return utils.map(children, (child, i) => {
        const node = dom[i];
        const vattrs = child.vattrs || {};
        let classes = vattrs.class || '';
        classes += 'virtual-item ';
        if (!node.visible) {
            classes += 'virtual-loading';
        }
        return Object.assign({}, child, { vattrs: Object.assign({}, vattrs, { class: classes, style: Object.assign({}, vattrs.style, { transform: `translate3d(0,${node.top}px,0)` }) }) });
    });
};




/***/ })

}]);
//# sourceMappingURL=64.js.map