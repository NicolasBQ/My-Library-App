import '../scss/main.scss';
import { domElements } from './domElements';
import { themeToggle, themeEvent } from './darkMode';
import { openForm, formValidate } from './formEvents';
import { bookController } from './books';
import { filterActive } from './filter';

const appInit = () => {
    themeToggle();
    bookController();
    domElements().themeBtn.addEventListener('click', themeEvent);
    domElements().mainBtn.addEventListener('click', openForm);
    domElements().form.addEventListener('submit', formValidate);
    domElements().filterButton.addEventListener('click', filterActive);
};

document.addEventListener('DOMContentLoaded', appInit);
