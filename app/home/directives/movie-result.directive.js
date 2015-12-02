(function() {
	'use strict';

	angular.module("home")
	.directive('movieResult',[movieResult]);

	function movieResult() {
		return {
				restrict: 'E',
				replace: false, //check about this property in the API
				bindToController: true,
				controllerAs: 'vmd',
				controller: controller,
				scope:{
					result: '='
				},
				template: '<div>{{vmd.result.Title}}</div>'
			};
		
			function controller() {
				var vmd = this;
		
				activate();
		
				function activate() {
					console.log('directive');
				}
			}
	}
})();