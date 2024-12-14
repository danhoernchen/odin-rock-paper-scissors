function getComputerChoice(){
    let number = Math.floor((Math.random() * 3) + 1);
    if (number === 1){
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("What's your choice: Rock, Paper or Scissors?")
    choice = choice.trim().toLowerCase();
    while (true){
    if(choice === "rock") {
        return "rock";
    } else if (choice === "paper"){
        return "paper";
    } else if (choice === "scissors"){
        return "scissors"
    } else {
        console.log ("Invalid choice, please enter either Rock, Paper or Scissors.");
        getHumanChoice();
    }
}
}

function checkInput(choice) {

}