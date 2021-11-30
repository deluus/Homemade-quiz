var userName = document.querySelector('#highscoresList')
var highScoresList = document.querySelector("#highScores");
var saveScoreButton = document.querySelector('#saveScoreButton');
var mostRecentScore = localStorage.getItem('#mostRecentScore');
var maxScores= 5;


var ul = document.getElementById("highscoresList")




function addElement(){
    var node = document.createElement("ul");
    var textNode = document.createTextNode("highscoresList")
    node.appendchild(textNode);
    document.getElementById("highscoresList").appendchild(node);
}
function addElement (){
    var newLi = document.createElement("li");
    var newContent = document.createTextNode ("highScore")
    newLi.appendchild(newContent);
    var currentLi = document.getElementById('highscoresList');
    document.body.insertBefore(newLi, currentLi)
}




function displayScore(){
    var highScores = JSON.parse(localStorage.getItem('highScore')) || []
    
// console.log(highScores)


// var score = {
//     score : highScores,
//     name:  highScoresList
// };
// console.log(score)

for (var i = 0; i < highScores.length; i ++){
    var li = document.createElement("li")
    li.innerHTML = highScores[i].initials + " - " + highScores[i].score;
    ul.append(li)
    
   
   highScores.sort((a,b) => b.score - a.score)
   highScores.splice(5);
   localStorage.setItem("highScores", JSON.stringify(highScores));
   
  
   } 
}
 

 displayScore();

