app.controller('InmobiliariaController',["$scope","$state", function ($scope, $state) {


    $scope.agregarInmueble = ()=>{
        $state.go('agregarInmueble');
    };

}]);