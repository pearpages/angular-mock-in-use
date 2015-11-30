describe('MovieCore', function() {
	var PopularMovies;
	var $httpBackend;

	beforeEach(module('movieCore'));

	beforeEach(inject(function(_PopularMovies_, _$httpBackend_) {
		PopularMovies = _PopularMovies_;
		$httpBackend = _$httpBackend_;

	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
	});

	it('should create popular movie', function() {
		var popularMovie = new PopularMovies({
				movieId: 'tt0076759',
				description: 'Great movie!'
			});

		popularMovie.$save();
	});
});