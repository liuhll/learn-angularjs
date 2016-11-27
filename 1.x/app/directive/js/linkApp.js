(function () {
    var app = angular.module("linkApp",[]);

    app.directive('linkDirec',function () {
        return {
            restrict:"AE",
            scope:{
                a:"=",
                b:"=",
                c:"="
            },
            templateUrl:"linkpart.html",
            link:function (scope,ele,attr) {
                // console.log(scope);
                // console.log(JSON.stringify(ele));
                // console.log(JSON.stringify(attr));

               // ele.find("p").addClass('strike');

                ele.find("p").bind("mouseenter",function () {
                    ele.find("p").addClass("strike");
                    ele.find("p").text("鼠标移入了p元素");
                });

                ele.find("p").bind("mouseleave",function () {
                    ele.find("p").removeClass("strike");
                   // debugger;
                    $(ele.find("p")[0]).text(scope.a);
                    $(ele.find("p")[1]).text(scope.b);
                    $(ele.find("p")[2]).text(scope.c);

                });

            }

        };
    });

    app.controller('FirstCtrl',function ($scope) {
         $scope.a="A的值";
         $scope.b="B的值";
         $scope.c="c的值";
    });
})();