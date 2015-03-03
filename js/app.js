(function() {
    'use strict';

    var app = angular.module('app', [
        'ngMaterial'
    ]);

    app.controller('MainController', function ($scope, $http) {
        var path = 'data.json';

        // Response from $http.get is structured as follows:
        /*
         {
           "OWNER_NAME":[
             {
               "name":"REPO_NAME",
               "owner":"OWNER_NAME",
               "homepage":"HOME_PAGE_URL",
               "description":"DESCRIPTION",
               "language":"LANGUAGE",
               "forks":NUMBER_OF_FORKS,
               "open_issues":NUMBER_OF_OPEN_ISSUES,
             },
             { ... }
           ],
           "OWNER_NAME": [ ... ]
         }
         */
        // See data.json for actual data

        $scope.onSearchClick = function () {
            $http.get(path).success(function (data) {
                $scope.data = data;
            });
        };
    });

}());