sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("xlsx.controller.View1", {
            onInit: function () {

            },
            onDownload: function() {
                let row = [];
                let selection = this.getView().byId("excel").getSelectedItems();
                selection.forEach(val => {
                  let data = val.getBindingContext().getObject();
                  row.push(data);

                });
                const workSheet = XLSX.utils.json_to_sheet(row);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, workSheet, 'Excel Sheet');
                XLSX.writeFile(workbook,"Excel Data.xlsx", {compression: true})
              }
        });
    });
