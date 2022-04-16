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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Element\": () => (/* binding */ Element)\n/* harmony export */ });\n\n\nclass Element {\n    constructor(){\n        \n    }\n\n    Nav() {\n        return {\n            all: document.querySelectorAll(\"#list > li\"),\n            home: document.querySelector(\"li.home\"),\n            technology: document.querySelector(\"li.tech\"),\n            crew: document.querySelector(\"li.crew\"),\n            destination: document.querySelector(\"li.dest\"),\n        }\n    }\n\n    Content() {\n        return {\n            body: document.body,\n            explore: document.querySelector(\".explore\"),\n        }\n    }\n\n    PlanetSelection() {\n        return {\n            moon: document.querySelector(\"li#moon-select\"),\n            mars: document.querySelector(\"li#mars-select\"),\n            europa: document.querySelector(\"li#europa-select\"),\n            titan: document.querySelector(\"li#titan-select\"),\n        }\n    }\n\n    CrewSelection() {\n        return {\n            commander: document.querySelector(\"li#commander-select\"),\n            mission: document.querySelector(\"li#mission-select\"),\n            pilot: document.querySelector(\"li#pilot-select\"),\n            engineer: document.querySelector(\"li#engineer-select\"),\n        }\n    }\n}\n\n//# sourceURL=webpack://space-tourism-challange/./js/elements.js?");

/***/ }),

