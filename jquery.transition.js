(function($) {
	$.fn.transit = function() {
		$(this).css("display", "none"); 
		$(this).fadeIn(2000);
	};
}( jQuery ));

$(document).ready(function(){
	$("body").transit();
});

$(document).on("click",".transit", function(){
	$("body").transit();
});

$(document).on("click", ".div1", function(){
	$(".transitDiv").transit();
});
