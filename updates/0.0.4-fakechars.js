var Character = {
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
		return Character;
	},
	rand: function( n ) {
		n = n || 1;
		return Math.floor( Math.random() * n );
	}
};

var chars = [];
for( var i = 0; i < 200; i++ ) {
	var website = '';
	if( parseInt( Math.random() * 10 ) < 5 ) {
		website = 'http://devblend2017.herokuapp.com';
	}
	Character.shuffle();
	chars[i] = {
		ticketId: parseInt( Math.random() * 999999 ),
		name: 'Test',
		surname: parseInt( Math.random() * 999999 ),
		message: 'Hello World! How are you?',
		website: website,
		blockAmount: Character.amount,
		block1Shape: Character.blocks[0].shape,
		block1Color: Character.blocks[0].color,
		block1Size: Character.blocks[0].size,
		block1Texture: Character.blocks[0].texture,
		block1Hidden: Character.blocks[0].hidden,
		block2Shape: Character.blocks[1].shape,
		block2Color: Character.blocks[1].color,
		block2Size: Character.blocks[1].size,
		block2Texture: Character.blocks[1].texture,
		block2Hidden: Character.blocks[1].hidden,
		block3Shape: Character.blocks[2].shape,
		block3Color: Character.blocks[2].color,
		block3Size: Character.blocks[2].size,
		block3Texture: Character.blocks[2].texture,
		block3Hidden: Character.blocks[2].hidden
	}
};

exports.create = {
	Character: chars
};
