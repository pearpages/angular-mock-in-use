describe('Search Controller', function() {

	var $controller;
	var $location;

	beforeEach(module('myApp'));

	beforeEach(inject(function(_$controller_, _$location_) {
		$location = _$location_;
		$controller = _$controller_('SearchController', {$location: $location});
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
});