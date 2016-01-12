var stuApp = angular.module("stuApp",['ui.router','LocalStorageModule','pascalprecht.translate']);


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
    $urlRouterProvider.otherwise("home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "home.html",
        controller: ['$scope', '$stateParams', '$state','localStorageService',
          function( $scope, $stateParams,$state,localStorageService){
          

            // $scope.edit = function(){
            //       $state.go('.edit',$stateParams);
            // };

            // $scope.delete = function(stu){
            //       console.log($stateParams.stu);
            //       $scope.stu = $stateParams.stu;
            //       $scope.stuData.splice($scope.stuData.indexOf($scope.stu), 1);
            // };

        }]
      }).state('home.1', {
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
      }).state('home.6', {
        url: "/6",
        templateUrl: "choseClass.html",
        controller: function($scope) {
          $scope.chooseCourse = ["Chinese","Math"];
        }
      }).state('home.7', {
        url: "/7",
        templateUrl: "choseClass.html",
        controller: function($scope) {
          $scope.chooseCourse = ["Chinese","Math","Science"];
        }
      }).state('home.edit', {
        url: "/edit",
        templateUrl: "edit.html",
        controller: ['$scope', '$stateParams', '$state',
          function( $scope, $stateParams,$state){

                $scope.editStu.stuNo= $stateParams.stuNo;
                console.log($scope.editStu.stuNo);


        }]
      }).state('home.add', {
        url: "/add",
        templateUrl: "add.html",
        controller: ['$scope', '$stateParams', '$state','localStorageService',
          function( $scope, $stateParams,$state,localStorageService){

            $scope.newStu = {};

            $scope.newSave = function(){
              // alert('Add student successfully!');
              // var stu = {"classLevel":"SuperMan","stuNo":"DM0008","name":"Test Yeah","course":{"chinese":true,"math":false,"science":true,"chemistry":true}};
            $scope.stuData .push($scope.newStu);
          //  localStorageService.set("newStu", $scope.newStu);
            $scope.newStu='';
            $state.go('home',$stateParams);
            };

        }]
      });
  }).config(function($translateProvider){
        /* The default language should be English */
   $translateProvider.preferredLanguage('zh-cn');

   $translateProvider.translations('zh-cn', {
    StuNo:'学号',
	ID:'编号',
	Name:'姓名',
	Class:'年级',
	NewStudent:'添加学生',
	Operation:'操作',
	Edit:'修改',
	Delete:'删除',
	Search:'查找',
	SearchInfo:'关键字查找',
	Course:'课程',
	Math:'数学',
	Chinese:'语文',
	Science:'科学',
	Chemistry:'化学',
	Save:'保存',
	stuNameLong:'姓名至多四个字',
	stuNameShort:'姓名字至少两个字',
	stuNoInvalid:'编号以DM开头,共五个字符长度',
    BUTTON_TEXT_EN: '英语',
    BUTTON_TEXT_DE: '中文'

	
  });

    /* Translate into English */
  $translateProvider.translations('en-us', {
    StuNo:'stuNo',
	ID:'ID',
	Name:'Name',
	Class:'Class',
	NewStudent:'New Student',
	Operation:'Operation',
	Course:'Course',
	Math:'Math',
	Chinese:'Chinese',
	Science:'Science',
	Chemistry:'Chemistry',
	Save:'Save',
	stuNameLong:'stuName too long',
	stuNameShort:'stuName too short',
	stuNoInvalid:'stuNo need start with DM and 3 characters limited',
	Edit:'Edit',
	Delete:'Delete',
	Search:'Search',
	SearchInfo:' key words to search',
    BUTTON_TEXT_EN: 'english',
    BUTTON_TEXT_DE: 'chinese'

    
  });

});