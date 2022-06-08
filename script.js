"use strict";

let score = 5;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

// click check
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // no guess
  if (!guess) {
    // document.querySelector(`.message`).textContent = `😬 No Number!`;
    displayMessage(`😬 No Number!`);
    // correct guess
  } else if (guess === secretNumber) {
    displayMessage(`🎉 You win the game!!`);
    document.querySelector(`body`).style.background = `#00ff00`;
    document.querySelector(`.secret-number`).textContent = secretNumber;
    document.querySelector(`.secret-number`).style.fontSize = `5rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    // incorrect guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too High!` : `📉 Too Low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`☹️ You Lose!`);
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.background = `#ff0000`;
      document.querySelector(`.secret-number`).textContent = secretNumber;
      document.querySelector(`.secret-number`).style.fontSize = `5rem`;
    }
  }
});

// Reset the game to play again
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start Guessing`);
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.secret-number`).textContent = `?`;
  document.querySelector(`.secret-number`).style.fontSize = `2rem`;
  document.querySelector(`body`).style.background = `#222`;
  document.querySelector(`.score`).textContent = score;
});
