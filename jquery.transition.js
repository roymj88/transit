(function($) {
	var effects = {
		an : animate,
		fn : fadeIn,
		sd : slide,
		pp : pop,
	};	
		
	
	
	$.fn.transit = function() {
		$(this).css("display", "none"); 
		$(this).fadeIn(2000);
	};
}( jQuery ));

