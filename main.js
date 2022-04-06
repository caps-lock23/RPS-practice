// player pick from rock paper scissors
// computer pick a random choice
// rock beats scissors, scissors beats rock, paper beats rock, else tie
// show player and computer choices
// show winner per round
// play 5 rounds
// log each winner per round

const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  logWins();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
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
    return "tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function validateInput(valid) {
  return choices.includes(valid);
}

function logWins() {
  let playerWins = winners.filter((item) => item == "player").length;
  let computerWins = winners.filter((item) => item == "computer").length;
  let ties = winners.filter((item) => item == "tie").length;
  console.log("Results:");
  console.log("Player wins:", playerWins);
  console.log("Computer wins:", computerWins);
  console.log("Tie count:", ties);
}

game();
