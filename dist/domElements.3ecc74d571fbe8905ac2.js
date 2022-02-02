/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*******************************!*\
  !*** ./src/js/domElements.js ***!
  \*******************************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tRWxlbWVudHMuM2VjYzc0ZDU3MWZiZTg5MDVhYzIuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1QiIsInNvdXJjZXMiOlsid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2RvbUVsZW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU3RvcmUgYWxsIHRoZSBET00gZWxlbWVudHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgdXNlZC5cclxuY29uc3QgZG9tRWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1idXR0b24nKTtcclxuICAgIGNvbnN0IG1vb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbicpO1xyXG4gICAgY29uc3Qgc3VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bicpO1xyXG4gICAgY29uc3QgbWFpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19idXR0b24nKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udGFpbmVyX19pbnB1dCcpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXJfX2Nsb3NlLWJ0bicpO1xyXG4gICAgY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLWljb24nKTtcclxuICAgIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItYXJyb3cnKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtZm9ybScpO1xyXG4gICAgY29uc3QgYm9va05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtbmFtZScpO1xyXG4gICAgY29uc3QgYm9va0F1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1hdXRob3InKTtcclxuICAgIGNvbnN0IGJvb2tTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGJvb2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tzLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYm9va0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tzLWNvbnRhaW5lcl9faXRlbScpO1xyXG4gICAgY29uc3QgYm9va0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rcy1jb250YWluZXJfX2RlbGV0ZScpO1xyXG4gICAgY29uc3Qgc3RhdHVzTGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va3MtY29udGFpbmVyIC5ib29rcy1jb250YWluZXJfX2NpcmNsZScpO1xyXG4gICAgY29uc3QgZmlsdGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1idXR0b24nKTtcclxuICAgIGNvbnN0IGZpbHRlck9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLW9wdGlvbnMnKTtcclxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWRlZmF1bHQnKTtcclxuICAgIGNvbnN0IHJlYWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLXJlYWQnKTtcclxuICAgIGNvbnN0IG5vdHJlYWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLW5vcmVhZCcpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGhlbWVCdG4sXHJcbiAgICAgICAgbW9vbixcclxuICAgICAgICBzdW4sXHJcbiAgICAgICAgbWFpbkJ0bixcclxuICAgICAgICBmb3JtLFxyXG4gICAgICAgIGlucHV0cyxcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIGZvcm1Db250YWluZXIsXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lckNsb3NlQnRuLFxyXG4gICAgICAgIHRoZW1lSWNvbixcclxuICAgICAgICBmaWx0ZXJCdG4sXHJcbiAgICAgICAgYmFja2dyb3VuZE9wYWNpdHksXHJcbiAgICAgICAgYm9va05hbWUsXHJcbiAgICAgICAgYm9va0F1dGhvcixcclxuICAgICAgICBib29rU3RhdHVzLFxyXG4gICAgICAgIGJvb2tzQ29udGFpbmVyLFxyXG4gICAgICAgIGJvb2tJdGVtcyxcclxuICAgICAgICBib29rRGVsZXRlLFxyXG4gICAgICAgIHN0YXR1c0xpZ2h0LFxyXG4gICAgICAgIGZpbHRlckJ1dHRvbixcclxuICAgICAgICBmaWx0ZXJPcHRpb25zLFxyXG4gICAgICAgIGRlZmF1bHRPcHRpb24sXHJcbiAgICAgICAgcmVhZE9wdGlvbixcclxuICAgICAgICBub3RyZWFkT3B0aW9uLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRvbUVsZW1lbnRzIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==