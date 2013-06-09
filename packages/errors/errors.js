// Local (client-only) collections
Meteor.errors = new Meteor.Collection(null);

Meteor.errors = {
	throw: function(message) {
		Meteor.errors.insert({message: message, seen: false})
	},
	clear: function() {
		Meteor.errors.remove({seen: true});
	}
}