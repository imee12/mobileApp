angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Recovery Room',
    lastText: 'Somewhere in Charleston',
    percent: '60',
    face: 'http://static.wixstatic.com/media/8c2658_83e45e79dcefe490ea63a02d250608ab.jpg_srz_160_160_75_22_0.50_1.20_0.00_jpg_srz'
  }, {
    id: 1,
    name: 'Rarebit',
    lastText: 'King Street',
    face: 'https://d13yacurqjgara.cloudfront.net/users/52758/screenshots/696315/rarebit_charleston_3_j_fletcher.jpg'
  }, {
    id: 2,
    name: 'The Palace Hotel',
    lastText: 'Da Ghetto',
    face: 'http://www.charlestoncitypaper.com/binary/9808/palace-hotel_1_jwb.jpg'
  }, {
    id: 3,
    name: 'The Faculty Lounge',
    lastText: 'Ghettoville',
    face: 'http://www.charlestoncitypaper.com/imager/faculty-lounge-bar-now-accepting-members-on-huger-street/b/slideshow/4201893/d56d/557252_425118367536257_1326800615_n.png'
  }, {
    id: 4,
    name: 'Local 616',
    lastText: 'Next to the Freeway Entrance',
    face: 'https://cdn2.vox-cdn.com/uploads/chorus_image/image/38755114/local616.0.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('InstaService', ['$http', function ($http) {
//  return $resource('/api/post/:id')
  // var url = 'https://api.instagram.com/v1/tags/term/media/recent?client_id=894e7d8e14284302842879cb81e2b4db';

  return {
    fetchPopular: function (callback){
      // var endPoint = "https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";

      // var endPoint =
      // "https://api.instagram.com/v1/media/search?lat=32.784618&lng=-79.940918&client_id=894e7d8e14284302842879cb81e2b4db&callback=JSON_CALLBACK";

      var endPoint=
      "https://api.instagram.com/v1/tags/beer/media/recent?client_id=894e7d8e14284302842879cb81e2b4db&callback=JSON_CALLBACK&count=4";


    $http.jsonp(endPoint).success(function(response){
      callback(response.data);
    });
  }
}
}]);

//});
