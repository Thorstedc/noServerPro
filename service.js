angular.module('myApp').service("myServ", function($http) {

this.identity=function(){
 return $http({
    method: 'GET',
    url:'http://uinames.com/api/?ext'})

}
});
