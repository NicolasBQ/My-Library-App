import '../scss/main.scss';
import html from '../index.html';
import { domElements } from './domElements';
import { themeToggle, themeEvent } from './darkMode';
import { openForm, formValidate } from './formEvents';
import { bookController } from './books';

const appInit = () => {
    themeToggle();
    bookController();
    domElements().themeBtn.addEventListener('click', themeEvent);
    domElements().mainBtn.addEventListener('click', openForm);
    domElements().form.addEventListener('submit', formValidate);
};

document.addEventListener('DOMContentLoaded', appInit);
