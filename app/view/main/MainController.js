Ext.define('C.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onGridRowSelect: function(sender, record) {
        var me = this;
        me.setActiveEastCard(1);
        me.getViewModel().set('currentEntry', record);
    },

    onGridAddBtnClick: function(sender, record) {
        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('entries'),
            record = Ext.create("C.model.Entry", {
                name: '',
                title: '',
                description: '',
                date: new Date()
            });
        vm.set('currentEntry', record);
        store.insert(0, record);
        me.getView().down('maingrid').getView().select(0)
        me.setActiveEastCard(1);
        me.gridAddBtnSetDisabled(true);
    },

    onGridDelBtnClick: function(sender, rowIndex, colIndex, item, e, record) {
        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('entries');
        store.remove(record);
        store.commitChanges();
    },

    onFormBtnClick: function(btn) {
        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('entries'),
            entry = vm.get('currentEntry');
        if (btn.action === 'save') {
            if (me.getView().down('mainform').isValid()) {
                store.commitChanges();
            } else {
                return;
            }
        } else {
            store.rejectChanges();
        }
        me.getView().down('maingrid').setSelection();
        me.setActiveEastCard(0);
        me.gridAddBtnSetDisabled(false);
    },

    setActiveEastCard: function(n) {
        var me = this,
            cards = me.getView().down('container[region=east]');
        cards.setActiveItem(n);
    },
    gridAddBtnSetDisabled: function (disabled) {
        var me = this,
            btn = me.getView().down('button[action=add]');
        btn.setDisabled(disabled);
    }
});
