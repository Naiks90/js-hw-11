class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerRefs = document.querySelector(this.selector);
    this.daysRef = this.timerRefs.querySelector("[data-value='days']");
    this.hoursRef = this.timerRefs.querySelector("[data-value='hours']");
    this.minsRef = this.timerRefs.querySelector("[data-value='mins']");
    this.secsRef = this.timerRefs.querySelector("[data-value='secs']");
  }
  showDate() {
    console.log(this.timerRefs);
    console.log(this.targetDate);
  }
  runTimer() {
    setInterval(() => {
      let time = this.targetDate - Date.now();
      this.updaitetaimer(time);
    }, 1);
  }
  updaitetaimer(time) {
    this.daysRef.textContent = this.pads(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hoursRef.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.minsRef.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secsRef.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  pads(value) {
    return String(value).padStart(3, '0');
  }
}

const a = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
});

a.runTimer();
