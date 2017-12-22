function compute(){
		
	var temp = Number(document.getElementById("temp").value);
	var ws = Number(document.getElementById("ws").value);
	var windchill = (Number(35.74 + 0.6215 * temp - 35.75* Math.pow(ws, 0.16)  + .4275 * temp * Math.pow(ws, 0.16))).toFixed(2);
	var element = document.getElementById("output");
	element.innerHTML = "At a temperature of " + temp + " and a wind speed of " + ws+ " , The new temperature is " +  windchill;  

		
		return false;
	}

   