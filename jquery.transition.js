(function($) {
	/*General Settings*/
        var settings = {
                effect: "fadein",
		duration: "1000"
        }; 
        
        $.fn.transit = function(options) {
                $(this).css("display", "none");
                /*Fetching user defined values*/
                var effect   = options.effect;
                var duration = options.duration;
                /*Fetching config values*/
                
                
                /*Checking with config values*/
                if(!effect){
                	effect = settings.effect;	
                }
                if(!duration){
                	duration = settings.duration;	
                }
                /*Checking with config values*/
                
                
                /*Applying corresponding effects*/
                if(effect == 'fadein') {
			$(this).fadeIn(duration);
		}
                /*Applying corresponding effects*/
                
		/*else if(settings.effect == 'animate'){
			$(this).fadeIn(duration);
		}*/
        };
        
}( jQuery ));

