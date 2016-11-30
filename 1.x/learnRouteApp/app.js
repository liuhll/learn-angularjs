(function(){
    var app = angular.module('routeApp',['ngRoute']);
    app.config(['$logProvider','$routeProvider', function($logProvider,$routeProvider){
        $logProvider.debugEnabled(true);
        // $routeProvider
        //     .when('/',{
        //         controller: 'HomeController',
        //         contrllerAs: 'home',
        //         templateUrl: 'home/index.html'
        //     })
        //     .when('/home',{
        //         controller: 'HomeController',
        //         contrllerAs: 'home',
        //         templateUrl: 'home/index.html'
        //     }).when('/home/detail',{
        //         controller:'DetailController',
        //         contrllerAs:'detail',
        //         templateUrl:'home/detail.html'
        // }).when('/home/other',{
        //     controller:'OtherController',
        //     contrllerAs:'other',
        //     templateUrl:'home/other.html'
        // })
        //   .otherwise('/');

        $routeProvider
            .when('/',{
                controller: 'HomeController' ,
                controllerAs: 'home',
                templateUrl: 'home/index.html'
            })
            .when('/schools',{
                controller: 'AllSchoolsController',
                controllerAs: 'schools',
                templateUrl: 'home/allSchools.html',
                caseInsensitiveMatch: true
            })
            .when('/classrooms',{
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms',
                templateUrl: 'home/classInfo.html'
            })
            .when('/classrooms/:id',{
                controller: 'ClassroomController',
                controllerAs: 'classroom',
                templateUrl: 'home/classDetail.html'
            })
            .when('/activities',{
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: 'home/allActivities.html'
            })
            .otherwise('/');


    }])
}());