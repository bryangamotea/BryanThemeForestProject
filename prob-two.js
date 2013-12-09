$(document).ready(function(){
	
	$(".errlist").empty();
	function maxOfThree(maxOne, maxTwo, maxThree)
	{
		x = " ";
		if (maxOne > maxTwo && maxOne > maxThree)
		{
			return x = x + "maxOne number is the largest: " + maxOne;
		} 
		else if (maxTwo > maxOne && maxTwo > maxThree)
		{
			return x = x + "maxTwo number is the largest: " + maxTwo;
        } 
        else if (maxThree > maxOne && maxThree > maxTwo)
        {
            return x = x + "maxThree number is the largest: " + maxThree;
        } 
        else (maxOne == maxTwo || maxOne == maxThree || maxThree == maxTwo)
        {
        	return $(".errlist").html("<li>Two or more numbers are equal to the largest</li>");
        }
	}

	var maxOne = prompt("Enter maxOne: ");
	var maxTwo = prompt("Enter maxTwo: ");
    var maxThree = prompt("Enter maxThree: ");
	$("<li>"+ maxOfThree(maxOne,maxTwo,maxThree) + "</li>").appendTo(".errlist")
});