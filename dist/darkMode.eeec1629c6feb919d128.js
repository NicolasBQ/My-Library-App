/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/domElements.js":
/*!*******************************!*\
  !*** ./src/js/domElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domElements": () => (/* binding */ domElements)
/* harmony export */ });
// Store all the DOM elements that are going to be used.
const domElements = () => {
    const themeBtn = document.querySelector('.theme-button');
    const moon = document.querySelector('.moon');
    const sun = document.querySelector('.sun');
    const mainBtn = document.querySelector('.main__button');
    const form = document.querySelector('.form');
    const inputs = document.querySelectorAll('.form-container__input');
    const body = document.querySelector('.body');
    const formContainer = document.querySelector('.form-container');
    const formContainerCloseBtn = document.querySelector('.form-container__close-btn');
    const themeIcon = document.querySelector('.theme-icon');
    const filterBtn = document.querySelector('.filter-arrow');
    const backgroundOpacity = document.querySelector('.background-form');
    const bookName = document.querySelector('.input-name');
    const bookAuthor = document.querySelector('.input-author');
    const bookStatus = document.querySelector('.input-checkbox');
    const booksContainer = document.querySelector('.books-container');
    const bookItems = document.querySelectorAll('.books-container__item');
    const bookDelete = document.querySelectorAll('.books-container__delete');
    const statusLight = document.querySelectorAll('.books-container .books-container__circle');
    const filterButton = document.querySelector('.filter-button');
    const filterOptions = document.querySelector('.filter-options');
    const defaultOption = document.querySelector('.option-default');
    const readOption = document.querySelector('.option-read');
    const notreadOption = document.querySelector('.option-noread');

    return {
        themeBtn,
        moon,
        sun,
        mainBtn,
        form,
        inputs,
        body,
        formContainer,
        formContainerCloseBtn,
        themeIcon,
        filterBtn,
        backgroundOpacity,
        bookName,
        bookAuthor,
        bookStatus,
        booksContainer,
        bookItems,
        bookDelete,
        statusLight,
        filterButton,
        filterOptions,
        defaultOption,
        readOption,
        notreadOption,
    };
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
/*!****************************!*\
  !*** ./src/js/darkMode.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "themeToggle": () => (/* binding */ themeToggle),
/* harmony export */   "themeEvent": () => (/* binding */ themeEvent)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");

