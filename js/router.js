(function() {
	angular.module('router', [])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    return $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    })
    .state('listen', {
      url: '/listen',
      templateUrl: 'partials/listen.html'
    })
    .state('watch', {
      url: '/watch',
      templateUrl: 'partials/watch.html'
    })
    .state('photos', {
      url: '/photos',
      templateUrl: 'partials/photos.html',
      controller: 'photoCtrl'
    })
    .state('press', {
      url: '/press',
      templateUrl: 'partials/press.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'partials/contact.html'
    });
  });

})();