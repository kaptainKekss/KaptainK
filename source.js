//include 'util.js'
$(document).ready(function() {
    
        // /* This is basic - uses default settings */
        
        // $("a#single_image").fancybox();
        
        // /* Using custom settings */
        
        // $("a#inline").fancybox({
        //     'hideOnContentClick': true
        // });
    
        /* Apply fancybox to multiple items */
        
        // $(".grouped_elements").fancybox({
        //     'transitionIn'	:	'elastic',
        //     'transitionOut'	:	'elastic',
        //     'speedIn'		:	600, 
        //     'speedOut'		:	200, 
        //     'overlayShow'	:	false
        // });

        // $(".grouped_elements").fancybox({
        //     'titlePosition'	:	'over',
        //     'onComplete'	:	function() {
        //         $("#fancybox-wrap").hover(function() {
        //             $("#fancybox-title").show();
        //         }, function() {
        //             $("#fancybox-title").hide();
        //         });
        //     }
        // });

        function newMessage() {
            var li = document.createElement("li").innerHTML.addClass("msg"); 
        
            var inputValue = document.getElementById("message").innerHTML.value;
            
              var username = document.getElementById("name").innerHTML.value;
              var user = document.createTextNode(username).innerHTML;
              
              var t = document.createTextNode(inputValue).innerHTML;
              var div = document.createElement("div").innerHTML;
              
              var spa = document.createElement("span").innerHTML;
              var space = spa.appendChild(document.createTextNode(": ").innerHTML).innerHTML;
              
              
              var showUser = div.appendChild(user).innerHTML;
              var showTxt = div.appendChild(t).innerHTML;
          
            
            li.appendChild(showUser).innerHTML;
            li.appendChild(space).innerHTML;
           li.appendChild(showTxt).innerHTML;
           
           
            if (inputValue === '') {
              alert("You must write something!");
            }else if(username === ''){
            alert("You must provide username")
            } else {
              document.getElementById("myUL").appendChild(li).innerHTML;
            }
            document.getElementById("message").innerHTML.value = "";
           document.getElementById("name").innerHTML.value = "";
          
           //get current time
          
          var d = new Date();
          var h = d.getHours();
          var m = d.getMinutes();
          console.info( h + ":" + m);
          
            var span = document.createElement("SPAN").innerHTML;
            var time = h + ":" + m; 
            var stamp = document.createTextNode(time).innerHTML;
            span.className = "timeStamp";
            span.appendChild(stamp).innerHTML;
            li.appendChild(span).innerHTML;
          
            for (i = 0; i < close.length; i++) {
              close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
              }
            }
          }
          newMessage();
    });
