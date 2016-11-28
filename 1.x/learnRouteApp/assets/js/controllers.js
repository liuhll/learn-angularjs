(function () {
    var app = angular.module("routeApp");

    app.controller("HomeController",["$scope","$route","$log","dataService","notifier",
        function ($scope,$route,$log,dataService,notifier) {
        debugger;
            var vm = this;
            vm.message = 'Welcome to School Buddy!';
            //重新刷新路由
            vm.refresh = function(){
                $log.debug($route.current);
                $log.debug($route.routes);
                $route.reload();
            }

            dataService.getAllSchools()
                .then(function(schools){
                    vm.allSchools = schools;
                    vm.schollCount = schools.length;
                })
                .catch(showError);


            dataService.getAllClassrooms()
                .then(function(classroom){
                    vm.allClassrooms = classrooms;
                    vm.classroomCount = classrooms.length;
                })
                .catch(showError);

            dataService.getAllActivities()
            then(function(activities){
                vm.allActivities = activities;
                vm.activityCount = activities.length;
            });

    }]);

    app.controller("DetailController",["$scope",function ($scope) {

    }]);

    app.controller("OtherController",["$scope",function ($scope) {

    }]);
})();