$(document).ready(function() {

	function FormValidation () 
	{
		var valid = $("#validate").val();
		console.log(valid !== (/^[0-9]+$/));
		if (valid == null || valid == " " || valid !== (/^[0-9]+$/))
		{

			$("#errLog").text("You may have entered a non-numeric input or the text box maybe blank! ");

		}

		if (valid == "0")
		{

			$("#errLog").text("Nothing to do, you entered a zero.");	
			
		} 

		else if (valid == "1")
		{
			$("#errLog").text("Thank you for entering the number 1");

		}
		else if (valid > 1)
		{
			x = " ";
			for (var i = valid; i >= 0; i--)
			{
				console.log(i);
				x = x + "countdown: " + i + "<br>";
			}
				$("#errLog").html(x);
		}
	}

$("#submitbtn").click(FormValidation);

});