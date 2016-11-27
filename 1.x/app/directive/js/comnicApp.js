(function () {
    var app = angular.module("comnicApp",[]);

    app.directive('gqTabContainer',function () {
       return {
           restrict:"AE",
           transclude:true,
           scope:{},
           //为该指令添加一个控制器
           controller:['$scope',function ($scope) {
               // panes 容器，初始化为空数组
                var panes = $scope.panes =[];

               //tab列表中项目被选中（点击）的处理函数
                $scope.select = function (pane) {
                    //遍历所有的panes 并且将其选中状态设置为false
                    angular.forEach(panes,function (pane) {
                        pane.selected = false;
                    });
                    //将传入的pane的选中状态设置为true
                    pane.selected = true;
                }

                //初始化页面时，供其他Directive调用的注册函数
               this.addPane = function (pane) {
                    if(panes.length === 0){
                        $scope.select(pane);
                    }
                    //往panes容器中push pane，新增一个 pane
                    panes.push(pane);
               }
           }],
           templateUrl:'gqTabList.html',
       };
    });

    app.directive('gqTabContent',function () {
        return {
            restrict:"AE",
            //获取gqTabContainer这个Directive
            require:'^gqTabContainer',
            transclude:true,
            scope:{
                title:"@",
            },
            link:function (scope, element, attrs, tabContainer){
                //调用了上方gqTabContainer的addPane()方法
                //注意参数命名，不需要和上方Directive一致
                debugger;
                tabContainer.addPane(scope);
            },
            templateUrl:"gqTabContent.html"
        };
    });
})();