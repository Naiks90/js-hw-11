const refs = {
  timer: document.querySelector('#timer-1'),
};
const daysRef = refs.timer.querySelector("[data-value='days']");
const hoursRef = refs.timer.querySelector("[data-value='hours']");
const minsRef = refs.timer.querySelector("[data-value='mins']");
const secsRef = refs.timer.querySelector("[data-value='secs']");

setInterval(() => {
  const targetDate = new Date('Jan 1, 2022');
  const nowDate = Date.now();
  let time = targetDate - nowDate;
  updaitetaimer(time);
}, 0);

function updaitetaimer(time) {
  const days = pads(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minsRef.textContent = mins;
  secsRef.textContent = secs;
}
function pad(value) {
  return String(value).padStart(2, '0');
}
function pads(value) {
  return String(value).padStart(3, '0');
}
