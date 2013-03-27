'use strict';

angular.module('angularSublimePackagesApp')
  .controller('MainCtrl', function ($scope, $http) {
    var url = '../package_control_channel/repositories.json';
    $http.get(url).success(function(data, response) {
      console.log(data);
      var idx = 0
        , index = []
        , packages = [];

      // create an index
      for (var x in data.package_name_map) {
        idx++;
        packages.push({"key": x, "name": data.package_name_map[x], "repo": data.repositories[idx]});
      }
      
      console.log(packages);
      $scope.packages = packages;
    });
  });
