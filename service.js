angular.module('myApp').service("myServ", function($http) {

this.identity=function(){
 return $http({
    method: 'GET',
    url:'https://uinames.com/api/?ext'})

}
});
