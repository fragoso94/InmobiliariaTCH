app.controller('InmobiliariaController',['$scope','$state', '$http', 'ApiServices', '$rootScope', function ($scope, $state, $http, ApiServices, $rootScope) {
    let urlApiDaniel = $rootScope.urlBase + '/Inmuebles';
    //let urlApiJuancho = '';
    $rootScope.session();

    //llamando al servicio que devuelve una promesa con los datos de inmuebles.
    var response = ApiServices.getWS('GET',urlApiDaniel);
    response.then(function (datos) {
        console.log(datos);
        $scope.inmuebles = datos;
    })
    response.catch(function (error) {
        console.error(error)
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