(function () {
    var app = angular.module('routeApp',[
        'ngRoute',
        'HomeController'
    ]);

    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.
        when('/home', {templateUrl: 'templates/home/index.html',   controller: HomeController}).
        when('/home/:id', {templateUrl: 'templates/home/detail.html', controller: HomeDetailCtrl}).
        otherwise({redirectTo: '/home'});
    }]);

})();