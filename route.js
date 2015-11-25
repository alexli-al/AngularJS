var myRoute = angular.module("myRoute",['ngRoute']);

myRoute.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/addStudent', {
               templateUrl: '/addStudent.html',
               controller: 'AddStudentController'
            }).
            
            when('/viewStudents', {
               templateUrl: '/viewStudents.html',
               controller: 'ViewStudentsController'
            }).
            
            otherwise({
               redirectTo: '/addStudent'
            });
         }]);


myRoute.controller("AddStudentController",function($scope){
		$scope.message = "add student page";
	});


myRoute.controller("ViewStudentsController",function($scope){
		$scope.message = "View student page";
	});