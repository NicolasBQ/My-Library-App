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




/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterActive": () => (/* binding */ filterActive)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");


const filterActive = (e) => {
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().filterBtn.classList.toggle('filter-arrow__active');
    (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().filterOptions.classList.toggle('filter-options__active');
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
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");
/* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./darkMode */ "./src/js/darkMode.js");
/* harmony import */ var _formEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formEvents */ "./src/js/formEvents.js");
/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books */ "./src/js/books.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter */ "./src/js/filter.js");







const appInit = () => {
    (0,_darkMode__WEBPACK_IMPORTED_MODULE_2__.themeToggle)();
    (0,_books__WEBPACK_IMPORTED_MODULE_4__.bookController)();
    (0,_domElements__WEBPACK_IMPORTED_MODULE_1__.domElements)().themeBtn.addEventListener('click', _darkMode__WEBPACK_IMPORTED_MODULE_2__.themeEvent);
    (0,_domElements__WEBPACK_IMPORTED_MODULE_1__.domElements)().mainBtn.addEventListener('click', _formEvents__WEBPACK_IMPORTED_MODULE_3__.openForm);
    (0,_domElements__WEBPACK_IMPORTED_MODULE_1__.domElements)().form.addEventListener('submit', _formEvents__WEBPACK_IMPORTED_MODULE_3__.formValidate);
    (0,_domElements__WEBPACK_IMPORTED_MODULE_1__.domElements)().filterButton.addEventListener('click', _filter__WEBPACK_IMPORTED_MODULE_5__.filterActive);
};

