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
                templateUrl: 'home/classDetail.html',
                //该路由指定的控制器依赖的其他模块
                resolve:{
                    classroom: function(dataService){
                       // throw 'error transitioning to classrooms';
                        return dataService.getAllClassrooms();
                    }
                }
            })
            .when('/activities',{
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: 'home/allActivities.html'
            })
            .otherwise('/');


    }]);

    //run方法用于初始化全局的数据，仅对全局作用域起作用
    //run()函数接受一个参数。
    //initializeFn（函数）AngularJS在注入器创建后会执行这个函数。
    app.run(['$rootScope', '$log', function($rootScope, $log){
        //通过$on为$rootScope添加路由事件

        //   $route服务提供以下几个事件：
        //
        // ● $routeChangeStart
        // ● $routeChangesSuccess
        // ● $routeChangeError
        // ● $routeUpdate
        //         使用$on来调用事件
        $rootScope.$on('$routeChangeSuccess',function(event, current, previous){
            $log.debug('successfully changed routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);

        });

        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
            $log.debug('error changing routes');

            $log.debug(event);
            $log.debug(current);
            $log.debug(previous);
            $log.debug(rejection);
        });
    }]);
}());