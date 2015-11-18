'use strict';

angular.module('stockDogApp')
  // Register directives and inject dependencies
  .directive('stkWatchlistPanel', function ($location, $modal, WatchlistService) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the stkWatchlistPanel directive');
      }
    };
  });
