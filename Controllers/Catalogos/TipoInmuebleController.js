app.controller('TipoInmuebleController', ['$scope','ApiServices','$rootScope', function ($scope, ApiServices, $rootScope){
    $rootScope.session();
    var urlApi = $rootScope.urlBase + "/Catalogos/ObtenerTipoInmuebles";

    ObtenerListado = () => {
        let response = ApiServices.getWS('GET', urlApi);
        response.then(function (datos) {
            console.log(datos);
            $scope.listado = datos;
        })
        response.catch(function (error) {
            console.error(error);
        });
    }
    ObtenerListado();
}]);
