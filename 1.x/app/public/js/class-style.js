/**
 * Created by Hongliang.Liu on 2016/11/18.
 */

(function () {
    var app = angular.module("classApp",[])
    app.controller("ClassCtrl",function ($scope) {
        $scope.data = {
            deleted:false,
            important:false,
            error:false,

            style:'',
            warning:true
        };
    });

    app.controller("StyleCtrl",function ($scope) {
        $scope.data={
            colorInput:'red',
            styleText:{ color: 'orange'}

        }
    });
})();