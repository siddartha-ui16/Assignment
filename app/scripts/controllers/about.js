'use strict';

/**
 * @ngdoc function
 * @name myDashboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myDashboardApp
 */
angular.module('myDashboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
