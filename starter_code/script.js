var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    var num= Math.floor(Math.random()*3);
    if(num==0){
        return "paper"
    }
    
    else if (num==1){
        return "rock"
    }
    
    else if (num==2){
        return "scissors"
    }
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
}

// This function picks the winner
function pickWinner(user, ai) {
     if (user==ai) {
    return "Draw";
         
     } 
     
     else if (user=="rock"&&ai=="paper") {
         return "ai"
         
          }
          
    else if (user=="paper"&&ai=="rock") {
        
        return "user"
    }
    
    else if (user=="scissors"&&ai=="rock") {
        return "ai"
    }
    
    else if (user=="rock"&&ai=="scissors") {
        return "user"
    }
    

    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
    $(".token").click (evaluate);
});
