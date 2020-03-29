/* Скрипт для вывода модального окна */

const BUTTON = document.getElementById('submit-btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const modal = document.getElementById('modal');
const span_close = document.getElementsByClassName("close")[0];


BUTTON.addEventListener('click', (event) => {
    console.log(event);

    event.preventDefault();

    let name = document.getElementById('form-name').validity.valid;
    let mail = document.getElementById('form-mail').validity.valid;
    let subject = document.getElementById('form-subject').value.toString();
    let description = document.getElementById('form-descr').value.toString();

    if (!name || !mail) {
        alert("Заполните поле name или mail");
    } else {
        document.getElementById('modal-subject').innerText = subject ? `Тема: ${subject}` : 'Без темы'
        document.getElementById('modal-describe').innerText = description ? `Описание: ${description}` : 'Без описания';
        modal.classList.remove('hidden');
    }
});

// закрытие модального окна
// Закрытие по кнопке закрыть
CLOSE_BUTTON.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.getElementById('form').reset();
});

// Закрытие по кнопке х
span_close.addEventListener('click', (event) => {
    modal.classList.add('hidden');
});

// Закрытие при клике вне модального окна
window.addEventListener('click',(event) => {
    const overlay = document.getElementsByClassName("overlay")[0];
    if (event.target === modal) {
        modal.classList.add('hidden');
    }

    if (event.target === overlay) {
        // console.log('click');
        document.getElementsByClassName("burger-menu__nav")[0].classList.remove('burger-menu__nav--active');
        overlay.classList.add('hidden');
        document.getElementById('burger-menu').classList.remove('burger-menu--active');
    }
});
