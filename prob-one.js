$(document).ready(function(){
	
	$(".errlist").empty();

	function max(maxOne, maxTwo)
	{	
		if (maxOne > maxTwo){
			return maxOne;
		} 
		else if (maxOne < maxTwo){
			return maxTwo;
		} 
		else{
			return "Numbers are equal.";
		}
	}

		$("#submit").click(function(){
			var result = max($("#num1").val(),$("#num2").val());
			$(".errlist").html("<li>" + result + "</li>");
		});
});