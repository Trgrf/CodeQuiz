// Need variables to keep track of quiz
var time = 0;
var timerCount;
var score = 0;
var index = 0;

// needs variables to re. the Dom Elements
var startButtonEl = document.getElementById('start-button');
var quizTimeEl = document.createElement('h2');
var endQuizEl = document.getElementById('game-over');
var quizScreenEl = document.getElementById('quizscreen');


// Need function to start quiz
function quizstart() {
    timerCount = 10;
    var startScreenEl = document.getElementById('startscreen')
    startScreenEl.classList.add("hide");

    quizScreenEl.classList.remove('hide');
    starttimer();
}

function starttimer() {
    var timeSpanEl = document.createElement("span")
    var largeFont = document.querySelector(".large-font")
    largeFont.appendChild(timeSpanEl.appendChild(quizTimeEl));
    var timerInterval = setInterval(function () {
        timerCount--;
        quizTimeEl.textContent = timerCount;
        if (timerCount <= 0) {
            timerCount = 0;
            quizTimeEl.textContent = timerCount;
        }

        // if (timerCount === 0) {
        //     clearInterval(timer);
        //     quizend();

    }, 1000)
    
    questions();
}
// create a function get questions
function questions() {
    quizScreenEl.innerHTML = ""
    var questionTextEl = document.createElement('h3');
    questionTextEl.textContent = questionsArr[index].title;
    quizScreenEl.appendChild(questionTextEl);
    questionsArr[index].choices.forEach(function (choice) {
        var choiceBtn = document.createElement("button")
        choiceBtn.textContent = choice;
        choiceBtn.onclick = answers;
        choiceBtn.setAttribute("value", choice)

        questionTextEl.appendChild(choiceBtn);

    })
}
// function to check if user was right or wrong
// check how many questions there are if there are no more questions end quiz, if more questions get next question

function answers() {
    console.log(this.value);
    if (this.value != questionsArr[index].answer) {
        console.log("Wrong Answer!")
    }


    index++;
    questions();

}

// need a function to end the quiz
function quizend() {

}

// function that ends quiz when time has hit 0
function timeover() {

}


// function to save the high score to local storage
function highscores() {

}


var questionsArr = [
    {
        title: "Who won the Rainbow 6 Siege Inviational 2020?",
        choices: ['SSG', 'G2', 'TSM', 'NIP'],
        answer: "SSG",

    },
    {
        title: "What is the longest running anime?",
        choices: ['Naruto', 'MHA', 'OnePiece', 'Bleach'],
        answer: "OnePiece",

    },
    {
        title: "Where is the Statue of Liberty located?",
        choices: ['Paris', 'Italy', 'Chicago', 'NewYork'],
        answer: "NewYork",

    },
    {
        title: "What color is the sky?",
        choices: ['Black', 'Pink', 'Blue', 'Aqua'],
        answer: "Blue",

    },
    {
        title: "How fun is coding?",
        choices: ['Insanly', 'Moderately', 'Super', 'Incredibly'],
        answer: "Insanely",

    },
]









startButtonEl.addEventListener("click", quizstart)