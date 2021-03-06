app.controller('NotarioController',['$scope','ApiServices', '$rootScope', function ($scope, ApiServices, $rootScope) {
    $rootScope.session();
    $scope.form = {};
    $scope.TipoNotarios = [
            {
                "id":"A",
                "descripcion": "Adjunto"
            },
            {
                "id":"B",
                "descripcion": "Titular"
            }
        ];
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
    ObtenerMunicipios = () =>{
        let response = ApiServices.getWS('GET', $rootScope.urlBase + "/Catalogos/ObtenerMunicipios");
        response.then(function (res) {
            $scope.Municipios = res;
        })
        response.catch(function (error) {
            console.error(error);
        });
    };
    ObtenerListado();
    ObtenerMunicipios();
    $scope.Siguiente = () =>{
      $scope.paginaActual++;
      ObtenerListado();
    };
    $scope.Anterior = () => {
        $scope.paginaActual--;
        ObtenerListado();
    };

    $scope.agregar = (form) =>{
        console.log(form)
        if(form){
            let response = ApiServices.getWS('POST', urlApi + "/InsertarNotario", $scope.form);
            response.then(function (res) {
                console.log(res);
                closeModal('add');
                LimpiarDatos();
                if(res.exito)
                {
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
                closeModal('add');
            });
        }
        else{
            swal({
                title: "Sistema",
                text: "Faltan datos por completar.!",
                icon: "warning",
                button: "Entendido!",
            });
        }
    };

    $scope.editar = (id) =>{
        let response = ApiServices.getWS('GET', urlApi + "/ObtenerNotario/" + id);
        response.then(function (res){
            $scope.form = res;

        })
        response.catch(function (error) {
            console.log(error);
        })
    };

    $scope.modificar = (form) =>
    {
        if(form){
            let response = ApiServices.getWS('POST', urlApi + "/ModificarNotario", $scope.form);
            response.then(function (res){
                closeModal('update');
                LimpiarDatos();
                if(res.exito)
                {
                    swal({
                        title: "Sistema",
                        text: res.mensaje,
                        icon: "success",
                        button: "Entendido!",
                    });
                    ObtenerListado();
                }
            })
            response.catch(function (error) {
                swal({
                    title: "Sistema",
                    text: res.mensaje,
                    icon: "danger",
                    button: "Entendido!",
                });
            });
        }
        else{
            swal({
                title: "Sistema",
                text: "Faltan datos por completar.!",
                icon: "warning",
                button: "Entendido!",
            });
        }
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

    LimpiarDatos = () =>{
        $scope.form.nombre= "";
        $scope.form.apellidoPaterno = "";
        $scope.form.apellidoMaterno = "";
        $scope.form.notaria = "";
        $scope.form.direccion = "";
        $scope.form.telefono = "";
        $scope.form.municipio = "";
        $scope.form.tipoNotario = "";
        $scope.form.claveAnterior = "";
    };
}]);
