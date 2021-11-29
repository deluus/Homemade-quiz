var userName = document.querySelector('#initials')
var highScoresList = document.querySelector("#highScores");
var saveScoreButton = document.querySelector('#saveScoreButton');
// var mostRecentScore = document.querySelector('#mostRecentScore');


var UL = document.getElementById("highscoresList")




function addElement(){
    var node = document.createElement("Ul");
    var textNode = document.createTextNode("highscoresList")
    node.appendchild(textNode);
    document.getElementById("highscoresList").appendchild(node);
}
function addElement (){
    var newLi = document.createElement("Li");
    var newContent = document.createTextNode ("High Scores")
    newLi.appendchild(newContent);
    var currentLi = document.getElementById('highscoresList');
    document.body.insertBefore(newLi, currentLi)
}




function displayScore(){
    // var finalScore = JSON.parse(localStorage.getItem('HighScoresArray'))
    var highScores = JSON.parse(localStorage.getItem('highScores')) || []
    console.log(highScores)
highScores.forEach(element => (element));

for (var i = 0; i < highScores.length; i ++){
    var li = document.createElement("li")
    li.innerHTML = initials, score;
    UL.append(li)

}


}
