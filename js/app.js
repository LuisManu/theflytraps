(function() {

  var app = angular.module('flytrapsApp', ['ui.router', 'router', 'controllers', 'directives']);

  app.factory('datesFactory', function($http) {
    var factory ={};
    factory.getDates = function() {
      return $http.get('/theflytraps/dates.json');
    };
    return factory;
  });

})();