document.addEventListener('DOMContentLoaded', function() {
    const divider = document.getElementById('divider');
    const container = document.querySelector('.comparison-container');
    const before = document.querySelector('.before');
    const after = document.querySelector('.after');
    let isDragging = false;

    function updatePosition(clientX) {
        const rect = container.getBoundingClientRect();
        let posX = clientX - rect.left;
        posX = Math.max(0, Math.min(posX, rect.width));
        const percentage = (posX / rect.width) * 100;

        before.style.width = `${percentage}%`;
        after.style.width = `${100 - percentage}%`;
        after.style.left = `${percentage}%`;
        divider.style.left = `${percentage}%`;
    }

    // Мышь
    divider.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updatePosition(e.clientX);
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Сенсорные устройства
    divider.addEventListener('touchstart', (e) => {
        isDragging = true;
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updatePosition(e.touches[0].clientX);
    }, { passive: false });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });
});