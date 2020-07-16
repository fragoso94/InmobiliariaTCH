app.controller('InmobiliariaController',["$scope","$state", "$http", function ($scope, $state, $http) {


    $scope.agregarInmueble = ()=>{
        $state.go('agregarInmueble');
    };

    let urlApi = 'https://localhost:44312/Api/Inmuebles';
    ObtenerInmuebles = () =>{
        $http({method: 'GET', url: urlApi}).
        then(function(response) {
            //console.log(response);
            $scope.inmuebles = response;
            console.log($scope.inmuebles);
        }, function(response) {
            console.error(response);
        });
    };
    ObtenerInmuebles();


}]);