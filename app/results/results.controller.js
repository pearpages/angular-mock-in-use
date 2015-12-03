(function() {
	'use strict';

	angular.module("resultsModule")
	.controller('ResultsController',['omdbApi','$location',ResultsController]);

	function ResultsController(omdbApi,$location) {
		var vm = this;
		
		vm.results = [];
		vm.errorMessage = '';
		vm.expand = expand;

		activate();

		function activate() {
			var query = $location.search().q;
			omdbApi.search(query)
			.then(function(data) {
				vm.results = data.Search;
			})
			.catch(function() {
				vm.errorMessage = 'Something went wrong!';
			});
		}

		function expand(index, id) {
				omdbApi.find(id)
				.then(function(data) {
					vm.results[index].data = data;
				});	
		}
		
	}
})();