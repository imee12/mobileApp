angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Recovery Room',
    lastText: 'Under da Bridge',
    phone: 'tel:+1-843-727-0999',
    address: '685 King Street, Charleston, SC',
    face: 'http://static.wixstatic.com/media/8c2658_83e45e79dcefe490ea63a02d250608ab.jpg_srz_160_160_75_22_0.50_1.20_0.00_jpg_srz'
  }, {
    id: 1,
    name: 'Rarebit',
    lastText: 'King Street',
    phone: 'tel:+1-843-974-5483',
    address: '474 King Street, Charleston, SC',
    face: 'https://d13yacurqjgara.cloudfront.net/users/52758/screenshots/696315/rarebit_charleston_3_j_fletcher.jpg'
  }, {
    id: 2,
    name: 'The Palace Hotel',
    lastText: 'Da Ghetto',
    phone: 'tel:+1-843-501-7994',
    address: '35 Hanover Street, Charleston, SC',
    face: 'http://www.charlestoncitypaper.com/binary/9808/palace-hotel_1_jwb.jpg'
  }, {
    id: 3,
    name: 'The Faculty Lounge',
    lastText: 'Ghettoville',
    phone: 'tel:+1-843-330-6784',
    address: '391 Huger Street, Charleston, SC',
    face: 'http://www.charlestoncitypaper.com/imager/faculty-lounge-bar-now-accepting-members-on-huger-street/b/slideshow/4201893/d56d/557252_425118367536257_1326800615_n.png'
  },
  {
    id: 4,
    name: 'MotoBar',
    lastText: 'Somewhere? Ask Tyler',
    phone: 'tel:+1-843-805-5050',
    address: '487 King Street, Charleston, SC',
    face: 'https://cdn0.vox-cdn.com/thumbor/cxtAsoAyw5WLp55_jY8LpekcF6o=/861x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/2554518/IMG_1432.0.jpg'
  },

  {
    id: 5,
    name: 'Victor Social Club',
    lastText: 'Down the Alley from Rue de Jean',
    phone: 'tel:+1-843-203-3001',
    address: '39 John Street, Charleston, SC',
    face: 'http://media-cdn.tripadvisor.com/media/photo-s/06/3d/c4/87/victor-social-club.jpg'
  },{
    id: 6,
    name: 'ACs',
    lastText: 'King Street',
    phone: 'tel:+1-843-577-6742',
    address: '467 King Street, Charleston, SC',
    face: 'http://www.acsbar.com/images/logo%20copy.jpg'
  },

   {
    id: 7,
    name: 'Local 616',
    lastText: 'Next to the Freeway Entrance',
    phone: 'tel:+1-843-414-7850',
    address: '616 Meeting Street, Charleston, SC',
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
      name: 'ACs',
      lastText: 'King Street',
      phone: 'tel:+1-843-577-6742',
      address: '467 King Street, Charleston, SC',
      face: 'http://www.acsbar.com/images/logo%20copy.jpg'
    },

     {
      id: 1,
      name: 'Local 616',
      lastText: 'Next to the Freeway Entrance',
      phone: 'tel:+1-843-414-7850',
      address: '616 Meeting Street, Charleston, SC',
      face: 'https://cdn2.vox-cdn.com/uploads/chorus_image/image/38755114/local616.0.jpg'
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
