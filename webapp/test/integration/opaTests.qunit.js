sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'br/com/dlacademy/zuiflight/test/integration/FirstJourney',
		'br/com/dlacademy/zuiflight/test/integration/pages/ZC_FLIGHT_COMPLETEList',
		'br/com/dlacademy/zuiflight/test/integration/pages/ZC_FLIGHT_COMPLETEObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_FLIGHT_COMPLETEList, ZC_FLIGHT_COMPLETEObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('br/com/dlacademy/zuiflight') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_FLIGHT_COMPLETEList: ZC_FLIGHT_COMPLETEList,
					onTheZC_FLIGHT_COMPLETEObjectPage: ZC_FLIGHT_COMPLETEObjectPage
                }
            },
            opaJourney.run
        );
    }
);