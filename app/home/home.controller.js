(function() {
	'use strict';

	angular.module("home")
	.controller('HomeController',['$interval','omdbApi','PopularMovies',HomeController]);

	function HomeController($interval,omdbApi,PopularMovies) {
		var vm = this;

		//public
		vm.result;

		//private
		var idx = 0;
		var results;

		//init
		activate();

		function activate() {
			// PopularMovies.get()
			// .then(function(data) {
				var data = ['tt0076759','tt0080684','tt0086190'];
				results = data;
				findMovie(results[0]);
				$interval(function() {
					++idx;
					findMovie(results[idx  % results.length]);
				}, 5000);
			// });
		}

		function findMovie(id) {
			omdbApi.find(id)
			.then(function(data) {
				vm.result = data;
			}); 
		}

	}
})();