(function() {
	'use strict';

	angular.module("home")
	.controller('HomeController',['$interval',HomeController]);

	function HomeController() {
		var vm = this;

		//public
		vm.result;

		//private
		var idx = 0;
		var results;

		//init
		activate();

		function activate() {
			results = [
			{
				"Title":"Star Wars: Episode IV - A New Hope",
				"imdbID":"tt0076759"
			},
			{
				"Title":"Star Wars: Episode V - The Empire STrikes Back",
				"imdbID":"tt0080684"
			},
			{
				"Title":"Star Wars: Episode VI - Return of the Jedi",
				"imdbID":"tt0086190"
			}
			];

			vm.result = results[0];

			$interaval(function() {
				++idx;
				vm.result = results[idx  % results.length];
			}, 5000);
		}
	}
})();