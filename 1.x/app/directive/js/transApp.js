(function () {
    var app = angular.module("transApp",[]);

    app.directive("transDirect",function () {
        return {
            restrict:"AE",
            //通过transclude标签将Directive变为一个容器
            transclude:true,
            //注意template中的ng-transclude，这里是放置原有代码的地方。
            template:"<h3>作为容器的指令</h3>" +
            "<div ng-transclude></div>"

        };
    });
})();