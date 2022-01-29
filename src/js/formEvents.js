const openForm = () => {
    const backgroundOpacity = document.querySelector('.background-form');
    const formContainer = document.querySelector('.form-container');
    const closeBtn = document.querySelector('.form-container__close-btn');
    const bookName = document.querySelector('.input-name');
    const bookAuthor = document.querySelector('.input-author');

    backgroundOpacity.classList.add('background-form__active');
    formContainer.classList.add('form-container__active');

    backgroundOpacity.addEventListener('click', () => {
        backgroundOpacity.classList.remove('background-form__active');
        formContainer.classList.remove('form-container__active');
        bookName.classList.remove('input-error');
        bookAuthor.classList.remove('input-error');
    });

    closeBtn.addEventListener('click', () => {
        backgroundOpacity.classList.remove('background-form__active');
        formContainer.classList.remove('form-container__active');
        bookName.classList.remove('input-error');
        bookAuthor.classList.remove('input-error');
    });
};

const formValidate = (e) => {
    e.preventDefault();

    const bookName = document.querySelector('.input-name');
    const bookAuthor = document.querySelector('.input-author');

    if (!bookName.checkValidity()) {
        inputError(bookName);
    }

    if (!bookAuthor.checkValidity()) {
        inputError(bookAuthor);
        return;
    }

    console.log('poo');
};

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

export { openForm, formValidate };
