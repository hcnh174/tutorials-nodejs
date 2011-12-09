Ext.define('tutorials.view.Tutorials', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tutorialseditor',

    store: 'Tutorials',

    initComponent: function () {
        this.columns = [{
            header: 'Title',
            dataIndex: 'title',
            flex: 1
        }];

        this.callParent(arguments);
    }
});