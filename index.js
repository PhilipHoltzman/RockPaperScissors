
const DECISIONS = ["rock","paper","scissors"];

// various game variables
let computerDecision = '';
let playerchoice = '';
let playerScore = 0;
let computerScore = 0;

let rockButton = document.getElementById('Rock');
let paperButton = document.getElementById('Paper');
let scissorsButton = document.getElementById('Scissors');

rockButton.addEventListener("click", rockChoice);

function rockChoice(){
    game(0);
};

paperButton.addEventListener("click", paperChoice );

function paperChoice(){
    game(1);
};

scissorsButton.addEventListener("click", scissorsChoice );

function scissorsChoice(){
    game(2);
};

function computerPlay(){
    computerDecision = Math.floor(Math.random() * 3)
};

function scoreCheck(){
    updatePlayerScore(playerScore);
    updateComputerScore(computerScore);
    if(computerScore >= 5 || playerScore >= 5){
        var elem = document.getElementById('winlose');
        if(playerScore > computerScore){
            console.log("PLAYER WON!")
            elem.textContent = "CONGRATS YOU WON!!! COMPUTER LOSES!!!!"
            document.getElementById('Rock').disabled = true;
            document.getElementById('Paper').disabled = true;
            document.getElementById('Scissors').disabled = true;
        }
        else{
            console.log("Computer won!")
            elem.textContent = "YOU LOSE!!! COMPUTER WINS!!!!"
            document.getElementById('Rock').disabled = true;
            document.getElementById('Paper').disabled = true;
            document.getElementById('Scissors').disabled = true;
        }
    }
    else{
        console.log("waiting..")
    }
}

function updatePlayerScore(playerScore){
    var elem = document.getElementById('playerScore');
    elem.textContent =  "Player Score: " + playerScore.toString();
}
function updateComputerScore(computerScore){
    var elem2 = document.getElementById('computerScore');
    elem2.textContent =  "Computer Score: " + computerScore.toString();
}


function game(playerchoice){
    computerPlay();
    console.log("Computer chose: " + computerDecision)

    // if player chooses Rock
    if(playerchoice == 0 && computerDecision == 1){
        computerScore +=1 ;
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    };
    if(playerchoice == 0 && computerDecision == 2){
        playerScore +=1 ;
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    };
    if(playerchoice == 0 && computerDecision == 0){
        console.log("Tie");
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    };

    // if player chooses paper
    if(playerchoice == 1 && computerDecision == 2){
        computerScore +=1 ;
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    };
    if(playerchoice == 1 && computerDecision == 0){
        playerScore +=1 ;
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    };
    if(playerchoice == 1 && computerDecision == 1){
        console.log("Tie");
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    };
    
    // if player chooses scissors
    if(playerchoice == 2 && computerDecision == 0){
        computerScore +=1 ;
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    };
    if(playerchoice == 2 && computerDecision == 1){
        playerScore +=1 ;
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    };
    if(playerchoice == 2 && computerDecision == 2){
        console.log("Tie");
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    };
    
    scoreCheck();
        
};



