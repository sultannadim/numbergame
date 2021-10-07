'use strict';

/*document.querySelector('.message').textContent = 'Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 6;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let serectNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when nothing input
  if (!guess) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent = 'No Number!')
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when input large number
  // else if (guess > serectNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High Number!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Loose The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //when player win
  else if (guess === serectNumber) {
    document.querySelector('.message').textContent = 'Currect Number!';
    document.querySelector('.number').textContent = serectNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.win').textContent =
      'Congrulation You Win The Game!!';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== serectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > serectNumber ? 'Too High Number!' : 'Too Low Number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when input low number
  // else if (guess < serectNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low Number!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Loose The Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  serectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.win').textContent = 'Guess My Number!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
