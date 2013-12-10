$(document).ready(function(){

	$(".errlist").empty();
	function maxOfThree(maxOne, maxTwo, maxThree)
	{
		if (maxOne > maxTwo && maxOne > maxThree){
			return maxOne;
		} 
		else if (maxTwo > maxOne && maxTwo > maxThree){
			return maxTwo;
		} 
		else if (maxThree > maxOne && maxThree > maxTwo){
			return maxThree;
		} 
		else (maxOne == maxTwo || maxOne == maxThree || maxThree == maxTwo)
			return "Two or more numbers are equal to the largest.";
		
	}

	$("#submitbtn").click(function(){
		var result = maxOfThree($("#num1").val(),$("#num2").val(),$("#num3").val());
		$(".errlist").html("<li>" + result + "</li>");
	});
});