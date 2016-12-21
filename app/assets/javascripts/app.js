angular
    .module('rangular_lab', ['ngRoute', 'templates'])
    .config(config)
    .controller('HomeIndexController', HomeIndexController);

config.$inject = ['$routeProvider', '$LocationProvider'];
function config ( $routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateURL: 'home.html',
        controller: 'HomeIndexController',
        controllerAs: 'homeIndexCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider
    .html5Mode({
        enabled: true,
        requireBase: false
    });
};

    HomeIndexController.$inject = [];
    function HomeIndexController() {
        var vm = this;
        vm.greeting = "What's up?"
        console.log("What's going on?")
    };
