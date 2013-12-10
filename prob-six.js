$(document).ready(function(){

	function reverse(str) 
	{
		var rev = str.split("").reverse().join("");
		return rev;
	}

	$("#submitbtn").click(function(){
		var rev = reverse($("#reverseit").val());
		$(".errlist").html(rev);
	});

});