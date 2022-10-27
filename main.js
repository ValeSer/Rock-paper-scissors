const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
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