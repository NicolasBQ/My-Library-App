/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/books.js":
/*!*************************!*\
  !*** ./src/js/books.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!******************************!*\
  !*** ./src/js/formEvents.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "formValidate": () => (/* binding */ formValidate)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");
/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books */ "./src/js/books.js");



const openForm = () => {
    Array.from((0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().inputs).forEach((input) => (input.value = ''));
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().backgroundOpacity.classList.add('background-form__active');
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainer.classList.add('form-container__active');

    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().backgroundOpacity.addEventListener('click', closeForm);
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainerCloseBtn.addEventListener('click', closeForm);
};

const closeForm = () => {
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().backgroundOpacity.classList.remove('background-form__active');
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainer.classList.remove('form-container__active');
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookName.classList.remove('input-error');
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookAuthor.classList.remove('input-error');
};

const formValidate = (e) => {
    e.preventDefault();

    const bookName = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookName;
    const bookAuthor = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookAuthor;
    const bookStatus = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookStatus;
    const formError = [bookName.checkValidity(), bookAuthor.checkValidity()].some((item) => !item);

    if (!bookName.checkValidity()) {
        inputError(bookName);
    }

    if (!bookAuthor.checkValidity()) {
        inputError(bookAuthor);
    }

    if (!formError) {
        (0,_books__WEBPACK_IMPORTED_MODULE_1__.bookController)(bookName.value, bookAuthor.value, bookStatus.checked);
        closeForm();
    }
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybUV2ZW50cy5lMzU0NjY0MmYyOWY3MmU0MzQ2MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0g7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0JBQXNCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0RBQVcsR0FBRztBQUN6RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esc0RBQXNELDZCQUE2QjtBQUNuRjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLHlEQUFXO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSx5REFBVztBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSx5REFBVztBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUseURBQVc7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVc7QUFDbkIsUUFBUSx5REFBVztBQUNuQixRQUFRLHlEQUFXO0FBQ25CLFFBQVEseURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseURBQVc7QUFDaEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQix5REFBVztBQUNoQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNtQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0duQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7VUM3Q3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDSDtBQUN6QztBQUNBO0FBQ0EsZUFBZSx5REFBVztBQUMxQixJQUFJLHlEQUFXO0FBQ2YsSUFBSSx5REFBVztBQUNmO0FBQ0EsSUFBSSx5REFBVztBQUNmLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFXO0FBQ2YsSUFBSSx5REFBVztBQUNmLElBQUkseURBQVc7QUFDZixJQUFJLHlEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBVztBQUNoQyx1QkFBdUIseURBQVc7QUFDbEMsdUJBQXVCLHlEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUM2QyIsInNvdXJjZXMiOlsid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvYm9va3MuanMiLCJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9qcy9kYXJrTW9kZS5qcyIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2Zvcm1FdmVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVUb2dnbGUgfSBmcm9tICcuL2RhcmtNb2RlJztcclxuXHJcbi8vIExvYWRzIGFsbCB0aGUgZnVuY3Rpb25zIHRvIGludGVyYWN0IHdpdGggdGhlIGJvb2tzLlxyXG5jb25zdCBib29rQ29udHJvbGxlciA9IChuYW1lLCBhdXRob3IsIHN0YXR1cykgPT4ge1xyXG4gICAgYWRkQm9vayhuYW1lLCBhdXRob3IsIHN0YXR1cyk7XHJcbiAgICBkaXNwbGF5Qm9vaygpO1xyXG4gICAgcmVtb3ZlQm9vaygpO1xyXG4gICAgYm9va1N0YXR1cygpLmNoYW5nZUJvb2tTdGF0dXMoKTtcclxufTtcclxuXHJcbi8vIFN0b3JlIHRoZSBhcnJheSBvZiBib29rcyAtIFJldHVybiBkZSBhcnJheSAtIFB1c2ggSXRlbXMgdG8gdGhlIGFycmF5IC1cclxuLy8gUmVtb3ZlIEVsZW1lbnRzIGZyb20gdGhlIGFycmF5IC0gQ2hhbmdlIHRoZSBzdGF0dXMgcHJvcGVydHkgb2YgdGhlIG9iamVjdHMgaW4gdGhlIGFycmF5IC1cclxuLy8gU2F2ZSB0aGUgYXJyYXkgaW4gdGhlIExvY2FsIFN0b3JhZ2VcclxuY29uc3QgYm9va3NBcnJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG15TGlicmFyeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TGlicmFyeScpKSB8fCBbXTtcclxuXHJcbiAgICBjb25zdCBnZXRMaWJyYXJ5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteUxpYnJhcnk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldExpYnJhcnkgPSAoYm9vaykgPT4ge1xyXG4gICAgICAgIG15TGlicmFyeS5wdXNoKGJvb2spO1xyXG4gICAgICAgIHNhdmVNeUxpYnJhcnkoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQm9vayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIG15TGlicmFyeS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNhdmVNeUxpYnJhcnkoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG15TGlicmFyeVtpbmRleF0pO1xyXG4gICAgICAgIC8vIG15TGlicmFyeVtpbmRleF0uc3RhdHVzID0gdmFsdWU7XHJcbiAgICAgICAgc2F2ZU15TGlicmFyeSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzYXZlTXlMaWJyYXJ5ID0gKCkgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215TGlicmFyeScsIEpTT04uc3RyaW5naWZ5KG15TGlicmFyeSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0TGlicmFyeSxcclxuICAgICAgICBzZXRMaWJyYXJ5LFxyXG4gICAgICAgIHJlbW92ZUJvb2ssXHJcbiAgICAgICAgY2hhbmdlU3RhdHVzLFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBCb29rIG9iamVjdCAtIFRoaXMgZnVuY3Rpb25zIGxvYWRzIG9uY2UgdGhlIHBhZ2UgaXMgbG9hZGVkLCB0aGF0J3Mgd2h5IGl0IHJldHVybnMgaWYgdGhlIG5hbWUgaXMgZmFsc3lcclxuY29uc3QgYWRkQm9vayA9IChuYW1lLCBhdXRob3IsIHN0YXR1cykgPT4ge1xyXG4gICAgaWYgKCFuYW1lKSByZXR1cm47XHJcblxyXG4gICAgYm9va3NBcnJheSgpLnNldExpYnJhcnkoeyBuYW1lLCBhdXRob3IsIHN0YXR1cyB9KTtcclxuICAgIGRpc3BsYXlCb29rKCk7XHJcbiAgICByZW1vdmVCb29rKCk7XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgYSBuZXcgQXJyYXkgZnJvbSB0aGUgb3JpZ2luYWwgYXJyYXkgYW5kIHRoZW4gZGlzcGxheSBlYWNoIGl0ZW1cclxuY29uc3QgZGlzcGxheUJvb2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib29rc1RlbXBsYXRlID0gYm9va3NBcnJheSgpXHJcbiAgICAgICAgLmdldExpYnJhcnkoKVxyXG4gICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgIChib29rKSA9PlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgIDxsaSBjbGFzcz1cImJvb2tzLWNvbnRhaW5lcl9faXRlbSAke3RoZW1lVG9nZ2xlKCl9XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib29rcy1jb250YWluZXJfX3RpdGxlIGZvbnQtNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAke2Jvb2submFtZX1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9va3MtY29udGFpbmVyX19jaXJjbGUgJHtib29rU3RhdHVzKGJvb2spLmJvb2tDbGFzcygpfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib29rcy1jb250YWluZXJfX2F1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Ym9vay5hdXRob3J9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvb2tzLWNvbnRhaW5lcl9fZGVsZXRlIGJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1nL2RlbGV0ZS5zdmdcIiBhbHQ9XCJEZWxldGUgYm9vayBCdXR0b25cIi8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgYFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgZG9tRWxlbWVudHMoKS5ib29rc0NvbnRhaW5lci5pbm5lckhUTUwgPSBib29rc1RlbXBsYXRlLmpvaW4oJycpO1xyXG59O1xyXG4vLyBSZW1vdmUgdGhlIERPTSBpdGVtIGFuZCBjYWxsIHRoZSByZW1vdmUgbWV0aG9kIGZyb20gdGhlIGJvb2tzQXJyYXkgLSBUaGlzIGZ1bmN0aW9ucyBsb2FkcyBvbmNlIHRoZSBwYWdlIGlzIGxvYWRlZFxyXG5jb25zdCByZW1vdmVCb29rID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9va3MgPSBkb21FbGVtZW50cygpLmJvb2tEZWxldGU7XHJcblxyXG4gICAgQXJyYXkuZnJvbShib29rcykuZm9yRWFjaCgoYm9vaywgaW5kZXgpID0+IHtcclxuICAgICAgICBib29rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBib29rLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJvb2tzQXJyYXkoKS5yZW1vdmVCb29rKGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gSGFzIDIgbWV0aG9kcy5cclxuLy8gQm9vayBDbGFzcyBpcyBjYWxsZWQgZnJvbSB0aGUgZGlzcGxheSBmdW5jdGlvbiB0byBzZXQgdGhlIGNvbG9yIG9mIHRoZSBsaWdodFxyXG4vLyBDaGFuZ2UgQm9vayBzdGF0dXMgY2hhbmdlIHRoZSBjbGFzcyBvbmNlIHRoZSBidXR0b24gaXMgaGl0IGFuZCBjYWxsIGNoYW5nZSBTdGF0dXMgbWV0aG9kIGZyb20gQm9va3MgQXJyYXkuXHJcbmNvbnN0IGJvb2tTdGF0dXMgPSAoYm9vaykgPT4ge1xyXG4gICAgY29uc3QgYm9va0NsYXNzID0gKCkgPT4gKGJvb2suc3RhdHVzID8gJ2Jvb2tzLWNvbnRhaW5lcl9fZ3JlZW4nIDogJ2Jvb2tzLWNvbnRhaW5lcl9fcmVkJyk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlQm9va1N0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBsaWdodHMgPSBkb21FbGVtZW50cygpLnN0YXR1c0xpZ2h0O1xyXG4gICAgICAgIEFycmF5LmZyb20obGlnaHRzKS5mb3JFYWNoKChsaWdodCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlnaHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdib29rcy1jb250YWluZXJfX3JlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va3NBcnJheSgpLmNoYW5nZVN0YXR1cyhpbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnYm9va3MtY29udGFpbmVyX19yZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QuYWRkKCdib29rcy1jb250YWluZXJfX2dyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb2tzQXJyYXkoKS5jaGFuZ2VTdGF0dXMoaW5kZXgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdib29rcy1jb250YWluZXJfX2dyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQuY2xhc3NMaXN0LmFkZCgnYm9va3MtY29udGFpbmVyX19yZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYm9va0NsYXNzLFxyXG4gICAgICAgIGNoYW5nZUJvb2tTdGF0dXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYm9va0NvbnRyb2xsZXIgfTtcclxuXHJcbi8vIEFycmVnbGFyIEluZGV4IFN0YXR1c1xyXG4vLyBTZWxlY2Npb25hciBDb2xvcmVzIGRlIGZpbHRlciB5IGFncmVnYXJsbyBhIERhcmtNb2RlXHJcbi8vIEdlbmVyYXIgZGlzcGxheSBkZSBsb3MgaXRlbXMgZmlsdHJhZG9zLlxyXG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG4vLyAgQ2hlY2sgdGhlIGN1cnJlbnQgdGhlbWUgaW4gdGhlIGxvY2FsU3RvcmFnZVxyXG5jb25zdCB0aGVtZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhcmttb2RlID0gdGhlbWVTdG9yYWdlKCk7XHJcbiAgICBpZiAoZGFya21vZGUuZ2V0VGhlbWUoKSA9PSAnZW5hYmxlZCcpIHtcclxuICAgICAgICBlbmFibGVEYXJrTW9kZSgpO1xyXG4gICAgICAgIHJldHVybiAnZGFyay1pdGVtJzsgLy8gUmV0dXJuIGRhcmstaXRlbSBmb3IgdGhlIGJvb2tzIGl0ZW1zIG9uY2UgdGhleSBhcmUgY3JlYXRlZC5cclxuICAgIH1cclxufTtcclxuXHJcbi8vIEdldHRlciAtIFNldHRlciBvZiB0aGUgbG9jYWxTdG9yYWdlXHJcbmNvbnN0IHRoZW1lU3RvcmFnZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgdmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0VGhlbWUsXHJcbiAgICAgICAgZ2V0VGhlbWUsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy8gVGhlIGNvbnRyb2xsZXIgZnVuY3Rpb24gd2hlbiB0aGUgdXNlciBjaGFuZ2UgdGhlIHRoZW1lIC0gSWYgdGhlIGRhcmsgdGhlbWUgaXMgbm90IGVuYWJsZWQgLCBpdCB3aWxsIGFjdGl2YXRlIGl0XHJcbmNvbnN0IHRoZW1lRXZlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrbW9kZSA9IHRoZW1lU3RvcmFnZSgpO1xyXG4gICAgZGFya21vZGUuZ2V0VGhlbWUoKSAhPT0gJ2VuYWJsZWQnID8gZW5hYmxlRGFya01vZGUoKSA6IGRpc2FibGVEYXJrTW9kZSgpO1xyXG59O1xyXG5cclxuLy8gRW5hYmxlIHRoZSBkYXJrIG1vZGUoVXNlcyB0aGUgaXRlbXNBcnJheSBmdW5jdGlvbiBmb3Igc2ltcGxpY2l0eSlcclxuY29uc3QgZW5hYmxlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGl0ZW1zQXJyYXkoKTtcclxuXHJcbiAgICBpdGVtcy5kZWZhdWx0QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZGFya0RlZmF1bHQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEFycmF5LmZyb20oZG9tRWxlbWVudHMoKS5pbnB1dHMpLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXJfX2lucHV0LWRhcmsnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEFycmF5LmZyb20oZG9tRWxlbWVudHMoKS5ib29rSXRlbXMpLmZvckVhY2goKGJvb2spID0+IHtcclxuICAgICAgICBib29rLmNsYXNzTGlzdC5hZGQoJ2RhcmstaXRlbScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXRlbXMuaWNvbnNBcnJheS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgaWNvbi5lbGVtZW50LnNyYyA9IGljb24uZGFya1NyYztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoYW5nZSB0aGUgdmFsdWUgb2YgdGhlIGxvY2FsIFN0b3JhZ2VcclxuICAgIGNvbnN0IGxpZ2h0TW9kZSA9IHRoZW1lU3RvcmFnZSgnZW5hYmxlZCcpO1xyXG4gICAgbGlnaHRNb2RlLnNldFRoZW1lKCk7XHJcbn07XHJcblxyXG4vLyBEaWFibGUgdGhlIGRhcmsgbW9kZShVc2VzIHRoZSBpdGVtc0FycmF5IGZ1bmN0aW9uIGZvciBzaW1wbGljaXR5KVxyXG5jb25zdCBkaXNhYmxlRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGl0ZW1zQXJyYXkoKTtcclxuXHJcbiAgICBpdGVtcy5kZWZhdWx0QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZGFya0RlZmF1bHQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEFycmF5LmZyb20oZG9tRWxlbWVudHMoKS5pbnB1dHMpLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250YWluZXJfX2lucHV0LWRhcmsnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEFycmF5LmZyb20oZG9tRWxlbWVudHMoKS5ib29rSXRlbXMpLmZvckVhY2goKGJvb2spID0+IHtcclxuICAgICAgICBib29rLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstaXRlbScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXRlbXMuaWNvbnNBcnJheS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgaWNvbi5lbGVtZW50LnNyYyA9IGljb24ubGlnaHRTcmM7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZhbHVlIG9mIHRoZSBsb2NhbCBTdG9yYWdlXHJcbiAgICBjb25zdCBkYXJrTW9kZSA9IHRoZW1lU3RvcmFnZShudWxsKTtcclxuICAgIGRhcmtNb2RlLnNldFRoZW1lKCk7XHJcbn07XHJcblxyXG4vLyBTdG9yZSB0aGUgRE9NIGVsZW1lbnRzIHRoYXQgY2hhbmdlIHRoZWlyIHN0eWxlcy5cclxuY29uc3QgaXRlbXNBcnJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRBcnJheSA9IFtcclxuICAgICAgICBkb21FbGVtZW50cygpLmJvZHksXHJcbiAgICAgICAgZG9tRWxlbWVudHMoKS50aGVtZUJ0bixcclxuICAgICAgICBkb21FbGVtZW50cygpLmZvcm1Db250YWluZXIsXHJcbiAgICAgICAgZG9tRWxlbWVudHMoKS5mb3JtQ29udGFpbmVyQ2xvc2VCdG4sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGljb25zQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlbGVtZW50OiBkb21FbGVtZW50cygpLnRoZW1lSWNvbixcclxuICAgICAgICAgICAgZGFya1NyYzogJy4uL3NyYy9pbWcvc3VuLnN2ZycsXHJcbiAgICAgICAgICAgIGxpZ2h0U3JjOiAnLi4vc3JjL2ltZy9tb29uLnN2ZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvbUVsZW1lbnRzKCkuZmlsdGVyQnRuLFxyXG4gICAgICAgICAgICBkYXJrU3JjOiAnLi4vc3JjL2ltZy9hcnJvdy13aGl0ZS5zdmcnLFxyXG4gICAgICAgICAgICBsaWdodFNyYzogJy4uL3NyYy9pbWcvYXJyb3cuc3ZnJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4geyBkZWZhdWx0QXJyYXksIGljb25zQXJyYXkgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRoZW1lVG9nZ2xlLCB0aGVtZUV2ZW50IH07XHJcbiIsIi8vIFN0b3JlIGFsbCB0aGUgRE9NIGVsZW1lbnRzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHVzZWQuXHJcbmNvbnN0IGRvbUVsZW1lbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhlbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBtYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2J1dHRvbicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250YWluZXJfX2lucHV0Jyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHknKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXJDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcl9fY2xvc2UtYnRuJyk7XHJcbiAgICBjb25zdCB0aGVtZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtaWNvbicpO1xyXG4gICAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1hcnJvdycpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZE9wYWNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1mb3JtJyk7XHJcbiAgICBjb25zdCBib29rTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1uYW1lJyk7XHJcbiAgICBjb25zdCBib29rQXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWF1dGhvcicpO1xyXG4gICAgY29uc3QgYm9va1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1jaGVja2JveCcpO1xyXG4gICAgY29uc3QgYm9va3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va3MtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBib29rSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va3MtY29udGFpbmVyX19pdGVtJyk7XHJcbiAgICBjb25zdCBib29rRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tzLWNvbnRhaW5lcl9fZGVsZXRlJyk7XHJcbiAgICBjb25zdCBzdGF0dXNMaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rcy1jb250YWluZXJfX2NpcmNsZScpO1xyXG4gICAgY29uc3QgZmlsdGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1idXR0b24nKTtcclxuICAgIGNvbnN0IGZpbHRlck9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLW9wdGlvbnMnKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRoZW1lQnRuLFxyXG4gICAgICAgIG1haW5CdG4sXHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICBpbnB1dHMsXHJcbiAgICAgICAgYm9keSxcclxuICAgICAgICBmb3JtQ29udGFpbmVyLFxyXG4gICAgICAgIGZvcm1Db250YWluZXJDbG9zZUJ0bixcclxuICAgICAgICB0aGVtZUljb24sXHJcbiAgICAgICAgZmlsdGVyQnRuLFxyXG4gICAgICAgIGJhY2tncm91bmRPcGFjaXR5LFxyXG4gICAgICAgIGJvb2tOYW1lLFxyXG4gICAgICAgIGJvb2tBdXRob3IsXHJcbiAgICAgICAgYm9va1N0YXR1cyxcclxuICAgICAgICBib29rc0NvbnRhaW5lcixcclxuICAgICAgICBib29rSXRlbXMsXHJcbiAgICAgICAgYm9va0RlbGV0ZSxcclxuICAgICAgICBzdGF0dXNMaWdodCxcclxuICAgICAgICBmaWx0ZXJCdXR0b24sXHJcbiAgICAgICAgZmlsdGVyT3B0aW9ucyxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBkb21FbGVtZW50cyB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IGJvb2tDb250cm9sbGVyIH0gZnJvbSAnLi9ib29rcyc7XHJcblxyXG5jb25zdCBvcGVuRm9ybSA9ICgpID0+IHtcclxuICAgIEFycmF5LmZyb20oZG9tRWxlbWVudHMoKS5pbnB1dHMpLmZvckVhY2goKGlucHV0KSA9PiAoaW5wdXQudmFsdWUgPSAnJykpO1xyXG4gICAgZG9tRWxlbWVudHMoKS5iYWNrZ3JvdW5kT3BhY2l0eS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWZvcm1fX2FjdGl2ZScpO1xyXG4gICAgZG9tRWxlbWVudHMoKS5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyX19hY3RpdmUnKTtcclxuXHJcbiAgICBkb21FbGVtZW50cygpLmJhY2tncm91bmRPcGFjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcclxuICAgIGRvbUVsZW1lbnRzKCkuZm9ybUNvbnRhaW5lckNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IHtcclxuICAgIGRvbUVsZW1lbnRzKCkuYmFja2dyb3VuZE9wYWNpdHkuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZC1mb3JtX19hY3RpdmUnKTtcclxuICAgIGRvbUVsZW1lbnRzKCkuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRhaW5lcl9fYWN0aXZlJyk7XHJcbiAgICBkb21FbGVtZW50cygpLmJvb2tOYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XHJcbiAgICBkb21FbGVtZW50cygpLmJvb2tBdXRob3IuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZXJyb3InKTtcclxufTtcclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYm9va05hbWUgPSBkb21FbGVtZW50cygpLmJvb2tOYW1lO1xyXG4gICAgY29uc3QgYm9va0F1dGhvciA9IGRvbUVsZW1lbnRzKCkuYm9va0F1dGhvcjtcclxuICAgIGNvbnN0IGJvb2tTdGF0dXMgPSBkb21FbGVtZW50cygpLmJvb2tTdGF0dXM7XHJcbiAgICBjb25zdCBmb3JtRXJyb3IgPSBbYm9va05hbWUuY2hlY2tWYWxpZGl0eSgpLCBib29rQXV0aG9yLmNoZWNrVmFsaWRpdHkoKV0uc29tZSgoaXRlbSkgPT4gIWl0ZW0pO1xyXG5cclxuICAgIGlmICghYm9va05hbWUuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgaW5wdXRFcnJvcihib29rTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFib29rQXV0aG9yLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIGlucHV0RXJyb3IoYm9va0F1dGhvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFmb3JtRXJyb3IpIHtcclxuICAgICAgICBib29rQ29udHJvbGxlcihib29rTmFtZS52YWx1ZSwgYm9va0F1dGhvci52YWx1ZSwgYm9va1N0YXR1cy5jaGVja2VkKTtcclxuICAgICAgICBjbG9zZUZvcm0oKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGlucHV0RXJyb3IgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmRhdGFzZXQuZXJyb3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSAnVGhpcyBmaWVsZCBjYW5ub3QgYmUgZW1wdHknO1xyXG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XHJcbiAgICBtZXNzYWdlLmRhdGFzZXQuZXJyb3IgPSAnaW52YWxpZElucHV0JztcclxuXHJcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1lc3NhZ2UsIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWVycm9yJyk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlLWhpZGUnKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UucmVtb3ZlKCk7XHJcbiAgICB9LCAyMDAwKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IG9wZW5Gb3JtLCBjbG9zZUZvcm0sIGZvcm1WYWxpZGF0ZSB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=