/***/ "./js/events.js":
/*!**********************!*\
  !*** ./js/events.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Event\": () => (/* binding */ Event)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./js/index.js\");\n\n\n\nclass Event {\n    constructor() {}\n\n\n    SetNav() {\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().home.addEventListener(\"click\",() => {\n            this.SwitchPage(\"home\");\n            this.LoadPage(\"home\");\n        });\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().technology.addEventListener(\"click\",() => {\n            this.SwitchPage(\"technology\");\n        });\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().crew.addEventListener(\"click\",() => {\n            this.SwitchPage(\"crew\");\n        });\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().destination.addEventListener(\"click\",() => {\n            this.SwitchPage(\"destination\");\n        });\n    }\n\n    SetMain() {\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().explore.addEventListener(\"click\",()=> {\n            this.SwitchPage(\"destination\");\n        })\n    }\n\n    LoadPage(page,data) {\n        if(_index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.querySelector(\".lower-part\")) {\n            _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.querySelector(\".lower-part\").remove();\n        }\n\n        if(!data) {\n            _index__WEBPACK_IMPORTED_MODULE_0__.Storage.LoadPage();\n            return;\n        }\n\n        let lowerPart = document.createElement(\"div\");\n        let container = document.createElement(\"div\");\n        switch(page) {\n            case \"home\": \n                lowerPart.classList.add(\"lower-part\");\n                container.classList.add(\"lower-part-main\");\n                container.innerHTML = \n                `\n                <div class=\"text\">\n                    <h3 class=\"sub-heading\">SO, YOU WANT TO TRAVEL TO</h3>\n                    <h1 class=\"heading\">SPACE</h1>\n                    <p class=\"text\">Let's face it; If you want to go to space, you might as well genuinely go to outer space and not hober kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>\n                </div>\n                <div class=\"explore\">\n                    <h2>EXPLORE</h2>\n                </div>\n                `\n\n                _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentCrewMem(0);\n                _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentPlanet(0);\n                lowerPart.appendChild(container);\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.appendChild(lowerPart);\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().explore.addEventListener(\"click\",()=> {\n                    this.SwitchPage(\"destination\")\n                });\n\n            break;\n            case \"destination\":\n                lowerPart.classList.add(\"lower-part\");\n                container.classList.add(\"lower-part-dest\");\n                container.innerHTML = \n                    `\n                    <div class=\"planet-image\">\n                        <img src=\"${data.destinations[Number(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentPlanet())].images.png}\">\n                    </div>\n                    <div class=\"text\">\n                        <ul id=\"planet-select\">\n                            <li id=\"moon-select\">Moon</li>\n                            <li id=\"mars-select\">Mars</li>\n                            <li id=\"europa-select\">Europa</li>\n                            <li id=\"titan-select\">Titan</li>\n                        </ul>\n                        <h1 class=\"heading\">${data.destinations[Number(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentPlanet())].name.toUpperCase()}</h1>\n                        <p class=\"text\">${data.destinations[Number(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentPlanet())].description}</p>\n                        <div class=\"line\"></div>\n                        <div class=\"info\">\n                            <h3>${data.destinations[Number(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentPlanet())].distance.toUpperCase()}</h3>\n                            <h3>${data.destinations[Number(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentPlanet())].travel.toUpperCase()}</h3>\n                        </div>\n                    </div>\n                    ` \n\n                _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentCrewMem(0);\n                lowerPart.appendChild(container);\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.appendChild(lowerPart);\n\n                switch(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentPlanet()) {\n                    case \"0\":\n                        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.PlanetSelection().moon.classList.add(\"selected\");\n                    break;\n                    case \"1\":\n                        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.PlanetSelection().mars.classList.add(\"selected\");\n                    break;\n                    case \"2\":\n                        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.PlanetSelection().europa.classList.add(\"selected\");\n                    break;\n                    case \"3\":\n                        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.PlanetSelection().titan.classList.add(\"selected\");\n                    break;\n                }\n\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.PlanetSelection().moon.addEventListener(\"click\",()=> {\n                    _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentPlanet(0);\n                    this.LoadPage(\"destination\");;\n                })\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.PlanetSelection().mars.addEventListener(\"click\",()=> {\n                    _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentPlanet(1);\n                    this.LoadPage(\"destination\");\n                })\n\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.PlanetSelection().europa.addEventListener(\"click\",()=> {\n                    _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentPlanet(2);\n                    this.LoadPage(\"destination\");\n                })\n\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.PlanetSelection().titan.addEventListener(\"click\",()=> {\n                    _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentPlanet(3);\n                    this.LoadPage(\"destination\");\n                })\n                \n            break;\n\n            case \"crew\": \n                lowerPart.classList.add(\"lower-part\");\n                container.classList.add(\"lower-part-crew\");\n                container.innerHTML = \n                `\n                <div class=\"text\">\n                    <h3 class=\"sub-heading\">${data.crew[Number(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentCrewMem())].role}</h3>\n                    <h1 class=\"heading\">${data.crew[Number(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentCrewMem())].name}</h1>\n                    <p class=\"text\">${data.crew[Number(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentCrewMem())].bio}</p>\n                    <ul id=\"person-select\">\n                        <li id=\"commander-select\"></li>\n                        <li id=\"mission-select\"></li>\n                        <li id=\"pilot-select\"></li>\n                        <li id=\"engineer-select\"></li>\n                    </ul>\n                </div>\n                <div class=\"person\">\n                    <img src=\"${data.crew[Number(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentCrewMem())].images.png}\">\n                </div>\n                ` \n\n                _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentPlanet(0);\n                lowerPart.appendChild(container);\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.appendChild(lowerPart);\n\n                switch(_index__WEBPACK_IMPORTED_MODULE_0__.Storage.GetCurrentCrewMem()) {\n                    case \"0\":\n                        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.CrewSelection().commander.classList.add(\"selected\");\n                    break;\n                    case \"1\":\n                        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.CrewSelection().mission.classList.add(\"selected\");\n                    break;\n                    case \"2\":\n                        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.CrewSelection().pilot.classList.add(\"selected\");\n                    break;\n                    case \"3\":\n                        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.CrewSelection().engineer.classList.add(\"selected\");\n                    break;\n                }\n\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.CrewSelection().commander.addEventListener(\"click\",()=> {\n                    _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentCrewMem(0);\n                    this.LoadPage(\"crew\");;\n                })\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.CrewSelection().mission.addEventListener(\"click\",()=> {\n                    _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentCrewMem(1);\n                    this.LoadPage(\"crew\");\n                })\n\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.CrewSelection().pilot.addEventListener(\"click\",()=> {\n                    _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentCrewMem(2);\n                    this.LoadPage(\"crew\");\n                })\n\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.CrewSelection().engineer.addEventListener(\"click\",()=> {\n                    _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentCrewMem(3);\n                    this.LoadPage(\"crew\");\n                })\n\n\n\n            break;\n            case \"technology\": \n                lowerPart.classList.add(\"lower-part\");\n                container.classList.add(\"lower-part-tech\");\n                container.innerHTML = \n                `\n                <div class=\"text\">\n                    \n                </div>\n                <div class=\"explore\">\n                    \n                </div>\n                ` \n                _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentCrewMem(0);\n                _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentPlanet(0);\n                lowerPart.appendChild(container);\n                _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.appendChild(lowerPart);\n            break;\n        }\n    }\n\n\n    SwitchPage(page,data) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.removeAttribute(\"id\");\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Content().body.setAttribute(\"id\",page);\n        \n        [..._index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav().all].forEach(el => {\n            el.classList.remove(\"selected\");\n        })\n        _index__WEBPACK_IMPORTED_MODULE_0__.Storage.SetCurrentPage(String(page));\n        _index__WEBPACK_IMPORTED_MODULE_0__.Elements.Nav()[String(page)].classList.add(\"selected\");\n        this.LoadPage(String(page),data);\n    }\n}\n\n//# sourceURL=webpack://space-tourism-challange/./js/events.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Elements\": () => (/* binding */ Elements),\n/* harmony export */   \"Events\": () => (/* binding */ Events),\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./js/elements.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./js/events.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./js/storage.js\");\n\n\n\n\nconst Events = new _events__WEBPACK_IMPORTED_MODULE_1__.Event();\nconst Storage = new _storage__WEBPACK_IMPORTED_MODULE_2__.LC();\nconst Elements = new _elements__WEBPACK_IMPORTED_MODULE_0__.Element();\n\n\nEvents.SetNav();\n\nif(!Storage.GetCurrentPage()) {\n    Storage.SetCurrentPage(\"home\");\n    Storage.SetCurrentPlanet(0);\n}   \n\nStorage.LoadPage();\n\nif(!Storage.GetCurrentPlanet()) {\n    Storage.SetCurrentPlanet(0);\n} \n\nif(!Storage.GetCurrentCrewMem()) {\n    Storage.SetCurrentCrewMem(0);\n} \n\n\n//# sourceURL=webpack://space-tourism-challange/./js/index.js?");

