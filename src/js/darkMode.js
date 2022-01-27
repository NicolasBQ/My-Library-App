const themeToggle = () => {
    const darkmode = themeStorage();
    if (darkmode.getTheme() == 'enabled') {
        enableDarkMode();
    }
};

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

const themeEvent = () => {
    const darkmode = themeStorage();

    darkmode.getTheme() !== 'enabled'
        ? enableDarkMode()
        : disableDarkMode();
};

const enableDarkMode = () => {
    document
        .querySelector('.body')
        .classList.add('dark-body');
    document
        .querySelector('.theme-button')
        .classList.add('button__dark');
    document.querySelector('.theme-icon').src =
        '../src/img/sun.svg';
    document.querySelector('.filter-arrow').src =
        '../src/img/arrow-white.svg';

    const lightMode = themeStorage('enabled');
    lightMode.setTheme();
};

const disableDarkMode = () => {
    document
        .querySelector('.body')
        .classList.remove('dark-body');
    document
        .querySelector('.theme-button')
        .classList.remove('button__dark');
    document.querySelector('.theme-icon').src =
        '../src/img/moon.svg';
    document.querySelector('.filter-arrow').src =
        '../src/img/arrow.svg';

    const darkMode = themeStorage(null);
    darkMode.setTheme();
};

export { themeToggle, themeEvent };
