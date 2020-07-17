app.factory('ApiServices', function ($http, $q) {
    return{

        getWS: function (method, urlApi, datos = {}) {
            var defered = $q.defer();
            var promise = defered.promise;
            console.log(datos);
            switch (method) {
                case 'GET':
                    $http({method: method, url: urlApi})
                        .then(function(response) {
                            //console.log(response.data)
                            defered.resolve(response.data);
                        }, function(err) {
                            defered.reject(err);
                        });
                    return promise;
                case 'POST':
                    $http({
                        method: method,
                        url: urlApi,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: datos})
                        .then(function(response) {
                            //console.log(response.data)
                            defered.resolve(response.data);
                        }, function(err) {
                            defered.reject(err);
                        });
                    return promise;
                default: break;
            }
        },
    }
});