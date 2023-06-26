// initializing variables
let winMsg = 'Victory'; 
let loseMsg = 'Crushing defeat';
let tieMsg = 'Tie';
let moveList = ['Rock', 'Paper', 'Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll ("button");


// function to calculate who has won among the player and computer 
function calcResult(move1, move2){
    // case for tie
    if (move1 == move2){
        statusDisplay.textContent = tieMsg;
        return {"Message": tieMsg, "player":move1, "Computer":move2}
    }
    // case for win
    else if ((move1 == 0 && move2 == 2) || (move1 == 1 && move2 == 0) || (move1 == 2 && move2 == 1)){
        return { "Message": winMsg, "player":move1, "Computer":move2}
    }
    // case for lose
    else{
        return{ "Message": loseMsg, "player":move1, "Computer":move2} 
    }
}


//generating random value from 0-2 for computer move
function randomMove(){
    return Math.floor(Math.random() * 3);
}


// function to start the game / load the main page
function startGame(){
    statusDisplay.textContent = 'Choose !' // displaying main text 
    for (i=0; i < buttons.length; i++ ){    // using loop for the buttons 
        buttons[i].removeEventListener("click",startGame);  //removing startGame function from middle button
        buttons[i].addEventListener("click",endGame);       // calling endGame function as an event
        buttons[i].textContent = moveList[i];               // adding text to the buttons
        buttons[i].style.visibility = "visible";
        buttons[i].style.display = "inline-block";
    }
    for (i=0; i <moveDisplays.length; i++){                 // hiding the player and computer choice at the beginning
        moveDisplays[i].style.visibility = 'hidden';
    }
}


// function to run the necessary processes and display output
function endGame(event){
    let player_move = moveList.indexOf(event.target.innerHTML);     // initializing variable to get player choice
    let computer_move = randomMove();                               // initializing variable to get computer choice
    let movements = calcResult(player_move, computer_move);         // comparing the choices for result
    document.getElementById("status-head").innerHTML = movements["Message"];
    for (i = 0; i <buttons.length; i = i + 2 ){                     // using loop to hide the first and second button
        buttons[i].style.visibility = 'hidden';
    }
    document.querySelectorAll("button")[1].innerHTML = "Play Again";        // displaying the play again option
    buttons[1].addEventListener("click", startGame);                
    for(i = 0; i < moveDisplays.length; i++){                      
        moveDisplays[i].style = 'display:visible';
    }
     // displaying the player and computer choice
    moveDisplays[0].innerHTML = "You played" + " " +moveList[player_move];
    moveDisplays[1].innerHTML = "Computer played" +  " " +moveList[computer_move];
}


// initiating the game by calling the startGame function.
startGame();