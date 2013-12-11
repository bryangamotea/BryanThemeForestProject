$(document).ready(function(){
	// var bryArray = [];
	var obj = {};
	var pattern = /^[a-zA-Z]+$/;
	// obj["a"] = 0;
	// obj["e"] = 0;
	// obj["i"] = 0;
	// obj["o"] = 0;
	// obj["u"] = 0;
	// // obj["b"] = 0;
	// obj["c"] = 0;
	// obj["d"] = 0;
	// obj["f"] = 0;
	// obj["g"] = 0;
	// obj["h"] = 0;
	// obj["j"] = 0;
	// obj["k"] = 0;
	// obj["l"] = 0;
	// obj["m"] = 0;
	// obj["n"] = 0;
	// obj["p"] = 0;
	// obj["q"] = 0;
	// obj["r"] = 0;
	// obj["s"] = 0;
	// obj["t"] = 0;
	// obj["v"] = 0;
	// obj["w"] = 0;
	// obj["x"] = 0;
	// obj["y"] = 0;
	// obj["z"] = 0;
	// obj["a"] = 0;


	// function getInput(bryan) {
	// 	bryan.split("");
	// 	bryArray.push(bryan);
	// 	return bryan;
	// }

	function countOccurence(nikko) {
		if (nikko == "a") {
		// 	var bryan = nikko.split("");
			// obj["alpha"] = ;
			obj["a"]++;
			return obj;
		}
	}

	$("#submitbtn").click(function(){
		console.log(obj);
		var result = countOccurence($("#freq").val());
		$(".errlist").html("<li>" + result + "</li>");
		
	})

});