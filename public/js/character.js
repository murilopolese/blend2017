$( document ).ready( function() {
	console.log( 'character builder' );

	// Wooden character model
	Character = {
		shapeOptions: [ 'square', 'circl', 'hexagon', 'triangle', 'rectangle' ],
		colorOptions: [ 'blue', 'beige', 'weird-pink', 'light-pink', 'pink' ],
		textureOptions: [ 'flat', 'texture' ],
		sizeOptions: [ 'small', 'medium', 'big' ],
		amount: 3,
		blocks: [
			{
				shape: 'circl',
				size: 'medium',
				color: 'blue',
				texture: 'flat',
				hidden: false
			},
			{
				shape: 'square',
				size: 'medium',
				color: 'light-pink',
				texture: 'flat',
				hidden: false
			},
			{
				shape: 'rectangle',
				size: 'big',
				color: 'pink',
				texture: 'flat',
				hidden: false
			}
		],
		shuffle: function() {
			var amount = Character.rand( 2 ) + 2;
			Character.amount = amount;

			Character.blocks.forEach( function( b, i ) {
				b.shape = Character.shapeOptions[ Character.rand( Character.shapeOptions.length ) ];
				b.size = Character.sizeOptions[ Character.rand( Character.sizeOptions.length ) ];
				b.color = Character.colorOptions[ Character.rand( Character.colorOptions.length ) ];
				b.texture = Character.textureOptions[ Character.rand( Character.textureOptions.length ) ];
				if( i < amount ) {
					b.hidden = false;
				} else {
					b.hidden = true;
				}
			});
		},
		rand: function( n ) {
			n = n || 1;
			return Math.floor( Math.random() * n );
		}
	};

	// RENDER VIEWS
	// Render wooden character from model
	function renderCharacter( model ) {
		if( !model || !model.blocks || !model.blocks.length ) {
			console.log( 'nothing to render' );
			return;
		}

		model.blocks.forEach(function( b, i ) {
			var block = $( '#block' + i );
			block.attr( 'class', '' );
			block.addClass( 'block' );
			block.addClass( b.shape + '-block' );
			block.addClass( b.size + '-block' );
			block.addClass( b.color + '-block' );
			block.addClass( b.texture + '-block' );
			block.appendTo( '.wooden-character' );
		})
	}

	// Render wooden character properties panel from model
	function renderProps( model ) {
		// Select the correct number of blocks
		var amount = model.amount;
		$( '.amount-prop .selected' ).toggleClass( 'selected' );
		$( '.amount-prop .btn-outline[data-prop="' + amount + '"]' ).toggleClass( 'selected' );


		model.blocks.forEach( function( b, i ) {
			var parent = $( '.block-props[data-prop="block'+i+'"]' );
			// Hide/Show block properties
			if( b.hidden ) {
				parent.hide();
				$( '#block' + i ).hide();
			} else {
				parent.show();
				$( '#block' + i ).show();
			}

			// Select shape
			parent.find( '.shape-prop .selected' ).toggleClass( 'selected' );
			parent.find( '.shape-prop .btn-outline[data-prop="' + b.shape + '"]').toggleClass( 'selected' );

			// Select size
			parent.find( '.size-prop .selected' ).toggleClass( 'selected' );
			parent.find( '.size-prop .btn-outline[data-prop="' + b.size + '"]').toggleClass( 'selected' );

			// Select color
			parent.find( '.color-prop .selected' ).toggleClass( 'selected' );
			parent.find( '.color-prop .btn-outline[data-prop="' + b.color + '"]').toggleClass( 'selected' );

			// Select texture
			parent.find( '.texture-prop .selected' ).toggleClass( 'selected' );
			parent.find( '.texture-prop .btn-outline[data-prop="' + b.texture + '"]').toggleClass( 'selected' );
		})

	}

	// Render properties panel and wooden character
	function render( model ) {
		renderProps( model );
		renderCharacter( model );
	}

	// BIND EVENTS
	// Hide unused panels based on character amount of blocks
	$( '.amount-prop .btn-outline' ).click( function()  {
		var i = $( this ).data( 'prop' );
		Character.amount = i;
		if( i == 1 ) {
			Character.blocks[ 0 ].hidden = false;
			Character.blocks[ 1 ].hidden = true;
			Character.blocks[ 2 ].hidden = true;
		}
		if( i == 2 ) {
			Character.blocks[ 0 ].hidden = false;
			Character.blocks[ 1 ].hidden = false;
			Character.blocks[ 2 ].hidden = true;
		}
		if( i == 3 ) {
			Character.blocks[ 0 ].hidden = false;
			Character.blocks[ 1 ].hidden = false;
			Character.blocks[ 2 ].hidden = false;
		}

		render( Character );
	})
	// Shuffle character
	$( '.shuffle' ).click( function() {
		Character.shuffle();
		render( Character );
	})
	// Switch blocks shapes
	$( '.shape-prop .btn-outline' ).click( function() {
		var i = $( this ).data( 'block' );
		var shape = $( this ).data( 'prop' );
		Character.blocks[ i ].shape = shape;
		render( Character );
	})
	// Switch blocks sizes
	$( '.size-prop .btn-outline' ).click( function() {
		var i = $( this ).data( 'block' );
		var size = $( this ).data( 'prop' );
		Character.blocks[ i ].size = size;
		render( Character );
	})
	// Switch blocks color
	$( '.color-prop .btn-outline' ).click( function() {
		var i = $( this ).data( 'block' );
		var color = $( this ).data( 'prop' );
		Character.blocks[ i ].color = color;
		render( Character );
	})
	// Switch blocks texture
	$( '.texture-prop .btn-outline' ).click( function() {
		var i = $( this ).data( 'block' );
		var texture = $( this ).data( 'prop' );
		Character.blocks[ i ].texture = texture;
		render( Character );
	})
	// Save character
	$( '.imdone' ).click( function() {

		Character.ticketId = $( 'input[name="ticketId"]' ).val();
		Character.name = $( 'input[name="name"]' ).val();
		Character.surname = $( 'input[name="surname"]' ).val();
		Character.email = $( 'input[name="email"]' ).val();
		Character.message = $( 'input[name="message"]' ).val();
		Character.website = $( 'input[name="website"]' ).val();

		$.post( '/saveCharacter', {
			ticketId: Character.ticketId,
			name: Character.name,
			surname: Character.surname,
			email: Character.email,
			message: Character.message,
			website: Character.website,

			blockAmount: Character.amount,
			blocks: Character.blocks
		})
		.done( function( res ) {
			console.log( 'done', res );
			$( '.imdone' ).remove();
		})
		.fail( function( err ) {
			console.log( 'fail', err.responseJSON );
		})
	})

	// INITIAL RENDER
	Character.shuffle();
	render( Character );

})
