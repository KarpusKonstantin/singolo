// элементы для навигационного меню
const burgerList = document.getElementById('burger-list');
const BURGER = document.getElementById('burger-menu');
const burgerMenu = document.getElementsByClassName("burger-menu")[0];

// элементы для портфолио
const TAG = document.getElementById('tag');
const GALLERY = document.getElementById('gallery');
const galleryItem = document.getElementsByClassName("gallery__item");

// элементы для phone
const phone1 = document.getElementsByClassName("phone__vertical")[0];
const phone2 = document.getElementsByClassName("phone__vertical")[1];

// элементы для карусели
let items = document.querySelectorAll('.slider__item');
let currentItem = 0;
let isEnabled = true;

// добавляем класс к навигации при нажатии
document.getElementById('menu').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        document.querySelectorAll('.menu-item').forEach((item) => {
            item.classList.remove('active');
        });

        event.target.parentElement.classList.add('active');
    }
});

// добавляем класс к бургер кнопке для анимации
BURGER.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('burger-menu--active');
    document.getElementsByClassName("overlay")[0].classList.toggle('hidden');
    document.getElementsByClassName("burger-menu__nav")[0].classList.toggle('burger-menu__nav--active');
});

// добавляем класс к навигации при скролле
document.addEventListener('scroll',(event) => {
    const currentPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('#menu a');
    const burgerLinks = document.querySelectorAll('#burger-list a');
    sections.forEach((el) => {
        // console.log(el.getAttribute('id'));
        if ((el.offsetTop - 100) <= currentPosition && (el.offsetTop + el.offsetHeight - 100) > currentPosition) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            });
            burgerLinks.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });
});

// добавляем класс к tag при нажатии
// И перемешиваем картинки
TAG.addEventListener('click', (event) => {
    TAG.querySelectorAll('span').forEach(elem => elem.classList.remove('active'));
    event.target.classList.add('active');
    for (let i = 0; i < galleryItem.length; i++) {
        galleryItem[i].style.order = Math.round(Math.random() * 50);
    }
});

// Скрываем изображение картинки на телефонах
phone1.addEventListener('click', (event) => {
    document.getElementsByClassName("phone__display")[0].classList.toggle('hidden');
});

phone2.addEventListener('click', (event) => {
    document.getElementsByClassName("phone__display")[1].classList.toggle('hidden');
});

// Слайдер
// Номер текущего слайда
function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
    // console.log(currentItem);
    document.getElementsByClassName("slider")[0].classList.toggle('active');
}

// скрытие/показ слайдов - работа анимации
function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}

// добавляем/удаляем индекс слайда
function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

// Клик по нашим стрелкам и вызов функций для переключения
document.querySelector('.slider-control.prev').addEventListener('click', function() {
    // changeCurrentItem(currentItem-1);
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.slider-control.next').addEventListener('click', function() {
    // changeCurrentItem(currentItem-1);
    if (isEnabled) {
        nextItem(currentItem);
    }
});

// Рамка для портфолио
GALLERY.addEventListener('click', (event) => {
    GALLERY.querySelectorAll('img').forEach(elem => elem.classList.remove('js-frame'));
    // console.log(event.target);
    event.target.classList.add('js-frame');
});

