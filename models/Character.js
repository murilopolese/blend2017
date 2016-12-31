var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Character Model
 * ==========
 */
var Character = new keystone.List('Character');

Character.add({

	ticketId: { type: Types.Text, required: true, initial: true, index: true },

	name: { type: Types.Text, required: true, initial: true },
	surname: { type: Types.Text, required: true, initial: true },
	message: { type: Types.Text, required: false, initial: true },
	website: { type: Types.Text, required: false, initial: true },

	blockAmount: { type: Types.Number, required: true, initial: true },
	block1Shape: { type: Types.Text, required: true, initial: true },
	block1Color: { type: Types.Text, required: true, initial: true },
	block1Size: { type: Types.Text, required: true, initial: true },
	block1Texture: { type: Types.Text, required: true, initial: true },
	block1Hidden: { type: Types.Boolean, required: true, initial: true },
	block2Shape: { type: Types.Text, required: true, initial: true },
	block2Color: { type: Types.Text, required: true, initial: true },
	block2Size: { type: Types.Text, required: true, initial: true },
	block2Texture: { type: Types.Text, required: true, initial: true },
	block2Hidden: { type: Types.Boolean, required: true, initial: true },
	block3Shape: { type: Types.Text, required: true, initial: true },
	block3Color: { type: Types.Text, required: true, initial: true },
	block3Size: { type: Types.Text, required: true, initial: true },
	block3Texture: { type: Types.Text, required: true, initial: true },
	block3Hidden: { type: Types.Boolean, required: true, initial: true }

	}
);

/**
 * Registration
 */
Character.defaultColumns = 'name, surname, email';
Character.register();
