var continueQuiz = document.querySelector("continue-quiz");
var endQuiz = document.querySelector("end-quiz");

//start quiz function
function startQuiz(){
setTime()
var titleEl = document.querySelector(".title");
titleEl.classList.add("hidden")    
var questionsEl = document.querySelector(".questions");
questionsEl.classList.remove("hidden");  
changeQue()
}
document.getElementById("continue-quiz").onclick=startQuiz;
 function endQuiz(){
    
 }
 document.getElementById("end-quiz").onclick=endQuiz;

//insert timer countdown
 var countDown = document.querySelector(".seconds");
 var secondsLeft = 60;

 function setTime() {
    
    var timerInterval = setInterval(function(){
        secondsLeft--;
        countDown.textContent = secondsLeft;
        //console.log(secondsLeft)

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            
        }
    }, 1000);
 }
 
 
var index = 0

function changeQue() { 
    console.log(myQuestions[index])
    var answer1 = document.querySelector("#answer-1");
    var answer2 = document.querySelector("#answer-2");
    var answer3 = document.querySelector("#answer-3");
    var answer4 = document.querySelector("#answer-4");
    var answer5 = document.querySelector("#answer-5");
    answer1.textContent = myQuestions[index].answers["1"];
    answer2.textContent = myQuestions[index].answers["2"];
    answer3.textContent = myQuestions[index].answers["3"];
    answer4.textContent = myQuestions[index].answers["4"];
    answer5.textContent = myQuestions[index].answers["5"];
   
var titleEl = document.querySelector(".question");
titleEl.textContent = myQuestions[index].question
} 

//how to get correct or wrong answers and score
document.querySelectorAll(".answers").forEach(function(answer){
answer.onclick = function(event){
    console.log(event.target)
    var chosen = event.target.textContent
    var correct = myQuestions[index].correctAnswer
    console.log("correctAnswer "+ correct)
    console.log("chosen " + chosen )
   if(correct == chosen){
    index++
    changeQue()

   }else{
    secondsLeft = secondsLeft -5
    index++
    changeQue()
   }
    
}
})

//Quiz Questions
var myQuestions = [
    {
        question: "What does CSS stand for?",
        answers: {
           1: "Cascading Summary Sheets",
           2: "Cascading Style Sheets",
           3: "Compunding Style Sheets",
           4: "Cascading Style Software"
            
        },
        correctAnswer: "Cascading Style Sheets",
        correct: true,
        incorrect: false,
    },
    {
        question: "What does HTML stand for?",
        answers: {
            1: "Hypertext Markup Language",
            2: "Hyperphrase Markup Language",
            3: "Hypertext Markdown Language",
            4: "Hypertext Markdown Levels"

        },
        correctAnswer: "Hypertext Markup Language",
    },
    {
        question: "What do you call people who write computer code?",
        answers: {
            1: "Manufacturers",
            2: "Cryptographers",
            3: "Programers or Developers",
            4: "Technology Professor"
        },
        correctAnswer: "Programers or Developers",
    },
    {
        question: "What does the word dev mean?",
        answers: {
            1: "devotional",
            2: "devocalize",
            3: "developer",
            4: "devalue"
        },
        correctAnswer: "developer",
    },
    {
        question: "What does coding do?",
        answers: {
            1: "list of functions",
            2: "never changes",
            3: "never updates",
            4: "tells the computer what to do"
        },
        correctAnswer: "tells the computer what to do",
    },
]
//var initialsInput = document.querySelector("#initials");
//var signupButton = document.querySelector
//
//when quiz is done show input for initials and score storage