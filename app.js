var app = angular.module('computer',['ngRoute','ngResource'])

//ROUTES
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/main',{
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  })
  .when('/about',{
    templateUrl: 'templates/about.html',
    controller: 'MainCtrl'
  })
  .when('/services',{
    templateUrl: 'templates/services.html',
    controller: 'ServicesCtrl'
  })
  .when('/contact',{
    templateUrl: 'templates/contact.html',
    controller: 'ContacCtrl'
  })
  .otherwise({redirectTo: '/main'})
}])

//CONTROLLERS
.controller('MainCtrl', [ '$scope','$http', function($scope,$http){

}])

.controller('ServicesCtrl', [ '$scope','$http', function($scope, $http) {
  $http.get('services.json').then(function(response){
    console.log(response)
  });
}])

.controller('ContactCtrl', [ '$scope','$http', function($scope,$http){

}])
