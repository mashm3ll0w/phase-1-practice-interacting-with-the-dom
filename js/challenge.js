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

document.addEventListener("DOMContentLoaded", () => {
  
  timerCount()
  
  document.getElementById("minus").addEventListener("click", minusButton)
  document.getElementById("plus").addEventListener("click", plusButton)
  document.getElementById("comment-form").addEventListener("submit", addComment)
})