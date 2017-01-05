var keystone = require('keystone');
var Lineup = keystone.list( 'Lineup' );

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'lineup';

	Lineup.model.find().exec()
	.sort( 'name' )
	.then(
		function( lineup ) {
			locals.lineup = lineup;
			// Render the view
			view.render('lineup');
		},
		function( err ) {
			view.render('lineup');
		}
	)
};
