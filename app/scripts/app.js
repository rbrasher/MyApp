/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name myApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
var app = angular.module('myApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.view.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/post.view.html',
        controller: 'PostViewCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/profile.view.html',
        controller: 'ProfileCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.view.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(AuthService) {
            return AuthService.resolveUser();
          }
        }
      })
      .when('/register', {
        templateUrl: 'views/register.view.html',
        controller: 'AuthCtrl',
        resolve: {
          user: function(AuthService) {
            return AuthService.resolveUser();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FIREBASE_URL', 'https://innibucketlist.firebaseio.com/');
