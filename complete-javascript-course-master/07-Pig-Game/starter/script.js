'use strict';
/* Elements */
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const totalScorePlayer1El = document.getElementById('score--0');
const totalScorePlayer2El = document.getElementById('score--1');
const currentScorePlayer1El = document.getElementById('current--0');
const currentScorePlayer2El = document.getElementById('current--1');

const diceImageEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/* Buttons */
btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);

/* Variables */
let totalScoreP1 = 0,
  totalScoreP2 = 0,
  currentScoreP1 = 0,
  currentScoreP2 = 0,
  diceNumber = 0;

// Roll dice
function rollDice() {
  diceNumber = Math.trunc(Math.random() * 6) + 1;

  diceImageEl.src = `dice-${diceNumber}.png`
  diceImageEl.classList.remove('hidden')
  console.log(diceNumber);

  // Player 1 turn
  if (player1El.classList.contains('player--active')) {
    if (diceNumber == 1) {
      player2Active();
    } else {
      currentScoreP1 += diceNumber;
      currentScorePlayer1El.textContent = currentScoreP1;
    }
  } else {
    // Player 2 turn
    if (diceNumber == 1) {
      player1Active();
    } else {
      currentScoreP2 += diceNumber;
      currentScorePlayer2El.textContent = currentScoreP2;
    }
  }
}

function hold() {
  player1El.classList.contains('player--active')
    ? player2Active()
    : player1Active();
}

function newGame() {
  totalScoreP1 =
    totalScoreP2 =
    currentScoreP1 =
    currentScoreP2 =
    diceNumber =
      0;
  totalScorePlayer1El.textContent = 0;
  totalScorePlayer2El.textContent = 0;
  currentScorePlayer1El.textContent = 0;
  currentScorePlayer2El.textContent = 0;
  diceImageEl.classList.add('hidden');
  player1Active();
}

function player1Active() {
  totalScoreP2 += currentScoreP2;
  currentScoreP2 = 0;

  totalScorePlayer2El.textContent = totalScoreP2;
  currentScorePlayer2El.textContent = currentScoreP2;

  player1El.classList.toggle('player--active');
  player2El.classList.remove('player--active');
}

function player2Active() {
  totalScoreP1 += currentScoreP1;
  currentScoreP1 = 0;

  totalScorePlayer1El.textContent = totalScoreP1;
  currentScorePlayer1El.textContent = currentScoreP1;

  player2El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
