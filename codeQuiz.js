var startButton = document.getElementById("start-button");
var timerEl = document.getElementById('countdown');
var startScreen = document.querySelector('.start-screen')
var questionTitle = document.querySelector('#questionTitle');
var endScreen = document.querySelector('#endScreen');
var finalScore = document.querySelector('#finalScore');
var submitButton = document.querySelector('#submit');


var choicesEl = document.querySelector('#choices')
var timeLeft = 100;
var timerId;
var questionPointer = 0;
var shuffledQuestions
var questionsEl = document.getElementById('questions');
var questions = [
    { 
        question: "what the are the main components for a refrigeration system?",
        choices: [
            "Compressor,Condesor,Metering Device, Suction line",
            "Metering Device, Gauges, Filter Dryer,Reservior",
            "Compressor, Evaporator, Condeser, Metering Device",
            "Sensing Bulb, Liquid Line, Fan, Switch"       
        ], 
        correct: "Compressor, Evaporator, Condeser, Metering Device"
    },
   { 
        question: "what is one type of compressor?",
        choices: [
            "Screw",
            "TXV",
            "Capilary",
            "Suction"       
        ], 
        correct: "Screw"
    },
    { 
        question: "what state is the refrigerant in , when it leaves the evaportator?",
        choices: [
            "Liquid",
            "100 % Vapor",
            "Saturated Vapor",
            "Sub-Cooled Liquid"       
        ], 
        correct: "100 % Vapor"
    },
];

// window.onload = function(){

//     HighScoresArray =localStorage.getItem("highscores");
//     HighScoresArray.push(currentScores)

// }
function startQuiz() {
    startScreen.setAttribute('class', 'hide');
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    // questionPointer= 0
    questionsEl.removeAttribute('class');
    timer()
    nextQuestion()
}



function timer(){
    var timeInterval = setInterval (function(){
        timeLeft -- ;
        timerEl.textContent = timeLeft;

        if(timeLeft === 0) {
            timerEl.textContent = "";
            clearInterval(timeInterval);

            alert("Game Over")
        }

        if(questionPointer === questions.length) {
            clearInterval(timeInterval);
        }

    }, 1000);
    if (timeLeft === 0){
        return;
    }

}

function nextQuestion() {
    var currentQuestion = questions[questionPointer];
    questionTitle.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute('value', choice);

        choiceBtn.textContent = i+1+'. ' + choice;

        choiceBtn.onclick = answerQuestion;
        choicesEl.appendChild(choiceBtn);
    })
}

function answerQuestion() {
    if(this.value !== questions[questionPointer].correct) {
        timeLeft -= 15;

        if(timeLeft < 0) {
            timeLeft = 0;
        }
        
        timerEl.textContent = timeLeft;
    }

    questionPointer++;
    
    if(questionPointer === questions.length) {
        quizOver();
    } else {
        nextQuestion();
    }
}

function quizOver() {
    endScreen.removeAttribute('class');
    finalScore.textContent = timeLeft;
    questionsEl.setAttribute('class', 'hide');
    
submitButton.addEventListener('click', submitInitials);
}

var HighScoresArray = []

function submitInitials(){
    var score = timeLeft
    var initials = document.querySelector('#initials').value
    var currentScores = {
        score : score,
        initials : initials
    }
    HighScoresArray.push(currentScores)

    // console.log(score)
    // console.log(initials)
    localStorage.setItem("highscores",JSON.stringify(HighScoresArray) )
    
   
    // window.location.href = (scores.html)

    // for ( i = 0; i < localStorage.length; i ++){
    //     score=localStorage.score(i)
    //     initials=localStorage.getItem(score);
    // }

}


startButton.addEventListener('click', startQuiz);
