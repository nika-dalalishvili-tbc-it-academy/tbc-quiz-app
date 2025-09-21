const db = quizData;

let currentTopic = null;
let timerInterval;
let timeLeft = 180;

const menu = document.getElementById("menu");
const topicsDiv = document.getElementById("topics");
const quiz = document.getElementById("quiz");
const quizForm = document.getElementById("quizForm");
const timer = document.getElementById("timer");
const submitBtn = document.getElementById("submitBtn");
const results = document.getElementById("results");
const resultDetails = document.getElementById("resultDetails");

db.topics.forEach((topic, i) => {
    const btn = document.createElement("button");
    btn.textContent = topic.name;
    btn.classList.add("topic-btn");
    btn.onclick = () => startQuiz(i);
    topicsDiv.appendChild(btn);
});

function startQuiz(topicIndex) {
    currentTopic = db.topics[topicIndex];
    menu.classList.remove("active");
    quiz.classList.add("active");
    renderQuestions();
    startTimer();
}

function renderQuestions() {
    quizForm.innerHTML = "";
    currentTopic.questions.forEach(({ question, answers }, qi) => {
        const div = document.createElement("div");
        div.classList.add("question");
        div.innerHTML = `<p><strong>${qi + 1}. ${question}</strong></p>`;
        const answersDiv = document.createElement("div");
        answersDiv.classList.add("answers");
        answers.forEach((answer, ai) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="q${qi}" value="${ai}"> ${answer}`;
            answersDiv.appendChild(label);
        });
        div.appendChild(answersDiv);
        quizForm.appendChild(div);
    });
}

function startTimer() {
    updateTimer();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    timer.textContent = `Time: ${minutes}:${seconds}`;
}

function finishQuiz() {
    clearInterval(timerInterval);
    quiz.classList.remove("active");
    results.classList.add("active");
    checkAnswers();
}

function checkAnswers() {
    resultDetails.innerHTML = "";
    const formData = new FormData(quizForm);
    currentTopic.questions.forEach(({ question, answers, correct}, qi) => {
        const chosen = formData.get(`q${qi}`);
        const div = document.createElement("div");
        div.innerHTML = `<p><strong>${qi + 1}. ${question}</strong></p>`;
        answers.forEach((answer, ai) => {
            const p = document.createElement("p");
            p.textContent = answer;
            if (ai === correct) {
                p.classList.add("correct");
                p.textContent += " ✅";
            }
            if (chosen == ai && ai !== correct) {
                p.classList.add("incorrect");
                p.textContent += " ❌";
            }
            div.appendChild(p);
        });
        resultDetails.appendChild(div);
    })
}

submitBtn.addEventListener("click", finishQuiz);