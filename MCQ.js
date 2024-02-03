let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let Next = document.getElementById("Next");
let questionCount;
let scoreCount = 0;

const quizArray = [
  {
    id: "0",
    question: "Select the smallest number",
    options: ["18", "22", "16", "14"],
    correct: "14",
  },
  {
    id: "1",
    question: "Select the smallest number",
    options: ["-10", "4", "-14", "-16"],
    correct: "-16",
  },
];

Next.addEventListener("click", () => {
  localStorage.setItem("score1", scoreCount);
  window.location.href = "Matching.html";
});
Previous.addEventListener("click", () => {
  window.location.href = "MCQ.html";
});

nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;
    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      quizDisplay(questionCount);
    }
  })
);

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
  for (let i of quizArray) {
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");
  if (userSolution == quizArray[questionCount].correct) {
     scoreCount++;   
     userOption.classList.add("correct");
  } else {
    userOption.classList.add("incorrect");
  }
  options.forEach((element) => {
    element.disabled = true;
  });
}
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  quizCreator();
  quizDisplay(questionCount);
}
initial();