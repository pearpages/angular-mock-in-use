(function() {
	'use strict';

	angular.module("resultsModule")
	.controller('ResultsController',['omdbApi',ResultsController]);

	function ResultsController(omdbApi) {
		var vm = this;
		
		vm.results;

		activate();

		function activate() {
			omdbApi.search('star wars')
			.then(function(data) {
				vm.results = data.Search;
			});
		}
		
	}
})();