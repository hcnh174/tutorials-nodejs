Ext.define('tutorials.model.Tutorial', {
	extend: 'Ext.data.Model',
	fields:
	[
		{name: 'tutorialid', type: 'string'},
		{name: 'title', type: 'string'}
	],
	hasMany: 'tutorials.model.Page'
});