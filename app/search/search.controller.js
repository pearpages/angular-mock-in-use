(function() {
	'use strict';

	angular.module("mySearch")
	.controller('SearchController',['$location',SearchController]);

	function SearchController($location) {
		var vm = this;

		vm.query = '';
		vm.search = search;

		activate();

		function activate() {
			console.log('module search activated');
		}
		
		function search() {
			console.log('here');
			if(vm.query) {
				$location.path('/results').search('q',vm.query);
			}
		}
	}
})();