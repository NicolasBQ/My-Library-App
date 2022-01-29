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
//  Check the current theme in the localStorage
const themeToggle = () => {
    const darkmode = themeStorage();
    if (darkmode.getTheme() == 'enabled') {
        enableDarkMode();
    }
};

// Getter - Setter of the localStorage
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

// The controller function when the user change the theme - If the dark theme is not enabled , it will activate it
const themeEvent = () => {
    const darkmode = themeStorage();

    darkmode.getTheme() !== 'enabled' ? enableDarkMode() : disableDarkMode();
};

// Enable the dark mode(Uses the itemsArray function for simplicity)
const enableDarkMode = () => {
    const items = itemsArray();
    const inputs = document.querySelectorAll('.form-container__input');

    items.defaultArray.forEach((item) => {
        item.classList.add('darkDefault');
    });

    Array.from(inputs).forEach((input) => {
        input.classList.add('form-container__input-dark');
    });

    items.iconsArray.forEach((icon) => {
        icon.element.src = icon.darkSrc;
    });

    // Change the value of the local Storage
    const lightMode = themeStorage('enabled');
    lightMode.setTheme();
};

// Diable the dark mode(Uses the itemsArray function for simplicity)
const disableDarkMode = () => {
    const items = itemsArray();
    const inputs = document.querySelectorAll('.form-container__input');

    items.defaultArray.forEach((item) => {
        item.classList.remove('darkDefault');
    });

    Array.from(inputs).forEach((input) => {
        input.classList.remove('form-container__input-dark');
    });

    items.iconsArray.forEach((icon) => {
        icon.element.src = icon.lightSrc;
    });

    // Change the value of the local Storage
    const darkMode = themeStorage(null);
    darkMode.setTheme();
};

// Store the DOM elements that change their styles.
const itemsArray = () => {
    const defaultArray = [
        getElement('.body'),
        getElement('.theme-button'),
        getElement('.form-container'),
        getElement('.form-container__close-btn'),
    ];

    const iconsArray = [
        {
            element: getElement('.theme-icon'),
            darkSrc: '../src/img/sun.svg',
            lightSrc: '../src/img/moon.svg',
        },
        {
            element: getElement('.filter-arrow'),
            darkSrc: '../src/img/arrow-white.svg',
            lightSrc: '../src/img/arrow.svg',
        },
    ];

    return { defaultArray, iconsArray };
};

const getElement = (element) => {
    return document.querySelector(element);
};




/***/ }),

/***/ "./src/js/formEvents.js":
/*!******************************!*\
  !*** ./src/js/formEvents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "formValidate": () => (/* binding */ formValidate)
/* harmony export */ });
const openForm = () => {
    const backgroundOpacity = document.querySelector('.background-form');
    const formContainer = document.querySelector('.form-container');
    const closeBtn = document.querySelector('.form-container__close-btn');
    const bookName = document.querySelector('.input-name');
    const bookAuthor = document.querySelector('.input-author');

    backgroundOpacity.classList.add('background-form__active');
    formContainer.classList.add('form-container__active');

    backgroundOpacity.addEventListener('click', () => {
        backgroundOpacity.classList.remove('background-form__active');
        formContainer.classList.remove('form-container__active');
        bookName.classList.remove('input-error');
        bookAuthor.classList.remove('input-error');
    });

    closeBtn.addEventListener('click', () => {
        backgroundOpacity.classList.remove('background-form__active');
        formContainer.classList.remove('form-container__active');
        bookName.classList.remove('input-error');
        bookAuthor.classList.remove('input-error');
    });
};

const formValidate = (e) => {
    e.preventDefault();

    const bookName = document.querySelector('.input-name');
    const bookAuthor = document.querySelector('.input-author');

    if (!bookName.checkValidity()) {
        inputError(bookName);
    }

    if (!bookAuthor.checkValidity()) {
        inputError(bookAuthor);
        return;
    }

    console.log('poo');
};

const inputError = (element) => {
    if (element.nextElementSibling.dataset.error) return;

    const message = document.createElement('span');
    message.innerText = 'This field cannot be empty';
    message.classList.add('error-message');
    message.dataset.error = 'invalidInput';

    element.parentNode.insertBefore(message, element.nextElementSibling);

    element.classList.add('input-error');

    setTimeout(() => {
        message.classList.add('error-message-hide');
    }, 1000);

    setTimeout(() => {
        message.remove();
    }, 2000);
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
/* harmony import */ var _formEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formEvents */ "./src/js/formEvents.js");




