angular.module('app.routes', ['ngRoute'])
  .config(function($routeProvider,
    $locationProvider) {
    $routeProvider
    // home page route
      .when('/', {
      templateUrl: 'views/home.html'
    })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'mainController',
        controllerAs: 'login',
      })

      // show users page
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'userController',
        controllerAs: 'user'
      });



    // rm the # from the url
    $locationProvider.html5Mode(true);

  });
