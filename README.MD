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

## When vs. Expect

### When

* Black-box testing
* Best for Working with Data
* Use in Any Order
* Re-use Allowed

### Expect

* Strict Usage Testing
* Best for Testing Exact Usage
* Order Matters
* Re-use **No^t** Allowed