$(document).ready(function(){
	
	$(".errlist").empty();
	function vowelFunction(vowel)
	{
		if (vowel == "a" || vowel == "e" ||vowel == "i" ||vowel == "o" ||vowel == "u"){
			return "This is a vowel!";
		} 
		else if (vowel.length !== 1) {
			return "To many input. One letter at a time!";
		} 
		else if (isNaN(vowel) !== true){
			return "This is not a letter!";
		}
		else{
			return "This is a consonant!";
		}
	} 
	$("#submitbtn").click(function(){

		var result = vowelFunction($("#vowel").val());
		$(".errlist").html("<li>" + result + "</li>");
	});
});