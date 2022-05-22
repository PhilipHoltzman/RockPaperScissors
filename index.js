
const DECISIONS = ["rock","paper","scissors"];

// various game variables
let computerDecision = '';
let playerchoice = '';
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    computerDecision = Math.floor(Math.random() * 3)
}

function playerSelection(){
    computerDecision = Math.floor(Math.random() * 3)
};

function scoreCheck(){
    if(computerScore >= 5 || playerScore >= 5){
        if(playerScore > computerScore){
            console.log("PLAYER WON!")
        }
        else{
            console.log("Computer won!")
        }


    }
    else{
        game();
    }
}


function game(){
    computerPlay();
    playerSelection();
    

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

game();


