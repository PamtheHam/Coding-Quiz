// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```
//  build a timed coding quiz with multiple-choice questions.
//  have a high scores container that contains all high scores of players hidden
// timer of 90 seconds
// do 5 questions each = 20 points for 100 points total possible
// extended due date to july 7th

// create an array of answer for questions
// start screen, questions, right and wrong, then timer, then high scores

var startButton = document.getElementById("start-btn");
var ContainerEl = document.getElementById("container");
var questionContainer = document.getElementById('question-container');
var questionEl = document.getElementById("question");
var highScoresButton = document.getElementById('submit-btn');
var highScoresContainer = document.getElementById('high-score-container');
var highScoresForm = document.getElementById('high-score-form');
var index = 0;
var score = 0;

highScoresForm.setAttribute('style', 'display:none')

// questions for the quiz
var questions = [
  {
    question:
      "Which one of these is not a possibility when declaring a JavaScript variable?",
    answer: ["log", "const", "let", "var"],
    correctAnswer: "log",
  },

  {
    question: "How you do link a JavaScript file to an HTML file?",
    answer: ["javascript.js", "index.html", "script.css", "script.js"],
    correctAnswer: "script.js",
  },

  {
    question:
      "Where is the correct place to insert the JavaScript file in an html file? ",
    answer: ["<header>", "<body>", "<footer>", "<p>"],
    correctAnswer: "<body>",
  },

  {
    question: "How do you add multi-line comments to JavaScript?",
    answer: [
      "<!-- comment -->",
      "// comment",
      "/* comment */",
      "!! comment !!",
    ],
    correctAnswer: "/* comment */",
  },

  {
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    answer: ["=", ":", "*", ";"],
    correctAnswer: "=",
  },
];

// Timer section
var secondsLeft = 100;
var timeEl = document.querySelector(".time");

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = " Time: " + secondsLeft;

    if (secondsLeft <= 0) {
    secondsLeft = 0;
    timeEl.textContent = " Time: " + secondsLeft;
    }
  }, 1000);
}

ContainerEl.setAttribute('style', 'display:none')
// make container go away until buildQuestionCard function starts
startButton.addEventListener("click", function () {
  setTimer();
  buildQuestionCard();
});


// starts quiz
function buildQuestionCard(){
ContainerEl.setAttribute('style', 'display:block')
startButton.setAttribute('style', 'display:none')
questionEl.textContent=questions[index].question;
var answerBox = document.getElementById('answer-container')
answerBox.innerHTML = ''
questions[index].answer.forEach(function(x){
var button = document.createElement('button')
button.textContent = x;
button.setAttribute('class', 'answer-btn')
button.setAttribute('value', x)
button.onclick = checkAnswer;
answerBox.appendChild(button)
})
}


// checks to see if answers are correct
function checkAnswer(){
    console.log(this.value)
    if (this.value !== questions[index].correctAnswer){
        console.log('wrong')
        secondsLeft -=10;
        if (secondsLeft <= 0){
            console.log('endGame')
        }
    }
    else {
        console.log('correct')
        score++;
    }
    index++;
    if (index === questions.length){
        console.log('endGame')
        questionContainer.setAttribute('style', 'display:none')
        highScoresForm.setAttribute('style', 'display:block')
        clearInterval(timeInterval);
        // this makes the questions and answers go away after the quiz ends
    } else {
        buildQuestionCard()
    }
}

// high score section
highScoresContainer.setAttribute('style', 'display:none');
 highScoresButton.addEventListener('click', function(){
     console.log('hello')
     highScoresContainer.setAttribute('style', 'display:block')
    //  show high scores container 
 })

var highScoreSubmit = function(event) {
    event.preventDefault();
    var scoreObject = {initials:'PCH', finalScore: score * secondsLeft}

highScoresArray = JSON.parse(localStorage.getItem('highScore')) || []
highScoresArray.push(scoreObject)
}

var scoreList = document.getElementById("high-score-form");
localStorage.setItem("highScore", JSON.stringify(highScoresArray));

// stop timer
// submit and store user input
// show user input on screen
