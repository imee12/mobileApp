angular.module('starter.controllers', [])



.controller('DashCtrl', function($scope) {
  // geoLocation.getGeolocation();

})

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
// .controller("GoogleCtrl", function (GoogleService, $scope, $location, $routeParams) {
//
//     var goog = this;
//
//     goog.allBars = GoogleService.getAllBarz();
//
//     goog.getSingleBar = GoogleService.getOneBar($routeParams.barIndex);
//
//     $scope.location= "";
//       $scope.doSearch = function(){
//               if($scope.location === ''){
//                   alert('Directive did not update the location property in parent controller.');
//               } else {
//                   console.log($scope.location);
//                 var locCoords = parseInt($scope.location)
//                 console.log(locCoords);
//                   goog.locationInput($scope.location)
//               }
//           };
//
//     goog.locationInput = function (newLocation) {
//       var locName = newLocation
//       console.log(locName)
//       GoogleService.getBarInfo(locName)
//     }
//
// })

// .controller('MapCtrl', function($scope, $ionicLoading) {
//   $scope.mapCreated = function(map) {
//     $scope.map = map;
//   };
//
//   $scope.centerOnMe = function () {
//     console.log("Centering");
//     if (!$scope.map) {
//       return;
//     }
//
//     $scope.loading = $ionicLoading.show({
//       content: 'Getting current location...',
//       showBackdrop: false
//     });
//
//     navigator.geolocation.getCurrentPosition(function (pos) {
//       console.log('Got pos', pos);
//       $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//       $scope.loading.hide();
//     }, function (error) {
//       alert('Unable to get location: ' + error.message);
//     })
// }


//})
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
