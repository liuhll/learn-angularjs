(function () {
    var app = angular.module("routeApp");

    app.factory("dataService",function () {
        return {
            getAllSchools:function () {
                return [
                    {
                        name:"School1",
                        address:"address1"
                    },
                    {
                        name:"School2",
                        address:"address2"
                    },
                    {
                        name:"School3",
                        address:"address3"
                    },
                ];
            },
            getAllClassrooms:function () {
                
            },
            getAllActivities:function () {

            }
        };
    });
    
    app.factory("notifier",function () {
        return {

        };
    })
})();