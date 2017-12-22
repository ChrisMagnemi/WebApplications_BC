
// bobc.js linked to bobc.html
// Chris Magnemi


//var cookieArray = (localStorage.getItem('cookieArray') != null) % localStorage.getItem('cookieArray'); : [];
if ((localStorage.getItem('storedCookies') != null)){
	var cookieArray = localStorage.getItem('storedCookies').split(",");
}
else{
	var cookieArray = [];
}
var dbconurl = 'include/dbcon.php';
var cookieurl = 'include/cookie.php' ;

$(document).ready(function() {
    loadTable(cookieurl);
});

function loadTable(url) {
    $.ajax({
        url: url, // URL That returns the table query
        success: function(data) {
            data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
                // Do Your Table Building Here
	                $('#myTable tbody').after('<tr class="ajaxCreated"><td class="name">' 
	                	+ "<input class='snickerDoods' type='checkbox' value='data[i]['attraction_id']'/>" + 
	                    data[i]['name'] +
	                    '</td><td>' + data[i]['entered_by'] + 
	                    '</td><td>' + data[i]['category'] + '</td><td>' + data[i]['stars'] +
	                     '</td><td>' + data[i]['price_range'] +
	                      '</td><td>' + data[i]['url'] + '<br>' + data[i]['comment'] +
	                      '</td>' + '<td class="pig" style="display: none" >' + data[i]['attraction_id'] + '</td></tr>'); 
            }
        }
    });
}

function hider(){
$('.snickerDoods:checked').each(function () {
    td = $(this).closest('tr').children('td.pig').text();
    // console.log(td);
    cookieArray.push(td);
})
setCookie("idc", cookieArray, 7);
localStorage.setItem('storedCookies', cookieArray);
loadTable(cookieurl);
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +"; path=/~magnemi/bobc/bobc-ChrisMag/; domain=.cscilab.bc.edu";
}


function showResults(){
	var search = document.getElementById("searchTextbox").value;
$.ajax({
	url: 'include/dbcon.php',
	success: function(data) {
		data = JSON.parse(data);
		$('.ajaxCreated').remove();
		for (var i = 0; i < data.length; i++){
			 console.log("in for loop...");
			// if( data[i].name == search || data[i].entered_by == search || data[i].category == search ||
			//  data[i].url == search || data[i].comment == search){
	if(data[i].comment !=null){
			 if( (data[i].name).toString().indexOf(search) > -1 || (data[i].entered_by).toString().indexOf(search) > -1 ||
			 	 (data[i].category).toString().indexOf(search) > -1 ||
			 	 (data[i].url).toString().indexOf(search) > -1 
			 	  || (data[i].comment).toString().indexOf(search) > -1 
			 	 ) {
				
			
			$('#myTable tbody').after('<tr class="ajaxCreated"><td class="name">' 
	                	+ "<input class='snickerDoods' type='checkbox' value='data[i]['attraction_id']'/>" + 
	                    data[i]['name'] +
	                    '</td><td>' + data[i]['entered_by'] + 
	                    '</td><td>' + data[i]['category'] + '</td><td>' + data[i]['stars'] +
	                     '</td><td>' + data[i]['price_range'] +
	                      '</td><td>' + data[i]['url'] + '<br>' + data[i]['comment'] +
	                      '</td>' + '<td class="pig" style="display: none" >' + data[i]['attraction_id'] + '</td></tr>');
		} 
	}
		}	
	}

});
return false;
}




function displayAddAttractionForm(){
	document.getElementById('attractionDivPopUp').style.display = "block";
	return false;
}

function hideAddAttractionForm(){
	document.getElementById('attractionDivPopUp').style.display = "none";
	return false;
}

function validateForm() {
	console.log("in validateForm");
	var valName = document.getElementById("name").value; 
	var valCategory = document.getElementById("category").value;
	var valRating = document.getElementById("rating").value; 
	var valprice = document.getElementById("price").value
	var valEnteredBy = document.getElementById("entered_by").value;
	var valURL = document.getElementById("url").value;
	var valPhone = document.getElementById("phone").value;
	var valAddress = document.getElementById("address").value;
	var valComments = document.getElementById("comments").value;
    
    if (valName == null || valName == "") {
        document.getElementById("nameDiv").innerHTML = "This field is required";	
    }
    if (valCategory == null || valCategory =="") {
    	document.getElementById("categoryDiv").innerHTML = "This field is required";
    }
    if (valRating == "-") {
        document.getElementById("ratingDiv").innerHTML = "This field is required";	
    }
    if (valprice == "-") {
        document.getElementById("priceDiv").innerHTML = "This field is required";	
    }
	if (valEnteredBy == null || valEnteredBy == "") {
        document.getElementById("enteredDiv").innerHTML = "This field is required";	
    }
    if (valURL == null || valURL == "") {
        document.getElementById("urlDiv").innerHTML = "This field is required";	
    }
    if (valPhone == null || valPhone == "") {
        document.getElementById("phoneDiv").innerHTML = "This field is required";	
    }
    if (valAddress == null || valAddress == "") {
        document.getElementById("addressDiv").innerHTML = "This field is required";	
    }
    if (valComments == null || valComments == "") {
        document.getElementById("commentsDiv").innerHTML = "This field is required";	
    }


//     if (!$("input:radio[name='role']:checked").val()) {
//     document.getElementById("roleDiv").innerHTML = "You must select a membership type";
// 	}

	if (valName != null && valName != "" 
		&& valCategory != null && valCategory != ""
		 && valRating != "-" 
		 && valprice != "-"
		 && valEnteredBy != null && valEnteredBy != ""
		 && valURL != null && valURL != ""
		 && valPhone != null && valPhone != ""
		 && valAddress != null && valAddress != ""
		 && valComments != null && valComments != ""

		 ){
			return true;
			handleForm();
		}
		else{
			return false;
		}
	

 
}

function eraseCookie(name){
	localStorage.setItem('storedCookies', 0);
setCookie(name, " ", -1);
}