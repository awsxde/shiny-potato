"use strict";

let score = 20;
let highScore = 0;
let secretNumber = randomNumber();
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number!");
  } else if (guess < secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    displayMessage("Too low!");
  } else if (guess === secretNumber) {
    displayMessage("Correct, you win!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    } else if (score <= highScore) {
      document.querySelector(".highScore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    displayMessage("Too high!");
  }
  if (score === 0) {
    displayMessage("Game over!");
    document.querySelector("body").style.backgroundColor = "#FF6347";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = randomNumber();
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Wait for guess...");
});
