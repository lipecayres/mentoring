'use strict';

const scoreMessage = document.querySelector('.score');
const highscoreMessage = document.querySelector('.highscore');
const message = document.querySelector('.message');
const input = document.querySelector('.guess');
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');

// display scores on screen
let attempts = 20;
let highscore = 0;
scoreMessage.innerHTML = attempts;
highscoreMessage.innerHTML = highscore;

// Secret number to be guessed - 1 to 20
let numberToBeGuessed = Math.trunc(Math.random() * 20 + 1);
console.log(numberToBeGuessed)

checkButton.addEventListener('click', checkNumber);
againButton.addEventListener('click', playAgain)
/*
    Functions 
 */

// check if number is right, greater or smaller.
function checkNumber() {
    let x = Number(input.value);

  // check out of range
  if (x < 1 || x > 20) {
      message.innerHTML = `Out of range, try again.`;
      return;
    }

  // check number and range
  if (x > numberToBeGuessed) {
    message.innerHTML = `Too high!!`;
    updateScore();
  } else if (x < numberToBeGuessed) {
      message.innerHTML = `Too low!!`;
    updateScore();
} else {
    message.innerHTML = `You are correct!!`;
    updateHighscore()
}
}

function playAgain() {
    input.value = '';
    attempts = 20;
    scoreMessage.innerHTML = attempts;
    message.innerHTML = `Start guessing...`;
    numberToBeGuessed = Math.trunc(Math.random() * 20 + 1);
    console.log(numberToBeGuessed)
}

//update score on the screen
function updateScore() {
    attempts--;
    scoreMessage.innerHTML = attempts;
}

function updateHighscore() {
  if (attempts > highscore) {
    highscore = attempts;
    highscoreMessage.innerHTML = highscore;
  }
}
