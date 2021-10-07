weatherApp.directive("weatherOfDays", function() {
    return {
      restrict: "E",
      templateUrl: "directives/weatherOfDays.htm",
      replace: true,
      scope: {
        weatherDay: "=",
        convertStandart: "&",
        convertDate: "&",
        dateFormat: "@"
      }
    }
  })