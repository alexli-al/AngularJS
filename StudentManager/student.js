var stuApp = angular.module("stuApp",[]);



stuApp.controller("stuCtrl",function($scope){

	$scope.stus = [
	{id:1,stuNo:"DM42345",name:"Feng Xuan",classLevel:"senior"},
	{id:2,stuNo:"DM32345",name:"Spark Ou",classLevel:"junior"},
	{id:3,stuNo:"DM22345",name:"Marlon",classLevel:"sophomore"},
	{id:4,stuNo:"DM12345",name:"Alex Li",classLevel:"freshman"},

	
	];
});