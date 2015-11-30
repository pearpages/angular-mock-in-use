(function() {
	'use strict';
	angular.module("resultsModule",['omdb','ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/results', {
				templateUrl: 'app/results/results.html',
				controller: 'ResultsController',
				controllerAs: 'vm'
			});
	});
})();