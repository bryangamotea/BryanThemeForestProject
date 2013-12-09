$(document).ready(function () {


//functions 
	function onleftclick() {	
		$(".sliderWrapper .item:last-child").prependTo(".imgslider");
		$(".imgslider").css({"margin-left": "-330px"});
		$(".imgslider").animate({"margin-left": "0px"},200,function(){

		});
	}

	function onrightclick() {
		$(".imgslider").animate({"margin-left": "-330px"},200,function(){
			$(".imgslider .item:first-child").appendTo(".imgslider");
			$(".imgslider").css({"margin-left": "0px"});
	
	});
}


// events
	$("#leftbtn").click(onleftclick);
	$("#rightbtn").click(onrightclick);

	$(".item-content").hover(function(){
		$(this).animate({"margin-top": "230px"},200, function(){
			
		});

		$(this).find(".open").animate({"padding-right": "20px"},200, function(){

		});
	
	}, function(){
		$(this).animate({"margin-top": "250px"},200,function(){

		});

		$(this).find(".open").animate({"padding-right": "0px"},200, function(){
			
		});
	});
});