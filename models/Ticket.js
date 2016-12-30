var keystone = require( 'keystone' );
var Types = keystone.Field.Types;

/**
 * Ticket Model
 * ==========
 */
var Ticket = new keystone.List( 'Ticket' );

Ticket.add({
	ticketId: { type: Types.Text, initial: true, required: true, index: true },
	name: { type: Types.Text, initial: true, required: true },
	surname: { type: Types.Text, initial: true, required: true },
	email: { type: Types.Email, initial: true, required: true },
	ticketType: { type: Types.Text, initial: true, required: true }
});

/**
 * Registration
 */
Ticket.defaultColumns = 'ticketId, name, email';
Ticket.register();
