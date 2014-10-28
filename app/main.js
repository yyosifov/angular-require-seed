'use strict';

require.config({
    paths: {
        'angular': 'bower_components/angular/angular',
        'uiRouter': 'bower_components/angular-ui-router/release/angular-ui-router',
        'app': 'app'
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'uiRouter': ['angular']
    },
    deps: ['app']
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'angular',
    'app'
], function(angular, app) {
    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);
    });
});