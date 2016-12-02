var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Lineup Model
 * ==========
 */
var Lineup = new keystone.List('Lineup', {
    autokey: { path: 'slug', from: 'name', unique: true },
    defaultSort: '-createdAt'
});

Lineup.add({
		name: { type: Types.Text, required: true, index: true },
		link: { type: Types.Url, initial: true, required: true },
		bio: { type: Types.Html, initial: true, wysiwyg: true, required: true },
		thumbnail_blue: { type: Types.CloudinaryImage },
		thumbnail_color: { type: Types.CloudinaryImage },
		facebook: { type: Types.Url, initial: true },
		twitter: { type: Types.Url, initial: true },
		instagram: { type: Types.Url, initial: true },
		vimeo: { type: Types.Url, initial: true },
		youtube: { type: Types.Url, initial: true },
		dribbble: { type: Types.Url, initial: true },
		behance: { type: Types.Url, initial: true }
	}
);

/**
 * Registration
 */
Lineup.defaultColumns = 'name';
Lineup.register();
