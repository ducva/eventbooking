(function(){
  angular.module('starter').service('EventsService', EventsService);

  EventsService.$inject = ['$firebaseArray', 'FIREBASE'];

  function EventsService($firebaseArray, FIREBASE){
    this.loadEvents = loadEvents;

    function loadEvents(){
      var ref = new Firebase(FIREBASE.URI);
      return $firebaseArray(ref.child("events"));
    }
  }
})();
