//intialize angular app
var app = angular.module('sampleApp', ['ui.router','ngResource']);

  app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/main");
      
      $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "templates/main.html",
			controller:'mainController'
        })
          
        .state('form', {
            url: "/form",
            templateUrl: "templates/form.html",
			controller:'formController'
        })
		
		.state('resource', {
            url: "/resource",
            templateUrl: "templates/resource.html",
			controller:'resourceController'
        })
    }]);
