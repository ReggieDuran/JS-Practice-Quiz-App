const quizData = [
    {
        question: 'How old is Reggie',
        a: '10',
        b: '17',
        c: '26',
        d: '50',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Phython',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the President of Philippines?',
        a: 'Reggie Duran',
        b: 'Rodrigo Duterte',
        c: 'Cong Velasquez',
        d: 'Gadon',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JavaScript?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'
    }
];
let currentQuiz = 0;
let score = 0;

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const questionTitle = document.getElementById('question-title');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const radioEls = document.querySelectorAll('.answer');

loadQuestion();

function loadQuestion() {
    deSelectAsnwer();

    const currentQuizData = quizData[currentQuiz];
    questionTitle.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

const selectedAnswer = () => {
    let answer;
    radioEls.forEach(radioEl => {
        if (radioEl.checked) {
            answer = radioEl.id;
        }
    });
    return answer;
};

function deSelectAsnwer() {
    radioEls.forEach(radioEl => {
        radioEl.checked = false;
    });
};

submitBtn.addEventListener('click', (index) => {
    // check to see the answer
    const userAnswer = selectedAnswer();

    if (userAnswer) {
        if (userAnswer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
    
        if (currentQuiz < quizData.length) {
            loadQuestion();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});