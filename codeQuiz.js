var startButton = document.getElementById("start-button");
var timerEl = document.getElementById('countdown');
var timeLeft = 100;
var questionsEl = document.getElementById('questions');
var questions = [
    { 
        question: "whats your favorite color?",
        multipleChoiceOptions: [
            "Yellow",
            "Green",
            "Blue",
            "Pink"       
        ], 
            correct: "Green"
        } 
    
];

// var container = document.querySelector('container')

// container.addEventListener("click", function(event){

// var element = event.target;
// console.log(element)

// });

var questionPointer = 0;

function nextQuestion() {
    questionPointer ++ ;
    // display
}

function answerQueston(event) {

    // which answer the choice (which button)
    var buttonEl = event.target;
    var answer = buttonEl.dataset.answer;

    //  compare 'answer' to the "current question" answer
    // console.log(answer);


    var currentQuestion = question(questionPointer);
    if(answer === questions[questionPointer].correct){


    }

function timer(){
    var timeInterval = setInterval (function(){
        timeLeft -- ;
        timerEl.textContent = timeLeft;

        if(timerLeft === 0) {
            timerEl.textContent = "";
            clearInterval(timeInterval);

            alert("Game Over")
        }

    }, 1000);
    if (timerLeft === 0){
        return;
    }

}


questionsEl.addEventListener('click', answerQueston );

}