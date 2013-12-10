$(document).ready(function(){

	function reverse() 
	{
		var str = $("#reverseit").val();
		var rev = str.split("").reverse().join("");
		$(".errlist").html(rev);
	}

	$("#submitbtn").click(reverse);


});