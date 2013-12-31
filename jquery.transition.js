(function($) {
        var settings = {
                effect: "fadein",
		duration: "1000"
        }; 
        
        $.fn.transit = function(options) {
                $(this).css("display", "none");
                if(settings.effect == 'fadein') {
			$(this).fadeIn(duration);
		}
		/*else if(settings.effect == 'animate'){
			$(this).fadeIn(duration);
		}*/
        };
        
}( jQuery ));

