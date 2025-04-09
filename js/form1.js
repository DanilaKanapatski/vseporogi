document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('form-1');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-popup');
    const form = document.getElementById('application-form');

    openBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
        document.body.classList.add('blurred');
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.classList.remove('blurred');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Здесь можно добавить обработку формы (отправку на сервер)
        alert('Заявка отправлена! Мы скоро с вами свяжемся.');
        popup.style.display = 'none';
        document.body.classList.remove('blurred');
        form.reset();
    });

    // Закрытие попапа при клике вне его области
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.classList.remove('blurred');
        }
    });
});