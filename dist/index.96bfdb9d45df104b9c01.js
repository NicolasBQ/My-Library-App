/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/moon.svg */ "./src/img/moon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sun.svg */ "./src/img/sun.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n        <meta charset=\"UTF-8\" />\r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n        <link\r\n            rel=\"shortcut icon\"\r\n            href=\"https://img.icons8.com/external-filled-line-rakhmat-setiawan/64/000000/external-book-back-to-school-filled-line-filled-line-rakhmat-setiawan-4.png\"\r\n        />\r\n        <title>My Library</title>\r\n    </head>\r\n    <body class=\"body\">\r\n        <main class=\"main\">\r\n            <!-- Default Markup -->\r\n            <div class=\"background-form\"></div>\r\n            <h1 class=\"main__title font-400\">My Library</h1>\r\n            <button class=\"main__button button\">Add new book</button>\r\n            <div class=\"main__books\">\r\n                <h2 class=\"main__books--title font-400\">Books</h2>\r\n                <button class=\"theme-button button\">\r\n                    <img class=\"theme-icon moon\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"moon icon\" />\r\n                    <img class=\"theme-icon sun\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"sun icon\" />\r\n                </button>\r\n            </div>\r\n            <!-- Form Markup -->\r\n            <div class=\"form-container\">\r\n                <h2 class=\"form-container__title font-400\">New Book</h2>\r\n                <button class=\"form-container__close-btn button\">&times</button>\r\n                <form class=\"form\" novalidate>\r\n                    <span class=\"form-container__label\">Book Name</span>\r\n                    <input class=\"form-container__input input-name\" type=\"text\" required />\r\n                    <span class=\"form-container__label\">Book Author</span>\r\n                    <input class=\"form-container__input input-author\" type=\"text\" required />\r\n                    <label for=\"book-status\" class=\"form-container__label\">\r\n                        Have you read it?\r\n                        <input\r\n                            class=\"form-container__checkbox input-checkbox\"\r\n                            id=\"book-status\"\r\n                            type=\"checkbox\"\r\n                        />\r\n                    </label>\r\n                    <button type=\"submit\" class=\"main__button form-container-button button\">\r\n                        Add Book\r\n                    </button>\r\n                </form>\r\n            </div>\r\n            <!-- Books Container -->\r\n            <ul class=\"books-container\"></ul>\r\n        </main>\r\n    </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/books.js":
/*!*************************!*\
  !*** ./src/js/books.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




/***/ }),

/***/ "./src/js/formEvents.js":
/*!******************************!*\
  !*** ./src/js/formEvents.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "formValidate": () => (/* binding */ formValidate)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");
/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books */ "./src/js/books.js");


// UI when the form is open
const openForm = () => {
    Array.from((0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().inputs).forEach((input) => (input.value = ''));
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().backgroundOpacity.classList.add('background-form__active');
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainer.classList.add('form-container__active');

    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().backgroundOpacity.addEventListener('click', closeForm);
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainerCloseBtn.addEventListener('click', closeForm);
};

// Remove the form UI. (Form closed)
const closeForm = () => {
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().backgroundOpacity.classList.remove('background-form__active');
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().formContainer.classList.remove('form-container__active');
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookName.classList.remove('input-error');
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookAuthor.classList.remove('input-error');
};

// Form Validation
const formValidate = (e) => {
    e.preventDefault();

    const bookName = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookName;
    const bookAuthor = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookAuthor;
    const bookStatus = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().bookStatus;
    // True if some input validation is false - False if all the inputs validations are true
    const formError = [bookName.checkValidity(), bookAuthor.checkValidity()].some((item) => !item);

    if (!bookName.checkValidity()) {
        inputError(bookName);
    }

    if (!bookAuthor.checkValidity()) {
        inputError(bookAuthor);
    }
    // If form error is false, call addBook from book.js
    if (!formError) {
        (0,_books__WEBPACK_IMPORTED_MODULE_1__.addBook)(bookName.value, bookAuthor.value, bookStatus.checked);
        closeForm();
    }
};

// UI when some input is wrong.
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




/***/ }),

