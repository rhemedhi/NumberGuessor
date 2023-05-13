'use strict';

const playGame = () => {
  let target;
  let humanScore = 0;
  let computerScore = 0;
  // let currentRoundNumber = 1;

  const humanGuessInput = document.getElementById('human-guess');
  const roundNumberDisplay = document.getElementById('round-number');
  const computerGuessDisplay = document.getElementById('computer-guess');
  const humanScoreDisplay = document.getElementById('human-score');
  const computerScoreDisplay = document.getElementById('computer-score');
  const targetNumberDisplay = document.getElementById('target-number');
  const computerWinsDisplay = document.getElementById('computer-wins');
  const guessButton = document.getElementById('guess');
  const nextRoundButton = document.getElementById('next-round');
  const restartGame = document.querySelector('.resetgame');
  

  
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

    const followRules = () => {
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
    };
    if (!humanGuessInput.value) {
      window.alert('type in a value in your input box to make a guess.');
      followRules();
    } else if (humanGuessInput.value > 9) {
      window.alert('Your number is greater than 9, input a number from 0 to 9');
      followRules();
    } else if (humanGuessInput.value < 0) {
      window.alert('Your number is less than 0, input a number from 0 to 9');
      followRules();
    }

    const headerName = document.querySelector('.headerName');
    const divHuman = document.querySelector('.human-guess');
    const divComputer = document.querySelector('.computer-guess');

    const manichanges = () => {
      headerName.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
      nextRoundButton.style.display = 'none';
      restartGame.style.display = 'block';
    };

    if (humanScore === 10) {
      headerName.textContent = 'You won the game play!!';
      divHuman.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
      manichanges();
    } else if (computerScore === 10) {
      headerName.textContent = 'Computer Won the game play!!';
      divComputer.style.backgroundColor = 'rgb(0, 0, 0, 0.5)';
      manichanges();
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
  });

  nextRoundButton.addEventListener('click', () => {
    nextRoundButton.setAttribute('disabled', true);
    guessButton.removeAttribute('disabled');

    substructButton.setAttribute('disabled', true);
    addButton.removeAttribute('disabled');

    // currentRoundNumber++;
    // roundNumberDisplay.textContent = currentRoundNumber;

    targetNumberDisplay.textContent = '?';
    humanGuessInput.value = '';
    computerWinsDisplay.textContent = '';
    computerGuessDisplay.textContent = '?';
    guessButton.textContent = 'Make a Guess';
    guessButton.style.color = 'white';
  });

  const addButton = document.getElementById('add');
  const substructButton = document.getElementById('subtract');

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

  restartGame.addEventListener('click', () => {
    window.location.reload();
  });
};
playGame();
