$( window ).on( 'load', function() {
	$('.carousel.carousel-slider').carousel({
		full_width: true
	});
} )

$(document).ready(function() {
	$('.modal').modal({
		dismissible: true,
    opacity: 0.8
	});

	$( '.button-collapse' ).click( function() {
		$( '.nav' ).toggleClass( 'visible-mobile' );
	})


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
					$(this).append(
						'<div class="mini-character">' +
						'<div class="mini-character-container">' +
						'<div class="block block0 ' + selectedChars[ j ].blocks[ 0 ].shape + '-block ' + selectedChars[ j ].blocks[ 0 ].size + '-block ' + selectedChars[ j ].blocks[ 0 ].color + '-block ' + selectedChars[ j ].blocks[ 0 ].texture + '-block"></div>' +
						'<div class="block block1 ' + selectedChars[ j ].blocks[ 1 ].shape + '-block ' + selectedChars[ j ].blocks[ 1 ].size + '-block ' + selectedChars[ j ].blocks[ 1 ].color + '-block ' + selectedChars[ j ].blocks[ 1 ].texture + '-block"></div>' +
						'<div class="block block2 ' + selectedChars[ j ].blocks[ 2 ].shape + '-block ' + selectedChars[ j ].blocks[ 2 ].size + '-block ' + selectedChars[ j ].blocks[ 2 ].color + '-block ' + selectedChars[ j ].blocks[ 2 ].texture + '-block"></div>' +
						websiteLink +
						'<div class="mini-character-tooltip">' +
						'<p><strong>' + selectedChars[ j ].name + ' ' + selectedChars[ j ].surname + '</strong></p>' +
						'<p>' + selectedChars[ j ].message + '</p>' +
						'</div>' +
						'</div>' +
						'</div>')
				} else {
					$(this).append(
						'<div class="mini-character"></div>'
					)
				}
			}
			index = j;
		})

	}

	if( $( '.home-container' ).size() ) {
		console.log( 'home page' );
		refresh();
		$( '.refresh' ).click( function() {
			refresh();
		})
	}

})
