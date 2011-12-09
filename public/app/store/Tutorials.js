Ext.define('tutorials.store.Tutorials', {
    extend: 'Ext.data.Store',

    autoLoad: true,
    fields: ['title'],

    proxy: {
        type: 'ajax',
        url: '/ajax/tutorials',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});