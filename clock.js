function updateClock() {
  document.getElementById('clock').innerHTML = (new Date).toTimeString().slice(0, 8)
}

updateClock()
setInterval(updateClock, 1000)
