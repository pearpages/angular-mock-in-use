(function() {
	'use strict';
	angular.module("home",['omdb','movieCore','ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			});
	})
	.run(function() {
		//console.log('home initialized');
	});
})();