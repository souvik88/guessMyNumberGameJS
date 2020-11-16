'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "👍Correct Number"
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = '';
*/

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No Number!";
        // when guess is equal to secret number and the player wins
    } else if (guess === secretNumber) {
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = "👍 Correct Number";
        // winner page looks green and secretNumber looks wide
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // when guess is higher than secret number and the player loses
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = "📈 Too High!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "👎 You Lost!";
        }

        // when guess is lower than secret number and the player loses
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = "📉 Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "👎 You Lost!";
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    document.querySelector('.message').textContent = "Start guessing....";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
});
