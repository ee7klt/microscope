// postLists manager


var postsData = [
	{
		title: 'Hello world',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: 'Hello world',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	},
	{
		title: 'Hello world',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});