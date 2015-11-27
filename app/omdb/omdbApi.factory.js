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

        function search(query) {
            var deferred = $q.defer();
            $http.get(baseUrl + 's=' + encodeURIComponent(query)).
                success(function(data) {
                    deferred.resolve(data);
                });

            return deferred.promise;
        }

        function find(id) {
            var deferred = $q.defer();
            $http.get(baseUrl + 'i=' + id).
                success(function(data) {
                    deferred.resolve(data);
                });

            return deferred.promise;
        }
    }
})();