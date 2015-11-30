describe('Results Controller', function() {
	
	var results = {
		"Search": [
			{
				"Title":"Title1",
				"Year":"1234",
				"imdbID":"tt12314",
				"Type":"movie"
			},
			{
				"Title":"Title2",
				"Year":"5463",
				"imdbID":"tt89745",
				"Type":"movie"
			},
			{
				"Title":"Title3",
				"Year":"3456",
				"imdbID":"tt24324",
				"Type":"movie"
			}
		]
	};

	beforeEach(module('omdb'));

	beforeEach(module('resultsModule'));

	var $controller;
	var $q;
	var $rootScope;
	var omdbApi;

	beforeEach(inject(function(_$controller_,_$q_,_$rootScope_,_omdbApi_) {

		$q = _$q_;
		$rootScope = _$rootScope_;
		omdbApi = _omdbApi_;

		spyOn(omdbApi,'search').and.callFake(function() {
			var deferred = $q.defer();
			deferred.resolve(results);
			return deferred.promise;
		});

		$controller = _$controller_('ResultsController');
	}));

	it('should load search results', function() {
		$rootScope.$apply();
		expect($controller.results[0].Title).toBe(results.Search[0].Title);
		expect($controller.results[1].Title).toBe(results.Search[1].Title);
		expect($controller.results[2].Title).toBe(results.Search[2].Title);
		expect(omdbApi.search).toHaveBeenCalledWith('star wars');
	});
});