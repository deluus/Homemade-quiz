var highScoresList = document.querySelector("#highScores")
var saveScoreButton = document.querySelector('#saveScoreButton')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = document.querySelector('#mostRecentScore')

var highScores = JSON.parse(localStorage.getItem('highScores')) || []

console.log(highScores)

// finalScore.innerHTML = mostRecentScore

// highScoresList.addEventListener( 'click') 


function displayScore(){

highScoresList.innerHTML = localStorage.getItem('highScores')
}