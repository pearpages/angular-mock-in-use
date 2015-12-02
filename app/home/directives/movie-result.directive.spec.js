describe('Movie Result Directive', function() {

	var result = {
		Poster: 'http://localhost/image.jpg',
		Title: 'Star Wars: Episode IV - A New Hope',
		Director: 'George Lucas',
		Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
		Released: '25 May 1977',
		Genre: 'Action, Adventure, Fantasy'
	};
	
	var $compile;
	var $rootScope;

	beforeEach(module('home'));

	beforeEach(inject(function(_$compile_,_$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('should output movie result to expected HTML format', function() {
		$rootScope.result = result;
		var element;
		element = $compile('<movie-result result="result"></movie-result>')($rootScope);
		$rootScope.$digest(); //so we compile against the $rootScope!
		expect(element.html()).toBe('<div class="ng-binding">Star Wars: Episode IV - A New Hope</div>');
	});
})