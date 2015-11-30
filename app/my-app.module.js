(function() {
	'use strict';
	angular.module("myApp",['ui.bootstrap','ngRoute','movieCore','mySearch','omdb','resultsModule'])
	.config(function($routeProvider) {
		$routeProvider
			.otherwise({
				redirectTo: '/'
			})
	})
	.run(function() {
		console.log('app has started');
	});
})();