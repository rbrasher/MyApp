/**
 * Created by ron on 3/2/2015.
 */
'use strict';

app.controller('ProfileCtrl', function($scope, $routeParams, ProfileService) {
  var uid = $routeParams.userId;

  $scope.profile = ProfileService.get(uid);

  ProfileService.getPosts(uid).then(function(posts) {
    $scope.posts = posts;
  });
});
