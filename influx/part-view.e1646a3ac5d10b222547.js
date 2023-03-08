"use strict";
(global["webpackChunkinflux"] = global["webpackChunkinflux"] || []).push([["part-view"],{

/***/ "cOQ3":
/*!***************************!*\
  !*** ./src/lib/common.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isArrayBuffer": () => (/* binding */ isArrayBuffer),
/* harmony export */   "isBlob": () => (/* binding */ isBlob),
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isDef": () => (/* binding */ isDef),
/* harmony export */   "isDefAndNotNull": () => (/* binding */ isDefAndNotNull),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isFloat": () => (/* binding */ isFloat),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isInt": () => (/* binding */ isInt),
/* harmony export */   "isNull": () => (/* binding */ isNull),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isTypedArray": () => (/* binding */ isTypedArray),
/* harmony export */   "isUint": () => (/* binding */ isUint),
/* harmony export */   "mwalk": () => (/* binding */ mwalk),
/* harmony export */   "typeOf": () => (/* binding */ typeOf),
/* harmony export */   "verbose": () => (/* binding */ verbose)
/* harmony export */ });
let typeOf = (x) => {
    const s = typeof x;
    if (s === 'object') {
        if (x) {
            if (x instanceof Array) {
                return 'array';
            }
            else if (x instanceof Object) {
                return s;
            }
            const sClassName = Object.prototype.toString.call(x);
            if (sClassName === '[object Window]') {
                return 'object';
            }
            if ((sClassName === '[object Array]' ||
                (typeof x.length) === 'number' &&
                    (typeof x.splice) !== 'undefined' &&
                    (typeof x.propertyIsEnumerable) !== 'undefined' &&
                    !x.propertyIsEnumerable('splice'))) {
                return 'array';
            }
            if ((sClassName === '[object Function]' ||
                (typeof x.call) !== 'undefined' &&
                    (typeof x.propertyIsEnumerable) !== 'undefined' &&
                    !x.propertyIsEnumerable('call'))) {
                return 'function';
            }
        }
        else {
            return 'null';
        }
    }
    else if (s === 'function' && (typeof x.call) === 'undefined') {
        return 'object';
    }
    return s;
};
let isDef = (x) => x !== undefined;
let isDefAndNotNull = (x) => x != null;
let isEmpty = (x) => x.length === 0;
let isNull = (x) => x === null;
let isBoolean = (x) => typeof x === 'boolean';
let isString = (x) => typeof x === 'string';
let isNumber = (x) => typeof x === 'number';
let isFloat = isNumber;
let isInt = (x) => isNumber(x) && (~~x === x);
let isUint = (x) => isInt(x) && x > 0;
let isFunction = (x) => typeOf(x) === 'function';
let isObject = (x) => {
    const T = typeOf(x);
    return T === 'object' || T === 'array' || T === 'function';
};
let isArrayBuffer = (x) => x instanceof ArrayBuffer;
let isTypedArray = (x) => x !== null && typeof x === 'object' && typeof x.byteOffset === 'number';
let isBlob = (x) => x instanceof Blob;
let isArray = (x) => typeOf(x) === 'array';
// export let assignIfDef = (val: any, def: any) => (isDef(val) ? val : def);
let deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const assert = console.assert.bind(console);
const verbose = console.log.bind(console);
/** 'ForEach' for maps. */
function mwalk(map, cb) {
    let i = 0;
    for (const key in map) {
        if (cb(map[key], key, i++) === false) {
            break;
        }
    }
}


/***/ }),

