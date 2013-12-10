$(document).ready(function() {
	
	var myArray = [1,2,3,4];
	var Sum = myArray.reduce(function(a,b){
		return a + b;
	});

	var Quo = myArray.reduce(function(a,b){
		return a * b;
	});
	

	$("<li>Your array's sum is: " + Sum + "</li>").appendTo(".errlist");
	$("<li>Your array's quotient is: " + Quo + "</li>").appendTo(".errlist");
});