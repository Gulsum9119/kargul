document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.menu-burger_header');
    const nav = document.querySelector('.nav');

    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active'); // Переключаем класс active для навигации
    });
});