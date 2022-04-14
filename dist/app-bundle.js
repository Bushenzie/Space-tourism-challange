/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/elements.js":
/*!************************!*\
  !*** ./js/elements.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Element\": () => (/* binding */ Element)\n/* harmony export */ });\n\n\nclass Element {\n    constructor(){\n        \n    }\n\n    Nav() {\n        return {\n            all: document.querySelectorAll(\"#list > li\"),\n            home: document.querySelector(\"li.home\"),\n            technology: document.querySelector(\"li.tech\"),\n            crew: document.querySelector(\"li.crew\"),\n            destination: document.querySelector(\"li.dest\"),\n        }\n    }\n\n    Content() {\n        return {\n            body: document.body,\n        }\n    }\n}\n\n//# sourceURL=webpack://space-tourism-challange/./js/elements.js?");

/***/ }),

/***/ "./js/events.js":
/*!**********************!*\
  !*** ./js/events.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Event\": () => (/* binding */ Event)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./js/index.js\");\n\n\n\n\nclass Event {\n    constructor() {}\n\n\n    SetNav() {\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().home.addEventListener(\"click\",() => {\n            this.SwitchPage(\"home\");\n        });\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().technology.addEventListener(\"click\",() => {\n            this.SwitchPage(\"technology\");\n        });\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().crew.addEventListener(\"click\",() => {\n            this.SwitchPage(\"crew\");\n        });\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().destination.addEventListener(\"click\",() => {\n            this.SwitchPage(\"destination\");\n        });\n    }\n\n\n    SwitchPage(page) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.removeAttribute(\"id\");\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.setAttribute(\"id\",page);\n        \n        [..._index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().all].forEach(el => {\n            el.classList.remove(\"selected\");\n        })\n        _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentPage(String(page));\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav()[String(page)].classList.add(\"selected\");\n    }\n}\n\n//# sourceURL=webpack://space-tourism-challange/./js/events.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Elements\": () => (/* binding */ Elements),\n/* harmony export */   \"Events\": () => (/* binding */ Events),\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/elements.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./js/events.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./js/storage.js\");\n\n\n\n\nconst Elements = new _elements__WEBPACK_IMPORTED_MODULE_0__.Element();\nconst Events = new _events__WEBPACK_IMPORTED_MODULE_1__.Event();\nconst Storage = new _storage__WEBPACK_IMPORTED_MODULE_2__.LC();\n\ndocument.addEventListener(\"load\", ()=> {\n\n})\n\nconsole.log(Storage.GetCurrentPage());\nEvents.SetNav();\n\nif(!Storage.GetCurrentPage()) {\n    Storage.SetCurrentPage(\"home\");\n    Storage.LoadPage();\n} else {\n    Storage.LoadPage();\n}\n\n//# sourceURL=webpack://space-tourism-challange/./js/index.js?");

/***/ }),

/***/ "./js/storage.js":
/*!***********************!*\
  !*** ./js/storage.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LC\": () => (/* binding */ LC)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./js/index.js\");\n\n\nclass LC {\n    constructor() {}\n\n    GetCurrentPage() {\n        return localStorage.getItem(\"page\");\n    }\n\n    SetCurrentPage(page) {\n        localStorage.setItem(\"page\", page);\n\n    }\n\n    LoadPage() {\n        _index__WEBPACK_IMPORTED_MODULE_0__.Events.SwitchPage(localStorage.getItem(\"page\"));\n    }\n}\n\n//# sourceURL=webpack://space-tourism-challange/./js/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;