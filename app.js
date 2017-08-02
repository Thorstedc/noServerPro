angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url : "/home",
    templateUrl: "/home.html",
    controller: "nSCtrl"
  })

  $stateProvider.state('newYou', {
    url : "/newYou",
    templateUrl: "/newYou.html",
    controller: "nSCtrl"
  })

  $stateProvider.state('test', {
    url : "/putItToTest",
    templateUrl: "/putItToTest.html",
    controller: "nSCtrl"
  })

  $stateProvider.state('about', {
    url : "/about",
    templateUrl: "/about.html",
    controller: "nSCtrl"
  })

  $stateProvider.state('contact', {
    url : "/contact",
    templateUrl: "/contact.html",
    controller: "nSCtrl"
  })
  
});
