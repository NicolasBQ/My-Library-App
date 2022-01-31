import { domElements } from './domElements';
import { themeToggle } from './darkMode';

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
                <img src="../src/img/delete.svg" alt="Delete book Button"/>
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
        const lights = domElements().statusLight;
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

export { bookController };

// Arreglar Index Status
// Seleccionar Colores de filter y agregarlo a DarkMode
// Generar display de los items filtrados.
