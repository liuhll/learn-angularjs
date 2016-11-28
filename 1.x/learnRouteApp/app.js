(function(){
    var app = angular.module('routeApp',['ngRoute']);
    app.config(['$logProvider','$routeProvider', function($logProvider,$routeProvider){
        $logProvider.debugEnabled(true);
        $routeProvider
            .when('/',{
                controller: 'HomeController',
                contrllerAs: 'home',
                templateUrl: 'home/index.html'
            })
            .when('/home',{
                controller: 'HomeController',
                contrllerAs: 'home',
                templateUrl: 'home/index.html'
            }).when('/home/detail',{
                controller:'DetailController',
                contrllerAs:'detail',
                templateUrl:'home/detail.html'
        }).when('/home/other',{
            controller:'OtherController',
            contrllerAs:'other',
            templateUrl:'home/other.html'
        })
          .otherwise('/');
    }])
}());