//include 'util.js'
$(document).ready(function() {
    
        // /* This is basic - uses default settings */
        
        // $("a#single_image").fancybox();
        
        // /* Using custom settings */
        
        // $("a#inline").fancybox({
        //     'hideOnContentClick': true
        // });
    
        /* Apply fancybox to multiple items */
        
        $(".grouped_elements").fancybox({
            'transitionIn'	:	'elastic',
            'transitionOut'	:	'elastic',
            'speedIn'		:	600, 
            'speedOut'		:	200, 
            'overlayShow'	:	false
        });

        $(".grouped_elements").fancybox({
            'titlePosition'	:	'over',
            'onComplete'	:	function() {
                $("#fancybox-wrap").hover(function() {
                    $("#fancybox-title").show();
                }, function() {
                    $("#fancybox-title").hide();
                });
            }
        });
        
    });
