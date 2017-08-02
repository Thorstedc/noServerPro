angular.module('myApp').controller('nSCtrl', function($scope, $http, $log, myServ) {
  angular.element(document).ready(function() {
    $('p.contact').fadeIn('4000');
    $('h1').fadeIn('6000');
    $('#disappear').on('click', function() {
      console.log("disappear");
      $('.submit').css('display', 'none')
      $('.thanks').css('display', 'block')
    })

  })


$scope.identity = myServ.identity().then(function(response) {
console.log(response)
  $scope.people = response.data;
})





});
