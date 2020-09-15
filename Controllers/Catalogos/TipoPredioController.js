app.controller('TipoPredioController', ['$scope','ApiServices','$rootScope', function ($scope, ApiServices, $rootScope){
    $rootScope.session();
    var urlApi = $rootScope.urlBase + "/Catalogos";
    $scope.form = {};

    ObtenerListado = () => {
        let response = ApiServices.getWS('GET', urlApi + "/ObtenerTipoPredios");
        response.then(function (datos) {
            console.log(datos);
            $scope.listado = datos;
        })
        response.catch(function (error) {
            console.error(error);
        });
    }
    ObtenerListado();

    $scope.agregar = (form) =>{
        if(form){
            let response = ApiServices.getWS('POST', urlApi + "/InsertarTipoPredio", $scope.form);
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
        let response = ApiServices.getWS('GET', urlApi + "/ObtenerTipoPredio/" + id);
        response.then(function (res){
            $scope.form.clave = res.clave;
            $scope.form.descripcion = res.descripcion;
        })
        response.catch(function (error) {
            console.log(error);
        })
    };

    $scope.modificar = (form) =>{
        if(form){
            let response = ApiServices.getWS('POST', urlApi + "/ModificarTipoPredio", $scope.form);
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
            response.catch(function () {

            });
        }else{
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
                    let response = ApiServices.getWS('DELETE', urlApi + "/EliminarTipoPredio/" + id);
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
        $scope.form.clave= "";
        $scope.form.descripcion = "";
    };

}]);
