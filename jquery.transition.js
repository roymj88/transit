(function($) {
	
	$.fn.transit = function(options) {
		
		$(this).css("display", "none"); 
		this.doTransit();
		
		var settings = $.extend({
			effect: "fadein",
			duration: "1000",
			}, options);
			
		doTransit: function() {
			if(settings.effect == 'fadein') {
				$(this).fadeIn(duration);
			}else if(settings.effect == 'animate'){
				$(this).fadeIn(duration);
			}
		}
	};
	
}( jQuery ));

