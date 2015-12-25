stuApp.controller("stuCtrl",function($scope,$state,$translate){

	$scope.classLevels = ['Senior','Junior','Sophomore','Freshman'];

	$scope.stuData = [ 
		{"classLevel":"Senior","stuNo":"DM0001","name":"Feng Xuan","course":{"chinese":true,"math":true,"science":false,"chemistry":true}},
		{"classLevel":"Junior","stuNo":"DM0002","name":"Spark Ou","course":{"chinese":true,"math":true,"science":true,"chemistry":false}},
		{"classLevel":"Sophomore","stuNo":"DM0003","name":"Marlon Xiang","course":{"chinese":false,"math":true,"science":true,"chemistry":true}},
		{"classLevel":"Sophomore","stuNo":"DM0004","name":"Mike Chen","course":{"chinese":true,"math":true,"science":false,"chemistry":true}},
		{"classLevel":"Freshman","stuNo":"DM0005","name":"Alex Li","course":{"chinese":true,"math":false,"science":true,"chemistry":true}}
	
	];


	$scope.delete = function(stu){
		 $scope.stuData.splice($scope.stuData.indexOf(stu), 1);
	}


});


stuApp.controller('i18nController', function ($scope, $translate) {
  /* Change languages with the language string */
  $scope.changeLanguage = function (key) {
    // $translate.use(key);
     $translate.use("zh-cn");
  };

  /* Determine it is English or not */
  $scope.isEnUs = function () {
     return $translate.use() == "en-us";
  }

  /* Determine it is simplified Chinese or not */
  $scope.isZhCn = function () {
       return $translate.use() == "zh-cn";
  }

  /* Determine it is traditional Chinese or not */
  $scope.isZhHant = function () {
     return $translate.use() == "zh-hant";
  }
});