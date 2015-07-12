define(['angular', 'uiRouter'], function(angular) {
    var myApp = angular.module('myApp', ['ui.router']);

    myApp.config(function($stateProvider) {
        $stateProvider.state('base', {
                url: '',
                templateUrl: 'partials/main.html'
            });
    });

    return myApp;
});
