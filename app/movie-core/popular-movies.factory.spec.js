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
		$httpBackend.verifyNoOutstandingRequest(); //check there are no missing requests to flush
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
		
		$httpBackend.expectGET('popular/tt0076759')
			.respond(200);

		PopularMovies.get({ movieId: 'tt0076759'});

		expect($httpBackend.flush).not.toThrow();
	});

	it('should update popular movie', function() {
		$httpBackend.expectPUT('popular')
			.respond(200);

		var popularMovie = new PopularMovies({
				movieId: 'tt0076759',
				description: 'Great movie!'
			});

		popularMovie.$update();

		expect($httpBackend.flush).not.toThrow();
		expect()
	});

	it('should authenticate requests (only example)', function() {

		//'{"authToken": "teddybear","Accept": "application/json, text/plain, */*"}'
		// var expectedHeaders = function(headers) {

		// 	dump(angular.mock.dump(headers)); 
		// 	return angular.fromJson(headers).authToken === 'teddybear';
		// };
		 
		var expectedHeaders = {"authToken": "teddybear","Accept": "application/json, text/plain, */*"};

		// the method accepts a function or an object, above we can see both approachs
		// if we are using an object we can decide which params we want to check
		$httpBackend.expectGET('popular/tt0076759', expectedHeaders)
			.respond(200);

		PopularMovies.get({movieId: 'tt0076759'});

		$httpBackend.flush(1);
	});

	it('should authenticate ALL requests', function() {

		//'{"authToken": "teddybear","Accept": "application/json, text/plain, */*"}'
		var headerData = function(headers) {
			return headers.authToken === 'teddybear';
		}

		var matchAny = /.*/;

		$httpBackend.whenGET(matchAny, headerData)
		.respond(200);

		$httpBackend.expectPOST(matchAny, matchAny, headerData)
		.respond(200);

		$httpBackend.expectPUT(matchAny, matchAny, headerData)
		.respond(200);

		$httpBackend.expectDELETE(matchAny, headerData)
		.respond(200);

		var popularMovie = new PopularMovies({
				movieId: 'tt0076759',
				description: 'Great movie!'
			});

		PopularMovies.query();
		PopularMovies.get({id: 'tt0076759'});

		new PopularMovies(popularMovie).$save();
		new PopularMovies(popularMovie).$update();
		new PopularMovies(popularMovie).$remove();

		$httpBackend.flush(1); //for the GET
		$httpBackend.flush(1); //for the GET
		$httpBackend.flush(1); //for the expect
		$httpBackend.flush(1); //for the expect
		$httpBackend.flush(1); //for the expect

		//there's another function called for $httpBackend for the reuse of 'expects'
		// $httpBackend.resetExpectations()
		
	});
});