(function(e){var t,n,r,i,s,o;e(".next").click(function(){t=e(this).parent();n=e(this).parent().next();n.show();t.animate({opacity:0},{step:function(e,r){i=1-(1-e)*.2;s=50*e+"%";o=1-e;t.css({transform:"scale("+i+")"});n.css({left:s,opacity:o})},duration:800,complete:function(){t.hide()},easing:"easeInOutBack"})});e(".prev").click(function(){t=e(this).parent();r=e(this).parent().prev();r.show();r.animate({opacity:1},{step:function(e,n){i=.8+e*.2;s=50*e+"%";o=1-e;r.css({transform:"scale("+i+")"});t.css({left:s,opacity:o})},duration:800,complete:function(){t.hide()},easing:"easeInOutBack"})})})(jQuery);