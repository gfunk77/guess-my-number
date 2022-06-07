"use strict";

let score = 5;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// click check
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  // no guess
  if (!guess) {
    document.querySelector(`.message`).textContent = `😬 No Number!`;
    // correct guess
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 You win the game!!`;
    document.querySelector(`body`).style.background = `#00ff00`;
    document.querySelector(`.secret-number`).textContent = secretNumber;
    document.querySelector(`.secret-number`).style.fontSize = `5rem`;
    // score too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈 Too High!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `☹️ You Lose!`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.background = `#ff0000`;
      document.querySelector(`.secret-number`).textContent = secretNumber;
      document.querySelector(`.secret-number`).style.fontSize = `5rem`;
    }
    // score too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉 Too Low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `☹️ You Lose!`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.background = `#ff0000`;
      document.querySelector(`.secret-number`).textContent = secretNumber;
      document.querySelector(`.secret-number`).style.fontSize = `5rem`;
    }
  }
});
// click again
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start Guessing`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.secret-number`).textContent = `?`;
  document.querySelector(`.secret-number`).style.fontSize = `2rem`;
  document.querySelector(`body`).style.background = `#222`;
  document.querySelector(`.score`).textContent = score;
});
