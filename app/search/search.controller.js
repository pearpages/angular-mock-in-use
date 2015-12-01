(function() {
	'use strict';

	angular.module("mySearch")
	.controller('SearchController',['$location','$timeout',SearchController]);

	function SearchController($location,$timeout) {
		var vm = this;

		vm.query = '';
		vm.search = search;
		vm.keyup = keyup;
		vm.keydown = keydown;
		
		var timeout;

		activate();

		function activate() {
			console.log('module search activated');
		}
		
		function search() {
			$timeout.cancel(timeout);
			if(vm.query) {
				$location.path('/results').search('q',vm.query);
			}
		}

		function keyup() {
			timeout = $timeout(vm.search(),1000);
		}

		function keydown() {
			$timeout.cancel(timeout);
		}
	}
})();