"use strict";

const dice_roll = document.querySelector(".dice");
const btn_new = document.querySelector(".btn--new");
const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const scorePlayer1 = document.getElementById("score--0");
const scorePlayer2 = document.getElementById("score--1");
//Initially current score of both players
/*currentScore1.textContent = 0;
currentScore2.textContent = 0;
dice_roll.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];
let playing = true;*/
let currentScore, playing, activePlayer, score;
function init() {
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  playing = true;
  dice_roll.classList.add("hidden");
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
}
init();
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}

btn_roll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);
    dice_roll.classList.remove("hidden");
    dice_roll.src = `images/dice-${dice}.png`;
    if (dice > 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btn_hold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore;
    //score[1]=score[1]+score[0];
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});
// new game button
btn_new.addEventListener("click", init);
