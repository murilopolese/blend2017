var app = app || {};

$( document ).ready( function() {
	console.log( 'character builder' );

	var shapeOptions = [ 'square', 'circle', 'hexagon', 'triangle', 'rectangle' ];
	var colorOptions = [ 'blue', 'light-blue', 'mid-blue', 'pink', 'light-pink', 'beige', 'white' ];
	var textureOptions = [ 'flat', 'wood' ];
	var sizeOptions = [ 'small', 'medium', 'big' ];

	// Wooden character model
	var Character = {
		blocks: [
			{
				shape: 'circle-block',
				size: 'medium-block',
				color: 'blue-block',
				texture: 'flat-block'
			},
			{
				shape: 'square-block',
				size: 'medium-block',
				color: 'light-pink-block',
				texture: 'flat-block'
			},
			{
				shape: 'rectangle-block',
				size: 'big-block',
				color: 'pink-block',
				texture: 'flat-block'
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
			var block = $( '<div/>', {
				id: 'block' + i
			});
			block.addClass( 'block' );
			block.addClass( b.shape );
			block.addClass( b.size );
			block.addClass( b.color );
			block.addClass( b.texture );
			block.appendTo( '.wooden-character' );
		})
	}

	renderCharacter( Character );

})
