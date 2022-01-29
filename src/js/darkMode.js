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

export { themeToggle, themeEvent };
