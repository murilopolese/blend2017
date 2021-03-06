$(document).ready(function() {
	$('.modal').modal({
		dismissible: true,
    opacity: 0.8,
		in_duration: 0, // Transition in duration
		out_duration: 0
	});

	$( '.button-collapse' ).click( function() {
		$( '.nav' ).toggleClass( 'visible-mobile' );
	})

	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		navText: ['','']
	});

	// $('.carousel.carousel-slider').carousel({
	// 	full_width: true
	// });

	function shuffle(a) {
		var j, x, i;
		for (i = a.length; i; i--) {
			j = Math.floor(Math.random() * i);
			x = a[i - 1];
			a[i - 1] = a[j];
			a[j] = x;
		}
	}

	function refresh() {
		shuffle( characters );

		if( characters.length < 50 ) {
			var length = characters.length;
			for( var l = 0; l < 50 - length; l++ ) {
				characters.push( {} );
			}
		}

		var selectedChars = characters.slice( 0, 50 );
		for( var i = 0; i < 28; i++ ) {
			selectedChars.push( {} );
		}

		shuffle( selectedChars );
		var index = 0;
		$( '.character-column' ).each( function( i, $el ) {
			$( this ).html( '' );
			// Switch between columns with 5 and 4 rows
			var n = 5;
			if( i % 2 == 1 ) {
				n = 4;
			}

			for( var j = index; j < index + n; j++ ) {
				if( selectedChars[ j ].blocks ) {
					var websiteLink = '';
					if( selectedChars[ j ].website ) {
						websiteLink ='<a class="website-link" target="_blank" href="' + selectedChars[ j ].website + '"></a>';
					}

					var html = '<div class="mini-character">' +
					'<div class="mini-character-container">';

					if (selectedChars[ j ].blocks[ 0 ].hidden == "false") {
						html += '<div class="block block0 ' + selectedChars[ j ].blocks[ 0 ].shape + '-block '
						+ selectedChars[ j ].blocks[ 0 ].size + '-block '
						+ selectedChars[ j ].blocks[ 0 ].color + '-block '
						+ selectedChars[ j ].blocks[ 0 ].texture + '-block"></div>';
					}
					if (selectedChars[ j ].blocks[ 1 ].hidden == "false") {
						html += '<div class="block block1 ' + selectedChars[ j ].blocks[ 1 ].shape + '-block '
						+ selectedChars[ j ].blocks[ 1 ].size + '-block '
						+ selectedChars[ j ].blocks[ 1 ].color + '-block '
						+ selectedChars[ j ].blocks[ 1 ].texture + '-block"></div>';
					}
					if (selectedChars[ j ].blocks[ 2 ].hidden == "false") {
						html += '<div class="block block2 ' + selectedChars[ j ].blocks[ 2 ].shape + '-block '
						+ selectedChars[ j ].blocks[ 2 ].size + '-block '
						+ selectedChars[ j ].blocks[ 2 ].color + '-block '
						+ selectedChars[ j ].blocks[ 2 ].texture + '-block"></div>'
					}

					html += websiteLink +

					'<div class="mini-character-tooltip">' +
					'<p><strong>' + selectedChars[ j ].name + ' ' + selectedChars[ j ].surname + '</strong></p>' +
					'<p>' + selectedChars[ j ].message + '</p>' +
					'</div>' +

					'</div>' +
					'</div>';

					$(this).append( html );
				} else {
					$(this).append(
						'<div class="mini-character"></div>'
					)
				}
			}
			index = j;
		})

	}

	if( $( '.home-container' ).size() || $( '.thankyou-container' ).size() ) {
		console.log( 'home page', $( '.home-container' ).size(), 'thank you', $( '.thankyou-container' ).size() );
		refresh();
		$( '.refresh' ).click( function() {
			refresh();
		})
	}

})
