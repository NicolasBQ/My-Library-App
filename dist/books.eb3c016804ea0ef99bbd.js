/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    items.defaultArray.forEach((item) => {
        item.classList.remove('darkDefault');
    });

    Array.from((0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().inputs).forEach((input) => {
        input.classList.remove('form-container__input-dark');
    });

    Array.from((0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookItems).forEach((book) => {
        book.classList.remove('dark-item');
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
        (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().body,
        (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().themeBtn,
        (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainer,
        (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainerCloseBtn,
    ];

    const iconsArray = [
        {
            element: (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().themeIcon,
            darkSrc: '../src/img/sun.svg',
            lightSrc: '../src/img/moon.svg',
        },
        {
            element: (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().filterBtn,
            darkSrc: '../src/img/arrow-white.svg',
            lightSrc: '../src/img/arrow.svg',
        },
    ];

    return { defaultArray, iconsArray };
};




/***/ }),

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
    const statusLight = document.querySelectorAll('.books-container__circle');
    const filterButton = document.querySelector('.filter-button');
    const filterOptions = document.querySelector('.filter-options');

    return {
        themeBtn,
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
/*!*************************!*\
  !*** ./src/js/books.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bookController": () => (/* binding */ bookController)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");
/* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./darkMode */ "./src/js/darkMode.js");



// Loads all the functions to interact with the books.
const bookController = (name, author, status) => {
    addBook(name, author, status);
    displayBook();
    removeBook();
    bookStatus().changeBookStatus();
};

// Store the array of books - Return de array - Push Items to the array -
// Remove Elements from the array - Change the status property of the objects in the array -
// Save the array in the Local Storage
const booksArray = () => {
    const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

    const getLibrary = () => {
        return myLibrary;
    };

    const setLibrary = (book) => {
        myLibrary.push(book);
        saveMyLibrary();
    };

    const removeBook = (index) => {
        myLibrary.splice(index, 1);
        saveMyLibrary();
    };

    const changeStatus = (index, value) => {
        console.log(myLibrary[index]);
        // myLibrary[index].status = value;
        saveMyLibrary();
    };

    const saveMyLibrary = () => localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

    return {
        getLibrary,
        setLibrary,
        removeBook,
        changeStatus,
    };
};

// Create a new Book object - This functions loads once the page is loaded, that's why it returns if the name is falsy
const addBook = (name, author, status) => {
    if (!name) return;

    booksArray().setLibrary({ name, author, status });
    displayBook();
    removeBook();
};

// Create a new Array from the original array and then display each item
const displayBook = () => {
    const booksTemplate = booksArray()
        .getLibrary()
        .map(
            (book) =>
                `
        <li class="books-container__item ${(0,_darkMode__WEBPACK_IMPORTED_MODULE_1__.themeToggle)()}">
            <div>
                <h3 class="books-container__title font-400">
                ${book.name}
                </h3>
                <div class="books-container__circle ${bookStatus(book).bookClass()}"></div>
                <p class="books-container__author">
                    ${book.author}
                </p>
            </div>

            <button class="books-container__delete button">
                <img src="../src/img/delete.svg" alt="Delete book Button"/>
            </button>
        </li>
        `
        );

    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().booksContainer.innerHTML = booksTemplate.join('');
};
// Remove the DOM item and call the remove method from the booksArray - This functions loads once the page is loaded
const removeBook = () => {
    const books = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookDelete;

    Array.from(books).forEach((book, index) => {
        book.addEventListener('click', () => {
            book.parentNode.remove();
            booksArray().removeBook(index);
        });
    });
};

// Has 2 methods.
// Book Class is called from the display function to set the color of the light
// Change Book status change the class once the button is hit and call change Status method from Books Array.
const bookStatus = (book) => {
    const bookClass = () => (book.status ? 'books-container__green' : 'books-container__red');

    const changeBookStatus = () => {
        const lights = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().statusLight;
        Array.from(lights).forEach((light, index) => {
            light.addEventListener('click', () => {
                if (light.classList.contains('books-container__red')) {
                    booksArray().changeStatus(index, true);
                    light.classList.remove('books-container__red');
                    light.classList.add('books-container__green');
                } else {
                    booksArray().changeStatus(index, false);
                    light.classList.remove('books-container__green');
                    light.classList.add('books-container__red');
                }
            });
        });
    };

    return {
        bookClass,
        changeBookStatus,
    };
};



// Arreglar Index Status
// Seleccionar Colores de filter y agregarlo a DarkMode
// Generar display de los items filtrados.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHlEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2RhcmtNb2RlLmpzIiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvYm9va3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuLy8gIENoZWNrIHRoZSBjdXJyZW50IHRoZW1lIGluIHRoZSBsb2NhbFN0b3JhZ2VcclxuY29uc3QgdGhlbWVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrbW9kZSA9IHRoZW1lU3RvcmFnZSgpO1xyXG4gICAgaWYgKGRhcmttb2RlLmdldFRoZW1lKCkgPT0gJ2VuYWJsZWQnKSB7XHJcbiAgICAgICAgZW5hYmxlRGFya01vZGUoKTtcclxuICAgICAgICByZXR1cm4gJ2RhcmstaXRlbSc7IC8vIFJldHVybiBkYXJrLWl0ZW0gZm9yIHRoZSBib29rcyBpdGVtcyBvbmNlIHRoZXkgYXJlIGNyZWF0ZWQuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBHZXR0ZXIgLSBTZXR0ZXIgb2YgdGhlIGxvY2FsU3RvcmFnZVxyXG5jb25zdCB0aGVtZVN0b3JhZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNldFRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsIHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFRoZW1lLFxyXG4gICAgICAgIGdldFRoZW1lLFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vIFRoZSBjb250cm9sbGVyIGZ1bmN0aW9uIHdoZW4gdGhlIHVzZXIgY2hhbmdlIHRoZSB0aGVtZSAtIElmIHRoZSBkYXJrIHRoZW1lIGlzIG5vdCBlbmFibGVkICwgaXQgd2lsbCBhY3RpdmF0ZSBpdFxyXG5jb25zdCB0aGVtZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGFya21vZGUgPSB0aGVtZVN0b3JhZ2UoKTtcclxuICAgIGRhcmttb2RlLmdldFRoZW1lKCkgIT09ICdlbmFibGVkJyA/IGVuYWJsZURhcmtNb2RlKCkgOiBkaXNhYmxlRGFya01vZGUoKTtcclxufTtcclxuXHJcbi8vIEVuYWJsZSB0aGUgZGFyayBtb2RlKFVzZXMgdGhlIGl0ZW1zQXJyYXkgZnVuY3Rpb24gZm9yIHNpbXBsaWNpdHkpXHJcbmNvbnN0IGVuYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBpdGVtc0FycmF5KCk7XHJcblxyXG4gICAgaXRlbXMuZGVmYXVsdEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2RhcmtEZWZhdWx0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyX19pbnB1dC1kYXJrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuYm9va0l0ZW1zKS5mb3JFYWNoKChib29rKSA9PiB7XHJcbiAgICAgICAgYm9vay5jbGFzc0xpc3QuYWRkKCdkYXJrLWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0ZW1zLmljb25zQXJyYXkuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgICAgIGljb24uZWxlbWVudC5zcmMgPSBpY29uLmRhcmtTcmM7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZhbHVlIG9mIHRoZSBsb2NhbCBTdG9yYWdlXHJcbiAgICBjb25zdCBsaWdodE1vZGUgPSB0aGVtZVN0b3JhZ2UoJ2VuYWJsZWQnKTtcclxuICAgIGxpZ2h0TW9kZS5zZXRUaGVtZSgpO1xyXG59O1xyXG5cclxuLy8gRGlhYmxlIHRoZSBkYXJrIG1vZGUoVXNlcyB0aGUgaXRlbXNBcnJheSBmdW5jdGlvbiBmb3Igc2ltcGxpY2l0eSlcclxuY29uc3QgZGlzYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBpdGVtc0FycmF5KCk7XHJcblxyXG4gICAgaXRlbXMuZGVmYXVsdEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmtEZWZhdWx0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFpbmVyX19pbnB1dC1kYXJrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuYm9va0l0ZW1zKS5mb3JFYWNoKChib29rKSA9PiB7XHJcbiAgICAgICAgYm9vay5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0ZW1zLmljb25zQXJyYXkuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgICAgIGljb24uZWxlbWVudC5zcmMgPSBpY29uLmxpZ2h0U3JjO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2hhbmdlIHRoZSB2YWx1ZSBvZiB0aGUgbG9jYWwgU3RvcmFnZVxyXG4gICAgY29uc3QgZGFya01vZGUgPSB0aGVtZVN0b3JhZ2UobnVsbCk7XHJcbiAgICBkYXJrTW9kZS5zZXRUaGVtZSgpO1xyXG59O1xyXG5cclxuLy8gU3RvcmUgdGhlIERPTSBlbGVtZW50cyB0aGF0IGNoYW5nZSB0aGVpciBzdHlsZXMuXHJcbmNvbnN0IGl0ZW1zQXJyYXkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0QXJyYXkgPSBbXHJcbiAgICAgICAgZG9tRWxlbWVudHMoKS5ib2R5LFxyXG4gICAgICAgIGRvbUVsZW1lbnRzKCkudGhlbWVCdG4sXHJcbiAgICAgICAgZG9tRWxlbWVudHMoKS5mb3JtQ29udGFpbmVyLFxyXG4gICAgICAgIGRvbUVsZW1lbnRzKCkuZm9ybUNvbnRhaW5lckNsb3NlQnRuLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBpY29uc0FycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZWxlbWVudDogZG9tRWxlbWVudHMoKS50aGVtZUljb24sXHJcbiAgICAgICAgICAgIGRhcmtTcmM6ICcuLi9zcmMvaW1nL3N1bi5zdmcnLFxyXG4gICAgICAgICAgICBsaWdodFNyYzogJy4uL3NyYy9pbWcvbW9vbi5zdmcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlbGVtZW50OiBkb21FbGVtZW50cygpLmZpbHRlckJ0bixcclxuICAgICAgICAgICAgZGFya1NyYzogJy4uL3NyYy9pbWcvYXJyb3ctd2hpdGUuc3ZnJyxcclxuICAgICAgICAgICAgbGlnaHRTcmM6ICcuLi9zcmMvaW1nL2Fycm93LnN2ZycsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHsgZGVmYXVsdEFycmF5LCBpY29uc0FycmF5IH07XHJcbn07XHJcblxyXG5leHBvcnQgeyB0aGVtZVRvZ2dsZSwgdGhlbWVFdmVudCB9O1xyXG4iLCIvLyBTdG9yZSBhbGwgdGhlIERPTSBlbGVtZW50cyB0aGF0IGFyZSBnb2luZyB0byBiZSB1c2VkLlxyXG5jb25zdCBkb21FbGVtZW50cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgbWFpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19idXR0b24nKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udGFpbmVyX19pbnB1dCcpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXJfX2Nsb3NlLWJ0bicpO1xyXG4gICAgY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLWljb24nKTtcclxuICAgIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItYXJyb3cnKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtZm9ybScpO1xyXG4gICAgY29uc3QgYm9va05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtbmFtZScpO1xyXG4gICAgY29uc3QgYm9va0F1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1hdXRob3InKTtcclxuICAgIGNvbnN0IGJvb2tTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGJvb2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tzLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYm9va0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tzLWNvbnRhaW5lcl9faXRlbScpO1xyXG4gICAgY29uc3QgYm9va0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rcy1jb250YWluZXJfX2RlbGV0ZScpO1xyXG4gICAgY29uc3Qgc3RhdHVzTGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va3MtY29udGFpbmVyX19jaXJjbGUnKTtcclxuICAgIGNvbnN0IGZpbHRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItYnV0dG9uJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1vcHRpb25zJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aGVtZUJ0bixcclxuICAgICAgICBtYWluQnRuLFxyXG4gICAgICAgIGZvcm0sXHJcbiAgICAgICAgaW5wdXRzLFxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lcixcclxuICAgICAgICBmb3JtQ29udGFpbmVyQ2xvc2VCdG4sXHJcbiAgICAgICAgdGhlbWVJY29uLFxyXG4gICAgICAgIGZpbHRlckJ0bixcclxuICAgICAgICBiYWNrZ3JvdW5kT3BhY2l0eSxcclxuICAgICAgICBib29rTmFtZSxcclxuICAgICAgICBib29rQXV0aG9yLFxyXG4gICAgICAgIGJvb2tTdGF0dXMsXHJcbiAgICAgICAgYm9va3NDb250YWluZXIsXHJcbiAgICAgICAgYm9va0l0ZW1zLFxyXG4gICAgICAgIGJvb2tEZWxldGUsXHJcbiAgICAgICAgc3RhdHVzTGlnaHQsXHJcbiAgICAgICAgZmlsdGVyQnV0dG9uLFxyXG4gICAgICAgIGZpbHRlck9wdGlvbnMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZG9tRWxlbWVudHMgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZVRvZ2dsZSB9IGZyb20gJy4vZGFya01vZGUnO1xyXG5cclxuLy8gTG9hZHMgYWxsIHRoZSBmdW5jdGlvbnMgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgYm9va3MuXHJcbmNvbnN0IGJvb2tDb250cm9sbGVyID0gKG5hbWUsIGF1dGhvciwgc3RhdHVzKSA9PiB7XHJcbiAgICBhZGRCb29rKG5hbWUsIGF1dGhvciwgc3RhdHVzKTtcclxuICAgIGRpc3BsYXlCb29rKCk7XHJcbiAgICByZW1vdmVCb29rKCk7XHJcbiAgICBib29rU3RhdHVzKCkuY2hhbmdlQm9va1N0YXR1cygpO1xyXG59O1xyXG5cclxuLy8gU3RvcmUgdGhlIGFycmF5IG9mIGJvb2tzIC0gUmV0dXJuIGRlIGFycmF5IC0gUHVzaCBJdGVtcyB0byB0aGUgYXJyYXkgLVxyXG4vLyBSZW1vdmUgRWxlbWVudHMgZnJvbSB0aGUgYXJyYXkgLSBDaGFuZ2UgdGhlIHN0YXR1cyBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyBpbiB0aGUgYXJyYXkgLVxyXG4vLyBTYXZlIHRoZSBhcnJheSBpbiB0aGUgTG9jYWwgU3RvcmFnZVxyXG5jb25zdCBib29rc0FycmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbXlMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlMaWJyYXJ5JykpIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IGdldExpYnJhcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15TGlicmFyeTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0TGlicmFyeSA9IChib29rKSA9PiB7XHJcbiAgICAgICAgbXlMaWJyYXJ5LnB1c2goYm9vayk7XHJcbiAgICAgICAgc2F2ZU15TGlicmFyeSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVCb29rID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgbXlMaWJyYXJ5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2F2ZU15TGlicmFyeSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXlMaWJyYXJ5W2luZGV4XSk7XHJcbiAgICAgICAgLy8gbXlMaWJyYXJ5W2luZGV4XS5zdGF0dXMgPSB2YWx1ZTtcclxuICAgICAgICBzYXZlTXlMaWJyYXJ5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNhdmVNeUxpYnJhcnkgPSAoKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlMaWJyYXJ5JywgSlNPTi5zdHJpbmdpZnkobXlMaWJyYXJ5KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRMaWJyYXJ5LFxyXG4gICAgICAgIHNldExpYnJhcnksXHJcbiAgICAgICAgcmVtb3ZlQm9vayxcclxuICAgICAgICBjaGFuZ2VTdGF0dXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IEJvb2sgb2JqZWN0IC0gVGhpcyBmdW5jdGlvbnMgbG9hZHMgb25jZSB0aGUgcGFnZSBpcyBsb2FkZWQsIHRoYXQncyB3aHkgaXQgcmV0dXJucyBpZiB0aGUgbmFtZSBpcyBmYWxzeVxyXG5jb25zdCBhZGRCb29rID0gKG5hbWUsIGF1dGhvciwgc3RhdHVzKSA9PiB7XHJcbiAgICBpZiAoIW5hbWUpIHJldHVybjtcclxuXHJcbiAgICBib29rc0FycmF5KCkuc2V0TGlicmFyeSh7IG5hbWUsIGF1dGhvciwgc3RhdHVzIH0pO1xyXG4gICAgZGlzcGxheUJvb2soKTtcclxuICAgIHJlbW92ZUJvb2soKTtcclxufTtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBBcnJheSBmcm9tIHRoZSBvcmlnaW5hbCBhcnJheSBhbmQgdGhlbiBkaXNwbGF5IGVhY2ggaXRlbVxyXG5jb25zdCBkaXNwbGF5Qm9vayA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvb2tzVGVtcGxhdGUgPSBib29rc0FycmF5KClcclxuICAgICAgICAuZ2V0TGlicmFyeSgpXHJcbiAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgKGJvb2spID0+XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiYm9va3MtY29udGFpbmVyX19pdGVtICR7dGhlbWVUb2dnbGUoKX1cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJvb2tzLWNvbnRhaW5lcl9fdGl0bGUgZm9udC00MDBcIj5cclxuICAgICAgICAgICAgICAgICR7Ym9vay5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rcy1jb250YWluZXJfX2NpcmNsZSAke2Jvb2tTdGF0dXMoYm9vaykuYm9va0NsYXNzKCl9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvb2tzLWNvbnRhaW5lcl9fYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtib29rLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYm9va3MtY29udGFpbmVyX19kZWxldGUgYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcvZGVsZXRlLnN2Z1wiIGFsdD1cIkRlbGV0ZSBib29rIEJ1dHRvblwiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBkb21FbGVtZW50cygpLmJvb2tzQ29udGFpbmVyLmlubmVySFRNTCA9IGJvb2tzVGVtcGxhdGUuam9pbignJyk7XHJcbn07XHJcbi8vIFJlbW92ZSB0aGUgRE9NIGl0ZW0gYW5kIGNhbGwgdGhlIHJlbW92ZSBtZXRob2QgZnJvbSB0aGUgYm9va3NBcnJheSAtIFRoaXMgZnVuY3Rpb25zIGxvYWRzIG9uY2UgdGhlIHBhZ2UgaXMgbG9hZGVkXHJcbmNvbnN0IHJlbW92ZUJvb2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib29rcyA9IGRvbUVsZW1lbnRzKCkuYm9va0RlbGV0ZTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGJvb2tzKS5mb3JFYWNoKChib29rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGJvb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvb2sucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYm9va3NBcnJheSgpLnJlbW92ZUJvb2soaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBIYXMgMiBtZXRob2RzLlxyXG4vLyBCb29rIENsYXNzIGlzIGNhbGxlZCBmcm9tIHRoZSBkaXNwbGF5IGZ1bmN0aW9uIHRvIHNldCB0aGUgY29sb3Igb2YgdGhlIGxpZ2h0XHJcbi8vIENoYW5nZSBCb29rIHN0YXR1cyBjaGFuZ2UgdGhlIGNsYXNzIG9uY2UgdGhlIGJ1dHRvbiBpcyBoaXQgYW5kIGNhbGwgY2hhbmdlIFN0YXR1cyBtZXRob2QgZnJvbSBCb29rcyBBcnJheS5cclxuY29uc3QgYm9va1N0YXR1cyA9IChib29rKSA9PiB7XHJcbiAgICBjb25zdCBib29rQ2xhc3MgPSAoKSA9PiAoYm9vay5zdGF0dXMgPyAnYm9va3MtY29udGFpbmVyX19ncmVlbicgOiAnYm9va3MtY29udGFpbmVyX19yZWQnKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VCb29rU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IGRvbUVsZW1lbnRzKCkuc3RhdHVzTGlnaHQ7XHJcbiAgICAgICAgQXJyYXkuZnJvbShsaWdodHMpLmZvckVhY2goKGxpZ2h0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsaWdodC5jbGFzc0xpc3QuY29udGFpbnMoJ2Jvb2tzLWNvbnRhaW5lcl9fcmVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBib29rc0FycmF5KCkuY2hhbmdlU3RhdHVzKGluZGV4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdib29rcy1jb250YWluZXJfX3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Jvb2tzLWNvbnRhaW5lcl9fZ3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va3NBcnJheSgpLmNoYW5nZVN0YXR1cyhpbmRleCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jvb2tzLWNvbnRhaW5lcl9fZ3JlZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QuYWRkKCdib29rcy1jb250YWluZXJfX3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib29rQ2xhc3MsXHJcbiAgICAgICAgY2hhbmdlQm9va1N0YXR1cyxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBib29rQ29udHJvbGxlciB9O1xyXG5cclxuLy8gQXJyZWdsYXIgSW5kZXggU3RhdHVzXHJcbi8vIFNlbGVjY2lvbmFyIENvbG9yZXMgZGUgZmlsdGVyIHkgYWdyZWdhcmxvIGEgRGFya01vZGVcclxuLy8gR2VuZXJhciBkaXNwbGF5IGRlIGxvcyBpdGVtcyBmaWx0cmFkb3MuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==