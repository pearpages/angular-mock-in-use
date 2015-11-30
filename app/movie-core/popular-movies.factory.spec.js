describe('MovieCore', function() {
	var PopularMovies;
	var $httpBackend;

	beforeEach(module('movieCore')); //angular.mock.module

	beforeEach(inject(function(_PopularMovies_, _$httpBackend_) {
		PopularMovies = _PopularMovies_;
		$httpBackend = _$httpBackend_;

	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
	});

	it('should create popular movie', function() {

		// '{"movieId":"tt0076759","description":"Great movie!"}'
		var expectedData = function(data) {
			// dump(angular.mock.dump(data)); //remember that dump 'prints' in the console and angular.mock.dump formats JSON
			return angular.fromJson(data).movieId === 'tt0076759';
		};

		// "/./" <-- goes for regular expression
		$httpBackend.expectPOST(/./, expectedData) //we can pass objects: which must be exact, strings which must be exacts and regular expressions.
		.respond(201); //the resource has been created

		var popularMovie = new PopularMovies({
				movieId: 'tt0076759',
				description: 'Great movie!'
			});

		popularMovie.$save();

		expect($httpBackend.flush).not.toThrow();
	});

	it('should get popular movie by id', function() {
		//we use this way to get the url in the command line so lately paste it in the proper test
		// $httpBackend.expectGET(function(url) {
		// 	dump(url);
		// 	return true;
		// }).respond(200);
		
		$httpBackend.expectGet('popular/tt0076759')
			.respond(200);

		PopularMovies.get({ movieId: 'tt0076759'});

		expect($httpBackend.flush).not.toThrow();
	});
});