'use strict';

const playGame = () => {
  let target;
  let humanScore = 0;
  let computerScore = 0;
  let currentRoundNumber = 1;

  const humanGuessInput = document.getElementById('human-guess');
  const roundNumberDisplay = document.getElementById('round-number');
  const computerGuessDisplay = document.getElementById('computer-guess');
  const humanScoreDisplay = document.getElementById('human-score');
  const computerScoreDisplay = document.getElementById('computer-score');
  const targetNumberDisplay = document.getElementById('target-number');
  const computerWinsDisplay = document.getElementById('computer-wins');
  const guessButton = document.getElementById('guess');
  const nextRoundButton = document.getElementById('next-round');
  /*
  if (humanGuessInput.value > 9 && humanGuessInput.value < 0) {
    guessButton.setAttribute('disabled', true);
  }
*/
  guessButton.addEventListener('click', () => {
    const currentHumanGuess = humanGuessInput.value;
    const computerGuess = Math.floor(Math.random() * 10);
    target = Math.floor(Math.random() * 10);

    computerGuessDisplay.textContent = computerGuess;
    targetNumberDisplay.textContent = target;

    guessButton.setAttribute('disabled', true);
    nextRoundButton.removeAttribute('disabled');

    const increaseHumanScore = () => {
      guessButton.textContent = 'You Win';
      guessButton.style.color = 'green';
      humanScore++;
    };
    const increaseComputerScore = () => {
      computerWinsDisplay.textContent = 'Computer Wins';
      computerWinsDisplay.style.color = 'red';
      computerScore++;
    };

    if (
      Math.abs(target - currentHumanGuess) < Math.abs(target - computerGuess)
    ) {
      increaseHumanScore();
    } else if (
      Math.abs(target - computerGuess) < Math.abs(target - currentHumanGuess)
    ) {
      increaseComputerScore();
    } else if (
      Math.abs(target - currentHumanGuess) === Math.abs(target - computerGuess)
    ) {
      increaseHumanScore();
    }

    if (!humanGuessInput.value) {
      window.alert('type in a value in your input box to make a guess.');
      targetNumberDisplay.textContent = '?';
      humanGuessInput.value = '';
      computerWinsDisplay.textContent = '';
      computerGuessDisplay.textContent = '?';
      guessButton.textContent = 'Make a Guess';
      guessButton.style.color = 'white';

      nextRoundButton.setAttribute('disabled', true);
      guessButton.removeAttribute('disabled');

      computerScore = computerScoreDisplay.textContent;
      humanScore = humanScoreDisplay.textContent;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
  });

  nextRoundButton.addEventListener('click', () => {
    nextRoundButton.setAttribute('disabled', true);
    guessButton.removeAttribute('disabled');

    substructButton.setAttribute('disabled', true);
    addButton.removeAttribute('disabled');

    currentRoundNumber++;
    roundNumberDisplay.textContent = currentRoundNumber;

    targetNumberDisplay.textContent = '?';
    humanGuessInput.value = '';
    computerWinsDisplay.textContent = '';
    computerGuessDisplay.textContent = '?';
    guessButton.textContent = 'Make a Guess';
    guessButton.style.color = 'white';
  });

  const addButton = document.getElementById('add');
  const substructButton = document.getElementById('subtract');

  humanGuessInput.addEventListener('input', () => {
    if (humanGuessInput.value > 9 && humanGuessInput.value < 0) {
      guessButton.setAttribute('disabled', true);
    }
  });

  addButton.addEventListener('click', () => {
    humanGuessInput.value++;
    if (humanGuessInput.value <= 8) {
      substructButton.removeAttribute('disabled');
    } else if (humanGuessInput.value > 8) {
      addButton.setAttribute('disabled', true);
    }
  });

  substructButton.addEventListener('click', () => {
    humanGuessInput.value--;
    if (humanGuessInput.value < 1) {
      substructButton.setAttribute('disabled', true);
    } else if (humanGuessInput.value > 1) {
      addButton.removeAttribute('disabled');
    }
  });
};
playGame();
