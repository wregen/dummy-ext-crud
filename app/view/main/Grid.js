Ext.define('C.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'maingrid',
    store: 'Entries',
    title: {
        bind: '{gridTitle}'
    },
    dockedItems: [{
        xtype: 'toolbar',
        items: ['->', {
            xtype: 'button',
            itemId: 'addBtn',
            bind: '{addBtnText}',
            iconCls: 'fa-plus-circle',
            listeners: {
                click: 'onAddBtnClick'
            }
        }]
    }],
    columns: [{
        xtype: 'actioncolumn',
        width: 40,
        align: 'center',
        items: [{
            action: 'delRecord',
            iconCls: 'fa-minus-circle',
            handler: function(view, rowIndex, colIndex, item, e, record) {
                this.up('maingrid').fireEvent('delete', record);
            },
        }]
    }, {
        text: 'Id',
        dataIndex: 'id',
        width: 60
    }, {
        text: 'Name',
        dataIndex: 'name',
        width: 120,
        editor: 'textfield'
    }, {
        text: 'Title',
        dataIndex: 'title',
        width: 120,
        editor: 'textfield'
    }, {
        text: 'Description',
        dataIndex: 'description',
        flex: 1,
        editor: 'textfield'
    }, {
        text: 'Date',
        dataIndex: 'date',
        width: 100,
        xtype: 'datecolumn',
        format: 'Y-m-d',
        editor: 'datefield'
    }],

    listeners: {
        select: 'onGridRowSelect'
    }
});