/***/ "./src/img/moon.svg":
/*!**************************!*\
  !*** ./src/img/moon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9b6bf140a68ede6e806.svg";

/***/ }),

/***/ "./src/img/sun.svg":
/*!*************************!*\
  !*** ./src/img/sun.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "704ef22a6cba8586862d.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./src/index.html");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");
/* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./darkMode */ "./src/js/darkMode.js");
/* harmony import */ var _formEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formEvents */ "./src/js/formEvents.js");
/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books */ "./src/js/books.js");







const appInit = () => {
    (0,_darkMode__WEBPACK_IMPORTED_MODULE_3__.themeToggle)();
    (0,_books__WEBPACK_IMPORTED_MODULE_5__.bookController)();
    (0,_domElements__WEBPACK_IMPORTED_MODULE_2__.domElements)().themeBtn.addEventListener('click', _darkMode__WEBPACK_IMPORTED_MODULE_3__.themeEvent);
    (0,_domElements__WEBPACK_IMPORTED_MODULE_2__.domElements)().mainBtn.addEventListener('click', _formEvents__WEBPACK_IMPORTED_MODULE_4__.openForm);
    (0,_domElements__WEBPACK_IMPORTED_MODULE_2__.domElements)().form.addEventListener('submit', _formEvents__WEBPACK_IMPORTED_MODULE_4__.formValidate);
};

