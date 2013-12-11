$(document).ready(function(){
	
	var myArray = new Array("bryan","ryan","yan","an");
	myArray.sort();
	x = " ";
	function sortElement(bryArr){
		
		for (var i = 0; i < bryArr.length ; i++) {
			console.log("test");
			// x = x  + bryArr[i];
			// $(".errlist").html(x);
			bryArr[i];
		}
		return bryArr;
	}

	$("#submitbtn").click(function(){
		var result = sortElement(myArray);
		$(".errlist").html("<li>" + result + "</li>");
	});

});