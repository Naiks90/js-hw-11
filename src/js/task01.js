const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodeRef = document.querySelector('body');
const btnStartRef = document.querySelector('button[data-action=start]');
const btnStopRef = document.querySelector('button[data-action=stop]');
let timerID = null;
let isActive = false;

btnStartRef.addEventListener('click', interval);
btnStopRef.addEventListener('click', stopRandomColor);

function interval() {
  if (isActive) {
    return;
  }
  isActive = true;
  timerID = setInterval(randomColor, 1000);
}

function randomColor() {
  bodeRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}
function stopRandomColor() {
  clearInterval(timerID);
}
