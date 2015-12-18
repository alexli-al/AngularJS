var stuApp = angular.module("stuApp",['ui.router']);


// stuApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/home', {
//         templateUrl: 'home.html',
//         controller: 'stuCtrl'
//       }).
//       when('/add', {
//         templateUrl: 'add.html',
//         controller: 'stuCtrl'
//       }).
//       otherwise({
//         redirectTo: '/home'
//       });
//   }]);

 stuApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "home.html"
      })
      .state('home.1', {
        url: "/1",
        templateUrl: "choseClass.html",
        controller: function($scope) {
          $scope.chooseCourse = ["Chinese","Math","Chemistry","Science"];
        }
      }).state('home.2', {
        url: "/2",
        templateUrl: "choseClass.html",
        controller: function($scope) {
          $scope.chooseCourse = ["Chinese","Science","Chemistry"];
        }
      }).state('home.3', {
        url: "/3",
        templateUrl: "choseClass.html",
        controller: function($scope) {
          $scope.chooseCourse = ["Chinese","Math","Science"];
        }
      }).state('home.4', {
        url: "/4",
        templateUrl: "choseClass.html",
        controller: function($scope) {
          $scope.chooseCourse = ["Chinese","Math"];
        }
      }).state('home.5', {
        url: "/5",
        templateUrl: "choseClass.html",
        controller: function($scope) {
          $scope.chooseCourse = ["Chinese"];
        }
      })
      .state('add', {
        url: "/add",
        templateUrl: "add.html"
      })
  });