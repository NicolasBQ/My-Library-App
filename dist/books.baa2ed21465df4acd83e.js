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
/*!*************************!*\
  !*** ./src/js/books.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bookController": () => (/* binding */ bookController),
/* harmony export */   "addBook": () => (/* binding */ addBook)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");
/* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./darkMode */ "./src/js/darkMode.js");



// Loads all the functions to interact with the books.
const bookController = (arr = booksArray().getLibrary()) => {
    displayBook(arr);
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
        myLibrary[index].status = value;
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

// Create a new Book object
const addBook = (name, author, status) => {
    booksArray().setLibrary({ name, author, status }); // Push the object to the array
    bookController(); // Load the DOM of the book
};

// Create a new Array from the original array and then display each item
const displayBook = (arr) => {
    const booksTemplate = arr.map(
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
        // Take all the delete buttons.
        book.addEventListener('click', () => {
            book.parentNode.remove();
            booksArray().removeBook(index); // Remove the element from the array.
            bookController(); // Reset the display to match the index of the buttons with the index of the array
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
            // Take all the circles (lights)
            light.addEventListener('click', () => {
                if (light.classList.contains('books-container__red')) {
                    booksArray().changeStatus(index, true); // Change the status in the array
                    light.classList.remove('books-container__red'); // Change the UI
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELG9FQUFvRTtBQUNwRTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvZGFya01vZGUuanMiLCJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9qcy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9qcy9ib29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG4vLyAgQ2hlY2sgdGhlIGN1cnJlbnQgdGhlbWUgaW4gdGhlIGxvY2FsU3RvcmFnZVxyXG5jb25zdCB0aGVtZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhcmttb2RlID0gdGhlbWVTdG9yYWdlKCk7XHJcbiAgICBpZiAoZGFya21vZGUuZ2V0VGhlbWUoKSA9PSAnZW5hYmxlZCcpIHtcclxuICAgICAgICBlbmFibGVEYXJrTW9kZSgpO1xyXG4gICAgICAgIHJldHVybiAnZGFyay1pdGVtJzsgLy8gUmV0dXJuIGRhcmstaXRlbSBmb3IgdGhlIGJvb2tzIGl0ZW1zIG9uY2UgdGhleSBhcmUgY3JlYXRlZC5cclxuICAgIH1cclxufTtcclxuXHJcbi8vIEdldHRlciAtIFNldHRlciBvZiB0aGUgbG9jYWxTdG9yYWdlXHJcbmNvbnN0IHRoZW1lU3RvcmFnZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgdmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0VGhlbWUsXHJcbiAgICAgICAgZ2V0VGhlbWUsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy8gVGhlIGNvbnRyb2xsZXIgZnVuY3Rpb24gd2hlbiB0aGUgdXNlciBjaGFuZ2UgdGhlIHRoZW1lIC0gSWYgdGhlIGRhcmsgdGhlbWUgaXMgbm90IGVuYWJsZWQgLCBpdCB3aWxsIGFjdGl2YXRlIGl0XHJcbmNvbnN0IHRoZW1lRXZlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrbW9kZSA9IHRoZW1lU3RvcmFnZSgpO1xyXG4gICAgZGFya21vZGUuZ2V0VGhlbWUoKSAhPT0gJ2VuYWJsZWQnID8gZW5hYmxlRGFya01vZGUoKSA6IGRpc2FibGVEYXJrTW9kZSgpO1xyXG59O1xyXG5cclxuLy8gRW5hYmxlIHRoZSBkYXJrIG1vZGUoVXNlcyB0aGUgaXRlbXNBcnJheSBmdW5jdGlvbiBmb3Igc2ltcGxpY2l0eSlcclxuY29uc3QgZW5hYmxlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGl0ZW1zQXJyYXkoKTtcclxuXHJcbiAgICBpdGVtcy5kZWZhdWx0QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZGFya0RlZmF1bHQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEFycmF5LmZyb20oZG9tRWxlbWVudHMoKS5pbnB1dHMpLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXJfX2lucHV0LWRhcmsnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEFycmF5LmZyb20oZG9tRWxlbWVudHMoKS5ib29rSXRlbXMpLmZvckVhY2goKGJvb2spID0+IHtcclxuICAgICAgICBib29rLmNsYXNzTGlzdC5hZGQoJ2RhcmstaXRlbScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9tRWxlbWVudHMoKS5tb29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb21FbGVtZW50cygpLnN1bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIC8vIENoYW5nZSB0aGUgdmFsdWUgb2YgdGhlIGxvY2FsIFN0b3JhZ2VcclxuICAgIGNvbnN0IGxpZ2h0TW9kZSA9IHRoZW1lU3RvcmFnZSgnZW5hYmxlZCcpO1xyXG4gICAgbGlnaHRNb2RlLnNldFRoZW1lKCk7XHJcbn07XHJcblxyXG4vLyBEaWFibGUgdGhlIGRhcmsgbW9kZShVc2VzIHRoZSBpdGVtc0FycmF5IGZ1bmN0aW9uIGZvciBzaW1wbGljaXR5KVxyXG5jb25zdCBkaXNhYmxlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGl0ZW1zQXJyYXkoKTtcclxuXHJcbiAgICBpdGVtcy5kZWZhdWx0QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZGFya0RlZmF1bHQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEFycmF5LmZyb20oZG9tRWxlbWVudHMoKS5pbnB1dHMpLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250YWluZXJfX2lucHV0LWRhcmsnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEFycmF5LmZyb20oZG9tRWxlbWVudHMoKS5ib29rSXRlbXMpLmZvckVhY2goKGJvb2spID0+IHtcclxuICAgICAgICBib29rLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstaXRlbScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9tRWxlbWVudHMoKS5tb29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9tRWxlbWVudHMoKS5zdW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vIENoYW5nZSB0aGUgdmFsdWUgb2YgdGhlIGxvY2FsIFN0b3JhZ2VcclxuICAgIGNvbnN0IGRhcmtNb2RlID0gdGhlbWVTdG9yYWdlKG51bGwpO1xyXG4gICAgZGFya01vZGUuc2V0VGhlbWUoKTtcclxufTtcclxuXHJcbi8vIFN0b3JlIHRoZSBET00gZWxlbWVudHMgdGhhdCBjaGFuZ2UgdGhlaXIgc3R5bGVzLlxyXG5jb25zdCBpdGVtc0FycmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdEFycmF5ID0gW1xyXG4gICAgICAgIGRvbUVsZW1lbnRzKCkuYm9keSxcclxuICAgICAgICBkb21FbGVtZW50cygpLnRoZW1lQnRuLFxyXG4gICAgICAgIGRvbUVsZW1lbnRzKCkuZm9ybUNvbnRhaW5lcixcclxuICAgICAgICBkb21FbGVtZW50cygpLmZvcm1Db250YWluZXJDbG9zZUJ0bixcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHsgZGVmYXVsdEFycmF5IH07XHJcbn07XHJcblxyXG5leHBvcnQgeyB0aGVtZVRvZ2dsZSwgdGhlbWVFdmVudCB9O1xyXG4iLCIvLyBTdG9yZSBhbGwgdGhlIERPTSBlbGVtZW50cyB0aGF0IGFyZSBnb2luZyB0byBiZSB1c2VkLlxyXG5jb25zdCBkb21FbGVtZW50cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgbW9vbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29uJyk7XHJcbiAgICBjb25zdCBzdW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VuJyk7XHJcbiAgICBjb25zdCBtYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2J1dHRvbicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250YWluZXJfX2lucHV0Jyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXJDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcl9fY2xvc2UtYnRuJyk7XHJcbiAgICBjb25zdCB0aGVtZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtaWNvbicpO1xyXG4gICAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1hcnJvdycpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZE9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1mb3JtJyk7XHJcbiAgICBjb25zdCBib29rTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1uYW1lJyk7XHJcbiAgICBjb25zdCBib29rQXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWF1dGhvcicpO1xyXG4gICAgY29uc3QgYm9va1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jaGVja2JveCcpO1xyXG4gICAgY29uc3QgYm9va3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va3MtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBib29rSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va3MtY29udGFpbmVyX19pdGVtJyk7XHJcbiAgICBjb25zdCBib29rRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tzLWNvbnRhaW5lcl9fZGVsZXRlJyk7XHJcbiAgICBjb25zdCBzdGF0dXNMaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rcy1jb250YWluZXIgLmJvb2tzLWNvbnRhaW5lcl9fY2lyY2xlJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItb3B0aW9ucycpO1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24tZGVmYXVsdCcpO1xyXG4gICAgY29uc3QgcmVhZE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24tcmVhZCcpO1xyXG4gICAgY29uc3Qgbm90cmVhZE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24tbm9yZWFkJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aGVtZUJ0bixcclxuICAgICAgICBtb29uLFxyXG4gICAgICAgIHN1bixcclxuICAgICAgICBtYWluQnRuLFxyXG4gICAgICAgIGZvcm0sXHJcbiAgICAgICAgaW5wdXRzLFxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lcixcclxuICAgICAgICBmb3JtQ29udGFpbmVyQ2xvc2VCdG4sXHJcbiAgICAgICAgdGhlbWVJY29uLFxyXG4gICAgICAgIGZpbHRlckJ0bixcclxuICAgICAgICBiYWNrZ3JvdW5kT3BhY2l0eSxcclxuICAgICAgICBib29rTmFtZSxcclxuICAgICAgICBib29rQXV0aG9yLFxyXG4gICAgICAgIGJvb2tTdGF0dXMsXHJcbiAgICAgICAgYm9va3NDb250YWluZXIsXHJcbiAgICAgICAgYm9va0l0ZW1zLFxyXG4gICAgICAgIGJvb2tEZWxldGUsXHJcbiAgICAgICAgc3RhdHVzTGlnaHQsXHJcbiAgICAgICAgZmlsdGVyQnV0dG9uLFxyXG4gICAgICAgIGZpbHRlck9wdGlvbnMsXHJcbiAgICAgICAgZGVmYXVsdE9wdGlvbixcclxuICAgICAgICByZWFkT3B0aW9uLFxyXG4gICAgICAgIG5vdHJlYWRPcHRpb24sXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZG9tRWxlbWVudHMgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZVRvZ2dsZSB9IGZyb20gJy4vZGFya01vZGUnO1xyXG5cclxuLy8gTG9hZHMgYWxsIHRoZSBmdW5jdGlvbnMgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgYm9va3MuXHJcbmNvbnN0IGJvb2tDb250cm9sbGVyID0gKGFyciA9IGJvb2tzQXJyYXkoKS5nZXRMaWJyYXJ5KCkpID0+IHtcclxuICAgIGRpc3BsYXlCb29rKGFycik7XHJcbiAgICByZW1vdmVCb29rKCk7XHJcbiAgICBib29rU3RhdHVzKCkuY2hhbmdlQm9va1N0YXR1cygpO1xyXG59O1xyXG5cclxuLy8gU3RvcmUgdGhlIGFycmF5IG9mIGJvb2tzIC0gUmV0dXJuIGRlIGFycmF5IC0gUHVzaCBJdGVtcyB0byB0aGUgYXJyYXkgLVxyXG4vLyBSZW1vdmUgRWxlbWVudHMgZnJvbSB0aGUgYXJyYXkgLSBDaGFuZ2UgdGhlIHN0YXR1cyBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyBpbiB0aGUgYXJyYXkgLVxyXG4vLyBTYXZlIHRoZSBhcnJheSBpbiB0aGUgTG9jYWwgU3RvcmFnZVxyXG5jb25zdCBib29rc0FycmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbXlMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlMaWJyYXJ5JykpIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IGdldExpYnJhcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15TGlicmFyeTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0TGlicmFyeSA9IChib29rKSA9PiB7XHJcbiAgICAgICAgbXlMaWJyYXJ5LnB1c2goYm9vayk7XHJcbiAgICAgICAgc2F2ZU15TGlicmFyeSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVCb29rID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgbXlMaWJyYXJ5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2F2ZU15TGlicmFyeSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbXlMaWJyYXJ5W2luZGV4XS5zdGF0dXMgPSB2YWx1ZTtcclxuICAgICAgICBzYXZlTXlMaWJyYXJ5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNhdmVNeUxpYnJhcnkgPSAoKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlMaWJyYXJ5JywgSlNPTi5zdHJpbmdpZnkobXlMaWJyYXJ5KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRMaWJyYXJ5LFxyXG4gICAgICAgIHNldExpYnJhcnksXHJcbiAgICAgICAgcmVtb3ZlQm9vayxcclxuICAgICAgICBjaGFuZ2VTdGF0dXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IEJvb2sgb2JqZWN0XHJcbmNvbnN0IGFkZEJvb2sgPSAobmFtZSwgYXV0aG9yLCBzdGF0dXMpID0+IHtcclxuICAgIGJvb2tzQXJyYXkoKS5zZXRMaWJyYXJ5KHsgbmFtZSwgYXV0aG9yLCBzdGF0dXMgfSk7IC8vIFB1c2ggdGhlIG9iamVjdCB0byB0aGUgYXJyYXlcclxuICAgIGJvb2tDb250cm9sbGVyKCk7IC8vIExvYWQgdGhlIERPTSBvZiB0aGUgYm9va1xyXG59O1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IEFycmF5IGZyb20gdGhlIG9yaWdpbmFsIGFycmF5IGFuZCB0aGVuIGRpc3BsYXkgZWFjaCBpdGVtXHJcbmNvbnN0IGRpc3BsYXlCb29rID0gKGFycikgPT4ge1xyXG4gICAgY29uc3QgYm9va3NUZW1wbGF0ZSA9IGFyci5tYXAoXHJcbiAgICAgICAgKGJvb2spID0+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICA8bGkgY2xhc3M9XCJib29rcy1jb250YWluZXJfX2l0ZW0gJHt0aGVtZVRvZ2dsZSgpfVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm9va3MtY29udGFpbmVyX190aXRsZSBmb250LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgJHtib29rLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb2tzLWNvbnRhaW5lcl9fY2lyY2xlICR7Ym9va1N0YXR1cyhib29rKS5ib29rQ2xhc3MoKX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYm9va3MtY29udGFpbmVyX19hdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2Jvb2suYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib29rcy1jb250YWluZXJfX2RlbGV0ZSBidXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL2ltZy9kZWxldGUuc3ZnXCIgYWx0PVwiRGVsZXRlIGJvb2sgQnV0dG9uXCIvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgZG9tRWxlbWVudHMoKS5ib29rc0NvbnRhaW5lci5pbm5lckhUTUwgPSBib29rc1RlbXBsYXRlLmpvaW4oJycpO1xyXG59O1xyXG4vLyBSZW1vdmUgdGhlIERPTSBpdGVtIGFuZCBjYWxsIHRoZSByZW1vdmUgbWV0aG9kIGZyb20gdGhlIGJvb2tzQXJyYXkgLSBUaGlzIGZ1bmN0aW9ucyBsb2FkcyBvbmNlIHRoZSBwYWdlIGlzIGxvYWRlZFxyXG5jb25zdCByZW1vdmVCb29rID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9va3MgPSBkb21FbGVtZW50cygpLmJvb2tEZWxldGU7XHJcblxyXG4gICAgQXJyYXkuZnJvbShib29rcykuZm9yRWFjaCgoYm9vaywgaW5kZXgpID0+IHtcclxuICAgICAgICAvLyBUYWtlIGFsbCB0aGUgZGVsZXRlIGJ1dHRvbnMuXHJcbiAgICAgICAgYm9vay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYm9vay5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBib29rc0FycmF5KCkucmVtb3ZlQm9vayhpbmRleCk7IC8vIFJlbW92ZSB0aGUgZWxlbWVudCBmcm9tIHRoZSBhcnJheS5cclxuICAgICAgICAgICAgYm9va0NvbnRyb2xsZXIoKTsgLy8gUmVzZXQgdGhlIGRpc3BsYXkgdG8gbWF0Y2ggdGhlIGluZGV4IG9mIHRoZSBidXR0b25zIHdpdGggdGhlIGluZGV4IG9mIHRoZSBhcnJheVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBIYXMgMiBtZXRob2RzLlxyXG4vLyBCb29rIENsYXNzIGlzIGNhbGxlZCBmcm9tIHRoZSBkaXNwbGF5IGZ1bmN0aW9uIHRvIHNldCB0aGUgY29sb3Igb2YgdGhlIGxpZ2h0XHJcbi8vIENoYW5nZSBCb29rIHN0YXR1cyBjaGFuZ2UgdGhlIGNsYXNzIG9uY2UgdGhlIGJ1dHRvbiBpcyBoaXQgYW5kIGNhbGwgY2hhbmdlIFN0YXR1cyBtZXRob2QgZnJvbSBCb29rcyBBcnJheS5cclxuY29uc3QgYm9va1N0YXR1cyA9IChib29rKSA9PiB7XHJcbiAgICBjb25zdCBib29rQ2xhc3MgPSAoKSA9PiAoYm9vay5zdGF0dXMgPyAnYm9va3MtY29udGFpbmVyX19ncmVlbicgOiAnYm9va3MtY29udGFpbmVyX19yZWQnKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VCb29rU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IGRvbUVsZW1lbnRzKCkuc3RhdHVzTGlnaHQ7XHJcbiAgICAgICAgQXJyYXkuZnJvbShsaWdodHMpLmZvckVhY2goKGxpZ2h0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUYWtlIGFsbCB0aGUgY2lyY2xlcyAobGlnaHRzKVxyXG4gICAgICAgICAgICBsaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsaWdodC5jbGFzc0xpc3QuY29udGFpbnMoJ2Jvb2tzLWNvbnRhaW5lcl9fcmVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBib29rc0FycmF5KCkuY2hhbmdlU3RhdHVzKGluZGV4LCB0cnVlKTsgLy8gQ2hhbmdlIHRoZSBzdGF0dXMgaW4gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnYm9va3MtY29udGFpbmVyX19yZWQnKTsgLy8gQ2hhbmdlIHRoZSBVSVxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Jvb2tzLWNvbnRhaW5lcl9fZ3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va3NBcnJheSgpLmNoYW5nZVN0YXR1cyhpbmRleCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jvb2tzLWNvbnRhaW5lcl9fZ3JlZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QuYWRkKCdib29rcy1jb250YWluZXJfX3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib29rQ2xhc3MsXHJcbiAgICAgICAgY2hhbmdlQm9va1N0YXR1cyxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBib29rQ29udHJvbGxlciwgYWRkQm9vayB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=