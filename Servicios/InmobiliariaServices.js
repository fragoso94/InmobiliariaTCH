app.factory('ApiServices', function ($http, $q, $location) {
    let idUsuario = null;
    let usuario = "";
    let estado = 0;
    let token = "";

    let getToken = localStorage.getItem('token');
    let accessToken = "Bearer " + getToken;
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
                case 'LOGIN':
                    $http({
                        method: 'POST',
                        url: urlApi,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: datos})
                        .then(function(response) {
                            //defered.resolve(response.data);
                            //console.log(response.data);
                            if(response.data.estado == 1){
                                idUsuario = response.data.idUsuario;
                                usuario = response.data.username;
                                estado = response.data.estado;
                                token = response.data.token;
                                console.log(token);
                                $location.path('/home');
                            }else{
                                swal({
                                    title: "IPE LE INFORMA",
                                    text: response.data.mensaje,
                                    icon: "warning",
                                    button: "Entendido",
                                });
                            }

                        }, function(err) {
                            //defered.reject(err);
                            console.error(err);
                        });
                    break;
                case 'POST':
                    $http({
                        method: method,
                        url: urlApi,
                        headers: {
                            'Authorization': accessToken,
                            'Content-Type': 'application/json'
                        },
                        data: datos})
                        .then(function(response) {
                            defered.resolve(response.data);
                        }, function(err) {
                            defered.reject(err);
                        });
                    return promise;
                case 'DELETE':
                    $http.delete(urlApi, {
                        headers:{
                            'Authorization': accessToken,
                            'Content-Type': 'application/json'
                        },
                        data: datos
                    })
                    .then(function(response) {
                        defered.resolve(response.data);
                    }, function(err) {
                        defered.reject(err);
                    });
                    return promise;
                default: break;
            }
        },

        logout: function(){
            //sessionService.destroy('user');
            $location.path('/');
        },

        islogged: function(){
            checkSession = {
                "idUsuario": idUsuario,
                "usuario" : usuario,
                "estado" : estado,
                "token" : token
            }
            return checkSession;
        },
    }
});