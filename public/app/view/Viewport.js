Ext.define('tutorials.view.Viewport',
{
	extend: 'Ext.container.Viewport',
	layout: 'fit',
	items:
	[
		{
			xtype: 'panel',
			title: 'Tutorials',
			items:
			[
				{
					xtype: 'tutorialslist'
				},
				{
					xtype: 'tutorialseditor'
				},
				{
					xtype: 'pagetext'
				},
				{
					xtype: 'pagecontrols'
				},
				{
					xtype: 'pageslist'
				}
			]
		}
	]
});