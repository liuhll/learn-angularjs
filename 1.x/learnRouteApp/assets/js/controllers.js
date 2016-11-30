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

    app.controller("DetailController",["$scope",function ($scope) {

    }]);

    app.controller("OtherController",["$scope",function ($scope) {

    }]);
})();