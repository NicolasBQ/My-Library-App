import '../scss/main.scss';
import {
    themeToggle,
    themeEvent,
} from './darkMode';
import { openForm } from './newBook';

const appInit = () => {
    themeToggle();
    const themeBtn = document.querySelector(
        '.theme-button'
    );
    const mainBtn = document.querySelector(
        '.main__button'
    );

    themeBtn.addEventListener(
        'click',
        themeEvent
    );

    mainBtn.addEventListener('click', openForm);
};

document.addEventListener(
    'DOMContentLoaded',
    appInit
);
