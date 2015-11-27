(function() {
    'use strict';

    angular.module("omdb")
    .factory('omdbApi',['$http','$q',omdbApi]);

    function omdbApi($http, $q) {
        var baseUrl = 'http://www.omdbapi.com/?v=1&';

        return{
            search: search,
            find: find
        };

        function httpPromise (url) {
            var deferred = $q.defer();
            $http.get(url).
                success(function(data) {
                    deferred.resolve(data);
                });
            return deferred.promise;
        }

        function search(query) {
            return httpPromise(baseUrl + 's=' + encodeURIComponent(query));
        }

        function find(id) {
            return httpPromise(baseUrl + 'i=' + id);
        }
    }
})();