/**
 * Created by Hongliang.Liu on 2016/11/18.
 */

(function () {
    var app =angular.module("filterApp",[]);
    app.filter('reverse',function () {
        return function (text) {
            return text.split("").reverse().join("");
        }
    })

    app.controller("FirstCtrl",function ($scope) {
        $scope.data = {
          message:"Hello World!"
        };
    })

    app.controller("SearchFilterCtrl",function ($scope) {
        $scope.searchText ='';

        $scope.list =[
            {
                name: "Harry"
            },
            {
                name: "Tom"
            },
            {
                name: "Jerry"
            }
        ];
    });
})();