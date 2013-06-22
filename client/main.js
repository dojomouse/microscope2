postsHandle = Meteor.subscribeWithPagination('newPosts', 10);
Deps.autorun(function() {
	Meteor.subscrube('singlePost', Session.get('currentPostId'));
	Meteor.subscribe('comments', Session.get('currentPostId'));
});
Meteor.subscribe('notifications');