(function() {

	angular.module('controllers', [])

  .controller('homeCtrl', function($scope, datesFactory) {
    $scope.dates = null;
    function init() {
      datesFactory.getDates().success(function(dates) {

        $scope.dates = dates;
        $scope.pastDates = [];
        $scope.upcomingDates = [{"location": "No upcoming dates."}];

        for (var i = 0; i < dates.length; i++) {
          if (new Date(dates[i].date) < Date.now()) {
            $scope.pastDates.push(dates[i]);
          } else {
            $scope.upcomingDates.push(dates[i]);
          }
        }
        if ($scope.upcomingDates.length > 1) {
          $scope.upcomingDates.shift();
        }
      });
    }
    init();
  })

  .controller('photoCtrl', function($scope) {
    $scope.photos = [
      '../img/photos/1.jpg',
      '../img/photos/2.jpg',
      '../img/photos/3.jpg',
      '../img/photos/4.jpg',
      '../img/photos/5.jpg',
      '../img/photos/6.jpg'
    ];
  });

})();