document.addEventListener('DOMContentLoaded', appInit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDaUI7QUFDUztBQUNDO0FBQ2I7QUFDRDtBQUN4QztBQUNBO0FBQ0EsSUFBSSxzREFBVztBQUNmLElBQUksc0RBQWM7QUFDbEIsSUFBSSx5REFBVyxzQ0FBc0MsaURBQVU7QUFDL0QsSUFBSSx5REFBVyxxQ0FBcUMsaURBQVE7QUFDNUQsSUFBSSx5REFBVyxtQ0FBbUMscURBQVk7QUFDOUQsSUFBSSx5REFBVywwQ0FBMEMsaURBQVk7QUFDckU7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9zY3NzL21haW4uc2Nzcz9jYmI3Iiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvYm9va3MuanMiLCJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9qcy9kYXJrTW9kZS5qcyIsIndlYnBhY2s6Ly9teWJvb2tzLy4vc3JjL2pzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvZmlsdGVyLmpzIiwid2VicGFjazovL215Ym9va3MvLi9zcmMvanMvZm9ybUV2ZW50cy5qcyIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215Ym9va3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWJvb2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXlib29rcy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZVRvZ2dsZSB9IGZyb20gJy4vZGFya01vZGUnO1xyXG5cclxuLy8gTG9hZHMgYWxsIHRoZSBmdW5jdGlvbnMgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgYm9va3MuXHJcbmNvbnN0IGJvb2tDb250cm9sbGVyID0gKG5hbWUsIGF1dGhvciwgc3RhdHVzKSA9PiB7XHJcbiAgICBhZGRCb29rKG5hbWUsIGF1dGhvciwgc3RhdHVzKTtcclxuICAgIGRpc3BsYXlCb29rKCk7XHJcbiAgICByZW1vdmVCb29rKCk7XHJcbiAgICBib29rU3RhdHVzKCkuY2hhbmdlQm9va1N0YXR1cygpO1xyXG59O1xyXG5cclxuLy8gU3RvcmUgdGhlIGFycmF5IG9mIGJvb2tzIC0gUmV0dXJuIGRlIGFycmF5IC0gUHVzaCBJdGVtcyB0byB0aGUgYXJyYXkgLVxyXG4vLyBSZW1vdmUgRWxlbWVudHMgZnJvbSB0aGUgYXJyYXkgLSBDaGFuZ2UgdGhlIHN0YXR1cyBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyBpbiB0aGUgYXJyYXkgLVxyXG4vLyBTYXZlIHRoZSBhcnJheSBpbiB0aGUgTG9jYWwgU3RvcmFnZVxyXG5jb25zdCBib29rc0FycmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbXlMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlMaWJyYXJ5JykpIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IGdldExpYnJhcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG15TGlicmFyeTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0TGlicmFyeSA9IChib29rKSA9PiB7XHJcbiAgICAgICAgbXlMaWJyYXJ5LnB1c2goYm9vayk7XHJcbiAgICAgICAgc2F2ZU15TGlicmFyeSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVCb29rID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgbXlMaWJyYXJ5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2F2ZU15TGlicmFyeSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXlMaWJyYXJ5W2luZGV4XSk7XHJcbiAgICAgICAgLy8gbXlMaWJyYXJ5W2luZGV4XS5zdGF0dXMgPSB2YWx1ZTtcclxuICAgICAgICBzYXZlTXlMaWJyYXJ5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNhdmVNeUxpYnJhcnkgPSAoKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlMaWJyYXJ5JywgSlNPTi5zdHJpbmdpZnkobXlMaWJyYXJ5KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRMaWJyYXJ5LFxyXG4gICAgICAgIHNldExpYnJhcnksXHJcbiAgICAgICAgcmVtb3ZlQm9vayxcclxuICAgICAgICBjaGFuZ2VTdGF0dXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IEJvb2sgb2JqZWN0IC0gVGhpcyBmdW5jdGlvbnMgbG9hZHMgb25jZSB0aGUgcGFnZSBpcyBsb2FkZWQsIHRoYXQncyB3aHkgaXQgcmV0dXJucyBpZiB0aGUgbmFtZSBpcyBmYWxzeVxyXG5jb25zdCBhZGRCb29rID0gKG5hbWUsIGF1dGhvciwgc3RhdHVzKSA9PiB7XHJcbiAgICBpZiAoIW5hbWUpIHJldHVybjtcclxuXHJcbiAgICBib29rc0FycmF5KCkuc2V0TGlicmFyeSh7IG5hbWUsIGF1dGhvciwgc3RhdHVzIH0pO1xyXG4gICAgZGlzcGxheUJvb2soKTtcclxuICAgIHJlbW92ZUJvb2soKTtcclxufTtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBBcnJheSBmcm9tIHRoZSBvcmlnaW5hbCBhcnJheSBhbmQgdGhlbiBkaXNwbGF5IGVhY2ggaXRlbVxyXG5jb25zdCBkaXNwbGF5Qm9vayA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvb2tzVGVtcGxhdGUgPSBib29rc0FycmF5KClcclxuICAgICAgICAuZ2V0TGlicmFyeSgpXHJcbiAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgKGJvb2spID0+XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiYm9va3MtY29udGFpbmVyX19pdGVtICR7dGhlbWVUb2dnbGUoKX1cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJvb2tzLWNvbnRhaW5lcl9fdGl0bGUgZm9udC00MDBcIj5cclxuICAgICAgICAgICAgICAgICR7Ym9vay5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rcy1jb250YWluZXJfX2NpcmNsZSAke2Jvb2tTdGF0dXMoYm9vaykuYm9va0NsYXNzKCl9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvb2tzLWNvbnRhaW5lcl9fYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtib29rLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYm9va3MtY29udGFpbmVyX19kZWxldGUgYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcvZGVsZXRlLnN2Z1wiIGFsdD1cIkRlbGV0ZSBib29rIEJ1dHRvblwiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICBgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBkb21FbGVtZW50cygpLmJvb2tzQ29udGFpbmVyLmlubmVySFRNTCA9IGJvb2tzVGVtcGxhdGUuam9pbignJyk7XHJcbn07XHJcbi8vIFJlbW92ZSB0aGUgRE9NIGl0ZW0gYW5kIGNhbGwgdGhlIHJlbW92ZSBtZXRob2QgZnJvbSB0aGUgYm9va3NBcnJheSAtIFRoaXMgZnVuY3Rpb25zIGxvYWRzIG9uY2UgdGhlIHBhZ2UgaXMgbG9hZGVkXHJcbmNvbnN0IHJlbW92ZUJvb2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib29rcyA9IGRvbUVsZW1lbnRzKCkuYm9va0RlbGV0ZTtcclxuXHJcbiAgICBBcnJheS5mcm9tKGJvb2tzKS5mb3JFYWNoKChib29rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGJvb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJvb2sucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYm9va3NBcnJheSgpLnJlbW92ZUJvb2soaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBIYXMgMiBtZXRob2RzLlxyXG4vLyBCb29rIENsYXNzIGlzIGNhbGxlZCBmcm9tIHRoZSBkaXNwbGF5IGZ1bmN0aW9uIHRvIHNldCB0aGUgY29sb3Igb2YgdGhlIGxpZ2h0XHJcbi8vIENoYW5nZSBCb29rIHN0YXR1cyBjaGFuZ2UgdGhlIGNsYXNzIG9uY2UgdGhlIGJ1dHRvbiBpcyBoaXQgYW5kIGNhbGwgY2hhbmdlIFN0YXR1cyBtZXRob2QgZnJvbSBCb29rcyBBcnJheS5cclxuY29uc3QgYm9va1N0YXR1cyA9IChib29rKSA9PiB7XHJcbiAgICBjb25zdCBib29rQ2xhc3MgPSAoKSA9PiAoYm9vay5zdGF0dXMgPyAnYm9va3MtY29udGFpbmVyX19ncmVlbicgOiAnYm9va3MtY29udGFpbmVyX19yZWQnKTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VCb29rU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpZ2h0cyA9IGRvbUVsZW1lbnRzKCkuc3RhdHVzTGlnaHQ7XHJcbiAgICAgICAgQXJyYXkuZnJvbShsaWdodHMpLmZvckVhY2goKGxpZ2h0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsaWdodC5jbGFzc0xpc3QuY29udGFpbnMoJ2Jvb2tzLWNvbnRhaW5lcl9fcmVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBib29rc0FycmF5KCkuY2hhbmdlU3RhdHVzKGluZGV4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdib29rcy1jb250YWluZXJfX3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0LmNsYXNzTGlzdC5hZGQoJ2Jvb2tzLWNvbnRhaW5lcl9fZ3JlZW4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va3NBcnJheSgpLmNoYW5nZVN0YXR1cyhpbmRleCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2Jvb2tzLWNvbnRhaW5lcl9fZ3JlZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWdodC5jbGFzc0xpc3QuYWRkKCdib29rcy1jb250YWluZXJfX3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib29rQ2xhc3MsXHJcbiAgICAgICAgY2hhbmdlQm9va1N0YXR1cyxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBib29rQ29udHJvbGxlciB9O1xyXG5cclxuLy8gQXJyZWdsYXIgSW5kZXggU3RhdHVzXHJcbi8vIFNlbGVjY2lvbmFyIENvbG9yZXMgZGUgZmlsdGVyIHkgYWdyZWdhcmxvIGEgRGFya01vZGVcclxuLy8gR2VuZXJhciBkaXNwbGF5IGRlIGxvcyBpdGVtcyBmaWx0cmFkb3MuXHJcbiIsImltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbi8vICBDaGVjayB0aGUgY3VycmVudCB0aGVtZSBpbiB0aGUgbG9jYWxTdG9yYWdlXHJcbmNvbnN0IHRoZW1lVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGFya21vZGUgPSB0aGVtZVN0b3JhZ2UoKTtcclxuICAgIGlmIChkYXJrbW9kZS5nZXRUaGVtZSgpID09ICdlbmFibGVkJykge1xyXG4gICAgICAgIGVuYWJsZURhcmtNb2RlKCk7XHJcbiAgICAgICAgcmV0dXJuICdkYXJrLWl0ZW0nOyAvLyBSZXR1cm4gZGFyay1pdGVtIGZvciB0aGUgYm9va3MgaXRlbXMgb25jZSB0aGV5IGFyZSBjcmVhdGVkLlxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gR2V0dGVyIC0gU2V0dGVyIG9mIHRoZSBsb2NhbFN0b3JhZ2VcclxuY29uc3QgdGhlbWVTdG9yYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZXRUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRUaGVtZSxcclxuICAgICAgICBnZXRUaGVtZSxcclxuICAgIH07XHJcbn07XHJcblxyXG4vLyBUaGUgY29udHJvbGxlciBmdW5jdGlvbiB3aGVuIHRoZSB1c2VyIGNoYW5nZSB0aGUgdGhlbWUgLSBJZiB0aGUgZGFyayB0aGVtZSBpcyBub3QgZW5hYmxlZCAsIGl0IHdpbGwgYWN0aXZhdGUgaXRcclxuY29uc3QgdGhlbWVFdmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhcmttb2RlID0gdGhlbWVTdG9yYWdlKCk7XHJcbiAgICBkYXJrbW9kZS5nZXRUaGVtZSgpICE9PSAnZW5hYmxlZCcgPyBlbmFibGVEYXJrTW9kZSgpIDogZGlzYWJsZURhcmtNb2RlKCk7XHJcbn07XHJcblxyXG4vLyBFbmFibGUgdGhlIGRhcmsgbW9kZShVc2VzIHRoZSBpdGVtc0FycmF5IGZ1bmN0aW9uIGZvciBzaW1wbGljaXR5KVxyXG5jb25zdCBlbmFibGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gaXRlbXNBcnJheSgpO1xyXG5cclxuICAgIGl0ZW1zLmRlZmF1bHRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkYXJrRGVmYXVsdCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgQXJyYXkuZnJvbShkb21FbGVtZW50cygpLmlucHV0cykuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcl9faW5wdXQtZGFyaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgQXJyYXkuZnJvbShkb21FbGVtZW50cygpLmJvb2tJdGVtcykuZm9yRWFjaCgoYm9vaykgPT4ge1xyXG4gICAgICAgIGJvb2suY2xhc3NMaXN0LmFkZCgnZGFyay1pdGVtJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdGVtcy5pY29uc0FycmF5LmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgICBpY29uLmVsZW1lbnQuc3JjID0gaWNvbi5kYXJrU3JjO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2hhbmdlIHRoZSB2YWx1ZSBvZiB0aGUgbG9jYWwgU3RvcmFnZVxyXG4gICAgY29uc3QgbGlnaHRNb2RlID0gdGhlbWVTdG9yYWdlKCdlbmFibGVkJyk7XHJcbiAgICBsaWdodE1vZGUuc2V0VGhlbWUoKTtcclxufTtcclxuXHJcbi8vIERpYWJsZSB0aGUgZGFyayBtb2RlKFVzZXMgdGhlIGl0ZW1zQXJyYXkgZnVuY3Rpb24gZm9yIHNpbXBsaWNpdHkpXHJcbmNvbnN0IGRpc2FibGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gaXRlbXNBcnJheSgpO1xyXG5cclxuICAgIGl0ZW1zLmRlZmF1bHRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrRGVmYXVsdCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgQXJyYXkuZnJvbShkb21FbGVtZW50cygpLmlucHV0cykuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRhaW5lcl9faW5wdXQtZGFyaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgQXJyYXkuZnJvbShkb21FbGVtZW50cygpLmJvb2tJdGVtcykuZm9yRWFjaCgoYm9vaykgPT4ge1xyXG4gICAgICAgIGJvb2suY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1pdGVtJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdGVtcy5pY29uc0FycmF5LmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgICBpY29uLmVsZW1lbnQuc3JjID0gaWNvbi5saWdodFNyYztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoYW5nZSB0aGUgdmFsdWUgb2YgdGhlIGxvY2FsIFN0b3JhZ2VcclxuICAgIGNvbnN0IGRhcmtNb2RlID0gdGhlbWVTdG9yYWdlKG51bGwpO1xyXG4gICAgZGFya01vZGUuc2V0VGhlbWUoKTtcclxufTtcclxuXHJcbi8vIFN0b3JlIHRoZSBET00gZWxlbWVudHMgdGhhdCBjaGFuZ2UgdGhlaXIgc3R5bGVzLlxyXG5jb25zdCBpdGVtc0FycmF5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdEFycmF5ID0gW1xyXG4gICAgICAgIGRvbUVsZW1lbnRzKCkuYm9keSxcclxuICAgICAgICBkb21FbGVtZW50cygpLnRoZW1lQnRuLFxyXG4gICAgICAgIGRvbUVsZW1lbnRzKCkuZm9ybUNvbnRhaW5lcixcclxuICAgICAgICBkb21FbGVtZW50cygpLmZvcm1Db250YWluZXJDbG9zZUJ0bixcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgaWNvbnNBcnJheSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IGRvbUVsZW1lbnRzKCkudGhlbWVJY29uLFxyXG4gICAgICAgICAgICBkYXJrU3JjOiAnLi4vc3JjL2ltZy9zdW4uc3ZnJyxcclxuICAgICAgICAgICAgbGlnaHRTcmM6ICcuLi9zcmMvaW1nL21vb24uc3ZnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZWxlbWVudDogZG9tRWxlbWVudHMoKS5maWx0ZXJCdG4sXHJcbiAgICAgICAgICAgIGRhcmtTcmM6ICcuLi9zcmMvaW1nL2Fycm93LXdoaXRlLnN2ZycsXHJcbiAgICAgICAgICAgIGxpZ2h0U3JjOiAnLi4vc3JjL2ltZy9hcnJvdy5zdmcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiB7IGRlZmF1bHRBcnJheSwgaWNvbnNBcnJheSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdGhlbWVUb2dnbGUsIHRoZW1lRXZlbnQgfTtcclxuIiwiLy8gU3RvcmUgYWxsIHRoZSBET00gZWxlbWVudHMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgdXNlZC5cclxuY29uc3QgZG9tRWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1idXR0b24nKTtcclxuICAgIGNvbnN0IG1haW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fYnV0dG9uJyk7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWNvbnRhaW5lcl9faW5wdXQnKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpO1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lckNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyX19jbG9zZS1idG4nKTtcclxuICAgIGNvbnN0IHRoZW1lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZS1pY29uJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWFycm93Jyk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kT3BhY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLWZvcm0nKTtcclxuICAgIGNvbnN0IGJvb2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LW5hbWUnKTtcclxuICAgIGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtYXV0aG9yJyk7XHJcbiAgICBjb25zdCBib29rU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWNoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBib29rc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rcy1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGJvb2tJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib29rcy1jb250YWluZXJfX2l0ZW0nKTtcclxuICAgIGNvbnN0IGJvb2tEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va3MtY29udGFpbmVyX19kZWxldGUnKTtcclxuICAgIGNvbnN0IHN0YXR1c0xpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvb2tzLWNvbnRhaW5lcl9fY2lyY2xlJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItb3B0aW9ucycpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGhlbWVCdG4sXHJcbiAgICAgICAgbWFpbkJ0bixcclxuICAgICAgICBmb3JtLFxyXG4gICAgICAgIGlucHV0cyxcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIGZvcm1Db250YWluZXIsXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lckNsb3NlQnRuLFxyXG4gICAgICAgIHRoZW1lSWNvbixcclxuICAgICAgICBmaWx0ZXJCdG4sXHJcbiAgICAgICAgYmFja2dyb3VuZE9wYWNpdHksXHJcbiAgICAgICAgYm9va05hbWUsXHJcbiAgICAgICAgYm9va0F1dGhvcixcclxuICAgICAgICBib29rU3RhdHVzLFxyXG4gICAgICAgIGJvb2tzQ29udGFpbmVyLFxyXG4gICAgICAgIGJvb2tJdGVtcyxcclxuICAgICAgICBib29rRGVsZXRlLFxyXG4gICAgICAgIHN0YXR1c0xpZ2h0LFxyXG4gICAgICAgIGZpbHRlckJ1dHRvbixcclxuICAgICAgICBmaWx0ZXJPcHRpb25zLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRvbUVsZW1lbnRzIH07XHJcbiIsImltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcblxyXG5jb25zdCBmaWx0ZXJBY3RpdmUgPSAoZSkgPT4ge1xyXG4gICAgZG9tRWxlbWVudHMoKS5maWx0ZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnZmlsdGVyLWFycm93X19hY3RpdmUnKTtcclxuICAgIGRvbUVsZW1lbnRzKCkuZmlsdGVyT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdmaWx0ZXItb3B0aW9uc19fYWN0aXZlJyk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBmaWx0ZXJBY3RpdmUgfTtcclxuIiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgYm9va0NvbnRyb2xsZXIgfSBmcm9tICcuL2Jvb2tzJztcclxuXHJcbmNvbnN0IG9wZW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShkb21FbGVtZW50cygpLmlucHV0cykuZm9yRWFjaCgoaW5wdXQpID0+IChpbnB1dC52YWx1ZSA9ICcnKSk7XHJcbiAgICBkb21FbGVtZW50cygpLmJhY2tncm91bmRPcGFjaXR5LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtZm9ybV9fYWN0aXZlJyk7XHJcbiAgICBkb21FbGVtZW50cygpLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXJfX2FjdGl2ZScpO1xyXG5cclxuICAgIGRvbUVsZW1lbnRzKCkuYmFja2dyb3VuZE9wYWNpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xyXG4gICAgZG9tRWxlbWVudHMoKS5mb3JtQ29udGFpbmVyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xyXG59O1xyXG5cclxuY29uc3QgY2xvc2VGb3JtID0gKCkgPT4ge1xyXG4gICAgZG9tRWxlbWVudHMoKS5iYWNrZ3JvdW5kT3BhY2l0eS5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZ3JvdW5kLWZvcm1fX2FjdGl2ZScpO1xyXG4gICAgZG9tRWxlbWVudHMoKS5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFpbmVyX19hY3RpdmUnKTtcclxuICAgIGRvbUVsZW1lbnRzKCkuYm9va05hbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZXJyb3InKTtcclxuICAgIGRvbUVsZW1lbnRzKCkuYm9va0F1dGhvci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1lcnJvcicpO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybVZhbGlkYXRlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBib29rTmFtZSA9IGRvbUVsZW1lbnRzKCkuYm9va05hbWU7XHJcbiAgICBjb25zdCBib29rQXV0aG9yID0gZG9tRWxlbWVudHMoKS5ib29rQXV0aG9yO1xyXG4gICAgY29uc3QgYm9va1N0YXR1cyA9IGRvbUVsZW1lbnRzKCkuYm9va1N0YXR1cztcclxuICAgIGNvbnN0IGZvcm1FcnJvciA9IFtib29rTmFtZS5jaGVja1ZhbGlkaXR5KCksIGJvb2tBdXRob3IuY2hlY2tWYWxpZGl0eSgpXS5zb21lKChpdGVtKSA9PiAhaXRlbSk7XHJcblxyXG4gICAgaWYgKCFib29rTmFtZS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICBpbnB1dEVycm9yKGJvb2tOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJvb2tBdXRob3IuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgaW5wdXRFcnJvcihib29rQXV0aG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZvcm1FcnJvcikge1xyXG4gICAgICAgIGJvb2tDb250cm9sbGVyKGJvb2tOYW1lLnZhbHVlLCBib29rQXV0aG9yLnZhbHVlLCBib29rU3RhdHVzLmNoZWNrZWQpO1xyXG4gICAgICAgIGNsb3NlRm9ybSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgaW5wdXRFcnJvciA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZGF0YXNldC5lcnJvcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtZXNzYWdlLmlubmVyVGV4dCA9ICdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eSc7XHJcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UnKTtcclxuICAgIG1lc3NhZ2UuZGF0YXNldC5lcnJvciA9ICdpbnZhbGlkSW5wdXQnO1xyXG5cclxuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWVzc2FnZSwgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZXJyb3InKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UtaGlkZScpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5yZW1vdmUoKTtcclxuICAgIH0sIDIwMDApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgb3BlbkZvcm0sIGNsb3NlRm9ybSwgZm9ybVZhbGlkYXRlIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lVG9nZ2xlLCB0aGVtZUV2ZW50IH0gZnJvbSAnLi9kYXJrTW9kZSc7XHJcbmltcG9ydCB7IG9wZW5Gb3JtLCBmb3JtVmFsaWRhdGUgfSBmcm9tICcuL2Zvcm1FdmVudHMnO1xyXG5pbXBvcnQgeyBib29rQ29udHJvbGxlciB9IGZyb20gJy4vYm9va3MnO1xyXG5pbXBvcnQgeyBmaWx0ZXJBY3RpdmUgfSBmcm9tICcuL2ZpbHRlcic7XHJcblxyXG5jb25zdCBhcHBJbml0ID0gKCkgPT4ge1xyXG4gICAgdGhlbWVUb2dnbGUoKTtcclxuICAgIGJvb2tDb250cm9sbGVyKCk7XHJcbiAgICBkb21FbGVtZW50cygpLnRoZW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhlbWVFdmVudCk7XHJcbiAgICBkb21FbGVtZW50cygpLm1haW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybSk7XHJcbiAgICBkb21FbGVtZW50cygpLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZm9ybVZhbGlkYXRlKTtcclxuICAgIGRvbUVsZW1lbnRzKCkuZmlsdGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVyQWN0aXZlKTtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhcHBJbml0KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9