//  Check the current theme in the localStorage
const themeToggle = () => {
    const darkmode = themeStorage();
    if (darkmode.getTheme() == 'enabled') {
        enableDarkMode();
        return 'dark-item'; // Return dark-item for the books items once they are created.
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

    items.defaultArray.forEach((item) => {
        item.classList.add('darkDefault');
    });

    Array.from((0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().inputs).forEach((input) => {
        input.classList.add('form-container__input-dark');
    });

    Array.from((0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookItems).forEach((book) => {
        book.classList.add('dark-item');
    });

    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().moon.style.display = 'none';
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().sun.style.display = 'block';
    // Change the value of the local Storage
    const lightMode = themeStorage('enabled');
    lightMode.setTheme();
};

// Diable the dark mode(Uses the itemsArray function for simplicity)
const disableDarkMode = () => {
    const items = itemsArray();

    items.defaultArray.forEach((item) => {
        item.classList.remove('darkDefault');
    });

    Array.from((0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().inputs).forEach((input) => {
        input.classList.remove('form-container__input-dark');
    });

    Array.from((0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookItems).forEach((book) => {
        book.classList.remove('dark-item');
    });

    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().moon.style.display = 'block';
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().sun.style.display = 'none';
    // Change the value of the local Storage
    const darkMode = themeStorage(null);
    darkMode.setTheme();
};

// Store the DOM elements that change their styles.
const itemsArray = () => {
    const defaultArray = [
        (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().body,
        (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().themeBtn,
        (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainer,
        (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainerCloseBtn,
    ];

    return { defaultArray };
};



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFya01vZGUuZWVlYzE2MjljNmZlYjkxOWQxMjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7OztVQ3ZEdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSx5REFBVztBQUNmLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSx5REFBVztBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLHlEQUFXO0FBQ2YsSUFBSSx5REFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFXO0FBQ25CLFFBQVEseURBQVc7QUFDbkIsUUFBUSx5REFBVztBQUNuQixRQUFRLHlEQUFXO0FBQ25CO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvZGFya01vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU3RvcmUgYWxsIHRoZSBET00gZWxlbWVudHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgdXNlZC5cclxuY29uc3QgZG9tRWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1idXR0b24nKTtcclxuICAgIGNvbnN0IG1vb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbicpO1xyXG4gICAgY29uc3Qgc3VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bicpO1xyXG4gICAgY29uc3QgbWFpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19idXR0b24nKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udGFpbmVyX19pbnB1dCcpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXJfX2Nsb3NlLWJ0bicpO1xyXG4gICAgY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLWljb24nKTtcclxuICAgIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItYXJyb3cnKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtZm9ybScpO1xyXG4gICAgY29uc3QgYm9va05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtbmFtZScpO1xyXG4gICAgY29uc3QgYm9va0F1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1hdXRob3InKTtcclxuICAgIGNvbnN0IGJvb2tTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGJvb2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tzLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYm9va0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tzLWNvbnRhaW5lcl9faXRlbScpO1xyXG4gICAgY29uc3QgYm9va0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rcy1jb250YWluZXJfX2RlbGV0ZScpO1xyXG4gICAgY29uc3Qgc3RhdHVzTGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va3MtY29udGFpbmVyIC5ib29rcy1jb250YWluZXJfX2NpcmNsZScpO1xyXG4gICAgY29uc3QgZmlsdGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1idXR0b24nKTtcclxuICAgIGNvbnN0IGZpbHRlck9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLW9wdGlvbnMnKTtcclxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWRlZmF1bHQnKTtcclxuICAgIGNvbnN0IHJlYWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLXJlYWQnKTtcclxuICAgIGNvbnN0IG5vdHJlYWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLW5vcmVhZCcpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGhlbWVCdG4sXHJcbiAgICAgICAgbW9vbixcclxuICAgICAgICBzdW4sXHJcbiAgICAgICAgbWFpbkJ0bixcclxuICAgICAgICBmb3JtLFxyXG4gICAgICAgIGlucHV0cyxcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIGZvcm1Db250YWluZXIsXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lckNsb3NlQnRuLFxyXG4gICAgICAgIHRoZW1lSWNvbixcclxuICAgICAgICBmaWx0ZXJCdG4sXHJcbiAgICAgICAgYmFja2dyb3VuZE9wYWNpdHksXHJcbiAgICAgICAgYm9va05hbWUsXHJcbiAgICAgICAgYm9va0F1dGhvcixcclxuICAgICAgICBib29rU3RhdHVzLFxyXG4gICAgICAgIGJvb2tzQ29udGFpbmVyLFxyXG4gICAgICAgIGJvb2tJdGVtcyxcclxuICAgICAgICBib29rRGVsZXRlLFxyXG4gICAgICAgIHN0YXR1c0xpZ2h0LFxyXG4gICAgICAgIGZpbHRlckJ1dHRvbixcclxuICAgICAgICBmaWx0ZXJPcHRpb25zLFxyXG4gICAgICAgIGRlZmF1bHRPcHRpb24sXHJcbiAgICAgICAgcmVhZE9wdGlvbixcclxuICAgICAgICBub3RyZWFkT3B0aW9uLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRvbUVsZW1lbnRzIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuLy8gIENoZWNrIHRoZSBjdXJyZW50IHRoZW1lIGluIHRoZSBsb2NhbFN0b3JhZ2VcclxuY29uc3QgdGhlbWVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrbW9kZSA9IHRoZW1lU3RvcmFnZSgpO1xyXG4gICAgaWYgKGRhcmttb2RlLmdldFRoZW1lKCkgPT0gJ2VuYWJsZWQnKSB7XHJcbiAgICAgICAgZW5hYmxlRGFya01vZGUoKTtcclxuICAgICAgICByZXR1cm4gJ2RhcmstaXRlbSc7IC8vIFJldHVybiBkYXJrLWl0ZW0gZm9yIHRoZSBib29rcyBpdGVtcyBvbmNlIHRoZXkgYXJlIGNyZWF0ZWQuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBHZXR0ZXIgLSBTZXR0ZXIgb2YgdGhlIGxvY2FsU3RvcmFnZVxyXG5jb25zdCB0aGVtZVN0b3JhZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNldFRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsIHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFRoZW1lLFxyXG4gICAgICAgIGdldFRoZW1lLFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vIFRoZSBjb250cm9sbGVyIGZ1bmN0aW9uIHdoZW4gdGhlIHVzZXIgY2hhbmdlIHRoZSB0aGVtZSAtIElmIHRoZSBkYXJrIHRoZW1lIGlzIG5vdCBlbmFibGVkICwgaXQgd2lsbCBhY3RpdmF0ZSBpdFxyXG5jb25zdCB0aGVtZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGFya21vZGUgPSB0aGVtZVN0b3JhZ2UoKTtcclxuICAgIGRhcmttb2RlLmdldFRoZW1lKCkgIT09ICdlbmFibGVkJyA/IGVuYWJsZURhcmtNb2RlKCkgOiBkaXNhYmxlRGFya01vZGUoKTtcclxufTtcclxuXHJcbi8vIEVuYWJsZSB0aGUgZGFyayBtb2RlKFVzZXMgdGhlIGl0ZW1zQXJyYXkgZnVuY3Rpb24gZm9yIHNpbXBsaWNpdHkpXHJcbmNvbnN0IGVuYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBpdGVtc0FycmF5KCk7XHJcblxyXG4gICAgaXRlbXMuZGVmYXVsdEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2RhcmtEZWZhdWx0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyX19pbnB1dC1kYXJrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuYm9va0l0ZW1zKS5mb3JFYWNoKChib29rKSA9PiB7XHJcbiAgICAgICAgYm9vay5jbGFzc0xpc3QuYWRkKCdkYXJrLWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbUVsZW1lbnRzKCkubW9vbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9tRWxlbWVudHMoKS5zdW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZhbHVlIG9mIHRoZSBsb2NhbCBTdG9yYWdlXHJcbiAgICBjb25zdCBsaWdodE1vZGUgPSB0aGVtZVN0b3JhZ2UoJ2VuYWJsZWQnKTtcclxuICAgIGxpZ2h0TW9kZS5zZXRUaGVtZSgpO1xyXG59O1xyXG5cclxuLy8gRGlhYmxlIHRoZSBkYXJrIG1vZGUoVXNlcyB0aGUgaXRlbXNBcnJheSBmdW5jdGlvbiBmb3Igc2ltcGxpY2l0eSlcclxuY29uc3QgZGlzYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBpdGVtc0FycmF5KCk7XHJcblxyXG4gICAgaXRlbXMuZGVmYXVsdEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmtEZWZhdWx0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFpbmVyX19pbnB1dC1kYXJrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuYm9va0l0ZW1zKS5mb3JFYWNoKChib29rKSA9PiB7XHJcbiAgICAgICAgYm9vay5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbUVsZW1lbnRzKCkubW9vbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGRvbUVsZW1lbnRzKCkuc3VuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZhbHVlIG9mIHRoZSBsb2NhbCBTdG9yYWdlXHJcbiAgICBjb25zdCBkYXJrTW9kZSA9IHRoZW1lU3RvcmFnZShudWxsKTtcclxuICAgIGRhcmtNb2RlLnNldFRoZW1lKCk7XHJcbn07XHJcblxyXG4vLyBTdG9yZSB0aGUgRE9NIGVsZW1lbnRzIHRoYXQgY2hhbmdlIHRoZWlyIHN0eWxlcy5cclxuY29uc3QgaXRlbXNBcnJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRBcnJheSA9IFtcclxuICAgICAgICBkb21FbGVtZW50cygpLmJvZHksXHJcbiAgICAgICAgZG9tRWxlbWVudHMoKS50aGVtZUJ0bixcclxuICAgICAgICBkb21FbGVtZW50cygpLmZvcm1Db250YWluZXIsXHJcbiAgICAgICAgZG9tRWxlbWVudHMoKS5mb3JtQ29udGFpbmVyQ2xvc2VCdG4sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiB7IGRlZmF1bHRBcnJheSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdGhlbWVUb2dnbGUsIHRoZW1lRXZlbnQgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9