sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'br.com.dlacademy.zuiflight',
            componentId: 'ZC_FLIGHT_COMPLETEObjectPage',
            contextPath: '/ZC_FLIGHT_COMPLETE'
        },
        CustomPageDefinitions
    );
});