$(document).ready(function() {

function FormValidation () 
{
	var valid = parseInt($("#validate").val());
	 if (valid == null || valid == " " || valid !== (/^[0-9]+$/)){
		$("#errLog").text("You may have entered a non-numeric input or the text box maybe blank! ");
	}

	 
	 for (var i = valid; i >= 0; i--) {

	 if (valid == 0) {
		$("#errLog").text("Nothing to do, you entered a zero.");	
	} 

	else if (valid == 1) {
		$("#errLog").text("Thank you for entering the number 1");
		
	} else{
	 	console.log(i);
		$("#count").text("-countdown: " + i);
		}
	 };

	 
	 
}

$("#submitbtn").click(FormValidation);

});