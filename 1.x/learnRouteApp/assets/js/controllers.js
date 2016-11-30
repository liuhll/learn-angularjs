(function () {
    var app = angular.module("routeApp");

    app.controller("HomeController",["$scope",function ($scope) {
        var vm = this;
        vm.message = "Welcome to School Buddy";

        $scope.data ="学习angularJs路由";
    }]);

    app.controller("AllSchoolsController",["$scope","$route","$log","dataService","notifier",
        function ($scope,$route,$log,dataService,notifier) {
            var vm = this;
            vm.message = 'Welcome to School Buddy!';
            //重新刷新路由
            vm.refresh = function(){
                $log.debug($route.current);
                $log.debug($route.routes);
                $route.reload();
            }

            debugger;
            var shoolList =  dataService.getAllSchools();
            vm.shoolList = shoolList;
            vm.shoolCount = shoolList.length;




    }]);

    app.controller("AllClassroomsController",["$scope","dataService",function ($scope,dataService) {
        var vm = this;
        vm.classInfos = dataService.getAllClassrooms();

    }]);

    // app.controller("ClassroomController",["$routeParams","dataService",function ($routeParams,dataService) {
    //     var vm = this;
    //     debugger;
    //     vm.classInfo = dataService.getClassroom($routeParams.id);
    //
    // }]);

    app.controller("ClassroomController",["$routeParams","$window","classroom",function ($routeParams,$window,classroom) {
        var vm = this;
        debugger;
        var classes = classroom;
        vm.classInfo = classes.filter(function (val) {
            return val["id"] == $routeParams.id;
        })[0];
        
        vm.doBack = function () {
            $window.history.back();
        }

    }]);

    app.controller("OtherController",["$scope",function ($scope) {


    }]);



})();