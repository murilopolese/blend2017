var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * SocialMedia Model
 * ==========
 */
var SocialMedia = new keystone.List('SocialMedia', {

});

SocialMedia.add({
		label: { type: Types.Text, initial: true, required: true, index: true },
		link: { type: Types.Text, initial: true, required: true },
		site: { type: Types.Select, options: 'facebook, twitter, instagram, vimeo, dribble, behance, envelope-o', initial: true, required: true },
		order: { type: Types.Number, initial: true, required: true }
	}
);

/**
 * Registration
 */
SocialMedia.defaultColumns = 'order, label, link';
SocialMedia.register();
