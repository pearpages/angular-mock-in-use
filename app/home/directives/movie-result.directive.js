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
				template: [
				'<div class="row">',
					'<div class="col-sm-4">',
						'<img ng-src="{{vmd.result.Poster}}" alt="{{vmd.result.Title}}" width="220">',
					'</div>',
					'<div class="col-sm-8">',
						'<h3>{{vmd.result.Title}}</h3>',
						'<p>{{vmd.result.Plot}}</p>',
						'<p><strong>Director:</strong> {{vmd.result.Director}}</p>',
						'<p><strong>Actors:</strong> {{vmd.result.Actors}}</p>',
						'<p><strong>Released:</strong> {{vmd.result.Released}}</p>',
						'<p><strong>Genre:</strong> {{vmd.result.Genre}}</p>',
					'</div>',
				'</div>'
				].join('')
			};
		
			function controller() {
				var vmd = this;
		
				activate();
		
				function activate() {
					//console.log('directive');
				}
			}
	}
})();