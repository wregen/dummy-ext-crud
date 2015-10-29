Ext.define('C.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'C.model.Entry'
    ],

    data: {
        name: 'Simple Dummy CRUD Demo',
        gridTitle: 'Entry Grid',
        formTitle: 'Entry Form',
        infoTitle: 'Information',
        addBtnText: 'Add new entry',
        delBtnText: 'Delete entry',
        infoText: '<h2>Basic Information</h2>' +
            'The applications shows basic CRUD functionality on an Ext.Store with memory proxy. ' +
            'Store\'s data is hardcoded inside the viewModel.' +
            '<h2>Usage</h2>' +
            'In order to edit a record, click on a grid row. ' +
            'Then edit the record within the form. ' +
            'If you press Cancel your changes will be lost.' +
            'To add new record, click "Add new entry button" and do the same as with records to be updated.',
        currentEntry: null
    },

    stores: {
        entries: {
            model: 'Entry',
            data: [{
                id: 3,
                name: 'Novak Chen',
                title: 'MA',
                description: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                date: '2015-10-10'
            }, {
                id: 2,
                name: 'John Smith',
                title: 'MA',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                date: '2015-10-10'
            }, {
                id: 1,
                name: 'Jane Doue',
                title: 'MSc',
                description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                date: '2012-10-01'
            }]
        }
    }

});
