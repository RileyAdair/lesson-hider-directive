angular.module('directivePractice')
.directive('lessonHider', function() {

  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function( scope, element, attributes ) {
      /* Add my-test attribute to directive to read attributes in console
      console.log(scope, element, attributes);
      my-test="Hello there!" */
      scope.getSchedule.then(function(response){
        scope.schedule = response.data;
        console.log(scope.schedule);

        scope.schedule.forEach(function(scheduleDay){
          if(scheduleDay.lesson === scope.lesson) {
            scope.lessonDay = scheduleDay.weekday;
            element.css('text-decoration', 'line-through');
            return;
          }
        });

      });
    }
  }

});
