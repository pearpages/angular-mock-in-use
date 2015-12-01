# learning-angular-mock

* Jasmine (test Framework)
* Karma (test Runner)
    - karma-jasmine
    - karma-chrome-launcher
    - karma-phantomjs-launcher
* ngMock (Angular library)
* PhantomJS (browser)

## The Open Movie Database
[http://www.omdbapi.com](http://www.omdbapi.com)

## Karma Conf

```javascript
    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      'app/**/*.spec'
    ],

    //...
    
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
```

## Testing API ($http)

### When vs. Expect

#### When

* Black-box testing
* Best for Working with Data
* Use in Any Order
* Re-use Allowed

#### Expect

* Strict Usage Testing
* Best for Testing Exact Usage
* Order Matters
* Re-use **No^t** Allowed

## Testing Controllers ($controller)

ngMock $controller Service 

```javascript
$controller(constructor, locals, [bindings]);

//constructor argument
  // a string
  $controller('GreetingController', locals, [bindings]);
  // a function that creates the new controller
  $controller(getInstance(), locals, [bindings]);

//locals argument
  //accepts an object that maps by key names to the arguments of the controller constructor function
  //.e.g. $scope, $http, some service
  $controller(constrructor, {$scope: myScope}, [bindings])

//bindings
  //accepts an object, where the values of the object e.g. properties or functions, 
  //will be bound to the controller's this bindings.
  $controller(constructor, locals, {name: 'Brad'})
```

## $imeout

Is an Angular's wrapper for **window.setTimeout**.

```javascript
//$timeout([fn], [delay], [invokeApply], [pass]);

//first argument is the function we are going to execute
//delay in ms
//if we are updateing the view $apply
//parameters to be executed in the function

var timeout = $timeout(function(msg) {
  console.log(msg);
}, 1000, false, 'I was delayed');

$timeout.cancel(timeout);
```

### Testing $timeout

- Asynchronous code is difficult to test
- Dellays will make test execution slow

ngMock $timeout

```javascript
$timeout.flush([delay]);
$timoeut.verifyNoPendingTasks();
```