const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    
    if (userGuess === randomNumber) {
        displayFeedback('Congratulations! You guessed the correct number!🥰🎊');
    } else if (userGuess < randomNumber) {
        displayFeedback('Too low. Try again!😎');
    } else {
        displayFeedback('Too high. Try again!😥');
    }
}

function displayFeedback(message) {
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = message;
    feedback.style.animation = 'fadeIn 1s ease-in-out';
}