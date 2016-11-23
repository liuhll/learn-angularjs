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
    });

    app.directive('people1',function () {
        return {
            restrict:"AE",
            // Directive的scope
            // Directive在默认情况下，是没有自动绑定一个$scope的。也就是说，在默认情况下，Directive无法在JavaScript中接收传入的数据（因为缺少一个存储信息的载体），形成我们期望的效果。
            scope:{
                info:"="
            },
            template : "<p>姓名:{{info.name}}</p>" +
            "<p>性别：{{info.sex}}</p>"
        };
    });

    app.directive('people2',function () {
        return{
            restrict:"E",
            scope:{
                info:"="
            },
            template:"姓名：<input type='text' ng-model='info.name' '/> <br/>" +
            "性别：<input type='text' ng-model='info.sex' />"
        };
    });

    app.directive('people3',function () {
        return{
            restrict:"E",
            //传入文本，只读，不可修改
            scope:{
                name:"@",
                sex:"@"
            },
            template:"姓名：<input type='text' ng-model='name'/> <br/>" +
            "性别：{{sex}}"

        };
    });

    app.controller("FirstCtrl",function ($scope) {
        $scope.data={
            name:"Hongliang.Liu",
            sex:'Male'
        };
    });


    app.controller("SecondCtrl",function ($scope) {
        $scope.hongLiang ={
            name : "Hongliang.Liu",
            sex:"Male"
        };

        $scope.meimei = {
            name:"MeiMei",
            sex:"Female",
        };
    })

    app.controller("ThridCtrl",function ($scope) {
        $scope.peopleList=[
            {
                name:"Hongliang.Liu",
                sex:'Male'
            },
            {
                name:"MeiMei",
                sex:"Female",
            }
        ];

        $scope.hongLiang = {
            name:"Hongliang.Liu1",
            sex:'Male'
        };
    })
})();