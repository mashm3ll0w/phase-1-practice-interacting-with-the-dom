let currentTime = parseInt(document.getElementById("counter").textContent.replace(/\s/g, ''))
let domTimer = document.getElementById("counter")

function timerCount(){
  setInterval(() => {
    currentTime += 1
    domTimer.textContent = currentTime

  }, 1000)
}

function minusButton(){
  currentTime -= 1
  domTimer.textContent = currentTime
}

function plusButton(){
  currentTime += 1
  domTimer.textContent = currentTime
}


document.addEventListener("DOMContentLoaded", () => {
  
  timerCount()
  
  document.getElementById("minus").addEventListener("click", minusButton)
  document.getElementById("plus").addEventListener("click", plusButton)
})