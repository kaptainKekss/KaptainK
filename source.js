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
        // function sendMessage() {
        //     var msg = $("#message").value;
        //     var x = document.createElement("div");
        //     x.setAttribute("type", "text");
        //     x.setAttribute("class", "well");
        //     x.setAttribute("value", msg);
        //     document.body.appendChild(x);
        // }
        // $("#send").click(function(){

        //     var x = document.createElement("div");
        //     x.setAttribute("type", "text");
        //     x.setAttribute("class", "well");
        //     x.setAttribute("value", "something here");
            
        //     $("div.showmsg").appendChild(x);
        // });
        $("#send").click(function(){
            $("#showmsg").text(function(i, origText){
                return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
            });
        });
    });
