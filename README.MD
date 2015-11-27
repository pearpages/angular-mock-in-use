# learning-angular-mock

* Jasmine (test Framework)
* Karma (test Runner)
* ngMock (Angular library)

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