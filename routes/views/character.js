var keystone = require('keystone');
var Ticket = keystone.list( 'Ticket' );
var Character = keystone.list( 'Character' );

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	var secret = process.env.SECRET_TICKET_ID || 'ABC123';
	if( req.body.ticketId == secret ) {
		locals.section = 'character';
		locals.ticketId = secret;
		// Render the view
		return view.render( 'character', { layout: 'character' } );
	}

	Ticket.model.findOne()
		.where( 'ticketId', req.body.ticketId )
		.exec( function( err, ticket ) {
			if( err || !ticket ) {
				locals.message = process.env.TICKET_ERROR_MESSAGE || 'There is something wrong with your ticket code.';
				return view.render( 'ticketerror', { layout: 'error' } );
			}
			Character.model.findOne()
				.where( 'ticketId', ticket.ticketId )
				.exec( function( err, char ) {
					if( err ) {
						locals.message = process.env.TICKET_ERROR_CHARACTER || 'We couldn\'t load the character generator.';
						return view.render( 'ticketerror', { layout: 'error' } );
					}
					if( char ) {
						locals.message = process.env.TICKET_ERROR_CHARACTER_DONE || 'You have already made your character.';
						return view.render( 'ticketerror', { layout: 'error' } );
					}
					// locals.section is used to set the currently selected
					// item in the header navigation.
					locals.section = 'character';
					locals.ticketId = ticket.ticketId;
					// Render the view
					return view.render( 'character', { layout: 'character' } );
				})
		})
};
