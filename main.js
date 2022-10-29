const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Choice not valid');
    }
  }
  
  getUserChoice('rock');
  getUserChoice('rocgk');
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3); 
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1: 
        return 'paper';
        break;
      case 2:
        return 'scissors';
    }
  }
  console.log(getComputerChoice());
  console.log(getComputerChoice());
  console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'You won!';
    }
    if (userChoice === computerChoice) {
      return 'This is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer won';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'Computer won';
        } else {
          return 'You won!';
        }
      }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer won';
      } else {
        return 'You won!';
      }
    }
  }
  
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  