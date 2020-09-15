app.controller('SeguridadController', ['$scope','ApiServices','$rootScope', function ($scope, ApiServices, $rootScope){
    $rootScope.session();
    this.urlLocal = $rootScope.urlBase + "/seguridad";
    this.urlProd = $rootScope.urlBaseProd + "/seguridad";
    $scope.totalPagina = 10;
    $scope.paginaActual = 1;
    let IdUsuario = localStorage.getItem('idUsuario');

    CargarHistorial = () => {
        var self = this;
        let datos = {
            "total": $scope.totalPagina,
            "paginaActual": $scope.paginaActual
        }
        let response = ApiServices.getWS('POST', self.urlLocal + "/ObtenerMovimientos/" + IdUsuario, datos);
        response.then( result =>{
            console.log(result)
            $scope.movimientos = result;
            result.forEach( item => {
                let total = (item.cantidad/$scope.totalPagina);
                $scope.paginas = Math.ceil(total);
            });
        }).catch( error =>{
            console.log(error);
        });
    }
    CargarHistorial();

    $scope.Anterior = () => {
        $scope.paginaActual--;
        CargarHistorial();
    }
    $scope.Siguiente = () =>{
        $scope.paginaActual++;
        CargarHistorial();
    }



}]);
