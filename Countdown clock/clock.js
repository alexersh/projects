const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

setInterval(function countdown () {

  let now = new Date();
  let newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0);  

  let Secs = Math.floor(((newYear - now) / 1000) % 60);
  let Mins = Math.floor((newYear - now) / 1000 / 60 % 60);
  let Hours = Math.floor(((newYear - now) / 1000 / 60 / 60) % 24);
  let Days = Math.floor((newYear - now) / 1000 / 60 / 60 / 24);

  days.textContent = Days;
  hours.textContent = Hours;
  minutes.textContent = Mins;
  seconds.textContent = Secs;
}, 1000);
