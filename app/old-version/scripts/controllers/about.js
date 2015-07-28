'use strict';

/**
 * @ngdoc function
 * @name angularFormationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularFormationApp
 */
angular.module('angularFormationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
