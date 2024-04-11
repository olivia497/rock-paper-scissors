const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//Get player choice 
rock.addEventListener('click', () => {
  playerChoice = 'rock'
  checkWin()
});
paper.addEventListener('click', () => {
  playerChoice = 'paper'
  checkWin()
});
scissors.addEventListener('click', () => {
  playerChoice = 'scissors'
  checkWin()
});
