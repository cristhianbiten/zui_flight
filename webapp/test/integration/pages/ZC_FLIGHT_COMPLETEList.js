sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'br.com.dlacademy.zuiflight',
            componentId: 'ZC_FLIGHT_COMPLETEList',
            contextPath: '/ZC_FLIGHT_COMPLETE'
        },
        CustomPageDefinitions
    );
});