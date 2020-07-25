app.controller('ListarUsuarioController',['$scope','$state', '$http', 'ApiServices', '$rootScope', function ($scope, $state, $http, ApiServices, $rootScope) {
    //let urlApiLocal = $rootScope.urlBase + '/Usuarios/ObtenerUsuarios';
    let urlApiProd = $rootScope.urlBaseProd + '/Usuarios/ObtenerUsuarios';
    $rootScope.session();
    //propiedades de la paginación
    $scope.totalPagina = 8;
    $scope.paginaActual = 1;

    //llamando al servicio que devuelve una promesa con los datos de inmuebles.
    ObtenerUsuarios = () => {
        $scope.spinner = true;
        console.log($scope.paginaActual);
        var datos = {
            "total": $scope.totalPagina,
            "paginaActual": $scope.paginaActual
        }
        var response = ApiServices.getWS('POST',urlApiProd, datos);
        response.then(function (datos) {
            console.log(datos);
            $scope.Usuarios = datos;
            datos.forEach( item => {
               console.log(item.cantidad);
               let total = (item.cantidad/$scope.totalPagina);
               $scope.paginas = Math.ceil(total);
            });
            $scope.spinner = false;
        })
        response.catch(function (error) {
            console.error(error);
            $scope.spinner = false;
        });
    };
    ObtenerUsuarios();

    $scope.Anterior = () => {
        $scope.paginaActual--;
        ObtenerUsuarios();
    }
    $scope.Siguiente = () =>{
        $scope.paginaActual++;
        ObtenerUsuarios();
    }

    $scope.agregarUsuario = () => {
        $state.go('agregarUsuario');
    }

    $scope.alerta = () => {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
    }
}]);