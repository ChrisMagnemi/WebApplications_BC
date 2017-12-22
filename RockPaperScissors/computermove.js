function computermove(){

var move = Math.floor(Math.random() * 3);
var moves = ['rock', 'paper', 'scissors'];


   switch (move){
    	case 0:
    		return moves[0];
    	break;
  
   	    case 1:
     		return moves[1];
    	break;
    	    
	   	case 2:
     		return moves[2];
    	break;
    
    	default:
    		alert("You did not choose your tool.");
    	break;	
   }

 }


function play() {
var compmove = computermove();


try {
var usermove = document.querySelector('input[name = "human"]:checked').value;
}
catch (err){
	alert("You gotta play the game!!!!");
}


switch (usermove){
	case "rock":
		switch (compmove) {
		
			case "rock":
				document.getElementById("game").innerHTML = "You tied! ";
				document.getElementById("image").innerHTML = "<img src=\'img/tie.jpg\'>"
			break;
			
			case "paper":
				document.getElementById("game").innerHTML = "You Lose! ";
				document.getElementById("image").innerHTML = "<img src=\'img/loserville.jpg\'>"
			break;
			
			case "scissors":
				document.getElementById("game").innerHTML = "You Win! ";
				document.getElementById("image").innerHTML = "<img src=\'img/win.png\'>"
			break;
			
			default:
				document.getElementById("game").innerHTML = "You did not submit your tool.";
			break;
			}
			
	break;
	
	case "paper":
		switch (compmove) {
		    case "rock":
				document.getElementById("game").innerHTML = "You Win! ";
				document.getElementById("image").innerHTML = "<img src=\'img/win.png\'>"
			break;
			
			case "paper":
				document.getElementById("game").innerHTML = "You tied! ";
				document.getElementById("image").innerHTML = "<img src=\'img/tie.jpg\'>"
			break;
			
			case "scissors":
				document.getElementById("game").innerHTML = "You Lose! ";
				document.getElementById("image").innerHTML = "<img src=\'img/loserville.jpg\'>"
			break;
			
			default:
				document.getElementById("game").innerHTML = "You did not submit your tool.";
			break;
			}
	break;
	
	case "scissors":
		switch (compmove) {
		    case "rock":
				document.getElementById("game").innerHTML = "You Lose! ";
				document.getElementById("image").innerHTML = "<img src=\'img/loserville.jpg\'>"
			break;
			
			case "paper":
				document.getElementById("game").innerHTML = "You Win! ";
				document.getElementById("image").innerHTML = "<img src=\'img/win.png\'>"
			break;
			
			case "scissors":
				document.getElementById("game").innerHTML = "You tied! ";
				document.getElementById("image").innerHTML = "<img src=\'img/tie.jpg\'>"
			break;
			
			default:
				document.getElementById("game").innerHTML = "You did not submit your tool.";
			break;
			}
	break;
	
	
	}


}

 