/***/ }),

/***/ "./js/storage.js":
/*!***********************!*\
  !*** ./js/storage.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LC\": () => (/* binding */ LC)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./js/index.js\");\n\n\nclass LC {\n    constructor() {}\n\n    //Page save\n    GetCurrentPage() {\n        return localStorage.getItem(\"page\");\n    }\n\n    SetCurrentPage(page) {\n        localStorage.setItem(\"page\", page);\n    }\n\n    //Planet save\n    GetCurrentPlanet() {\n        return localStorage.getItem(\"i\");\n    }\n\n    SetCurrentPlanet(id) {\n        localStorage.setItem(\"i\", id);\n    }\n\n    //Crew save\n    GetCurrentCrewMem() {\n        return localStorage.getItem(\"x\");\n    }\n\n    SetCurrentCrewMem(id) {\n        localStorage.setItem(\"x\", id);\n    }\n\n    async LoadPage() {\n        await this.GetDataFromJSON();        \n    }\n\n\n    GetDataFromJSON() {\n        FetchData()\n            .then(results => {\n                _index__WEBPACK_IMPORTED_MODULE_0__.Events.SwitchPage(localStorage.getItem(\"page\"),results);\n            }).catch(err => {\n                console.log(err);\n            })\n\n        async function FetchData() {\n            const fetched = await fetch(\"../dist/data.json\");\n            const jsonData = await fetched.json();\n            return {\n                destinations: jsonData.destinations,\n                crew: jsonData.crew,\n                technologies: jsonData.technology,\n            };\n        }\n\n    }\n}\n\n//# sourceURL=webpack://space-tourism-challange/./js/storage.js?");

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