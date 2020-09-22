app.controller('NotarioController',['$scope','ApiServices', '$rootScope', function ($scope, ApiServices, $rootScope) {
    $rootScope.session();
    $scope.form = {};
    var urlApi = $rootScope.urlBase + "/Notarios";
    $scope.total = 10;
    $scope.paginaActual = 1;

    ObtenerListado = () => {
        let datos = { "total": $scope.total, "paginaActual": $scope.paginaActual};
        let response = ApiServices.getWS('POST', urlApi + "/ObtenerNotarios", datos);
        response.then(function (res) {
            console.log(res);
            $scope.listado = res;
            res.forEach( (item) => {
                let total = (item.cantidad/$scope.total);
                $scope.paginas = Math.ceil(total);
            });
        })
        response.catch(function (error) {
            console.error(error);
        });
    };
    ObtenerListado();
    $scope.Siguiente = () =>{
      $scope.paginaActual++;
      ObtenerListado();
    };
    $scope.Anterior = () => {
        $scope.paginaActual--;
        ObtenerListado();
    };

    $scope.eliminar = (id) =>
    {
        swal({
            title: "Sistema",
            text: "Está seguro de eliminar.?",
            icon: "warning",
            buttons: ["Cancelar","Eliminar"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let response = ApiServices.getWS('DELETE', urlApi + "/EliminarNotario/" + id);
                    response.then(function (res) {
                        if(res.exito){
                            swal({
                                title: "Sistema",
                                text: res.mensaje,
                                icon: "success",
                                button: "Entendido!",
                            });
                            ObtenerListado();
                        }
                        else{
                            swal({
                                title: "Sistema",
                                text: res.mensaje,
                                icon: "warning",
                                button: "Entendido!",
                            });
                        }
                    })
                    response.catch(function (error) {
                        console.error(error);
                    });
                }
            });
    };

    closeModal = (action) => {
        switch (action) {
            case 'delete':
                $("#deleteModal").modal('hide');//ocultamos el modal
                $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
                $('.modal-backdrop').remove();//eliminamos el backdrop del modal
                break;
            case 'add':
                $("#addModal").modal('hide');//ocultamos el modal
                $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
                $('.modal-backdrop').remove();//eliminamos el backdrop del modal
                break;
            case 'update':
                $("#editModal").modal('hide');//ocultamos el modal
                $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
                $('.modal-backdrop').remove();//eliminamos el backdrop del modal
                break;
        }
    };
}]);
