const start = document.getElementById('start-btn')// start button
const questionContainer = document.getElementById("question-container");//

const shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById("question");
const answerbuttonsElement = document.getElementById('answer-buttons')

start.addEventListener('click', startGame)

function startGame() {
    
    console.log("Started")
    start.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion () {

}

function selectAnswer() {

}

const questions = [
    {
        question: "who is the 7th Hokage",
        answers: [
            { text: 'naruto', correct: true},
            { text: "garra", correct: false}
        ]

    }
]