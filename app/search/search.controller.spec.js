describe('Search Controller', function() {

	var $controller;
	var $location;
	var $timeout;

	beforeEach(module('myApp'));

	beforeEach(inject(function(_$controller_, _$location_,_$timeout_) {
		$location = _$location_;
		$timeout = _$timeout_;
		$controller = _$controller_('SearchController', {$location: $location, $timeout: $timeout});
	}));

	it('should redirect to the query results page for a non-empty query', function() {
		$controller.query = 'star wars';
		$controller.search();
		expect($location.url()).toBe('/results?q=star%20wars');
	});	

	it('should not redirect to query results for empty query', function() {
		$controller.query = '';
		$controller.search();
		expect($location.url()).toBe('');
	});

	it('should redirect after 1 second of keyboard inactivity', function() {
		$controller.query = 'star wars';
		$controller.keyup();
		$timeout.flush(1000); //1000 is the mocked delay
		expect($timeout.verifyNoPendingTasks).not.toThrow();
		expect($location.url()).toBe('/results?q=star%20wars');
	});

	it('it should cancel timeout in keydown', function() {
		$controller.query = 'star wars';
		$controller.keyup();
		$controller.keydown();
		expect($timeout.verifyNoPendingTasks).not.toThrow();
	});

	it('it should cancel timeout on search', function() {
		$controller.query = 'star wars';
		$controller.keyup();
		$controller.search();
		expect($timeout.verifyNoPendingTasks).not.toThrow();
	});
});