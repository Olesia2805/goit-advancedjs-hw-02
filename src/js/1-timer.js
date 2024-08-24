import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btnStart = document.querySelector('.btn-calendar');
const inputStart = document.querySelector('.input-calendar');
btnStart.setAttribute('disabled', true);

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() <= options.defaultDate.getTime()) {
      iziToast.error({
        title: '',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      btnStart.setAttribute('disabled', true);
      return;
    } else {
      btnStart.removeAttribute('disabled');
    }
  },
};

flatpickr('.input-calendar', options);

const timer = {
  deadline: null,

  elemements: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },

  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      const diff = this.deadline.getTime() - Date.now();

      if (diff <= 0) {
        this.stop();
        inputStart.removeAttribute('disabled');
        return;
      }

      const { days, hours, minutes, seconds } = this.convertMs(diff);

      this.elemements.days.textContent = this.pad(days);
      this.elemements.hours.textContent = this.pad(hours);
      this.elemements.minutes.textContent = this.pad(minutes);
      this.elemements.seconds.textContent = this.pad(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};

btnStart.addEventListener('click', () => {
  if (userSelectedDate) {
    timer.deadline = userSelectedDate;
    timer.start();
    btnStart.setAttribute('disabled', true);
    inputStart.setAttribute('disabled', true);
  }
});
