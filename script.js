// getComputerChoice function
function getComputerChoice() {
    // Get a random number between 0 and 2 (both inclusive)
    let randNum = Math.floor(Math.random() * 3);

    // Return the random choice according to the generated number.
    if (randNum == 0) return "rock";
    if (randNum == 1) return "paper";
    if (randNum == 2) return "scissors";
}

// getHumanChoice function
function getHumanChoice() {
    // prompt the user to enter the choice.
    let userChoice = prompt("Enter your choice-Rock, Paper, or Scissors: ");

    // Return the user choice
    return userChoice;
}

// PlayGame function
function PlayGame() {
    // Variables to store the scores
    let humanScore = 0, computerScore = 0;

    // Function to play a single round of the game with arguments computerChoice and humanChoice
    function playRound(humanChoice, computerChoice) {
        // convert the human choice to lowercase for comparison
        humanChoice = humanChoice.toLowerCase();

        // if human choice is same as the computer choice, then it's a tie.
        if (humanChoice === computerChoice) return "It's a tie!";
        // if human choice is rock
        if (humanChoice === "rock") {
            // if computer choice is paper, then increment the computer score and return "You lose! Paper beats Rock."
            if (computerChoice === "paper") {
                computerScore++;
                //return "You lose! Paper beats Rock.";
            } else if (computerChoice === "scissors") { // if computer choice is scissors, then Increment the human score and return "You won! Rock beats Scissors."
                humanScore++;
                //return "You won! Rock beats Scissors."
            }
        } else if (humanChoice === "paper") { // if human choice is paper
            // if computer choice is rock, then Increment the human score and return "You won! Paper beats Rock."
            if (computerChoice === "rock") {
                humanScore++;
                //return "You won! Paper beats Rock.";
            } else if (computerChoice === "scissors") { // if computer choice is scissors, then increment the computer score and return "You lose! Scissors beat Paper." 
                computerScore++;
                //return "You lose! Scissors beat Paper.";
            } 
        } else if (humanChoice === "scissors") { // if human choice is scissors
            // if computer choice is rock, then increment the computer score return "You lose! Rock beats Scissors."
            if (computerChoice === "rock") {
                computerScore++;
                //return "You lose! Rock beats Scissors.";
            } else if (computerChoice === "paper") { // if computer choice is paper, then increment the human score and return "You won! Scissors beat Paper."
                humanScore++;
                //return "You won! Scissors beat Paper."
            }
        }
        
    }

    // for (let i = 1; i <= 5; i++)
    //     playRound(getHumanChoice(), getComputerChoice());

    // Play a round on the click of a button
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            const computerChoice = getComputerChoice();
            const humanChoice = e.target.textContent;
            playRound(humanChoice, computerChoice);
            checkScore();
        });
    })

    function checkScore() {
        if (humanScore == computerScore) console.log("It's a tie");
        if (humanScore > computerScore) console.log("You won! Your score is " + humanScore);
        else console.log("You lose! Your score is " + humanScore);
    }
    
}

PlayGame();