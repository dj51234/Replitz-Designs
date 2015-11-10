$(document).ready(function() {

	// Work Nav //

$('.work-nav a').on('click',function(event){
	event.preventDefault();
	var imgNum = $(this).data('img');
			imgTitle = $(this).text();
	$('.imac-img').css('background','url(assets/img/work/' + imgNum +'.png)');
	$('.work-title').html(imgTitle);
});

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

// Parralax Easing //

var height = $(this).scrollTop();

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
