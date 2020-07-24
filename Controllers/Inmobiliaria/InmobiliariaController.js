app.controller('InmobiliariaController',['$scope','$state', '$http', 'ApiServices', '$rootScope', function ($scope, $state, $http, ApiServices, $rootScope) {
    //let urlApiLocal = $rootScope.urlBase + '/Inmuebles/ObtenerInmuebles';
    let urlApiProd = $rootScope.urlBaseProd + '/Inmuebles/ObtenerInmuebles';
    $rootScope.session();
    $scope.totalPagina = 20;
    $scope.paginaActual = 1;

    //llamando al servicio que devuelve una promesa con los datos de inmuebles.
    ObtenerInmuebles = () => {
        console.log("Hola");
        var datos = {
            "total": $scope.totalPagina,
            "paginaActual": $scope.paginaActual
        }
        var response = ApiServices.getWS('POST', urlApiProd, datos);
        response.then(function(data){
            $scope.inmuebles = data;
    
        })
        response.cath(function(eror){
            console.log(error);
        })
        /*$scope.spinner = true;
        console.log($scope.paginaActual);
        var datos = {
            "total": $scope.totalPagina,
            "paginaActual": $scope.paginaActual
        }
        var response =ApiServices.getWS('POST', urlApiProd, datos);
        response.then(function(datos){
            console.log(datos);
            $scope.inmuebles = datos;
            datos.forEach(ten => {
                console.log(ten.catidad);
                let total = (ten.cantidad/$scope.totalPagina);
                $scope.paginas = Math.ceil(total);                
            });
            $scope.spinner = false;
        })
        response.cath(function(error){
            console.error(error);
            $scope.spinner = false;
        });*/
    };
    
   ObtenerInmuebles();

           /* $scope.inmobiliaria = ()=>{
                $state.go('agregarInmueble');
            };

            $scope.Anterior = () => {
                $scope.paginaActual--;
                ObtenerInmuebles();
            }
            $scope.Siguiente = () =>{
                $scope.paginaActual++;
                ObtenerInmuebles();
            }*/

        /* var datos = {
                "total":10,
                "paginaActual":9
            }
            var response = ApiServices.getWS('POST',urlApiProd, datos);
            response.then(function (datos) {
                console.log(datos);
                $scope.inmuebles = datos;
                $scope.spinner = false;
            })
            response.catch(function (error) {
                console.error(error);
                $scope.spinner = false;
            });/*/

            $scope.agregarInmueble = ()=>{
                $state.go('agregarInmueble');
            };

}]);