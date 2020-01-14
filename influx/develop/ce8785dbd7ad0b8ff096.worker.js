/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "Vs+U");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+C9u":
/*!*****************************************************!*\
  !*** ./src/lib/language-service/LanguageService.ts ***!
  \*****************************************************/
/*! exports provided: getLanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguageService", function() { return getLanguageService; });
/* harmony import */ var _lib_fx_FXSLDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/FXSLDocument */ "0DIJ");
/* harmony import */ var _services_fx_codeLenses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/fx/codeLenses */ "7ga8");
/* harmony import */ var _services_signatureHelp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/signatureHelp */ "I7B0");



function getLanguageService(flags) {
    const signatureHelp = new _services_signatureHelp__WEBPACK_IMPORTED_MODULE_2__["SLSignatureHelp"]();
    //
    // FX
    //
    const fxCodeLenses = new _services_fx_codeLenses__WEBPACK_IMPORTED_MODULE_1__["FXCodeLenses"]();
    return {
        async parseDocument(textDocument) {
            const uri = textDocument.uri;
            const source = textDocument.getText();
            return await Object(_lib_fx_FXSLDocument__WEBPACK_IMPORTED_MODULE_0__["createFXSLDocument"])({ uri, source }, flags);
        },
        doResolve(item) { return null; },
        doComplete(textDocument, position, slDocument) { return null; },
        findDocumentSymbols(textDocument, slDocument) { return []; },
        findDocumentColors(textDocument, slDocument) { return null; },
        getColorPresentations(textDocument, slDocument, color, range) { return []; },
        doHover(textDocument, position, slDocument) { return null; },
        format(textDocument, range, options) { return []; },
        getFoldingRanges(textDocument) { return []; },
        getSelectionRanges(textDocument, positions, slDocument) { return []; },
        doSignatureHelp: signatureHelp.doSignatureHelp.bind(signatureHelp),
        //
        // FX
        //
        doFxCodeLenses: fxCodeLenses.doProvide.bind(fxCodeLenses)
    };
}


/***/ }),

/***/ "+Z36":
/*!******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/TechniqueInstruction.ts ***!
  \******************************************************************/
/*! exports provided: TechniqueInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechniqueInstruction", function() { return TechniqueInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _DeclInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeclInstruction */ "mXWi");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



class TechniqueInstruction extends _DeclInstruction__WEBPACK_IMPORTED_MODULE_1__["DeclInstruction"] {
    constructor({ name, techniqueType, passList, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_TechniqueDecl, ...settings });
        this._name = name;
        this._passList = passList.map(pass => _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(pass, this));
        this._techniqueType = techniqueType;
    }
    // todo: add id support?
    // get id();
    get name() {
        return this._name;
    }
    get passList() {
        return this._passList;
    }
    get type() {
        return this._techniqueType;
    }
}


/***/ }),

/***/ "/Wjm":
/*!**************************!*\
  !*** ./src/lib/bf/bf.ts ***!
  \**************************/
/*! exports provided: flag, testBit, testAll, testAny, setBit, clearBit, setAll, clearAll, equal, isEqual, isNotEqaul, set, clear, setFlags, clearFlags, isEmpty, totalBits, totalSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flag", function() { return flag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testBit", function() { return testBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testAll", function() { return testAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testAny", function() { return testAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBit", function() { return setBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBit", function() { return clearBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAll", function() { return clearAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotEqaul", function() { return isNotEqaul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFlags", function() { return setFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFlags", function() { return clearFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalBits", function() { return totalBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalSet", function() { return totalSet; });
/**
 * Сдвиг единицы на @a x позиций влево.
 */
var flag = (x) => (1 << (x));
/**
 * Проверка того что у @a value бит под номером @a bit равен единице.
 */
var testBit = (value, bit) => ((value & flag(bit)) != 0);
/**
 * Проверка того что у @a value равны единице все биты,
 * которые равны единице у @a set.
 */
var testAll = (value, set) => (((value) & (set)) == (set));
/**
 * Проверка того что у @a value равны единице хотя бы какие то из битов,
 * которые равны единице у @a set.
 */
var testAny = (value, set) => (((value) & (set)) != 0);
/**
 * Выставляет бит под номером @a bit у числа @a value равным единице
 */
var setBit = (value, bit, setting = true) => (setting ? ((value) |= flag((bit))) : clearBit(value, bit));
/**
 *
 */
var clearBit = (value, bit) => ((value) &= ~flag((bit)));
/**
 * Выставляет бит под номером @a bit у числа @a value равным нулю
 */
var setAll = (value, set, setting = true) => (setting ? ((value) |= (set)) : ((value) &= ~(set)));
/**
 * Выставляет все биты у числа @a value равными единице,
 * которые равны единице у числа @a set
 */
var clearAll = (value, set) => ((value) &= ~(set));
/**
 * Выставляет все биты у числа @a value равными нулю,
 * которые равны единице у числа @a set
 */
var equal = (value, src) => { value = src; };
/**
 * Прирасваивает числу @a value число @a src
 */
var isEqual = (value, src) => value == src;
/**
 * Если число @a value равно числу @a src возвращается true
 */
var isNotEqaul = (value, src) => value != src;
/**
 * Прирасваивает числу @a value число @a src
 */
var set = (value, src) => { value = src; };
/**
 * Обнуляет число @a value
 */
var clear = (value) => { value = 0; };
/**
 * Выставляет все биты у числа @a value равными единице,
 * которые равны единице у числа @a src
 */
var setFlags = (value, src) => (value |= src);
/**
 * Выставляет все биты у числа @a value равными нулю,
 * которые равны единице у числа @a src
 */
var clearFlags = (value, src) => value &= ~src;
/**
 * Проверяет равно ли число @a value нулю. Если равно возвращает true.
 * Если не равно возвращает false.
 */
var isEmpty = (value) => (value == 0);
/**
 * Возвращает общее количество бит числа @a value.
 * На самом деле возвращает всегда 32.
 */
var totalBits = (value) => 32;
/**
 * Возвращает общее количество ненулевых бит числа @a value.
 */
var totalSet = (value) => {
    var count = 0;
    var total = totalBits(value);
    for (var i = total; i; --i) {
        count += (value & 1);
        value >>= 1;
    }
    return (count);
};


/***/ }),

/***/ "/oOw":
/*!***************************************************!*\
  !*** ./src/lib/fx/analisys/helpers/expression.ts ***!
  \***************************************************/
/*! exports provided: expression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expression", function() { return expression; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");


var expression;
(function (expression) {
    /**
     * unwind operation returns declaration in case of correct l-value expression;
     */
    function unwind(expr) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(expr)) {
            return null;
        }
        switch (expr.instructionType) {
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_PostfixPointExpr:
                return unwind(expr.element);
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_PostfixIndexExpr:
                return unwind(expr.element);
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_IdExpr:
                return expr.decl;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ArithmeticExpr:
                // arithmetic expression returns right-hand value;
                return null;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_InitExpr:
                Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(false, 'init expression doesn\'t support unwind operation');
                return null;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_AssignmentExpr:
                // todo: reseach how it work in HLSL
                //// assigment expression returns right-hand value;
                return unwind(expr.left);
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_CastExpr:
                // cast expression returns right-hand value;
                return null;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_UnaryExpr:
                // unary expression returns right-hand value;
                return null;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_RelationalExpr:
                // relation expression returns right-hand value;
                return null;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ConstructorCallExpr:
                // ctor call expression is not allowed as l-value;
                // todo: allow it?
                return null;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ComplexExpr:
                return unwind(expr.expr);
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_IntExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_FloatExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_StringExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_BoolExpr:
                // literal cannot be a left-hand value;
                return null;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_FunctionCallExpr:
                // function call expression returns right-hand value;
                return null;
            default:
                Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(false, "unsupported expr found");
                return null;
        }
    }
    expression.unwind = unwind;
})(expression || (expression = {}));


/***/ }),

/***/ "/zHR":
/*!*************************************!*\
  !*** ./src/lib/util/Diagnostics.ts ***!
  \*************************************/
/*! exports provided: DiagnosticException, Diagnostics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticException", function() { return DiagnosticException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnostics", function() { return Diagnostics; });
/* harmony import */ var _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IDiagnostics */ "zX2+");

function locToString(loc) {
    return `${loc.line},${loc.column}`;
}
function rangeToString(range) {
    return `${locToString(range.start)}:${locToString(range.end)}`;
}
function readKey(desc, key) {
    let keyParts = key.split('.');
    if (keyParts.length > 1) {
        return readKey(desc[keyParts[0]], keyParts.splice(1).join('.'));
    }
    return desc[keyParts[0]];
}
function fillPattern(pattern, desc) {
    return pattern.replace(/{([a-zA-Z.]+)}/g, (match, key) => {
        return readKey(desc, key);
    });
}
class DiagnosticException extends Error {
    constructor(host, mesg) {
        super(mesg.content);
        Error.captureStackTrace(this, DiagnosticException);
    }
}
class Diagnostics {
    constructor(name, codePrefix) {
        this._name = name;
        this._codePrefix = (codePrefix || '').toUpperCase();
        this.reset();
    }
    emitException() {
        throw new DiagnosticException(this, this.getLastError());
    }
    reset() {
        this._entries = [];
    }
    resolve() {
        let report = { errors: 0, warnings: 0, messages: [] };
        for (let entry of this._entries) {
            let message = this.resolveEntry(entry);
            switch (message.category) {
                case _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_0__["EDiagnosticCategory"].k_Warning:
                    report.warnings++;
                    break;
                case _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_0__["EDiagnosticCategory"].k_Error:
                    report.errors++;
                    break;
            }
            report.messages.push(message);
        }
        return report;
    }
    resolveEntry(entry) {
        // let { category, desc } = entry;
        // let categoryName = (EDiagnosticCategory[category]).toLowerCase();
        let loc = null;
        let range;
        let start;
        let end;
        let file = this.resolveFilename(entry.code, entry.desc);
        if (range = this.resolveRange(entry.code, entry.desc)) {
            ({ start, end } = range);
            loc = rangeToString(range);
        }
        else {
            start = this.resolvePosition(entry.code, entry.desc);
            loc = locToString(start);
        }
        let content = `${this.resolveDescription(entry.code, entry.category, entry.desc)}`;
        let code = `${this._codePrefix}${entry.code}`;
        let category = entry.category;
        return { code, category, content, file, start, end };
    }
    resolveFilename(code, desc) {
        return '[unknown]';
    }
    resolvePosition(code, desc) {
        return { file: null, line: 0, column: 0 };
    }
    resolveRange(code, desc) {
        return null;
    }
    resolveDescription(code, category, desc) {
        let diagMesgs = this.diagnosticMessages();
        if (!diagMesgs) {
            console.error(`Diagnostic messages of '${this._name}' not found.`);
            return '[no description found]';
        }
        if (!diagMesgs[code]) {
            return `[no description found for code '${code}']`;
        }
        return fillPattern(diagMesgs[code], desc);
    }
    diagnosticMessages() {
        return null;
    }
    error(code, desc) {
        this._entries.push({ category: _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_0__["EDiagnosticCategory"].k_Error, code, desc });
    }
    warning(code, desc) {
        this._entries.push({ category: _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_0__["EDiagnosticCategory"].k_Warning, code, desc });
    }
    // add error and emit an exception in order to interrupt processing
    critical(code, desc) {
        this.error(code, desc);
        this.emitException();
    }
    prettyPrint() {
        return null; //JSON.stringify(this._errors, null, '\t');
    }
    hasErrors() {
        return this._entries.filter(entry => entry.category === _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_0__["EDiagnosticCategory"].k_Error).length > 0;
    }
    getLastError() {
        for (let i = this._entries.length - 1; i >= 0; --i) {
            if (this._entries[i].category === _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_0__["EDiagnosticCategory"].k_Error) {
                return this.resolveEntry(this._entries[i]);
            }
        }
        return null;
    }
    static mergeReports(reportList) {
        let result = { errors: 0, warnings: 0, messages: [] };
        reportList.forEach((report) => {
            result.errors += report.errors;
            result.warnings += report.warnings;
            result.messages = result.messages.concat(report.messages);
        });
        return result;
    }
    static stringify(report) {
        return report.messages.map(mesg => mesg.content).join('\n');
    }
    static asRange(mesg) {
        let range = { start: mesg.start, end: mesg.end };
        if (!range.end) {
            range.end = { ...range.start };
        }
        const { start, end } = range;
        if (end.line == start.line && end.column == start.column) {
            end.column += 1;
        }
        return range;
    }
}


/***/ }),

/***/ "0DIJ":
/*!************************************!*\
  !*** ./src/lib/fx/FXSLDocument.ts ***!
  \************************************/
/*! exports provided: createFXSLDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFXSLDocument", function() { return createFXSLDocument; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _analisys_FxAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analisys/FxAnalyzer */ "KjJp");
/* harmony import */ var _SLASTDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SLASTDocument */ "ahmV");



async function createFXSLDocument(param1, param2, param3) {
    let textDocument;
    let slastDocument;
    let slDocument;
    if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isString"])(arguments[0].source)) {
        const flags = Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(arguments[1]) ? arguments[1] : undefined;
        textDocument = arguments[0];
        slastDocument = await Object(_SLASTDocument__WEBPACK_IMPORTED_MODULE_2__["createSLASTDocument"])(textDocument, flags);
        slDocument = arguments[2];
    }
    else {
        slastDocument = arguments[0];
        slDocument = arguments[1];
    }
    const analyzer = new _analisys_FxAnalyzer__WEBPACK_IMPORTED_MODULE_1__["FxAnalyzer"];
    return await analyzer.parse(slastDocument, slDocument);
}


/***/ }),

/***/ "1O8D":
/*!***************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/IfStmtInstruction.ts ***!
  \***************************************************************/
/*! exports provided: IfStmtInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfStmtInstruction", function() { return IfStmtInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");
/* harmony import */ var _StmtInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StmtInstruction */ "oseZ");




/**
 * Represent if(expr) stmt or if(expr) stmt else stmt
 * ( if || if_else ) Expr Stmt [Stmt]
 */
class IfStmtInstruction extends _StmtInstruction__WEBPACK_IMPORTED_MODULE_3__["StmtInstruction"] {
    constructor({ cond, conseq, attributes = null, contrary = null, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_IfStmt, ...settings });
        this.cond = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(cond, this);
        this.conseq = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(conseq, this);
        this.contrary = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(contrary, this);
        this.attributes = (attributes || []).map(attr => _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(attr, this));
    }
    toCode() {
        var code = "";
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.contrary)) {
            code += "if(";
            code += this.cond.toCode() + ")";
            code += this.conseq.toCode();
        }
        else {
            code += "if(";
            code += this.cond.toCode() + ") ";
            code += this.conseq.toCode();
            code += "else ";
            code += this.contrary.toCode();
        }
        return code;
    }
}


/***/ }),

/***/ "2D+5":
/*!*************************************!*\
  !*** ./src/lib/parser/ParseTree.ts ***!
  \*************************************/
/*! exports provided: ParseTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseTree", function() { return ParseTree; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/parser/IParser */ "LhMq");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "wYUO");



class ParseTree {
    constructor(optimized, root = null) {
        this.root = root;
        this.nodes = [];
        this.optimized = optimized;
        this.nodesCountStack = [];
    }
    get lastNode() {
        return this.nodes[this.nodes.length - 1];
    }
    finishTree() {
        this.root = this.nodes.pop();
    }
    addToken({ name, value, loc }) {
        const children = null;
        const parent = null;
        this.addNode({ name, value, loc, children, parent });
    }
    reduceByRule(rule, eCreate = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_1__["ENodeCreateMode"].k_Default) {
        let iReduceCount = 0;
        let nodesCountStack = this.nodesCountStack;
        let ruleLength = rule.right.length;
        let nodes = this.nodes;
        let optimize = this.optimized ? 1 : 0;
        while (ruleLength) {
            iReduceCount += nodesCountStack.pop();
            ruleLength--;
        }
        if (eCreate === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_1__["ENodeCreateMode"].k_Skip && iReduceCount > optimize) {
            nodes.length -= iReduceCount;
            nodesCountStack.push(0);
        }
        else if ((eCreate === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_1__["ENodeCreateMode"].k_Default && iReduceCount > optimize) ||
            (eCreate === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_1__["ENodeCreateMode"].k_Necessary)) {
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(iReduceCount > 0);
            let temp = nodes.pop();
            iReduceCount--;
            const name = rule.left;
            // TODO: use correct location in case of include macro. 
            const loc = { ...temp.loc };
            const node = { name, children: null, parent: null, value: '', loc };
            this.addLink(node, temp);
            while (iReduceCount) {
                Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(nodes.length > 0);
                this.addLink(node, nodes.pop());
                iReduceCount--;
            }
            nodes.push(node);
            nodesCountStack.push(1);
        }
        else {
            nodesCountStack.push(iReduceCount);
        }
    }
    addNode(node) {
        this.nodes.push(node);
        this.nodesCountStack.push(1);
    }
    $pop(loc = null) {
        let count = this.nodesCountStack.pop();
        while (count) {
            let node = this.nodes.pop();
            if (loc) {
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["extendRange"])(loc, node.loc);
            }
            count--;
        }
    }
    addLink(parent, child) {
        parent.children = parent.children || [];
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["extendRange"])(parent.loc, child.loc);
        parent.children.push(child);
        child.parent = parent;
    }
    /** @deprecated */
    clone() {
        return new ParseTree(this.optimized, this.cloneNode(this.root));
    }
    /** @deprecated */
    // FIXME: location should be clonned too
    cloneNode({ name, value, children }) {
        const clone = { name, value, children: null, parent: null };
        if (children) {
            children.forEach(child => this.addLink(clone, this.cloneNode(child)));
        }
        return clone;
    }
    /** @deprecated */
    toString() {
        if (this.root) {
            return this.toStringNode(this.root);
        }
        return '';
    }
    /** @deprecated */
    toStringNode(node, padding = "") {
        let res = padding + "{\n";
        let oldPadding = padding;
        let defaultPadding = "  ";
        padding += defaultPadding;
        if (node.value) {
            res += padding + "name : \"" + node.name + "\"" + ",\n";
            res += padding + "value : \"" + node.value + "\"" + "\n";
        }
        else {
            res += padding + "name : \"" + node.name + "\"" + "\n";
            res += padding + "children : [";
            let children = node.children;
            if (children) {
                res += "\n";
                padding += defaultPadding;
                for (let i = children.length - 1; i >= 0; i--) {
                    res += this.toStringNode(children[i], padding);
                    res += ",\n";
                }
                res = res.slice(0, res.length - 2);
                res += "\n";
                res += oldPadding + defaultPadding + "]\n";
            }
            else {
                res += " ]\n";
            }
        }
        res += oldPadding + "}";
        return res;
    }
    /** @deprecated */
    toHTMLString(node, padding = "") {
        node = node || this.root;
        let res = padding + "{\n";
        let oldPadding = padding;
        let defaultPadding = "  ";
        padding += defaultPadding;
        if (node.value) {
            res += padding + "<b style=\"color: #458383;\">name</b>: \"" + node.name + "\"" + ",\n";
            res += padding + "<b style=\"color: #458383;\">value</b>: \"" + node.value + "\"" + ",\n";
            res += padding + "<b style=\"color: #458383;\">line</b>: \"" + node.loc.start.line + "\" - \"" + node.loc.end.line + "\"" + "\n";
            res += padding + "<b style=\"color: #458383;\">column</b>: \"" + node.loc.start.column + "\" - \"" + node.loc.end.column + "\"" + "\n";
            // sRes += sPadding + "<b style=\"color: #458383;\">position</b>: \"" + pNode.position + "\"" + "\n";
        }
        else {
            let i;
            res += padding + "<i style=\"color: #8A2BE2;\">name</i>: \"" + node.name + "\"" + "\n";
            res += padding + "<b style=\"color: #458383;\">line</b>: \"" + node.loc.start.line + "\" - \"" + node.loc.end.line + "\"" + "\n";
            res += padding + "<b style=\"color: #458383;\">column</b>: \"" + node.loc.start.column + "\" - \"" + node.loc.end.column + "\"" + "\n";
            // sRes += sPadding + "<b style=\"color: #458383;\">position</b>: \"" + pNode.position + "\"" + "\n";
            res += padding + "<i style=\"color: #8A2BE2;\">children</i>: [";
            if (node.children) {
                res += "\n";
                padding += defaultPadding;
                for (i = node.children.length - 1; i >= 0; i--) {
                    res += this.toHTMLString(node.children[i], padding);
                    res += ",\n";
                }
                res = res.slice(0, res.length - 2);
                res += "\n";
                res += oldPadding + defaultPadding + "]\n";
            }
            else {
                res += " ]\n";
            }
        }
        res += oldPadding + "}";
        return res;
    }
}


/***/ }),

/***/ "2b0+":
/*!*********************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/Instruction.ts ***!
  \*********************************************************/
/*! exports provided: Instruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instruction", function() { return Instruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");


class Instruction {
    constructor({ scope, instrType /* = EInstructionTypes.k_Instruction*/, sourceNode = null, visible = true }) {
        this._sourceNode = sourceNode;
        this._instructionType = instrType;
        this._instructionID = (Instruction.INSTRUCTION_COUNTER++);
        this._scope = scope;
        this._parent = null;
        this._lastError = null;
    }
    get parent() {
        // console.assert(this._parent, "Parent is not defined!");
        return this._parent;
    }
    get instructionType() {
        console.assert(this._instructionType != _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_Instruction, "Instruction type 'k_Instruction' is forbidden.");
        return this._instructionType;
    }
    get instructionName() {
        return _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"][this.instructionType];
    }
    get instructionID() {
        return this._instructionID;
    }
    get scope() {
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._scope)) {
            return this._scope;
        }
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.parent)) {
            return this.parent.scope;
        }
        return null;
    }
    get sourceNode() {
        return this._sourceNode;
    }
    _getLastError() {
        return this._lastError;
    }
    _setError(eCode, pInfo = null) {
        this._lastError = { code: eCode, info: pInfo };
    }
    _clearError() {
        this._lastError = null;
    }
    _isErrorOccured() {
        return !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._lastError);
    }
    /**
     * Check that instuction is valid.
     */
    _check(eStage, pInfo = null) {
        if (this._isErrorOccured()) {
            return false;
        }
        else {
            return true;
        }
    }
    toString() {
        console.error("@pure_virtual");
        return null;
    }
    toCode() {
        console.error("@pure_virtual");
        return null;
    }
    $withParent(parent) {
        console.assert(this._parent == null, "parent redefenition detected!");
        if (this.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_SystemType && this.name === 'float' && this._parent == null && parent != null) {
            debugger;
        }
        this._parent = parent;
        // todo: remove this hack!
        return this;
    }
    // An auxiliary function created to maintain the clarity of the code.
    $withNoParent() {
        return this;
    }
    static $withParent(child, parent) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(child)) {
            return null;
        }
        return child.$withParent(parent);
    }
    static $withNoParent(child) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(child)) {
            return null;
        }
        return child.$withNoParent();
    }
}
Instruction.INSTRUCTION_COUNTER = 0;


/***/ }),

/***/ "2blz":
/*!*******************************************!*\
  !*** ./src/lib/idl/ERenderStateValues.ts ***!
  \*******************************************/
/*! exports provided: ERenderStateValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERenderStateValues", function() { return ERenderStateValues; });
var ERenderStateValues;
(function (ERenderStateValues) {
    ERenderStateValues[ERenderStateValues["UNDEF"] = 0] = "UNDEF";
    ERenderStateValues[ERenderStateValues["TRUE"] = 1] = "TRUE";
    ERenderStateValues[ERenderStateValues["FALSE"] = 2] = "FALSE";
    ERenderStateValues[ERenderStateValues["ZERO"] = 3] = "ZERO";
    ERenderStateValues[ERenderStateValues["ONE"] = 4] = "ONE";
    ERenderStateValues[ERenderStateValues["SRCCOLOR"] = 5] = "SRCCOLOR";
    ERenderStateValues[ERenderStateValues["INVSRCCOLOR"] = 6] = "INVSRCCOLOR";
    ERenderStateValues[ERenderStateValues["SRCALPHA"] = 7] = "SRCALPHA";
    ERenderStateValues[ERenderStateValues["INVSRCALPHA"] = 8] = "INVSRCALPHA";
    ERenderStateValues[ERenderStateValues["DESTALPHA"] = 9] = "DESTALPHA";
    ERenderStateValues[ERenderStateValues["INVDESTALPHA"] = 10] = "INVDESTALPHA";
    ERenderStateValues[ERenderStateValues["DESTCOLOR"] = 11] = "DESTCOLOR";
    ERenderStateValues[ERenderStateValues["INVDESTCOLOR"] = 12] = "INVDESTCOLOR";
    ERenderStateValues[ERenderStateValues["SRCALPHASAT"] = 13] = "SRCALPHASAT";
    ERenderStateValues[ERenderStateValues["NONE"] = 14] = "NONE";
    ERenderStateValues[ERenderStateValues["CW"] = 15] = "CW";
    ERenderStateValues[ERenderStateValues["CCW"] = 16] = "CCW";
    ERenderStateValues[ERenderStateValues["FRONT"] = 17] = "FRONT";
    ERenderStateValues[ERenderStateValues["BACK"] = 18] = "BACK";
    ERenderStateValues[ERenderStateValues["FRONT_AND_BACK"] = 19] = "FRONT_AND_BACK";
    ERenderStateValues[ERenderStateValues["NEVER"] = 20] = "NEVER";
    ERenderStateValues[ERenderStateValues["LESS"] = 21] = "LESS";
    ERenderStateValues[ERenderStateValues["EQUAL"] = 22] = "EQUAL";
    ERenderStateValues[ERenderStateValues["LESSEQUAL"] = 23] = "LESSEQUAL";
    ERenderStateValues[ERenderStateValues["GREATER"] = 24] = "GREATER";
    ERenderStateValues[ERenderStateValues["NOTEQUAL"] = 25] = "NOTEQUAL";
    ERenderStateValues[ERenderStateValues["GREATEREQUAL"] = 26] = "GREATEREQUAL";
    ERenderStateValues[ERenderStateValues["ALWAYS"] = 27] = "ALWAYS";
    ERenderStateValues[ERenderStateValues["FUNCADD"] = 28] = "FUNCADD";
    ERenderStateValues[ERenderStateValues["FUNCSUBTRACT"] = 29] = "FUNCSUBTRACT";
    ERenderStateValues[ERenderStateValues["FUNCREVERSESUBTRACT"] = 30] = "FUNCREVERSESUBTRACT";
    // HACK: temp hack
    ERenderStateValues[ERenderStateValues["LINELIST"] = 31] = "LINELIST";
    ERenderStateValues[ERenderStateValues["LINESTRIP"] = 32] = "LINESTRIP";
    ERenderStateValues[ERenderStateValues["TRIANGLELIST"] = 33] = "TRIANGLELIST";
    ERenderStateValues[ERenderStateValues["TRAINGLESTRIP"] = 34] = "TRAINGLESTRIP";
    ERenderStateValues[ERenderStateValues["POINTLIST"] = 35] = "POINTLIST";
})(ERenderStateValues || (ERenderStateValues = {}));


/***/ }),

/***/ "2xh7":
/*!*****************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/CastExprInstruction.ts ***!
  \*****************************************************************/
/*! exports provided: CastExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastExprInstruction", function() { return CastExprInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



/**
 * Represent (type) expr
 * EMPTY_OPERATOR VariableTypeInstruction Instruction
 */
class CastExprInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__["ExprInstruction"] {
    constructor({ sourceExpr, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_CastExpr, ...settings });
        this.expr = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(sourceExpr, this);
    }
    toCode() {
        return `(${this.type.toCode()})${this.expr.toCode()}`;
    }
    isUseless() {
        return this.type.isEqual(this.expr.type);
    }
    isConst() {
        return this.expr.isConst();
    }
}


/***/ }),

/***/ "3UD+":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "49qt":
/*!**************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/FloatInstruction.ts ***!
  \**************************************************************/
/*! exports provided: FloatInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatInstruction", function() { return FloatInstruction; });
/* harmony import */ var _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/instructions/ExprInstruction */ "4AA8");
/* harmony import */ var _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/instructions/VariableTypeInstruction */ "hljw");
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");




class FloatInstruction extends _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__["ExprInstruction"] {
    /**
     * EMPTY_OPERATOR EMPTY_ARGUMENTS
     */
    constructor({ value, scope, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_FloatExpr,
            // NOTE: type wraping is no really necessary, just for debug purposes
            type: _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_1__["VariableTypeInstruction"].wrapAsConst(_lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["T_FLOAT"], _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["SCOPE"]), scope, ...settings });
        this.value = value;
    }
    toString() {
        return String(this.value);
    }
    toCode() {
        return `${this.value}${this.value % 1 === 0 ? '.' : ''}`;
    }
    evaluate() {
        this._evalResult = this.value;
        return true;
    }
    isConst() {
        return true;
    }
}


/***/ }),

/***/ "4AA8":
/*!*************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ExprInstruction.ts ***!
  \*************************************************************/
/*! exports provided: ExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExprInstruction", function() { return ExprInstruction; });
/* harmony import */ var _lib_fx_analisys_instructions_TypedInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/instructions/TypedInstruction */ "Y1wX");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");


class ExprInstruction extends _lib_fx_analisys_instructions_TypedInstruction__WEBPACK_IMPORTED_MODULE_0__["TypedInstruction"] {
    constructor({ ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_Expr, ...settings });
        this._evalResult = null;
    }
    get type() {
        return super.type;
    }
    evaluate() {
        console.error("@pure_virtual");
        return false;
    }
    getEvalValue() {
        return this._evalResult;
    }
    isConst() {
        // console.error("@pure_virtual");
        return false;
    }
    isConstExpr() {
        // todo: implement it properly
        return true;
    }
}


/***/ }),

/***/ "4PT3":
/*!********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/part/PartFxInstruction.ts ***!
  \********************************************************************/
/*! exports provided: PartFxInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartFxInstruction", function() { return PartFxInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _TechniqueInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TechniqueInstruction */ "+Z36");


// var s: IPartFxInstructionSettings;
// s.te
class PartFxInstruction extends _TechniqueInstruction__WEBPACK_IMPORTED_MODULE_1__["TechniqueInstruction"] {
    constructor({ spawnRoutine, initRoutine, updateRoutine, particle, capacity = -1, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PartFxDecl, techniqueType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["ETechniqueType"].k_PartFx, ...settings });
        this._spawnRoutine = spawnRoutine;
        this._initRoutine = initRoutine;
        this._updateRoutine = updateRoutine;
        this._particle = particle;
        this._capacity = capacity;
    }
    get spawnRoutine() {
        return this._spawnRoutine;
    }
    get initRoutine() {
        return this._initRoutine;
    }
    get updateRoutine() {
        return this._updateRoutine;
    }
    get particle() {
        return this._particle;
    }
    get capacity() {
        return this._capacity;
    }
    isValid() {
        const routineCheck = !!this.spawnRoutine && !!this.initRoutine && !!this.updateRoutine;
        const particleCheck = !!this.particle;
        const passCheck = this.passList && this.passList.filter((pass) => pass.isValid()).length > 0;
        return routineCheck && particleCheck && passCheck;
    }
}


/***/ }),

/***/ "4cxW":
/*!*********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/FunctionCallInstruction.ts ***!
  \*********************************************************************/
/*! exports provided: FunctionCallInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionCallInstruction", function() { return FunctionCallInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



/**
 * Respresnt func(arg1,..., argn)
 * EMPTY_OPERATOR IdExprInstruction ExprInstruction ... ExprInstruction
 */
class FunctionCallInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__["ExprInstruction"] {
    constructor({ decl, args, callee, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_FunctionCallExpr, ...settings });
        this.callee = callee;
        this.args = (args || []).map(arg => _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(arg, this));
        this.decl = decl;
    }
    toCode() {
        const { callee, decl: { def }, args } = this;
        return `${callee ? callee.toCode() + '.' : ''}${def.id.toCode()}(${args.map(arg => arg.toCode()).join(',')})`;
    }
}


/***/ }),

/***/ "5D93":
/*!******************************!*\
  !*** ./src/lib/path/path.ts ***!
  \******************************/
/*! exports provided: normalize, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "fb8x");

class Pathinfo {
    constructor(path) {
        this._dirname = null;
        this._extension = null;
        this._filename = null;
        if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(path)) {
            this.set(path);
        }
    }
    get path() {
        return this.toString();
    }
    set path(path) {
        this.set(path);
    }
    get dirname() {
        return this._dirname;
    }
    set dirname(dirname) {
        this._dirname = dirname;
    }
    get filename() {
        return this._filename;
    }
    set filename(filename) {
        this._filename = filename;
    }
    get ext() {
        return this._extension;
    }
    set ext(extension) {
        this._extension = extension;
    }
    get basename() {
        return (this._filename ? this._filename + (this._extension ? "." + this._extension : "") : "");
    }
    set basename(basename) {
        var nPos = basename.lastIndexOf(".");
        if (nPos < 0) {
            this._filename = basename.substr(0);
            this._extension = null;
        }
        else {
            this._filename = basename.substr(0, nPos);
            this._extension = basename.substr(nPos + 1);
        }
    }
    set(path) {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isString"])(path)) {
            var pParts = path.replace('\\', '/').split('/');
            this.basename = (pParts.pop());
            this._dirname = pParts.join('/');
        }
        else if (path instanceof Pathinfo) {
            this._dirname = path.dirname;
            this._filename = path.filename;
            this._extension = path.ext;
        }
        else if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(path)) {
            return null;
        }
        else {
            //critical_error
            throw new Error(`Unexpected data type was used: ${path}`);
        }
    }
    isAbsolute() { return this._dirname[0] === "/"; }
    toString() {
        return (this._dirname ? this._dirname + "/" : "") + (this.basename);
    }
}
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
            parts.splice(i, 1);
        }
        else if (last === "..") {
            parts.splice(i, 1);
            up++;
        }
        else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        for (; up--;) {
            parts.unshift("..");
        }
    }
    return parts;
}
function normalize(path) {
    var info = parse(path);
    var isAbsolute = info.isAbsolute();
    var tail = info.dirname;
    var trailingSlash = /[\\\/]$/.test(tail);
    tail = normalizeArray(tail.split(/[\\\/]+/).filter(function (p) {
        return !!p;
    }), !isAbsolute).join("/");
    if (tail && trailingSlash) {
        tail += "/";
    }
    info.dirname = ((isAbsolute ? "/" : "") + tail);
    return info.toString();
}
function parse(path) {
    return new Pathinfo(path);
}


/***/ }),

/***/ "5EX4":
/*!*************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/BoolInstruction.ts ***!
  \*************************************************************/
/*! exports provided: BoolInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolInstruction", function() { return BoolInstruction; });
/* harmony import */ var _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/instructions/ExprInstruction */ "4AA8");
/* harmony import */ var _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/instructions/VariableTypeInstruction */ "hljw");
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");




class BoolInstruction extends _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__["ExprInstruction"] {
    constructor({ value, scope, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_BoolExpr,
            // NOTE: type wraping is no really necessary, just for debug purposes
            type: _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_1__["VariableTypeInstruction"].wrapAsConst(_lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["T_BOOL"], _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["SCOPE"]), scope, ...settings });
        this.value = value;
    }
    toString() {
        return String(this.value);
    }
    toCode() {
        return this.value ? "true" : "false";
    }
    evaluate() {
        this._evalResult = this.value;
        return true;
    }
    isConst() {
        return true;
    }
}


/***/ }),

/***/ "5fm/":
/*!***************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/IdExprInstruction.ts ***!
  \***************************************************************/
/*! exports provided: IdExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdExprInstruction", function() { return IdExprInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



class IdExprInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__["ExprInstruction"] {
    constructor({ id, decl, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_IdExpr, type: decl.type, ...settings });
        this.id = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(id, this);
        this.decl = decl;
    }
    get name() {
        return this.id.name;
    }
    isConst() {
        return this.type.isConst();
    }
    /** @deprecated */
    evaluate() {
        return false;
    }
    toCode() {
        return this.decl.id.toCode();
    }
}


/***/ }),

/***/ "6dfp":
/*!**************************************!*\
  !*** ./src/lib/idl/ERenderStates.ts ***!
  \**************************************/
/*! exports provided: ERenderStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERenderStates", function() { return ERenderStates; });
var ERenderStates;
(function (ERenderStates) {
    ERenderStates[ERenderStates["BLENDENABLE"] = 0] = "BLENDENABLE";
    ERenderStates[ERenderStates["CULLFACEENABLE"] = 1] = "CULLFACEENABLE";
    ERenderStates[ERenderStates["ZENABLE"] = 2] = "ZENABLE";
    ERenderStates[ERenderStates["ZWRITEENABLE"] = 3] = "ZWRITEENABLE";
    ERenderStates[ERenderStates["DITHERENABLE"] = 4] = "DITHERENABLE";
    ERenderStates[ERenderStates["SCISSORTESTENABLE"] = 5] = "SCISSORTESTENABLE";
    ERenderStates[ERenderStates["STENCILTESTENABLE"] = 6] = "STENCILTESTENABLE";
    ERenderStates[ERenderStates["POLYGONOFFSETFILLENABLE"] = 7] = "POLYGONOFFSETFILLENABLE";
    ERenderStates[ERenderStates["CULLFACE"] = 8] = "CULLFACE";
    ERenderStates[ERenderStates["FRONTFACE"] = 9] = "FRONTFACE";
    ERenderStates[ERenderStates["SRCBLENDCOLOR"] = 10] = "SRCBLENDCOLOR";
    ERenderStates[ERenderStates["DESTBLENDCOLOR"] = 11] = "DESTBLENDCOLOR";
    ERenderStates[ERenderStates["SRCBLENDALPHA"] = 12] = "SRCBLENDALPHA";
    ERenderStates[ERenderStates["DESTBLENDALPHA"] = 13] = "DESTBLENDALPHA";
    ERenderStates[ERenderStates["BLENDEQUATIONCOLOR"] = 14] = "BLENDEQUATIONCOLOR";
    ERenderStates[ERenderStates["BLENDEQUATIONALPHA"] = 15] = "BLENDEQUATIONALPHA";
    ERenderStates[ERenderStates["ZFUNC"] = 16] = "ZFUNC";
    ERenderStates[ERenderStates["ALPHABLENDENABLE"] = 17] = "ALPHABLENDENABLE";
    ERenderStates[ERenderStates["ALPHATESTENABLE"] = 18] = "ALPHATESTENABLE";
    ERenderStates[ERenderStates["SRCBLEND"] = 19] = "SRCBLEND";
    ERenderStates[ERenderStates["DESTBLEND"] = 20] = "DESTBLEND";
    ERenderStates[ERenderStates["BLENDFUNC"] = 21] = "BLENDFUNC";
    ERenderStates[ERenderStates["BLENDFUNCSEPARATE"] = 22] = "BLENDFUNCSEPARATE";
    ERenderStates[ERenderStates["BLENDEQUATION"] = 23] = "BLENDEQUATION";
    ERenderStates[ERenderStates["BLENDEQUATIONSEPARATE"] = 24] = "BLENDEQUATIONSEPARATE";
    // HACK:
    ERenderStates[ERenderStates["PRIMITIVETOPOLOGY"] = 25] = "PRIMITIVETOPOLOGY";
})(ERenderStates || (ERenderStates = {}));


/***/ }),

/***/ "79MH":
/*!*********************************************!*\
  !*** ./src/lib/fx/analisys/helpers/type.ts ***!
  \*********************************************/
/*! exports provided: type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instruction */ "PKWX");
/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variable */ "UsCK");




var type;
(function (type_1) {
    // todo: rename it
    /** @deprecated */
    function isInheritedFromVariableDecl(type) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type.parent)) {
            return false;
        }
        const parentType = type.parent.instructionType;
        if (parentType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_VariableDecl) {
            return true;
        }
        else if (parentType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_VariableType) {
            return isInheritedFromVariableDecl(type.parent);
        }
        return false;
    }
    type_1.isInheritedFromVariableDecl = isInheritedFromVariableDecl;
    /** @deprecated */
    function isTypeOfField(type) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type.parent)) {
            return false;
        }
        if (type.parent.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_VariableDecl) {
            let pParentDecl = type.parent;
            return pParentDecl.isField();
        }
        return false;
    }
    type_1.isTypeOfField = isTypeOfField;
    /** @deprecated */
    function findParentContainer(type) {
        if (!isInheritedFromVariableDecl(type) || !isTypeOfField(type)) {
            return null;
        }
        let containerType = findParentVariableDecl(type).parent;
        if (!isInheritedFromVariableDecl(containerType)) {
            return null;
        }
        return findParentVariableDecl(containerType);
    }
    type_1.findParentContainer = findParentContainer;
    /** @deprecated */
    function findParentVariableDecl(type) {
        if (!isInheritedFromVariableDecl(type)) {
            return null;
        }
        let parentType = type.parent.instructionType;
        if (parentType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_VariableDecl) {
            return type.parent;
        }
        return findParentVariableDecl(type.parent);
    }
    type_1.findParentVariableDecl = findParentVariableDecl;
    /** @deprecated */
    function findParentVariableDeclName(type) {
        let varDecl = findParentVariableDecl(type);
        return Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(varDecl) ? null : varDecl.name;
    }
    type_1.findParentVariableDeclName = findParentVariableDeclName;
    /** @deprecated */
    function finParentTypeDecl(type) {
        if (!isInheritedFromVariableDecl(type)) {
            return null;
        }
        let parentType = type.parent.instructionType;
        if (parentType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_TypeDecl) {
            return type.parent;
        }
        return finParentTypeDecl(type.parent);
    }
    type_1.finParentTypeDecl = finParentTypeDecl;
    /** @deprecated */
    function finParentTypeDeclName(type) {
        let typeDecl = finParentTypeDecl(type);
        return Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(typeDecl) ? null : typeDecl.name;
    }
    type_1.finParentTypeDeclName = finParentTypeDeclName;
    /** @deprecated */
    function resolveVariableDeclFullName(type) {
        if (!isInheritedFromVariableDecl(type)) {
            console.error("Not from variable decl");
            return null;
        }
        return _variable__WEBPACK_IMPORTED_MODULE_3__["variable"].fullName(findParentVariableDecl(type));
    }
    type_1.resolveVariableDeclFullName = resolveVariableDeclFullName;
    // todo: add comment
    // todo: review this code
    /** @deprecated */
    function findMainVariable(type) {
        if (!isInheritedFromVariableDecl(type)) {
            return null;
        }
        if (isTypeOfField(type)) {
            return findMainVariable(type.parent.parent);
        }
        return findParentVariableDecl(type);
    }
    type_1.findMainVariable = findMainVariable;
    //
    // Signatures
    //
    function signatureVType(vtype, strong) {
        let prefix = '';
        if (strong) {
            if (vtype.usages.length > 0) {
                prefix = `${vtype.usages.join('_')}_`;
            }
        }
        let postfix = '';
        if (vtype.isNotBaseArray()) {
            postfix = '[]';
            if (vtype.length !== _instruction__WEBPACK_IMPORTED_MODULE_2__["instruction"].UNDEFINE_LENGTH) {
                postfix = `[${vtype.length}]`;
            }
        }
        return `${prefix}${signature(vtype.subType)}${postfix}`;
    }
    // function signatureVTypeRelaxed(vtype: IVariableTypeInstruction)
    function signature(type, strong = false) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type)) {
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(!strong);
            return '*';
        }
        switch (type.instructionType) {
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_VariableType:
                return signatureVType(type, strong);
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ComplexType:
                return `${type.name}${type.instructionID}`;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ProxyType:
                return type.baseType ? signature(type.baseType) : type.name;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_SystemType:
                return type.name;
            default:
                Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(false, 'unsupported type');
                return null;
        }
    }
    type_1.signature = signature;
    //
    // hash
    //
    function hashVType(vtype, strong) {
        let postfix = '';
        if (strong ? vtype.isArray() : vtype.isNotBaseArray()) {
            postfix = '[]';
            if (vtype.length !== _instruction__WEBPACK_IMPORTED_MODULE_2__["instruction"].UNDEFINE_LENGTH) {
                postfix = `[${vtype.length}]`;
            }
        }
        return `${hash(vtype.subType)}${postfix}`;
    }
    function hashComplex(ctype, strong) {
        return `{${ctype.fields.map(field => hash(field.type, strong)).join(';')}}`;
    }
    function hash(type, strong = false) {
        switch (type.instructionType) {
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_VariableType:
                return hashVType(type, strong);
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ComplexType:
                return hashComplex(type, strong);
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ProxyType:
                return type.baseType ? hash(type.baseType) : type.name;
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_SystemType:
                return type.name;
            default:
                Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(false, 'unsupported type');
                return null;
        }
    }
    type_1.hash = hash;
    function compareRelaxed(a, b, strong = false) {
        return hash(a, strong) === hash(b, strong);
    }
    type_1.compareRelaxed = compareRelaxed;
    // FIXME: refuse from the regular expressions in favor of a full typecasting graph
    function compare(a, b, strong = false) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(a) || Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(b)) {
            return false;
        }
        if (a instanceof RegExp && b instanceof RegExp) {
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(false);
            return false;
        }
        if (a instanceof RegExp) {
            let ra = a;
            let sb = signature(b, strong);
            return !!sb.match(ra);
        }
        if (b instanceof RegExp) {
            let sa = signature(a, strong);
            let rb = b;
            return !!sa.match(rb);
        }
        let ta = a;
        let tb = b;
        if (ta.isArray() && tb.isArray()) {
            if (ta.length === _instruction__WEBPACK_IMPORTED_MODULE_2__["instruction"].UNDEFINE_LENGTH ||
                tb.length === _instruction__WEBPACK_IMPORTED_MODULE_2__["instruction"].UNDEFINE_LENGTH) {
                return false;
            }
        }
        return signature(ta, strong) === signature(tb, strong);
    }
    type_1.compare = compare;
    // FIXME: refuse from the regular expressions in favor of a full typecasting graph
    function equals(a, b, strong = false) {
        return compare(a, b, strong);
    }
    type_1.equals = equals;
})(type || (type = {}));


/***/ }),

/***/ "7VRG":
/*!******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/BreakStmtInstruction.ts ***!
  \******************************************************************/
/*! exports provided: BreakStmtInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakStmtInstruction", function() { return BreakStmtInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _lib_fx_analisys_instructions_StmtInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/instructions/StmtInstruction */ "oseZ");


/**
 * Reprsernt continue; break; discard;
 * (continue || break || discard)
 */
class BreakStmtInstruction extends _lib_fx_analisys_instructions_StmtInstruction__WEBPACK_IMPORTED_MODULE_1__["StmtInstruction"] {
    constructor({ operator = "break", ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_BreakStmt, ...settings });
        this._operator = operator;
    }
    get operator() {
        return this._operator;
    }
    // todo: validate operator's name
    toCode() {
        console.assert(this.operator == "break");
        return this.operator + ";";
    }
}


/***/ }),

/***/ "7ga8":
/*!************************************************************!*\
  !*** ./src/lib/language-service/services/fx/codeLenses.ts ***!
  \************************************************************/
/*! exports provided: FXCodeLenses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FXCodeLenses", function() { return FXCodeLenses; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vscode-languageserver-types */ "kmEW");



class FXCodeLenses {
    doProvide(textDocument, slDocument) {
        if (!slDocument) {
            return [];
        }
        const lenses = [];
        const scope = slDocument.root.scope;
        /**
         * Just a draft code :)
         */
        const createCodeLens = (name, loc) => {
            const pos = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_2__["Position"].create(loc.start.line, loc.start.column);
            const range = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_2__["Range"].create(pos, pos);
            const lens = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_2__["CodeLens"].create(range);
            lens.command = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_2__["Command"].create(name, null);
            return lens;
        };
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(scope)) {
            for (const techniqueName in scope.techniques) {
                const technique = scope.techniques[techniqueName];
                if (technique.type === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["ETechniqueType"].k_PartFx) {
                    const partFx = technique;
                    if (partFx.spawnRoutine) {
                        const sourceNode = partFx.spawnRoutine.function.def.sourceNode;
                        lenses.push(createCodeLens(`[spawn routine]`, sourceNode.loc));
                    }
                    if (partFx.initRoutine) {
                        const sourceNode = partFx.initRoutine.function.def.sourceNode;
                        lenses.push(createCodeLens(`[init routine]`, sourceNode.loc));
                    }
                    if (partFx.updateRoutine) {
                        const sourceNode = partFx.updateRoutine.function.def.sourceNode;
                        lenses.push(createCodeLens(`[update routine]`, sourceNode.loc));
                    }
                    if (partFx.particle &&
                        partFx.particle.instructionType !== _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_SystemType) {
                        const sourceNode = partFx.particle.sourceNode;
                        lenses.push(createCodeLens(`[particle]`, sourceNode.loc));
                    }
                    for (const pass of partFx.passList) {
                        if (pass.prerenderRoutine) {
                            {
                                const sourceNode = pass.prerenderRoutine.function.def.sourceNode;
                                lenses.push(createCodeLens(`[prerender routine]`, sourceNode.loc));
                            }
                            {
                                const sourceNode = pass.particleInstance.sourceNode;
                                lenses.push(createCodeLens(`[material]`, sourceNode.loc));
                            }
                        }
                    }
                }
            }
        }
        return lenses;
    }
}


/***/ }),

/***/ "7vWe":
/*!******************************************!*\
  !*** ./src/lib/parser/AbstractParser.ts ***!
  \******************************************/
/*! exports provided: EParserErrors, GrammarDiagnostics, AbstractParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EParserErrors", function() { return EParserErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrammarDiagnostics", function() { return GrammarDiagnostics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractParser", function() { return AbstractParser; });
/* harmony import */ var _lib_bf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/bf */ "U+xq");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/parser/IParser */ "LhMq");
/* harmony import */ var _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/util/Diagnostics */ "/zHR");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item */ "GIxw");
/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lexer */ "TYG3");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./State */ "uXIj");
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbols */ "YPfw");








var EParserErrors;
(function (EParserErrors) {
    EParserErrors[EParserErrors["GrammarAddOperation"] = 2001] = "GrammarAddOperation";
    EParserErrors[EParserErrors["GrammarAddStateLink"] = 2002] = "GrammarAddStateLink";
    EParserErrors[EParserErrors["GrammarUnexpectedSymbol"] = 2003] = "GrammarUnexpectedSymbol";
    EParserErrors[EParserErrors["GrammarInvalidAdditionalFuncName"] = 2004] = "GrammarInvalidAdditionalFuncName";
    EParserErrors[EParserErrors["GrammarInvalidKeyword"] = 2005] = "GrammarInvalidKeyword";
})(EParserErrors || (EParserErrors = {}));
;
class GrammarDiagnostics extends _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_3__["Diagnostics"] {
    constructor() {
        super("Grammar diagnostics", 'G');
    }
    resolveFilename(code, desc) {
        return desc.file;
    }
    resolveRange(code, desc) {
        return null;
    }
    resolvePosition(code, desc) {
        return { line: desc.line, column: 0, file: null };
    }
    diagnosticMessages() {
        return {
            [EParserErrors.GrammarAddOperation]: "Grammar not LALR(1)! Cannot to generate syntax table. Add operation error.\n" +
                "Conflict in state with index: {stateIndex}. With grammar symbol: \"{grammarSymbol}\"\n" +
                "Old operation: {oldOperation}\n" +
                "New operation: {newOperation}\n" +
                "For more info init parser in debug-mode and see syntax table and list of states." +
                `\n\n{stateDesc}`,
            [EParserErrors.GrammarAddStateLink]: "Grammar not LALR(1)! Cannot to generate syntax table. Add state link error.\n" +
                "Conflict in state with index: {stateIndex}. With grammar symbol: \"{grammarSymbol}\"\n" +
                "Old next state: {oldNextStateIndex}\n" +
                "New next state: {newNextStateIndex}\n" +
                "For more info init parser in debug-mode and see syntax table and list of states.",
            [EParserErrors.GrammarUnexpectedSymbol]: "Grammar error. Can`t generate rules from grammar\n" +
                "Unexpected symbol: {unexpectedSymbol}\n" +
                "Expected: {expectedSymbol}",
            [EParserErrors.GrammarInvalidAdditionalFuncName]: "Grammar error. Empty additional function name.",
            [EParserErrors.GrammarInvalidKeyword]: "Grammar error. Bad keyword: {badKeyword}\n" +
                "All keyword must be define in lexer rule block."
        };
    }
}
class AbstractParser {
    // grammar: string, flags: number = EParserFlags.k_AllNode, type: EParserType = EParserType.k_LALR
    constructor({ grammar, flags = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserFlags"].k_Default, type = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserType"].k_LALR }) {
        this._syntaxTable = null;
        this._productions = null;
        this._baseItems = null;
        this._states = null;
        this._additionalFuncInfoList = null;
        this._adidtionalFunctByStateDMap = null;
        this._ruleCreationModeMap = null;
        this._firstTerminalsCache = null;
        // this._followTerminalsCache = null;
        this._closureForItemsCache = null;
        this._expectedExtensionDMap = null;
        this._diag = new GrammarDiagnostics;
        this.init({ grammar, flags, type });
    }
    get syntaxTable() {
        return this._syntaxTable;
    }
    findFunctionByState(stateIndex, grammarSymbol) {
        const funcDMap = this._adidtionalFunctByStateDMap;
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(funcDMap) &&
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(funcDMap[stateIndex]) &&
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(funcDMap[stateIndex][grammarSymbol])) {
            return funcDMap[stateIndex][grammarSymbol];
        }
        return null;
    }
    getRuleCreationMode(nonTerminal) {
        return this._ruleCreationModeMap[nonTerminal];
    }
    getGrammarSymbols() {
        return this._grammarSymbols;
    }
    init({ grammar, flags = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserFlags"].k_Default, type = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserType"].k_LALR }) {
        this.lexerEngine = new _Lexer__WEBPACK_IMPORTED_MODULE_5__["LexerEngine"]();
        this.generateRules(grammar, flags);
        this.buildSyntaxTable(type);
        this.generateFunctionByStateMap();
        if (!_lib_bf__WEBPACK_IMPORTED_MODULE_0__["default"].testAll(flags, _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserFlags"].k_Debug)) {
            this.clearMem();
        }
    }
    printStates(isBaseOnly = true) {
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this._states)) {
            console.warn("It`s impossible to print states. You must init parser in debug-mode");
            return;
        }
        const mesg = "\n" + this.statesToString(isBaseOnly);
        console.log(mesg);
    }
    printState(stateIndex, isBaseOnly = true) {
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this._states)) {
            console.log("It`s impossible to print states. You must init parser in debug-mode.");
            return;
        }
        var state = this._states[stateIndex];
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(state)) {
            console.log("Can not print stete with index: " + stateIndex.toString());
            return;
        }
        console.log(`\n${state.toString(isBaseOnly, this.getGrammarSymbols())}`);
    }
    critical(code, desc) {
        this._diag.critical(code, desc);
    }
    grammarError(code, desc) {
        let file = "grammar";
        switch (code) {
            case EParserErrors.GrammarAddOperation:
                {
                    const { stateIndex, grammarSymbol, oldOperation, newOperation } = desc;
                    this.critical(code, {
                        file, line: 0, stateIndex, grammarSymbol,
                        oldOperation: AbstractParser.operationToString(oldOperation),
                        newOperation: AbstractParser.operationToString(newOperation),
                        stateDesc: this._states[stateIndex].toString()
                    });
                }
                break;
            case EParserErrors.GrammarAddStateLink:
                {
                    const { stateIndex, grammarSymbol, oldNextStateIndex, newNextStateIndex } = desc;
                    this.critical(code, { file, line: 0, stateIndex, grammarSymbol, oldNextStateIndex, newNextStateIndex });
                }
                break;
            case EParserErrors.GrammarUnexpectedSymbol:
                {
                    const { grammarLine, expectedSymbol, unexpectedSymbol } = desc;
                    this.critical(code, { file, line: grammarLine, expectedSymbol, unexpectedSymbol });
                }
                break;
            case EParserErrors.GrammarInvalidAdditionalFuncName:
                {
                    const { grammarLine } = desc;
                    this.critical(code, { file, line: grammarLine });
                }
                break;
            case EParserErrors.GrammarInvalidKeyword:
                {
                    const { grammarLine, badKeyword } = desc;
                    this.critical(code, { file, line: grammarLine, badKeyword });
                }
                break;
            default:
                throw "invalid case!!!!";
        }
    }
    clearMem() {
        delete this._states;
        delete this._productions;
        delete this._baseItems;
        // delete this._followTerminalsCache;
        delete this._firstTerminalsCache;
        delete this._closureForItemsCache;
        delete this._expectedExtensionDMap;
    }
    /**
     * Check for the state's dublicate.
     */
    hasState(state, type) {
        return this._states.find(stateIth => stateIth.isEqual(state, type)) || null;
    }
    nonTerminals() {
        return Object.keys(this._productions);
    }
    rules(nonTerminal) {
        const prods = this._productions[nonTerminal];
        return prods ? Object.keys(prods).map(ruleIndex => prods[ruleIndex]) : null;
    }
    ruleCreationMode(symbol) {
        return this._ruleCreationModeMap[symbol];
    }
    /**
     * terminals & non-terminals;
     */
    symbols() {
        return [...this._grammarSymbols.keys()];
    }
    isTerminal(symbol) {
        return !(this._productions[symbol]);
    }
    /**
     * Add item to 'stateList' and set item's index in it.
     */
    pushState(state) {
        state.index = this._states.length;
        this._states.push(state);
    }
    /**
     * Add item to 'baseItemList' and set item's index in it.
     */
    pushBaseItem(item) {
        item.index = this._baseItems.length;
        this._baseItems.push(item);
    }
    tryAddState(state, type) {
        let res = this.hasState(state, type);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(res)) {
            if (type === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserType"].k_LR0) {
                state.eachItem(item => this.pushBaseItem(item));
            }
            this.pushState(state);
            this.closure(state, type);
            return state;
        }
        return res;
    }
    hasEmptyRule(symbol) {
        if (this.isTerminal(symbol)) {
            return false;
        }
        return !!this.rules(symbol).find(rule => rule.right.length === 0);
    }
    pushInSyntaxTable(syntaxTable, stateIndex, symbol, operation) {
        syntaxTable[stateIndex] = syntaxTable[stateIndex] || {};
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(syntaxTable[stateIndex][symbol])) {
            this.grammarError(EParserErrors.GrammarAddOperation, {
                stateIndex: stateIndex,
                grammarSymbol: this.convertGrammarSymbol(symbol),
                oldOperation: this._syntaxTable[stateIndex][symbol],
                newOperation: operation
            });
        }
        syntaxTable[stateIndex][symbol] = operation;
    }
    addStateLink(state, nextState, symbol) {
        let isAddState = state.addNextState(symbol, nextState);
        if (!isAddState) {
            this.grammarError(EParserErrors.GrammarAddStateLink, {
                stateIndex: state.index,
                oldNextStateIndex: state.nextStates[symbol] || null,
                newNextStateIndex: nextState.index,
                grammarSymbol: this.convertGrammarSymbol(symbol)
            });
        }
    }
    firstTerminals(symbol) {
        if (this.isTerminal(symbol)) {
            return null;
        }
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this._firstTerminalsCache[symbol])) {
            return this._firstTerminalsCache[symbol];
        }
        const rules = this.rules(symbol);
        const res = this._firstTerminalsCache[symbol] = new Set();
        if (this.hasEmptyRule(symbol)) {
            res.add(_symbols__WEBPACK_IMPORTED_MODULE_7__["T_EMPTY"]);
        }
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(rules)) {
            return res;
        }
        for (let i = 0; i < rules.length; ++i) {
            const rule = rules[i];
            const right = rule.right;
            let isFinish = false;
            for (let j = 0; j < right.length; j++) {
                if (right[j] === symbol) {
                    if (res.has(_symbols__WEBPACK_IMPORTED_MODULE_7__["T_EMPTY"])) {
                        continue;
                    }
                    isFinish = true;
                    break;
                }
                const terminals = this.firstTerminals(right[j]);
                if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(terminals)) {
                    res.add(right[j]);
                }
                else {
                    for (const terminal of terminals) {
                        res.add(terminal);
                    }
                }
                if (!this.hasEmptyRule(right[j])) {
                    isFinish = true;
                    break;
                }
            }
            if (!isFinish) {
                res.add(_symbols__WEBPACK_IMPORTED_MODULE_7__["T_EMPTY"]);
            }
        }
        return res;
    }
    // private followTerminal(symbolVal: string): IMap<boolean> {
    //     if (isDef(this._followTerminalsCache[symbolVal])) {
    //         return this._followTerminalsCache[symbolVal];
    //     }
    //     var i: number = 0, j: number = 0, k: number = 0, l: number = 0, m: number = 0;
    //     var pRulesDMap: IRuleDMap = this._rulesDMap;
    //     var rulesDMapKeys: string[], pRulesMapKeys: string[];
    //     var rule: IRule;
    //     var pTempRes: IMap<boolean>;
    //     var pTempKeys: string[];
    //     var res: IMap<boolean>;
    //     var right: string[];
    //     var isFinish: boolean;
    //     var sFirstKey: string;
    //     var sSecondKey: string;
    //     res = this._followTerminalsCache[symbolVal] = <IMap<boolean>>{};
    //     if (isNull(pRulesDMap)) {
    //         return res;
    //     }
    //     rulesDMapKeys = Object.keys(pRulesDMap);
    //     for (i = 0; i < rulesDMapKeys.length; i++) {
    //         sFirstKey = rulesDMapKeys[i];
    //         if (isNull(pRulesDMap[sFirstKey])) {
    //             continue;
    //         }
    //         pRulesMapKeys = Object.keys(pRulesDMap[sFirstKey]);
    //         for (j = 0; j < pRulesMapKeys.length; j++) {
    //             rule = pRulesDMap[sFirstKey][sSecondKey];
    //             right = rule.right;
    //             for (k = 0; k < right.length; k++) {
    //                 if (right[k] === symbolVal) {
    //                     if (k === right.length - 1) {
    //                         pTempRes = this.followTerminal(rule.left);
    //                         pTempKeys = Object.keys(pTempRes);
    //                         for (m = 0; m < pTempKeys.length; i++) {
    //                             res[pTempKeys[m]] = true;
    //                         }
    //                     }
    //                     else {
    //                         isFinish = false;
    //                         for (l = k + 1; l < right.length; l++) {
    //                             pTempRes = this.firstTerminal(right[l]);
    //                             if (isNull(pTempRes)) {
    //                                 res[right[l]] = true;
    //                                 isFinish = true;
    //                                 break;
    //                             }
    //                             else {
    //                                 pTempKeys = Object.keys(pTempRes);
    //                                 for (m = 0; m < pTempKeys.length; i++) {
    //                                     res[pTempKeys[m]] = true;
    //                                 }
    //                             }
    //                             if (!pTempRes[T_EMPTY]) {
    //                                 isFinish = true;
    //                                 break;
    //                             }
    //                         }
    //                         if (!isFinish) {
    //                             pTempRes = this.followTerminal(rule.left);
    //                             pTempKeys = Object.keys(pTempRes);
    //                             for (m = 0; m < pTempKeys.length; i++) {
    //                                 res[pTempKeys[m]] = true;
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     return res;
    // }
    firstTerminalsForSet(symbolList, expectedSymbols) {
        const res = new Set();
        for (let i = 0; i < symbolList.length; i++) {
            const terminals = this.firstTerminals(symbolList[i]);
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(terminals)) {
                res.add(symbolList[i]);
                return res;
            }
            let isEmpty = false;
            for (const symbol of terminals) {
                if (symbol === _symbols__WEBPACK_IMPORTED_MODULE_7__["T_EMPTY"]) {
                    isEmpty = true;
                    continue;
                }
                res.add(symbol);
            }
            if (!isEmpty) {
                return res;
            }
        }
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(expectedSymbols)) {
            expectedSymbols.forEach(expectedSymbol => res.add(expectedSymbol));
        }
        return res;
    }
    generateRules(grammarSource, flags) {
        let allRuleList = grammarSource.split(/\r?\n/);
        let tempRule;
        let rule;
        let isLexerBlock = false;
        this._productions = {};
        this._additionalFuncInfoList = [];
        this._ruleCreationModeMap = {};
        this._grammarSymbols = new Map([['END_SYMBOL', _symbols__WEBPACK_IMPORTED_MODULE_7__["END_SYMBOL"]]]);
        let i = 0, j = 0;
        // append all nodes ignoring any flags
        const forceAppendAllMode = _lib_bf__WEBPACK_IMPORTED_MODULE_0__["default"].testAll(flags, _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserFlags"].k_ForceAppendAll);
        // force unwind node if it is marked as '--expose'
        const allowExposeMode = _lib_bf__WEBPACK_IMPORTED_MODULE_0__["default"].testAll(flags, _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserFlags"].k_AllowExposeMode);
        // force add node if it is marked as '--add'
        const allowAddMode = _lib_bf__WEBPACK_IMPORTED_MODULE_0__["default"].testAll(flags, _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserFlags"].k_AllowAddMode);
        // remove node from parsing tree if it is marked as '--skip'
        const allowSkipMode = _lib_bf__WEBPACK_IMPORTED_MODULE_0__["default"].testAll(flags, _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserFlags"].k_AllowSkipMode);
        let symbolsWithNodeMap = this._ruleCreationModeMap;
        let name;
        let nRules = 0;
        for (i = 0; i < allRuleList.length; i++) {
            if (allRuleList[i] === "" || allRuleList[i] === "\r") {
                continue;
            }
            // split rule like 'S : Program'
            tempRule = allRuleList[i].trim().split(/\s* \s*/);
            // ignore rules starting with '#'
            if (tempRule[0][0] == _symbols__WEBPACK_IMPORTED_MODULE_7__["INLINE_COMMENT_SYMBOL"]) {
                continue;
            }
            if (isLexerBlock) {
                if ((tempRule.length === 3 || (tempRule.length === 4 && tempRule[3] === "")) &&
                    ((tempRule[2][0] === "\"" || tempRule[2][0] === "'") && tempRule[2].length > 3)) {
                    //TERMINALS
                    if (tempRule[2][0] !== tempRule[2][tempRule[2].length - 1]) {
                        this.grammarError(EParserErrors.GrammarUnexpectedSymbol, {
                            unexpectedSymbol: tempRule[2][tempRule[2].length - 1],
                            expectedSymbol: tempRule[2][0],
                            grammarLine: i
                        });
                    }
                    tempRule[2] = tempRule[2].slice(1, tempRule[2].length - 1);
                    var ch = tempRule[2][0];
                    if ((ch === "_") || (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
                        name = this.lexerEngine.addKeyword(tempRule[2], tempRule[0]);
                    }
                    else {
                        name = this.lexerEngine.addPunctuator(tempRule[2], tempRule[0]);
                    }
                    this._grammarSymbols.set(name, tempRule[2]);
                }
                continue;
            }
            // looking for '--LEXER--' keyword
            if (tempRule[0] === _symbols__WEBPACK_IMPORTED_MODULE_7__["LEXER_RULES"]) {
                isLexerBlock = true;
                continue;
            }
            //NON TERMNINAL RULES
            if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this._productions[tempRule[0]])) {
                this._productions[tempRule[0]] = {};
            }
            rule = {
                left: tempRule[0],
                right: [],
                index: 0
            };
            this._grammarSymbols.set(tempRule[0], tempRule[0]);
            if (forceAppendAllMode) {
                symbolsWithNodeMap[tempRule[0]] = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["ENodeCreateMode"].k_Default;
            }
            else if (allowExposeMode && !Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(symbolsWithNodeMap[tempRule[0]])) {
                symbolsWithNodeMap[tempRule[0]] = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["ENodeCreateMode"].k_Default;
            }
            else if (allowAddMode && !Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(symbolsWithNodeMap[tempRule[0]])) {
                symbolsWithNodeMap[tempRule[0]] = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["ENodeCreateMode"].k_Expose;
            }
            else if (allowSkipMode && !Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(symbolsWithNodeMap[tempRule[0]])) {
                symbolsWithNodeMap[tempRule[0]] = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["ENodeCreateMode"].k_Skip;
            }
            for (j = 2; j < tempRule.length; j++) {
                if (tempRule[j] === "") {
                    continue;
                }
                // handle flag '--add'
                if (tempRule[j] === _symbols__WEBPACK_IMPORTED_MODULE_7__["FLAG_RULE_CREATE_NODE"]) {
                    if (allowAddMode) {
                        symbolsWithNodeMap[tempRule[0]] = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["ENodeCreateMode"].k_Necessary;
                    }
                    continue;
                }
                if (tempRule[j] === _symbols__WEBPACK_IMPORTED_MODULE_7__["FLAG_RULE_SKIP_NODE"]) {
                    if (allowSkipMode && !forceAppendAllMode) {
                        symbolsWithNodeMap[tempRule[0]] = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["ENodeCreateMode"].k_Skip;
                    }
                    continue;
                }
                // handle flag '--expose'
                if (tempRule[j] === _symbols__WEBPACK_IMPORTED_MODULE_7__["FLAG_RULE_EXPOSE_NODE"]) {
                    if (allowExposeMode && !forceAppendAllMode) {
                        symbolsWithNodeMap[tempRule[0]] = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["ENodeCreateMode"].k_Expose;
                    }
                    continue;
                }
                // looking for additional user functions like '--F includeCode'
                if (tempRule[j] === _symbols__WEBPACK_IMPORTED_MODULE_7__["FLAG_RULE_FUNCTION"]) {
                    if ((!tempRule[j + 1] || tempRule[j + 1].length === 0)) {
                        this.grammarError(EParserErrors.GrammarInvalidAdditionalFuncName, { grammarLine: i });
                    }
                    const funcInfo = {
                        name: tempRule[j + 1],
                        position: rule.right.length,
                        rule: rule
                    };
                    this._additionalFuncInfoList.push(funcInfo);
                    j++;
                    continue;
                }
                // handle string literlas
                if (tempRule[j][0] === "'" || tempRule[j][0] === "\"") {
                    if (tempRule[j].length !== 3) {
                        this.grammarError(EParserErrors.GrammarInvalidKeyword, {
                            badKeyword: tempRule[j],
                            grammarLine: i
                        });
                    }
                    if (tempRule[j][0] !== tempRule[j][2]) {
                        this.grammarError(EParserErrors.GrammarUnexpectedSymbol, {
                            unexpectedSymbol: tempRule[j][2],
                            expectedSymbol: tempRule[j][0],
                            grammarLine: i
                        });
                    }
                    name = this.lexerEngine.addPunctuator(tempRule[j][1]);
                    rule.right.push(name);
                    this._grammarSymbols.set(name, tempRule[j][1]);
                }
                else {
                    rule.right.push(tempRule[j]);
                    this._grammarSymbols.set(tempRule[j], tempRule[j]);
                }
            }
            rule.index = nRules;
            this._productions[tempRule[0]][rule.index] = rule;
            nRules++;
            // TODO: emit diagnostics error instead.
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(nRules != 1 || Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this._productions[_symbols__WEBPACK_IMPORTED_MODULE_7__["START_SYMBOL"]][0]));
        }
    }
    generateFunctionByStateMap() {
        const stateList = this._states;
        const funcInfoList = this._additionalFuncInfoList;
        const funcByStateDMap = this._adidtionalFunctByStateDMap = {};
        for (let i = 0; i < funcInfoList.length; i++) {
            const funcInfo = funcInfoList[i];
            const rule = funcInfo.rule;
            const pos = funcInfo.position;
            const grammarSymbol = rule.right[pos - 1];
            for (let j = 0; j < stateList.length; j++) {
                if (stateList[j].hasRule(rule, pos)) {
                    funcByStateDMap[stateList[j].index] = funcByStateDMap[stateList[j].index] || {};
                    funcByStateDMap[stateList[j].index][grammarSymbol] = funcInfo.name;
                }
            }
        }
    }
    generateFirstState_LR0() {
        const state = new _State__WEBPACK_IMPORTED_MODULE_6__["State"]();
        // START_SYMBOL should be always defined at the beginning of grammar
        const firstRule = this._productions[_symbols__WEBPACK_IMPORTED_MODULE_7__["START_SYMBOL"]][0];
        const item = new _Item__WEBPACK_IMPORTED_MODULE_4__["Item"](firstRule, 0);
        this.pushBaseItem(item);
        state.push(item);
        this.closure_LR0(state);
        this.pushState(state);
    }
    generateFirstState_LR() {
        const state = new _State__WEBPACK_IMPORTED_MODULE_6__["State"]();
        const firstRule = this._productions[_symbols__WEBPACK_IMPORTED_MODULE_7__["START_SYMBOL"]][0];
        state.push(new _Item__WEBPACK_IMPORTED_MODULE_4__["Item"](firstRule, 0, [_symbols__WEBPACK_IMPORTED_MODULE_7__["END_SYMBOL"]]));
        this.closure_LR(state);
        this.pushState(state);
    }
    closure(state, type) {
        if (type === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserType"].k_LR0) {
            this.closure_LR0(state);
        }
        else {
            this.closure_LR(state);
        }
    }
    closure_LR0(state) {
        // NOTE: loop grows implicitly inside state.tryPush() function.
        //       do not change this loop.
        state.eachItem(item => {
            const symbol = item.symbolName();
            if (symbol !== _symbols__WEBPACK_IMPORTED_MODULE_7__["END_POSITION"] && !this.isTerminal(symbol)) {
                this.rules(symbol).forEach(rule => state.tryPush_LR0(rule, 0));
            }
        });
    }
    closure_LR(state) {
        let isNewExpected;
        do {
            isNewExpected = false;
            state.eachItem(item => {
                const symbol = item.symbolName();
                if (symbol !== _symbols__WEBPACK_IMPORTED_MODULE_7__["END_POSITION"] && !this.isTerminal(symbol)) {
                    const nextSymbols = item.rule.right.slice(item.pos + 1);
                    const expectedTerminals = this.firstTerminalsForSet(nextSymbols, item.expectedSymbols);
                    this.rules(symbol).forEach(rule => {
                        expectedTerminals.forEach(expectedTerminal => {
                            if (state.tryPush_LR(rule, 0, expectedTerminal)) {
                                isNewExpected = true;
                            }
                        });
                    });
                }
            });
        } while (isNewExpected);
    }
    static nextState_LR0(state, symbol) {
        const nextState = new _State__WEBPACK_IMPORTED_MODULE_6__["State"]();
        state.eachItem(item => {
            if (item.symbolName() === symbol) {
                nextState.push(new _Item__WEBPACK_IMPORTED_MODULE_4__["Item"](item.rule, item.pos + 1));
            }
        });
        return nextState;
    }
    static nextState_LR(state, symbol) {
        const nextState = new _State__WEBPACK_IMPORTED_MODULE_6__["State"]();
        state.eachItem(item => {
            if (item.symbolName() === symbol) {
                const expectedSymbols = Array.from(item.expectedSymbols);
                nextState.push(new _Item__WEBPACK_IMPORTED_MODULE_4__["Item"](item.rule, item.pos + 1, expectedSymbols));
            }
        });
        return nextState;
    }
    deleteNotBaseItems() {
        this._states.forEach(state => state.deleteNotBase());
    }
    closureForItem({ rule, pos }) {
        const indexVal = rule.index + "_" + pos;
        let state = this._closureForItemsCache[indexVal];
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(state)) {
            return state;
        }
        state = new _State__WEBPACK_IMPORTED_MODULE_6__["State"]();
        state.push(new _Item__WEBPACK_IMPORTED_MODULE_4__["Item"](rule, pos, [_symbols__WEBPACK_IMPORTED_MODULE_7__["UNUSED_SYMBOL"]]));
        this.closure_LR(state);
        this._closureForItemsCache[indexVal] = state;
        return state;
    }
    addLinkExpected(item, itemX) {
        let table = this._expectedExtensionDMap;
        let index = item.index;
        table[index] = table[index] || {};
        table[index][itemX.index] = true;
    }
    determineExpected(testState, symbol) {
        const stateNext = testState.nextStates[symbol] || null;
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(stateNext)) {
            return;
        }
        // at this moment all items already 'base' because of
        // deleteNotBase() call before.
        testState.eachBaseItem(baseItem => {
            const state = this.closureForItem(baseItem);
            stateNext.eachBaseItem(baseItemNext => {
                const item = state.hasChildItem(baseItemNext);
                if (item) {
                    item.expectedSymbols.forEach(symbol => {
                        if (symbol === _symbols__WEBPACK_IMPORTED_MODULE_7__["UNUSED_SYMBOL"]) {
                            this.addLinkExpected(baseItem, baseItemNext);
                        }
                        else {
                            baseItemNext.addExpected(symbol);
                        }
                    });
                }
            });
        });
    }
    generateLinksExpected() {
        const states = this._states;
        const symbols = this.symbols();
        states.forEach(state => symbols.forEach(symbol => this.determineExpected(state, symbol)));
    }
    expandExpected() {
        const baseItems = this._baseItems;
        const itemExpected = baseItems.map(item => true);
        const table = this._expectedExtensionDMap;
        baseItems[0].addExpected(_symbols__WEBPACK_IMPORTED_MODULE_7__["END_SYMBOL"]);
        itemExpected[0] = (true);
        let isNewExpected;
        do {
            isNewExpected = false;
            baseItems.forEach((baseItem) => {
                if (itemExpected[baseItem.index] && Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDefAndNotNull"])(table[baseItem.index])) {
                    let indexesOfExpectedItems = Object.keys(table[baseItem.index]).map(idx => Number(idx));
                    baseItem.expectedSymbols.forEach(expectedSymbol => {
                        indexesOfExpectedItems.forEach(expectedIndex => {
                            const baseItemExpected = baseItems[expectedIndex];
                            if (baseItemExpected.addExpected(expectedSymbol)) {
                                itemExpected[expectedIndex] = true;
                                isNewExpected = true;
                            }
                        });
                    });
                }
                itemExpected[baseItem.index] = false;
            });
        } while (isNewExpected);
    }
    generateStates(type) {
        if (type === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserType"].k_LR0) {
            this.generateStates_LR0();
        }
        else if (type === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserType"].k_LR1) {
            this.generateStates_LR();
        }
        else if (type === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserType"].k_LALR) {
            this.generateStates_LALR();
        }
    }
    generateStates_LR0() {
        this.generateFirstState_LR0();
        const stateList = this._states;
        const symbols = this.symbols();
        // NOTE: do not change this loop!
        for (let i = 0; i < stateList.length; i++) {
            const state = stateList[i];
            for (let j = 0; j < symbols.length; j++) {
                const symbol = symbols[j];
                let stateNext = AbstractParser.nextState_LR0(state, symbol);
                if (!stateNext.isEmpty()) {
                    stateNext = this.tryAddState(stateNext, _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserType"].k_LR0);
                    this.addStateLink(state, stateNext, symbol);
                }
            }
        }
    }
    generateStates_LR() {
        this._firstTerminalsCache = {};
        this.generateFirstState_LR();
        const stateList = this._states;
        const symbols = this.symbols();
        // NOTE: do not change this loop!
        for (let i = 0; i < stateList.length; i++) {
            const state = stateList[i];
            for (let j = 0; j < symbols.length; j++) {
                let symbol = symbols[j];
                let stateNext = AbstractParser.nextState_LR(state, symbol);
                if (!stateNext.isEmpty()) {
                    stateNext = this.tryAddState(stateNext, _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserType"].k_LR1);
                    this.addStateLink(state, stateNext, symbol);
                }
            }
        }
    }
    generateStates_LALR() {
        this._baseItems = [];
        this._expectedExtensionDMap = {};
        this._closureForItemsCache = {};
        this._firstTerminalsCache = {};
        this.generateStates_LR0();
        this.deleteNotBaseItems();
        this.generateLinksExpected();
        this.expandExpected();
        this._states.forEach(state => this.closure_LR(state));
    }
    addReducing(syntaxTable, state, reduceOperationsMap) {
        state.eachItem(item => {
            if (item.symbolName() === _symbols__WEBPACK_IMPORTED_MODULE_7__["END_POSITION"]) {
                if (item.rule.left === _symbols__WEBPACK_IMPORTED_MODULE_7__["START_SYMBOL"]) {
                    this.pushInSyntaxTable(syntaxTable, state.index, _symbols__WEBPACK_IMPORTED_MODULE_7__["END_SYMBOL"], { type: _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Success });
                }
                else {
                    for (const expectedSymbol of item.expectedSymbols) {
                        this.pushInSyntaxTable(syntaxTable, state.index, expectedSymbol, reduceOperationsMap[item.rule.index]);
                    }
                }
            }
        });
    }
    addShift(syntaxTable, state, shiftOperationsMap) {
        const nextStates = state.nextStates;
        const nextSymbols = Object.keys(nextStates);
        for (let i = 0; i < nextSymbols.length; i++) {
            const nextState = nextStates[nextSymbols[i]];
            this.pushInSyntaxTable(syntaxTable, state.index, nextSymbols[i], shiftOperationsMap[nextState.index]);
        }
    }
    buildSyntaxTable(type) {
        this._states = [];
        this._syntaxTable = {};
        const stateList = this._states;
        const syntaxTable = this._syntaxTable;
        this.generateStates(type);
        const reduceOperationsMap = {};
        const shiftOperationsMap = {};
        stateList.forEach(state => {
            shiftOperationsMap[state.index] = {
                type: _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Shift,
                stateIndex: state.index
            };
        });
        const nonTerminals = this.nonTerminals();
        nonTerminals.forEach(nonTerminal => {
            this.rules(nonTerminal).forEach(rule => {
                reduceOperationsMap[rule.index] = {
                    type: _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Reduce,
                    rule: rule
                };
            });
        });
        //Build syntax table
        stateList.forEach(state => {
            this.addReducing(syntaxTable, state, reduceOperationsMap);
            this.addShift(syntaxTable, state, shiftOperationsMap);
        });
    }
    statesToString(isBaseOnly = true) {
        if (!this._states) {
            return "";
        }
        let msg = "";
        for (let i = 0; i < this._states.length; i++) {
            msg += this._states[i].toString(isBaseOnly, this._grammarSymbols);
            msg += " ";
        }
        return msg;
    }
    static operationToString(operation) {
        let opVal = "";
        switch (operation.type) {
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Shift:
                opVal = "SHIFT to state " + operation.stateIndex.toString();
                break;
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Reduce:
                opVal = "REDUCE by rule { " + AbstractParser.ruleToString(operation.rule) + " }";
                break;
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Success:
                opVal = "SUCCESS";
                break;
        }
        return opVal;
    }
    static ruleToString(rule) {
        let ruleVal;
        ruleVal = rule.left + " : " + rule.right.join(" ");
        return ruleVal;
    }
    convertGrammarSymbol(symbol) {
        if (!this.isTerminal(symbol)) {
            return symbol;
        }
        return this.lexerEngine.getTerminalValueByName(symbol);
    }
}
AbstractParser.$parserEngine = null;
AbstractParser.$parserParams = null;


/***/ }),

/***/ "9EOq":
/*!****************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ProvideInstruction.ts ***!
  \****************************************************************/
/*! exports provided: ProvideInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideInstruction", function() { return ProvideInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");


class ProvideInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"] {
    constructor({ moduleName, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_Provide, ...settings });
        this._value = moduleName;
    }
    get moduleName() {
        return this._value;
    }
    toString() {
        return this._value;
    }
    toCode() {
        return this._value;
    }
}


/***/ }),

/***/ "9hKy":
/*!******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ProxyTypeInstruction.ts ***!
  \******************************************************************/
/*! exports provided: ProxyTypeInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyTypeInstruction", function() { return ProxyTypeInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "u2cq");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");




class ProxyTypeInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"] {
    constructor(settings) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ProxyType, ...settings });
        this._host = null;
    }
    get host() {
        return this._host;
    }
    get writable() {
        return this.isResolved() ? this.host.writable : true;
    }
    get readable() {
        return this.isResolved() ? this.host.writable : true;
    }
    get name() {
        return this.isResolved() ? this.host.name : 'auto';
    }
    get size() {
        return this.isResolved() ? this.host.size : _helpers__WEBPACK_IMPORTED_MODULE_2__["instruction"].UNDEFINE_SIZE;
    }
    get baseType() {
        return this.host;
    }
    get arrayElementType() {
        return this.isResolved() ? this.host.arrayElementType : null;
    }
    get typeDecl() {
        return this.parent;
    }
    get length() {
        return this.isResolved() ? this.host.length : _helpers__WEBPACK_IMPORTED_MODULE_2__["instruction"].UNDEFINE_LENGTH;
    }
    get fieldNames() {
        return this.isResolved() ? this.host.fieldNames : [];
    }
    get fields() {
        return this.isResolved() ? this.host.fields : [];
    }
    get methods() {
        return [];
    }
    isResolved() {
        return !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.host);
    }
    resolve(host) {
        this._host = host;
    }
    isSampler() {
        return this.isResolved() ? this.host.isSampler() : false;
    }
    isTexture() {
        return this.isResolved() ? this.host.isTexture() : false;
    }
    isUAV() {
        return this.isResolved() ? this.host.isUAV() : false;
    }
    toString() {
        return this.isResolved() ? this.host.toString() : this.name;
    }
    /** @deprecated */
    toDeclString() {
        return this.isResolved() ? this.host.toDeclString() : null;
    }
    /** @deprecated */
    isEqual(value) {
        return _helpers__WEBPACK_IMPORTED_MODULE_2__["type"].equals(this, value);
    }
    toCode() {
        return this.isResolved() ? this.host.toCode() : this.name;
    }
    isBase() {
        return this.isResolved() ? this.host.isBase() : false;
    }
    isArray() {
        return this.isResolved() ? this.host.isArray() : false;
    }
    isNotBaseArray() {
        return this.isResolved() ? this.host.isNotBaseArray() : false;
    }
    isComplex() {
        return this.isResolved() ? this.host.isComplex() : false;
    }
    isConst() {
        return this.isResolved() ? this.host.isConst() : false;
    }
    /** @deprecated */
    isContainArray() {
        return this.isResolved() ? this.host.isContainArray() : false;
    }
    /** @deprecated */
    isContainSampler() {
        return this.isResolved() ? this.host.isContainSampler() : false;
    }
    /** @deprecated */
    isContainComplexType() {
        return this.isResolved() ? this.host.isContainComplexType() : false;
    }
    hasField(fieldName) {
        return this.isResolved() ? this.host.hasField(fieldName) : false;
    }
    hasFieldWithSematics(semantic) {
        return this.isResolved() ? this.host.hasFieldWithSematics(semantic) : false;
    }
    getField(fieldName) {
        return this.isResolved() ? this.host.getField(fieldName) : null;
    }
    getMethod(methodName, args) {
        return this.isResolved() ? this.host.getMethod(methodName, args) : null;
    }
    getFieldBySemantics(semantic) {
        return this.isResolved() ? this.host.getFieldBySemantics(semantic) : null;
    }
    hasFieldWithoutSemantics() {
        return this.isResolved() ? this.host.hasFieldWithoutSemantics() : false;
    }
    hasAllUniqueSemantics() {
        return this.isResolved() ? this.host.hasAllUniqueSemantics() : false;
    }
}


/***/ }),

/***/ "9vj8":
/*!***************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/StringInstruction.ts ***!
  \***************************************************************/
/*! exports provided: StringInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringInstruction", function() { return StringInstruction; });
/* harmony import */ var _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/instructions/ExprInstruction */ "4AA8");
/* harmony import */ var _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/instructions/VariableTypeInstruction */ "hljw");
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");




class StringInstruction extends _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__["ExprInstruction"] {
    /**
     * EMPTY_OPERATOR EMPTY_ARGUMENTS
     */
    constructor({ value, scope, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_StringExpr,
            // NOTE: type wraping is no really necessary, just for debug purposes
            type: _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_1__["VariableTypeInstruction"].wrapAsConst(_lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["T_STRING"], _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["SCOPE"]), scope, ...settings });
        this._value = value;
    }
    get value() {
        return this._value;
    }
    toString() {
        return this._value;
    }
    toCode() {
        return this._value;
    }
    evaluate() {
        this._evalResult = this._value;
        return true;
    }
    isConst() {
        return true;
    }
}


/***/ }),

/***/ "BKBR":
/*!*********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/FunctionDeclInstruction.ts ***!
  \*********************************************************************/
/*! exports provided: FunctionDeclInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionDeclInstruction", function() { return FunctionDeclInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _DeclInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeclInstruction */ "mXWi");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



/**
 * Represent type func(...args)[:Semantic] [<Annotation> {stmts}]
 * EMPTY_OPERTOR FunctionDefInstruction StmtBlockInstruction
 */
class FunctionDeclInstruction extends _DeclInstruction__WEBPACK_IMPORTED_MODULE_1__["DeclInstruction"] {
    constructor({ definition, implementation = null, attributes = null, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_FunctionDecl, ...settings });
        this.def = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(definition, this);
        this.impl = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(implementation, this);
        this.attributes = (attributes || []).map(attr => _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(attr, this));
    }
    get name() {
        return this.def.name;
    }
    get id() {
        return this.def.id;
    }
    get semantic() {
        return this.def.semantic;
    }
    toCode() {
        let code = '';
        code += this.def.toCode();
        if (this.impl) {
            code += this.impl.toCode();
        }
        else {
            code += ';';
        }
        return code;
    }
}


/***/ }),

/***/ "C2sc":
/*!***********************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/IdInstruction.ts ***!
  \***********************************************************/
/*! exports provided: IdInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdInstruction", function() { return IdInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");


class IdInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"] {
    constructor({ name, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_Id, ...settings });
        this.name = name;
    }
    toString() {
        return this.name;
    }
    toCode() {
        return this.name;
    }
}


/***/ }),

/***/ "C3oy":
/*!**************************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/PostfixArithmeticInstruction.ts ***!
  \**************************************************************************/
/*! exports provided: PostfixArithmeticInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostfixArithmeticInstruction", function() { return PostfixArithmeticInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



/**
 * Represent someExpr ++
 * (-- | ++) Instruction
 */
class PostfixArithmeticInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__["ExprInstruction"] {
    constructor({ expr, operator, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PostfixArithmeticExpr, type: expr.type, ...settings });
        this._operator = operator;
        this._expr = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(expr, this);
    }
    get expr() {
        return this._expr;
    }
    get operator() {
        return this._operator;
    }
    toCode() {
        var code = '';
        code += this.expr.toCode();
        code += this.operator;
        return code;
    }
    isConst() {
        return this.expr.isConst();
    }
}


/***/ }),

/***/ "DAvO":
/*!*************************************!*\
  !*** ./src/lib/idl/part/IPartFx.ts ***!
  \*************************************/
/*! exports provided: EPartFxPassGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPartFxPassGeometry", function() { return EPartFxPassGeometry; });
// import { EPartFxInstructionTypes } from "./IPartFxInstruction";
var EPartFxPassGeometry;
(function (EPartFxPassGeometry) {
    EPartFxPassGeometry[EPartFxPassGeometry["k_Billboard"] = 0] = "k_Billboard";
    EPartFxPassGeometry[EPartFxPassGeometry["k_Cylinder"] = 1] = "k_Cylinder";
    EPartFxPassGeometry[EPartFxPassGeometry["k_Box"] = 2] = "k_Box";
    EPartFxPassGeometry[EPartFxPassGeometry["k_Sphere"] = 3] = "k_Sphere";
    EPartFxPassGeometry[EPartFxPassGeometry["k_Line"] = 4] = "k_Line";
})(EPartFxPassGeometry || (EPartFxPassGeometry = {}));


/***/ }),

/***/ "DTTp":
/*!********************************!*\
  !*** ./src/lib/fx/Visitors.ts ***!
  \********************************/
/*! exports provided: visitor, Visitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitor", function() { return visitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitor", function() { return Visitor; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");

// TODO: move it to helpers
function visitor(owner, cb) {
    if (!owner) {
        return;
    }
    const visit = (instr) => {
        if (instr) {
            cb(instr, owner);
            visitor(instr, cb);
        }
    };
    switch (owner.instructionType) {
        //
        // Stmt
        //
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ReturnStmt:
            visit(owner.expr);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_DeclStmt:
            owner.declList.forEach(decl => visit(decl));
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ExprStmt:
            visit(owner.expr);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_IfStmt:
            visit(owner.cond);
            visit(owner.conseq);
            visit(owner.contrary);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_StmtBlock:
            owner.stmtList.forEach(stmt => visit(stmt));
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ForStmt:
            visit(owner.init);
            visit(owner.cond);
            visit(owner.body);
            visit(owner.step);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_WhileStmt:
            visit(owner.cond);
            visit(owner.body);
            break;
        //
        // Expr
        //
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ArithmeticExpr:
            visit(owner.left);
            visit(owner.right);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_AssignmentExpr:
            visit(owner.left);
            visit(owner.right);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_CastExpr:
            visit(owner.expr);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_CompileExpr:
            owner.args.forEach(arg => visit(arg));
            // visit((owner as ICompileExprInstruction).function);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ComplexExpr:
            visit(owner.expr);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ConditionalExpr:
            visit(owner.left);
            visit(owner.right);
            visit(owner.condition);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ConstructorCallExpr:
            owner.args.forEach(arg => visit(arg));
            // visit((owner as IConstructorCallInstruction).ctor);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_FunctionCallExpr:
            owner.args.forEach(arg => visit(arg));
            // visit((owner as IFunctionCallInstruction).decl);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_IdExpr:
            visit(owner.id);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_InitExpr:
            owner.args.forEach(arg => visit(arg));
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_IntExpr:
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_FloatExpr:
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_BoolExpr:
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_StringExpr:
            // nothing todo
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_LogicalExpr:
            visit(owner.left);
            visit(owner.right);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PostfixArithmeticExpr:
            visit(owner.expr);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PostfixIndexExpr:
            visit(owner.element);
            visit(owner.index);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PostfixPointExpr:
            visit(owner.element);
            visit(owner.postfix);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_RelationalExpr:
            visit(owner.left);
            visit(owner.right);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_SamplerStateBlockExpr:
            owner.params.forEach(param => visit(param));
            visit(owner.texture);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_UnaryExpr:
            visit(owner.expr);
            break;
        //
        // Others
        //
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ComplexType:
            owner.fields.forEach(field => visit(field));
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_FunctionDef:
            visit(owner.returnType);
            visit(owner.id);
            owner.params.forEach(param => visit(param));
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_FunctionDecl:
            visit(owner.def);
            visit(owner.impl);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_VariableDecl:
            visit(owner.type);
            visit(owner.initExpr);
            visit(owner.id);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_VariableType:
            visit(owner.subType);
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_Id:
            // nothing todo
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_SystemFunctionDecl:
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_SystemType:
            // nothing todo
            break;
        case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_BreakStmt:
            break;
        default:
            console.error('unsupported instruction type found');
    }
}
const Visitor = {
    each: visitor
};


/***/ }),

/***/ "FrU9":
/*!*************************************!*\
  !*** ./src/lib/idl/IInstruction.ts ***!
  \*************************************/
/*! exports provided: EInstructionTypes, ECheckStage, EVarUsedMode, EExtractExprType, EScopeType, ETechniqueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EInstructionTypes", function() { return EInstructionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECheckStage", function() { return ECheckStage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVarUsedMode", function() { return EVarUsedMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EExtractExprType", function() { return EExtractExprType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EScopeType", function() { return EScopeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETechniqueType", function() { return ETechniqueType; });
var EInstructionTypes;
(function (EInstructionTypes) {
    EInstructionTypes[EInstructionTypes["k_Instruction"] = 0] = "k_Instruction";
    EInstructionTypes[EInstructionTypes["k_Id"] = 1] = "k_Id";
    EInstructionTypes[EInstructionTypes["k_Provide"] = 2] = "k_Provide";
    EInstructionTypes[EInstructionTypes["k_Collector"] = 3] = "k_Collector";
    EInstructionTypes[EInstructionTypes["k_Keyword"] = 4] = "k_Keyword";
    EInstructionTypes[EInstructionTypes["k_Simple"] = 5] = "k_Simple";
    EInstructionTypes[EInstructionTypes["k_SamplerState"] = 6] = "k_SamplerState";
    EInstructionTypes[EInstructionTypes["k_Attribute"] = 7] = "k_Attribute";
    EInstructionTypes[EInstructionTypes["k_Annotation"] = 8] = "k_Annotation";
    EInstructionTypes[EInstructionTypes["k_UsageType"] = 9] = "k_UsageType";
    EInstructionTypes[EInstructionTypes["k_Typed"] = 10] = "k_Typed";
    EInstructionTypes[EInstructionTypes["k_VariableType"] = 11] = "k_VariableType";
    EInstructionTypes[EInstructionTypes["k_SystemType"] = 12] = "k_SystemType";
    EInstructionTypes[EInstructionTypes["k_ComplexType"] = 13] = "k_ComplexType";
    EInstructionTypes[EInstructionTypes["k_ProxyType"] = 14] = "k_ProxyType";
    EInstructionTypes[EInstructionTypes["k_Expr"] = 15] = "k_Expr";
    EInstructionTypes[EInstructionTypes["k_IdExpr"] = 16] = "k_IdExpr";
    EInstructionTypes[EInstructionTypes["k_IntExpr"] = 17] = "k_IntExpr";
    EInstructionTypes[EInstructionTypes["k_FloatExpr"] = 18] = "k_FloatExpr";
    EInstructionTypes[EInstructionTypes["k_BoolExpr"] = 19] = "k_BoolExpr";
    EInstructionTypes[EInstructionTypes["k_StringExpr"] = 20] = "k_StringExpr";
    EInstructionTypes[EInstructionTypes["k_ArithmeticExpr"] = 21] = "k_ArithmeticExpr";
    EInstructionTypes[EInstructionTypes["k_AssignmentExpr"] = 22] = "k_AssignmentExpr";
    EInstructionTypes[EInstructionTypes["k_RelationalExpr"] = 23] = "k_RelationalExpr";
    EInstructionTypes[EInstructionTypes["k_LogicalExpr"] = 24] = "k_LogicalExpr";
    EInstructionTypes[EInstructionTypes["k_ConditionalExpr"] = 25] = "k_ConditionalExpr";
    EInstructionTypes[EInstructionTypes["k_CastExpr"] = 26] = "k_CastExpr";
    EInstructionTypes[EInstructionTypes["k_UnaryExpr"] = 27] = "k_UnaryExpr";
    EInstructionTypes[EInstructionTypes["k_PostfixIndexExpr"] = 28] = "k_PostfixIndexExpr";
    EInstructionTypes[EInstructionTypes["k_PostfixPointExpr"] = 29] = "k_PostfixPointExpr";
    EInstructionTypes[EInstructionTypes["k_PostfixArithmeticExpr"] = 30] = "k_PostfixArithmeticExpr";
    EInstructionTypes[EInstructionTypes["k_ComplexExpr"] = 31] = "k_ComplexExpr";
    EInstructionTypes[EInstructionTypes["k_FunctionCallExpr"] = 32] = "k_FunctionCallExpr";
    EInstructionTypes[EInstructionTypes["k_ConstructorCallExpr"] = 33] = "k_ConstructorCallExpr";
    EInstructionTypes[EInstructionTypes["k_CompileExpr"] = 34] = "k_CompileExpr";
    EInstructionTypes[EInstructionTypes["k_InitExpr"] = 35] = "k_InitExpr";
    EInstructionTypes[EInstructionTypes["k_SamplerStateBlockExpr"] = 36] = "k_SamplerStateBlockExpr";
    EInstructionTypes[EInstructionTypes["k_Decl"] = 37] = "k_Decl";
    EInstructionTypes[EInstructionTypes["k_TypeDecl"] = 38] = "k_TypeDecl";
    EInstructionTypes[EInstructionTypes["k_VariableDecl"] = 39] = "k_VariableDecl";
    EInstructionTypes[EInstructionTypes["k_StructDecl"] = 40] = "k_StructDecl";
    EInstructionTypes[EInstructionTypes["k_FunctionDecl"] = 41] = "k_FunctionDecl";
    EInstructionTypes[EInstructionTypes["k_SystemFunctionDecl"] = 42] = "k_SystemFunctionDecl";
    EInstructionTypes[EInstructionTypes["k_FunctionDef"] = 43] = "k_FunctionDef";
    EInstructionTypes[EInstructionTypes["k_PassDecl"] = 44] = "k_PassDecl";
    EInstructionTypes[EInstructionTypes["k_TechniqueDecl"] = 45] = "k_TechniqueDecl";
    EInstructionTypes[EInstructionTypes["k_Stmt"] = 46] = "k_Stmt";
    EInstructionTypes[EInstructionTypes["k_ExprStmt"] = 47] = "k_ExprStmt";
    EInstructionTypes[EInstructionTypes["k_BreakStmt"] = 48] = "k_BreakStmt";
    EInstructionTypes[EInstructionTypes["k_WhileStmt"] = 49] = "k_WhileStmt";
    EInstructionTypes[EInstructionTypes["k_ForStmt"] = 50] = "k_ForStmt";
    EInstructionTypes[EInstructionTypes["k_IfStmt"] = 51] = "k_IfStmt";
    EInstructionTypes[EInstructionTypes["k_DeclStmt"] = 52] = "k_DeclStmt";
    EInstructionTypes[EInstructionTypes["k_ReturnStmt"] = 53] = "k_ReturnStmt";
    EInstructionTypes[EInstructionTypes["k_SemicolonStmt"] = 54] = "k_SemicolonStmt";
    EInstructionTypes[EInstructionTypes["k_StmtBlock"] = 55] = "k_StmtBlock";
    // part fx
    EInstructionTypes[EInstructionTypes["k_PartFxDecl"] = 56] = "k_PartFxDecl";
    EInstructionTypes[EInstructionTypes["k_PartFxPass"] = 57] = "k_PartFxPass";
    EInstructionTypes[EInstructionTypes["k_SpawnStmt"] = 58] = "k_SpawnStmt";
})(EInstructionTypes || (EInstructionTypes = {}));
var ECheckStage;
(function (ECheckStage) {
    ECheckStage[ECheckStage["CODE_TARGET_SUPPORT"] = 0] = "CODE_TARGET_SUPPORT";
    ECheckStage[ECheckStage["SELF_CONTAINED"] = 1] = "SELF_CONTAINED"; /* Код замкнут, нет не определенных функций, пассов, техник. Нет мертвых функций. */
    // VALIDATION  /* Код не содерит синтаксиески неправильных выражений, то что не исчерпывается */ 
})(ECheckStage || (ECheckStage = {}));
var EVarUsedMode;
(function (EVarUsedMode) {
    EVarUsedMode[EVarUsedMode["k_Read"] = 0] = "k_Read";
    EVarUsedMode[EVarUsedMode["k_Write"] = 1] = "k_Write";
    EVarUsedMode[EVarUsedMode["k_ReadWrite"] = 2] = "k_ReadWrite";
    EVarUsedMode[EVarUsedMode["k_Undefined"] = 3] = "k_Undefined";
    EVarUsedMode[EVarUsedMode["k_Default"] = 2] = "k_Default";
})(EVarUsedMode || (EVarUsedMode = {}));
var EExtractExprType;
(function (EExtractExprType) {
    EExtractExprType[EExtractExprType["k_Header"] = 0] = "k_Header";
    EExtractExprType[EExtractExprType["k_Float"] = 1] = "k_Float";
    EExtractExprType[EExtractExprType["k_Int"] = 2] = "k_Int";
    EExtractExprType[EExtractExprType["k_Bool"] = 3] = "k_Bool";
    EExtractExprType[EExtractExprType["k_Float2"] = 4] = "k_Float2";
    EExtractExprType[EExtractExprType["k_Int2"] = 5] = "k_Int2";
    EExtractExprType[EExtractExprType["k_Bool2"] = 6] = "k_Bool2";
    EExtractExprType[EExtractExprType["k_Float3"] = 7] = "k_Float3";
    EExtractExprType[EExtractExprType["k_Int3"] = 8] = "k_Int3";
    EExtractExprType[EExtractExprType["k_Bool3"] = 9] = "k_Bool3";
    EExtractExprType[EExtractExprType["k_Float4"] = 10] = "k_Float4";
    EExtractExprType[EExtractExprType["k_Int4"] = 11] = "k_Int4";
    EExtractExprType[EExtractExprType["k_Bool4"] = 12] = "k_Bool4";
    EExtractExprType[EExtractExprType["k_Float4x4"] = 13] = "k_Float4x4";
})(EExtractExprType || (EExtractExprType = {}));
var EScopeType;
(function (EScopeType) {
    EScopeType[EScopeType["k_System"] = 0] = "k_System";
    EScopeType[EScopeType["k_Global"] = 1] = "k_Global";
    EScopeType[EScopeType["k_Default"] = 2] = "k_Default";
    EScopeType[EScopeType["k_Struct"] = 3] = "k_Struct";
    EScopeType[EScopeType["k_Annotation"] = 4] = "k_Annotation";
})(EScopeType || (EScopeType = {}));
var ETechniqueType;
(function (ETechniqueType) {
    ETechniqueType[ETechniqueType["k_BasicFx"] = 0] = "k_BasicFx";
    ETechniqueType[ETechniqueType["k_PartFx"] = 1] = "k_PartFx";
    ETechniqueType[ETechniqueType["k_Unknown"] = 2] = "k_Unknown";
})(ETechniqueType || (ETechniqueType = {}));


/***/ }),

/***/ "GH4Y":
/*!************************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ConstructorCallInstruction.ts ***!
  \************************************************************************/
/*! exports provided: ConstructorCallInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructorCallInstruction", function() { return ConstructorCallInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Instruction */ "2b0+");





/**
 * Resresnt ctor(arg1,..., argn)
 * EMPTY_OPERATOR IdInstruction ExprInstruction ... ExprInstruction
 */
class ConstructorCallInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_3__["ExprInstruction"] {
    constructor({ ctor, args = null, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_ConstructorCallExpr, type: ctor.subType, ...settings });
        this._args = (args || []).map(arg => _Instruction__WEBPACK_IMPORTED_MODULE_4__["Instruction"].$withParent(arg, this));
        this._ctor = _Instruction__WEBPACK_IMPORTED_MODULE_4__["Instruction"].$withParent(ctor, this);
    }
    get args() {
        return this._args;
    }
    get ctor() {
        return this._ctor;
    }
    toCode() {
        var code = "";
        code += this.ctor.toCode();
        code += "(";
        for (var i = 0; i < this.args.length; i++) {
            code += this.args[i].toCode();
            if (i !== this.args.length - 1) {
                code += ",";
            }
        }
        code += ")";
        return code;
    }
    isConst() {
        for (var i = 0; i < this.args.length; i++) {
            if (!this.args[i].isConst()) {
                return false;
            }
        }
        return true;
    }
    /** @deprecated */
    evaluate() {
        if (!this.isConst()) {
            return false;
        }
        var res = null;
        var jsTypeCtor = _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__["getExternalType"](this.type);
        var args = new Array(this.args.length);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(jsTypeCtor)) {
            return false;
        }
        try {
            if (_lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__["isScalarType"](this.type)) {
                var pTestedInstruction = this.args[0];
                if (this.args.length > 1 || !pTestedInstruction.evaluate()) {
                    return false;
                }
                res = jsTypeCtor(pTestedInstruction.getEvalValue());
            }
            else {
                for (var i = 0; i < this.args.length; i++) {
                    var pTestedInstruction = this.args[i];
                    if (pTestedInstruction.evaluate()) {
                        args[i - 1] = pTestedInstruction.getEvalValue();
                    }
                    else {
                        return false;
                    }
                }
                res = new jsTypeCtor;
                res.set.apply(res, args);
            }
        }
        catch (e) {
            return false;
        }
        this._evalResult = res;
        return true;
    }
}


/***/ }),

/***/ "GIxw":
/*!********************************!*\
  !*** ./src/lib/parser/Item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/parser/IParser */ "LhMq");
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbols */ "YPfw");


class Item {
    constructor(rule, pos, expectedSymbols) {
        this.rule = rule;
        this.pos = pos;
        this.index = 0;
        this.expectedSymbols = new Set();
        if (expectedSymbols) {
            expectedSymbols.forEach(symbol => this.addExpected(symbol));
        }
    }
    isEqual(item, type = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["EParserType"].k_LR0) {
        if (type === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["EParserType"].k_LR0) {
            return (this.rule === item.rule && this.pos === item.pos);
        }
        if (type === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["EParserType"].k_LR1) {
            if (!(this.rule === item.rule && this.pos === item.pos && this.expectedSymbols.size === item.expectedSymbols.size)) {
                return false;
            }
            for (const symbol of this.expectedSymbols) {
                if (!item.isExpected(symbol)) {
                    return false;
                }
            }
            return true;
        }
        //We never must be here, for LALR(1) we work with LR0 items. This 'else'-stmt only for closure-compliler.
        return false;
    }
    isParentItem(item) {
        return (this.rule === item.rule && this.pos === item.pos + 1);
    }
    isChildItem(item) {
        return (this.rule === item.rule && this.pos === item.pos - 1);
    }
    symbolName() {
        const right = this.rule.right;
        if (this.pos === right.length) {
            return _symbols__WEBPACK_IMPORTED_MODULE_1__["END_POSITION"];
        }
        return right[this.pos];
    }
    // lastSymbolName(): string {
    //     return this.rule.right[this.rule.right.length - 1] || T_EMPTY;
    // }
    // // get next symbol name
    // nextSymbolName(): string {
    //     return this.rule.right[this.pos + 1] || END_POSITION;
    // }
    isExpected(symbol) {
        return this.expectedSymbols.has(symbol);
    }
    addExpected(symbol) {
        if (this.isExpected(symbol)) {
            return false;
        }
        this.expectedSymbols.add(symbol);
        return true;
    }
    toString(grammarSymbols = null) {
        const { left, right } = this.rule;
        let msg = `${left} -> `;
        msg += right
            .map(s => Item.decodeSymbol(s, grammarSymbols))
            .map((s, k) => (k === this.pos ? `. ${s}` : `${s}`))
            .join(' ');
        if (this.pos === right.length) {
            msg += " . ";
        }
        if (this.expectedSymbols) {
            const expectedTokens = Array.from(this.expectedSymbols).map(k => Item.decodeSymbol(k, grammarSymbols));
            if (expectedTokens.length) {
                msg += ", " + expectedTokens.join(' ');
            }
        }
        return msg;
    }
    static decodeSymbol(s, grammarSymbols) {
        return (grammarSymbols ? ((grammarSymbols.get(s) && s !== grammarSymbols.get(s)) ? `'${grammarSymbols.get(s)}'` : s) : s);
    }
}


/***/ }),

/***/ "I537":
/*!******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/UnaryExprInstruction.ts ***!
  \******************************************************************/
/*! exports provided: UnaryExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnaryExprInstruction", function() { return UnaryExprInstruction; });
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");
/* harmony import */ var _VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VariableTypeInstruction */ "hljw");





/**
 * Represent + - ! ++ -- expr
 * (+|-|!|++|--|) Instruction
 */
class UnaryExprInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_2__["ExprInstruction"] {
    constructor({ expr, operator, ...settings }) {
        super({
            instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_UnaryExpr,
            // NOTE: type wraping is no really necessary, just for debug purposes
            type: operator === '!'
                ? _VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_4__["VariableTypeInstruction"].wrapAsConst(_lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_0__["T_BOOL"], _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_0__["SCOPE"])
                : expr.type,
            ...settings
        });
        this._expr = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(expr, this);
        this._operator = operator;
    }
    get operator() {
        return this._operator;
    }
    get expr() {
        return this._expr;
    }
    toCode() {
        var sCode = '';
        sCode += this.operator;
        sCode += this.expr.toCode();
        return sCode;
    }
    isConst() {
        return this.expr.isConst();
    }
    evaluate() {
        var op = this.operator;
        var expr = this.expr;
        if (!expr.evaluate()) {
            return false;
        }
        var res = null;
        try {
            res = expr.getEvalValue();
            switch (op) {
                case '+':
                    res = +res;
                    break;
                case '-':
                    res = -res;
                    break;
                case '!':
                    res = !res;
                    break;
                case '++':
                    res = ++res;
                    break;
                case '--':
                    res = --res;
                    break;
            }
        }
        catch (e) {
            return false;
        }
        this._evalResult = res;
        return true;
    }
}


/***/ }),

/***/ "I7B0":
/*!************************************************************!*\
  !*** ./src/lib/language-service/services/signatureHelp.ts ***!
  \************************************************************/
/*! exports provided: SLSignatureHelp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLSignatureHelp", function() { return SLSignatureHelp; });
/* harmony import */ var _lib_fx_Visitors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/Visitors */ "DTTp");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _lib_parser_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/parser/util */ "wYUO");
/* harmony import */ var vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vscode-languageserver-types */ "kmEW");




const asRange = (instr) => instr.sourceNode.loc;
class SLSignatureHelp {
    doSignatureHelp(textDocument, position, slDocument) {
        if (!slDocument) {
            return null;
        }
        const offset = textDocument.offsetAt(position);
        const decl = slDocument.root.instructions.find(instr => Object(_lib_parser_util__WEBPACK_IMPORTED_MODULE_2__["checkRange"])(asRange(instr), offset));
        if (decl) {
            // console.log(decl);
            if (decl.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_FunctionDecl) {
                let fcall = null;
                _lib_fx_Visitors__WEBPACK_IMPORTED_MODULE_0__["Visitor"].each(decl, instr => {
                    if (instr.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_FunctionCallExpr) {
                        if (Object(_lib_parser_util__WEBPACK_IMPORTED_MODULE_2__["checkRange"])(asRange(instr), offset)) {
                            fcall = instr;
                        }
                    }
                });
                if (!fcall) {
                    return null;
                }
                const fdecl = fcall.decl;
                const fnList = fdecl.scope.functions[fdecl.name];
                const signatures = fnList.map(fn => vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_3__["SignatureInformation"].create(fn.def.toCode(), null, // no documentation provided
                ...fn.def.params.map(param => vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_3__["ParameterInformation"].create(param.name))));
                let activeSignature = fnList.indexOf(fdecl);
                let activeParameter = 0;
                if (activeSignature !== -1) {
                    activeParameter = fcall.args.findIndex(arg => Object(_lib_parser_util__WEBPACK_IMPORTED_MODULE_2__["checkRange"])(asRange(arg), offset));
                }
                else {
                    activeSignature = 0;
                    console.error(`could not find active signature for: '${fdecl.def.toCode()}'`);
                }
                return { signatures, activeParameter, activeSignature };
            }
        }
        return null;
    }
}


/***/ }),

/***/ "IHXS":
/*!*********************************************!*\
  !*** ./src/lib/fx/analisys/ProgramScope.ts ***!
  \*********************************************/
/*! exports provided: Scope, ProgramScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramScope", function() { return ProgramScope; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "u2cq");



class Scope {
    constructor({ type = _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EScopeType"].k_Default, parent = null, strictMode = false }) {
        this.type = type;
        this.parent = parent;
        this.strictMode = strictMode;
        this.variables = {};
        this.types = {};
        this.functions = {};
        this.techniques = {};
        this.typeTemplates = {};
    }
    isStrict() {
        return this.filter(scope => scope.strictMode);
    }
    findVariable(varName) {
        return this.filter(scope => scope.variables[varName] || null);
    }
    findTypeTemplate(typeName) {
        return this.filter(scope => scope.typeTemplates[typeName] || null);
    }
    findType(typeName) {
        return this.filter(scope => scope.types[typeName] || null);
    }
    /**
     * Find function by name and list of types.
     * returns:
     *   'null' if there is no requested function;
     *   'undefined' if there more then one function;
     *    function if all is ok;
     */
    // FIXME: refuse from the regular expressions in favor of a full typecasting graph
    findFunction(funcName, args = null) {
        return this.filter(scope => _helpers__WEBPACK_IMPORTED_MODULE_2__["fn"].matchList(scope.functions[funcName], args));
    }
    findTechnique(techName) {
        return this.filter(scope => scope.techniques[techName] || null);
    }
    findFunctionInScope(func) {
        let res = _helpers__WEBPACK_IMPORTED_MODULE_2__["fn"].matchList(this.functions[func.name], func.def.params.map(param => param ? param.type : null));
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(res !== undefined);
        return res;
    }
    addVariable(variable) {
        let variableMap = this.variables;
        let varName = variable.name;
        if (!this.variables[varName]) {
            variableMap[varName] = variable;
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(variable.scope === this);
        }
        else {
            // console.error(`letiable '${varName}' already exists in scope:`, this);
            return false;
        }
        return true;
    }
    addTypeTemplate(template) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDefAndNotNull"])(this.typeTemplates[template.name])) {
            return false;
        }
        this.typeTemplates[template.name] = template;
        return true;
    }
    // todo: remove scopeId from argumts, use type.scope instead.
    addType(type) {
        if (this.types[type.name]) {
            return false;
        }
        this.types[type.name] = type;
        console.assert(type.scope === this);
        return true;
    }
    addFunction(func) {
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(this.type <= _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EScopeType"].k_Global);
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(func.scope === this);
        let funcMap = this.functions;
        let funcName = func.name;
        funcMap[funcName] = funcMap[funcName] || [];
        const funcOverloads = funcMap[funcName];
        let targetFunc = this.findFunctionInScope(func);
        if (!targetFunc) {
            funcOverloads.push(func);
        }
        else {
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(func.impl));
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(targetFunc.impl));
            let i = funcOverloads.indexOf(targetFunc);
            funcOverloads[i] = func;
        }
        return true;
    }
    addTechnique(technique) {
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(this.type <= _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EScopeType"].k_Global);
        if (this.techniques[technique.name]) {
            return false;
        }
        this.techniques[technique.name] = technique;
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(technique.scope === this);
        return false;
    }
    filter(cb) {
        let scope = this;
        while (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(scope)) {
            let res = cb(scope);
            if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(res)) {
                return res;
            }
            scope = scope.parent;
        }
        return null;
    }
}
class ProgramScope {
    constructor(parent) {
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(parent !== null);
        let type = _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EScopeType"].k_Global;
        this.globalScope = new Scope({ parent, type });
        this.currentScope = this.globalScope;
    }
    validate() {
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(this.currentScope === this.globalScope);
    }
    push(type = _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EScopeType"].k_Default) {
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(this.currentScope !== null);
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(type >= _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EScopeType"].k_Default);
        let parent = this.currentScope;
        let scope = new Scope({ parent, type });
        this.currentScope = scope;
    }
    pop() {
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(this.currentScope !== null);
        this.currentScope = this.currentScope.parent;
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(this.currentScope !== null);
    }
}


/***/ }),

/***/ "KjJp":
/*!*******************************************!*\
  !*** ./src/lib/fx/analisys/FxAnalyzer.ts ***!
  \*******************************************/
/*! exports provided: FxAnalyzer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FxAnalyzer", function() { return FxAnalyzer; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/EAnalyzerErrors */ "zioJ");
/* harmony import */ var _lib_idl_EAnalyzerWarnings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/EAnalyzerWarnings */ "a1Km");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _lib_idl_part_IPartFx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/idl/part/IPartFx */ "DAvO");
/* harmony import */ var _Analyzer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Analyzer */ "NzFo");
/* harmony import */ var _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instructions/IdInstruction */ "C2sc");
/* harmony import */ var _instructions_part_PartFxInstruction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instructions/part/PartFxInstruction */ "4PT3");
/* harmony import */ var _instructions_part_PartFxPassInstruction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./instructions/part/PartFxPassInstruction */ "bUvT");
/* harmony import */ var _instructions_part_SpawnInstruction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instructions/part/SpawnInstruction */ "cuAd");
/* harmony import */ var _SystemScope__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SystemScope */ "Wl5j");












const asType = (instr) => instr ? instr.type : null;
class FxContext extends _Analyzer__WEBPACK_IMPORTED_MODULE_5__["Context"] {
    constructor() {
        super(...arguments);
        this.spawnStmts = [];
    }
    // beginFunc(): void {
    //     super.beginFunc();
    // }
    // endFunc(): void {
    //     super.endFunc();
    // }
    beginPartFxPass() {
        this.beginPass();
        this.particleInstance = null;
    }
    endPartFxPass() {
        this.particleInstance = null;
        this.endPass();
    }
    beginPartFx() {
        this.particleCore = null;
    }
    endPartFx() {
        this.particleCore = null;
    }
}
function sliceNode(source, from, to) {
    const { children, parent, name, value, loc } = source;
    return {
        children: children.slice(from, to),
        parent,
        name,
        value,
        loc
    };
}
class FxAnalyzer extends _Analyzer__WEBPACK_IMPORTED_MODULE_5__["Analyzer"] {
    /**
     * AST example:
     *    SimpleStmt
     *         T_PUNCTUATOR_59 = ';'
     *         T_PUNCTUATOR_41 = ')'
     *         T_PUNCTUATOR_40 = '('
     *         T_NON_TYPE_ID = 'Init'
     *         T_PUNCTUATOR_41 = ')'
     *         T_UINT = '10'
     *         T_PUNCTUATOR_40 = '('
     *         T_KW_SPAWN = 'spawn'
     */
    analyzeSpawnStmt(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const count = Number(children.slice(-3, -2)[0].value);
        const name = children.slice(-5, -4)[0].value;
        const args = [];
        for (let i = children.length - 7; i >= 2; i--) {
            if (children[i].value !== ',') {
                const arg = this.analyzeExpr(context, program, children[i]);
                args.push(arg);
            }
        }
        const spawnStmt = new _instructions_part_SpawnInstruction__WEBPACK_IMPORTED_MODULE_9__["SpawnInstruction"]({ sourceNode, scope, name, args, count });
        context.spawnStmts.push(spawnStmt);
        return spawnStmt;
    }
    analyzeSimpleStmt(context, program, sourceNode) {
        const children = sourceNode.children;
        const firstNodeName = children[children.length - 1].name;
        switch (firstNodeName) {
            case 'T_KW_SPAWN':
                return this.analyzeSpawnStmt(context, program, sourceNode);
            default:
                return super.analyzeSimpleStmt(context, program, sourceNode);
        }
    }
    /**
     * AST example:
     *    PassState
     *         T_PUNCTUATOR_59 = ';'
     *       + PassStateExpr
     *         T_PUNCTUATOR_61 = '='
     *         T_NON_TYPE_ID = 'SpawnRoutine'
     */
    analyzePartFXProperty(context, program, sourceNode) {
        const children = sourceNode.children;
        console.log(sourceNode);
    }
    /**
     * AST example:
     *    PassDecl
     *       + PassStateBlock
     *         T_NON_TYPE_ID = 'P0'
     *         T_KW_PASS = 'pass'
     */
    analyzePartFXPassDecl(context, program, sourceNode) {
        context.beginPartFxPass();
        const children = sourceNode.children;
        const scope = program.currentScope;
        const entry = this.analyzePassStateBlockForShaders(context, program, children[0]);
        const renderStates = this.analyzePassStateBlock(context, program, children[0]);
        // temp solution in order to not highlight useless pass states in the next analysis call.
        context.renderStates = renderStates;
        const fxStates = this.analyzePartFxStateBlock(context, program, children[0]);
        const sorting = Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isBoolean"])(fxStates.sorting) ? fxStates.sorting : true;
        const prerenderRoutine = fxStates.prerenderRoutine || null;
        const geometry = fxStates.geometry || _lib_idl_part_IPartFx__WEBPACK_IMPORTED_MODULE_4__["EPartFxPassGeometry"].k_Billboard;
        const instanceCount = fxStates.instanceCount || 1;
        //
        // Validation of the shader input
        //
        let pixelShader = entry.pixel;
        /**
         * Vertex shader validation pattern:
         *  PixelInputType VertexShader(PartInstance partInstance, Geometry geometry);
         */
        let vertexShader = entry.vertex;
        if (vertexShader) {
            const requiredSemantics = ['POSITION', 'POSITION0'];
            let hasInstance = false;
            let hasRequiredSemantics = false;
            for (const param of vertexShader.def.params) {
                hasInstance = hasInstance ||
                    param.type.subType === context.particleInstance;
                hasRequiredSemantics = hasRequiredSemantics ||
                    !!requiredSemantics.find(semantic => param.type.hasFieldWithSematics(semantic));
            }
            if (!hasInstance) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].PartFx_VertexShaderParametersMismatch, { tooltip: 'vertex shader must have a valid material param which is compatible with prerender routine.' });
                vertexShader = pixelShader = null;
            }
            // if (!hasRequiredSemantics) {
            //     context.error(sourceNode, EErrors.PartFx_VertexShaderParametersMismatch,
            //         { tooltip: 'doesn\'t have requiredsemantics.' });
            //     vertexShader = pixelShader = null;
            // }
        }
        let id = null;
        for (let i = 0; i < children.length; ++i) {
            if (children[i].name === "T_NON_TYPE_ID") {
                let name = children[i].value;
                id = new _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_6__["IdInstruction"]({ sourceNode: children[i], scope, name });
            }
        }
        const pass = new _instructions_part_PartFxPassInstruction__WEBPACK_IMPORTED_MODULE_8__["PartFxPassInstruction"]({
            scope,
            sourceNode,
            id,
            sorting,
            geometry,
            instanceCount,
            prerenderRoutine,
            renderStates,
            pixelShader,
            vertexShader
        });
        //TODO: add annotation and id
        context.endPartFxPass();
        return pass;
    }
    // TODO: use explicit return type
    analyzePartFxStateBlock(context, program, sourceNode) {
        const children = sourceNode.children;
        let states = {};
        for (let i = children.length - 2; i >= 1; i--) {
            states = { ...states, ...this.analyzePartFXPassProperies(context, program, children[i]) };
        }
        return states;
    }
    /**
    * AST example:
    *    PassState
    *         T_PUNCTUATOR_59 = ';'
    *       + PassStateExpr
    *         T_PUNCTUATOR_61 = '='
    *         T_NON_TYPE_ID = 'STATE_ONE'
    */
    /**
     * AST example:
     *    PassState
     *         T_PUNCTUATOR_59 = ';'
     *       + PassStateExpr
     *         T_PUNCTUATOR_61 = '='
     *         T_NON_TYPE_ID = 'STATE_TWO'
     */
    /**
     * AST example:
     *    PassStateExpr
     *         T_PUNCTUATOR_125 = '}'
     *         T_UINT = '1'
     *         T_PUNCTUATOR_44 = ','
     *         T_KW_TRUE = 'true'
     *         T_PUNCTUATOR_123 = '{'
     */
    // TODO: add explicit type for fx statess
    analyzePartFXPassProperies(context, program, sourceNode) {
        const children = sourceNode.children;
        const stateName = children[children.length - 1].value.toUpperCase();
        const stateExprNode = children[children.length - 3];
        const exprNode = stateExprNode.children[stateExprNode.children.length - 1];
        let fxStates = {};
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(exprNode.value) || Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(stateName)) {
            console.warn('Pass state is incorrect.'); // TODO: move to warnings
            // TODO: return correct state list
            return fxStates;
        }
        /**
         * AST example:
         *    PassStateExpr
         *         T_PUNCTUATOR_125 = '}'
         *         T_UINT = '1'
         *         T_PUNCTUATOR_44 = ','
         *         T_KW_TRUE = 'true'
         *         T_PUNCTUATOR_123 = '{'
         */
        if (exprNode.value === '{' && stateExprNode.children.length > 3) {
            const values = new Array(Math.ceil((stateExprNode.children.length - 2) / 2));
            for (let i = stateExprNode.children.length - 2, j = 0; i >= 1; i -= 2, j++) {
                // TODO: validate values with names
                values[j] = stateExprNode.children[i].value.toUpperCase();
            }
            switch (stateName) {
                // case ERenderStates.BLENDFUNC:
                //     if (values.length !== 2) {
                //         console.warn('Pass state are incorrect.');
                //         return {};
                //     }
                //     renderStates[ERenderStates.SRCBLENDCOLOR] = values[0];
                //     renderStates[ERenderStates.SRCBLENDALPHA] = values[0];
                //     renderStates[ERenderStates.DESTBLENDCOLOR] = values[1];
                //     renderStates[ERenderStates.DESTBLENDALPHA] = values[1];
                //     break;
                default:
                    console.warn('Pass fx state is incorrect.');
                    return fxStates;
            }
        }
        /**
         * AST example:
         *    PassStateExpr
         *         T_NON_TYPE_ID = 'FALSE'
         */
        else {
            let value = null;
            if (exprNode.value === '{') {
                value = stateExprNode.children[1].value.toUpperCase();
            }
            else {
                value = exprNode.value.toUpperCase();
            }
            switch (stateName) {
                case ('InstanceCount'.toUpperCase()):
                    fxStates.instanceCount = Number(value) || 1;
                    break;
                case ('Geometry'.toUpperCase()):
                    const types = [
                        'Billboard',
                        'Cylinder',
                        'Box',
                        'Sphere',
                        'Line'
                    ].map(type => type.toUpperCase());
                    fxStates.geometry = Math.max(0, types.indexOf(value));
                    break;
                case ('Sorting'.toUpperCase()):
                    // TODO: use correct validation with diag error output
                    Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(value == 'TRUE' || value == 'FALSE');
                    fxStates.sorting = (value === 'TRUE');
                    break;
                case ('PrerenderRoutine'.toUpperCase()):
                    {
                        /**
                        * Prerender routine expected as 'void prerender(Part part, out DefaultShaderInput input)'.
                        */
                        let validators = [
                            /* prerender(Part part, PartInstance instance) */
                            { ret: _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_VOID"], args: [context.particleCore, null] },
                            /* prerender(Part part, PartInstance instance, int instanceId) */
                            { ret: _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_VOID"], args: [context.particleCore, null, _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_INT"]] },
                        ];
                        //
                        // TODO: add string-based validators like this:
                        // void prerender(Part part, PartInstance instance, int instanceId?: INSTANCE_ID);
                        //
                        let prerenderRoutine = this.analyzeCompileExpr(context, program, exprNode, validators);
                        if (!prerenderRoutine) {
                            break;
                        }
                        //
                        // check arguments
                        //
                        let fn = prerenderRoutine.function;
                        /** first argument's type */
                        let argv = fn.def.params.map(param => param.type);
                        if (argv.length < 2) {
                            context.error(exprNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileFunctionNotValid, { funcName: fn.name, tooltip: `'PrerenderRoutine' arguments' count mismatch.` });
                            prerenderRoutine = null;
                        }
                        if (!argv[0].readable || /*!argv[0].isEqual(context.particle)*/ argv[0].subType !== context.particleCore ||
                            argv[0].isNotBaseArray() ||
                            !argv[1].hasUsage('out') || !argv[1].writable || argv[1].isNotBaseArray()) {
                            context.error(exprNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileFunctionNotValid, { funcName: fn.name, tooltip: `'PrerenderRoutine' arguments' type mismatch.` });
                            prerenderRoutine = null;
                        }
                        //         argv[1]: "out PartInstance"
                        // argv[1].subType: "PartInstance"
                        context.particleInstance = argv[1].subType;
                        fxStates.prerenderRoutine = prerenderRoutine;
                    }
                    break;
                default:
            }
        }
        return fxStates;
    }
    analyzePartFXBody(context, program, sourceNode) {
        let passList = [];
        let spawnRoutine = null;
        let initRoutine = null;
        let updateRoutine = null;
        let particle = null;
        let capacity = null;
        const children = sourceNode.children;
        for (let i = children.length - 2; i > 0; i--) {
            switch (children[i].name) {
                case 'PassState':
                    {
                        let sourceNode = children[i];
                        let stateName = sourceNode.children[3].value; // "T_NON_TYPE_ID"
                        switch (stateName.toUpperCase()) {
                            case ('Capacity'.toUpperCase()):
                                {
                                    // TODO: make correct validation of the capacity value and emit errors
                                    //       through diagnostics system. 
                                    const snum = sourceNode.children[1].children[0].value;
                                    Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(Number(snum)));
                                    capacity = Number(snum) || -1;
                                    break;
                                }
                            case ('SpawnRoutine'.toUpperCase()):
                                {
                                    /**
                                     * Spawn routine expected as 'int spawn(void)'.
                                     */
                                    let validator = { ret: _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_INT"], args: [] };
                                    let objectExrNode = sourceNode.children[1].children[0];
                                    spawnRoutine = this.analyzeCompileExpr(context, program, objectExrNode, [validator]);
                                }
                                break;
                            case ('InitRoutine'.toUpperCase()):
                                {
                                    /** Init routine expected as 'void init(in Part part)'. */
                                    let validators = [
                                        { ret: _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_VOID"], args: [null, _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_INT"]] },
                                        { ret: _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_VOID"], args: [null, _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_UINT"]] },
                                        { ret: _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_VOID"], args: [null] },
                                    ];
                                    // TODO: show error in case of both functions are found
                                    let objectExrNode = sourceNode.children[1].children[0];
                                    initRoutine = this.analyzeCompileExpr(context, program, objectExrNode, validators);
                                    if (!initRoutine) {
                                        break;
                                    }
                                    //
                                    // check arguments
                                    //
                                    let fn = initRoutine.function;
                                    /** first argument's type */
                                    let type = fn.def.params[0].type;
                                    if ((!type.hasUsage('out') && !type.hasUsage('inout')) || type.isNotBaseArray()) {
                                        context.error(objectExrNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileFunctionNotValid, { funcName: fn.name, tooltip: `'InitRoutine' arguments' type mismatch.` });
                                        initRoutine = null;
                                    }
                                    if (particle && type.subType !== particle) {
                                        context.error(objectExrNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileFunctionNotValid, { funcName: fn.name, tooltip: `'InitRoutine' arguments' type mismatch.` });
                                        updateRoutine = null;
                                    }
                                    // type is referencing to VariableType of argument,
                                    // while substitute type referencing to declaration. 
                                    particle = type.subType;
                                }
                                break;
                            case ('UpdateRoutine'.toUpperCase()):
                                {
                                    /**
                                     * Update routine expected as 'void update(inout Part part)'.
                                     */
                                    let validators = [
                                        { ret: _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_BOOL"], args: [null, _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_INT"]] },
                                        { ret: _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_BOOL"], args: [null] },
                                    ];
                                    let objectExrNode = sourceNode.children[1].children[0];
                                    updateRoutine = this.analyzeCompileExpr(context, program, objectExrNode, validators);
                                    if (!updateRoutine) {
                                        break;
                                    }
                                    //
                                    // check arguments
                                    //
                                    const fn = updateRoutine.function;
                                    const fdef = fn.def;
                                    const paramList = fdef.params;
                                    if (paramList.length < 1 || paramList.length > 2) {
                                        context.error(objectExrNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileFunctionNotValid, { funcName: fn.name, tooltip: `'UpdateRoutine' arguments' type mismatch.` });
                                        updateRoutine = null;
                                    }
                                    /** first argument's type */
                                    let type = paramList[0].type;
                                    if (!type.hasUsage('out') && !type.hasUsage('inout') || type.isNotBaseArray()) {
                                        context.error(objectExrNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileFunctionNotValid, { funcName: fn.name, tooltip: `'UpdateRoutine' arguments' type mismatch.` });
                                        updateRoutine = null;
                                    }
                                    if (particle && type.subType !== particle) {
                                        context.error(objectExrNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileFunctionNotValid, { funcName: fn.name, tooltip: `'UpdateRoutine' arguments' type mismatch.` });
                                        updateRoutine = null;
                                    }
                                    //
                                    // Check return type
                                    //
                                    if (!fdef.returnType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_BOOL"])) {
                                        context.error(objectExrNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileFunctionNotValid, { funcName: fn.name, tooltip: `'UpdateRoutine' return type mismatch. 'boolean' is expected.` });
                                        updateRoutine = null;
                                    }
                                    if (!updateRoutine) {
                                        break;
                                    }
                                    // type is referencing to VariableType of argument,
                                    // while substitute type referencing to declaration. 
                                    particle = type.subType;
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        // Note: all fx properties should be parsed prior to pass declaraion analysis
        // because some of them are critical for pass validation
        context.particleCore = particle;
        for (let i = children.length - 2; i > 0; i--) {
            switch (children[i].name) {
                case 'PassDecl':
                    {
                        let pass = this.analyzePartFXPassDecl(context, program, children[i]);
                        if (!pass.isValid()) {
                            context.warn((pass.id && pass.id.sourceNode) || children[i], _lib_idl_EAnalyzerWarnings__WEBPACK_IMPORTED_MODULE_2__["EAnalyzerWarnings"].IncompletePass, {
                                techniqueName: pass.name,
                                tooltip: `The pass is not completed. Not all required parameters are specified.`
                            });
                        }
                        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(pass));
                        passList.push(pass);
                    }
                    break;
            }
        }
        return { passList, spawnRoutine, initRoutine, updateRoutine, particle, capacity };
    }
    /**
     * AST example:
     *    PartFxDecl
     *       + PartFxBody
     *       + Annotation
     *       + Semantic
     *       + ComplexNameOpt
     *         T_KW_FXPART = 'partFx'
     */
    analyzePartFXDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const name = this.analyzeComplexName(children[children.length - 2]);
        // Specifies whether name should be interpreted as globalNamespace.name or just a name;
        const isComplexName = children[children.length - 2].children.length !== 1;
        const scope = program.currentScope;
        let annotation = null;
        let semantic = null;
        let props = null;
        context.beginPartFx();
        for (let i = children.length - 3; i >= 0; i--) {
            switch (children[i].name) {
                case 'Annotation':
                    annotation = this.analyzeAnnotation(children[i]);
                    break;
                case 'Semantic':
                    semantic = this.analyzeSemantic(children[i]);
                    break;
                case 'PartFxBody':
                    props = this.analyzePartFXBody(context, program, children[i]);
                    break;
            }
        }
        context.endPartFx();
        const partFx = new _instructions_part_PartFxInstruction__WEBPACK_IMPORTED_MODULE_7__["PartFxInstruction"]({
            sourceNode, name, semantic, annotation, scope, ...props
        });
        if (!partFx.isValid()) {
            // highlight name only
            context.warn(children[children.length - 2], _lib_idl_EAnalyzerWarnings__WEBPACK_IMPORTED_MODULE_2__["EAnalyzerWarnings"].IncompleteTechnique, {
                techniqueName: partFx.name,
                tooltip: `The technique is not completed. Not all required parameters are specified.`
            });
        }
        FxAnalyzer.addTechnique(context, program, partFx);
        return partFx;
    }
    analyzeUnknDecl(context, program, sourceNode) {
        switch (sourceNode.name) {
            case 'PartFxDecl':
                return [this.analyzePartFXDecl(context, program, sourceNode)];
            default:
                return super.analyzeUnknDecl(context, program, sourceNode);
        }
    }
    createContext(uri) {
        return new FxContext(uri);
    }
    validate(context, program, root) {
        super.validate(context, program, root);
        const scope = program.globalScope;
        // NOTE: all effects are assumed to be valid
        const fxList = root.instructions.filter(instr => instr.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_PartFxDecl);
        //
        // spawn operator validation
        //
        for (const spawnStmt of context.spawnStmts) {
            const bImportedEffect = false;
            //parse as the spawn from the same effect
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(!bImportedEffect, 'unsupported');
            if (!bImportedEffect) {
                let initializer = null;
                for (const fx of fxList) {
                    // looking for Init(out Part part, int partId: PART_ID, ...parameters)
                    let args = [fx.particle, _SystemScope__WEBPACK_IMPORTED_MODULE_10__["T_INT"], ...spawnStmt.args.map(asType)];
                    initializer = scope.findFunction(spawnStmt.name, args);
                    // in case of signature not found:
                    // looking for signature like: Init(out Part part, ...parameters)
                    if (!initializer) {
                        // looaking for signature like: Init(out Part part, ...parameters)
                        // TODO: check that second parameter doesn't have PART_ID semantic in 
                        //       order to not find false positive signature
                        args = [fx.particle, ...spawnStmt.args.map(asType)];
                        initializer = scope.findFunction(spawnStmt.name, args);
                    }
                    if (initializer) {
                        spawnStmt.$resolve(fx, initializer);
                        break;
                    }
                }
                if (!initializer) {
                    context.error(spawnStmt.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].PartFx_InvalidSpawnStmtInitializerNotFound, { tooltip: 'Invalid spawn statement. Effect initializer not found.' });
                }
            }
        }
    }
}


/***/ }),

/***/ "LZQc":
/*!***********************************!*\
  !*** ./src/lib/util/StringRef.ts ***!
  \***********************************/
/*! exports provided: StringRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringRef", function() { return StringRef; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");

// helper class to always pass strings by pointer and not by value;
class StringRef {
    constructor(content) {
        this.content = content;
    }
    valueOf() {
        return this.content;
    }
    toString() {
        return this.content;
    }
    toSource() {
        return this.content;
    }
    static make(val) {
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isString"])(val)) {
            return val;
        }
        return new StringRef(`${val}`);
    }
}


/***/ }),

/***/ "LhMq":
/*!***************************************!*\
  !*** ./src/lib/idl/parser/IParser.ts ***!
  \***************************************/
/*! exports provided: ENodeCreateMode, EParserCode, EParserType, IASTDocumentFlags, EParserFlags, ETokenType, EOperationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENodeCreateMode", function() { return ENodeCreateMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EParserCode", function() { return EParserCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EParserType", function() { return EParserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IASTDocumentFlags", function() { return IASTDocumentFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EParserFlags", function() { return EParserFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETokenType", function() { return ETokenType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOperationType", function() { return EOperationType; });
var ENodeCreateMode;
(function (ENodeCreateMode) {
    ENodeCreateMode[ENodeCreateMode["k_Default"] = 0] = "k_Default";
    ENodeCreateMode[ENodeCreateMode["k_Necessary"] = 1] = "k_Necessary";
    ENodeCreateMode[ENodeCreateMode["k_Expose"] = 2] = "k_Expose";
    ENodeCreateMode[ENodeCreateMode["k_Skip"] = 3] = "k_Skip";
})(ENodeCreateMode || (ENodeCreateMode = {}));
var EParserCode;
(function (EParserCode) {
    // k_Pause,
    EParserCode[EParserCode["k_Ok"] = 0] = "k_Ok";
    EParserCode[EParserCode["k_Error"] = 1] = "k_Error";
})(EParserCode || (EParserCode = {}));
var EParserType;
(function (EParserType) {
    EParserType[EParserType["k_LR0"] = 0] = "k_LR0";
    EParserType[EParserType["k_LR1"] = 1] = "k_LR1";
    EParserType[EParserType["k_LALR"] = 2] = "k_LALR";
})(EParserType || (EParserType = {}));
var IASTDocumentFlags;
(function (IASTDocumentFlags) {
    IASTDocumentFlags[IASTDocumentFlags["k_Optimize"] = 8] = "k_Optimize";
    IASTDocumentFlags[IASTDocumentFlags["k_DeveloperMode"] = 16] = "k_DeveloperMode";
})(IASTDocumentFlags || (IASTDocumentFlags = {}));
var EParserFlags;
(function (EParserFlags) {
    EParserFlags[EParserFlags["k_ForceAppendAll"] = 1] = "k_ForceAppendAll";
    EParserFlags[EParserFlags["k_AllowExposeMode"] = 2] = "k_AllowExposeMode";
    EParserFlags[EParserFlags["k_AllowAddMode"] = 4] = "k_AllowAddMode";
    EParserFlags[EParserFlags["k_AllowSkipMode"] = 8] = "k_AllowSkipMode";
    EParserFlags[EParserFlags["k_Default"] = 14] = "k_Default";
    EParserFlags[EParserFlags["k_Debug"] = 16] = "k_Debug";
})(EParserFlags || (EParserFlags = {}));
var ETokenType;
(function (ETokenType) {
    ETokenType[ETokenType["k_NumericLiteral"] = 1] = "k_NumericLiteral";
    ETokenType[ETokenType["k_SinglelineCommentLiteral"] = 2] = "k_SinglelineCommentLiteral";
    ETokenType[ETokenType["k_MultilineCommentLiteral"] = 3] = "k_MultilineCommentLiteral";
    ETokenType[ETokenType["k_StringLiteral"] = 4] = "k_StringLiteral";
    ETokenType[ETokenType["k_PunctuatorLiteral"] = 5] = "k_PunctuatorLiteral";
    ETokenType[ETokenType["k_WhitespaceLiteral"] = 6] = "k_WhitespaceLiteral";
    ETokenType[ETokenType["k_NewlineLiteral"] = 7] = "k_NewlineLiteral";
    ETokenType[ETokenType["k_IdentifierLiteral"] = 8] = "k_IdentifierLiteral";
    ETokenType[ETokenType["k_KeywordLiteral"] = 9] = "k_KeywordLiteral";
    ETokenType[ETokenType["k_Unknown"] = 10] = "k_Unknown";
    ETokenType[ETokenType["k_End"] = 11] = "k_End";
})(ETokenType || (ETokenType = {}));
var EOperationType;
(function (EOperationType) {
    EOperationType[EOperationType["k_Error"] = 100] = "k_Error";
    EOperationType[EOperationType["k_Shift"] = 101] = "k_Shift";
    EOperationType[EOperationType["k_Reduce"] = 102] = "k_Reduce";
    EOperationType[EOperationType["k_Success"] = 103] = "k_Success";
    EOperationType[EOperationType["k_Ok"] = 104] = "k_Ok";
})(EOperationType || (EOperationType = {}));


/***/ }),

/***/ "M2fT":
/*!*******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ReturnStmtInstruction.ts ***!
  \*******************************************************************/
/*! exports provided: ReturnStmtInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnStmtInstruction", function() { return ReturnStmtInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");
/* harmony import */ var _StmtInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StmtInstruction */ "oseZ");



/**
 * Represent return expr;
 * return ExprInstruction
 */
class ReturnStmtInstruction extends _StmtInstruction__WEBPACK_IMPORTED_MODULE_2__["StmtInstruction"] {
    constructor({ expr = null, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ReturnStmt, ...settings });
        this._operator = "return";
        this._expr = _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(expr, this);
    }
    get operator() {
        return this._operator;
    }
    get expr() {
        return this._expr;
    }
    toCode() {
        if (this.expr) {
            return "return " + this.expr.toCode() + ";";
        }
        else {
            return "return;";
        }
    }
}


/***/ }),

/***/ "MJEd":
/*!*********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/VariableDeclInstruction.ts ***!
  \*********************************************************************/
/*! exports provided: EVariableUsageFlags, VariableDeclInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVariableUsageFlags", function() { return EVariableUsageFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableDeclInstruction", function() { return VariableDeclInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _DeclInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeclInstruction */ "mXWi");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");




/**
 * @deprecated
 */
var EVariableUsageFlags;
(function (EVariableUsageFlags) {
    EVariableUsageFlags[EVariableUsageFlags["k_Local"] = 1] = "k_Local";
    EVariableUsageFlags[EVariableUsageFlags["k_Global"] = 2] = "k_Global";
    EVariableUsageFlags[EVariableUsageFlags["k_Argument"] = 4] = "k_Argument";
})(EVariableUsageFlags || (EVariableUsageFlags = {}));
/**
 * Represent type var_name [= init_expr]
 * EMPTY_OPERATOR VariableTypeInstruction IdInstruction InitExprInstruction
 */
class VariableDeclInstruction extends _DeclInstruction__WEBPACK_IMPORTED_MODULE_2__["DeclInstruction"] {
    constructor({ id, type, init = null, usageFlags = 0, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_VariableDecl, ...settings });
        this._id = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(id, this);
        this._type = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withNoParent(type);
        this._initExpr = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(init, this);
        this._usageFlags = usageFlags;
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(!this.isParameter() || (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.parent) || this.parent.instructionType == _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_FunctionDef));
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(this.isLocal() || !this.isLocal());
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(!this.isParameter() || this.isLocal());
    }
    get initExpr() {
        return this._initExpr;
    }
    /** @deprecated */
    get defaultValue() {
        this._initExpr.evaluate();
        return this._initExpr.getEvalValue();
    }
    get type() {
        return this._type;
    }
    get name() {
        return this._id.name;
    }
    get id() {
        return this._id;
    }
    isGlobal() {
        return !!(this._usageFlags & EVariableUsageFlags.k_Global);
    }
    isLocal() {
        return !!(this._usageFlags & EVariableUsageFlags.k_Local);
    }
    isParameter() {
        return !!(this._usageFlags & EVariableUsageFlags.k_Argument);
    }
    isField() {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.parent)) {
            return false;
        }
        var eParentType = this.parent.instructionType;
        if (eParentType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_VariableType ||
            eParentType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ComplexType ||
            eParentType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_SystemType) {
            return true;
        }
        return false;
    }
    toCode() {
        var code = '';
        code = this.type.toCode();
        code += ' ' + this.id.toCode();
        if (this.type.isNotBaseArray()) {
            var iLength = this.type.length;
            code += '[' + iLength + ']';
        }
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.initExpr) &&
            // !SystemScope.isSamplerType(this.type) && // TODO: is it correct check?
            !this.type.isUniform()) {
            code += '=' + this.initExpr.toCode();
        }
        return code;
    }
}


/***/ }),

/***/ "MT7/":
/*!******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/WhileStmtInstruction.ts ***!
  \******************************************************************/
/*! exports provided: WhileStmtInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhileStmtInstruction", function() { return WhileStmtInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");
/* harmony import */ var _StmtInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StmtInstruction */ "oseZ");



/**
 * Represent while(expr) stmt
 * ( while || do_while) ExprInstruction StmtInstruction
 */
class WhileStmtInstruction extends _StmtInstruction__WEBPACK_IMPORTED_MODULE_2__["StmtInstruction"] {
    constructor({ cond, body, operator, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_WhileStmt, ...settings });
        this._cond = _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(cond, this);
        this._body = _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(body, this);
        this._operator = operator;
    }
    get cond() {
        return this.cond;
    }
    get body() {
        return this._body;
    }
    get operator() {
        return this._operator;
    }
    toCode() {
        var code = '';
        if (this.operator === "while") {
            code += "while(";
            code += this.cond.toCode();
            code += ")";
            code += this.body.toCode();
        }
        else {
            code += "do";
            code += this.body.toCode();
            code += "while(";
            code += this.cond.toCode();
            code += ");";
        }
        return code;
    }
}


/***/ }),

/***/ "Mg1O":
/*!********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ComplexExprInstruction.ts ***!
  \********************************************************************/
/*! exports provided: ComplexExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexExprInstruction", function() { return ComplexExprInstruction; });
/* harmony import */ var _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/instructions/ExprInstruction */ "4AA8");
/* harmony import */ var _lib_fx_analisys_instructions_Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/instructions/Instruction */ "2b0+");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");



/**
 * Represent (expr)
 * EMPTY_OPERATOR ExprInstruction
 */
class ComplexExprInstruction extends _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__["ExprInstruction"] {
    constructor({ expr, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_ComplexExpr, type: expr.type, ...settings });
        this._expr = _lib_fx_analisys_instructions_Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(expr, this);
    }
    get expr() {
        return this._expr;
    }
    toCode() {
        return "(" + this.expr.toCode() + ")";
    }
    isConst() {
        return this.expr.isConst();
    }
    evaluate() {
        if (this.expr.evaluate()) {
            this._evalResult = this.expr.getEvalValue();
            return true;
        }
        else {
            return false;
        }
    }
}


/***/ }),

/***/ "N/7J":
/*!*********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/SamplerStateInstruction.ts ***!
  \*********************************************************************/
/*! exports provided: SamplerStateInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplerStateInstruction", function() { return SamplerStateInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");


class SamplerStateInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"] {
    constructor({ name, value, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_SamplerState, ...settings });
        this._name = name;
        this._value = _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(value, this);
    }
    get name() {
        return this._name;
    }
    get value() {
        return this.value;
    }
    toString() {
        console.error("@not_implemented");
        return null;
    }
    toCode() {
        console.error("@not_implmented");
        return null;
    }
}


/***/ }),

/***/ "NzFo":
/*!*****************************************!*\
  !*** ./src/lib/fx/analisys/Analyzer.ts ***!
  \*****************************************/
/*! exports provided: Context, Analyzer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analyzer", function() { return Analyzer; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/EAnalyzerErrors */ "zioJ");
/* harmony import */ var _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/ERenderStates */ "6dfp");
/* harmony import */ var _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/ERenderStateValues */ "2blz");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/util/Diagnostics */ "/zHR");
/* harmony import */ var _AnalyzerDiagnostics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AnalyzerDiagnostics */ "RTx6");
/* harmony import */ var _Visitors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Visitors */ "DTTp");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "u2cq");
/* harmony import */ var _instructions_ArithmeticExprInstruction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instructions/ArithmeticExprInstruction */ "l4+G");
/* harmony import */ var _instructions_AssignmentExprInstruction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./instructions/AssignmentExprInstruction */ "XQla");
/* harmony import */ var _instructions_AttributeInstruction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./instructions/AttributeInstruction */ "pq1u");
/* harmony import */ var _instructions_BoolInstruction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./instructions/BoolInstruction */ "5EX4");
/* harmony import */ var _instructions_BreakStmtInstruction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./instructions/BreakStmtInstruction */ "7VRG");
/* harmony import */ var _instructions_CastExprInstruction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./instructions/CastExprInstruction */ "2xh7");
/* harmony import */ var _instructions_CompileExprInstruction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./instructions/CompileExprInstruction */ "fjuh");
/* harmony import */ var _instructions_ComplexExprInstruction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./instructions/ComplexExprInstruction */ "Mg1O");
/* harmony import */ var _instructions_ComplexTypeInstruction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./instructions/ComplexTypeInstruction */ "i81d");
/* harmony import */ var _instructions_ConditionalExprInstruction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./instructions/ConditionalExprInstruction */ "bxdW");
/* harmony import */ var _instructions_ConstructorCallInstruction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./instructions/ConstructorCallInstruction */ "GH4Y");
/* harmony import */ var _instructions_DeclStmtInstruction__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./instructions/DeclStmtInstruction */ "Zd6l");
/* harmony import */ var _instructions_ExprStmtInstruction__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./instructions/ExprStmtInstruction */ "huhI");
/* harmony import */ var _instructions_FloatInstruction__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./instructions/FloatInstruction */ "49qt");
/* harmony import */ var _instructions_ForStmtInstruction__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./instructions/ForStmtInstruction */ "Wv+o");
/* harmony import */ var _instructions_FunctionCallInstruction__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./instructions/FunctionCallInstruction */ "4cxW");
/* harmony import */ var _instructions_FunctionDeclInstruction__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./instructions/FunctionDeclInstruction */ "BKBR");
/* harmony import */ var _instructions_FunctionDefInstruction__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./instructions/FunctionDefInstruction */ "hsO8");
/* harmony import */ var _instructions_IdExprInstruction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./instructions/IdExprInstruction */ "5fm/");
/* harmony import */ var _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./instructions/IdInstruction */ "C2sc");
/* harmony import */ var _instructions_IfStmtInstruction__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./instructions/IfStmtInstruction */ "1O8D");
/* harmony import */ var _instructions_InitExprInstruction__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./instructions/InitExprInstruction */ "ggRF");
/* harmony import */ var _instructions_Instruction__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./instructions/Instruction */ "2b0+");
/* harmony import */ var _instructions_InstructionCollector__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./instructions/InstructionCollector */ "iYqf");
/* harmony import */ var _instructions_IntInstruction__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./instructions/IntInstruction */ "QsPN");
/* harmony import */ var _instructions_LogicalExprInstruction__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./instructions/LogicalExprInstruction */ "wEKK");
/* harmony import */ var _instructions_PassInstruction__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./instructions/PassInstruction */ "jfm7");
/* harmony import */ var _instructions_PostfixArithmeticInstruction__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./instructions/PostfixArithmeticInstruction */ "C3oy");
/* harmony import */ var _instructions_PostfixIndexInstruction__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./instructions/PostfixIndexInstruction */ "fuca");
/* harmony import */ var _instructions_PostfixPointInstruction__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./instructions/PostfixPointInstruction */ "sQ1Q");
/* harmony import */ var _instructions_ProvideInstruction__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./instructions/ProvideInstruction */ "9EOq");
/* harmony import */ var _instructions_ProxyTypeInstruction__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./instructions/ProxyTypeInstruction */ "9hKy");
/* harmony import */ var _instructions_RelationalExprInstruction__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./instructions/RelationalExprInstruction */ "wsMd");
/* harmony import */ var _instructions_ReturnStmtInstruction__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./instructions/ReturnStmtInstruction */ "M2fT");
/* harmony import */ var _instructions_SamplerStateBlockInstruction__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./instructions/SamplerStateBlockInstruction */ "PLhK");
/* harmony import */ var _instructions_SamplerStateInstruction__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./instructions/SamplerStateInstruction */ "N/7J");
/* harmony import */ var _instructions_SemicolonStmtInstruction__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./instructions/SemicolonStmtInstruction */ "ip/g");
/* harmony import */ var _instructions_StmtBlockInstruction__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./instructions/StmtBlockInstruction */ "kGK+");
/* harmony import */ var _instructions_StringInstruction__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./instructions/StringInstruction */ "9vj8");
/* harmony import */ var _instructions_TechniqueInstruction__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./instructions/TechniqueInstruction */ "+Z36");
/* harmony import */ var _instructions_TypeDeclInstruction__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./instructions/TypeDeclInstruction */ "onqc");
/* harmony import */ var _instructions_UnaryExprInstruction__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./instructions/UnaryExprInstruction */ "I537");
/* harmony import */ var _instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./instructions/VariableDeclInstruction */ "MJEd");
/* harmony import */ var _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./instructions/VariableTypeInstruction */ "hljw");
/* harmony import */ var _instructions_WhileStmtInstruction__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./instructions/WhileStmtInstruction */ "MT7/");
/* harmony import */ var _ProgramScope__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ProgramScope */ "IHXS");
/* harmony import */ var _SystemScope__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./SystemScope */ "Wl5j");

























































function validate(instr, expectedType) {
    Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(instr.instructionType === expectedType);
}
// TODO: refactor it
function findConstructor(type, args) {
    return new _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"]({ type, scope: null });
}
function _errorFromInstruction(context, sourceNode, pError) {
    context.error(sourceNode, pError.code, Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(pError.info) ? {} : pError.info);
}
function checkInstruction(context, inst, stage) {
    // TODO: rework this api
    if (!inst._check(stage)) {
        _errorFromInstruction(context, inst.sourceNode, inst._getLastError());
        return null;
    }
    return inst;
}
const asType = (instr) => instr ? instr.type : null;
// FIXME: refuse from the regular expressions in favor of a full typecasting graph
const asRelaxedType = (instr) => {
    if (!instr) {
        return null;
    }
    // if (instruction.isLiteral(instr)) {
    if (instr.type.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_INT"]) || instr.type.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_UINT"])) {
        // temp workaround in order to match int to uint and etc. 
        return /^int$|^uint$/g;
    }
    // }
    return instr.type;
};
// TODO: rework 'auto' api
function tryResolveProxyType(type, host) {
    if (type.subType.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_ProxyType) {
        const proxy = type.subType;
        if (!proxy.isResolved()) {
            proxy.resolve(host);
        }
    }
}
function getRenderStateValue(state, value) {
    let eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].UNDEF;
    switch (state) {
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].ALPHABLENDENABLE:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].ALPHATESTENABLE:
            console.warn('ALPHABLENDENABLE/ALPHATESTENABLE not supported in WebGL.');
            return _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].UNDEF;
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDENABLE:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].CULLFACEENABLE:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].ZENABLE:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].ZWRITEENABLE:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DITHERENABLE:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SCISSORTESTENABLE:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].STENCILTESTENABLE:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].POLYGONOFFSETFILLENABLE:
            switch (value) {
                case 'TRUE':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].TRUE;
                    break;
                case 'FALSE':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].FALSE;
                    break;
                default:
                    console.warn('Unsupported render state ALPHABLENDENABLE/ZENABLE/ZWRITEENABLE/DITHERENABLE value used: '
                        + value + '.');
                    return eValue;
            }
            break;
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].CULLFACE:
            switch (value) {
                case 'FRONT':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].FRONT;
                    break;
                case 'BACK':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].BACK;
                    break;
                case 'FRONT_AND_BACK':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].FRONT_AND_BACK;
                    break;
                default:
                    console.warn('Unsupported render state CULLFACE value used: ' + value + '.');
                    return eValue;
            }
            break;
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].FRONTFACE:
            switch (value) {
                case 'CW':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].CW;
                    break;
                case 'CCW':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].CCW;
                    break;
                default:
                    console.warn('Unsupported render state FRONTFACE value used: ' + value + '.');
                    return eValue;
            }
            break;
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLEND:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLEND:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLENDALPHA:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLENDALPHA:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLENDCOLOR:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLENDCOLOR:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDFUNC:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDFUNCSEPARATE:
            switch (value) {
                case 'ZERO':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].ZERO;
                    break;
                case 'ONE':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].ONE;
                    break;
                case 'SRCCOLOR':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].SRCCOLOR;
                    break;
                case 'INVSRCCOLOR':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].INVSRCCOLOR;
                    break;
                case 'SRCALPHA':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].SRCALPHA;
                    break;
                case 'INVSRCALPHA':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].INVSRCALPHA;
                    break;
                case 'DESTALPHA':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].DESTALPHA;
                    break;
                case 'INVDESTALPHA':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].INVDESTALPHA;
                    break;
                case 'DESTCOLOR':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].DESTCOLOR;
                    break;
                case 'INVDESTCOLOR':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].INVDESTCOLOR;
                    break;
                case 'SRCALPHASAT':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].SRCALPHASAT;
                    break;
                default:
                    console.warn('Unsupported render state SRCBLEND/DESTBLEND value used: ' + value + '.');
                    return eValue;
            }
            break;
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATION:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATIONSEPARATE:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATIONCOLOR:
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATIONALPHA:
            switch (value) {
                case 'FUNCADD':
                case 'ADD':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].FUNCADD;
                    break;
                case 'FUNCSUBTRACT':
                case 'SUBTRACT':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].FUNCSUBTRACT;
                    break;
                case 'FUNCREVERSESUBTRACT':
                case 'REVERSESUBTRACT':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].FUNCREVERSESUBTRACT;
                    break;
                default:
                    console.warn('Unsupported render state BLENDEQUATION/BLENDEQUATIONSEPARATE value used: ' + value + '.');
                    return eValue;
            }
            break;
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].ZFUNC:
            switch (value) {
                case 'NEVER':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].NEVER;
                    break;
                case 'LESS':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].LESS;
                    break;
                case 'EQUAL':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].EQUAL;
                    break;
                case 'LESSEQUAL':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].LESSEQUAL;
                    break;
                case 'GREATER':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].GREATER;
                    break;
                case 'NOTEQUAL':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].NOTEQUAL;
                    break;
                case 'GREATEREQUAL':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].GREATEREQUAL;
                    break;
                case 'ALWAYS':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].ALWAYS;
                    break;
                default:
                    console.warn('Unsupported render state ZFUNC value used: ' +
                        value + '.');
                    return eValue;
            }
            break;
        case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].PRIMITIVETOPOLOGY:
            switch (value) {
                case 'TRIANGLELIST':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].TRIANGLELIST;
                    break;
                case 'LINELIST':
                    eValue = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].LINELIST;
                    break;
                default:
                    console.warn('Unsupported render state ZFUNC value used: ' +
                        value + '.');
                    return eValue;
            }
            break;
    }
    return eValue;
}
function addTypeDecl(context, scope, typeDecl) {
    if (_SystemScope__WEBPACK_IMPORTED_MODULE_55__["findType"](typeDecl.name)) {
        context.error(typeDecl.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].SystemTypeRedefinition, { typeName: typeDecl.name });
    }
    let isAdded = scope.addType(typeDecl.type);
    if (!isAdded) {
        context.error(typeDecl.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].TypeRedefinition, { typeName: typeDecl.name });
    }
}
function checkFunctionForRecursion(context, func, stack) {
    if (stack.indexOf(func.instructionID) !== -1) {
        context.error(func.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidFunctionRecursionNotAllowed, { funcName: func.name });
        return false;
    }
    let recursionFound = false;
    stack = [...stack, func.instructionID];
    const recursionChecker = (instr) => {
        if (instr.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_FunctionCallExpr) {
            let fcall = instr;
            let fdecl = fcall.decl;
            if (fdecl.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_SystemFunctionDecl) {
                return;
            }
            // NOTE: it is possible that the declaration was not complete 
            //       at the time of the call, so you need to look for a 
            //       version with implementation
            fdecl = fdecl.scope.findFunctionInScope(fdecl);
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(fdecl.impl)) {
                context.error(instr.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidFunctionImplementationNotFound, { funcName: fdecl.name });
                return;
            }
            // visitor(fdecl.impl, recursionChecker);
            recursionFound = recursionFound ||
                checkFunctionForRecursion(context, fdecl, stack);
        }
    };
    Object(_Visitors__WEBPACK_IMPORTED_MODULE_7__["visitor"])(func.impl, recursionChecker);
    return !recursionFound;
}
function checkFunctionsForRecursion(context, program) {
    const gs = program.globalScope;
    let recusrionFound = false;
    Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["mwalk"])(gs.functions, funcOverloads => {
        funcOverloads.forEach(func => {
            recusrionFound = recusrionFound ||
                !checkFunctionForRecursion(context, func, []);
        });
    });
    return !recusrionFound;
}
function checkForVertexUsage(funcDef) {
    if (!checkReturnTypeForVertexUsage(funcDef)) {
        return false;
    }
    if (!checkArgumentsForVertexUsage(funcDef)) {
        return false;
    }
    return true;
}
function checkForPixelUsage(funcDef) {
    if (!checkReturnTypeForPixelUsage(funcDef)) {
        return false;
    }
    if (!checkArgumentsForPixelUsage(funcDef)) {
        return false;
    }
    return true;
}
function checkReturnTypeForVertexUsage(funcDef) {
    const returnType = funcDef.returnType;
    if (returnType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_VOID"])) {
        return true;
    }
    if (returnType.isComplex()) {
        if (returnType.hasFieldWithoutSemantics()) {
            return false;
        }
        if (!returnType.hasAllUniqueSemantics()) {
            return false;
        }
        // isGood = returnType._hasFieldWithSematic("POSITION");
        // if(!isGood){
        // 	return false;
        // }
        // samplers cant be interpolators
        if (returnType.isContainSampler()) {
            return false;
        }
        // Forbid fileds with user-defined types
        // or any other complex types.
        if (returnType.isContainComplexType()) {
            return false;
        }
    }
    else {
        if (!returnType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_FLOAT4"])) {
            return false;
        }
        if (funcDef.semantic !== "POSITION") {
            return false;
        }
    }
    return true;
}
// todo: add support for dual source blending
// todo: add support for MRT
function checkReturnTypeForPixelUsage(funcDef) {
    let returnType = funcDef.returnType;
    if (returnType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_VOID"])) {
        return true;
    }
    // TODO: add MRT support
    if (!returnType.isBase()) {
        return false;
    }
    if (!returnType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_FLOAT4"])) {
        return false;
    }
    if (funcDef.semantic !== "COLOR") {
        return false;
    }
    return true;
}
function checkArgumentsForVertexUsage(funcDef) {
    let params = funcDef.params;
    let isAttributeByStruct = false;
    let isAttributeByParams = false;
    let isStartAnalyze = false;
    for (let i = 0; i < params.length; i++) {
        let param = params[i];
        if (param.type.isUniform()) {
            continue;
        }
        if (!isStartAnalyze) {
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(param.semantic)) {
                if (param.type.isBase() ||
                    param.type.hasFieldWithoutSemantics() ||
                    !param.type.hasAllUniqueSemantics()) {
                    return false;
                }
                isAttributeByStruct = true;
            }
            else if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(param.semantic)) {
                if (param.type.isComplex() &&
                    (param.type.hasFieldWithoutSemantics() ||
                        !param.type.hasAllUniqueSemantics())) {
                    return false;
                }
                isAttributeByParams = true;
            }
            isStartAnalyze = true;
        }
        else if (isAttributeByStruct) {
            return false;
        }
        else if (isAttributeByParams) {
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(param.semantic)) {
                return false;
            }
            if (param.type.isComplex() &&
                (param.type.hasFieldWithoutSemantics() ||
                    !param.type.hasAllUniqueSemantics())) {
                return false;
            }
        }
    }
    return true;
}
function checkArgumentsForPixelUsage(funcDef) {
    let params = funcDef.params;
    let isVaryingsByStruct = false;
    let isVaryingsByParams = false;
    let isStartAnalyze = false;
    for (let i = 0; i < params.length; i++) {
        let param = params[i];
        if (param.type.isUniform()) {
            continue;
        }
        if (!isStartAnalyze) {
            if (param.semantic === "") {
                if (param.type.isBase() ||
                    param.type.hasFieldWithoutSemantics() ||
                    !param.type.hasAllUniqueSemantics() ||
                    param.type.isContainSampler()) {
                    return false;
                }
                isVaryingsByStruct = true;
            }
            else if (param.semantic !== "") {
                if (param.type.isContainSampler() ||
                    _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isSamplerType"](param.type)) {
                    return false;
                }
                if (param.type.isComplex() &&
                    (param.type.hasFieldWithoutSemantics() ||
                        !param.type.hasAllUniqueSemantics())) {
                    return false;
                }
                isVaryingsByParams = true;
            }
            isStartAnalyze = true;
        }
        else if (isVaryingsByStruct) {
            return false;
        }
        else if (isVaryingsByParams) {
            if (param.semantic === "") {
                return false;
            }
            if (param.type.isContainSampler() ||
                _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isSamplerType"](param.type)) {
                return false;
            }
            if (param.type.isComplex() &&
                (param.type.hasFieldWithoutSemantics() ||
                    !param.type.hasAllUniqueSemantics())) {
                return false;
            }
        }
    }
    return true;
}
class Context {
    constructor(uri) {
        this.diagnostics = new _AnalyzerDiagnostics__WEBPACK_IMPORTED_MODULE_6__["AnalyzerDiagnostics"];
        this.uri = uri;
        this.moduleName = null;
        this.haveCurrentFunctionReturnOccur = false;
    }
    beginFunc() {
        this.func = true;
        this.haveCurrentFunctionReturnOccur = false;
        this.funcDef = null; // << will be set inside analyzeFunctionDecl();
    }
    endFunc() {
        this.func = false;
    }
    beginPass() {
        this.renderStates = null;
    }
    endPass() {
        this.renderStates = null;
    }
    error(sourceNode, code, info = {}) {
        let loc = this.resolveNodeSourceLocation(sourceNode);
        let file = this.uri;
        this.diagnostics.error(code, { file, loc, info });
    }
    critical(sourceNode, code, info = {}) {
        let loc = this.resolveNodeSourceLocation(sourceNode);
        let file = this.uri;
        this.diagnostics.critical(code, { file, loc, info });
    }
    warn(sourceNode, code, info = {}) {
        let loc = this.resolveNodeSourceLocation(sourceNode);
        let file = this.uri;
        this.diagnostics.warning(code, { file, loc, info });
    }
    resolveNodeSourceLocation(sourceNode) {
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDefAndNotNull"])(sourceNode)) {
            return null;
        }
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(sourceNode.loc)) {
            return sourceNode.loc;
        }
        return this.resolveNodeSourceLocation(sourceNode.children[sourceNode.children.length - 1]);
    }
}
class Analyzer {
    analyzeUseDecl(context, program, sourceNode) {
        program.currentScope.strictMode = true;
    }
    analyzeComplexName(sourceNode) {
        const children = sourceNode.children;
        let name = '';
        for (let i = children.length - 1; i >= 0; i--) {
            name += children[i].value;
        }
        return name;
    }
    /**
     * AST example:
     *    ProvideDecl
     *         T_PUNCTUATOR_59 = ';'
     *       + ComplexNameOpt
     *         T_KW_PROVIDE = 'provide'
     */
    analyzeProvideDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        if (children.length === 3) {
            let moduleName = this.analyzeComplexName(children[1]);
            ;
            if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(context.moduleName)) {
                console.warn(`Context module overriding detected '${context.moduleName}' => '${module}'`);
            }
            context.moduleName = moduleName;
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(children[2].name === 'T_KW_PROVIDE');
            return new _instructions_ProvideInstruction__WEBPACK_IMPORTED_MODULE_39__["ProvideInstruction"]({ sourceNode, moduleName, scope });
        }
        context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].UnsupportedProvideAs);
        return null;
    }
    /**
     * AST example:
     *    InitExpr
     *         T_UINT = '0'
     */
    analyzeInitExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let args = [];
        if (children.length === 1) {
            args.push(this.analyzeExpr(context, program, children[0]));
        }
        else {
            for (let i = 0; i < children.length; i++) {
                if (children[i].name === 'InitExpr') {
                    args.push(this.analyzeInitExpr(context, program, children[i]));
                }
            }
        }
        // TODO: determ type!!
        const initExpr = new _instructions_InitExprInstruction__WEBPACK_IMPORTED_MODULE_30__["InitExprInstruction"]({ scope, sourceNode, args, type: null });
        return initExpr;
    }
    /**
     * AST example:
     *    VariableDecl
     *         T_PUNCTUATOR_59 = ';'
     *       + Variable
     *         T_PUNCTUATOR_44 = ','
     *       + Variable
     *         T_PUNCTUATOR_44 = ','
     *       + Variable
     *       + UsageType
     */
    analyzeVariableDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const generalType = this.analyzeUsageType(context, program, children[children.length - 1]);
        const vars = [];
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(generalType)) {
            return null;
        }
        for (let i = children.length - 2; i >= 1; i--) {
            if (children[i].name === 'Variable') {
                vars.push(this.analyzeVariable(context, program, children[i], generalType));
            }
        }
        return vars;
    }
    /**
     * AST example:
     *    UsageType
     *       + Type
     *       + Usage
     */
    analyzeUsageType(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let type = null;
        let usagesRaw = [];
        for (let i = children.length - 1; i >= 0; i--) {
            if (children[i].name === 'Type') {
                type = this.analyzeType(context, program, children[i]);
                if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type)) {
                    return null;
                }
            }
            else if (children[i].name === 'Usage') {
                usagesRaw.push(this.analyzeUsage(children[i]));
            }
        }
        const usageIn = usagesRaw.indexOf('in') !== -1;
        const usageOut = usagesRaw.indexOf('out') !== -1;
        const usageInout = usagesRaw.indexOf('inout') !== -1;
        const usageConst = usagesRaw.indexOf('const') !== -1;
        const usageUniform = usagesRaw.indexOf('uniform') !== -1;
        // TODO: emit errors in case of inconsistent usages
        // TODO: remplace with bitflags
        let usages = [];
        if (usageInout) {
            usages.push('inout');
            // emit error in case of uniform
            // emit error in case of const
        }
        else {
            if (usageIn && usageOut) {
                usages.push('inout');
                // emit error in case of uniform
                // emit error in case of const
            }
            else {
                if (usageIn) {
                    usages.push('in');
                }
                if (usageOut) {
                    usages.push('out');
                    // emit error in case of const
                    // emit error in case of uniform
                }
                else {
                    if (usageConst)
                        usages.push('const');
                    if (usageUniform)
                        usages.push('uniform');
                }
            }
        }
        let varType = new _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"]({ scope, sourceNode, type, usages });
        return checkInstruction(context, varType, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    Type
     *         T_TYPE_ID = 'float3'
     */
    analyzeType(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let type = null;
        switch (sourceNode.name) {
            case 'T_TYPE_ID':
                if (sourceNode.value === 'auto') {
                    type = new _instructions_ProxyTypeInstruction__WEBPACK_IMPORTED_MODULE_40__["ProxyTypeInstruction"]({ scope });
                    break;
                }
                type = scope.findType(sourceNode.value);
                if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type)) {
                    context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeNameNotType, { typeName: sourceNode.value });
                }
                break;
            case 'Struct':
                type = this.analyzeStruct(context, program, sourceNode);
                break;
            case 'T_KW_VOID':
                type = _SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_VOID"];
                break;
            case 'ScalarType':
            case 'ObjectType':
                {
                    let typeName = children[children.length - 1].value;
                    if (children.length !== 1) {
                        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(children[children.length - 2].value === '<' && children[0].value === '>');
                        const tplName = typeName;
                        const args = children
                            .slice(1, -2)
                            .reverse()
                            .filter((v, i) => i % 2 == 0)
                            .map(sourceNode => this.analyzeType(context, program, sourceNode));
                        const template = scope.findTypeTemplate(typeName);
                        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(template)) {
                            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeNameTemplateNotFound, { tplName, args: args.map(arg => arg.toCode()) });
                            return null;
                        }
                        // TODO: validate register
                        // TODO: use ESystemTypes enumeration
                        const SYSTEM_TYPES = ['RWBuffer', 'RWStructuredBuffer', 'AppendStructuredBuffer'];
                        if (SYSTEM_TYPES.indexOf(template.name) !== -1) {
                            if (scope.type != _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_Global) {
                                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeScope, { typeName: template.name, tooltip: 'only global scope allowed' });
                                return null;
                            }
                        }
                        typeName = template.typeName(args);
                        type = scope.findType(typeName);
                        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type)) {
                            type = template.produceType(scope, args);
                            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type)) {
                                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].CannotProduceType, { typeName });
                                return null;
                            }
                            scope.addType(type);
                        }
                    }
                    else {
                        type = scope.findType(typeName);
                    }
                    if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type)) {
                        context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeNameNotType, { typeName });
                        return null;
                    }
                }
                break;
            case 'VectorType':
            case 'MatrixType':
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeVectorMatrix);
                break;
            case 'BaseType':
            case 'Type':
                return this.analyzeType(context, program, children[0]);
        }
        return type;
    }
    analyzeUsage(sourceNode) {
        sourceNode = sourceNode.children[0];
        const supportedUsages = ['uniform', 'const', 'in', 'out', 'inout'];
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(supportedUsages.indexOf(sourceNode.value) !== -1);
        return sourceNode.value;
    }
    /**
     * AST example:
     *    Variable
     *       + Initializer
     *       + Semantic
     *       + VariableDim
     *              T_PUNCTUATOR_93 = ']'
     *              T_NON_TYPE_ID = 'N'
     *              T_PUNCTUATOR_91 = '['
     *            + VariableDim
     *                   T_NON_TYPE_ID = 'x'
     *                   ^^^^^^^^^^^^^^^^^^
     */
    analyzeVariable(context, program, sourceNode, generalType) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let annotation = null;
        let init = null;
        let semantic = '';
        let usageFlags = 0;
        if (!context.func) {
            usageFlags |= _instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_51__["EVariableUsageFlags"].k_Global;
        }
        else {
            // All variables found inside function definition are arguments.
            if (!context.funcDef) {
                usageFlags |= _instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_51__["EVariableUsageFlags"].k_Argument;
            }
            usageFlags |= _instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_51__["EVariableUsageFlags"].k_Local;
        }
        let id = null;
        let arrayIndex = null;
        let type = null;
        let vdimNode = children[children.length - 1];
        do {
            let vdimChildren = vdimNode.children;
            if (vdimChildren.length === 1) {
                const name = vdimChildren[0].value;
                id = new _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_28__["IdInstruction"]({ scope, sourceNode, name });
                break;
            }
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(vdimChildren.length == 4);
            if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(arrayIndex)) {
                // usage of generalType.source node instead of sourceNode was done for more clear debugging
                generalType = new _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"]({ scope, sourceNode: generalType.sourceNode, type: generalType, arrayIndex });
            }
            arrayIndex = this.analyzeExpr(context, program, vdimChildren[vdimChildren.length - 3]);
            vdimNode = vdimChildren[vdimChildren.length - 1];
        } while (true);
        // using generalType.source node instead of sourceNode was done for more clear degging
        type = new _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"]({ scope, sourceNode: generalType.sourceNode, type: generalType, arrayIndex });
        for (let i = children.length - 2; i >= 0; i--) {
            if (children[i].name === 'Annotation') {
                annotation = this.analyzeAnnotation(children[i]);
            }
            else if (children[i].name === 'Semantic') {
                semantic = this.analyzeSemantic(children[i]);
            }
            else if (children[i].name === 'Initializer') {
                let args = this.analyzeInitializerArguments(context, program, children[i]);
                init = new _instructions_InitExprInstruction__WEBPACK_IMPORTED_MODULE_30__["InitExprInstruction"]({ scope, sourceNode: children[i], args, type });
                let isValidInit = false;
                try {
                    isValidInit = init.optimizeForVariableType(type);
                }
                catch (e) { }
                ;
                if (!isValidInit) {
                    // TODO: make it warning
                    context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidVariableInitializing, { varName: id.name });
                    init = null;
                }
            }
        }
        const varDecl = new _instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_51__["VariableDeclInstruction"]({ sourceNode, scope, type, init, id, semantic, annotation, usageFlags });
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(scope.type != _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_System);
        if (_SystemScope__WEBPACK_IMPORTED_MODULE_55__["hasVariable"](varDecl.name)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].SystemVariableRedefinition, { varName: varDecl.name });
        }
        const isAdded = scope.addVariable(varDecl);
        if (!isAdded) {
            switch (scope.type) {
                case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_Global:
                case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_Default:
                    context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].VariableRedefinition, { varName: varDecl.name });
                    break;
                case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_Struct:
                    context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidNewFieldForStructName, { fieldName: varDecl.name });
                    break;
                case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_Annotation:
                    context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidNewAnnotationVar, { varName: varDecl.name });
                    break;
            }
        }
        return checkInstruction(context, varDecl, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    Annotation
     *         T_PUNCTUATOR_62 = '>'
     *         T_PUNCTUATOR_60 = '<'
     */
    analyzeAnnotation(sourceNode) {
        // todo
        return null;
    }
    /**
     * AST example:
     *    Semantic
     *         T_NON_TYPE_ID = 'SEMANTIC'
     *         T_PUNCTUATOR_58 = ':'
     */
    /**
     * AST example:
     *    Semantic
     *         T_PUNCTUATOR_41 = ')'
     *         T_NON_TYPE_ID = 'u2'
     *         T_PUNCTUATOR_40 = '('
     *         T_KW_REGISTER = 'register'
     *         T_PUNCTUATOR_58 = ':'
     */
    analyzeSemantic(sourceNode) {
        return sourceNode.children.slice(0, -1).reverse().map(child => child.value).join('');
    }
    /**
     * AST example:
     *    Initializer
     *         T_UINT = '10'
     *         T_PUNCTUATOR_61 = '='
     *    Initializer
     *       + CastExpr
     *         T_PUNCTUATOR_61 = '='
     *    Initializer
     *         T_PUNCTUATOR_125 = '}'
     *       + InitExpr
     *         T_PUNCTUATOR_44 = ','
     *       + InitExpr
     *         T_PUNCTUATOR_123 = '{'
     *         T_PUNCTUATOR_61 = '='
     */
    analyzeInitializerArguments(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let args = [];
        if (children.length === 2) {
            args.push(this.analyzeExpr(context, program, children[0]));
        }
        else {
            for (let i = children.length - 3; i >= 1; i--) {
                if (children[i].name === 'InitExpr') {
                    args.push(this.analyzeInitExpr(context, program, children[i]));
                }
            }
        }
        return args;
    }
    analyzeExpr(context, program, sourceNode) {
        const name = sourceNode.name;
        switch (name) {
            case 'ObjectExpr':
                return this.analyzeObjectExpr(context, program, sourceNode);
            case 'ComplexExpr':
                return this.analyzeComplexExpr(context, program, sourceNode);
            case 'PostfixExpr':
                return this.analyzePostfixExpr(context, program, sourceNode);
            case 'UnaryExpr':
                return this.analyzeUnaryExpr(context, program, sourceNode);
            case 'CastExpr':
                return this.analyzeCastExpr(context, program, sourceNode);
            case 'ConditionalExpr':
                return this.analyzeConditionalExpr(context, program, sourceNode);
            case 'MulExpr':
            case 'AddExpr':
                return this.analyzeArithmeticExpr(context, program, sourceNode);
            case 'RelationalExpr':
            case 'EqualityExpr':
                return this.analyzeRelationExpr(context, program, sourceNode);
            case 'AndExpr':
            case 'OrExpr':
                return this.analyzeLogicalExpr(context, program, sourceNode);
            case 'AssignmentExpr':
                return this.analyzeAssignmentExpr(context, program, sourceNode);
            case 'T_NON_TYPE_ID':
                return this.analyzeIdExpr(context, program, sourceNode);
            case 'T_STRING':
            case 'T_UINT':
            case 'T_FLOAT':
            case 'T_KW_TRUE':
            case 'T_KW_FALSE':
                return this.analyzeSimpleExpr(context, program, sourceNode);
            default:
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].UnsupportedExpr, { exprName: name });
                break;
        }
        return null;
    }
    /**
     * AST example:
     *    ObjectExpr
     *       + StateBlock
     *         T_KW_SAMPLER_STATE = 'sampler_state'
     *    ObjectExpr
     *         T_PUNCTUATOR_41 = ')'
     *         T_PUNCTUATOR_40 = '('
     *         T_NON_TYPE_ID = 'fs_skybox'
     *         T_KW_COMPILE = 'compile'
     */
    analyzeObjectExpr(context, program, sourceNode) {
        let name = sourceNode.children[sourceNode.children.length - 1].name;
        switch (name) {
            case 'T_KW_COMPILE':
                return this.analyzeCompileExpr(context, program, sourceNode);
            case 'T_KW_SAMPLER_STATE':
                return this.analyzeSamplerStateBlock(context, program, sourceNode);
            default:
        }
        return null;
    }
    /**
     * AST example:
     *    ObjectExpr
     *         T_PUNCTUATOR_41 = ')'
     *         T_PUNCTUATOR_40 = '('
     *         T_NON_TYPE_ID = 'main'
     *         T_KW_COMPILE = 'compile'
     */
    analyzeCompileExpr(context, program, sourceNode, validators) {
        const children = sourceNode.children;
        const shaderFuncName = children[children.length - 2].value;
        const scope = program.currentScope;
        let compileArgs = null;
        let retType = null;
        let args = null;
        if (children.length > 4) {
            compileArgs = [];
            for (let i = children.length - 4; i > 0; i--) {
                if (children[i].value !== ',') {
                    compileArgs.push(this.analyzeExpr(context, program, children[i]));
                }
            }
        }
        args = compileArgs ? compileArgs.map(asType) : null;
        let func = null;
        if (validators) {
            for (let validator of validators) {
                args = compileArgs ? compileArgs.map(asType) : null;
                retType = null;
                args = validator.args || args;
                retType = validator.ret || retType;
                func = program.globalScope.findFunction(shaderFuncName, args);
                if (func) {
                    break;
                }
            }
        }
        else {
            func = program.globalScope.findFunction(shaderFuncName, args);
        }
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(func)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileNotFunction, { funcName: shaderFuncName });
            return null;
        }
        if (retType) {
            if (!func.def.returnType.isEqual(retType)) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCompileFunctionNotValid, {
                    funcName: shaderFuncName,
                    funcType: retType.toCode(),
                    tooltip: `Return type mismatch: expected '${retType.toCode()}' a is a '${func.def.returnType.toCode()}' `
                });
                return null;
            }
        }
        let type = _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"].wrap(func.def.returnType, scope);
        let expr = new _instructions_CompileExprInstruction__WEBPACK_IMPORTED_MODULE_15__["CompileExprInstruction"]({ args: compileArgs, scope, type, operand: func, sourceNode });
        return checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    ObjectExpr
     *       + StateBlock
     *         T_KW_SAMPLER_STATE = 'sampler_state'
     */
    analyzeSamplerStateBlock(context, program, sourceNode) {
        sourceNode = sourceNode.children[0];
        let scope = program.currentScope;
        let children = sourceNode.children;
        let operator = "sampler_state";
        let texture = null;
        let params = [];
        for (let i = children.length - 2; i >= 1; i--) {
            let param = this.analyzeSamplerState(context, program, children[i]);
            if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(param)) {
                params.push(param);
            }
        }
        let expr = new _instructions_SamplerStateBlockInstruction__WEBPACK_IMPORTED_MODULE_43__["SamplerStateBlockInstruction"]({ sourceNode, scope, operator, params });
        checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return expr;
    }
    /**
     * AST example:
     *    State
     *         T_PUNCTUATOR_59 = ';'
     *         StateExpr
     *              T_PUNCTUATOR_62 = '>'
     *              T_NON_TYPE_ID = 'tex0'
     *              T_PUNCTUATOR_60 = '<'
     *         T_PUNCTUATOR_61 = '='
     *         T_NON_TYPE_ID = 'Texture'
     */
    analyzeSamplerState(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        if (children[children.length - 2].name === 'StateIndex') {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].UnsupportedStateIndex);
            return null;
        }
        let stateExprNode = children[children.length - 3];
        let subStateExprNode = stateExprNode.children[stateExprNode.children.length - 1];
        let stateType = children[children.length - 1].value.toUpperCase();
        let stateValue = '';
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(subStateExprNode.value)) {
            context.error(subStateExprNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidSamplerTexture);
            return null;
        }
        switch (stateType) {
            case 'TEXTURE':
                if (stateExprNode.children.length !== 3 || subStateExprNode.value === '{') {
                    context.error(subStateExprNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidSamplerTexture);
                    return null;
                }
                let texNameNode = stateExprNode.children[1];
                let texName = texNameNode.value;
                if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(texName) || !scope.findVariable(texName)) {
                    context.error(stateExprNode.children[1], _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidSamplerTexture);
                    return null;
                }
                let texDecl = scope.findVariable(texName);
                let texId = new _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_28__["IdInstruction"]({ scope, sourceNode: texNameNode, name: texName });
                let tex = new _instructions_IdExprInstruction__WEBPACK_IMPORTED_MODULE_27__["IdExprInstruction"]({ scope, sourceNode: texNameNode, id: texId, decl: texDecl });
                return new _instructions_SamplerStateInstruction__WEBPACK_IMPORTED_MODULE_44__["SamplerStateInstruction"]({ scope, sourceNode, name: stateType, value: tex });
            case 'ADDRESSU': /* WRAP_S */
            case 'ADDRESSV': /* WRAP_T */
                stateValue = subStateExprNode.value.toUpperCase();
                switch (stateValue) {
                    case 'WRAP':
                    case 'CLAMP':
                    case 'MIRROR':
                        break;
                    default:
                        // TODO: move to errors
                        // console.warn('Webgl don`t support this wrapmode: ' + stateValue);
                        return null;
                }
                break;
            case 'MAGFILTER':
            case 'MINFILTER':
                stateValue = subStateExprNode.value.toUpperCase();
                switch (stateValue) {
                    case 'POINT':
                        stateValue = 'NEAREST';
                        break;
                    case 'POINT_MIPMAP_POINT':
                        stateValue = 'NEAREST_MIPMAP_NEAREST';
                        break;
                    case 'LINEAR_MIPMAP_POINT':
                        stateValue = 'LINEAR_MIPMAP_NEAREST';
                        break;
                    case 'POINT_MIPMAP_LINEAR':
                        stateValue = 'NEAREST_MIPMAP_LINEAR';
                        break;
                    case 'NEAREST':
                    case 'LINEAR':
                    case 'NEAREST_MIPMAP_NEAREST':
                    case 'LINEAR_MIPMAP_NEAREST':
                    case 'NEAREST_MIPMAP_LINEAR':
                    case 'LINEAR_MIPMAP_LINEAR':
                        break;
                    default:
                        // TODO: move to erros api
                        // console.warn('Webgl don`t support this texture filter: ' + stateValue);
                        return null;
                }
                break;
            default:
                // TODO: move to erros api
                console.warn('Don`t support this texture param: ' + stateType);
                return null;
        }
        return new _instructions_SamplerStateInstruction__WEBPACK_IMPORTED_MODULE_44__["SamplerStateInstruction"]({
            sourceNode,
            scope,
            name: stateType,
            value: new _instructions_StringInstruction__WEBPACK_IMPORTED_MODULE_47__["StringInstruction"]({ sourceNode: stateExprNode, scope, value: stateValue })
        });
    }
    /**
     * AST example:
     *    ComplexExpr
     *         T_PUNCTUATOR_41 = ')'
     *         T_FLOAT = '2.'
     *         T_PUNCTUATOR_44 = ','
     *         T_FLOAT = '1.'
     *         T_PUNCTUATOR_40 = '('
     *         T_TYPE_ID = 'float4'
     */
    /**
     * AST example:
     *    ComplexExpr
     *         T_PUNCTUATOR_41 = ')'
     *         T_PUNCTUATOR_40 = '('
     *       + PostfixPointExpr
     */
    analyzeComplexExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const firstNodeName = children[children.length - 1].name;
        switch (firstNodeName) {
            case 'PostfixPointExpr':
            case 'T_NON_TYPE_ID':
                return this.analyzeFunctionCallExpr(context, program, sourceNode);
            case 'BaseType':
            case 'T_TYPE_ID':
                return this.analyzeConstructorCallExpr(context, program, sourceNode);
            default:
                return this.analyzeSimpleComplexExpr(context, program, sourceNode);
        }
    }
    analyzeCallee(context, program, sourceNode) {
        const children = sourceNode.children;
        return this.analyzeExpr(context, program, children[children.length - 1]);
    }
    /**
     * AST example:
     *    ComplexExpr
     *         T_PUNCTUATOR_41 = ')'
     *         T_NON_TYPE_ID = 'b'
     *         T_PUNCTUATOR_44 = ','
     *         T_NON_TYPE_ID = 'a'
     *         T_PUNCTUATOR_40 = '('
     *         T_NON_TYPE_ID = 'foo'
     */
    /**
     * AST example:
     *    PostfixPointExpr
     *         T_NON_TYPE_ID = 'IncrementCounter'
     *         T_PUNCTUATOR_46 = '.'
     *       + PostfixExpr
     */
    analyzeFunctionCallExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const globalScope = program.globalScope;
        const firstNodeName = children[children.length - 1].name;
        const args = [];
        if (children.length > 3) {
            for (let i = children.length - 3; i > 0; i--) {
                if (children[i].value !== ',') {
                    const arg = this.analyzeExpr(context, program, children[i]);
                    args.push(arg);
                }
            }
        }
        let funcName = null;
        let func = null;
        let callee = null;
        switch (firstNodeName) {
            // call as function
            case 'T_NON_TYPE_ID':
                {
                    // TODO: validate intrinsics like 'InterlockedAdd', check that dest is UAV address
                    funcName = children[children.length - 1].value;
                    func = globalScope.findFunction(funcName, args.map(asRelaxedType));
                }
                break;
            // call as method
            case 'PostfixPointExpr':
                {
                    callee = this.analyzeCallee(context, program, children[children.length - 1]);
                    funcName = children[children.length - 1].children[0].value; // method name
                    func = callee.type.getMethod(funcName, args.map(asRelaxedType));
                }
                break;
        }
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(func)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidComplexNotFunction, { funcName });
            return null;
        }
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(func)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].CannotChooseFunction, { funcName });
            return null;
        }
        if (func.instructionType !== _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_FunctionDecl &&
            func.instructionType !== _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_SystemFunctionDecl) {
            console.error("@undefined_behavior");
            return null;
        }
        const params = func.def.params;
        for (let i = 0; i < args.length; i++) {
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(args[i])) {
                continue;
            }
            if (params[i].type.hasUsage('out')) {
                const decl = _helpers__WEBPACK_IMPORTED_MODULE_8__["expression"].unwind(args[i]);
                if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(decl)) {
                    context.error(args[i].sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidExprIsNotLValue);
                    return null;
                }
                if (!args[i].type.writable) {
                    context.error(args[i].sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForWriting);
                    return null;
                }
            }
            else if (params[i].type.hasUsage('inout')) {
                const decl = _helpers__WEBPACK_IMPORTED_MODULE_8__["expression"].unwind(args[i]);
                if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(decl)) {
                    context.error(args[i].sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidExprIsNotLValue);
                    return null;
                }
                if (!args[i].type.writable) {
                    context.error(args[i].sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForWriting);
                    return null;
                }
                if (!args[i].type.readable) {
                    context.error(args[i].sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
                    return null;
                }
            }
            else {
                if (!args[i].type.readable) {
                    context.error(args[i].sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
                    return null;
                }
            }
        }
        const type = _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"].wrap(func.def.returnType, scope); // TODO: remove wrap?
        const expr = new _instructions_FunctionCallInstruction__WEBPACK_IMPORTED_MODULE_24__["FunctionCallInstruction"]({ scope, type, decl: func, args, sourceNode, callee });
        return checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    ComplexExpr
     *         T_PUNCTUATOR_41 = ')'
     *         T_UINT = '1'
     *         T_PUNCTUATOR_40 = '('
     *       + BaseType
     */
    analyzeConstructorCallExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const ctorType = this.analyzeType(context, program, children[children.length - 1]);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(ctorType)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidComplexNotType);
            return null;
        }
        let args = null;
        if (children.length > 3) {
            let argumentExpr = null;
            args = [];
            for (let i = children.length - 3; i > 0; i--) {
                if (children[i].value !== ',') {
                    argumentExpr = this.analyzeExpr(context, program, children[i]);
                    args.push(argumentExpr);
                }
            }
        }
        // TODO: add correct implementation! 
        const exprType = findConstructor(ctorType, args);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(exprType)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidComplexNotConstructor, { typeName: String(ctorType) });
            return null;
        }
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(args)) {
            for (let i = 0; i < args.length; i++) {
                if (!args[i].type.readable) {
                    context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
                    return null;
                }
            }
        }
        const expr = new _instructions_ConstructorCallInstruction__WEBPACK_IMPORTED_MODULE_19__["ConstructorCallInstruction"]({ scope, sourceNode, ctor: exprType, args });
        return checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        ;
    }
    // TODO: add comment!
    analyzeSimpleComplexExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let expr = this.analyzeExpr(context, program, children[1]);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(expr)) {
            return null;
        }
        // let type = <IVariableTypeInstruction>expr.type;
        let complexExpr = new _instructions_ComplexExprInstruction__WEBPACK_IMPORTED_MODULE_16__["ComplexExprInstruction"]({ scope, sourceNode, expr });
        return checkInstruction(context, complexExpr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    PostfixExpr
     *         T_NON_TYPE_ID = 'val'
     *         T_PUNCTUATOR_46 = '.'
     *         T_NON_TYPE_ID = 'some'
     *    PostfixExpr
     *         T_PUNCTUATOR_93 = ']'
     *         T_UINT = '1'
     *         T_PUNCTUATOR_91 = '['
     *         T_NON_TYPE_ID = 'some'
     *    PostfixExpr
     *         T_OP_INC = '++'
     *         T_NON_TYPE_ID = 'some'
     */
    analyzePostfixExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const symbol = children[children.length - 2].value;
        switch (symbol) {
            case '[':
                return this.analyzePostfixIndex(context, program, sourceNode);
            case '.':
                return this.analyzePostfixPoint(context, program, sourceNode);
            case '++':
            case '--':
                return this.analyzePostfixArithmetic(context, program, sourceNode);
        }
        return null;
    }
    /**
     * AST example:
     *    PostfixExpr
     *         T_PUNCTUATOR_93 = ']'
     *         T_UINT = '1'
     *         T_PUNCTUATOR_91 = '['
     *         T_NON_TYPE_ID = 'some'
     */
    analyzePostfixIndex(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const postfixExpr = this.analyzeExpr(context, program, children[children.length - 1]);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(postfixExpr)) {
            // TODO: emit error?
            return null;
        }
        const postfixExprType = postfixExpr.type;
        if (!postfixExprType.isArray()) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidPostfixNotArray, { typeName: String(postfixExprType) });
            return null;
        }
        const indexExpr = this.analyzeExpr(context, program, children[children.length - 3]);
        const indexExprType = indexExpr.type;
        if (!(indexExprType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_INT"]) || indexExprType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_UINT"]))) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidPostfixNotIntIndex, { typeName: String(indexExprType) });
            return null;
        }
        const expr = new _instructions_PostfixIndexInstruction__WEBPACK_IMPORTED_MODULE_37__["PostfixIndexInstruction"]({ scope, sourceNode, element: postfixExpr, index: indexExpr });
        return checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     *
     * @param elementType Type of the element. (**element.postfix**)
     * @param fieldName
     */
    createFieldDecl(elementType, fieldName) {
        if (!elementType.hasField(fieldName)) {
            return null;
        }
        // in case of typical postfix exp. like "element.postfix":
        //      elementType => type defrived from the parameter or variable declaration or derived from another expr
        //      elementType.subType => original complex (structure) type
        // in case of something else, like ccall with postfix "float2(1.0, 2.0).yx":
        //      elementType => original system type
        const scope = elementType.scope;
        const { id, type, type: { padding, length }, semantic } = 
        // FIXME: remove 'logical OR' operation, always use subType
        (elementType.subType || elementType).getField(fieldName); // arrayIndex
        // note: sourceNode for field is being used from the original complex structure.
        // let arrayIndex: IExprInstruction = null;
        // if (type.isNotBaseArray()) {
        //     // using of length instead of arrayIndex because of lack of api functionality :/
        //     assert(length != Instruction.UNDEFINE_LENGTH, "undefined behaviour found");
        //     arrayIndex = new IntInstruction({ scope, value: String(length) });
        // }
        const fieldType = new _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"]({ type, scope, padding, sourceNode: type.sourceNode /*, arrayIndex*/ });
        const fieldId = new _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_28__["IdInstruction"]({ scope, name: id.name, sourceNode: id.sourceNode });
        const field = new _instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_51__["VariableDeclInstruction"]({ scope, id: fieldId, type: fieldType, semantic, sourceNode: fieldId.sourceNode });
        return _instructions_Instruction__WEBPACK_IMPORTED_MODULE_31__["Instruction"].$withParent(field, elementType);
    }
    /**
     *
     * @param elementType Type of the element. (**element.postfix**)
     */
    analyzePostfixPointField(context, program, sourceNode, elementType) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(elementType)) {
            return null;
        }
        const scope = program.currentScope;
        const name = sourceNode.value; // fiedl name
        // const decl = this.createFieldDecl(elementType, name);   // field decl
        const decl = elementType.getField(name);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(decl)) {
            return null;
        }
        const id = new _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_28__["IdInstruction"]({ scope, sourceNode, name });
        const expr = new _instructions_IdExprInstruction__WEBPACK_IMPORTED_MODULE_27__["IdExprInstruction"]({ scope, sourceNode, id, decl });
        return checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        ;
    }
    /**
     * AST example:
     *    PostfixExpr
     *         T_NON_TYPE_ID = 'val'
     *         T_PUNCTUATOR_46 = '.'
     *         T_NON_TYPE_ID = 'some'
     */
    /**
     * Expressions like:
     *      **(element.postfix)**
     */
    analyzePostfixPoint(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const element = this.analyzeExpr(context, program, children[children.length - 1]);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(element)) {
            // TODO: emit error?
            return null;
        }
        const postfix = this.analyzePostfixPointField(context, program, children[children.length - 3], element.type);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(postfix)) {
            const fieldName = children[children.length - 3].value;
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidPostfixNotField, { typeName: String(element.type), fieldName });
            return null;
        }
        const expr = new _instructions_PostfixPointInstruction__WEBPACK_IMPORTED_MODULE_38__["PostfixPointInstruction"]({ sourceNode, scope, element, postfix });
        return checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    PostfixExpr
     *         T_OP_INC = '++'
     *         T_NON_TYPE_ID = 'b'
     */
    analyzePostfixArithmetic(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const operator = children[0].value;
        const postfixExpr = this.analyzeExpr(context, program, children[1]);
        const postfixExprType = postfixExpr.type;
        const exprType = Analyzer.checkOneOperandExprType(context, sourceNode, operator, postfixExprType);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(exprType)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidPostfixArithmetic, {
                operator: operator,
                typeName: String(postfixExprType)
            });
            return null;
        }
        const expr = new _instructions_PostfixArithmeticInstruction__WEBPACK_IMPORTED_MODULE_36__["PostfixArithmeticInstruction"]({ scope, sourceNode, operator, expr: postfixExpr });
        return checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    UnaryExpr
     *         T_NON_TYPE_ID = 'x'
     *         T_PUNCTUATOR_33 = '!'
     */
    analyzeUnaryExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const operator = children[1].value;
        const scope = program.currentScope;
        let expr = this.analyzeExpr(context, program, children[0]);
        let exprType = Analyzer.checkOneOperandExprType(context, sourceNode, operator, expr.type);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(exprType)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidUnaryOperation, {
                operator: operator,
                tyename: String(expr.type)
            });
            return null;
        }
        let unaryExpr = null;
        // shortcut for replacment of unary expressions with literals
        if (operator === '-' || operator === '+') {
            if (_helpers__WEBPACK_IMPORTED_MODULE_8__["instruction"].isLiteral(expr)) {
                switch (expr.instructionType) {
                    case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_IntExpr:
                        {
                            let lit = expr;
                            let signed = operator === '-' || lit.signed;
                            unaryExpr = new _instructions_IntInstruction__WEBPACK_IMPORTED_MODULE_33__["IntInstruction"]({ scope, sourceNode, value: Number(`${operator}${lit.value}`), signed });
                        }
                        break;
                    case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_FloatExpr:
                        unaryExpr = new _instructions_FloatInstruction__WEBPACK_IMPORTED_MODULE_22__["FloatInstruction"]({ scope, sourceNode, value: Number(`${operator}${expr.value}`) });
                }
            }
        }
        if (!unaryExpr) {
            unaryExpr = new _instructions_UnaryExprInstruction__WEBPACK_IMPORTED_MODULE_50__["UnaryExprInstruction"]({ scope, sourceNode, expr, operator });
        }
        return checkInstruction(context, unaryExpr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    CastExpr
     *         T_NON_TYPE_ID = 'y'
     *         T_PUNCTUATOR_41 = ')'
     *       + ConstType
     *         T_PUNCTUATOR_40 = '('
     */
    analyzeCastExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const type = this.analyzeConstTypeDim(context, program, children[2]);
        const sourceExpr = this.analyzeExpr(context, program, children[0]);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(sourceExpr)) {
            return null;
        }
        if (!sourceExpr.type.readable) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
            return null;
        }
        const expr = new _instructions_CastExprInstruction__WEBPACK_IMPORTED_MODULE_14__["CastExprInstruction"]({ scope, sourceNode, sourceExpr, type });
        return checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        ;
    }
    /**
     * AST example:
     *    ConditionalExpr
     *         T_KW_FALSE = 'false'
     *         T_PUNCTUATOR_58 = ':'
     *         T_KW_TRUE = 'true'
     *         T_PUNCTUATOR_63 = '?'
     *         T_NON_TYPE_ID = 'isOk'
     */
    analyzeConditionalExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const conditionExpr = this.analyzeExpr(context, program, children[children.length - 1]);
        const leftExpr = this.analyzeExpr(context, program, children[children.length - 3]);
        const rightExpr = this.analyzeExpr(context, program, children[0]);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(conditionExpr) || Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(leftExpr) || Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(rightExpr)) {
            context.error(conditionExpr ? conditionExpr.sourceNode : sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidConditionType, { typeName: '[unknown]' });
            return null;
        }
        const conditionType = conditionExpr.type;
        const leftExprType = leftExpr.type;
        const rightExprType = rightExpr.type;
        const boolType = _SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_BOOL"];
        if (!conditionType.isEqual(boolType)) {
            context.error(conditionExpr.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidConditionType, { typeName: String(conditionType) });
            return null;
        }
        if (!leftExprType.isEqual(rightExprType)) {
            context.error(leftExprType.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidConditonValueTypes, {
                leftTypeName: String(leftExprType),
                rightTypeName: String(rightExprType)
            });
            return null;
        }
        if (!conditionType.readable) {
            context.error(conditionType.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
            return null;
        }
        if (!leftExprType.readable) {
            context.error(leftExprType.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
            return null;
        }
        if (!rightExprType.readable) {
            context.error(rightExprType.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
            return null;
        }
        const condExpr = new _instructions_ConditionalExprInstruction__WEBPACK_IMPORTED_MODULE_18__["ConditionalExprInstruction"]({ scope, sourceNode, cond: conditionExpr, left: leftExpr, right: rightExpr });
        return checkInstruction(context, condExpr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        ;
    }
    /**
     * AST example:
     *    AddExpr
     *         T_NON_TYPE_ID = 'b'
     *         T_PUNCTUATOR_43 = '+'
     *         T_NON_TYPE_ID = 'a'
     */
    analyzeArithmeticExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const operator = sourceNode.children[1].value;
        const left = this.analyzeExpr(context, program, children[children.length - 1]);
        const right = this.analyzeExpr(context, program, children[0]);
        if (!left || !right) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidArithmeticOperation, {
                operator: operator,
                leftTypeName: '[unknown]',
                rightTypeName: '[unknown]'
            });
            return null;
        }
        const leftType = left.type;
        const rightType = right.type;
        const type = Analyzer.checkTwoOperandExprTypes(context, operator, leftType, rightType, left.sourceNode, right.sourceNode);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidArithmeticOperation, {
                operator: operator,
                leftTypeName: String(leftType),
                rightTypeName: String(rightType)
            });
            return null;
        }
        const arithmeticExpr = new _instructions_ArithmeticExprInstruction__WEBPACK_IMPORTED_MODULE_9__["ArithmeticExprInstruction"]({ scope, sourceNode, left, right, operator, type });
        return checkInstruction(context, arithmeticExpr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    RelationalExpr
     *         T_NON_TYPE_ID = 'b'
     *         T_PUNCTUATOR_60 = '<'
     *         T_NON_TYPE_ID = 'a'
     */
    analyzeRelationExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const operator = sourceNode.children[1].value;
        const left = this.analyzeExpr(context, program, children[children.length - 1]);
        const right = this.analyzeExpr(context, program, children[0]);
        const leftType = left ? left.type : null;
        const rightType = right ? right.type : null;
        const exprType = Analyzer.checkTwoOperandExprTypes(context, operator, leftType, rightType, left ? left.sourceNode : null, right ? right.sourceNode : null);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(exprType)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidRelationalOperation, {
                operator: operator,
                leftTypeName: leftType ? _helpers__WEBPACK_IMPORTED_MODULE_8__["type"].signature(leftType) : '[unknown]',
                rightTypeName: rightType ? _helpers__WEBPACK_IMPORTED_MODULE_8__["type"].signature(rightType) : '[unknown]'
            });
            return null;
        }
        if (!left || !right) {
            return null;
        }
        const relationExpr = new _instructions_RelationalExprInstruction__WEBPACK_IMPORTED_MODULE_41__["RelationalExprInstruction"]({ sourceNode, scope, left, right, operator });
        return checkInstruction(context, relationExpr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    OrExpr
     *         T_NON_TYPE_ID = 'b'
     *         T_OP_OR = '||'
     *         T_NON_TYPE_ID = 'a'
     */
    analyzeLogicalExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const operator = sourceNode.children[1].value;
        const left = this.analyzeExpr(context, program, children[children.length - 1]);
        const right = this.analyzeExpr(context, program, children[0]);
        const leftType = left.type;
        const rightType = right.type;
        const boolType = _SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_BOOL"];
        if (!leftType.isEqual(boolType)) {
            context.error(leftType.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidLogicOperation, {
                operator: operator,
                typeName: String(leftType)
            });
            return null;
        }
        if (!rightType.isEqual(boolType)) {
            context.error(rightType.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidLogicOperation, {
                operator: operator,
                typeName: String(rightType)
            });
            return null;
        }
        if (!leftType.readable) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
            return null;
        }
        if (!rightType.readable) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
            return null;
        }
        let logicalExpr = new _instructions_LogicalExprInstruction__WEBPACK_IMPORTED_MODULE_34__["LogicalExprInstruction"]({ scope, sourceNode, left, right, operator });
        return checkInstruction(context, logicalExpr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    AssignmentExpr
     *         T_UINT = '10'
     *         T_OP_AE = '+='
     *         T_NON_TYPE_ID = 'x'
     */
    analyzeAssignmentExpr(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const operator = children[1].value;
        const left = this.analyzeExpr(context, program, children[children.length - 1]);
        if (!_helpers__WEBPACK_IMPORTED_MODULE_8__["expression"].unwind(left)) {
            // Invalid left-hand side in assignment
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidLeftHandSideInAssignment, {
                operator: operator
            });
        }
        const right = this.analyzeExpr(context, program, children[0]);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(left) || Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(right)) {
            return null;
        }
        const leftType = left.type;
        const rightType = right.type;
        let exprType = null;
        if (operator !== '=') {
            exprType = Analyzer.checkTwoOperandExprTypes(context, operator, leftType, rightType, left.sourceNode, right.sourceNode);
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(exprType)) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidArithmeticAssigmentOperation, {
                    operator: operator,
                    leftTypeName: _helpers__WEBPACK_IMPORTED_MODULE_8__["type"].signature(leftType),
                    rightTypeName: _helpers__WEBPACK_IMPORTED_MODULE_8__["type"].signature(rightType)
                });
            }
        }
        else {
            exprType = rightType;
        }
        // FIXME: show corrent source nodes for left and right expression.
        exprType = Analyzer.checkTwoOperandExprTypes(context, '=', leftType, exprType);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(exprType)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidAssigmentOperation, {
                leftTypeName: _helpers__WEBPACK_IMPORTED_MODULE_8__["type"].signature(leftType),
                rightTypeName: _helpers__WEBPACK_IMPORTED_MODULE_8__["type"].signature(rightType)
            });
        }
        let assigmentExpr = new _instructions_AssignmentExprInstruction__WEBPACK_IMPORTED_MODULE_10__["AssignmentExprInstruction"]({ scope, sourceNode, left, right, operator });
        return checkInstruction(context, assigmentExpr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    T_NON_TYPE_ID = 'name'
     */
    analyzeIdExpr(context, program, sourceNode) {
        const scope = program.currentScope;
        const name = sourceNode.value;
        const decl = scope.findVariable(name);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(decl)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].UnknownVarName, { varName: name });
            return null;
        }
        const id = new _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_28__["IdInstruction"]({ scope, sourceNode, name });
        const expr = new _instructions_IdExprInstruction__WEBPACK_IMPORTED_MODULE_27__["IdExprInstruction"]({ scope, sourceNode, id, decl });
        return checkInstruction(context, expr, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    analyzeSimpleExpr(context, program, sourceNode) {
        const name = sourceNode.name;
        const value = sourceNode.value;
        const scope = program.currentScope;
        switch (name) {
            case 'T_UINT':
                {
                    const match = value.match(/^([0-9]+)(u?)$/);
                    const signed = match[2] !== 'u';
                    return new _instructions_IntInstruction__WEBPACK_IMPORTED_MODULE_33__["IntInstruction"]({ scope, sourceNode, value: Number(match[1]), signed });
                }
            case 'T_FLOAT':
                return new _instructions_FloatInstruction__WEBPACK_IMPORTED_MODULE_22__["FloatInstruction"]({ scope, sourceNode, value: Number(value) });
            case 'T_STRING':
                return new _instructions_StringInstruction__WEBPACK_IMPORTED_MODULE_47__["StringInstruction"]({ scope, sourceNode, value });
            case 'T_KW_TRUE':
                return new _instructions_BoolInstruction__WEBPACK_IMPORTED_MODULE_12__["BoolInstruction"]({ scope, sourceNode, value: true });
            case 'T_KW_FALSE':
                return new _instructions_BoolInstruction__WEBPACK_IMPORTED_MODULE_12__["BoolInstruction"]({ scope, sourceNode, value: false });
        }
        return null;
    }
    /**
     * AST example:
     *    ConstType
     *       + Type
     */
    analyzeConstTypeDim(context, program, sourceNode) {
        const children = sourceNode.children;
        if (children.length > 1) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCastTypeUsage);
            return null;
        }
        const type = (this.analyzeType(context, program, children[0]));
        if (!type.isBase()) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidCastTypeNotBase, { typeName: String(type) });
        }
        return checkInstruction(context, type, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    VariableDecl
     *         T_PUNCTUATOR_59 = ';'
     *       + Variable
     *       + UsageType
     */
    analyzeVarStructDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        let usageType = this.analyzeUsageStructDecl(context, program, children[children.length - 1]);
        let vars = [];
        for (let i = children.length - 2; i >= 1; i--) {
            if (children[i].name === 'Variable') {
                vars = vars.concat(this.analyzeVariable(context, program, children[i], usageType));
            }
        }
        return vars;
    }
    analyzeUsageStructDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let usages = [];
        let type = null;
        for (let i = children.length - 1; i >= 0; i--) {
            if (children[i].name === 'StructDecl') {
                type = this.analyzeStructDecl(context, program, children[i]);
                const typeDecl = new _instructions_TypeDeclInstruction__WEBPACK_IMPORTED_MODULE_49__["TypeDeclInstruction"]({ scope, sourceNode: children[i], type });
                addTypeDecl(context, scope, typeDecl);
            }
            else if (children[i].name === 'Usage') {
                const usage = this.analyzeUsage(children[i]);
                usages.push(usage);
            }
        }
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type));
        let varType = new _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"]({ scope, sourceNode, usages, type });
        return checkInstruction(context, varType, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    StructDecl
     *         T_PUNCTUATOR_125 = '}'
     *       + VariableDecl
     *       + VariableDecl
     *       + VariableDecl
     *         T_PUNCTUATOR_123 = '{'
     *         T_NON_TYPE_ID = 'S'
     *         T_KW_STRUCT = 'struct'
     *    Struct
     *         T_PUNCTUATOR_125 = '}'
     *       + VariableDecl
     *         T_PUNCTUATOR_123 = '{'
     *         T_KW_STRUCT = 'struct'
     */
    analyzeStruct(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let name = null;
        if (children[children.length - 2].name === 'T_NON_TYPE_ID') {
            name = children[children.length - 2].value;
        }
        let fields = [];
        program.push(_lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_Struct);
        for (let i = children.length - 4; i >= 1; i--) {
            if (children[i].name === 'VariableDecl') {
                fields = fields.concat(this.analyzeVariableDecl(context, program, children[i]));
            }
        }
        program.pop();
        const struct = new _instructions_ComplexTypeInstruction__WEBPACK_IMPORTED_MODULE_17__["ComplexTypeInstruction"]({ scope, sourceNode, fields, name });
        return checkInstruction(context, struct, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    FunctionDecl
     *       + StmtBlock
     *       + FunctionDef
     */
    /**
     * AST example:
     *    FunctionDecl
     *         T_PUNCTUATOR_59 = ';'
     *       + FunctionDef
     */
    /**
     * AST example:
     *    FunctionDecl
     *       + StmtBlock
     *       + Annotation
     *       + FunctionDef
     */
    analyzeFunctionDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const globalScope = program.globalScope;
        const lastNodeValue = children[0].value;
        let annotation = null;
        let implementation = null;
        program.push(_lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_Default);
        const attributes = [];
        while (children[children.length - 1 - attributes.length].name === 'Attribute') {
            attributes.push(this.analyzeAttribute(context, program, children[children.length - 1 - attributes.length]));
        }
        const definition = this.analyzeFunctionDef(context, program, children[children.length - 1 - attributes.length]);
        // looking for function with exact type signatures (that's why we cant use 'asRelaxedType' predicate here!)
        let func = globalScope.findFunction(definition.name, definition.params.map(asType));
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(func)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].CannotChooseFunction, { funcName: definition.name });
            program.pop();
            return null;
        }
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(func) && func.impl) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].FunctionRedefinition, { funcName: definition.name });
            program.pop();
            return null;
        }
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(func)) {
            if (!func.def.returnType.isEqual(definition.returnType)) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidFuncDefenitionReturnType, { funcName: definition.name });
                program.pop();
                return null;
            }
        }
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(context.funcDef === null);
        // TODO: rewrite context ?
        context.funcDef = definition;
        if (children.length === 3) {
            annotation = this.analyzeAnnotation(children[1]);
        }
        if (lastNodeValue !== ';') {
            // TODO: do to increase scope depth inside stmt block!!
            implementation = this.analyzeStmtBlock(context, program, children[0]);
        }
        program.pop();
        let hasVoidType = definition.returnType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_VOID"]);
        // validate unreachable code.
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(implementation)) {
            let stmtList = implementation.stmtList;
            // stmtList = stmtList.slice().reverse();
            for (let i = stmtList.length - 1; i >= 0; --i) {
                if (stmtList[i].instructionType == _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_ReturnStmt) {
                    if (i != stmtList.length - 1) {
                        context.error(stmtList[i + 1].sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].UnreachableCode);
                    }
                    break;
                }
            }
        }
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(scope == globalScope);
        func = new _instructions_FunctionDeclInstruction__WEBPACK_IMPORTED_MODULE_25__["FunctionDeclInstruction"]({ sourceNode, scope, definition, implementation, annotation, attributes });
        // NOTE: possible implicit replacement of function 
        //       without implementaion inside addFunction() call.
        if (!globalScope.addFunction(func)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].FunctionRedifinition, { funcName: definition.name });
        }
        if (!hasVoidType && !context.haveCurrentFunctionReturnOccur && !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(implementation)) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidFunctionReturnStmtNotFound, { funcName: definition.name });
        }
        return func;
    }
    /**
     * AST example:
     *    FunctionDef
     *       + ParamList
     *         T_NON_TYPE_ID = 'bar'
     *       + UsageType
     */
    analyzeFunctionDef(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const nameNode = children[children.length - 2];
        const name = nameNode.value;
        const retTypeNode = children[children.length - 1];
        let returnType = this.analyzeUsageType(context, program, retTypeNode);
        // TODO: is it really needed?
        if (returnType.isContainSampler()) {
            context.error(retTypeNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidFunctionReturnType, { funcName: name });
            return null;
        }
        let id = new _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_28__["IdInstruction"]({ scope, name, sourceNode: nameNode });
        let semantic = null;
        if (children.length === 4) {
            semantic = this.analyzeSemantic(children[0]);
        }
        let paramList = this.analyzeParamList(context, program, children[children.length - 3]);
        let funcDef = new _instructions_FunctionDefInstruction__WEBPACK_IMPORTED_MODULE_26__["FunctionDefInstruction"]({ scope, sourceNode, returnType, id, paramList, semantic });
        checkInstruction(context, funcDef, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return funcDef;
    }
    /**
     * AST example:
     *    ParamList
     *         T_PUNCTUATOR_41 = ')'
     *       + ParameterDecl
     *         T_PUNCTUATOR_44 = ','
     *       + ParameterDecl
     *         T_PUNCTUATOR_40 = '('
     */
    analyzeParamList(context, program, sourceNode) {
        const children = sourceNode.children;
        let paramList = [];
        for (let i = children.length - 2; i >= 1; i--) {
            if (children[i].name === 'ParameterDecl') {
                let param = this.analyzeParameterDecl(context, program, children[i]);
                paramList.push(param);
            }
        }
        return paramList;
    }
    /**
     * AST example:
     *    ParameterDecl
     *       + Variable
     *       + ParamUsageType
     */
    analyzeParameterDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const type = this.analyzeParamUsageType(context, program, children[1]);
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type)) {
            return null;
        }
        const param = this.analyzeVariable(context, program, children[0], type);
        return param;
    }
    /**
     * AST example:
     *    ParamUsageType
     *       + Type
     *       + ParamUsage
     */
    analyzeParamUsageType(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let usages = [];
        let type = null;
        for (let i = children.length - 1; i >= 0; i--) {
            if (children[i].name === 'Type') {
                type = this.analyzeType(context, program, children[i]);
                if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(type)) {
                    return null;
                }
            }
            else if (children[i].name === 'ParamUsage') {
                usages.push(this.analyzeUsage(children[i]));
            }
        }
        let paramType = new _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"]({ scope, sourceNode, type, usages });
        checkInstruction(context, paramType, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return paramType;
    }
    /**
     * AST example:
     *    StmtBlock
     *         T_PUNCTUATOR_125 = '}'
     *       + Stmt
     *       + Stmt
     *         T_PUNCTUATOR_123 = '{'
     */
    analyzeStmtBlock(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        if (!children) {
            return null;
        }
        let stmtList = [];
        for (let i = children.length - 2; i > 0; i--) {
            let stmt = this.analyzeStmt(context, program, children[i]);
            if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(stmt)) {
                stmtList.push(stmt);
            }
        }
        const stmtBlock = new _instructions_StmtBlockInstruction__WEBPACK_IMPORTED_MODULE_46__["StmtBlockInstruction"]({ sourceNode, scope, stmtList });
        checkInstruction(context, stmtBlock, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return stmtBlock;
    }
    analyzeStmt(context, program, sourceNode) {
        const children = sourceNode.children;
        let nonAttrNode = children.length;
        let nonAttrNodeName;
        do {
            nonAttrNodeName = children[--nonAttrNode].name;
        } while (nonAttrNodeName === 'Attribute');
        switch (nonAttrNodeName) {
            case 'SimpleStmt':
                return this.analyzeSimpleStmt(context, program, children[0]);
            case 'UseDecl':
                this.analyzeUseDecl(context, program, children[0]);
                return null;
            case 'T_KW_WHILE':
                return this.analyzeWhileStmt(context, program, sourceNode);
            case 'T_KW_FOR':
                return this.analyzeForStmt(context, program, sourceNode);
            case 'T_KW_IF':
                return this.analyzeIfStmt(context, program, sourceNode);
        }
        return null;
    }
    analyzeSimpleStmt(context, program, sourceNode) {
        const scope = program.currentScope;
        const children = sourceNode.children;
        const firstNodeName = children[children.length - 1].name;
        switch (firstNodeName) {
            case 'T_KW_RETURN':
                return this.analyzeReturnStmt(context, program, sourceNode);
            case 'T_KW_DO':
                return this.analyzeWhileStmt(context, program, sourceNode);
            case 'StmtBlock':
                {
                    program.push(_lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_Default);
                    let stmtBlock = this.analyzeStmtBlock(context, program, children[0]);
                    program.pop();
                    return stmtBlock;
                }
            case 'T_KW_DISCARD':
            case 'T_KW_BREAK':
            case 'T_KW_CONTINUE':
                return this.analyzeBreakStmt(context, program, sourceNode);
            case 'TypeDecl':
            case 'VariableDecl':
            case 'VarStructDecl':
                return this.analyzeDeclStmt(context, program, children[0]);
            default:
                if (children.length === 2) {
                    return this.analyzeExprStmt(context, program, sourceNode);
                }
                return new _instructions_SemicolonStmtInstruction__WEBPACK_IMPORTED_MODULE_45__["SemicolonStmtInstruction"]({ sourceNode, scope });
        }
    }
    /**
     * AST example:
     *    SimpleStmt
     *         T_PUNCTUATOR_59 = ';'
     *         T_NON_TYPE_ID = 'y'
     *         T_KW_RETURN = 'return'
     */
    analyzeReturnStmt(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(context.func);
        const funcReturnType = context.funcDef.returnType;
        context.haveCurrentFunctionReturnOccur = true;
        if (children.length === 2) {
            tryResolveProxyType(funcReturnType, _SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_VOID"]);
        }
        if (funcReturnType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_VOID"]) && children.length === 3) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidReturnStmtVoid);
            return null;
        }
        else if (!funcReturnType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_VOID"]) && children.length === 2) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidReturnStmtEmpty);
            return null;
        }
        let expr = null;
        if (children.length === 3) {
            expr = this.analyzeExpr(context, program, children[1]);
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(expr)) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidReturnStmtTypesNotEqual);
                return null;
            }
            tryResolveProxyType(funcReturnType, expr.type);
            if (!funcReturnType.isEqual(expr.type)) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidReturnStmtTypesNotEqual);
                return null;
            }
        }
        const returnStmtInstruction = new _instructions_ReturnStmtInstruction__WEBPACK_IMPORTED_MODULE_42__["ReturnStmtInstruction"]({ sourceNode, scope, expr });
        checkInstruction(context, returnStmtInstruction, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return returnStmtInstruction;
    }
    /**
     * AST example:
     *    SimpleStmt
     *         T_PUNCTUATOR_59 = ';'
     *         T_KW_BREAK = 'break'
     */
    analyzeBreakStmt(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const operator = children[1].value;
        if (operator === 'discard' && !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(context.funcDef)) {
            // context.currentFunction.vertex = (false);
        }
        const breakStmtInstruction = new _instructions_BreakStmtInstruction__WEBPACK_IMPORTED_MODULE_13__["BreakStmtInstruction"]({ sourceNode, scope, operator });
        checkInstruction(context, breakStmtInstruction, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return breakStmtInstruction;
    }
    /**
     * AST example:
     *    VariableDecl
     *         T_PUNCTUATOR_59 = ';'
     *       + Variable
     *         T_PUNCTUATOR_44 = ','
     *       + Variable
     *         T_PUNCTUATOR_44 = ','
     *       + Variable
     *       + UsageType
     */
    analyzeDeclStmt(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const nodeName = sourceNode.name;
        let declList = [];
        switch (nodeName) {
            case 'TypeDecl':
                declList.push(this.analyzeTypeDecl(context, program, sourceNode));
                break;
            case 'VariableDecl':
                declList = declList.concat(this.analyzeVariableDecl(context, program, sourceNode));
                break;
            case 'VarStructDecl':
                declList = declList.concat(this.analyzeVarStructDecl(context, program, sourceNode));
                break;
        }
        const declStmtInstruction = new _instructions_DeclStmtInstruction__WEBPACK_IMPORTED_MODULE_20__["DeclStmtInstruction"]({ sourceNode, scope, declList });
        checkInstruction(context, declStmtInstruction, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return declStmtInstruction;
    }
    analyzeExprStmt(context, program, sourceNode) {
        const scope = program.currentScope;
        const children = sourceNode.children;
        const expr = this.analyzeExpr(context, program, children[1]);
        const exprStmt = new _instructions_ExprStmtInstruction__WEBPACK_IMPORTED_MODULE_21__["ExprStmtInstruction"]({ sourceNode, scope, expr });
        checkInstruction(context, exprStmt, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return exprStmt;
    }
    /**
     * AST example:
     *    Stmt
     *       + Stmt
     *         T_PUNCTUATOR_41 = ')'
     *         T_UINT = '1'
     *         T_PUNCTUATOR_40 = '('
     *         T_KW_WHILE = 'while'
     *    SimpleStmt
     *         T_PUNCTUATOR_59 = ';'
     *         T_PUNCTUATOR_41 = ')'
     *         T_UINT = '1'
     *         T_PUNCTUATOR_40 = '('
     *         T_KW_WHILE = 'while'
     *       + Stmt
     *         T_KW_DO = 'do'
     */
    analyzeWhileStmt(context, program, sourceNode) {
        const scope = program.currentScope;
        const children = sourceNode.children;
        const isDoWhile = (children[children.length - 1].value === 'do');
        const isNonIfStmt = (sourceNode.name === 'NonIfStmt') ? true : false;
        const boolType = _SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_BOOL"];
        let cond = null;
        let conditionType = null;
        let body = null;
        let operator = "do";
        if (isDoWhile) {
            operator = "do";
            cond = this.analyzeExpr(context, program, children[2]);
            conditionType = cond.type;
            if (!conditionType.isEqual(boolType)) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidDoWhileCondition, { typeName: String(conditionType) });
                return null;
            }
            body = this.analyzeStmt(context, program, children[0]);
        }
        else {
            operator = "while";
            cond = this.analyzeExpr(context, program, children[2]);
            conditionType = cond.type;
            if (!conditionType.isEqual(boolType)) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidWhileCondition, { typeName: String(conditionType) });
                return null;
            }
            if (isNonIfStmt) {
                body = this.analyzeNonIfStmt(context, program, children[0]);
            }
            else {
                body = this.analyzeStmt(context, program, children[0]);
            }
        }
        const whileStmt = new _instructions_WhileStmtInstruction__WEBPACK_IMPORTED_MODULE_53__["WhileStmtInstruction"]({ sourceNode, scope, cond, body, operator });
        checkInstruction(context, whileStmt, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return whileStmt;
    }
    /**
     * AST example:
     *    Attribute
     *         T_PUNCTUATOR_93 = ']'
     *         T_PUNCTUATOR_41 = ')'
     *         T_UINT = '3'
     *         T_PUNCTUATOR_44 = ','
     *         T_UINT = '2'
     *         T_PUNCTUATOR_44 = ','
     *         T_UINT = '1'
     *         T_PUNCTUATOR_40 = '('
     *         T_NON_TYPE_ID = 'loop'
     *         T_PUNCTUATOR_91 = '['
     */
    analyzeAttribute(context, program, sourceNode) {
        const scope = program.currentScope;
        const children = sourceNode.children;
        const name = children[children.length - 2].value;
        let args = null;
        if (children.length > 3) {
            let argumentExpr = null;
            args = [];
            for (let i = children.length - 4; i > 1; i--) {
                if (children[i].value !== ',') {
                    argumentExpr = this.analyzeSimpleExpr(context, program, children[i]);
                    // TODO: emit diagnostics error
                    Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(argumentExpr.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_BoolExpr ||
                        argumentExpr.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_FloatExpr ||
                        argumentExpr.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EInstructionTypes"].k_IntExpr);
                    args.push(argumentExpr);
                }
            }
        }
        return new _instructions_AttributeInstruction__WEBPACK_IMPORTED_MODULE_11__["AttributeInstruction"]({ scope, sourceNode, name, args });
    }
    /**
     * AST example:
     *    Stmt
     *       + Stmt
     *         T_KW_ELSE = 'else'
     *       + NonIfStmt
     *         T_PUNCTUATOR_41 = ')'
     *         T_UINT = '1'
     *         T_PUNCTUATOR_40 = '('
     *         T_KW_IF = 'if'
     *       + Attribute
     *       + Attribute
     */
    analyzeIfStmt(context, program, sourceNode) {
        const scope = program.currentScope;
        const children = sourceNode.children;
        let attributes = [];
        while (children[children.length - 1 - attributes.length].name === 'Attribute') {
            attributes.push(this.analyzeAttribute(context, program, children[children.length - 1 - attributes.length]));
        }
        const isIfElse = (children.length - attributes.length === 7);
        const cond = this.analyzeExpr(context, program, children[children.length - 3 - attributes.length]);
        if (!cond || !cond.type.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_BOOL"])) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidIfCondition, { typeName: cond ? String(cond.type) : '[unknown]' });
        }
        let conseq = null;
        let contrary = null;
        if (isIfElse) {
            conseq = this.analyzeNonIfStmt(context, program, children[2]);
            contrary = this.analyzeStmt(context, program, children[0]);
        }
        else {
            conseq = this.analyzeNonIfStmt(context, program, children[0]);
        }
        if (!cond) {
            return null;
        }
        const ifStmt = new _instructions_IfStmtInstruction__WEBPACK_IMPORTED_MODULE_29__["IfStmtInstruction"]({ sourceNode, scope, cond, conseq, contrary, attributes });
        checkInstruction(context, ifStmt, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return ifStmt;
    }
    /**
     * AST example:
     *    NonIfStmt
     *       + SimpleStmt
     */
    analyzeNonIfStmt(context, program, sourceNode) {
        const children = sourceNode.children;
        const firstNodeName = children[children.length - 1].name;
        switch (firstNodeName) {
            case 'SimpleStmt':
                return this.analyzeSimpleStmt(context, program, children[0]);
            case 'T_KW_WHILE':
                return this.analyzeWhileStmt(context, program, sourceNode);
            case 'T_KW_FOR':
                return this.analyzeForStmt(context, program, sourceNode);
        }
        return null;
    }
    analyzeForStmt(context, program, sourceNode) {
        const scope = program.currentScope;
        const children = sourceNode.children;
        const isNonIfStmt = (sourceNode.name === 'NonIfStmt');
        let body = null;
        let init = null;
        let cond = null;
        let step = null;
        if (children[1].name === 'ERROR') {
            return null;
        }
        program.push();
        init = this.analyzeForInit(context, program, children[children.length - 3]);
        cond = this.analyzeForCond(context, program, children[children.length - 4]);
        step = null;
        if (children.length === 7) {
            step = this.analyzeForStep(context, program, children[2]);
        }
        if (isNonIfStmt) {
            body = this.analyzeNonIfStmt(context, program, children[0]);
        }
        else {
            body = this.analyzeStmt(context, program, children[0]);
        }
        program.pop();
        const pForStmtInstruction = new _instructions_ForStmtInstruction__WEBPACK_IMPORTED_MODULE_23__["ForStmtInstruction"]({ sourceNode, scope, init, cond, step, body });
        checkInstruction(context, pForStmtInstruction, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
        return pForStmtInstruction;
    }
    /**
     * AST example:
     *    ForInit
     *         T_PUNCTUATOR_59 = ';'
     *       + AssignmentExpr
     *    ForInit
     *       + VariableDecl
     *    ForInit
     *         T_PUNCTUATOR_59 = ';'
     *       + Expr
     */
    analyzeForInit(context, program, sourceNode) {
        const children = sourceNode.children;
        const firstNodeName = children[children.length - 1].name;
        switch (firstNodeName) {
            case 'VariableDecl':
                // TODO: fixme!! 
                // add support for expressions like "a = 1, b = 2, c = 3"
                return this.analyzeVariableDecl(context, program, children[0])[0] || null;
            case 'Expr':
                // TODO: fixme!! 
                // add support for expressions like "a = 1, b = 2, c = 3"
                return this.analyzeExpr(context, program, children[0]);
        }
        // ForInit : ';'
        return null;
    }
    /**
     * AST example:
     *    ForCond
     *         T_PUNCTUATOR_59 = ';'
     *       + RelationalExpr
     */
    analyzeForCond(context, program, sourceNode) {
        const children = sourceNode.children;
        if (children.length === 1) {
            return null;
        }
        return this.analyzeExpr(context, program, children[1]);
    }
    /**
     * AST example:
     *    ForStep
     *       + UnaryExpr
     */
    analyzeForStep(context, program, sourceNode) {
        const children = sourceNode.children;
        if (children.length == 0) {
            return null;
        }
        const step = this.analyzeExpr(context, program, children[0]);
        return step;
    }
    analyzeTechniqueDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const name = this.analyzeComplexName(children[children.length - 2]);
        // Specifies whether name should be interpreted as globalNamespace.name or just a name;
        const isComplexName = children[children.length - 2].children.length !== 1;
        const scope = program.currentScope;
        let annotation = null;
        let semantic = null;
        let passList = null;
        let techniqueType = _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ETechniqueType"].k_BasicFx;
        for (let i = children.length - 3; i >= 0; i--) {
            if (children[i].name === 'Annotation') {
                annotation = this.analyzeAnnotation(children[i]);
            }
            else if (children[i].name === 'Semantic') {
                semantic = this.analyzeSemantic(children[i]);
            }
            else {
                passList = this.analyzeTechnique(context, program, children[i]);
            }
        }
        const technique = new _instructions_TechniqueInstruction__WEBPACK_IMPORTED_MODULE_48__["TechniqueInstruction"]({ sourceNode, name, techniqueType, semantic, annotation, passList, scope });
        Analyzer.addTechnique(context, program, technique);
        return technique;
    }
    /**
     * AST example:
     *    TechniqueBody
     *         T_PUNCTUATOR_125 = '}'
     *       + PassDecl
     *       + PassDecl
     *         T_PUNCTUATOR_123 = '{'
     */
    analyzeTechnique(context, program, sourceNode) {
        const children = sourceNode.children;
        let passList = [];
        for (let i = children.length - 2; i >= 1; i--) {
            let pass = this.analyzePassDecl(context, program, children[i]);
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(pass));
            passList.push(pass);
        }
        return passList;
    }
    /**
     * AST example:
     *    PassDecl
     *       + PassStateBlock
     *       + Annotation
     *         T_NON_TYPE_ID = 'name'
     *         T_KW_PASS = 'pass'
     */
    analyzePassDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const entry = this.analyzePassStateBlockForShaders(context, program, children[0]);
        const renderStates = this.analyzePassStateBlock(context, program, children[0]);
        let id = null;
        for (let i = 0; i < children.length; ++i) {
            if (children[i].name === "T_NON_TYPE_ID") {
                let name = children[i].value;
                id = new _instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_28__["IdInstruction"]({ scope, name });
            }
        }
        const pass = new _instructions_PassInstruction__WEBPACK_IMPORTED_MODULE_35__["PassInstruction"]({
            scope,
            sourceNode,
            renderStates,
            id,
            pixelShader: entry.pixel,
            vertexShader: entry.vertex
        });
        //TODO: add annotation and id
        return pass;
    }
    /**
     * AST example:
     *    PassState
     *         T_PUNCTUATOR_59 = ';'
     *       + PassStateExpr
     *         T_PUNCTUATOR_61 = '='
     *         T_NON_TYPE_ID = 'VertexShader'
     */
    analyzePassStateBlockForShaders(context, program, sourceNode) {
        const children = sourceNode.children;
        let pixel = null;
        let vertex = null;
        const supportedTypeNames = ['vertexshader', 'pixelshader'];
        for (let i = children.length - 2; i >= 1; i--) {
            let func = null;
            const childrenIth = children[i].children;
            const shaderTypeName = childrenIth[childrenIth.length - 1].value.toLowerCase();
            if (supportedTypeNames.indexOf(shaderTypeName) === -1) {
                continue;
            }
            func = this.analyzePassStateForShader(context, program, children[i], shaderTypeName);
            if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(func)) {
                switch (shaderTypeName) {
                    case 'vertexshader':
                        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(vertex == null);
                        vertex = func;
                        break;
                    case 'pixelshader':
                        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(pixel == null);
                        pixel = func;
                        break;
                    default:
                        // TODO: make error!
                        console.error('function is not suitable as shader entry point');
                }
            }
        }
        return { vertex, pixel };
    }
    analyzePassStateForShader(context, program, sourceNode, shaderType) {
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(shaderType === 'vertexshader' || shaderType === 'pixelshader');
        const children = sourceNode.children;
        const stateExprNode = children[children.length - 3];
        const exprNode = stateExprNode.children[stateExprNode.children.length - 1];
        const compileExpr = this.analyzeExpr(context, program, exprNode);
        const shaderFunc = compileExpr.function;
        if (shaderType === 'vertexshader') {
            if (!checkForVertexUsage(shaderFunc.def)) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].FunctionIsNotCompatibleWithVertexShader, { funcDef: String(shaderFunc) });
            }
        }
        else {
            if (!checkForPixelUsage(shaderFunc.def)) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].FunctionIsNotCompatibleWithPixelShader, { funcDef: String(shaderFunc) });
            }
        }
        return shaderFunc;
    }
    /**
     * AST example:
     *    PassStateBlock
     *         T_PUNCTUATOR_125 = '}'
     *       + PassState
     *       + PassState
     *       + PassState
     *         T_PUNCTUATOR_123 = '{'
     */
    analyzePassStateBlock(context, program, sourceNode) {
        const children = sourceNode.children;
        let states = {};
        for (let i = children.length - 2; i >= 1; i--) {
            states = { ...states, ...this.analyzePassState(context, program, children[i]) };
        }
        return states;
    }
    /**
     * AST example:
     *    PassState
     *         T_PUNCTUATOR_59 = ';'
     *       + PassStateExpr
     *         T_PUNCTUATOR_61 = '='
     *         T_NON_TYPE_ID = 'ZWRITE'
     */
    analyzePassState(context, program, sourceNode) {
        const children = sourceNode.children;
        const stateType = children[children.length - 1].value.toUpperCase();
        const stateName = _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"][stateType] || null;
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(stateName)) {
            return {};
        }
        const stateExprNode = children[children.length - 3];
        const exprNode = stateExprNode.children[stateExprNode.children.length - 1];
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(exprNode.value)) {
            console.warn('Pass state is incorrect.'); // TODO: move to warnings
            return {};
        }
        let renderStates = {};
        if (exprNode.value === '{' && stateExprNode.children.length > 3) {
            const values = new Array(Math.ceil((stateExprNode.children.length - 2) / 2));
            for (let i = stateExprNode.children.length - 2, j = 0; i >= 1; i -= 2, j++) {
                values[j] = getRenderStateValue(stateName, stateExprNode.children[i].value.toUpperCase());
            }
            switch (stateName) {
                case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDFUNC:
                    if (values.length !== 2) {
                        console.warn('Pass state are incorrect.');
                        return {};
                    }
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLENDCOLOR] = values[0];
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLENDALPHA] = values[0];
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLENDCOLOR] = values[1];
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLENDALPHA] = values[1];
                    break;
                case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDFUNCSEPARATE:
                    if (values.length !== 4) {
                        console.warn('Pass state are incorrect.');
                        return {};
                    }
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLENDCOLOR] = values[0];
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLENDALPHA] = values[2];
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLENDCOLOR] = values[1];
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLENDALPHA] = values[3];
                    break;
                case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATIONSEPARATE:
                    if (values.length !== 2) {
                        console.warn('Pass state are incorrect.');
                        return {};
                    }
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATIONCOLOR] = values[0];
                    renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATIONALPHA] = values[1];
                    break;
                default:
                    console.warn('Pass state is incorrect.');
                    return {};
            }
        }
        else {
            let value = '';
            if (exprNode.value === '{') {
                value = stateExprNode.children[1].value.toUpperCase();
            }
            else {
                value = exprNode.value.toUpperCase();
            }
            const stateValue = getRenderStateValue(stateName, value);
            if (stateValue !== _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_3__["ERenderStateValues"].UNDEF) {
                switch (stateName) {
                    case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLEND:
                        renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLENDCOLOR] = stateValue;
                        renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].SRCBLENDALPHA] = stateValue;
                        break;
                    case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLEND:
                        renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLENDCOLOR] = stateValue;
                        renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].DESTBLENDALPHA] = stateValue;
                        break;
                    case _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATION:
                        renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATIONCOLOR] = stateValue;
                        renderStates[_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_2__["ERenderStates"].BLENDEQUATIONALPHA] = stateValue;
                        break;
                    default:
                        renderStates[stateName] = stateValue;
                        break;
                }
            }
        }
        return renderStates;
    }
    /**
     * AST example:
     *    ImportDecl
     *         T_PUNCTUATOR_59 = ';'
     *       + ComplexNameOpt
     *         T_KW_IMPORT = 'import'
     */
    // TODO: restore functionality! 
    analyzeImportDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const componentName = this.analyzeComplexName(children[children.length - 2]);
        // if (!isNull(technique)) {
        //     //We can import techniques from the same file, but on this stage they don`t have component yet.
        //     //So we need special mehanism to add them on more belated stage
        //     // let sShortedComponentName: string = componentName;
        //     if (!isNull(context.moduleName)) {
        //         // sShortedComponentName = componentName.replace(_sProvideNameSpace + ".", "");
        //     }
        //     throw null;
        //     // let pTechniqueFromSameEffect: ITechniqueInstruction = _pTechniqueMap[componentName] || _pTechniqueMap[sShortedComponentName];
        //     // if (isDefAndNotNull(pTechniqueFromSameEffect)) {
        //     //     technique._addTechniqueFromSameEffect(pTechniqueFromSameEffect, iShift);
        //     //     return;
        //     // }
        // }
        const sourceTechnique = null; //fx.techniques[componentName];
        if (!sourceTechnique) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].ImportedComponentNotExists, { componentName: componentName });
            return null;
        }
        return null;
    }
    /**
     * AST example:
     *    StructDecl
     *         T_PUNCTUATOR_125 = '}'
     *       + VariableDecl
     *         T_PUNCTUATOR_123 = '{'
     *         T_NON_TYPE_ID = 'S'
     *         T_KW_STRUCT = 'struct'
     */
    analyzeStructDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        const name = children[children.length - 2].value;
        program.push(_lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["EScopeType"].k_Struct);
        let fields = [];
        for (let i = children.length - 4; i >= 1; i--) {
            if (children[i].name === 'VariableDecl') {
                fields = fields.concat(this.analyzeVariableDecl(context, program, children[i]));
            }
        }
        program.pop();
        const struct = new _instructions_ComplexTypeInstruction__WEBPACK_IMPORTED_MODULE_17__["ComplexTypeInstruction"]({ scope, sourceNode, name, fields });
        return checkInstruction(context, struct, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    /**
     * AST example:
     *    TypeDecl
     *         T_PUNCTUATOR_59 = ';'
     *       + StructDecl
     */
    analyzeTypeDecl(context, program, sourceNode) {
        const children = sourceNode.children;
        const scope = program.currentScope;
        let type = null;
        if (children.length === 2) {
            type = this.analyzeStructDecl(context, program, children[1]);
        }
        else {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].UnsupportedTypeDecl);
        }
        let typeDecl = new _instructions_TypeDeclInstruction__WEBPACK_IMPORTED_MODULE_49__["TypeDeclInstruction"]({ scope, sourceNode, type });
        addTypeDecl(context, scope, typeDecl);
        return checkInstruction(context, typeDecl, _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_4__["ECheckStage"].CODE_TARGET_SUPPORT);
    }
    analyzeUnknDecl(context, program, sourceNode) {
        switch (sourceNode.name) {
            case 'TechniqueDecl':
                return [this.analyzeTechniqueDecl(context, program, sourceNode)];
            case 'UseDecl':
                this.analyzeUseDecl(context, program, sourceNode); // << always 'use strict' by default!
                return null;
            case 'ImportDecl':
                return [this.analyzeImportDecl(context, program, sourceNode)];
            case 'ProvideDecl':
                return [this.analyzeProvideDecl(context, program, sourceNode)];
            case 'TypeDecl':
                return [this.analyzeTypeDecl(context, program, sourceNode)];
            case 'VariableDecl':
                return this.analyzeVariableDecl(context, program, sourceNode);
            case 'VarStructDecl':
                return this.analyzeVarStructDecl(context, program, sourceNode);
            case 'FunctionDecl':
                Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(program.currentScope == program.globalScope);
                let fdecl = null;
                context.beginFunc();
                fdecl = this.analyzeFunctionDecl(context, program, sourceNode);
                context.endFunc();
                return [fdecl];
        }
        return null;
    }
    analyzeGlobals(context, program, slastDocument) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(slastDocument) || Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(slastDocument.root)) {
            return null;
        }
        const children = slastDocument.root.children;
        let globals = [];
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(children)) {
            return [];
        }
        for (let i = children.length - 1; i >= 0; i--) {
            globals.push(...(this.analyzeUnknDecl(context, program, children[i]) || []));
        }
        return globals.filter(decl => !!decl);
    }
    createContext(uri) {
        return new Context(uri);
    }
    createProgram(document = null) {
        let parent = _SystemScope__WEBPACK_IMPORTED_MODULE_55__["SCOPE"];
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(document)) {
            parent = document.root.scope;
        }
        return new _ProgramScope__WEBPACK_IMPORTED_MODULE_54__["ProgramScope"](parent);
    }
    /**
     * Post-analysis validation.
     */
    validate(context, program, root) {
        checkFunctionsForRecursion(context, program);
        program.validate();
    }
    async parse(slastDocument, document) {
        const uri = slastDocument.uri;
        // console.time(`analyze(${uri})`);
        const program = this.createProgram(document);
        const context = this.createContext(uri);
        let instructions = null;
        try {
            instructions = this.analyzeGlobals(context, program, slastDocument);
        }
        catch (e) {
            // critical errors were occured
            // throw e;
            console.error(e);
        }
        // console.timeEnd(`analyze(${uri})`);
        const root = new _instructions_InstructionCollector__WEBPACK_IMPORTED_MODULE_32__["InstructionCollector"]({ scope: program.globalScope, instructions });
        this.validate(context, program, root);
        const diagnosticReport = _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_5__["Diagnostics"].mergeReports([slastDocument.diagnosticReport, context.diagnostics.resolve()]);
        return { root, diagnosticReport, uri };
    }
    // function addFunctionDecl(context: Context, program: ProgramScope, sourceNode: IParseNode, func: IFunctionDeclInstruction): void {
    //     if (isSystemFunction(func)) {
    //         context.error(sourceNode, EErrors.SystemFunctionRedefinition, { funcName: func.name });
    //     }
    //     let isFunctionAdded: boolean = program.addFunction(func);
    //     if (!isFunctionAdded) {
    //         context.error(sourceNode, EErrors.FunctionRedifinition, { funcName: func.name });
    //     }
    // }
    static addTechnique(context, program, technique) {
        let name = technique.name;
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(program.globalScope.findTechnique(name))) {
            context.error(technique.sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].TechniqueNameRedefinition, { techName: name });
            return;
        }
        program.globalScope.addTechnique(technique);
    }
    /**
    * Check the possibility of using the operator between the two types.
    * Returns the type obtained as a result of application of the operator, or, if it is impossible to apply, null.
     *
     * @operator {string} One of the operators: + - * / % += -= *= /= %= = < > <= >= == != =
     * @leftType {IVariableTypeInstruction} Type of the left side of the expression.
     * @rightType {IVariableTypeInstruction} Type of the right side of the expression.
     */
    static checkTwoOperandExprTypes(context, operator, leftType, rightType, leftSourceNode = leftType.sourceNode, rightSourceNode = rightType.sourceNode) {
        if (!leftType || !rightType) {
            return null;
        }
        const isComplex = leftType.isComplex() || rightType.isComplex();
        const isArray = leftType.isNotBaseArray() || rightType.isNotBaseArray();
        const isSampler = _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isSamplerType"](leftType) || _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isSamplerType"](rightType);
        const boolType = _SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_BOOL"];
        // const constBoolType = VariableTypeInstruction.wrapAsConst(T_BOOL, SystemScope.SCOPE);
        if (isArray || isSampler) {
            return null;
        }
        if (operator === '%' || operator === '%=') {
            return null;
        }
        if (Analyzer.isAssignmentOperator(operator)) {
            if (!leftType.writable) {
                context.error(leftSourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForWriting);
                return null;
            }
            if (!rightType.readable) {
                context.error(rightSourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
                return null;
            }
            if (operator !== '=' && !leftType.readable) {
                context.error(leftSourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
            }
        }
        else {
            if (!leftType.readable) {
                context.error(leftSourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
                return null;
            }
            if (!rightType.readable) {
                context.error(rightSourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
                return null;
            }
        }
        if (isComplex) {
            if (operator === '=' && leftType.isEqual(rightType)) {
                return leftType;
            }
            // samplers and arrays can't be compared directly
            else if (Analyzer.isEqualOperator(operator) && !leftType.isContainArray() && !leftType.isContainSampler()) {
                return boolType;
            }
            else {
                return null;
            }
        }
        // FIXME: use operands' scope instead of system scope?
        const leftBaseType = _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"].wrap(leftType.baseType, _SystemScope__WEBPACK_IMPORTED_MODULE_55__["SCOPE"]);
        const rightBaseType = _instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_52__["VariableTypeInstruction"].wrap(rightType.baseType, _SystemScope__WEBPACK_IMPORTED_MODULE_55__["SCOPE"]);
        if (leftType.isConst() && Analyzer.isAssignmentOperator(operator)) {
            // TODO: emit proper error
            return null;
        }
        if (leftType.isEqual(rightType)) {
            if (Analyzer.isArithmeticalOperator(operator)) {
                if (!_SystemScope__WEBPACK_IMPORTED_MODULE_55__["isMatrixType"](leftType) || (operator !== '/' && operator !== '/=')) {
                    return leftBaseType;
                }
                else {
                    return null;
                }
            }
            else if (Analyzer.isRelationalOperator(operator)) {
                if (_SystemScope__WEBPACK_IMPORTED_MODULE_55__["isScalarType"](leftType)) {
                    return boolType;
                }
                else {
                    return null;
                }
            }
            else if (Analyzer.isEqualOperator(operator)) {
                return boolType;
            }
            else if (operator === '=') {
                return leftBaseType;
            }
            else {
                return null;
            }
        }
        // temp workaround for INT/UINT comparison
        if (Analyzer.isRelationalOperator(operator)) {
            if ((leftType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_UINT"]) && rightType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_INT"])) ||
                (leftType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_INT"]) && rightType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_UINT"]))) {
                return boolType;
            }
        }
        if (Analyzer.isArithmeticalOperator(operator)) {
            if (_SystemScope__WEBPACK_IMPORTED_MODULE_55__["isBoolBasedType"](leftType) || _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isBoolBasedType"](rightType) ||
                _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isFloatBasedType"](leftType) !== _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isFloatBasedType"](rightType) ||
                _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isIntBasedType"](leftType) !== _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isIntBasedType"](rightType) ||
                _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isUIntBasedType"](leftType) !== _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isUIntBasedType"](rightType)) {
                return null;
            }
            if (_SystemScope__WEBPACK_IMPORTED_MODULE_55__["isScalarType"](leftType)) {
                return rightBaseType;
            }
            if (_SystemScope__WEBPACK_IMPORTED_MODULE_55__["isScalarType"](rightType)) {
                return leftBaseType;
            }
            if (operator === '*' || operator === '*=') {
                if (_SystemScope__WEBPACK_IMPORTED_MODULE_55__["isMatrixType"](leftType) && _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isVectorType"](rightType) &&
                    leftType.length === rightType.length) {
                    return rightBaseType;
                }
                else if (_SystemScope__WEBPACK_IMPORTED_MODULE_55__["isMatrixType"](rightType) && _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isVectorType"](leftType) &&
                    leftType.length === rightType.length) {
                    return leftBaseType;
                }
                else {
                    return null;
                }
            }
        }
        if (operator === '=') {
            // TODO: move conversion logic inside TypeInstruction.
            if ((leftType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_INT"]) && rightType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_UINT"])) ||
                (leftType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_UINT"]) && rightType.isEqual(_SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_INT"]))) {
                return leftType;
            }
        }
        return null;
    }
    /**
     * Проверят возможность использования оператора к типу данных.
     * Возращает тип получаемый в результате приминения опрератора, или, если применить его невозможно - null.
     *
     * @operator {string} Один из операторов: + - ! ++ --
     * @leftType {IVariableTypeInstruction} Тип операнда
     */
    static checkOneOperandExprType(context, sourceNode, operator, type) {
        const isComplex = type.isComplex();
        const isArray = type.isNotBaseArray();
        const isSampler = _SystemScope__WEBPACK_IMPORTED_MODULE_55__["isSamplerType"](type);
        if (isComplex || isArray || isSampler) {
            return null;
        }
        if (!type.readable) {
            context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForReading);
            return null;
        }
        if (operator === '++' || operator === '--') {
            if (!type.writable) {
                context.error(sourceNode, _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidTypeForWriting);
                return null;
            }
            return type;
        }
        if (operator === '!') {
            const boolType = _SystemScope__WEBPACK_IMPORTED_MODULE_55__["T_BOOL"];
            // validate(boolType, EInstructionTypes.k_VariableDecl);
            if (type.isEqual(boolType)) {
                return boolType;
            }
            else {
                return null;
            }
        }
        else {
            if (_SystemScope__WEBPACK_IMPORTED_MODULE_55__["isBoolBasedType"](type)) {
                return null;
            }
            else {
                return type.baseType; // << TODO: fixme!!!! remove "any"!
            }
        }
        return null;
    }
    static isAssignmentOperator(operator) {
        return operator === '+=' || operator === '-=' ||
            operator === '*=' || operator === '/=' ||
            operator === '%=' || operator === '=';
    }
    static isArithmeticalOperator(operator) {
        return operator === '+' || operator === '+=' ||
            operator === '-' || operator === '-=' ||
            operator === '*' || operator === '*=' ||
            operator === '/' || operator === '/=';
    }
    static isRelationalOperator(operator) {
        return operator === '>' || operator === '>=' ||
            operator === '<' || operator === '<=';
    }
    static isEqualOperator(operator) {
        return operator === '==' || operator === '!=';
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "O8iw":
/*!********************************!*\
  !*** ./src/lib/fx/SLParser.ts ***!
  \********************************/
/*! exports provided: SLParser, defaultSLGrammar, defaultSLParser, createDefaultSLParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLParser", function() { return SLParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSLGrammar", function() { return defaultSLGrammar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSLParser", function() { return defaultSLParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultSLParser", function() { return createDefaultSLParser; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/parser/IParser */ "LhMq");
/* harmony import */ var _lib_parser_AbstractParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/parser/AbstractParser */ "7vWe");
/* harmony import */ var raw_loader_HLSL_gr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raw-loader!./HLSL.gr */ "yosG");




class SLParser extends _lib_parser_AbstractParser__WEBPACK_IMPORTED_MODULE_2__["AbstractParser"] {
    init({ grammar = raw_loader_HLSL_gr__WEBPACK_IMPORTED_MODULE_3__["default"], type = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_1__["EParserType"].k_LALR, flags = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_1__["EParserFlags"].k_Default }) {
        super.init({ grammar, type, flags });
    }
}
let paramsDefault = null;
let parserDefault = null;
function defaultSLGrammar() {
    return raw_loader_HLSL_gr__WEBPACK_IMPORTED_MODULE_3__["default"];
}
function defaultSLParser() {
    if (!parserDefault) {
        createDefaultSLParser();
    }
    return parserDefault;
}
/**
 * Internal debugging functionality, no need to use without necessary.
 */
function createDefaultSLParser(params = { grammar: raw_loader_HLSL_gr__WEBPACK_IMPORTED_MODULE_3__["default"] }) {
    if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["deepEqual"])(paramsDefault, params)) {
        return;
    }
    paramsDefault = params;
    parserDefault = new SLParser(params);
}


/***/ }),

/***/ "PKWX":
/*!****************************************************!*\
  !*** ./src/lib/fx/analisys/helpers/instruction.ts ***!
  \****************************************************/
/*! exports provided: instruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instruction", function() { return instruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");

var instruction;
(function (instruction) {
    instruction.UNDEFINE_LENGTH = 0xffffff;
    instruction.UNDEFINE_SIZE = 0xffffff;
    instruction.UNDEFINE_PADDING = 0xffffff;
    instruction.UNDEFINE_NAME = "undef";
    function isExpression(instr) {
        switch (instr.instructionType) {
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ConditionalExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ConstructorCallExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_AssignmentExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ArithmeticExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_InitExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_IdExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_FunctionCallExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_FloatExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_IntExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_BoolExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PostfixArithmeticExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PostfixIndexExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PostfixPointExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ComplexExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_CastExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_UnaryExpr:
                // todo: add other types!!!
                return true;
        }
        return false;
    }
    instruction.isExpression = isExpression;
    function isStatement(instr) {
        switch (instr.instructionType) {
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_Stmt:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_DeclStmt:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ReturnStmt:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_IfStmt:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_StmtBlock:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ExprStmt:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_WhileStmt:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ForStmt:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_BreakStmt:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_SemicolonStmt:
                // todo: add other types!!!
                return true;
        }
        return false;
    }
    instruction.isStatement = isStatement;
    function isLiteral(instr) {
        switch (instr.instructionType) {
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_IntExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_FloatExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_BoolExpr:
            case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_StringExpr:
                return true;
        }
        return false;
    }
    instruction.isLiteral = isLiteral;
})(instruction || (instruction = {}));


/***/ }),

/***/ "PLhK":
/*!**************************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/SamplerStateBlockInstruction.ts ***!
  \**************************************************************************/
/*! exports provided: SamplerStateBlockInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplerStateBlockInstruction", function() { return SamplerStateBlockInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/ITexture */ "gf1s");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Instruction */ "2b0+");






/**
  * Represetn sampler_state { states }
  */
class SamplerStateBlockInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_4__["ExprInstruction"] {
    constructor({ operator, params = [], ...settings }) {
        // todo: resolve type from texture type!
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_SamplerStateBlockExpr, type: _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__["T_SAMPLER"], ...settings });
        this._samplerParams = params.map(param => _Instruction__WEBPACK_IMPORTED_MODULE_5__["Instruction"].$withParent(param, this));
        this._operator = operator;
    }
    get texture() {
        let params = this._samplerParams;
        for (let i = 0; i < params.length; ++i) {
            if (params[i].name === "TEXTURE") {
                return params[i].value;
            }
        }
        return null;
    }
    get params() {
        return this._samplerParams;
    }
    get operator() {
        return this._operator;
    }
    isConst() {
        return true;
    }
    // todo: rewrite it!
    evaluate() {
        var samplerState = {
            textureName: "",
            wrap_s: 0,
            wrap_t: 0,
            mag_filter: 0,
            min_filter: 0
        };
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.texture)) {
            samplerState.textureName = this.texture.name;
        }
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._samplerParams)) {
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(this._samplerParams["ADDRESSU"])) {
                samplerState.wrap_s = SamplerStateBlockInstruction.convertWrapMode(this._samplerParams["ADDRESSU"]);
            }
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(this._samplerParams["ADDRESSV"])) {
                samplerState.wrap_t = SamplerStateBlockInstruction.convertWrapMode(this._samplerParams["ADDRESSV"]);
            }
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(this._samplerParams["MAGFILTER"])) {
                samplerState.mag_filter = SamplerStateBlockInstruction.convertFilters(this._samplerParams["MAGFILTER"]);
            }
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(this._samplerParams["MINFILTER"])) {
                samplerState.min_filter = SamplerStateBlockInstruction.convertFilters(this._samplerParams["MINFILTER"]);
            }
        }
        this._evalResult = samplerState;
        return true;
    }
    // TODO: move it to helpers
    static convertWrapMode(sState) {
        switch (sState) {
            case "WRAP":
                return _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__["ETextureWrapModes"].REPEAT;
            case "CLAMP":
                return _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__["ETextureWrapModes"].CLAMP_TO_EDGE;
            case "MIRROR":
                return _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__["ETextureWrapModes"].MIRRORED_REPEAT;
            default:
                return 0;
        }
    }
    // TODO: move it to helpers
    static convertFilters(sState) {
        switch (sState) {
            case "NEAREST":
                return _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__["ETextureFilters"].NEAREST;
            case "LINEAR":
                return _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__["ETextureFilters"].LINEAR;
            case "NEAREST_MIPMAP_NEAREST":
                return _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__["ETextureFilters"].NEAREST_MIPMAP_NEAREST;
            case "LINEAR_MIPMAP_NEAREST":
                return _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__["ETextureFilters"].LINEAR_MIPMAP_NEAREST;
            case "NEAREST_MIPMAP_LINEAR":
                return _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__["ETextureFilters"].NEAREST_MIPMAP_LINEAR;
            case "LINEAR_MIPMAP_LINEAR":
                return _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_3__["ETextureFilters"].LINEAR_MIPMAP_LINEAR;
            default:
                return 0;
        }
    }
}


/***/ }),

/***/ "PRU4":
/*!***************************************************!*\
  !*** ./node_modules/comlink/dist/esm/comlink.mjs ***!
  \***************************************************/
/*! exports provided: createEndpoint, expose, proxy, proxyMarker, releaseProxy, transfer, transferHandlers, windowEndpoint, wrap */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEndpoint", function() { return createEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expose", function() { return expose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyMarker", function() { return proxyMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseProxy", function() { return releaseProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transfer", function() { return transfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferHandlers", function() { return transferHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowEndpoint", function() { return windowEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const throwSet = new WeakSet();
const transferHandlers = new Map([
    [
        "proxy",
        {
            canHandle: obj => obj && obj[proxyMarker],
            serialize(obj) {
                const { port1, port2 } = new MessageChannel();
                expose(obj, port1);
                return [port2, [port2]];
            },
            deserialize: (port) => {
                port.start();
                return wrap(port);
            }
        }
    ],
    [
        "throw",
        {
            canHandle: obj => throwSet.has(obj),
            serialize(obj) {
                const isError = obj instanceof Error;
                let serialized = obj;
                if (isError) {
                    serialized = {
                        isError,
                        message: obj.message,
                        stack: obj.stack
                    };
                }
                return [serialized, []];
            },
            deserialize(obj) {
                if (obj.isError) {
                    throw Object.assign(new Error(), obj);
                }
                throw obj;
            }
        }
    ]
]);
function expose(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) {
            return;
        }
        const { id, type, path } = Object.assign({ path: [] }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop) => obj[prop], obj);
            const rawValue = path.reduce((obj, prop) => obj[prop], obj);
            switch (type) {
                case 0 /* GET */:
                    {
                        returnValue = rawValue;
                    }
                    break;
                case 1 /* SET */:
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;
                case 2 /* APPLY */:
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;
                case 3 /* CONSTRUCT */:
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;
                case 4 /* ENDPOINT */:
                    {
                        const { port1, port2 } = new MessageChannel();
                        expose(obj, port2);
                        returnValue = transfer(port1, [port1]);
                    }
                    break;
                case 5 /* RELEASE */:
                    {
                        returnValue = undefined;
                    }
                    break;
            }
        }
        catch (e) {
            returnValue = e;
            throwSet.add(e);
        }
        Promise.resolve(returnValue)
            .catch(e => {
            throwSet.add(e);
            return e;
        })
            .then(returnValue => {
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
            if (type === 5 /* RELEASE */) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
            }
        });
    });
    if (ep.start) {
        ep.start();
    }
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
        endpoint.close();
}
function wrap(ep) {
    return createProxy(ep);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) {
        throw new Error("Proxy has been released and is not useable");
    }
}
function createProxy(ep, path = []) {
    let isProxyReleased = false;
    const proxy = new Proxy(function () { }, {
        get(_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) {
                return () => {
                    return requestResponseMessage(ep, {
                        type: 5 /* RELEASE */,
                        path: path.map(p => p.toString())
                    }).then(() => {
                        closeEndPoint(ep);
                        isProxyReleased = true;
                    });
                };
            }
            if (prop === "then") {
                if (path.length === 0) {
                    return { then: () => proxy };
                }
                const r = requestResponseMessage(ep, {
                    type: 0 /* GET */,
                    path: path.map(p => p.toString())
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, [...path, prop]);
        },
        set(_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, {
                type: 1 /* SET */,
                path: [...path, prop].map(p => p.toString()),
                value
            }, transferables).then(fromWireValue);
        },
        apply(_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) {
                return requestResponseMessage(ep, {
                    type: 4 /* ENDPOINT */
                }).then(fromWireValue);
            }
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") {
                return createProxy(ep, path.slice(0, -1));
            }
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: 2 /* APPLY */,
                path: path.map(p => p.toString()),
                argumentList
            }, transferables).then(fromWireValue);
        },
        construct(_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: 3 /* CONSTRUCT */,
                path: path.map(p => p.toString()),
                argumentList
            }, transferables).then(fromWireValue);
        }
    });
    return proxy;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map(v => v[0]), myFlat(processed.map(v => v[1]))];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
}
function windowEndpoint(w, context = self) {
    return {
        postMessage: (msg, transferables) => w.postMessage(msg, "*", transferables),
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context)
    };
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
        if (handler.canHandle(value)) {
            const [serializedValue, transferables] = handler.serialize(value);
            return [
                {
                    type: 3 /* HANDLER */,
                    name,
                    value: serializedValue
                },
                transferables
            ];
        }
    }
    return [
        {
            type: 0 /* RAW */,
            value
        },
        transferCache.get(value) || []
    ];
}
function fromWireValue(value) {
    switch (value.type) {
        case 3 /* HANDLER */:
            return transferHandlers.get(value.name).deserialize(value.value);
        case 0 /* RAW */:
            return value.value;
    }
}
function requestResponseMessage(ep, msg, transfers) {
    return new Promise(resolve => {
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) {
                return;
            }
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) {
            ep.start();
        }
        ep.postMessage(Object.assign({ id }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join("-");
}


//# sourceMappingURL=comlink.mjs.map


/***/ }),

/***/ "QsPN":
/*!************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/IntInstruction.ts ***!
  \************************************************************/
/*! exports provided: IntInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntInstruction", function() { return IntInstruction; });
/* harmony import */ var _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/instructions/ExprInstruction */ "4AA8");
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/fx/analisys/instructions/VariableTypeInstruction */ "hljw");




class IntInstruction extends _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__["ExprInstruction"] {
    /**
     * EMPTY_OPERATOR EMPTY_ARGUMENTS
     */
    constructor({ value, signed, scope, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_IntExpr,
            // NOTE: type wraping is no really necessary, just for debug purposes 
            type: _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_3__["VariableTypeInstruction"].wrapAsConst(signed ? _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__["T_INT"] : _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__["T_UINT"], _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__["SCOPE"]), scope, ...settings });
        this.value = value;
        this.signed = signed;
        if (!signed) {
            this.value >>>= 0;
        }
    }
    toString() {
        // return `${this.value}${this.signed? '' : 'u'}`;
        return `${this.value}`;
    }
    toCode() {
        return this.toString();
    }
    evaluate() {
        this._evalResult = this.value;
        return true;
    }
    isConst() {
        return true;
    }
}


/***/ }),

/***/ "RTx6":
/*!*******************************************!*\
  !*** ./src/lib/fx/AnalyzerDiagnostics.ts ***!
  \*******************************************/
/*! exports provided: AnalyzerDiagnostics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzerDiagnostics", function() { return AnalyzerDiagnostics; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/EAnalyzerErrors */ "zioJ");
/* harmony import */ var _lib_idl_EAnalyzerWarnings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/EAnalyzerWarnings */ "a1Km");
/* harmony import */ var _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/IDiagnostics */ "zX2+");
/* harmony import */ var _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/util/Diagnostics */ "/zHR");





class AnalyzerDiagnostics extends _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_4__["Diagnostics"] {
    constructor() {
        super("Analyzer Diagnostics", 'A');
    }
    resolveFilename(code, desc) {
        return desc.file;
    }
    resolveRange(code, desc) {
        return desc.loc;
    }
    diagnosticMessages() {
        // TODO: fill all errors.
        // TODO: add support for warnings
        return {
            [_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidReturnStmtEmpty]: 'Invalid return statement. Expression with \'*type*\' type expected.',
            [_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidReturnStmtVoid]: 'Invalid return statement. Expression with \'void\' type expected.',
            [_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].FunctionRedefinition]: 'Function redefinition. Function with name \'{info.funcName}\' already declared.',
            [_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidFuncDefenitionReturnType]: 'Invalid function defenition return type. Function with the same name \'{info.funcName}\' but another type already declared.',
            [_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidFunctionReturnStmtNotFound]: 'Return statement expected.',
            [_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidVariableInitializing]: 'Invalid variable initializing.',
        };
    }
    resolveDescription(code, category, desc) {
        let descList = this.diagnosticMessages();
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDefAndNotNull"])(descList[code])) {
            return super.resolveDescription(code, category, desc);
        }
        let { file, loc, ...data } = desc;
        if (category == _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_3__["EDiagnosticCategory"].k_Warning) {
            return `${_lib_idl_EAnalyzerWarnings__WEBPACK_IMPORTED_MODULE_2__["EAnalyzerWarnings"][code]}: ${JSON.stringify(data)}`;
        }
        return `${_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"][code]}: ${JSON.stringify(data)}`;
    }
}


/***/ }),

/***/ "RZSc":
/*!***********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/SystemFunctionInstruction.ts ***!
  \***********************************************************************/
/*! exports provided: SystemFunctionInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemFunctionInstruction", function() { return SystemFunctionInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _FunctionDeclInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FunctionDeclInstruction */ "BKBR");



class SystemFunctionInstruction extends _FunctionDeclInstruction__WEBPACK_IMPORTED_MODULE_2__["FunctionDeclInstruction"] {
    constructor({ vertex = true, pixel = true, implementation = null, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_SystemFunctionDecl, implementation: null, ...settings });
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(implementation));
        this._bForVertex = vertex;
        this._bForPixel = pixel;
    }
    checkVertexUsage() {
        return this._bForVertex;
    }
    checkPixelUsage() {
        return this._bForPixel;
    }
    $makeVertexCompatible(val) {
        console.warn("@deprecated");
        this._bForVertex = val;
    }
    $makePixelCompatible(val) {
        console.warn("@deprecated");
        this._bForPixel = val;
    }
}


/***/ }),

/***/ "TYG3":
/*!*********************************!*\
  !*** ./src/lib/parser/Lexer.ts ***!
  \*********************************/
/*! exports provided: LexerEngine, Lexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexerEngine", function() { return LexerEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony import */ var _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/parser/IParser */ "LhMq");
/* harmony import */ var _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/util/Diagnostics */ "/zHR");
/* harmony import */ var _lib_util_StringRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/util/StringRef */ "LZQc");
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbols */ "YPfw");




var ELexerErrors;
(function (ELexerErrors) {
    ELexerErrors[ELexerErrors["UnknownToken"] = 2101] = "UnknownToken";
    ELexerErrors[ELexerErrors["InvalidToken"] = 2102] = "InvalidToken";
})(ELexerErrors || (ELexerErrors = {}));
;
class LexerDiagnostics extends _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_1__["Diagnostics"] {
    constructor() {
        super("Lexer Diagnostics", 'L');
    }
    resolveFilename(code, desc) {
        return desc.file;
    }
    resolveRange(code, desc) {
        return desc.token.loc;
    }
    diagnosticMessages() {
        return {
            [ELexerErrors.UnknownToken]: "Unknown token: {token.value}.",
            [ELexerErrors.InvalidToken]: "Invalid token: {token.value}."
        };
    }
}
class LexerEngine {
    constructor() {
        this.keywords = {};
        this.punctuators = {};
        this.punctuatorsFirstSymbols = {};
    }
    addPunctuator(value, name = LexerEngine.getPunctuatorName(value)) {
        this.punctuators[value] = name;
        this.punctuatorsFirstSymbols[value[0]] = true;
        return name;
    }
    addKeyword(value, name) {
        this.keywords[value] = name;
        return name;
    }
    getTerminalValueByName(name) {
        let value = "";
        for (value in this.punctuators) {
            if (this.punctuators[value] === name) {
                return value;
            }
        }
        for (value in this.keywords) {
            if (this.keywords[value] === name) {
                return value;
            }
        }
        return name;
    }
    isLineTerminator(symbol) {
        return (symbol === "\n" || symbol === "\r" || symbol === "\u2028" || symbol === "\u2029");
    }
    isKeyword(value) {
        return !!(this.keywords[value]);
    }
    isPunctuator(value) {
        return !!(this.punctuators[value]);
    }
    isNumberStart(ch, ch1) {
        if ((ch >= "0") && (ch <= "9")) {
            return true;
        }
        if (ch === "." && (ch1 >= "0") && (ch1 <= "9")) {
            return true;
        }
        return false;
    }
    isCommentStart(ch, ch1) {
        if (ch === "/" && (ch1 === "/" || ch1 === "*")) {
            return true;
        }
        return false;
    }
    isStringStart(ch) {
        if (ch === "\"" || ch === "'") {
            return true;
        }
        return false;
    }
    isPunctuatorStart(ch) {
        if (this.punctuatorsFirstSymbols[ch]) {
            return true;
        }
        return false;
    }
    isWhiteSpaceStart(ch) {
        if (ch === " " || ch === "\t") {
            return true;
        }
        return false;
    }
    isNewlineStart(ch) {
        if (ch === "\n" || ch === "\r") {
            return true;
        }
        return false;
    }
    isIdentifierStart(ch) {
        if ((ch === "_") || (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
            return true;
        }
        return false;
    }
    static getPunctuatorName(value) {
        return "T_PUNCTUATOR_" + value.charCodeAt(0);
    }
}
class Lexer {
    constructor({ engine = new LexerEngine, knownTypes = new Set(), skipComments = true }) {
        this.lineNumber = 0;
        this.columnNumber = 0;
        this.index = 0;
        this.diagnostics = new LexerDiagnostics;
        this.knownTypes = knownTypes;
        this.engine = engine;
        this.skipComments = skipComments;
    }
    setup(textDocument) {
        this.uri = _lib_util_StringRef__WEBPACK_IMPORTED_MODULE_2__["StringRef"].make(textDocument.uri);
        this.source = textDocument.source;
    }
    getDiagnosticReport() {
        return this.diagnostics.resolve();
    }
    getNextToken(allowLineTerminators) {
        let ch = this.currentChar();
        if (!ch) {
            let pos = this.pos();
            return {
                index: this.index,
                name: _symbols__WEBPACK_IMPORTED_MODULE_3__["END_SYMBOL"],
                value: _symbols__WEBPACK_IMPORTED_MODULE_3__["END_SYMBOL"],
                loc: {
                    start: pos,
                    end: { ...pos }
                }
            };
        }
        let tokenType = this.identityTokenType();
        let token = null;
        switch (tokenType) {
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_NumericLiteral:
                token = this.scanNumber();
                break;
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_SinglelineCommentLiteral:
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_MultilineCommentLiteral:
                token = this.scanComment();
                if (this.skipComments) {
                    token = this.getNextToken();
                }
                break;
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_StringLiteral:
                token = this.scanString();
                break;
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_PunctuatorLiteral:
                token = this.scanPunctuator();
                break;
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_IdentifierLiteral:
                token = this.scanIdentifier();
                break;
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_NewlineLiteral:
                token = this.scanLineTerminators();
                if (!allowLineTerminators) {
                    token = this.getNextToken();
                }
                break;
            case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_WhitespaceLiteral:
                this.scanWhiteSpace();
                token = this.getNextToken();
                break;
            default:
                {
                    // TODO: move this code to scanInvalid()
                    const start = this.pos();
                    let value = '';
                    while (this.identityTokenType() === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_Unknown && this.index < this.source.length) {
                        value += this.currentChar();
                        this.readNextChar();
                    }
                    token = {
                        index: this.index,
                        name: _symbols__WEBPACK_IMPORTED_MODULE_3__["UNKNOWN_TOKEN"],
                        value,
                        loc: { start, end: this.pos() }
                    };
                    // console.warn(value);
                    this.emitError(ELexerErrors.UnknownToken, token);
                    return token;
                }
        }
        return token;
    }
    /** @deprecated */
    getLocation() {
        return { line: this.lineNumber, file: this.uri };
    }
    /** @deprecated */
    setSource(sSource) {
        this.source = sSource;
    }
    /** @deprecated */
    setIndex(iIndex) {
        this.index = iIndex;
    }
    pos(n = 0) {
        return {
            file: this.uri,
            line: this.lineNumber,
            column: this.columnNumber + n,
            offset: this.index + n
        };
    }
    emitError(code, token) {
        this.diagnostics.error(code, { file: `${this.uri}`, token });
    }
    identityTokenType() {
        if (this.isIdentifierStart()) {
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_IdentifierLiteral;
        }
        if (this.isWhiteSpaceStart()) {
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_WhitespaceLiteral;
        }
        if (this.isNewlineStart()) {
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_NewlineLiteral;
        }
        if (this.isStringStart()) {
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_StringLiteral;
        }
        if (this.isCommentStart()) {
            // TODO: return exact type (separate multiline/singleline comment parsings)
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_SinglelineCommentLiteral;
        }
        if (this.isNumberStart()) {
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_NumericLiteral;
        }
        if (this.isPunctuatorStart()) {
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_PunctuatorLiteral;
        }
        return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_Unknown;
    }
    isNumberStart() {
        return this.engine.isNumberStart(this.currentChar(), this.nextChar());
    }
    isCommentStart() {
        return this.engine.isCommentStart(this.currentChar(), this.nextChar());
    }
    isStringStart() {
        return this.engine.isStringStart(this.currentChar());
    }
    isPunctuatorStart() {
        return this.engine.isPunctuatorStart(this.currentChar());
    }
    isWhiteSpaceStart() {
        return this.engine.isWhiteSpaceStart(this.currentChar());
    }
    isNewlineStart() {
        return this.engine.isNewlineStart(this.currentChar());
    }
    isIdentifierStart() {
        return this.engine.isIdentifierStart(this.currentChar());
    }
    nextChar() {
        return this.source[this.index + 1];
    }
    currentChar() {
        return this.source[this.index];
    }
    readNextChar() {
        this.index++;
        this.columnNumber++;
        return this.source[this.index];
    }
    scanString() {
        let chFirst = this.currentChar();
        let value = chFirst;
        let ch = "";
        let chPrevious = chFirst;
        let isGoodFinish = false;
        let start = this.pos();
        while (true) {
            ch = this.readNextChar();
            if (!ch) {
                break;
            }
            value += ch;
            if (ch === chFirst && chPrevious !== "\\") {
                isGoodFinish = true;
                this.readNextChar();
                break;
            }
            chPrevious = ch;
        }
        if (isGoodFinish) {
            return {
                index: this.index,
                name: _symbols__WEBPACK_IMPORTED_MODULE_3__["T_STRING"],
                value,
                loc: {
                    start,
                    end: this.pos()
                }
            };
        }
        else {
            if (!ch) {
                ch = _symbols__WEBPACK_IMPORTED_MODULE_3__["EOF"];
            }
            value += ch;
            const token = {
                index: this.index,
                type: _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_StringLiteral,
                value,
                loc: {
                    start,
                    end: this.pos()
                }
            };
            this.emitError(ELexerErrors.InvalidToken, token);
            return Lexer.makeUnknownToken(token);
        }
    }
    scanPunctuator() {
        let value = this.currentChar();
        let start = this.pos();
        let ch;
        while (true) {
            ch = this.readNextChar();
            if (ch) {
                value += ch;
                if (!this.engine.isPunctuator(value)) {
                    value = value.slice(0, value.length - 1);
                    break;
                }
            }
            else {
                break;
            }
        }
        return {
            index: this.index,
            name: this.engine.punctuators[value],
            value,
            loc: {
                start,
                end: this.pos()
            }
        };
    }
    scanNumber() {
        let ch = this.currentChar();
        let value = "";
        let isFloat = false;
        let chPrevious = ch;
        let isGoodFinish = false;
        let isE = false; // exponential
        let isU = false; // unsigned
        let start = this.pos();
        if (ch === ".") {
            value += 0;
            isFloat = true;
        }
        value += ch;
        while (true) {
            ch = this.readNextChar();
            if (ch === ".") {
                if (isFloat || isU) {
                    break;
                }
                else {
                    isFloat = true;
                }
            }
            else if (ch === "e") {
                if (isE || isU) {
                    break;
                }
                else {
                    isE = true;
                }
            }
            else if (ch === "u") {
                if (isE || isU) {
                    break;
                }
                else {
                    isU = true;
                }
            }
            else if (((ch === "+" || ch === "-") && chPrevious === "e")) {
                value += ch;
                chPrevious = ch;
                continue;
            }
            else if (ch === "f" && isFloat) {
                ch = this.readNextChar();
                if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
                    break;
                }
                isGoodFinish = true;
                break;
            }
            else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
                break;
            }
            else if (!((ch >= "0") && (ch <= "9")) || !ch || isU) {
                if ((isE && chPrevious !== "+" && chPrevious !== "-" && chPrevious !== "e") || !isE) {
                    isGoodFinish = true;
                }
                break;
            }
            value += ch;
            chPrevious = ch;
        }
        if (isGoodFinish) {
            let name = isFloat ? _symbols__WEBPACK_IMPORTED_MODULE_3__["T_FLOAT"] : _symbols__WEBPACK_IMPORTED_MODULE_3__["T_UINT"];
            return {
                index: this.index,
                name,
                value,
                loc: {
                    start,
                    end: this.pos()
                }
            };
        }
        else {
            if (!ch) {
                ch = _symbols__WEBPACK_IMPORTED_MODULE_3__["EOF"];
            }
            value += ch;
            const token = {
                index: this.index,
                type: _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_NumericLiteral,
                value,
                loc: {
                    start,
                    end: this.pos()
                }
            };
            this.emitError(ELexerErrors.InvalidToken, token);
            return Lexer.makeUnknownToken(token);
        }
    }
    scanIdentifier() {
        let ch = this.currentChar();
        let value = ch;
        let start = this.pos();
        let isGoodFinish = false;
        while (true) {
            ch = this.readNextChar();
            if (!ch) {
                isGoodFinish = true;
                break;
            }
            if (!((ch === "_") || (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9"))) {
                isGoodFinish = true;
                break;
            }
            value += ch;
        }
        if (isGoodFinish) {
            if (this.engine.isKeyword(value)) {
                return {
                    index: this.index,
                    name: this.engine.keywords[value],
                    value,
                    loc: {
                        start,
                        end: this.pos()
                    }
                };
            }
            else {
                let name = this.knownTypes.has(value) ? _symbols__WEBPACK_IMPORTED_MODULE_3__["T_TYPE_ID"] : _symbols__WEBPACK_IMPORTED_MODULE_3__["T_NON_TYPE_ID"];
                return {
                    index: this.index,
                    name,
                    value,
                    loc: {
                        start,
                        end: this.pos()
                    }
                };
            }
        }
        else {
            if (!ch) {
                ch = _symbols__WEBPACK_IMPORTED_MODULE_3__["EOF"];
            }
            value += ch;
            const token = {
                index: this.index,
                type: _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_IdentifierLiteral,
                value,
                loc: {
                    start,
                    end: this.pos()
                }
            };
            this.emitError(ELexerErrors.InvalidToken, token);
            return Lexer.makeUnknownToken(token);
        }
    }
    scanLineTerminators() {
        let ch = this.currentChar();
        let value = '';
        let start = this.pos();
        while (true) {
            if (!ch) {
                break;
            }
            if (this.engine.isLineTerminator(ch)) {
                value += ch;
                if (ch === "\r" && this.nextChar() === "\n") {
                    this.lineNumber--;
                }
                this.lineNumber++;
                ch = this.readNextChar();
                this.columnNumber = 0;
                continue;
            }
            break;
        }
        let name = _symbols__WEBPACK_IMPORTED_MODULE_3__["T_LINE_TERMINATOR"];
        return {
            index: this.index,
            name,
            value,
            loc: {
                start,
                end: this.pos()
            }
        };
    }
    scanWhiteSpace() {
        let ch = this.currentChar();
        while (true) {
            if (!ch) {
                break;
            }
            else if (ch === "\t") {
                // possible way to convert tab to multiple spaces
                this.columnNumber += 0;
            }
            else if (ch !== " ") {
                break;
            }
            ch = this.readNextChar();
        }
        return true;
    }
    scanComment() {
        let value = this.currentChar();
        let ch = this.readNextChar();
        let start = this.pos();
        value += ch;
        if (ch === "/") {
            //Line Comment
            while (true) {
                ch = this.readNextChar();
                if (!ch) {
                    break;
                }
                if (this.engine.isLineTerminator(ch)) {
                    if (ch === "\r" && this.nextChar() === "\n") {
                        this.lineNumber--;
                    }
                    this.lineNumber++;
                    this.readNextChar();
                    this.columnNumber = 0;
                    break;
                }
                value += ch;
            }
            return {
                index: this.index,
                type: _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_SinglelineCommentLiteral,
                value,
                loc: {
                    start,
                    end: this.pos()
                }
            };
        }
        else {
            //Multiline Comment
            let chPrevious = ch;
            let isGoodFinish = false;
            let start = this.pos();
            while (true) {
                ch = this.readNextChar();
                if (!ch) {
                    break;
                }
                value += ch;
                if (ch === "/" && chPrevious === "*") {
                    isGoodFinish = true;
                    this.readNextChar();
                    break;
                }
                if (this.engine.isLineTerminator(ch)) {
                    if (ch === "\r" && this.nextChar() === "\n") {
                        this.lineNumber--;
                    }
                    this.lineNumber++;
                    this.columnNumber = -1;
                }
                chPrevious = ch;
            }
            if (isGoodFinish) {
                return {
                    index: this.index,
                    type: _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_MultilineCommentLiteral,
                    value,
                    loc: {
                        start,
                        end: this.pos()
                    }
                };
            }
            else {
                if (!ch) {
                    ch = _symbols__WEBPACK_IMPORTED_MODULE_3__["EOF"];
                }
                value += ch;
                const token = {
                    index: this.index,
                    type: _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["ETokenType"].k_MultilineCommentLiteral,
                    value,
                    loc: {
                        start,
                        end: this.pos()
                    }
                };
                this.emitError(ELexerErrors.InvalidToken, token);
                return Lexer.makeUnknownToken(token);
            }
        }
    }
    static makeUnknownToken(token) {
        return {
            ...token,
            type: undefined,
            name: _symbols__WEBPACK_IMPORTED_MODULE_3__["UNKNOWN_TOKEN"],
            loc: {
                start: { ...token.loc.start },
                end: { ...token.loc.end }
            }
        };
    }
}


/***/ }),

/***/ "U+xq":
/*!*****************************!*\
  !*** ./src/lib/bf/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bf */ "/Wjm");

/* harmony default export */ __webpack_exports__["default"] = (_bf__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "UsCK":
/*!*************************************************!*\
  !*** ./src/lib/fx/analisys/helpers/variable.ts ***!
  \*************************************************/
/*! exports provided: variable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return variable; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "79MH");



var variable;
(function (variable) {
    /**
 * @param decl Variable declaraion (decl.isParameter() must be true).
 * @returns Serial number of the declaration among the function parameters or -1 otherwise.
 */
    function parameterIndex(decl) {
        if (!decl.isParameter()) {
            console.error('invalid call.');
            return -1;
        }
        // all parameters must be a children on function definition!
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(decl.parent.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_FunctionDef);
        return decl.parent.params.indexOf(decl);
    }
    variable.parameterIndex = parameterIndex;
    /**
     * @returns Offset in bytes from the beginning of the parameters' list.
     */
    function parameterOffset(decl) {
        // todo: add support for 'inout', 'out' usages 
        if (!decl.isParameter()) {
            console.error('invalid call.');
            return 0;
        }
        let idx = parameterIndex(decl);
        let offset = 0;
        for (let i = 0; i < idx; ++i) {
            offset += decl.parent.params[i].type.size;
        }
        return offset;
    }
    variable.parameterOffset = parameterOffset;
    /**
 * Helper:
 *  Returns 'structName.fieldName' for structs;
 *  Returns 'varName' for variables;
 */
    function fullName(decl) {
        if (decl.isField() &&
            _type__WEBPACK_IMPORTED_MODULE_2__["type"].findParentVariableDecl(decl.parent)) {
            let name = '';
            let parentType = decl.parent.instructionType;
            if (parentType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_VariableType) {
                name = _type__WEBPACK_IMPORTED_MODULE_2__["type"].resolveVariableDeclFullName(decl.parent);
            }
            name += '.' + decl.name;
            return name;
        }
        return decl.name;
    }
    variable.fullName = fullName;
    ;
    function resolveRegister(decl) {
        let type = null;
        let index = -1;
        const semantic = decl.semantic;
        if (semantic) {
            const match = semantic.match(/^register\(([utbs]{1})([\d]+)\)$/);
            if (match) {
                type = match[1];
                index = Number(match[2]);
            }
        }
        if (decl.type.isUAV()) {
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(type === null || type === 'u');
            type = 'u';
        }
        if (decl.type.isTexture()) {
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(type === null || type === 't');
            type = 't';
        }
        if (decl.type.isSampler()) {
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(type === null || type === 's');
            type = 's';
        }
        // TODO: buffers
        return { type, index };
    }
    variable.resolveRegister = resolveRegister;
})(variable || (variable = {}));


/***/ }),

/***/ "Vs+U":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/awesome-typescript-loader/dist/entry.js??ref--5!./src/sandbox/containers/editor/LanguageServiceProvider.ts ***!
  \*********************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_fx_SLParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/SLParser */ "O8iw");
/* harmony import */ var _lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IDiagnostics */ "zX2+");
/* harmony import */ var _lib_language_service_LanguageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/language-service/LanguageService */ "+C9u");
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! comlink */ "PRU4");
/* harmony import */ var vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vscode-languageserver-types */ "kmEW");





/* tslint:disable:typedef */
/* tslint:disable:no-empty */
/* tslint:disable:forin */
/* tslint:disable:no-for-in */
// supress all console messages for debugging/development purposes
// import NULL_LOGGER from '@lib/util/NullLogger';
// console = <any>NULL_LOGGER;
function asTextDocument({ _content, _languageId, _lineOffsets, _uri, _version }) {
    return vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_4__["TextDocument"].create(_uri, _languageId, _version, _content);
}
function asDiagnostic(diagEntry) {
    const { code, content, start, end, category } = diagEntry;
    const severities = {
        [_lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_1__["EDiagnosticCategory"].k_Error]: vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_4__["DiagnosticSeverity"].Error,
        [_lib_idl_IDiagnostics__WEBPACK_IMPORTED_MODULE_1__["EDiagnosticCategory"].k_Warning]: vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_4__["DiagnosticSeverity"].Warning
    };
    return {
        range: vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_4__["Range"].create(start.line, start.column, (end || start).line, (end || start).column),
        severity: severities[category],
        code,
        message: content
    };
}
class LanguageServiceProvider {
    constructor() {
        this.documents = new Map();
    }
    init(parserParams, parsingFlags) {
        console.log('%c Creating parser for language service provider...', 'background: #222; color: #bada55');
        try {
            Object(_lib_fx_SLParser__WEBPACK_IMPORTED_MODULE_0__["createDefaultSLParser"])(parserParams);
            console.log('%c [ DONE ]', 'background: #222; color: #bada55');
        }
        catch (e) {
            console.error('could not initialize parser.');
            return null;
        }
        this.service = Object(_lib_language_service_LanguageService__WEBPACK_IMPORTED_MODULE_2__["getLanguageService"])(parsingFlags);
    }
    async validate(rawDocument) {
        const textDocument = asTextDocument(rawDocument);
        const slDocument = await this.service.parseDocument(textDocument);
        this.documents.set(textDocument.uri, { textDocument, slDocument });
        return slDocument.diagnosticReport.messages.map(asDiagnostic);
    }
    async provideFxCodeLenses(textDocumentIdentifier) {
        if (!this.service) {
            return [];
        }
        const { textDocument, slDocument } = await this.getDocument(textDocumentIdentifier);
        return this.service.doFxCodeLenses(textDocument, slDocument);
    }
    async provideSignatureHelp(textDocumentIdentifier, position) {
        if (!this.service) {
            return null;
        }
        const { textDocument, slDocument } = await this.getDocument(textDocumentIdentifier);
        return this.service.doSignatureHelp(textDocument, position, slDocument);
    }
    getDocument(textDocumentIdentifier) {
        if (!this.documents.has(textDocumentIdentifier.uri)) {
            console.warn('could not find document', textDocumentIdentifier.uri);
            return { textDocument: null, slDocument: null };
        }
        return this.documents.get(textDocumentIdentifier.uri);
    }
}
comlink__WEBPACK_IMPORTED_MODULE_3__["expose"](new LanguageServiceProvider());


/***/ }),

/***/ "Wl5j":
/*!********************************************!*\
  !*** ./src/lib/fx/analisys/SystemScope.ts ***!
  \********************************************/
/*! exports provided: ESystemTypes, SCOPE, T_VOID, T_STRING, T_FLOAT, T_FLOAT2, T_FLOAT3, T_FLOAT4, T_FLOAT2X2, T_FLOAT3X3, T_FLOAT4X4, T_BOOL, T_BOOL2, T_BOOL3, T_BOOL4, T_BOOL2X2, T_BOOL3X3, T_BOOL4X4, T_INT, T_INT2, T_INT3, T_INT4, T_UINT, T_UINT2, T_UINT3, T_UINT4, T_INT2X2, T_INT3X3, T_INT4X4, T_SAMPLER, T_SAMPLER_2D, T_SAMPLER_CUBE, findType, findVariable, findTechnique, findFunction, hasType, hasVariable, hasTechnique, isMatrixType, isVectorType, isScalarType, isFloatBasedType, isIntBasedType, isUIntBasedType, isBoolBasedType, isSamplerType, getExternalType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESystemTypes", function() { return ESystemTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCOPE", function() { return SCOPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_VOID", function() { return T_VOID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_STRING", function() { return T_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_FLOAT", function() { return T_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_FLOAT2", function() { return T_FLOAT2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_FLOAT3", function() { return T_FLOAT3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_FLOAT4", function() { return T_FLOAT4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_FLOAT2X2", function() { return T_FLOAT2X2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_FLOAT3X3", function() { return T_FLOAT3X3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_FLOAT4X4", function() { return T_FLOAT4X4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_BOOL", function() { return T_BOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_BOOL2", function() { return T_BOOL2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_BOOL3", function() { return T_BOOL3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_BOOL4", function() { return T_BOOL4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_BOOL2X2", function() { return T_BOOL2X2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_BOOL3X3", function() { return T_BOOL3X3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_BOOL4X4", function() { return T_BOOL4X4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_INT", function() { return T_INT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_INT2", function() { return T_INT2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_INT3", function() { return T_INT3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_INT4", function() { return T_INT4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_UINT", function() { return T_UINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_UINT2", function() { return T_UINT2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_UINT3", function() { return T_UINT3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_UINT4", function() { return T_UINT4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_INT2X2", function() { return T_INT2X2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_INT3X3", function() { return T_INT3X3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_INT4X4", function() { return T_INT4X4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_SAMPLER", function() { return T_SAMPLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_SAMPLER_2D", function() { return T_SAMPLER_2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_SAMPLER_CUBE", function() { return T_SAMPLER_CUBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findType", function() { return findType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findVariable", function() { return findVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findTechnique", function() { return findTechnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFunction", function() { return findFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasType", function() { return hasType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVariable", function() { return hasVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTechnique", function() { return hasTechnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatrixType", function() { return isMatrixType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVectorType", function() { return isVectorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return isScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFloatBasedType", function() { return isFloatBasedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIntBasedType", function() { return isIntBasedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUIntBasedType", function() { return isUIntBasedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolBasedType", function() { return isBoolBasedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamplerType", function() { return isSamplerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExternalType", function() { return getExternalType; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/helpers */ "u2cq");
/* harmony import */ var _lib_fx_analisys_instructions_FunctionDefInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/fx/analisys/instructions/FunctionDefInstruction */ "hsO8");
/* harmony import */ var _lib_fx_analisys_instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/fx/analisys/instructions/IdInstruction */ "C2sc");
/* harmony import */ var _lib_fx_analisys_instructions_SystemFunctionInstruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/fx/analisys/instructions/SystemFunctionInstruction */ "RZSc");
/* harmony import */ var _lib_fx_analisys_instructions_SystemTypeInstruction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/fx/analisys/instructions/SystemTypeInstruction */ "bqkk");
/* harmony import */ var _lib_fx_analisys_instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/fx/analisys/instructions/VariableDeclInstruction */ "MJEd");
/* harmony import */ var _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lib/fx/analisys/instructions/VariableTypeInstruction */ "hljw");
/* harmony import */ var _lib_fx_analisys_ProgramScope__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lib/fx/analisys/ProgramScope */ "IHXS");
/* harmony import */ var _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @lib/idl/EAnalyzerErrors */ "zioJ");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");











// TODO: use it
var ESystemTypes;
(function (ESystemTypes) {
    ESystemTypes[ESystemTypes["k_Sampler"] = 0] = "k_Sampler";
    ESystemTypes[ESystemTypes["k_Sampler2D"] = 1] = "k_Sampler2D";
    ESystemTypes[ESystemTypes["k_Sampler3D"] = 2] = "k_Sampler3D";
    ESystemTypes[ESystemTypes["k_SamplerCube"] = 3] = "k_SamplerCube";
    ESystemTypes[ESystemTypes["k_RWBuffer"] = 4] = "k_RWBuffer";
    ESystemTypes[ESystemTypes["k_RWStructuredBuffer"] = 5] = "k_RWStructuredBuffer";
    ESystemTypes[ESystemTypes["k_AppendStructuredBuffer"] = 6] = "k_AppendStructuredBuffer";
})(ESystemTypes || (ESystemTypes = {}));
;
const scope = new _lib_fx_analisys_ProgramScope__WEBPACK_IMPORTED_MODULE_8__["Scope"]({ type: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_10__["EScopeType"].k_System });
const systemFunctionHashMap = {};
const TEMPLATE_TYPE = "template";
function _emitException(message) {
    throw new Error(message);
}
// todo: rewrite it!
function _error(code, info = {}) {
    _emitException(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_9__["EAnalyzerErrors"][code]);
}
// function generateSystemType({ name, length, elementType, fields, size, methods }: ITypeInfo): SystemTypeInstruction;
function generateSystemType(...args) {
    let name;
    let size;
    let elementType;
    let length;
    let fields;
    let methods;
    // if (isObject(args[0])) {
    //     ({ name, size, elementType, length, fields, methods } = args[0]);
    // } else{
    [name, size, elementType, length, fields, methods] = args;
    // }
    if (getSystemType(name)) {
        console.error(`type already exists: ${name}`);
        return null;
    }
    const type = new _lib_fx_analisys_instructions_SystemTypeInstruction__WEBPACK_IMPORTED_MODULE_5__["SystemTypeInstruction"]({ scope, name, elementType, length, fields, size, methods });
    scope.addType(type);
    return type;
}
class TypeTemplate {
    constructor(name, scope) {
        this.name = name;
        this.scope = scope;
    }
    produceType(scope, args) {
        return null;
    }
    typeName(args) {
        if (args) {
            return `${this.name}<${args.map(arg => arg.name).join(', ')}>`;
        }
        return this.name;
    }
}
class RWBufferTemplate extends TypeTemplate {
    constructor() {
        super('RWBuffer', scope);
    }
    produceType(scope, args) {
        if (args.length !== 1) {
            // TODO: print error
            return null;
        }
        if (!args[0].isBase()) {
            // TODO: print error
            return null;
        }
        const name = this.typeName(args);
        const size = -1;
        const elementType = args[0];
        const length = _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_LENGTH;
        const fields = [];
        const methods = [];
        const uav = true;
        return new _lib_fx_analisys_instructions_SystemTypeInstruction__WEBPACK_IMPORTED_MODULE_5__["SystemTypeInstruction"]({ scope, name, elementType, length, fields, size, methods, uav });
    }
}
class RWStructuredBufferTemplate extends TypeTemplate {
    constructor() {
        super('RWStructuredBuffer', scope);
    }
    produceType(scope, args) {
        if (args.length !== 1) {
            // TODO: print error
            return null;
        }
        const name = this.typeName(args);
        const size = -1;
        const elementType = args[0];
        const length = _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_LENGTH;
        const fields = [];
        const methods = [];
        const uav = true;
        {
            let returnType = new _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_7__["VariableTypeInstruction"]({ type: scope.findType("uint"), scope });
            let id = new _lib_fx_analisys_instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_3__["IdInstruction"]({ scope, name: 'IncrementCounter' });
            let definition = new _lib_fx_analisys_instructions_FunctionDefInstruction__WEBPACK_IMPORTED_MODULE_2__["FunctionDefInstruction"]({ scope, returnType, id });
            let func = new _lib_fx_analisys_instructions_SystemFunctionInstruction__WEBPACK_IMPORTED_MODULE_4__["SystemFunctionInstruction"]({ scope, definition, pixel: false, vertex: false });
            methods.push(func);
        }
        {
            let returnType = new _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_7__["VariableTypeInstruction"]({ type: scope.findType("uint"), scope });
            let id = new _lib_fx_analisys_instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_3__["IdInstruction"]({ scope, name: 'DecrementCounter' });
            let definition = new _lib_fx_analisys_instructions_FunctionDefInstruction__WEBPACK_IMPORTED_MODULE_2__["FunctionDefInstruction"]({ scope, returnType, id });
            let func = new _lib_fx_analisys_instructions_SystemFunctionInstruction__WEBPACK_IMPORTED_MODULE_4__["SystemFunctionInstruction"]({ scope, definition, pixel: false, vertex: false });
            methods.push(func);
        }
        return new _lib_fx_analisys_instructions_SystemTypeInstruction__WEBPACK_IMPORTED_MODULE_5__["SystemTypeInstruction"]({ scope, name, elementType, length, fields, size, methods, uav });
    }
}
class AppendStructuredBufferTemplate extends TypeTemplate {
    constructor() {
        super('AppendStructuredBuffer', scope);
    }
    produceType(scope, args) {
        if (args.length !== 1) {
            // TODO: print error
            return null;
        }
        const name = this.typeName(args);
        const size = -1;
        const elementType = args[0];
        const length = _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_LENGTH;
        const fields = [];
        const methods = [];
        const uav = true;
        {
            const paramList = [];
            {
                const type = new _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_7__["VariableTypeInstruction"]({ type: args[0], scope });
                const id = new _lib_fx_analisys_instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_3__["IdInstruction"]({ scope, name: 'Append' });
                const usageFlags = _lib_fx_analisys_instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_6__["EVariableUsageFlags"].k_Argument | _lib_fx_analisys_instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_6__["EVariableUsageFlags"].k_Local;
                const param0 = new _lib_fx_analisys_instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_6__["VariableDeclInstruction"]({ scope, type, id, usageFlags });
                paramList.push(param0);
            }
            const returnType = new _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_7__["VariableTypeInstruction"]({ type: scope.findType("void"), scope });
            const id = new _lib_fx_analisys_instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_3__["IdInstruction"]({ scope, name: 'Append' });
            const definition = new _lib_fx_analisys_instructions_FunctionDefInstruction__WEBPACK_IMPORTED_MODULE_2__["FunctionDefInstruction"]({ scope, returnType, id, paramList });
            const func = new _lib_fx_analisys_instructions_SystemFunctionInstruction__WEBPACK_IMPORTED_MODULE_4__["SystemFunctionInstruction"]({ scope, definition, pixel: false, vertex: false });
            methods.push(func);
        }
        return new _lib_fx_analisys_instructions_SystemTypeInstruction__WEBPACK_IMPORTED_MODULE_5__["SystemTypeInstruction"]({ scope, name, elementType, length, fields, size, methods, uav });
    }
}
function addFieldsToVectorFromSuffixObject(fields, suffixMap, baseType) {
    for (let suffix in suffixMap) {
        const fieldTypeName = baseType + ((suffix.length > 1) ? suffix.length.toString() : "");
        const fieldBaseType = getSystemType(fieldTypeName);
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(fieldBaseType);
        const fieldId = new _lib_fx_analisys_instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_3__["IdInstruction"]({ scope, name: suffix });
        const fieldType = new _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_7__["VariableTypeInstruction"]({ scope, type: fieldBaseType, writable: suffixMap[suffix] });
        fields.push(new _lib_fx_analisys_instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_6__["VariableDeclInstruction"]({ scope, id: fieldId, type: fieldType }));
    }
}
function addSystemTypeScalar() {
    generateSystemType("void", 0);
    generateSystemType("int", 4);
    generateSystemType("uint", 4);
    generateSystemType("bool", 4);
    generateSystemType("float", 4);
    generateSystemType("string");
    generateSystemType("texture");
    generateSystemType("sampler");
    generateSystemType("sampler2D");
    generateSystemType("samplerCUBE");
}
function addSystemTypeVector() {
    let XYSuffix = {};
    let XYZSuffix = {};
    let XYZWSuffix = {};
    let RGSuffix = {};
    let RGBSuffix = {};
    let RGBASuffix = {};
    let STSuffix = {};
    let STPSuffix = {};
    let STPQSuffix = {};
    generateSuffixLiterals(["x", "y"], XYSuffix);
    generateSuffixLiterals(["x", "y", "z"], XYZSuffix);
    generateSuffixLiterals(["x", "y", "z", "w"], XYZWSuffix);
    generateSuffixLiterals(["r", "g"], RGSuffix);
    generateSuffixLiterals(["r", "g", "b"], RGBSuffix);
    generateSuffixLiterals(["r", "g", "b", "a"], RGBASuffix);
    generateSuffixLiterals(["s", "t"], STSuffix);
    generateSuffixLiterals(["s", "t", "p"], STPSuffix);
    generateSuffixLiterals(["s", "t", "p", "q"], STPQSuffix);
    let float = getSystemType("float");
    let int = getSystemType("int");
    let uint = getSystemType("uint");
    let bool = getSystemType("bool");
    let float2 = generateSystemType("float2", -1, float, 2);
    let float3 = generateSystemType("float3", -1, float, 3);
    let float4 = generateSystemType("float4", -1, float, 4);
    let int2 = generateSystemType("int2", -1, int, 2);
    let int3 = generateSystemType("int3", -1, int, 3);
    let int4 = generateSystemType("int4", -1, int, 4);
    let uint2 = generateSystemType("uint2", -1, uint, 2);
    let uint3 = generateSystemType("uint3", -1, uint, 3);
    let uint4 = generateSystemType("uint4", -1, uint, 4);
    let bool2 = generateSystemType("bool2", -1, bool, 2);
    let bool3 = generateSystemType("bool3", -1, bool, 3);
    let bool4 = generateSystemType("bool4", -1, bool, 4);
    {
        let suf2f = [];
        // program.push(EScopeType.k_Struct);
        addFieldsToVectorFromSuffixObject(suf2f, XYSuffix, "float");
        addFieldsToVectorFromSuffixObject(suf2f, RGSuffix, "float");
        addFieldsToVectorFromSuffixObject(suf2f, STSuffix, "float");
        // program.pop();
        suf2f.forEach(field => float2.addField(field));
    }
    {
        let suf3f = [];
        addFieldsToVectorFromSuffixObject(suf3f, XYZSuffix, "float");
        addFieldsToVectorFromSuffixObject(suf3f, RGBSuffix, "float");
        addFieldsToVectorFromSuffixObject(suf3f, STPSuffix, "float");
        suf3f.forEach(field => float3.addField(field));
    }
    {
        let suf4f = [];
        addFieldsToVectorFromSuffixObject(suf4f, XYZWSuffix, "float");
        addFieldsToVectorFromSuffixObject(suf4f, RGBASuffix, "float");
        addFieldsToVectorFromSuffixObject(suf4f, STPQSuffix, "float");
        suf4f.forEach(field => float4.addField(field));
    }
    {
        let suf2i = [];
        addFieldsToVectorFromSuffixObject(suf2i, XYSuffix, "int");
        addFieldsToVectorFromSuffixObject(suf2i, RGSuffix, "int");
        addFieldsToVectorFromSuffixObject(suf2i, STSuffix, "int");
        suf2i.forEach(field => int2.addField(field));
    }
    {
        let suf3i = [];
        addFieldsToVectorFromSuffixObject(suf3i, XYZSuffix, "int");
        addFieldsToVectorFromSuffixObject(suf3i, RGBSuffix, "int");
        addFieldsToVectorFromSuffixObject(suf3i, STPSuffix, "int");
        suf3i.forEach(field => int3.addField(field));
    }
    {
        let suf4i = [];
        addFieldsToVectorFromSuffixObject(suf4i, XYZWSuffix, "int");
        addFieldsToVectorFromSuffixObject(suf4i, RGBASuffix, "int");
        addFieldsToVectorFromSuffixObject(suf4i, STPQSuffix, "int");
        suf4i.forEach(field => int4.addField(field));
    }
    {
        let suf2ui = [];
        addFieldsToVectorFromSuffixObject(suf2ui, XYSuffix, "uint");
        addFieldsToVectorFromSuffixObject(suf2ui, RGSuffix, "uint");
        addFieldsToVectorFromSuffixObject(suf2ui, STSuffix, "uint");
        suf2ui.forEach(field => uint2.addField(field));
    }
    {
        let suf3ui = [];
        addFieldsToVectorFromSuffixObject(suf3ui, XYZSuffix, "uint");
        addFieldsToVectorFromSuffixObject(suf3ui, RGBSuffix, "uint");
        addFieldsToVectorFromSuffixObject(suf3ui, STPSuffix, "uint");
        suf3ui.forEach(field => uint3.addField(field));
    }
    {
        let suf4ui = [];
        addFieldsToVectorFromSuffixObject(suf4ui, XYZWSuffix, "uint");
        addFieldsToVectorFromSuffixObject(suf4ui, RGBASuffix, "uint");
        addFieldsToVectorFromSuffixObject(suf4ui, STPQSuffix, "uint");
        suf4ui.forEach(field => uint4.addField(field));
    }
    {
        let suf2b = [];
        addFieldsToVectorFromSuffixObject(suf2b, XYSuffix, "bool");
        addFieldsToVectorFromSuffixObject(suf2b, RGSuffix, "bool");
        addFieldsToVectorFromSuffixObject(suf2b, STSuffix, "bool");
        suf2b.forEach(field => bool2.addField(field));
    }
    {
        let suf3b = [];
        addFieldsToVectorFromSuffixObject(suf3b, XYZSuffix, "bool");
        addFieldsToVectorFromSuffixObject(suf3b, RGBSuffix, "bool");
        addFieldsToVectorFromSuffixObject(suf3b, STPSuffix, "bool");
        suf3b.forEach(field => bool3.addField(field));
    }
    {
        let suf4b = [];
        addFieldsToVectorFromSuffixObject(suf4b, XYZWSuffix, "bool");
        addFieldsToVectorFromSuffixObject(suf4b, RGBASuffix, "bool");
        addFieldsToVectorFromSuffixObject(suf4b, STPQSuffix, "bool");
        suf4b.forEach(field => bool4.addField(field));
    }
}
function addSystemTypeMatrix() {
    let float2 = getSystemType("float2");
    let float3 = getSystemType("float3");
    let float4 = getSystemType("float4");
    let int2 = getSystemType("int2");
    let int3 = getSystemType("int3");
    let int4 = getSystemType("int4");
    let uint2 = getSystemType("uint2");
    let uint3 = getSystemType("uint3");
    let uint4 = getSystemType("uint4");
    let bool2 = getSystemType("bool2");
    let bool3 = getSystemType("bool3");
    let bool4 = getSystemType("bool4");
    generateSystemType("float2x2", -1, float2, 2);
    generateSystemType("float2x3", -1, float2, 3);
    generateSystemType("float2x4", -1, float2, 4);
    generateSystemType("float3x2", -1, float3, 2);
    generateSystemType("float3x3", -1, float3, 3);
    generateSystemType("float3x4", -1, float3, 4);
    generateSystemType("float4x2", -1, float4, 2);
    generateSystemType("float4x3", -1, float4, 3);
    generateSystemType("float4x4", -1, float4, 4);
    generateSystemType("int2x2", -1, int2, 2);
    generateSystemType("int2x3", -1, int2, 3);
    generateSystemType("int2x4", -1, int2, 4);
    generateSystemType("int3x2", -1, int3, 2);
    generateSystemType("int3x3", -1, int3, 3);
    generateSystemType("int3x4", -1, int3, 4);
    generateSystemType("int4x2", -1, int4, 2);
    generateSystemType("int4x3", -1, int4, 3);
    generateSystemType("int4x4", -1, int4, 4);
    generateSystemType("bool2x2", -1, bool2, 2);
    generateSystemType("bool2x3", -1, bool2, 3);
    generateSystemType("bool2x4", -1, bool2, 4);
    generateSystemType("bool3x2", -1, bool3, 2);
    generateSystemType("bool3x3", -1, bool3, 3);
    generateSystemType("bool3x4", -1, bool3, 4);
    generateSystemType("bool4x2", -1, bool4, 2);
    generateSystemType("bool4x3", -1, bool4, 3);
    generateSystemType("bool4x4", -1, bool4, 4);
}
function generateSuffixLiterals(literals, output, depth = 0) {
    if (depth >= literals.length) {
        return;
    }
    if (depth === 0) {
        for (let i = 0; i < literals.length; i++) {
            output[literals[i]] = true;
        }
        depth = 1;
    }
    const outputKeys = Object.keys(output);
    for (let i = 0; i < literals.length; i++) {
        for (let j = 0; j < outputKeys.length; j++) {
            if (outputKeys[j].indexOf(literals[i]) !== -1) {
                output[outputKeys[j] + literals[i]] = false;
            }
            else {
                output[outputKeys[j] + literals[i]] = (output[outputKeys[j]] === false) ? false : true;
            }
        }
    }
    depth++;
    generateSuffixLiterals(literals, output, depth);
}
function generateSystemFunctionInstance(type, name, paramTypes, vertex, pixel) {
    let paramList = paramTypes.map((type, n) => {
        return new _lib_fx_analisys_instructions_VariableDeclInstruction__WEBPACK_IMPORTED_MODULE_6__["VariableDeclInstruction"]({
            type: new _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_7__["VariableTypeInstruction"]({ type, scope }),
            id: new _lib_fx_analisys_instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_3__["IdInstruction"]({ name: `p${n}`, scope }),
            scope
        });
    });
    let returnType = new _lib_fx_analisys_instructions_VariableTypeInstruction__WEBPACK_IMPORTED_MODULE_7__["VariableTypeInstruction"]({ type, scope });
    let id = new _lib_fx_analisys_instructions_IdInstruction__WEBPACK_IMPORTED_MODULE_3__["IdInstruction"]({ scope, name });
    let definition = new _lib_fx_analisys_instructions_FunctionDefInstruction__WEBPACK_IMPORTED_MODULE_2__["FunctionDefInstruction"]({ scope, returnType, id, paramList });
    let func = new _lib_fx_analisys_instructions_SystemFunctionInstruction__WEBPACK_IMPORTED_MODULE_4__["SystemFunctionInstruction"]({ scope, definition, pixel, vertex });
    scope.addFunction(func);
}
/**
 * Exampler:
 *  generateSystemFunction("dot", "dot($1,$2)",   "float",    [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
 *                         ^^^^^  ^^^^^^^^^^^^    ^^^^^^^     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                         name   translationExpr returnType  argsTypes                       templateTypes
 */
function generateSystemFunction(name, returnTypeName, paramTypeNames, templateTypes, isForVertex = true, isForPixel = true) {
    if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(templateTypes)) {
        for (let i = 0; i < templateTypes.length; i++) {
            let funcHash = name + "(";
            let returnType = (returnTypeName === TEMPLATE_TYPE) ?
                getSystemType(templateTypes[i]) :
                getSystemType(returnTypeName);
            let paramTypes = [];
            for (let j = 0; j < paramTypeNames.length; j++) {
                if (paramTypeNames[j] === TEMPLATE_TYPE) {
                    paramTypes.push(getSystemType(templateTypes[i]));
                    funcHash += templateTypes[i] + ",";
                }
                else {
                    paramTypes.push(getSystemType(paramTypeNames[j]));
                    funcHash += paramTypeNames[j] + ",";
                }
            }
            funcHash += ")";
            if (systemFunctionHashMap[funcHash]) {
                _error(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_9__["EAnalyzerErrors"].SystemFunctionRedefinition, { funcName: funcHash });
            }
            generateSystemFunctionInstance(returnType, name, paramTypes, isForVertex, isForPixel);
            systemFunctionHashMap[funcHash] = true;
        }
    }
    else {
        if (returnTypeName === TEMPLATE_TYPE) {
            _emitException("Bad return type(TEMPLATE_TYPE) for system function '" + name + "'.");
        }
        let funcHash = name + "(";
        let returnType = getSystemType(returnTypeName);
        let paramTypes = [];
        for (let i = 0; i < paramTypeNames.length; i++) {
            if (paramTypeNames[i] === TEMPLATE_TYPE) {
                _emitException("Bad argument type(TEMPLATE_TYPE) for system function '" + name + "'.");
            }
            else {
                paramTypes.push(getSystemType(paramTypeNames[i]));
                funcHash += paramTypeNames[i] + ",";
            }
        }
        funcHash += ")";
        if (systemFunctionHashMap[funcHash]) {
            _error(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_9__["EAnalyzerErrors"].SystemFunctionRedefinition, { funcName: funcHash });
        }
        generateSystemFunctionInstance(returnType, name, paramTypes, isForVertex, isForPixel);
        systemFunctionHashMap[funcHash] = true;
    }
}
// function generateNotBuiltInSystemFunction(name: string, definition: string, implementation: string,
//     returnTypeName: string,
//     usedTypes: string[],
//     usedFunctions: string[]): void {
//     if (scope.hasFunction(name)) {
//         console.warn(`Builtin function ${name} already exists.`);
//         return;
//     }
//     let builtIn = false;
//     let returnType = getSystemType(returnTypeName);
//     let id = new IdInstruction({ scope, name })
//     let func = new SystemFunctionInstruction({ scope, id, returnType, definition, implementation, builtIn });
//     let usedExtSystemTypes: ITypeDeclInstruction[] = [];
//     let usedExtSystemFunctions: IFunctionDeclInstruction[] = [];
//     if (!isNull(usedTypes)) {
//         for (let i = 0; i < usedTypes.length; i++) {
//             let typeDecl: ITypeDeclInstruction = <ITypeDeclInstruction>getSystemType(usedTypes[i]).parent;
//             if (!isNull(typeDecl)) {
//                 usedExtSystemTypes.push(typeDecl);
//             }
//         }
//     }
//     if (!isNull(usedFunctions)) {
//         for (let i = 0; i < usedFunctions.length; i++) {
//             let pFindFunction: IFunctionDeclInstruction = scope.findFunction(usedFunctions[i]);
//             usedExtSystemFunctions.push(pFindFunction);
//         }
//     }
//     func.$setUsedSystemData(usedExtSystemTypes, usedExtSystemFunctions);
//     func.$closeSystemDataInfo();
//     scope.addFunction(func);
// }
// TODO: rework system function templates for better readability
function addSystemFunctions() {
    generateSystemFunction("dot", "float", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    // https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-mul
    // TODO: add support for int|uint|bool based vectors 
    generateSystemFunction("mul", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "int"]);
    generateSystemFunction("mul", TEMPLATE_TYPE, [TEMPLATE_TYPE, "float"], ["float2", "float3", "float4", "float2x2", "float3x3", "float4x4"]);
    generateSystemFunction("mul", TEMPLATE_TYPE, ["float", TEMPLATE_TYPE], ["float2", "float3", "float4", "float2x2", "float3x3", "float4x4"]);
    generateSystemFunction("mul", "float4", ["float4", TEMPLATE_TYPE], ["float4x4", "float4x3", "float4x2"]);
    generateSystemFunction("mul", "float3", ["float3", TEMPLATE_TYPE], ["float3x4", "float3x3", "float3x2"]);
    generateSystemFunction("mul", "float2", ["float2", TEMPLATE_TYPE], ["float2x4", "float2x3", "float2x2"]);
    generateSystemFunction("mul", "float4", [TEMPLATE_TYPE, "float4"], ["float4x4", "float3x4", "float2x4"]);
    generateSystemFunction("mul", "float3", [TEMPLATE_TYPE, "float3"], ["float4x3", "float3x3", "float2x3"]);
    generateSystemFunction("mul", "float2", [TEMPLATE_TYPE, "float2"], ["float4x2", "float3x2", "float2x2"]);
    /**
     * scalar = int|uint|float
     * vector = vector<int|uint|float, n>, n = 2,3,4
     * matrix = matrix<scalar, rows, columns>, r = 2,3,4, c = 2,3,4
     *
     * scalar mul(scalar, scalar)
     * vector mul(scalar, vector)
     * vector mul(vector, scalar)
     * vector mul(vector, vector)
     * matrix mul(scalar, matrix)
     * matrix mul(matrix, scalar)
     * vector mul(vector, matrix)
     * vector mul(matrix, vector)
     * matrix mul(matrix, matrix)
     */
    generateSystemFunction("mod", "float", ["float", "float"], null);
    generateSystemFunction("floor", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("ceil", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    // generateSystemFunction("fract", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("abs", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("sign", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("normalize", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("length", "float", [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("cross", "float3", ["float3", "float3"], null);
    generateSystemFunction("reflect", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("max", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    // generateSystemFunction("max", TEMPLATE_TYPE, [TEMPLATE_TYPE, "float"], ["float2", "float3", "float4"]);
    generateSystemFunction("max", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["int", "int2", "int3", "int4"]);
    // generateSystemFunction("max", TEMPLATE_TYPE, [TEMPLATE_TYPE, "int"], ["int2", "int3", "int4"]);
    // generateSystemFunction("max", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["uint", "uint2", "uint3", "uint4"]);
    // generateSystemFunction("max", TEMPLATE_TYPE, [TEMPLATE_TYPE, "uint"], ["uint2", "uint3", "uint4"]);
    generateSystemFunction("min", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    // generateSystemFunction("min", TEMPLATE_TYPE, [TEMPLATE_TYPE, "float"], ["float2", "float3", "float4"]);
    generateSystemFunction("min", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["int", "int2", "int3", "int4"]);
    // generateSystemFunction("min", TEMPLATE_TYPE, [TEMPLATE_TYPE, "int"], ["int2", "int3", "int4"]);
    // generateSystemFunction("min", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["uint", "uint2", "uint3", "uint4"]);
    // generateSystemFunction("min", TEMPLATE_TYPE, [TEMPLATE_TYPE, "uint"], ["uint2", "uint3", "uint4"]);
    generateSystemFunction("clamp", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("clamp", TEMPLATE_TYPE, [TEMPLATE_TYPE, "float", "float"], ["float2", "float3", "float4"]);
    generateSystemFunction("pow", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("mod", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float2", "float3", "float4"]);
    generateSystemFunction("mod", TEMPLATE_TYPE, [TEMPLATE_TYPE, "float"], ["float2", "float3", "float4"]);
    generateSystemFunction("exp", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("exp2", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("log", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("log2", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("inversesqrt", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("sqrt", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("all", "bool", [TEMPLATE_TYPE], ["bool2", "bool3", "bool4"]);
    generateSystemFunction("any", "bool", [TEMPLATE_TYPE], ["bool2", "bool3", "bool4"]);
    generateSystemFunction("not", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["bool2", "bool3", "bool4"]);
    generateSystemFunction("distance", "float", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("lessThan", "bool2", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float2", "int2", "uint2"]);
    generateSystemFunction("lessThan", "bool3", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float3", "int3", "uint3"]);
    generateSystemFunction("lessThan", "bool4", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float4", "int4", "uint4"]);
    generateSystemFunction("lessThanEqual", "bool2", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float2", "int2", "uint2"]);
    generateSystemFunction("lessThanEqual", "bool3", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float3", "int3", "uint3"]);
    generateSystemFunction("lessThanEqual", "bool4", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float4", "int4", "uint4"]);
    generateSystemFunction("equal", "bool2", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float2", "int2", "uint2"]);
    generateSystemFunction("equal", "bool3", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float3", "int3", "uint3"]);
    generateSystemFunction("equal", "bool4", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float4", "int4", "uint4"]);
    generateSystemFunction("equal", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["bool2", "bool3", "bool4"]);
    generateSystemFunction("notEqual", "bool2", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float2", "int2", "uint2"]);
    generateSystemFunction("notEqual", "bool3", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float3", "int3", "uint3"]);
    generateSystemFunction("notEqual", "bool4", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float4", "int4", "uint4"]);
    generateSystemFunction("notEqual", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["bool2", "bool3", "bool4"]);
    generateSystemFunction("greaterThan", "bool2", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float2", "int2", "uint2"]);
    generateSystemFunction("greaterThan", "bool3", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float3", "int3", "uint3"]);
    generateSystemFunction("greaterThan", "bool4", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float4", "int4", "uint4"]);
    generateSystemFunction("greaterThanEqual", "bool2", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float2", "int2", "uint2"]);
    generateSystemFunction("greaterThanEqual", "bool3", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float3", "int3", "uint3"]);
    generateSystemFunction("greaterThanEqual", "bool4", [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float4", "int4", "uint4"]);
    generateSystemFunction("radians", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("degrees", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("sin", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("cos", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("tan", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("asin", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("acos", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("atan", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("atan", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("tex2D", "float4", ["sampler", "float2"], null);
    generateSystemFunction("tex2D", "float4", ["sampler2D", "float2"], null);
    generateSystemFunction("tex2DProj", "float4", ["sampler", "float3"], null);
    generateSystemFunction("tex2DProj", "float4", ["sampler2D", "float3"], null);
    generateSystemFunction("tex2DProj", "float4", ["sampler", "float4"], null);
    generateSystemFunction("tex2DProj", "float4", ["sampler2D", "float4"], null);
    generateSystemFunction("texCUBE", "float4", ["sampler", "float3"], null);
    generateSystemFunction("texCUBE", "float4", ["samplerCUBE", "float3"], null);
    generateSystemFunction("tex2D", "float4", ["sampler", "float2", "float"], null, false, true);
    generateSystemFunction("tex2D", "float4", ["sampler2D", "float2", "float"], null, false, true);
    generateSystemFunction("tex2DProj", "float4", ["sampler", "float3", "float"], null, false, true);
    generateSystemFunction("tex2DProj", "float4", ["sampler2D", "float3", "float"], null, false, true);
    generateSystemFunction("tex2DProj", "float4", ["sampler", "float4", "float"], null, false, true);
    generateSystemFunction("tex2DProj", "float4", ["sampler2D", "float4", "float"], null, false, true);
    generateSystemFunction("texCUBE", "float4", ["sampler", "float3", "float"], null, false, true);
    generateSystemFunction("texCUBE", "float4", ["samplerCUBE", "float3", "float"], null, false, true);
    generateSystemFunction("tex2DLod", "float4", ["sampler", "float2", "float"], null, true, false);
    generateSystemFunction("tex2DLod", "float4", ["sampler2D", "float2", "float"], null, true, false);
    generateSystemFunction("tex2DProjLod", "float4", ["sampler", "float3", "float"], null, true, false);
    generateSystemFunction("tex2DProjLod", "float4", ["sampler2D", "float3", "float"], null, true, false);
    generateSystemFunction("tex2DProjLod", "float4", ["sampler", "float4", "float"], null, true, false);
    generateSystemFunction("tex2DProjLod", "float4", ["sampler2D", "float4", "float"], null, true, false);
    generateSystemFunction("texCUBELod", "float4", ["sampler", "float3", "float"], null, true, false);
    generateSystemFunction("texCUBELod", "float4", ["samplerCUBE", "float3", "float"], null, true, false);
    //OES_standard_derivatives
    generateSystemFunction("dFdx", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("dFdy", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("width", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("fwidth", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    // generateSystemFunction("smoothstep", "float3", ["float3", "float3", "float3"], null);
    generateSystemFunction("smoothstep", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("smoothstep", TEMPLATE_TYPE, ["float", "float", TEMPLATE_TYPE], ["float2", "float3", "float4"]);
    generateSystemFunction("frac", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("lerp", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE, TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("lerp", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE, "float"], ["float2", "float3", "float4"]);
    generateSystemFunction("saturate", TEMPLATE_TYPE, [TEMPLATE_TYPE], ["float", "float2", "float3", "float4"]);
    generateSystemFunction("asfloat", "float", [TEMPLATE_TYPE], ["float" /*, "uint"*/]);
    generateSystemFunction("asfloat", "float", [TEMPLATE_TYPE], ["int" /*, "uint"*/]);
    generateSystemFunction("asfloat", "float2", [TEMPLATE_TYPE], ["int2" /*, "uint2"*/]);
    generateSystemFunction("asfloat", "float3", [TEMPLATE_TYPE], ["int3" /*, "uint3"*/]);
    generateSystemFunction("asfloat", "float4", [TEMPLATE_TYPE], ["int4" /*, "uint4"*/]);
    generateSystemFunction("asint", "int", [TEMPLATE_TYPE], ["float", "uint"]);
    generateSystemFunction("asint", "int2", [TEMPLATE_TYPE], ["float2", "uint2"]);
    generateSystemFunction("asint", "int3", [TEMPLATE_TYPE], ["float3", "uint3"]);
    generateSystemFunction("asint", "int4", [TEMPLATE_TYPE], ["float4", "uint4"]);
    generateSystemFunction("asuint", "uint", [TEMPLATE_TYPE], ["float", "int"]);
    generateSystemFunction("asuint", "uint2", [TEMPLATE_TYPE], ["float2", "int2"]);
    generateSystemFunction("asuint", "uint3", [TEMPLATE_TYPE], ["float3", "int3"]);
    generateSystemFunction("asuint", "uint4", [TEMPLATE_TYPE], ["float4", "int4"]);
    generateSystemFunction("InterlockedAdd", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE, TEMPLATE_TYPE], ["int"]);
    // generateSystemFunction("InterlockedAdd", TEMPLATE_TYPE, [TEMPLATE_TYPE, TEMPLATE_TYPE, TEMPLATE_TYPE], ["uint"]);
    // generateSystemFunction("asint", "int", [TEMPLATE_TYPE], ["float", "float2", "float3", "float4", "uint", "uint2", "uint3", "uint4"]);
    // generateSystemFunction("asfloat", "float", [TEMPLATE_TYPE], ["int", "int2", "int3", "int4", "uint", "uint2", "uint3", "uint4"]);
    // generateSystemFunction("asint", "int", [TEMPLATE_TYPE], ["float", "float2", "float3", "float4", "uint", "uint2", "uint3", "uint4"]);
}
// function generateSystemVariable(name: string, typeName: string,
//     isForVertex: boolean, isForPixel: boolean, readonly: boolean): void {
//     if (scope.hasVariable(name)) {
//         return;
//     }
//     let id = new IdInstruction({ scope, name });
//     let type = new VariableTypeInstruction({ scope, type: getSystemType(typeName), writable: readonly });
//     let variableDecl = new VariableDeclInstruction({ scope, id, type, builtIn: true });
//     variableDecl.$makeVertexCompatible(isForVertex);
//     variableDecl.$makePixelCompatible(isForPixel);
//     scope.addVariable(variableDecl);
// }
function getSystemType(typeName) {
    //boolean, string, float and others
    let type = scope.findType(typeName);
    Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(!type || (type.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_10__["EInstructionTypes"].k_SystemType));
    return type;
}
// function addSystemVariables(): void {
// generateSystemVariable("fragColor", "gl_FragColor", "float4", false, true, true);
// generateSystemVariable("fragCoord", "gl_FragCoord", "float4", false, true, true);
// generateSystemVariable("frontFacing", "gl_FrontFacing", "bool", false, true, true);
// generateSystemVariable("pointCoord", "gl_PointCoord", "float2", false, true, true);
// }
function initSystemTypes() {
    addSystemTypeScalar();
    addSystemTypeVector();
    addSystemTypeMatrix();
    scope.addTypeTemplate(new RWBufferTemplate);
    scope.addTypeTemplate(new RWStructuredBufferTemplate);
    scope.addTypeTemplate(new AppendStructuredBufferTemplate);
}
function initSystemFunctions() {
    addSystemFunctions();
}
// function initSystemVariables(): void {
//     addSystemVariables();
// }
initSystemTypes();
initSystemFunctions();
// initSystemVariables();
/**
 * Export API
 */
const SCOPE = scope;
const T_VOID = scope.findType("void");
const T_STRING = scope.findType("string");
const T_FLOAT = scope.findType("float");
const T_FLOAT2 = scope.findType("float2");
const T_FLOAT3 = scope.findType("float3");
const T_FLOAT4 = scope.findType("float4");
const T_FLOAT2X2 = scope.findType("float2x2");
const T_FLOAT3X3 = scope.findType("float3x3");
const T_FLOAT4X4 = scope.findType("float4x4");
const T_BOOL = scope.findType("bool");
const T_BOOL2 = scope.findType("bool2");
const T_BOOL3 = scope.findType("bool3");
const T_BOOL4 = scope.findType("bool4");
const T_BOOL2X2 = scope.findType("bool2x2");
const T_BOOL3X3 = scope.findType("bool3x3");
const T_BOOL4X4 = scope.findType("bool4x4");
const T_INT = scope.findType("int");
const T_INT2 = scope.findType("int2");
const T_INT3 = scope.findType("int3");
const T_INT4 = scope.findType("int4");
const T_UINT = scope.findType("uint");
const T_UINT2 = scope.findType("uint2");
const T_UINT3 = scope.findType("uint3");
const T_UINT4 = scope.findType("uint4");
const T_INT2X2 = scope.findType("int2x2");
const T_INT3X3 = scope.findType("int3x3");
const T_INT4X4 = scope.findType("int4x4");
const T_SAMPLER = scope.findType("sampler");
const T_SAMPLER_2D = scope.findType("sampler2D");
const T_SAMPLER_CUBE = scope.findType("samplerCUBE");
const findType = (typeName) => scope.findType(typeName);
const findVariable = (varName) => scope.findVariable(varName);
const findTechnique = (techName) => scope.findTechnique(techName);
const findFunction = (funcName, args) => scope.findFunction(funcName, args);
const hasType = (typeName) => !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(scope.findType(typeName));
const hasVariable = (varName) => !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(scope.findVariable(varName));
const hasTechnique = (techName) => !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(scope.findTechnique(techName));
function isMatrixType(type) {
    return type.isEqual(getSystemType("float2x2")) ||
        type.isEqual(getSystemType("float3x3")) ||
        type.isEqual(getSystemType("float4x4")) ||
        type.isEqual(getSystemType("int2x2")) ||
        type.isEqual(getSystemType("int3x3")) ||
        type.isEqual(getSystemType("int4x4")) ||
        type.isEqual(getSystemType("bool2x2")) ||
        type.isEqual(getSystemType("bool3x3")) ||
        type.isEqual(getSystemType("bool4x4"));
}
function isVectorType(type) {
    return type.isEqual(getSystemType("float2")) ||
        type.isEqual(getSystemType("float3")) ||
        type.isEqual(getSystemType("float4")) ||
        type.isEqual(getSystemType("bool2")) ||
        type.isEqual(getSystemType("bool3")) ||
        type.isEqual(getSystemType("bool4")) ||
        type.isEqual(getSystemType("int2")) ||
        type.isEqual(getSystemType("int3")) ||
        type.isEqual(getSystemType("int4")) ||
        type.isEqual(getSystemType("uint2")) ||
        type.isEqual(getSystemType("uint3")) ||
        type.isEqual(getSystemType("uint4"));
}
function isScalarType(type) {
    return type.isEqual(T_BOOL) ||
        type.isEqual(T_INT) ||
        type.isEqual(T_UINT) ||
        type.isEqual(T_FLOAT);
}
function isFloatBasedType(type) {
    return type.isEqual(T_FLOAT) ||
        type.isEqual(T_FLOAT2) ||
        type.isEqual(T_FLOAT3) ||
        type.isEqual(T_FLOAT4) ||
        type.isEqual(T_FLOAT2X2) ||
        type.isEqual(T_FLOAT3X3) ||
        type.isEqual(T_FLOAT4X4);
}
function isIntBasedType(type) {
    return type.isEqual(T_INT) ||
        type.isEqual(T_INT2) ||
        type.isEqual(T_INT3) ||
        type.isEqual(T_INT4) ||
        type.isEqual(T_INT2X2) ||
        type.isEqual(T_INT3X3) ||
        type.isEqual(T_INT4X4);
}
function isUIntBasedType(type) {
    return type.isEqual(T_UINT) ||
        type.isEqual(T_UINT2) ||
        type.isEqual(T_UINT3) ||
        type.isEqual(T_UINT4);
}
function isBoolBasedType(type) {
    return type.isEqual(T_BOOL) ||
        type.isEqual(T_BOOL2) ||
        type.isEqual(T_BOOL3) ||
        type.isEqual(T_BOOL4) ||
        type.isEqual(T_BOOL2X2) ||
        type.isEqual(T_BOOL3X3) ||
        type.isEqual(T_BOOL4X4);
}
function isSamplerType(type) {
    return type.isEqual(T_SAMPLER) ||
        type.isEqual(getSystemType("sampler2D")) ||
        type.isEqual(getSystemType("samplerCUBE"));
}
/** @deprecated */
function getExternalType(type) {
    if (type.isEqual(T_INT) ||
        type.isEqual(T_UINT) ||
        type.isEqual(T_FLOAT)) {
        return Number;
    }
    else if (type.isEqual(T_BOOL)) {
        return "Boolean";
    }
    else if (type.isEqual(T_FLOAT2) ||
        type.isEqual(T_BOOL2) ||
        type.isEqual(T_INT2) ||
        type.isEqual(T_UINT2)) {
        return "Vec2";
    }
    else if (type.isEqual(T_FLOAT3) ||
        type.isEqual(T_BOOL3) ||
        type.isEqual(T_INT3) ||
        type.isEqual(T_UINT3)) {
        return "Vec3";
    }
    else if (type.isEqual(T_FLOAT4) ||
        type.isEqual(T_BOOL4) ||
        type.isEqual(T_INT4) ||
        type.isEqual(T_UINT4)) {
        return "Vec4";
    }
    else if (type.isEqual(T_FLOAT2X2) ||
        type.isEqual(T_BOOL2X2) ||
        type.isEqual(T_INT2X2)) {
        return "Vec2";
    }
    else if (type.isEqual(T_FLOAT3X3) ||
        type.isEqual(T_BOOL3X3) ||
        type.isEqual(T_INT3X3)) {
        return "Mat3";
    }
    else if (type.isEqual(T_FLOAT4X4) ||
        type.isEqual(T_BOOL4X4) ||
        type.isEqual(T_INT4X4)) {
        return "Mat4";
    }
    else {
        return null;
    }
}


/***/ }),

/***/ "Wv+o":
/*!****************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ForStmtInstruction.ts ***!
  \****************************************************************/
/*! exports provided: ForStmtInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForStmtInstruction", function() { return ForStmtInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/EAnalyzerErrors */ "zioJ");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");
/* harmony import */ var _StmtInstruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StmtInstruction */ "oseZ");





/**
 * Represent for(forInit forCond ForStep) stmt
 * for ExprInstruction or VarDeclInstruction ExprInstruction ExprInstruction StmtInstruction
 */
class ForStmtInstruction extends _StmtInstruction__WEBPACK_IMPORTED_MODULE_4__["StmtInstruction"] {
    constructor({ init = null, cond = null, step = null, body = null, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_ForStmt, ...settings });
        this._init = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(init, this);
        this._cond = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(cond, this);
        this._step = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(step, this);
        this._body = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(body, this);
    }
    get init() {
        return this._init;
    }
    get cond() {
        return this._cond;
    }
    get step() {
        return this._step;
    }
    get body() {
        return this._body;
    }
    toCode() {
        var code = "for(";
        code += this._init.toCode() + ";";
        code += this._cond.toCode() + ";";
        code += this._step.toCode() + ")";
        code += this._body.toCode();
        return code;
    }
    // TODO: move it to Analysis.ts
    check(stage, info = null) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._step)) {
            this._setError(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidForStepEmpty);
            return false;
        }
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._init)) {
            this._setError(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidForInitEmptyIterator);
            return false;
        }
        if (this._init.instructionType !== _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_VariableDecl) {
            this._setError(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidForInitExpr);
            return false;
        }
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._cond)) {
            this._setError(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidForConditionEmpty);
            return false;
        }
        if (this._cond.instructionType !== _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_RelationalExpr) {
            this._setError(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidForConditionRelation);
            return false;
        }
        if (this._step.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_UnaryExpr ||
            this._step.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_AssignmentExpr ||
            this._step.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_PostfixArithmeticExpr) {
            // todo: rewrite this check!!
            // var sOperator: string = this._step.operator;
            // if (sOperator !== "++" && sOperator !== "--" &&
            //     sOperator !== "+=" && sOperator !== "-=") {
            //     this._setError(EAnalyzerErrors.BAD_FOR_STEP_OPERATOR, { operator: sOperator });
            //     return false;
            // }
        }
        else {
            this._setError(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_1__["EAnalyzerErrors"].InvalidForStepExpr);
            return false;
        }
        return true;
    }
}


/***/ }),

/***/ "XQla":
/*!***********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/AssignmentExprInstruction.ts ***!
  \***********************************************************************/
/*! exports provided: AssignmentExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentExprInstruction", function() { return AssignmentExprInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



/**
 * Represent someExpr = += -= /= *= %= someExpr
 * (=|+=|-=|*=|/=|%=) Instruction Instruction
 */
class AssignmentExprInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__["ExprInstruction"] {
    constructor({ left, right, operator, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_AssignmentExpr, type: left.type, ...settings });
        this._leftValue = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(left, this);
        this._rightValue = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(right, this);
        this._operator = operator;
    }
    get left() {
        return this._leftValue;
    }
    get right() {
        return this._rightValue;
    }
    get operator() {
        return this._operator;
    }
    toCode() {
        var code = "";
        code += this.left.toCode();
        code += this.operator;
        code += this.right.toCode();
        return code;
    }
}


/***/ }),

/***/ "Y1wX":
/*!**************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/TypedInstruction.ts ***!
  \**************************************************************/
/*! exports provided: TypedInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedInstruction", function() { return TypedInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



class TypedInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"] {
    constructor({ type, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_Typed, ...settings });
        this._type = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withNoParent(type);
        // todo: remove this check
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._type)) {
            console.warn("Something goes wrong! Type is not specified!", this);
        }
    }
    get type() {
        return this._type;
    }
}


/***/ }),

/***/ "YPfw":
/*!***********************************!*\
  !*** ./src/lib/parser/symbols.ts ***!
  \***********************************/
/*! exports provided: END_POSITION, T_EMPTY, UNKNOWN_TOKEN, START_SYMBOL, UNUSED_SYMBOL, INLINE_COMMENT_SYMBOL, ERROR, END_SYMBOL, LEXER_RULES, FLAG_RULE_CREATE_NODE, FLAG_RULE_SKIP_NODE, FLAG_RULE_EXPOSE_NODE, FLAG_RULE_FUNCTION, EOF, T_STRING, T_FLOAT, T_UINT, T_TYPE_ID, T_NON_TYPE_ID, T_LINE_TERMINATOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_POSITION", function() { return END_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_EMPTY", function() { return T_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_TOKEN", function() { return UNKNOWN_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_SYMBOL", function() { return START_SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNUSED_SYMBOL", function() { return UNUSED_SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INLINE_COMMENT_SYMBOL", function() { return INLINE_COMMENT_SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_SYMBOL", function() { return END_SYMBOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEXER_RULES", function() { return LEXER_RULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAG_RULE_CREATE_NODE", function() { return FLAG_RULE_CREATE_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAG_RULE_SKIP_NODE", function() { return FLAG_RULE_SKIP_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAG_RULE_EXPOSE_NODE", function() { return FLAG_RULE_EXPOSE_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAG_RULE_FUNCTION", function() { return FLAG_RULE_FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOF", function() { return EOF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_STRING", function() { return T_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_FLOAT", function() { return T_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_UINT", function() { return T_UINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_TYPE_ID", function() { return T_TYPE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_NON_TYPE_ID", function() { return T_NON_TYPE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T_LINE_TERMINATOR", function() { return T_LINE_TERMINATOR; });
const END_POSITION = 'END'; // item, parser
const T_EMPTY = 'EMPTY'; // item, parser
const UNKNOWN_TOKEN = 'UNKNOWN'; // lexer
const START_SYMBOL = 'S'; // parser
const UNUSED_SYMBOL = '##'; // parser
const INLINE_COMMENT_SYMBOL = '#'; // parser
// TODO: do not use ambigious name 'ERROR'
const ERROR = 'ERROR'; // parser
const END_SYMBOL = '$'; // lexer, parser
const LEXER_RULES = '--LEXER--'; // parser
const FLAG_RULE_CREATE_NODE = '--add'; // parser
const FLAG_RULE_SKIP_NODE = '--skip'; // parser
const FLAG_RULE_EXPOSE_NODE = '--expose'; // parser
const FLAG_RULE_FUNCTION = '--F'; // parser
const EOF = 'EOF'; // lexer
const T_STRING = 'T_STRING'; // lexer
const T_FLOAT = 'T_FLOAT'; // lexer
const T_UINT = 'T_UINT'; // lexer
const T_TYPE_ID = 'T_TYPE_ID'; // lexer
const T_NON_TYPE_ID = 'T_NON_TYPE_ID'; // lexer
const T_LINE_TERMINATOR = 'T_LINE_TERMINATOR'; // lexer


/***/ }),

/***/ "Zd6l":
/*!*****************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/DeclStmtInstruction.ts ***!
  \*****************************************************************/
/*! exports provided: DeclStmtInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclStmtInstruction", function() { return DeclStmtInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");
/* harmony import */ var _StmtInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StmtInstruction */ "oseZ");



/**
 * Represent TypeDecl or VariableDecl or VarStructDecl
 * EMPTY DeclInstruction
 */
class DeclStmtInstruction extends _StmtInstruction__WEBPACK_IMPORTED_MODULE_2__["StmtInstruction"] {
    constructor({ declList = null, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_DeclStmt, ...settings });
        this._declList = (declList || []).map(decl => _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(decl, this));
    }
    get declList() {
        return this._declList;
    }
    toCode() {
        var code = '';
        var declList = this.declList;
        for (var i = 0; i < this.declList.length; i++) {
            code += declList[i].toCode() + ";\n";
        }
        return code;
    }
}


/***/ }),

/***/ "a1Km":
/*!******************************************!*\
  !*** ./src/lib/idl/EAnalyzerWarnings.ts ***!
  \******************************************/
/*! exports provided: EAnalyzerWarnings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAnalyzerWarnings", function() { return EAnalyzerWarnings; });
var EAnalyzerWarnings;
(function (EAnalyzerWarnings) {
    EAnalyzerWarnings[EAnalyzerWarnings["UnsupportedRenderStateTypeUsed"] = 3000] = "UnsupportedRenderStateTypeUsed";
    EAnalyzerWarnings[EAnalyzerWarnings["IncompleteTechnique"] = 3001] = "IncompleteTechnique";
    EAnalyzerWarnings[EAnalyzerWarnings["IncompletePass"] = 3002] = "IncompletePass";
    EAnalyzerWarnings[EAnalyzerWarnings["UselessPassState"] = 3003] = "UselessPassState";
    // part fx
})(EAnalyzerWarnings || (EAnalyzerWarnings = {}));


/***/ }),

/***/ "ahmV":
/*!*************************************!*\
  !*** ./src/lib/fx/SLASTDocument.ts ***!
  \*************************************/
/*! exports provided: SLASTDocument, createSLASTDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASTDocument", function() { return SLASTDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSLASTDocument", function() { return createSLASTDocument; });
/* harmony import */ var _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/parser/IParser */ "LhMq");
/* harmony import */ var _lib_parser_ASTDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/parser/ASTDocument */ "h4FD");
/* harmony import */ var _lib_parser_Lexer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/parser/Lexer */ "TYG3");
/* harmony import */ var _lib_parser_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/parser/symbols */ "YPfw");
/* harmony import */ var _lib_uri_uri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/uri/uri */ "rMqy");
/* harmony import */ var _SLParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SLParser */ "O8iw");






// const readFile = fname => fetch(fname).then(resp => resp.text(), reason => console.warn('!!!', reason));
const PREDEFINED_TYPES = [
    'float2', 'float3', 'float4',
    'float2x2', 'float3x3', 'float4x4',
    'int2', 'int3', 'int4',
    'uint2', 'uint3', 'uint4',
    'bool2', 'bool3', 'bool4',
    'auto'
];
class SLASTDocument extends _lib_parser_ASTDocument__WEBPACK_IMPORTED_MODULE_1__["ASTDocument"] {
    constructor({ parser = Object(_SLParser__WEBPACK_IMPORTED_MODULE_5__["defaultSLParser"])() } = {}) {
        super({ parser, knownTypes: new Set(PREDEFINED_TYPES) });
    }
    get includes() {
        return this.includeList;
    }
    async parse(textDocument, flags) {
        this.includeList.set(textDocument.uri, null);
        return await super.parse(textDocument, flags);
    }
    init(config) {
        super.init(config);
        this.includeList = new Map();
        this.lexers = [];
        this.tokens = [];
        this.ruleFunctions.set('addType', this._addType.bind(this));
        this.ruleFunctions.set('includeCode', this._includeCode.bind(this));
    }
    _addType() {
        const tree = this.tree;
        const node = tree.lastNode;
        const typeId = node.children[node.children.length - 2].value;
        this.knownTypes.add(typeId);
        return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["EOperationType"].k_Ok;
    }
    emitFileNotFound(file, range) {
        this.diag.error(_lib_parser_ASTDocument__WEBPACK_IMPORTED_MODULE_1__["EParsingErrors"].GeneralCouldNotReadFile, { ...this.lexer.getLocation(), loc: range, target: file });
    }
    readToken() {
        const token = super.readToken();
        if (token.value === _lib_parser_symbols__WEBPACK_IMPORTED_MODULE_3__["END_SYMBOL"]) {
            if (this.lexers.length > 0) {
                this.lexer = this.lexers.pop();
                return this.tokens.pop();
            }
        }
        return token;
    }
    async _includeCode() {
        let tree = this.tree;
        let node = tree.lastNode;
        let file = node.value;
        //cuttin qoutes
        const includeURL = file.substr(1, file.length - 2);
        const uri = _lib_uri_uri__WEBPACK_IMPORTED_MODULE_4__["resolve"](includeURL, `${this.uri}`);
        if (this.includeList.has(uri)) {
            console.warn(`'${uri}' file has already been included previously.`);
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["EOperationType"].k_Ok;
        }
        this.includeList.set(uri, node.loc);
        try {
            const response = await fetch(uri);
            if (!response.ok) {
                this.emitFileNotFound(uri, node.loc);
                return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["EOperationType"].k_Error;
            }
            const source = await response.text();
            //
            // Replace lexer with new one 
            //
            this.lexers.push(this.lexer);
            this.tokens.push(this.token);
            this.lexer = new _lib_parser_Lexer__WEBPACK_IMPORTED_MODULE_2__["Lexer"]({
                engine: this.parser.lexerEngine,
                knownTypes: this.knownTypes
            });
            this.lexer.setup({ source, uri });
            this.token = this.readToken();
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["EOperationType"].k_Ok;
        }
        catch (e) {
            console.error(e);
            this.emitFileNotFound(file, node.loc);
        }
        return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_0__["EOperationType"].k_Error;
    }
}
async function createSLASTDocument(textDocument, flags) {
    const document = new SLASTDocument();
    await document.parse(textDocument, flags);
    return document;
}


/***/ }),

/***/ "bUvT":
/*!************************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/part/PartFxPassInstruction.ts ***!
  \************************************************************************/
/*! exports provided: PartFxPassInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartFxPassInstruction", function() { return PartFxPassInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_fx_analisys_instructions_PassInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/instructions/PassInstruction */ "jfm7");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");



class PartFxPassInstruction extends _lib_fx_analisys_instructions_PassInstruction__WEBPACK_IMPORTED_MODULE_1__["PassInstruction"] {
    constructor({ sorting = false, instanceCount = 1, prerenderRoutine, geometry, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_PartFxPass, ...settings });
        this.sorting = sorting;
        this.prerenderRoutine = prerenderRoutine;
        this.geometry = geometry;
        this.instanceCount = instanceCount;
    }
    get particleInstance() {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.prerenderRoutine)) {
            return null;
        }
        return this.prerenderRoutine.function.def.params[1].type.subType;
    }
    isValid() {
        return !!this.particleInstance && !!this.prerenderRoutine;
    }
}


/***/ }),

/***/ "bqkk":
/*!*******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/SystemTypeInstruction.ts ***!
  \*******************************************************************/
/*! exports provided: SystemTypeInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemTypeInstruction", function() { return SystemTypeInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/helpers */ "u2cq");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");




class SystemTypeInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"] {
    constructor({ name, size = 0, elementType = null, length = 1, fields = [], methods = [], writable = true, readable = true, complex = false, sampler = false, texture = false, uav = false, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_SystemType, ...settings });
        this._name = name;
        this._size = size;
        this._elementType = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withNoParent(elementType);
        this._length = length;
        this._fields = [];
        this._methods = [];
        this._bIsWritable = writable;
        this._bIsReadable = readable;
        this._bIsComplex = complex;
        this._bIsSampler = sampler;
        this._bIsTexture = texture;
        this._bIsUAV = uav;
        fields.forEach(field => this.addField(field));
        methods.forEach(method => this.addMethod(method));
    }
    get writable() {
        return this._bIsWritable;
    }
    get readable() {
        return this._bIsReadable;
    }
    set name(sName) {
        this._name = sName;
    }
    get name() {
        return this._name;
    }
    get hash() {
        return this._name;
    }
    get strongHash() {
        return this._name;
    }
    get size() {
        if (this.isArray()) {
            if (this.length === _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_LENGTH) {
                return _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_LENGTH;
            }
            return this.arrayElementType.size * this.length;
        }
        return this._size;
    }
    get baseType() {
        return this;
    }
    get arrayElementType() {
        return this._elementType;
    }
    get typeDecl() {
        return this.parent;
    }
    get length() {
        return this._length;
    }
    get fields() {
        return this._fields;
    }
    get methods() {
        return this._methods;
    }
    get fieldNames() {
        return this._fields.map(field => field.name);
    }
    isSampler() {
        return this._bIsSampler;
    }
    isTexture() {
        return this._bIsTexture;
    }
    isUAV() {
        return this._bIsUAV;
    }
    /** @deprecated */
    isEqual(value) {
        return _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["type"].equals(this, value);
    }
    toDeclString() {
        console.warn('@pure_virtual');
        return '';
    }
    isBase() {
        return true;
    }
    isArray() {
        return !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.arrayElementType);
    }
    isNotBaseArray() {
        return false;
    }
    isComplex() {
        return this._bIsComplex;
    }
    isConst() {
        return false;
    }
    isContainArray() {
        return false;
    }
    isContainSampler() {
        return false;
    }
    isContainPointer() {
        return false;
    }
    isContainComplexType() {
        return false;
    }
    toString() {
        return this.name || _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["type"].hash(this);
    }
    toCode() {
        return this._name;
    }
    hasField(fieldName) {
        return !!this.getField(fieldName);
    }
    hasFieldWithSematics(semantic) {
        return false;
    }
    hasAllUniqueSemantics() {
        return false;
    }
    hasFieldWithoutSemantics() {
        return false;
    }
    getField(fieldName) {
        return this._fields.find(field => field.name === fieldName) || null;
    }
    getMethod(methodName, args) {
        const list = this._methods.filter(method => method.name === methodName);
        return _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["fn"].matchList(list, args);
    }
    getFieldBySemantics(semantic) {
        console.error("@undefined_behavior");
        return null;
    }
    /** internal api */
    addField(field) {
        console.assert(this.getField(field.name) === null);
        this._fields.push(_Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(field, this));
    }
    /** internal api */
    addMethod(method) {
        console.assert(Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.getMethod(method.name, method.def.params.map(param => param.type))));
        this._methods.push(_Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(method, this));
    }
}


/***/ }),

/***/ "bxdW":
/*!************************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ConditionalExprInstruction.ts ***!
  \************************************************************************/
/*! exports provided: ConditionalExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionalExprInstruction", function() { return ConditionalExprInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/helpers */ "u2cq");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");




/**
 * Represen boolExpr ? someExpr : someExpr
 * EMPTY_OPERATOR Instruction Instruction Instruction
 */
class ConditionalExprInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_2__["ExprInstruction"] {
    constructor({ cond, left, right, ...settings }) {
        // todo: do not use {left.type} here
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_ConditionalExpr, type: left.type, ...settings });
        console.assert(_lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["type"].equals(left.type, right.type, true));
        this._cond = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(cond, this);
        this._leftValue = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(left, this);
        this._rightValue = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(right, this);
    }
    get condition() {
        return this._cond;
    }
    get left() {
        return this._leftValue;
    }
    get right() {
        return this._rightValue;
    }
    toCode() {
        var code = '(';
        code += this.condition.toCode();
        code += '?';
        code += this.left.toCode();
        code += ':';
        code += this.right.toCode();
        code += ')';
        return code;
    }
    isConst() {
        return this.condition.isConst() &&
            this.left.isConst();
    }
}


/***/ }),

/***/ "cuAd":
/*!*******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/part/SpawnInstruction.ts ***!
  \*******************************************************************/
/*! exports provided: SpawnInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpawnInstruction", function() { return SpawnInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _StmtInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StmtInstruction */ "oseZ");


class SpawnInstruction extends _StmtInstruction__WEBPACK_IMPORTED_MODULE_1__["StmtInstruction"] {
    constructor({ count, name, args, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_SpawnStmt, ...settings });
        this._fx = null;
        this._init = null;
        this.count = count;
        this.args = args;
        this.name = name;
    }
    get fx() {
        return this._fx;
    }
    get init() {
        return this._init;
    }
    toCode() {
        return `spawn(${this.count}) ${this.name}(${this.args.map(arg => arg.toCode()).join(', ')});`;
    }
    // delayed resolve of the spawn instructions
    $resolve(fx, init) {
        this._fx = fx;
        this._init = init;
    }
}


/***/ }),

/***/ "fb8x":
/*!***************************!*\
  !*** ./src/lib/common.ts ***!
  \***************************/
/*! exports provided: typeOf, isDef, isDefAndNotNull, isEmpty, isNull, isBoolean, isString, isNumber, isFloat, isInt, isUint, isFunction, isObject, isArrayBuffer, isTypedArray, isBlob, isArray, deepEqual, assert, verbose, mwalk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return typeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefAndNotNull", function() { return isDefAndNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFloat", function() { return isFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInt", function() { return isInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUint", function() { return isUint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return isArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return isTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlob", function() { return isBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEqual", function() { return deepEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verbose", function() { return verbose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mwalk", function() { return mwalk; });
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

/***/ "fjuh":
/*!********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/CompileExprInstruction.ts ***!
  \********************************************************************/
/*! exports provided: CompileExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompileExprInstruction", function() { return CompileExprInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



/**
  * Represetn compile vs_func(...args)
  * compile IdExprInstruction ExprInstruction ... ExprInstruction
  */
class CompileExprInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__["ExprInstruction"] {
    constructor({ operand, args = null, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_CompileExpr, ...settings });
        this._operand = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(operand, this);
        this._args = (args || []).map(arg => _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(arg, this));
    }
    get function() {
        return this._operand;
    }
    get args() {
        return this._args;
    }
}


/***/ }),

/***/ "fuca":
/*!*********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/PostfixIndexInstruction.ts ***!
  \*********************************************************************/
/*! exports provided: PostfixIndexInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostfixIndexInstruction", function() { return PostfixIndexInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



/**
 * Represent element[index]
 * EMPTY_OPERATOR Instruction ExprInstruction
 */
class PostfixIndexInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__["ExprInstruction"] {
    constructor({ element, index, ...settings }) {
        super({
            instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PostfixIndexExpr,
            type: element.type.arrayElementType, ...settings
        });
        this.element = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(element, this);
        this.index = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(index, this);
    }
    toCode() {
        return `${this.element.toCode()}[${this.index.toCode()}]`;
    }
    isConst() {
        return this.element.isConst() && this.index.isConst();
    }
}


/***/ }),

/***/ "gf1s":
/*!*********************************!*\
  !*** ./src/lib/idl/ITexture.ts ***!
  \*********************************/
/*! exports provided: ETextureFilters, ETextureWrapModes, ETextureParameters, ETextureTypes, ECubeFace, ETextureCubeFlags, ETextureUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETextureFilters", function() { return ETextureFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETextureWrapModes", function() { return ETextureWrapModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETextureParameters", function() { return ETextureParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETextureTypes", function() { return ETextureTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECubeFace", function() { return ECubeFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETextureCubeFlags", function() { return ETextureCubeFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETextureUnits", function() { return ETextureUnits; });
var ETextureFilters;
(function (ETextureFilters) {
    ETextureFilters[ETextureFilters["UNDEF"] = 0] = "UNDEF";
    ETextureFilters[ETextureFilters["NEAREST"] = 9728] = "NEAREST";
    ETextureFilters[ETextureFilters["LINEAR"] = 9729] = "LINEAR";
    ETextureFilters[ETextureFilters["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
    ETextureFilters[ETextureFilters["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
    ETextureFilters[ETextureFilters["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
    ETextureFilters[ETextureFilters["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
})(ETextureFilters || (ETextureFilters = {}));
var ETextureWrapModes;
(function (ETextureWrapModes) {
    ETextureWrapModes[ETextureWrapModes["UNDEF"] = 0] = "UNDEF";
    ETextureWrapModes[ETextureWrapModes["REPEAT"] = 10497] = "REPEAT";
    ETextureWrapModes[ETextureWrapModes["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
    ETextureWrapModes[ETextureWrapModes["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(ETextureWrapModes || (ETextureWrapModes = {}));
var ETextureParameters;
(function (ETextureParameters) {
    ETextureParameters[ETextureParameters["MAG_FILTER"] = 10240] = "MAG_FILTER";
    ETextureParameters[ETextureParameters["MIN_FILTER"] = 10241] = "MIN_FILTER";
    ETextureParameters[ETextureParameters["WRAP_S"] = 10242] = "WRAP_S";
    ETextureParameters[ETextureParameters["WRAP_T"] = 10243] = "WRAP_T";
})(ETextureParameters || (ETextureParameters = {}));
var ETextureTypes;
(function (ETextureTypes) {
    ETextureTypes[ETextureTypes["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
    ETextureTypes[ETextureTypes["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
})(ETextureTypes || (ETextureTypes = {}));
var ECubeFace;
(function (ECubeFace) {
    ECubeFace[ECubeFace["POSITIVE_X"] = 0] = "POSITIVE_X";
    ECubeFace[ECubeFace["NEGATIVE_X"] = 1] = "NEGATIVE_X";
    ECubeFace[ECubeFace["POSITIVE_Y"] = 2] = "POSITIVE_Y";
    ECubeFace[ECubeFace["NEGATIVE_Y"] = 3] = "NEGATIVE_Y";
    ECubeFace[ECubeFace["POSITIVE_Z"] = 4] = "POSITIVE_Z";
    ECubeFace[ECubeFace["NEGATIVE_Z"] = 5] = "NEGATIVE_Z";
})(ECubeFace || (ECubeFace = {}));
var ETextureCubeFlags;
(function (ETextureCubeFlags) {
    ETextureCubeFlags[ETextureCubeFlags["POSITIVE_X"] = 1] = "POSITIVE_X";
    ETextureCubeFlags[ETextureCubeFlags["NEGATIVE_X"] = 2] = "NEGATIVE_X";
    ETextureCubeFlags[ETextureCubeFlags["POSITIVE_Y"] = 4] = "POSITIVE_Y";
    ETextureCubeFlags[ETextureCubeFlags["NEGATIVE_Y"] = 8] = "NEGATIVE_Y";
    ETextureCubeFlags[ETextureCubeFlags["POSITIVE_Z"] = 12] = "POSITIVE_Z";
    ETextureCubeFlags[ETextureCubeFlags["NEGATIVE_Z"] = 16] = "NEGATIVE_Z";
})(ETextureCubeFlags || (ETextureCubeFlags = {}));
var ETextureUnits;
(function (ETextureUnits) {
    ETextureUnits[ETextureUnits["TEXTURE0"] = 33984] = "TEXTURE0";
})(ETextureUnits || (ETextureUnits = {}));


/***/ }),

/***/ "ggRF":
/*!*****************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/InitExprInstruction.ts ***!
  \*****************************************************************/
/*! exports provided: InitExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitExprInstruction", function() { return InitExprInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/helpers */ "u2cq");
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Instruction */ "2b0+");






class InitExprInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_4__["ExprInstruction"] {
    constructor({ type, args = [], ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_InitExpr, type, ...settings });
        this._isArray = false;
        this._args = args.map(arg => _Instruction__WEBPACK_IMPORTED_MODULE_5__["Instruction"].$withParent(arg, this));
        // if (!this.optimizeForVariableType(type)) {
        //     context.error(sourceNode, EErrors.InvalidVariableInitializing, { varName: id.name });
        //     return null;
        // }
    }
    get args() {
        return this._args;
    }
    isArray() {
        return this._isArray;
    }
    toCode() {
        let code = '';
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.type)) {
            code += this.type.toCode();
        }
        code += "(";
        for (let i = 0; i < this.args.length; i++) {
            code += this.args[i].toCode();
            if (i !== this.args.length - 1) {
                code += ",";
            }
        }
        code += ")";
        return code;
    }
    isConst() {
        let bConst;
        let args = this.args;
        for (let i = 0; i < args.length; i++) {
            if (!args[i].isConst()) {
                return false;
            }
        }
        return true;
    }
    /**
     *
     * @param type The type of the variable for which the initializer was created.
     */
    // TODO: move it to Analysis.ts
    optimizeForVariableType(type) {
        // It's a global user defined array or just not unit array;
        // Trying to exclude types like float1.
        if ((type.isNotBaseArray() && type.scope.type <= _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EScopeType"].k_Global) ||
            (type.isArray() && this.args.length > 1)) {
            if (type.length === _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_LENGTH ||
                (type.isNotBaseArray() && this.args.length !== type.length) ||
                (!type.isNotBaseArray() && this.args.length !== type.baseType.length)) {
                return false;
            }
            if (type.isNotBaseArray()) {
                this._isArray = true;
            }
            let arrayElementType = type.arrayElementType;
            let isOk = false;
            let testedInstruction = null;
            for (let i = 0; i < this.args.length; i++) {
                testedInstruction = this.args[i];
                if (testedInstruction.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_InitExpr) {
                    isOk = testedInstruction.optimizeForVariableType(arrayElementType);
                    if (!isOk) {
                        return false;
                    }
                }
                else {
                    if (_lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["isSamplerType"](arrayElementType)) {
                        if (testedInstruction.instructionType !== _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_SamplerStateBlockExpr) {
                            return false;
                        }
                    }
                    else {
                        isOk = testedInstruction.type.isEqual(arrayElementType);
                        if (!isOk) {
                            return false;
                        }
                    }
                }
            }
            this._type = type.baseType;
            return true;
        }
        else {
            let firstInstruction = this.args[0];
            if (this.args.length === 1 &&
                firstInstruction.instructionType !== _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_InitExpr) {
                if (_lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["isSamplerType"](type)) {
                    if (firstInstruction.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_SamplerStateBlockExpr) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                if (firstInstruction.type.isEqual(type)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (this.args.length === 1) {
                return false;
            }
            let args = this.args;
            let fieldNameList = type.fieldNames;
            for (let i = 0; i < args.length; i++) {
                let pFieldType = type.getField(fieldNameList[i]).type;
                if (!args[i].optimizeForVariableType(pFieldType)) {
                    return false;
                }
            }
            this._type = type.baseType;
            return true;
        }
    }
    /** @deprecated */
    evaluate() {
        if (!this.isConst()) {
            this._evalResult = null;
            return false;
        }
        let res = null;
        if (this._isArray) {
            res = new Array(this.args.length);
            for (let i = 0; i < this.args.length; i++) {
                let evalInstruction = this.args[i];
                if (evalInstruction.evaluate()) {
                    res[i] = evalInstruction.getEvalValue();
                }
            }
        }
        else if (this.args.length === 1) {
            let pEvalInstruction = this.args[0];
            pEvalInstruction.evaluate();
            res = pEvalInstruction.getEvalValue();
        }
        else {
            let jsTypeCtor = _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["getExternalType"](this.type);
            let args = new Array(this.args.length);
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(jsTypeCtor)) {
                return false;
            }
            try {
                if (_lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_2__["isScalarType"](this.type)) {
                    let testedInstruction = this.args[1];
                    if (this.args.length > 2 || !testedInstruction.evaluate()) {
                        return false;
                    }
                    res = jsTypeCtor(testedInstruction.getEvalValue());
                }
                else {
                    for (let i = 0; i < this.args.length; i++) {
                        let testedInstruction = this.args[i];
                        if (testedInstruction.evaluate()) {
                            args[i] = testedInstruction.getEvalValue();
                        }
                        else {
                            return false;
                        }
                    }
                    res = new jsTypeCtor;
                    res.set.apply(res, args);
                }
            }
            catch (e) {
                return false;
            }
        }
        this._evalResult = res;
        return true;
    }
}


/***/ }),

/***/ "h4FD":
/*!***************************************!*\
  !*** ./src/lib/parser/ASTDocument.ts ***!
  \***************************************/
/*! exports provided: EParsingErrors, ParsingDiagnostics, ASTDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EParsingErrors", function() { return EParsingErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParsingDiagnostics", function() { return ParsingDiagnostics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASTDocument", function() { return ASTDocument; });
/* harmony import */ var _lib_bf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/bf */ "U+xq");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/parser/IParser */ "LhMq");
/* harmony import */ var _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/util/Diagnostics */ "/zHR");
/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lexer */ "TYG3");
/* harmony import */ var _ParseTree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ParseTree */ "2D+5");
/* harmony import */ var _symbols__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbols */ "YPfw");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "wYUO");









var EParsingErrors;
(function (EParsingErrors) {
    EParsingErrors[EParsingErrors["SyntaxUnknownError"] = 2051] = "SyntaxUnknownError";
    EParsingErrors[EParsingErrors["SyntaxUnexpectedEOF"] = 2052] = "SyntaxUnexpectedEOF";
    EParsingErrors[EParsingErrors["SyntaxRecoverableStateNotFound"] = 2053] = "SyntaxRecoverableStateNotFound";
    EParsingErrors[EParsingErrors["GeneralCouldNotReadFile"] = 2200] = "GeneralCouldNotReadFile";
    EParsingErrors[EParsingErrors["GeneralParsingLimitIsReached"] = 2201] = "GeneralParsingLimitIsReached";
})(EParsingErrors || (EParsingErrors = {}));
;
class ParsingDiagnostics extends _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_3__["Diagnostics"] {
    constructor() {
        super("Parsing diagnostics", 'P');
    }
    resolveFilename(code, desc) {
        return desc.file;
    }
    resolveRange(code, desc) {
        switch (code) {
            case EParsingErrors.SyntaxUnknownError:
            case EParsingErrors.SyntaxUnexpectedEOF:
                return desc.token.loc;
            case EParsingErrors.GeneralCouldNotReadFile:
                return desc.loc;
        }
        return null;
    }
    resolvePosition(code, desc) {
        console.assert(code != EParsingErrors.SyntaxUnknownError);
        return { line: desc.line, column: 0, file: null };
    }
    diagnosticMessages() {
        return {
            [EParsingErrors.SyntaxUnknownError]: "Syntax error during parsing. Token: '{token.value}'\n" +
                "Line: {token.loc.start.line}. Column: {token.loc.start.column}.",
            [EParsingErrors.SyntaxUnexpectedEOF]: "Syntax error. Unexpected EOF.",
            [EParsingErrors.GeneralCouldNotReadFile]: "Could not read file '{target}'.",
            [EParsingErrors.GeneralParsingLimitIsReached]: "Parsing limit is reached.",
            [EParsingErrors.SyntaxRecoverableStateNotFound]: "Recoverable state not found."
        };
    }
}
function cloneToken(token) {
    return {
        ...token,
        loc: {
            start: { ...token.loc.start },
            end: { ...token.loc.end }
        }
    };
}
// class Context {
//     allowErrorRecoverty: boolean = true;
//     developerMode: boolean = false;
//     lexer: Lexer;
//     diagnostics: ParsingDiagnostics;
//     knownTypes: Set<string>;
//     ruleFunctions: Map<string, IRuleFunction>;
//     stack: number[] = [0];
//     constructor() {
//         this.diagnostics = new ParsingDiagnostics;
//     }
//     readToken() {
//         return this.lexer.getNextToken();
//     }
//     private error(code: number, token: IToken) {
//         this.diagnostics.error(code, { ...this.lexer.getLocation(), token });
//     }
//     private critical(code: number, token: IToken = null) {
//         this.diagnostics.critical(code, { ...this.lexer.getLocation(), token });
//     }
// }
class ASTDocument {
    constructor(config) {
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(config.parser, 'parser engine is not defined');
        this.init(config);
    }
    init({ parser, knownTypes = new Set(), ruleFunctions = new Map }) {
        const lexerEngine = parser.lexerEngine;
        this.parser = parser;
        this.knownTypes = knownTypes;
        this.ruleFunctions = ruleFunctions;
        this.lexer = new _Lexer__WEBPACK_IMPORTED_MODULE_4__["Lexer"]({
            engine: lexerEngine,
            knownTypes
        });
    }
    get uri() {
        return this.lexer.uri.toString();
    }
    get diagnosticReport() {
        let lexerReport = this.lexer.getDiagnosticReport();
        let parserReport = this.diag.resolve();
        return _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_3__["Diagnostics"].mergeReports([lexerReport, parserReport]);
    }
    get root() {
        return this.tree.root;
    }
    async parse(textDocument, flags = _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["IASTDocumentFlags"].k_Optimize) {
        const developerMode = _lib_bf__WEBPACK_IMPORTED_MODULE_0__["default"].testAll(flags, _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["IASTDocumentFlags"].k_DeveloperMode);
        const allowErrorRecoverty = true;
        const optimizeTree = _lib_bf__WEBPACK_IMPORTED_MODULE_0__["default"].testAll(flags, _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["IASTDocumentFlags"].k_Optimize);
        this.diag = new ParsingDiagnostics;
        this.tree = new _ParseTree__WEBPACK_IMPORTED_MODULE_5__["ParseTree"](optimizeTree);
        this.stack = [0];
        this.lexer.setup(textDocument);
        this.token = this.readToken();
        if (this.token.value === _symbols__WEBPACK_IMPORTED_MODULE_6__["END_SYMBOL"]) {
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserCode"].k_Ok;
        }
        await this.run({ developerMode, allowErrorRecoverty });
        // clear context
        // this.stack = null;
        // this.lexer = null;
        // this.token = null;
        // diag
        // tree
        // end of clear
        if (this.diag.hasErrors()) {
            console.error('parsing was ended with errors.');
            return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserCode"].k_Error;
        }
        return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EParserCode"].k_Ok;
    }
    readToken() {
        return this.lexer.getNextToken();
    }
    emitError(code, token) {
        this.diag.error(code, { ...this.lexer.getLocation(), token });
    }
    emitCritical(code, token = null) {
        this.diag.critical(code, { ...this.lexer.getLocation(), token });
    }
    restoreState(syntaxTable, parseTree, stack, causingErrorToken, errorToken) {
        while (true) {
            let recoverableState = -1;
            for (let i = stack.length - 1; i >= 0; --i) {
                const errorOp = syntaxTable[stack[i]][_symbols__WEBPACK_IMPORTED_MODULE_6__["ERROR"]];
                const isRecoverableState = (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(errorOp) &&
                    errorOp.type === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Shift &&
                    syntaxTable[errorOp.stateIndex][causingErrorToken.name]);
                if (isRecoverableState) {
                    recoverableState = i;
                    break;
                }
            }
            if (recoverableState !== -1) {
                const recoveredStateIndex = stack[recoverableState];
                // current op will be: syntaxTable[recoveredStateIndex][ERROR];
                let stackDiff = stack.length - 1 - recoverableState;
                while (stackDiff != 0) {
                    // extend error token location with the already processed tokens
                    parseTree.$pop(errorToken.loc);
                    stack.pop();
                    stackDiff--;
                }
                // recoverable state found so continue normal processing as it would be before the error
                return recoveredStateIndex;
            }
            Object(_util__WEBPACK_IMPORTED_MODULE_7__["extendRange"])(errorToken.loc, causingErrorToken.loc);
            if (causingErrorToken.value === _symbols__WEBPACK_IMPORTED_MODULE_6__["END_SYMBOL"]) {
                // state cant be recovered
                break;
            }
            // try to restore from the next token
            // FIXME: 
            const nextToken = this.readToken();
            Object.keys(nextToken).forEach(key => causingErrorToken[key] = nextToken[key]);
        }
        return -1;
    }
    async operationAdditionalAction(stateIndex, grammarSymbol) {
        const funcName = this.parser.findFunctionByState(stateIndex, grammarSymbol);
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(funcName)) {
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(!!this.ruleFunctions.has(funcName));
            return await this.ruleFunctions.get(funcName)();
        }
        return _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Ok;
    }
    async run({ developerMode = false, allowErrorRecoverty = true }) {
        const { syntaxTable } = this.parser;
        const { stack, tree } = this;
        const undefinedToken = { index: -1, name: null, value: null };
        let causingErrorToken = undefinedToken;
        // debug mode
        const opLimit = 10000;
        let opCounter = 0;
        try {
            breakProcessing: while (true) {
                // global recursion prevention in debug mode
                if (developerMode) {
                    if (opCounter > opLimit) {
                        this.emitCritical(EParsingErrors.GeneralParsingLimitIsReached);
                    }
                    opCounter++;
                }
                let currStateIndex = stack[stack.length - 1];
                let op = syntaxTable[currStateIndex][this.token.name];
                if (allowErrorRecoverty) {
                    if (!op) {
                        // recursion prevention
                        if (causingErrorToken.index !== this.token.index) {
                            if (this.token.value === _symbols__WEBPACK_IMPORTED_MODULE_6__["END_SYMBOL"]) {
                                this.emitError(EParsingErrors.SyntaxUnexpectedEOF, this.token);
                            }
                            else {
                                this.emitError(EParsingErrors.SyntaxUnknownError, this.token);
                            }
                        }
                        else {
                            // one more attempt to recover but from the next token
                            this.token = this.readToken();
                            // NOTE: in order to prevent recusrion on END_SYMBOL
                            causingErrorToken = undefinedToken;
                            continue;
                        }
                        causingErrorToken = cloneToken(this.token);
                        // token = { ...token, name: ERROR };
                        this.token = { ...cloneToken(this.token), name: _symbols__WEBPACK_IMPORTED_MODULE_6__["ERROR"] };
                    }
                    op = syntaxTable[currStateIndex][this.token.name];
                    const errorProcessing = this.token.name === _symbols__WEBPACK_IMPORTED_MODULE_6__["ERROR"];
                    const errorReductionEnded = !op || (errorProcessing && (op.type === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Shift));
                    // state must be recovered if operation is undefined or error reduction was ended. 
                    if (errorReductionEnded) {
                        // NOTE: recoveryToken, token, stack and parseTree will be update imlicitly inside the state restore routine. 
                        let recoveryToken = cloneToken(causingErrorToken);
                        while (recoveryToken.name === _symbols__WEBPACK_IMPORTED_MODULE_6__["UNKNOWN_TOKEN"]) {
                            recoveryToken = this.readToken();
                        }
                        currStateIndex = this.restoreState(syntaxTable, tree, stack, recoveryToken, this.token /* error token */);
                        if (currStateIndex === -1) {
                            this.emitCritical(EParsingErrors.SyntaxRecoverableStateNotFound);
                        }
                        // perform error shift op.
                        op = syntaxTable[currStateIndex][this.token.name]; // token.name === 'ERROR'
                        stack.push(op.stateIndex);
                        tree.addToken(this.token /* error token */);
                        this.token = recoveryToken;
                        // const nextOp = syntaxTable[op.stateIndex][token.name];
                        // if (nextOp.type === EOperationType.k_Reduce) {
                        //     tokenBuffer.push(rec);
                        // }
                        // return to normal precesing loop
                        continue;
                    }
                }
                if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isDef"])(op)) {
                    switch (op.type) {
                        case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Success:
                            break breakProcessing;
                        case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Shift:
                            {
                                const stateIndex = op.stateIndex;
                                stack.push(stateIndex);
                                tree.addToken(this.token);
                                const additionalOperationCode = await this.operationAdditionalAction(stateIndex, this.token.name);
                                if (additionalOperationCode === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Error) {
                                    this.emitCritical(EParsingErrors.SyntaxUnknownError, this.token);
                                }
                                else if (additionalOperationCode === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Ok) {
                                    this.token = this.readToken();
                                }
                            }
                            break;
                        case _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Reduce:
                            {
                                const ruleLength = op.rule.right.length;
                                stack.length -= ruleLength;
                                const stateIndex = syntaxTable[stack[stack.length - 1]][op.rule.left].stateIndex;
                                stack.push(stateIndex);
                                tree.reduceByRule(op.rule, this.parser.getRuleCreationMode(op.rule.left));
                                const additionalOperationCode = await this.operationAdditionalAction(stateIndex, op.rule.left);
                                if (additionalOperationCode === _lib_idl_parser_IParser__WEBPACK_IMPORTED_MODULE_2__["EOperationType"].k_Error) {
                                    this.emitCritical(EParsingErrors.SyntaxUnknownError, this.token);
                                }
                            }
                            break;
                    }
                }
                else {
                    Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(!allowErrorRecoverty, `unexpected end, something went wrong :/`);
                    this.emitCritical(EParsingErrors.SyntaxUnknownError, this.token);
                }
            }
            tree.finishTree();
        }
        catch (e) {
            if (!(e instanceof _lib_util_Diagnostics__WEBPACK_IMPORTED_MODULE_3__["DiagnosticException"])) {
                throw e;
            }
        }
    }
}


/***/ }),

/***/ "hljw":
/*!*********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/VariableTypeInstruction.ts ***!
  \*********************************************************************/
/*! exports provided: VariableTypeInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableTypeInstruction", function() { return VariableTypeInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/helpers */ "u2cq");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");




class VariableTypeInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"] {
    constructor({ type, usages = [], arrayIndex = null, writable = true, readable = true, padding = _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_PADDING, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_VariableType, ...settings });
        type = type.$withNoParent();
        this._usageList = [];
        let instrType = type.instructionType;
        if (instrType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_ProxyType ||
            instrType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_SystemType ||
            instrType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_ComplexType) {
            this._subType = type;
        }
        else {
            let varType = type;
            // TODO: review this code
            if (!varType.isNotBaseArray()) {
                this._subType = varType.subType;
                varType.usages.forEach(usage => this.addUsage(usage));
            }
            else {
                this._subType = type;
            }
        }
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDefAndNotNull"])(this._subType));
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDefAndNotNull"])(this._usageList));
        this._isWritable = writable;
        this._isReadable = readable;
        this._arrayIndexExpr = null;
        this._arrayElementType = null;
        this._padding = padding;
        if (arrayIndex) {
            //TODO: add support for v[][10]
            this._arrayElementType = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(new VariableTypeInstruction({ scope: this.scope, type: this.subType, usages: this._usageList }), this);
            this._arrayIndexExpr = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(arrayIndex, this);
        }
        usages.forEach(usage => this.addUsage(usage));
        // todo: construct arrayElementType here! with proper usages!
        // if (this.isArray()) {
        //     if (isNull(this._arrayElementType)) {
        //         this._arrayElementType = Instruction.$withParent(new VariableTypeInstruction({ scope: this.scope, type: this.subType.arrayElementType, usages: this.usageList }), this);
        //     }
        // }
    }
    get name() {
        return this.baseType.name;
    }
    get writable() {
        if (!this._isWritable) {
            return false;
        }
        if ((this.isArray() && !this.isBase()) || this.isUniform()) {
            return false;
        }
        if (this.isConst()) {
            return false;
        }
        // check for hasUsage('in') ?
        return this.subType.writable;
    }
    get readable() {
        if (!this._isReadable) {
            return false;
        }
        if (this.hasUsage("out")) {
            return false;
        }
        return this.subType.readable;
    }
    get methods() {
        return this.subType.methods;
    }
    // TODO: move to helpers
    get size() {
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._arrayElementType)) {
            const size = this._arrayElementType.size;
            const length = this.length;
            if (length === _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_LENGTH || size === _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_SIZE) {
                return _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_SIZE;
            }
            return size * length;
        }
        return this.subType.size;
    }
    get baseType() {
        return this.subType.baseType;
    }
    get length() {
        if (!this.isNotBaseArray()) {
            return this.subType.length;
        }
        if (this.isNotBaseArray() && Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._arrayElementType)) {
            return this.subType.length;
        }
        // TODO: rework evaluation api!
        let isEval = this._arrayIndexExpr.evaluate();
        if (isEval) {
            let iValue = this._arrayIndexExpr.getEvalValue();
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(iValue)) {
                return iValue;
            }
        }
        return _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["instruction"].UNDEFINE_LENGTH;
    }
    get padding() {
        return this._padding;
    }
    get arrayElementType() {
        if (!this.isArray()) {
            return null;
        }
        // todo: fix this.subType.arrayElementType!
        return this._arrayElementType || this.subType.arrayElementType;
    }
    get fieldNames() {
        return this.subType.fieldNames;
    }
    get usages() {
        return this._usageList;
    }
    get subType() {
        return this._subType;
    }
    get fields() {
        return this.subType.fields;
    }
    toString() {
        // TODO: fix this condition
        return this.name || this.subType.toString() || _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["type"].hash(this);
    }
    toCode() {
        let code = "";
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._usageList)) {
            for (let i = 0; i < this._usageList.length; i++) {
                code += this._usageList[i] + " ";
            }
        }
        code += this.subType.toCode();
        return code;
    }
    /** @deprecated */
    isEqual(value) {
        return _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_1__["type"].equals(this, value);
    }
    /** @deprecated */
    toDeclString() {
        return this.subType.toDeclString();
    }
    // todo: add explanation!
    isBase() {
        return this.subType.isBase() && Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._arrayElementType);
    }
    isArray() {
        return !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._arrayElementType) || this.subType.isArray();
    }
    // Returns true if the type is user defined array.
    // like an ordinary array: int a[5]
    // not a base array like: float4/int3 etc.
    isNotBaseArray() {
        return !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._arrayElementType) || this.subType.isNotBaseArray();
    }
    isComplex() {
        return this.subType.isComplex();
    }
    /** @deprecated */
    isContainArray() {
        return this.subType.isContainArray();
    }
    /** @deprecated */
    isContainSampler() {
        return this.subType.isContainSampler();
    }
    /** @deprecated */
    isContainComplexType() {
        return this.subType.isContainComplexType();
    }
    isUniform() {
        return this.hasUsage("uniform");
    }
    isConst() {
        return this.hasUsage("const");
    }
    isSampler() {
        return !this.isNotBaseArray() && this.subType.isSampler();
    }
    isTexture() {
        return !this.isNotBaseArray() && this.subType.isTexture();
    }
    isUAV() {
        return !this.isNotBaseArray() && this.subType.isUAV();
    }
    $overwritePadding(val) {
        this._padding = val;
    }
    addUsage(usage) {
        if (!this.hasUsage(usage)) {
            this._usageList.push(usage);
        }
    }
    hasField(fieldName) {
        return this.subType.hasField(fieldName);
    }
    hasFieldWithSematics(semantic) {
        return this.subType.hasFieldWithSematics(semantic);
    }
    hasAllUniqueSemantics() {
        return this.subType.hasAllUniqueSemantics();
    }
    hasFieldWithoutSemantics() {
        return this.subType.hasFieldWithoutSemantics();
    }
    getField(fieldName) {
        // TODO: propogate usages?
        return this.subType.getField(fieldName);
    }
    getMethod(methodName, args) {
        return this.subType.getMethod(methodName, args);
    }
    getFieldBySemantics(semantic) {
        // TODO: propogate usages?
        return this.subType.getFieldBySemantics(semantic);
    }
    hasUsage(usage) {
        if (this._usageList.find(knownUsage => knownUsage === usage)) {
            return true;
        }
        if (!Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this.subType) && this.subType.instructionType === _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_VariableType) {
            return this.subType.hasUsage(usage);
        }
        return false;
    }
    /**
     * Helpers
     */
    static wrap(type, scope) {
        return new VariableTypeInstruction({ type, scope });
    }
    static wrapAsConst(type, scope) {
        return new VariableTypeInstruction({ type, scope, writable: false, usages: ['const'] });
    }
}


/***/ }),

/***/ "hsO8":
/*!********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/FunctionDefInstruction.ts ***!
  \********************************************************************/
/*! exports provided: FunctionDefInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionDefInstruction", function() { return FunctionDefInstruction; });
/* harmony import */ var _lib_fx_analisys_instructions_DeclInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/instructions/DeclInstruction */ "mXWi");
/* harmony import */ var _lib_fx_analisys_instructions_Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/instructions/Instruction */ "2b0+");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/fx/analisys/helpers */ "u2cq");




/**
 * Represent type func(...args)[:Semantic]
 * EMPTY_OPERTOR VariableTypeInstruction IdInstruction VarDeclInstruction ... VarDeclInstruction
 */
class FunctionDefInstruction extends _lib_fx_analisys_instructions_DeclInstruction__WEBPACK_IMPORTED_MODULE_0__["DeclInstruction"] {
    constructor({ returnType, id, paramList = [], ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_FunctionDef, ...settings });
        this.params = paramList.map(param => _lib_fx_analisys_instructions_Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(param, this));
        this.returnType = _lib_fx_analisys_instructions_Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(returnType, this);
        this._id = _lib_fx_analisys_instructions_Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(id, this);
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._id.name;
    }
    toString() {
        let def = _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_3__["type"].signature(this.returnType) + " " + this.name + "(";
        for (let i = 0; i < this.params.length; i++) {
            def += _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_3__["type"].signature(this.params[i].type) + ",";
        }
        def += ")";
        // TODO: add semantic
        return def;
    }
    toCode() {
        const { _id: id, returnType, params } = this;
        return `${returnType.toCode()} ${id.toCode()}(${params.map(param => param.toCode()).join(', ')})`;
    }
}


/***/ }),

/***/ "huhI":
/*!*****************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ExprStmtInstruction.ts ***!
  \*****************************************************************/
/*! exports provided: ExprStmtInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExprStmtInstruction", function() { return ExprStmtInstruction; });
/* harmony import */ var _lib_fx_analisys_instructions_Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/instructions/Instruction */ "2b0+");
/* harmony import */ var _lib_fx_analisys_instructions_StmtInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/instructions/StmtInstruction */ "oseZ");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");



/**
 * Represent expr;
 * EMPTY_OPERTOR ExprInstruction
 */
class ExprStmtInstruction extends _lib_fx_analisys_instructions_StmtInstruction__WEBPACK_IMPORTED_MODULE_1__["StmtInstruction"] {
    constructor({ expr, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_ExprStmt, ...settings });
        this._expr = _lib_fx_analisys_instructions_Instruction__WEBPACK_IMPORTED_MODULE_0__["Instruction"].$withParent(expr, this);
    }
    get expr() {
        return this._expr;
    }
    toCode() {
        return this._expr.toCode() + ';';
    }
}


/***/ }),

/***/ "i81d":
/*!********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ComplexTypeInstruction.ts ***!
  \********************************************************************/
/*! exports provided: ComplexTypeInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexTypeInstruction", function() { return ComplexTypeInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/EAnalyzerErrors */ "zioJ");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "u2cq");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Instruction */ "2b0+");






class ComplexTypeInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_5__["Instruction"] {
    constructor({ name = null, fields, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_ComplexType, ...settings });
        this._name = name;
        this._fields = {};
        this._isContainArray = false;
        this._isContainSampler = false;
        this._isContainComplexType = false;
        this.addFields(fields.filter(field => !Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(field)).map(field => _Instruction__WEBPACK_IMPORTED_MODULE_5__["Instruction"].$withParent(field, this)));
    }
    get writable() {
        return true;
    }
    get readable() {
        return true;
    }
    get name() {
        return this._name;
    }
    get size() {
        return this.calcSize();
    }
    get baseType() {
        return this;
    }
    get arrayElementType() {
        return null;
    }
    get typeDecl() {
        return this.parent;
    }
    get length() {
        return 0;
    }
    get fieldNames() {
        return Object.keys(this._fields);
    }
    get fields() {
        return this.fieldNames.map(name => this._fields[name]);
    }
    get methods() {
        return [];
    }
    isSampler() {
        return false;
    }
    isTexture() {
        return false;
    }
    isUAV() {
        return false;
    }
    toString() {
        return this.name || _helpers__WEBPACK_IMPORTED_MODULE_4__["type"].hash(this);
    }
    /** @deprecated */
    toDeclString() {
        var code = "struct " + this._name + "{";
        for (var i = 0; i < this.fields.length; i++) {
            code += "\t" + this.fields[i].toCode() + ";\n";
        }
        code += "}";
        return code;
    }
    /** @deprecated */
    isEqual(value) {
        return _helpers__WEBPACK_IMPORTED_MODULE_4__["type"].equals(this, value);
    }
    toCode() {
        return this._name;
    }
    isBase() {
        return false;
    }
    isArray() {
        return false;
    }
    isNotBaseArray() {
        return false;
    }
    isComplex() {
        return true;
    }
    isConst() {
        return false;
    }
    /** @deprecated */
    isContainArray() {
        return this._isContainArray;
    }
    /** @deprecated */
    isContainSampler() {
        return this._isContainSampler;
    }
    /** @deprecated */
    isContainComplexType() {
        return this._isContainComplexType;
    }
    addField(variable) {
        var varName = variable.name;
        this._fields[varName] = variable;
        var type = variable.type;
        if (type.isNotBaseArray() || type.isContainArray()) {
            this._isContainArray = true;
        }
        if (_lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__["isSamplerType"](type) || type.isContainSampler()) {
            this._isContainSampler = true;
        }
        if (type.isComplex()) {
            this._isContainComplexType = true;
        }
    }
    addFields(fields) {
        for (var i = 0; i < fields.length; i++) {
            this.addField(fields[i]);
        }
        this.calculatePaddings();
    }
    hasField(fieldName) {
        return Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(this._fields[fieldName]);
    }
    hasFieldWithSematics(semantic) {
        return !!this.getFieldBySemantics(semantic);
    }
    getField(fieldName) {
        return this._fields[fieldName] || null;
    }
    getMethod(methodName, args) {
        return null;
    }
    getFieldBySemantics(semantic) {
        for (let i in this._fields) {
            let field = this._fields[i];
            if (semantic == field.semantic) {
                return field;
            }
        }
        return null;
    }
    calcSize() {
        let size = 0;
        for (let i = 0; i < this.fields.length; i++) {
            let iFieldSize = this.fields[i].type.size;
            if (iFieldSize === _helpers__WEBPACK_IMPORTED_MODULE_4__["instruction"].UNDEFINE_SIZE) {
                size = _helpers__WEBPACK_IMPORTED_MODULE_4__["instruction"].UNDEFINE_SIZE;
                break;
            }
            else {
                size += iFieldSize;
            }
        }
        return size;
    }
    hasFieldWithoutSemantics() {
        for (let i in this._fields) {
            let field = this._fields[i];
            let semantic = field.semantic;
            if (semantic == null || semantic == '') {
                return true;
            }
            if (field.type.hasFieldWithoutSemantics()) {
                return true;
            }
        }
        return false;
    }
    hasAllUniqueSemantics() {
        let fieldBySemantics = {};
        for (let i in this._fields) {
            let field = this._fields[i];
            let semantic = field.semantic;
            if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDefAndNotNull"])(fieldBySemantics[semantic])) {
                return false;
            }
            fieldBySemantics[semantic] = field;
            if (field.type.isComplex() && !field.type.hasAllUniqueSemantics()) {
                return false;
            }
        }
        return true;
    }
    calculatePaddings() {
        let padding = 0;
        for (let i = 0; i < this.fields.length; i++) {
            let varType = this.fields[i].type;
            let varSize = varType.size;
            if (varSize === _helpers__WEBPACK_IMPORTED_MODULE_4__["instruction"].UNDEFINE_SIZE) {
                this._setError(_lib_idl_EAnalyzerErrors__WEBPACK_IMPORTED_MODULE_2__["EAnalyzerErrors"].CannotCalcPadding, { typeName: this.name });
                return;
            }
            varType.$overwritePadding(padding);
            padding += varSize;
        }
    }
}


/***/ }),

/***/ "iYqf":
/*!******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/InstructionCollector.ts ***!
  \******************************************************************/
/*! exports provided: InstructionCollector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionCollector", function() { return InstructionCollector; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");


class InstructionCollector extends _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"] {
    constructor({ instructions = [], ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_Collector, ...settings });
        this._instructions = instructions;
    }
    get instructions() {
        return this._instructions;
    }
    push(instr) {
        this._instructions.push(instr);
    }
    toCode() {
        let code = "";
        for (const instr of this.instructions) {
            switch (instr.instructionType) {
                case _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_VariableDecl:
                    code += instr.toCode() + ';\n';
                    break;
                default:
                    code += instr.toCode() + '\n';
            }
        }
        return code;
    }
}


/***/ }),

/***/ "ip/g":
/*!**********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/SemicolonStmtInstruction.ts ***!
  \**********************************************************************/
/*! exports provided: SemicolonStmtInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemicolonStmtInstruction", function() { return SemicolonStmtInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _StmtInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StmtInstruction */ "oseZ");


/**
 * Represent empty statement only semicolon ;
 * ;
 */
class SemicolonStmtInstruction extends _StmtInstruction__WEBPACK_IMPORTED_MODULE_1__["StmtInstruction"] {
    constructor({ ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_SemicolonStmt, ...settings });
    }
    toCode() {
        return ";";
    }
}


/***/ }),

/***/ "jfm7":
/*!*************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/PassInstruction.ts ***!
  \*************************************************************/
/*! exports provided: PassInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassInstruction", function() { return PassInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/ERenderStates */ "6dfp");
/* harmony import */ var _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/ERenderStateValues */ "2blz");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/idl/ITexture */ "gf1s");
/* harmony import */ var _DeclInstruction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeclInstruction */ "mXWi");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Instruction */ "2b0+");








class PassInstruction extends _DeclInstruction__WEBPACK_IMPORTED_MODULE_5__["DeclInstruction"] {
    constructor({ id = null, vertexShader = null, pixelShader = null, renderStates = {}, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_3__["EInstructionTypes"].k_PassDecl, ...settings });
        this._passStateMap = {};
        PassInstruction.clearRenderStateMap(this._passStateMap);
        PassInstruction.copyRenderStateMap(renderStates, this._passStateMap);
        this._vertexShader = _Instruction__WEBPACK_IMPORTED_MODULE_6__["Instruction"].$withNoParent(vertexShader);
        this._pixelShader = _Instruction__WEBPACK_IMPORTED_MODULE_6__["Instruction"].$withNoParent(pixelShader);
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get name() {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(this._id)) {
            return null;
        }
        return this._id.name;
    }
    get vertexShader() {
        return this._vertexShader;
    }
    get pixelShader() {
        return this._pixelShader;
    }
    getState(state) {
        return this._passStateMap[state];
    }
    get renderStates() {
        return this._passStateMap;
    }
    // TODO: move it to helpers
    static createRenderStateMap() {
        let map = {};
        PassInstruction.clearRenderStateMap(map);
        return map;
    }
    // TODO: move it to helpers
    static copyRenderStateMap(from, to) {
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(from)) {
            return;
        }
        Object
            .keys(_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_1__["ERenderStates"])
            .filter(k => Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_1__["ERenderStates"][k]))
            .map(k => _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_1__["ERenderStates"][k])
            .forEach(rs => { to[rs] = from[rs] || to[rs]; });
    }
    // TODO: move it to helpers
    static clearRenderStateMap(map) {
        Object
            .keys(_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_1__["ERenderStates"])
            .filter(k => Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(_lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_1__["ERenderStates"][k]))
            .map(k => _lib_idl_ERenderStates__WEBPACK_IMPORTED_MODULE_1__["ERenderStates"][k])
            .forEach(rs => { map[rs] = _lib_idl_ERenderStateValues__WEBPACK_IMPORTED_MODULE_2__["ERenderStateValues"].UNDEF; });
    }
    /** @deprecated */
    // TODO: move it to helpers
    static createSamplerState() {
        return {
            textureName: "",
            texture: null,
            wrap_s: _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_4__["ETextureWrapModes"].UNDEF,
            wrap_t: _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_4__["ETextureWrapModes"].UNDEF,
            mag_filter: _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_4__["ETextureFilters"].UNDEF,
            min_filter: _lib_idl_ITexture__WEBPACK_IMPORTED_MODULE_4__["ETextureFilters"].UNDEF
            /*wrap_s: ETextureWrapModes.CLAMP_TO_EDGE,
            wrap_t: ETextureWrapModes.CLAMP_TO_EDGE,
            mag_filter: ETextureFilters.LINEAR,
            min_filter: ETextureFilters.LINEAR*/
        };
    }
}


/***/ }),

/***/ "kGK+":
/*!******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/StmtBlockInstruction.ts ***!
  \******************************************************************/
/*! exports provided: StmtBlockInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StmtBlockInstruction", function() { return StmtBlockInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");
/* harmony import */ var _StmtInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StmtInstruction */ "oseZ");



/**
 * Represent {stmts}
 * EMPTY_OPERATOR StmtInstruction ... StmtInstruction
 */
class StmtBlockInstruction extends _StmtInstruction__WEBPACK_IMPORTED_MODULE_2__["StmtInstruction"] {
    constructor({ stmtList, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_StmtBlock, ...settings });
        this._stmtList = stmtList.map(stmt => _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(stmt, this));
    }
    get stmtList() {
        return this._stmtList;
    }
    toCode() {
        var code = "{" + "\n";
        for (var i = 0; i < this.stmtList.length; i++) {
            code += "\t" + this.stmtList[i].toCode() + "\n";
        }
        code += "}";
        return code;
    }
}


/***/ }),

/***/ "kmEW":
/*!******************************************************************!*\
  !*** ./node_modules/vscode-languageserver-types/lib/esm/main.js ***!
  \******************************************************************/
/*! exports provided: Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, Diagnostic, Command, TextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolInformation, DocumentSymbol, CodeActionKind, CodeActionContext, CodeAction, CodeLens, FormattingOptions, DocumentLink, EOL, TextDocument, TextDocumentSaveReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationLink", function() { return LocationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInformation", function() { return ColorInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPresentation", function() { return ColorPresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeKind", function() { return FoldingRangeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRange", function() { return FoldingRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticRelatedInformation", function() { return DiagnosticRelatedInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticSeverity", function() { return DiagnosticSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnostic", function() { return Diagnostic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEdit", function() { return TextEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentEdit", function() { return TextDocumentEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFile", function() { return CreateFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameFile", function() { return RenameFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFile", function() { return DeleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceEdit", function() { return WorkspaceEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceChange", function() { return WorkspaceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentIdentifier", function() { return TextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionedTextDocumentIdentifier", function() { return VersionedTextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentItem", function() { return TextDocumentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupKind", function() { return MarkupKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupContent", function() { return MarkupContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemKind", function() { return CompletionItemKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertTextFormat", function() { return InsertTextFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItem", function() { return CompletionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionList", function() { return CompletionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedString", function() { return MarkedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hover", function() { return Hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterInformation", function() { return ParameterInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureInformation", function() { return SignatureInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightKind", function() { return DocumentHighlightKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlight", function() { return DocumentHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolKind", function() { return SymbolKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInformation", function() { return SymbolInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbol", function() { return DocumentSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionKind", function() { return CodeActionKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionContext", function() { return CodeActionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeAction", function() { return CodeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLens", function() { return CodeLens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingOptions", function() { return FormattingOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentLink", function() { return DocumentLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOL", function() { return EOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocument", function() { return TextDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentSaveReason", function() { return TextDocumentSaveReason; });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

/**
 * The Position namespace provides helper functions to work with
 * [Position](#Position) literals.
 */
var Position;
(function (Position) {
    /**
     * Creates a new Position literal from the given line and character.
     * @param line The position's line.
     * @param character The position's character.
     */
    function create(line, character) {
        return { line: line, character: character };
    }
    Position.create = create;
    /**
     * Checks whether the given liternal conforms to the [Position](#Position) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.number(candidate.line) && Is.number(candidate.character);
    }
    Position.is = is;
})(Position || (Position = {}));
/**
 * The Range namespace provides helper functions to work with
 * [Range](#Range) literals.
 */
var Range;
(function (Range) {
    function create(one, two, three, four) {
        if (Is.number(one) && Is.number(two) && Is.number(three) && Is.number(four)) {
            return { start: Position.create(one, two), end: Position.create(three, four) };
        }
        else if (Position.is(one) && Position.is(two)) {
            return { start: one, end: two };
        }
        else {
            throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
        }
    }
    Range.create = create;
    /**
     * Checks whether the given literal conforms to the [Range](#Range) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
    }
    Range.is = is;
})(Range || (Range = {}));
/**
 * The Location namespace provides helper functions to work with
 * [Location](#Location) literals.
 */
var Location;
(function (Location) {
    /**
     * Creates a Location literal.
     * @param uri The location's uri.
     * @param range The location's range.
     */
    function create(uri, range) {
        return { uri: uri, range: range };
    }
    Location.create = create;
    /**
     * Checks whether the given literal conforms to the [Location](#Location) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
    }
    Location.is = is;
})(Location || (Location = {}));
/**
 * The LocationLink namespace provides helper functions to work with
 * [LocationLink](#LocationLink) literals.
 */
var LocationLink;
(function (LocationLink) {
    /**
     * Creates a LocationLink literal.
     * @param targetUri The definition's uri.
     * @param targetRange The full range of the definition.
     * @param targetSelectionRange The span of the symbol definition at the target.
     * @param originSelectionRange The span of the symbol being defined in the originating source file.
     */
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri: targetUri, targetRange: targetRange, targetSelectionRange: targetSelectionRange, originSelectionRange: originSelectionRange };
    }
    LocationLink.create = create;
    /**
     * Checks whether the given literal conforms to the [LocationLink](#LocationLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri)
            && (Range.is(candidate.targetSelectionRange) || Is.undefined(candidate.targetSelectionRange))
            && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
    }
    LocationLink.is = is;
})(LocationLink || (LocationLink = {}));
/**
 * The Color namespace provides helper functions to work with
 * [Color](#Color) literals.
 */
var Color;
(function (Color) {
    /**
     * Creates a new Color literal.
     */
    function create(red, green, blue, alpha) {
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha,
        };
    }
    Color.create = create;
    /**
     * Checks whether the given literal conforms to the [Color](#Color) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.number(candidate.red)
            && Is.number(candidate.green)
            && Is.number(candidate.blue)
            && Is.number(candidate.alpha);
    }
    Color.is = is;
})(Color || (Color = {}));
/**
 * The ColorInformation namespace provides helper functions to work with
 * [ColorInformation](#ColorInformation) literals.
 */
var ColorInformation;
(function (ColorInformation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(range, color) {
        return {
            range: range,
            color: color,
        };
    }
    ColorInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Range.is(candidate.range) && Color.is(candidate.color);
    }
    ColorInformation.is = is;
})(ColorInformation || (ColorInformation = {}));
/**
 * The Color namespace provides helper functions to work with
 * [ColorPresentation](#ColorPresentation) literals.
 */
var ColorPresentation;
(function (ColorPresentation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(label, textEdit, additionalTextEdits) {
        return {
            label: label,
            textEdit: textEdit,
            additionalTextEdits: additionalTextEdits,
        };
    }
    ColorPresentation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate.label)
            && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate))
            && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
    }
    ColorPresentation.is = is;
})(ColorPresentation || (ColorPresentation = {}));
/**
 * Enum of known range kinds
 */
var FoldingRangeKind;
(function (FoldingRangeKind) {
    /**
     * Folding range for a comment
     */
    FoldingRangeKind["Comment"] = "comment";
    /**
     * Folding range for a imports or includes
     */
    FoldingRangeKind["Imports"] = "imports";
    /**
     * Folding range for a region (e.g. `#region`)
     */
    FoldingRangeKind["Region"] = "region";
})(FoldingRangeKind || (FoldingRangeKind = {}));
/**
 * The folding range namespace provides helper functions to work with
 * [FoldingRange](#FoldingRange) literals.
 */
var FoldingRange;
(function (FoldingRange) {
    /**
     * Creates a new FoldingRange literal.
     */
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
            result.kind = kind;
        }
        return result;
    }
    FoldingRange.create = create;
    /**
     * Checks whether the given literal conforms to the [FoldingRange](#FoldingRange) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.number(candidate.startLine) && Is.number(candidate.startLine)
            && (Is.undefined(candidate.startCharacter) || Is.number(candidate.startCharacter))
            && (Is.undefined(candidate.endCharacter) || Is.number(candidate.endCharacter))
            && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
    }
    FoldingRange.is = is;
})(FoldingRange || (FoldingRange = {}));
/**
 * The DiagnosticRelatedInformation namespace provides helper functions to work with
 * [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) literals.
 */
var DiagnosticRelatedInformation;
(function (DiagnosticRelatedInformation) {
    /**
     * Creates a new DiagnosticRelatedInformation literal.
     */
    function create(location, message) {
        return {
            location: location,
            message: message
        };
    }
    DiagnosticRelatedInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
    }
    DiagnosticRelatedInformation.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
/**
 * The diagnostic's severity.
 */
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    /**
     * Reports an error.
     */
    DiagnosticSeverity.Error = 1;
    /**
     * Reports a warning.
     */
    DiagnosticSeverity.Warning = 2;
    /**
     * Reports an information.
     */
    DiagnosticSeverity.Information = 3;
    /**
     * Reports a hint.
     */
    DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
/**
 * The Diagnostic namespace provides helper functions to work with
 * [Diagnostic](#Diagnostic) literals.
 */
var Diagnostic;
(function (Diagnostic) {
    /**
     * Creates a new Diagnostic literal.
     */
    function create(range, message, severity, code, source, relatedInformation) {
        var result = { range: range, message: message };
        if (Is.defined(severity)) {
            result.severity = severity;
        }
        if (Is.defined(code)) {
            result.code = code;
        }
        if (Is.defined(source)) {
            result.source = source;
        }
        if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
        }
        return result;
    }
    Diagnostic.create = create;
    /**
     * Checks whether the given literal conforms to the [Diagnostic](#Diagnostic) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate)
            && Range.is(candidate.range)
            && Is.string(candidate.message)
            && (Is.number(candidate.severity) || Is.undefined(candidate.severity))
            && (Is.number(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code))
            && (Is.string(candidate.source) || Is.undefined(candidate.source))
            && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
    }
    Diagnostic.is = is;
})(Diagnostic || (Diagnostic = {}));
/**
 * The Command namespace provides helper functions to work with
 * [Command](#Command) literals.
 */
var Command;
(function (Command) {
    /**
     * Creates a new Command literal.
     */
    function create(title, command) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var result = { title: title, command: command };
        if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
        }
        return result;
    }
    Command.create = create;
    /**
     * Checks whether the given literal conforms to the [Command](#Command) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
    }
    Command.is = is;
})(Command || (Command = {}));
/**
 * The TextEdit namespace provides helper function to create replace,
 * insert and delete edits more easily.
 */
var TextEdit;
(function (TextEdit) {
    /**
     * Creates a replace text edit.
     * @param range The range of text to be replaced.
     * @param newText The new text.
     */
    function replace(range, newText) {
        return { range: range, newText: newText };
    }
    TextEdit.replace = replace;
    /**
     * Creates a insert text edit.
     * @param position The position to insert the text at.
     * @param newText The text to be inserted.
     */
    function insert(position, newText) {
        return { range: { start: position, end: position }, newText: newText };
    }
    TextEdit.insert = insert;
    /**
     * Creates a delete text edit.
     * @param range The range of text to be deleted.
     */
    function del(range) {
        return { range: range, newText: '' };
    }
    TextEdit.del = del;
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate)
            && Is.string(candidate.newText)
            && Range.is(candidate.range);
    }
    TextEdit.is = is;
})(TextEdit || (TextEdit = {}));
/**
 * The TextDocumentEdit namespace provides helper function to create
 * an edit that manipulates a text document.
 */
var TextDocumentEdit;
(function (TextDocumentEdit) {
    /**
     * Creates a new `TextDocumentEdit`
     */
    function create(textDocument, edits) {
        return { textDocument: textDocument, edits: edits };
    }
    TextDocumentEdit.create = create;
    function is(value) {
        var candidate = value;
        return Is.defined(candidate)
            && VersionedTextDocumentIdentifier.is(candidate.textDocument)
            && Array.isArray(candidate.edits);
    }
    TextDocumentEdit.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));
var CreateFile;
(function (CreateFile) {
    function create(uri, options) {
        var result = {
            kind: 'create',
            uri: uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    CreateFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'create' && Is.string(candidate.uri) &&
            (candidate.options === void 0 ||
                ((candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))));
    }
    CreateFile.is = is;
})(CreateFile || (CreateFile = {}));
var RenameFile;
(function (RenameFile) {
    function create(oldUri, newUri, options) {
        var result = {
            kind: 'rename',
            oldUri: oldUri,
            newUri: newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    RenameFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) &&
            (candidate.options === void 0 ||
                ((candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))));
    }
    RenameFile.is = is;
})(RenameFile || (RenameFile = {}));
var DeleteFile;
(function (DeleteFile) {
    function create(uri, options) {
        var result = {
            kind: 'delete',
            uri: uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    DeleteFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) &&
            (candidate.options === void 0 ||
                ((candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))));
    }
    DeleteFile.is = is;
})(DeleteFile || (DeleteFile = {}));
var WorkspaceEdit;
(function (WorkspaceEdit) {
    function is(value) {
        var candidate = value;
        return candidate &&
            (candidate.changes !== void 0 || candidate.documentChanges !== void 0) &&
            (candidate.documentChanges === void 0 || candidate.documentChanges.every(function (change) {
                if (Is.string(change.kind)) {
                    return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                }
                else {
                    return TextDocumentEdit.is(change);
                }
            }));
    }
    WorkspaceEdit.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));
var TextEditChangeImpl = /** @class */ (function () {
    function TextEditChangeImpl(edits) {
        this.edits = edits;
    }
    TextEditChangeImpl.prototype.insert = function (position, newText) {
        this.edits.push(TextEdit.insert(position, newText));
    };
    TextEditChangeImpl.prototype.replace = function (range, newText) {
        this.edits.push(TextEdit.replace(range, newText));
    };
    TextEditChangeImpl.prototype.delete = function (range) {
        this.edits.push(TextEdit.del(range));
    };
    TextEditChangeImpl.prototype.add = function (edit) {
        this.edits.push(edit);
    };
    TextEditChangeImpl.prototype.all = function () {
        return this.edits;
    };
    TextEditChangeImpl.prototype.clear = function () {
        this.edits.splice(0, this.edits.length);
    };
    return TextEditChangeImpl;
}());
/**
 * A workspace change helps constructing changes to a workspace.
 */
var WorkspaceChange = /** @class */ (function () {
    function WorkspaceChange(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                workspaceEdit.documentChanges.forEach(function (change) {
                    if (TextDocumentEdit.is(change)) {
                        var textEditChange = new TextEditChangeImpl(change.edits);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            }
            else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function (key) {
                    var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                    _this._textEditChanges[key] = textEditChange;
                });
            }
        }
    }
    Object.defineProperty(WorkspaceChange.prototype, "edit", {
        /**
         * Returns the underlying [WorkspaceEdit](#WorkspaceEdit) literal
         * use to be returned from a workspace edit operation like rename.
         */
        get: function () {
            return this._workspaceEdit;
        },
        enumerable: true,
        configurable: true
    });
    WorkspaceChange.prototype.getTextEditChange = function (key) {
        if (VersionedTextDocumentIdentifier.is(key)) {
            if (!this._workspaceEdit) {
                this._workspaceEdit = {
                    documentChanges: []
                };
            }
            if (!this._workspaceEdit.documentChanges) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var textDocument = key;
            var result = this._textEditChanges[textDocument.uri];
            if (!result) {
                var edits = [];
                var textDocumentEdit = {
                    textDocument: textDocument,
                    edits: edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[textDocument.uri] = result;
            }
            return result;
        }
        else {
            if (!this._workspaceEdit) {
                this._workspaceEdit = {
                    changes: Object.create(null)
                };
            }
            if (!this._workspaceEdit.changes) {
                throw new Error('Workspace edit is not configured for normal text edit changes.');
            }
            var result = this._textEditChanges[key];
            if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange.prototype.createFile = function (uri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(CreateFile.create(uri, options));
    };
    WorkspaceChange.prototype.renameFile = function (oldUri, newUri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(RenameFile.create(oldUri, newUri, options));
    };
    WorkspaceChange.prototype.deleteFile = function (uri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(DeleteFile.create(uri, options));
    };
    WorkspaceChange.prototype.checkDocumentChanges = function () {
        if (!this._workspaceEdit || !this._workspaceEdit.documentChanges) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
    };
    return WorkspaceChange;
}());

/**
 * The TextDocumentIdentifier namespace provides helper functions to work with
 * [TextDocumentIdentifier](#TextDocumentIdentifier) literals.
 */
var TextDocumentIdentifier;
(function (TextDocumentIdentifier) {
    /**
     * Creates a new TextDocumentIdentifier literal.
     * @param uri The document's uri.
     */
    function create(uri) {
        return { uri: uri };
    }
    TextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentIdentifier](#TextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
    }
    TextDocumentIdentifier.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
/**
 * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
 * [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) literals.
 */
var VersionedTextDocumentIdentifier;
(function (VersionedTextDocumentIdentifier) {
    /**
     * Creates a new VersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param uri The document's text.
     */
    function create(uri, version) {
        return { uri: uri, version: version };
    }
    VersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.number(candidate.version));
    }
    VersionedTextDocumentIdentifier.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
/**
 * The TextDocumentItem namespace provides helper functions to work with
 * [TextDocumentItem](#TextDocumentItem) literals.
 */
var TextDocumentItem;
(function (TextDocumentItem) {
    /**
     * Creates a new TextDocumentItem literal.
     * @param uri The document's uri.
     * @param languageId The document's language identifier.
     * @param version The document's version number.
     * @param text The document's text.
     */
    function create(uri, languageId, version, text) {
        return { uri: uri, languageId: languageId, version: version, text: text };
    }
    TextDocumentItem.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentItem](#TextDocumentItem) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.number(candidate.version) && Is.string(candidate.text);
    }
    TextDocumentItem.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
/**
 * Describes the content type that a client supports in various
 * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
 *
 * Please note that `MarkupKinds` must not start with a `$`. This kinds
 * are reserved for internal usage.
 */
var MarkupKind;
(function (MarkupKind) {
    /**
     * Plain text is supported as a content format
     */
    MarkupKind.PlainText = 'plaintext';
    /**
     * Markdown is supported as a content format
     */
    MarkupKind.Markdown = 'markdown';
})(MarkupKind || (MarkupKind = {}));
(function (MarkupKind) {
    /**
     * Checks whether the given value is a value of the [MarkupKind](#MarkupKind) type.
     */
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
    }
    MarkupKind.is = is;
})(MarkupKind || (MarkupKind = {}));
var MarkupContent;
(function (MarkupContent) {
    /**
     * Checks whether the given value conforms to the [MarkupContent](#MarkupContent) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
    }
    MarkupContent.is = is;
})(MarkupContent || (MarkupContent = {}));
/**
 * The kind of a completion entry.
 */
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind.Text = 1;
    CompletionItemKind.Method = 2;
    CompletionItemKind.Function = 3;
    CompletionItemKind.Constructor = 4;
    CompletionItemKind.Field = 5;
    CompletionItemKind.Variable = 6;
    CompletionItemKind.Class = 7;
    CompletionItemKind.Interface = 8;
    CompletionItemKind.Module = 9;
    CompletionItemKind.Property = 10;
    CompletionItemKind.Unit = 11;
    CompletionItemKind.Value = 12;
    CompletionItemKind.Enum = 13;
    CompletionItemKind.Keyword = 14;
    CompletionItemKind.Snippet = 15;
    CompletionItemKind.Color = 16;
    CompletionItemKind.File = 17;
    CompletionItemKind.Reference = 18;
    CompletionItemKind.Folder = 19;
    CompletionItemKind.EnumMember = 20;
    CompletionItemKind.Constant = 21;
    CompletionItemKind.Struct = 22;
    CompletionItemKind.Event = 23;
    CompletionItemKind.Operator = 24;
    CompletionItemKind.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
/**
 * Defines whether the insert text in a completion item should be interpreted as
 * plain text or a snippet.
 */
var InsertTextFormat;
(function (InsertTextFormat) {
    /**
     * The primary text to be inserted is treated as a plain string.
     */
    InsertTextFormat.PlainText = 1;
    /**
     * The primary text to be inserted is treated as a snippet.
     *
     * A snippet can define tab stops and placeholders with `$1`, `$2`
     * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
     * the end of the snippet. Placeholders with equal identifiers are linked,
     * that is typing in one will update others too.
     *
     * See also: https://github.com/Microsoft/vscode/blob/master/src/vs/editor/contrib/snippet/common/snippet.md
     */
    InsertTextFormat.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
/**
 * The CompletionItem namespace provides functions to deal with
 * completion items.
 */
var CompletionItem;
(function (CompletionItem) {
    /**
     * Create a completion item and seed it with a label.
     * @param label The completion item's label
     */
    function create(label) {
        return { label: label };
    }
    CompletionItem.create = create;
})(CompletionItem || (CompletionItem = {}));
/**
 * The CompletionList namespace provides functions to deal with
 * completion lists.
 */
var CompletionList;
(function (CompletionList) {
    /**
     * Creates a new completion list.
     *
     * @param items The completion items.
     * @param isIncomplete The list is not complete.
     */
    function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
    }
    CompletionList.create = create;
})(CompletionList || (CompletionList = {}));
var MarkedString;
(function (MarkedString) {
    /**
     * Creates a marked string from plain text.
     *
     * @param plainText The plain text.
     */
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&"); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
    }
    MarkedString.fromPlainText = fromPlainText;
    /**
     * Checks whether the given value conforms to the [MarkedString](#MarkedString) type.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate) || (Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value));
    }
    MarkedString.is = is;
})(MarkedString || (MarkedString = {}));
var Hover;
(function (Hover) {
    /**
     * Checks whether the given value conforms to the [Hover](#Hover) interface.
     */
    function is(value) {
        var candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
            MarkedString.is(candidate.contents) ||
            Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
    }
    Hover.is = is;
})(Hover || (Hover = {}));
/**
 * The ParameterInformation namespace provides helper functions to work with
 * [ParameterInformation](#ParameterInformation) literals.
 */
var ParameterInformation;
(function (ParameterInformation) {
    /**
     * Creates a new parameter information literal.
     *
     * @param label A label string.
     * @param documentation A doc string.
     */
    function create(label, documentation) {
        return documentation ? { label: label, documentation: documentation } : { label: label };
    }
    ParameterInformation.create = create;
    ;
})(ParameterInformation || (ParameterInformation = {}));
/**
 * The SignatureInformation namespace provides helper functions to work with
 * [SignatureInformation](#SignatureInformation) literals.
 */
var SignatureInformation;
(function (SignatureInformation) {
    function create(label, documentation) {
        var parameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
        }
        var result = { label: label };
        if (Is.defined(documentation)) {
            result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
            result.parameters = parameters;
        }
        else {
            result.parameters = [];
        }
        return result;
    }
    SignatureInformation.create = create;
})(SignatureInformation || (SignatureInformation = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind.Text = 1;
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind.Read = 2;
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * DocumentHighlight namespace to provide helper functions to work with
 * [DocumentHighlight](#DocumentHighlight) literals.
 */
var DocumentHighlight;
(function (DocumentHighlight) {
    /**
     * Create a DocumentHighlight object.
     * @param range The range the highlight applies to.
     */
    function create(range, kind) {
        var result = { range: range };
        if (Is.number(kind)) {
            result.kind = kind;
        }
        return result;
    }
    DocumentHighlight.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
/**
 * A symbol kind.
 */
var SymbolKind;
(function (SymbolKind) {
    SymbolKind.File = 1;
    SymbolKind.Module = 2;
    SymbolKind.Namespace = 3;
    SymbolKind.Package = 4;
    SymbolKind.Class = 5;
    SymbolKind.Method = 6;
    SymbolKind.Property = 7;
    SymbolKind.Field = 8;
    SymbolKind.Constructor = 9;
    SymbolKind.Enum = 10;
    SymbolKind.Interface = 11;
    SymbolKind.Function = 12;
    SymbolKind.Variable = 13;
    SymbolKind.Constant = 14;
    SymbolKind.String = 15;
    SymbolKind.Number = 16;
    SymbolKind.Boolean = 17;
    SymbolKind.Array = 18;
    SymbolKind.Object = 19;
    SymbolKind.Key = 20;
    SymbolKind.Null = 21;
    SymbolKind.EnumMember = 22;
    SymbolKind.Struct = 23;
    SymbolKind.Event = 24;
    SymbolKind.Operator = 25;
    SymbolKind.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
var SymbolInformation;
(function (SymbolInformation) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the location of the symbol.
     * @param uri The resource of the location of symbol, defaults to the current document.
     * @param containerName The name of the symbol containing the symbol.
     */
    function create(name, kind, range, uri, containerName) {
        var result = {
            name: name,
            kind: kind,
            location: { uri: uri, range: range }
        };
        if (containerName) {
            result.containerName = containerName;
        }
        return result;
    }
    SymbolInformation.create = create;
})(SymbolInformation || (SymbolInformation = {}));
/**
 * Represents programming constructs like variables, classes, interfaces etc.
 * that appear in a document. Document symbols can be hierarchical and they
 * have two ranges: one that encloses its definition and one that points to
 * its most interesting range, e.g. the range of an identifier.
 */
var DocumentSymbol = /** @class */ (function () {
    function DocumentSymbol() {
    }
    return DocumentSymbol;
}());

(function (DocumentSymbol) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param detail The detail of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the symbol.
     * @param selectionRange The selectionRange of the symbol.
     * @param children Children of the symbol.
     */
    function create(name, detail, kind, range, selectionRange, children) {
        var result = {
            name: name,
            detail: detail,
            kind: kind,
            range: range,
            selectionRange: selectionRange
        };
        if (children !== void 0) {
            result.children = children;
        }
        return result;
    }
    DocumentSymbol.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentSymbol](#DocumentSymbol) interface.
     */
    function is(value) {
        var candidate = value;
        return candidate &&
            Is.string(candidate.name) && Is.number(candidate.kind) &&
            Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
            (candidate.detail === void 0 || Is.string(candidate.detail)) &&
            (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) &&
            (candidate.children === void 0 || Array.isArray(candidate.children));
    }
    DocumentSymbol.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
/**
 * A set of predefined code action kinds
 */
var CodeActionKind;
(function (CodeActionKind) {
    /**
     * Base kind for quickfix actions: 'quickfix'
     */
    CodeActionKind.QuickFix = 'quickfix';
    /**
     * Base kind for refactoring actions: 'refactor'
     */
    CodeActionKind.Refactor = 'refactor';
    /**
     * Base kind for refactoring extraction actions: 'refactor.extract'
     *
     * Example extract actions:
     *
     * - Extract method
     * - Extract function
     * - Extract variable
     * - Extract interface from class
     * - ...
     */
    CodeActionKind.RefactorExtract = 'refactor.extract';
    /**
     * Base kind for refactoring inline actions: 'refactor.inline'
     *
     * Example inline actions:
     *
     * - Inline function
     * - Inline variable
     * - Inline constant
     * - ...
     */
    CodeActionKind.RefactorInline = 'refactor.inline';
    /**
     * Base kind for refactoring rewrite actions: 'refactor.rewrite'
     *
     * Example rewrite actions:
     *
     * - Convert JavaScript function to class
     * - Add or remove parameter
     * - Encapsulate field
     * - Make method static
     * - Move method to base class
     * - ...
     */
    CodeActionKind.RefactorRewrite = 'refactor.rewrite';
    /**
     * Base kind for source actions: `source`
     *
     * Source code actions apply to the entire file.
     */
    CodeActionKind.Source = 'source';
    /**
     * Base kind for an organize imports source action: `source.organizeImports`
     */
    CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
})(CodeActionKind || (CodeActionKind = {}));
/**
 * The CodeActionContext namespace provides helper functions to work with
 * [CodeActionContext](#CodeActionContext) literals.
 */
var CodeActionContext;
(function (CodeActionContext) {
    /**
     * Creates a new CodeActionContext literal.
     */
    function create(diagnostics, only) {
        var result = { diagnostics: diagnostics };
        if (only !== void 0 && only !== null) {
            result.only = only;
        }
        return result;
    }
    CodeActionContext.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeActionContext](#CodeActionContext) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string));
    }
    CodeActionContext.is = is;
})(CodeActionContext || (CodeActionContext = {}));
var CodeAction;
(function (CodeAction) {
    function create(title, commandOrEdit, kind) {
        var result = { title: title };
        if (Command.is(commandOrEdit)) {
            result.command = commandOrEdit;
        }
        else {
            result.edit = commandOrEdit;
        }
        if (kind !== void null) {
            result.kind = kind;
        }
        return result;
    }
    CodeAction.create = create;
    function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.title) &&
            (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) &&
            (candidate.kind === void 0 || Is.string(candidate.kind)) &&
            (candidate.edit !== void 0 || candidate.command !== void 0) &&
            (candidate.command === void 0 || Command.is(candidate.command)) &&
            (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
    }
    CodeAction.is = is;
})(CodeAction || (CodeAction = {}));
/**
 * The CodeLens namespace provides helper functions to work with
 * [CodeLens](#CodeLens) literals.
 */
var CodeLens;
(function (CodeLens) {
    /**
     * Creates a new CodeLens literal.
     */
    function create(range, data) {
        var result = { range: range };
        if (Is.defined(data))
            result.data = data;
        return result;
    }
    CodeLens.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeLens](#CodeLens) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
    }
    CodeLens.is = is;
})(CodeLens || (CodeLens = {}));
/**
 * The FormattingOptions namespace provides helper functions to work with
 * [FormattingOptions](#FormattingOptions) literals.
 */
var FormattingOptions;
(function (FormattingOptions) {
    /**
     * Creates a new FormattingOptions literal.
     */
    function create(tabSize, insertSpaces) {
        return { tabSize: tabSize, insertSpaces: insertSpaces };
    }
    FormattingOptions.create = create;
    /**
     * Checks whether the given literal conforms to the [FormattingOptions](#FormattingOptions) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.number(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions.is = is;
})(FormattingOptions || (FormattingOptions = {}));
/**
 * A document link is a range in a text document that links to an internal or external resource, like another
 * text document or a web site.
 */
var DocumentLink = /** @class */ (function () {
    function DocumentLink() {
    }
    return DocumentLink;
}());

/**
 * The DocumentLink namespace provides helper functions to work with
 * [DocumentLink](#DocumentLink) literals.
 */
(function (DocumentLink) {
    /**
     * Creates a new DocumentLink literal.
     */
    function create(range, target, data) {
        return { range: range, target: target, data: data };
    }
    DocumentLink.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentLink](#DocumentLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
    }
    DocumentLink.is = is;
})(DocumentLink || (DocumentLink = {}));
var EOL = ['\n', '\r\n', '\r'];
var TextDocument;
(function (TextDocument) {
    /**
     * Creates a new ITextDocument literal from the given uri and content.
     * @param uri The document's uri.
     * @param languageId  The document's language Id.
     * @param content The document's content.
     */
    function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument.create = create;
    /**
     * Checks whether the given literal conforms to the [ITextDocument](#ITextDocument) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.number(candidate.lineCount)
            && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument.is = is;
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function (a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        var lastModifiedOffset = text.length;
        for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
                text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            }
            else {
                throw new Error('Overlapping edit');
            }
            lastModifiedOffset = startOffset;
        }
        return text;
    }
    TextDocument.applyEdits = applyEdits;
    function mergeSort(data, compare) {
        if (data.length <= 1) {
            // sorted
            return data;
        }
        var p = (data.length / 2) | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
                // smaller_equal -> take left to preserve order
                data[i++] = left[leftIdx++];
            }
            else {
                // greater -> take right
                data[i++] = right[rightIdx++];
            }
        }
        while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
        }
        return data;
    }
})(TextDocument || (TextDocument = {}));
/**
 * Represents reasons why a text document is saved.
 */
var TextDocumentSaveReason;
(function (TextDocumentSaveReason) {
    /**
     * Manually triggered, e.g. by the user pressing save, by starting debugging,
     * or by an API call.
     */
    TextDocumentSaveReason.Manual = 1;
    /**
     * Automatic after a delay.
     */
    TextDocumentSaveReason.AfterDelay = 2;
    /**
     * When the editor lost focus.
     */
    TextDocumentSaveReason.FocusOut = 3;
})(TextDocumentSaveReason || (TextDocumentSaveReason = {}));
var FullTextDocument = /** @class */ (function () {
    function FullTextDocument(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = null;
    }
    Object.defineProperty(FullTextDocument.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: true,
        configurable: true
    });
    FullTextDocument.prototype.getText = function (range) {
        if (range) {
            var start = this.offsetAt(range.start);
            var end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    };
    FullTextDocument.prototype.update = function (event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = null;
    };
    FullTextDocument.prototype.getLineOffsets = function () {
        if (this._lineOffsets === null) {
            var lineOffsets = [];
            var text = this._content;
            var isLineStart = true;
            for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = (ch === '\r' || ch === '\n');
                if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
                    i++;
                }
            }
            if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
            }
            this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
    };
    FullTextDocument.prototype.positionAt = function (offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) {
            return Position.create(0, offset);
        }
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        var line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
    };
    FullTextDocument.prototype.offsetAt = function (position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        }
        else if (position.line < 0) {
            return 0;
        }
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument.prototype, "lineCount", {
        get: function () {
            return this.getLineOffsets().length;
        },
        enumerable: true,
        configurable: true
    });
    return FullTextDocument;
}());
var Is;
(function (Is) {
    var toString = Object.prototype.toString;
    function defined(value) {
        return typeof value !== 'undefined';
    }
    Is.defined = defined;
    function undefined(value) {
        return typeof value === 'undefined';
    }
    Is.undefined = undefined;
    function boolean(value) {
        return value === true || value === false;
    }
    Is.boolean = boolean;
    function string(value) {
        return toString.call(value) === '[object String]';
    }
    Is.string = string;
    function number(value) {
        return toString.call(value) === '[object Number]';
    }
    Is.number = number;
    function func(value) {
        return toString.call(value) === '[object Function]';
    }
    Is.func = func;
    function objectLiteral(value) {
        // Strictly speaking class instances pass this check as well. Since the LSP
        // doesn't use classes we ignore this for now. If we do we need to add something
        // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
        return value !== null && typeof value === 'object';
    }
    Is.objectLiteral = objectLiteral;
    function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
    }
    Is.typedArray = typedArray;
})(Is || (Is = {}));


/***/ }),

/***/ "l4+G":
/*!***********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/ArithmeticExprInstruction.ts ***!
  \***********************************************************************/
/*! exports provided: ArithmeticExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArithmeticExprInstruction", function() { return ArithmeticExprInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");




/**
 * Represent someExpr + / - * % someExpr
 * (+|-|*|/|%) Instruction Instruction
 */
class ArithmeticExprInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_2__["ExprInstruction"] {
    constructor({ left, right, operator, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_ArithmeticExpr, ...settings });
        this._leftOperand = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(left, this);
        this._rightOperand = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(right, this);
        this._operator = operator;
    }
    get left() {
        return this._leftOperand;
    }
    get right() {
        return this._rightOperand;
    }
    get operator() {
        return this._operator;
    }
    evaluate() {
        var pValL = this._leftOperand.evaluate() ? this._leftOperand.getEvalValue() : null;
        var pValR = this._rightOperand.evaluate() ? this._rightOperand.getEvalValue() : null;
        if (Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(pValL) || Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(pValR)) {
            return false;
        }
        try {
            switch (this.operator) {
                case "+":
                    this._evalResult = pValL + pValR;
                    break;
                case "-":
                    this._evalResult = pValL - pValR;
                    break;
                case "*":
                    this._evalResult = pValL * pValR;
                    break;
                case "/":
                    this._evalResult = pValL / pValR;
                    break;
                case "%":
                    this._evalResult = pValL % pValR;
                    break;
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }
    toCode() {
        var sCode = "";
        sCode += this._leftOperand.toCode();
        sCode += this.operator;
        sCode += this._rightOperand.toCode();
        return sCode;
    }
    isConst() {
        return this.left.isConst() && this.right.isConst();
    }
}


/***/ }),

/***/ "mXWi":
/*!*************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/DeclInstruction.ts ***!
  \*************************************************************/
/*! exports provided: DeclInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclInstruction", function() { return DeclInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");


class DeclInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"] {
    constructor({ semantic = null, annotation = null, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_Decl, ...settings });
        this._semantic = semantic;
        this._annotation = _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"].$withParent(annotation, this);
    }
    get semantic() {
        return this._semantic;
    }
    get annotation() {
        return this._annotation;
    }
    get name() {
        return null;
    }
    get id() {
        return null;
    }
}


/***/ }),

/***/ "oBNb":
/*!*******************************************!*\
  !*** ./src/lib/fx/analisys/helpers/fn.ts ***!
  \*******************************************/
/*! exports provided: fn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fn", function() { return fn; });
/* harmony import */ var _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/helpers */ "u2cq");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/common */ "fb8x");


var fn;
(function (fn) {
    function signatureParam(param, strong) {
        return `${_lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_0__["type"].signature(param.type, strong)}${param.initExpr ? '?' : ''}`;
    }
    function signature(def, strong = false) {
        const { name, params } = def;
        return `${name}(${params.map(param => signatureParam(param, strong)).join(', ')})`;
    }
    fn.signature = signature;
    function signatureEx(def, strong = false) {
        const { name, returnType, params } = def;
        return `${_lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_0__["type"].signature(returnType, strong)} ${name}(${params.map(param => signatureParam(param, strong)).join(', ')})`;
    }
    fn.signatureEx = signatureEx;
    function numArgsRequired(def) {
        return def.params.filter((param) => !param || !param.initExpr).length;
    }
    fn.numArgsRequired = numArgsRequired;
    // FIXME: refuse from the regular expressions in favor of a full typecasting graph
    function match(def, args, strong = false) {
        if (!strong && Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(args)) {
            return true;
        }
        if (args.length > def.params.length || numArgsRequired(def) > args.length) {
            return false;
        }
        return args.every((arg, i) => (!strong && Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(arg)) ||
            (!strong && Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__["isNull"])(def.params[i].type)) ||
            _lib_fx_analisys_helpers__WEBPACK_IMPORTED_MODULE_0__["type"].equals(arg, def.params[i].type, strong));
    }
    fn.match = match;
    /**
     * Find function by name and list of types.
     * returns:
     *   'null' if there is no requested function;
     *   'undefined' if there more then one function;
     *    function if all is ok;
     */
    // FIXME: refuse from the regular expressions in favor of a full typecasting graph
    function matchList(funcList, args, strong = false) {
        if (!funcList) {
            return null;
        }
        const res = funcList.filter(func => fn.match(func.def, args, strong));
        if (res.length > 1) {
            return undefined;
        }
        if (res.length === 1) {
            return res[0];
        }
        return null;
    }
    fn.matchList = matchList;
})(fn || (fn = {}));


/***/ }),

/***/ "onqc":
/*!*****************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/TypeDeclInstruction.ts ***!
  \*****************************************************************/
/*! exports provided: TypeDeclInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDeclInstruction", function() { return TypeDeclInstruction; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _DeclInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeclInstruction */ "mXWi");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");




// TODO: add description comment.
class TypeDeclInstruction extends _DeclInstruction__WEBPACK_IMPORTED_MODULE_2__["DeclInstruction"] {
    constructor({ type, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_TypeDecl, ...settings });
        this.type = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(type, this);
        Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(this.type));
    }
    get name() {
        return this.type.name;
    }
    toCode() {
        return this.type.toDeclString() + ";";
    }
}


/***/ }),

/***/ "oseZ":
/*!*************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/StmtInstruction.ts ***!
  \*************************************************************/
/*! exports provided: StmtInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StmtInstruction", function() { return StmtInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");


/**
 * Represent all kind of statements
 */
class StmtInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"] {
    constructor({ ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_Stmt, ...settings });
    }
}


/***/ }),

/***/ "pq1u":
/*!******************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/AttributeInstruction.ts ***!
  \******************************************************************/
/*! exports provided: AttributeInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeInstruction", function() { return AttributeInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instruction */ "2b0+");


/**
 * Represent attributes:
 *  [numthreads(1, 2, 3)]
 *  [loop]
 *  [branch]
 */
class AttributeInstruction extends _Instruction__WEBPACK_IMPORTED_MODULE_1__["Instruction"] {
    constructor({ name, args, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_Attribute, ...settings });
        this.name = name;
        this.args = args;
    }
    toCode() {
        return `[${this.name}${this.args.length > 0 ? `(${this.args.map(arg => arg.toCode()).join(', ')})` : ``}]`;
    }
}


/***/ }),

/***/ "rMqy":
/*!****************************!*\
  !*** ./src/lib/uri/uri.ts ***!
  \****************************/
/*! exports provided: resolve, parseDataURI, parse, currentScript, currentPath, here */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDataURI", function() { return parseDataURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentScript", function() { return currentScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentPath", function() { return currentPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "here", function() { return here; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "fb8x");
/* harmony import */ var _path_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../path/path */ "5D93");


class URI {
    constructor(uri) {
        this._scheme = null;
        this._userinfo = null;
        this._host = null;
        this._port = 0;
        this._path = null;
        this._query = null;
        this._fragment = null;
        if (uri) {
            this.set(uri);
        }
    }
    get urn() {
        return (this._path ? this._path : "") +
            (this._query ? '?' + this._query : "") +
            (this._fragment ? '#' + this._fragment : "");
    }
    get url() {
        return (this._scheme ? this._scheme : "") + this.authority;
    }
    get authority() {
        return (this._host ? '//' + (this._userinfo ? this._userinfo + '@' : "") +
            this._host + (this._port ? ':' + this._port : "") : "");
    }
    get scheme() {
        return this._scheme;
    }
    get protocol() {
        if (!this._scheme) {
            return this._scheme;
        }
        return (this._scheme.substr(0, this._scheme.lastIndexOf(':')));
    }
    get userInfo() {
        return this._userinfo;
    }
    get host() {
        return this._host;
    }
    set host(sHost) {
        //TODO: check host format
        this._host = sHost;
    }
    get port() {
        return this._port;
    }
    set port(iPort) {
        this._port = iPort;
    }
    get path() {
        return this._path;
    }
    set path(sPath) {
        // debug_assert(!isNull(sPath.match(new RegExp("^(/(?:[a-z0-9-._~!$&'()*+,;=:@/]|%[0-9A-F]{2})*)$"))), 
        //     "invalid path used: " + sPath);
        //TODO: check path format
        this._path = sPath;
    }
    get query() {
        //TODO: check query format
        return this._query;
    }
    set query(sQuery) {
        this._query = sQuery;
    }
    get fragment() {
        return this._fragment;
    }
    set(data) {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isString"])(data)) {
            var uri = URI.uriExp.exec(data);
            console.assert(uri !== null, 'Invalid URI format used.\nused uri: ' + data);
            if (!uri) {
                return null;
            }
            this._scheme = uri[1] || null;
            this._userinfo = uri[2] || null;
            this._host = uri[3] || null;
            this._port = parseInt(uri[4]) || null;
            this._path = uri[5] || uri[6] || null;
            this._query = uri[7] || null;
            this._fragment = uri[8] || null;
            return this;
        }
        else if (data instanceof URI) {
            return this.set(data.toString());
        }
        console.error('Unexpected data type was used.');
        return null;
    }
    toString() {
        return this.url + this.urn;
    }
}
//------------------------------------------------------------------//
//----- Validate a URI -----//
//------------------------------------------------------------------//
//- The different parts are kept in their own groups and can be recombined
//  depending on the scheme:
//  - http as $1://$3:$4$5?$7#$8
//  - ftp as $1://$2@$3:$4$5
//  - mailto as $1:$6?$7
//- groups are as follows:
//  1   == scheme
//  2   == userinfo
//  3   == host
//  4   == port
//  5,6 == path (5 if it has an authority, 6 if it doesn't)
//  7   == query
//  8   == fragment
URI.uriExp = new RegExp("^([a-z0-9+.-]+:)?(?:\\/\\/(?:((?:[a-z0-9-._~!$&'()*+,;=:]|%[0-9A-F]{2})*)@)?((?:[a-z0-9-._~!$&'()*+,;=]|%[0-9A-F]{2})*)(?::(\\d*))?(\\/(?:[a-z0-9-._~!$&'()*+,;=:@/]|%[0-9A-F]{2})*)?|(\\/?(?:[a-z0-9-._~!$&'()*+,;=:@]|%[0-9A-F]{2})*(?:[a-z0-9-._~!$&'()*+,;=:@/]|%[0-9A-F]{2})*)?)(?:\\?((?:[a-z0-9-._~!$&'()*+,;=:/?@]|%[0-9A-F]{2})*))?(?:#((?:[a-z0-9-._~!$&'()*+,;=:/?@]|%[0-9A-F]{2})*))?$", "i");
function normalizeURIPath(file) {
    if (!Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(file.path)) {
        if (file.scheme === "filesystem:") {
            var uri = parse(file.path);
            uri.path = _path_path__WEBPACK_IMPORTED_MODULE_1__["normalize"](uri.path);
            file.path = uri.toString();
        }
        else {
            file.path = _path_path__WEBPACK_IMPORTED_MODULE_1__["normalize"](file.path);
        }
    }
    return file;
}
function resolve(from, to = document.location.href) {
    var currentPath = parse(to);
    var file = parse(from);
    var dirname;
    normalizeURIPath(file);
    normalizeURIPath(currentPath);
    if (!Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(file.scheme) || !Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNull"])(file.host) || _path_path__WEBPACK_IMPORTED_MODULE_1__["parse"](file.path).isAbsolute()) {
        //another server or absolute path
        return from;
    }
    dirname = _path_path__WEBPACK_IMPORTED_MODULE_1__["parse"](currentPath.path).dirname;
    currentPath.path = dirname ? (dirname + "/" + from) : from;
    return normalizeURIPath(currentPath).toString();
}
function parseDataURI(uri) {
    var re = /^data:([\w\d\-\/]+)?(;charset=[\w\d\-]*)?(;base64)?,(.*)$/;
    var m = uri.match(re);
    return {
        //like [text/plain]
        mediatype: m[1] || null,
        //like [;charset=windows-1251]
        charset: Object(_common__WEBPACK_IMPORTED_MODULE_0__["isString"])(m[2]) ? m[2].substr(9) : null,
        //like [;base64]
        base64: Object(_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(m[3]),
        data: m[4] || null
    };
}
function parse(uri) {
    return new URI(uri);
}
function currentScript() {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isDef"])(document['currentScript'])) {
        return document['currentScript'];
    }
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
}
function currentPath() {
    var uri = parse(currentScript().src);
    let dirname = _path_path__WEBPACK_IMPORTED_MODULE_1__["parse"](uri.path).dirname;
    return uri.url + dirname + "/";
}
function here() {
    return new URI(document.location.href);
}


/***/ }),

/***/ "sQ1Q":
/*!*********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/PostfixPointInstruction.ts ***!
  \*********************************************************************/
/*! exports provided: PostfixPointInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostfixPointInstruction", function() { return PostfixPointInstruction; });
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instruction */ "2b0+");



/**
 * Represent someExpr.id
 * EMPTY_OPERATOR Instruction IdInstruction
 */
class PostfixPointInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_1__["ExprInstruction"] {
    constructor({ element, postfix, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_0__["EInstructionTypes"].k_PostfixPointExpr, type: postfix.type, ...settings });
        this.element = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(element, this);
        this.postfix = _Instruction__WEBPACK_IMPORTED_MODULE_2__["Instruction"].$withParent(postfix, this);
    }
    toCode() {
        return `${this.element.toCode()}.${this.postfix.toCode()}`;
    }
    isConst() {
        return this.element.isConst();
    }
}


/***/ }),

/***/ "u2cq":
/*!**********************************************!*\
  !*** ./src/lib/fx/analisys/helpers/index.ts ***!
  \**********************************************/
/*! exports provided: expression, fn, instruction, type, variable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression */ "/oOw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expression", function() { return _expression__WEBPACK_IMPORTED_MODULE_0__["expression"]; });

/* harmony import */ var _fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn */ "oBNb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fn", function() { return _fn__WEBPACK_IMPORTED_MODULE_1__["fn"]; });

/* harmony import */ var _instruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instruction */ "PKWX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instruction", function() { return _instruction__WEBPACK_IMPORTED_MODULE_2__["instruction"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "79MH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "type", function() { return _type__WEBPACK_IMPORTED_MODULE_3__["type"]; });

/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variable */ "UsCK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return _variable__WEBPACK_IMPORTED_MODULE_4__["variable"]; });








/***/ }),

/***/ "uXIj":
/*!*********************************!*\
  !*** ./src/lib/parser/State.ts ***!
  \*********************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "GIxw");


class State {
    constructor() {
        this.nextStates = {};
        this.index = 0;
        this.items = [];
        this.numBaseItems = 0;
        this.numOtherItems = 0;
    }
    eachItem(cb) {
        // NOTE: do not try to change this for loop
        for (let i = 0; i < this.items.length; ++i) {
            cb(this.items[i], i);
        }
    }
    eachBaseItem(cb) {
        // NOTE: do not try to change this for loop
        for (let i = 0; i < this.numBaseItems; ++i) {
            cb(this.items[i], i);
        }
    }
    isExpected(symbol) {
        return !!this.items.find(item => item.isExpected(symbol));
    }
    hasItem(value, type) {
        return this.items.find(item => item.isEqual(value, type)) || null;
    }
    hasParentItem(value) {
        return this.items.find(item => item.isParentItem(value)) || null;
    }
    hasChildItem(value) {
        return this.items.find(item => item.isChildItem(value)) || null;
    }
    hasRule(rule, pos) {
        for (let i = 0; i < this.numBaseItems; ++i) {
            const item = this.items[i];
            if (item.rule === rule && item.pos === pos) {
                return true;
            }
        }
        return false;
    }
    isEmpty() {
        return !(this.items.length);
    }
    isEqual(state, type) {
        if (this.numBaseItems !== state.numBaseItems) {
            return false;
        }
        for (let i = 0; i < this.numBaseItems; ++i) {
            const baseItemA = this.items[i];
            let isEqual = false;
            for (let i = 0; i < state.numBaseItems; ++i) {
                const baseItemB = state.items[i];
                if (baseItemA.isEqual(baseItemB, type)) {
                    isEqual = true;
                    break;
                }
            }
            if (!isEqual) {
                return false;
            }
        }
        return true;
    }
    push(item) {
        if (this.items.length === 0 || item.pos > 0) {
            Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(this.numOtherItems === 0);
            this.numBaseItems++;
        }
        else {
            this.numOtherItems++;
        }
        this.items.push(item);
    }
    tryPush_LR0(rule, pos) {
        const sameItem = this.items.find(item => (item.rule === rule && item.pos === pos));
        if (sameItem) {
            return false;
        }
        const item = new _Item__WEBPACK_IMPORTED_MODULE_1__["Item"](rule, pos);
        this.push(item);
        return true;
    }
    tryPush_LR(rule, pos, expectedSymbol) {
        const sameItem = this.items.find(item => (item.rule === rule && item.pos === pos));
        if (sameItem) {
            return sameItem.addExpected(expectedSymbol);
        }
        const item = new _Item__WEBPACK_IMPORTED_MODULE_1__["Item"](rule, pos, [expectedSymbol]);
        this.push(item);
        return true;
    }
    addNextState(symbol, state) {
        if (this.nextStates[symbol]) {
            return false;
        }
        this.nextStates[symbol] = state;
        return true;
    }
    deleteNotBase() {
        this.items.length = this.numBaseItems;
    }
    toString(isBase = true, grammarSymbols = null) {
        const items = isBase ? this.items.slice(0, this.numBaseItems) : this.items;
        return `State ${this.index}:\n` +
            items.map(item => `\t\t${item.toString(grammarSymbols)}\n`).join();
    }
}


/***/ }),

/***/ "wEKK":
/*!********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/LogicalExprInstruction.ts ***!
  \********************************************************************/
/*! exports provided: LogicalExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicalExprInstruction", function() { return LogicalExprInstruction; });
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");
/* harmony import */ var _ExprInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExprInstruction */ "4AA8");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruction */ "2b0+");




/**
 * Represent boolExpr && || boolExpr
 * (&& | ||) Instruction Instruction
 */
class LogicalExprInstruction extends _ExprInstruction__WEBPACK_IMPORTED_MODULE_2__["ExprInstruction"] {
    constructor({ left, right, operator, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_1__["EInstructionTypes"].k_LogicalExpr, type: _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_0__["T_BOOL"], ...settings });
        this._leftOperand = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(left, this);
        this._rightOperand = _Instruction__WEBPACK_IMPORTED_MODULE_3__["Instruction"].$withParent(right, this);
        this._operator = operator;
    }
    get operator() {
        return this._operator;
    }
    get left() {
        return this._leftOperand;
    }
    get right() {
        return this._rightOperand;
    }
    toCode() {
        var sCode = "";
        sCode += this.left.toCode();
        sCode += this.operator;
        sCode += this.right.toCode();
        return sCode;
    }
    isConst() {
        return this.left.isConst() &&
            this.right.isConst();
    }
}


/***/ }),

/***/ "wYUO":
/*!********************************!*\
  !*** ./src/lib/parser/util.ts ***!
  \********************************/
/*! exports provided: positionMin, positionMax, cloneRange, extendRange, commonRange, checkRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionMin", function() { return positionMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionMax", function() { return positionMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneRange", function() { return cloneRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendRange", function() { return extendRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonRange", function() { return commonRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRange", function() { return checkRange; });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/common */ "fb8x");

function positionMin(a, b) {
    Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(String(a.file) === String(b.file));
    return {
        offset: Math.min(a.offset, b.offset),
        line: Math.min(a.line, b.line),
        column: Math.min(a.column, b.column),
        file: a.file
    };
}
function positionMax(a, b) {
    Object(_lib_common__WEBPACK_IMPORTED_MODULE_0__["assert"])(String(a.file) === String(b.file));
    return {
        offset: Math.max(a.offset, b.offset),
        line: Math.max(a.line, b.line),
        column: Math.max(a.column, b.column),
        file: a.file
    };
}
function cloneRange(range) {
    return { start: { ...range.start }, end: { ...range.end } };
}
function extendRange(parent, child) {
    if (child.start.file !== parent.start.file) {
        return parent;
    }
    if (child.start.line < parent.start.line) {
        parent.start = { ...child.start };
    }
    else if (child.start.line === parent.start.line) {
        parent.start = positionMin(child.start, parent.start);
    }
    if (child.end.line > parent.end.line) {
        parent.end = { ...child.end };
    }
    else if (child.end.line === parent.end.line) {
        parent.end = positionMax(child.end, parent.end);
    }
    return parent;
}
function commonRange(...rangeList) {
    const MAX_I32 = Number.MAX_SAFE_INTEGER;
    const MIN_I32 = Number.MIN_SAFE_INTEGER;
    const file = rangeList[0].start.file;
    let start = { offset: MAX_I32, column: MAX_I32, line: MAX_I32, file };
    let end = { offset: MIN_I32, column: MIN_I32, line: MIN_I32, file };
    rangeList.forEach(range => start = positionMin(start, range.start));
    rangeList.forEach(range => end = positionMax(end, range.end));
    return { start, end };
}
const checkRange = (range, offset) => range.start.offset <= offset && range.end.offset > offset;


/***/ }),

/***/ "wsMd":
/*!***********************************************************************!*\
  !*** ./src/lib/fx/analisys/instructions/RelationalExprInstruction.ts ***!
  \***********************************************************************/
/*! exports provided: RelationalExprInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationalExprInstruction", function() { return RelationalExprInstruction; });
/* harmony import */ var _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/fx/analisys/instructions/ExprInstruction */ "4AA8");
/* harmony import */ var _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/fx/analisys/SystemScope */ "Wl5j");
/* harmony import */ var _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/idl/IInstruction */ "FrU9");



/**
 * Represent someExpr == != < > <= >= someExpr
 * (==|!=|<|>|<=|>=) Instruction Instruction
 */
class RelationalExprInstruction extends _lib_fx_analisys_instructions_ExprInstruction__WEBPACK_IMPORTED_MODULE_0__["ExprInstruction"] {
    constructor({ left, right, operator, ...settings }) {
        super({ instrType: _lib_idl_IInstruction__WEBPACK_IMPORTED_MODULE_2__["EInstructionTypes"].k_RelationalExpr, type: _lib_fx_analisys_SystemScope__WEBPACK_IMPORTED_MODULE_1__["T_BOOL"], ...settings });
        this._leftOperand = left;
        this._rightOperand = right;
        this._operator = operator;
    }
    get left() {
        return this._leftOperand;
    }
    get right() {
        return this._rightOperand;
    }
    get operator() {
        return this._operator;
    }
    toCode() {
        var code = '';
        code += this.left.toCode();
        code += this.operator;
        code += this.right.toCode();
        return code;
    }
    isConst() {
        return this.left.isConst() &&
            this.right.isConst();
    }
}


/***/ }),

/***/ "yosG":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/lib/fx/HLSL.gr ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("S : Program\r\nProgram : --add\r\nProgram : Decls\r\n\r\nDecls : Decl --expose\r\nDecls : Decls Decl\r\n\r\nDecl : ';'\r\nDecl : TypeDecl\r\nDecl : VariableDecl\r\nDecl : VarStructDecl\r\nDecl : FunctionDecl\r\nDecl : TechniqueDecl\r\n#if FX_PART\r\n    Decl : PartFxDecl\r\n#endif \r\nDecl : UseDecl\r\nDecl : ImportDecl\r\nDecl : ProvideDecl\r\nDecl : IncludeDecl\r\nDecl : ERROR\r\n\r\nIncludeDecl : '#' T_KW_INCLUDE String --skip --F includeCode\r\n\r\nImportDecl : T_KW_IMPORT String ';'\r\n\r\nProvideDecl : T_KW_PROVIDE ComplexNameOpt ';'\r\nProvideDecl : T_KW_PROVIDE ComplexNameOpt T_KW_AS ComplexNameOpt ';'\r\n\r\nUseDecl : T_KW_USE Mode\r\nMode : T_KW_STRICT\r\n\r\nUsages : Usage --expose\r\nUsages : Usages Usage\r\nUsage : T_KW_STATIC --add\r\nUsage : T_KW_UNIFORM\r\nUsage : T_KW_EXTERN\r\nUsage : T_KW_VOLATILE\r\nUsage : T_KW_INLINE\r\nUsage : ConstUsage\r\n\r\nConstUsages : ConstUsage --expose\r\nConstUsages : ConstUsages ConstUsage\r\nConstUsage : T_KW_CONST\r\nConstUsage : T_KW_ROW_MAJOR\r\nConstUsage : T_KW_COLUMN_MAJOR\r\n\r\nUsageType : Type --add\r\nUsageType : Usages Type\r\n\r\nUsageStructDecl : StructDecl --add\r\nUsageStructDecl : Usages StructDecl\r\n\r\nTypeDecl : T_KW_TYPEDEF ConstType TypeDefs ';' --add\r\nTypeDecl : T_KW_TYPEDEF ConstStructDecl TypeDefs ';'\r\nTypeDecl : StructDecl --F addType ';'\r\nTypeDefs : VariableDim\r\nTypeDefs : VariableDim ',' TypeDefs\r\n\r\n# GenericParams : '<' Arguments '>'\r\n# GenericParamsOpt: --expose\r\n# GenericParamsOpt: GenericParams\r\n\r\nType : BaseType --add\r\nType : Struct\r\nType : TypeId\r\nType : T_KW_STRUCT TypeId\r\n\r\nConstType : Type --add\r\nConstType : ConstUsages Type\r\nConstTypeDim : ConstType --expose\r\nConstTypeDim : ConstTypeDim '[' ConstantExpr ']'\r\n\r\nBaseType : T_KW_VOID --add\r\nBaseType : ScalarType\r\nBaseType : VectorType\r\nBaseType : MatrixType\r\nBaseType : ObjectType\r\n\r\nScalarType : T_KW_BOOL --add\r\nScalarType : T_KW_INT\r\nScalarType : T_KW_UINT\r\nScalarType : T_KW_HALF\r\nScalarType : T_KW_FLOAT\r\nScalarType : T_KW_DOUBLE\r\n\r\nVectorType : T_KW_VECTOR --add\r\nVectorType : T_KW_VECTOR '<' ScalarType ',' AddExpr '>'\r\n\r\nMatrixType : T_KW_MATRIX --add\r\nMatrixType : T_KW_MATRIX '<' ScalarType ',' ConstantExpr ',' AddExpr '>'\r\n\r\nObjectType : T_KW_STRING --add\r\nObjectType : T_KW_TEXTURE\r\nObjectType : T_KW_TEXTURE1D\r\nObjectType : T_KW_TEXTURE2D\r\nObjectType : T_KW_TEXTURE3D\r\nObjectType : T_KW_TEXTURECUBE\r\nObjectType : T_KW_SAMPLER\r\nObjectType : T_KW_SAMPLER1D\r\nObjectType : T_KW_SAMPLER2D\r\nObjectType : T_KW_SAMPLER3D\r\nObjectType : T_KW_SAMPLERCUBE\r\nObjectType : T_KW_PIXELSHADER\r\nObjectType : T_KW_VERTEXSHADER\r\nObjectType : T_KW_PIXELFRAGMENT\r\nObjectType : T_KW_VERTEXFRAGMENT\r\nObjectType : T_KW_STATEBLOCK\r\nObjectType : T_KW_RWBUFFER '<' Type '>'\r\nObjectType : T_KW_RWSTRUCTUREDBUFFER '<' Type '>'\r\nObjectType : T_KW_APPENDSTRUCTUREDBUFFER '<' Type '>'\r\n\r\n\r\n# struct Name\r\n# {\r\n#     [InterpolationModifier] Type[RxC] MemberName;\r\n#     ...\r\n# };\r\n# \r\n# https://msdn.microsoft.com/ru-ru/library/windows/desktop/bb509668(v=vs.85).aspx\r\n\r\nStruct : T_KW_STRUCT '{' '}' --add\r\nStruct : T_KW_STRUCT '{' StructDecls '}'\r\nStructDecl : T_KW_STRUCT Id '{' '}' --add\r\nStructDecl : T_KW_STRUCT Id '{' UseDecl StructDecls '}'\r\nStructDecl : T_KW_STRUCT Id '{' StructDecls '}'\r\n\r\nConstStructDecl : StructDecl\r\nConstStructDecl : ConstUsages StructDecl\r\n\r\nStructDecls : VariableDecl --expose\r\nStructDecls : VariableDecl StructDecls\r\n\r\nSemantic : ':' Id --add\r\nSemantic : ':' T_KW_REGISTER '(' Register ')'\r\nSemantics : Semantic\r\nSemantics : Semantics Semantic\r\nSemanticsOpt :\r\nSemanticsOpt : Semantics\r\n\r\nRegister : Id\r\nRegister : Target ',' Id\r\n\r\nAnnotation : AnnotationBegin AnnotationEnd  --add\r\nAnnotation : AnnotationBegin AnnotationDecls AnnotationEnd\r\nAnnotationOpt :\r\nAnnotationOpt : Annotation\r\nAnnotationBegin : '<'\r\nAnnotationDecls : VariableDecl\r\nAnnotationDecls : VariableDecl AnnotationDecls\r\nAnnotationEnd : '>'\r\n\r\nInitializer : '=' AssignmentExpr --add\r\nInitializer : '=' ERROR --add\r\nInitializer : '=' '{' InitExprs '}'\r\nInitializer : '=' '{' InitExprs ',' '}'\r\n\r\n# InitializerOpt :\r\n# InitializerOpt : Initializer\r\n\r\n\r\n# [Storage_Class] [Type_Modifier] Type Name[Index]\r\n#    [: Semantic]\r\n#    [: Packoffset]\r\n#    [: Register];\r\n#    [Annotations]\r\n#    [= Initial_Value]\r\n#\r\n# https://msdn.microsoft.com/ru-ru/library/windows/desktop/bb509706(v=vs.85).aspx\r\n\r\nVariableDecl : UsageType Variables ';' --add\r\nVariableDecl : UsageType Variables ERROR --add\r\nVarStructDecl : UsageStructDecl Variables ';' --add\r\nVariables : Variable --expose\r\nVariables : Variables ',' Variable\r\n# Variables : Variables ERROR Variable\r\nVariables : Variables ',' ERROR\r\nVariable : VariableDim SemanticsOpt AnnotationOpt Initializer --add\r\nVariable : VariableDim SemanticsOpt AnnotationOpt --add\r\nVariableDim : NonTypeId --add\r\nVariableDim : VariableDim '[' ConstantExpr ']'\r\n\r\n\r\n# [StorageClass] [clipplanes()] [precise] Return_Value Name ( [ArgumentList] ) [: Semantic]\r\n# {ок\r\n#   [StatementBlock]\r\n# };\r\n# \r\n# https://msdn.microsoft.com/ru-ru/library/windows/desktop/bb509607(v=vs.85).aspx\r\n\r\nFunctionDecl : Attributes FunctionDef ';' --add\r\nFunctionDecl : FunctionDef ';' --add\r\nFunctionDecl : Attributes FunctionDef AnnotationOpt StmtBlock\r\nFunctionDecl : FunctionDef AnnotationOpt StmtBlock\r\n\r\n# TODO: remove it;\r\nFunctionDecl : Attributes FunctionDef AnnotationOpt ERROR\r\nFunctionDecl : FunctionDef AnnotationOpt ERROR\r\n\r\nFunctionDef : UsageType NonTypeId ParamList SemanticsOpt\r\n\r\nAttribute : '[' Id '(' ArgumentsOpt ')' ']'\r\nAttribute : '[' Id ']'\r\nAttributes : Attribute --expose\r\nAttributes : Attributes Attribute\r\nAttributesOpt : --expose\r\nAttributesOpt : Attributes\r\n\r\nParamList : '(' ')'\r\nParamList : '(' T_KW_VOID ')'\r\nParamList : '(' ParameterDecls ')'\r\n\r\n\r\n# [InputModifier] Type Name [: Semantic] [InterpolationModifier] [= Initializers]\r\n# \r\n# https://msdn.microsoft.com/ru-ru/library/windows/desktop/bb509606(v=vs.85).aspx\r\n\r\nParameterDecls : ParameterDecl --expose\r\nParameterDecls : ParameterDecls ',' ParameterDecl\r\nParameterDecls : ParameterDecls ERROR ParameterDecl\r\nParameterDecls : ParameterDecls ',' ERROR\r\nParameterDecls : ERROR\r\nParameterDecl : ParamUsageType Variable\r\n\r\nParamUsageType : Type --add\r\nParamUsageType : ParamUsages Type\r\n\r\nParamUsages : ParamUsage --expose\r\nParamUsages : ParamUsages ParamUsage\r\nParamUsage : T_KW_IN --add\r\nParamUsage : T_KW_OUT\r\nParamUsage : T_KW_INOUT\r\nParamUsage : T_KW_UNIFORM\r\nParamUsage : ConstUsage\r\n\r\n\r\nTechniqueDecl : T_KW_TECHNIQUE ComplexNameOpt SemanticsOpt AnnotationOpt TechniqueBody --add\r\nTechniqueBody : '{' '}'  --add\r\nTechniqueBody : '{' PassDecls '}'\r\n\r\nComplexNameOpt : ComplexName --add\r\nComplexName : Id --expose\r\nComplexName : ComplexName '.' Id\r\n\r\nPassDecls : PassDecl --expose\r\nPassDecls : PassDecls PassDecl\r\nPassDecl : T_KW_PASS IdOpt AnnotationOpt PassStateBlock --add\r\nPassDecl : ';'\r\n\r\nPassStateBlock : '{' '}' --add\r\nPassStateBlock : '{' PassStates '}'\r\nPassStates : PassState --expose\r\nPassStates : PassStates PassState\r\n\r\nPassState : Id StateIndex '=' PassStateExpr ';' --add\r\n\r\n# todo: move all particles declarations to separate grammar!\r\n#if FX_PART\r\n\r\nPartFxDecl : T_KW_FXPART ComplexNameOpt SemanticsOpt AnnotationOpt PartFxBody --add\r\n\r\nPartFxBody : '{' '}' \r\nPartFxBody : '{' PartFxProperties '}'\r\n\r\nPartFxProperties : PartFxProperty --expose\r\nPartFxProperties : PartFxProperties PartFxProperty\r\n\r\nPartFxProperty : PassState\r\nPartFxProperty : PassDecl\r\n\r\n#endif // FX_PART\r\n\r\nStateBlock : '{' '}' --add\r\nStateBlock : '{' States '}'\r\n\r\n\r\nStates : State --expose\r\nStates : States State\r\nState : Id StateIndex '=' StateExpr ';' --add\r\n\r\nStateIndex :\r\nStateIndex : '[' Uint ']'\r\n\r\nStmtBlock : '{' '}' --add\r\nStmtBlock : '{' Stmts '}'  \r\n\r\nStmts : Stmt --expose\r\nStmts : Stmts Stmt\r\n\r\n# SimpleStmt : ERROR ';' \r\n# SimpleStmt : ';' --add\r\n\r\nSimpleStmt : Expr ';'\r\nSimpleStmt : Expr ERROR\r\nSimpleStmt : T_KW_RETURN ';'\r\nSimpleStmt : T_KW_RETURN Expr ';'\r\nSimpleStmt : T_KW_RETURN ERROR ';'\r\nSimpleStmt : T_KW_DO Stmt T_KW_WHILE '(' Expr ')' ';'\r\nSimpleStmt : T_KW_DO Stmt T_KW_WHILE '(' ERROR ')' ';'\r\nSimpleStmt : StmtBlock\r\nSimpleStmt : T_KW_DISCARD ';'\r\nSimpleStmt : TypeDecl\r\nSimpleStmt : VariableDecl --add\r\nSimpleStmt : VarStructDecl\r\nSimpleStmt : T_KW_BREAK ';'\r\nSimpleStmt : T_KW_BREAK ERROR\r\nSimpleStmt : T_KW_CONTINUE ';'\r\nSimpleStmt : T_KW_CONTINUE ERROR\r\n\r\n#if FX_PART\r\nSimpleStmt : T_KW_SPAWN '(' Uint ')' NonTypeId '(' ArgumentsOpt ')' ';'\r\n#endif\r\n\r\n\r\nNonIfStmt : SimpleStmt --add\r\nNonIfStmt : WhileStmt NonIfStmt\r\nNonIfStmt : ForStmt NonIfStmt\r\n\r\nStmt : SimpleStmt --add\r\nStmt : UseDecl\r\nStmt : WhileStmt Stmt\r\nStmt : ForStmt Stmt\r\nStmt : IfStmt Stmt\r\nStmt : IfStmt NonIfStmt T_KW_ELSE Stmt\r\nStmt : ERROR\r\nStmt : ';'\r\n\r\nIfStmt : AttributesOpt T_KW_IF '(' Expr ')' --expose\r\nIfStmt : AttributesOpt T_KW_IF '(' ERROR ')' --expose\r\n\r\nWhileStmt : T_KW_WHILE '(' Expr ')' --expose\r\nWhileStmt : T_KW_WHILE '(' ERROR ')' --expose\r\n\r\nForStmt : For '(' ForInit ForCond ForStep ')' --expose\r\nForStmt : For ERROR --expose\r\n\r\nFor : T_KW_FOR\r\n\r\nForInit : ';' --add\r\nForInit : Expr ';'\r\nForInit : VariableDecl\r\nForInit : ERROR ';'\r\n\r\nForCond : ';' --add\r\nForCond : Expr ';'\r\nForCond : ERROR ';'\r\n\r\nForStep : --add\r\nForStep : Expr\r\nForStep : ERROR\r\n\r\nDwordExpr : Dword\r\nDwordExpr : Dword '|' DwordExpr\r\n\r\nDwordExprSeq : DwordExpr --expose\r\nDwordExprSeq : DwordExpr ',' DwordExprSeq\r\n\r\nPassStateExpr : DwordExpr --add\r\nPassStateExpr : ComplexExpr\r\nPassStateExpr : '{' DwordExprSeq '}'\r\n\r\nStateExpr : DwordExpr --add\r\nStateExpr : ComplexExpr\r\nStateExpr : '{' InitExprs '}'\r\nStateExpr : '{' InitExprs ',' '}'\r\nStateExpr : '<' RelationalExpr '>'\r\n\r\nSimpleExpr : T_KW_TRUE\r\nSimpleExpr : T_KW_FALSE\r\nSimpleExpr : Uint\r\nSimpleExpr : Float\r\nSimpleExpr : String\r\nSimpleExpr : NonTypeId\r\n\r\nComplexExpr : '(' Expr ')'\r\nComplexExpr : TypeId '(' ArgumentsOpt ')'\r\nComplexExpr : BaseType '(' ArgumentsOpt ')'\r\nComplexExpr : NonTypeId '(' ArgumentsOpt ')'\r\nComplexExpr : PostfixPointExpr '(' ArgumentsOpt ')'\r\nComplexExpr : ObjectExpr\r\n\r\nObjectExpr : T_KW_COMPILE NonTypeId '(' ArgumentsOpt ')'\r\nObjectExpr : T_KW_SAMPLER_STATE StateBlock\r\nObjectExpr : T_KW_COMPILE_FRAGMENT Target NonTypeId '(' ArgumentsOpt ')'\r\nObjectExpr : T_KW_STATEBLOCK_STATE StateBlock\r\n\r\nPrimaryExpr : ComplexExpr\r\nPrimaryExpr : SimpleExpr\r\nPostfixExpr : PrimaryExpr\r\nPostfixExpr : PostfixExpr '[' Expr ']'\r\nPostfixExpr : PostfixExpr '[' ERROR ']'\r\nPostfixExpr : PostfixExpr '.' Id\r\nPostfixExpr : PostfixExpr T_OP_INC\r\nPostfixExpr : PostfixExpr T_OP_DEC\r\n\r\nPostfixPointExpr : PostfixExpr '.' Id\r\n\r\nUnaryExpr : PostfixExpr\r\nUnaryExpr : T_OP_INC UnaryExpr\r\nUnaryExpr : T_OP_DEC UnaryExpr\r\n# UnaryExpr : T_OP_INC ERROR\r\n# UnaryExpr : T_OP_DEC ERROR\r\nUnaryExpr : '!' CastExpr\r\n# UnaryExpr : '!' ERROR\r\nUnaryExpr : '-' CastExpr\r\nUnaryExpr : '+' CastExpr\r\n\r\nCastExpr : UnaryExpr\r\nCastExpr : '(' ConstTypeDim ')' CastExpr\r\nCastExpr : '(' ERROR ')' CastExpr\r\n\r\nMulExpr : CastExpr\r\nMulExpr : MulExpr '*' CastExpr\r\nMulExpr : MulExpr '/' CastExpr\r\nMulExpr : MulExpr '%' CastExpr\r\n\r\nMulExpr : ERROR '*' CastExpr\r\nMulExpr : ERROR '/' CastExpr\r\nMulExpr : ERROR '%' CastExpr\r\nMulExpr : MulExpr '*' ERROR\r\nMulExpr : MulExpr '/' ERROR\r\nMulExpr : MulExpr '%' ERROR\r\n# MulExpr : ERROR '*' ERROR\r\n# MulExpr : ERROR '/' ERROR\r\n# MulExpr : ERROR '%' ERROR\r\n\r\nAddExpr : MulExpr\r\nAddExpr : AddExpr '+' MulExpr\r\nAddExpr : AddExpr '-' MulExpr\r\n\r\nAddExpr : AddExpr '+' ERROR\r\nAddExpr : AddExpr '-' ERROR\r\n\r\nRelationalExpr : AddExpr\r\nRelationalExpr : RelationalExpr '<' AddExpr\r\nRelationalExpr : RelationalExpr '>' AddExpr\r\nRelationalExpr : RelationalExpr T_OP_LE AddExpr\r\nRelationalExpr : RelationalExpr T_OP_GE AddExpr\r\n\r\nRelationalExpr : ERROR '<' AddExpr\r\nRelationalExpr : RelationalExpr '<' ERROR\r\nRelationalExpr : ERROR '<' ERROR\r\n\r\nRelationalExpr : RelationalExpr '>' ERROR\r\nRelationalExpr : ERROR '>' AddExpr\r\nRelationalExpr : ERROR '>' ERROR\r\n\r\nRelationalExpr : RelationalExpr T_OP_LE ERROR\r\nRelationalExpr : ERROR T_OP_LE AddExpr\r\nRelationalExpr : ERROR T_OP_LE ERROR\r\n\r\nRelationalExpr : RelationalExpr T_OP_GE ERROR\r\nRelationalExpr : ERROR T_OP_GE AddExpr\r\nRelationalExpr : ERROR T_OP_GE ERROR\r\n\r\nEqualityExpr : RelationalExpr\r\nEqualityExpr : EqualityExpr T_OP_EQ RelationalExpr\r\nEqualityExpr : EqualityExpr T_OP_NE RelationalExpr\r\nEqualityExpr : ERROR T_OP_EQ RelationalExpr\r\nEqualityExpr : EqualityExpr T_OP_NE ERROR\r\nEqualityExpr : ERROR T_OP_NE ERROR\r\n\r\nAndExpr : EqualityExpr\r\nAndExpr : AndExpr T_OP_AND EqualityExpr\r\nAndExpr : ERROR T_OP_AND EqualityExpr\r\nAndExpr : AndExpr T_OP_AND ERROR\r\n\r\nOrExpr : AndExpr\r\nOrExpr : OrExpr T_OP_OR AndExpr\r\nOrExpr : OrExpr T_OP_OR ERROR\r\nOrExpr : ERROR T_OP_OR AndExpr\r\n\r\nConditionalExpr : OrExpr\r\nConditionalExpr : OrExpr '?' AssignmentExpr ':' ConditionalExpr\r\nConditionalExpr : ERROR '?' AssignmentExpr ':' ConditionalExpr\r\nConditionalExpr : OrExpr '?' ERROR ':' ConditionalExpr\r\nConditionalExpr : OrExpr '?' AssignmentExpr ':' ERROR\r\nConditionalExpr : OrExpr '?' ERROR ':' ERROR\r\nConditionalExpr : ERROR '?' ERROR ':' ERROR\r\nConditionalExpr : ERROR '?' ERROR ':' ConditionalExpr\r\n\r\nAssignmentExpr : ConditionalExpr\r\nAssignmentExpr : CastExpr '=' AssignmentExpr\r\nAssignmentExpr : CastExpr T_OP_ME AssignmentExpr\r\nAssignmentExpr : CastExpr T_OP_DE AssignmentExpr\r\nAssignmentExpr : CastExpr T_OP_RE AssignmentExpr\r\nAssignmentExpr : CastExpr T_OP_AE AssignmentExpr\r\nAssignmentExpr : CastExpr T_OP_SE AssignmentExpr\r\n\r\nArguments : AssignmentExpr --expose\r\nArguments : Arguments ',' AssignmentExpr\r\nArguments : Arguments ERROR AssignmentExpr\r\nArguments : Arguments ',' ERROR\r\nArgumentsOpt : --expose\r\nArgumentsOpt : Arguments\r\n\r\nInitExpr : AssignmentExpr --add\r\nInitExpr : '{' InitExprs '}'\r\nInitExpr : '{' InitExprs ',' '}'\r\nInitExprs : InitExpr --expose\r\nInitExprs : InitExprs ',' InitExpr\r\n\r\nConstantExpr : AssignmentExpr\r\nExpr : AssignmentExpr\r\nExpr : Expr ',' AssignmentExpr\r\nExpr : Expr ',' ERROR\r\nExpr : ERROR ',' ERROR\r\nExpr : ERROR ',' AssignmentExpr\r\n\r\nDword : Uint\r\nDword : '-' Uint\r\nDword : Float\r\nDword : '-' Float\r\nDword : DwordId\r\nDword : Uint DwordId\r\nDwordId : Id\r\nDwordId : T_KW_TRUE\r\nDwordId : T_KW_FALSE\r\nDwordId : T_KW_TEXTURE\r\n\r\nId : TypeId\r\nId : NonTypeId\r\nIdOpt :\r\nIdOpt : Id\r\n\r\nTarget : NonTypeId\r\n\r\nUint : T_UINT\r\nFloat : T_FLOAT\r\n\r\nStrings : String\r\nStrings : Strings String\r\nString : T_STRING\r\n\r\nTypeId : T_TYPE_ID\r\nNonTypeId : T_NON_TYPE_ID\r\nLineTerminator : T_LINE_TERMINATOR\r\n\r\nAsmDecl : T_KW_DECL '{'\r\nAsm : T_KW_ASM '{'\r\nAsmFragment : T_KW_ASM_FRAGMENT '{'\r\n\r\n--LEXER--\r\n\r\nT_KW_STATIC : \"static\"\r\nT_KW_UNIFORM : \"uniform\"\r\nT_KW_EXTERN : \"extern\"\r\nT_KW_VOLATILE : \"volatile\"\r\nT_KW_INLINE : \"inline\"\r\nT_KW_CONST : \"const\"\r\nT_KW_ROW_MAJOR : \"row_major\"\r\nT_KW_COLUMN_MAJOR : \"column_major\"\r\nT_KW_TYPEDEF : \"typedef\"\r\nT_KW_STRUCT : \"struct\"\r\nT_KW_VOID : \"void\"\r\nT_KW_BOOL : \"bool\"\r\nT_KW_INT : \"int\"\r\nT_KW_UINT : \"uint\"\r\nT_KW_HALF : \"half\"\r\nT_KW_FLOAT : \"float\"\r\nT_KW_DOUBLE : \"double\"\r\nT_KW_VECTOR : \"vector\"\r\nT_KW_MATRIX : \"matrix\"\r\nT_KW_STRING : \"string\"\r\nT_KW_TEXTURE : \"texture\"\r\nT_KW_TEXTURE1D : \"texture1D\"\r\nT_KW_TEXTURE2D : \"texture2D\"\r\nT_KW_TEXTURE3D : \"texture3D\"\r\nT_KW_TEXTURECUBE : \"texturecube\"\r\nT_KW_SAMPLER : \"sampler\"\r\nT_KW_SAMPLER1D : \"sampler1D\"\r\nT_KW_SAMPLER2D : \"sampler2D\"\r\nT_KW_SAMPLER3D : \"sampler3D\"\r\nT_KW_SAMPLERCUBE : \"samplerCUBE\"\r\nT_KW_RWBUFFER : \"RWBuffer\"\r\nT_KW_RWSTRUCTUREDBUFFER : \"RWStructuredBuffer\"\r\nT_KW_APPENDSTRUCTUREDBUFFER : \"AppendStructuredBuffer\"\r\nT_KW_PIXELSHADER : \"pixelshader\"\r\nT_KW_VERTEXSHADER : \"vertexshader\"\r\nT_KW_PIXELFRAGMENT : \"pixelfragment\"\r\nT_KW_VERTEXFRAGMENT : \"vertexfragment\"\r\nT_KW_STATEBLOCK : \"stateblock\"\r\nT_KW_REGISTER : \"register\"\r\nT_KW_IN : \"in\"\r\nT_KW_OUT : \"out\"\r\nT_KW_INOUT : \"inout\"\r\nT_KW_TECHNIQUE : \"technique\"\r\n#if FX_PART\r\n    T_KW_FXPART : \"partFx\"\r\n#endif\r\nT_KW_PASS : \"pass\"\r\nT_KW_RETURN : \"return\"\r\nT_KW_DO : \"do\"\r\nT_KW_DISCARD : \"discard\"\r\nT_KW_WHILE : \"while\"\r\nT_KW_IF : \"if\"\r\nT_KW_ELSE : \"else\"\r\nT_KW_FOR : \"for\"\r\nT_KW_TRUE : \"true\"\r\nT_KW_FALSE : \"false\"\r\nT_KW_COMPILE : \"compile\"\r\nT_KW_SAMPLER_STATE : \"sampler_state\"\r\nT_KW_COMPILE_FRAGMENT : \"compile_fragment\"\r\nT_KW_STATEBLOCK_STATE : \"stateblock_state\"\r\nT_KW_DECL : \"decl\"\r\nT_KW_ASM : \"asm\"\r\nT_KW_ASM_FRAGMENT : \"asm_fragment\"\r\nT_KW_USE : \"use\"\r\nT_KW_STRICT : \"strict\"\r\nT_KW_IMPORT : \"import\"\r\nT_KW_PROVIDE : \"provide\"\r\nT_KW_SWITCH : \"switch\"\r\nT_KW_CASE : \"case\"\r\nT_KW_DEFAULT : \"default\"\r\nT_KW_BREAK : \"break\"\r\n#if FX_PART\r\nT_KW_SPAWN : \"spawn\"\r\n#endif\r\nT_KW_CONTINUE : \"continue\"\r\nT_KW_AS : \"as\"\r\nT_KW_INCLUDE : \"include\"\r\nT_OP_INC : \"++\"\r\nT_OP_DEC : \"--\"\r\nT_OP_LE : \">=\"\r\nT_OP_GE : \"<=\"\r\nT_OP_EQ : \"==\"\r\nT_OP_NE : \"!=\"\r\nT_OP_AND : \"&&\"\r\nT_OP_OR : \"||\"\r\nT_OP_ME : \"*=\"\r\nT_OP_DE : \"/=\"\r\nT_OP_RE : \"%=\"\r\nT_OP_AE : \"+=\"\r\nT_OP_SE : \"-=\"");

/***/ }),

/***/ "zX2+":
/*!*************************************!*\
  !*** ./src/lib/idl/IDiagnostics.ts ***!
  \*************************************/
/*! exports provided: EDiagnosticCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDiagnosticCategory", function() { return EDiagnosticCategory; });
var EDiagnosticCategory;
(function (EDiagnosticCategory) {
    EDiagnosticCategory[EDiagnosticCategory["k_Warning"] = 0] = "k_Warning";
    EDiagnosticCategory[EDiagnosticCategory["k_Error"] = 1] = "k_Error";
})(EDiagnosticCategory || (EDiagnosticCategory = {}));


/***/ }),

/***/ "zioJ":
/*!****************************************!*\
  !*** ./src/lib/idl/EAnalyzerErrors.ts ***!
  \****************************************/
/*! exports provided: EAnalyzerErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAnalyzerErrors", function() { return EAnalyzerErrors; });
var EAnalyzerErrors;
(function (EAnalyzerErrors) {
    EAnalyzerErrors[EAnalyzerErrors["SystemTypeRedefinition"] = 2202] = "SystemTypeRedefinition";
    EAnalyzerErrors[EAnalyzerErrors["TypeRedefinition"] = 2203] = "TypeRedefinition";
    EAnalyzerErrors[EAnalyzerErrors["VariableRedefinition"] = 2204] = "VariableRedefinition";
    EAnalyzerErrors[EAnalyzerErrors["SystemVariableRedefinition"] = 2205] = "SystemVariableRedefinition";
    EAnalyzerErrors[EAnalyzerErrors["FunctionRedifinition"] = 2206] = "FunctionRedifinition";
    EAnalyzerErrors[EAnalyzerErrors["SystemFunctionRedefinition"] = 2207] = "SystemFunctionRedefinition";
    EAnalyzerErrors[EAnalyzerErrors["UnsupportedTypeDecl"] = 2208] = "UnsupportedTypeDecl";
    EAnalyzerErrors[EAnalyzerErrors["UnsupportedExpr"] = 2209] = "UnsupportedExpr";
    EAnalyzerErrors[EAnalyzerErrors["UnknownVarName"] = 2210] = "UnknownVarName";
    EAnalyzerErrors[EAnalyzerErrors["InvalidArithmeticOperation"] = 2211] = "InvalidArithmeticOperation";
    EAnalyzerErrors[EAnalyzerErrors["InvalidArithmeticAssigmentOperation"] = 2212] = "InvalidArithmeticAssigmentOperation";
    EAnalyzerErrors[EAnalyzerErrors["InvalidAssigmentOperation"] = 2213] = "InvalidAssigmentOperation";
    EAnalyzerErrors[EAnalyzerErrors["InvalidLeftHandSideInAssignment"] = 2214] = "InvalidLeftHandSideInAssignment";
    EAnalyzerErrors[EAnalyzerErrors["InvalidRelationalOperation"] = 2215] = "InvalidRelationalOperation";
    EAnalyzerErrors[EAnalyzerErrors["InvalidLogicOperation"] = 2216] = "InvalidLogicOperation";
    EAnalyzerErrors[EAnalyzerErrors["InvalidConditionType"] = 2217] = "InvalidConditionType";
    EAnalyzerErrors[EAnalyzerErrors["InvalidConditonValueTypes"] = 2218] = "InvalidConditonValueTypes";
    EAnalyzerErrors[EAnalyzerErrors["InvalidCastTypeUsage"] = 2219] = "InvalidCastTypeUsage";
    EAnalyzerErrors[EAnalyzerErrors["InvalidCastTypeNotBase"] = 2220] = "InvalidCastTypeNotBase";
    EAnalyzerErrors[EAnalyzerErrors["InvalidCastUnknownType"] = 2221] = "InvalidCastUnknownType";
    EAnalyzerErrors[EAnalyzerErrors["InvalidUnaryOperation"] = 2222] = "InvalidUnaryOperation";
    EAnalyzerErrors[EAnalyzerErrors["InvalidPostfixNotArray"] = 2223] = "InvalidPostfixNotArray";
    EAnalyzerErrors[EAnalyzerErrors["InvalidPostfixNotIntIndex"] = 2224] = "InvalidPostfixNotIntIndex";
    EAnalyzerErrors[EAnalyzerErrors["InvalidPostfixNotField"] = 2225] = "InvalidPostfixNotField";
    EAnalyzerErrors[EAnalyzerErrors["InvalidPostfixArithmetic"] = 2226] = "InvalidPostfixArithmetic";
    EAnalyzerErrors[EAnalyzerErrors["InvalidComplexNotFunction"] = 2227] = "InvalidComplexNotFunction";
    EAnalyzerErrors[EAnalyzerErrors["InvalidComplexNotType"] = 2228] = "InvalidComplexNotType";
    EAnalyzerErrors[EAnalyzerErrors["InvalidComplexNotConstructor"] = 2229] = "InvalidComplexNotConstructor";
    EAnalyzerErrors[EAnalyzerErrors["InvalidCompileNotFunction"] = 2230] = "InvalidCompileNotFunction";
    EAnalyzerErrors[EAnalyzerErrors["InvalidCompileFunctionNotValid"] = 2231] = "InvalidCompileFunctionNotValid";
    EAnalyzerErrors[EAnalyzerErrors["FunctionRedefinition"] = 2232] = "FunctionRedefinition";
    EAnalyzerErrors[EAnalyzerErrors["InvalidWhileCondition"] = 2233] = "InvalidWhileCondition";
    EAnalyzerErrors[EAnalyzerErrors["InvalidDoWhileCondition"] = 2234] = "InvalidDoWhileCondition";
    EAnalyzerErrors[EAnalyzerErrors["InvalidIfCondition"] = 2235] = "InvalidIfCondition";
    EAnalyzerErrors[EAnalyzerErrors["InvalidForInitExpr"] = 2236] = "InvalidForInitExpr";
    EAnalyzerErrors[EAnalyzerErrors["InvalidForInitEmptyIterator"] = 2237] = "InvalidForInitEmptyIterator";
    EAnalyzerErrors[EAnalyzerErrors["InvalidForConditionEmpty"] = 2238] = "InvalidForConditionEmpty";
    EAnalyzerErrors[EAnalyzerErrors["InvalidForConditionRelation"] = 2239] = "InvalidForConditionRelation";
    EAnalyzerErrors[EAnalyzerErrors["InvalidForStepEmpty"] = 2240] = "InvalidForStepEmpty";
    EAnalyzerErrors[EAnalyzerErrors["InvalidForStepOperator"] = 2241] = "InvalidForStepOperator";
    EAnalyzerErrors[EAnalyzerErrors["InvalidForStepExpr"] = 2242] = "InvalidForStepExpr";
    EAnalyzerErrors[EAnalyzerErrors["InvalidNewFieldForStructName"] = 2243] = "InvalidNewFieldForStructName";
    EAnalyzerErrors[EAnalyzerErrors["InvalidNewFieldForStructSematic"] = 2244] = "InvalidNewFieldForStructSematic";
    EAnalyzerErrors[EAnalyzerErrors["InvalidNewAnnotationVar"] = 2245] = "InvalidNewAnnotationVar";
    EAnalyzerErrors[EAnalyzerErrors["InvalidFunctionParameterDefenitionDefaultNeeded"] = 2246] = "InvalidFunctionParameterDefenitionDefaultNeeded";
    EAnalyzerErrors[EAnalyzerErrors["CannotChooseFunction"] = 2247] = "CannotChooseFunction";
    EAnalyzerErrors[EAnalyzerErrors["InvalidFuncDefenitionReturnType"] = 2248] = "InvalidFuncDefenitionReturnType";
    EAnalyzerErrors[EAnalyzerErrors["InvalidSystemFunctionReturnType"] = 2249] = "InvalidSystemFunctionReturnType";
    EAnalyzerErrors[EAnalyzerErrors["InvalidTypeNameNotType"] = 2250] = "InvalidTypeNameNotType";
    EAnalyzerErrors[EAnalyzerErrors["InvalidTypeNameTemplateNotFound"] = 2251] = "InvalidTypeNameTemplateNotFound";
    EAnalyzerErrors[EAnalyzerErrors["InvalidTypeScope"] = 2252] = "InvalidTypeScope";
    EAnalyzerErrors[EAnalyzerErrors["CannotProduceType"] = 2253] = "CannotProduceType";
    EAnalyzerErrors[EAnalyzerErrors["InvalidTypeVectorMatrix"] = 2254] = "InvalidTypeVectorMatrix";
    EAnalyzerErrors[EAnalyzerErrors["TechniqueNameRedefinition"] = 2255] = "TechniqueNameRedefinition";
    EAnalyzerErrors[EAnalyzerErrors["InvalidFunctionRecursionNotAllowed"] = 2256] = "InvalidFunctionRecursionNotAllowed";
    EAnalyzerErrors[EAnalyzerErrors["InvalidFunctionImplementationNotFound"] = 2257] = "InvalidFunctionImplementationNotFound";
    // InvalidFunctionUsageVertex,
    // InvalidFunctionUsagePixel,
    EAnalyzerErrors[EAnalyzerErrors["FunctionIsNotCompatibleWithVertexShader"] = 2258] = "FunctionIsNotCompatibleWithVertexShader";
    EAnalyzerErrors[EAnalyzerErrors["FunctionIsNotCompatibleWithPixelShader"] = 2259] = "FunctionIsNotCompatibleWithPixelShader";
    EAnalyzerErrors[EAnalyzerErrors["InvalidReturnStmtVoid"] = 2260] = "InvalidReturnStmtVoid";
    EAnalyzerErrors[EAnalyzerErrors["InvalidReturnStmtEmpty"] = 2261] = "InvalidReturnStmtEmpty";
    EAnalyzerErrors[EAnalyzerErrors["InvalidReturnStmtTypesNotEqual"] = 2262] = "InvalidReturnStmtTypesNotEqual";
    EAnalyzerErrors[EAnalyzerErrors["InvalidFunctionReturnType"] = 2263] = "InvalidFunctionReturnType";
    EAnalyzerErrors[EAnalyzerErrors["InvalidFunctionParameterUsage"] = 2264] = "InvalidFunctionParameterUsage";
    EAnalyzerErrors[EAnalyzerErrors["InvalidTypeForWriting"] = 2265] = "InvalidTypeForWriting";
    EAnalyzerErrors[EAnalyzerErrors["InvalidTypeForReading"] = 2266] = "InvalidTypeForReading";
    EAnalyzerErrors[EAnalyzerErrors["InvalidExprIsNotLValue"] = 2267] = "InvalidExprIsNotLValue";
    EAnalyzerErrors[EAnalyzerErrors["InvalidVariableInitializing"] = 2268] = "InvalidVariableInitializing";
    EAnalyzerErrors[EAnalyzerErrors["UnsupportedStateIndex"] = 2269] = "UnsupportedStateIndex";
    EAnalyzerErrors[EAnalyzerErrors["InvalidSamplerTexture"] = 2270] = "InvalidSamplerTexture";
    EAnalyzerErrors[EAnalyzerErrors["CannotCalcPadding"] = 2271] = "CannotCalcPadding";
    EAnalyzerErrors[EAnalyzerErrors["ImportedComponentNotExists"] = 2272] = "ImportedComponentNotExists";
    EAnalyzerErrors[EAnalyzerErrors["InvalidFunctionReturnStmtNotFound"] = 2273] = "InvalidFunctionReturnStmtNotFound";
    EAnalyzerErrors[EAnalyzerErrors["UnsupportedProvideAs"] = 2274] = "UnsupportedProvideAs";
    EAnalyzerErrors[EAnalyzerErrors["UnreachableCode"] = 2275] = "UnreachableCode";
    //
    //
    //
    EAnalyzerErrors[EAnalyzerErrors["PartFx_VertexShaderParametersMismatch"] = 2276] = "PartFx_VertexShaderParametersMismatch";
    EAnalyzerErrors[EAnalyzerErrors["PartFx_InvalidSpawnStmtInitializerNotFound"] = 2277] = "PartFx_InvalidSpawnStmtInitializerNotFound";
})(EAnalyzerErrors || (EAnalyzerErrors = {}));
;


/***/ })

/******/ });
//# sourceMappingURL=ce8785dbd7ad0b8ff096.worker.js.map