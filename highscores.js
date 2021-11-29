var highScoresList = document.querySelector("#highScores");
var saveScoreButton = document.querySelector('#saveScoreButton');
var mostRecentScore = document.querySelector('#mostRecentScore');


var highScores = JSON.parse(localStorage.getItem('highScores')) || []
highScores.forEach(element => (element));

var UL = document.getElementById("highscoresList").innerHTML="";
console.log(UL)

// function addElement (){
//     var newLi = document.createElement("Li");
//     var newContent = document.createTextNode ("High Scores")
//     newLi.appendchild(HighScoresArray);
//     var currentLi = document.getElementById('highscoresList');
//     document.body.insertBefore(newLi, currentLi)
// }
// console.log(currentLi)



function displayScore(){
    var finalScore = localStorage.getItem('highScores')

highScoresList.innerHTML = localStorage.getItem('highScores')
}
