$(document).ready(function(){
	
	function sort()
	{
		var myArray = new Array("bryan","ryan","yan","an");
		myArray.sort();
		x = " ";
		for (var i = 0; i < myArray.length ; i++) {
			console.log("test");
			x = x + "<li>" + myArray[i] + "</li>";
			$(".errlist").html(x);
		}
	}
	$("#submitbtn").click(sort);
});