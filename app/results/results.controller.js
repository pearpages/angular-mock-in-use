(function() {
	'use strict';

	angular.module("resultsModule")
	.controller('ResultsController',['omdbApi','$location',ResultsController]);

	function ResultsController(omdbApi,$location) {
		var vm = this;
		
		vm.results;

		activate();

		function activate() {
			var query = $location.search().q;
			omdbApi.search(query)
			.then(function(data) {
				vm.results = data.Search;
			});
		}
		
	}
})();