$(document).ready(function(){
	
	$(".errlist").empty();
	function max(maxOne, maxTwo)
	{
		if (maxOne > maxTwo)
		{
			return maxOne;
		} else if (maxOne < maxTwo) {
			return maxTwo;
		} else {
			return $(".errlist").html("<li>Numbers are equal.</li>");
		}
	}

	var maxOne = prompt("number 1: ");
	var maxTwo = prompt("number 2: ");
	$("<li>"+ max(maxOne,maxTwo) + "</li>").appendTo(".errlist")
});