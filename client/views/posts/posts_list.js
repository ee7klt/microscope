// postLists manager



Template.postsList.helpers({
	posts: function() {
		return Posts.find();
	}
});