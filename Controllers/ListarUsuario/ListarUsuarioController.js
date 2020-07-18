app.controller('ListarUsuarioController',['$scope','$state', '$http', 'ApiServices', '$rootScope', function ($scope, $state, $http, ApiServices, $rootScope) {
    let urlApiLocal = $rootScope.urlBase + '/Usuarios';
    let urlApiProd = $rootScope.urlBaseProd + '/Usuarios';
    $rootScope.session();

    //llamando al servicio que devuelve una promesa con los datos de inmuebles.
    var response = ApiServices.getWS('GET',urlApiProd);
    response.then(function (datos) {
        console.log(datos);
        $scope.Usuarios = datos;
    })
    response.catch(function (error) {
        console.error(error)
    });

    $scope.listarUsuario = ()=>{
        $state.go('listaUsuario');
    };
    
}]);