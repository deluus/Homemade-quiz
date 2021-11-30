var initials = document.querySelector('initials')
var startButton = document.getElementById("start-button");
var timerEl = document.getElementById('countdown');
var startScreen = document.querySelector('.start-screen')
var questionTitle = document.querySelector('#questionTitle');
var endScreen = document.querySelector('#endScreen');
var currentScore = document.querySelector('#finalScore');
var submitButton = document.querySelector('#submit');
var restartButton = document.querySelector('#restart')


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


function startQuiz() {
    startScreen.setAttribute('class', 'hide');
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
            return ;
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


function submitInitials(){
    var highscoresArray = JSON.parse (localStorage.getItem('highScore')) || []
    var score = timeLeft
    var initials = document.querySelector('#initials').value
    var currentScore = {
        score : score,
        initials : initials,
    }
    highscoresArray.push(currentScore)

    localStorage.setItem("highScore",JSON.stringify(highscoresArray) );

    
    window.location = "scores.html";

  
}



startButton.addEventListener('click', startQuiz);

