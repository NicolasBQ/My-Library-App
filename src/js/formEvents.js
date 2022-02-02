import { domElements } from './domElements';
import { addBook } from './books';
// UI when the form is open
const openForm = () => {
    Array.from(domElements().inputs).forEach((input) => (input.value = ''));
    domElements().backgroundOpacity.classList.add('background-form__active');
    domElements().formContainer.classList.add('form-container__active');

    domElements().backgroundOpacity.addEventListener('click', closeForm);
    domElements().formContainerCloseBtn.addEventListener('click', closeForm);
};

// Remove the form UI. (Form closed)
const closeForm = () => {
    domElements().backgroundOpacity.classList.remove('background-form__active');
    domElements().formContainer.classList.remove('form-container__active');
    domElements().bookName.classList.remove('input-error');
    domElements().bookAuthor.classList.remove('input-error');
};

// Form Validation
const formValidate = (e) => {
    e.preventDefault();

    const bookName = domElements().bookName;
    const bookAuthor = domElements().bookAuthor;
    const bookStatus = domElements().bookStatus;
    // True if some input validation is false - False if all the inputs validations are true
    const formError = [bookName.checkValidity(), bookAuthor.checkValidity()].some((item) => !item);

    if (!bookName.checkValidity()) {
        inputError(bookName);
    }

    if (!bookAuthor.checkValidity()) {
        inputError(bookAuthor);
    }
    // If form error is false, call addBook from book.js
    if (!formError) {
        addBook(bookName.value, bookAuthor.value, bookStatus.checked);
        closeForm();
    }
};

// UI when some input is wrong.
const inputError = (element) => {
    if (element.nextElementSibling.dataset.error) return;

    const message = document.createElement('span');
    message.innerText = 'This field cannot be empty';
    message.classList.add('error-message');
    message.dataset.error = 'invalidInput';

    element.parentNode.insertBefore(message, element.nextElementSibling);

    element.classList.add('input-error');

    setTimeout(() => {
        message.classList.add('error-message-hide');
    }, 1000);

    setTimeout(() => {
        message.remove();
    }, 2000);
};

export { openForm, closeForm, formValidate };
