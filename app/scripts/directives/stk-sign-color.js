'use strict';

angular.module('stockDogApp')
	.directive('stkSignColor', function () {
		return {
			restrict: 'A',
			link: function($scope, $element, $attrs) {
				// use $observe to watch expression for changes
				$attrs.$observe('stkSignColor', function(newVal) {
					var newSign = parseFloat(newVal);
					// set element's style.color value depending on sign
					if (newSign > 0) {
						$element[0].style.color = 'Green';
					} else {
						$element[0].style.color = 'Red';
					}
				});
			}
		};
	});
