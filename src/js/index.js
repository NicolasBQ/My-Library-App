import '../scss/main.scss';
import { themeToggle, themeEvent } from './darkMode';
import { openForm, formValidate } from './formEvents';

const appInit = () => {
    themeToggle();
    const themeBtn = document.querySelector('.theme-button');
    const mainBtn = document.querySelector('.main__button');
    const form = document.querySelector('.form');

    themeBtn.addEventListener('click', themeEvent);
    mainBtn.addEventListener('click', openForm);
    form.addEventListener('submit', formValidate);
};

document.addEventListener('DOMContentLoaded', appInit);
