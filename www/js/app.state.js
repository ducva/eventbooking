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

    $stateProvider.state('dashboard', {
        url: '/user',
        templateUrl: 'pages/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'vm',
        params: {username:''}
    });
    $urlRouterProvider.otherwise('/login');
}
})();
