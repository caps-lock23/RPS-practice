// player pick rock paper scissors
// computer pick a random choice
// rock beats scissors, scissors beats rock, paper beats rock, else tie
// show player and computure choices
// show winner per round
// play 5 rounds
// first to get 3 is champion

const choices = ["rock", "paper", "scissors"];

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  console.log(playerSelection);
  const computerSelection = computerChoice();
  console.log(computerSelection);
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
}

function playerChoice() {
  let input = prompt("Choose rock, paper, or scissors");
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(player, computer) {
  if (player === computer) {
    return "Its a tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win";
  } else {
    return "You lose";
  }
}

game();
