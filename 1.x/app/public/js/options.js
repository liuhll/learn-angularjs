/**
 * Created by Hongliang.Liu on 2016/11/19.
 */

(function () {
    var app = angular.module("optionsApp",[]);
    app.controller('OptionsCtrl',function ($scope) {
        $scope.colors = [
            {name: '黑色', color:'black' },
            {name: '白色', color:'white' },
            {name: '红色', color:'red' },
            {name: '蓝色', color:'blue' },
            {name: '黄色', color:'yellow'}
        ];
        $scope.colorChosen = $scope.colors[0];

        $scope.colors1 = [
            {name: '黑色', color:'black' },
            {name: '白色', color:'white' },
            {name: '红色', color:'red' },
            {name: '蓝色', color:'blue' },
            {name: '黄色', color:'yellow'}
        ];

        $scope.colorChosen1 = {};

        $scope.groupColors =[
            {name: '黑色', color: 'black', type: "暗色"},
            {name: '白色', color: 'white', type: "亮色"},
            {name: '红色', color: 'red', type: "暗色"},
            {name: '蓝色', color: 'blue', type: "暗色"},
            {name: '黄色', color: 'yellow', type: "亮色"}
        ];

        $scope.colorGroupChosen ={}

        $scope.disableColors = [
            {name: '黑色', color: 'black', type: "暗色"},
            {name: '白色', color: 'white', type: "亮色", disabled: false},
            {name: '红色', color: 'red', type: "暗色", disabled: true},
            {name: '蓝色', color: 'blue', type: "暗色", disabled: false},
            {name: '黄色', color: 'yellow', type: "亮色", disabled: true}
        ];

        $scope.disabeChosen = {};

        $scope.countries = {
            CN: '中国China',
            US: '美国United States',
            UK: '英国United Kingdom',
            GR: '德国Germany'
        };

        $scope.country = 'CN';
    });

})();