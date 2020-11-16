'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "👍Correct Number"
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = ;
*/

const secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No Number!";
        
        // when guess is equal to secret number and the player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "👍 Correct Number";

        // winner page looks green and secretNumber looks wide
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

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