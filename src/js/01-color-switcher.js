function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', handleStart);
refs.btnStop.addEventListener('click', handleStop);
let idStart = null;

function handleStart() {
  idStart = setInterval(() => {
    refs.btnStart.disabled = 'true';
    refs.btnStop.disabled = '';
    const bgColor = getRandomHexColor();
    refs.body.style.backgroundColor = bgColor;
  }, 1000);
}

function handleStop() {
  clearInterval(idStart);
  refs.btnStart.disabled = '';
  refs.btnStop.disabled = 'true';
}
