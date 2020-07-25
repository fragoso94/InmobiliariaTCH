app.controller('InmobiliariaController',['$scope','$state', '$http', 'ApiServices', '$rootScope', function ($scope, $state, $http, ApiServices, $rootScope) {
    //let urlApiLocal = $rootScope.urlBase + '/Inmuebles/ObtenerInmuebles';
    let urlApiProd = $rootScope.urlBaseProd + '/Inmuebles/ObtenerInmuebles';
    $rootScope.session();
    $scope.totalPagina = 20;
    $scope.paginaActual = 1;

    //llamando al servicio que devuelve una promesa con los datos de inmuebles.
    ObtenerInmuebles = () => {        
        var datos = {
            "total": $scope.totalPagina,
            "paginaActual": $scope.paginaActual
        }
        var response = ApiServices.getWS('POST', urlApiProd, datos);
        response.then(function(data){
            $scope.inmuebles = data;
            data.forEach(item => {
                let total = (item.cantidad/$scope.totalPagina);
                $scope.paginas = Math.ceil(total);
            })
        })
        response.catch(function(error){
            console.log(error);
        })
    };
    
   ObtenerInmuebles();
    $scope.Anterior = () => {
        $scope.paginaActual--;
        ObtenerInmuebles();
    }
    $scope.Siguiente = () =>{
        $scope.paginaActual++;
        ObtenerInmuebles();
    }
    $scope.agregarInmueble = ()=>{
        $state.go('agregarInmueble');
    };


}]);