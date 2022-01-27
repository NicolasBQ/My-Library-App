/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/darkMode.js":
/*!****************************!*\
  !*** ./src/js/darkMode.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themeToggle": () => (/* binding */ themeToggle),
/* harmony export */   "themeEvent": () => (/* binding */ themeEvent)
/* harmony export */ });
const themeToggle = () => {
    const darkmode = themeStorage();
    if (darkmode.getTheme() == 'enabled') {
        enableDarkMode();
    }
};

const themeStorage = (value) => {
    const setTheme = () => {
        localStorage.setItem('darkMode', value);
    };

    const getTheme = () => {
        return localStorage.getItem('darkMode');
    };

    return {
        setTheme,
        getTheme,
    };
};

const themeEvent = () => {
    const darkmode = themeStorage();

    darkmode.getTheme() !== 'enabled'
        ? enableDarkMode()
        : disableDarkMode();
};

const enableDarkMode = () => {
    document
        .querySelector('.body')
        .classList.add('dark-body');
    document
        .querySelector('.theme-button')
        .classList.add('button__dark');
    document.querySelector('.theme-icon').src =
        '../src/img/sun.svg';
    document.querySelector('.filter-arrow').src =
        '../src/img/arrow-white.svg';

    const lightMode = themeStorage('enabled');
    lightMode.setTheme();
};

const disableDarkMode = () => {
    document
        .querySelector('.body')
        .classList.remove('dark-body');
    document
        .querySelector('.theme-button')
        .classList.remove('button__dark');
    document.querySelector('.theme-icon').src =
        '../src/img/moon.svg';
    document.querySelector('.filter-arrow').src =
        '../src/img/arrow.svg';

    const darkMode = themeStorage(null);
    darkMode.setTheme();
};




/***/ }),

/***/ "./src/js/newBook.js":
/*!***************************!*\
  !*** ./src/js/newBook.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openForm": () => (/* binding */ openForm)
/* harmony export */ });
const openForm = () => {
    console.log('nue');
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./darkMode */ "./src/js/darkMode.js");
/* harmony import */ var _newBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newBook */ "./src/js/newBook.js");




const appInit = () => {
    (0,_darkMode__WEBPACK_IMPORTED_MODULE_1__.themeToggle)();
    const themeBtn = document.querySelector(
        '.theme-button'
    );
    const mainBtn = document.querySelector(
        '.main__button'
    );

    themeBtn.addEventListener(
        'click',
        _darkMode__WEBPACK_IMPORTED_MODULE_1__.themeEvent
    );

    mainBtn.addEventListener('click', _newBook__WEBPACK_IMPORTED_MODULE_2__.openForm);
};

document.addEventListener(
    'DOMContentLoaded',
    appInit
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTJjNTcxOWYyNGY3MDc1MTcxMzUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUM7Ozs7Ozs7Ozs7Ozs7OztBQzlEbkM7QUFDQTtBQUNBO0FBQ0E7QUFDb0I7Ozs7Ozs7VUNKcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjJCO0FBSVA7QUFDaUI7QUFDckM7QUFDQTtBQUNBLElBQUksc0RBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCO0FBQ0E7QUFDQSxzQ0FBc0MsOENBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2RhcmtNb2RlLmpzIiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvbmV3Qm9vay5qcyIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCB0aGVtZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhcmttb2RlID0gdGhlbWVTdG9yYWdlKCk7XHJcbiAgICBpZiAoZGFya21vZGUuZ2V0VGhlbWUoKSA9PSAnZW5hYmxlZCcpIHtcclxuICAgICAgICBlbmFibGVEYXJrTW9kZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdGhlbWVTdG9yYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZXRUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRUaGVtZSxcclxuICAgICAgICBnZXRUaGVtZSxcclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCB0aGVtZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGFya21vZGUgPSB0aGVtZVN0b3JhZ2UoKTtcclxuXHJcbiAgICBkYXJrbW9kZS5nZXRUaGVtZSgpICE9PSAnZW5hYmxlZCdcclxuICAgICAgICA/IGVuYWJsZURhcmtNb2RlKClcclxuICAgICAgICA6IGRpc2FibGVEYXJrTW9kZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZW5hYmxlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYm9keScpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2RhcmstYm9keScpO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLnRoZW1lLWJ1dHRvbicpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9fZGFyaycpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLWljb24nKS5zcmMgPVxyXG4gICAgICAgICcuLi9zcmMvaW1nL3N1bi5zdmcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1hcnJvdycpLnNyYyA9XHJcbiAgICAgICAgJy4uL3NyYy9pbWcvYXJyb3ctd2hpdGUuc3ZnJztcclxuXHJcbiAgICBjb25zdCBsaWdodE1vZGUgPSB0aGVtZVN0b3JhZ2UoJ2VuYWJsZWQnKTtcclxuICAgIGxpZ2h0TW9kZS5zZXRUaGVtZSgpO1xyXG59O1xyXG5cclxuY29uc3QgZGlzYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmJvZHknKVxyXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLWJvZHknKTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1idXR0b24nKVxyXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fX2RhcmsnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1pY29uJykuc3JjID1cclxuICAgICAgICAnLi4vc3JjL2ltZy9tb29uLnN2Zyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWFycm93Jykuc3JjID1cclxuICAgICAgICAnLi4vc3JjL2ltZy9hcnJvdy5zdmcnO1xyXG5cclxuICAgIGNvbnN0IGRhcmtNb2RlID0gdGhlbWVTdG9yYWdlKG51bGwpO1xyXG4gICAgZGFya01vZGUuc2V0VGhlbWUoKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRoZW1lVG9nZ2xlLCB0aGVtZUV2ZW50IH07XHJcbiIsImNvbnN0IG9wZW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ251ZScpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgb3BlbkZvcm0gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0IHtcclxuICAgIHRoZW1lVG9nZ2xlLFxyXG4gICAgdGhlbWVFdmVudCxcclxufSBmcm9tICcuL2RhcmtNb2RlJztcclxuaW1wb3J0IHsgb3BlbkZvcm0gfSBmcm9tICcuL25ld0Jvb2snO1xyXG5cclxuY29uc3QgYXBwSW5pdCA9ICgpID0+IHtcclxuICAgIHRoZW1lVG9nZ2xlKCk7XHJcbiAgICBjb25zdCB0aGVtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJy50aGVtZS1idXR0b24nXHJcbiAgICApO1xyXG4gICAgY29uc3QgbWFpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJy5tYWluX19idXR0b24nXHJcbiAgICApO1xyXG5cclxuICAgIHRoZW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICB0aGVtZUV2ZW50XHJcbiAgICApO1xyXG5cclxuICAgIG1haW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybSk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxyXG4gICAgYXBwSW5pdFxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=