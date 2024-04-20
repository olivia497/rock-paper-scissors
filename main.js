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

//Check the win of player v bot
function checkWin(){
  let botChoice = rockPaperScissorsCheck()

//create an li, add text to li, append li to ul
  let liPlayer = document.createElement('li');
  liPlayer.textContent = playerChoice
  document.getElementById('userHistory').appendChild(liPlayer)

  let liBot = document.createElement('li');
  liBot.textContent = botChoice
  document.getElementById('botHistory').appendChild(liBot)


  if( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper') ){
    document.querySelector('.winLoseTie').innerText = 'You win'
  }else if(playerChoice === botChoice){
    document.querySelector('.winLoseTie').innerText = 'You tied'
  }else{
    document.querySelector('.winLoseTie').innerText = 'You lose'
  };
};

//Get the bot's choice 
function rockPaperScissorsCheck(){
  let random = Math.random()

  if(random < 0.33){
    return 'rock'
  }else if(random < 0.66){
    return 'scissors'
  }else{
    return 'paper'
  }
}