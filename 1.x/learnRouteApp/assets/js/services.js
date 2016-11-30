(function () {
    var app = angular.module("routeApp");

    app.factory("dataService",function () {
        return {
            getAllSchools:function () {
                var schoolList = [
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

                return schoolList;
            },
            getAllClassrooms:function () {
              var classList = [
                  {
                      id:1,
                      className:"A班",
                      classAdviser:"张三"
                  },
                  {
                      id:2,
                      className:"B班",
                      classAdviser:"LiSi"
                  },
                  {
                      id:3,
                      className:"C班",
                      classAdviser:"2.Wang"
                  }
              ];
              return classList;
            },
            getClassroom:function (id) {
                var classList = this.getAllClassrooms();
                return classList.filter(function (val) {
                   return  val["id"] == id;
                })[0];
            },
            getAllActivities:function () {

            }
        };
    });

    function School(options) {
        var _option = options;
        var _err = "";
        this.then = callback;
        this.getAllSchools = function () {
            return this;
        };
        this.catch = function () {
            if (_err){
                console.log(_err);
                throw _err;
            }
            return this;
        };

    }
    
    app.factory("notifier",function () {
        return {

        };
    })
})();