import { domElements } from './domElements';
import { themeToggle } from './darkMode';

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
        <li class="books-container__item ${themeToggle()}">
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
                <div class="delete-button"></div>
            </button>
        </li>
        `
    );

    domElements().booksContainer.innerHTML = booksTemplate.join('');
};
// Remove the DOM item and call the remove method from the booksArray - This functions loads once the page is loaded
const removeBook = () => {
    const books = domElements().bookDelete;

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
        const lights = domElements().statusLight;
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

export { bookController, addBook };
