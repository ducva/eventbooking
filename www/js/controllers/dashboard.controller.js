(function() {
  angular.module('starter').controller('DashboardCtrl', DashboardController);

  DashboardController.$inject = ['$state', '$stateParams', 'EventsService'];

  function DashboardController($state, $stateParams, EventsService) {
    var vm = this;
    vm.username = $stateParams.username;
    vm.events = {};
    vm.selectedItem = {};

    vm.onload = onload;
    vm.viewDetail = viewDetail;
    vm.back = back;

    vm.onload();
    ///////

    function onload(){
      vm.selectedItem = null;
      vm.events = EventsService.loadEvents();
      console.log(vm.events);
    }

    function viewDetail(item){
      vm.selectedItem = item;
      console.log(item);
    }

    function back(){
      vm.selectedItem = null;
    }

  }

})();
