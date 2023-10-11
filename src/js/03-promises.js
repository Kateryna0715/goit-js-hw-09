import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const { delay, step, amount } = form.elements;
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let currentDelay = 0;
  for (let i = 0; i < amount.value; i++) {
    currentDelay = Number(delay.value) + Number(step.value) * i;
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
