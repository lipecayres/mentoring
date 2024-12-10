'use strict';

const body = document.body;
const numberMessage = document.querySelector('.number');
const pastNumberMessage = document.querySelector('.past-numbers');
const scoreMessage = document.querySelector('.score');
const highscoreMessage = document.querySelector('.highscore');
const message = document.querySelector('.message');
const input = document.querySelector('.guess');
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');

// innitial display screen
input.focus();
let pastNumbers = '';
let attempts = 20;
let highscore = 0;
scoreMessage.innerHTML = attempts;
highscoreMessage.innerHTML = highscore;

// Secret number to be guessed - 1 to 20
let numberToBeGuessed = Math.trunc(Math.random() * 20 + 1);

checkButton.addEventListener('click', checkNumber);
againButton.addEventListener('click', playAgain);
input.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    checkNumber();
  }
});

/*
    Functions 
 */

// check if number is right, greater or smaller.
function checkNumber() {
  let x = Number(input.value);

  // no number
  if (x == 0) return (message.innerHTML = `Choose between 1 to 20`);

  // number out of range
  if (x < 1 || x > 20) {
    message.innerHTML = `Out of range, try again.`;
    input.value = '';
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
    updateHighscore();
    body.style.backgroundColor = 'green';
    numberMessage.innerHTML = numberToBeGuessed;
  }

  // no more attempts
  if (attempts < 1) {
    body.style.backgroundColor = 'red';
    numberMessage.innerHTML = numberToBeGuessed;
    scoreMessage.innerHTML = 0;
    return (message.innerHTML = `You loose.`);
  }

  input.focus();
}

// reset function - play again
function playAgain() {
  numberToBeGuessed = Math.trunc(Math.random() * 20 + 1);
  attempts = 20;
  pastNumbers = '';
  body.style.backgroundColor = '#222';
  input.value = '';
  scoreMessage.innerHTML = attempts;
  message.innerHTML = `Start guessing...`;
  numberMessage.innerHTML = `?`;
  pastNumberMessage.innerHTML = pastNumbers;
  input.focus();
}

//update score on the screen
function updateScore() {
  if (attempts <= 0) return;
  attempts--;
  pastNumbers += String(input.value) + ' ';

  scoreMessage.innerHTML = attempts;
  pastNumberMessage.innerHTML = pastNumbers;
  input.value = '';
}

//update highscore on the screen
function updateHighscore() {
  if (attempts > highscore) {
    highscore = attempts;
    highscoreMessage.innerHTML = highscore;
  }
}
