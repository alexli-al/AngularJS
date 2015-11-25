var stuApp = angular.module("stuApp",['ngRoute','stuControllers']);


stuApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home.html',
        controller: 'stuCtrl'
      }).
      when('/add', {
        templateUrl: 'add.html',
        controller: 'addStuCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

