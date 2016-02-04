'use strict';

angular.module('stockDogApp')
	.directive('stkStockRow', function ($timeout, QuoteService) {
		return {
			// use as element attribute and require stokStockTable controller
			restrict: 'A',
			require: '^stk-Stock-Table',
			scope: {
				stock: '=',
				isLast: '='
			},
			// required controller will be made available at end
			link: function($scope, $element, $attrs, stockTableCtrl) {
				// create tooltip for stock-row
				$element.tooltip({
					placement:'left',
					title: $scope.stock.company.name
				});

				// add this row to the TableCtrl
				stockTableCtrl.addRow($scope);

				// register this stock with the QuoteService
				QuoteService.register($scope.stock);

				// deregister this stock with the QuoteService on $destroy
				$scope.$on('$destroy', function() {
					stockTableCtrl.removeRow($scope);
					QuoteService.deregister($scope.stock);
				});

				// if this is the last stock-row, fetch quotes immediately
				if ($scope.isLast) {
					$timeout(QuoteService.fetch);
				}

				// watch for changes in shares and recalculate fields
				$scope.$watch('stock.shares', function() {
					$scope.stock.marketValue = $scope.stock.shares * $scope.stock.lastPrice;
					$scope.stock.dayChange = $scope.stock.shares * parseFloat($scope.stock.change);
					$scope.stock.save();
				});
			}
		};
	});
