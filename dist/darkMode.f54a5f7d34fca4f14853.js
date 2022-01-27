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
/*!****************************!*\
  !*** ./src/js/darkMode.js ***!
  \****************************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFya01vZGUuZjU0YTVmN2QzNGZjYTRmMTQ4NTMuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2RhcmtNb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgdGhlbWVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrbW9kZSA9IHRoZW1lU3RvcmFnZSgpO1xyXG4gICAgaWYgKGRhcmttb2RlLmdldFRoZW1lKCkgPT0gJ2VuYWJsZWQnKSB7XHJcbiAgICAgICAgZW5hYmxlRGFya01vZGUoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHRoZW1lU3RvcmFnZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgdmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0VGhlbWUsXHJcbiAgICAgICAgZ2V0VGhlbWUsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgdGhlbWVFdmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhcmttb2RlID0gdGhlbWVTdG9yYWdlKCk7XHJcblxyXG4gICAgZGFya21vZGUuZ2V0VGhlbWUoKSAhPT0gJ2VuYWJsZWQnXHJcbiAgICAgICAgPyBlbmFibGVEYXJrTW9kZSgpXHJcbiAgICAgICAgOiBkaXNhYmxlRGFya01vZGUoKTtcclxufTtcclxuXHJcbmNvbnN0IGVuYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmJvZHknKVxyXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKCdkYXJrLWJvZHknKTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1idXR0b24nKVxyXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKCdidXR0b25fX2RhcmsnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1pY29uJykuc3JjID1cclxuICAgICAgICAnLi4vc3JjL2ltZy9zdW4uc3ZnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItYXJyb3cnKS5zcmMgPVxyXG4gICAgICAgICcuLi9zcmMvaW1nL2Fycm93LXdoaXRlLnN2Zyc7XHJcblxyXG4gICAgY29uc3QgbGlnaHRNb2RlID0gdGhlbWVTdG9yYWdlKCdlbmFibGVkJyk7XHJcbiAgICBsaWdodE1vZGUuc2V0VGhlbWUoKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc2FibGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5ib2R5JylcclxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1ib2R5Jyk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtYnV0dG9uJylcclxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX19kYXJrJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtaWNvbicpLnNyYyA9XHJcbiAgICAgICAgJy4uL3NyYy9pbWcvbW9vbi5zdmcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1hcnJvdycpLnNyYyA9XHJcbiAgICAgICAgJy4uL3NyYy9pbWcvYXJyb3cuc3ZnJztcclxuXHJcbiAgICBjb25zdCBkYXJrTW9kZSA9IHRoZW1lU3RvcmFnZShudWxsKTtcclxuICAgIGRhcmtNb2RlLnNldFRoZW1lKCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyB0aGVtZVRvZ2dsZSwgdGhlbWVFdmVudCB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=