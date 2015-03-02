/**
 * Created by ron on 3/2/2015.
 */
'use strict';

app.controller('PostsCtrl', function($scope, $location, PostService, AuthService) {
  $scope.posts = PostService.all;
  $scope.user = AuthService.user;

  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function() {
    $scope.post.creator = $scope.user.profile.username;
    $scope.post.creatorUID = $scope.user.uid;

    PostService.create($scope.post).then(function(ref) {
      $location.path('/posts/' + ref.name());
      $scope.post = {url: 'http://', title: ''};
    });
  };

  $scope.deletePost = function(post) {
    PostService.delete(post);
  };

});
