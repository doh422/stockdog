'use strict';

var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;

angular.module('stockDogApp')
	.directive('contenteditable', function ($sce) {
		return {
			restrict: 'A',
			require: 'ngModel', // Get a hold of NgModelController
			link: function($scope, $element, $attrs, ngModelCtrl) {
				if (!ngModelCtrl) { return; } // do nothing if no ng-model

				// specify how UI should be updated
				ngModelCtrl.$render = function() {
					$element.html($sce.getTrustedHtml(ngModelCtrl.$viewValue || ''));
				};

				// read HTML value and then write data to the model or reset the view
				var read = function() {
					var value = $element.html();
					if ($attrs.type === 'number' && !NUMBER_REGEXP.test(value)) {
						ngModelCtrl.$render();
					} else {
						ngModelCtrl.$setViewValue(value);
					}
				};

				// add custom parser-based input type (only 'number' supported)
				// this will be applied to the $modelValue
				if ($attrs.type === 'number') {
					ngModelCtrl.$parsers.push(function(value) {
						return parseFloat(value);
					});
				}

				// listen for change events to enable binding
				$element.on('blur keyup change', function() {
					$scope.$apply(read);
				});
			}
		};
	});
