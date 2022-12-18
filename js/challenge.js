let currentTime = parseInt(document.getElementById("counter").textContent.replace(/\s/g, ''))
let domTimer = document.getElementById("counter")
seconds = setInterval(incrementTime, 1000)


function incrementTime(){
  currentTime += 1
  domTimer.textContent = currentTime
}

function minusButton(){
  currentTime -= 1
  domTimer.textContent = currentTime
}

function plusButton(){
  currentTime += 1
  domTimer.textContent = currentTime
}

function addComment(e){
  e.preventDefault()
  if(e.target["comment-input"].value !== ""){
    const commentList = document.createElement("ul")
    const comment = `<li>${e.target["comment-input"].value}</li>`
    commentList.innerHTML += comment
    document.getElementById("list").appendChild(commentList)
    e.target["comment-input"].value = ""
  }
}

function pauseCounter(e){
  clearInterval(seconds)
  e.target.innerText = "resume"
  const buttons = ["minus", "plus", "heart", "submit"]
  buttons.forEach(button => {
    document.getElementById(button).disabled = true
  })
}

document.addEventListener("DOMContentLoaded", () => {  
  
  
  document.getElementById("minus").addEventListener("click", minusButton)
  document.getElementById("plus").addEventListener("click", plusButton)
  document.getElementById("comment-form").addEventListener("submit", addComment)
  document.getElementById("pause").addEventListener("click", pauseCounter)

})