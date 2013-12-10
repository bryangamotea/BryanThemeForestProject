$(document).ready(function(){
	var i = 7;
	var myArray = new Array("efren","gamotea","bantug","lim", "asdfghjjk");
	function filterLongWords(filter){
		for(var b= 0; b < myArray.length;b++) {
			if (myArray[b].length > i){
				myArray[b];
			}
		}
	return myArray[b];
	}
	$("#submitbtn").click(function(){
		var result = filterLongWords(myArray);
		$(".errlist").html("<li>"+ result + "</li>");
	});

});