/***/ "lF6j":
/*!*********************************************!*\
  !*** ./src/sandbox/containers/PartView.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "cOQ3");
/* harmony import */ var autobind_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autobind-decorator */ "nt2h");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "ynia");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "c9HL");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "l9XU");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "3GrG");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "a49q");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const style = {
    height: 'calc(100vh)',
    width: 'calc(100vw)',
    position: 'relative',
    left: '0',
    right: '0',
    margin: '0',
    background: 'rgba(255, 0, 0, 0.5)'
};
const monofont = {
    fontFamily: 'consolas, monospace',
    width: '100%'
};
;
function renderValue(value) {
    if ((0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.isBoolean)(value)) {
        return value ? 'true' : 'false';
    }
    if ((0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
        return value.map(x => renderValue(x));
    }
    if ((0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.isNumber)(value)) {
        if (Number(value) !== Math.floor(value))
            return (react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", null,
                " ",
                Number(value).toFixed(2)));
    }
    return value;
}
function sortByColumn(data, column) {
    if (!column)
        return data;
    return data.sort((a, b) => {
        if (a[column] < b[column]) {
            return -1;
        }
        if (a[column] > b[column]) {
            return 1;
        }
        return 0;
    });
}
function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_SORT':
            if (state.column === action.column) {
                return {
                    ...state,
                    data: state.data.slice().reverse(),
                    direction: state.direction === 'ascending' ? 'descending' : 'ascending',
                };
            }
            return {
                column: action.column,
                // data: _.sortBy(state.data, [action.column]),
                data: state.data.sort((a, b) => {
                    if (a[action.column] < b[action.column]) {
                        return -1;
                    }
                    if (a[action.column] > b[action.column]) {
                        return 1;
                    }
                    return 0;
                }),
                direction: 'ascending',
            };
        default:
            throw new Error();
    }
}
class TableSortable extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor(props) {
        super(props);
        this.state = {
            column: null,
            data: props.tableData,
            direction: null,
            counter: 0
        };
    }
    reduce(action) {
        this.setState(reducer(this.state, action));
    }
    // shouldComponentUpdate(nextProps: Readonly<{ tableData: Array<Object>; }>, nextState: Readonly<{}>, nextContext: any): boolean {
    //     console.log('yeah!');
    //     return true;
    // }
    // componentDidUpdate() {
    //     this.setState({ ...this.state });
    // }
    static getDerivedStateFromProps(props, state) {
        return { ...state, data: sortByColumn(props.tableData, state.column) };
    }
    render() {
        const { column, data, direction } = this.state;
        if (!data) {
            return null;
        }
        const columns = Object.keys(data[0]);
        return (react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["default"], { attached: 'bottom', sortable: true, celled: true, fixed: true, compact: true, unstackable: true, style: monofont },
            react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["default"].Header, null,
                react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["default"].Row, null, columns.map(name => react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["default"].HeaderCell, { sorted: column === name ? direction : null, onClick: () => this.reduce({ type: 'CHANGE_SORT', column: name }) }, name)))),
            react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, data.map(part => react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["default"].Row, null, columns.map(name => react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["default"].Cell, null, renderValue(part[name]))))))));
    }
}
class PartView extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    constructor(props) {
        super(props);
        this.bc = new BroadcastChannel(PartView.CHANNEL);
        this.particles = null;
        this.updateInterval = null;
        this.bc.onmessage = (event) => this.updateContent(event.data);
        window.addEventListener('beforeunload', this.disconnected);
        this.state = {
            autoUpdate: false,
            updateInterval: 100
        };
        this.setAutoUpdate(this.state.autoUpdate, this.state.updateInterval);
    }
    requestUpdate() {
        this.bc.postMessage(PartView.UPDATE_EVENT);
    }
    connected() {
        this.bc.postMessage(PartView.CONNECT_EVENT);
    }
    disconnected() {
        this.bc.postMessage(PartView.DISCONNECT_EVENT);
    }
    updateContent(particles) {
        this.particles = particles;
        this.forceUpdate();
    }
    componentDidMount() {
        this.connected();
    }
    componentWillUnmount() {
        this.disconnected();
    }
    setAutoUpdate(isset, int) {
        if (!isset) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
        else {
            this.updateInterval = setInterval(this.requestUpdate, int);
        }
    }
    onAutoUpdate(isset) {
        this.setAutoUpdate(isset, this.state.updateInterval);
        this.setState({ autoUpdate: isset });
    }
    onIntervalUpdate(int) {
        this.setAutoUpdate(this.state.autoUpdate, int);
        this.setState({ updateInterval: int });
    }
    render() {
        if (!(0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.isArray)(this.particles) || !this.particles.length) {
            return (react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", { style: style }, "No data has been provided."));
        }
        return (react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["default"], { attached: 'top', size: 'tiny', style: { width: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["default"].Item, null,
                    react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"], { checked: this.state.autoUpdate, label: 'Update\u00A0every', onChange: (e, data) => this.onAutoUpdate(data.checked) }),
                    "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_2__.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], { defaultValue: this.state.updateInterval, onChange: (e, data) => this.onIntervalUpdate(Number(data.value)) }),
                    "\u00A0ms")),
            react__WEBPACK_IMPORTED_MODULE_2__.createElement(TableSortable, { tableData: this.particles })));
    }
}
PartView.CHANNEL = 'part-view-debugger';
PartView.CONNECT_EVENT = 'connected';
PartView.DISCONNECT_EVENT = 'disconnected';
PartView.UPDATE_EVENT = 'update';
__decorate([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_1__["default"]
], PartView.prototype, "requestUpdate", null);
__decorate([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_1__["default"]
], PartView.prototype, "connected", null);
__decorate([
    autobind_decorator__WEBPACK_IMPORTED_MODULE_1__["default"]
], PartView.prototype, "disconnected", null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartView);


/***/ }),

/***/ "1y44":
/*!***********************************!*\
  !*** ./src/sandbox/part-view.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sandbox_containers_PartView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sandbox/containers/PartView */ "lF6j");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "ynia");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "7wdh");



__webpack_require__(/*! semantic-ui-less/semantic.less */ "ITMc");
react_dom__WEBPACK_IMPORTED_MODULE_2__.render(react__WEBPACK_IMPORTED_MODULE_1__.createElement(_sandbox_containers_PartView__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.getElementById('app'));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("1y44")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=part-view.e1646a3ac5d10b222547.js.map