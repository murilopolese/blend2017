var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Navigation Model
 * ==========
 */
var Navigation = new keystone.List('Navigation', {
    defaultSort: 'order'
});

Navigation.add({
		label: { type: Types.Text, initial: true, required: true, index: true },
		link: { type: Types.Text, initial: true, required: true },
		class: { type: Types.Text, initial: true, required: true },
		order: { type: Types.Number, initial: true, required: true }
	}
);

/**
 * Registration
 */
Navigation.defaultColumns = 'order, label, link';
Navigation.register();
