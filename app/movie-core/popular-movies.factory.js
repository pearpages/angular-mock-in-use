(function() {
	'use strict';

	angular.module("movieCore")
	.factory('PopularMovies',['$resource',PopularMovies]);

	function PopularMovies($resource) {
		return $resource('popular/:movieId', {movieId: '@id'}, {
			update: {
				method: 'PUT'
			}
		});
	}
})();