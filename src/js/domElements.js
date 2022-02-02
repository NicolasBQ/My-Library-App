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

export { domElements };
