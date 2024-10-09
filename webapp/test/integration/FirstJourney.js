sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZC_FLIGHT_COMPLETEList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZC_FLIGHT_COMPLETEList.onFilterBar().iExecuteSearch();
                
                Then.onTheZC_FLIGHT_COMPLETEList.onTable().iCheckRows();

                When.onTheZC_FLIGHT_COMPLETEList.onTable().iPressRow(0);
                Then.onTheZC_FLIGHT_COMPLETEObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});