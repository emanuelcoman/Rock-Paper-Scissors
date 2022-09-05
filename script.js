"use strict"
let condition=0;
function getComputerChoice()
{
    let choiceArray = [ 'Rock','Paper','Scissors'];
    let randomIndex = Math.floor(Math.random()* choiceArray.length);
    let randomElement = choiceArray[randomIndex];
    console.log("Computer selected "+randomElement)
    return randomElement;
   
}

function getPlayerChoice()
{
    let input = prompt("Please enter your choice","Rock");
    console.log("You selected "+input);
    if(input !=null)
    return input.toLowerCase();
}

function playRound(playerSelection, computerSelection)
 {
    
    condition=0;
    if(playerSelection == 'rock')
    {
        if(computerSelection == 'Paper')
         console.log("You lose! Paper beats rock");
         else if (computerSelection=='Scissors')
        {console.log("You win! Rock beats scissors"); condition=1;}
        else if(computerSelection=='Rock')
        {console.log("Draw!");condition=2;}
        
    }
    if(playerSelection == 'paper')
    {
        if(computerSelection == 'Paper')
         {console.log("Draw");condition=2;}
         else if (computerSelection=='Scissors')
        console.log("You lose! Scissors beat paper!");
        else if(computerSelection=='Rock')
        {console.log("You win! Paper beats rock"); condition=1;}
    }
    if(playerSelection == 'scissors')
    {
        if(computerSelection == 'Paper')
         {console.log("You win! Scissors beat paper"); condition=1;}
         else if (computerSelection=='Scissors')
        {console.log("Draw");condition=2;}
        else if(computerSelection=='Rock')
        console.log("You lose! Rock beats scissors");
    }
    return condition;
 }
 function game()
{
    let i;
    let playerScore=0;
    let computerScore=0;
    for (i=0;i<5;i++)
    {
        playRound(getPlayerChoice(),getComputerChoice());
        if( condition==1)
        playerScore++;
        else if( condition==0)
        computerScore++;


    }
    if(playerScore>computerScore)
    console.log("Congratulations! You just won the whole game!");
    else if (playerScore<computerScore)
    console.log("Unfortunately, you have lost the whole game!");
    else if(playerScore==computerScore)
    console.log("The game has concluded with a draw!");
}
game();