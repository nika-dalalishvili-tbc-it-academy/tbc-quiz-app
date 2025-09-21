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
