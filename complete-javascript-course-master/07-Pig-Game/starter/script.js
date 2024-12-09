'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const totalScorePlayer1 = document.getElementById('score--0');
const totalScorePlayer2 = document.getElementById('score--1');
const currentScorePlayer1 = document.getElementById('current--0');
const currentScorePlayer2 = document.getElementById('current--1');

const diceImage = document.querySelector('.dice');
console.log(diceImage);

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--row');
const btnHold = document.querySelector('.btn--dice');

btnNewGame.addEventListener('click', newGame);
function rollDice() {}
function hold() {}

function newGame() {
  totalScorePlayer1.textContent = 0;
  totalScorePlayer2.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
  diceImage.classList.add('hidden');
  player1Active();
}

function player1Active() {
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
}

function player2Active() {
  player2.classList.add('player--active');
  player1.classList.remove('player--active');
}
 