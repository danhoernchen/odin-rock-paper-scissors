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

/* function getHumanChoice() {
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
} */

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const compScoreDisplay = document.getElementById("computerScore");
const humanScoreDisplay = document.getElementById("humanScore");
const roundTextDisplay = document.getElementById("roundText");
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);
resetBtn.addEventListener("click", resetGame);

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
    compScoreDisplay.innerText = computerScore;
    roundTextDisplay.innerText = `You lose the round! ${computer} beats ${human}.`;
  } else if (human === computer) {
    roundTextDisplay.innerText = `It's a draw. Both chose ${human}`;
  } else {
    humanScore++;
    humanScoreDisplay.innerText = humanScore;
    roundTextDisplay.innerText = `You win the round! ${human} beats ${computer}.`;
  }
  if (humanScore >= 5 || computerScore >= 5) {
    rockBtn.classList.add("disabled");
    paperBtn.classList.add("disabled");
    scissorsBtn.classList.add("disabled");
    resetBtn.classList.remove("disabled");
    gameOverDisplay();
  }
}

function gameOverDisplay() {
  if (humanScore >= 5) {
    roundTextDisplay.innerText = "Congratulations, you won the game.";
  } else {
    roundTextDisplay.innerText =
      "Better luck next time, the computer won this game.";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  rockBtn.classList.remove("disabled");
  paperBtn.classList.remove("disabled");
  scissorsBtn.classList.remove("disabled");
  resetBtn.classList.add("disabled");
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
