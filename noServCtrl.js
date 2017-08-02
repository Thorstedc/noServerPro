angular.module('myApp').controller('nSCtrl', function($scope, $http, $log, myServ) {


$scope.identity = myServ.identity().then(function(response) {
console.log(response)
  $scope.people = response.data;
})





});
