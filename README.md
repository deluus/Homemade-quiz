# code-quiz

# what starting data will my application need?
- questions and answers
-  array list for our series of questions
-  each question will an object
   {
       questions: "commonly used data types DO NOT include: "       
       multipleChoiseOptions: [
           "string:,
           "boolean",
           "alert",
           "number"
       ],
       correct: "alert"
   }

- timer and score

# what kind of actions does my application need to do?

 - start game action
     -function start game(){  ...   }

 - hide welcome message
     -function  hide welcome(){  ...   }

 - display the next questions
      -function  displayNextQuestion(){  ...   }

 - start the countdown timer 

 - validate the users choice 
    (if else )
    - if the choice is wrong, subtract time from timer
 
 - display the next question

 - display the answer result

 - end the game

  

      start the countdown timer
      function startTimer (){
       interval = setIntervalFunction (){


           clearInterval(interval);

       }, 1000);
      }


  - stop the timer from counting down
      ( clear interval function)