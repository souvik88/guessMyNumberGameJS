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

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    if (!guess) {
        displayMessage("⛔ Not A Number");
        // when guess is equal to secret number and the player wins
    } else if (guess === secretNumber) {
        document.querySelector('.score').textContent = score;
        displayMessage("👍 Correct Number");
        // winner page looks green and secretNumber looks wide
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // when guess is higher or lower than secret number and the player loses
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("👎 You Lost!");
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    displayMessage("Start guessing....");
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
});
