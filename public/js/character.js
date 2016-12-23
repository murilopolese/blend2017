var app = app || {};

$( document ).ready( function() {
	console.log( 'character builder' );

	var shapeOptions = [ 'square', 'circl', 'hexagon', 'triangle', 'rectangle' ];
	var colorOptions = [ 'blue', 'beige', 'weird-pink', 'light-pink', 'pink' ];
	var textureOptions = [ 'flat', 'wood' ];
	var sizeOptions = [ 'small', 'medium', 'big' ];

	// Wooden character model
	Character = {
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
		]
	};

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

	function render( model ) {
		renderProps( model );
		renderCharacter( model );
	}

	// Initial render
	render( Character );

	// BIND EVENTS
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

	function rand( n ) {
		n = n || 1;
		return Math.floor( Math.random() * n );
	}

	$( '.shuffle' ).click( function() {
		var amount = rand( 3 ) + 1;
		Character.amount = amount;

		Character.blocks.forEach( function( b, i ) {
			b.shape = shapeOptions[ rand( shapeOptions.length ) ];
			b.size = sizeOptions[ rand( sizeOptions.length ) ];
			b.color = colorOptions[ rand( colorOptions.length ) ];
			b.texture = textureOptions[ rand( textureOptions.length ) ];
			console.log( i, amount );
			if( i < amount ) {
				b.hidden = false;
			} else {
				b.hidden = true;
			}
		});

		render( Character );
	})
	$( '.shape-prop .btn-outline' ).click( function() {
		var i = $( this ).data( 'block' );
		var shape = $( this ).data( 'prop' );
		Character.blocks[ i ].shape = shape;
		render( Character );
	})
	$( '.size-prop .btn-outline' ).click( function() {
		var i = $( this ).data( 'block' );
		var size = $( this ).data( 'prop' );
		Character.blocks[ i ].size = size;
		render( Character );
	})
	$( '.color-prop .btn-outline' ).click( function() {
		var i = $( this ).data( 'block' );
		var color = $( this ).data( 'prop' );
		Character.blocks[ i ].color = color;
		render( Character );
	})
	$( '.texture-prop .btn-outline' ).click( function() {
		var i = $( this ).data( 'block' );
		var texture = $( this ).data( 'prop' );
		Character.blocks[ i ].texture = texture;
		render( Character );
	})

})