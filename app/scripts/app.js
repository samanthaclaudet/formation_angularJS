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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/:tweet', {
        templateUrl: 'views/answer.html',
        controller: 'AnswerCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
