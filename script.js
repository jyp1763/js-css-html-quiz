var startBtn = document.getElementById("start")
var nextBtn = document.getElementById("next")
var submitBtn = document.getElementById("submit")
var trueBtn = document.getElementById("true")
var falseBtn = document.getElementById("false")
var userScore = document.getElementById("user-score")
var totalScore = document.getElementById("total-score")
var questionText = document.getElementById("question-text")

let currentQuestion = 0;
let score =0;

let questions =[
    {
        question: "what does Css stand for?",
    }
]