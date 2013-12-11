$(document).ready(function(){

	function checkForVowel(b){
		switch(b)
		{
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
			case "A":
			case "E":
			case "I":
			case "O":
			case "U":
			case " ":
			return true;
			break;
			default:
			return false;
		}
	}

	function convert(r){
		var bry = 0;
		var r_array = new Array();
		r_array = r.split("");
		while (bry < r_array.length){
			if(!checkForVowel(r_array[bry])){

				r_array.splice(bry + 1, 0, "o");
				r_array.splice(bry + 2,0 , r_array[bry]);
				bry += 3;
			
			}

			else
				bry++;

		}
		return r_array.join("");
	}

	
	$("#submitbtn").click(function(){
	console.log("test");
	var result = convert($("#input").val());
	$(".errlist").html("<li>" + result + "</li>");

	});

});