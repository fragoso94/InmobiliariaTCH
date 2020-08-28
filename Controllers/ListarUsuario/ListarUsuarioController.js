app.controller('ListarUsuarioController',['$scope','$state', '$http', 'ApiServices', '$rootScope', function ($scope, $state, $http, ApiServices, $rootScope) {
    let urlApiLocal = $rootScope.urlBase + '/Usuarios/ObtenerUsuarios';
    let urlApiProd = $rootScope.urlBaseProd + '/Usuarios/ObtenerUsuarios';
    $rootScope.session();
    $scope.ID_USUARIO = localStorage.getItem('idUsuario');
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
        var response = ApiServices.getWS('POST', urlApiLocal, datos);
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

    $scope.EliminarUsuario = (id) => {
        console.log(id)
        swal({
            title: "Patrimonio del Estado",
            text: "¿Estás seguro de Eliminar el usuario?",
            icon: "warning",
            buttons: ['Cancelar', 'Aceptar'],
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                let respuesta = ApiServices.getWS('DELETE', $rootScope.urlBase + "/Usuarios/EliminarUsuario/"+id);
                respuesta.then(function (response){
                    //console.log(response);
                    if(response.exito){
                        ObtenerUsuarios();
                        swal({
                            title: "Instituto del Patrimonio del Estado",
                            text: response.mensaje,
                            icon: "success",
                            button: "Entendido",
                        });
                    }

                })
                respuesta.catch(function(error){
                    //console.log(error.data);
                    let errores = error.data;
                    console.log(errores)
                });
            } else {
                close();
            }
        });

    }

    $scope.generatePdf = () => {
        var doc = new jsPDF();

        doc.setFontSize(22);
        doc.text(20, 20, 'Reporte de Articulos');

        doc.setFontSize(16);
        doc.text(20, 30, 'This is some normal sized text underneath.');
        doc.save('reporteArticulos.pdf');
        // var string = doc.output('datauristring');
        // var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
        // var x = window.open();
        // x.document.open('','Listado');
        // x.document.write(iframe);
        // x.document.close();
    }

}]);
