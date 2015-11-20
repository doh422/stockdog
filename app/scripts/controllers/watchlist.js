'use strict';

angular.module('stockDogApp')
  .controller('WatchlistCtrl', function ($scope, $routeParams, $modal, WatchlistService, CompanyService) {
  	// [1] Initializations
  	$scope.companies = CompanyService.query();
  	$scope.watchlist = WatchlistService.query($routeParams.listId);
  	$scope.stocks = $scope.watchlist.stocks;
  	$scope.newStock = {};
  	var addStockModal = $modal({
  		scope: $scope,
  		template: 'views/templates/addstock-modal.html',
  		show: false
  	});

  	// [2] Expose showStockModal
  	$scope.showStockModal = function() {
  		addStockModal.$promise.then(addStockModal.show);
  	};
    ];
  });
