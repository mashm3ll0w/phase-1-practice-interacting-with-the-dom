let currentTime = parseInt(document.getElementById("counter").textContent.replace(/\s/g, ''))
let domTimer = document.getElementById("counter")

function timerCount(){
  setInterval(() => {
    currentTime += 1
    domTimer.textContent = currentTime

  }, 1000)
}

document.addEventListener("DOMContentLoaded", () => {
  timerCount()
})