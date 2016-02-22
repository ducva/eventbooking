(function(){
angular
    .module('starter')
    .controller('LogInCtrl', LogInController);

LogInController.$inject = ['$state', 'AuthService'];

function LogInController($state, AuthService) {
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

      $state.go('dashboard', {username:vm.user.username});
    }).catch(function(error){
      // on error
      console.log(error);
    });
  }
}
})();
