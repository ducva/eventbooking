(function(){
angular
    .module('starter')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'pages/login/login.html',
        controller: 'LogInCtrl',
        controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/login');
}
})();
