Ext.define('C.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'mainform',
    autoScroll: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    title: {
        bind: '{formTitle}'
    },
    bodyPadding: 5,
    defaults: {
        anchor: '100%',
        allowBlank: true,
        msgTarget: 'under'
    },
    items: [{
        fieldLabel: 'Id',
        name: 'id',
        xtype: 'displayfield'
    }, {
        fieldLabel: 'Name',
        name: 'name',
        xtype: 'textfield'
    }, {
        fieldLabel: 'Title',
        name: 'title',
        xtype: 'textfield'
    }, {
        fieldLabel: 'Description',
        name: 'description',
        xtype: 'textareafield',
        flex: 1
    }, {
        fieldLabel: 'Date',
        name: 'date',
        xtype: 'datefield',
        format: 'Y-m-d'
    }],
    buttons: [{
        text: 'Save',
        itemId: 'saveBtn'
    }, {
        text: 'Cancel',
        itemId: 'cancelBtn',
        scope: this,
        listeners: {
            click: 'onCancelClick'
        }
    }]
});
