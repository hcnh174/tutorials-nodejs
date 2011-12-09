Ext.define("tutorials.controller.Tutorials", {
    extend: 'Ext.app.Controller',

    models: ['Tutorial'],
    stores: ['Tutorials'],//Tutorial
    views:  ['Tutorials','TutorialsList','PagesList','PageText','PageControls'],

    init: function () {
        this.control({
            'tutorialseditor': {
                render: this.onEditorRender
            }
        });
    },

    onEditorRender: function () {
        console.log("tutorials editor was rendered");
    }
});