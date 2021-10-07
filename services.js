weatherApp.service("cityService", function () {
  this.cityName = "Baku";
});

weatherApp.service("weatherService", ['$resource', function ($resource) {
  this.GetWeather = function (city, days) {
    var weatherAPI = $resource(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        callback: "JSON_CALLBACK",
      },
      { get: { method: "JSONP" } }
    );
    return weatherAPI.get({
      q: city,
      cnt: days,
      appid: "590f51fd8d26de3d6463a4819e09cacd",
    });
  };
}]);
