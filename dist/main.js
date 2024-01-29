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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_autoslide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/autoslide */ \"./src/modules/autoslide.js\");\n/* harmony import */ var _modules_fixedheader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fixedheader */ \"./src/modules/fixedheader.js\");\n/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gallery */ \"./src/modules/gallery.js\");\n/* harmony import */ var _modules_offersbtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/offersbtn */ \"./src/modules/offersbtn.js\");\n/* harmony import */ var _modules_smothscroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/smothscroll */ \"./src/modules/smothscroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_smothscroll__WEBPACK_IMPORTED_MODULE_4__.smoothScroll)()\r\n;(0,_modules_fixedheader__WEBPACK_IMPORTED_MODULE_1__.fixHeader)()\r\n;(0,_modules_autoslide__WEBPACK_IMPORTED_MODULE_0__.autoSlider)(5000, \".offers_slide_item\", \".slide_active\")\r\n;(0,_modules_offersbtn__WEBPACK_IMPORTED_MODULE_3__.offersBtns)()\r\n;(0,_modules_gallery__WEBPACK_IMPORTED_MODULE_2__.galleryFunc)()\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ }),

/***/ "./src/modules/autoslide.js":
/*!**********************************!*\
  !*** ./src/modules/autoslide.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   autoSlider: () => (/* binding */ autoSlider)\n/* harmony export */ });\nconst autoSlider = (time, item, activeItem) => {\r\n    const slides = document.querySelectorAll(item)\r\n    const parentDots = document.querySelector('.dots')\r\n    const wrapperBg = document.querySelector('.offers_block')\r\n    \r\n    let interval\r\n    let count = 0\r\n\r\n    const addDots = () => {\r\n       for(let i = 0; i <= slides.length - 1; i++){\r\n            const dotitem = document.createElement('span')\r\n            parentDots.appendChild(dotitem)\r\n       }\r\n\r\n       const arrDots = parentDots.querySelectorAll('span')\r\n\r\n       arrDots.forEach((dot, index) => {\r\n            if(index === 0) {\r\n                dot.classList.add('dot', 'dotActive')\r\n            } else{\r\n                dot.classList.add('dot')\r\n            }\r\n       })\r\n    }\r\n    const changeDots = (index) => {\r\n        const activeDot = parentDots.querySelector('.dotActive')\r\n        const allDots = parentDots.querySelectorAll('.dot')\r\n\r\n        activeDot.classList.remove('dotActive')\r\n        allDots[index].classList.add('dotActive')\r\n    }\r\n\r\n    const changeSlide = () => {\r\n        const activeSlide = document.querySelector(activeItem)\r\n\r\n        count++\r\n\r\n        if(count >= slides.length){\r\n            count = 0\r\n        }\r\n\r\n        activeSlide.classList.remove('slide_active')\r\n        slides[count].classList.add('slide_active')\r\n        wrapperBg.style.cssText = `\r\n                background: url(${slides[count].dataset['background_slide']}) no-repeat center fixed;\r\n                background-size: cover;\r\n                        `;\r\n        changeDots(count)\r\n    }\r\n\r\n    const startSlider = () => {\r\n       if(document.querySelector(item) !== null){\r\n            interval = setInterval(changeSlide, time)\r\n       } else{\r\n            return\r\n       }\r\n    }\r\n\r\n    addDots()\r\n    startSlider()\r\n}\n\n//# sourceURL=webpack://project/./src/modules/autoslide.js?");

/***/ }),

/***/ "./src/modules/fixedheader.js":
/*!************************************!*\
  !*** ./src/modules/fixedheader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fixHeader: () => (/* binding */ fixHeader)\n/* harmony export */ });\nconst fixHeader = () => {\r\n    const header = document.querySelector('.wrapper_cont_header')\r\n\r\n    const changePosition = () => {\r\n        const scrollY = window.scrollY\r\n\r\n        if(scrollY > header.clientHeight){\r\n            header.classList.add('sticky')\r\n        } else if(scrollY < header.clientHeight){\r\n            header.classList.remove('sticky')\r\n        }\r\n    }\r\n\r\n    document.addEventListener('scroll', changePosition)\r\n}\n\n//# sourceURL=webpack://project/./src/modules/fixedheader.js?");