document.addEventListener('DOMContentLoaded', appInit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMkI7QUFDTTtBQUNXO0FBQ1M7QUFDQztBQUNiO0FBQ3pDO0FBQ0E7QUFDQSxJQUFJLHNEQUFXO0FBQ2YsSUFBSSxzREFBYztBQUNsQixJQUFJLHlEQUFXLHNDQUFzQyxpREFBVTtBQUMvRCxJQUFJLHlEQUFXLHFDQUFxQyxpREFBUTtBQUM1RCxJQUFJLHlEQUFXLG1DQUFtQyxxREFBWTtBQUM5RDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vbXlib29rcy8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL215Ym9va3MvLi9zcmMvc2Nzcy9tYWluLnNjc3M/Y2JiNyIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2Jvb2tzLmpzIiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvZGFya01vZGUuanMiLCJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9qcy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2Zvcm1FdmVudHMuanMiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXlib29rcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL21vb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvc3VuLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuICAgIDxoZWFkPlxcclxcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxyXFxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxyXFxuICAgICAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXHJcXG4gICAgICAgIDxsaW5rXFxyXFxuICAgICAgICAgICAgcmVsPVxcXCJzaG9ydGN1dCBpY29uXFxcIlxcclxcbiAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vaW1nLmljb25zOC5jb20vZXh0ZXJuYWwtZmlsbGVkLWxpbmUtcmFraG1hdC1zZXRpYXdhbi82NC8wMDAwMDAvZXh0ZXJuYWwtYm9vay1iYWNrLXRvLXNjaG9vbC1maWxsZWQtbGluZS1maWxsZWQtbGluZS1yYWtobWF0LXNldGlhd2FuLTQucG5nXFxcIlxcclxcbiAgICAgICAgLz5cXHJcXG4gICAgICAgIDx0aXRsZT5NeSBMaWJyYXJ5PC90aXRsZT5cXHJcXG4gICAgPC9oZWFkPlxcclxcbiAgICA8Ym9keSBjbGFzcz1cXFwiYm9keVxcXCI+XFxyXFxuICAgICAgICA8bWFpbiBjbGFzcz1cXFwibWFpblxcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLSBEZWZhdWx0IE1hcmt1cCAtLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kLWZvcm1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwibWFpbl9fdGl0bGUgZm9udC00MDBcXFwiPk15IExpYnJhcnk8L2gxPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm1haW5fX2J1dHRvbiBidXR0b25cXFwiPkFkZCBuZXcgYm9vazwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1haW5fX2Jvb2tzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJtYWluX19ib29rcy0tdGl0bGUgZm9udC00MDBcXFwiPkJvb2tzPC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidGhlbWUtYnV0dG9uIGJ1dHRvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJ0aGVtZS1pY29uIG1vb25cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwibW9vbiBpY29uXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwidGhlbWUtaWNvbiBzdW5cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwic3VuIGljb25cXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwhLS0gRm9ybSBNYXJrdXAgLS0+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcImZvcm0tY29udGFpbmVyX190aXRsZSBmb250LTQwMFxcXCI+TmV3IEJvb2s8L2gyPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJmb3JtLWNvbnRhaW5lcl9fY2xvc2UtYnRuIGJ1dHRvblxcXCI+JnRpbWVzPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtXFxcIiBub3ZhbGlkYXRlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvcm0tY29udGFpbmVyX19sYWJlbFxcXCI+Qm9vayBOYW1lPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRhaW5lcl9faW5wdXQgaW5wdXQtbmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb3JtLWNvbnRhaW5lcl9fbGFiZWxcXFwiPkJvb2sgQXV0aG9yPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRhaW5lcl9faW5wdXQgaW5wdXQtYXV0aG9yXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiYm9vay1zdGF0dXNcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRhaW5lcl9fbGFiZWxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhdmUgeW91IHJlYWQgaXQ/XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRhaW5lcl9fY2hlY2tib3ggaW5wdXQtY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVxcXCJib29rLXN0YXR1c1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcIm1haW5fX2J1dHRvbiBmb3JtLWNvbnRhaW5lci1idXR0b24gYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgQm9va1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8IS0tIEJvb2tzIENvbnRhaW5lciAtLT5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcImJvb2tzLWNvbnRhaW5lclxcXCI+PC91bD5cXHJcXG4gICAgICAgIDwvbWFpbj5cXHJcXG4gICAgPC9ib2R5PlxcclxcbjwvaHRtbD5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVUb2dnbGUgfSBmcm9tICcuL2RhcmtNb2RlJztcclxuXHJcbi8vIExvYWRzIGFsbCB0aGUgZnVuY3Rpb25zIHRvIGludGVyYWN0IHdpdGggdGhlIGJvb2tzLlxyXG5jb25zdCBib29rQ29udHJvbGxlciA9IChhcnIgPSBib29rc0FycmF5KCkuZ2V0TGlicmFyeSgpKSA9PiB7XHJcbiAgICBkaXNwbGF5Qm9vayhhcnIpO1xyXG4gICAgcmVtb3ZlQm9vaygpO1xyXG4gICAgYm9va1N0YXR1cygpLmNoYW5nZUJvb2tTdGF0dXMoKTtcclxufTtcclxuXHJcbi8vIFN0b3JlIHRoZSBhcnJheSBvZiBib29rcyAtIFJldHVybiBkZSBhcnJheSAtIFB1c2ggSXRlbXMgdG8gdGhlIGFycmF5IC1cclxuLy8gUmVtb3ZlIEVsZW1lbnRzIGZyb20gdGhlIGFycmF5IC0gQ2hhbmdlIHRoZSBzdGF0dXMgcHJvcGVydHkgb2YgdGhlIG9iamVjdHMgaW4gdGhlIGFycmF5IC1cclxuLy8gU2F2ZSB0aGUgYXJyYXkgaW4gdGhlIExvY2FsIFN0b3JhZ2VcclxuY29uc3QgYm9va3NBcnJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG15TGlicmFyeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TGlicmFyeScpKSB8fCBbXTtcclxuXHJcbiAgICBjb25zdCBnZXRMaWJyYXJ5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBteUxpYnJhcnk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldExpYnJhcnkgPSAoYm9vaykgPT4ge1xyXG4gICAgICAgIG15TGlicmFyeS5wdXNoKGJvb2spO1xyXG4gICAgICAgIHNhdmVNeUxpYnJhcnkoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQm9vayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIG15TGlicmFyeS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNhdmVNeUxpYnJhcnkoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIG15TGlicmFyeVtpbmRleF0uc3RhdHVzID0gdmFsdWU7XHJcbiAgICAgICAgc2F2ZU15TGlicmFyeSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzYXZlTXlMaWJyYXJ5ID0gKCkgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215TGlicmFyeScsIEpTT04uc3RyaW5naWZ5KG15TGlicmFyeSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0TGlicmFyeSxcclxuICAgICAgICBzZXRMaWJyYXJ5LFxyXG4gICAgICAgIHJlbW92ZUJvb2ssXHJcbiAgICAgICAgY2hhbmdlU3RhdHVzLFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBCb29rIG9iamVjdFxyXG5jb25zdCBhZGRCb29rID0gKG5hbWUsIGF1dGhvciwgc3RhdHVzKSA9PiB7XHJcbiAgICBib29rc0FycmF5KCkuc2V0TGlicmFyeSh7IG5hbWUsIGF1dGhvciwgc3RhdHVzIH0pOyAvLyBQdXNoIHRoZSBvYmplY3QgdG8gdGhlIGFycmF5XHJcbiAgICBib29rQ29udHJvbGxlcigpOyAvLyBMb2FkIHRoZSBET00gb2YgdGhlIGJvb2tcclxufTtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBBcnJheSBmcm9tIHRoZSBvcmlnaW5hbCBhcnJheSBhbmQgdGhlbiBkaXNwbGF5IGVhY2ggaXRlbVxyXG5jb25zdCBkaXNwbGF5Qm9vayA9IChhcnIpID0+IHtcclxuICAgIGNvbnN0IGJvb2tzVGVtcGxhdGUgPSBhcnIubWFwKFxyXG4gICAgICAgIChib29rKSA9PlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiYm9va3MtY29udGFpbmVyX19pdGVtICR7dGhlbWVUb2dnbGUoKX1cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJvb2tzLWNvbnRhaW5lcl9fdGl0bGUgZm9udC00MDBcIj5cclxuICAgICAgICAgICAgICAgICR7Ym9vay5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rcy1jb250YWluZXJfX2NpcmNsZSAke2Jvb2tTdGF0dXMoYm9vaykuYm9va0NsYXNzKCl9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvb2tzLWNvbnRhaW5lcl9fYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtib29rLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYm9va3MtY29udGFpbmVyX19kZWxldGUgYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcvZGVsZXRlLnN2Z1wiIGFsdD1cIkRlbGV0ZSBib29rIEJ1dHRvblwiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgXHJcbiAgICApO1xyXG5cclxuICAgIGRvbUVsZW1lbnRzKCkuYm9va3NDb250YWluZXIuaW5uZXJIVE1MID0gYm9va3NUZW1wbGF0ZS5qb2luKCcnKTtcclxufTtcclxuLy8gUmVtb3ZlIHRoZSBET00gaXRlbSBhbmQgY2FsbCB0aGUgcmVtb3ZlIG1ldGhvZCBmcm9tIHRoZSBib29rc0FycmF5IC0gVGhpcyBmdW5jdGlvbnMgbG9hZHMgb25jZSB0aGUgcGFnZSBpcyBsb2FkZWRcclxuY29uc3QgcmVtb3ZlQm9vayA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvb2tzID0gZG9tRWxlbWVudHMoKS5ib29rRGVsZXRlO1xyXG5cclxuICAgIEFycmF5LmZyb20oYm9va3MpLmZvckVhY2goKGJvb2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gVGFrZSBhbGwgdGhlIGRlbGV0ZSBidXR0b25zLlxyXG4gICAgICAgIGJvb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvb2sucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYm9va3NBcnJheSgpLnJlbW92ZUJvb2soaW5kZXgpOyAvLyBSZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuXHJcbiAgICAgICAgICAgIGJvb2tDb250cm9sbGVyKCk7IC8vIFJlc2V0IHRoZSBkaXNwbGF5IHRvIG1hdGNoIHRoZSBpbmRleCBvZiB0aGUgYnV0dG9ucyB3aXRoIHRoZSBpbmRleCBvZiB0aGUgYXJyYXlcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gSGFzIDIgbWV0aG9kcy5cclxuLy8gQm9vayBDbGFzcyBpcyBjYWxsZWQgZnJvbSB0aGUgZGlzcGxheSBmdW5jdGlvbiB0byBzZXQgdGhlIGNvbG9yIG9mIHRoZSBsaWdodFxyXG4vLyBDaGFuZ2UgQm9vayBzdGF0dXMgY2hhbmdlIHRoZSBjbGFzcyBvbmNlIHRoZSBidXR0b24gaXMgaGl0IGFuZCBjYWxsIGNoYW5nZSBTdGF0dXMgbWV0aG9kIGZyb20gQm9va3MgQXJyYXkuXHJcbmNvbnN0IGJvb2tTdGF0dXMgPSAoYm9vaykgPT4ge1xyXG4gICAgY29uc3QgYm9va0NsYXNzID0gKCkgPT4gKGJvb2suc3RhdHVzID8gJ2Jvb2tzLWNvbnRhaW5lcl9fZ3JlZW4nIDogJ2Jvb2tzLWNvbnRhaW5lcl9fcmVkJyk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlQm9va1N0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBsaWdodHMgPSBkb21FbGVtZW50cygpLnN0YXR1c0xpZ2h0O1xyXG4gICAgICAgIEFycmF5LmZyb20obGlnaHRzKS5mb3JFYWNoKChsaWdodCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgLy8gVGFrZSBhbGwgdGhlIGNpcmNsZXMgKGxpZ2h0cylcclxuICAgICAgICAgICAgbGlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlnaHQuY2xhc3NMaXN0LmNvbnRhaW5zKCdib29rcy1jb250YWluZXJfX3JlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va3NBcnJheSgpLmNoYW5nZVN0YXR1cyhpbmRleCwgdHJ1ZSk7IC8vIENoYW5nZSB0aGUgc3RhdHVzIGluIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jvb2tzLWNvbnRhaW5lcl9fcmVkJyk7IC8vIENoYW5nZSB0aGUgVUlcclxuICAgICAgICAgICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QuYWRkKCdib29rcy1jb250YWluZXJfX2dyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb2tzQXJyYXkoKS5jaGFuZ2VTdGF0dXMoaW5kZXgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdib29rcy1jb250YWluZXJfX2dyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlnaHQuY2xhc3NMaXN0LmFkZCgnYm9va3MtY29udGFpbmVyX19yZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYm9va0NsYXNzLFxyXG4gICAgICAgIGNoYW5nZUJvb2tTdGF0dXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYm9va0NvbnRyb2xsZXIsIGFkZEJvb2sgfTtcclxuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuLy8gIENoZWNrIHRoZSBjdXJyZW50IHRoZW1lIGluIHRoZSBsb2NhbFN0b3JhZ2VcclxuY29uc3QgdGhlbWVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXJrbW9kZSA9IHRoZW1lU3RvcmFnZSgpO1xyXG4gICAgaWYgKGRhcmttb2RlLmdldFRoZW1lKCkgPT0gJ2VuYWJsZWQnKSB7XHJcbiAgICAgICAgZW5hYmxlRGFya01vZGUoKTtcclxuICAgICAgICByZXR1cm4gJ2RhcmstaXRlbSc7IC8vIFJldHVybiBkYXJrLWl0ZW0gZm9yIHRoZSBib29rcyBpdGVtcyBvbmNlIHRoZXkgYXJlIGNyZWF0ZWQuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBHZXR0ZXIgLSBTZXR0ZXIgb2YgdGhlIGxvY2FsU3RvcmFnZVxyXG5jb25zdCB0aGVtZVN0b3JhZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNldFRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsIHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0VGhlbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFRoZW1lLFxyXG4gICAgICAgIGdldFRoZW1lLFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vIFRoZSBjb250cm9sbGVyIGZ1bmN0aW9uIHdoZW4gdGhlIHVzZXIgY2hhbmdlIHRoZSB0aGVtZSAtIElmIHRoZSBkYXJrIHRoZW1lIGlzIG5vdCBlbmFibGVkICwgaXQgd2lsbCBhY3RpdmF0ZSBpdFxyXG5jb25zdCB0aGVtZUV2ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGFya21vZGUgPSB0aGVtZVN0b3JhZ2UoKTtcclxuICAgIGRhcmttb2RlLmdldFRoZW1lKCkgIT09ICdlbmFibGVkJyA/IGVuYWJsZURhcmtNb2RlKCkgOiBkaXNhYmxlRGFya01vZGUoKTtcclxufTtcclxuXHJcbi8vIEVuYWJsZSB0aGUgZGFyayBtb2RlKFVzZXMgdGhlIGl0ZW1zQXJyYXkgZnVuY3Rpb24gZm9yIHNpbXBsaWNpdHkpXHJcbmNvbnN0IGVuYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBpdGVtc0FycmF5KCk7XHJcblxyXG4gICAgaXRlbXMuZGVmYXVsdEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2RhcmtEZWZhdWx0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyX19pbnB1dC1kYXJrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuYm9va0l0ZW1zKS5mb3JFYWNoKChib29rKSA9PiB7XHJcbiAgICAgICAgYm9vay5jbGFzc0xpc3QuYWRkKCdkYXJrLWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbUVsZW1lbnRzKCkubW9vbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9tRWxlbWVudHMoKS5zdW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZhbHVlIG9mIHRoZSBsb2NhbCBTdG9yYWdlXHJcbiAgICBjb25zdCBsaWdodE1vZGUgPSB0aGVtZVN0b3JhZ2UoJ2VuYWJsZWQnKTtcclxuICAgIGxpZ2h0TW9kZS5zZXRUaGVtZSgpO1xyXG59O1xyXG5cclxuLy8gRGlhYmxlIHRoZSBkYXJrIG1vZGUoVXNlcyB0aGUgaXRlbXNBcnJheSBmdW5jdGlvbiBmb3Igc2ltcGxpY2l0eSlcclxuY29uc3QgZGlzYWJsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBpdGVtc0FycmF5KCk7XHJcblxyXG4gICAgaXRlbXMuZGVmYXVsdEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmtEZWZhdWx0Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuaW5wdXRzKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFpbmVyX19pbnB1dC1kYXJrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGRvbUVsZW1lbnRzKCkuYm9va0l0ZW1zKS5mb3JFYWNoKChib29rKSA9PiB7XHJcbiAgICAgICAgYm9vay5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLWl0ZW0nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbUVsZW1lbnRzKCkubW9vbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGRvbUVsZW1lbnRzKCkuc3VuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZhbHVlIG9mIHRoZSBsb2NhbCBTdG9yYWdlXHJcbiAgICBjb25zdCBkYXJrTW9kZSA9IHRoZW1lU3RvcmFnZShudWxsKTtcclxuICAgIGRhcmtNb2RlLnNldFRoZW1lKCk7XHJcbn07XHJcblxyXG4vLyBTdG9yZSB0aGUgRE9NIGVsZW1lbnRzIHRoYXQgY2hhbmdlIHRoZWlyIHN0eWxlcy5cclxuY29uc3QgaXRlbXNBcnJheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRBcnJheSA9IFtcclxuICAgICAgICBkb21FbGVtZW50cygpLmJvZHksXHJcbiAgICAgICAgZG9tRWxlbWVudHMoKS50aGVtZUJ0bixcclxuICAgICAgICBkb21FbGVtZW50cygpLmZvcm1Db250YWluZXIsXHJcbiAgICAgICAgZG9tRWxlbWVudHMoKS5mb3JtQ29udGFpbmVyQ2xvc2VCdG4sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiB7IGRlZmF1bHRBcnJheSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdGhlbWVUb2dnbGUsIHRoZW1lRXZlbnQgfTtcclxuIiwiLy8gU3RvcmUgYWxsIHRoZSBET00gZWxlbWVudHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgdXNlZC5cclxuY29uc3QgZG9tRWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1idXR0b24nKTtcclxuICAgIGNvbnN0IG1vb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbicpO1xyXG4gICAgY29uc3Qgc3VuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bicpO1xyXG4gICAgY29uc3QgbWFpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19idXR0b24nKTtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udGFpbmVyX19pbnB1dCcpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXJfX2Nsb3NlLWJ0bicpO1xyXG4gICAgY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lLWljb24nKTtcclxuICAgIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItYXJyb3cnKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRPcGFjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtZm9ybScpO1xyXG4gICAgY29uc3QgYm9va05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtbmFtZScpO1xyXG4gICAgY29uc3QgYm9va0F1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1hdXRob3InKTtcclxuICAgIGNvbnN0IGJvb2tTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGJvb2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tzLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYm9va0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tzLWNvbnRhaW5lcl9faXRlbScpO1xyXG4gICAgY29uc3QgYm9va0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rcy1jb250YWluZXJfX2RlbGV0ZScpO1xyXG4gICAgY29uc3Qgc3RhdHVzTGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va3MtY29udGFpbmVyIC5ib29rcy1jb250YWluZXJfX2NpcmNsZScpO1xyXG4gICAgY29uc3QgZmlsdGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1idXR0b24nKTtcclxuICAgIGNvbnN0IGZpbHRlck9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLW9wdGlvbnMnKTtcclxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWRlZmF1bHQnKTtcclxuICAgIGNvbnN0IHJlYWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLXJlYWQnKTtcclxuICAgIGNvbnN0IG5vdHJlYWRPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLW5vcmVhZCcpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGhlbWVCdG4sXHJcbiAgICAgICAgbW9vbixcclxuICAgICAgICBzdW4sXHJcbiAgICAgICAgbWFpbkJ0bixcclxuICAgICAgICBmb3JtLFxyXG4gICAgICAgIGlucHV0cyxcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIGZvcm1Db250YWluZXIsXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lckNsb3NlQnRuLFxyXG4gICAgICAgIHRoZW1lSWNvbixcclxuICAgICAgICBmaWx0ZXJCdG4sXHJcbiAgICAgICAgYmFja2dyb3VuZE9wYWNpdHksXHJcbiAgICAgICAgYm9va05hbWUsXHJcbiAgICAgICAgYm9va0F1dGhvcixcclxuICAgICAgICBib29rU3RhdHVzLFxyXG4gICAgICAgIGJvb2tzQ29udGFpbmVyLFxyXG4gICAgICAgIGJvb2tJdGVtcyxcclxuICAgICAgICBib29rRGVsZXRlLFxyXG4gICAgICAgIHN0YXR1c0xpZ2h0LFxyXG4gICAgICAgIGZpbHRlckJ1dHRvbixcclxuICAgICAgICBmaWx0ZXJPcHRpb25zLFxyXG4gICAgICAgIGRlZmF1bHRPcHRpb24sXHJcbiAgICAgICAgcmVhZE9wdGlvbixcclxuICAgICAgICBub3RyZWFkT3B0aW9uLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRvbUVsZW1lbnRzIH07XHJcbiIsImltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IGFkZEJvb2sgfSBmcm9tICcuL2Jvb2tzJztcclxuLy8gVUkgd2hlbiB0aGUgZm9ybSBpcyBvcGVuXHJcbmNvbnN0IG9wZW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShkb21FbGVtZW50cygpLmlucHV0cykuZm9yRWFjaCgoaW5wdXQpID0+IChpbnB1dC52YWx1ZSA9ICcnKSk7XHJcbiAgICBkb21FbGVtZW50cygpLmJhY2tncm91bmRPcGFjaXR5LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtZm9ybV9fYWN0aXZlJyk7XHJcbiAgICBkb21FbGVtZW50cygpLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXJfX2FjdGl2ZScpO1xyXG5cclxuICAgIGRvbUVsZW1lbnRzKCkuYmFja2dyb3VuZE9wYWNpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xyXG4gICAgZG9tRWxlbWVudHMoKS5mb3JtQ29udGFpbmVyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xyXG59O1xyXG5cclxuLy8gUmVtb3ZlIHRoZSBmb3JtIFVJLiAoRm9ybSBjbG9zZWQpXHJcbmNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IHtcclxuICAgIGRvbUVsZW1lbnRzKCkuYmFja2dyb3VuZE9wYWNpdHkuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZC1mb3JtX19hY3RpdmUnKTtcclxuICAgIGRvbUVsZW1lbnRzKCkuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRhaW5lcl9fYWN0aXZlJyk7XHJcbiAgICBkb21FbGVtZW50cygpLmJvb2tOYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWVycm9yJyk7XHJcbiAgICBkb21FbGVtZW50cygpLmJvb2tBdXRob3IuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZXJyb3InKTtcclxufTtcclxuXHJcbi8vIEZvcm0gVmFsaWRhdGlvblxyXG5jb25zdCBmb3JtVmFsaWRhdGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGJvb2tOYW1lID0gZG9tRWxlbWVudHMoKS5ib29rTmFtZTtcclxuICAgIGNvbnN0IGJvb2tBdXRob3IgPSBkb21FbGVtZW50cygpLmJvb2tBdXRob3I7XHJcbiAgICBjb25zdCBib29rU3RhdHVzID0gZG9tRWxlbWVudHMoKS5ib29rU3RhdHVzO1xyXG4gICAgLy8gVHJ1ZSBpZiBzb21lIGlucHV0IHZhbGlkYXRpb24gaXMgZmFsc2UgLSBGYWxzZSBpZiBhbGwgdGhlIGlucHV0cyB2YWxpZGF0aW9ucyBhcmUgdHJ1ZVxyXG4gICAgY29uc3QgZm9ybUVycm9yID0gW2Jvb2tOYW1lLmNoZWNrVmFsaWRpdHkoKSwgYm9va0F1dGhvci5jaGVja1ZhbGlkaXR5KCldLnNvbWUoKGl0ZW0pID0+ICFpdGVtKTtcclxuXHJcbiAgICBpZiAoIWJvb2tOYW1lLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIGlucHV0RXJyb3IoYm9va05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYm9va0F1dGhvci5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICBpbnB1dEVycm9yKGJvb2tBdXRob3IpO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgZm9ybSBlcnJvciBpcyBmYWxzZSwgY2FsbCBhZGRCb29rIGZyb20gYm9vay5qc1xyXG4gICAgaWYgKCFmb3JtRXJyb3IpIHtcclxuICAgICAgICBhZGRCb29rKGJvb2tOYW1lLnZhbHVlLCBib29rQXV0aG9yLnZhbHVlLCBib29rU3RhdHVzLmNoZWNrZWQpO1xyXG4gICAgICAgIGNsb3NlRm9ybSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gVUkgd2hlbiBzb21lIGlucHV0IGlzIHdyb25nLlxyXG5jb25zdCBpbnB1dEVycm9yID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmIChlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5kYXRhc2V0LmVycm9yKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5JztcclxuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xyXG4gICAgbWVzc2FnZS5kYXRhc2V0LmVycm9yID0gJ2ludmFsaWRJbnB1dCc7XHJcblxyXG4gICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtZXNzYWdlLCBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZyk7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1lcnJvcicpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZS1oaWRlJyk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgfSwgMjAwMCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBvcGVuRm9ybSwgY2xvc2VGb3JtLCBmb3JtVmFsaWRhdGUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCBodG1sIGZyb20gJy4uL2luZGV4Lmh0bWwnO1xyXG5pbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZVRvZ2dsZSwgdGhlbWVFdmVudCB9IGZyb20gJy4vZGFya01vZGUnO1xyXG5pbXBvcnQgeyBvcGVuRm9ybSwgZm9ybVZhbGlkYXRlIH0gZnJvbSAnLi9mb3JtRXZlbnRzJztcclxuaW1wb3J0IHsgYm9va0NvbnRyb2xsZXIgfSBmcm9tICcuL2Jvb2tzJztcclxuXHJcbmNvbnN0IGFwcEluaXQgPSAoKSA9PiB7XHJcbiAgICB0aGVtZVRvZ2dsZSgpO1xyXG4gICAgYm9va0NvbnRyb2xsZXIoKTtcclxuICAgIGRvbUVsZW1lbnRzKCkudGhlbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGVtZUV2ZW50KTtcclxuICAgIGRvbUVsZW1lbnRzKCkubWFpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcclxuICAgIGRvbUVsZW1lbnRzKCkuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmb3JtVmFsaWRhdGUpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFwcEluaXQpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=