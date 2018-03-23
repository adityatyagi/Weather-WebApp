// CONTROLLERS
weatherApp.controller('homeController', ['$scope','$location', 'cityService', function($scope,$location, cityService) {
    $scope.name = "Home Section";
    
    $scope.city = cityService.city;
    $scope.submit = function(){
          $location.path("/forecast");
    };
    
    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope','cityService', '$routeParams','weatherService', function($scope, cityService, $routeParams,weatherService) {
    $scope.name = "Forecast Section";
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2' ;
    
    // for wanting the number of days from the url by the user
    // console.log($scope.days);
    //var weatherAPI = $resource('https://api.openweathermap.org/data/2.5/forecast/daily?appid=d39c95873c23f67c968903e6ea03c354');
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    //$scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt:$scope.days});
    
    //console.log($scope.weatherResult);
    
    $scope.convertToCelsius = function(degk){
     var tempF = Math.round((1.8 *(degk - 273))+ 32);
     var tempC = Math.round((tempF - 32)*0.5556);
        return tempC;
    }
    
    $scope.convertToDate = function(date){
        return new Date(date * 1000);
    }
    
    }]);

