let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

document.getElementById("start").addEventListener("click", () => {
  if (timer !== null) return; // Prevent multiple timers
  timer = setInterval(updateTime, 1000);
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.textContent = "00:00:00";
});

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = `${h}:${m}:${s}`;
}
