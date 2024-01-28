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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_autoslide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/autoslide */ \"./src/modules/autoslide.js\");\n/* harmony import */ var _modules_fixedheader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fixedheader */ \"./src/modules/fixedheader.js\");\n/* harmony import */ var _modules_smothscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smothscroll */ \"./src/modules/smothscroll.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_smothscroll__WEBPACK_IMPORTED_MODULE_2__.smoothScroll)()\r\n;(0,_modules_fixedheader__WEBPACK_IMPORTED_MODULE_1__.fixHeader)()\r\n;(0,_modules_autoslide__WEBPACK_IMPORTED_MODULE_0__.autoSlider)(5000, \".offers_slide_item\", \".slide_active\")\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ }),

/***/ "./src/modules/autoslide.js":
/*!**********************************!*\
  !*** ./src/modules/autoslide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autoSlider: () => (/* binding */ autoSlider)\n/* harmony export */ });\nconst autoSlider = (time, item, activeItem) => {\r\n    const slides = document.querySelectorAll(item)\r\n    const parentDots = document.querySelector('.dots')\r\n    const wrapperBg = document.querySelector('.offers_block')\r\n    \r\n    let interval\r\n    let count = 0\r\n\r\n    const addDots = () => {\r\n       for(let i = 0; i <= slides.length - 1; i++){\r\n            const dotitem = document.createElement('span')\r\n            parentDots.appendChild(dotitem)\r\n       }\r\n\r\n       const arrDots = parentDots.querySelectorAll('span')\r\n\r\n       arrDots.forEach((dot, index) => {\r\n            if(index === 0) {\r\n                dot.classList.add('dot', 'dotActive')\r\n            } else{\r\n                dot.classList.add('dot')\r\n            }\r\n       })\r\n    }\r\n    const changeDots = (index) => {\r\n        const activeDot = parentDots.querySelector('.dotActive')\r\n        const allDots = parentDots.querySelectorAll('.dot')\r\n\r\n        activeDot.classList.remove('dotActive')\r\n        allDots[index].classList.add('dotActive')\r\n    }\r\n\r\n    const changeSlide = () => {\r\n        const activeSlide = document.querySelector(activeItem)\r\n\r\n        count++\r\n\r\n        if(count >= slides.length){\r\n            count = 0\r\n        }\r\n\r\n        activeSlide.classList.remove('slide_active')\r\n        slides[count].classList.add('slide_active')\r\n        wrapperBg.style.cssText = `\r\n                background: url(${slides[count].dataset['background_slide']}) no-repeat center fixed;\r\n                background-size: cover;\r\n                        `;\r\n        changeDots(count)\r\n\r\n        console.log(count);\r\n    }\r\n\r\n    const startSlider = () => {\r\n       if(document.querySelector(item) !== null){\r\n            interval = setInterval(changeSlide, time)\r\n       } else{\r\n            return\r\n       }\r\n    }\r\n\r\n\r\n    addDots()\r\n    startSlider()\r\n}\n\n//# sourceURL=webpack://project/./src/modules/autoslide.js?");

/***/ }),

/***/ "./src/modules/fixedheader.js":
/*!************************************!*\
  !*** ./src/modules/fixedheader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fixHeader: () => (/* binding */ fixHeader)\n/* harmony export */ });\nconst fixHeader = () => {\r\n    const header = document.querySelector('.wrapper_cont_header')\r\n\r\n    const changePosition = () => {\r\n        const scrollY = window.scrollY\r\n\r\n        if(scrollY > header.clientHeight){\r\n            header.classList.add('sticky')\r\n        } else if(scrollY < header.clientHeight){\r\n            header.classList.remove('sticky')\r\n        }\r\n    }\r\n\r\n    document.addEventListener('scroll', changePosition)\r\n}\n\n//# sourceURL=webpack://project/./src/modules/fixedheader.js?");

/***/ }),

/***/ "./src/modules/smothscroll.js":
/*!************************************!*\
  !*** ./src/modules/smothscroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    const navMenu = document.querySelector('.nav_menu')\r\n\r\n    const scrollToBlock = (id) => {\r\n\r\n        const idBlock = id.slice(1)\r\n        document.getElementById(idBlock).scrollIntoView({\r\n            behavior: \"smooth\",\r\n            block: \"center\",\r\n        })\r\n    }\r\n\r\n    navMenu.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if(e.target.nodeName === 'A'){\r\n            scrollToBlock(e.target.hash)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://project/./src/modules/smothscroll.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;