const appInit = () => {
    (0,_darkMode__WEBPACK_IMPORTED_MODULE_1__.themeToggle)();
    const themeBtn = document.querySelector('.theme-button');
    const mainBtn = document.querySelector('.main__button');
    const form = document.querySelector('.form');

    themeBtn.addEventListener('click', _darkMode__WEBPACK_IMPORTED_MODULE_1__.themeEvent);
    mainBtn.addEventListener('click', _formEvents__WEBPACK_IMPORTED_MODULE_2__.openForm);
    form.addEventListener('submit', _formEvents__WEBPACK_IMPORTED_MODULE_2__.formValidate);
};

document.addEventListener('DOMContentLoaded', appInit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTNjOTgyM2U3ZGY1YjM5MTcxNjAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDa0M7Ozs7Ozs7VUNoRWxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUMwQjtBQUNDO0FBQ3REO0FBQ0E7QUFDQSxJQUFJLHNEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaURBQVU7QUFDakQsc0NBQXNDLGlEQUFRO0FBQzlDLG9DQUFvQyxxREFBWTtBQUNoRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvZGFya01vZGUuanMiLCJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9qcy9mb3JtRXZlbnRzLmpzIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vICBDaGVjayB0aGUgY3VycmVudCB0aGVtZSBpbiB0aGUgbG9jYWxTdG9yYWdlXHJcbmNvbnN0IHRoZW1lVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGFya21vZGUgPSB0aGVtZVN0b3JhZ2UoKTtcclxuICAgIGlmIChkYXJrbW9kZS5nZXRUaGVtZSgpID09ICdlbmFibGVkJykge1xyXG4gICAgICAgIGVuYWJsZURhcmtNb2RlKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBHZXR0ZXIgLSBTZXR0ZXIgb2YgdGhlIGxvY2FsU3RvcmFnZVxyXG5jb25zdCB0aGVtZVN0b3JhZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNldFRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsIHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFRoZW1lLFxyXG4gICAgICAgIGdldFRoZW1lLFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vIFRoZSBjb250cm9sbGVyIGZ1bmN0aW9uIHdoZW4gdGhlIHVzZXIgY2hhbmdlIHRoZSB0aGVtZSAtIElmIHRoZSBkYXJrIHRoZW1lIGlzIG5vdCBlbmFibGVkICwgaXQgd2lsbCBhY3RpdmF0ZSBpdFxyXG5jb25zdCB0aGVtZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGFya21vZGUgPSB0aGVtZVN0b3JhZ2UoKTtcclxuXHJcbiAgICBkYXJrbW9kZS5nZXRUaGVtZSgpICE9PSAnZW5hYmxlZCcgPyBlbmFibGVEYXJrTW9kZSgpIDogZGlzYWJsZURhcmtNb2RlKCk7XHJcbn07XHJcblxyXG4vLyBFbmFibGUgdGhlIGRhcmsgbW9kZShVc2VzIHRoZSBpdGVtc0FycmF5IGZ1bmN0aW9uIGZvciBzaW1wbGljaXR5KVxyXG5jb25zdCBlbmFibGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gaXRlbXNBcnJheSgpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udGFpbmVyX19pbnB1dCcpO1xyXG5cclxuICAgIGl0ZW1zLmRlZmF1bHRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkYXJrRGVmYXVsdCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgQXJyYXkuZnJvbShpbnB1dHMpLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXJfX2lucHV0LWRhcmsnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0ZW1zLmljb25zQXJyYXkuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgICAgIGljb24uZWxlbWVudC5zcmMgPSBpY29uLmRhcmtTcmM7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZhbHVlIG9mIHRoZSBsb2NhbCBTdG9yYWdlXHJcbiAgICBjb25zdCBsaWdodE1vZGUgPSB0aGVtZVN0b3JhZ2UoJ2VuYWJsZWQnKTtcclxuICAgIGxpZ2h0TW9kZS5zZXRUaGVtZSgpO1xyXG59O1xyXG5cclxuLy8gRGlhYmxlIHRoZSBkYXJrIG1vZGUoVXNlcyB0aGUgaXRlbXNBcnJheSBmdW5jdGlvbiBmb3Igc2ltcGxpY2l0eSlcclxuY29uc3QgZGlzYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBpdGVtc0FycmF5KCk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250YWluZXJfX2lucHV0Jyk7XHJcblxyXG4gICAgaXRlbXMuZGVmYXVsdEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmtEZWZhdWx0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGlucHV0cykuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRhaW5lcl9faW5wdXQtZGFyaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXRlbXMuaWNvbnNBcnJheS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgaWNvbi5lbGVtZW50LnNyYyA9IGljb24ubGlnaHRTcmM7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZhbHVlIG9mIHRoZSBsb2NhbCBTdG9yYWdlXHJcbiAgICBjb25zdCBkYXJrTW9kZSA9IHRoZW1lU3RvcmFnZShudWxsKTtcclxuICAgIGRhcmtNb2RlLnNldFRoZW1lKCk7XHJcbn07XHJcblxyXG4vLyBTdG9yZSB0aGUgRE9NIGVsZW1lbnRzIHRoYXQgY2hhbmdlIHRoZWlyIHN0eWxlcy5cclxuY29uc3QgaXRlbXNBcnJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRBcnJheSA9IFtcclxuICAgICAgICBnZXRFbGVtZW50KCcuYm9keScpLFxyXG4gICAgICAgIGdldEVsZW1lbnQoJy50aGVtZS1idXR0b24nKSxcclxuICAgICAgICBnZXRFbGVtZW50KCcuZm9ybS1jb250YWluZXInKSxcclxuICAgICAgICBnZXRFbGVtZW50KCcuZm9ybS1jb250YWluZXJfX2Nsb3NlLWJ0bicpLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBpY29uc0FycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZWxlbWVudDogZ2V0RWxlbWVudCgnLnRoZW1lLWljb24nKSxcclxuICAgICAgICAgICAgZGFya1NyYzogJy4uL3NyYy9pbWcvc3VuLnN2ZycsXHJcbiAgICAgICAgICAgIGxpZ2h0U3JjOiAnLi4vc3JjL2ltZy9tb29uLnN2ZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGdldEVsZW1lbnQoJy5maWx0ZXItYXJyb3cnKSxcclxuICAgICAgICAgICAgZGFya1NyYzogJy4uL3NyYy9pbWcvYXJyb3ctd2hpdGUuc3ZnJyxcclxuICAgICAgICAgICAgbGlnaHRTcmM6ICcuLi9zcmMvaW1nL2Fycm93LnN2ZycsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHsgZGVmYXVsdEFycmF5LCBpY29uc0FycmF5IH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdGhlbWVUb2dnbGUsIHRoZW1lRXZlbnQgfTtcclxuIiwiY29uc3Qgb3BlbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kT3BhY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLWZvcm0nKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyX19jbG9zZS1idG4nKTtcclxuICAgIGNvbnN0IGJvb2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LW5hbWUnKTtcclxuICAgIGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtYXV0aG9yJyk7XHJcblxyXG4gICAgYmFja2dyb3VuZE9wYWNpdHkuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1mb3JtX19hY3RpdmUnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXJfX2FjdGl2ZScpO1xyXG5cclxuICAgIGJhY2tncm91bmRPcGFjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJhY2tncm91bmRPcGFjaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tncm91bmQtZm9ybV9fYWN0aXZlJyk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRhaW5lcl9fYWN0aXZlJyk7XHJcbiAgICAgICAgYm9va05hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZXJyb3InKTtcclxuICAgICAgICBib29rQXV0aG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBiYWNrZ3JvdW5kT3BhY2l0eS5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZ3JvdW5kLWZvcm1fX2FjdGl2ZScpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250YWluZXJfX2FjdGl2ZScpO1xyXG4gICAgICAgIGJvb2tOYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgYm9va0F1dGhvci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGJvb2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LW5hbWUnKTtcclxuICAgIGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtYXV0aG9yJyk7XHJcblxyXG4gICAgaWYgKCFib29rTmFtZS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICBpbnB1dEVycm9yKGJvb2tOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tBdXRob3IuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgaW5wdXRFcnJvcihib29rQXV0aG9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3BvbycpO1xyXG59O1xyXG5cclxuY29uc3QgaW5wdXRFcnJvciA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZGF0YXNldC5lcnJvcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtZXNzYWdlLmlubmVyVGV4dCA9ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eSc7XHJcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcclxuICAgIG1lc3NhZ2UuZGF0YXNldC5lcnJvciA9ICdpbnZhbGlkSW5wdXQnO1xyXG5cclxuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWVzc2FnZSwgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZXJyb3InKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UtaGlkZScpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5yZW1vdmUoKTtcclxuICAgIH0sIDIwMDApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgb3BlbkZvcm0sIGZvcm1WYWxpZGF0ZSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgeyB0aGVtZVRvZ2dsZSwgdGhlbWVFdmVudCB9IGZyb20gJy4vZGFya01vZGUnO1xyXG5pbXBvcnQgeyBvcGVuRm9ybSwgZm9ybVZhbGlkYXRlIH0gZnJvbSAnLi9mb3JtRXZlbnRzJztcclxuXHJcbmNvbnN0IGFwcEluaXQgPSAoKSA9PiB7XHJcbiAgICB0aGVtZVRvZ2dsZSgpO1xyXG4gICAgY29uc3QgdGhlbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBtYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2J1dHRvbicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcblxyXG4gICAgdGhlbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGVtZUV2ZW50KTtcclxuICAgIG1haW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybSk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1WYWxpZGF0ZSk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXBwSW5pdCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==