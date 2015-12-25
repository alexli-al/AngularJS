var app = angular.module('app', []);
app.directive('sayHello',function(){
                   return {
                            restrict : 'EA',
                            template : '<div>hello,<b ng-transclude></b></div>',
                            //use template(<div>hello</div>) replace current element(<say-hello>)  
                            //<say-hello><div>hello</hello></say-hello>    --------->><div>hello</hello>
                            replace : true ,
                            //move current element's content to template tag where with ng-transclude attribute.
                            transclude : true
                   };
         });