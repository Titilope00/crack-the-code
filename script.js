let randomNumber = generateRandomNumber();
let score = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);

    if (userGuess === randomNumber) {
        displayFeedback('Congratulations! You guessed the correct number!🥰');
        score += 5; // Increase score by 5 diamond points
        document.getElementById('score').innerText = `Score: ${score}`;
        randomNumber = generateRandomNumber();
        setTimeout(clearInput, 8000); // Clear input field after 8 seconds
    } else if (userGuess < randomNumber) {
        displayFeedback('Too low. Try again!😥');
    } else {
        displayFeedback('Too high. Try again!🙂');
    }
}

function displayFeedback(message) {
    document.getElementById('feedback').innerText = message;
}

function clearInput() {
    document.getElementById('guessInput').value = '';
}