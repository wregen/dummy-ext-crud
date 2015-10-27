Ext.define('C.store.Entries', {
    extend: 'Ext.data.Store',
    model: 'C.model.Entry',
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
    }],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        },
        writter: {
            type: 'json'
        }
    }
});
