'use strict';

/**
 * @ngdoc function
 * @name myDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myDashboardApp
 */
angular.module('myDashboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
