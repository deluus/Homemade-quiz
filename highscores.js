var userName = document.querySelector('#initials')
var highScoresList = document.querySelector("#highScores");
var saveScoreButton = document.querySelector('#saveScoreButton');
// var mostRecentScore = document.querySelector('#mostRecentScore');


var uL = document.getElementById("highscoresList")




function addElement(){
    var node = document.createElement("ul");
    var textNode = document.createTextNode("highscoresList")
    node.appendchild(textNode);
    document.getElementById("highscoresList").appendchild(node);
}
function addElement (){
    var newLi = document.createElement("li");
    var newContent = document.createTextNode ("HighScore")
    newLi.appendchild(newContent);
    var currentLi = document.getElementById('highscoresList');
    document.body.insertBefore(newLi, currentLi)
}




function displayScore(){
    var highScores = JSON.parse(localStorage.getItem('highScore')) || []


for (var i = 0; i < highScores.length; i ++){
    var li = document.createElement("li")
    li.innerHTML = highScores[i].initials, highScores[i].score;
    uL.append(li)

}

return;
}
