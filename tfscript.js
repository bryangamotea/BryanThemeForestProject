$(document).ready(function () {


//functions 
	function onleftclick() {
		$(".imgslider img:last-child").prependTo(".imgslider");
		$(".imgslider").css({"margin-left": "-25%"});
		$(".imgslider").animate({"margin-left": "0px"},100,function(){

		});
	}

	function onrightclick() {
		$(".imgslider").animate({"margin-left": "-25%"},100,function(){
			$(".imgslider img:first-child").appendTo(".imgslider");
			$(".imgslider").css({"margin-left": "0px"});
	
	});
}

	// events
	$("#leftbtn").click(onleftclick);
	$("#rightbtn").click(onrightclick);

});