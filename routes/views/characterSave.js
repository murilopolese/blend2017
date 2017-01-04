var keystone = require( 'keystone' );
var Character = keystone.list( 'Character' );

exports = module.exports = function( req, res ) {
	var locals = res.locals;

	// Basic request validation
	if(
		!req.body || !req.body.blocks || !req.body.blocks.length
		|| !req.body.blocks[0] || !req.body.blocks[1] || !req.body.blocks[2]
	) {
		return res.status( 400 ).send({
			success: false, message: 'Not a valid request', data: req.body
		});
	}

	// Populate a character Model
	var character = new Character.model({
		ticketId: req.body.ticketId,

		name: req.body.name,
		surname: req.body.surname,
		email: req.body.surname,
		message: req.body.message,
		website: req.body.website,

		blockAmount: req.body.blockAmount,
		block1Shape: req.body.blocks[0].shape,
		block1Color: req.body.blocks[0].color,
		block1Size: req.body.blocks[0].size,
		block1Texture: req.body.blocks[0].texture,
		block1Hidden: req.body.blocks[0].hidden,
		block2Shape: req.body.blocks[1].shape,
		block2Color: req.body.blocks[1].color,
		block2Size: req.body.blocks[1].size,
		block2Texture: req.body.blocks[1].texture,
		block2Hidden: req.body.blocks[1].hidden,
		block3Shape: req.body.blocks[2].shape,
		block3Color: req.body.blocks[2].color,
		block3Size: req.body.blocks[2].size,
		block3Texture: req.body.blocks[2].texture,
		block3Hidden: req.body.blocks[2].hidden
	});

	character.validate( function( err ) {
		if( err && err.name == 'ValidationError') {
			return res.status( 400 ).send( { success: false, message: err.message, data: Object.keys( err.errors ) } );
		}

		var secret = process.env.SECRET_TICKET_ID || 'ABC123';
		if( req.body.ticketId == secret ) {
			return res.status( 200 ).json( { success: true, message: 'Character saved', data: {} } );
		}

		character.save( function( err ) {
			if( err ) {
				return res.status( 500 ).send( { success: false, message: err.message, data: err } );
			}

			console.log( 'character created', character.ticketId );
			return res.status( 200 ).json( { success: true, message: 'Character saved', data: character } );
		})
	})


};
