class Countdown {
    constructor() {
        this.daysEl = document.querySelector('.days');
        this.hoursEl = document.querySelector('.hours');
        this.minutesEl = document.querySelector('.minutes');
        this.secondsEl = document.querySelector('.seconds');
        this.totalSeconds = 3 * 24 * 60 * 60; // 3 дня в секундах
        this.interval = null;
        this.start();
    }

    start() {
        this.interval = setInterval(() => {
            this.updateCountdown();
            this.totalSeconds--;

            if (this.totalSeconds < 0) {
                this.reset();
            }
        }, 1000);
    }

    updateCountdown() {
        const days = Math.floor(this.totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((this.totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((this.totalSeconds % (60 * 60)) / 60);
        const seconds = this.totalSeconds % 60;

        this.updateDigits(this.daysEl, days);
        this.updateDigits(this.hoursEl, hours);
        this.updateDigits(this.minutesEl, minutes);
        this.updateDigits(this.secondsEl, seconds);
    }

    updateDigits(element, value) {
        const str = value.toString().padStart(2, '0');
        const digits = element.querySelectorAll('.digit');
        digits[0].textContent = str[0];
        digits[1].textContent = str[1];
    }

    reset() {
        clearInterval(this.interval);
        this.totalSeconds = 3 * 24 * 60 * 60;
        this.start();
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new Countdown();
});