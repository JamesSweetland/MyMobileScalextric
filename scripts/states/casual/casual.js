(function () {

    'use strict';

    var app = angular.module('app.casualState', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('casual', {
            url: '/casual',
            templateUrl: 'scripts/states/casual/casual.html',
            controller: 'casualCtrl as vm',
            cache: false
        })
        $urlRouterProvider.otherwise('/onboarding');
    });

})();
