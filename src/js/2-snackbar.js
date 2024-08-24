import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const promiseState = () => {
  const form = document.querySelector('.form');

  return new Promise((resolve, reject) => {
    form.addEventListener('submit', event => {
      event.preventDefault();

      const inputDelay = parseInt(document.querySelector('.input-delay').value);
      const state = form.elements.state.value;

      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(inputDelay);
        } else {
          reject(inputDelay);
        }
      }, inputDelay);
    });
  });
};

promiseState()
  .then(delay => {
    iziToast.success({
      title: '',
      message: `✅ Fulfilled promise in ${delay}ms`,
      position: 'topRight',
    });
  })
  .catch(delay => {
    iziToast.error({
      title: '',
      message: `❌ Rejected promise in ${delay}ms`,
      position: 'topRight',
    });
  });
