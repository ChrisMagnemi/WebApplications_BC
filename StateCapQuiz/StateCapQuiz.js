var array = [ {State: "Alabama", Capital: "Montgomery"},
 			 {State: "Alaska", Capital: "Juneau"},
  			{State: "Arizona", Capital: "Phoenix"},
  		{State: "Arkansas", Capital: "Little Rock"},
 	 	{State: "California", Capital: "Sacramento"},
 	    {State: "Colorado", Capital: "Denver"},
  { State: "Connecticut", Capital: "Hartford"},
  { State:"Delaware", Capital: "Dover"},
  { State:"Florida", Capital: "Tallahassee"},
  { State:"Georgia", Capital: "Atlanta"},
  { State:"Hawaii", Capital: "Honolulu"},
  { State:"Idaho", Capital: "Boise"},
  { State:"Illinois", Capital: "Springfield"},
  { State:"Indiana", Capital: "Indianapolis"},
  { State:"Iowa", Capital: "Des Moines"},
  { State:"Kansas", Capital: "Topeka"},
  { State:"Kentucky", Capital: "Frankfort"},
  { State:"Louisiana", Capital: "Baton Rouge"},
  { State:"Maine", Capital: "Augusta"},
  { State:"Maryland", Capital: "Annapolis"},
  { State:"Massachusetts", Capital: "Boston"},
  { State:"Michigan", Capital: "Lansing"},
  { State:"Minnesota", Capital: "St. Paul"},
  { State:"Mississippi", Capital: "Jackson"},
  { State:"Missouri", Capital: "Jefferson City"},
  { State:"Montana", Capital: "Helena"},
  { State:"Nebraska", Capital: "Lincoln"},
  { State:"Nevada", Capital: "Carson City"},
  { State:"New Hampshire", Capital: "Concord"},
  { State:"New Jersey", Capital: "Trenton"},
  { State:"New Mexico", Capital: "Santa Fe"},
  { State:"New York", Capital: "Albany"},
  { State:"North Dakota", Capital: "Bismarck"},
  { State:"Ohio", Capital: "Columbus"},
  { State:"Oklahoma", Capital: "Oklahoma City"},
  { State:"Oregon", Capital: "Salem"},
  { State:"Pennsylvania", Capital: "Harrisburg"},
  { State:"Rhode Island", Capital: "Providence"},
  { State:"South Carolina", Capital: "Columbia"},
  { State:"South Dakota", Capital: "Pierre"},
  { State:"Tennessee", Capital: "Nashville" },
  { State:"Utah", Capital: "Salt Lake City"},
  { State:"Vermont", Capital: "Montpelier"},
  { State:"Virginia", Capital: "Richmond"},
  { State:"Washington", Capital: "Olympia"},
  { State:"West Virginia", Capital:"Charleston"},
  { State:"Wisconsin", Capital: "Madison"},
  { State:"Wyoming", Capital: "Cheyenne"}
  ];


	
 	var i = Math.floor(Math.random() * 50);
 	var object = array[i];
	var output = object.State;
  	var numCorrect = 0;
	var numWrong = 0;
  	

 function randomState(){
 	
  	document.getElementById("statequestion").innerHTML = "What is the capital of " + output + "?";	
}


 function start(){

var correctCapital = object.Capital;
var usermove = document.getElementById("selectmenu").value;

if (usermove == correctCapital){
	numCorrect++;
	document.getElementById("results").innerHTML = "Correct! " + usermove + " is the capital of " + output +".";
	stats();
}
else{
	numWrong++;
	document.getElementById("results").innerHTML = "Wrong! That is not the capital of " + output + ".";
	stats();
}
i = Math.floor(Math.random() * 50);
object = array[i];
output = object.State;
randomState();
}  

function stats(){

	var numQuestions = numCorrect + numWrong;
	var percentCorrect =  numCorrect / numQuestions * 100 ;

	document.getElementById("questions").innerHTML = "Total Quesitons = " + numQuestions;
	document.getElementById("corrects").innerHTML = "Total Correct = " + numCorrect;
	document.getElementById("wrongs").innerHTML = "Total Wrong = " + numWrong;
	document.getElementById("percent").innerHTML = "Percent Correct = " + percentCorrect + "%";

}


