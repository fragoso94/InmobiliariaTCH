app.controller('TipoInmuebleController', ['$scope', 'ApiServices','$rootScope', '$state', function ($scope, ApiServices, $rootScope, $state){
    $rootScope.session();
    var urlApi = $rootScope.urlBase + "/Catalogos";

    ObtenerGrupos = () =>{
        let response = ApiServices.getWS('GET', urlApi + "/ObtenerGruposInmuebles");
        response.then(function (res){
            $scope.GruposTipoInmueble = res;
        })
        response.catch(function (error) {
            console.log(error);
        })
    }
    ObtenerGrupos();

    $scope.irDetalle = (id) =>{
        console.log(id);
        $state.go('detalleTipoInmueble', {"clave": id});
    }

}]);
