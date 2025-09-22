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
const restartBtn = document.getElementById("restartBtn");

db.topics.forEach((topic, i) => {
    const btn = document.createElement("button");
    btn.textContent = topic.name;
    btn.classList.add("topic-btn");
    btn.onclick = () => startQuiz(i);
    topicsDiv.appendChild(btn);
});

function startQuiz(topicIndex) {
    currentTopic = db.topics[topicIndex];
    document.getElementById(
        "quizHeader"
    ).textContent = `${currentTopic.name} (Frontend Development 2025-2026)`;
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
        div.innerHTML = `<p>${qi + 1}. ${question}</p>`;
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
    timer.innerHTML = `<span>Time:</span> <span>${minutes}:${seconds}</span>`;
}

function finishQuiz() {
    clearInterval(timerInterval);
    quiz.classList.remove("active");

    // Calculate Score and Time
    const formData = new FormData(quizForm);
    let correctCount = 0;
    currentTopic.questions.forEach(({ correct }, qi) => {
        if (formData.get(`q${qi}`) !== null && Number(formData.get(`q${qi}`)) === correct) correctCount++;
    });
    const total = currentTopic.questions.length;
    const timeUsed = 180 - timeLeft;
    const minutes = String(Math.floor(timeUsed / 60)).padStart(2, "0");
    const seconds = String(timeUsed % 60).padStart(2, "0");

    // Update Modal
    const modal = document.getElementById("resultModal");
    const modalSummary = document.getElementById("modalSummary");
    modalSummary.textContent = `Points: ${correctCount}/${total} | Time: ${minutes}:${seconds}`;
    modal.classList.add("active");

    document.getElementById("closeModal").onclick = () => {
        modal.classList.remove("active");
        results.classList.add("active");

        // Show Header Summary too
        // const header = results.querySelector("h2");
        // header.innerHTML = `Points ${correctCount}/${total} | Time: ${minutes}:${seconds}`;
        const quizResult = document.getElementById('quizResults');
        quizResult.innerHTML = `
            <span class="quiz-results__title">Points:</span> <span class="quiz-results__result">${correctCount}/${total}</span>  <span class="quiz-results__title">Time:</span> <span class="quiz-results__result">${minutes}:${seconds}</span>
        `;
        checkAnswers(formData);

        // const testPoints = document.getElementById(testResultsPoints);
        // const testTime = document.getElementById(testResultsTime);
        
        // testPoints.textContent = `${correctCount}/${total}`;
        // testTime = `${minutes}:${seconds}`;
    };
}

function checkAnswers(formData) {
    resultDetails.innerHTML = "";

    currentTopic.questions.forEach(({ question, answers, correct }, qi) => {
        const chosen = formData.get(`q${qi}`);
        const isCorrect = chosen !== null && Number(chosen) === correct;

        // Per-Question
        const summary = document.createElement("div");
        summary.classList.add("result-summary");
        summary.classList.add(`${isCorrect ? "result-summary--correct" : "result-summary--incorrect"}`)
        summary.innerHTML = `
            ${
                isCorrect
                    ? `
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M553.9 146.5L539.9 166L275.9 534L259.4 557L239.4 537L103.4 401L86.4 384L120.3 350.1L137.3 367.1L253.3 483.1L500.8 138.1L514.8 118.6L553.8 146.6z" />
                    </svg>
                    <span class="result-summary__text">Correct</span>
                    <span class="result-summary__points">1/1 Points</span>`
                    : `
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path d="M135.5 169L118.5 152L152.4 118.1L169.4 135.1L320.4 286.1L471.4 135.1L488.4 118.1L522.3 152L505.3 169L354.3 320L505.3 471L522.3 488L488.4 521.9L471.4 504.9L320.4 353.9L169.4 504.9L152.4 521.9L118.5 488L135.5 471L286.5 320L135.5 169z"/>
                    </svg>
                    <span class="result-summary__text">Incorrect</span>
                    <span class="result-summary__points">0/1 Points</span>
                    `
            }
        `;
        // resultDetails.appendChild(summary);

        const div = document.createElement("div");
        div.classList.add("question");
        const questionP = document.createElement("p");
        questionP.textContent = `${qi + 1}, ${question}`;
        div.appendChild(questionP);
        div.appendChild(summary);

        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answers");

        answers.forEach((answer, ai) => {
            const label = document.createElement("label");

            const input = document.createElement("input");
            input.type = "radio";
            input.disabled = true;
            input.name = `q${qi}`;
            input.value = ai;
            if(chosen !== null && Number(chosen) === ai) {
                input.checked = true;
            }
            label.appendChild(input);

            const textSpan = document.createElement("span");
            textSpan.textContent = " " + answer;
            textSpan.style.fontWeight = "400"; // answers slightly thinner
            textSpan.style.color = "var(--text)";
            label.appendChild(textSpan);

            // Correct Answer: append check SVG (green)
            if(ai === correct) {
                label.innerHTML += `
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M553.9 146.5L539.9 166L275.9 534L259.4 557L239.4 537L103.4 401L86.4 384L120.3 350.1L137.3 367.1L253.3 483.1L500.8 138.1L514.8 118.6L553.8 146.6z"/>
                    </svg>
                `;
            }

            // P Element
            const p = document.createElement("p");
            p.textContent = answer;
            if (ai === correct) {
                p.innerHTML += `
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M553.9 146.5L539.9 166L275.9 534L259.4 557L239.4 537L103.4 401L86.4 384L120.3 350.1L137.3 367.1L253.3 483.1L500.8 138.1L514.8 118.6L553.8 146.6z"/>
                    </svg>
                `;
            }

            if (chosen === ai && ai !== correct) {
                p.style.color = "var(--error)";
            }
            
            answerDiv.appendChild(label);
        });
        div.appendChild(answerDiv);

        resultDetails.appendChild(div);
    });
}

function restart() {
    resultDetails.innerHTML = "";
    document.getElementById("quizHeader").textContent = "TBC Quiz App (Frontend Development 2025-2026)";
    results.classList.remove("active");
    menu.classList.add("active");
    timeLeft = 180;
}

submitBtn.addEventListener("click", finishQuiz);
restartBtn.addEventListener("click", restart);