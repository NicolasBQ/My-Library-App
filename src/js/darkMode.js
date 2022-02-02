import { domElements } from './domElements';
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

    Array.from(domElements().inputs).forEach((input) => {
        input.classList.add('form-container__input-dark');
    });

    Array.from(domElements().bookItems).forEach((book) => {
        book.classList.add('dark-item');
    });

    domElements().themeIcon.src = './img/sun.svg';
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

    Array.from(domElements().inputs).forEach((input) => {
        input.classList.remove('form-container__input-dark');
    });

    Array.from(domElements().bookItems).forEach((book) => {
        book.classList.remove('dark-item');
    });

    domElements().themeIcon.src = './img/moon.svg';
    // Change the value of the local Storage
    const darkMode = themeStorage(null);
    darkMode.setTheme();
};

// Store the DOM elements that change their styles.
const itemsArray = () => {
    const defaultArray = [
        domElements().body,
        domElements().themeBtn,
        domElements().formContainer,
        domElements().formContainerCloseBtn,
    ];

    return { defaultArray };
};

export { themeToggle, themeEvent };
