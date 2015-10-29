Ext.define('C.model.Entry', {
    extend: 'Ext.data.Model',
    idProperty: "id",
    schema: {
        namespace: "C.model"
    },
    identifier: {
        type: 'sequential',
        seed: 4
    },
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'name',
            type: 'auto'
        }, {
            name: 'title',
            type: 'auto'
        }, {
            name: 'description',
            type: 'auto'
        }, {
            name: 'date',
            type: 'date'
        }

    ]
});
