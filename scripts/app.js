angular.module('app', ['ui.router']);


angular.module('app').config(config);

config.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
]

function config($stateProvider, $urlRouterProvider) {

    /* 
     Index Page
     user can enter ip address and channel number
    */
    var onboardingState = {
        name: 'onboarding',
        url: '/onboarding?uuid&brokerHost&brokerPort&username&password&ssl',
        params: {
            uuid : {
                dynamic: false
            },
            brokerHost: {
                dynamic: false
            },
            brokerPort: {
                dynamic: false
            },
            username: {
                dynamic : false
            },
            password: {
                dynamic : false
            },
            ssl:{
                dynamic : false
            }

        },
        templateUrl: 'scripts/states/onboarding/onboardingView.html',
        controller: 'onboardingViewCtrl',
        controllerAs: 'onboardingView',
        resolve: {
            broker: ['$stateParams','brokerDetails', function ($stateParams,brokerDetails) {
            
                if($stateParams.uuid) brokerDetails.UUID = $stateParams.uuid;
                if($stateParams.brokerHost) brokerDetails.HOST = $stateParams.brokerHost;
                if($stateParams.brokerPort) brokerDetails.PORT = $stateParams.brokerPort;
                if($stateParams.username) brokerDetails.USERNAME = $stateParams.username;
                if($stateParams.password) brokerDetails.PASSWORD = $stateParams.password;
                if($stateParams.ssl) brokerDetails.SSL = ($stateParams.ssl.toLowerCase() == 'true');
            }]
        }
    }

    /*
     Car Control Page
     User can control the cars throttle
    */
    var raceState = {
        name: 'race',
        url: '/race',
        templateUrl: 'scripts/states/race/raceView.html',
        controller: 'raceViewCtrl',
        controllerAs: 'raceView',
        params: {
            channel: null,
            ip_address: null
        },
        //resolve used to check if transition contains channel and ipaddress params
        resolve: {
            parameters: ['$q', '$state','$stateParams', function ($q, $state,$stateParams) {
                var deferred = $q.defer();
               
                if ($stateParams.channel === null) {
                    $state.transitionTo('index', {});
                }else{
                    deferred.resolve();
                }

                return deferred.promise;
            }]
        }
    };

    $stateProvider.state(onboardingState);
    $stateProvider.state(raceState);

    $urlRouterProvider.otherwise('/onboarding');
}

angular.module('app').run(run);
run.$inject = [
]
