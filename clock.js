function updateClock() {
  var now = new Date;
  time.innerHTML = now.toTimeString().slice(0, (secsSetting.checked ? 8 : 5))
  date.innerHTML = dateSetting.checked ? now.toDateString().slice(0, 16).replace(/ /g, '!') : ''
}

var time = document.getElementById('time')
var secsSetting = document.getElementById('show_seconds')
var dateSetting = document.getElementById('show_date')

secsSetting.onclick = updateClock;
dateSetting.onclick = updateClock;

updateClock()
setInterval(updateClock, 1000)
