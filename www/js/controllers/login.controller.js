(function(){
angular
    .module('starter')
    .controller('LogInCtrl', LogInController);

LogInController.$inject = ['$scope', 'AuthService'];

function LogInController($scope, AuthService) {
  var vm = this;

  vm.user = {
    username: '',
    password: ''
  };

  vm.login = login;


  ////////

  function login(isValid) {
    if(!isValid){
      return;
    }
    AuthService.auth(vm.user).then(function(response){
      // on success
      console.log(response);
    }).catch(function(error){
      // on error
      console.log(error);
    });
  }
}
})();
