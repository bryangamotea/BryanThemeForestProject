$(document).ready(function(){
	function vowelFunction()
	{
		var vowel = $("#vowel").val();
		$(".errlist").empty();
		if (vowel == "a" || vowel == "e" ||vowel == "i" ||vowel == "o" ||vowel == "u")
		{
			console.log("you entered a vowel!");
			return $("<li>This is a vowel</li>").appendTo(".errlist");
		} 
		else if (vowel.length !== 1) 
		{
			return $("<li>To many input. One letter at a time!</li>").appendTo(".errlist");
		} 
		else if (isNaN(vowel) !== true)
		{
			return $("<li>This is not a letter!</li>").appendTo(".errlist");
		}
		else
		{
			console.log("you entered a consonant!");
			return $("<li>This is a consonant!</li>").appendTo(".errlist");
		}
	} 
	$("#submitbtn").click(vowelFunction);
});