(function($){
	// console.log('success');
	var current_bx,next_bx,prev_bx;
	var scale,left,opacity;

	$('.next').click(function(){
		current_bx = $(this).parent();
		next_bx = $(this).parent().next();

		next_bx.show();

		current_bx.animate({opacity:0},{
			step: function(now,fx){
				scale = 1 - (1 - now)*0.2; //最小值为0.8
				left = ( 50 * now ) + '%';//最大值为50%
				opacity = 1 - now;
				current_bx.css({
					'transform' : 'scale(' + scale + ')'
				});
				next_bx.css({
					'left': left,
					'opacity': opacity
				});
			},
			duration: 800,
			complete: function(){
				current_bx.hide();
			},
			easing: 'easeInOutBack'
		})
	});

	$('.prev').click(function(){
		current_bx = $(this).parent();
		prev_bx = $(this).parent().prev();

		prev_bx.show();

		prev_bx.animate({opacity:1},{
			step: function(now,fx){
				scale = 0.8 +  now *0.2; //最大值为1
				left = ( 50 * now ) + '%';//最大值为50%
				opacity = 1 - now; //为0
				prev_bx.css({
					'transform' : 'scale(' + scale + ')'
				});
				current_bx.css({
					'left': left,
					'opacity': opacity
				});
			},
			duration: 800,
			complete: function(){
				current_bx.hide();
			},
			easing: 'easeInOutBack'
		})
	});

})(jQuery);