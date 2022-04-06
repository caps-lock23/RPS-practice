// player pick from rock paper scissors
// computer pick a random choice
// rock beats scissors, scissors beats rock, paper beats rock, else tie
// show player and computer choices
// show winner per round
// play 5 rounds
// log each winner per round

const choices = ["rock", "paper", "scissors"];

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

function playRound() {
  const playerSelection = playerChoice();
  console.log("Your selection: " + playerSelection);
  const computerSelection = computerChoice();
  console.log("Computer selection: " + computerSelection);
  const result = checkWinner(playerSelection, computerSelection);
  console.log(result);
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
    return "You win, " + player + " beats " + computer;
  } else {
    return "You lose, " + computer + " beats " + player;
  }
}

function validateInput(valid) {
  return choices.includes(valid);
}

game();
