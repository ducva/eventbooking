(function() {
  angular.module('starter').controller('DashboardCtrl', DashboardController);

  DashboardController.$inject = ['$stateParams', 'EventsService'];

  function DashboardController($stateParams, EventsService) {
    var vm = this;
    vm.username = '';
    vm.events = {};
    vm.selectedItem = {};

    vm.onload = onload;
    vm.viewDetail = viewDetail;

    vm.onload();
    ///////

    function onload(){
      vm.username = $stateParams.username;
      vm.events = EventsService.loadEvents();
      console.log(vm.events);
    }

    function viewDetail(item){
      vm.selectedItem = item;
      console.log(item);
    }

  }

})();
