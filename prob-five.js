$(document).ready(function() {
	
	var myArray = [1,2,3,4];
	var Quo = myArray.reduce(function(a,b){
		return a * b;
	});
	
	function total() {
		var Sum = myArray.reduce(function(a,b){
		return a + b;
	});
		$("<li>Your array's sum is: " + Sum + "</li>").appendTo(".errlist");
	}

	function quotient() {
		var quo = myArray.reduce(function(a,b){
		return a * b;
	});
		$("<li>Your array's quotient is: " + quo + "</li>").appendTo(".errlist");
	}

	$("#add").click(total);
	$("#mult").click(quotient);


});