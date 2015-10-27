Ext.define('C.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: ["Entries"],
    models: ["Entry"],
    refs: [{
        ref: "gridPanel",
        selector: "maingrid"
    }, {
        ref: "formPanel",
        selector: "mainform"
    }, {
        ref: "cardPanel",
        selector: "app-main > container[region=east]"
    }, {
        ref: "saveBtn",
        selector: "mainform #saveBtn"
    }],
    control: {
        maingrid: {
            select: function(c, d) {
                this.getFormPanel().getForm().loadRecord(d)
            },
            "delete": function(b) {
                this.getStore("Entries").remove(b)
            }
        },
        "maingrid #addBtn": {
            click: function() {
                var b = Ext.create("C.model.Entry", {
                    name: '',
                    title: '',
                    description: '',
                    date: new Date()
                });
                this.getStore("Entries").insert(0, b);
                this.getGridPanel().getView().select(0)
            }
        },
        "mainform #saveBtn": {
            click: function() {
                var b = this.getFormPanel().getForm();
                if (b.isValid()) {
                    b.updateRecord();
                    this.getCardPanel().setActiveItem(0);
                    this.getGridPanel().setSelection();
                    this.getStore("Entries").sync();
                }
            }
        },
        "mainform #cancelBtn": {
            click: function() {
                this.getStore("Entries").rejectChanges();
            }
        }
    }
});
