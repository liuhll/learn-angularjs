/**
 * Created by Hongliang.Liu on 2016/11/19.
 */
(function () {

    var includeApp = angular.module("includeApp",[]);

    includeApp.controller("DemoCtrl",function ($scope) {
        $scope.templete ={
            url:"https://www.baidu.com/",
            onloadFunc:function () {
                alert('使用属性方式调用include指令');
            },
            onloadFunc1:function () {
                alert('使用元素（element）方式调用include指令');
            }
        };
    });
})();