function getComputerChoice() {
  let number = Math.floor(Math.random() * 3 + 1);
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  choice = prompt("What's your choice: Rock, Paper or Scissors?");
  choice = choice.trim().toLowerCase();
  while (true) {
    if (choice === "rock") {
      return "Rock";
    } else if (choice === "paper") {
      return "Paper";
    } else if (choice === "scissors") {
      return "Scissors";
    } else {
      console.log(
        "Invalid choice, please enter either Rock, Paper or Scissors."
      );
    }
  }
}

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);

var humanScore = 0;
var computerScore = 0;
function playRound() {
  var computer = getComputerChoice();
  var human = this.value;
  if (
    (computer === "Rock" && human === "Scissors") ||
    (computer === "Paper" && human === "Rock") ||
    (computer === "Scissors" && human === "Paper")
  ) {
    computerScore++;
    console.log(`You lose the round! ${computer} beats ${human}.`);
  } else if (human === computer) {
    console.log(`It's a draw. Both chose ${human}`);
  } else {
    humanScore++;
    console.log(`You win the round! ${human} beats ${computer}.`);
  }
}

/* function playGame() {
  var humanScore = 0;
  var computerScore = 0;
  while (humanScore < 5 && computerScore < 5) {
    playRound();
  }
  if (humanScore > computerScore) {
    console.log("Congratulations, you won the game.");
  } else {
    console.log("Better luck next time, the computer won this game.");
  }

  function playRound() {
    var computer = getComputerChoice();
    var human = getHumanChoice();
    if (
      (computer === "Rock" && human === "Scissors") ||
      (computer === "Paper" && human === "Rock") ||
      (computer === "Scissors" && human === "Paper")
    ) {
      computerScore++;
      console.log(`You lose the round! ${computer} beats ${human}.`);
    } else if (human === computer) {
      console.log(`It's a draw. Both chose ${human}`);
    } else {
      humanScore++;
      console.log(`You win the round! ${human} beats ${computer}.`);
    }
  }
} */
