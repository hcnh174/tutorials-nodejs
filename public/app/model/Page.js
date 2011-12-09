Ext.define('tutorials.model.Page', {
	extend: 'Ext.data.Model',
	fields:
	[
		{name: 'pageid', type: 'string'},
		{name: 'title', type: 'string'},
		{name: 'text', type: 'string'}
	],
	belongsTo: 'tutorials.model.Tutorial',
});