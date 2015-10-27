Ext.define('C.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onGridRowSelect: function(sender, record) {
        this.setActiveEastCard(1);
    },
    onAddBtnClick: function(sender, record) {
        this.setActiveEastCard(1);
    },
    onCancelClick: function() {
        this.setActiveEastCard(0);
    },

    setActiveEastCard: function(n) {
        var me = this,
            cards = me.getView().down('container[region=east]');
        cards.setActiveItem(n);
    }
});
