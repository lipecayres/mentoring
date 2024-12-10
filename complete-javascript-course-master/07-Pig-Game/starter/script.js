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

/* Variables */
let playing = true;
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

/* Action to buttons */
btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);

let diceNumber = 0;
diceImageEl.classList.add('hidden');
totalScorePlayer1El.textContent = 0;
totalScorePlayer2El.textContent = 0;

// Roll dice
function rollDice() {
  if (!playing) return;

  diceNumber = Math.trunc(Math.random() * 6) + 1;

  diceImageEl.src = `dice-${diceNumber}.png`;
  diceImageEl.classList.remove('hidden');
  console.log(diceNumber);

  if (diceNumber !== 1) {
    currentScore += diceNumber;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    switchPlayer();
  }
}

function hold() {
  if (!playing) return;

  scores[activePlayer] += currentScore;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // check final game
  if (scores[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    diceImageEl.classList.add('hidden');
    playing = false;
  } else {
    switchPlayer();
  }
}

function newGame() {
  scores.forEach(e => {
    scores[e] = 0;
  });

  playing = true;
  totalScorePlayer1El.textContent = scores[0];
  totalScorePlayer2El.textContent = scores[1];
  currentScorePlayer1El.textContent = 0;
  currentScorePlayer2El.textContent = 0;

  diceImageEl.classList.add('hidden');
  console.log(player1El);

  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');

  player1El.classList.add('player--active');
}

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
}
