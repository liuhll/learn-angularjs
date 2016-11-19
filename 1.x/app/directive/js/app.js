/**
 * Created by Hongliang.Liu on 2016/11/19.
 */
(function () {
    var app = angular.module("directiveApp",[]);

    // App.directive();
    //调用了directive()函数来告诉AngularJS加入一个新的Directive：
    app.directive('people',function () {
        //直接在第二个参数的函数中返回了一个对象
        return {
            //restrict是告诉AngularJS，这个Directive应该如何使用
            restrict:"E",
            //在运行网页时，HTML对应的标签，将被替换成对应的内容
            template:"<p>姓名:{{data.name}}</p>" +
            "<p>性别:{{data.sex}}</p>"
        };
    })

    app.controller("FirstCtrl",function ($scope) {
        $scope.data={
            name:"Hongliang.Liu",
            sex:'Male'
        };
    });
})();