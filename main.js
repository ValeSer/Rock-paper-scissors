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