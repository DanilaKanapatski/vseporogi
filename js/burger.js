document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.fullscreen-menu');
    const body = document.body;

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            // В самом верху страницы - показываем хедер
            header.classList.remove('hide');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('hide')) {
            // Прокрутка вниз - скрываем хедер
            header.classList.add('hide');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            // Прокрутка вверх - показываем хедер
            header.classList.remove('hide');
        }

        lastScroll = currentScroll;
    });
});