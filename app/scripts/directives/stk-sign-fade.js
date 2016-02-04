'use strict';

angular.module('stockDogApp')
	.directive('stkSignFade', function ($animate) {
		return {
			restrict: 'A',
			link: function($scope, $element, $attrs) {
				var oldVal = null;

				// use $observe to be notified of value changes
				$attrs.$observe('stkSignFade', function(newVal) {
					if (oldVal && oldVal === newVal) {
						return;
					}
					var oldPrice = parseFloat(oldVal);
					var newPrice = parseFloat(newVal);
					oldVal = newVal;

					// add the appropriate direction class and then remove it
					if (oldPrice && newPrice) {
						var direction = newPrice - oldPrice >= 0 ? 'up' : 'down';
						$animate.addClass($element, 'change-' + direction, function() {
							$animate.removeClass($element, 'change-' + direction);
						});
					}
				});
			}
		};
	});
