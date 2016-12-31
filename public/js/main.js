$(document).ready(function() {
	$('.modal').modal({
		dismissible: true,
    opacity: 0.8
	});
	$('.carousel.carousel-slider').carousel({
		full_width: true
	});
	$( '.button-collapse' ).click( function() {
		$( '.nav' ).toggleClass( 'visible-mobile' );
	})
})
