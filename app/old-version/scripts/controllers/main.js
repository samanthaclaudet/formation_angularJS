'use strict';

/**
 * @ngdoc function
 * @name angularFormationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFormationApp
 */
angular.module('angularFormationApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.bonjour = "bonjour";
    $scope.liste = ['bonjour','hello','ciao'];
    $scope.object = [{'name':'robert','age':45},{'name':'roberta','age':15}];
    $scope.isOlderThan = function(age1, age2) { return age1>age2;}
    //$scope.goToDetail = function() {$location.url("/detail");}
  });
