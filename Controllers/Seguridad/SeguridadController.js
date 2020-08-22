app.controller('SeguridadController', ['$scope','ApiServices','$rootScope', function ($scope, ApiServices, $rootScope){
    $rootScope.session();
    //this.urlLocal = $rootScope.urlBase + "/seguridad/ObtenerMovimientos";
    this.urlProd = $rootScope.urlBaseProd + "/seguridad/ObtenerMovimientos";
    $scope.totalPagina = 10;
    $scope.paginaActual = 1;

    this.CargarHistorial = function (){
        var self = this;
        let datos = {
            "total": 10,
            "paginaActual":1
        }
        let response = ApiServices.getWS('POST', self.urlProd, datos);
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
    this.CargarHistorial();

    this.Anterior = () => {
        $scope.paginaActual--;
        ObtenerUsuarios();
    }
    this.Siguiente = () =>{
        $scope.paginaActual++;
        ObtenerUsuarios();
    }



}]);
