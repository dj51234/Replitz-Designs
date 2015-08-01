$(document).ready(function() {

	//// Smooth Scroll ////

	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });



	//// Logo Change for Mobile Screen Widths ////
	
	$(window).resize(function(){
		var width = $(window).width();

		if (width < 800) {

			$(".small-logo img").attr("src","assets/img/logos/small-logo-alt.png");
		
		} else {

			$(".small-logo img").attr("src","assets/img/logos/small-logo.png");
		
		} 
	}); 

	//// Open Modal ////

	$('.open-modal').click(function(){
		$('.modal-overlay').addClass('is-open');
		$('body').addClass('is-open');
		return false;
	});
	$('.ion-android-close').click(function(){
		$('.modal-overlay').removeClass('is-open');
		$('body').removeClass('is-open');
		return false;
	});
});

$(window).scroll(function() {


	//// Make Computer Image fixed based on Scroll Position ////

	var height = $(this).scrollTop();
	
  
	if (height > $('.imac-img').offset().top - 400) {
		$('.imac-img').addClass('fixed');
	} 
	if (height < $('#work').offset().top - 100) {
		$('.imac-img').removeClass('fixed');
	} 
	
	$('.main-title').css({
		'transform' : 'translate(0px,' + height/30 + '%)'
	});
	if (height > $('#work .work-title2').offset().top) {
	$('.cta-text').css({
		'transform' : 'translate(0px,' + height/40 + '%)'
	});
	$('.cta-img').css({
		'transform' : 'translate(0px,' + height/40 + '%)'
	});
	}


	//// Make Computer Image fixed to bottom of Work Div Once User Scrolls past section ////

	if (height > $('#work .work-title3').offset().top - 260) {
		$('.imac-img').removeClass('fixed');
		$('.imac-img').addClass('fixed-bottom');
	} else {
		$('.imac-img').removeClass('fixed-bottom');
	}


	//// Change computer image on Scroll Height ////


	if (height > $('#work .work-title2').offset().top - 450 && height < $('#work .work-title3').offset().top - 300) {
		$('.imac-img').addClass('image2');
	} else {
		$('.imac-img').removeClass('image2');
	}
	if (height > $('#work .work-title3').offset().top - 500 && height < $('#cta').offset().top) {
		$('.imac-img').addClass('image3');
	} else {
		$('.imac-img').removeClass('image3');
	}

	//// Fade Paragraphs In and Out Based on Scroll position ////


	$('.work-paragraph').each( function(i){
	            
	            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	            var bottom_of_window = $(window).scrollTop() + $(window).height() - 300;
	            
	            /* If the object is completely visible in the window, fade it in */
	            if( bottom_of_window > bottom_of_object ){
	                
	                $(this).stop().animate({'opacity':'1'},200);
	                    
	            }
	            else {
	            	$(this).stop().animate({'opacity':'0'},300);
	            }
	            
	        });

	//// Parralax Easing ////

	var offset1 = Math.min(0,height - $('.img1').offset().top + $(window).height() - 700);
		offset2 = Math.min(0,height - $('.img1').offset().top + $(window).height() - 1000); 
		offset3 = Math.min(0,height - $('.img1').offset().top + $(window).height() - 1500);

	if (height > $('#about').offset().top - $(window).height()) {
		$('.img1').css({'transform' : 'translate(' + offset1 + 'px,0px)'});
		$('.img2').css({'transform' : 'translate(' + Math.abs(offset2) + 'px,0px)'});
		$('.img3').css({'transform' : 'translate(' + offset3 + 'px,0px)'});
	}

	if (height > $('#about').offset().top - $(window).height()) {
		$('.content1').css({'transform' : 'translate(' + Math.abs(offset1) + 'px,0px)'});
		$('.content2').css({'transform' : 'translate(' + offset2 + 'px,0px)'});
		$('.content3').css({'transform' : 'translate(' + Math.abs(offset3) + 'px,0px)'});
	}
	
	
});