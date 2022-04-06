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
}

function playRound() {
  const playerSelection = playerChoice();
  console.log("Your selection: " + playerSelection);
  const computerSelection = computerChoice();
  console.log("Computer selection: " + computerSelection);
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
}

function playerChoice() {
  let input = prompt("Enter rock, paper, or scissors");
  input = input.toLocaleLowerCase();
  let check = validateInput(input);
  while (check == false) {
    //  to validate user input
    input = prompt(
      "Your input is not valid! Please type rock, paper, or scissors"
    );
    while (input == null) {
      input = prompt("Enter rock, paper, or scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
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

function validateInput(valid) {
  return choices.includes(valid);
}

game();
