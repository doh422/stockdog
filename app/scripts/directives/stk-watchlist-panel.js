'use strict';

angular.module('stockDogApp')
  // Register directives and inject dependencies
  .directive('stkWatchlistPanel', function ($location, $modal, WatchlistService) {
	return {
		templateUrl: 'views/templates/watchlist-panel.html',
		restrict: 'E',
		scope: {},
		link: function($scope) {
			// initialize variables
			$scope.watchlist = {};
			// creating modal using AngularStrap's $modal service
			var addListModal = $modal({
				scope: $scope,
				template: 'views/templates/addlist-modal.html',
				show: false
			});

			// Bind model from services to this scope
			$scope.watchlists = WatchlistService.query();
		}
    };
  });
