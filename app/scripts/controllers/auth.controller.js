/**
 * Created by ron on 3/2/2015.
 */
'use strict';

app.controller('AuthCtrl', function($scope, $location, AuthService, user) {
  //if(AuthService.signedIn()) {
    //location.path('/');
  //}
  if(user) {
    $location.path('/');
  }

  $scope.login = function() {
    AuthService.login($scope.user).then(function() {
      $location.path('/');
    }, function(error) {
      $scope.error = error.toString();
    });
  };

  $scope.register = function() {
    AuthService.register($scope.user).then(function(user) {
      return AuthService.login($scope.user).then(function() {
        user.username = $scope.user.username;
        return AuthService.createProfile(user);
      }).then(function() {
        $location.path('/');
      });
    }, function(error) {
      $scope.error = error.toString();
    });
  };

});
