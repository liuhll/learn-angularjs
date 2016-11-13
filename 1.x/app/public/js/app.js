/**
 * Created by liuhongliang on 2016/11/12.
 */

(function(){
    var app = angular.module("App",[]);

    app.controller("FirstCtrl",function($scope){
        $scope.data ={
            message:"这是第一个控制器",
            onBtnClick:function(){
                debugger;
                alert(this.message);
            }
        };
    });

    app.controller("ConditionalCtrl",function($scope){
        $scope.data={
            message:"Hello",
            flag:true
        }
    });

    app.controller('repeatCtrl',function($scope){
        $scope.list=[
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

        $scope.onClick = function(index,data){
            alert("点击了"+index+"按钮,"+"数据:"+data);
        }
    });

})();
