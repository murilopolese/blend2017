var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'tickets';

	// Render the view
	// res.redirect( process.env.TICKET_URL || 'https://www.picatic.com/blend2017' );
	view.render( 'tickets' );
};
