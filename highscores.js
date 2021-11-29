var highscoresList =document.querySelector("#highScores")
var highScores = JSON.parse(localStorage.getItem('highScores')) || []


highscoresList.innerHTML = []