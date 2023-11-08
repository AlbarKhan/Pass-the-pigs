"use strict";

let currentScroe = 0;
const Scroe = [0, 0];

const currentScroe0 = document.querySelector(".currentScore0");
const currentScroe1 = document.querySelector(".currentScore1");
const winMsg = document.querySelector(".msg");

currentScroe0.textContent = "0";
currentScroe1.textContent = "0";
let activePlayer = 0;
const displayActice = function (active) {
  return document.getElementById(`player${active}-section`);
};

const displayCurrentScore = function (curplayer, curscore) {
  return (document.querySelector(`.currentScore${curplayer}`).textContent =
    curscore);
};

document.getElementById("roll").addEventListener("click", function () {
  const randnum = Math.trunc(Math.random() * 6) + 1;
  if (Scroe[0] >= 100 || Scroe[1] >= 100) {
    return;
  }
  if (randnum > 1) {
    document.querySelector(".dice").classList.remove("hidden");
    document.getElementById("dice-image").src = `images/dice-${randnum}.png`;
    currentScroe += randnum;
    displayCurrentScore(activePlayer, currentScroe);
  } else {
    displayCurrentScore(activePlayer, 0);

    if (activePlayer === 0) {
      activePlayer = 1;
      displayActice(activePlayer).style.opacity = "0.6";
      displayActice(activePlayer - 1).style.opacity = 0.3;
    } else {
      activePlayer = 0;
      displayActice(activePlayer).style.opacity = "0.6";
      displayActice(activePlayer + 1).style.opacity = 0.3;
    }
    currentScroe = 0;
    console.log(Scroe[1]);
  }
});

document.getElementById("hold").addEventListener("click", function () {
  Scroe[`${activePlayer}`] += currentScroe;
  document.querySelector(`.totalScorePlayer${activePlayer}`).textContent =
    Scroe[activePlayer];
  currentScroe = 0;
  displayCurrentScore(activePlayer, currentScroe);
  if (Scroe[0] >= 100 || Scroe[1] >= 100) {
    winMsg.classList.remove("hidden");
    winMsg.textContent = `Player ${activePlayer + 1} Wins`;
    return;
  }
  if (activePlayer === 0) {
    activePlayer = 1;
    displayActice(activePlayer).style.opacity = "0.6";
    displayActice(activePlayer - 1).style.opacity = 0.3;
  } else {
    activePlayer = 0;
    displayActice(activePlayer).style.opacity = "0.6";
    displayActice(activePlayer + 1).style.opacity = 0.3;
  }
});

document.getElementById("newGame").addEventListener("click", function () {
  currentScroe = 0;
  Scroe[0] = 0;
  Scroe[1] = 0;
  console.log(currentScroe, Scroe);
  displayCurrentScore(0, currentScroe);
  displayCurrentScore(1, currentScroe);
  document.querySelector(".totalScorePlayer0").textContent = Scroe[0];
  document.querySelector(".totalScorePlayer1").textContent = Scroe[1];
  activePlayer = 0;
  displayActice(activePlayer).style.opacity = "0.6";
  displayActice(activePlayer + 1).style.opacity = 0.3;
});
