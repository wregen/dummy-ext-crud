Ext.define('C.Application', {
    extend: 'Ext.app.Application',
    name: 'C',
    launch: function() {

    },
    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
