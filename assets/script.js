var continueQuiz = document.querySelector("continue-quiz");
var endQuiz = document.querySelector("end-quiz");

//start quiz function
function startQuiz(){
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
var countDown = document.querySelector(".seconds");
var seconds = 60;
var index = 1
function changeQue() {
    var answer1 = document.querySelector("#answer-1");
    var answer2 = document.querySelector("#answer-2");
    var answer3 = document.querySelector("#answer-3");
    var answer4 = document.querySelector("#answer-4");
    answer1.textContent = myQuestions[index].answers["1"];
    answer2.textContent = myQuestions[index].answers["2"];
    answer3.textContent = myQuestions[index].answers["3"];
    answer4.textContent = myQuestions[index].answers["4"];

} 

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
        correctAnswer: "2"
    },
    {
        question: "What does HTML stand for?",
        answers: {
            1: "Hypertext Markup Language",
            2: "Hyperphrase Markup Language",
            3: "Hypertext Markdown Language",
            4: "Hypertext Markdown Levels"

        }
    },
    {
        question: "What do you call people who write computer code?",
        answers: {
            1: "Manufacturers",
            2: "Cryptographers",
            3: "Programers or Developers",
            4: "Technology Professor"
        }
    },
    {
        question: "What does the word dev mean?",
        answers: {
            1: "devotional",
            2: "devocalize",
            3: "developer",
            4: "devalue"
        }
    },
    {
        question: "What does coding do?",
        answer: {
            1: "list of functions",
            2: "never changes",
            3: "never updates",
            4: "tells the computer what to do"
        }
    }
]