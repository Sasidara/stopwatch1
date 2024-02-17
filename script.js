function Stopwatch() {
  let timer;
  let startTime;
  let elapsedTime = 0;
  let laps = [];

  this.startStop = function() {
    if (!timer) {
      startTime = new Date().getTime() - elapsedTime;
      timer = setInterval(updateTime.bind(this), 10);
      document.getElementById("startStop").innerText = "Stop";
    } else {
      clearInterval(timer);
      timer = null;
      document.getElementById("startStop").innerText = "Start";
    }
  };

  this.reset = function() {
    clearInterval(timer);
    timer = null;
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startStop").innerText = "Start";
    document.getElementById("laps").innerHTML = "";
    laps = [];
  };

  this.updateTime = function() {
    let currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    let minutes = Math.floor(elapsedTime / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    document.getElementById("display").innerText = ${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)};
  };

  this.formatTime = function(time) {
    return time < 10 ? 0${time} : time;
  };

  this.lap = function() {
    if (timer) {
      laps.push(elapsedTime);
      let lapTime = laps[laps.length - 1];
      let minutes = Math.floor(lapTime / (1000 * 60));
      let seconds = Math.floor((lapTime % (1000 * 60)) / 1000);
      let milliseconds = Math.floor((lapTime % 1000) / 10);
      let lapItem = document.createElement("li");
      lapItem.innerText = ${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)};
      document.getElementById("laps").appendChild(lapItem);
    }
  };
}
