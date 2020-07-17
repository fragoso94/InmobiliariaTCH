app.factory('ApiServices', function ($http, $q) {
    return{

        getAll: function (method, urlApi) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http({method: method, url: urlApi})
            .then(function(response) {
                //console.log(response.data)
                defered.resolve(response.data);
            }, function(err) {
                defered.reject(err);
            });
            return promise;
        },
    }
});