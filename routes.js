// ROUTES
weatherApp.config(function($routeProvider, $sceDelegateProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
        .otherwise({ redirectTo: '/' });
    
        //$locationProvider.html5Mode(true); //activate HTML5 Mode, for removing the #!/ in the routing
    
    // for removing the insecure url error
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',                    // trust all resources from the same origin
        'https://api.openweathermap.org/data/2.5/forecast/daily?appid=d39c95873c23f67c968903e6ea03c354'
    ]);


});
