(function() {
	'use strict';

	angular.module("mySearch")
	.controller('SearchController',['$location',SearchController]);

	function SearchController($location) {
		var vm = this;

		vm.query = '';
		vm.search = search;
		
		function search() {
			if(vm.query) {
				$location.path('/results').search('q',vm.query);
			}
		}
	}
})();