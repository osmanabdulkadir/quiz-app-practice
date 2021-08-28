const startButton = document.getElementById('start-btn')// start button
const nextButton = document.getElementById('next-btn')

const questionContainer = document.getElementById("question-container");//

let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById("question");
const answerbuttonsElement = document.getElementById('answer-buttons')
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide');
   shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
   
}

function setNextQuestion () {
    resetState();
   showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {

    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerText = answers.text;
        button.classList.add('btn');
        if(answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerbuttonsElement.appendChild(button)
    })
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct);
    Array.from(answerbuttonsElement.children).forEach(button => {
        setStatusClass(button, correct) 
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
   

};

function setStatusClass(element, correct)  {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
} 


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');

    while(answerbuttonsElement.firstChild){
        answerbuttonsElement.removeChild(answerbuttonsElement.firstChild)
    }
}

const questions = [
    {
        question: "who is the 7th Hokage?",
        answers: [
            { text: 'Naruto', correct: true},
            { text: "Garra", correct: false},
            { text: "Goku", correct: false},
            { text: "Minato", correct: false},
        ]

    },

    {
        question: "what clan is Sasuke?",
        answers: [
            { text: 'Senju', correct: false},
            { text: "Uchiha", correct: true},
            { text: "Hugya", correct: false},
            { text: "Long Beach Crips", correct: false},
        ]

    },

    {
        question: "who is the yellow flash of the leaf?",
        answers: [
            { text: 'Naruto', correct: false},
            { text: "Minato", correct: true},
            { text: "Oruchicamaru", correct: false},
            { text: "zabuza", correct: false},
        ]

    },

    {
        question: "how many tailed beasts Exist?",
        answers: [
            { text: '2', correct: false},
            { text: "4", correct: false},
            { text: "9", correct: false},
            { text: "10", correct: true},
        ]

    },
]