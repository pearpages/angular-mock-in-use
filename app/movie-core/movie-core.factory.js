(function() {
	'use strict';

	angular.module("movieCore")
	.factory('popularMOvies',['ngResource',popularMOvies]);

	function popularMOvies($resource) {
		return $resource('popular/:movieId', {movieId: '@id'}, {
			update: {
				method: 'PUT'
			}
		});
	}
})();