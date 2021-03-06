var keystone = require( 'keystone' );
var Character = keystone.list( 'Character' );

exports = module.exports = function( req, res ) {

	var view = new keystone.View( req, res );
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	Character.model.find()
		.exec( function( err, characters ) {
			locals.characters = characters;
			// Render the view
			view.render('thankyou', { layout: 'simplified' });
		});

};
