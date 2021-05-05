const quizData = [
    {
        question: 'Who gifted the Statue of Liberty to USA?',
        a: 'France',
        b: 'Germany',
        c: 'New York',
        d: 'India',
        correct: 'a'
    },{
        question: 'Which is the most used programming language in 2019?',
        a: 'PASCAL',
        b: 'Visual Basic',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },{
        question: 'Who is the founder of Google?',
        a: 'Larry Page',
        b: 'Sergey Brin',
        c: 'Both a and b',
        d: 'None of these',
        correct: 'c'
    },{
        question: 'Who is the founder of Microsoft?',
        a: 'Bill Gates',
        b: 'Joe Briden',
        c: 'Donald Trump',
        d: 'George Washington',
        correct: 'a'
    },{
        question: 'Where was the IPl 2020 hosted?',
        a: 'India',
        b: 'USA', 
        c: 'Germany',
        d: 'Dubai',
        correct: 'd'
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselect();
    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
   let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {    
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions</h2> 
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});