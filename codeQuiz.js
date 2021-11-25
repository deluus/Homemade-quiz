var startButton = document.getElementById("start-button");
var timerEl = document.getElementById('countdown');
var startScreen = document.querySelector('.start-screen')
var questionTitle = document.querySelector('#questionTitle');
var endScreen = document.querySelector('#endScreen');
var finalScore = document.querySelector('#finalScore');

var choicesEl = document.querySelector('#choices')
var timeLeft = 100;
var timerId;
var questionPointer = 0;
var questionsEl = document.getElementById('questions');
var questions = [
    { 
        question: "whats your favorite color?",
        choices: [
            "Yellow",
            "Green",
            "Blue",
            "Pink"       
        ], 
        correct: "Green"
    },

    
];

// var container = document.querySelector('container')

// container.addEventListener("click", function(event){

// var element = event.target;
// console.log(element)

// });

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

        choiceBtn.onclick = answerQueston;
        choicesEl.appendChild(choiceBtn);
    })
}

function startQuiz() {
    startScreen.setAttribute('class', 'hide');
    questionsEl.removeAttribute('class');
    timer()
    nextQuestion()
}

function quizOver() {
    endScreen.removeAttribute('class');
    finalScore.textContent = timeLeft;
    questionsEl.setAttribute('class', 'hide');
}



function answerQueston() {
    if(this.value !== questions[questionPointer].correct) {
        timeLeft -= 15;

        if(timeLeft < 0) {
            timeLeft = 0;
        }
        
        timerEl.textContent = timeLeft;
    }

    questionPointer++;
    
    if(questionPointer === questions.length) {
       // quizOver();
        quizOver();
    } else {
        nextQuestion();
    }
}

startButton.addEventListener('click', startQuiz);