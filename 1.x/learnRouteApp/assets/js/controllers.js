(function () {
    var app = angular.module("routeApp");

    app.controller("HomeController",["$scope",function ($scope) {
        debugger;
        $scope.data = {
            name:"主页面"
        }
    }]);

    app.controller("DetailController",["$scope",function ($scope) {

    }]);

    app.controller("OtherController",["$scope",function ($scope) {

    }]);
})();