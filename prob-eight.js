$(document).ready(function(){


	var longest = 0;
	var myArray = new Array("efren","gamotea","bantug","lim");

	function findLongestWord (bryanList) {
		for(i = 0; i < bryanList.length ;i++) {
			if (bryanList[i].length > longest){
			longest = bryanList[i].length;	
			}
		}
		return longest;
	}
	$("#submitbtn").click(function(){
		console.log("test");
		var result = findLongestWord(myArray);
		$(".errlist").html("<li>"+ result + "</li>");
	});

});