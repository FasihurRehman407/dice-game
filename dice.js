'use strict;';

const resetbutn = document.querySelector('.reset');
// const players = document.querySelector('.play');
const player1 = document.querySelector('#one1');
const player2 = document.querySelector('#one2');
const player1score = document.querySelector('.total1');
const player2score = document.querySelector('.total2');
const player1current = document.getElementById('curr1');
const player2current = document.getElementById('curr2');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');
const dice = document.querySelector('.dice');
const reset = document.querySelector('.reset');
dice.classList.add('hiddenn');
let currentscore = 0;
let playeractive = 1;
// Roll the Dice
roll.addEventListener('click', function () {
  // generating random number
  const random = Math.trunc(Math.random() * 6 + 1);

  //   display the dice
  dice.src = `dice-${random}.png`;
  dice.classList.remove('hiddenn');

  //   check if dice no. is 1
  if (random !== 1) {
    currentscore = currentscore + random;
    document.querySelector(`.curr${playeractive}`).textContent = currentscore;
  } else if (random === 1) {
    document.querySelector(`.curr${playeractive}`).textContent = 0;
    playeractive = playeractive == 1 ? 2 : 1;
    currentscore = 0;
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
  }
});
// Switch Player
hold.addEventListener('click', function () {
  document.querySelector(`.total${playeractive}`).textContent =
    currentscore +
    Number(document.querySelector(`.total${playeractive}`).textContent);

  // Player Wins
  if (
    Number(document.querySelector(`.total${playeractive}`).textContent) >= 100
  ) {
    document.querySelector(`#one${playeractive}`).classList.add('done');
    // switch player
  } else {
    document.querySelector(`.curr${playeractive}`).textContent = 0;
    playeractive = playeractive == 1 ? 2 : 1;
    currentscore = 0;
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
  }
});
// New Game
reset.addEventListener('click', function () {
  playeractive = 1;
  document.querySelector('.total1').textContent = 0;
  document.querySelector('.total2').textContent = 0;
  document.querySelector('.curr1').textContent = 0;
  document.querySelector('.curr2').textContent = 0;
  player1.classList.remove('player-active');
  player2.classList.add('player-active');
  dice.classList.add('hiddenn');
  player1.classList.remove('done');
  player2.classList.remove('done');
  currentscore = 0;
});
