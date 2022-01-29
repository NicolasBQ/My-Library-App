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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFya01vZGUuNTIzYzEzYmU2YzJjNmVhYjI0OTMuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2RhcmtNb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gIENoZWNrIHRoZSBjdXJyZW50IHRoZW1lIGluIHRoZSBsb2NhbFN0b3JhZ2VcclxuY29uc3QgdGhlbWVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrbW9kZSA9IHRoZW1lU3RvcmFnZSgpO1xyXG4gICAgaWYgKGRhcmttb2RlLmdldFRoZW1lKCkgPT0gJ2VuYWJsZWQnKSB7XHJcbiAgICAgICAgZW5hYmxlRGFya01vZGUoKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIEdldHRlciAtIFNldHRlciBvZiB0aGUgbG9jYWxTdG9yYWdlXHJcbmNvbnN0IHRoZW1lU3RvcmFnZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgdmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0VGhlbWUsXHJcbiAgICAgICAgZ2V0VGhlbWUsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy8gVGhlIGNvbnRyb2xsZXIgZnVuY3Rpb24gd2hlbiB0aGUgdXNlciBjaGFuZ2UgdGhlIHRoZW1lIC0gSWYgdGhlIGRhcmsgdGhlbWUgaXMgbm90IGVuYWJsZWQgLCBpdCB3aWxsIGFjdGl2YXRlIGl0XHJcbmNvbnN0IHRoZW1lRXZlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrbW9kZSA9IHRoZW1lU3RvcmFnZSgpO1xyXG5cclxuICAgIGRhcmttb2RlLmdldFRoZW1lKCkgIT09ICdlbmFibGVkJyA/IGVuYWJsZURhcmtNb2RlKCkgOiBkaXNhYmxlRGFya01vZGUoKTtcclxufTtcclxuXHJcbi8vIEVuYWJsZSB0aGUgZGFyayBtb2RlKFVzZXMgdGhlIGl0ZW1zQXJyYXkgZnVuY3Rpb24gZm9yIHNpbXBsaWNpdHkpXHJcbmNvbnN0IGVuYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBpdGVtc0FycmF5KCk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250YWluZXJfX2lucHV0Jyk7XHJcblxyXG4gICAgaXRlbXMuZGVmYXVsdEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2RhcmtEZWZhdWx0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGlucHV0cykuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcl9faW5wdXQtZGFyaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXRlbXMuaWNvbnNBcnJheS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgaWNvbi5lbGVtZW50LnNyYyA9IGljb24uZGFya1NyYztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoYW5nZSB0aGUgdmFsdWUgb2YgdGhlIGxvY2FsIFN0b3JhZ2VcclxuICAgIGNvbnN0IGxpZ2h0TW9kZSA9IHRoZW1lU3RvcmFnZSgnZW5hYmxlZCcpO1xyXG4gICAgbGlnaHRNb2RlLnNldFRoZW1lKCk7XHJcbn07XHJcblxyXG4vLyBEaWFibGUgdGhlIGRhcmsgbW9kZShVc2VzIHRoZSBpdGVtc0FycmF5IGZ1bmN0aW9uIGZvciBzaW1wbGljaXR5KVxyXG5jb25zdCBkaXNhYmxlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGl0ZW1zQXJyYXkoKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWNvbnRhaW5lcl9faW5wdXQnKTtcclxuXHJcbiAgICBpdGVtcy5kZWZhdWx0QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZGFya0RlZmF1bHQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEFycmF5LmZyb20oaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFpbmVyX19pbnB1dC1kYXJrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdGVtcy5pY29uc0FycmF5LmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgICBpY29uLmVsZW1lbnQuc3JjID0gaWNvbi5saWdodFNyYztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoYW5nZSB0aGUgdmFsdWUgb2YgdGhlIGxvY2FsIFN0b3JhZ2VcclxuICAgIGNvbnN0IGRhcmtNb2RlID0gdGhlbWVTdG9yYWdlKG51bGwpO1xyXG4gICAgZGFya01vZGUuc2V0VGhlbWUoKTtcclxufTtcclxuXHJcbi8vIFN0b3JlIHRoZSBET00gZWxlbWVudHMgdGhhdCBjaGFuZ2UgdGhlaXIgc3R5bGVzLlxyXG5jb25zdCBpdGVtc0FycmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdEFycmF5ID0gW1xyXG4gICAgICAgIGdldEVsZW1lbnQoJy5ib2R5JyksXHJcbiAgICAgICAgZ2V0RWxlbWVudCgnLnRoZW1lLWJ1dHRvbicpLFxyXG4gICAgICAgIGdldEVsZW1lbnQoJy5mb3JtLWNvbnRhaW5lcicpLFxyXG4gICAgICAgIGdldEVsZW1lbnQoJy5mb3JtLWNvbnRhaW5lcl9fY2xvc2UtYnRuJyksXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGljb25zQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlbGVtZW50OiBnZXRFbGVtZW50KCcudGhlbWUtaWNvbicpLFxyXG4gICAgICAgICAgICBkYXJrU3JjOiAnLi4vc3JjL2ltZy9zdW4uc3ZnJyxcclxuICAgICAgICAgICAgbGlnaHRTcmM6ICcuLi9zcmMvaW1nL21vb24uc3ZnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZWxlbWVudDogZ2V0RWxlbWVudCgnLmZpbHRlci1hcnJvdycpLFxyXG4gICAgICAgICAgICBkYXJrU3JjOiAnLi4vc3JjL2ltZy9hcnJvdy13aGl0ZS5zdmcnLFxyXG4gICAgICAgICAgICBsaWdodFNyYzogJy4uL3NyYy9pbWcvYXJyb3cuc3ZnJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4geyBkZWZhdWx0QXJyYXksIGljb25zQXJyYXkgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldEVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyB0aGVtZVRvZ2dsZSwgdGhlbWVFdmVudCB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=