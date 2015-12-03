describe('Movie Result Directive', function() {

	var result = {
		Poster: 'http://localhost/image.jpg',
		Title: 'Star Wars: Episode IV - A New Hope',
		Director: 'George Lucas',
		Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
		Released: '25 May 1977',
		Genre: 'Action, Adventure, Fantasy',
		Plot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam fugit vero, autem asperiores accusamus ea unde magni, distinctio excepturi, minus amet repudiandae debitis nulla voluptatem earum deleniti error reiciendis culpa ut incidunt sunt. Omnis at minima non porro ullam hic delectus beatae eligendi rerum voluptatibus ratione tempora modi vitae architecto doloribus molestiae, nesciunt aperiam doloremque magni vero alias corporis. Ea cupiditate nostrum aliquid, repellendus, voluptate numquam expedita quod quasi. Dolore facere odit eaque quas dolorum, omnis illo minima mollitia minus ratione, alias, rem excepturi qui aliquid doloremque odio suscipit. Culpa laboriosam eveniet doloremque veniam quae sit quia unde, tempora!'
	};
	
	//everywhere there's an ng-xxx attr or vmd.xxx ng-binding will be expected!!!
	var expectedHtml = [
		'<div class="row">',
			'<div class="col-sm-4">',
				'<img ng-src="http://localhost/image.jpg" alt="Star Wars: Episode IV - A New Hope" width="220" src="http://localhost/image.jpg">',
			'</div>',
			'<div class="col-sm-8">',
				'<h3 class="ng-binding">Star Wars: Episode IV - A New Hope</h3>',
				'<p class="ng-binding">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam fugit vero, autem asperiores accusamus ea unde magni, distinctio excepturi, minus amet repudiandae debitis nulla voluptatem earum deleniti error reiciendis culpa ut incidunt sunt. Omnis at minima non porro ullam hic delectus beatae eligendi rerum voluptatibus ratione tempora modi vitae architecto doloribus molestiae, nesciunt aperiam doloremque magni vero alias corporis. Ea cupiditate nostrum aliquid, repellendus, voluptate numquam expedita quod quasi. Dolore facere odit eaque quas dolorum, omnis illo minima mollitia minus ratione, alias, rem excepturi qui aliquid doloremque odio suscipit. Culpa laboriosam eveniet doloremque veniam quae sit quia unde, tempora!</p>',
				'<p class="ng-binding"><strong>Director:</strong> George Lucas</p>',
				'<p class="ng-binding"><strong>Actors:</strong> Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing</p>',
				'<p class="ng-binding"><strong>Released:</strong> 25 May 1977 (38 years ago)</p>',
				'<p class="ng-binding"><strong>Genre:</strong> Action, Adventure, Fantasy</p>',
			'</div>',
		'</div>'
	].join('');

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
		element = $compile('<movie-result result="result"></movie-result>')($rootScope); //check $compile function and scope input param
		$rootScope.$digest(); //so we compile the template against the $rootScope!
		expect(element.html()).toBe(expectedHtml);
	});
})