const dropCont1 = document.querySelector('.nav-link__drop-cont');
const about = document.querySelector('.first-about');
let isHoveringAbout = false; // Флаг для отслеживания состояния наведения
let isHoveringMenu = false;  // Флаг для отслеживания состояния наведения на меню

// Функция для отображения меню с анимацией
function showMenu() {
    dropCont1.style.display = 'block'; // Делаем элемент видимым
    dropCont1.classList.add('visible'); // Добавляем класс для анимации
}

// Функция для скрытия меню с анимацией
function hideMenu() {
    if (!isHoveringAbout && !isHoveringMenu) {
        dropCont1.classList.remove('visible'); // Убираем анимацию
        setTimeout(() => {
            dropCont.style.display = 'none'; // Скрываем элемент после завершения анимации
        }, 300); // Задержка по времени анимации (300ms)
    }
}

// Наведение на .about
about.addEventListener('mouseenter', () => {
    isHoveringAbout = true;
    showMenu(); // Показываем меню
});

about.addEventListener('mouseleave', () => {
    isHoveringAbout = false;
    hideMenu(); // Прячем меню, если нет других активных состояний
});

// Наведение на .nav-link__drop-cont
dropCont1.addEventListener('mouseenter', () => {
    isHoveringMenu = true;
    showMenu(); // Показываем меню
});

dropCont1.addEventListener('mouseleave', () => {
    isHoveringMenu = false;
    hideMenu(); // Прячем меню, если нет других активных состояний
});
