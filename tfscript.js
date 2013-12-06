$(document).ready(function () {


//functions 
	function onleftclick() {
		$(".imgslider img:last-child").prependTo(".imgslider");
		$(".imgslider").css({"margin-left": "-26%"});
		$(".imgslider").animate({"margin-left": "0px"},150,function(){

		});
	}

	function onrightclick() {
		$(".imgslider").animate({"margin-left": "-26%"},150,function(){
			$(".imgslider img:first-child").appendTo(".imgslider");
			$(".imgslider").css({"margin-left": "0px"});
	
	});
}

	// events
	$("#leftbtn").click(onleftclick);
	$("#rightbtn").click(onrightclick);

});