(function () {

    'use strict';

    var app = angular.module('app.loseState', ['ui.router']);

    app.config(function ($stateProvider) {
        $stateProvider.state('lose', {
            url: '/lose',
            templateUrl: 'scripts/states/lose/lose.html',
            controller: 'loseCtrl as vm',
            cache: false
        })
        $urlRouterProvider.otherwise('/race');
    });

})();

