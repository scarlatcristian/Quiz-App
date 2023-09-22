"use strict";

const quizData = [
  {
    question: "Which language runs in a web browser",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for",
    a: "Cascading Style Sheets",
    b: "Cannot communicate standing",
    c: "Call Carol soon",
    d: "Cascading Simple Sheets",
    correct: "a",
  },
  {
    question: "What does HTML stands for?",
    a: "Hey Too Much Lasagna",
    b: "How to make lasagna",
    c: "Hypertext Markup Language",
    d: "How to make lefts",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched",
    a: "50 B.C.",
    b: "1995",
    c: "2015",
    d: "Can't launch JavaScript, it's not a rocket",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answersEls.forEach((answerEl) => (answerEl.checked = false));
};

const loadQuiz = () => {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

const getSelection = () => {
  let answer;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
};

submitBtn.addEventListener("click", () => {
  const answer = getSelection();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});