/***/ }),

/***/ "./src/modules/gallery.js":
/*!********************************!*\
  !*** ./src/modules/gallery.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   galleryFunc: () => (/* binding */ galleryFunc)\n/* harmony export */ });\n/* harmony import */ var _hellpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hellpers */ \"./src/modules/hellpers.js\");\n\r\n\r\nconst galleryFunc = () => {\r\n    const blockGallery = document.querySelector(\".wrapper_cont_gall\");\r\n    const galleryWindow = document.querySelector('.modal_window_gallery')\r\n\r\n    let stateAnimate = false;\r\n\r\n    const rotateFunc = (elem) => {\r\n        const rotateBlock = elem.querySelector(\".rotate_block\");\r\n        const loopIcon = rotateBlock.querySelector(\".loop_icon\");\r\n\r\n        if (stateAnimate) {\r\n            (0,_hellpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    rotateBlock.style.opacity = `${progress}`;\r\n                    loopIcon.style.transform = `rotate(${progress * 223}deg)`;\r\n                },\r\n            });\r\n        } else {\r\n            (0,_hellpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    rotateBlock.style.opacity = `${1 - progress}`;\r\n                    loopIcon.style.transform = `rotate(${\r\n                        223 - progress * 223\r\n                    }deg)`;\r\n                },\r\n            });\r\n        }\r\n    };\r\n\r\n    const openedGallery = (pathImg) => {\r\n        const gallImg = galleryWindow.querySelector('.gallery_open_img')\r\n\r\n        galleryWindow.style.display = 'flex'\r\n        gallImg.src = pathImg\r\n    }\r\n\r\n    const galleryClose = (e) => {\r\n        e.preventDefault()\r\n        \r\n        if(e.target.className === 'close_modal_gall' || e.target === galleryWindow){\r\n            galleryWindow.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    blockGallery.addEventListener(\r\n        \"mouseover\",\r\n        (e) => {\r\n            if (e.target.matches(\".img_gall\")) {\r\n                stateAnimate = true;\r\n                rotateFunc(e.target);\r\n            }\r\n        },\r\n        true\r\n    );\r\n\r\n    blockGallery.addEventListener(\r\n        \"mouseleave\",\r\n        (e) => {\r\n            if (e.target.matches(\".img_gall\")) {\r\n                stateAnimate = false;\r\n                rotateFunc(e.target);\r\n            }\r\n        },\r\n        true\r\n    );\r\n\r\n    blockGallery.addEventListener('click', (e) => {\r\n        if(e.target.closest('.img_gall')){\r\n            openedGallery(e.target.closest('.img_gall').dataset[\"img_gall\"])\r\n        }\r\n    })\r\n\r\n    galleryWindow.addEventListener('click', galleryClose)\r\n};\r\n\n\n//# sourceURL=webpack://project/./src/modules/gallery.js?");

/***/ }),

/***/ "./src/modules/hellpers.js":
/*!*********************************!*\
  !*** ./src/modules/hellpers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate =({timing, draw, duration}) => {\r\n\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n  \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n  \r\n      draw(progress); // отрисовать её\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n  \r\n    });\r\n  }\r\n  \r\n  \n\n//# sourceURL=webpack://project/./src/modules/hellpers.js?");

/***/ }),

/***/ "./src/modules/offersbtn.js":
/*!**********************************!*\
  !*** ./src/modules/offersbtn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   offersBtns: () => (/* binding */ offersBtns)\n/* harmony export */ });\nconst offersBtns = () => {\r\n    const btns = document.querySelectorAll('.block_btns_offers')\r\n\r\n    const scrollBlock = (id) => {\r\n        document.getElementById(id.slice(1)).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'center',\r\n        })\r\n    }\r\n\r\n    btns.forEach((elem) => {\r\n        elem.addEventListener('click', (e) => {\r\n\r\n        e.preventDefault()\r\n\r\n        if(e.target.localName === 'a'){\r\n            scrollBlock(e.target.hash)\r\n        }\r\n    })\r\n    })\r\n}\n\n//# sourceURL=webpack://project/./src/modules/offersbtn.js?");

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