(function() {

	angular.module('directives', [])


  .directive('owlCarousel', function() {
    return {
      restrict: 'E',
      transclude: false,
      link: function (scope) {
        scope.initCarousel = function(element) {
          var customOptions = scope.$eval($(element).attr('data-options'));
          $(element).owlCarousel(customOptions);
        };
      }
    };
  })

  .directive('owlCarouselPhoto', [function() {
    return {
      restrict: 'A',
      transclude: false,
      link: function(scope, element) {
        if(scope.$last) {
          scope.initCarousel(element.parent());
        }
      }
    };
  }])

  .directive('videoImg', [function() {
    return {
      link: function(scope, element) {
        var videoId = $(element).attr('data-options');
        var videoIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
          videoId +
          '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
        $(element).click(function() {
          $('.videoWrapper').slideDown();
          $('.videoWrapper').html(videoIframe);
        });
      }
    };
  }])

  .directive('mobileNav', [function() {
    return {
      link: function(scope, element) {
        $('.mobile-menu-btn').click(function() {
          $(".mobile-nav-links").slideDown();
        });
        $(".close-btn").click(function() {
          $(".mobile-nav-links").slideUp();
        });
      }
    };
  }]);




})();