app.factory('ApiServices', function ($http, $q, $location) {
    let usuario = "";
    let estado = 0;

    return{

        getWS: function (method, urlApi, datos = {}) {
            var defered = $q.defer();
            var promise = defered.promise;

            switch (method) {
                case 'GET':
                    $http({method: method, url: urlApi})
                        .then(function(response) {
                            defered.resolve(response.data);
                        }, function(err) {
                            defered.reject(err);
                        });
                    //break;
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
                            //defered.resolve(response.data);
                            console.log(response.data);
                            if(response.data.estado == 1){
                                usuario = response.data.username;
                                estado = response.data.estado;
                                $location.path('/inmobiliaria');
                            }
                        }, function(err) {
                            //defered.reject(err);
                            console.error(err);
                        });
                    break;
                    //return promise;
                default: break;
            }
        },

        logout: function(){
            //sessionService.destroy('user');
            $location.path('/');
        },

        islogged: function(){
            checkSession = {
                "usuario" : usuario,
                "estado" : estado
            }
            return checkSession;
        },
    }
});