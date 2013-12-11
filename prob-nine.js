$(document).ready(function(){
	
	var i = 3;
	var myArray = new Array("efren","gamotea","bantug","lim");
	var bryArray = [];

	function filterLongWords(filter){
		for(var b= 0; b < filter.length;b++) {
			if (filter[b].length > i){

				bryArray.push(filter[b] + "\xa0");
			}
		}
		return bryArray;
	}
	$("#submitbtn").click(function(){
		var result = filterLongWords(myArray);
		$(".errlist").html("<li>"+ result + "</li>");
	});

});