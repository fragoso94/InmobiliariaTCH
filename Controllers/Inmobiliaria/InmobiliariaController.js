app.controller('InmobiliariaController',['$scope','$state', '$http', 'ApiServices', '$rootScope', function ($scope, $state, $http, ApiServices, $rootScope) {
    let urlApiLocal = $rootScope.urlBase + '/Inmuebles';
    let urlApiProd = $rootScope.urlBaseProd + '/Inmuebles';
    $rootScope.session();

    //llamando al servicio que devuelve una promesa con los datos de inmuebles.
    $scope.spinner = true;
    var response = ApiServices.getWS('GET',urlApiProd);
    response.then(function (datos) {
        console.log(datos);
        $scope.inmuebles = datos;
        $scope.spinner = false;
    })
    response.catch(function (error) {
        console.error(error);
        $scope.spinner = false;
    });

    $scope.agregarInmueble = ()=>{
        $state.go('agregarInmueble');
    };
    /*ObtenerInmuebles = () =>{
        var datos =  $http({method: 'GET', url: urlApiDaniel});
        datos.then(function(response) {
            //console.log(response);
            $scope.datos = response.data;
            console.log($scope.datos);
        }, function(response) {
            console.error(response);
        });
    };
    ObtenerInmuebles();*/

}]);