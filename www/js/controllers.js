angular.module('starter.controllers', [])



.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
//  $scope.chat= InstagramService($stateParms.photoID);
})
.controller('InstaController', ['$scope', 'InstaService',
    function ($scope, InstaService){

      var InstaCtrl = this;
      $scope.layout = 'grid';

      $scope.setLayout = function (layout){
      $scope.layout = layout;
    };

    $scope.isLayout = function (layout){
      return $scope.layout ==layout
    };
    $scope.pics = [];

    InstaService.fetchPopular(function(data){
      $scope.pics = data
    });


  }])

.controller('RatingDemoCtrl', function ($scope){
  $scope.rate = 3;
  $scope.max = 5;

})
.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
