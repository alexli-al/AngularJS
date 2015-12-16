var stuControllers = angular.module('stuControllers', []);

stuControllers.controller("stuCtrl",function($scope,$location){

	$scope.classLevels = ['Senior','Junior','Sophomore','Freshman'];

	$scope.stuData = [ 
		{"classLevel":"Senior","stuNo":"DM0001","name":"Feng Xuan","course":{"chinese":true,"math":true,"science":false,"chemistry":true}},
		{"classLevel":"Junior","stuNo":"DM0002","name":"Spark Ou","course":{"chinese":true,"math":true,"science":true,"chemistry":false}},
		{"classLevel":"Sophomore","stuNo":"DM0003","name":"Marlon Xiang","course":{"chinese":false,"math":true,"science":true,"chemistry":true}},
		{"classLevel":"Sophomore","stuNo":"DM0004","name":"Mike Chen","course":{"chinese":true,"math":true,"science":false,"chemistry":true}},
		{"classLevel":"Freshman","stuNo":"DM0005","name":"Alex Li","course":{"chinese":true,"math":false,"science":true,"chemistry":true}}
	
	];

	$scope.newStu = {};

	$scope.jumpToUrl = function(path){
		$location.path(path);
	}


	//add new student 
	$scope.newSave = function(){
		$scope.stuData.push($scope.newStu[0]);
		$scope.newStu={};
		$location.path("/home");


	}


});
