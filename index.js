const fortuneButton = document.getElementById("fortune-button")
const fortuneDisplay = document.getElementById("fortune-display")
let len = Object.keys(emojis).length

fortuneButton.onclick = (event) => {
  let eResults = getEmojis()
  let displayEmojis = emojis[eResults[0]] + " " + emojis[eResults[1]] + " " + emojis[eResults[2]]
  fortuneDisplay.style.opacity = 0
  fortuneDisplay.innerText = displayEmojis
  revealFortune()
}

function getEmojis(){
  let first = parseInt(Math.random() * len)
  let second = parseInt(Math.random() * len)
  let third = parseInt(Math.random() * len)
  return [first, second, third]
}

function revealFortune(){
  let opacity = 0
  let interval = window.setInterval(lessenOpacity, 100)
  function lessenOpacity(){
    if (opacity < 1){
      fortuneDisplay.style.opacity = opacity
      opacity += .02
  } else {
    clearInterval(interval)
  }
}
}
