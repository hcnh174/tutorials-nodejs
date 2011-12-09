Ext.define('tutorials.view.PagesList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.pageslist',
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