// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('main', {
    url: '/main',      
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  })

  .state('home', {
    url: '/home',      
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('latest', {
    url: '/latest',   
    templateUrl: 'templates/latest.html',
    controller: 'LatestCtrl'
  })
  
  .state('gallery', {
    url: '/gallery',      
    templateUrl: 'templates/gallery.html',
    controller: 'GalleryCtrl'
  })

  .state('picture', {
    url: '/picture/:id',      
    templateUrl: 'templates/picture.html',
    controller: 'PictureCtrl'
  })  

  .state('wallpaper', {
    url: '/wallpaper/:id',
    templateUrl: 'templates/wallpaper.html',
    controller: 'WallpaperCtrl'
  })   

  .state('order', {
    url: '/order/:id',      
    templateUrl: 'templates/order.html',
    controller: 'OrderCtrl'
  })      

  .state('stories', {
    url: '/stories',
    templateUrl: 'templates/stories.html',
    controller: 'StoriesCtrl'
  })     

  .state('story', {
    url: '/story/:id',      
    templateUrl: 'templates/story.html',
    controller: 'StoryCtrl'
  })    

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutCtrl'
  })

  .state('settings', {
    url: '/settings',      
    templateUrl: 'templates/settings.html',
    controller: 'SettingsCtrl'
  }); 

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');
})
.constant('FBURL', 'https://jeremysomerville-d26b8.firebaseio.com');