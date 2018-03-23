// SERVICES
// a custom service to share data between two controllers for two specific views
weatherApp.service('cityService', function(){
   this.city = "New Delhi"; 
});


// we can use services inside the custom services
weatherApp.service('weatherService',['$resource', function($resource){
    
    
    this.GetWeather = function(city, days){
        
        /*?q={city name},{country code}&cnt={cnt}*/
        var weatherAPI = $resource('https://api.openweathermap.org/data/2.5/forecast/daily?appid=d39c95873c23f67c968903e6ea03c354');
        return weatherAPI.get({q:city, cnt:days});  
    }
    
    
}]);