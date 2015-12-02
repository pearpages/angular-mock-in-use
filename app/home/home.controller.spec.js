describe('Home Controller', function() {
	
	var results = [
		{
			"Title":"Star Wars: Episode IV - A New Hope",
			"imdbID":"tt0076759"
		},
		{
			"Title":"Star Wars: Episode V - The Empire STrikes Back",
			"imdbID":"tt0080684"
		},
		{
			"Title":"Star Wars: Episode VI - Return of the Jedi",
			"imdbID":"tt0086190"
		}
	];

	var controller;

	beforeEach(module('myApp'));

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_('HomeController');
	}));

	it('should rotate movies every 5 seconds', function() {
		//should have a default movie
		expect($controller.result.Title).toBe(results[0].Title);
		//should update after 5 seconds
		expect($controller.result.Title).toBe(results[1].Title);
		//should update after 5 seconds
		expect($controller.result.Title).toBe(results[2].Title);
		//should return to default
		expect($controller.result.Title).toBe(results[0].Title);
	});
});