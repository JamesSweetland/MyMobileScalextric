(function () {
    'use strict';

    angular
        .module('app.singleplayerState', [
            'ui.router'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('singleplayer', {
                    cache: false,
                    url: '/singleplayer',
                    templateUrl: 'scripts/states/singleplayer/singleplayer.html',
                    controller: 'singleplayerCtrl as vm'
                })
            $urlRouterProvider.otherwise('/onboarding');
        });
})();

