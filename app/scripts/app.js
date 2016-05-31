'use strict';

/**
 * @ngdoc overview
 * @name FamilyBusiness
 * @description
 * # FamilyBusiness
 *
 * Main module of the application.
 */

angular.module('FamilyBusiness', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
])

// Configurations
.config(function ($stateProvider) {

  // States
  $stateProvider
    
    .state('main', {
      url: "/",
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
    })


})
.run(function( $state ) {

  $state.go('main');

});