weatherApp.controller('homeController', ["$scope", "$location", "cityService", function($scope, $location, cityService){
    $scope.city = cityService.cityName;
    $scope.$watch('city', function() {
        cityService.cityName = $scope.city;
    })
    $scope.submit = function(){
      $location.path("/forecast");
    }
}])
weatherApp.controller("forecastController", [
    '$scope',
    '$routeParams',
    'cityService',
    "weatherService",
    function ($scope, $routeParams, cityService, weatherService) {
      $scope.cityName = cityService.cityName;
      $scope.days = $routeParams.days || '2';

      $scope.weatherResult = weatherService.GetWeather($scope.cityName, $scope.days);
      $scope.convertCelsius = function(degK) {
        return Math.round(degK - 273);
      }
      $scope.convertDate = function(dt){
        return new Date(dt*1000);
      }
      $scope.capitalizeCity = function(city){
        return city.capitalize();
      }
      console.log($scope.weatherResult)
    },
  ]);
  