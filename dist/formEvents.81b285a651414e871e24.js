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
/*!******************************!*\
  !*** ./src/js/formEvents.js ***!
  \******************************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybUV2ZW50cy44MWIyODVhNjUxNDE0ZTg3MWUyNC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ2tDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvZm9ybUV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IG9wZW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZE9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1mb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcl9fY2xvc2UtYnRuJyk7XHJcbiAgICBjb25zdCBib29rTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1uYW1lJyk7XHJcbiAgICBjb25zdCBib29rQXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWF1dGhvcicpO1xyXG5cclxuICAgIGJhY2tncm91bmRPcGFjaXR5LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtZm9ybV9fYWN0aXZlJyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyX19hY3RpdmUnKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kT3BhY2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBiYWNrZ3JvdW5kT3BhY2l0eS5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZ3JvdW5kLWZvcm1fX2FjdGl2ZScpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250YWluZXJfX2FjdGl2ZScpO1xyXG4gICAgICAgIGJvb2tOYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XHJcbiAgICAgICAgYm9va0F1dGhvci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYmFja2dyb3VuZE9wYWNpdHkuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZC1mb3JtX19hY3RpdmUnKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFpbmVyX19hY3RpdmUnKTtcclxuICAgICAgICBib29rTmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xyXG4gICAgICAgIGJvb2tBdXRob3IuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZXJyb3InKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybVZhbGlkYXRlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBib29rTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1uYW1lJyk7XHJcbiAgICBjb25zdCBib29rQXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWF1dGhvcicpO1xyXG5cclxuICAgIGlmICghYm9va05hbWUuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgaW5wdXRFcnJvcihib29rTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29rQXV0aG9yLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIGlucHV0RXJyb3IoYm9va0F1dGhvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdwb28nKTtcclxufTtcclxuXHJcbmNvbnN0IGlucHV0RXJyb3IgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmRhdGFzZXQuZXJyb3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHknO1xyXG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XHJcbiAgICBtZXNzYWdlLmRhdGFzZXQuZXJyb3IgPSAnaW52YWxpZElucHV0JztcclxuXHJcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1lc3NhZ2UsIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlLWhpZGUnKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UucmVtb3ZlKCk7XHJcbiAgICB9LCAyMDAwKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IG9wZW5Gb3JtLCBmb3JtVmFsaWRhdGUgfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9