(function(){
angular
    .module('starter')
    .service('AuthService', AuthService);

AuthService.$inject = ['$q', '$firebaseAuth'];

function AuthService($q, $firebaseAuth) {
    this.auth = function auth(credentials) {
        var ref = new Firebase("https://luminous-torch-5124.firebaseio.com/");
        // create an instance of the authentication service
        var auth = $firebaseAuth(ref);
        return auth.$authWithPassword({
            email:credentials.username,
            password: credentials.password
        });
    };
}
})();
