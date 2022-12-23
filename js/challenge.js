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

function resumeCounter(e){
  seconds = setInterval(incrementTime, 1000)
  e.target.innerText = "pause"
  const buttons = ["minus", "plus", "heart", "submit"]
  buttons.forEach(button => {
    document.getElementById(button).disabled = false
  })
}

function likeNumber() {
  const likesContainer = document.querySelector(".likes")
  let counter = document.getElementById("counter")
  let likedTime = parseInt(counter.innerText)
  let likedCounter
  
  // Keep track of the liked numbers in an array
  let likedNumArr = []
  for (let child of likesContainer.children){ 
    likedNumArr.push(parseInt(child.dataset.likedNum))
  }

  // Check if the number liked is already in the likedNumArr and add the times liked if found
  if (likedNumArr.includes(likedTime)) {
      likedCounter = document.querySelector(`[data-liked-num="${likedTime}"]`);
      let likedTimes = parseInt(likedCounter.children[0].innerText);
      likedCounter.innerHTML = likedTime + " has been liked <span>" + (likedTimes + 1) + "</span> times";
  } 
  else {
    likedCounter = document.createElement("li")
    likedCounter.dataset.likedNum = likedTime 
    likedCounter.innerHTML = likedTime + " has been liked <span>1</span> time"
    likesContainer.appendChild(likedCounter);
  }
}

document.addEventListener("DOMContentLoaded", () => {  
   
  document.getElementById("minus").addEventListener("click", minusButton)
  document.getElementById("plus").addEventListener("click", plusButton)
  document.getElementById("comment-form").addEventListener("submit", addComment)
  document.getElementById("pause").addEventListener("click", (e) => {
    if(e.target.innerText === "pause"){
      pauseCounter(e)
    }
    else{
      resumeCounter(e)
    }
  })

  document.getElementById("heart").addEventListener("click", likeNumber)
})