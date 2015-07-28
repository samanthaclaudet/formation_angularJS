'use strict';

/**
 * @ngdoc overview
 * @name angularFormationApp
 * @description
 * # angularFormationApp
 *
 * Main module of the application.
 */
angular
  .module('angularFormationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/detail', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
