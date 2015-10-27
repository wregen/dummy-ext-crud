Ext.define('C.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'C.view.main.MainController',
        'C.view.main.MainModel',
        'C.view.main.Grid',
        'C.view.main.Form'
    ],
    layout: 'border',
    controller: 'main',
    viewModel: 'main',
    items: [{
        region: 'north',
        xtype: 'container',
        cls: 'app-header',
        height: 50,
        bind: '{name}'
    }, {
        region: 'center',
        xtype: 'maingrid',
        margin: '5 0 5 5'
    }, {
        region: 'east',
        xtype: 'container',
        layout: 'card',
        margin: '5 5 5 0',
        split: true,
        width: '30%',
        activeItem: 0,
        items: [{
            xtype: 'panel',
            title: 'Info',
            cls: 'info-panel',
            bodyPadding: 10,
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            xtype: 'mainform'
        }]
    }]
});
