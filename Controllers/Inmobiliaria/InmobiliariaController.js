app.controller('InmobiliariaController',["$scope","$state", "$http", "ApiServices", function ($scope, $state, $http, ApiServices) {
    let urlApiDaniel = 'https://localhost:44312/Api/Inmuebles';
    //let urlApiJuancho = '';

    $scope.agregarInmueble = ()=>{
        $state.go('agregarInmueble');
    };

    //llamando al servicio que devuelve una promesa con los datos de inmuebles.
    var response = ApiServices.getAll('GET',urlApiDaniel);
    response.then(function (datos) {
        console.log(datos);
        $scope.inmuebles = datos;
    })
    response.catch(function (error) {
        console.error(error)
    });


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